import{g as ve,f as me,i as ae,j as _e,n as ge,k as ye,r as O,w as $,s as oe,l as se,m as Oe,u as we,e as T}from"./@vue.a137a740.js";var be=Object.defineProperty,he=Object.defineProperties,Pe=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$e=(e,t)=>{for(var r in t||(t={}))Se.call(t,r)&&W(e,r,t[r]);if(z)for(var r of z(t))Ee.call(t,r)&&W(e,r,t[r]);return e},Fe=(e,t)=>he(e,Pe(t));function $t(e,t){var r;const n=oe();return se(()=>{n.value=e()},Fe($e({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),Oe(n)}var Q;const N=typeof window<"u",Ie=e=>typeof e<"u",Ft=e=>typeof e=="boolean",le=e=>typeof e=="function",It=e=>typeof e=="number",je=e=>typeof e=="string",Te=()=>{};N&&((Q=window==null?void 0:window.navigator)==null?void 0:Q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function E(e){return typeof e=="function"?e():we(e)}function V(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const ie=e=>e();function Ne(e,t={}){let r,n;return o=>{const l=E(e),s=E(t.maxWait);if(r&&clearTimeout(r),l<=0||s!==void 0&&s<=0)return n&&(clearTimeout(n),n=null),o();s&&!n&&(n=setTimeout(()=>{r&&clearTimeout(r),n=null,o()},s)),r=setTimeout(()=>{n&&clearTimeout(n),n=null,o()},l)}}function Ce(e,t=!0,r=!0){let n=0,a,o=!0;const l=()=>{a&&(clearTimeout(a),a=void 0)};return i=>{const u=E(e),d=Date.now()-n;if(l(),u<=0)return n=Date.now(),i();d>u&&(r||!o)?(n=Date.now(),i()):t&&(a=setTimeout(()=>{n=Date.now(),o=!0,l(),i()},u-d)),!r&&!a&&(a=setTimeout(()=>o=!0,u)),o=!1}}function De(e=ie){const t=O(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function xe(e){return e}function C(e){return ve()?(me(e),!0):!1}function Ae(e,t=200,r={}){return V(Ne(t,r),e)}function jt(e,t=200,r={}){const n=O(e.value),a=Ae(()=>{n.value=e.value},t,r);return $(e,()=>a()),n}function Tt(e,t=200,r=!1,n=!0){return V(Ce(t,r,n),e)}function Re(e){return typeof e=="function"?T(e):O(e)}function k(e,t=!0){ae()?_e(e):t?e():ge(e)}function Me(e,t,r={}){const{immediate:n=!0}=r,a=O(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function s(){a.value=!1,l()}function i(...u){l(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...u)},E(t))}return n&&(a.value=!0,N&&i()),C(s),{isPending:a,start:i,stop:s}}function Nt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ye(e),o=O(e);function l(s){if(arguments.length)return o.value=s,o.value;{const i=E(r);return o.value=o.value===i?E(n):i,o.value}}return a?l:[o,l]}var J=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,ke=(e,t)=>{var r={};for(var n in e)Le.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&J)for(var n of J(e))t.indexOf(n)<0&&Ve.call(e,n)&&(r[n]=e[n]);return r};function ze(e,t,r={}){const n=r,{eventFilter:a=ie}=n,o=ke(n,["eventFilter"]);return $(e,V(a,t),o)}var We=Object.defineProperty,Qe=Object.defineProperties,Je=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,qe=(e,t)=>{for(var r in t||(t={}))ue.call(t,r)&&q(e,r,t[r]);if(A)for(var r of A(t))ce.call(t,r)&&q(e,r,t[r]);return e},He=(e,t)=>Qe(e,Je(t)),Be=(e,t)=>{var r={};for(var n in e)ue.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&A)for(var n of A(e))t.indexOf(n)<0&&ce.call(e,n)&&(r[n]=e[n]);return r};function Ue(e,t,r={}){const n=r,{eventFilter:a}=n,o=Be(n,["eventFilter"]),{eventFilter:l,pause:s,resume:i,isActive:u}=De(a);return{stop:ze(e,t,He(qe({},o),{eventFilter:l})),pause:s,resume:i,isActive:u}}function I(e){var t;const r=E(e);return(t=r==null?void 0:r.$el)!=null?t:r}const P=N?window:void 0,fe=N?window.document:void 0,Ge=N?window.navigator:void 0;N&&window.location;function h(...e){let t,r,n,a;if(je(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=P):[t,r,n,a]=e,!t)return Te;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(d=>d()),o.length=0},s=(d,y,p)=>(d.addEventListener(y,p,a),()=>d.removeEventListener(y,p,a)),i=$(()=>I(t),d=>{l(),d&&o.push(...r.flatMap(y=>n.map(p=>s(d,y,p))))},{immediate:!0,flush:"post"}),u=()=>{i(),l()};return C(u),u}function Ct(e,t,r={}){const{window:n=P,ignore:a,capture:o=!0,detectIframe:l=!1}=r;if(!n)return;let s=!0,i;const u=c=>{n.clearTimeout(i);const f=I(e);if(!(!f||f===c.target||c.composedPath().includes(f))){if(!s){s=!0;return}t(c)}},d=c=>a&&a.some(f=>{const v=I(f);return v&&(c.target===v||c.composedPath().includes(v))}),y=[h(n,"click",u,{passive:!0,capture:o}),h(n,"pointerdown",c=>{const f=I(e);f&&(s=!c.composedPath().includes(f)&&!d(c))},{passive:!0}),h(n,"pointerup",c=>{if(c.button===0){const f=c.composedPath();c.composedPath=()=>f,i=n.setTimeout(()=>u(c),50)}},{passive:!0}),l&&h(n,"blur",c=>{var f;const v=I(e);((f=n.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(v!=null&&v.contains(n.document.activeElement))&&t(c)})].filter(Boolean);return()=>y.forEach(c=>c())}function R(e,t=!1){const r=O(),n=()=>r.value=Boolean(e());return n(),k(n,t),r}function Ke(e,t={}){const{window:r=P}=t,n=R(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=O(!1),l=()=>{!a||("removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s))},s=()=>{!n.value||(l(),a=r.matchMedia(Re(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",s):a.addListener(s))};return se(s),C(()=>l()),o}function Dt(e={}){const{navigator:t=Ge,read:r=!1,source:n,copiedDuring:a=1500,legacy:o=!1}=e,l=["copy","cut"],s=R(()=>t&&"clipboard"in t),i=T(()=>s.value||o),u=O(""),d=O(!1),y=Me(()=>d.value=!1,a);function p(){s.value?t.clipboard.readText().then(g=>{u.value=g}):u.value=v()}if(i.value&&r)for(const g of l)h(g,p);async function c(g=E(n)){i.value&&g!=null&&(s.value?await t.clipboard.writeText(g):f(g),u.value=g,d.value=!0,y.start())}function f(g){const _=document.createElement("textarea");_.value=g!=null?g:"",_.style.position="absolute",_.style.opacity="0",document.body.appendChild(_),_.select(),document.execCommand("copy"),_.remove()}function v(){var g,_,w;return(w=(_=(g=document==null?void 0:document.getSelection)==null?void 0:g.call(document))==null?void 0:_.toString())!=null?w:""}return{isSupported:i,text:u,copied:d,copy:c}}function Xe(e){return JSON.parse(JSON.stringify(e))}const M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__";M[L]=M[L]||{};const Ye=M[L];function de(e,t){return Ye[e]||t}function Ze(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var et=Object.defineProperty,H=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,B=(e,t,r)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))tt.call(t,r)&&B(e,r,t[r]);if(H)for(var r of H(t))rt.call(t,r)&&B(e,r,t[r]);return e};const nt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function at(e,t,r,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:i=!0,mergeDefaults:u=!1,shallow:d,window:y=P,eventFilter:p,onError:c=m=>{console.error(m)}}=n,f=(d?oe:O)(t);if(!r)try{r=de("getDefaultStorage",()=>{var m;return(m=P)==null?void 0:m.localStorage})()}catch(m){c(m)}if(!r)return f;const v=E(t),g=Ze(v),_=(a=n.serializer)!=null?a:nt[g],{pause:w,resume:b}=Ue(f,()=>F(f.value),{flush:o,deep:l,eventFilter:p});return y&&s&&h(y,"storage",D),D(),f;function F(m){try{m==null?r.removeItem(e):r.setItem(e,_.write(m))}catch(S){c(S)}}function j(m){w();try{const S=m?m.newValue:r.getItem(e);if(S==null)return i&&v!==null&&r.setItem(e,_.write(v)),v;if(!m&&u){const x=_.read(S);return le(u)?u(x,v):g==="object"&&!Array.isArray(x)?U(U({},v),x):x}else return typeof S!="string"?S:_.read(S)}catch(S){c(S)}finally{b()}}function D(m){if(!(m&&m.storageArea!==r)){if(m&&m.key===null){f.value=v;return}m&&m.key!==e||(f.value=j(m))}}}function pe(e){return Ke("(prefers-color-scheme: dark)",e)}var ot=Object.defineProperty,G=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,it=(e,t)=>{for(var r in t||(t={}))st.call(t,r)&&K(e,r,t[r]);if(G)for(var r of G(t))lt.call(t,r)&&K(e,r,t[r]);return e};function ut(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=P,storage:o,storageKey:l="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:i,emitAuto:u}=e,d=it({auto:"",light:"light",dark:"dark"},e.modes||{}),y=pe({window:a}),p=T(()=>y.value?"dark":"light"),c=i||(l==null?O(n):at(l,n,o,{window:a,listenToStorageChanges:s})),f=T({get(){return c.value==="auto"&&!u?p.value:c.value},set(w){c.value=w}}),v=de("updateHTMLAttrs",(w,b,F)=>{const j=a==null?void 0:a.document.querySelector(w);if(!!j)if(b==="class"){const D=F.split(/\s/g);Object.values(d).flatMap(m=>(m||"").split(/\s/g)).filter(Boolean).forEach(m=>{D.includes(m)?j.classList.add(m):j.classList.remove(m)})}else j.setAttribute(b,F)});function g(w){var b;const F=w==="auto"?p.value:w;v(t,r,(b=d[F])!=null?b:F)}function _(w){e.onChanged?e.onChanged(w,g):g(w)}return $(f,_,{flush:"post",immediate:!0}),u&&$(p,()=>_(f.value),{flush:"post"}),k(()=>_(f.value)),f}var ct=Object.defineProperty,ft=Object.defineProperties,dt=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,Y=(e,t,r)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,mt=(e,t)=>{for(var r in t||(t={}))pt.call(t,r)&&Y(e,r,t[r]);if(X)for(var r of X(t))vt.call(t,r)&&Y(e,r,t[r]);return e},_t=(e,t)=>ft(e,dt(t));function xt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=P}=e,a=ut(_t(mt({},e),{onChanged:(s,i)=>{var u;e.onChanged?(u=e.onChanged)==null||u.call(e,s==="dark"):i(s)},modes:{dark:t,light:r}})),o=pe({window:n});return T({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}function At({document:e=fe}={}){if(!e)return O("visible");const t=O(e.visibilityState);return h(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var Z=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,Ot=(e,t)=>{var r={};for(var n in e)gt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Z)for(var n of Z(e))t.indexOf(n)<0&&yt.call(e,n)&&(r[n]=e[n]);return r};function Rt(e,t,r={}){const n=r,{window:a=P}=n,o=Ot(n,["window"]);let l;const s=R(()=>a&&"ResizeObserver"in a),i=()=>{l&&(l.disconnect(),l=void 0)},u=$(()=>I(e),y=>{i(),s.value&&a&&y&&(l=new ResizeObserver(t),l.observe(y,o))},{immediate:!0,flush:"post"}),d=()=>{i(),u()};return C(d),{isSupported:s,stop:d}}const ee=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Mt(e,t={}){const{document:r=fe,autoExit:n=!1}=t,a=e||(r==null?void 0:r.querySelector("html")),o=O(!1);let l=ee[0];const s=R(()=>{if(r){for(const v of ee)if(v[1]in r)return l=v,!0}else return!1;return!1}),[i,u,d,,y]=l;async function p(){!s.value||(r!=null&&r[d]&&await r[u](),o.value=!1)}async function c(){if(!s.value)return;await p();const v=I(a);v&&(await v[i](),o.value=!0)}async function f(){o.value?await p():await c()}return r&&h(r,y,()=>{o.value=!!(r!=null&&r[d])},!1),n&&C(p),{isSupported:s,isFullscreen:o,enter:c,exit:p,toggle:f}}var te;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(te||(te={}));var wt=Object.defineProperty,re=Object.getOwnPropertySymbols,bt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable,ne=(e,t,r)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Pt=(e,t)=>{for(var r in t||(t={}))bt.call(t,r)&&ne(e,r,t[r]);if(re)for(var r of re(t))ht.call(t,r)&&ne(e,r,t[r]);return e};const St={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Pt({linear:xe},St);function Lt(e,t,r,n={}){var a,o,l;const{clone:s=!1,passive:i=!1,eventName:u,deep:d=!1,defaultValue:y}=n,p=ae(),c=r||(p==null?void 0:p.emit)||((a=p==null?void 0:p.$emit)==null?void 0:a.bind(p))||((l=(o=p==null?void 0:p.proxy)==null?void 0:o.$emit)==null?void 0:l.bind(p==null?void 0:p.proxy));let f=u;t||(t="modelValue"),f=u||f||`update:${t.toString()}`;const v=_=>s?le(s)?s(_):Xe(_):_,g=()=>Ie(e[t])?v(e[t]):y;if(i){const _=g(),w=O(_);return $(()=>e[t],b=>w.value=v(b)),$(w,b=>{(b!==e[t]||d)&&c(f,b)},{deep:d}),w}else return T({get(){return g()},set(_){c(f,_)}})}function Vt({window:e=P}={}){if(!e)return O(!1);const t=O(e.document.hasFocus());return h(e,"blur",()=>{t.value=!1}),h(e,"focus",()=>{t.value=!0}),t}function kt(e={}){const{window:t=P,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0,includeScrollbar:o=!0}=e,l=O(r),s=O(n),i=()=>{t&&(o?(l.value=t.innerWidth,s.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};return i(),k(i),h("resize",i,{passive:!0}),a&&h("orientationchange",i,{passive:!0}),{width:l,height:s}}export{It as a,Ft as b,h as c,I as d,Me as e,Tt as f,At as g,Vt as h,N as i,$t as j,Lt as k,Mt as l,xt as m,Nt as n,Ct as o,kt as p,Dt as q,jt as r,C as t,Rt as u};