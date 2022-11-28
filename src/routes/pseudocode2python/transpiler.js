// @ts-nocheck
String.prototype.replaceBetween = function(start, stop, substring) {
  const left = this.slice(0, start);
  const right = this.slice(stop + 1, this.length);
  return `${left}${substring}${right}`
};

String.prototype.blockify = function(r1, r2) {
  let opening = [];
  let closing = [];
  let brackets = [];

  for (let i = 0; i < this.length; i++) {
    if (r1.test(this[i])) {
      opening.push(i);
    }
    else if (r2.test(this[i])) {
      closing.push(i);
    }
  }

  for (let i = 0; i < opening.length; i++) {
    let count = 0;
    for (let j = opening[i] + 1; j < this.length; j++) {
      if (r1.test(this[j])) {
        count += 1;
      }
      else if (r2.test(this[j]) && count != 0) {
        count -= 1;
      }
      else if (r2.test(this[j]) && count == 0) {
        let start = opening[i];
        let stop = j;
        brackets.push([ start, stop, this.slice(start + 1, stop) ]);
        break
      }
    }
  }
  return brackets
}

// // // // // // // // // // // // // // // // // // // // // // // // // // //

function Operators(line)
{
  if (line.includes('AND')) {
    return Operators(line.replace('AND', 'and'));
  }
  else if (line.includes('OR')) {
    return Operators(line.replace('OR',  'or'));
  }
  else if (line.includes('NOT')) {
    return Operators(line.replace('NOT', 'not'));
  }
  else if (line.includes('^')) {
    return Operators(line.replace('^',   '**'));
  }
  else if (line.includes('MOD')) {
    return Operators(line.replace('MOD', '%'));
  }
  else if (line.includes('DIV')) {
    return Operators(line.replace('DIV', '//'));
  }
  return line;
}

function Commenting(line)
{
  if (line.includes('//')) {
    return Commenting( line.replace('//', '#') );
  }
  return line;
}

function Variables(line)
{
  const regex = /^(?:const|let|var)\s(.*?)$/;
  if (regex.test(line)) {
    return line.match(regex)[1];
  }
  return line;
}

// function InputOutput(line)
// {
//   return line;
// }

