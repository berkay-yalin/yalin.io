import{S as J,i as W,s as X,k as P,a as N,q as O,l as b,m as k,c as z,r as S,h as d,n as f,N as x,b as U,G as c,L as w,H as A,U as F,V as K,y as $,J as Q,z as j,A as H,g as V,d as D,B as G,o as Y,W as Z,w as I}from"../chunks/index.0d9e5105.js";import{p as ee,C as te}from"../chunks/index.c8afad03.js";import{b as se}from"../chunks/paths.30e012f5.js";function ne(a){let e,r,h,l,i,t,o,m,_,y,g,p,T,v,s,n,C;return{c(){e=P("nav"),r=P("img"),l=N(),i=P("button"),t=O("Execute Python Code"),o=N(),m=P("button"),_=O("Toggle Terminal"),y=N(),g=P("button"),p=O("Clear Terminal"),T=N(),v=P("button"),s=O("Save Python Code"),this.h()},l(E){e=b(E,"NAV",{class:!0});var u=k(e);r=b(u,"IMG",{alt:!0,src:!0,class:!0}),l=z(u),i=b(u,"BUTTON",{class:!0});var M=k(i);t=S(M,"Execute Python Code"),M.forEach(d),o=z(u),m=b(u,"BUTTON",{class:!0});var L=k(m);_=S(L,"Toggle Terminal"),L.forEach(d),y=z(u),g=b(u,"BUTTON",{class:!0});var q=k(g);p=S(q,"Clear Terminal"),q.forEach(d),T=z(u),v=b(u,"BUTTON",{class:!0});var R=k(v);s=S(R,"Save Python Code"),R.forEach(d),u.forEach(d),this.h()},h(){f(r,"alt",""),x(r.src,h=se+"/favicon.ico")||f(r,"src",h),f(r,"class","svelte-1assfhz"),f(i,"class","svelte-1assfhz"),f(m,"class","svelte-1assfhz"),f(g,"class","svelte-1assfhz"),f(v,"class","svelte-1assfhz"),f(e,"class","svelte-1assfhz")},m(E,u){U(E,e,u),c(e,r),c(e,l),c(e,i),c(i,t),c(e,o),c(e,m),c(m,_),c(e,y),c(e,g),c(g,p),c(e,T),c(e,v),c(v,s),n||(C=[w(i,"click",a[1]),w(m,"click",a[2]),w(g,"click",a[3]),w(v,"click",a[4])],n=!0)},p:A,i:A,o:A,d(E){E&&d(e),n=!1,F(C)}}}function re(a){const e=K();return[e,()=>e("ePC"),()=>e("tPC"),()=>e("cPC"),()=>e("sPC")]}class le extends J{constructor(e){super(),W(this,e,re,ne,X,{})}}const{document:B}=Z;function ae(a){let e,r,h,l,i,t,o,m,_,y,g,p,T;l=new le({}),l.$on("ePC",a[4]),l.$on("tPC",a[5]),l.$on("cPC",a[6]),l.$on("sPC",a[7]);let v={filetype:ee()};return o=new te({props:v}),a[8](o),{c(){e=P("script"),h=N(),$(l.$$.fragment),i=N(),t=P("main"),$(o.$$.fragment),m=N(),_=P("div"),y=P("span"),g=N(),p=P("textarea"),this.h()},l(s){const n=Q("svelte-u7qdcm",B.head);e=b(n,"SCRIPT",{src:!0});var C=k(e);C.forEach(d),n.forEach(d),h=z(s),j(l.$$.fragment,s),i=z(s),t=b(s,"MAIN",{class:!0});var E=k(t);j(o.$$.fragment,E),m=z(E),_=b(E,"DIV",{id:!0,class:!0});var u=k(_);y=b(u,"SPAN",{id:!0,class:!0}),k(y).forEach(d),g=z(u),p=b(u,"TEXTAREA",{id:!0,class:!0}),k(p).forEach(d),u.forEach(d),E.forEach(d),this.h()},h(){B.title="Python Interpreter",e.async=!0,x(e.src,r="https://cdn.jsdelivr.net/pyodide/v0.23.0/full/pyodide.js")||f(e,"src",r),f(y,"id","shell-title"),f(y,"class","svelte-1udrstf"),f(p,"id","terminal"),p.readOnly=!0,f(p,"class","svelte-1udrstf"),f(_,"id","shell"),f(_,"class","svelte-1udrstf"),f(t,"class","svelte-1udrstf")},m(s,n){c(B.head,e),U(s,h,n),H(l,s,n),U(s,i,n),U(s,t,n),H(o,t,null),c(t,m),c(t,_),c(_,y),a[9](y),c(_,g),c(_,p),a[10](p),a[11](t),T=!0},p(s,[n]){const C={};o.$set(C)},i(s){T||(V(l.$$.fragment,s),V(o.$$.fragment,s),T=!0)},o(s){D(l.$$.fragment,s),D(o.$$.fragment,s),T=!1},d(s){d(e),s&&d(h),G(l,s),s&&d(i),s&&d(t),a[8](null),G(o),a[9](null),a[10](null),a[11](null)}}}function oe(a,e,r){let h,l,i,t,o;function m(){h.runPython(`${l.getText()}`),r(2,t.value+=h.runPython("sys.stdout.getvalue()")+`
`,t),h.runPython("sys.stdout = io.StringIO()")}function _(){t.style.display!="none"?(r(2,t.style.display="none",t),i.style.setProperty("grid-template-columns","1fr")):(r(2,t.style.display="block",t),i.style.setProperty("grid-template-columns","1fr 1fr"))}function y(){r(2,t.value="",t)}function g(){let n=new Blob([l.getText()]),C=document.createElement("a");C.href=URL.createObjectURL(n),C.download="eric.py",C.click()}Y(async()=>{r(3,o.innerHTML="initializing Python interpreter...",o),h=await loadPyodide(),h.runPython(`import io
import sys
sys.stdout = io.StringIO()`),r(3,o.innerHTML=`Pyodide 0.21.3 [Python 3.10.2] [Clang 15.0.0]
`,o)});function p(n){I[n?"unshift":"push"](()=>{l=n,r(0,l)})}function T(n){I[n?"unshift":"push"](()=>{o=n,r(3,o)})}function v(n){I[n?"unshift":"push"](()=>{t=n,r(2,t)})}function s(n){I[n?"unshift":"push"](()=>{i=n,r(1,i)})}return[l,i,t,o,m,_,y,g,p,T,v,s]}class de extends J{constructor(e){super(),W(this,e,oe,ae,X,{})}}export{de as component};