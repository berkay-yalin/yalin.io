import{S as U,i as F,s as H,k as _,l as m,m as p,h as f,n as d,b as L,H as I,O as S,a as v,c as b,G as h,q as A,r as E}from"../chunks/index.d631ed7d.js";import{b as C}from"../chunks/paths.a1638841.js";/* empty css                      *//* empty css                      */function D(o,t,i){const l=o.slice();return l[1]=t[i],l}function V(o,t,i){const l=o.slice();return l[4]=t[i].url,l[5]=t[i].label,l[6]=t[i].description,l}function G(o){let t,i,l=o[5]+"",s,a,e,r,n,c,$=o[6]+"",y,k;return{c(){t=_("li"),i=_("a"),s=A(l),a=v(),e=_("a"),r=A("⧉"),n=v(),c=_("div"),y=A($),k=v(),this.h()},l(g){t=m(g,"LI",{class:!0});var u=p(t);i=m(u,"A",{class:!0,href:!0});var q=p(i);s=E(q,l),q.forEach(f),a=b(u),e=m(u,"A",{class:!0,href:!0});var w=p(e);r=E(w,"⧉"),w.forEach(f),n=b(u),c=m(u,"DIV",{class:!0});var x=p(c);y=E(x,$),x.forEach(f),k=b(u),u.forEach(f),this.h()},h(){d(i,"class","anchor-label svelte-f5yos0"),d(i,"href",o[4]),d(e,"class","anchor-character svelte-f5yos0"),d(e,"href",o[4]),d(c,"class","div-description svelte-f5yos0"),d(t,"class","svelte-f5yos0")},m(g,u){L(g,t,u),h(t,i),h(i,s),h(t,a),h(t,e),h(e,r),h(t,n),h(t,c),h(c,y),h(t,k)},p:I,d(g){g&&f(t)}}}function P(o){let t,i,l,s=o[1].list,a=[];for(let e=0;e<s.length;e+=1)a[e]=G(V(o,s,e));return{c(){t=_("div"),i=_("ul");for(let e=0;e<a.length;e+=1)a[e].c();l=v(),this.h()},l(e){t=m(e,"DIV",{class:!0});var r=p(t);i=m(r,"UL",{class:!0});var n=p(i);for(let c=0;c<a.length;c+=1)a[c].l(n);n.forEach(f),l=b(r),r.forEach(f),this.h()},h(){d(i,"class","svelte-f5yos0"),d(t,"class","wrapper-section svelte-f5yos0")},m(e,r){L(e,t,r),h(t,i);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(i,null);h(t,l)},p(e,r){if(r&1){s=e[1].list;let n;for(n=0;n<s.length;n+=1){const c=V(e,s,n);a[n]?a[n].p(c,r):(a[n]=G(c),a[n].c(),a[n].m(i,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=s.length}},d(e){e&&f(t),S(a,e)}}}function K(o){let t,i=o[0],l=[];for(let s=0;s<i.length;s+=1)l[s]=P(D(o,i,s));return{c(){t=_("main");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){t=m(s,"MAIN",{class:!0});var a=p(t);for(let e=0;e<l.length;e+=1)l[e].l(a);a.forEach(f),this.h()},h(){d(t,"class","svelte-f5yos0")},m(s,a){L(s,t,a);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,null)},p(s,[a]){if(a&1){i=s[0];let e;for(e=0;e<i.length;e+=1){const r=D(s,i,e);l[e]?l[e].p(r,a):(l[e]=P(r),l[e].c(),l[e].m(t,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=i.length}},i:I,o:I,d(s){s&&f(t),S(l,s)}}}function M(o){return[[{heading:"Articles",description:"Articles I've written on topics that interest me:",list:[{url:`${C}/articles/knight-probability-in-chessboard`,label:"Leet Code 688. Knight probability in chessboard",description:"A much more efficient solution to Leet Code question 688 using recursion and the Law of Total Probability"}]},{heading:"Resources",description:"Useful resources I've collected from around the internet:",list:[{url:`${C}/articles/gamma-functions`,label:"Gamma Functions",description:"Definitions of the gamma functions"},{url:"https://gist.github.com/berkay-yalin/e6f737f32db49f72f30dde1b8fdf03ce",label:"Vim Indentation",description:"All .vimrc configurations relating to indentation"}]}]]}class j extends U{constructor(t){super(),F(this,t,M,K,H,{})}}export{j as component};
