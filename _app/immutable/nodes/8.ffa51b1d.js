import{S as Ne,i as Qe,s as Ue,C as mt,k,l as E,m as z,h as l,n as $,b as h,D as ut,E as $t,F as pt,g as O,d as I,q as m,a as y,y as T,J as dt,r as u,c as x,z as A,Q as ke,G as c,A as P,B as L,H as re}from"../chunks/index.aba53c8a.js";/* empty css                      */import{C as ft,p as ct}from"../chunks/index.ba988f96.js";import{H as vt}from"../chunks/Header.0ffca58b.js";function _t(p){let t,e;const i=p[1].default,o=mt(i,p,p[0],null);return{c(){t=k("div"),o&&o.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var a=z(t);o&&o.l(a),a.forEach(l),this.h()},h(){$(t,"class","svelte-yz4mk3")},m(s,a){h(s,t,a),o&&o.m(t,null),e=!0},p(s,[a]){o&&o.p&&(!e||a&1)&&ut(o,i,s,s[0],e?pt(i,s[0],a,null):$t(s[0]),null)},i(s){e||(O(o,s),e=!0)},o(s){I(o,s),e=!1},d(s){s&&l(t),o&&o.d(s)}}}function bt(p,t,e){let{$$slots:i={},$$scope:o}=t;return p.$$set=s=>{"$$scope"in s&&e(0,o=s.$$scope)},[o,i]}class B extends Ne{constructor(t){super(),Qe(this,t,bt,_t,Ue,{})}}function gt(p){let t,e;const i=p[1].default,o=mt(i,p,p[0],null);return{c(){t=k("div"),o&&o.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var a=z(t);o&&o.l(a),a.forEach(l),this.h()},h(){$(t,"class","svelte-9gis9f")},m(s,a){h(s,t,a),o&&o.m(t,null),e=!0},p(s,[a]){o&&o.p&&(!e||a&1)&&ut(o,i,s,s[0],e?pt(i,s[0],a,null):$t(s[0]),null)},i(s){e||(O(o,s),e=!0)},o(s){I(o,s),e=!1},d(s){s&&l(t),o&&o.d(s)}}}function wt(p,t,e){let{$$slots:i={},$$scope:o}=t;return p.$$set=s=>{"$$scope"in s&&e(0,o=s.$$scope)},[o,i]}class ht extends Ne{constructor(t){super(),Qe(this,t,wt,gt,Ue,{})}}const kt="/_app/immutable/assets/knight.7c95888c.png",Et="/_app/immutable/assets/knight_m0.45722dd8.png",yt="/_app/immutable/assets/knight_m1.46e314b8.png",xt="/_app/immutable/assets/knight_m2.ac0a42e2.png",zt="/_app/immutable/assets/knight_m3.77ebe86d.png";function Ct(p){let t,e,i,o,s,a,f,n,d,C,b,j,W,M,q,fe;return{c(){t=m("On an "),e=k("code"),i=m("n x n"),o=m(" chessboard, a knight starts at the cell "),s=k("code"),a=m("(row, column)"),f=m(" and attempts to make exactly "),n=k("code"),d=m("k"),C=m(` moves.
            The rows and columns are 0-indexed, so the top-left cell is `),b=k("code"),j=m("(0, 0)"),W=m(", and the bottom-right cell is "),M=k("code"),q=m("(n - 1, n - 1)"),fe=m("."),this.h()},l(w){t=u(w,"On an "),e=E(w,"CODE",{class:!0});var D=z(e);i=u(D,"n x n"),D.forEach(l),o=u(w," chessboard, a knight starts at the cell "),s=E(w,"CODE",{class:!0});var me=z(s);a=u(me,"(row, column)"),me.forEach(l),f=u(w," and attempts to make exactly "),n=E(w,"CODE",{class:!0});var V=z(n);d=u(V,"k"),V.forEach(l),C=u(w,` moves.
            The rows and columns are 0-indexed, so the top-left cell is `),b=E(w,"CODE",{class:!0});var ue=z(b);j=u(ue,"(0, 0)"),ue.forEach(l),W=u(w,", and the bottom-right cell is "),M=E(w,"CODE",{class:!0});var G=z(M);q=u(G,"(n - 1, n - 1)"),G.forEach(l),fe=u(w,"."),this.h()},h(){$(e,"class","svelte-vnz3em"),$(s,"class","svelte-vnz3em"),$(n,"class","svelte-vnz3em"),$(b,"class","svelte-vnz3em"),$(M,"class","svelte-vnz3em")},m(w,D){h(w,t,D),h(w,e,D),c(e,i),h(w,o,D),h(w,s,D),c(s,a),h(w,f,D),h(w,n,D),c(n,d),h(w,C,D),h(w,b,D),c(b,j),h(w,W,D),h(w,M,D),c(M,q),h(w,fe,D)},p:re,d(w){w&&l(t),w&&l(e),w&&l(o),w&&l(s),w&&l(f),w&&l(n),w&&l(C),w&&l(b),w&&l(W),w&&l(M),w&&l(fe)}}}function Dt(p){let t;return{c(){t=m(`A chess knight has eight possible moves it can make, as illustrated below.
            Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`)},l(e){t=u(e,`A chess knight has eight possible moves it can make, as illustrated below.
            Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`)},m(e,i){h(e,t,i)},d(e){e&&l(t)}}}function Ot(p){let t;return{c(){t=m("Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.")},l(e){t=u(e,"Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.")},m(e,i){h(e,t,i)},d(e){e&&l(t)}}}function It(p){let t;return{c(){t=m("The knight continues moving until it has made exactly k moves or has moved off the chessboard.")},l(e){t=u(e,"The knight continues moving until it has made exactly k moves or has moved off the chessboard.")},m(e,i){h(e,t,i)},d(e){e&&l(t)}}}function Tt(p){let t;return{c(){t=m("Return the probability that the knight remains on the board after it has stopped moving.")},l(e){t=u(e,"Return the probability that the knight remains on the board after it has stopped moving.")},m(e,i){h(e,t,i)},d(e){e&&l(t)}}}function At(p){let t,e,i,o,s,a,f;return{c(){t=m(`The first

            `),e=k("a"),i=m("solution"),o=m(`

            presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

            We can significantly simplify this solution however through the use of recursion and the

            `),s=k("a"),a=m("Law of Total Probability"),f=m(`

            .`),this.h()},l(n){t=u(n,`The first

            `),e=E(n,"A",{href:!0,class:!0});var d=z(e);i=u(d,"solution"),d.forEach(l),o=u(n,`

            presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

            We can significantly simplify this solution however through the use of recursion and the

            `),s=E(n,"A",{href:!0,class:!0});var C=z(s);a=u(C,"Law of Total Probability"),C.forEach(l),f=u(n,`

            .`),this.h()},h(){$(e,"href","https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3322846/688-space-97-74-solution-with-step-by-step-explanation/"),$(e,"class","svelte-vnz3em"),$(s,"href","https://en.wikipedia.org/wiki/Law_of_total_probability"),$(s,"class","svelte-vnz3em")},m(n,d){h(n,t,d),h(n,e,d),c(e,i),h(n,o,d),h(n,s,d),c(s,a),h(n,f,d)},p:re,d(n){n&&l(t),n&&l(e),n&&l(o),n&&l(s),n&&l(f)}}}function Pt(p){let t;return{c(){t=m("The Law of Total Probability")},l(e){t=u(e,"The Law of Total Probability")},m(e,i){h(e,t,i)},d(e){e&&l(t)}}}function Lt(p){let t,e,i,o,s,a,f,n,d,C;return{c(){t=m("Suppose the events "),e=k("code"),i=m("B_1, ..., B_k"),o=m(` are mutally exclusive and exhaustive events in a sample space,
            then for any event `),s=k("code"),a=m("A"),f=m(" in that sample space "),n=k("code"),d=m("P(A) = P(A n B_1) + ... + P(A n B_k)"),C=m("."),this.h()},l(b){t=u(b,"Suppose the events "),e=E(b,"CODE",{class:!0});var j=z(e);i=u(j,"B_1, ..., B_k"),j.forEach(l),o=u(b,` are mutally exclusive and exhaustive events in a sample space,
            then for any event `),s=E(b,"CODE",{class:!0});var W=z(s);a=u(W,"A"),W.forEach(l),f=u(b," in that sample space "),n=E(b,"CODE",{class:!0});var M=z(n);d=u(M,"P(A) = P(A n B_1) + ... + P(A n B_k)"),M.forEach(l),C=u(b,"."),this.h()},h(){$(e,"class","svelte-vnz3em"),$(s,"class","svelte-vnz3em"),$(n,"class","svelte-vnz3em")},m(b,j){h(b,t,j),h(b,e,j),c(e,i),h(b,o,j),h(b,s,j),c(s,a),h(b,f,j),h(b,n,j),c(n,d),h(b,C,j)},p:re,d(b){b&&l(t),b&&l(e),b&&l(o),b&&l(s),b&&l(f),b&&l(n),b&&l(C)}}}function jt(p){let t,e,i,o,s,a,f;return{c(){t=m("If we consider the knight starts within a red "),e=k("code"),i=m("4x4"),o=m(" board, and only has "),s=k("code"),a=m("1"),f=m(` move,
            then only will 3 out of the 8 possible moves keep the knight within the board.
            If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.`),this.h()},l(n){t=u(n,"If we consider the knight starts within a red "),e=E(n,"CODE",{class:!0});var d=z(e);i=u(d,"4x4"),d.forEach(l),o=u(n," board, and only has "),s=E(n,"CODE",{class:!0});var C=z(s);a=u(C,"1"),C.forEach(l),f=u(n,` move,
            then only will 3 out of the 8 possible moves keep the knight within the board.
            If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.`),this.h()},h(){$(e,"class","svelte-vnz3em"),$(s,"class","svelte-vnz3em")},m(n,d){h(n,t,d),h(n,e,d),c(e,i),h(n,o,d),h(n,s,d),c(s,a),h(n,f,d)},p:re,d(n){n&&l(t),n&&l(e),n&&l(o),n&&l(s),n&&l(f)}}}function St(p){let t,e,i,o,s,a,f;return{c(){t=m("With an array containing the probability of each move occurring, "),e=k("code"),i=m("[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),o=m(`,
            and another array of the probabilities that the knight stays on the board, `),s=k("code"),a=m("[1, 1, 1, 0, 0, 0, 0, 0]"),f=m(`,
            we can calculate the result through the sum of both arrays.`),this.h()},l(n){t=u(n,"With an array containing the probability of each move occurring, "),e=E(n,"CODE",{class:!0});var d=z(e);i=u(d,"[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),d.forEach(l),o=u(n,`,
            and another array of the probabilities that the knight stays on the board, `),s=E(n,"CODE",{class:!0});var C=z(s);a=u(C,"[1, 1, 1, 0, 0, 0, 0, 0]"),C.forEach(l),f=u(n,`,
            we can calculate the result through the sum of both arrays.`),this.h()},h(){$(e,"class","svelte-vnz3em"),$(s,"class","svelte-vnz3em")},m(n,d){h(n,t,d),h(n,e,d),c(e,i),h(n,o,d),h(n,s,d),c(s,a),h(n,f,d)},p:re,d(n){n&&l(t),n&&l(e),n&&l(o),n&&l(s),n&&l(f)}}}function Wt(p){let t,e,i,o,s;return{c(){t=m(`The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
            `),e=k("br"),i=y(),o=k("code"),s=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),this.h()},l(a){t=u(a,`The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
            `),e=E(a,"BR",{}),i=x(a),o=E(a,"CODE",{class:!0});var f=z(o);s=u(f,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),f.forEach(l),this.h()},h(){$(o,"class","svelte-vnz3em")},m(a,f){h(a,t,f),h(a,e,f),h(a,i,f),h(a,o,f),c(o,s)},p:re,d(a){a&&l(t),a&&l(e),a&&l(i),a&&l(o)}}}function Bt(p){let t,e,i,o,s,a,f;return{c(){t=m("We were able to set the probability that the knight would remain on the board as "),e=k("code"),i=m("1"),o=m(` as it was the final move of the knight -
            if the knight ends on a square within the board there is a `),s=k("code"),a=m("100%"),f=m(` chance the knight has remained within the board.
            Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),this.h()},l(n){t=u(n,"We were able to set the probability that the knight would remain on the board as "),e=E(n,"CODE",{class:!0});var d=z(e);i=u(d,"1"),d.forEach(l),o=u(n,` as it was the final move of the knight -
            if the knight ends on a square within the board there is a `),s=E(n,"CODE",{class:!0});var C=z(s);a=u(C,"100%"),C.forEach(l),f=u(n,` chance the knight has remained within the board.
            Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),this.h()},h(){$(e,"class","svelte-vnz3em"),$(s,"class","svelte-vnz3em")},m(n,d){h(n,t,d),h(n,e,d),c(e,i),h(n,o,d),h(n,s,d),c(s,a),h(n,f,d)},p:re,d(n){n&&l(t),n&&l(e),n&&l(o),n&&l(s),n&&l(f)}}}function Mt(p){let t;return{c(){t=m(`Let's consider the previous example but where the knight moves twice instead of just once.
            We can work through this problem backwards to understand how the statistics behind the solution works.`)},l(e){t=u(e,`Let's consider the previous example but where the knight moves twice instead of just once.
            We can work through this problem backwards to understand how the statistics behind the solution works.`)},m(e,i){h(e,t,i)},d(e){e&&l(t)}}}function qt(p){let t;return{c(){t=m(`For each of the 3 possibilities the knight can make for it's second move,
            we can calculate the probability that the knight stays within the board like we did in the previous example,
            as it is the final move.`)},l(e){t=u(e,`For each of the 3 possibilities the knight can make for it's second move,
            we can calculate the probability that the knight stays within the board like we did in the previous example,
            as it is the final move.`)},m(e,i){h(e,t,i)},d(e){e&&l(t)}}}function Vt(p){let t,e,i,o,s;return{c(){t=m(`We can plug these results back into the original equation to determine the final probability:
            `),e=k("br"),i=y(),o=k("code"),s=m("(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),this.h()},l(a){t=u(a,`We can plug these results back into the original equation to determine the final probability:
            `),e=E(a,"BR",{}),i=x(a),o=E(a,"CODE",{class:!0});var f=z(o);s=u(f,"(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),f.forEach(l),this.h()},h(){$(o,"class","svelte-vnz3em")},m(a,f){h(a,t,f),h(a,e,f),h(a,i,f),h(a,o,f),c(o,s)},p:re,d(a){a&&l(t),a&&l(e),a&&l(i),a&&l(o)}}}function Gt(p){let t;return{c(){t=m("Solution")},l(e){t=u(e,"Solution")},m(e,i){h(e,t,i)},d(e){e&&l(t)}}}function Kt(p){let t;return{c(){t=m("The following solution uses the law of total probability to calculate the final answer")},l(e){t=u(e,"The following solution uses the law of total probability to calculate the final answer")},m(e,i){h(e,t,i)},d(e){e&&l(t)}}}function Ft(p){let t,e,i,o,s,a,f,n,d,C,b,j,W,M,q,fe,w,D,me,V,ue,G,ye,v,R,xe,ce,ze,J,Ce,N,De,Q,Oe,U,Ie,Y,Te,X,Ye,Ae,Z,Pe,ee,Le,te,je,K,se,Xe,Se,ne,Ze,We,oe,et,Be,$e,Me,qe,pe,Ve,Ge,de,Ke,Fe,le,He,ae,Re,ie,Je,he,Ee;return s=new vt({props:{date:"02.10.2023",title:"Leet Code 688. Knight Probability in Chessboard"}}),b=new B({props:{$$slots:{default:[Ct]},$$scope:{ctx:p}}}),W=new B({props:{$$slots:{default:[Dt]},$$scope:{ctx:p}}}),D=new B({props:{$$slots:{default:[Ot]},$$scope:{ctx:p}}}),V=new B({props:{$$slots:{default:[It]},$$scope:{ctx:p}}}),G=new B({props:{$$slots:{default:[Tt]},$$scope:{ctx:p}}}),R=new B({props:{$$slots:{default:[At]},$$scope:{ctx:p}}}),ce=new ft({props:{filetype:[ct()],readOnly:!0,doc:`class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        # Possible moves of knight in (row, col) directions
        moves = [(2, 1), (2, -1), (-2, 1), (-2, -1), (1, 2), (1, -2), (-1, 2), (-1, -2)]
        # Create a 2D memo table to store the probabilities for the current move and the previous move
        # We only need to keep track of the probabilities for the current and previous moves
        memo = [[0] * n for _ in range(n)]
        # Initialize the memo table for the first move with all probabilities set to 1
        for i in range(n):
            for j in range(n):
                memo[i][j] = 1

        # For each move from 1 to k
        for m in range(1, k+1):
            # Create a new 2D memo table to store the probabilities for the current move
            new_memo = [[0] * n for _ in range(n)]
            # For each cell on the board
            for i in range(n):
                for j in range(n):
                    prob = 0
                    # Iterate over all possible moves from the previous cell
                    for move in moves:
                        new_i = i + move[0]
                        new_j = j + move[1]
                        # If the move is still on the board
                        if 0 <= new_i < n and 0 <= new_j < n:
                            prob += memo[new_i][new_j]
                    # Update the probability of the current cell for current moves
                    new_memo[i][j] = prob / 8
            # Set the memo table for the previous move to the memo table for the current move
            memo = new_memo

        # Return the probability of the starting cell for k moves
        return memo[row][column]`}}),J=new ht({props:{$$slots:{default:[Pt]},$$scope:{ctx:p}}}),N=new B({props:{$$slots:{default:[Lt]},$$scope:{ctx:p}}}),Q=new B({props:{$$slots:{default:[jt]},$$scope:{ctx:p}}}),U=new B({props:{$$slots:{default:[St]},$$scope:{ctx:p}}}),Y=new B({props:{$$slots:{default:[Wt]},$$scope:{ctx:p}}}),Z=new B({props:{$$slots:{default:[Bt]},$$scope:{ctx:p}}}),ee=new B({props:{$$slots:{default:[Mt]},$$scope:{ctx:p}}}),te=new B({props:{$$slots:{default:[qt]},$$scope:{ctx:p}}}),le=new B({props:{$$slots:{default:[Vt]},$$scope:{ctx:p}}}),ae=new ht({props:{$$slots:{default:[Gt]},$$scope:{ctx:p}}}),ie=new B({props:{$$slots:{default:[Kt]},$$scope:{ctx:p}}}),he=new ft({props:{filetype:[ct()],readOnly:!0,doc:`class Solution:
    def knightProbability(n: int, k: int, row: int, column: int) -> float:
        MOVES = [(2, 1), (2, -1), (-2, 1), (-2, -1), (1, 2), (1, -2), (-1, 2), (-1, -2)]

        def dp(i, j, k):
            # check knight within board
            if not (0 <= i < n and 0 <= j < n):
                return 0

            # check moves left remaining
            if k == 0:
                return 1

            return sum(1/8 * dp(i + x, j + y, k - 1) for x, y in MOVES)
        return dp(row, column, k)`}}),{c(){t=k("style"),e=m(`body {
            background-color: #2e323b;
        }`),i=y(),o=k("main"),T(s.$$.fragment),a=y(),f=k("div"),n=k("a"),d=m("Leet Code 688."),C=y(),T(b.$$.fragment),j=y(),T(W.$$.fragment),M=y(),q=k("img"),w=y(),T(D.$$.fragment),me=y(),T(V.$$.fragment),ue=y(),T(G.$$.fragment),ye=y(),v=k("div"),T(R.$$.fragment),xe=y(),T(ce.$$.fragment),ze=y(),T(J.$$.fragment),Ce=y(),T(N.$$.fragment),De=y(),T(Q.$$.fragment),Oe=y(),T(U.$$.fragment),Ie=y(),T(Y.$$.fragment),Te=y(),X=k("img"),Ae=y(),T(Z.$$.fragment),Pe=y(),T(ee.$$.fragment),Le=y(),T(te.$$.fragment),je=y(),K=k("div"),se=k("img"),Se=y(),ne=k("img"),We=y(),oe=k("img"),Be=y(),$e=k("code"),Me=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),qe=y(),pe=k("code"),Ve=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),Ge=y(),de=k("code"),Ke=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Fe=y(),T(le.$$.fragment),He=y(),T(ae.$$.fragment),Re=y(),T(ie.$$.fragment),Je=y(),T(he.$$.fragment),this.h()},l(r){const g=dt("svelte-1787ze0",document.head);t=E(g,"STYLE",{});var ve=z(t);e=u(ve,`body {
            background-color: #2e323b;
        }`),ve.forEach(l),g.forEach(l),i=x(r),o=E(r,"MAIN",{class:!0});var F=z(o);A(s.$$.fragment,F),a=x(F),f=E(F,"DIV",{id:!0,class:!0});var S=z(f);n=E(S,"A",{id:!0,href:!0,class:!0});var _e=z(n);d=u(_e,"Leet Code 688."),_e.forEach(l),C=x(S),A(b.$$.fragment,S),j=x(S),A(W.$$.fragment,S),M=x(S),q=E(S,"IMG",{alt:!0,id:!0,src:!0,class:!0}),w=x(S),A(D.$$.fragment,S),me=x(S),A(V.$$.fragment,S),ue=x(S),A(G.$$.fragment,S),S.forEach(l),ye=x(F),v=E(F,"DIV",{id:!0,class:!0});var _=z(v);A(R.$$.fragment,_),xe=x(_),A(ce.$$.fragment,_),ze=x(_),A(J.$$.fragment,_),Ce=x(_),A(N.$$.fragment,_),De=x(_),A(Q.$$.fragment,_),Oe=x(_),A(U.$$.fragment,_),Ie=x(_),A(Y.$$.fragment,_),Te=x(_),X=E(_,"IMG",{alt:!0,id:!0,src:!0,class:!0}),Ae=x(_),A(Z.$$.fragment,_),Pe=x(_),A(ee.$$.fragment,_),Le=x(_),A(te.$$.fragment,_),je=x(_),K=E(_,"DIV",{id:!0,class:!0});var H=z(K);se=E(H,"IMG",{alt:!0,id:!0,src:!0,class:!0}),Se=x(H),ne=E(H,"IMG",{alt:!0,id:!0,src:!0,class:!0}),We=x(H),oe=E(H,"IMG",{alt:!0,id:!0,src:!0,class:!0}),H.forEach(l),Be=x(_),$e=E(_,"CODE",{class:!0});var be=z($e);Me=u(be,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),be.forEach(l),qe=x(_),pe=E(_,"CODE",{class:!0});var ge=z(pe);Ve=u(ge,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),ge.forEach(l),Ge=x(_),de=E(_,"CODE",{class:!0});var we=z(de);Ke=u(we,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),we.forEach(l),Fe=x(_),A(le.$$.fragment,_),He=x(_),A(ae.$$.fragment,_),Re=x(_),A(ie.$$.fragment,_),Je=x(_),A(he.$$.fragment,_),_.forEach(l),F.forEach(l),this.h()},h(){$(n,"id","leetCodeLink"),$(n,"href","https://leetcode.com/problems/knight-probability-in-chessboard/"),$(n,"class","svelte-vnz3em"),$(q,"alt",""),$(q,"id","knightImage"),ke(q.src,fe=kt)||$(q,"src",fe),$(q,"class","svelte-vnz3em"),$(f,"id","problem"),$(f,"class","svelte-vnz3em"),$(X,"alt",""),$(X,"id","knight_m0"),ke(X.src,Ye=Et)||$(X,"src",Ye),$(X,"class","svelte-vnz3em"),$(se,"alt",""),$(se,"id","knight_m1"),ke(se.src,Xe=yt)||$(se,"src",Xe),$(se,"class","svelte-vnz3em"),$(ne,"alt",""),$(ne,"id","knight_m2"),ke(ne.src,Ze=xt)||$(ne,"src",Ze),$(ne,"class","svelte-vnz3em"),$(oe,"alt",""),$(oe,"id","knight_m3"),ke(oe.src,et=zt)||$(oe,"src",et),$(oe,"class","svelte-vnz3em"),$(K,"id","knightMovesWrapper"),$(K,"class","svelte-vnz3em"),$($e,"class","svelte-vnz3em"),$(pe,"class","svelte-vnz3em"),$(de,"class","svelte-vnz3em"),$(v,"id","solution"),$(v,"class","svelte-vnz3em"),$(o,"class","svelte-vnz3em")},m(r,g){c(document.head,t),c(t,e),h(r,i,g),h(r,o,g),P(s,o,null),c(o,a),c(o,f),c(f,n),c(n,d),c(f,C),P(b,f,null),c(f,j),P(W,f,null),c(f,M),c(f,q),c(f,w),P(D,f,null),c(f,me),P(V,f,null),c(f,ue),P(G,f,null),c(o,ye),c(o,v),P(R,v,null),c(v,xe),P(ce,v,null),c(v,ze),P(J,v,null),c(v,Ce),P(N,v,null),c(v,De),P(Q,v,null),c(v,Oe),P(U,v,null),c(v,Ie),P(Y,v,null),c(v,Te),c(v,X),c(v,Ae),P(Z,v,null),c(v,Pe),P(ee,v,null),c(v,Le),P(te,v,null),c(v,je),c(v,K),c(K,se),c(K,Se),c(K,ne),c(K,We),c(K,oe),c(v,Be),c(v,$e),c($e,Me),c(v,qe),c(v,pe),c(pe,Ve),c(v,Ge),c(v,de),c(de,Ke),c(v,Fe),P(le,v,null),c(v,He),P(ae,v,null),c(v,Re),P(ie,v,null),c(v,Je),P(he,v,null),Ee=!0},p(r,[g]){const ve={};g&1&&(ve.$$scope={dirty:g,ctx:r}),b.$set(ve);const F={};g&1&&(F.$$scope={dirty:g,ctx:r}),W.$set(F);const S={};g&1&&(S.$$scope={dirty:g,ctx:r}),D.$set(S);const _e={};g&1&&(_e.$$scope={dirty:g,ctx:r}),V.$set(_e);const _={};g&1&&(_.$$scope={dirty:g,ctx:r}),G.$set(_);const H={};g&1&&(H.$$scope={dirty:g,ctx:r}),R.$set(H);const be={};g&1&&(be.$$scope={dirty:g,ctx:r}),J.$set(be);const ge={};g&1&&(ge.$$scope={dirty:g,ctx:r}),N.$set(ge);const we={};g&1&&(we.$$scope={dirty:g,ctx:r}),Q.$set(we);const tt={};g&1&&(tt.$$scope={dirty:g,ctx:r}),U.$set(tt);const st={};g&1&&(st.$$scope={dirty:g,ctx:r}),Y.$set(st);const nt={};g&1&&(nt.$$scope={dirty:g,ctx:r}),Z.$set(nt);const ot={};g&1&&(ot.$$scope={dirty:g,ctx:r}),ee.$set(ot);const lt={};g&1&&(lt.$$scope={dirty:g,ctx:r}),te.$set(lt);const at={};g&1&&(at.$$scope={dirty:g,ctx:r}),le.$set(at);const it={};g&1&&(it.$$scope={dirty:g,ctx:r}),ae.$set(it);const rt={};g&1&&(rt.$$scope={dirty:g,ctx:r}),ie.$set(rt)},i(r){Ee||(O(s.$$.fragment,r),O(b.$$.fragment,r),O(W.$$.fragment,r),O(D.$$.fragment,r),O(V.$$.fragment,r),O(G.$$.fragment,r),O(R.$$.fragment,r),O(ce.$$.fragment,r),O(J.$$.fragment,r),O(N.$$.fragment,r),O(Q.$$.fragment,r),O(U.$$.fragment,r),O(Y.$$.fragment,r),O(Z.$$.fragment,r),O(ee.$$.fragment,r),O(te.$$.fragment,r),O(le.$$.fragment,r),O(ae.$$.fragment,r),O(ie.$$.fragment,r),O(he.$$.fragment,r),Ee=!0)},o(r){I(s.$$.fragment,r),I(b.$$.fragment,r),I(W.$$.fragment,r),I(D.$$.fragment,r),I(V.$$.fragment,r),I(G.$$.fragment,r),I(R.$$.fragment,r),I(ce.$$.fragment,r),I(J.$$.fragment,r),I(N.$$.fragment,r),I(Q.$$.fragment,r),I(U.$$.fragment,r),I(Y.$$.fragment,r),I(Z.$$.fragment,r),I(ee.$$.fragment,r),I(te.$$.fragment,r),I(le.$$.fragment,r),I(ae.$$.fragment,r),I(ie.$$.fragment,r),I(he.$$.fragment,r),Ee=!1},d(r){l(t),r&&l(i),r&&l(o),L(s),L(b),L(W),L(D),L(V),L(G),L(R),L(ce),L(J),L(N),L(Q),L(U),L(Y),L(Z),L(ee),L(te),L(le),L(ae),L(ie),L(he)}}}class Qt extends Ne{constructor(t){super(),Qe(this,t,null,Ft,Ue,{})}}export{Qt as component};