function Casting(line)
{
  // if (/str\((.*?)\)/.test(line)) {
  // }
  // if (/int\((.*?)\)/.test(line)) {
  // }
  // if (/float\((.*?)\)/.test(line)) {
  // }

  line = line.replaceAll('real(', 'float(');

  if (/bool\s*\((.*?)\)/.test(line)) {
    const parts = /bool\s*\((.*?)\)/.exec(line);
    const param = parts[1].replace(/'|"/g, '').trim();
    if (['True', 'true'].includes(param)) {
      return Casting( line.replaceAll(parts[0], 'True') );
    }
    else if (['False', 'false'].includes(param)) {
      return Casting( line.replaceAll(parts[0], 'False') );
    }
  }

  return line;
}

function StringHandlingOperations(line)
{
  if (/\)\.length/.test(line)) {
    let start = 0;
    let stop = line.indexOf(').length');

    let blocks = line.blockify(/\(/, /\)/);
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i][1] == stop) {
        start = blocks[i][0];
        break;
      }
    }

    let beforeBracket = null;
    for (let i = start - 1; i >= 0; i--) {
      if (/\w/.test(line[i])) {
        beforeBracket = i;
      }
      else {
        break;
      }
    }

    if (beforeBracket != null) {
      const ss = [beforeBracket, stop  + '.length'.length];
      const parts = /(.*?)\((.*?)\)\.length/.exec(line.slice(ss[0], ss[1] + 1));
      const py = `len(${parts[1]}(${parts[2]}))`;
      return StringHandlingOperations(line.replaceBetween(...ss, py));
    }
    else {
      const ss = [start, stop  + '.length'.length];
      const parts = /\((.*?)\)\.length/.exec(line.slice(ss[0], ss[1] + 1));
      const py = `len(${parts[1]})`;
      return StringHandlingOperations(line.replaceBetween(...ss, py));
    }
  }
  else if (/\.length/.test(line)) {
    const parts = /([\w'"]+)\.length/.exec(line);
    const ss = [parts.index, parts.index - 1 + parts[0].length];
    const py = `len(${parts[1]})`;
    return StringHandlingOperations(line.replaceBetween(...ss, py));
  }

  else if (/\.substring\((.*?),(.*?)\)/.test(line)) {
    const parts = /\.substring\((.*?),(.*?)\)/.exec(line);
    const ss = [parts.index, parts.index - 1 + parts[0].length];
    const py = `[${parts[1]},${parts[2]}]`;
    return StringHandlingOperations(line.replaceBetween(...ss, py));
  }

  else if (/\.left/.test(line)) {
    const parts = /\.left\((.*?)\)/.exec(line);
    const ss = [parts.index, parts.index - 1 + parts[0].length];
    const py = `[:${parts[1]}]`
    return StringHandlingOperations(line.replaceBetween(...ss, py));
  }
  else if (/\.right/.test(line)) {
    const parts = /\.right\((.*?)\)/.exec(line);
    const ss = [parts.index, parts.index - 1 + parts[0].length];
    const py = `[-${parts[1]}:]`
    return StringHandlingOperations(line.replaceBetween(...ss, py));
  }

  const psKW = ['.upper', '.lower', 'ASC', 'CHR'];
  const pyKW = ['.upper()', '.lower()', 'ord', 'chr'];
  for (let i = 0; i < psKW.length; i++) {
    line = line.replaceAll(psKW[i], pyKW[i]);
  }

  return line;
}

// function FileHandling(line)
// {
//   return line;
// }

function Arrays(line)
{
  if (/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(line)) {
    const parts = /^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(line);
    const py = `${parts[1]} = [[0 for i in range(${parts[2]})] for j in range(${parts[3]})]`;
    return line.replace(parts[0], py);
  }
  else if (/^array\s*(\w+)\[(.*?)\](?!=)/.test(line)) {
    const parts = /^array\s*(\w+)\[(.*?)\](?!=)/.exec(line);
    const py = `${parts[1]} = [0 for i in range(${parts[2]})]`;
    return line.replace(parts[0], py);
  }
  else if (/(\w+)\[(.*?),(.*?)\]/.test(line)) {
    const parts = /(\w+)\[(.*?),(.*?)\]/.exec(line);
    const py = `${parts[1]}[${parts[2].trim()}][${parts[3].trim()}]`;
    return line.replace(parts[0], py);
  }
  return line;
}

function RandomNumbers(line)
{
  if (/random\((.*?),(.*?)\)/.test(line)) {
    randomImport = true;
    const parts = line.match(/random\((.*?),(.*?)\)/);
    const py = `randint(${parts[1].trim()}, ${parts[2].trim()})`;
    return RandomNumbers( line.replace(parts[0], py) );
  }
  return line;
}

function Other(line)
{
  if (line.includes('console.writeline')) {
    return line.replaceAll('console.writeline', 'print');
  }
  if (line.includes('console.log')) {
    return line.replaceAll('console.log', 'print');
  }
  if (/^print\s*\((.*?)\)$/.test(line)) {
    const part = /^print\s*\((.*?)\)$/.exec(line)[1];
    return `print(${part})`;
  }


  return line;
}

// // // // // // // // // // // // // // // // // // // // // // // // // // //

function IterationCountControlled(INDENT, INDEX)
{
  // REMOVE UNNECESSARY PSEUDOCODE BOILERPLATE
  for (let i = INDEX; i < python.length; i++) {
    let [index, type, indent, line] = [python.indexOf(python[i]), ...python[i]];
    const isPseudo = !!(type == 'pseudo' && indent == INDENT);

    if (isPseudo && line.includes('next')) {
      python[index] = ['python', INDENT, 'REMOVED'];
      break;
    }
  }

  // CONVERT NECESSARY PSEUDOCODE INTO PYTHON
  let line = python[INDEX][2];

  let iccRegex1 = /^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?):*$/;
  let iccRegex2 = /^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?):*$/;
  let iccRegex3 = /^for\s+(.*?)\s+in\s+range\s*\((.*?),(.*?)\):*/;

  if (iccRegex1.test(line)) {
    // for a = b to c
    let [a, b, c] = line.match(iccRegex1).slice(-3);
    python[INDEX][0] = 'python';
    python[INDEX][2] = `for ${a} in range(${b}, ${c}):`
  }

  else if (iccRegex2.test(line)) {
    // for a = b to c step d
    let [a, b, c, d] = line.match(iccRegex2).slice(-4);
    python[INDEX][0] = 'python';
    python[INDEX][2] = `for ${a} in range(${b}, ${c}, ${d}):`;
  }
  else if (iccRegex3.test(line)) {
    // for a in range (b, c)
    let [a, b, c] = line.match(iccRegex3).slice(-3);
    python[INDEX][2] = `for ${a} in range(${b}, ${c}):`;
  }
  else {
    const message = `line: {${INDEX}} code: {${python[INDEX][2]}}
Please declare for loops as specified by the OCR guide:

e.g.,
for i=0 to 9
  ...
next i

for i=2 to 10 step 2
  ...
next i`;
    alert(message);
    console.log('hello');
    errorPresent = true;
  }
}

