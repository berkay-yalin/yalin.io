import{S as Ye,i as Xe,s as Ze,a as Qe,e as B,c as xe,b as z,g as le,t as F,d as ce,f as J,h as G,j as et,o as ve,k as tt,l as nt,m as rt,n as ye,p as C,q as at,r as st,u as ot,v as H,w as W,x as Oe,y as Y,z as X,A as Be}from"./chunks/index-448f7777.js";import{g as Fe,f as Je,s as K,a as Ee,b as it,i as lt}from"./chunks/singletons-1b275c47.js";function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const t=new URL(r);for(const o of ut){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,s,l)=>l(r,s),dt(t),t}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ht(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const fe=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ie.delete(o)}return fe(r,e)};const ie=new Map;function mt(r,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(s+=`[data-hash="${ht(t.body)}"]`);const l=document.querySelector(s);if(l!=null&&l.textContent){const{body:n,...f}=JSON.parse(l.textContent),h=l.getAttribute("data-ttl");return h&&ie.set(e,{body:n,init:f,ttl:1e3*Number(h)}),Promise.resolve(new Response(n,f))}return fe(r,t)}function gt(r,e){const t=ie.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ie.delete(r)}return fe(r,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function yt(r){const e=[],t=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(wt).map((l,n,f)=>{const h=decodeURIComponent(l),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(h);if(d)return e.push(d[1]),t.push(d[2]),"(?:/(.*))?";const _=n===f.length-1;return h&&"/"+h.split(/\[(.+?)\]/).map((w,R)=>{if(R%2){const U=_t.exec(w);if(!U)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,q,T]=U;return e.push(q),t.push(T),D?"(.*?)":"([^/]+?)"}return _&&w.includes(".")&&(o=!1),w.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function wt(r){return!/^\([^)]+\)$/.test(r)}function bt(r,e,t,o){const s={};for(let l=0;l<e.length;l+=1){const n=e[l],f=t[l],h=r[l+1]||"";if(f){const d=o[f];if(!d)throw new Error(`Missing "${f}" param matcher`);if(!d(h))return}s[n]=h}return s}function vt(r,e,t,o){const s=new Set(e);return Object.entries(t).map(([f,[h,d,_]])=>{const{pattern:w,names:R,types:U}=yt(f),D={id:f,exec:q=>{const T=w.exec(q);if(T)return bt(T,R,U,o)},errors:[1,..._||[]].map(q=>r[q]),layouts:[0,...d||[]].map(n),leaf:l(h)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function l(f){const h=f<0;return h&&(f=~f),[h,r[f]]}function n(f){return f===void 0?f:[s.has(f),r[f]]}}function Et(r){let e,t,o;var s=r[0][0];function l(n){return{props:{data:n[2],form:n[1]}}}return s&&(e=H(s,l(r))),{c(){e&&W(e.$$.fragment),t=B()},l(n){e&&Oe(e.$$.fragment,n),t=B()},m(n,f){e&&Y(e,n,f),z(n,t,f),o=!0},p(n,f){const h={};if(f&4&&(h.data=n[2]),f&2&&(h.form=n[1]),s!==(s=n[0][0])){if(e){le();const d=e;F(d.$$.fragment,1,0,()=>{X(d,1)}),ce()}s?(e=H(s,l(n)),W(e.$$.fragment),J(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(h)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&X(e,n)}}}function kt(r){let e,t,o;var s=r[0][0];function l(n){return{props:{data:n[2],$$slots:{default:[St]},$$scope:{ctx:n}}}}return s&&(e=H(s,l(r))),{c(){e&&W(e.$$.fragment),t=B()},l(n){e&&Oe(e.$$.fragment,n),t=B()},m(n,f){e&&Y(e,n,f),z(n,t,f),o=!0},p(n,f){const h={};if(f&4&&(h.data=n[2]),f&523&&(h.$$scope={dirty:f,ctx:n}),s!==(s=n[0][0])){if(e){le();const d=e;F(d.$$.fragment,1,0,()=>{X(d,1)}),ce()}s?(e=H(s,l(n)),W(e.$$.fragment),J(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(h)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&X(e,n)}}}function St(r){let e,t,o;var s=r[0][1];function l(n){return{props:{data:n[3],form:n[1]}}}return s&&(e=H(s,l(r))),{c(){e&&W(e.$$.fragment),t=B()},l(n){e&&Oe(e.$$.fragment,n),t=B()},m(n,f){e&&Y(e,n,f),z(n,t,f),o=!0},p(n,f){const h={};if(f&8&&(h.data=n[3]),f&2&&(h.form=n[1]),s!==(s=n[0][1])){if(e){le();const d=e;F(d.$$.fragment,1,0,()=>{X(d,1)}),ce()}s?(e=H(s,l(n)),W(e.$$.fragment),J(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(h)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&X(e,n)}}}function Ge(r){let e,t=r[5]&&Ke(r);return{c(){e=tt("div"),t&&t.c(),this.h()},l(o){e=nt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=rt(e);t&&t.l(s),s.forEach(G),this.h()},h(){ye(e,"id","svelte-announcer"),ye(e,"aria-live","assertive"),ye(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(o,s){z(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=Ke(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&G(e),t&&t.d()}}}function Ke(r){let e;return{c(){e=at(r[6])},l(t){e=st(t,r[6])},m(t,o){z(t,e,o)},p(t,o){o&64&&ot(e,t[6])},d(t){t&&G(e)}}}function Rt(r){let e,t,o,s,l;const n=[kt,Et],f=[];function h(_,w){return _[0][1]?0:1}e=h(r),t=f[e]=n[e](r);let d=r[4]&&Ge(r);return{c(){t.c(),o=Qe(),d&&d.c(),s=B()},l(_){t.l(_),o=xe(_),d&&d.l(_),s=B()},m(_,w){f[e].m(_,w),z(_,o,w),d&&d.m(_,w),z(_,s,w),l=!0},p(_,[w]){let R=e;e=h(_),e===R?f[e].p(_,w):(le(),F(f[R],1,1,()=>{f[R]=null}),ce(),t=f[e],t?t.p(_,w):(t=f[e]=n[e](_),t.c()),J(t,1),t.m(o.parentNode,o)),_[4]?d?d.p(_,w):(d=Ge(_),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(_){l||(J(t),l=!0)},o(_){F(t),l=!1},d(_){f[e].d(_),_&&G(o),d&&d.d(_),_&&G(s)}}}function Ot(r,e,t){let{stores:o}=e,{page:s}=e,{components:l}=e,{form:n}=e,{data_0:f=null}=e,{data_1:h=null}=e;et(o.page.notify);let d=!1,_=!1,w=null;return ve(()=>{const R=o.page.subscribe(()=>{d&&(t(5,_=!0),t(6,w=document.title||"untitled page"))});return t(4,d=!0),R}),r.$$set=R=>{"stores"in R&&t(7,o=R.stores),"page"in R&&t(8,s=R.page),"components"in R&&t(0,l=R.components),"form"in R&&t(1,n=R.form),"data_0"in R&&t(2,f=R.data_0),"data_1"in R&&t(3,h=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&o.page.set(s)},[l,n,f,h,d,_,w,o,s]}class $t extends Ye{constructor(e){super(),Xe(this,e,Ot,Rt,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),It=function(r,e){return new URL(r,e).href},ze={},we=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=It(s,o),s in ze)return;ze[s]=!0;const l=s.endsWith(".css"),n=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Lt,l||(f.as="script",f.crossOrigin=""),f.href=s,document.head.appendChild(f),l)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},jt={},ue=[()=>we(()=>import("./chunks/0-30c98410.js"),["chunks/0-30c98410.js","chunks/_layout-8d2a742b.js","components/layout.svelte-cb2880a1.js","chunks/index-448f7777.js"],import.meta.url),()=>we(()=>import("./chunks/1-96905c3b.js"),["chunks/1-96905c3b.js","components/error.svelte-5da15e87.js","chunks/index-448f7777.js","chunks/singletons-1b275c47.js"],import.meta.url),()=>we(()=>import("./chunks/2-f2e82911.js"),["chunks/2-f2e82911.js","components/pages/_page.svelte-1836018e.js","assets/_page-927ee81d.css","chunks/index-448f7777.js","chunks/singletons-1b275c47.js"],import.meta.url)],At=[],Nt={"":[2]},Pt={handleError:({error:r})=>{console.error(r)}};class ke{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,t){this.status=e,this.location=t}}const Ut="/__data.json";async function Tt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,s])=>[o,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Dt=-1,qt=-2,Ct=-3,Vt=-4,Bt=-5,Ft=-6;function Jt(r){const e=JSON.parse(r);if(typeof e=="number")return s(e);const t=e,o=Array(t.length);function s(l){if(l===Dt)return;if(l===Ct)return NaN;if(l===Vt)return 1/0;if(l===Bt)return-1/0;if(l===Ft)return-0;if(l in o)return o[l];const n=t[l];if(!n||typeof n!="object")o[l]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":o[l]=new Date(n[1]);break;case"Set":const h=new Set;o[l]=h;for(let w=1;w<n.length;w+=1)h.add(s(n[w]));break;case"Map":const d=new Map;o[l]=d;for(let w=1;w<n.length;w+=2)d.set(s(n[w]),s(n[w+1]));break;case"RegExp":o[l]=new RegExp(n[1],n[2]);break;case"Object":o[l]=Object(n[1]);break;case"BigInt":o[l]=BigInt(n[1]);break;case"null":const _=Object.create(null);o[l]=_;for(let w=1;w<n.length;w+=2)_[n[w]]=s(n[w+1]);break}else{const f=new Array(n.length);o[l]=f;for(let h=0;h<n.length;h+=1){const d=n[h];d!==qt&&(f[h]=s(d))}}else{const f={};o[l]=f;for(const h in n){const d=n[h];f[h]=s(d)}}return o[l]}return s(0)}const We="sveltekit:scroll",V="sveltekit:index",ae=vt(ue,At,Nt,jt),Se=ue[0],Re=ue[1];Se();Re();let ee={};try{ee=JSON.parse(sessionStorage[We])}catch{}function be(r){ee[r]=Ee()}function Gt({target:r,base:e,trailing_slash:t}){var qe;const o=[];let s=null;const l={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},f=!1,h=!1,d=!0,_=!1,w=!1,R,U=(qe=history.state)==null?void 0:qe[V];U||(U=Date.now(),history.replaceState({...history.state,[V]:U},"",location.href));const D=ee[U];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let q=!1,T,$e,te;async function Le(){te=te||Promise.resolve(),await te,te=null;const a=new URL(location.href),u=me(a,!0);s=null,await je(u,a,[])}async function pe(a,{noscroll:u=!1,replaceState:p=!1,keepfocus:i=!1,state:c={}},m,g){return typeof a=="string"&&(a=new URL(a,Fe(document))),ge({url:a,scroll:u?Ee():null,keepfocus:i,redirect_chain:m,details:{state:c,replaceState:p},nav_token:g,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Ie(a){const u=me(a,!1);if(!u)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s={id:u.id,promise:Pe(u)},s.promise}async function je(a,u,p,i,c={},m){var k,E;$e=c;let g=a&&await Pe(a);if(g||(g=await De(u,null,x(new Error(`Not found: ${u.pathname}`),{url:u,params:{},routeId:null}),404)),u=(a==null?void 0:a.url)||u,$e!==c)return!1;if(g.type==="redirect")if(p.length>10||p.includes(u.pathname))g=await ne({status:500,error:x(new Error("Redirect loop"),{url:u,params:{},routeId:null}),url:u,routeId:null});else return pe(new URL(g.location,u).href,{},[...p,u.pathname],c),!1;else((E=(k=g.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await K.updated.check()&&await re(u);if(o.length=0,w=!1,_=!0,i&&i.details){const{details:b}=i,v=b.replaceState?0:1;b.state[V]=U+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",u)}if(s=null,h){n=g.state,g.props.page&&(g.props.page.url=u);const b=oe();R.$set(g.props),b()}else Ae(g);if(i){const{scroll:b,keepfocus:v}=i;if(!v){const O=document.body,L=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var I;(I=getSelection())==null||I.removeAllRanges()}),L!==null?O.setAttribute("tabindex",L):O.removeAttribute("tabindex")}if(await Be(),d){const O=u.hash&&document.getElementById(u.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Be();d=!0,g.props.page&&(T=g.props.page),m&&m(),_=!1}function Ae(a){var c,m;n=a.state;const u=document.querySelector("style[data-sveltekit]");u&&u.remove(),T=a.props.page;const p=oe();R=new $t({target:r,props:{...a.props,stores:K},hydrate:!0}),p();const i={from:null,to:se("to",{params:n.params,routeId:(m=(c=n.route)==null?void 0:c.id)!=null?m:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(g=>g(i)),h=!0}async function Z({url:a,params:u,branch:p,status:i,error:c,route:m,form:g}){var L;const k=p.filter(Boolean),E={type:"loaded",state:{url:a,params:u,branch:p,error:c,route:m},props:{components:k.map(I=>I.node.component)}};g!==void 0&&(E.props.form=g);let b={},v=!T;for(let I=0;I<k.length;I+=1){const N=k[I];b={...b,...N.data},(v||!n.branch.some(P=>P===N))&&(E.props[`data_${I}`]=b,v=v||Object.keys((L=N.data)!=null?L:{}).length>0)}if(v||(v=Object.keys(T.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==c||g!==void 0||v){E.props.page={error:c,params:u,routeId:m&&m.id,status:i,url:a,form:g,data:v?b:T.data};const I=(N,P)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${P}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return E}async function de({loader:a,parent:u,url:p,params:i,routeId:c,server_data_node:m}){var b,v,O,L,I;let g=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((b=E.shared)!=null&&b.load){let N=function(...$){for(const y of $){const{href:S}=new URL(y,p);k.dependencies.add(S)}};const P={routeId:c,params:new Proxy(i,{get:($,y)=>(k.params.add(y),$[y])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:pt(p,()=>{k.url=!0}),async fetch($,y){let S;$ instanceof Request?(S=$.url,y={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...y}):S=$;const A=new URL(S,p).href;return N(A),h?gt(A,y):mt(S,A,y)},setHeaders:()=>{},depends:N,parent(){return k.parent=!0,u()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(O=await E.shared.load.call(null,P))!=null?O:null,g=g?await Tt(g):null}return{node:E,loader:a,server:m,shared:(L=E.shared)!=null&&L.load?{type:"data",data:g,uses:k}:null,data:(I=g!=null?g:m==null?void 0:m.data)!=null?I:null}}function Ne(a,u,p,i){if(w)return!0;if(!p)return!1;if(p.parent&&u||p.url&&a)return!0;for(const c of p.params)if(i[c]!==n.params[c])return!0;for(const c of p.dependencies)if(o.some(m=>m(new URL(c))))return!0;return!1}function he(a,u){var p,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&u!=null?u:null}async function Pe({id:a,invalidating:u,url:p,params:i,route:c}){var $;if((s==null?void 0:s.id)===a)return s.promise;const{errors:m,layouts:g,leaf:k}=c,E=[...g,k];m.forEach(y=>y==null?void 0:y().catch(()=>{})),E.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let b=null;const v=n.url?a!==n.url.pathname+n.url.search:!1,O=E.reduce((y,S,A)=>{var Q;const j=n.branch[A],M=!!(S!=null&&S[0])&&((j==null?void 0:j.loader)!==S[1]||Ne(v,y.some(Boolean),(Q=j.server)==null?void 0:Q.uses,i));return y.push(M),y},[]);if(O.some(Boolean)){try{b=await He(p,O)}catch(y){return ne({status:500,error:x(y,{url:p,params:i,routeId:c.id}),url:p,routeId:c.id})}if(b.type==="redirect")return b}const L=b==null?void 0:b.nodes;let I=!1;const N=E.map(async(y,S)=>{var Q;if(!y)return;const A=n.branch[S],j=L==null?void 0:L[S];if((!j||j.type==="skip")&&y[1]===(A==null?void 0:A.loader)&&!Ne(v,I,(Q=A.shared)==null?void 0:Q.uses,i))return A;if(I=!0,(j==null?void 0:j.type)==="error")throw j;return de({loader:y[1],url:p,params:i,routeId:c.id,parent:async()=>{var Ve;const Ce={};for(let _e=0;_e<S;_e+=1)Object.assign(Ce,(Ve=await N[_e])==null?void 0:Ve.data);return Ce},server_data_node:he(j===void 0&&y[0]?{type:"skip"}:j!=null?j:null,A==null?void 0:A.server)})});for(const y of N)y.catch(()=>{});const P=[];for(let y=0;y<E.length;y+=1)if(E[y])try{P.push(await N[y])}catch(S){if(S instanceof Me)return{type:"redirect",location:S.location};let A=500,j;L!=null&&L.includes(S)?(A=($=S.status)!=null?$:A,j=S.error):S instanceof ke?(A=S.status,j=S.body):j=x(S,{params:i,url:p,routeId:c.id});const M=await Ue(y,P,m);return M?await Z({url:p,params:i,branch:P.slice(0,M.idx).concat(M.node),status:A,error:j,route:c}):await De(p,c.id,j,A)}else P.push(void 0);return await Z({url:p,params:i,branch:P,status:200,error:null,route:c,form:u?void 0:null})}async function Ue(a,u,p){for(;a--;)if(p[a]){let i=a;for(;!u[i];)i-=1;try{return{idx:i+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function ne({status:a,error:u,url:p,routeId:i}){var b;const c={},m=await Se();let g=null;if(m.server)try{const v=await He(p,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;g=(b=v.nodes[0])!=null?b:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||f)&&await re(p)}const k=await de({loader:Se,url:p,params:c,routeId:i,parent:()=>Promise.resolve({}),server_data_node:he(g)}),E={node:await Re(),loader:Re,shared:null,server:null,data:null};return await Z({url:p,params:c,branch:[k,E],status:a,error:u,route:null})}function me(a,u){if(Te(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const i of ae){const c=i.exec(p);if(c){const m=new URL(a.origin+ct(a.pathname,t)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:u,route:i,params:ft(c),url:m}}}}function Te(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function ge({url:a,scroll:u,keepfocus:p,redirect_chain:i,details:c,type:m,delta:g,nav_token:k,accepted:E,blocked:b}){var N,P,$,y;let v=!1;const O=me(a,!1),L={from:se("from",{params:n.params,routeId:(P=(N=n.route)==null?void 0:N.id)!=null?P:null,url:n.url}),to:se("to",{params:($=O==null?void 0:O.params)!=null?$:null,routeId:(y=O==null?void 0:O.route.id)!=null?y:null,url:a}),type:m};g!==void 0&&(L.delta=g);const I={...L,cancel:()=>{v=!0}};if(l.before_navigate.forEach(S=>S(I)),v){b();return}be(U),E(),h&&K.navigating.set(L),await je(O,a,i,{scroll:u,keepfocus:p,details:c},k,()=>{l.after_navigate.forEach(S=>S(L)),K.navigating.set(null)})}async function De(a,u,p,i){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await ne({status:i,error:p,url:a,routeId:u}):await re(a)}function re(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ve(()=>(l.after_navigate.push(a),()=>{const u=l.after_navigate.indexOf(a);l.after_navigate.splice(u,1)}))},before_navigate:a=>{ve(()=>(l.before_navigate.push(a),()=>{const u=l.before_navigate.indexOf(a);l.before_navigate.splice(u,1)}))},disable_scroll_handling:()=>{(_||!h)&&(d=!1)},goto:(a,u={})=>pe(a,u,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:u}=new URL(a,location.href);o.push(p=>p.href===u)}return Le()},invalidateAll:()=>(w=!0,Le()),prefetch:async a=>{const u=new URL(a,Fe(document));await Ie(u)},prefetch_routes:async a=>{const p=(a?ae.filter(i=>a.some(c=>i.exec(c))):ae).map(i=>Promise.all([...i.layouts,i.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const u=new URL(location.href),{branch:p,route:i}=n;if(!i)return;const c=await Ue(n.branch.length,p,i.errors);if(c){const m=await Z({url:u,params:n.params,branch:p.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:i});n=m.state;const g=oe();R.$set(m.props),g()}}else if(a.type==="redirect")pe(a.location,{},[]);else{const u={form:a.data,page:{...T,form:a.data,status:a.status}},p=oe();R.$set(u),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var g,k;let c=!1;const m={from:se("from",{params:n.params,routeId:(k=(g=n.route)==null?void 0:g.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>c=!0};l.before_navigate.forEach(E=>E(m)),c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(U);try{sessionStorage[We]=JSON.stringify(ee)}catch{}}});const a=i=>{const{url:c,options:m}=Je(i);if(c&&m.prefetch){if(Te(c))return;Ie(c)}};let u;const p=i=>{clearTimeout(u),u=setTimeout(()=>{var c;(c=i.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:c,url:m,options:g}=Je(i);if(!c||!m)return;const k=c instanceof SVGAElement;if(!k&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const E=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||E.includes("external")||g.reload||(k?c.target.baseVal:c.target))return;const[b,v]=m.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){q=!0,be(U),n.url=m,K.page.set({...T,url:m}),K.page.notify();return}ge({url:m,scroll:g.noscroll?Ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[V]===U)return;const c=i.state[V]-U;ge({url:new URL(location.href),scroll:ee[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=i.state[V]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[V]:++U},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:u,node_ids:p,params:i,routeId:c,data:m,form:g})=>{var b;f=!0;const k=new URL(location.href);let E;try{const v=p.map(async(O,L)=>{const I=m[L];return de({loader:ue[O],url:k,params:i,routeId:c,parent:async()=>{const N={};for(let P=0;P<L;P+=1)Object.assign(N,(await v[P]).data);return N},server_data_node:he(I)})});E=await Z({url:k,params:i,branch:await Promise.all(v),status:a,error:u,form:g,route:(b=ae.find(O=>O.id===c))!=null?b:null})}catch(v){if(v instanceof Me){await re(new URL(v.location,location.href));return}E=await ne({status:v instanceof ke?v.status:500,error:x(v,{url:k,params:i,routeId:c}),url:k,routeId:c})}Ae(E)}}}async function He(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Ut;const o=await fe(t.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),s=await o.text();if(!o.ok)throw new Error(JSON.parse(s));return Jt(s)}function x(r,e){var t;return r instanceof ke?r.body:(t=Pt.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Kt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function se(r,e){for(const t of Kt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function oe(){return()=>{}}async function Ht({env:r,hydrate:e,paths:t,target:o,trailing_slash:s}){it(t);const l=Gt({target:o,base:t.base,trailing_slash:s});lt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Ht as start};
