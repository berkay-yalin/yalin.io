import{s as Ee,c as et,e as _,b as w,m as ie,d as a,o as $,j as h,u as tt,k as nt,l as st,a as k,g as E,f as y,L as Ne,i as b,t as g,n as v,q as Z}from"../chunks/scheduler.Cvmf8AEh.js";import{S as De,i as Oe,t as D,b as O,c as T,a as L,m as j,d as q}from"../chunks/index.CLoyGLA4.js";/* empty css                      */import{C as Qe,p as Ye}from"../chunks/index.BUTxBwX8.js";function lt(c){let t,e;const r=c[1].default,s=et(r,c,c[0],null);return{c(){t=_("div"),s&&s.c(),this.h()},l(n){t=w(n,"DIV",{class:!0});var i=ie(t);s&&s.l(i),i.forEach(a),this.h()},h(){$(t,"class","svelte-3l6799")},m(n,i){h(n,t,i),s&&s.m(t,null),e=!0},p(n,[i]){s&&s.p&&(!e||i&1)&&tt(s,r,n,n[0],e?st(r,n[0],i,null):nt(n[0]),null)},i(n){e||(D(s,n),e=!0)},o(n){O(s,n),e=!1},d(n){n&&a(t),s&&s.d(n)}}}function ot(c,t,e){let{$$slots:r={},$$scope:s}=t;return c.$$set=n=>{"$$scope"in n&&e(0,s=n.$$scope)},[s,r]}class S extends De{constructor(t){super(),Oe(this,t,ot,lt,Ee,{})}}function at(c){let t,e;const r=c[1].default,s=et(r,c,c[0],null);return{c(){t=_("div"),s&&s.c(),this.h()},l(n){t=w(n,"DIV",{class:!0});var i=ie(t);s&&s.l(i),i.forEach(a),this.h()},h(){$(t,"class","svelte-14dtst")},m(n,i){h(n,t,i),s&&s.m(t,null),e=!0},p(n,[i]){s&&s.p&&(!e||i&1)&&tt(s,r,n,n[0],e?st(r,n[0],i,null):nt(n[0]),null)},i(n){e||(D(s,n),e=!0)},o(n){O(s,n),e=!1},d(n){n&&a(t),s&&s.d(n)}}}function it(c,t,e){let{$$slots:r={},$$scope:s}=t;return c.$$set=n=>{"$$scope"in n&&e(0,s=n.$$scope)},[s,r]}class Ze extends De{constructor(t){super(),Oe(this,t,it,at,Ee,{})}}const rt=""+new URL("../assets/knight.BTnfXk1I.png",import.meta.url).href,ht=""+new URL("../assets/knight_m0.bdw7204u.png",import.meta.url).href,ft=""+new URL("../assets/knight_m1.Cb3cHpFW.png",import.meta.url).href,ut=""+new URL("../assets/knight_m2.CCV5IdKg.png",import.meta.url).href,ct=""+new URL("../assets/knight_m3.BD7hCvGh.png",import.meta.url).href;function mt(c){let t,e,r="n x n",s,n,i="(row, column)",m,l,d="k",R,x,I="(0, 0)",A,W,oe="(n - 1, n - 1)",P;return{c(){t=g("On an "),e=_("code"),e.textContent=r,s=g(" chessboard, a knight starts at the cell "),n=_("code"),n.textContent=i,m=g(" and attempts to make exactly "),l=_("code"),l.textContent=d,R=g(` moves.
        The rows and columns are 0-indexed, so the top-left cell is `),x=_("code"),x.textContent=I,A=g(", and the bottom-right cell is "),W=_("code"),W.textContent=oe,P=g("."),this.h()},l(C){t=v(C,"On an "),e=w(C,"CODE",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-1jh7axi"&&(e.textContent=r),s=v(C," chessboard, a knight starts at the cell "),n=w(C,"CODE",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-8l2rht"&&(n.textContent=i),m=v(C," and attempts to make exactly "),l=w(C,"CODE",{class:!0,"data-svelte-h":!0}),E(l)!=="svelte-t98ab9"&&(l.textContent=d),R=v(C,` moves.
        The rows and columns are 0-indexed, so the top-left cell is `),x=w(C,"CODE",{class:!0,"data-svelte-h":!0}),E(x)!=="svelte-nqqz2z"&&(x.textContent=I),A=v(C,", and the bottom-right cell is "),W=w(C,"CODE",{class:!0,"data-svelte-h":!0}),E(W)!=="svelte-1r97fvz"&&(W.textContent=oe),P=v(C,"."),this.h()},h(){$(e,"class","svelte-u0gpl1"),$(n,"class","svelte-u0gpl1"),$(l,"class","svelte-u0gpl1"),$(x,"class","svelte-u0gpl1"),$(W,"class","svelte-u0gpl1")},m(C,f){h(C,t,f),h(C,e,f),h(C,s,f),h(C,n,f),h(C,m,f),h(C,l,f),h(C,R,f),h(C,x,f),h(C,A,f),h(C,W,f),h(C,P,f)},p:Z,d(C){C&&(a(t),a(e),a(s),a(n),a(m),a(l),a(R),a(x),a(A),a(W),a(P))}}}function $t(c){let t;return{c(){t=g(`A chess knight has eight possible moves it can make, as illustrated below.
        Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`)},l(e){t=v(e,`A chess knight has eight possible moves it can make, as illustrated below.
        Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`)},m(e,r){h(e,t,r)},d(e){e&&a(t)}}}function pt(c){let t;return{c(){t=g("Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.")},l(e){t=v(e,"Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.")},m(e,r){h(e,t,r)},d(e){e&&a(t)}}}function dt(c){let t;return{c(){t=g("The knight continues moving until it has made exactly k moves or has moved off the chessboard.")},l(e){t=v(e,"The knight continues moving until it has made exactly k moves or has moved off the chessboard.")},m(e,r){h(e,t,r)},d(e){e&&a(t)}}}function gt(c){let t;return{c(){t=g("Return the probability that the knight remains on the board after it has stopped moving.")},l(e){t=v(e,"Return the probability that the knight remains on the board after it has stopped moving.")},m(e,r){h(e,t,r)},d(e){e&&a(t)}}}function vt(c){let t,e,r="solution",s,n,i="Law of Total Probability",m;return{c(){t=g(`The first

        `),e=_("a"),e.textContent=r,s=g(`

        presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

        We can significantly simplify this solution however through the use of recursion and the

        `),n=_("a"),n.textContent=i,m=g(`

        .`),this.h()},l(l){t=v(l,`The first

        `),e=w(l,"A",{href:!0,class:!0,"data-svelte-h":!0}),E(e)!=="svelte-16wzpqz"&&(e.textContent=r),s=v(l,`

        presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

        We can significantly simplify this solution however through the use of recursion and the

        `),n=w(l,"A",{href:!0,class:!0,"data-svelte-h":!0}),E(n)!=="svelte-rqe1q2"&&(n.textContent=i),m=v(l,`

        .`),this.h()},h(){$(e,"href","https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3322846/688-space-97-74-solution-with-step-by-step-explanation/"),$(e,"class","svelte-u0gpl1"),$(n,"href","https://en.wikipedia.org/wiki/Law_of_total_probability"),$(n,"class","svelte-u0gpl1")},m(l,d){h(l,t,d),h(l,e,d),h(l,s,d),h(l,n,d),h(l,m,d)},p:Z,d(l){l&&(a(t),a(e),a(s),a(n),a(m))}}}function bt(c){let t;return{c(){t=g("The Law of Total Probability")},l(e){t=v(e,"The Law of Total Probability")},m(e,r){h(e,t,r)},d(e){e&&a(t)}}}function _t(c){let t,e,r="B_1, ..., B_k",s,n,i="A",m,l,d="P(A) = P(A n B_1) + ... + P(A n B_k)",R;return{c(){t=g("Suppose the events "),e=_("code"),e.textContent=r,s=g(` are mutally exclusive and exhaustive events in a sample space,
        then for any event `),n=_("code"),n.textContent=i,m=g(" in that sample space "),l=_("code"),l.textContent=d,R=g("."),this.h()},l(x){t=v(x,"Suppose the events "),e=w(x,"CODE",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-9ntw2a"&&(e.textContent=r),s=v(x,` are mutally exclusive and exhaustive events in a sample space,
        then for any event `),n=w(x,"CODE",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-14lsvjf"&&(n.textContent=i),m=v(x," in that sample space "),l=w(x,"CODE",{class:!0,"data-svelte-h":!0}),E(l)!=="svelte-ut6tex"&&(l.textContent=d),R=v(x,"."),this.h()},h(){$(e,"class","svelte-u0gpl1"),$(n,"class","svelte-u0gpl1"),$(l,"class","svelte-u0gpl1")},m(x,I){h(x,t,I),h(x,e,I),h(x,s,I),h(x,n,I),h(x,m,I),h(x,l,I),h(x,R,I)},p:Z,d(x){x&&(a(t),a(e),a(s),a(n),a(m),a(l),a(R))}}}function wt(c){let t,e,r="4x4",s,n,i="1",m;return{c(){t=g("If we consider the knight starts within a red "),e=_("code"),e.textContent=r,s=g(" board, and only has "),n=_("code"),n.textContent=i,m=g(` move,
        then only will 3 out of the 8 possible moves keep the knight within the board.
        If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.`),this.h()},l(l){t=v(l,"If we consider the knight starts within a red "),e=w(l,"CODE",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-1p23pqu"&&(e.textContent=r),s=v(l," board, and only has "),n=w(l,"CODE",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-1rarbq3"&&(n.textContent=i),m=v(l,` move,
        then only will 3 out of the 8 possible moves keep the knight within the board.
        If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.`),this.h()},h(){$(e,"class","svelte-u0gpl1"),$(n,"class","svelte-u0gpl1")},m(l,d){h(l,t,d),h(l,e,d),h(l,s,d),h(l,n,d),h(l,m,d)},p:Z,d(l){l&&(a(t),a(e),a(s),a(n),a(m))}}}function xt(c){let t,e,r="[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]",s,n,i="[1, 1, 1, 0, 0, 0, 0, 0]",m;return{c(){t=g("With an array containing the probability of each move occurring, "),e=_("code"),e.textContent=r,s=g(`,
        and another array of the probabilities that the knight stays on the board, `),n=_("code"),n.textContent=i,m=g(`,
        we can calculate the result through the sum of both arrays.`),this.h()},l(l){t=v(l,"With an array containing the probability of each move occurring, "),e=w(l,"CODE",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-13dvrvw"&&(e.textContent=r),s=v(l,`,
        and another array of the probabilities that the knight stays on the board, `),n=w(l,"CODE",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-1vd5mu5"&&(n.textContent=i),m=v(l,`,
        we can calculate the result through the sum of both arrays.`),this.h()},h(){$(e,"class","svelte-u0gpl1"),$(n,"class","svelte-u0gpl1")},m(l,d){h(l,t,d),h(l,e,d),h(l,s,d),h(l,n,d),h(l,m,d)},p:Z,d(l){l&&(a(t),a(e),a(s),a(n),a(m))}}}function Ct(c){let t,e,r,s,n="(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375";return{c(){t=g(`The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
        `),e=_("br"),r=k(),s=_("code"),s.textContent=n,this.h()},l(i){t=v(i,`The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
        `),e=w(i,"BR",{}),r=y(i),s=w(i,"CODE",{class:!0,"data-svelte-h":!0}),E(s)!=="svelte-1r9g36"&&(s.textContent=n),this.h()},h(){$(s,"class","svelte-u0gpl1")},m(i,m){h(i,t,m),h(i,e,m),h(i,r,m),h(i,s,m)},p:Z,d(i){i&&(a(t),a(e),a(r),a(s))}}}function kt(c){let t,e,r="1",s,n,i="100%",m;return{c(){t=g("We were able to set the probability that the knight would remain on the board as "),e=_("code"),e.textContent=r,s=g(` as it was the final move of the knight -
        if the knight ends on a square within the board there is a `),n=_("code"),n.textContent=i,m=g(` chance the knight has remained within the board.
        Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),this.h()},l(l){t=v(l,"We were able to set the probability that the knight would remain on the board as "),e=w(l,"CODE",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-1rarbq3"&&(e.textContent=r),s=v(l,` as it was the final move of the knight -
        if the knight ends on a square within the board there is a `),n=w(l,"CODE",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-1hwejt2"&&(n.textContent=i),m=v(l,` chance the knight has remained within the board.
        Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),this.h()},h(){$(e,"class","svelte-u0gpl1"),$(n,"class","svelte-u0gpl1")},m(l,d){h(l,t,d),h(l,e,d),h(l,s,d),h(l,n,d),h(l,m,d)},p:Z,d(l){l&&(a(t),a(e),a(s),a(n),a(m))}}}function yt(c){let t;return{c(){t=g(`Let's consider the previous example but where the knight moves twice instead of just once.
        We can work through this problem backwards to understand how the statistics behind the solution works.`)},l(e){t=v(e,`Let's consider the previous example but where the knight moves twice instead of just once.
        We can work through this problem backwards to understand how the statistics behind the solution works.`)},m(e,r){h(e,t,r)},d(e){e&&a(t)}}}function Et(c){let t;return{c(){t=g(`For each of the 3 possibilities the knight can make for it's second move,
        we can calculate the probability that the knight stays within the board like we did in the previous example,
        as it is the final move.`)},l(e){t=v(e,`For each of the 3 possibilities the knight can make for it's second move,
        we can calculate the probability that the knight stays within the board like we did in the previous example,
        as it is the final move.`)},m(e,r){h(e,t,r)},d(e){e&&a(t)}}}function Dt(c){let t,e,r,s,n="(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625";return{c(){t=g(`We can plug these results back into the original equation to determine the final probability:
        `),e=_("br"),r=k(),s=_("code"),s.textContent=n,this.h()},l(i){t=v(i,`We can plug these results back into the original equation to determine the final probability:
        `),e=w(i,"BR",{}),r=y(i),s=w(i,"CODE",{class:!0,"data-svelte-h":!0}),E(s)!=="svelte-ou9wh0"&&(s.textContent=n),this.h()},h(){$(s,"class","svelte-u0gpl1")},m(i,m){h(i,t,m),h(i,e,m),h(i,r,m),h(i,s,m)},p:Z,d(i){i&&(a(t),a(e),a(r),a(s))}}}function Ot(c){let t;return{c(){t=g("Solution")},l(e){t=v(e,"Solution")},m(e,r){h(e,t,r)},d(e){e&&a(t)}}}function It(c){let t;return{c(){t=g("The following solution uses the law of total probability to calculate the final answer")},l(e){t=v(e,"The following solution uses the law of total probability to calculate the final answer")},m(e,r){h(e,t,r)},d(e){e&&a(t)}}}function Tt(c){let t,e,r="Leet Code 688.",s,n,i,m,l,d,R,x,I,A,W,oe,P,C,f,B,re,ee,he,M,fe,V,ue,z,ce,K,me,U,$e,F,Ie,pe,H,de,G,ge,X,ve,J,Te=`<img alt="" id="knight_m1" src="${ft}" class="svelte-u0gpl1"/> <img alt="" id="knight_m2" src="${ut}" class="svelte-u0gpl1"/> <img alt="" id="knight_m3" src="${ct}" class="svelte-u0gpl1"/>`,be,te,Le="(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375",_e,ne,je="(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5",we,se,qe="(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375",xe,N,Ce,Q,ke,Y,ye,le,ae;return n=new S({props:{$$slots:{default:[mt]},$$scope:{ctx:c}}}),m=new S({props:{$$slots:{default:[$t]},$$scope:{ctx:c}}}),I=new S({props:{$$slots:{default:[pt]},$$scope:{ctx:c}}}),W=new S({props:{$$slots:{default:[dt]},$$scope:{ctx:c}}}),P=new S({props:{$$slots:{default:[gt]},$$scope:{ctx:c}}}),B=new S({props:{$$slots:{default:[vt]},$$scope:{ctx:c}}}),ee=new Qe({props:{filetype:[Ye()],readOnly:!0,doc:`class Solution:
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
        return memo[row][column]`}}),M=new Ze({props:{$$slots:{default:[bt]},$$scope:{ctx:c}}}),V=new S({props:{$$slots:{default:[_t]},$$scope:{ctx:c}}}),z=new S({props:{$$slots:{default:[wt]},$$scope:{ctx:c}}}),K=new S({props:{$$slots:{default:[xt]},$$scope:{ctx:c}}}),U=new S({props:{$$slots:{default:[Ct]},$$scope:{ctx:c}}}),H=new S({props:{$$slots:{default:[kt]},$$scope:{ctx:c}}}),G=new S({props:{$$slots:{default:[yt]},$$scope:{ctx:c}}}),X=new S({props:{$$slots:{default:[Et]},$$scope:{ctx:c}}}),N=new S({props:{$$slots:{default:[Dt]},$$scope:{ctx:c}}}),Q=new Ze({props:{$$slots:{default:[Ot]},$$scope:{ctx:c}}}),Y=new S({props:{$$slots:{default:[It]},$$scope:{ctx:c}}}),le=new Qe({props:{filetype:[Ye()],readOnly:!0,doc:`class Solution:
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
        return dp(row, column, k)`}}),{c(){t=_("div"),e=_("a"),e.textContent=r,s=k(),T(n.$$.fragment),i=k(),T(m.$$.fragment),l=k(),d=_("img"),x=k(),T(I.$$.fragment),A=k(),T(W.$$.fragment),oe=k(),T(P.$$.fragment),C=k(),f=_("div"),T(B.$$.fragment),re=k(),T(ee.$$.fragment),he=k(),T(M.$$.fragment),fe=k(),T(V.$$.fragment),ue=k(),T(z.$$.fragment),ce=k(),T(K.$$.fragment),me=k(),T(U.$$.fragment),$e=k(),F=_("img"),pe=k(),T(H.$$.fragment),de=k(),T(G.$$.fragment),ge=k(),T(X.$$.fragment),ve=k(),J=_("div"),J.innerHTML=Te,be=k(),te=_("code"),te.textContent=Le,_e=k(),ne=_("code"),ne.textContent=je,we=k(),se=_("code"),se.textContent=qe,xe=k(),T(N.$$.fragment),Ce=k(),T(Q.$$.fragment),ke=k(),T(Y.$$.fragment),ye=k(),T(le.$$.fragment),this.h()},l(o){t=w(o,"DIV",{id:!0,class:!0});var u=ie(t);e=w(u,"A",{id:!0,href:!0,class:!0,"data-svelte-h":!0}),E(e)!=="svelte-kgr9xm"&&(e.textContent=r),s=y(u),L(n.$$.fragment,u),i=y(u),L(m.$$.fragment,u),l=y(u),d=w(u,"IMG",{alt:!0,id:!0,src:!0,class:!0}),x=y(u),L(I.$$.fragment,u),A=y(u),L(W.$$.fragment,u),oe=y(u),L(P.$$.fragment,u),u.forEach(a),C=y(o),f=w(o,"DIV",{id:!0,class:!0});var p=ie(f);L(B.$$.fragment,p),re=y(p),L(ee.$$.fragment,p),he=y(p),L(M.$$.fragment,p),fe=y(p),L(V.$$.fragment,p),ue=y(p),L(z.$$.fragment,p),ce=y(p),L(K.$$.fragment,p),me=y(p),L(U.$$.fragment,p),$e=y(p),F=w(p,"IMG",{alt:!0,id:!0,src:!0,class:!0}),pe=y(p),L(H.$$.fragment,p),de=y(p),L(G.$$.fragment,p),ge=y(p),L(X.$$.fragment,p),ve=y(p),J=w(p,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),E(J)!=="svelte-1pbamhh"&&(J.innerHTML=Te),be=y(p),te=w(p,"CODE",{class:!0,"data-svelte-h":!0}),E(te)!=="svelte-ptho8q"&&(te.textContent=Le),_e=y(p),ne=w(p,"CODE",{class:!0,"data-svelte-h":!0}),E(ne)!=="svelte-13pdv79"&&(ne.textContent=je),we=y(p),se=w(p,"CODE",{class:!0,"data-svelte-h":!0}),E(se)!=="svelte-ptho8q"&&(se.textContent=qe),xe=y(p),L(N.$$.fragment,p),Ce=y(p),L(Q.$$.fragment,p),ke=y(p),L(Y.$$.fragment,p),ye=y(p),L(le.$$.fragment,p),p.forEach(a),this.h()},h(){$(e,"id","leetCodeLink"),$(e,"href","https://leetcode.com/problems/knight-probability-in-chessboard/"),$(e,"class","svelte-u0gpl1"),$(d,"alt",""),$(d,"id","knightImage"),Ne(d.src,R=rt)||$(d,"src",R),$(d,"class","svelte-u0gpl1"),$(t,"id","problem"),$(t,"class","svelte-u0gpl1"),$(F,"alt",""),$(F,"id","knight_m0"),Ne(F.src,Ie=ht)||$(F,"src",Ie),$(F,"class","svelte-u0gpl1"),$(J,"id","knightMovesWrapper"),$(J,"class","svelte-u0gpl1"),$(te,"class","svelte-u0gpl1"),$(ne,"class","svelte-u0gpl1"),$(se,"class","svelte-u0gpl1"),$(f,"id","solution"),$(f,"class","svelte-u0gpl1")},m(o,u){h(o,t,u),b(t,e),b(t,s),j(n,t,null),b(t,i),j(m,t,null),b(t,l),b(t,d),b(t,x),j(I,t,null),b(t,A),j(W,t,null),b(t,oe),j(P,t,null),h(o,C,u),h(o,f,u),j(B,f,null),b(f,re),j(ee,f,null),b(f,he),j(M,f,null),b(f,fe),j(V,f,null),b(f,ue),j(z,f,null),b(f,ce),j(K,f,null),b(f,me),j(U,f,null),b(f,$e),b(f,F),b(f,pe),j(H,f,null),b(f,de),j(G,f,null),b(f,ge),j(X,f,null),b(f,ve),b(f,J),b(f,be),b(f,te),b(f,_e),b(f,ne),b(f,we),b(f,se),b(f,xe),j(N,f,null),b(f,Ce),j(Q,f,null),b(f,ke),j(Y,f,null),b(f,ye),j(le,f,null),ae=!0},p(o,[u]){const p={};u&1&&(p.$$scope={dirty:u,ctx:o}),n.$set(p);const We={};u&1&&(We.$$scope={dirty:u,ctx:o}),m.$set(We);const Se={};u&1&&(Se.$$scope={dirty:u,ctx:o}),I.$set(Se);const Pe={};u&1&&(Pe.$$scope={dirty:u,ctx:o}),W.$set(Pe);const Re={};u&1&&(Re.$$scope={dirty:u,ctx:o}),P.$set(Re);const Ae={};u&1&&(Ae.$$scope={dirty:u,ctx:o}),B.$set(Ae);const Be={};u&1&&(Be.$$scope={dirty:u,ctx:o}),M.$set(Be);const Me={};u&1&&(Me.$$scope={dirty:u,ctx:o}),V.$set(Me);const Ve={};u&1&&(Ve.$$scope={dirty:u,ctx:o}),z.$set(Ve);const ze={};u&1&&(ze.$$scope={dirty:u,ctx:o}),K.$set(ze);const Ke={};u&1&&(Ke.$$scope={dirty:u,ctx:o}),U.$set(Ke);const Ue={};u&1&&(Ue.$$scope={dirty:u,ctx:o}),H.$set(Ue);const Fe={};u&1&&(Fe.$$scope={dirty:u,ctx:o}),G.$set(Fe);const He={};u&1&&(He.$$scope={dirty:u,ctx:o}),X.$set(He);const Ge={};u&1&&(Ge.$$scope={dirty:u,ctx:o}),N.$set(Ge);const Xe={};u&1&&(Xe.$$scope={dirty:u,ctx:o}),Q.$set(Xe);const Je={};u&1&&(Je.$$scope={dirty:u,ctx:o}),Y.$set(Je)},i(o){ae||(D(n.$$.fragment,o),D(m.$$.fragment,o),D(I.$$.fragment,o),D(W.$$.fragment,o),D(P.$$.fragment,o),D(B.$$.fragment,o),D(ee.$$.fragment,o),D(M.$$.fragment,o),D(V.$$.fragment,o),D(z.$$.fragment,o),D(K.$$.fragment,o),D(U.$$.fragment,o),D(H.$$.fragment,o),D(G.$$.fragment,o),D(X.$$.fragment,o),D(N.$$.fragment,o),D(Q.$$.fragment,o),D(Y.$$.fragment,o),D(le.$$.fragment,o),ae=!0)},o(o){O(n.$$.fragment,o),O(m.$$.fragment,o),O(I.$$.fragment,o),O(W.$$.fragment,o),O(P.$$.fragment,o),O(B.$$.fragment,o),O(ee.$$.fragment,o),O(M.$$.fragment,o),O(V.$$.fragment,o),O(z.$$.fragment,o),O(K.$$.fragment,o),O(U.$$.fragment,o),O(H.$$.fragment,o),O(G.$$.fragment,o),O(X.$$.fragment,o),O(N.$$.fragment,o),O(Q.$$.fragment,o),O(Y.$$.fragment,o),O(le.$$.fragment,o),ae=!1},d(o){o&&(a(t),a(C),a(f)),q(n),q(m),q(I),q(W),q(P),q(B),q(ee),q(M),q(V),q(z),q(K),q(U),q(H),q(G),q(X),q(N),q(Q),q(Y),q(le)}}}class St extends De{constructor(t){super(),Oe(this,t,null,Tt,Ee,{})}}export{St as component};
