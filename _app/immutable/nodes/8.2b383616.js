import{S as Ee,i as xe,s as ze,k,q as $,a as E,l as y,m as z,r as d,h as o,c as x,n as u,b as h,G as f,u as ft,H as F,o as vt,C as ut,D as $t,E as dt,F as pt,g as I,d as O,y as T,J as _t,z as A,Q as ke,A as L,B as P}from"../chunks/index.aba53c8a.js";/* empty css                      */import{C as ct,p as ht}from"../chunks/index.2087d5d3.js";function bt(m){let t,e,a,l,s,i;return{c(){t=k("div"),e=k("div"),a=$(m[1]),l=E(),s=k("div"),i=$(m[0]),this.h()},l(r){t=y(r,"DIV",{class:!0});var n=z(t);e=y(n,"DIV",{class:!0});var p=z(e);a=d(p,m[1]),p.forEach(o),l=x(n),s=y(n,"DIV",{class:!0});var C=z(s);i=d(C,m[0]),C.forEach(o),n.forEach(o),this.h()},h(){u(e,"class","title header-text svelte-1tylr6l"),u(s,"class","date header-text svelte-1tylr6l"),u(t,"class","header svelte-1tylr6l")},m(r,n){h(r,t,n),f(t,e),f(e,a),f(t,l),f(t,s),f(s,i)},p(r,[n]){n&2&&ft(a,r[1]),n&1&&ft(i,r[0])},i:F,o:F,d(r){r&&o(t)}}}function gt(m){let[t,e,a]=m.split(".").map(l=>Number(l));return e=e-1,new Date(a,e,t).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function wt(m,t,e){let{title:a}=t,{date:l}=t;return vt(()=>{e(0,l=gt(l))}),m.$$set=s=>{"title"in s&&e(1,a=s.title),"date"in s&&e(0,l=s.date)},[l,a]}class kt extends Ee{constructor(t){super(),xe(this,t,wt,bt,ze,{title:1,date:0})}}function yt(m){let t,e;const a=m[1].default,l=ut(a,m,m[0],null);return{c(){t=k("div"),l&&l.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var i=z(t);l&&l.l(i),i.forEach(o),this.h()},h(){u(t,"class","svelte-yz4mk3")},m(s,i){h(s,t,i),l&&l.m(t,null),e=!0},p(s,[i]){l&&l.p&&(!e||i&1)&&$t(l,a,s,s[0],e?pt(a,s[0],i,null):dt(s[0]),null)},i(s){e||(I(l,s),e=!0)},o(s){O(l,s),e=!1},d(s){s&&o(t),l&&l.d(s)}}}function Et(m,t,e){let{$$slots:a={},$$scope:l}=t;return m.$$set=s=>{"$$scope"in s&&e(0,l=s.$$scope)},[l,a]}class B extends Ee{constructor(t){super(),xe(this,t,Et,yt,ze,{})}}function xt(m){let t,e;const a=m[1].default,l=ut(a,m,m[0],null);return{c(){t=k("div"),l&&l.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var i=z(t);l&&l.l(i),i.forEach(o),this.h()},h(){u(t,"class","svelte-9gis9f")},m(s,i){h(s,t,i),l&&l.m(t,null),e=!0},p(s,[i]){l&&l.p&&(!e||i&1)&&$t(l,a,s,s[0],e?pt(a,s[0],i,null):dt(s[0]),null)},i(s){e||(I(l,s),e=!0)},o(s){O(l,s),e=!1},d(s){s&&o(t),l&&l.d(s)}}}function zt(m,t,e){let{$$slots:a={},$$scope:l}=t;return m.$$set=s=>{"$$scope"in s&&e(0,l=s.$$scope)},[l,a]}class mt extends Ee{constructor(t){super(),xe(this,t,zt,xt,ze,{})}}const Ct="/_app/immutable/assets/knight.7c95888c.png",Dt="/_app/immutable/assets/knight_m0.45722dd8.png",It="/_app/immutable/assets/knight_m1.46e314b8.png",Ot="/_app/immutable/assets/knight_m2.ac0a42e2.png",Tt="/_app/immutable/assets/knight_m3.77ebe86d.png";function At(m){let t,e,a,l,s,i,r,n,p,C,b,S,W,M,V,fe;return{c(){t=$("On an "),e=k("code"),a=$("n x n"),l=$(" chessboard, a knight starts at the cell "),s=k("code"),i=$("(row, column)"),r=$(" and attempts to make exactly "),n=k("code"),p=$("k"),C=$(` moves.
            The rows and columns are 0-indexed, so the top-left cell is `),b=k("code"),S=$("(0, 0)"),W=$(", and the bottom-right cell is "),M=k("code"),V=$("(n - 1, n - 1)"),fe=$("."),this.h()},l(w){t=d(w,"On an "),e=y(w,"CODE",{class:!0});var D=z(e);a=d(D,"n x n"),D.forEach(o),l=d(w," chessboard, a knight starts at the cell "),s=y(w,"CODE",{class:!0});var me=z(s);i=d(me,"(row, column)"),me.forEach(o),r=d(w," and attempts to make exactly "),n=y(w,"CODE",{class:!0});var q=z(n);p=d(q,"k"),q.forEach(o),C=d(w,` moves.
            The rows and columns are 0-indexed, so the top-left cell is `),b=y(w,"CODE",{class:!0});var ue=z(b);S=d(ue,"(0, 0)"),ue.forEach(o),W=d(w,", and the bottom-right cell is "),M=y(w,"CODE",{class:!0});var G=z(M);V=d(G,"(n - 1, n - 1)"),G.forEach(o),fe=d(w,"."),this.h()},h(){u(e,"class","svelte-vnz3em"),u(s,"class","svelte-vnz3em"),u(n,"class","svelte-vnz3em"),u(b,"class","svelte-vnz3em"),u(M,"class","svelte-vnz3em")},m(w,D){h(w,t,D),h(w,e,D),f(e,a),h(w,l,D),h(w,s,D),f(s,i),h(w,r,D),h(w,n,D),f(n,p),h(w,C,D),h(w,b,D),f(b,S),h(w,W,D),h(w,M,D),f(M,V),h(w,fe,D)},p:F,d(w){w&&o(t),w&&o(e),w&&o(l),w&&o(s),w&&o(r),w&&o(n),w&&o(C),w&&o(b),w&&o(W),w&&o(M),w&&o(fe)}}}function Lt(m){let t;return{c(){t=$(`A chess knight has eight possible moves it can make, as illustrated below.
            Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`)},l(e){t=d(e,`A chess knight has eight possible moves it can make, as illustrated below.
            Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`)},m(e,a){h(e,t,a)},d(e){e&&o(t)}}}function Pt(m){let t;return{c(){t=$("Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.")},l(e){t=d(e,"Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.")},m(e,a){h(e,t,a)},d(e){e&&o(t)}}}function St(m){let t;return{c(){t=$("The knight continues moving until it has made exactly k moves or has moved off the chessboard.")},l(e){t=d(e,"The knight continues moving until it has made exactly k moves or has moved off the chessboard.")},m(e,a){h(e,t,a)},d(e){e&&o(t)}}}function jt(m){let t;return{c(){t=$("Return the probability that the knight remains on the board after it has stopped moving.")},l(e){t=d(e,"Return the probability that the knight remains on the board after it has stopped moving.")},m(e,a){h(e,t,a)},d(e){e&&o(t)}}}function Wt(m){let t,e,a,l,s,i,r;return{c(){t=$(`The first

            `),e=k("a"),a=$("solution"),l=$(`

            presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

            We can significantly simplify this solution however through the use of recursion and the

            `),s=k("a"),i=$("Law of Total Probability"),r=$(`

            .`),this.h()},l(n){t=d(n,`The first

            `),e=y(n,"A",{href:!0,class:!0});var p=z(e);a=d(p,"solution"),p.forEach(o),l=d(n,`

            presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

            We can significantly simplify this solution however through the use of recursion and the

            `),s=y(n,"A",{href:!0,class:!0});var C=z(s);i=d(C,"Law of Total Probability"),C.forEach(o),r=d(n,`

            .`),this.h()},h(){u(e,"href","https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3322846/688-space-97-74-solution-with-step-by-step-explanation/"),u(e,"class","svelte-vnz3em"),u(s,"href","https://en.wikipedia.org/wiki/Law_of_total_probability"),u(s,"class","svelte-vnz3em")},m(n,p){h(n,t,p),h(n,e,p),f(e,a),h(n,l,p),h(n,s,p),f(s,i),h(n,r,p)},p:F,d(n){n&&o(t),n&&o(e),n&&o(l),n&&o(s),n&&o(r)}}}function Bt(m){let t;return{c(){t=$("The Law of Total Probability")},l(e){t=d(e,"The Law of Total Probability")},m(e,a){h(e,t,a)},d(e){e&&o(t)}}}function Mt(m){let t,e,a,l,s,i,r,n,p,C;return{c(){t=$("Suppose the events "),e=k("code"),a=$("B_1, ..., B_k"),l=$(` are mutally exclusive and exhaustive events in a sample space,
            then for any event `),s=k("code"),i=$("A"),r=$(" in that sample space "),n=k("code"),p=$("P(A) = P(A n B_1) + ... + P(A n B_k)"),C=$("."),this.h()},l(b){t=d(b,"Suppose the events "),e=y(b,"CODE",{class:!0});var S=z(e);a=d(S,"B_1, ..., B_k"),S.forEach(o),l=d(b,` are mutally exclusive and exhaustive events in a sample space,
            then for any event `),s=y(b,"CODE",{class:!0});var W=z(s);i=d(W,"A"),W.forEach(o),r=d(b," in that sample space "),n=y(b,"CODE",{class:!0});var M=z(n);p=d(M,"P(A) = P(A n B_1) + ... + P(A n B_k)"),M.forEach(o),C=d(b,"."),this.h()},h(){u(e,"class","svelte-vnz3em"),u(s,"class","svelte-vnz3em"),u(n,"class","svelte-vnz3em")},m(b,S){h(b,t,S),h(b,e,S),f(e,a),h(b,l,S),h(b,s,S),f(s,i),h(b,r,S),h(b,n,S),f(n,p),h(b,C,S)},p:F,d(b){b&&o(t),b&&o(e),b&&o(l),b&&o(s),b&&o(r),b&&o(n),b&&o(C)}}}function Vt(m){let t,e,a,l,s,i,r;return{c(){t=$("If we consider the knight starts within a red "),e=k("code"),a=$("4x4"),l=$(" board, and only has "),s=k("code"),i=$("1"),r=$(` move,
            then only will 3 out of the 8 possible moves keep the knight within the board.
            If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.`),this.h()},l(n){t=d(n,"If we consider the knight starts within a red "),e=y(n,"CODE",{class:!0});var p=z(e);a=d(p,"4x4"),p.forEach(o),l=d(n," board, and only has "),s=y(n,"CODE",{class:!0});var C=z(s);i=d(C,"1"),C.forEach(o),r=d(n,` move,
            then only will 3 out of the 8 possible moves keep the knight within the board.
            If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.`),this.h()},h(){u(e,"class","svelte-vnz3em"),u(s,"class","svelte-vnz3em")},m(n,p){h(n,t,p),h(n,e,p),f(e,a),h(n,l,p),h(n,s,p),f(s,i),h(n,r,p)},p:F,d(n){n&&o(t),n&&o(e),n&&o(l),n&&o(s),n&&o(r)}}}function qt(m){let t,e,a,l,s,i,r;return{c(){t=$("With an array containing the probability of each move occurring, "),e=k("code"),a=$("[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),l=$(`,
            and another array of the probabilities that the knight stays on the board, `),s=k("code"),i=$("[1, 1, 1, 0, 0, 0, 0, 0]"),r=$(`,
            we can calculate the result through the sum of both arrays.`),this.h()},l(n){t=d(n,"With an array containing the probability of each move occurring, "),e=y(n,"CODE",{class:!0});var p=z(e);a=d(p,"[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),p.forEach(o),l=d(n,`,
            and another array of the probabilities that the knight stays on the board, `),s=y(n,"CODE",{class:!0});var C=z(s);i=d(C,"[1, 1, 1, 0, 0, 0, 0, 0]"),C.forEach(o),r=d(n,`,
            we can calculate the result through the sum of both arrays.`),this.h()},h(){u(e,"class","svelte-vnz3em"),u(s,"class","svelte-vnz3em")},m(n,p){h(n,t,p),h(n,e,p),f(e,a),h(n,l,p),h(n,s,p),f(s,i),h(n,r,p)},p:F,d(n){n&&o(t),n&&o(e),n&&o(l),n&&o(s),n&&o(r)}}}function Gt(m){let t,e,a,l,s;return{c(){t=$(`The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
            `),e=k("br"),a=E(),l=k("code"),s=$("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),this.h()},l(i){t=d(i,`The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
            `),e=y(i,"BR",{}),a=x(i),l=y(i,"CODE",{class:!0});var r=z(l);s=d(r,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),r.forEach(o),this.h()},h(){u(l,"class","svelte-vnz3em")},m(i,r){h(i,t,r),h(i,e,r),h(i,a,r),h(i,l,r),f(l,s)},p:F,d(i){i&&o(t),i&&o(e),i&&o(a),i&&o(l)}}}function Kt(m){let t,e,a,l,s,i,r;return{c(){t=$("We were able to set the probability that the knight would remain on the board as "),e=k("code"),a=$("1"),l=$(` as it was the final move of the knight -
            if the knight ends on a square within the board there is a `),s=k("code"),i=$("100%"),r=$(` chance the knight has remained within the board.
            Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),this.h()},l(n){t=d(n,"We were able to set the probability that the knight would remain on the board as "),e=y(n,"CODE",{class:!0});var p=z(e);a=d(p,"1"),p.forEach(o),l=d(n,` as it was the final move of the knight -
            if the knight ends on a square within the board there is a `),s=y(n,"CODE",{class:!0});var C=z(s);i=d(C,"100%"),C.forEach(o),r=d(n,` chance the knight has remained within the board.
            Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),this.h()},h(){u(e,"class","svelte-vnz3em"),u(s,"class","svelte-vnz3em")},m(n,p){h(n,t,p),h(n,e,p),f(e,a),h(n,l,p),h(n,s,p),f(s,i),h(n,r,p)},p:F,d(n){n&&o(t),n&&o(e),n&&o(l),n&&o(s),n&&o(r)}}}function Ft(m){let t;return{c(){t=$(`Let's consider the previous example but where the knight moves twice instead of just once.
            We can work through this problem backwards to understand how the statistics behind the solution works.`)},l(e){t=d(e,`Let's consider the previous example but where the knight moves twice instead of just once.
            We can work through this problem backwards to understand how the statistics behind the solution works.`)},m(e,a){h(e,t,a)},d(e){e&&o(t)}}}function Ht(m){let t;return{c(){t=$(`For each of the 3 possibilities the knight can make for it's second move,
            we can calculate the probability that the knight stays within the board like we did in the previous example,
            as it is the final move.`)},l(e){t=d(e,`For each of the 3 possibilities the knight can make for it's second move,
            we can calculate the probability that the knight stays within the board like we did in the previous example,
            as it is the final move.`)},m(e,a){h(e,t,a)},d(e){e&&o(t)}}}function Rt(m){let t,e,a,l,s;return{c(){t=$(`We can plug these results back into the original equation to determine the final probability:
            `),e=k("br"),a=E(),l=k("code"),s=$("(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),this.h()},l(i){t=d(i,`We can plug these results back into the original equation to determine the final probability:
            `),e=y(i,"BR",{}),a=x(i),l=y(i,"CODE",{class:!0});var r=z(l);s=d(r,"(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),r.forEach(o),this.h()},h(){u(l,"class","svelte-vnz3em")},m(i,r){h(i,t,r),h(i,e,r),h(i,a,r),h(i,l,r),f(l,s)},p:F,d(i){i&&o(t),i&&o(e),i&&o(a),i&&o(l)}}}function Nt(m){let t;return{c(){t=$("Solution")},l(e){t=d(e,"Solution")},m(e,a){h(e,t,a)},d(e){e&&o(t)}}}function Ut(m){let t;return{c(){t=$("The following solution uses the law of total probability to calculate the final answer")},l(e){t=d(e,"The following solution uses the law of total probability to calculate the final answer")},m(e,a){h(e,t,a)},d(e){e&&o(t)}}}function Jt(m){let t,e,a,l,s,i,r,n,p,C,b,S,W,M,V,fe,w,D,me,q,ue,G,Ce,v,N,De,ce,Ie,U,Oe,J,Te,Q,Ae,Y,Le,X,Pe,Z,Ye,Se,ee,je,te,We,se,Be,K,ne,Xe,Me,le,Ze,Ve,oe,et,qe,$e,Ge,Ke,de,Fe,He,pe,Re,Ne,ae,Ue,ie,Je,re,Qe,he,ye;return s=new kt({props:{date:"02.10.2023",title:"Leet Code 688. Knight Probability in Chessboard"}}),b=new B({props:{$$slots:{default:[At]},$$scope:{ctx:m}}}),W=new B({props:{$$slots:{default:[Lt]},$$scope:{ctx:m}}}),D=new B({props:{$$slots:{default:[Pt]},$$scope:{ctx:m}}}),q=new B({props:{$$slots:{default:[St]},$$scope:{ctx:m}}}),G=new B({props:{$$slots:{default:[jt]},$$scope:{ctx:m}}}),N=new B({props:{$$slots:{default:[Wt]},$$scope:{ctx:m}}}),ce=new ct({props:{filetype:[ht()],readOnly:!0,doc:`class Solution:
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
        return memo[row][column]`}}),U=new mt({props:{$$slots:{default:[Bt]},$$scope:{ctx:m}}}),J=new B({props:{$$slots:{default:[Mt]},$$scope:{ctx:m}}}),Q=new B({props:{$$slots:{default:[Vt]},$$scope:{ctx:m}}}),Y=new B({props:{$$slots:{default:[qt]},$$scope:{ctx:m}}}),X=new B({props:{$$slots:{default:[Gt]},$$scope:{ctx:m}}}),ee=new B({props:{$$slots:{default:[Kt]},$$scope:{ctx:m}}}),te=new B({props:{$$slots:{default:[Ft]},$$scope:{ctx:m}}}),se=new B({props:{$$slots:{default:[Ht]},$$scope:{ctx:m}}}),ae=new B({props:{$$slots:{default:[Rt]},$$scope:{ctx:m}}}),ie=new mt({props:{$$slots:{default:[Nt]},$$scope:{ctx:m}}}),re=new B({props:{$$slots:{default:[Ut]},$$scope:{ctx:m}}}),he=new ct({props:{filetype:[ht()],readOnly:!0,doc:`class Solution:
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
        return dp(row, column, k)`}}),{c(){t=k("style"),e=$(`body {
            background-color: #2e323b;
        }`),a=E(),l=k("main"),T(s.$$.fragment),i=E(),r=k("div"),n=k("a"),p=$("Leet Code 688."),C=E(),T(b.$$.fragment),S=E(),T(W.$$.fragment),M=E(),V=k("img"),w=E(),T(D.$$.fragment),me=E(),T(q.$$.fragment),ue=E(),T(G.$$.fragment),Ce=E(),v=k("div"),T(N.$$.fragment),De=E(),T(ce.$$.fragment),Ie=E(),T(U.$$.fragment),Oe=E(),T(J.$$.fragment),Te=E(),T(Q.$$.fragment),Ae=E(),T(Y.$$.fragment),Le=E(),T(X.$$.fragment),Pe=E(),Z=k("img"),Se=E(),T(ee.$$.fragment),je=E(),T(te.$$.fragment),We=E(),T(se.$$.fragment),Be=E(),K=k("div"),ne=k("img"),Me=E(),le=k("img"),Ve=E(),oe=k("img"),qe=E(),$e=k("code"),Ge=$("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Ke=E(),de=k("code"),Fe=$("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),He=E(),pe=k("code"),Re=$("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Ne=E(),T(ae.$$.fragment),Ue=E(),T(ie.$$.fragment),Je=E(),T(re.$$.fragment),Qe=E(),T(he.$$.fragment),this.h()},l(c){const g=_t("svelte-1787ze0",document.head);t=y(g,"STYLE",{});var ve=z(t);e=d(ve,`body {
            background-color: #2e323b;
        }`),ve.forEach(o),g.forEach(o),a=x(c),l=y(c,"MAIN",{class:!0});var H=z(l);A(s.$$.fragment,H),i=x(H),r=y(H,"DIV",{id:!0,class:!0});var j=z(r);n=y(j,"A",{id:!0,href:!0,class:!0});var _e=z(n);p=d(_e,"Leet Code 688."),_e.forEach(o),C=x(j),A(b.$$.fragment,j),S=x(j),A(W.$$.fragment,j),M=x(j),V=y(j,"IMG",{alt:!0,id:!0,src:!0,class:!0}),w=x(j),A(D.$$.fragment,j),me=x(j),A(q.$$.fragment,j),ue=x(j),A(G.$$.fragment,j),j.forEach(o),Ce=x(H),v=y(H,"DIV",{id:!0,class:!0});var _=z(v);A(N.$$.fragment,_),De=x(_),A(ce.$$.fragment,_),Ie=x(_),A(U.$$.fragment,_),Oe=x(_),A(J.$$.fragment,_),Te=x(_),A(Q.$$.fragment,_),Ae=x(_),A(Y.$$.fragment,_),Le=x(_),A(X.$$.fragment,_),Pe=x(_),Z=y(_,"IMG",{alt:!0,id:!0,src:!0,class:!0}),Se=x(_),A(ee.$$.fragment,_),je=x(_),A(te.$$.fragment,_),We=x(_),A(se.$$.fragment,_),Be=x(_),K=y(_,"DIV",{id:!0,class:!0});var R=z(K);ne=y(R,"IMG",{alt:!0,id:!0,src:!0,class:!0}),Me=x(R),le=y(R,"IMG",{alt:!0,id:!0,src:!0,class:!0}),Ve=x(R),oe=y(R,"IMG",{alt:!0,id:!0,src:!0,class:!0}),R.forEach(o),qe=x(_),$e=y(_,"CODE",{class:!0});var be=z($e);Ge=d(be,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),be.forEach(o),Ke=x(_),de=y(_,"CODE",{class:!0});var ge=z(de);Fe=d(ge,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),ge.forEach(o),He=x(_),pe=y(_,"CODE",{class:!0});var we=z(pe);Re=d(we,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),we.forEach(o),Ne=x(_),A(ae.$$.fragment,_),Ue=x(_),A(ie.$$.fragment,_),Je=x(_),A(re.$$.fragment,_),Qe=x(_),A(he.$$.fragment,_),_.forEach(o),H.forEach(o),this.h()},h(){u(n,"id","leetCodeLink"),u(n,"href","https://leetcode.com/problems/knight-probability-in-chessboard/"),u(n,"class","svelte-vnz3em"),u(V,"alt",""),u(V,"id","knightImage"),ke(V.src,fe=Ct)||u(V,"src",fe),u(V,"class","svelte-vnz3em"),u(r,"id","problem"),u(r,"class","svelte-vnz3em"),u(Z,"alt",""),u(Z,"id","knight_m0"),ke(Z.src,Ye=Dt)||u(Z,"src",Ye),u(Z,"class","svelte-vnz3em"),u(ne,"alt",""),u(ne,"id","knight_m1"),ke(ne.src,Xe=It)||u(ne,"src",Xe),u(ne,"class","svelte-vnz3em"),u(le,"alt",""),u(le,"id","knight_m2"),ke(le.src,Ze=Ot)||u(le,"src",Ze),u(le,"class","svelte-vnz3em"),u(oe,"alt",""),u(oe,"id","knight_m3"),ke(oe.src,et=Tt)||u(oe,"src",et),u(oe,"class","svelte-vnz3em"),u(K,"id","knightMovesWrapper"),u(K,"class","svelte-vnz3em"),u($e,"class","svelte-vnz3em"),u(de,"class","svelte-vnz3em"),u(pe,"class","svelte-vnz3em"),u(v,"id","solution"),u(v,"class","svelte-vnz3em"),u(l,"class","svelte-vnz3em")},m(c,g){f(document.head,t),f(t,e),h(c,a,g),h(c,l,g),L(s,l,null),f(l,i),f(l,r),f(r,n),f(n,p),f(r,C),L(b,r,null),f(r,S),L(W,r,null),f(r,M),f(r,V),f(r,w),L(D,r,null),f(r,me),L(q,r,null),f(r,ue),L(G,r,null),f(l,Ce),f(l,v),L(N,v,null),f(v,De),L(ce,v,null),f(v,Ie),L(U,v,null),f(v,Oe),L(J,v,null),f(v,Te),L(Q,v,null),f(v,Ae),L(Y,v,null),f(v,Le),L(X,v,null),f(v,Pe),f(v,Z),f(v,Se),L(ee,v,null),f(v,je),L(te,v,null),f(v,We),L(se,v,null),f(v,Be),f(v,K),f(K,ne),f(K,Me),f(K,le),f(K,Ve),f(K,oe),f(v,qe),f(v,$e),f($e,Ge),f(v,Ke),f(v,de),f(de,Fe),f(v,He),f(v,pe),f(pe,Re),f(v,Ne),L(ae,v,null),f(v,Ue),L(ie,v,null),f(v,Je),L(re,v,null),f(v,Qe),L(he,v,null),ye=!0},p(c,[g]){const ve={};g&1&&(ve.$$scope={dirty:g,ctx:c}),b.$set(ve);const H={};g&1&&(H.$$scope={dirty:g,ctx:c}),W.$set(H);const j={};g&1&&(j.$$scope={dirty:g,ctx:c}),D.$set(j);const _e={};g&1&&(_e.$$scope={dirty:g,ctx:c}),q.$set(_e);const _={};g&1&&(_.$$scope={dirty:g,ctx:c}),G.$set(_);const R={};g&1&&(R.$$scope={dirty:g,ctx:c}),N.$set(R);const be={};g&1&&(be.$$scope={dirty:g,ctx:c}),U.$set(be);const ge={};g&1&&(ge.$$scope={dirty:g,ctx:c}),J.$set(ge);const we={};g&1&&(we.$$scope={dirty:g,ctx:c}),Q.$set(we);const tt={};g&1&&(tt.$$scope={dirty:g,ctx:c}),Y.$set(tt);const st={};g&1&&(st.$$scope={dirty:g,ctx:c}),X.$set(st);const nt={};g&1&&(nt.$$scope={dirty:g,ctx:c}),ee.$set(nt);const lt={};g&1&&(lt.$$scope={dirty:g,ctx:c}),te.$set(lt);const ot={};g&1&&(ot.$$scope={dirty:g,ctx:c}),se.$set(ot);const at={};g&1&&(at.$$scope={dirty:g,ctx:c}),ae.$set(at);const it={};g&1&&(it.$$scope={dirty:g,ctx:c}),ie.$set(it);const rt={};g&1&&(rt.$$scope={dirty:g,ctx:c}),re.$set(rt)},i(c){ye||(I(s.$$.fragment,c),I(b.$$.fragment,c),I(W.$$.fragment,c),I(D.$$.fragment,c),I(q.$$.fragment,c),I(G.$$.fragment,c),I(N.$$.fragment,c),I(ce.$$.fragment,c),I(U.$$.fragment,c),I(J.$$.fragment,c),I(Q.$$.fragment,c),I(Y.$$.fragment,c),I(X.$$.fragment,c),I(ee.$$.fragment,c),I(te.$$.fragment,c),I(se.$$.fragment,c),I(ae.$$.fragment,c),I(ie.$$.fragment,c),I(re.$$.fragment,c),I(he.$$.fragment,c),ye=!0)},o(c){O(s.$$.fragment,c),O(b.$$.fragment,c),O(W.$$.fragment,c),O(D.$$.fragment,c),O(q.$$.fragment,c),O(G.$$.fragment,c),O(N.$$.fragment,c),O(ce.$$.fragment,c),O(U.$$.fragment,c),O(J.$$.fragment,c),O(Q.$$.fragment,c),O(Y.$$.fragment,c),O(X.$$.fragment,c),O(ee.$$.fragment,c),O(te.$$.fragment,c),O(se.$$.fragment,c),O(ae.$$.fragment,c),O(ie.$$.fragment,c),O(re.$$.fragment,c),O(he.$$.fragment,c),ye=!1},d(c){o(t),c&&o(a),c&&o(l),P(s),P(b),P(W),P(D),P(q),P(G),P(N),P(ce),P(U),P(J),P(Q),P(Y),P(X),P(ee),P(te),P(se),P(ae),P(ie),P(re),P(he)}}}class Zt extends Ee{constructor(t){super(),xe(this,t,null,Jt,ze,{})}}export{Zt as component};