import{S as oe,i as ie,s as ce,k as o,q as Z,l as i,m as f,r as F,h as c,n as r,b as W,G as n,u as pe,H as Q,N as ee,y as z,a as T,z as B,c as D,p as me,A as L,O as te,P as se,g as q,d as U,B as x,J as K}from"../chunks/index.c4f6fd60.js";import{b as le}from"../chunks/paths.115ad674.js";import{R as re}from"../chunks/RepositoryCard.86ec4294.js";/* empty css                      */function ue(p){let e,a;return{c(){e=o("div"),a=Z(p[0]),this.h()},l(t){e=i(t,"DIV",{class:!0,style:!0});var l=f(e);a=F(l,p[0]),l.forEach(c),this.h()},h(){r(e,"class","title svelte-fpl0nv"),r(e,"style",p[1])},m(t,l){W(t,e,l),n(e,a)},p(t,[l]){l&1&&pe(a,t[0]),l&2&&r(e,"style",t[1])},i:Q,o:Q,d(t){t&&c(e)}}}function he(p,e,a){let{text:t}=e,{style:l=""}=e;return p.$$set=v=>{"text"in v&&a(0,t=v.text),"style"in v&&a(1,l=v.style)},[t,l]}class ae extends oe{constructor(e){super(),ie(this,e,he,ue,ce,{text:0,style:1})}}function de(p){let e,a,t,l,v,d,R,C,k,M,_,g,A,u,G,E,h,I,b,$;return{c(){e=o("div"),a=o("div"),t=o("img"),v=T(),d=o("img"),C=T(),k=o("img"),_=T(),g=o("div"),A=Z(`Documentation:
                        `),u=o("a"),G=Z("README.MD"),E=T(),h=o("div"),I=Z(`Contributing:
                        `),b=o("a"),$=Z("CONTRIBUTING.MD"),this.h()},l(P){e=i(P,"DIV",{id:!0,class:!0});var y=f(e);a=i(y,"DIV",{id:!0,class:!0});var S=f(a);t=i(S,"IMG",{alt:!0,src:!0}),v=D(S),d=i(S,"IMG",{alt:!0,src:!0}),C=D(S),k=i(S,"IMG",{alt:!0,src:!0}),S.forEach(c),_=D(y),g=i(y,"DIV",{});var w=f(g);A=F(w,`Documentation:
                        `),u=i(w,"A",{href:!0,class:!0});var V=f(u);G=F(V,"README.MD"),V.forEach(c),w.forEach(c),E=D(y),h=i(y,"DIV",{});var O=f(h);I=F(O,`Contributing:
                        `),b=i(O,"A",{href:!0,class:!0});var j=f(b);$=F(j,"CONTRIBUTING.MD"),j.forEach(c),O.forEach(c),y.forEach(c),this.h()},h(){r(t,"alt","PyPI - Version"),K(t.src,l="https://img.shields.io/pypi/v/promethium.svg")||r(t,"src",l),r(d,"alt","PyPI - Python Version"),K(d.src,R="https://img.shields.io/pypi/pyversions/promethium.svg")||r(d,"src",R),r(k,"alt","PyPI - License"),K(k.src,M="https://img.shields.io/pypi/l/promethium")||r(k,"src",M),r(a,"id","shields-container"),r(a,"class","svelte-11dockl"),r(u,"href","https://github.com/berkay-yalin/promethium#promethium-"),r(u,"class","svelte-11dockl"),r(b,"href","https://github.com/berkay-yalin/promethium/blob/main/CONTRIBUTING.md"),r(b,"class","svelte-11dockl"),r(e,"id","promethium-content"),r(e,"class","svelte-11dockl")},m(P,y){W(P,e,y),n(e,a),n(a,t),n(a,v),n(a,d),n(a,C),n(a,k),n(e,_),n(e,g),n(g,A),n(g,u),n(u,G),n(e,E),n(e,h),n(h,I),n(h,b),n(b,$)},p:Q,d(P){P&&c(e)}}}function fe(p){let e,a;return{c(){e=o("img"),this.h()},l(t){e=i(t,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){r(e,"alt",""),r(e,"class","screenshot svelte-11dockl"),K(e.src,a="assets/projects/pseudocode2python.jpeg")||r(e,"src",a)},m(t,l){W(t,e,l)},p:Q,d(t){t&&c(e)}}}function ge(p){let e,a;return{c(){e=o("img"),this.h()},l(t){e=i(t,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){r(e,"alt",""),r(e,"class","screenshot svelte-11dockl"),K(e.src,a="assets/projects/python-interpreter.jpeg")||r(e,"src",a)},m(t,l){W(t,e,l)},p:Q,d(t){t&&c(e)}}}function _e(p){let e,a,t,l,v,d,R,C,k,M,_,g,A,u,G,E,h,I,b,$,P;l=new ae({props:{text:"Promethium",style:"margin: 1rem 1rem 0 1rem"}});const y=[p[0][2]];let S={$$slots:{default:[de]},$$scope:{ctx:p}};for(let s=0;s<y.length;s+=1)S=ee(S,y[s]);d=new re({props:S}),g=new ae({props:{text:"Zygon🦑",style:"margin: 1rem 1rem 0 1rem"}});const w=[p[0][0]];let V={$$slots:{default:[fe]},$$scope:{ctx:p}};for(let s=0;s<w.length;s+=1)V=ee(V,w[s]);u=new re({props:V}),I=new ae({props:{text:"Online Python Interpreter",style:"margin: 1rem 1rem 0 1rem"}});const O=[p[0][1]];let j={$$slots:{default:[ge]},$$scope:{ctx:p}};for(let s=0;s<O.length;s+=1)j=ee(j,O[s]);return $=new re({props:j}),{c(){e=o("main"),a=o("section"),t=o("a"),z(l.$$.fragment),v=T(),z(d.$$.fragment),R=T(),C=o("div"),k=T(),M=o("section"),_=o("a"),z(g.$$.fragment),A=T(),z(u.$$.fragment),G=T(),E=o("section"),h=o("a"),z(I.$$.fragment),b=T(),z($.$$.fragment),this.h()},l(s){e=i(s,"MAIN",{class:!0});var m=f(e);a=i(m,"SECTION",{class:!0});var H=f(a);t=i(H,"A",{href:!0,class:!0});var N=f(t);B(l.$$.fragment,N),v=D(N),B(d.$$.fragment,N),R=D(N),C=i(N,"DIV",{style:!0}),f(C).forEach(c),N.forEach(c),H.forEach(c),k=D(m),M=i(m,"SECTION",{class:!0});var J=f(M);_=i(J,"A",{href:!0,class:!0});var X=f(_);B(g.$$.fragment,X),A=D(X),B(u.$$.fragment,X),X.forEach(c),J.forEach(c),G=D(m),E=i(m,"SECTION",{class:!0});var ne=f(E);h=i(ne,"A",{href:!0,class:!0});var Y=f(h);B(I.$$.fragment,Y),b=D(Y),B($.$$.fragment,Y),Y.forEach(c),ne.forEach(c),m.forEach(c),this.h()},h(){me(C,"height","100%"),r(t,"href","https://github.com/berkay-yalin/promethium"),r(t,"class","svelte-11dockl"),r(a,"class","svelte-11dockl"),r(_,"href",le+"/zygon"),r(_,"class","svelte-11dockl"),r(M,"class","svelte-11dockl"),r(h,"href",le+"/python-interpreter"),r(h,"class","svelte-11dockl"),r(E,"class","svelte-11dockl"),r(e,"class","svelte-11dockl")},m(s,m){W(s,e,m),n(e,a),n(a,t),L(l,t,null),n(t,v),L(d,t,null),n(t,R),n(t,C),n(e,k),n(e,M),n(M,_),L(g,_,null),n(_,A),L(u,_,null),n(e,G),n(e,E),n(E,h),L(I,h,null),n(h,b),L($,h,null),P=!0},p(s,[m]){const H=m&1?te(y,[se(s[0][2])]):{};m&2&&(H.$$scope={dirty:m,ctx:s}),d.$set(H);const N=m&1?te(w,[se(s[0][0])]):{};m&2&&(N.$$scope={dirty:m,ctx:s}),u.$set(N);const J=m&1?te(O,[se(s[0][1])]):{};m&2&&(J.$$scope={dirty:m,ctx:s}),$.$set(J)},i(s){P||(q(l.$$.fragment,s),q(d.$$.fragment,s),q(g.$$.fragment,s),q(u.$$.fragment,s),q(I.$$.fragment,s),q($.$$.fragment,s),P=!0)},o(s){U(l.$$.fragment,s),U(d.$$.fragment,s),U(g.$$.fragment,s),U(u.$$.fragment,s),U(I.$$.fragment,s),U($.$$.fragment,s),P=!1},d(s){s&&c(e),x(l),x(d),x(g),x(u),x(I),x($)}}}function ve(p){return[[{path:"berkay-yalin/zygon",description:"Transpile OCR GCSE & A-Level Pseudocode into Python",language:["TypeScript","Svelte","JavaScript","HTML","Sass","CSS"],style:"background-color: transparent"},{path:"berkay-yalin/berkay-yalin.io",description:"webpage & stuff",language:["Svelte","TypeScript","Sass"],style:"background-color: transparent"},{path:"berkay-yalin/promethium",description:"Library for calculating statistical distributions, written in pure Python with zero dependencies.",language:["Python"],style:"background-color: transparent"}]]}class ke extends oe{constructor(e){super(),ie(this,e,ve,_e,ce,{})}}export{ke as component};
