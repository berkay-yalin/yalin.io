import{S as M,i as R,s as N,k as y,q as J,l as w,m as b,r as T,h as f,n as c,b as D,G as h,B,K as ne,a as S,c as F,p as W,L as ce,M as j,I as oe,N as Y,O as ee,u as de,f as V,g as ue,d as fe,t as I,P as ve,w as H,x as $,y as z,Q as he,R as ge,z as q,J as me}from"../../../chunks/index-28fc0cfa.js";function pe(d){let e,a;return{c(){e=y("div"),a=J("berkay-yalin.io"),this.h()},l(s){e=w(s,"DIV",{id:!0,class:!0});var l=b(e);a=T(l,"berkay-yalin.io"),l.forEach(f),this.h()},h(){c(e,"id","title"),c(e,"class","svelte-1529ust")},m(s,l){D(s,e,l),h(e,a)},p:B,i:B,o:B,d(s){s&&f(e)}}}class _e extends M{constructor(e){super(),R(this,e,null,pe,N,{})}}function te(d,e,a){const s=d.slice();return s[3]=e[a],s}function ae(d,e,a){const s=d.slice();return s[3]=e[a],s}function le(d){let e,a,s,l;return{c(){e=y("div"),a=y("img"),l=S(),this.h()},l(i){e=w(i,"DIV",{class:!0});var r=b(e);a=w(r,"IMG",{alt:!0,class:!0,src:!0}),l=F(r),r.forEach(f),this.h()},h(){c(a,"alt",""),c(a,"class","devicon svelte-55aave"),oe(a.src,s="devicon/"+d[3]+"-original.svg")||c(a,"src",s),c(e,"class","devicon-div svelte-55aave")},m(i,r){D(i,e,r),h(e,a),h(e,l)},p:B,d(i){i&&f(e)}}}function re(d){let e,a,s,l;return{c(){e=y("div"),a=y("img"),l=S(),this.h()},l(i){e=w(i,"DIV",{class:!0});var r=b(e);a=w(r,"IMG",{alt:!0,class:!0,src:!0}),l=F(r),r.forEach(f),this.h()},h(){c(a,"alt",""),c(a,"class","devicon svelte-55aave"),oe(a.src,s="devicon/"+d[3]+"-original.svg")||c(a,"src",s),c(e,"class","devicon-div svelte-55aave")},m(i,r){D(i,e,r),h(e,a),h(e,l)},p:B,d(i){i&&f(e)}}}function be(d){let e,a,s,l,i,r,v,o,E,_;ne(d[2]);let m=d[1],t=[];for(let u=0;u<m.length;u+=1)t[u]=le(ae(d,m,u));let p=d[1],g=[];for(let u=0;u<p.length;u+=1)g[u]=re(te(d,p,u));return{c(){e=y("div"),a=y("div"),s=S(),l=y("div"),i=S(),r=y("div");for(let u=0;u<t.length;u+=1)t[u].c();v=S(),o=y("div");for(let u=0;u<g.length;u+=1)g[u].c();this.h()},l(u){e=w(u,"DIV",{id:!0,style:!0,class:!0});var C=b(e);a=w(C,"DIV",{id:!0,class:!0}),b(a).forEach(f),s=F(C),l=w(C,"DIV",{id:!0,class:!0}),b(l).forEach(f),i=F(C),r=w(C,"DIV",{class:!0});var n=b(r);for(let A=0;A<t.length;A+=1)t[A].l(n);n.forEach(f),v=F(C),o=w(C,"DIV",{class:!0});var L=b(o);for(let A=0;A<g.length;A+=1)g[A].l(L);L.forEach(f),C.forEach(f),this.h()},h(){c(a,"id","gradient-to-left"),c(a,"class","svelte-55aave"),c(l,"id","gradient-to-right"),c(l,"class","svelte-55aave"),c(r,"class","devicon-strip svelte-55aave"),c(o,"class","devicon-strip svelte-55aave"),c(e,"id","devicon-container"),W(e,"--inner-width",d[0]+"px"),c(e,"class","svelte-55aave")},m(u,C){D(u,e,C),h(e,a),h(e,s),h(e,l),h(e,i),h(e,r);for(let n=0;n<t.length;n+=1)t[n].m(r,null);h(e,v),h(e,o);for(let n=0;n<g.length;n+=1)g[n].m(o,null);E||(_=ce(window,"resize",d[2]),E=!0)},p(u,[C]){if(C&2){m=u[1];let n;for(n=0;n<m.length;n+=1){const L=ae(u,m,n);t[n]?t[n].p(L,C):(t[n]=le(L),t[n].c(),t[n].m(r,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=m.length}if(C&2){p=u[1];let n;for(n=0;n<p.length;n+=1){const L=te(u,p,n);g[n]?g[n].p(L,C):(g[n]=re(L),g[n].c(),g[n].m(o,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=p.length}C&1&&W(e,"--inner-width",u[0]+"px")},i:B,o:B,d(u){u&&f(e),j(t,u),j(g,u),E=!1,_()}}}function ye(d,e,a){const s=["c","python","lua","svelte","javascript","typescript","html5","css3","sass","flask","sqlite"];let l;function i(){a(0,l=window.innerWidth)}return[l,s,i]}class we extends M{constructor(e){super(),R(this,e,ye,be,N,{})}}function Ce(d){let e,a,s,l,i,r,v=d[3].name+"",o,E,_,m,t,p,g,u,C,n,L=d[3].description+"",A,x;return{c(){e=y("div"),a=y("div"),s=Y("svg"),l=Y("path"),i=S(),r=y("a"),o=J(v),E=S(),_=y("div"),m=y("div"),t=y("div"),p=S(),g=y("div"),u=J(d[0]),C=S(),n=y("div"),A=J(L),this.h()},l(P){e=w(P,"DIV",{id:!0,style:!0,class:!0});var k=b(e);a=w(k,"DIV",{id:!0,class:!0});var G=b(a);s=ee(G,"svg",{height:!0,width:!0,viewBox:!0,version:!0,class:!0});var X=b(s);l=ee(X,"path",{"fill-rule":!0,d:!0}),b(l).forEach(f),X.forEach(f),i=F(G),r=w(G,"A",{href:!0,class:!0});var Q=b(r);o=T(Q,v),Q.forEach(f),G.forEach(f),E=F(k),_=w(k,"DIV",{id:!0,class:!0});var U=b(_);m=w(U,"DIV",{class:!0});var O=b(m);t=w(O,"DIV",{class:!0,id:!0}),b(t).forEach(f),p=F(O),g=w(O,"DIV",{class:!0,id:!0});var K=b(g);u=T(K,d[0]),K.forEach(f),O.forEach(f),U.forEach(f),C=F(k),n=w(k,"DIV",{id:!0,class:!0});var Z=b(n);A=T(Z,L),Z.forEach(f),k.forEach(f),this.h()},h(){c(l,"fill-rule","evenodd"),c(l,"d",Ee),c(s,"height","16"),c(s,"width","16"),c(s,"viewBox","0 0 16 16"),c(s,"version","1.1"),c(s,"class","svelte-12vpwem"),c(r,"href",d[3].html_url),c(r,"class","svelte-12vpwem"),c(a,"id","title"),c(a,"class","svelte-12vpwem"),c(t,"class","language-icon svelte-12vpwem"),c(t,"id","language-span-icon"),c(g,"class","language-text svelte-12vpwem"),c(g,"id","language-span-text"),c(m,"class","svelte-12vpwem"),c(_,"id","languages"),c(_,"class","svelte-12vpwem"),c(n,"id","description"),c(n,"class","svelte-12vpwem"),c(e,"id","card-container"),c(e,"style",x="grid-column:"+d[1]+"; grid-row:"+d[2]+"; "+d[4]),c(e,"class","svelte-12vpwem")},m(P,k){D(P,e,k),h(e,a),h(a,s),h(s,l),h(a,i),h(a,r),h(r,o),h(e,E),h(e,_),h(_,m),h(m,t),h(m,p),h(m,g),h(g,u),h(e,C),h(e,n),h(n,A)},p(P,[k]){k&1&&de(u,P[0]),k&6&&x!==(x="grid-column:"+P[1]+"; grid-row:"+P[2]+"; "+P[4])&&c(e,"style",x)},i:B,o:B,d(P){P&&f(e)}}}const Ee="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z";function Se(d,e,a){let{username:s}=e,{repository:l}=e,{description:i}=e,{language:r}=e,{column:v}=e,{row:o}=e;const E={ABAP:"#E8274B",ActionScript:"#882B0F",Ada:"#02f88c",Agda:"#315665","AGS Script":"#B9D9FF",Alloy:"#64C800",AMPL:"#E6EFBB",ANTLR:"#9DC3FF","API Blueprint":"#2ACCA8",APL:"#5A8164",Arc:"#aa2afe",Arduino:"#bd79d1",ASP:"#6a40fd",AspectJ:"#a957b0",Assembly:"#6E4C13",ATS:"#1ac620",AutoHotkey:"#6594b9",AutoIt:"#1C3552",BlitzMax:"#cd6400",Boo:"#d4bec1",Brainfuck:"#2F2530","C Sharp":"#178600",C:"#555555",Chapel:"#8dc63f",Cirru:"#ccccff",Clarion:"#db901e",Clean:"#3F85AF",Click:"#E4E6F3",Clojure:"#db5855",CoffeeScript:"#244776","ColdFusion CFC":"#ed2cd6",ColdFusion:"#ed2cd6","Common Lisp":"#3fb68b","Component Pascal":"#b0ce4e",cpp:"#f34b7d",Crystal:"#776791",CSS:"#563d7c",D:"#ba595e",Dart:"#00B4AB",Diff:"#88dddd",DM:"#447265",Dogescript:"#cca760",Dylan:"#6c616e",E:"#ccce35",Eagle:"#814C05",eC:"#913960",ECL:"#8a1267",edn:"#db5855",Eiffel:"#946d57",Elixir:"#6e4a7e",Elm:"#60B5CC","Emacs Lisp":"#c065db",EmberScript:"#FFF4F3",Erlang:"#B83998","F#":"#b845fc",Factor:"#636746",Fancy:"#7b9db4",Fantom:"#dbded5",FLUX:"#88ccff",Forth:"#341708",FORTRAN:"#4d41b1",FreeMarker:"#0050b2",Frege:"#00cafe","Game Maker Language":"#8fb200",Glyph:"#e4cc98",Gnuplot:"#f0a9f0",Go:"#375eab",Golo:"#88562A",Gosu:"#82937f","Grammatical Framework":"#79aa7a",Groovy:"#e69f56",Handlebars:"#01a9d6",Harbour:"#0e60e3",Haskell:"#29b544",Haxe:"#df7900",HTML:"#e44b23",Hy:"#7790B2",IDL:"#a3522f",Io:"#a9188d",Ioke:"#078193",Isabelle:"#FEFE00",J:"#9EEDFF",Java:"#b07219",JavaScript:"#f1e05a",JFlex:"#DBCA00",JSONiq:"#40d47e",Julia:"#a270ba","Jupyter Notebook":"#DA5B0B",Kotlin:"#F18E33",KRL:"#28431f",Lasso:"#999999",Latte:"#A8FF97",Lex:"#DBCA00",LFE:"#004200",LiveScript:"#499886",LOLCODE:"#cc9900",LookML:"#652B81",LSL:"#3d9970",Lua:"#000080",Makefile:"#427819",Mask:"#f97732",Matlab:"#bb92ac",Max:"#c4a79c",MAXScript:"#00a6a6",Mercury:"#ff2b2b",Metal:"#8f14e9",Mirah:"#c7a938",MTML:"#b7e1f4",NCL:"#28431f",Nemerle:"#3d3c6e",nesC:"#94B0C7",NetLinx:"#0aa0ff","NetLinx+ERB":"#747faa",NetLogo:"#ff6375",NewLisp:"#87AED7",Nimrod:"#37775b",Nit:"#009917",Nix:"#7e7eff",Nu:"#c9df40","Objective-C":"#438eff","Objective-C++":"#6866fb","Objective-J":"#ff0c5a",OCaml:"#3be133",Omgrofl:"#cabbff",ooc:"#b0b77e",Opal:"#f7ede0",Oxygene:"#cdd0e3",Oz:"#fab738",Pan:"#cc0000",Papyrus:"#6600cc",Parrot:"#f3ca0a",Pascal:"#b0ce4e",PAWN:"#dbb284",Perl:"#0298c3",Perl6:"#0000fb",PHP:"#4F5D95",PigLatin:"#fcd7de",Pike:"#005390",PLSQL:"#dad8d8",PogoScript:"#d80074",Processing:"#0096D8",Prolog:"#74283c","Propeller Spin":"#7fa2a7",Puppet:"#302B6D","Pure Data":"#91de79",PureBasic:"#5a6986",PureScript:"#1D222D",Python:"#3572A5",QML:"#44a51c",R:"#198ce7",Racket:"#22228f","Ragel in Ruby Host":"#9d5200",RAML:"#77d9fb",Rebol:"#358a5b",Red:"#ee0000","Ren'Py":"#ff7f7f",Rouge:"#cc0088",Ruby:"#701516",Rust:"#dea584",SaltStack:"#646464",SAS:"#B34936",Scala:"#DC322F",Scheme:"#1e4aec",Self:"#0579aa",Shell:"#89e051",Shen:"#120F14",Slash:"#007eff",Slim:"#ff8f77",Smalltalk:"#596706",SourcePawn:"#5c7611",SQF:"#3F3F3F",Squirrel:"#800000",Stan:"#b2011d","Standard ML":"#dc566d",SuperCollider:"#46390b",Swift:"#ffac45",SystemVerilog:"#DAE1C2",Tcl:"#e4cc98",TeX:"#3D6117",Turing:"#45f715",TypeScript:"#2b7489","Unified Parallel C":"#4e3617","Unity3D Asset":"#ab69a1",UnrealScript:"#a54c4d",Vala:"#fbe5cd",Verilog:"#b2b7f8",VHDL:"#adb2cb",VimL:"#199f4b","Visual Basic":"#945db7",Volt:"#1F1F1F",Vue:"#2c3e50","Web Ontology Language":"#9cc9dd",wisp:"#7582D1",X10:"#4B6BEF",xBase:"#403a40",XC:"#99DA07",XQuery:"#5232e7",Zephir:"#118f9e"},_={html_url:`https://github.com/${s}/${l}`,name:l,description:i,language:r},m=`
    --background-color: #21252B;
    --border-color: rgb(48, 54, 61);
    --color: rgb(139, 148, 158);
    --link-color: rgb(88, 166, 255);
    --language-color: ${E[_.language]}
  `;return d.$$set=t=>{"username"in t&&a(5,s=t.username),"repository"in t&&a(6,l=t.repository),"description"in t&&a(7,i=t.description),"language"in t&&a(0,r=t.language),"column"in t&&a(1,v=t.column),"row"in t&&a(2,o=t.row)},[r,v,o,_,m,s,l,i]}class Fe extends M{constructor(e){super(),R(this,e,Se,Ce,N,{username:5,repository:6,description:7,language:0,column:1,row:2})}}function se(d,e,a){const s=d.slice();return s[1]=e[a],s}function ie(d){let e,a;const s=[d[1]];let l={};for(let i=0;i<s.length;i+=1)l=ve(l,s[i]);return e=new Fe({props:l}),{c(){H(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,r){z(e,i,r),a=!0},p(i,r){const v=r&1?he(s,[ge(i[1])]):{};e.$set(v)},i(i){a||(V(e.$$.fragment,i),a=!0)},o(i){I(e.$$.fragment,i),a=!1},d(i){q(e,i)}}}function De(d){let e,a,s=d[0],l=[];for(let r=0;r<s.length;r+=1)l[r]=ie(se(d,s,r));const i=r=>I(l[r],1,1,()=>{l[r]=null});return{c(){e=y("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=w(r,"DIV",{id:!0,class:!0});var v=b(e);for(let o=0;o<l.length;o+=1)l[o].l(v);v.forEach(f),this.h()},h(){c(e,"id","repository-grid"),c(e,"class","svelte-dosvfm")},m(r,v){D(r,e,v);for(let o=0;o<l.length;o+=1)l[o].m(e,null);a=!0},p(r,[v]){if(v&1){s=r[0];let o;for(o=0;o<s.length;o+=1){const E=se(r,s,o);l[o]?(l[o].p(E,v),V(l[o],1)):(l[o]=ie(E),l[o].c(),V(l[o],1),l[o].m(e,null))}for(ue(),o=s.length;o<l.length;o+=1)i(o);fe()}},i(r){if(!a){for(let v=0;v<s.length;v+=1)V(l[v]);a=!0}},o(r){l=l.filter(Boolean);for(let v=0;v<l.length;v+=1)I(l[v]);a=!1},d(r){r&&f(e),j(l,r)}}}function Le(d){return[[{username:"berkay-yalin",repository:"berkay-yalin.io",description:"personal portfolio website",language:"JavaScript",column:"1",row:"1"},{username:"berkay-yalin",repository:"scientific-computing-with-python",description:`my solution links to freeCodeCamp's "Scientific Computing with Python" course`,language:"Python",column:"2 / 4",row:"1"},{username:"mikeroyal",repository:"Windows-11-Guide",description:"Windows 11 Guide. Though, most of the Tools, Programs, Resources will also work for Windows 10.",language:"Shell",column:"1 / 3",row:"2"},{username:"berkay-yalin",repository:"python-probabilities",description:"Library for accurate statistical calculations using Python.",language:"Python",column:"1 / 3",row:"3"},{username:"berkay-yalin",repository:"svelte-github-repo-card",description:"Svelte component to showcase a GitHub repository.",language:"JavaScript",column:"3",row:"2"},{username:"berkay-yalin",repository:"dotfiles",description:"trying to figure out how neovim works",language:"Lua",column:"3",row:"3"}]]}class Ae extends M{constructor(e){super(),R(this,e,Le,De,N,{})}}function ke(d){let e,a,s,l,i,r,v,o,E,_,m;return a=new _e({}),r=new we({}),_=new Ae({}),{c(){e=S(),H(a.$$.fragment),s=S(),l=y("div"),i=S(),H(r.$$.fragment),v=S(),o=y("div"),E=S(),H(_.$$.fragment),this.h()},l(t){me("svelte-1uq54ov",document.head).forEach(f),e=F(t),$(a.$$.fragment,t),s=F(t),l=w(t,"DIV",{style:!0}),b(l).forEach(f),i=F(t),$(r.$$.fragment,t),v=F(t),o=w(t,"DIV",{style:!0}),b(o).forEach(f),E=F(t),$(_.$$.fragment,t),this.h()},h(){document.title="berkay-yalin.io",W(l,"height","1.5rem"),W(o,"height","1.5rem")},m(t,p){D(t,e,p),z(a,t,p),D(t,s,p),D(t,l,p),D(t,i,p),z(r,t,p),D(t,v,p),D(t,o,p),D(t,E,p),z(_,t,p),m=!0},p:B,i(t){m||(V(a.$$.fragment,t),V(r.$$.fragment,t),V(_.$$.fragment,t),m=!0)},o(t){I(a.$$.fragment,t),I(r.$$.fragment,t),I(_.$$.fragment,t),m=!1},d(t){t&&f(e),q(a,t),t&&f(s),t&&f(l),t&&f(i),q(r,t),t&&f(v),t&&f(o),t&&f(E),q(_,t)}}}class Be extends M{constructor(e){super(),R(this,e,null,ke,N,{})}}export{Be as default};