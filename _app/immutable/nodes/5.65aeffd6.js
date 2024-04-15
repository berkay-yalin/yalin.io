import{S as B,i as F,s as M,k as d,l as _,m as p,h as c,n as m,b as $,G as f,H as w,K as R,e as V,q as b,a as A,r as y,c as E,y as q,z,A as C,g as H,d as G,B as K}from"../chunks/index.aba53c8a.js";import{H as T}from"../chunks/Heading.bc2a13cb.js";import{b as N}from"../chunks/paths.ffce7187.js";/* empty css                      *//* empty css                      *//* empty css                                                       */function P(o,t,s){const l=o.slice();return l[1]=t[s],l}function S(o,t,s){const l=o.slice();return l[4]=t[s].url,l[5]=t[s].label,l[6]=t[s].description,l}function U(o){let t,s,l=o[5]+"",n,a,e,i,r,h,g=o[6]+"",I,k;return{c(){t=d("li"),s=d("a"),n=b(l),a=A(),e=d("a"),i=b("⧉"),r=A(),h=d("div"),I=b(g),k=A(),this.h()},l(v){t=_(v,"LI",{class:!0});var u=p(t);s=_(u,"A",{class:!0,href:!0});var x=p(s);n=y(x,l),x.forEach(c),a=E(u),e=_(u,"A",{class:!0,href:!0});var L=p(e);i=y(L,"⧉"),L.forEach(c),r=E(u),h=_(u,"DIV",{class:!0});var D=p(h);I=y(D,g),D.forEach(c),k=E(u),u.forEach(c),this.h()},h(){m(s,"class","anchor-label svelte-1rm336m"),m(s,"href",o[4]),m(e,"class","anchor-character svelte-1rm336m"),m(e,"href",o[4]),m(h,"class","div-description svelte-1rm336m"),m(t,"class","svelte-1rm336m")},m(v,u){$(v,t,u),f(t,s),f(s,n),f(t,a),f(t,e),f(e,i),f(t,r),f(t,h),f(h,I),f(t,k)},p:w,d(v){v&&c(t)}}}function j(o){let t,s=o[1].list,l=[];for(let n=0;n<s.length;n+=1)l[n]=U(S(o,s,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=V()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);t=V()},m(n,a){for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(n,a);$(n,t,a)},p(n,a){if(a&1){s=n[1].list;let e;for(e=0;e<s.length;e+=1){const i=S(n,s,e);l[e]?l[e].p(i,a):(l[e]=U(i),l[e].c(),l[e].m(t.parentNode,t))}for(;e<l.length;e+=1)l[e].d(1);l.length=s.length}},d(n){R(l,n),n&&c(t)}}}function J(o){let t,s,l,n=o[0],a=[];for(let e=0;e<n.length;e+=1)a[e]=j(P(o,n,e));return{c(){t=d("main"),s=d("div"),l=d("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=_(e,"MAIN",{class:!0});var i=p(t);s=_(i,"DIV",{class:!0});var r=p(s);l=_(r,"UL",{class:!0});var h=p(l);for(let g=0;g<a.length;g+=1)a[g].l(h);h.forEach(c),r.forEach(c),i.forEach(c),this.h()},h(){m(l,"class","svelte-1rm336m"),m(s,"class","wrapper-section svelte-1rm336m"),m(t,"class","svelte-1rm336m")},m(e,i){$(e,t,i),f(t,s),f(s,l);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(l,null)},p(e,[i]){if(i&1){n=e[0];let r;for(r=0;r<n.length;r+=1){const h=P(e,n,r);a[r]?a[r].p(h,i):(a[r]=j(h),a[r].c(),a[r].m(l,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},i:w,o:w,d(e){e&&c(t),R(a,e)}}}function O(o){return[[{heading:"Articles",description:"Articles I've written on topics that interest me:",list:[{url:`${N}/articles/knight-probability-in-chessboard`,label:"Leet Code 688. Knight probability in chessboard",description:"A much more efficient solution to Leet Code question 688 using recursion and the Law of Total Probability"}]},{heading:"Resources",description:"Useful resources I've collected from around the internet:",list:[{url:`${N}/articles/gamma-functions`,label:"Gamma Functions",description:"Definitions of the gamma functions"},{url:"https://gist.github.com/berkay-yalin/e6f737f32db49f72f30dde1b8fdf03ce",label:"Vim Indentation",description:"All .vimrc configurations relating to indentation"}]}]]}class Q extends B{constructor(t){super(),F(this,t,O,J,M,{})}}function W(o){let t;return{c(){t=b("Articles")},l(s){t=y(s,"Articles")},m(s,l){$(s,t,l)},d(s){s&&c(t)}}}function X(o){let t,s,l,n,a;return s=new T({props:{id:"articles",$$slots:{default:[W]},$$scope:{ctx:o}}}),n=new Q({}),{c(){t=d("div"),q(s.$$.fragment),l=A(),q(n.$$.fragment),this.h()},l(e){t=_(e,"DIV",{class:!0});var i=p(t);z(s.$$.fragment,i),l=E(i),z(n.$$.fragment,i),i.forEach(c),this.h()},h(){m(t,"class","wrapper-articles svelte-zzuxjs")},m(e,i){$(e,t,i),C(s,t,null),f(t,l),C(n,t,null),a=!0},p(e,[i]){const r={};i&1&&(r.$$scope={dirty:i,ctx:e}),s.$set(r)},i(e){a||(H(s.$$.fragment,e),H(n.$$.fragment,e),a=!0)},o(e){G(s.$$.fragment,e),G(n.$$.fragment,e),a=!1},d(e){e&&c(t),K(s),K(n)}}}class ne extends B{constructor(t){super(),F(this,t,null,X,M,{})}}export{ne as component};