function IterationConditionControlled1(INDENT, INDEX)
{
  // while answer != "Correct"
  //   answer = input("New answer")
  // endwhile

  // REMOVE UNNECESSARY PSEUDOCODE BOILERPLATE
  for (let i = INDEX; i < python.length; i++) {
    let [index, type, indent, line] = [python.indexOf(python[i]), ...python[i]];
    const isPseudo = !!(type == 'pseudo' && indent == INDENT);

    if (isPseudo && line == 'endwhile') {
      python[index] = ['python', INDENT, 'REMOVED'];
      break
    }
  }

  // CONVERT NECESSARY PSEUDOCODE INTO PYTHON
  let line = python[INDEX][2];
  let part = line.match(/^while(.*?)$/)[1].trim();
  if (part.endsWith(':')) {
    line = `while ${part}`;
  }
  else {
    line = `while ${part}:`;
  }
  python[INDEX] = ['python', INDENT, line];
}

function IterationConditionControlled2(INDENT, INDEX)
{
  // do
  //   answer = input("New answer")
  // until answer == "Correct"

  // REMOVE UNNECESSARY PSEUDOCODE BOILERPLATE
  for (let i = INDEX; i < python.length; i++) {
    let [index, type, indent, line] = [python.indexOf(python[i]), ...python[i]];
    const isPseudo = !!(type == 'pseudo' && indent == INDENT);

    if (isPseudo && /^until(.*?)$/.test(line)) {
      python[index] = ['python', INDENT, 'REMOVED'];

      // CONVERT NECESSARY PSEUDOCODE INTO PYTHON
      python[INDEX] = ['python', INDENT, 'while True:'];

      let part = line.match(/^until(.*?)$/)[1].trim();
      python.splice(index, 0, ['python', INDENT + 4, `break`]);
      python.splice(index, 0, ['python', INDENT + 2, `if ${part}:`]);
      python.splice(index, 0, ['python', INDENT + 2, ``]);
      break;
    }
  }
}

function Selection(INDENT, INDEX)
{
  // if answer == 'Yes' then
  //   print('correct')
  // elseif answer == "No" then
  //   print('Wrong')
  // else
  //   print('Error')
  // endif

  // CONVERT NECESSARY PSEUDOCODE INTO PYTHON
  // REMOVE UNNECESSARY PSEUDOCODE BOILERPLATE
  for (let i = INDEX; i < python.length; i++) {
    let [index, type, indent, line] = [python.indexOf(python[i]), ...python[i]];
    const isPseudo = !!(type == 'pseudo' && indent == INDENT);

    if (isPseudo && line.match(/^elseif(.*?)then$/)) {
      let part = line.match(/^elseif(.*?)then$/)[1].trim();
      python[index] = ['python', INDENT, `elif ${part}:`];
    }
    else if (isPseudo && (line == 'else' || line == 'else:')) {
      python[index] = ['python', INDENT, 'else:'];
    }
    else if (isPseudo && line === 'endif') {
      python[index] = ['python', INDENT, 'REMOVED'];
      break;
    }
  }

  // CONVERT NECESSARY PSEUDOCODE INTO PYTHON
  let line = python[INDEX][2];

  if (/^if(.*?)then$/.test(line)) {
    let part = line.match(/^if(.*?)then$/)[1].trim();
    line = `if ${part}:`;
  }
  else if (/^if(.*?)$/.test(line)) {
    let part = line.match(/^if(.*?)$/)[1].trim();
    if (part.endsWith(':')) {
      line = `if ${part}`;
    }
    else {
      line = `if ${part}:`;
    }
  }
  python[INDEX] = ['python', INDENT, line];
}

