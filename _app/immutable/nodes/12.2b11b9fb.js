import{S as Ke,i as Ue,s as Fe,C as ft,k,l as E,m as D,h as l,n as h,b as c,D as ct,E as ht,F as mt,g as I,d as T,y as L,a as x,q as m,z as A,c as C,r as u,Q as _e,A as P,G as f,B as j,H as ie}from"../chunks/index.aba53c8a.js";/* empty css                      */import{C as at,p as it}from"../chunks/index.5c81f6a2.js";import{H as ut}from"../chunks/Header.102b2485.js";function $t($){let t,e;const i=$[1].default,o=ft(i,$,$[0],null);return{c(){t=k("div"),o&&o.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var a=D(t);o&&o.l(a),a.forEach(l),this.h()},h(){h(t,"class","svelte-3l6799")},m(s,a){c(s,t,a),o&&o.m(t,null),e=!0},p(s,[a]){o&&o.p&&(!e||a&1)&&ct(o,i,s,s[0],e?mt(i,s[0],a,null):ht(s[0]),null)},i(s){e||(I(o,s),e=!0)},o(s){T(o,s),e=!1},d(s){s&&l(t),o&&o.d(s)}}}function dt($,t,e){let{$$slots:i={},$$scope:o}=t;return $.$$set=s=>{"$$scope"in s&&e(0,o=s.$$scope)},[o,i]}class S extends Ke{constructor(t){super(),Ue(this,t,dt,$t,Fe,{})}}function pt($){let t,e;const i=$[1].default,o=ft(i,$,$[0],null);return{c(){t=k("div"),o&&o.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var a=D(t);o&&o.l(a),a.forEach(l),this.h()},h(){h(t,"class","svelte-14dtst")},m(s,a){c(s,t,a),o&&o.m(t,null),e=!0},p(s,[a]){o&&o.p&&(!e||a&1)&&ct(o,i,s,s[0],e?mt(i,s[0],a,null):ht(s[0]),null)},i(s){e||(I(o,s),e=!0)},o(s){T(o,s),e=!1},d(s){s&&l(t),o&&o.d(s)}}}function vt($,t,e){let{$$slots:i={},$$scope:o}=t;return $.$$set=s=>{"$$scope"in s&&e(0,o=s.$$scope)},[o,i]}class rt extends Ke{constructor(t){super(),Ue(this,t,vt,pt,Fe,{})}}const _t=""+new URL("../assets/knight.7c95888c.png",import.meta.url).href,gt=""+new URL("../assets/knight_m0.45722dd8.png",import.meta.url).href,bt=""+new URL("../assets/knight_m1.46e314b8.png",import.meta.url).href,wt=""+new URL("../assets/knight_m2.ac0a42e2.png",import.meta.url).href,kt=""+new URL("../assets/knight_m3.77ebe86d.png",import.meta.url).href;function Et($){let t,e,i,o,s,a,d,n,p,y,w,O,K,M,R,F;return{c(){t=m("On an "),e=k("code"),i=m("n x n"),o=m(" chessboard, a knight starts at the cell "),s=k("code"),a=m("(row, column)"),d=m(" and attempts to make exactly "),n=k("code"),p=m("k"),y=m(` moves.
            The rows and columns are 0-indexed, so the top-left cell is `),w=k("code"),O=m("(0, 0)"),K=m(", and the bottom-right cell is "),M=k("code"),R=m("(n - 1, n - 1)"),F=m("."),this.h()},l(_){t=u(_,"On an "),e=E(_,"CODE",{class:!0});var W=D(e);i=u(W,"n x n"),W.forEach(l),o=u(_," chessboard, a knight starts at the cell "),s=E(_,"CODE",{class:!0});var q=D(s);a=u(q,"(row, column)"),q.forEach(l),d=u(_," and attempts to make exactly "),n=E(_,"CODE",{class:!0});var ce=D(n);p=u(ce,"k"),ce.forEach(l),y=u(_,` moves.
            The rows and columns are 0-indexed, so the top-left cell is `),w=E(_,"CODE",{class:!0});var v=D(w);O=u(v,"(0, 0)"),v.forEach(l),K=u(_,", and the bottom-right cell is "),M=E(_,"CODE",{class:!0});var V=D(M);R=u(V,"(n - 1, n - 1)"),V.forEach(l),F=u(_,"."),this.h()},h(){h(e,"class","svelte-1edovk2"),h(s,"class","svelte-1edovk2"),h(n,"class","svelte-1edovk2"),h(w,"class","svelte-1edovk2"),h(M,"class","svelte-1edovk2")},m(_,W){c(_,t,W),c(_,e,W),f(e,i),c(_,o,W),c(_,s,W),f(s,a),c(_,d,W),c(_,n,W),f(n,p),c(_,y,W),c(_,w,W),f(w,O),c(_,K,W),c(_,M,W),f(M,R),c(_,F,W)},p:ie,d(_){_&&l(t),_&&l(e),_&&l(o),_&&l(s),_&&l(d),_&&l(n),_&&l(y),_&&l(w),_&&l(K),_&&l(M),_&&l(F)}}}function yt($){let t;return{c(){t=m(`A chess knight has eight possible moves it can make, as illustrated below.
            Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`)},l(e){t=u(e,`A chess knight has eight possible moves it can make, as illustrated below.
            Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`)},m(e,i){c(e,t,i)},d(e){e&&l(t)}}}function xt($){let t;return{c(){t=m("Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.")},l(e){t=u(e,"Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.")},m(e,i){c(e,t,i)},d(e){e&&l(t)}}}function Ct($){let t;return{c(){t=m("The knight continues moving until it has made exactly k moves or has moved off the chessboard.")},l(e){t=u(e,"The knight continues moving until it has made exactly k moves or has moved off the chessboard.")},m(e,i){c(e,t,i)},d(e){e&&l(t)}}}function Dt($){let t;return{c(){t=m("Return the probability that the knight remains on the board after it has stopped moving.")},l(e){t=u(e,"Return the probability that the knight remains on the board after it has stopped moving.")},m(e,i){c(e,t,i)},d(e){e&&l(t)}}}function Ot($){let t,e,i,o,s,a,d;return{c(){t=m(`The first

            `),e=k("a"),i=m("solution"),o=m(`

            presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

            We can significantly simplify this solution however through the use of recursion and the

            `),s=k("a"),a=m("Law of Total Probability"),d=m(`

            .`),this.h()},l(n){t=u(n,`The first

            `),e=E(n,"A",{href:!0,class:!0});var p=D(e);i=u(p,"solution"),p.forEach(l),o=u(n,`

            presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

            We can significantly simplify this solution however through the use of recursion and the

            `),s=E(n,"A",{href:!0,class:!0});var y=D(s);a=u(y,"Law of Total Probability"),y.forEach(l),d=u(n,`

            .`),this.h()},h(){h(e,"href","https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3322846/688-space-97-74-solution-with-step-by-step-explanation/"),h(e,"class","svelte-1edovk2"),h(s,"href","https://en.wikipedia.org/wiki/Law_of_total_probability"),h(s,"class","svelte-1edovk2")},m(n,p){c(n,t,p),c(n,e,p),f(e,i),c(n,o,p),c(n,s,p),f(s,a),c(n,d,p)},p:ie,d(n){n&&l(t),n&&l(e),n&&l(o),n&&l(s),n&&l(d)}}}function It($){let t;return{c(){t=m("The Law of Total Probability")},l(e){t=u(e,"The Law of Total Probability")},m(e,i){c(e,t,i)},d(e){e&&l(t)}}}function Tt($){let t,e,i,o,s,a,d,n,p,y;return{c(){t=m("Suppose the events "),e=k("code"),i=m("B_1, ..., B_k"),o=m(` are mutally exclusive and exhaustive events in a sample space,
            then for any event `),s=k("code"),a=m("A"),d=m(" in that sample space "),n=k("code"),p=m("P(A) = P(A n B_1) + ... + P(A n B_k)"),y=m("."),this.h()},l(w){t=u(w,"Suppose the events "),e=E(w,"CODE",{class:!0});var O=D(e);i=u(O,"B_1, ..., B_k"),O.forEach(l),o=u(w,` are mutally exclusive and exhaustive events in a sample space,
            then for any event `),s=E(w,"CODE",{class:!0});var K=D(s);a=u(K,"A"),K.forEach(l),d=u(w," in that sample space "),n=E(w,"CODE",{class:!0});var M=D(n);p=u(M,"P(A) = P(A n B_1) + ... + P(A n B_k)"),M.forEach(l),y=u(w,"."),this.h()},h(){h(e,"class","svelte-1edovk2"),h(s,"class","svelte-1edovk2"),h(n,"class","svelte-1edovk2")},m(w,O){c(w,t,O),c(w,e,O),f(e,i),c(w,o,O),c(w,s,O),f(s,a),c(w,d,O),c(w,n,O),f(n,p),c(w,y,O)},p:ie,d(w){w&&l(t),w&&l(e),w&&l(o),w&&l(s),w&&l(d),w&&l(n),w&&l(y)}}}function Lt($){let t,e,i,o,s,a,d;return{c(){t=m("If we consider the knight starts within a red "),e=k("code"),i=m("4x4"),o=m(" board, and only has "),s=k("code"),a=m("1"),d=m(` move,
            then only will 3 out of the 8 possible moves keep the knight within the board.
            If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.`),this.h()},l(n){t=u(n,"If we consider the knight starts within a red "),e=E(n,"CODE",{class:!0});var p=D(e);i=u(p,"4x4"),p.forEach(l),o=u(n," board, and only has "),s=E(n,"CODE",{class:!0});var y=D(s);a=u(y,"1"),y.forEach(l),d=u(n,` move,
            then only will 3 out of the 8 possible moves keep the knight within the board.
            If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.`),this.h()},h(){h(e,"class","svelte-1edovk2"),h(s,"class","svelte-1edovk2")},m(n,p){c(n,t,p),c(n,e,p),f(e,i),c(n,o,p),c(n,s,p),f(s,a),c(n,d,p)},p:ie,d(n){n&&l(t),n&&l(e),n&&l(o),n&&l(s),n&&l(d)}}}function At($){let t,e,i,o,s,a,d;return{c(){t=m("With an array containing the probability of each move occurring, "),e=k("code"),i=m("[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),o=m(`,
            and another array of the probabilities that the knight stays on the board, `),s=k("code"),a=m("[1, 1, 1, 0, 0, 0, 0, 0]"),d=m(`,
            we can calculate the result through the sum of both arrays.`),this.h()},l(n){t=u(n,"With an array containing the probability of each move occurring, "),e=E(n,"CODE",{class:!0});var p=D(e);i=u(p,"[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),p.forEach(l),o=u(n,`,
            and another array of the probabilities that the knight stays on the board, `),s=E(n,"CODE",{class:!0});var y=D(s);a=u(y,"[1, 1, 1, 0, 0, 0, 0, 0]"),y.forEach(l),d=u(n,`,
            we can calculate the result through the sum of both arrays.`),this.h()},h(){h(e,"class","svelte-1edovk2"),h(s,"class","svelte-1edovk2")},m(n,p){c(n,t,p),c(n,e,p),f(e,i),c(n,o,p),c(n,s,p),f(s,a),c(n,d,p)},p:ie,d(n){n&&l(t),n&&l(e),n&&l(o),n&&l(s),n&&l(d)}}}function Pt($){let t,e,i,o,s;return{c(){t=m(`The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
            `),e=k("br"),i=x(),o=k("code"),s=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),this.h()},l(a){t=u(a,`The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
            `),e=E(a,"BR",{}),i=C(a),o=E(a,"CODE",{class:!0});var d=D(o);s=u(d,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),d.forEach(l),this.h()},h(){h(o,"class","svelte-1edovk2")},m(a,d){c(a,t,d),c(a,e,d),c(a,i,d),c(a,o,d),f(o,s)},p:ie,d(a){a&&l(t),a&&l(e),a&&l(i),a&&l(o)}}}function jt($){let t,e,i,o,s,a,d;return{c(){t=m("We were able to set the probability that the knight would remain on the board as "),e=k("code"),i=m("1"),o=m(` as it was the final move of the knight -
            if the knight ends on a square within the board there is a `),s=k("code"),a=m("100%"),d=m(` chance the knight has remained within the board.
            Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),this.h()},l(n){t=u(n,"We were able to set the probability that the knight would remain on the board as "),e=E(n,"CODE",{class:!0});var p=D(e);i=u(p,"1"),p.forEach(l),o=u(n,` as it was the final move of the knight -
            if the knight ends on a square within the board there is a `),s=E(n,"CODE",{class:!0});var y=D(s);a=u(y,"100%"),y.forEach(l),d=u(n,` chance the knight has remained within the board.
            Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),this.h()},h(){h(e,"class","svelte-1edovk2"),h(s,"class","svelte-1edovk2")},m(n,p){c(n,t,p),c(n,e,p),f(e,i),c(n,o,p),c(n,s,p),f(s,a),c(n,d,p)},p:ie,d(n){n&&l(t),n&&l(e),n&&l(o),n&&l(s),n&&l(d)}}}function Wt($){let t;return{c(){t=m(`Let's consider the previous example but where the knight moves twice instead of just once.
            We can work through this problem backwards to understand how the statistics behind the solution works.`)},l(e){t=u(e,`Let's consider the previous example but where the knight moves twice instead of just once.
            We can work through this problem backwards to understand how the statistics behind the solution works.`)},m(e,i){c(e,t,i)},d(e){e&&l(t)}}}function Bt($){let t;return{c(){t=m(`For each of the 3 possibilities the knight can make for it's second move,
            we can calculate the probability that the knight stays within the board like we did in the previous example,
            as it is the final move.`)},l(e){t=u(e,`For each of the 3 possibilities the knight can make for it's second move,
            we can calculate the probability that the knight stays within the board like we did in the previous example,
            as it is the final move.`)},m(e,i){c(e,t,i)},d(e){e&&l(t)}}}function St($){let t,e,i,o,s;return{c(){t=m(`We can plug these results back into the original equation to determine the final probability:
            `),e=k("br"),i=x(),o=k("code"),s=m("(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),this.h()},l(a){t=u(a,`We can plug these results back into the original equation to determine the final probability:
            `),e=E(a,"BR",{}),i=C(a),o=E(a,"CODE",{class:!0});var d=D(o);s=u(d,"(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),d.forEach(l),this.h()},h(){h(o,"class","svelte-1edovk2")},m(a,d){c(a,t,d),c(a,e,d),c(a,i,d),c(a,o,d),f(o,s)},p:ie,d(a){a&&l(t),a&&l(e),a&&l(i),a&&l(o)}}}function Mt($){let t;return{c(){t=m("Solution")},l(e){t=u(e,"Solution")},m(e,i){c(e,t,i)},d(e){e&&l(t)}}}function Rt($){let t;return{c(){t=m("The following solution uses the law of total probability to calculate the final answer")},l(e){t=u(e,"The following solution uses the law of total probability to calculate the final answer")},m(e,i){c(e,t,i)},d(e){e&&l(t)}}}function qt($){let t,e,i,o,s,a,d,n,p,y,w,O,K,M,R,F,_,W,q,ce,v,V,be,re,we,H,ke,z,Ee,N,ye,Q,xe,J,Ce,X,He,De,Y,Oe,Z,Ie,ee,Te,G,te,ze,Le,se,Ne,Ae,oe,Qe,Pe,he,je,We,me,Be,Se,ue,Me,Re,ne,qe,le,Ve,ae,Ge,fe,ge;return e=new ut({props:{date:"02.10.2023",title:"Leet Code 688. Knight Probability in Chessboard"}}),n=new S({props:{$$slots:{default:[Et]},$$scope:{ctx:$}}}),y=new S({props:{$$slots:{default:[yt]},$$scope:{ctx:$}}}),R=new S({props:{$$slots:{default:[xt]},$$scope:{ctx:$}}}),_=new S({props:{$$slots:{default:[Ct]},$$scope:{ctx:$}}}),q=new S({props:{$$slots:{default:[Dt]},$$scope:{ctx:$}}}),V=new S({props:{$$slots:{default:[Ot]},$$scope:{ctx:$}}}),re=new at({props:{filetype:[it()],readOnly:!0,doc:`class Solution:
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
        return memo[row][column]`}}),H=new rt({props:{$$slots:{default:[It]},$$scope:{ctx:$}}}),z=new S({props:{$$slots:{default:[Tt]},$$scope:{ctx:$}}}),N=new S({props:{$$slots:{default:[Lt]},$$scope:{ctx:$}}}),Q=new S({props:{$$slots:{default:[At]},$$scope:{ctx:$}}}),J=new S({props:{$$slots:{default:[Pt]},$$scope:{ctx:$}}}),Y=new S({props:{$$slots:{default:[jt]},$$scope:{ctx:$}}}),Z=new S({props:{$$slots:{default:[Wt]},$$scope:{ctx:$}}}),ee=new S({props:{$$slots:{default:[Bt]},$$scope:{ctx:$}}}),ne=new S({props:{$$slots:{default:[St]},$$scope:{ctx:$}}}),le=new rt({props:{$$slots:{default:[Mt]},$$scope:{ctx:$}}}),ae=new S({props:{$$slots:{default:[Rt]},$$scope:{ctx:$}}}),fe=new at({props:{filetype:[it()],readOnly:!0,doc:`class Solution:
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
        return dp(row, column, k)`}}),{c(){t=k("main"),L(e.$$.fragment),i=x(),o=k("div"),s=k("a"),a=m("Leet Code 688."),d=x(),L(n.$$.fragment),p=x(),L(y.$$.fragment),w=x(),O=k("img"),M=x(),L(R.$$.fragment),F=x(),L(_.$$.fragment),W=x(),L(q.$$.fragment),ce=x(),v=k("div"),L(V.$$.fragment),be=x(),L(re.$$.fragment),we=x(),L(H.$$.fragment),ke=x(),L(z.$$.fragment),Ee=x(),L(N.$$.fragment),ye=x(),L(Q.$$.fragment),xe=x(),L(J.$$.fragment),Ce=x(),X=k("img"),De=x(),L(Y.$$.fragment),Oe=x(),L(Z.$$.fragment),Ie=x(),L(ee.$$.fragment),Te=x(),G=k("div"),te=k("img"),Le=x(),se=k("img"),Ae=x(),oe=k("img"),Pe=x(),he=k("code"),je=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),We=x(),me=k("code"),Be=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),Se=x(),ue=k("code"),Me=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Re=x(),L(ne.$$.fragment),qe=x(),L(le.$$.fragment),Ve=x(),L(ae.$$.fragment),Ge=x(),L(fe.$$.fragment),this.h()},l(r){t=E(r,"MAIN",{class:!0});var g=D(t);A(e.$$.fragment,g),i=C(g),o=E(g,"DIV",{id:!0,class:!0});var B=D(o);s=E(B,"A",{id:!0,href:!0,class:!0});var $e=D(s);a=u($e,"Leet Code 688."),$e.forEach(l),d=C(B),A(n.$$.fragment,B),p=C(B),A(y.$$.fragment,B),w=C(B),O=E(B,"IMG",{alt:!0,id:!0,src:!0,class:!0}),M=C(B),A(R.$$.fragment,B),F=C(B),A(_.$$.fragment,B),W=C(B),A(q.$$.fragment,B),B.forEach(l),ce=C(g),v=E(g,"DIV",{id:!0,class:!0});var b=D(v);A(V.$$.fragment,b),be=C(b),A(re.$$.fragment,b),we=C(b),A(H.$$.fragment,b),ke=C(b),A(z.$$.fragment,b),Ee=C(b),A(N.$$.fragment,b),ye=C(b),A(Q.$$.fragment,b),xe=C(b),A(J.$$.fragment,b),Ce=C(b),X=E(b,"IMG",{alt:!0,id:!0,src:!0,class:!0}),De=C(b),A(Y.$$.fragment,b),Oe=C(b),A(Z.$$.fragment,b),Ie=C(b),A(ee.$$.fragment,b),Te=C(b),G=E(b,"DIV",{id:!0,class:!0});var U=D(G);te=E(U,"IMG",{alt:!0,id:!0,src:!0,class:!0}),Le=C(U),se=E(U,"IMG",{alt:!0,id:!0,src:!0,class:!0}),Ae=C(U),oe=E(U,"IMG",{alt:!0,id:!0,src:!0,class:!0}),U.forEach(l),Pe=C(b),he=E(b,"CODE",{class:!0});var de=D(he);je=u(de,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),de.forEach(l),We=C(b),me=E(b,"CODE",{class:!0});var pe=D(me);Be=u(pe,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),pe.forEach(l),Se=C(b),ue=E(b,"CODE",{class:!0});var ve=D(ue);Me=u(ve,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),ve.forEach(l),Re=C(b),A(ne.$$.fragment,b),qe=C(b),A(le.$$.fragment,b),Ve=C(b),A(ae.$$.fragment,b),Ge=C(b),A(fe.$$.fragment,b),b.forEach(l),g.forEach(l),this.h()},h(){h(s,"id","leetCodeLink"),h(s,"href","https://leetcode.com/problems/knight-probability-in-chessboard/"),h(s,"class","svelte-1edovk2"),h(O,"alt",""),h(O,"id","knightImage"),_e(O.src,K=_t)||h(O,"src",K),h(O,"class","svelte-1edovk2"),h(o,"id","problem"),h(o,"class","svelte-1edovk2"),h(X,"alt",""),h(X,"id","knight_m0"),_e(X.src,He=gt)||h(X,"src",He),h(X,"class","svelte-1edovk2"),h(te,"alt",""),h(te,"id","knight_m1"),_e(te.src,ze=bt)||h(te,"src",ze),h(te,"class","svelte-1edovk2"),h(se,"alt",""),h(se,"id","knight_m2"),_e(se.src,Ne=wt)||h(se,"src",Ne),h(se,"class","svelte-1edovk2"),h(oe,"alt",""),h(oe,"id","knight_m3"),_e(oe.src,Qe=kt)||h(oe,"src",Qe),h(oe,"class","svelte-1edovk2"),h(G,"id","knightMovesWrapper"),h(G,"class","svelte-1edovk2"),h(he,"class","svelte-1edovk2"),h(me,"class","svelte-1edovk2"),h(ue,"class","svelte-1edovk2"),h(v,"id","solution"),h(v,"class","svelte-1edovk2"),h(t,"class","svelte-1edovk2")},m(r,g){c(r,t,g),P(e,t,null),f(t,i),f(t,o),f(o,s),f(s,a),f(o,d),P(n,o,null),f(o,p),P(y,o,null),f(o,w),f(o,O),f(o,M),P(R,o,null),f(o,F),P(_,o,null),f(o,W),P(q,o,null),f(t,ce),f(t,v),P(V,v,null),f(v,be),P(re,v,null),f(v,we),P(H,v,null),f(v,ke),P(z,v,null),f(v,Ee),P(N,v,null),f(v,ye),P(Q,v,null),f(v,xe),P(J,v,null),f(v,Ce),f(v,X),f(v,De),P(Y,v,null),f(v,Oe),P(Z,v,null),f(v,Ie),P(ee,v,null),f(v,Te),f(v,G),f(G,te),f(G,Le),f(G,se),f(G,Ae),f(G,oe),f(v,Pe),f(v,he),f(he,je),f(v,We),f(v,me),f(me,Be),f(v,Se),f(v,ue),f(ue,Me),f(v,Re),P(ne,v,null),f(v,qe),P(le,v,null),f(v,Ve),P(ae,v,null),f(v,Ge),P(fe,v,null),ge=!0},p(r,[g]){const B={};g&1&&(B.$$scope={dirty:g,ctx:r}),n.$set(B);const $e={};g&1&&($e.$$scope={dirty:g,ctx:r}),y.$set($e);const b={};g&1&&(b.$$scope={dirty:g,ctx:r}),R.$set(b);const U={};g&1&&(U.$$scope={dirty:g,ctx:r}),_.$set(U);const de={};g&1&&(de.$$scope={dirty:g,ctx:r}),q.$set(de);const pe={};g&1&&(pe.$$scope={dirty:g,ctx:r}),V.$set(pe);const ve={};g&1&&(ve.$$scope={dirty:g,ctx:r}),H.$set(ve);const Je={};g&1&&(Je.$$scope={dirty:g,ctx:r}),z.$set(Je);const Xe={};g&1&&(Xe.$$scope={dirty:g,ctx:r}),N.$set(Xe);const Ye={};g&1&&(Ye.$$scope={dirty:g,ctx:r}),Q.$set(Ye);const Ze={};g&1&&(Ze.$$scope={dirty:g,ctx:r}),J.$set(Ze);const et={};g&1&&(et.$$scope={dirty:g,ctx:r}),Y.$set(et);const tt={};g&1&&(tt.$$scope={dirty:g,ctx:r}),Z.$set(tt);const st={};g&1&&(st.$$scope={dirty:g,ctx:r}),ee.$set(st);const ot={};g&1&&(ot.$$scope={dirty:g,ctx:r}),ne.$set(ot);const nt={};g&1&&(nt.$$scope={dirty:g,ctx:r}),le.$set(nt);const lt={};g&1&&(lt.$$scope={dirty:g,ctx:r}),ae.$set(lt)},i(r){ge||(I(e.$$.fragment,r),I(n.$$.fragment,r),I(y.$$.fragment,r),I(R.$$.fragment,r),I(_.$$.fragment,r),I(q.$$.fragment,r),I(V.$$.fragment,r),I(re.$$.fragment,r),I(H.$$.fragment,r),I(z.$$.fragment,r),I(N.$$.fragment,r),I(Q.$$.fragment,r),I(J.$$.fragment,r),I(Y.$$.fragment,r),I(Z.$$.fragment,r),I(ee.$$.fragment,r),I(ne.$$.fragment,r),I(le.$$.fragment,r),I(ae.$$.fragment,r),I(fe.$$.fragment,r),ge=!0)},o(r){T(e.$$.fragment,r),T(n.$$.fragment,r),T(y.$$.fragment,r),T(R.$$.fragment,r),T(_.$$.fragment,r),T(q.$$.fragment,r),T(V.$$.fragment,r),T(re.$$.fragment,r),T(H.$$.fragment,r),T(z.$$.fragment,r),T(N.$$.fragment,r),T(Q.$$.fragment,r),T(J.$$.fragment,r),T(Y.$$.fragment,r),T(Z.$$.fragment,r),T(ee.$$.fragment,r),T(ne.$$.fragment,r),T(le.$$.fragment,r),T(ae.$$.fragment,r),T(fe.$$.fragment,r),ge=!1},d(r){r&&l(t),j(e),j(n),j(y),j(R),j(_),j(q),j(V),j(re),j(H),j(z),j(N),j(Q),j(J),j(Y),j(Z),j(ee),j(ne),j(le),j(ae),j(fe)}}}class Ft extends Ke{constructor(t){super(),Ue(this,t,null,qt,Fe,{})}}export{Ft as component};