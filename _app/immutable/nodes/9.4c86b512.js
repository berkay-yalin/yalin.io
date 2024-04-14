import{S as V,i as D,s as G,k as P,q as S,a as k,l as b,m as T,r as w,h as u,c as N,n as y,b as A,G as c,L as z,H as B,U as J,V as W,y as M,J as X,z as q,N as x,A as R,g as $,d as j,B as H,o as F,W as K,w as U}from"../chunks/index.0d9e5105.js";import{p as Q,C as Y}from"../chunks/index.c8afad03.js";function Z(a){let e,r,d,l,i,n,o,_,f,p,m,h,g,O;return{c(){e=P("nav"),r=P("button"),d=S("Execute Python Code"),l=k(),i=P("button"),n=S("Toggle Terminal"),o=k(),_=P("button"),f=S("Clear Terminal"),p=k(),m=P("button"),h=S("Save Python Code"),this.h()},l(s){e=b(s,"NAV",{class:!0});var t=T(e);r=b(t,"BUTTON",{class:!0});var v=T(r);d=w(v,"Execute Python Code"),v.forEach(u),l=N(t),i=b(t,"BUTTON",{class:!0});var C=T(i);n=w(C,"Toggle Terminal"),C.forEach(u),o=N(t),_=b(t,"BUTTON",{class:!0});var E=T(_);f=w(E,"Clear Terminal"),E.forEach(u),p=N(t),m=b(t,"BUTTON",{class:!0});var L=T(m);h=w(L,"Save Python Code"),L.forEach(u),t.forEach(u),this.h()},h(){y(r,"class","svelte-1assfhz"),y(i,"class","svelte-1assfhz"),y(_,"class","svelte-1assfhz"),y(m,"class","svelte-1assfhz"),y(e,"class","svelte-1assfhz")},m(s,t){A(s,e,t),c(e,r),c(r,d),c(e,l),c(e,i),c(i,n),c(e,o),c(e,_),c(_,f),c(e,p),c(e,m),c(m,h),g||(O=[z(r,"click",a[1]),z(i,"click",a[2]),z(_,"click",a[3]),z(m,"click",a[4])],g=!0)},p:B,i:B,o:B,d(s){s&&u(e),g=!1,J(O)}}}function ee(a){const e=W();return[e,()=>e("ePC"),()=>e("tPC"),()=>e("cPC"),()=>e("sPC")]}class te extends V{constructor(e){super(),D(this,e,ee,Z,G,{})}}const{document:I}=K;function se(a){let e,r,d,l,i,n,o,_,f,p,m,h,g;l=new te({}),l.$on("ePC",a[4]),l.$on("tPC",a[5]),l.$on("cPC",a[6]),l.$on("sPC",a[7]);let O={filetype:Q()};return o=new Y({props:O}),a[8](o),{c(){e=P("script"),d=k(),M(l.$$.fragment),i=k(),n=P("main"),M(o.$$.fragment),_=k(),f=P("div"),p=P("span"),m=k(),h=P("textarea"),this.h()},l(s){const t=X("svelte-u7qdcm",I.head);e=b(t,"SCRIPT",{src:!0});var v=T(e);v.forEach(u),t.forEach(u),d=N(s),q(l.$$.fragment,s),i=N(s),n=b(s,"MAIN",{class:!0});var C=T(n);q(o.$$.fragment,C),_=N(C),f=b(C,"DIV",{id:!0,class:!0});var E=T(f);p=b(E,"SPAN",{id:!0,class:!0}),T(p).forEach(u),m=N(E),h=b(E,"TEXTAREA",{id:!0,class:!0}),T(h).forEach(u),E.forEach(u),C.forEach(u),this.h()},h(){I.title="Python Interpreter",e.async=!0,x(e.src,r="https://cdn.jsdelivr.net/pyodide/v0.23.0/full/pyodide.js")||y(e,"src",r),y(p,"id","shell-title"),y(p,"class","svelte-1udrstf"),y(h,"id","terminal"),h.readOnly=!0,y(h,"class","svelte-1udrstf"),y(f,"id","shell"),y(f,"class","svelte-1udrstf"),y(n,"class","svelte-1udrstf")},m(s,t){c(I.head,e),A(s,d,t),R(l,s,t),A(s,i,t),A(s,n,t),R(o,n,null),c(n,_),c(n,f),c(f,p),a[9](p),c(f,m),c(f,h),a[10](h),a[11](n),g=!0},p(s,[t]){const v={};o.$set(v)},i(s){g||($(l.$$.fragment,s),$(o.$$.fragment,s),g=!0)},o(s){j(l.$$.fragment,s),j(o.$$.fragment,s),g=!1},d(s){u(e),s&&u(d),H(l,s),s&&u(i),s&&u(n),a[8](null),H(o),a[9](null),a[10](null),a[11](null)}}}function ne(a,e,r){let d,l,i,n,o;function _(){d.runPython(`${l.getText()}`),r(2,n.value+=d.runPython("sys.stdout.getvalue()")+`
`,n),d.runPython("sys.stdout = io.StringIO()")}function f(){n.style.display!="none"?(r(2,n.style.display="none",n),i.style.setProperty("grid-template-columns","1fr")):(r(2,n.style.display="block",n),i.style.setProperty("grid-template-columns","1fr 1fr"))}function p(){r(2,n.value="",n)}function m(){let t=new Blob([l.getText()]),v=document.createElement("a");v.href=URL.createObjectURL(t),v.download="eric.py",v.click()}F(async()=>{r(3,o.innerHTML="initializing Python interpreter...",o),d=await loadPyodide(),d.runPython(`import io
import sys
sys.stdout = io.StringIO()`),r(3,o.innerHTML=`Pyodide 0.21.3 [Python 3.10.2] [Clang 15.0.0]
`,o)});function h(t){U[t?"unshift":"push"](()=>{l=t,r(0,l)})}function g(t){U[t?"unshift":"push"](()=>{o=t,r(3,o)})}function O(t){U[t?"unshift":"push"](()=>{n=t,r(2,n)})}function s(t){U[t?"unshift":"push"](()=>{i=t,r(1,i)})}return[l,i,n,o,_,f,p,m,h,g,O,s]}class ae extends V{constructor(e){super(),D(this,e,ne,se,G,{})}}export{ae as component};