function Subroutines1(INDENT, INDEX)
{
  // procedure name(...)
  // endprocedure

  // REMOVE UNNECESSARY PSEUDOCODE BOILERPLATE
  for (let i = INDEX; i < python.length; i++) {
    let [index, type, indent, line] = [python.indexOf(python[i]), ...python[i]];
    if (type == 'pseudo' && indent == INDENT && line == 'endprocedure') {
      python[index] = ['python', INDENT, 'REMOVED'];
      break;
    }
  }

  // CONVERT NECESSARY PSEUDOCODE INTO PYTHON
  let part = python[INDEX][2].match(/^procedure(.*)$/)[1].trim();
  python[INDEX] = ['python', INDENT, `def ${part}:`];
}

function Subroutines2(INDENT, INDEX)
{
  // function name(...)
  //   return ...
  // endfunction
  // function(parameters)

  // REMOVE UNNECESSARY PSEUDOCODE BOILERPLATE
  for (let i = INDEX; i < python.length; i++) {
    let [index, type, indent, line] = [python.indexOf(python[i]), ...python[i]];
    if (type == 'pseudo' && indent == INDENT && line == 'endfunction') {
      python[index] = ['python', INDENT, 'REMOVED'];
      break;
    }
  }

  // CONVERT NECESSARY PSEUDOCODE INTO PYTHON
  let part = python[INDEX][2].match(/^function(.*)$/)[1].trim();
  python[INDEX] = ['python', INDENT, `def ${part}:`];
}

// // // // // // // // // // // // // // // // // // // // // // // // // // //

export function transpiler(pseudoArrayInput)
{
  python = pseudoArrayInput;
  randomImport = false;
  errorPresent = false;

  for (let i = 0; i < python.length; i++) {
    let [index, type, indent, line] = [python.indexOf(python[i]), ...python[i]];
    if (type == 'pseudo' && line != '' && line != 'REMOVED') {
      python[index][2] = Commenting(python[index][2]);
      python[index][2] = Operators(python[index][2]);
      python[index][2] = Variables(python[index][2]);
      // python[index][2] = InputOutput(python[index][2]);
      python[index][2] = Casting(python[index][2]);
      python[index][2] = StringHandlingOperations(python[index][2]);
      // // python[index][2] = FileHandling(python[index][2]);
      python[index][2] = Arrays(python[index][2]);
      python[index][2] = RandomNumbers(python[index][2]);
      python[index][2] = Other(python[index][2]);

      if (/^for(.*?)$/.test(python[index][2])) {
        IterationCountControlled(indent, index);
      }

      else if (/^while(.*?)$/.test(python[index][2])) {
        IterationConditionControlled1(indent, index);
      }
      else if (/^do(.*?)$/.test(python[index][2])) {
        IterationConditionControlled2(indent, index);
      }

      else if (/^if(.*?)$/.test(python[index][2])) {
        Selection(indent, index);
      }

      else if (/^procedure(.*?)$/.test(line)) {
        Subroutines1(indent, index);
      }
      else if (/^function(.*?)$/.test(line)) {
        Subroutines2(indent, index);
      }
    }

  }

  if (randomImport == true) {
    python.unshift(['python', 0, '']);
    python.unshift(['python', 0, 'from random import randint']);
  }

  if (errorPresent == true) {
    return 0;
  }
  return python.filter(i => i[2] != 'REMOVED');
}

// // // // // // // // // // // // // // // // // // // // // // // // // // //

// GLOBAL VARIABLES
let python = null;
let randomImport = false;
let errorPresent = false;