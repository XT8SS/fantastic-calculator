var hf=Object.defineProperty;var pf=(n,e,t)=>e in n?hf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var xt=(n,e,t)=>(pf(n,typeof e!="symbol"?e+"":e,t),t);import"https://xt8ss.github.io/ff-site-data/data-sync.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function $(){}const ji=n=>n;function _f(n,e){for(const t in e)n[t]=e[t];return n}function Lc(n){return n()}function xo(){return Object.create(null)}function ve(n){n.forEach(Lc)}function gn(n){return typeof n=="function"}function ge(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ts;function Qe(n,e){return n===e?!0:(ts||(ts=document.createElement("a")),ts.href=e,n===ts.href)}function mf(n){return Object.keys(n).length===0}function gf(n,...e){if(n==null){for(const i of e)i(void 0);return $}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function V(n,e,t){n.$$.on_destroy.push(gf(e,t))}function bf(n,e,t,i){if(n){const s=Fc(n,e,t,i);return n[0](s)}}function Fc(n,e,t,i){return n[1]&&i?_f(t.ctx.slice(),n[1](i(e))):t.ctx}function vf(n,e,t,i){if(n[2]&&i){const s=n[2](i(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let l=0;l<o;l+=1)r[l]=e.dirty[l]|s[l];return r}return e.dirty|s}return e.dirty}function yf(n,e,t,i,s,r){if(s){const o=Fc(e,t,i,r);n.p(o,s)}}function wf(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function K(n,e,t){return n.set(t),e}function Bc(n){return n&&gn(n.destroy)?n.destroy:$}const Uc=typeof window<"u";let Us=Uc?()=>window.performance.now():()=>Date.now(),jr=Uc?n=>requestAnimationFrame(n):$;const zn=new Set;function Wc(n){zn.forEach(e=>{e.c(n)||(zn.delete(e),e.f())}),zn.size!==0&&jr(Wc)}function Ws(n){let e;return zn.size===0&&jr(Wc),{promise:new Promise(t=>{zn.add(e={c:n,f:t})}),abort(){zn.delete(e)}}}const kf=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(n,e){n.appendChild(e)}function Hc(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Cf(n){const e=g("style");return e.textContent="/* empty */",Ef(Hc(n),e),e.sheet}function Ef(n,e){return h(n.head||n,e),e.sheet}function P(n,e,t){n.insertBefore(e,t||null)}function N(n){n.parentNode&&n.parentNode.removeChild(n)}function st(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function g(n){return document.createElement(n)}function If(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ie(n){return document.createTextNode(n)}function E(){return ie(" ")}function nt(){return ie("")}function R(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function m(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Re(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:m(n,e,t)}function qc(n){return n===""?null:+n}function Sf(n){return Array.from(n.childNodes)}function Ee(n,e){e=""+e,n.data!==e&&(n.data=e)}function Dt(n,e){n.value=e??""}function ze(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}let ns;function Tf(){if(ns===void 0){ns=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ns=!0}}return ns}function fn(n,e){getComputedStyle(n).position==="static"&&(n.style.position="relative");const i=g("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Tf();let r;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=R(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{r=R(i.contentWindow,"resize",e),e()}),h(n,i),()=>{(s||r&&i.contentWindow)&&r(),N(i)}}function ue(n,e,t){n.classList.toggle(e,!!t)}function zc(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}class jc{constructor(e=!1){xt(this,"is_svg",!1);xt(this,"e");xt(this,"n");xt(this,"t");xt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,i=null){this.e||(this.is_svg?this.e=If(t.nodeName):this.e=g(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)P(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}const ds=new Map;let fs=0;function Nf(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Of(n,e){const t={stylesheet:Cf(e),rules:{}};return ds.set(n,t),t}function Ii(n,e,t,i,s,r,o,l=0){const a=16.666/i;let c=`{
`;for(let v=0;v<=1;v+=a){const y=e+(t-e)*r(v);c+=v*100+`%{${o(y,1-y)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,d=`__svelte_${Nf(u)}_${l}`,f=Hc(n),{stylesheet:p,rules:_}=ds.get(f)||Of(f,n);_[d]||(_[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const b=n.style.animation||"";return n.style.animation=`${b?`${b}, `:""}${d} ${i}ms linear ${s}ms 1 both`,fs+=1,d}function Si(n,e){const t=(n.style.animation||"").split(", "),i=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-i.length;s&&(n.style.animation=i.join(", "),fs-=s,fs||Rf())}function Rf(){jr(()=>{fs||(ds.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&N(e)}),ds.clear())})}function Af(n,e,t,i){if(!e)return $;const s=n.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:r=0,duration:o=300,easing:l=ji,start:a=Us()+r,end:c=a+o,tick:u=$,css:d}=t(n,{from:e,to:s},i);let f=!0,p=!1,_;function b(){d&&(_=Ii(n,0,1,o,r,l,d)),r||(p=!0)}function v(){d&&Si(n,_),f=!1}return Ws(y=>{if(!p&&y>=a&&(p=!0),p&&y>=c&&(u(1,0),v()),!f)return!1;if(p){const w=y-a,k=0+1*l(w/o);u(k,1-k)}return!0}),b(),u(0,1),v}function Df(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,s=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,Vc(n,s)}}function Vc(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform;n.style.transform=`${s} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Ti;function bi(n){Ti=n}function Pf(){if(!Ti)throw new Error("Function called outside component initialization");return Ti}function At(){const n=Pf();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=zc(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const Wn=[],fe=[];let jn=[];const yr=[],Mf=Promise.resolve();let wr=!1;function Lf(){wr||(wr=!0,Mf.then(Gc))}function Ce(n){jn.push(n)}function Pe(n){yr.push(n)}const sr=new Set;let Fn=0;function Gc(){if(Fn!==0)return;const n=Ti;do{try{for(;Fn<Wn.length;){const e=Wn[Fn];Fn++,bi(e),Ff(e.$$)}}catch(e){throw Wn.length=0,Fn=0,e}for(bi(null),Wn.length=0,Fn=0;fe.length;)fe.pop()();for(let e=0;e<jn.length;e+=1){const t=jn[e];sr.has(t)||(sr.add(t),t())}jn.length=0}while(Wn.length);for(;yr.length;)yr.pop()();wr=!1,sr.clear(),bi(n)}function Ff(n){if(n.fragment!==null){n.update(),ve(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ce)}}function Bf(n){const e=[],t=[];jn.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),jn=e}let fi;function Vr(){return fi||(fi=Promise.resolve(),fi.then(()=>{fi=null})),fi}function En(n,e,t){n.dispatchEvent(zc(`${e?"intro":"outro"}${t}`))}const os=new Set;let Pt;function Be(){Pt={r:0,c:[],p:Pt}}function Ue(){Pt.r||ve(Pt.c),Pt=Pt.p}function B(n,e){n&&n.i&&(os.delete(n),n.i(e))}function q(n,e,t,i){if(n&&n.o){if(os.has(n))return;os.add(n),Pt.c.push(()=>{os.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}const Gr={duration:0};function Kr(n,e,t){const i={direction:"in"};let s=e(n,t,i),r=!1,o,l,a=0;function c(){o&&Si(n,o)}function u(){const{delay:f=0,duration:p=300,easing:_=ji,tick:b=$,css:v}=s||Gr;v&&(o=Ii(n,0,1,p,f,_,v,a++)),b(0,1);const y=Us()+f,w=y+p;l&&l.abort(),r=!0,Ce(()=>En(n,!0,"start")),l=Ws(k=>{if(r){if(k>=w)return b(1,0),En(n,!0,"end"),c(),r=!1;if(k>=y){const I=_((k-y)/p);b(I,1-I)}}return r})}let d=!1;return{start(){d||(d=!0,Si(n),gn(s)?(s=s(i),Vr().then(u)):u())},invalidate(){d=!1},end(){r&&(c(),r=!1)}}}function Yr(n,e,t){const i={direction:"out"};let s=e(n,t,i),r=!0,o;const l=Pt;l.r+=1;let a;function c(){const{delay:u=0,duration:d=300,easing:f=ji,tick:p=$,css:_}=s||Gr;_&&(o=Ii(n,1,0,d,u,f,_));const b=Us()+u,v=b+d;Ce(()=>En(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),Ws(y=>{if(r){if(y>=v)return p(0,1),En(n,!1,"end"),--l.r||ve(l.c),!1;if(y>=b){const w=f((y-b)/d);p(1-w,w)}}return r})}return gn(s)?Vr().then(()=>{s=s(i),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&s.tick&&s.tick(1,0),r&&(o&&Si(n,o),r=!1)}}}function me(n,e,t,i){let r=e(n,t,{direction:"both"}),o=i?0:1,l=null,a=null,c=null,u;function d(){c&&Si(n,c)}function f(_,b){const v=_.b-o;return b*=Math.abs(v),{a:o,b:_.b,d:v,duration:b,start:_.start,end:_.start+b,group:_.group}}function p(_){const{delay:b=0,duration:v=300,easing:y=ji,tick:w=$,css:k}=r||Gr,I={start:Us()+b,b:_};_||(I.group=Pt,Pt.r+=1),"inert"in n&&(_?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=I:(k&&(d(),c=Ii(n,o,_,v,b,y,k)),_&&w(0,1),l=f(I,v),Ce(()=>En(n,_,"start")),Ws(M=>{if(a&&M>a.start&&(l=f(a,v),a=null,En(n,l.b,"start"),k&&(d(),c=Ii(n,o,l.b,l.duration,0,y,r.css))),l){if(M>=l.end)w(o=l.b,1-o),En(n,l.b,"end"),a||(l.b?d():--l.group.r||ve(l.group.c)),l=null;else if(M>=l.start){const W=M-l.start;o=l.a+l.d*y(W/l.duration),w(o,1-o)}}return!!(l||a)}))}return{run(_){gn(r)?Vr().then(()=>{r=r({direction:_?"in":"out"}),p(_)}):p(_)},end(){d(),l=a=null}}}function Ae(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Uf(n,e){q(n,1,1,()=>{e.delete(n.key)})}function Wf(n,e){n.f(),Uf(n,e)}function Hf(n,e,t,i,s,r,o,l,a,c,u,d){let f=n.length,p=r.length,_=f;const b={};for(;_--;)b[n[_].key]=_;const v=[],y=new Map,w=new Map,k=[];for(_=p;_--;){const O=d(s,r,_),L=t(O);let U=o.get(L);U?i&&k.push(()=>U.p(O,e)):(U=c(L,O),U.c()),y.set(L,v[_]=U),L in b&&w.set(L,Math.abs(_-b[L]))}const I=new Set,M=new Set;function W(O){B(O,1),O.m(l,u),o.set(O.key,O),u=O.first,p--}for(;f&&p;){const O=v[p-1],L=n[f-1],U=O.key,Y=L.key;O===L?(u=O.first,f--,p--):y.has(Y)?!o.has(U)||I.has(U)?W(O):M.has(Y)?f--:w.get(U)>w.get(Y)?(M.add(U),W(O)):(I.add(Y),f--):(a(L,o),f--)}for(;f--;){const O=n[f];y.has(O.key)||a(O,o)}for(;p;)W(v[p-1]);return ve(k),v}function Me(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function le(n){n&&n.c()}function se(n,e,t){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),Ce(()=>{const r=n.$$.on_mount.map(Lc).filter(gn);n.$$.on_destroy?n.$$.on_destroy.push(...r):ve(r),n.$$.on_mount=[]}),s.forEach(Ce)}function re(n,e){const t=n.$$;t.fragment!==null&&(Bf(t.after_update),ve(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function qf(n,e){n.$$.dirty[0]===-1&&(Wn.push(n),Lf(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ie(n,e,t,i,s,r,o=null,l=[-1]){const a=Ti;bi(n);const c=n.$$={fragment:null,ctx:[],props:r,update:$,not_equal:s,bound:xo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:xo(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,f,...p)=>{const _=p.length?p[0]:f;return c.ctx&&s(c.ctx[d],c.ctx[d]=_)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](_),u&&qf(n,d)),f}):[],c.update(),u=!0,ve(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const d=Sf(e.target);c.fragment&&c.fragment.l(d),d.forEach(N)}else c.fragment&&c.fragment.c();e.intro&&B(n.$$.fragment),se(n,e.target,e.anchor),Gc()}bi(a)}class Se{constructor(){xt(this,"$$");xt(this,"$$set")}$destroy(){re(this,1),this.$destroy=$}$on(e,t){if(!gn(t))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!mf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const zf="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(zf);const Bn=[];function Ye(n,e=$){let t;const i=new Set;function s(l){if(ge(n,l)&&(n=l,t)){const a=!Bn.length;for(const c of i)c[1](),Bn.push(c,n);if(a){for(let c=0;c<Bn.length;c+=2)Bn[c][0](Bn[c+1]);Bn.length=0}}}function r(l){s(l(n))}function o(l,a=$){const c=[l,a];return i.add(c),i.size===1&&(t=e(s,r)||$),l(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}let Zo=0,$o=localStorage.getItem("changelogSeen"),el=localStorage.getItem("supportMe"),Kc=Ye({}),Qr=Ye(!1),Hs=Ye(""),jf=Ye([]),tl=Ye({select:new Audio}),Ut=Ye({}),Nt=Ye({}),ft=Ye({armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0}),Ft=Ye({}),Jr=Ye([]),rr=Ye({}),St=Ye(),hs=Ye(!1),Ot=Ye({}),Tn=Ye(!1),kr=Ye($o?JSON.parse($o):!1),vi=Ye(el?JSON.parse(el):{showAgain:!0,timesDenied:0,totalVisits:0,lastVisits:0}),Nn=Ye(!1),Jn=Ye({}),Xn=Ye({}),Vf=Ye({}),vt=Ye({armor:{min:0,avg:0,max:0},gear:{min:0,avg:0,max:0},total:{min:0,avg:0,max:0}}),Vn=Ye({}),hi=Ye({parasol:!0,armor:!0,gear:!0,basic:!0}),ee=Ye({item:{ongoing:!1,data:null},export:{ongoing:!1,status:null},save:{ongoing:!1,status:null},load:{ongoing:!1,status:null},delete:{ongoing:!1,status:null},share:{ongoing:!1},costs:{ongoing:!1},bonus:{ongoing:!1},screenshot:{ongoing:!1},randomize:{ongoing:!1},login:{ongoing:!1},resources:{ongoing:!1},changelog:{ongoing:!1},policy:{ongoing:!1},donate:{ongoing:!1},sync:{ongoing:!1},message:""});Ot.subscribe(()=>{Zo++,setTimeout(()=>{Zo>1&&window.history.replaceState(null,null,location.origin+location.pathname)})});kr.subscribe(n=>window.localStorage.setItem("changelogSeen",JSON.stringify(n)));vi.subscribe(n=>localStorage.setItem("supportMe",JSON.stringify(n)));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw si(e)},si=function(n){return new Error("Firebase Database ("+Yc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Gf=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,a=s+2<n.length,c=a?n[s+2]:0,u=r>>2,d=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,p=c&63;a||(p=64,o||(f=64)),i.push(t[u],t[d],t[f],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||c==null||d==null)throw new Kf;const f=r<<2|l>>4;if(i.push(f),c!==64){const p=l<<4&240|c>>2;if(i.push(p),d!==64){const _=c<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jc=function(n){const e=Qc(n);return Xr.encodeByteArray(e,!0)},ps=function(n){return Jc(n).replace(/\./g,"")},_s=function(n){try{return Xr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n){return Xc(void 0,n)}function Xc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Qf(t)||(n[t]=Xc(n[t],e[t]));return n}function Qf(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=()=>Jf().__FIREBASE_DEFAULTS__,xf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_s(n[1]);return e&&JSON.parse(e)},xr=()=>{try{return Xf()||xf()||Zf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xc=n=>{var e,t;return(t=(e=xr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},$f=n=>{const e=xc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Zc=()=>{var n;return(n=xr())===null||n===void 0?void 0:n.config},$c=n=>{var e;return(e=xr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[ps(JSON.stringify(t)),ps(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function th(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function eu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nh(){const n=at();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tu(){return Yc.NODE_ADMIN===!0}function ih(){try{return typeof indexedDB=="object"}catch{return!1}}function sh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="FirebaseError";class bn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=rh,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?oh(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new bn(s,l,i)}}function oh(n,e){return n.replace(lh,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const lh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n){return JSON.parse(n)}function xe(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Ni(_s(r[0])||""),t=Ni(_s(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},ah=function(n){const e=nu(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ch=function(n){const e=nu(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function xn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Cr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ms(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function gs(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(nl(r)&&nl(o)){if(!gs(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function nl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const f=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):d<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(s<<5|s>>>27)+c+a+u+i[d]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function dh(n,e){const t=new fh(n,e);return t.subscribe.bind(t)}class fh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");hh(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=or),s.error===void 0&&(s.error=or),s.complete===void 0&&(s.complete=or);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function or(){}function $r(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,ne(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},zs=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n){return n&&n._delegate?n._delegate:n}class On{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new qs;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gh(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:mh(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mh(n){return n===yn?void 0:n}function gh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _h(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(He||(He={}));const vh={debug:He.DEBUG,verbose:He.VERBOSE,info:He.INFO,warn:He.WARN,error:He.ERROR,silent:He.SILENT},yh=He.INFO,wh={[He.DEBUG]:"log",[He.VERBOSE]:"log",[He.INFO]:"info",[He.WARN]:"warn",[He.ERROR]:"error"},kh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=wh[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eo{constructor(e){this.name=e,this._logLevel=yh,this._logHandler=kh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in He))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,He.DEBUG,...e),this._logHandler(this,He.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,He.VERBOSE,...e),this._logHandler(this,He.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,He.INFO,...e),this._logHandler(this,He.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,He.WARN,...e),this._logHandler(this,He.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,He.ERROR,...e),this._logHandler(this,He.ERROR,...e)}}const Ch=(n,e)=>e.some(t=>n instanceof t);let il,sl;function Eh(){return il||(il=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ih(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iu=new WeakMap,Er=new WeakMap,su=new WeakMap,lr=new WeakMap,to=new WeakMap;function Sh(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(rn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&iu.set(t,n)}).catch(()=>{}),to.set(e,n),e}function Th(n){if(Er.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Er.set(n,e)}let Ir={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Er.get(n);if(e==="objectStoreNames")return n.objectStoreNames||su.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nh(n){Ir=n(Ir)}function Oh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ar(this),e,...t);return su.set(i,e.sort?e.sort():[e]),rn(i)}:Ih().includes(n)?function(...e){return n.apply(ar(this),e),rn(iu.get(this))}:function(...e){return rn(n.apply(ar(this),e))}}function Rh(n){return typeof n=="function"?Oh(n):(n instanceof IDBTransaction&&Th(n),Ch(n,Eh())?new Proxy(n,Ir):n)}function rn(n){if(n instanceof IDBRequest)return Sh(n);if(lr.has(n))return lr.get(n);const e=Rh(n);return e!==n&&(lr.set(n,e),to.set(e,n)),e}const ar=n=>to.get(n);function Ah(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),l=rn(o);return i&&o.addEventListener("upgradeneeded",a=>{i(rn(o.result),a.oldVersion,a.newVersion,rn(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Dh=["get","getKey","getAll","getAllKeys","count"],Ph=["put","add","delete","clear"],cr=new Map;function rl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Ph.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Dh.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),s&&a.done]))[0]};return cr.set(e,r),r}Nh(n=>({...n,get:(e,t,i)=>rl(e,t)||n.get(e,t,i),has:(e,t)=>!!rl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lh(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Lh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sr="@firebase/app",ol="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new eo("@firebase/app"),Fh="@firebase/app-compat",Bh="@firebase/analytics-compat",Uh="@firebase/analytics",Wh="@firebase/app-check-compat",Hh="@firebase/app-check",qh="@firebase/auth",zh="@firebase/auth-compat",jh="@firebase/database",Vh="@firebase/database-compat",Gh="@firebase/functions",Kh="@firebase/functions-compat",Yh="@firebase/installations",Qh="@firebase/installations-compat",Jh="@firebase/messaging",Xh="@firebase/messaging-compat",xh="@firebase/performance",Zh="@firebase/performance-compat",$h="@firebase/remote-config",ep="@firebase/remote-config-compat",tp="@firebase/storage",np="@firebase/storage-compat",ip="@firebase/firestore",sp="@firebase/firestore-compat",rp="firebase",op="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]",lp={[Sr]:"fire-core",[Fh]:"fire-core-compat",[Uh]:"fire-analytics",[Bh]:"fire-analytics-compat",[Hh]:"fire-app-check",[Wh]:"fire-app-check-compat",[qh]:"fire-auth",[zh]:"fire-auth-compat",[jh]:"fire-rtdb",[Vh]:"fire-rtdb-compat",[Gh]:"fire-fn",[Kh]:"fire-fn-compat",[Yh]:"fire-iid",[Qh]:"fire-iid-compat",[Jh]:"fire-fcm",[Xh]:"fire-fcm-compat",[xh]:"fire-perf",[Zh]:"fire-perf-compat",[$h]:"fire-rc",[ep]:"fire-rc-compat",[tp]:"fire-gcs",[np]:"fire-gcs-compat",[ip]:"fire-fst",[sp]:"fire-fst-compat","fire-js":"fire-js",[rp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Map,Nr=new Map;function ap(n,e){try{n.container.addComponent(e)}catch(t){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zn(n){const e=n.name;if(Nr.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;Nr.set(e,n);for(const t of bs.values())ap(t,n);return!0}function no(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new Vi("app","Firebase",cp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=op;function io(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Tr,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(t||(t=Zc()),!t)throw on.create("no-options");const r=bs.get(s);if(r){if(gs(t,r.options)&&gs(i,r.config))return r;throw on.create("duplicate-app",{appName:s})}const o=new bh(s);for(const a of Nr.values())o.addComponent(a);const l=new up(t,i,o);return bs.set(s,l),l}function js(n=Tr){const e=bs.get(n);if(!e&&n===Tr&&Zc())return io();if(!e)throw on.create("no-app",{appName:n});return e}function ln(n,e,t){var i;let s=(i=lp[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(l.join(" "));return}Zn(new On(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="firebase-heartbeat-database",fp=1,Oi="firebase-heartbeat-store";let ur=null;function ru(){return ur||(ur=Ah(dp,fp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Oi)}}}).catch(n=>{throw on.create("idb-open",{originalErrorMessage:n.message})})),ur}async function hp(n){try{return await(await ru()).transaction(Oi).objectStore(Oi).get(ou(n))}catch(e){if(e instanceof bn)Rn.warn(e.message);else{const t=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(t.message)}}}async function ll(n,e){try{const i=(await ru()).transaction(Oi,"readwrite");await i.objectStore(Oi).put(e,ou(n)),await i.done}catch(t){if(t instanceof bn)Rn.warn(t.message);else{const i=on.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rn.warn(i.message)}}}function ou(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=1024,_p=30*24*60*60*1e3;class mp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bp(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=al();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=_p}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=al(),{heartbeatsToSend:i,unsentEntries:s}=gp(this._heartbeatsCache.heartbeats),r=ps(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function al(){return new Date().toISOString().substring(0,10)}function gp(n,e=pp){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),cl(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),cl(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class bp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ih()?sh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ll(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ll(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cl(n){return ps(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){Zn(new On("platform-logger",e=>new Mh(e),"PRIVATE")),Zn(new On("heartbeat",e=>new mp(e),"PRIVATE")),ln(Sr,ol,n),ln(Sr,ol,"esm2017"),ln("fire-js","")}vp("");var yp="firebase",wp="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(yp,wp,"app");function so(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function lu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kp=lu,au=new Vi("auth","Firebase",lu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new eo("@firebase/auth");function Cp(n,...e){vs.logLevel<=He.WARN&&vs.warn(`Auth (${oi}): ${n}`,...e)}function ls(n,...e){vs.logLevel<=He.ERROR&&vs.error(`Auth (${oi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n,...e){throw ro(n,...e)}function Mt(n,...e){return ro(n,...e)}function Ep(n,e,t){const i=Object.assign(Object.assign({},kp()),{[e]:t});return new Vi("auth","Firebase",i).create(e,{appName:n.name})}function ro(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return au.create(n,...e)}function we(n,e,...t){if(!n)throw ro(e,...t)}function qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ls(e),new Error(e)}function Yt(n,e){n||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ip(){return ul()==="http:"||ul()==="https:"}function ul(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ip()||th()||"connection"in navigator)?navigator.onLine:!0}function Tp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yt(t>e,"Short delay should be less than long delay!"),this.isMobile=Zr()||eu()}get(){return Sp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n,e){Yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=new Gi(3e4,6e4);function lo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function li(n,e,t,i,s={}){return uu(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=ri(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode),cu.fetch()(du(n,n.config.apiHost,t,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function uu(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Np),e);try{const s=new Ap(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw is(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw is(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw is(n,"email-already-in-use",o);if(a==="USER_DISABLED")throw is(n,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ep(n,u,c);Kt(n,u)}}catch(s){if(s instanceof bn)throw s;Kt(n,"network-request-failed",{message:String(s)})}}async function Rp(n,e,t,i,s={}){const r=await li(n,e,t,i,s);return"mfaPendingCredential"in r&&Kt(n,"multi-factor-auth-required",{_serverResponse:r}),r}function du(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?oo(n.config,s):`${n.config.apiScheme}://${s}`}class Ap{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Mt(this.auth,"network-request-failed")),Op.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function is(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Mt(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(n,e){return li(n,"POST","/v1/accounts:delete",e)}async function Pp(n,e){return li(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mp(n,e=!1){const t=gt(n),i=await t.getIdToken(e),s=ao(i);we(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:yi(dr(s.auth_time)),issuedAtTime:yi(dr(s.iat)),expirationTime:yi(dr(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function dr(n){return Number(n)*1e3}function ao(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=_s(t);return s?JSON.parse(s):(ls("Failed to decode base64 JWT payload"),null)}catch(s){return ls("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Lp(n){const e=ao(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof bn&&Fp(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Fp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Ri(n,Pp(t,{idToken:i}));we(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Hp(r.providerUserInfo):[],l=Wp(n.providerData,o),a=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new fu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Up(n){const e=gt(n);await ys(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wp(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Hp(n){return n.map(e=>{var{providerId:t}=e,i=so(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(n,e){const t=await uu(n,{},async()=>{const i=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=du(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",cu.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zp(n,e){return li(n,"POST","/v2/accounts:revokeToken",lo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return we(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await qp(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Ai;return i&&(we(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(we(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(we(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=so(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ri(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mp(this,e)}reload(){return Up(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ys(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ri(this,Dp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,l,a,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(l=t.tenantId)!==null&&l!==void 0?l:void 0,v=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,y=(c=t.createdAt)!==null&&c!==void 0?c:void 0,w=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:I,isAnonymous:M,providerData:W,stsTokenManager:O}=t;we(k&&O,e,"internal-error");const L=Ai.fromJSON(this.name,O);we(typeof k=="string",e,"internal-error"),Zt(d,e.name),Zt(f,e.name),we(typeof I=="boolean",e,"internal-error"),we(typeof M=="boolean",e,"internal-error"),Zt(p,e.name),Zt(_,e.name),Zt(b,e.name),Zt(v,e.name),Zt(y,e.name),Zt(w,e.name);const U=new In({uid:k,auth:e,email:f,emailVerified:I,displayName:d,isAnonymous:M,photoURL:_,phoneNumber:p,tenantId:b,stsTokenManager:L,createdAt:y,lastLoginAt:w});return W&&Array.isArray(W)&&(U.providerData=W.map(Y=>Object.assign({},Y))),v&&(U._redirectEventId=v),U}static async _fromIdTokenResponse(e,t,i=!1){const s=new Ai;s.updateFromServerResponse(t);const r=new In({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ys(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Map;function zt(n){Yt(n instanceof Function,"Expected a class definition");let e=dl.get(n);return e?(Yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hu.type="NONE";const fl=hu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n,e,t){return`firebase:${n}:${e}:${t}`}class Gn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=as(this.userKey,s.apiKey,r),this.fullPersistenceKey=as("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Gn(zt(fl),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||zt(fl);const o=as(i,e.config.apiKey,e.name);let l=null;for(const c of t)try{const u=await c._get(o);if(u){const d=In._fromJSON(e,u);c!==r&&(l=d),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new Gn(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Gn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bu(e))return"Blackberry";if(vu(e))return"Webos";if(co(e))return"Safari";if((e.includes("chrome/")||_u(e))&&!e.includes("edge/"))return"Chrome";if(gu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pu(n=at()){return/firefox\//i.test(n)}function co(n=at()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _u(n=at()){return/crios\//i.test(n)}function mu(n=at()){return/iemobile/i.test(n)}function gu(n=at()){return/android/i.test(n)}function bu(n=at()){return/blackberry/i.test(n)}function vu(n=at()){return/webos/i.test(n)}function Vs(n=at()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function jp(n=at()){var e;return Vs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vp(){return nh()&&document.documentMode===10}function yu(n=at()){return Vs(n)||gu(n)||vu(n)||bu(n)||/windows phone/i.test(n)||mu(n)}function Gp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(n,e=[]){let t;switch(n){case"Browser":t=hl(at());break;case"Worker":t=`${hl(at())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${oi}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(n,e={}){return li(n,"GET","/v2/passwordPolicy",lo(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=6;class Jp{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Qp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(t=a.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),a.isValid&&(a.isValid=(i=a.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsUppercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pl(this),this.idTokenSubscription=new pl(this),this.beforeStateQueue=new Kp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=au,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Gn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ys(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?gt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yp(this),t=new Jp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await zp(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zt(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const a=e.addObserver(t,i,s);return()=>{o=!0,a()}}else{const a=e.addObserver(t);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Cp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function uo(n){return gt(n)}class pl{constructor(e){this.auth=e,this.observer=null,this.addObserver=dh(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Zp(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Mt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",xp().appendChild(i)})}function $p(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(n,e){const t=no(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(gs(r,e??{}))return s;Kt(s,"already-initialized")}return t.initialize({options:e})}function t_(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(zt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function n_(n,e,t){const i=uo(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=ku(e),{host:o,port:l}=i_(e),a=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${o}${a}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||s_()}function ku(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function i_(n){const e=ku(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:_l(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:_l(o)}}}function _l(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function s_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,t){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(n,e){return Rp(n,"POST","/v1/accounts:signInWithIdp",lo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="http://localhost";class An extends Cu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new An(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=so(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new An(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Kn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}buildRequest(){const e={requestUri:r_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ri(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Eu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ki{constructor(){super("facebook.com")}static credential(e){return An._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return An._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return tn.credential(t,i)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ki{constructor(){super("github.com")}static credential(e){return An._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Ki{constructor(){super("twitter.com")}static credential(e,t){return An._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return sn.credential(t,i)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await In._fromIdTokenResponse(e,i,s),o=ml(i);return new $n({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=ml(i);return new $n({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function ml(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends bn{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ws.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new ws(e,t,i,s)}}function Iu(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ws._fromErrorAndOperation(n,r,e,i):r})}async function o_(n,e,t=!1){const i=await Ri(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $n._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Ri(n,Iu(i,s,e,n),t);we(r.idToken,i,"internal-error");const o=ao(r.idToken);we(o,i,"internal-error");const{sub:l}=o;return we(n.uid===l,i,"user-mismatch"),$n._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Kt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(n,e,t=!1){const i="signIn",s=await Iu(n,i,e),r=await $n._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function c_(n,e,t,i){return gt(n).onIdTokenChanged(e,t,i)}function u_(n,e,t){return gt(n).beforeAuthStateChanged(e,t)}const ks="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ks,"1"),this.storage.removeItem(ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(){const n=at();return co(n)||Vs(n)}const f_=1e3,h_=10;class Tu extends Su{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=d_()&&Gp(),this.fallbackToPolling=yu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Vp()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,h_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},f_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tu.type="LOCAL";const p_=Tu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends Su{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nu.type="SESSION";const Ou=Nu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Gs(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async c=>c(t.origin,r)),a=await __(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,a)=>{const c=fo("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(f.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function g_(n){Lt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function b_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function y_(){return Ru()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="firebaseLocalStorageDb",w_=1,Cs="firebaseLocalStorage",Du="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ks(n,e){return n.transaction([Cs],e?"readwrite":"readonly").objectStore(Cs)}function k_(){const n=indexedDB.deleteDatabase(Au);return new Yi(n).toPromise()}function Rr(){const n=indexedDB.open(Au,w_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Cs,{keyPath:Du})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Cs)?e(i):(i.close(),await k_(),e(await Rr()))})})}async function gl(n,e,t){const i=Ks(n,!0).put({[Du]:e,value:t});return new Yi(i).toPromise()}async function C_(n,e){const t=Ks(n,!1).get(e),i=await new Yi(t).toPromise();return i===void 0?null:i.value}function bl(n,e){const t=Ks(n,!0).delete(e);return new Yi(t).toPromise()}const E_=800,I_=3;class Pu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>I_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ru()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(y_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await b_(),!this.activeServiceWorker)return;this.sender=new m_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rr();return await gl(e,ks,"1"),await bl(e,ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>gl(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>C_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ks(s,!1).getAll();return new Yi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pu.type="LOCAL";const S_=Pu;new Gi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(n,e){return e?zt(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends Cu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function N_(n){return a_(n.auth,new ho(n),n.bypassAuthState)}function O_(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),l_(t,new ho(n),n.bypassAuthState)}async function R_(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),o_(t,new ho(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return N_;case"linkViaPopup":case"linkViaRedirect":return R_;case"reauthViaPopup":case"reauthViaRedirect":return O_;default:Kt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new Gi(2e3,1e4);class Hn extends Mu{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=fo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A_.get())};e()}}Hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="pendingRedirect",cs=new Map;class P_ extends Mu{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const i=await M_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M_(n,e){const t=B_(e),i=F_(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function L_(n,e){cs.set(n._key(),e)}function F_(n){return zt(n._redirectPersistence)}function B_(n){return as(D_,n.config.apiKey,n.name)}async function U_(n,e,t=!1){const i=uo(n),s=T_(i,e),o=await new P_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=10*60*1e3;class H_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!q_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Lu(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Mt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W_&&this.cachedEventUids.clear(),this.cachedEventUids.has(vl(e))}saveEventToCache(e){this.cachedEventUids.add(vl(e)),this.lastProcessedEventTime=Date.now()}}function vl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function q_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(n,e={}){return li(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V_=/^https?/;async function G_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await z_(n);for(const t of e)try{if(K_(t))return}catch{}Kt(n,"unauthorized-domain")}function K_(n){const e=Or(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!V_.test(t))return!1;if(j_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new Gi(3e4,6e4);function yl(){const n=Lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Q_(n){return new Promise((e,t)=>{var i,s,r;function o(){yl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yl(),t(Mt(n,"network-request-failed"))},timeout:Y_.get()})}if(!((s=(i=Lt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Lt().gapi)===null||r===void 0)&&r.load)o();else{const l=$p("iframefcb");return Lt()[l]=()=>{gapi.load?o():t(Mt(n,"network-request-failed"))},Zp(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>t(a))}}).catch(e=>{throw us=null,e})}let us=null;function J_(n){return us=us||Q_(n),us}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=new Gi(5e3,15e3),x_="__/auth/iframe",Z_="emulator/auth/iframe",$_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},em=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tm(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?oo(e,Z_):`https://${n.config.authDomain}/${x_}`,i={apiKey:e.apiKey,appName:n.name,v:oi},s=em.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${ri(i).slice(1)}`}async function nm(n){const e=await J_(n),t=Lt().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:tm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Mt(n,"network-request-failed"),l=Lt().setTimeout(()=>{r(o)},X_.get());function a(){Lt().clearTimeout(l),s(i)}i.ping(a).then(a,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sm=500,rm=600,om="_blank",lm="http://localhost";class wl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function am(n,e,t,i=sm,s=rm){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const a=Object.assign(Object.assign({},im),{width:i.toString(),height:s.toString(),top:r,left:o}),c=at().toLowerCase();t&&(l=_u(c)?om:t),pu(c)&&(e=e||lm,a.scrollbars="yes");const u=Object.entries(a).reduce((f,[p,_])=>`${f}${p}=${_},`,"");if(jp(c)&&l!=="_self")return cm(e||"",l),new wl(null);const d=window.open(e||"",l,u);we(d,n,"popup-blocked");try{d.focus()}catch{}return new wl(d)}function cm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="__/auth/handler",dm="emulator/auth/handler",fm=encodeURIComponent("fac");async function kl(n,e,t,i,s,r){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:oi,eventId:s};if(e instanceof Eu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Cr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof Ki){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await n._getAppCheckToken(),c=a?`#${fm}=${encodeURIComponent(a)}`:"";return`${hm(n)}?${ri(l).slice(1)}${c}`}function hm({config:n}){return n.emulator?oo(n,dm):`https://${n.authDomain}/${um}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="webStorageSupport";class pm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ou,this._completeRedirectFn=U_,this._overrideRedirectResult=L_}async _openPopup(e,t,i,s){var r;Yt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await kl(e,t,i,Or(),s);return am(e,o,fo())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await kl(e,t,i,Or(),s);return g_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Yt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await nm(e),i=new H_(e);return t.register("authEvent",s=>(we(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fr,{type:fr},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[fr];o!==void 0&&t(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=G_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yu()||co()||Vs()}}const _m=pm;var Cl="@firebase/auth",El="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bm(n){Zn(new On("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;we(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wu(n)},c=new Xp(i,s,r,a);return t_(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Zn(new On("auth-internal",e=>{const t=uo(e.getProvider("auth").getImmediate());return(i=>new mm(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Cl,El,gm(n)),ln(Cl,El,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=5*60,ym=$c("authIdTokenMaxAge")||vm;let Il=null;const wm=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ym)return;const s=t==null?void 0:t.token;Il!==s&&(Il=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function km(n=js()){const e=no(n,"auth");if(e.isInitialized())return e.getImmediate();const t=e_(n,{popupRedirectResolver:_m,persistence:[S_,p_,Ou]}),i=$c("authTokenSyncURL");if(i){const r=wm(i);u_(t,r,()=>r(t.currentUser)),c_(t,o=>r(o))}const s=xc("auth");return s&&n_(t,`http://${s}`),t}bm("Browser");const Sl="@firebase/database",Tl="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu="";function Cm(n){Fu=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ni(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Em(e)}}catch{}return new Im},kn=Bu("localStorage"),Ar=Bu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new eo("@firebase/database"),Sm=function(){let n=1;return function(){return n++}}(),Uu=function(n){const e=ph(n),t=new uh;t.update(e);const i=t.digest();return Xr.encodeByteArray(i)},Qi=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Qi.apply(null,i):typeof i=="object"?e+=xe(i):e+=i,e+=" "}return e};let Sn=null,Nl=!0;const Tm=function(n,e){ne(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Yn.logLevel=He.VERBOSE,Sn=Yn.log.bind(Yn),e&&Ar.set("logging_enabled",!0)):typeof n=="function"?Sn=n:(Sn=null,Ar.remove("logging_enabled"))},ot=function(...n){if(Nl===!0&&(Nl=!1,Sn===null&&Ar.get("logging_enabled")===!0&&Tm(!0)),Sn){const e=Qi.apply(null,n);Sn(e)}},Ji=function(n){return function(...e){ot(n,...e)}},Dr=function(...n){const e="FIREBASE INTERNAL ERROR: "+Qi(...n);Yn.error(e)},Qt=function(...n){const e=`FIREBASE FATAL ERROR: ${Qi(...n)}`;throw Yn.error(e),new Error(e)},_t=function(...n){const e="FIREBASE WARNING: "+Qi(...n);Yn.warn(e)},Nm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},po=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Om=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Dn="[MIN_NAME]",hn="[MAX_NAME]",ai=function(n,e){if(n===e)return 0;if(n===Dn||e===hn)return-1;if(e===Dn||n===hn)return 1;{const t=Ol(n),i=Ol(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Rm=function(n,e){return n===e?0:n<e?-1:1},pi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+xe(e))},_o=function(n){if(typeof n!="object"||n===null)return xe(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=xe(e[i]),t+=":",t+=_o(n[e[i]]);return t+="}",t},Wu=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function mt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Hu=function(n){ne(!po(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,a;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Am=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Dm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Pm(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Mm=new RegExp("^-?(0*)\\d{1,10}$"),Lm=-2147483648,Fm=2147483647,Ol=function(n){if(Mm.test(n)){const e=Number(n);if(e>=Lm&&e<=Fm)return e}return null},ci=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw _t("Exception was thrown by user callback.",t),e},Math.floor(0))}},Bm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){_t(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_t(e)}}class Qn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="5",qu="v",zu="s",ju="r",Vu="f",Gu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ku="ls",Yu="p",Pr="ac",Qu="websocket",Ju="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,i,s,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Hm(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function xu(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let i;if(e===Qu)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ju)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Hm(n)&&(t.ns=n.namespace);const s=[];return mt(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.counters_={}}incrementCounter(e,t=1){Wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Yf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={},pr={};function go(n){const e=n.toString();return hr[e]||(hr[e]=new qm),hr[e]}function zm(n,e){const t=n.toString();return pr[t]||(pr[t]=e()),pr[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ci(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="start",Vm="close",Gm="pLPCommand",Km="pRTLPCB",Zu="id",$u="pw",ed="ser",Ym="cb",Qm="seg",Jm="ts",Xm="d",xm="dframe",td=1870,nd=30,Zm=td-nd,$m=25e3,eg=3e4;class qn{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ji(e),this.stats_=go(t),this.urlFn=a=>(this.appCheckToken&&(a[Pr]=this.appCheckToken),xu(t,Ju,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new jm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eg)),Om(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rl)this.id=l,this.password=a;else if(o===Vm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Rl]="t",i[ed]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Ym]=this.scriptTagHolder.uniqueCallbackIdentifier),i[qu]=mo,this.transportSessionId&&(i[zu]=this.transportSessionId),this.lastSessionId&&(i[Ku]=this.lastSessionId),this.applicationId&&(i[Yu]=this.applicationId),this.appCheckToken&&(i[Pr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gu.test(location.hostname)&&(i[ju]=Vu);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qn.forceAllow_=!0}static forceDisallow(){qn.forceDisallow_=!0}static isAvailable(){return qn.forceAllow_?!0:!qn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Am()&&!Dm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=xe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Jc(t),s=Wu(i,Zm);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[xm]="t",i[Zu]=e,i[$u]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=xe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class bo{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Sm(),window[Gm+this.uniqueCallbackIdentifier]=e,window[Km+this.uniqueCallbackIdentifier]=t,this.myIFrame=bo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ot("frame writing exception"),l.stack&&ot(l.stack),ot(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zu]=this.myID,e[$u]=this.myPW,e[ed]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nd+i.length<=td;){const o=this.pendingSegs.shift();i=i+"&"+Qm+s+"="+o.seg+"&"+Jm+s+"="+o.ts+"&"+Xm+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor($m)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=16384,ng=45e3;let Es=null;typeof MozWebSocket<"u"?Es=MozWebSocket:typeof WebSocket<"u"&&(Es=WebSocket);class Ct{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ji(this.connId),this.stats_=go(t),this.connURL=Ct.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[qu]=mo,typeof location<"u"&&location.hostname&&Gu.test(location.hostname)&&(o[ju]=Vu),t&&(o[zu]=t),i&&(o[Ku]=i),s&&(o[Pr]=s),r&&(o[Yu]=r),xu(e,Qu,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,kn.set("previous_websocket_failure",!0);try{let i;tu(),this.mySock=new Es(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Es!==null&&!Ct.forceDisallow_}static previouslyFailed(){return kn.isInMemoryStorage||kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Ni(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=xe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Wu(t,tg);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ng))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qn,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ct&&Ct.isAvailable();let i=t&&!Ct.previouslyFailed();if(e.webSocketOnly&&(t||_t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ct];else{const s=this.transports_=[];for(const r of Di.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Di.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Di.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=6e4,sg=5e3,rg=10*1024,og=100*1024,_r="t",Al="d",lg="s",Dl="r",ag="e",Pl="o",Ml="a",Ll="n",Fl="p",cg="h";class ug{constructor(e,t,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ji("c:"+this.id+":"),this.transportManager_=new Di(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>og?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_r in e){const t=e[_r];t===Ml?this.upgradeIfSecondaryHealthy_():t===Dl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Pl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=pi("t",e),i=pi("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ml,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ll,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=pi("t",e),i=pi("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=pi(_r,e);if(Al in e){const i=e[Al];if(t===cg){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Ll){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===lg?this.onConnectionShutdown_(i):t===Dl?this.onReset_(i):t===ag?Dr("Server Error: "+i):t===Pl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),mo!==i&&_t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ig))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends sd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Is}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=32,Ul=768;class je{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Le(){return new je("")}function Oe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function pn(n){return n.pieces_.length-n.pieceNum_}function Ve(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new je(n.pieces_,e)}function rd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function dg(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function od(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ld(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new je(e,0)}function Ze(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof je)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new je(t,0)}function Ne(n){return n.pieceNum_>=n.pieces_.length}function ht(n,e){const t=Oe(n),i=Oe(e);if(t===null)return e;if(t===i)return ht(Ve(n),Ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ad(n,e){if(pn(n)!==pn(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Et(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(pn(n)>pn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class fg{constructor(e,t){this.errorPrefix_=t,this.parts_=od(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=zs(this.parts_[i]);cd(this)}}function hg(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=zs(e),cd(n)}function pg(n){const e=n.parts_.pop();n.byteLength_-=zs(e),n.parts_.length>0&&(n.byteLength_-=1)}function cd(n){if(n.byteLength_>Ul)throw new Error(n.errorPrefix_+"has a key path longer than "+Ul+" bytes ("+n.byteLength_+").");if(n.parts_.length>Bl)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bl+") or object contains a cycle "+wn(n))}function wn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends sd{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new vo}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=1e3,_g=60*5*1e3,Wl=30*1e3,mg=1.3,gg=3e4,bg="server_kill",Hl=3;class Gt extends id{constructor(e,t,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Gt.nextPersistentConnectionId_++,this.log_=Ji("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_i,this.maxReconnectDelay_=_g,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!tu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Is.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(xe(r)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new qs,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Gt.warnOnListenWarnings_(a,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Wt(e,"w")){const i=xn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();_t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ch(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ah(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Dr("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gg&&(this.reconnectDelay_=_i),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(d){ne(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new ug(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{_t(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(bg)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&_t(d),a())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cr(this.interruptReasons_)&&(this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>_o(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new je(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ot("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hl&&(this.reconnectDelay_=Wl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ot("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Fu.replace(/\./g,"-")]=1,Zr()?e["framework.cordova"]=1:eu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Is.getInstance().currentlyOnline();return Cr(this.interruptReasons_)&&e}}Gt.nextPersistentConnectionId_=0;Gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Te(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Te(Dn,e),s=new Te(Dn,t);return this.compare(i,s)!==0}minPost(){return Te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;class ud extends Ys{static get __EMPTY_NODE(){return ss}static set __EMPTY_NODE(e){ss=e}compare(e,t){return ai(e.name,t.name)}isDefinedOn(e){throw si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Te.MIN}maxPost(){return new Te(hn,ss)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Te(e,ss)}toString(){return".key"}}const an=new ud;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??tt.RED,this.left=s??pt.EMPTY_NODE,this.right=r??pt.EMPTY_NODE}copy(e,t,i,s,r){return new tt(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class vg{copy(e,t,i,s,r){return this}insert(e,t,i){return new tt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pt{constructor(e,t=pt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new pt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new rs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new rs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new rs(this.root_,null,this.comparator_,!0,e)}}pt.EMPTY_NODE=new vg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n,e){return ai(n.name,e.name)}function yo(n,e){return ai(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;function wg(n){Mr=n}const dd=function(n){return typeof n=="number"?"number:"+Hu(n):"string:"+n},fd=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Wt(e,".sv"),"Priority must be a string or number.")}else ne(n===Mr||n.isEmpty(),"priority of unexpected type.");ne(n===Mr||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;class et{constructor(e,t=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fd(this.priorityNode_)}static set __childrenNodeConstructor(e){ql=e}static get __childrenNodeConstructor(){return ql}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ne(e)?this:Oe(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Oe(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ne(i!==".priority"||pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ve(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+dd(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Hu(this.value_):e+=this.value_,this.lazyHash_=Uu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=et.VALUE_TYPE_ORDER.indexOf(t),r=et.VALUE_TYPE_ORDER.indexOf(i);return ne(s>=0,"Unknown leaf type: "+t),ne(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hd,pd;function kg(n){hd=n}function Cg(n){pd=n}class Eg extends Ys{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ai(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Te.MIN}maxPost(){return new Te(hn,new et("[PRIORITY-POST]",pd))}makePost(e,t){const i=hd(e);return new Te(t,new et("[PRIORITY-POST]",i))}toString(){return".priority"}}const Je=new Eg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=Math.log(2);class Sg{constructor(e){const t=r=>parseInt(Math.log(r)/Ig,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ss=function(n,e,t,i){n.sort(e);const s=function(a,c){const u=c-a;let d,f;if(u===0)return null;if(u===1)return d=n[a],f=t?t(d):d,new tt(f,d.node,tt.BLACK,null,null);{const p=parseInt(u/2,10)+a,_=s(a,p),b=s(p+1,c);return d=n[p],f=t?t(d):d,new tt(f,d.node,tt.BLACK,_,b)}},r=function(a){let c=null,u=null,d=n.length;const f=function(_,b){const v=d-_,y=d;d-=_;const w=s(v+1,y),k=n[v],I=t?t(k):k;p(new tt(I,k.node,b,null,w))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<a.count;++_){const b=a.nextBitIsOne(),v=Math.pow(2,a.count-(_+1));b?f(v,tt.BLACK):(f(v,tt.BLACK),f(v,tt.RED))}return u},o=new Sg(n.length),l=r(o);return new pt(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr;const Un={};class jt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return ne(Un&&Je,"ChildrenNode.ts has not been loaded"),mr=mr||new jt({".priority":Un},{".priority":Je}),mr}get(e){const t=xn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof pt?t:null}hasIndex(e){return Wt(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==an,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(Te.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Ss(i,e.getCompare()):l=Un;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new jt(u,c)}addToIndexes(e,t){const i=ms(this.indexes_,(s,r)=>{const o=xn(this.indexSet_,r);if(ne(o,"Missing index implementation for "+r),s===Un)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(Te.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ss(l,o.getCompare())}else return Un;else{const l=t.get(e.name);let a=s;return l&&(a=a.remove(new Te(e.name,l))),a.insert(e,e.node)}});return new jt(i,this.indexSet_)}removeFromIndexes(e,t){const i=ms(this.indexes_,s=>{if(s===Un)return s;{const r=t.get(e.name);return r?s.remove(new Te(e.name,r)):s}});return new jt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi;class be{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&fd(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mi||(mi=new be(new pt(yo),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mi}updatePriority(e){return this.children_.isEmpty()?this:new be(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?mi:t}}getChild(e){const t=Oe(e);return t===null?this:this.getImmediateChild(t).getChild(Ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Te(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?mi:this.priorityNode_;return new be(s,o,r)}}updateChild(e,t){const i=Oe(e);if(i===null)return t;{ne(Oe(e)!==".priority"||pn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ve(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(Je,(o,l)=>{t[o]=l.val(e),i++,r&&be.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+dd(this.getPriority().val())+":"),this.forEachChild(Je,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Uu(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Te(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Te(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Te(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Te.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Te.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xi?-1:0}withIndex(e){if(e===an||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new be(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===an||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Je),s=t.getIterator(Je);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===an?null:this.indexMap_.get(e.toString())}}be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tg extends be{constructor(){super(new pt(yo),be.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return be.EMPTY_NODE}isEmpty(){return!1}}const Xi=new Tg;Object.defineProperties(Te,{MIN:{value:new Te(Dn,be.EMPTY_NODE)},MAX:{value:new Te(hn,Xi)}});ud.__EMPTY_NODE=be.EMPTY_NODE;et.__childrenNodeConstructor=be;wg(Xi);Cg(Xi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=!0;function it(n,e=null){if(n===null)return be.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new et(t,it(e))}if(!(n instanceof Array)&&Ng){const t=[];let i=!1;if(mt(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=it(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),t.push(new Te(o,a)))}}),t.length===0)return be.EMPTY_NODE;const r=Ss(t,yg,o=>o.name,yo);if(i){const o=Ss(t,Je.getCompare());return new be(r,it(e),new jt({".priority":o},{".priority":Je}))}else return new be(r,it(e),jt.Default)}else{let t=be.EMPTY_NODE;return mt(n,(i,s)=>{if(Wt(n,i)&&i.substring(0,1)!=="."){const r=it(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(it(e))}}kg(it);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends Ys{constructor(e){super(),this.indexPath_=e,ne(!Ne(e)&&Oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ai(e.name,t.name):r}makePost(e,t){const i=it(e),s=be.EMPTY_NODE.updateChild(this.indexPath_,i);return new Te(t,s)}maxPost(){const e=be.EMPTY_NODE.updateChild(this.indexPath_,Xi);return new Te(hn,e)}toString(){return od(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og extends Ys{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ai(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Te.MIN}maxPost(){return Te.MAX}makePost(e,t){const i=it(e);return new Te(t,i)}toString(){return".value"}}const md=new Og;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n){return{type:"value",snapshotNode:n}}function ei(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Pi(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Mi(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Rg(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Pi(t,l)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ei(t,i)):o.trackChildChange(Mi(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Je,(s,r)=>{t.hasChild(s)||i.trackChildChange(Pi(s,r))}),t.isLeafNode()||t.forEachChild(Je,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Mi(s,r,o))}else i.trackChildChange(ei(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?be.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.indexedFilter_=new wo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Li.getStartPost_(e),this.endPost_=Li.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new Te(t,i))||(i=be.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=be.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(be.EMPTY_NODE);const r=this;return t.forEachChild(Je,(o,l)=>{r.matches(new Te(o,l))||(s=s.updateImmediateChild(o,be.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Li(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new Te(t,i))||(i=be.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=be.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=be.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(be.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,be.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const l=e;ne(l.numChildren()===this.limit_,"");const a=new Te(t,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const d=l.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,a);if(u&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Mi(t,i,d)),l.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Pi(t,d));const b=l.updateImmediateChild(t,be.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(ei(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return i.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Pi(c.name,c.node)),r.trackChildChange(ei(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(c.name,be.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Je}copy(){const e=new ko;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dg(n){return n.loadsAllData()?new wo(n.getIndex()):n.hasLimit()?new Ag(n):new Li(n)}function Pg(n,e){const t=n.copy();return t.index_=e,t}function zl(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Je?t="$priority":n.index_===md?t="$value":n.index_===an?t="$key":(ne(n.index_ instanceof _d,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=xe(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=xe(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+xe(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=xe(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+xe(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function jl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Je&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends id{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ji("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ts.getListenId_(e,i),l={};this.listens_[o]=l;const a=zl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),xn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){const i=Ts.getListenId_(e,t);delete this.listens_[i]}get(e){const t=zl(e._queryParams),i=e._path.toString(),s=new qs;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ri(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ni(l.responseText)}catch{_t("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&_t("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.rootNode_=be.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(){return{value:null,children:new Map}}function bd(n,e,t){if(Ne(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=Oe(e);n.children.has(i)||n.children.set(i,Ns());const s=n.children.get(i);e=Ve(e),bd(s,e,t)}}function Lr(n,e,t){n.value!==null?t(e,n.value):Lg(n,(i,s)=>{const r=new je(e.toString()+"/"+i);Lr(s,r,t)})}function Lg(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&mt(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=10*1e3,Bg=30*1e3,Ug=5*60*1e3;class Wg{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Fg(e);const i=Vl+(Bg-Vl)*Math.random();wi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;mt(e,(s,r)=>{r>0&&Wt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ug))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(It||(It={}));function vd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Co(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Eo(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=It.ACK_USER_WRITE,this.source=vd()}operationForChild(e){if(Ne(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new je(e));return new Os(Le(),t,this.revert)}}else return ne(Oe(this.path)===e,"operationForChild called for unrelated child."),new Os(Ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t){this.source=e,this.path=t,this.type=It.LISTEN_COMPLETE}operationForChild(e){return Ne(this.path)?new Fi(this.source,Le()):new Fi(this.source,Ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=It.OVERWRITE}operationForChild(e){return Ne(this.path)?new Pn(this.source,Le(),this.snap.getImmediateChild(e)):new Pn(this.source,Ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=It.MERGE}operationForChild(e){if(Ne(this.path)){const t=this.children.subtree(new je(e));return t.isEmpty()?null:t.value?new Pn(this.source,Le(),t.value):new Bi(this.source,Le(),t)}else return ne(Oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bi(this.source,Ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ne(e))return this.isFullyInitialized()&&!this.filtered_;const t=Oe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qg(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Rg(o.childName,o.snapshotNode))}),gi(n,s,"child_removed",e,i,t),gi(n,s,"child_added",e,i,t),gi(n,s,"child_moved",r,i,t),gi(n,s,"child_changed",e,i,t),gi(n,s,"value",e,i,t),s}function gi(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,a)=>jg(n,l,a)),o.forEach(l=>{const a=zg(n,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function zg(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function jg(n,e,t){if(e.childName==null||t.childName==null)throw si("Should only compare child_ events.");const i=new Te(e.childName,e.snapshotNode),s=new Te(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,e){return{eventCache:n,serverCache:e}}function ki(n,e,t,i){return Qs(new _n(e,t,i),n.serverCache)}function yd(n,e,t,i){return Qs(n.eventCache,new _n(e,t,i))}function Rs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Mn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr;const Vg=()=>(gr||(gr=new pt(Rm)),gr);class Ge{constructor(e,t=Vg()){this.value=e,this.children=t}static fromObject(e){let t=new Ge(null);return mt(e,(i,s)=>{t=t.set(new je(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Le(),value:this.value};if(Ne(e))return null;{const i=Oe(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ve(e),t);return r!=null?{path:Ze(new je(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ne(e))return this;{const t=Oe(e),i=this.children.get(t);return i!==null?i.subtree(Ve(e)):new Ge(null)}}set(e,t){if(Ne(e))return new Ge(t,this.children);{const i=Oe(e),r=(this.children.get(i)||new Ge(null)).set(Ve(e),t),o=this.children.insert(i,r);return new Ge(this.value,o)}}remove(e){if(Ne(e))return this.children.isEmpty()?new Ge(null):new Ge(null,this.children);{const t=Oe(e),i=this.children.get(t);if(i){const s=i.remove(Ve(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Ge(null):new Ge(this.value,r)}else return this}}get(e){if(Ne(e))return this.value;{const t=Oe(e),i=this.children.get(t);return i?i.get(Ve(e)):null}}setTree(e,t){if(Ne(e))return t;{const i=Oe(e),r=(this.children.get(i)||new Ge(null)).setTree(Ve(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Ge(this.value,o)}}fold(e){return this.fold_(Le(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ze(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Le(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(Ne(e))return null;{const r=Oe(e),o=this.children.get(r);return o?o.findOnPath_(Ve(e),Ze(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Le(),t)}foreachOnPath_(e,t,i){if(Ne(e))return this;{this.value&&i(t,this.value);const s=Oe(e),r=this.children.get(s);return r?r.foreachOnPath_(Ve(e),Ze(t,s),i):new Ge(null)}}foreach(e){this.foreach_(Le(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Ze(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.writeTree_=e}static empty(){return new Tt(new Ge(null))}}function Ci(n,e,t){if(Ne(e))return new Tt(new Ge(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ht(s,e);return r=r.updateChild(o,t),new Tt(n.writeTree_.set(s,r))}else{const s=new Ge(t),r=n.writeTree_.setTree(e,s);return new Tt(r)}}}function Gl(n,e,t){let i=n;return mt(t,(s,r)=>{i=Ci(i,Ze(e,s),r)}),i}function Kl(n,e){if(Ne(e))return Tt.empty();{const t=n.writeTree_.setTree(e,new Ge(null));return new Tt(t)}}function Fr(n,e){return Ln(n,e)!=null}function Ln(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ht(t.path,e)):null}function Yl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Je,(i,s)=>{e.push(new Te(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Te(i,s.value))}),e}function cn(n,e){if(Ne(e))return n;{const t=Ln(n,e);return t!=null?new Tt(new Ge(t)):new Tt(n.writeTree_.subtree(e))}}function Br(n){return n.writeTree_.isEmpty()}function ti(n,e){return wd(Le(),n.writeTree_,e)}function wd(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(ne(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=wd(Ze(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Ze(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n,e){return Id(e,n)}function Gg(n,e,t,i,s){ne(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ci(n.visibleWrites,e,t)),n.lastWriteId=i}function Kg(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Yg(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Qg(l,i.path)?s=!1:Et(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return Jg(n),!0;if(i.snap)n.visibleWrites=Kl(n.visibleWrites,i.path);else{const l=i.children;mt(l,a=>{n.visibleWrites=Kl(n.visibleWrites,Ze(i.path,a))})}return!0}else return!1}function Qg(n,e){if(n.snap)return Et(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Et(Ze(n.path,t),e))return!0;return!1}function Jg(n){n.visibleWrites=kd(n.allWrites,Xg,Le()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Xg(n){return n.visible}function kd(n,e,t){let i=Tt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)Et(t,o)?(l=ht(t,o),i=Ci(i,l,r.snap)):Et(o,t)&&(l=ht(o,t),i=Ci(i,Le(),r.snap.getChild(l)));else if(r.children){if(Et(t,o))l=ht(t,o),i=Gl(i,l,r.children);else if(Et(o,t))if(l=ht(o,t),Ne(l))i=Gl(i,Le(),r.children);else{const a=xn(r.children,Oe(l));if(a){const c=a.getChild(Ve(l));i=Ci(i,Le(),c)}}}else throw si("WriteRecord should have .snap or .children")}}return i}function Cd(n,e,t,i,s){if(!i&&!s){const r=Ln(n.visibleWrites,e);if(r!=null)return r;{const o=cn(n.visibleWrites,e);if(Br(o))return t;if(t==null&&!Fr(o,Le()))return null;{const l=t||be.EMPTY_NODE;return ti(o,l)}}}else{const r=cn(n.visibleWrites,e);if(!s&&Br(r))return t;if(!s&&t==null&&!Fr(r,Le()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Et(c.path,e)||Et(e,c.path))},l=kd(n.allWrites,o,e),a=t||be.EMPTY_NODE;return ti(l,a)}}}function xg(n,e,t){let i=be.EMPTY_NODE;const s=Ln(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Je,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=cn(n.visibleWrites,e);return t.forEachChild(Je,(o,l)=>{const a=ti(cn(r,new je(o)),l);i=i.updateImmediateChild(o,a)}),Yl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=cn(n.visibleWrites,e);return Yl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Zg(n,e,t,i,s){ne(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ze(e,t);if(Fr(n.visibleWrites,r))return null;{const o=cn(n.visibleWrites,r);return Br(o)?s.getChild(t):ti(o,s.getChild(t))}}function $g(n,e,t,i){const s=Ze(e,t),r=Ln(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=cn(n.visibleWrites,s);return ti(o,i.getNode().getImmediateChild(t))}else return null}function eb(n,e){return Ln(n.visibleWrites,e)}function tb(n,e,t,i,s,r,o){let l;const a=cn(n.visibleWrites,e),c=Ln(a,Le());if(c!=null)l=c;else if(t!=null)l=ti(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],d=o.getCompare(),f=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let p=f.getNext();for(;p&&u.length<s;)d(p,i)!==0&&u.push(p),p=f.getNext();return u}else return[]}function nb(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function As(n,e,t,i){return Cd(n.writeTree,n.treePath,e,t,i)}function Io(n,e){return xg(n.writeTree,n.treePath,e)}function Ql(n,e,t,i){return Zg(n.writeTree,n.treePath,e,t,i)}function Ds(n,e){return eb(n.writeTree,Ze(n.treePath,e))}function ib(n,e,t,i,s,r){return tb(n.writeTree,n.treePath,e,t,i,s,r)}function So(n,e,t){return $g(n.writeTree,n.treePath,e,t)}function Ed(n,e){return Id(Ze(n.treePath,e),n.writeTree)}function Id(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Mi(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Pi(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,ei(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Mi(i,e.snapshotNode,s.oldSnap));else throw si("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Sd=new rb;class To{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new _n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return So(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mn(this.viewCache_),r=ib(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(n){return{filter:n}}function lb(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ab(n,e,t,i,s){const r=new sb;let o,l;if(t.type===It.OVERWRITE){const c=t;c.source.fromUser?o=Ur(n,e,c.path,c.snap,i,s,r):(ne(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!Ne(c.path),o=Ps(n,e,c.path,c.snap,i,s,l,r))}else if(t.type===It.MERGE){const c=t;c.source.fromUser?o=ub(n,e,c.path,c.children,i,s,r):(ne(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Wr(n,e,c.path,c.children,i,s,l,r))}else if(t.type===It.ACK_USER_WRITE){const c=t;c.revert?o=hb(n,e,c.path,i,s,r):o=db(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===It.LISTEN_COMPLETE)o=fb(n,e,t.path,i,r);else throw si("Unknown operation type: "+t.type);const a=r.getChanges();return cb(e,o,a),{viewCache:o,changes:a}}function cb(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Rs(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(gd(Rs(e)))}}function Td(n,e,t,i,s,r){const o=e.eventCache;if(Ds(i,t)!=null)return e;{let l,a;if(Ne(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Mn(e),u=c instanceof be?c:be.EMPTY_NODE,d=Io(i,u);l=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=As(i,Mn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Oe(t);if(c===".priority"){ne(pn(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const d=Ql(i,t,u,a);d!=null?l=n.filter.updatePriority(u,d):l=o.getNode()}else{const u=Ve(t);let d;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Ql(i,t,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=So(i,c,e.serverCache);d!=null?l=n.filter.updateChild(o.getNode(),c,d,u,s,r):l=o.getNode()}}return ki(e,l,o.isFullyInitialized()||Ne(t),n.filter.filtersNodes())}}function Ps(n,e,t,i,s,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(Ne(t))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(t,i);c=u.updateFullNode(a.getNode(),p,null)}else{const p=Oe(t);if(!a.isCompleteForPath(t)&&pn(t)>1)return e;const _=Ve(t),v=a.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=u.updatePriority(a.getNode(),v):c=u.updateChild(a.getNode(),p,v,_,Sd,null)}const d=yd(e,c,a.isFullyInitialized()||Ne(t),u.filtersNodes()),f=new To(s,d,r);return Td(n,d,t,s,f,l)}function Ur(n,e,t,i,s,r,o){const l=e.eventCache;let a,c;const u=new To(s,e,r);if(Ne(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),a=ki(e,c,!0,n.filter.filtersNodes());else{const d=Oe(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),a=ki(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=Ve(t),p=l.getNode().getImmediateChild(d);let _;if(Ne(f))_=i;else{const b=u.getCompleteChild(d);b!=null?rd(f)===".priority"&&b.getChild(ld(f)).isEmpty()?_=b:_=b.updateChild(f,i):_=be.EMPTY_NODE}if(p.equals(_))a=e;else{const b=n.filter.updateChild(l.getNode(),d,_,f,u,o);a=ki(e,b,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function Jl(n,e){return n.eventCache.isCompleteForChild(e)}function ub(n,e,t,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=Ze(t,a);Jl(e,Oe(u))&&(l=Ur(n,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=Ze(t,a);Jl(e,Oe(u))||(l=Ur(n,l,u,c,s,r,o))}),l}function Xl(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Wr(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;Ne(t)?c=i:c=new Ge(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),_=Xl(n,p,f);a=Ps(n,a,new je(d),_,s,r,o,l)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const _=e.serverCache.getNode().getImmediateChild(d),b=Xl(n,_,f);a=Ps(n,a,new je(d),b,s,r,o,l)}}),a}function db(n,e,t,i,s,r,o){if(Ds(s,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(Ne(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Ps(n,e,t,a.getNode().getChild(t),s,r,l,o);if(Ne(t)){let c=new Ge(null);return a.getNode().forEachChild(an,(u,d)=>{c=c.set(new je(u),d)}),Wr(n,e,t,c,s,r,l,o)}else return e}else{let c=new Ge(null);return i.foreach((u,d)=>{const f=Ze(t,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Wr(n,e,t,c,s,r,l,o)}}function fb(n,e,t,i,s){const r=e.serverCache,o=yd(e,r.getNode(),r.isFullyInitialized()||Ne(t),r.isFiltered());return Td(n,o,t,i,Sd,s)}function hb(n,e,t,i,s,r){let o;if(Ds(i,t)!=null)return e;{const l=new To(i,e,s),a=e.eventCache.getNode();let c;if(Ne(t)||Oe(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=As(i,Mn(e));else{const d=e.serverCache.getNode();ne(d instanceof be,"serverChildren would be complete if leaf node"),u=Io(i,d)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=Oe(t);let d=So(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=a.getImmediateChild(u)),d!=null?c=n.filter.updateChild(a,u,d,Ve(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,be.EMPTY_NODE,Ve(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=As(i,Mn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ds(i,Le())!=null,ki(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new wo(i.getIndex()),r=Dg(i);this.processor_=ob(r);const o=t.serverCache,l=t.eventCache,a=s.updateFullNode(be.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(be.EMPTY_NODE,l.getNode(),null),u=new _n(a,o.isFullyInitialized(),s.filtersNodes()),d=new _n(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Qs(d,u),this.eventGenerator_=new Hg(this.query_)}get query(){return this.query_}}function _b(n){return n.viewCache_.serverCache.getNode()}function mb(n){return Rs(n.viewCache_)}function gb(n,e){const t=Mn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ne(e)&&!t.getImmediateChild(Oe(e)).isEmpty())?t.getChild(e):null}function xl(n){return n.eventRegistrations_.length===0}function bb(n,e){n.eventRegistrations_.push(e)}function Zl(n,e,t){const i=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function $l(n,e,t,i){e.type===It.MERGE&&e.source.queryId!==null&&(ne(Mn(n.viewCache_),"We should always have a full cache before handling merges"),ne(Rs(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=ab(n.processor_,s,e,t,i);return lb(n.processor_,r.viewCache),ne(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Nd(n,r.changes,r.viewCache.eventCache.getNode(),null)}function vb(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Je,(r,o)=>{i.push(ei(r,o))}),t.isFullyInitialized()&&i.push(gd(t.getNode())),Nd(n,i,t.getNode(),e)}function Nd(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return qg(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms;class Od{constructor(){this.views=new Map}}function yb(n){ne(!Ms,"__referenceConstructor has already been defined"),Ms=n}function wb(){return ne(Ms,"Reference.ts has not been loaded"),Ms}function kb(n){return n.views.size===0}function No(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return ne(r!=null,"SyncTree gave us an op for an invalid query."),$l(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat($l(o,e,t,i));return r}}function Rd(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=As(t,s?i:null),a=!1;l?a=!0:i instanceof be?(l=Io(t,i),a=!1):(l=be.EMPTY_NODE,a=!1);const c=Qs(new _n(l,a,!1),new _n(i,s,!1));return new pb(e,c)}return o}function Cb(n,e,t,i,s,r){const o=Rd(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),bb(o,t),vb(o,t)}function Eb(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const l=mn(n);if(s==="default")for(const[a,c]of n.views.entries())o=o.concat(Zl(c,t,i)),xl(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(s);a&&(o=o.concat(Zl(a,t,i)),xl(a)&&(n.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!mn(n)&&r.push(new(wb())(e._repo,e._path)),{removed:r,events:o}}function Ad(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function un(n,e){let t=null;for(const i of n.views.values())t=t||gb(i,e);return t}function Dd(n,e){if(e._queryParams.loadsAllData())return Xs(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Pd(n,e){return Dd(n,e)!=null}function mn(n){return Xs(n)!=null}function Xs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;function Ib(n){ne(!Ls,"__referenceConstructor has already been defined"),Ls=n}function Sb(){return ne(Ls,"Reference.ts has not been loaded"),Ls}let Tb=1;class ea{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ge(null),this.pendingWriteTree_=nb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Md(n,e,t,i,s){return Gg(n.pendingWriteTree_,e,t,i,s),s?Zi(n,new Pn(vd(),e,t)):[]}function Cn(n,e,t=!1){const i=Kg(n.pendingWriteTree_,e);if(Yg(n.pendingWriteTree_,e)){let r=new Ge(null);return i.snap!=null?r=r.set(Le(),!0):mt(i.children,o=>{r=r.set(new je(o),!0)}),Zi(n,new Os(i.path,r,t))}else return[]}function xi(n,e,t){return Zi(n,new Pn(Co(),e,t))}function Nb(n,e,t){const i=Ge.fromObject(t);return Zi(n,new Bi(Co(),e,i))}function Ob(n,e){return Zi(n,new Fi(Co(),e))}function Rb(n,e,t){const i=Ro(n,t);if(i){const s=Ao(i),r=s.path,o=s.queryId,l=ht(r,e),a=new Fi(Eo(o),l);return Do(n,r,a)}else return[]}function Ld(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Pd(o,e))){const a=Eb(o,e,t,i);kb(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(f,p)=>mn(p));if(u&&!d){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=Mb(f);for(let _=0;_<p.length;++_){const b=p[_],v=b.query,y=Wd(n,b);n.listenProvider_.startListening(Ei(v),Ui(n,v),y.hashFn,y.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Ei(e),null):c.forEach(f=>{const p=n.queryToTagMap.get(xs(f));n.listenProvider_.stopListening(Ei(f),p)}))}Lb(n,c)}return l}function Fd(n,e,t,i){const s=Ro(n,i);if(s!=null){const r=Ao(s),o=r.path,l=r.queryId,a=ht(o,e),c=new Pn(Eo(l),a,t);return Do(n,o,c)}else return[]}function Ab(n,e,t,i){const s=Ro(n,i);if(s){const r=Ao(s),o=r.path,l=r.queryId,a=ht(o,e),c=Ge.fromObject(t),u=new Bi(Eo(l),a,c);return Do(n,o,u)}else return[]}function Db(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,p)=>{const _=ht(f,s);r=r||un(p,_),o=o||mn(p)});let l=n.syncPointTree_.get(s);l?(o=o||mn(l),r=r||un(l,Le())):(l=new Od,n.syncPointTree_=n.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=be.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,_)=>{const b=un(_,Le());b&&(r=r.updateImmediateChild(p,b))}));const c=Pd(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=xs(e);ne(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=Fb();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const u=Js(n.pendingWriteTree_,s);let d=Cb(l,e,t,u,r,a);if(!c&&!o&&!i){const f=Dd(l,e);d=d.concat(Bb(n,e,f))}return d}function Oo(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=ht(o,e),c=un(l,a);if(c)return c});return Cd(s,e,r,t,!0)}function Pb(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=ht(c,t);i=i||un(u,d)});let s=n.syncPointTree_.get(t);s?i=i||un(s,Le()):(s=new Od,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new _n(i,!0,!1):null,l=Js(n.pendingWriteTree_,e._path),a=Rd(s,e,l,r?o.getNode():be.EMPTY_NODE,r);return mb(a)}function Zi(n,e){return Bd(e,n.syncPointTree_,null,Js(n.pendingWriteTree_,Le()))}function Bd(n,e,t,i){if(Ne(n.path))return Ud(n,e,t,i);{const s=e.get(Le());t==null&&s!=null&&(t=un(s,Le()));let r=[];const o=Oe(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=Ed(i,o);r=r.concat(Bd(l,a,c,u))}return s&&(r=r.concat(No(s,n,i,t))),r}}function Ud(n,e,t,i){const s=e.get(Le());t==null&&s!=null&&(t=un(s,Le()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Ed(i,o),u=n.operationForChild(o);u&&(r=r.concat(Ud(u,l,a,c)))}),s&&(r=r.concat(No(s,n,i,t))),r}function Wd(n,e){const t=e.query,i=Ui(n,t);return{hashFn:()=>(_b(e)||be.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Rb(n,t._path,i):Ob(n,t._path);{const r=Pm(s,t);return Ld(n,t,null,r)}}}}function Ui(n,e){const t=xs(e);return n.queryToTagMap.get(t)}function xs(n){return n._path.toString()+"$"+n._queryIdentifier}function Ro(n,e){return n.tagToQueryMap.get(e)}function Ao(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new je(n.substr(0,e))}}function Do(n,e,t){const i=n.syncPointTree_.get(e);ne(i,"Missing sync point for query tag that we're tracking");const s=Js(n.pendingWriteTree_,e);return No(i,t,s,null)}function Mb(n){return n.fold((e,t,i)=>{if(t&&mn(t))return[Xs(t)];{let s=[];return t&&(s=Ad(t)),mt(i,(r,o)=>{s=s.concat(o)}),s}})}function Ei(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Sb())(n._repo,n._path):n}function Lb(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=xs(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Fb(){return Tb++}function Bb(n,e,t){const i=e._path,s=Ui(n,e),r=Wd(n,t),o=n.listenProvider_.startListening(Ei(e),s,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(i);if(s)ne(!mn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,d)=>{if(!Ne(c)&&u&&mn(u))return[Xs(u).query];{let f=[];return u&&(f=f.concat(Ad(u).map(p=>p.query))),mt(d,(p,_)=>{f=f.concat(_)}),f}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(Ei(u),Ui(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Po(t)}node(){return this.node_}}class Mo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ze(this.path_,e);return new Mo(this.syncTree_,t)}node(){return Oo(this.syncTree_,this.path_)}}const Ub=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ta=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Wb(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Hb(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Wb=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},Hb=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&ne(!1,"Unexpected increment value: "+i);const s=e.node();if(ne(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},qb=function(n,e,t,i){return Lo(e,new Mo(t,n),i)},Hd=function(n,e,t){return Lo(n,new Po(e),t)};function Lo(n,e,t){const i=n.getPriority().val(),s=ta(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=ta(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new et(l,it(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new et(s))),o.forEachChild(Je,(l,a)=>{const c=Lo(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Bo(n,e){let t=e instanceof je?e:new je(e),i=n,s=Oe(t);for(;s!==null;){const r=xn(i.node.children,s)||{children:{},childCount:0};i=new Fo(s,i,r),t=Ve(t),s=Oe(t)}return i}function ui(n){return n.node.value}function qd(n,e){n.node.value=e,Hr(n)}function zd(n){return n.node.childCount>0}function zb(n){return ui(n)===void 0&&!zd(n)}function Zs(n,e){mt(n.node.children,(t,i)=>{e(new Fo(t,n,i))})}function jd(n,e,t,i){t&&!i&&e(n),Zs(n,s=>{jd(s,e,!0,i)}),t&&i&&e(n)}function jb(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function $i(n){return new je(n.parent===null?n.name:$i(n.parent)+"/"+n.name)}function Hr(n){n.parent!==null&&Vb(n.parent,n.name,n)}function Vb(n,e,t){const i=zb(t),s=Wt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Hr(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Hr(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/[\[\].#$\/\u0000-\u001F\u007F]/,Kb=/[\[\].#$\u0000-\u001F\u007F]/,br=10*1024*1024,Vd=function(n){return typeof n=="string"&&n.length!==0&&!Gb.test(n)},Gd=function(n){return typeof n=="string"&&n.length!==0&&!Kb.test(n)},Yb=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gd(n)},na=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!po(n)||n&&typeof n=="object"&&Wt(n,".sv")},Kd=function(n,e,t,i){i&&e===void 0||Uo($r(n,"value"),e,t)},Uo=function(n,e,t){const i=t instanceof je?new fg(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+wn(i));if(typeof e=="function")throw new Error(n+"contains a function "+wn(i)+" with contents = "+e.toString());if(po(e))throw new Error(n+"contains "+e.toString()+" "+wn(i));if(typeof e=="string"&&e.length>br/3&&zs(e)>br)throw new Error(n+"contains a string greater than "+br+" utf8 bytes "+wn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(mt(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vd(o)))throw new Error(n+" contains an invalid key ("+o+") "+wn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hg(i,o),Uo(n,l,i),pg(i)}),s&&r)throw new Error(n+' contains ".value" child '+wn(i)+" in addition to actual children.")}},Yd=function(n,e,t,i){if(!(i&&t===void 0)&&!Gd(t))throw new Error($r(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qb=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Yd(n,e,t,i)},Wo=function(n,e){if(Oe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Jb=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Yb(t))throw new Error($r(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qd(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!ad(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Bt(n,e,t){Qd(n,t),xb(n,i=>Et(i,e)||Et(e,i))}function xb(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Zb(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Zb(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Sn&&ot("event: "+t.toString()),ci(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="repo_interrupt",ev=25;class tv{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ns(),this.transactionQueueTree_=new Fo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nv(n,e,t){if(n.stats_=go(n.repoInfo_),n.forceRestClient_||Bm())n.server_=new Ts(n.repoInfo_,(i,s,r,o)=>{ia(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>sa(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Gt(n.repoInfo_,e,(i,s,r,o)=>{ia(n,i,s,r,o)},i=>{sa(n,i)},i=>{iv(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=zm(n.repoInfo_,()=>new Wg(n.stats_,n.server_)),n.infoData_=new Mg,n.infoSyncTree_=new ea({startListening:(i,s,r,o)=>{let l=[];const a=n.infoData_.getNode(i._path);return a.isEmpty()||(l=xi(n.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),qo(n,"connected",!1),n.serverSyncTree_=new ea({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);Bt(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Jd(n){const t=n.infoData_.getNode(new je(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ho(n){return Ub({timestamp:Jd(n)})}function ia(n,e,t,i,s){n.dataUpdateCount++;const r=new je(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const a=ms(t,c=>it(c));o=Ab(n.serverSyncTree_,r,a,s)}else{const a=it(t);o=Fd(n.serverSyncTree_,r,a,s)}else if(i){const a=ms(t,c=>it(c));o=Nb(n.serverSyncTree_,r,a)}else{const a=it(t);o=xi(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=er(n,r)),Bt(n.eventQueue_,l,o)}function sa(n,e){qo(n,"connected",e),e===!1&&ov(n)}function iv(n,e){mt(e,(t,i)=>{qo(n,t,i)})}function qo(n,e,t){const i=new je("/.info/"+e),s=it(t);n.infoData_.updateSnapshot(i,s);const r=xi(n.infoSyncTree_,i,s);Bt(n.eventQueue_,i,r)}function Xd(n){return n.nextWriteId_++}function sv(n,e,t){const i=Pb(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=it(s).withIndex(e._queryParams.getIndex());Db(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=xi(n.serverSyncTree_,e._path,r);else{const l=Ui(n.serverSyncTree_,e);o=Fd(n.serverSyncTree_,e._path,r,l)}return Bt(n.eventQueue_,e._path,o),Ld(n.serverSyncTree_,e,t,null,!0),r},s=>($s(n,"get for query "+xe(e)+" failed: "+s),Promise.reject(new Error(s))))}function rv(n,e,t,i,s){$s(n,"set",{path:e.toString(),value:t,priority:i});const r=Ho(n),o=it(t,i),l=Oo(n.serverSyncTree_,e),a=Hd(o,l,r),c=Xd(n),u=Md(n.serverSyncTree_,e,a,c,!0);Qd(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const _=f==="ok";_||_t("set at "+e+" failed: "+f);const b=Cn(n.serverSyncTree_,c,!_);Bt(n.eventQueue_,e,b),av(n,s,f,p)});const d=tf(n,e);er(n,d),Bt(n.eventQueue_,d,[])}function ov(n){$s(n,"onDisconnectEvents");const e=Ho(n),t=Ns();Lr(n.onDisconnect_,Le(),(s,r)=>{const o=qb(s,r,n.serverSyncTree_,e);bd(t,s,o)});let i=[];Lr(t,Le(),(s,r)=>{i=i.concat(xi(n.serverSyncTree_,s,r));const o=tf(n,s);er(n,o)}),n.onDisconnect_=Ns(),Bt(n.eventQueue_,Le(),i)}function lv(n){n.persistentConnection_&&n.persistentConnection_.interrupt($b)}function $s(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ot(t,...e)}function av(n,e,t,i){e&&ci(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function xd(n,e,t){return Oo(n.serverSyncTree_,e,t)||be.EMPTY_NODE}function zo(n,e=n.transactionQueueTree_){if(e||tr(n,e),ui(e)){const t=$d(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&cv(n,$i(e),t)}else zd(e)&&Zs(e,t=>{zo(n,t)})}function cv(n,e,t){const i=t.map(c=>c.currentWriteId),s=xd(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];ne(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ht(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{$s(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(Cn(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&d.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();tr(n,Bo(n.transactionQueueTree_,e)),zo(n,n.transactionQueueTree_),Bt(n.eventQueue_,e,u);for(let f=0;f<d.length;f++)ci(d[f])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{_t("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}er(n,e)}},o)}function er(n,e){const t=Zd(n,e),i=$i(t),s=$d(n,t);return uv(n,s,i),i}function uv(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ht(t,a.path);let u=!1,d;if(ne(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,d=a.abortReason,s=s.concat(Cn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ev)u=!0,d="maxretry",s=s.concat(Cn(n.serverSyncTree_,a.currentWriteId,!0));else{const f=xd(n,a.path,o);a.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){Uo("transaction failed: Data returned ",p,a.path);let _=it(p);typeof p=="object"&&p!=null&&Wt(p,".priority")||(_=_.updatePriority(f.getPriority()));const v=a.currentWriteId,y=Ho(n),w=Hd(_,f,y);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=w,a.currentWriteId=Xd(n),o.splice(o.indexOf(v),1),s=s.concat(Md(n.serverSyncTree_,a.path,w,a.currentWriteId,a.applyLocally)),s=s.concat(Cn(n.serverSyncTree_,v,!0))}else u=!0,d="nodata",s=s.concat(Cn(n.serverSyncTree_,a.currentWriteId,!0))}Bt(n.eventQueue_,t,s),s=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(d),!1,null))))}tr(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)ci(i[l]);zo(n,n.transactionQueueTree_)}function Zd(n,e){let t,i=n.transactionQueueTree_;for(t=Oe(e);t!==null&&ui(i)===void 0;)i=Bo(i,t),e=Ve(e),t=Oe(e);return i}function $d(n,e){const t=[];return ef(n,e,t),t.sort((i,s)=>i.order-s.order),t}function ef(n,e,t){const i=ui(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Zs(e,s=>{ef(n,s,t)})}function tr(n,e){const t=ui(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,qd(e,t.length>0?t:void 0)}Zs(e,i=>{tr(n,i)})}function tf(n,e){const t=$i(Zd(n,e)),i=Bo(n.transactionQueueTree_,e);return jb(i,s=>{vr(n,s)}),vr(n,i),jd(i,s=>{vr(n,s)}),t}function vr(n,e){const t=ui(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(ne(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(ne(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Cn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?qd(e,void 0):t.length=r+1,Bt(n.eventQueue_,$i(e),s);for(let o=0;o<i.length;o++)ci(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function fv(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):_t(`Invalid query segment '${t}' in query '${n}'`)}return e}const ra=function(n,e){const t=hv(n),i=t.namespace;t.domain==="firebase.com"&&Qt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Nm();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Xu(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new je(t.pathString)}},hv=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=dv(n.substring(u,d)));const f=fv(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pv=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=oa.charAt(t%64),t=Math.floor(t/64);ne(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=oa.charAt(e[s]);return ne(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class mv{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return Ne(this._path)?null:rd(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=jl(this._queryParams),t=_o(e);return t==="{}"?"default":t}get _queryObject(){return jl(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof nr))return!1;const t=this._repo===e._repo,i=ad(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+dg(this._path)}}function bv(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function vv(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===an){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Dn)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==hn)throw new Error(i);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===Je){if(e!=null&&!na(e)||t!=null&&!na(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(ne(n.getIndex()instanceof _d||n.getIndex()===md,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Xt extends nr{constructor(e,t){super(e,t,new ko,!1)}get parent(){const e=ld(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wi{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new je(e),i=Jt(this.ref,e);return new Wi(this._node.getChild(t),i,Je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Wi(s,Jt(this.ref,i),Je)))}hasChild(e){const t=new je(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dn(n,e){return n=gt(n),n._checkNotDeleted("ref"),e!==void 0?Jt(n._root,e):n._root}function Jt(n,e){return n=gt(n),Oe(n._path)===null?Qb("child","path",e,!1):Yd("child","path",e,!1),new Xt(n._repo,Ze(n._path,e))}function yv(n,e){n=gt(n),Wo("push",n._path),Kd("push",e,n._path,!0);const t=Jd(n._repo),i=pv(t),s=Jt(n,i),r=Jt(n,i);let o;return e!=null?o=ni(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function la(n){return Wo("remove",n._path),ni(n,null)}function ni(n,e){n=gt(n),Wo("set",n._path),Kd("set",e,n._path,!1);const t=new qs;return rv(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function wv(n){n=gt(n);const e=new gv(()=>{}),t=new jo(e);return sv(n._repo,n,t).then(i=>new Wi(i,new Xt(n._repo,n._path),n._queryParams.getIndex()))}class jo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new _v("value",this,new Wi(e.snapshotNode,new Xt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new mv(this,e,t):null}matches(e){return e instanceof jo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class kv{}class Cv extends kv{_apply(e){bv(e,"orderByKey");const t=Pg(e._queryParams,an);return vv(t),new nr(e._repo,e._path,t,!0)}}function Ev(){return new Cv}function Iv(n,...e){let t=gt(n);for(const i of e)t=i._apply(t);return t}yb(Xt);Ib(Xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="FIREBASE_DATABASE_EMULATOR_HOST",qr={};let Tv=!1;function Nv(n,e,t,i){n.repoInfo_=new Xu(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Ov(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ra(r,s),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Sv]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=ra(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new Qn(Qn.OWNER):new Wm(n.name,n.options,e);Jb("Invalid Firebase Database URL",o),Ne(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Av(l,n,u,new Um(n.name,t));return new Dv(d,n)}function Rv(n,e){const t=qr[e];(!t||t[n.key]!==n)&&Qt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),lv(n),delete t[n.key]}function Av(n,e,t,i){let s=qr[e.name];s||(s={},qr[e.name]=s);let r=s[n.toURLString()];return r&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tv(n,Tv,t,i),s[n.toURLString()]=r,r}class Dv{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,Le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Rv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function nf(n=js(),e){const t=no(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=$f("database");i&&Pv(t,...i)}return t}function Pv(n,e,t,i={}){n=gt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Qn(Qn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:eh(i.mockUserToken,n.app.options.projectId);r=new Qn(o)}Nv(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(n){Cm(oi),Zn(new On("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ov(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ln(Sl,Tl,n),ln(Sl,Tl,"esm2017")}Gt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Gt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Mv();const Lv={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"},Fv={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};io(Lv,"sud");io(Fv,"builds");const sf=js("sud"),Bv=js("builds"),rf="https://xt8ss.github.io/ff-site-data";fetch(rf+"/user-ranks.json").then(async n=>await n.json());km(sf);const Vo=nf(sf),Hi=nf(Bv),Rt={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},ii=["head","body","legs","feet","neck","back","ring","misc"],Go={name:"",stats:{armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0},cost:{min:0,max:0},image:"",link:""},Ko={name:"",info:{type:"",special:""},moves:[],cost:{min:0,max:0},image:"",link:""},Uv={armor:{min:0,avg:0,max:0},gear:{min:0,avg:0,max:0},total:{min:0,avg:0,max:0}},qi=[...Array(5).keys()].map(n=>++n),of={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function lf(n,e){let t=!1;for(let i of[n,e])for(let s in i)if(i[s].name){t=!0;break}hs.set(t),St.set(null),window.history.replaceState(null,null,location.origin+location.pathname)}function Yo(n,e){let t=2.8,i=e.split(" ").length,s=n.querySelector("span");if(s.style.removeProperty("font-size"),i>2&&e.length/i>=5){for(;s.offsetHeight>n.offsetHeight*.75;)t-=.05,s.style.fontSize=`${t}rem`;return t<2.8}return null}function Wv(n,e){let t=2.8,i=n.querySelector("span");for(i.style.removeProperty("font-size");i.offsetWidth>n.offsetWidth;)t-=.05,i.style.fontSize=`${t}rem`;for(;i.offsetHeight>n.offsetHeight*.75&&e;)t-=.05,i.style.fontSize=`${t}rem`;return t<2.8?t:null}function Hv(n){let e=2.35,t=n.querySelector(".tooltip");for(t.style.removeProperty("font-size");t.offsetHeight>n.offsetHeight*1.125;)e-=.02,t.style.fontSize=`${e}rem`}function qv(n){document.activeElement==document.body&&n.key=="Tab"&&(n.preventDefault(),document.querySelector(`.promptCont [id*='${n.shiftKey?"last":"first"}Focusable']`).focus())}function af(n,e){let t=n.toLowerCase();for(let i in e)i.toLowerCase().includes(t)&&!e[i].classList.contains("filtered")?e[i].classList.remove("hidden"):e[i].classList.add("hidden")}function Fs(n,e){e&&setTimeout(()=>{n.focus(),n.click(),n.select()})}function ct(n){n.shiftKey&&n.key=="Tab"&&n.preventDefault()}function ut(n){n.key=="Tab"&&!n.shiftKey&&n.preventDefault()}function Bs(n,e){let t=/[^a-zA-Z0-9~!#$%^&*()\-_+[\]{}\\|;:'",.<>/? ]/g;return n.replace(t,"").replaceAll(`
`,"").replace(/^ /,"").slice(0,e)}function zr(n,e,t){(!n.maxLength||n.maxLength!=t)&&e.length>=t&&(n.maxLength=t)}function cf(n,e){n={...n},e={...e};for(let t of ii)n[t]?n[t]=n[t].name:n[t]="";for(let t of qi)e[t]?e[t]=e[t].name:e[t]="";return{eq:n,gear:e}}function Qo(){window.history.replaceState(null,null,location.origin+location.pathname+"?ls=true")}function Vt(n){n.target.closest("button").blur()}function aa(n){return n!=null&&Object.keys(n).length}function zv(n){let e,t,i,s,r,o,l,a,c,u,d,f;return{c(){e=g("li"),t=g("button"),i=g("img"),r=E(),o=g("span"),o.textContent=`${n[5]}`,l=E(),a=g("iconify-icon"),c=E(),u=g("iconify-icon"),Qe(i.src,s=n[0].image)||m(i,"src",s),m(i,"alt",""),Re(a,"icon","maki:cross"),Re(a,"id","cross"),Re(u,"icon","eva:info-outline"),Re(u,"id","info"),ue(e,"selectedItem",n[2])},m(p,_){P(p,e,_),h(e,t),h(t,i),h(t,r),h(t,o),h(t,l),h(t,a),h(t,c),h(t,u),n[20](e),d||(f=[Bc(n[6].call(null,o)),R(t,"touchstart",n[9],{passive:!0}),R(t,"touchend",n[10],{passive:!0}),R(t,"mousedown",n[9]),R(t,"mouseup",n[10]),R(t,"click",n[15]),R(t,"mouseenter",n[16]),R(t,"focusin",n[17]),R(t,"mouseleave",n[18]),R(t,"focusout",n[19]),R(e,"contextmenu",jv)],d=!0)},p(p,[_]){_&1&&!Qe(i.src,s=p[0].image)&&m(i,"src",s),_&4&&ue(e,"selectedItem",p[2])},i:$,o:$,d(p){p&&N(e),n[20](null),d=!1,ve(f)}}}const jv=n=>n.preventDefault();function Vv(n,e,t){let i,s,r,o,l,a,c;V(n,ee,S=>t(4,i=S)),V(n,ft,S=>t(22,s=S)),V(n,Vn,S=>t(23,r=S)),V(n,Ut,S=>t(24,o=S)),V(n,Nt,S=>t(25,l=S)),V(n,Ft,S=>t(26,a=S)),V(n,Jr,S=>t(27,c=S));let{itemData:u,slotOpen:d,eqSlotName:f,scrolling:p}=e;const _=At();let b,v=!1,y=u.name,w,k=0,I;function M(S){setTimeout(()=>{Yo(b,y)&&c.push({node:b,itemName:y})})}function W(S){if(d||!d&&S.isTrusted==!1){_("itemSelect",{element:b,trusted:S.isTrusted}),b.classList.contains("selectedItem")||t(2,v=!1),t(2,v=!v),t(11,d=!1),K(Nt,l[f]=v?u:Go,l),lf(l,a);for(let A of Object.keys(Rt)){K(ft,s[A]=0,s);for(let G in l)l[G].noStats||(K(ft,s[A]+=l[G].stats[A],s),K(ft,s[A]=Math.round(s[A]*10)/10,s))}for(let A of o.bonuses)if(r[A.name])for(let G in s)K(ft,s[G]+=A.stats[G],s),K(ft,s[G]=Math.round(s[G]*10)/10,s)}}function O(){p||(K(ee,i.item.ongoing=!0,i),K(ee,i.item.data={...u,slot:f,type:"eq",element:b},i))}function L(){I=setInterval(()=>t(14,k+=50),50)}function U(){clearInterval(I),k>=750&&O(),t(14,k=0)}const Y=S=>{S.shiftKey?O():i.item.ongoing||W(S)},T=()=>t(3,w=!0),C=()=>t(3,w=!0),H=()=>t(3,w=!1),z=()=>t(3,w=!1);function j(S){fe[S?"unshift":"push"](()=>{b=S,t(1,b)})}return n.$$set=S=>{"itemData"in S&&t(0,u=S.itemData),"slotOpen"in S&&t(11,d=S.slotOpen),"eqSlotName"in S&&t(12,f=S.eqSlotName),"scrolling"in S&&t(13,p=S.scrolling)},n.$$.update=()=>{n.$$.dirty&16384&&k==750&&_("displayInfo")},[u,b,v,w,i,y,M,W,O,L,U,d,f,p,k,Y,T,C,H,z,j]}class Gv extends Se{constructor(e){super(),Ie(this,e,Vv,zv,ge,{itemData:0,slotOpen:11,eqSlotName:12,scrolling:13})}}function Kv(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b;return{c(){e=g("li"),t=g("button"),i=g("img"),r=E(),o=g("span"),o.textContent=`${n[6]}`,l=E(),a=g("iconify-icon"),d=E(),f=g("iconify-icon"),Qe(i.src,s=n[0].image)||m(i,"src",s),m(i,"alt",""),Re(a,"icon",c=n[5]?"heroicons-solid:switch-vertical":"maki:cross"),Re(a,"id",u=n[5]?"switchable":"cross"),Re(f,"icon","eva:info-outline"),Re(f,"id","info"),t.disabled=p=!n[4]&&!n[5],ue(e,"selectedItem",n[1]),ue(e,"non-eligible",!n[4]&&!n[5]),ue(e,"switchable",n[5])},m(v,y){P(v,e,y),h(e,t),h(t,i),h(t,r),h(t,o),h(t,l),h(t,a),h(t,d),h(t,f),n[19](e),_||(b=[Bc(n[7].call(null,o)),R(t,"touchstart",n[10],{passive:!0}),R(t,"touchend",n[11],{passive:!0}),R(t,"mousedown",n[10]),R(t,"mouseup",n[11]),R(t,"click",n[18]),R(e,"contextmenu",Yv)],_=!0)},p(v,[y]){y&1&&!Qe(i.src,s=v[0].image)&&m(i,"src",s),y&32&&c!==(c=v[5]?"heroicons-solid:switch-vertical":"maki:cross")&&Re(a,"icon",c),y&32&&u!==(u=v[5]?"switchable":"cross")&&Re(a,"id",u),y&48&&p!==(p=!v[4]&&!v[5])&&(t.disabled=p),y&2&&ue(e,"selectedItem",v[1]),y&48&&ue(e,"non-eligible",!v[4]&&!v[5]),y&32&&ue(e,"switchable",v[5])},i:$,o:$,d(v){v&&N(e),n[19](null),_=!1,ve(b)}}}const Yv=n=>n.preventDefault();function Qv(n,e,t){let i,s,r,o,l;V(n,Ft,H=>t(17,i=H)),V(n,ee,H=>t(2,s=H)),V(n,Nt,H=>t(21,r=H)),V(n,Xn,H=>t(22,o=H)),V(n,Jr,H=>t(23,l=H));let{itemData:a,slotOpen:c,index:u,weaponExpand:d,scrolling:f}=e;const p=At();let _,b=!1,v=!0,y=!1,w=a.name,k=0,I,M={};function W(H){setTimeout(()=>{Yo(_,w)&&l.push({node:_,itemName:w})})}function O(H){v&&(c||!c&&H.isTrusted==!1)&&(a.tool&&d&&p("toolSelect"),p("itemSelect",{element:_,trusted:H.isTrusted}),_.classList.contains("selectedItem")||t(1,b=!1),t(12,c=!1),y?setTimeout(()=>{o[u][w].querySelector("button").click(),o[Object.keys(i).find(z=>i[z].name==w)][i[u]&&i[u].name?i[u].name:w].querySelector("button").click(),t(4,v=!0),t(5,y=!1)},5):(t(1,b=!b),K(Ft,i[u]=b?a:Ko,i)),lf(r,i))}function L(){f||(K(ee,s.item.ongoing=!0,s),K(ee,s.item.data={...a,type:"gear",element:_},s))}function U(){I=setInterval(()=>t(16,k+=50),50)}function Y(){clearInterval(I),k>=750&&L(),t(16,k=0)}const T=H=>{H.shiftKey?L():s.item.ongoing||O(H)};function C(H){fe[H?"unshift":"push"](()=>{_=H,t(3,_)})}return n.$$set=H=>{"itemData"in H&&t(0,a=H.itemData),"slotOpen"in H&&t(12,c=H.slotOpen),"index"in H&&t(13,u=H.index),"weaponExpand"in H&&t(14,d=H.weaponExpand),"scrolling"in H&&t(15,f=H.scrolling)},n.$$.update=()=>{if(n.$$.dirty&155650&&i)for(let H in i){if(!d&&H!=u&&i[H].name==w){t(5,y=!0);break}if(H!=u&&M[i[H].name]&&M[i[H].name].includes(w)){t(4,v=!1);break}else b||t(4,v=!0)}if(n.$$.dirty&139268)if(s.randomize.ongoing)t(5,y=!1);else for(let H in i)if(H!=u&&i[H].name==w){t(5,y=!0);break}else t(5,y=!1);n.$$.dirty&65536&&k==750&&p("displayInfo")},[a,b,s,_,v,y,w,W,O,L,U,Y,c,u,d,f,k,i,T,C]}class Jv extends Se{constructor(e){super(),Ie(this,e,Qv,Kv,ge,{itemData:0,slotOpen:12,index:13,weaponExpand:14,scrolling:15})}}function uf(n){const e=n-1;return e*e*e+1}function Ke(n,{delay:e=0,duration:t=400,easing:i=ji}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}function Fe(n,{delay:e=0,duration:t=400,easing:i=uf,start:s=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-s,u=l*(1-r);return{delay:e,duration:t,easing:i,css:(d,f)=>`
			transform: ${a} scale(${1-c*f});
			opacity: ${l-u*f}
		`}}function ca(n){let e,t,i,s;return{c(){e=g("img"),Qe(e.src,t=n[5][n[3]])||m(e,"src",t),m(e,"alt","")},m(r,o){P(r,e,o),s=!0},p(r,o){(!s||o&8&&!Qe(e.src,t=r[5][r[3]]))&&m(e,"src",t)},i(r){s||(r&&Ce(()=>{s&&(i||(i=me(e,Ke,{duration:150},!0)),i.run(1))}),s=!0)},o(r){r&&(i||(i=me(e,Ke,{duration:150},!1)),i.run(0)),s=!1},d(r){r&&N(e),r&&i&&i.end()}}}function Xv(n){let e,t,i=n[5][n[3]],s,r,o=n[0].name+"",l,a,c,u=ca(n);return{c(){e=g("li"),t=g("button"),u.c(),s=E(),r=g("span"),l=ie(o),ue(e,"selectedItem",n[4])},m(d,f){P(d,e,f),h(e,t),u.m(t,null),h(t,s),h(t,r),h(r,l),n[8](e),a||(c=[R(t,"click",n[6]),R(e,"mouseenter",n[9]),R(e,"focusin",n[10]),R(e,"mouseleave",n[11]),R(e,"focusout",n[12])],a=!0)},p(d,[f]){f&8&&ge(i,i=d[5][d[3]])?(Be(),q(u,1,1,$),Ue(),u=ca(d),u.c(),B(u,1),u.m(t,s)):u.p(d,f),f&1&&o!==(o=d[0].name+"")&&Ee(l,o)},i(d){B(u)},o(d){q(u)},d(d){d&&N(e),u.d(d),n[8](null),a=!1,ve(c)}}}function xv(n,e,t){let i,s,r;V(n,Jn,L=>t(14,i=L)),V(n,Nt,L=>t(15,s=L)),V(n,Ut,L=>t(16,r=L));let{itemData:o,ddOpen:l=!1}=e;const a=At();let c,u=!1,d=!1,f,p=0,_=o.pieces.length,b=[];for(let L of o.pieces)e:for(let U of ii)for(let Y of r[U])if(Y.name==L){b.push(U);break e}let v=[];for(let L=0;L<_;L++)v.push(r[b[L]].find(U=>U.name==o.pieces[L]).image);function y(){d?f=setInterval(()=>{t(3,p++,p),p==_&&t(3,p=0)},750):(clearInterval(f),t(3,p=0))}function w(){a("setSelect");let L=0;for(let U=0;U<_;U++)!s[b[U]]||s[b[U]].name!=o.pieces[U]?i[b[U]][o.pieces[U]].querySelector("button").click():L++;L!=_&&t(7,l=!1)}function k(L){fe[L?"unshift":"push"](()=>{c=L,t(2,c)})}const I=()=>t(1,d=!0),M=()=>t(1,d=!0),W=()=>t(1,d=!1),O=()=>t(1,d=!1);return n.$$set=L=>{"itemData"in L&&t(0,o=L.itemData),"ddOpen"in L&&t(7,l=L.ddOpen)},n.$$.update=()=>{n.$$.dirty&2&&(d||!d)&&y()},[o,d,c,p,u,v,w,l,k,I,M,W,O]}class Zv extends Se{constructor(e){super(),Ie(this,e,xv,Xv,ge,{itemData:0,ddOpen:7})}}const $v=n=>({}),ua=n=>({});function ey(n){let e,t,i,s,r,o,l,a,c;const u=n[8].tooltip,d=bf(u,n,n[7],ua);return{c(){e=g("div"),t=g("span"),i=E(),s=g("input"),o=E(),d&&d.c(),m(s,"id",r=n[2]?"firstFocusable":n[3]?"lastFocusable":""),s.disabled=n[4],m(s,"type","checkbox"),s.checked=n[1],m(s,"class","svelte-i9pcgn"),m(e,"class","toggleCont svelte-i9pcgn"),ue(e,"unavailable",n[4])},m(f,p){P(f,e,p),h(e,t),t.innerHTML=n[0],h(e,i),h(e,s),h(e,o),d&&d.m(e,null),l=!0,a||(c=[R(s,"change",n[9]),R(s,"keydown",n[10])],a=!0)},p(f,[p]){(!l||p&1)&&(t.innerHTML=f[0]),(!l||p&12&&r!==(r=f[2]?"firstFocusable":f[3]?"lastFocusable":""))&&m(s,"id",r),(!l||p&16)&&(s.disabled=f[4]),(!l||p&2)&&(s.checked=f[1]),d&&d.p&&(!l||p&128)&&yf(d,u,f,f[7],l?vf(u,f[7],p,$v):wf(f[7]),ua),(!l||p&16)&&ue(e,"unavailable",f[4])},i(f){l||(B(d,f),l=!0)},o(f){q(d,f),l=!1},d(f){f&&N(e),d&&d.d(f),a=!1,ve(c)}}}function ty(n,e,t){let{$$slots:i={},$$scope:s}=e,{text:r,checked:o=!1,first:l=!1,last:a=!1,disabled:c=!1,forced:u=!1}=e;const d=At(),f=_=>{_.target.blur(),u?_.target.checked=!0:d("toggle",_.target.checked)},p=_=>{l&&ct(_),a&&ut(_),_.key=="Enter"&&!u?(_.target.checked=!_.target.checked,d("toggle",_.target.checked)):u&&(_.target.checked=!0)};return n.$$set=_=>{"text"in _&&t(0,r=_.text),"checked"in _&&t(1,o=_.checked),"first"in _&&t(2,l=_.first),"last"in _&&t(3,a=_.last),"disabled"in _&&t(4,c=_.disabled),"forced"in _&&t(5,u=_.forced),"$$scope"in _&&t(7,s=_.$$scope)},[r,o,l,a,c,u,d,s,i,f,p]}class lt extends Se{constructor(e){super(),Ie(this,e,ty,ey,ge,{text:0,checked:1,first:2,last:3,disabled:4,forced:5})}}function da(n,e,t){const i=n.slice();return i[28]=e[t][0],i[29]=e[t][1],i}function fa(n,e,t){const i=n.slice();return i[28]=e[t][0],i[29]=e[t][1],i}function ha(n){let e,t;function i(...s){return n[19](n[28],...s)}return e=new lt({props:{text:n[29],checked:n[6][n[28]]}}),e.$on("toggle",i),{c(){le(e.$$.fragment)},m(s,r){se(e,s,r),t=!0},p(s,r){n=s;const o={};r[0]&64&&(o.checked=n[6][n[28]]),e.$set(o)},i(s){t||(B(e.$$.fragment,s),t=!0)},o(s){q(e.$$.fragment,s),t=!1},d(s){re(e,s)}}}function ny(n){let e,t,i,s,r,o,l,a,c;s=new lt({props:{text:"Descension",checked:n[4],forced:n[4]}}),s.$on("toggle",n[20]),o=new lt({props:{text:"Ascension",checked:n[5],forced:n[5]}}),o.$on("toggle",n[21]);let u=Ae(Object.entries(n[9])),d=[];for(let p=0;p<u.length;p+=1)d[p]=pa(da(n,u,p));const f=p=>q(d[p],1,1,()=>{d[p]=null});return{c(){e=g("p"),e.textContent="Sort",t=E(),i=g("div"),le(s.$$.fragment),r=E(),le(o.$$.fragment),l=E(),a=g("div");for(let p=0;p<d.length;p+=1)d[p].c();m(e,"id","title"),m(e,"class","svelte-6kxnh3"),m(i,"class","radio ttFocus svelte-6kxnh3"),m(i,"id","sort"),m(a,"class","options svelte-6kxnh3")},m(p,_){P(p,e,_),P(p,t,_),P(p,i,_),se(s,i,null),h(i,r),se(o,i,null),P(p,l,_),P(p,a,_);for(let b=0;b<d.length;b+=1)d[b]&&d[b].m(a,null);c=!0},p(p,_){const b={};_[0]&16&&(b.checked=p[4]),_[0]&16&&(b.forced=p[4]),s.$set(b);const v={};if(_[0]&32&&(v.checked=p[5]),_[0]&32&&(v.forced=p[5]),o.$set(v),_[0]&1664){u=Ae(Object.entries(p[9]));let y;for(y=0;y<u.length;y+=1){const w=da(p,u,y);d[y]?(d[y].p(w,_),B(d[y],1)):(d[y]=pa(w),d[y].c(),B(d[y],1),d[y].m(a,null))}for(Be(),y=u.length;y<d.length;y+=1)f(y);Ue()}},i(p){if(!c){B(s.$$.fragment,p),B(o.$$.fragment,p);for(let _=0;_<u.length;_+=1)B(d[_]);c=!0}},o(p){q(s.$$.fragment,p),q(o.$$.fragment,p),d=d.filter(Boolean);for(let _=0;_<d.length;_+=1)q(d[_]);c=!1},d(p){p&&(N(e),N(t),N(i),N(l),N(a)),re(s),re(o),st(d,p)}}}function pa(n){let e,t;function i(...s){return n[22](n[28],...s)}return e=new lt({props:{text:n[29],checked:n[7][n[28]],last:n[28]=="none"||n[28]=="tool"}}),e.$on("toggle",i),{c(){le(e.$$.fragment)},m(s,r){se(e,s,r),t=!0},p(s,r){n=s;const o={};r[0]&128&&(o.checked=n[7][n[28]]),e.$set(o)},i(s){t||(B(e.$$.fragment,s),t=!0)},o(s){q(e.$$.fragment,s),t=!1},d(s){re(e,s)}}}function iy(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v,y,w,k,I,M,W,O;o=new lt({props:{text:"Inclusive",checked:n[1],forced:n[1]}}),o.$on("toggle",n[14]),a=new lt({props:{text:"Exclusive",checked:n[2],forced:n[2]}}),a.$on("toggle",n[15]),u=new lt({props:{text:"Strict",checked:n[3],forced:n[3]}}),u.$on("toggle",n[16]);let L=Ae(Object.entries(n[9])),U=[];for(let C=0;C<L.length;C+=1)U[C]=ha(fa(n,L,C));const Y=C=>q(U[C],1,1,()=>{U[C]=null});let T=!n[8]&&ny(n);return{c(){e=g("div"),t=g("div"),i=g("p"),i.innerHTML=`Filter
            <span class="tooltip svelte-6kxnh3" id="bottom">Inclusive: Equipment that includes the selected search types
                <br/> <br/>
                Exclusive: Equipment that does not include the selected search types
                <br/> <br/>
                Strict: Equipment that includes the selected search types and no
                others</span> <iconify-icon icon="eva:info-outline"></iconify-icon>`,s=E(),r=g("div"),le(o.$$.fragment),l=E(),le(a.$$.fragment),c=E(),le(u.$$.fragment),d=E(),f=g("div"),p=g("div"),_=g("button"),_.textContent="Select all",b=E(),v=g("div"),y=g("button"),y.textContent="Clear all",w=E(),k=g("div");for(let C=0;C<U.length;C+=1)U[C].c();I=E(),T&&T.c(),m(i,"id","title"),m(i,"class","svelte-6kxnh3"),m(r,"class","radio ttFocus svelte-6kxnh3"),m(r,"id","filter"),m(_,"class","svelte-6kxnh3"),m(p,"class","svelte-6kxnh3"),m(y,"class","svelte-6kxnh3"),m(v,"class","svelte-6kxnh3"),m(f,"class","optionsAll svelte-6kxnh3"),m(k,"class","options svelte-6kxnh3"),m(t,"class","searchOptions svelte-6kxnh3"),m(e,"class","searchOptionsCont svelte-6kxnh3"),ue(e,"optionsOpen",n[0])},m(C,H){P(C,e,H),h(e,t),h(t,i),h(t,s),h(t,r),se(o,r,null),h(r,l),se(a,r,null),h(r,c),se(u,r,null),h(t,d),h(t,f),h(f,p),h(p,_),h(f,b),h(f,v),h(v,y),h(t,w),h(t,k);for(let z=0;z<U.length;z+=1)U[z]&&U[z].m(k,null);h(t,I),T&&T.m(t,null),M=!0,W||(O=[R(_,"click",n[17]),R(y,"click",n[18])],W=!0)},p(C,H){const z={};H[0]&2&&(z.checked=C[1]),H[0]&2&&(z.forced=C[1]),o.$set(z);const j={};H[0]&4&&(j.checked=C[2]),H[0]&4&&(j.forced=C[2]),a.$set(j);const S={};if(H[0]&8&&(S.checked=C[3]),H[0]&8&&(S.forced=C[3]),u.$set(S),H[0]&1600){L=Ae(Object.entries(C[9]));let A;for(A=0;A<L.length;A+=1){const G=fa(C,L,A);U[A]?(U[A].p(G,H),B(U[A],1)):(U[A]=ha(G),U[A].c(),B(U[A],1),U[A].m(k,null))}for(Be(),A=L.length;A<U.length;A+=1)Y(A);Ue()}C[8]||T.p(C,H),(!M||H[0]&1)&&ue(e,"optionsOpen",C[0])},i(C){if(!M){B(o.$$.fragment,C),B(a.$$.fragment,C),B(u.$$.fragment,C);for(let H=0;H<L.length;H+=1)B(U[H]);B(T),M=!0}},o(C){q(o.$$.fragment,C),q(a.$$.fragment,C),q(u.$$.fragment,C),U=U.filter(Boolean);for(let H=0;H<U.length;H+=1)q(U[H]);q(T),M=!1},d(C){C&&N(e),re(o),re(a),re(u),st(U,C),T&&T.d(),W=!1,ve(O)}}}function sy(n,e,t){let i;V(n,Ut,j=>t(24,i=j));let{optionsOpen:s,slotName:r,elementData:o,list:l}=e;const a=At();let c=r=="gear",u=!0,d=!1,f=!1,p=!0,_=!1,b={},v={},y=c?{armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",unique:"Unique",tool:"Tool"}:{...Rt,none:"No Stats"};for(let j of Object.keys(y))b[j]=!0;for(let j of Object.keys(y))v[j]=!1;let w=["Void Spike Ultradagger","Pureblood Dagger","Gnome Rocket Launcher"],k=[];function I(j){setTimeout(()=>{for(let S in o){let A=i[r].find(ae=>ae.name==S),G={...Rt},Q={armor:!1,magicDmg:!1,meleeDmg:!1,rangedDmg:!1,unique:!1,tool:!1},J=c?Q:G,oe=!1;if(c)if(!A.tool&&!w.includes(A.name)){for(let ae in b)for(let he of A.moves)if(Q[ae]=he.type.includes(ae),Q[ae])break}else Q.tool=!!A.tool,Q.tool||(Q.unique=A.info.type=="Unique",A.name=="Void Spike Ultradagger"&&(Q.armor=!0,Q.meleeDmg=!0));else{for(let ae in b)G[ae]=A.stats[ae]!=0;G.none=!!A.noStats}if(u)for(let ae in J)if(b[ae]&&J[ae]){oe=!1;break}else oe=!0;else if(d)for(let ae in J)if(b[ae]&&J[ae]){oe=!0;break}else oe=!1;else if(f)for(let ae in J)if(b[ae]&&J[ae]||!b[ae]&&!J[ae])oe=!1;else{oe=!0;break}oe?o[S].classList.add("hidden","filtered"):o[S].classList.remove("hidden","filtered")}if(j=="sort"){let S=Object.keys(v).find(G=>v[G]),A=0;for(S&&!(S=="none"||S=="tool")?(k.sort((G,Q)=>{let J=M(G,Q,!0).stats[S]-M(G,Q,!1).stats[S];return A||(A=J),J}),A||(k=Object.values(o))):!S&&_&&(k=Object.values(o).toReversed()),S=="none"&&(k=[...Object.entries(o).filter(G=>i[r].find(Q=>Q.name==G[0]).noStats),...Object.entries(o).filter(G=>!i[r].find(Q=>Q.name==G[0]).noStats)],k=k.map(G=>G[1]),_&&k.reverse());l.lastElementChild;)l.removeChild(l.lastElementChild);if(S||!S&&_)for(let G of k)l.appendChild(G);else for(let G in o)l.appendChild(o[G])}a("listUpdate")})}function M(j,S,A){return i[r].find(G=>G.name==Object.keys(o).find(Q=>o[Q]===(p?A?S:j:A?j:S)))}const W=j=>{t(1,u=j.detail),j.detail&&(t(2,d=!1),t(3,f=!1)),I("filter")},O=j=>{t(2,d=j.detail),j.detail&&(t(1,u=!1),t(3,f=!1)),I("filter")},L=j=>{t(3,f=j.detail),j.detail&&(t(1,u=!1),t(2,d=!1)),I("filter")},U=j=>{j.target.blur();for(let S in b)t(6,b[S]=!0,b);I("filter")},Y=j=>{j.target.blur();for(let S in b)t(6,b[S]=!1,b);I("filter")},T=(j,S)=>{t(6,b[j]=S.detail,b),I("filter")},C=j=>{t(4,p=j.detail),j.detail&&t(5,_=!1),I("sort")},H=j=>{t(5,_=j.detail),j.detail&&t(4,p=!1),I("sort")},z=(j,S)=>{if(t(7,v[j]=S.detail,v),S.detail)for(let A in v)A!=j&&t(7,v[A]=!1,v);I("sort")};return n.$$set=j=>{"optionsOpen"in j&&t(0,s=j.optionsOpen),"slotName"in j&&t(11,r=j.slotName),"elementData"in j&&t(12,o=j.elementData),"list"in j&&t(13,l=j.list)},n.$$.update=()=>{n.$$.dirty[0]&8192&&l&&(k=[...l.children])},[s,u,d,f,p,_,b,v,c,y,I,r,o,l,W,O,L,U,Y,T,C,H,z]}class ry extends Se{constructor(e){super(),Ie(this,e,sy,iy,ge,{optionsOpen:0,slotName:11,elementData:12,list:13},null,[-1,-1])}}function _a(n,e,t){const i=n.slice();return i[61]=e[t],i}function oy(n){let e;return{c(){e=g("span"),e.textContent="Loading items...",m(e,"class","svelte-3qe8b")},m(t,i){P(t,e,i)},p:$,i:$,o:$,d(t){t&&N(e)}}}function ly(n){let e,t,i,s,r,o,l,a=n[3]!="sets"&&ma(n),c=Ae(n[6]),u=[];for(let f=0;f<c.length;f+=1)u[f]=ga(_a(n,c,f));const d=f=>q(u[f],1,1,()=>{u[f]=null});return{c(){e=g("input"),t=E(),a&&a.c(),i=E(),s=g("ul");for(let f=0;f<u.length;f+=1)u[f].c();m(e,"type","text"),m(e,"class","searchBarInput"),m(e,"placeholder","Search..."),m(s,"class","svelte-3qe8b"),ue(s,"no-scrollbar",n[15].length<=4)},m(f,p){P(f,e,p),n[29](e),P(f,t,p),a&&a.m(f,p),P(f,i,p),P(f,s,p);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(s,null);n[42](s),r=!0,o||(l=[R(e,"keydown",n[18]),R(e,"input",n[19]),R(s,"mouseup",n[43]),R(s,"touchend",n[44],{passive:!0}),R(s,"scroll",n[45]),R(s,"scrollend",n[46])],o=!0)},p(f,p){if(f[3]!="sets"?a?a.p(f,p):(a=ma(f),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null),p[0]&1197019){c=Ae(f[6]);let _;for(_=0;_<c.length;_+=1){const b=_a(f,c,_);u[_]?(u[_].p(b,p),B(u[_],1)):(u[_]=ga(b),u[_].c(),B(u[_],1),u[_].m(s,null))}for(Be(),_=c.length;_<u.length;_+=1)d(_);Ue()}(!r||p[0]&32768)&&ue(s,"no-scrollbar",f[15].length<=4)},i(f){if(!r){for(let p=0;p<c.length;p+=1)B(u[p]);r=!0}},o(f){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)q(u[p]);r=!1},d(f){f&&(N(e),N(t),N(i),N(s)),n[29](null),a&&a.d(f),st(u,f),n[42](null),o=!1,ve(l)}}}function ma(n){let e,t,i;return{c(){e=g("button"),e.innerHTML='<iconify-icon icon="mi:filter"></iconify-icon>',m(e,"class","optionsButton svelte-3qe8b")},m(s,r){P(s,e,r),n[30](e),t||(i=R(e,"click",n[31]),t=!0)},p:$,d(s){s&&N(e),n[30](null),t=!1,i()}}}function ay(n){let e,t,i,s;function r(a){n[39](a)}function o(a){n[40](a)}let l={itemData:n[61],eqSlotName:n[3]};return n[0]!==void 0&&(l.slotOpen=n[0]),n[9]!==void 0&&(l.scrolling=n[9]),e=new Gv({props:l}),fe.push(()=>Me(e,"slotOpen",r)),fe.push(()=>Me(e,"scrolling",o)),e.$on("itemSelect",n[20]),e.$on("displayInfo",n[41]),{c(){le(e.$$.fragment)},m(a,c){se(e,a,c),s=!0},p(a,c){const u={};c[0]&64&&(u.itemData=a[61]),c[0]&8&&(u.eqSlotName=a[3]),!t&&c[0]&1&&(t=!0,u.slotOpen=a[0],Pe(()=>t=!1)),!i&&c[0]&512&&(i=!0,u.scrolling=a[9],Pe(()=>i=!1)),e.$set(u)},i(a){s||(B(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function cy(n){let e,t,i;function s(o){n[37](o)}let r={itemData:n[61]};return n[0]!==void 0&&(r.ddOpen=n[0]),e=new Zv({props:r}),fe.push(()=>Me(e,"ddOpen",s)),e.$on("setSelect",n[38]),{c(){le(e.$$.fragment)},m(o,l){se(e,o,l),i=!0},p(o,l){const a={};l[0]&64&&(a.itemData=o[61]),!t&&l[0]&1&&(t=!0,a.ddOpen=o[0],Pe(()=>t=!1)),e.$set(a)},i(o){i||(B(e.$$.fragment,o),i=!0)},o(o){q(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function uy(n){let e,t,i,s,r;function o(u){n[32](u)}function l(u){n[33](u)}function a(u){n[34](u)}let c={itemData:n[61],index:n[4]};return n[0]!==void 0&&(c.slotOpen=n[0]),n[1]!==void 0&&(c.weaponExpand=n[1]),n[9]!==void 0&&(c.scrolling=n[9]),e=new Jv({props:c}),fe.push(()=>Me(e,"slotOpen",o)),fe.push(()=>Me(e,"weaponExpand",l)),fe.push(()=>Me(e,"scrolling",a)),e.$on("itemSelect",n[20]),e.$on("toolSelect",n[35]),e.$on("displayInfo",n[36]),{c(){le(e.$$.fragment)},m(u,d){se(e,u,d),r=!0},p(u,d){const f={};d[0]&64&&(f.itemData=u[61]),d[0]&16&&(f.index=u[4]),!t&&d[0]&1&&(t=!0,f.slotOpen=u[0],Pe(()=>t=!1)),!i&&d[0]&2&&(i=!0,f.weaponExpand=u[1],Pe(()=>i=!1)),!s&&d[0]&512&&(s=!0,f.scrolling=u[9],Pe(()=>s=!1)),e.$set(f)},i(u){r||(B(e.$$.fragment,u),r=!0)},o(u){q(e.$$.fragment,u),r=!1},d(u){re(e,u)}}}function ga(n){let e,t,i,s;const r=[uy,cy,ay],o=[];function l(a,c){return a[4]?0:a[3]=="sets"?1:2}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),i=nt()},m(a,c){o[e].m(a,c),P(a,i,c),s=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(Be(),q(o[u],1,1,()=>{o[u]=null}),Ue(),t=o[e],t?t.p(a,c):(t=o[e]=r[e](a),t.c()),B(t,1),t.m(i.parentNode,i))},i(a){s||(B(t),s=!0)},o(a){q(t),s=!1},d(a){a&&N(i),o[e].d(a)}}}function ba(n){let e,t,i,s;function r(a){n[47](a)}function o(a){n[48](a)}let l={slotName:n[3],elementData:n[16]};return n[2]!==void 0&&(l.optionsOpen=n[2]),n[5]!==void 0&&(l.list=n[5]),e=new ry({props:l}),fe.push(()=>Me(e,"optionsOpen",r)),fe.push(()=>Me(e,"list",o)),e.$on("listUpdate",n[19]),{c(){le(e.$$.fragment)},m(a,c){se(e,a,c),s=!0},p(a,c){const u={};c[0]&8&&(u.slotName=a[3]),c[0]&65536&&(u.elementData=a[16]),!t&&c[0]&4&&(t=!0,u.optionsOpen=a[2],Pe(()=>t=!1)),!i&&c[0]&32&&(i=!0,u.list=a[5],Pe(()=>i=!1)),e.$set(u)},i(a){s||(B(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function dy(n){let e,t,i,s,r,o,l;const a=[ly,oy],c=[];function u(f,p){return f[6]?0:1}t=u(n),i=c[t]=a[t](n);let d=n[3]!="sets"&&ba(n);return{c(){e=g("div"),i.c(),s=E(),d&&d.c(),m(e,"class","dropdown svelte-3qe8b"),ue(e,"infoDisplay",n[7])},m(f,p){P(f,e,p),c[t].m(e,null),h(e,s),d&&d.m(e,null),n[49](e),r=!0,o||(l=[R(window,"keydown",n[26]),R(window,"keyup",n[27]),R(window,"mousedown",n[28]),R(e,"transitionend",n[50]),R(e,"transitioncancel",n[51])],o=!0)},p(f,p){let _=t;t=u(f),t===_?c[t].p(f,p):(Be(),q(c[_],1,1,()=>{c[_]=null}),Ue(),i=c[t],i?i.p(f,p):(i=c[t]=a[t](f),i.c()),B(i,1),i.m(e,s)),f[3]!="sets"?d?(d.p(f,p),p[0]&8&&B(d,1)):(d=ba(f),d.c(),B(d,1),d.m(e,null)):d&&(Be(),q(d,1,1,()=>{d=null}),Ue()),(!r||p[0]&128)&&ue(e,"infoDisplay",f[7])},i(f){r||(B(i),B(d),r=!0)},o(f){q(i),q(d),r=!1},d(f){f&&N(e),c[t].d(),d&&d.d(),n[49](null),o=!1,ve(l)}}}function fy(n,e,t){let i,s,r,o,l,a,c,u,d;V(n,Ut,te=>t(22,r=te)),V(n,Jn,te=>t(23,o=te)),V(n,Vf,te=>t(24,l=te)),V(n,Xn,te=>t(25,a=te)),V(n,vt,te=>t(54,c=te)),V(n,Ft,te=>t(55,u=te)),V(n,Nt,te=>t(56,d=te));let{slotName:f,index:p=0,slotOpen:_,weaponExpand:b=null,optionsOpen:v=!1}=e;const y=At();p?K(Xn,a[p]={},a):K(Jn,o[f]={},o);let w=!1,k=!1,I=!1,M,W,O,L,U,Y=null,T=!1,C=!1,H=[];function z(){U&&U.classList.remove("lastElement"),t(15,H=O.querySelectorAll("li:not(.hidden)")),U=H[H.length-1],U&&U.classList.add("lastElement"),(!U||U.classList.contains("non-eligible"))&&(U=L)}function j(te){!te.shiftKey&&te.key=="Tab"&&!v&&(te.preventDefault(),setTimeout(()=>W.focus()))}function S(){U&&U.removeEventListener("keydown",j),z(),U&&U.addEventListener("keydown",j)}function A(te){te.shiftKey&&te.key=="Tab"&&(te.preventDefault(),setTimeout(()=>(U.querySelector("button")||U).focus()))}function G(){af(W.value,i),S()}function Q(te){y("itemSelect",te.detail.element),t(13,Y=te.detail.element),T=te.detail.trusted;let ir=O.querySelector(".selectedItem");ir&&ir!=te.detail.element&&ir.classList.remove("selectedItem"),t(14,C=!0),T||(oe(),O.scrollTo(0,Y.offsetTop)),setTimeout(J)}function J(){K(vt,c=structuredClone(Uv),c);for(let te in d)d[te].cost.min!=null&&(K(vt,c.armor.min+=d[te].cost.min,c),K(vt,c.armor.max+=d[te].cost.max,c));K(vt,c.armor.avg=Math.ceil((c.armor.min+c.armor.max)/2),c);for(let te in u)u[te].cost.min!=null&&(K(vt,c.gear.min+=u[te].cost.min,c),K(vt,c.gear.max+=u[te].cost.max,c));K(vt,c.gear.avg=Math.ceil((c.gear.min+c.gear.max)/2),c),K(vt,c.total.min=c.armor.min+c.gear.min,c),K(vt,c.total.max=c.armor.max+c.gear.max,c),K(vt,c.total.avg=Math.ceil((c.total.min+c.total.max)/2),c)}function oe(){t(14,C=!1),t(11,W.value="",W),G()}const ae=te=>{f!="sets"&&!w&&te.shiftKey&&t(7,w=!0)},he=te=>{f!="sets"&&te.key=="Shift"&&!k&&t(7,w=!1)},F=()=>(t(7,w=!1),t(8,k=!1));function D(te){fe[te?"unshift":"push"](()=>{W=te,t(11,W)})}function ce(te){fe[te?"unshift":"push"](()=>{L=te,t(12,L)})}const de=()=>t(2,v=!v);function ye(te){_=te,t(0,_)}function $e(te){b=te,t(1,b)}function De(te){I=te,t(9,I)}const Z=()=>y("toolSelect"),ke=()=>(t(7,w=!0),t(8,k=!0));function _e(te){_=te,t(0,_)}const We=()=>t(14,C=!0);function rt(te){_=te,t(0,_)}function x(te){I=te,t(9,I)}const yt=()=>(t(7,w=!0),t(8,k=!0));function pe(te){fe[te?"unshift":"push"](()=>{O=te,t(5,O)})}const di=()=>t(7,w=!1),X=()=>t(7,w=!1),qe=()=>t(9,I=!0),dt=()=>t(9,I=!1);function wt(te){v=te,t(2,v)}function bt(te){O=te,t(5,O)}function Ht(te){fe[te?"unshift":"push"](()=>{M=te,t(10,M)})}const vn=te=>{te.propertyName=="visibility"&&te.target==M&&(C&&oe(),!_&&Y&&setTimeout(()=>O.scrollTo(0,Y.offsetTop)),Fs(W,_))},es=te=>{te.propertyName=="visibility"&&te.target==M&&(t(14,C=!1),Fs(W,_))};return n.$$set=te=>{"slotName"in te&&t(3,f=te.slotName),"index"in te&&t(4,p=te.index),"slotOpen"in te&&t(0,_=te.slotOpen),"weaponExpand"in te&&t(1,b=te.weaponExpand),"optionsOpen"in te&&t(2,v=te.optionsOpen)},n.$$.update=()=>{if(n.$$.dirty[0]&58720280&&t(16,i=p?a[p]:f=="sets"?l:o[f]),n.$$.dirty[0]&4194312&&t(6,s=r[f]),n.$$.dirty[0]&96&&O){t(15,H=O.querySelectorAll("li:not(.hidden)"));for(let te=0;te<O.childElementCount;te++)t(16,i[s[te].name]=O.children[te],i);z(),S()}},[_,b,v,f,p,O,s,w,k,I,M,W,L,Y,C,H,i,y,A,G,Q,oe,r,o,l,a,ae,he,F,D,ce,de,ye,$e,De,Z,ke,_e,We,rt,x,yt,pe,di,X,qe,dt,wt,bt,Ht,vn,es]}class Jo extends Se{constructor(e){super(),Ie(this,e,fy,dy,ge,{slotName:3,index:4,slotOpen:0,weaponExpand:1,optionsOpen:2},null,[-1,-1,-1])}}function va(n){let e,t,i,s,r,o,l=n[1].name+"",a,c,u,d,f;return{c(){e=g("button"),t=g("img"),r=E(),o=g("span"),a=ie(l),Qe(t.src,i=n[1].image)||m(t,"src",i),m(t,"alt",s=n[1].name),m(t,"draggable","false"),m(t,"class","svelte-1bgnkwv"),m(o,"class","tooltip"),m(o,"id","left"),m(e,"class","svelte-1bgnkwv"),ze(e,"display",n[1].link?"":"none")},m(p,_){P(p,e,_),h(e,t),h(e,r),h(e,o),h(o,a),u=!0,d||(f=[R(e,"click",n[13]),R(e,"focusin",n[14]),R(e,"outroend",n[15])],d=!0)},p(p,_){(!u||_&2&&!Qe(t.src,i=p[1].image))&&m(t,"src",i),(!u||_&2&&s!==(s=p[1].name))&&m(t,"alt",s),(!u||_&2)&&l!==(l=p[1].name+"")&&Ee(a,l),_&2&&ze(e,"display",p[1].link?"":"none")},i(p){u||(p&&Ce(()=>{u&&(c||(c=me(e,Ke,{duration:150},!0)),c.run(1))}),u=!0)},o(p){p&&(c||(c=me(e,Ke,{duration:150},!1)),c.run(0)),u=!1},d(p){p&&N(e),p&&c&&c.end(),d=!1,ve(f)}}}function hy(n){let e,t,i=n[1],s,r,o=n[0].charAt(0).toUpperCase()+n[0].slice(1)+"",l,a,c,u,d,f,p,_,b,v,y,w,k=va(n);function I(O){n[19](O)}function M(O){n[20](O)}let W={slotName:n[0]};return n[4]!==void 0&&(W.slotOpen=n[4]),n[6]!==void 0&&(W.optionsOpen=n[6]),p=new Jo({props:W}),fe.push(()=>Me(p,"slotOpen",I)),fe.push(()=>Me(p,"optionsOpen",M)),p.$on("itemSelect",n[21]),{c(){e=g("div"),t=g("div"),k.c(),s=E(),r=g("button"),l=ie(o),a=E(),c=g("iconify-icon"),u=E(),d=g("button"),d.innerHTML='<iconify-icon icon="maki:cross" class="svelte-1bgnkwv"></iconify-icon> <span class="tooltip" id="top">Clear selection</span>',f=E(),le(p.$$.fragment),m(t,"class","eqSlotIcon ff-border svelte-1bgnkwv"),Re(c,"icon","iconamoon:arrow-down-2-fill"),Re(c,"class","svelte-1bgnkwv"),m(r,"class","ddButton svelte-1bgnkwv"),m(d,"class","clearButton svelte-1bgnkwv"),m(e,"class","eqSlotCont svelte-1bgnkwv"),ue(e,"slotOpen",n[4]),ue(e,"clearAllowed",n[5]&&n[7])},m(O,L){P(O,e,L),h(e,t),k.m(t,null),n[16](t),h(e,s),h(e,r),h(r,l),h(r,a),h(r,c),h(e,u),h(e,d),h(e,f),se(p,e,null),n[22](e),v=!0,y||(w=[R(window,"mousedown",n[11]),R(window,"keydown",n[12]),R(r,"click",n[17]),R(d,"click",n[18]),R(e,"mouseenter",n[23]),R(e,"mouseleave",n[24])],y=!0)},p(O,[L]){L&2&&ge(i,i=O[1])?(Be(),q(k,1,1,$),Ue(),k=va(O),k.c(),B(k,1),k.m(t,null)):k.p(O,L),(!v||L&1)&&o!==(o=O[0].charAt(0).toUpperCase()+O[0].slice(1)+"")&&Ee(l,o);const U={};L&1&&(U.slotName=O[0]),!_&&L&16&&(_=!0,U.slotOpen=O[4],Pe(()=>_=!1)),!b&&L&64&&(b=!0,U.optionsOpen=O[6],Pe(()=>b=!1)),p.$set(U),(!v||L&16)&&ue(e,"slotOpen",O[4]),(!v||L&160)&&ue(e,"clearAllowed",O[5]&&O[7])},i(O){v||(B(k),B(p.$$.fragment,O),v=!0)},o(O){q(k),q(p.$$.fragment,O),v=!1},d(O){O&&N(e),k.d(O),n[16](null),re(p),n[22](null),y=!1,ve(w)}}}function py(n,e,t){let i,s,r;V(n,Nt,C=>t(10,i=C)),V(n,Nn,C=>t(8,s=C)),V(n,ee,C=>t(9,r=C));let{eqSlotName:o}=e,l,a,c=Go,u,d,f,p;const _=C=>{(!l.contains(C.target)&&!s||C.target==l||C.target==a)&&(t(4,u=!1),t(6,f=!1),C.target!=l&&C.target!=a&&t(5,d=!1))},b=C=>{C.key=="Tab"?setTimeout(()=>{t(5,d=l.contains(document.activeElement))}):C.key=="Escape"&&(t(4,u=!1),t(6,f=!1))},v=()=>{s||(t(4,u=!1),K(ee,r.item.ongoing=!0,r),K(ee,r.item.data={...c,slot:o,type:"eq"},r))},y=C=>{C.relatedTarget==null&&t(5,d=!0)},w=()=>{setTimeout(()=>Hv(a))};function k(C){fe[C?"unshift":"push"](()=>{a=C,t(3,a)})}const I=()=>{r.screenshot.ongoing||t(4,u=!u)},M=()=>{t(5,d=!1),l.classList.contains("clearAllowed")&&p.querySelector("button").click()};function W(C){u=C,t(4,u)}function O(C){f=C,t(6,f)}const L=C=>{setTimeout(()=>{t(7,p=C.detail.classList.contains("selectedItem")?C.detail:null),t(6,f=!1)})};function U(C){fe[C?"unshift":"push"](()=>{l=C,t(2,l)})}const Y=()=>t(5,d=!0),T=()=>{l.contains(document.activeElement)||t(5,d=!1)};return n.$$set=C=>{"eqSlotName"in C&&t(0,o=C.eqSlotName)},n.$$.update=()=>{n.$$.dirty&1027&&i[o]&&i[o].name!=c.name&&t(1,c=i[o])},[o,c,l,a,u,d,f,p,s,r,i,_,b,v,y,w,k,I,M,W,O,L,U,Y,T]}class _y extends Se{constructor(e){super(),Ie(this,e,py,hy,ge,{eqSlotName:0})}}function ya(n,e,t){const i=n.slice();return i[1]=e[t],i[2]=e,i[3]=t,i}function wa(n){let e,t,i;function s(o){n[0](o,n[1],n[2],n[3])}let r={};return n[1]!==void 0&&(r.eqSlotName=n[1]),e=new _y({props:r}),fe.push(()=>Me(e,"eqSlotName",s)),{c(){le(e.$$.fragment)},m(o,l){se(e,o,l),i=!0},p(o,l){n=o;const a={};!t&&l&0&&(t=!0,a.eqSlotName=n[1],Pe(()=>t=!1)),e.$set(a)},i(o){i||(B(e.$$.fragment,o),i=!0)},o(o){q(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function my(n){let e,t,i=Ae(Array(...ii)),s=[];for(let o=0;o<i.length;o+=1)s[o]=wa(ya(n,i,o));const r=o=>q(s[o],1,1,()=>{s[o]=null});return{c(){e=g("div");for(let o=0;o<s.length;o+=1)s[o].c();m(e,"class","armorBox svelte-16092aw")},m(o,l){P(o,e,l);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);t=!0},p(o,[l]){if(l&0){i=Ae(Array(...ii));let a;for(a=0;a<i.length;a+=1){const c=ya(o,i,a);s[a]?(s[a].p(c,l),B(s[a],1)):(s[a]=wa(c),s[a].c(),B(s[a],1),s[a].m(e,null))}for(Be(),a=i.length;a<s.length;a+=1)r(a);Ue()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)B(s[l]);t=!0}},o(o){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)q(s[l]);t=!1},d(o){o&&N(e),st(s,o)}}}function gy(n,e,t){function i(s,r,o,l){o[l]=s}return[i]}class by extends Se{constructor(e){super(),Ie(this,e,gy,my,ge,{})}}function vy(n){let e,t=(n[3]?`${Math.floor(n[5]*.675+19.8)}% Reduction`:n[5])+"",i,s,r;return{c(){e=g("span"),i=ie(t),m(e,"class","statValue svelte-78f402"),m(e,"tabindex","0"),ue(e,"hidden",n[2]),ue(e,"negative",n[5]<0),ue(e,"zero",n[5]==0),ue(e,"reduction",n[3])},m(o,l){P(o,e,l),h(e,i),s||(r=[R(e,"mouseenter",n[11]),R(e,"mouseleave",n[12]),R(e,"focusin",n[13]),R(e,"focusout",n[14])],s=!0)},p(o,l){l&40&&t!==(t=(o[3]?`${Math.floor(o[5]*.675+19.8)}% Reduction`:o[5])+"")&&Ee(i,t),l&4&&ue(e,"hidden",o[2]),l&32&&ue(e,"negative",o[5]<0),l&32&&ue(e,"zero",o[5]==0),l&8&&ue(e,"reduction",o[3])},d(o){o&&N(e),s=!1,ve(r)}}}function yy(n){let e,t=(n[0]!="endurance"?n[5]:n[5].toFixed(2))+"",i;return{c(){e=g("span"),i=ie(t),m(e,"class","statValue svelte-78f402"),ue(e,"hidden",n[2]),ue(e,"negative",n[5]<0),ue(e,"zero",n[5]==0)},m(s,r){P(s,e,r),h(e,i)},p(s,r){r&33&&t!==(t=(s[0]!="endurance"?s[5]:s[5].toFixed(2))+"")&&Ee(i,t),r&4&&ue(e,"hidden",s[2]),r&32&&ue(e,"negative",s[5]<0),r&32&&ue(e,"zero",s[5]==0)},d(s){s&&N(e)}}}function wy(n){let e;return{c(){e=g("iconify-icon"),Re(e,"icon","codicon:sparkle-filled"),Re(e,"class","svelte-78f402")},m(t,i){P(t,e,i)},p:$,d(t){t&&N(e)}}}function ky(n){let e,t=`${n[1]} Bonus`,i;return{c(){e=g("span"),i=ie(t),m(e,"class","statName svelte-78f402")},m(s,r){P(s,e,r),h(e,i)},p(s,r){r&2&&t!==(t=`${s[1]} Bonus`)&&Ee(i,t)},d(s){s&&N(e)}}}function Cy(n){let e,t,i,s,r,o,l;function a(_,b){return _[0]!="armor"?yy:vy}let c=a(n),u=c(n);function d(_,b){if(_[2])return ky;if(_[4])return wy}let f=d(n),p=f&&f(n);return{c(){e=g("div"),t=g("img"),s=E(),u.c(),r=E(),p&&p.c(),Qe(t.src,i="stats/"+n[0]+".svg")||m(t,"src",i),m(t,"alt",n[1]),m(t,"class","svelte-78f402"),m(e,"id",n[0]),m(e,"class","svelte-78f402"),ue(e,"hidden",n[5]==0)},m(_,b){P(_,e,b),h(e,t),h(e,s),u.m(e,null),h(e,r),p&&p.m(e,null),o||(l=[R(t,"mouseenter",n[9]),R(t,"mouseleave",n[10])],o=!0)},p(_,[b]){b&1&&!Qe(t.src,i="stats/"+_[0]+".svg")&&m(t,"src",i),b&2&&m(t,"alt",_[1]),c===(c=a(_))&&u?u.p(_,b):(u.d(1),u=c(_),u&&(u.c(),u.m(e,r))),f===(f=d(_))&&p?p.p(_,b):(p&&p.d(1),p=f&&f(_),p&&(p.c(),p.m(e,null))),b&1&&m(e,"id",_[0]),b&32&&ue(e,"hidden",_[5]==0)},i:$,o:$,d(_){_&&N(e),u.d(),p&&p.d(),o=!1,ve(l)}}}function Ey(n,e,t){let i,s,r,o;V(n,Ut,w=>t(6,s=w)),V(n,Vn,w=>t(7,r=w)),V(n,ft,w=>t(8,o=w));let{codeName:l,formalName:a}=e,c,u,d=!1;const f=()=>t(2,c=!0),p=()=>t(2,c=!1),_=()=>t(3,u=!0),b=()=>t(3,u=!1),v=()=>t(3,u=!0),y=()=>t(3,u=!1);return n.$$set=w=>{"codeName"in w&&t(0,l=w.codeName),"formalName"in w&&t(1,a=w.formalName)},n.$$.update=()=>{if(n.$$.dirty&257&&t(5,i=o[l]),n.$$.dirty&193)for(let w in r)if(r[w]&&s.bonuses.find(k=>k.name==w).stats[l]!=0){t(4,d=!0);break}else t(4,d=!1)},[l,a,c,u,d,i,s,r,o,f,p,_,b,v,y]}class Iy extends Se{constructor(e){super(),Ie(this,e,Ey,Cy,ge,{codeName:0,formalName:1})}}function ka(n,e,t){const i=n.slice();return i[8]=e[t][0],i[9]=e[t][1],i[10]=e,i[11]=t,i}function Ca(n){let e,t,i,s;function r(a){n[4](a,n[8],n[10],n[11])}function o(a){n[5](a,n[9],n[10],n[11])}let l={};return n[8]!==void 0&&(l.codeName=n[8]),n[9]!==void 0&&(l.formalName=n[9]),e=new Iy({props:l}),fe.push(()=>Me(e,"codeName",r)),fe.push(()=>Me(e,"formalName",o)),{c(){le(e.$$.fragment)},m(a,c){se(e,a,c),s=!0},p(a,c){n=a;const u={};!t&&c&0&&(t=!0,u.codeName=n[8],Pe(()=>t=!1)),!i&&c&0&&(i=!0,u.formalName=n[9],Pe(()=>i=!1)),e.$set(u)},i(a){s||(B(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function Ea(n){let e,t,i,s,r=n[2]?"Copied!":`Copy ${n[1]?"all":""} as text`,o,l,a,c,u;return{c(){e=g("button"),t=g("iconify-icon"),i=E(),s=g("span"),o=ie(r),Re(t,"icon","ic:round-content-copy"),Re(t,"class","svelte-cimkzy"),m(s,"class","tooltip"),m(s,"id","top"),m(e,"class","copyStatsButton svelte-cimkzy")},m(d,f){P(d,e,f),h(e,t),h(e,i),h(e,s),h(s,o),a=!0,c||(u=R(e,"click",n[6]),c=!0)},p(d,f){(!a||f&6)&&r!==(r=d[2]?"Copied!":`Copy ${d[1]?"all":""} as text`)&&Ee(o,r)},i(d){a||(d&&Ce(()=>{a&&(l||(l=me(e,Ke,{duration:100},!0)),l.run(1))}),a=!0)},o(d){d&&(l||(l=me(e,Ke,{duration:100},!1)),l.run(0)),a=!1},d(d){d&&N(e),d&&l&&l.end(),c=!1,u()}}}function Sy(n){let e;return{c(){e=g("span"),e.textContent="Show all stats",m(e,"slot","tooltip"),m(e,"class","tooltip"),m(e,"id","top")},m(t,i){P(t,e,i)},p:$,d(t){t&&N(e)}}}function Ty(n){let e,t,i,s,r,o=Ae(Object.entries(Rt)),l=[];for(let u=0;u<o.length;u+=1)l[u]=Ca(ka(n,o,u));const a=u=>q(l[u],1,1,()=>{l[u]=null});let c=n[3]&&Ea(n);return s=new lt({props:{text:"",$$slots:{tooltip:[Sy]},$$scope:{ctx:n}}}),s.$on("toggle",n[7]),{c(){e=g("div");for(let u=0;u<l.length;u+=1)l[u].c();t=E(),c&&c.c(),i=E(),le(s.$$.fragment),m(e,"class","statBox svelte-cimkzy"),ue(e,"showAll",n[1])},m(u,d){P(u,e,d);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null);h(e,t),c&&c.m(e,null),h(e,i),se(s,e,null),r=!0},p(u,[d]){if(d&0){o=Ae(Object.entries(Rt));let p;for(p=0;p<o.length;p+=1){const _=ka(u,o,p);l[p]?(l[p].p(_,d),B(l[p],1)):(l[p]=Ca(_),l[p].c(),B(l[p],1),l[p].m(e,t))}for(Be(),p=o.length;p<l.length;p+=1)a(p);Ue()}u[3]?c?(c.p(u,d),d&8&&B(c,1)):(c=Ea(u),c.c(),B(c,1),c.m(e,i)):c&&(Be(),q(c,1,1,()=>{c=null}),Ue());const f={};d&4096&&(f.$$scope={dirty:d,ctx:u}),s.$set(f),(!r||d&2)&&ue(e,"showAll",u[1])},i(u){if(!r){for(let d=0;d<o.length;d+=1)B(l[d]);B(c),B(s.$$.fragment,u),r=!0}},o(u){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)q(l[d]);q(c),q(s.$$.fragment,u),r=!1},d(u){u&&N(e),st(l,u),c&&c.d(),re(s)}}}function Ny(n,e,t){let i;V(n,ft,d=>t(0,i=d));let s=!1,r=!1,o=!1;function l(d,f,p,_){p[_][0]=d}function a(d,f,p,_){p[_][1]=d}const c=d=>{if(Vt(d),r)return;let f="";for(let[p,_]of Object.entries(Rt)){let b=p=="armor"?"":`
`,v=i[p];p=="armor"?v+=` (${Math.floor(v*.675+19.8)}% Reduction)`:p=="endurance"?v=v.toFixed(2)+"%":p=="ammoReturn"&&(v+="%"),(s||!s&&i[p])&&(f+=`${b}${_}: ${v}`)}navigator.clipboard.writeText(f),t(2,r=!0),setTimeout(()=>t(2,r=!1),1e3)},u=d=>t(1,s=d.detail);return n.$$.update=()=>{if(n.$$.dirty&1&&i){t(3,o=!1);for(let d in i)if(i[d]){t(3,o=!0);break}}},[i,s,r,o,l,a,c,u]}class Oy extends Se{constructor(e){super(),Ie(this,e,Ny,Ty,ge,{})}}function Ry(n){let e,t,i,s,r,o,l,a,c,u;return{c(){e=g("div"),t=g("button"),t.textContent="-",i=E(),s=g("input"),r=E(),o=g("b"),o.textContent="%",l=E(),a=g("button"),a.textContent="+",m(t,"id","decrease"),m(t,"class","svelte-f5qib2"),m(s,"type","number"),m(s,"placeholder","0"),m(s,"class","svelte-f5qib2"),m(o,"class","svelte-f5qib2"),m(a,"id","increase"),m(a,"class","svelte-f5qib2"),m(e,"class","svelte-f5qib2"),ue(e,"non-percent",!n[1])},m(d,f){P(d,e,f),h(e,t),h(e,i),h(e,s),Dt(s,n[0]),h(e,r),h(e,o),h(e,l),h(e,a),c||(u=[R(t,"click",n[4]),R(s,"input",n[5]),R(s,"input",n[2]),R(a,"click",n[6])],c=!0)},p(d,[f]){f&1&&qc(s.value)!==d[0]&&Dt(s,d[0])},i:$,o:$,d(d){d&&N(e),c=!1,ve(u)}}}function Ay(n,e,t){let{weaponName:i,value:s}=e,r=i!="Nature's Wrath Spellbook",o;r?(s=100,o=100):(s=4,o=4);function l(){s<0?t(0,s=0):s>o&&t(0,s=o),s%1!=0&&t(0,s=Math.floor(s))}const a=()=>{t(0,s--,s),l()};function c(){s=qc(this.value),t(0,s)}const u=()=>{t(0,s++,s),l()};return n.$$set=d=>{"weaponName"in d&&t(3,i=d.weaponName),"value"in d&&t(0,s=d.value)},[s,r,l,i,a,c,u]}class Dy extends Se{constructor(e){super(),Ie(this,e,Ay,Ry,ge,{weaponName:3,value:0})}}function Ia(n,e,t){const i=n.slice();i[53]=e[t];const s=i[53].name.includes("Fantastic Beamstorm")?"~":"";i[23]=s;const r=i[24].includes(i[53].name);return i[54]=r,i}function Py(n){let e,t,i=n[2].description+"",s,r;return{c(){e=g("span"),t=ie('"'),s=ie(i),r=ie('"'),m(e,"id","toolDesc"),m(e,"class","svelte-12jhw87")},m(o,l){P(o,e,l),h(e,t),h(e,s),h(e,r)},p(o,l){l[0]&4&&i!==(i=o[2].description+"")&&Ee(s,i)},d(o){o&&N(e)}}}function My(n){let e,t,i,s=`${n[5]?"Type":n[3].name}:`,r,o,l=n[20],a,c,u,d,f,p=n[5]?"Return":"Expand",_,b,v,y,w=Ta(n),k=n[4]&&Na(n);return{c(){e=g("button"),t=g("div"),i=g("span"),r=ie(s),o=E(),w.c(),c=E(),k&&k.c(),u=E(),d=g("span"),f=ie("("),_=ie(p),b=ie(")"),m(i,"class","svelte-12jhw87"),ze(i,"font-size",Object.keys(n[21]).includes(n[3].name)?`calc(1rem * ${n[21][n[3].name]})`:""),m(t,"id",a=n[5]?"":"basic"),m(t,"class","svelte-12jhw87"),m(d,"class","tooltip svelte-12jhw87"),m(d,"id","top"),m(e,"class","gearPreview svelte-12jhw87"),ze(e,"line-height",`${n[10]/6.5}px`)},m(I,M){P(I,e,M),h(e,t),h(t,i),h(i,r),h(t,o),w.m(t,null),h(e,c),k&&k.m(e,null),h(e,u),h(e,d),h(d,f),h(d,_),h(d,b),n[36](e),v||(y=R(e,"click",n[37]),v=!0)},p(I,M){M[0]&40&&s!==(s=`${I[5]?"Type":I[3].name}:`)&&Ee(r,s),M[0]&2097160&&ze(i,"font-size",Object.keys(I[21]).includes(I[3].name)?`calc(1rem * ${I[21][I[3].name]})`:""),M[0]&1048576&&ge(l,l=I[20])?(w.d(1),w=Ta(I),w.c(),w.m(t,null)):w.p(I,M),M[0]&32&&a!==(a=I[5]?"":"basic")&&m(t,"id",a),I[4]?k?k.p(I,M):(k=Na(I),k.c(),k.m(e,u)):k&&(k.d(1),k=null),M[0]&32&&p!==(p=I[5]?"Return":"Expand")&&Ee(_,p),M[0]&1024&&ze(e,"line-height",`${I[10]/6.5}px`)},d(I){I&&N(e),w.d(I),k&&k.d(),n[36](null),v=!1,y()}}}function Sa(n){let e;return{c(){e=g("iconify-icon"),Re(e,"icon","codicon:sparkle-filled"),Re(e,"class","svelte-12jhw87")},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function Ta(n){let e,t,i=(n[5]?n[2].info.type.replace("/","<b>,</b><br/>"):n[26](n[3]))+"",s,r=!n[5]&&n[6].basic&&Sa();return{c(){e=g("span"),t=new jc(!1),s=E(),r&&r.c(),t.a=s,m(e,"class","svelte-12jhw87")},m(o,l){P(o,e,l),t.m(i,e),h(e,s),r&&r.m(e,null)},p(o,l){l[0]&44&&i!==(i=(o[5]?o[2].info.type.replace("/","<b>,</b><br/>"):o[26](o[3]))+"")&&t.p(i),!o[5]&&o[6].basic?r||(r=Sa(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&N(e),r&&r.d()}}}function Na(n){let e,t,i,s=`${n[5]?"Special":n[4].name.split(" (")[0]}:`,r,o,l,a=n[20],c,u=!n[5]&&Oa(n),d=Da(n);return{c(){e=g("div"),t=g("span"),i=g("span"),r=ie(s),o=E(),u&&u.c(),l=E(),d.c(),m(i,"class","svelte-12jhw87"),m(t,"class","svelte-12jhw87"),ze(t,"font-size",Object.keys(n[21]).includes(n[4].name)?`calc(1rem * ${n[21][n[4].name]})`:""),m(e,"id",c=n[5]?"":"special"),m(e,"class","svelte-12jhw87")},m(f,p){P(f,e,p),h(e,t),h(t,i),h(i,r),h(t,o),u&&u.m(t,null),h(e,l),d.m(e,null)},p(f,p){p[0]&48&&s!==(s=`${f[5]?"Special":f[4].name.split(" (")[0]}:`)&&Ee(r,s),f[5]?u&&(u.d(1),u=null):u?u.p(f,p):(u=Oa(f),u.c(),u.m(t,null)),p[0]&2097168&&ze(t,"font-size",Object.keys(f[21]).includes(f[4].name)?`calc(1rem * ${f[21][f[4].name]})`:""),p[0]&1048576&&ge(a,a=f[20])?(d.d(1),d=Da(f),d.c(),d.m(e,null)):d.p(f,p),p[0]&32&&c!==(c=f[5]?"":"special")&&m(e,"id",c)},d(f){f&&N(e),u&&u.d(),d.d(f)}}}function Oa(n){let e,t,i=n[4].cd+"",s,r;return{c(){e=g("span"),t=ie("("),s=ie(i),r=ie("s cd.)"),m(e,"id","cd"),m(e,"class","svelte-12jhw87")},m(o,l){P(o,e,l),h(e,t),h(e,s),h(e,r)},p(o,l){l[0]&16&&i!==(i=o[4].cd+"")&&Ee(s,i)},d(o){o&&N(e)}}}function Ra(n){let e,t;return{c(){e=g("span"),t=ie(n[23]),m(e,"id","prefix"),m(e,"class","svelte-12jhw87")},m(i,s){P(i,e,s),h(e,t)},p(i,s){s[0]&8388608&&Ee(t,i[23])},d(i){i&&N(e)}}}function Aa(n){let e;return{c(){e=g("iconify-icon"),Re(e,"icon","codicon:sparkle-filled"),Re(e,"class","svelte-12jhw87")},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function Da(n){let e,t,i=(n[5]?n[2].info.special:n[26](n[4]))+"",s,r,o=n[23]&&!n[5]&&Ra(n),l=!n[5]&&n[6].special&&Aa();return{c(){e=g("span"),o&&o.c(),t=E(),s=ie(i),r=E(),l&&l.c(),m(e,"class","svelte-12jhw87")},m(a,c){P(a,e,c),o&&o.m(e,null),h(e,t),h(e,s),h(e,r),l&&l.m(e,null)},p(a,c){a[23]&&!a[5]?o?o.p(a,c):(o=Ra(a),o.c(),o.m(e,t)):o&&(o.d(1),o=null),c[0]&52&&i!==(i=(a[5]?a[2].info.special:a[26](a[4]))+"")&&Ee(s,i),!a[5]&&a[6].special?l||(l=Aa(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(a){a&&N(e),o&&o.d(),l&&l.d()}}}function Pa(n){let e,t,i,s,r,o,l=n[2].name+"",a,c,u,d,f,p;return{c(){e=g("button"),t=g("img"),r=E(),o=g("span"),a=ie(l),Qe(t.src,i=n[2].image)||m(t,"src",i),m(t,"alt",s=n[2].name),m(t,"draggable","false"),m(t,"class","svelte-12jhw87"),m(o,"class","tooltip svelte-12jhw87"),m(o,"id",c=n[19].screenshot.ongoing?"right":"top"),m(e,"class","svelte-12jhw87"),ze(e,"display",n[2].link?"":"none"),ze(e,"border-radius",n[2].tool?"calc(1rem)":"")},m(_,b){P(_,e,b),h(e,t),h(e,r),h(e,o),h(o,a),d=!0,f||(p=R(e,"click",n[38]),f=!0)},p(_,b){(!d||b[0]&4&&!Qe(t.src,i=_[2].image))&&m(t,"src",i),(!d||b[0]&4&&s!==(s=_[2].name))&&m(t,"alt",s),(!d||b[0]&4)&&l!==(l=_[2].name+"")&&Ee(a,l),(!d||b[0]&524288&&c!==(c=_[19].screenshot.ongoing?"right":"top"))&&m(o,"id",c),b[0]&4&&ze(e,"display",_[2].link?"":"none"),b[0]&4&&ze(e,"border-radius",_[2].tool?"calc(1rem)":"")},i(_){d||(_&&Ce(()=>{d&&(u||(u=me(e,Ke,{duration:150},!0)),u.run(1))}),d=!0)},o(_){_&&(u||(u=me(e,Ke,{duration:150},!1)),u.run(0)),d=!1},d(_){_&&N(e),_&&u&&u.end(),f=!1,p()}}}function Ma(n){let e,t,i,s,r,o,l,a,c,u;i=new lt({props:{text:"Toggle base values",checked:n[16]}}),i.$on("toggle",n[47]),r=new lt({props:{text:"Eyeball of Reckoning buff",checked:n[17]}}),r.$on("toggle",n[48]);let d=Ae(n[2].moves),f=[];for(let _=0;_<d.length;_+=1)f[_]=Wa(Ia(n,d,_));const p=_=>q(f[_],1,1,()=>{f[_]=null});return{c(){e=g("div"),t=g("div"),le(i.$$.fragment),s=E(),le(r.$$.fragment),o=E(),l=g("div");for(let _=0;_<f.length;_+=1)f[_].c();m(t,"class","weaponToggles svelte-12jhw87"),m(l,"class","weaponMoves svelte-12jhw87"),m(e,"class","fullWeaponView svelte-12jhw87")},m(_,b){P(_,e,b),h(e,t),se(i,t,null),h(t,s),se(r,t,null),h(e,o),h(e,l);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(l,null);u=!0},p(_,b){const v={};b[0]&65536&&(v.checked=_[16]),i.$set(v);const y={};if(b[0]&131072&&(y.checked=_[17]),r.$set(y),b[0]&219611268){d=Ae(_[2].moves);let w;for(w=0;w<d.length;w+=1){const k=Ia(_,d,w);f[w]?(f[w].p(k,b),B(f[w],1)):(f[w]=Wa(k),f[w].c(),B(f[w],1),f[w].m(l,null))}for(Be(),w=d.length;w<f.length;w+=1)p(w);Ue()}},i(_){if(!u){B(i.$$.fragment,_),B(r.$$.fragment,_);for(let b=0;b<d.length;b+=1)B(f[b]);_&&Ce(()=>{u&&(c&&c.end(1),a=Kr(e,Ke,{duration:150,delay:300}),a.start())}),u=!0}},o(_){q(i.$$.fragment,_),q(r.$$.fragment,_),f=f.filter(Boolean);for(let b=0;b<f.length;b+=1)q(f[b]);a&&a.invalidate(),_&&(c=Yr(e,Ke,{duration:150})),u=!1},d(_){_&&N(e),re(i),re(r),st(f,_),_&&c&&c.end()}}}function La(n){let e,t,i,s;function r(a){n[49](a)}function o(a){n[50](a)}let l={};return n[7]!==void 0&&(l.value=n[7]),n[2].name!==void 0&&(l.weaponName=n[2].name),e=new Dy({props:l}),fe.push(()=>Me(e,"value",r)),fe.push(()=>Me(e,"weaponName",o)),{c(){le(e.$$.fragment)},m(a,c){se(e,a,c),s=!0},p(a,c){const u={};!t&&c[0]&128&&(t=!0,u.value=a[7],Pe(()=>t=!1)),!i&&c[0]&4&&(i=!0,u.weaponName=a[2].name,Pe(()=>i=!1)),e.$set(u)},i(a){s||(B(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function Fa(n){let e,t,i=n[53].cd+"",s,r;return{c(){e=g("span"),t=ie("("),s=ie(i),r=ie("s cd.)"),m(e,"id","cd"),m(e,"class","svelte-12jhw87")},m(o,l){P(o,e,l),h(e,t),h(e,s),h(e,r)},p(o,l){l[0]&4&&i!==(i=o[53].cd+"")&&Ee(s,i)},d(o){o&&N(e)}}}function Ba(n){let e;return{c(){e=g("iconify-icon"),Re(e,"icon","codicon:sparkle-filled"),Re(e,"class","svelte-12jhw87")},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function Ua(n){let e,t=n[23]+(n[16]&&!n[54]?n[53].base:n[54]?n[27](n[53]):n[26](n[53]))+"",i,s,r=n[18][n[53].name]&&!n[16]&&Ba();return{c(){e=g("span"),i=ie(t),s=E(),r&&r.c(),m(e,"class","svelte-12jhw87")},m(o,l){P(o,e,l),h(e,i),h(e,s),r&&r.m(e,null)},p(o,l){l[0]&65540&&t!==(t=o[23]+(o[16]&&!o[54]?o[53].base:o[54]?o[27](o[53]):o[26](o[53]))+"")&&Ee(i,t),o[18][o[53].name]&&!o[16]?r||(r=Ba(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&N(e),r&&r.d()}}}function Wa(n){let e,t,i,s,r,o=(n[54]&&n[2].name=="Nature's Wrath Spellbook"?n[53].name.replace("Charged","Charge(s)"):n[53].name)+":",l,a,c,u=n[54]?[n[20],n[7],n[17]]:[n[20],n[17]],d,f,p=n[54]&&La(n),_=n[53].special&&Fa(n),b=Ua(n);return{c(){e=g("div"),t=g("div"),i=g("span"),s=g("span"),p&&p.c(),r=E(),l=ie(o),a=E(),_&&_.c(),c=E(),b.c(),d=E(),m(s,"class","flex fd-col svelte-12jhw87"),m(i,"class","flex fd-col ai-center svelte-12jhw87"),m(t,"class","ff-border svelte-12jhw87"),m(e,"class","svelte-12jhw87")},m(v,y){P(v,e,y),h(e,t),h(t,i),h(i,s),p&&p.m(s,null),h(s,r),h(s,l),h(i,a),_&&_.m(i,null),h(t,c),b.m(t,null),h(e,d),f=!0},p(v,y){v[54]?p?(p.p(v,y),y[0]&4&&B(p,1)):(p=La(v),p.c(),B(p,1),p.m(s,r)):p&&(Be(),q(p,1,1,()=>{p=null}),Ue()),(!f||y[0]&4)&&o!==(o=(v[54]&&v[2].name=="Nature's Wrath Spellbook"?v[53].name.replace("Charged","Charge(s)"):v[53].name)+":")&&Ee(l,o),v[53].special?_?_.p(v,y):(_=Fa(v),_.c(),_.m(i,null)):_&&(_.d(1),_=null),y[0]&1179780&&ge(u,u=v[54]?[v[20],v[7],v[17]]:[v[20],v[17]])?(b.d(1),b=Ua(v),b.c(),b.m(t,null)):b.p(v,y)},i(v){f||(B(p),f=!0)},o(v){q(p),f=!1},d(v){v&&N(e),p&&p.d(),_&&_.d(),b.d(v)}}}function Ly(n){let e,t,i,s,r="Gear"+(n[19].screenshot.ongoing?":":""),o,l,a,c,u,d=n[2],f,p,_,b,v,y,w,k,I,M,W,O;function L(A,G){if(A[2].name&&!A[2].tool)return My;if(A[2].tool)return Py}let U=L(n),Y=U&&U(n),T=Pa(n);function C(A){n[42](A)}function H(A){n[43](A)}function z(A){n[44](A)}let j={slotName:n[0],index:n[1]};n[14]!==void 0&&(j.slotOpen=n[14]),n[5]!==void 0&&(j.weaponExpand=n[5]),n[15]!==void 0&&(j.optionsOpen=n[15]),b=new Jo({props:j}),fe.push(()=>Me(b,"slotOpen",C)),fe.push(()=>Me(b,"weaponExpand",H)),fe.push(()=>Me(b,"optionsOpen",z)),b.$on("itemSelect",n[45]),b.$on("toolSelect",n[28]);let S=n[5]&&Ma(n);return{c(){e=g("div"),t=g("button"),i=g("iconify-icon"),s=E(),o=ie(r),l=E(),a=g("div"),Y&&Y.c(),c=E(),u=g("div"),T.c(),_=E(),le(b.$$.fragment),k=E(),S&&S.c(),I=nt(),Re(i,"icon","iconamoon:arrow-down-2-fill"),Re(i,"class","svelte-12jhw87"),m(t,"class","ddButton svelte-12jhw87"),m(u,"class","gearSlotIcon svelte-12jhw87"),Ce(()=>n[39].call(u)),ze(u,"min-width",`${n[11]}px`),m(a,"class","gearInfoCont ff-border svelte-12jhw87"),Ce(()=>n[41].call(a)),ze(a,"justify-content",n[2].name?"":"flex-end"),m(e,"class","gearSlot svelte-12jhw87"),ue(e,"slotOpen",n[14]),ue(e,"weapon-expand",n[5])},m(A,G){P(A,e,G),h(e,t),h(t,i),h(t,s),h(t,o),n[34](t),h(e,l),h(e,a),Y&&Y.m(a,null),h(a,c),h(a,u),T.m(u,null),f=fn(u,n[39].bind(u)),n[40](a),p=fn(a,n[41].bind(a)),h(e,_),se(b,e,null),n[46](e),P(A,k,G),S&&S.m(A,G),P(A,I,G),M=!0,W||(O=[R(window,"mousedown",n[32]),R(window,"keydown",n[33]),R(t,"click",n[35])],W=!0)},p(A,G){(!M||G[0]&524288)&&r!==(r="Gear"+(A[19].screenshot.ongoing?":":""))&&Ee(o,r),U===(U=L(A))&&Y?Y.p(A,G):(Y&&Y.d(1),Y=U&&U(A),Y&&(Y.c(),Y.m(a,c))),G[0]&4&&ge(d,d=A[2])?(Be(),q(T,1,1,$),Ue(),T=Pa(A),T.c(),B(T,1),T.m(u,null)):T.p(A,G),G[0]&2048&&ze(u,"min-width",`${A[11]}px`),G[0]&4&&ze(a,"justify-content",A[2].name?"":"flex-end");const Q={};G[0]&1&&(Q.slotName=A[0]),G[0]&2&&(Q.index=A[1]),!v&&G[0]&16384&&(v=!0,Q.slotOpen=A[14],Pe(()=>v=!1)),!y&&G[0]&32&&(y=!0,Q.weaponExpand=A[5],Pe(()=>y=!1)),!w&&G[0]&32768&&(w=!0,Q.optionsOpen=A[15],Pe(()=>w=!1)),b.$set(Q),(!M||G[0]&16384)&&ue(e,"slotOpen",A[14]),(!M||G[0]&32)&&ue(e,"weapon-expand",A[5]),A[5]?S?(S.p(A,G),G[0]&32&&B(S,1)):(S=Ma(A),S.c(),B(S,1),S.m(I.parentNode,I)):S&&(Be(),q(S,1,1,()=>{S=null}),Ue())},i(A){M||(B(T),B(b.$$.fragment,A),B(S),M=!0)},o(A){q(T),q(b.$$.fragment,A),q(S),M=!1},d(A){A&&(N(e),N(k),N(I)),n[34](null),Y&&Y.d(),T.d(A),f(),n[40](null),p(),re(b),n[46](null),S&&S.d(A),W=!1,ve(O)}}}function Fy(n,e,t){let i,s,r,o,l,a,c;V(n,Vn,X=>t(30,i=X)),V(n,Ft,X=>t(31,s=X)),V(n,Ut,X=>t(51,r=X)),V(n,ee,X=>t(19,o=X)),V(n,ft,X=>t(20,l=X)),V(n,rr,X=>t(21,a=X)),V(n,Nn,X=>t(22,c=X));let{gearBox:u,slotName:d,index:f}=e,p,_,b,v,y,w,k,I=Ko,M,W,O,L,U,Y=!1,T=!1,C="",H=["Charged Basic Attack","Charged Solar Beam"],z={basic:!1,special:!1},j={};function S(){if(k)for(let X of k.querySelectorAll(".gearPreview > div")){if(Object.keys(a).includes(X.id=="basic"?M.name:W?W.name:null))return;let qe=Wv(X,c);qe&&(X.id=="basic"?K(rr,a[M.name]=qe,a):K(rr,a[W.name]=qe,a))}}function A(X){let qe;if(X.name=="Void Needle")qe=X.base+l[X.type]-l.armor*5.625;else if(I.name=="Pureblood Dagger"){let dt,wt={magicDmg:l.magicDmg,meleeDmg:l.meleeDmg,rangedDmg:l.rangedDmg},bt=Object.keys(wt).reduce((vn,es)=>wt[vn]>wt[es]?vn:es),Ht=0;for(let vn in wt)vn!=bt&&(Ht+=wt[vn]);dt=l[bt]*2-Ht,qe=X.base+(X.name.includes("HP")?dt/2:dt)}else if(X.type.includes("/")){let dt=X.type.split("/"),wt=0;for(let bt of dt)wt+=l[bt]*X[`${bt}Mult`];qe=X.base+wt}else qe=X.base+l[X.type]*X.mult;return T&&(!X.name.includes("HP")||X.name.includes("HP")&&I.name=="Pureblood Dagger")&&(qe+=qe*.08775),U?Math.floor(qe*10)/10:Math.floor(qe)}function G(X){let qe,dt=Y?0:l[X.type];return I.name=="Celestial Powers Spellbook"?qe=(80+dt*1.1)*(.8+2.2*p/100):I.name=="Staff of Dreams"?qe=160+160*p/100+dt*(.4+1.3*p/100):I.name=="Nature's Wrath Spellbook"&&(qe=260+400*p/4+dt*(1+1.5*p/4)),T&&(qe+=qe*.08775),Math.floor(qe*10)/10}function Q(){o.screenshot.ongoing||(t(16,Y=!1),t(17,T=!1),U?(t(5,U=!1),u.classList.remove("weapon-expand"),setTimeout(S)):(u.classList.add("weapon-expand"),t(5,U=!0)))}function J(X,qe){e:for(let dt in i){let wt=r.bonuses.find(Ht=>Ht.name==dt).stats,bt=X?X.type:null;for(let Ht in Rt){if(bt===null)break e;if(I.name=="Void Spike Ultradagger"&&qe=="special"||X.name=="Void Needle"?bt="armor/meleeDmg":I.name=="Pureblood Dagger"?bt=dt=="Fish of Rage"?"":"magicDmg/meleeDmg/rangedDmg":I.name=="Gnome Rocket Launcher"&&(bt=""),i[dt]&&wt[Ht]!=0&&bt.includes(Ht)){t(18,j[X.name]=!0,j),qe&&t(6,z[qe]=!0,z);break e}else t(18,j[X.name]=!1,j),qe&&t(6,z[qe]=!1,z)}}}const oe=X=>{(!_.contains(X.target)&&!c||_.contains(X.target)&&b.contains(X.target))&&(t(14,O=!1),t(15,L=!1))},ae=X=>{X.key=="Escape"&&(t(14,O=!1),t(15,L=!1))};function he(X){fe[X?"unshift":"push"](()=>{w=X,t(12,w)})}const F=()=>{o.screenshot.ongoing||t(14,O=!O)};function D(X){fe[X?"unshift":"push"](()=>{k=X,t(13,k)})}const ce=X=>{Vt(X),Q()},de=()=>{c||(K(ee,o.item.ongoing=!0,o),K(ee,o.item.data={...I,type:"gear"},o))};function ye(){y=this.offsetHeight,t(11,y)}function $e(X){fe[X?"unshift":"push"](()=>{b=X,t(9,b)})}function De(){v=this.offsetHeight,t(10,v)}function Z(X){O=X,t(14,O)}function ke(X){U=X,t(5,U)}function _e(X){L=X,t(15,L)}const We=()=>{setTimeout(()=>{S(),(!I.name||I.tool)&&U&&Q(),t(15,L=!1)})};function rt(X){fe[X?"unshift":"push"](()=>{_=X,t(8,_)})}const x=X=>{t(16,Y=X.detail),X.detail&&t(17,T=!1)},yt=X=>{t(17,T=X.detail),X.detail&&t(16,Y=!1)};function pe(X){p=X,t(7,p)}function di(X){n.$$.not_equal(I.name,X)&&(I.name=X,t(2,I),t(31,s),t(1,f),t(4,W))}return n.$$set=X=>{"gearBox"in X&&t(29,u=X.gearBox),"slotName"in X&&t(0,d=X.slotName),"index"in X&&t(1,f=X.index)},n.$$.update=()=>{if(n.$$.dirty[0]&22|n.$$.dirty[1]&1&&s[f]&&s[f].name!=I.name&&(t(2,I=s[f]),!I.tool&&I.name)){t(3,M=I.moves.filter(X=>X.basic)[0]),t(4,W=I.moves.filter(X=>X.special)[0]),t(18,j={});for(let X of I.moves)t(18,j[X.name]=!1,j),J(X);W&&W.name.includes("Fantastic Beamstorm")?t(23,C="~"):t(23,C="")}if(n.$$.dirty[0]&1073741948&&(i||U)&&!I.tool&&I.name){for(let X in z)J(X=="basic"?M:W||null,X);for(let X of I.moves)J(X)}},[d,f,I,M,W,U,z,p,_,b,v,y,w,k,O,L,Y,T,j,o,l,a,c,C,H,S,A,G,Q,u,i,s,oe,ae,he,F,D,ce,de,ye,$e,De,Z,ke,_e,We,rt,x,yt,pe,di]}class By extends Se{constructor(e){super(),Ie(this,e,Fy,Ly,ge,{gearBox:29,slotName:0,index:1},null,[-1,-1])}}function Ha(n,e,t){const i=n.slice();return i[3]=e[t],i}function qa(n){let e,t,i;function s(o){n[1](o)}let r={slotName:"gear",index:n[3]};return n[0]!==void 0&&(r.gearBox=n[0]),e=new By({props:r}),fe.push(()=>Me(e,"gearBox",s)),{c(){le(e.$$.fragment)},m(o,l){se(e,o,l),i=!0},p(o,l){const a={};!t&&l&1&&(t=!0,a.gearBox=o[0],Pe(()=>t=!1)),e.$set(a)},i(o){i||(B(e.$$.fragment,o),i=!0)},o(o){q(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function Uy(n){let e,t,i=Ae(qi),s=[];for(let o=0;o<i.length;o+=1)s[o]=qa(Ha(n,i,o));const r=o=>q(s[o],1,1,()=>{s[o]=null});return{c(){e=g("div");for(let o=0;o<s.length;o+=1)s[o].c();m(e,"class","gearBox svelte-oyqozi")},m(o,l){P(o,e,l);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);n[2](e),t=!0},p(o,[l]){if(l&1){i=Ae(qi);let a;for(a=0;a<i.length;a+=1){const c=Ha(o,i,a);s[a]?(s[a].p(c,l),B(s[a],1)):(s[a]=qa(c),s[a].c(),B(s[a],1),s[a].m(e,null))}for(Be(),a=i.length;a<s.length;a+=1)r(a);Ue()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)B(s[l]);t=!0}},o(o){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)q(s[l]);t=!1},d(o){o&&N(e),st(s,o),n[2](null)}}}function Wy(n,e,t){let i;function s(o){i=o,t(0,i)}function r(o){fe[o?"unshift":"push"](()=>{i=o,t(0,i)})}return[i,s,r]}class Hy extends Se{constructor(e){super(),Ie(this,e,Wy,Uy,ge,{})}}function qy(n){let e,t,i,s,r,o,l,a;return{c(){e=g("div"),t=g("div"),i=g("button"),i.textContent="Clear armor",s=E(),r=g("div"),o=g("button"),o.textContent="Clear gear",m(i,"class","svelte-5d0uid"),m(t,"class","buttonCont svelte-5d0uid"),m(o,"class","svelte-5d0uid"),m(r,"class","buttonCont svelte-5d0uid"),m(e,"class","mainFeatures svelte-5d0uid"),m(e,"id","box")},m(c,u){P(c,e,u),h(e,t),h(t,i),h(e,s),h(e,r),h(r,o),l||(a=[R(i,"click",n[3]),R(o,"click",n[4])],l=!0)},p:$,i:$,o:$,d(c){c&&N(e),l=!1,ve(a)}}}function zy(n,e,t){let i,s,r,o,l;V(n,Ft,f=>t(5,i=f)),V(n,Xn,f=>t(6,s=f)),V(n,Nt,f=>t(7,r=f)),V(n,Jn,f=>t(8,o=f)),V(n,Nn,f=>t(0,l=f));function a(){for(let f in r)r[f].name&&o[f][r[f].name].querySelector("button").click()}function c(){for(let f in i)i[f].name&&s[f][i[f].name].querySelector("button").click()}return[l,a,c,f=>{f.target.blur(),l||a()},f=>{f.target.blur(),l||c()}]}class jy extends Se{constructor(e){super(),Ie(this,e,zy,qy,ge,{})}}function za(n){let e,t,i=`${n[1]}rem`,s,r=`${n[1]/4}rem`,o=n[0]&&ja(n);return{c(){e=g("span"),t=g("iconify-icon"),s=E(),o&&o.c(),Re(t,"icon","material-symbols:lock"),ze(t,"font-size",i),m(e,"class","lockedNotice flex fd-col jc-center ai-center rg-1 svelte-13zu3gt"),ze(e,"padding",r)},m(l,a){P(l,e,a),h(e,t),h(e,s),o&&o.m(e,null)},p(l,a){a&2&&i!==(i=`${l[1]}rem`)&&ze(t,"font-size",i),l[0]?o?o.p(l,a):(o=ja(l),o.c(),o.m(e,null)):o&&(o.d(1),o=null),a&2&&r!==(r=`${l[1]/4}rem`)&&ze(e,"padding",r)},d(l){l&&N(e),o&&o.d()}}}function ja(n){let e,t=`${n[1]*.4}rem`;return{c(){e=g("span"),e.textContent="You must be logged in to access this feature",ze(e,"font-size",t)},m(i,s){P(i,e,s)},p(i,s){s&2&&t!==(t=`${i[1]*.4}rem`)&&ze(e,"font-size",t)},d(i){i&&N(e)}}}function Vy(n){let e=!aa(n[2]),t,i=e&&za(n);return{c(){i&&i.c(),t=nt()},m(s,r){i&&i.m(s,r),P(s,t,r)},p(s,[r]){r&4&&(e=!aa(s[2])),e?i?i.p(s,r):(i=za(s),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:$,o:$,d(s){s&&N(t),i&&i.d(s)}}}function Gy(n,e,t){let i;V(n,Kc,o=>t(2,i=o));let{text:s=!0,size:r=10}=e;return n.$$set=o=>{"text"in o&&t(0,s=o.text),"size"in o&&t(1,r=o.size)},[s,r,i]}class Ky extends Se{constructor(e){super(),Ie(this,e,Gy,Vy,ge,{text:0,size:1})}}function Va(n){let e,t,i;function s(o){n[3](o)}let r={slotName:"sets"};return n[0]!==void 0&&(r.slotOpen=n[0]),e=new Jo({props:r}),fe.push(()=>Me(e,"slotOpen",s)),{c(){le(e.$$.fragment)},m(o,l){se(e,o,l),i=!0},p(o,l){const a={};!t&&l&1&&(t=!0,a.slotOpen=o[0],Pe(()=>t=!1)),e.$set(a)},i(o){i||(B(e.$$.fragment,o),i=!0)},o(o){q(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function Yy(n){let e,t,i,s,r,o,l=n[1].head&&n[1].body&&n[1].legs&&n[1].feet&&Va(n);return{c(){e=g("button"),e.innerHTML=`Load armor set
    <iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="180deg" class="svelte-l9dczq"></iconify-icon>`,t=E(),l&&l.c(),i=nt(),m(e,"class","svelte-l9dczq"),ue(e,"ddOpen",n[0])},m(a,c){P(a,e,c),P(a,t,c),l&&l.m(a,c),P(a,i,c),s=!0,r||(o=R(e,"click",n[2]),r=!0)},p(a,[c]){(!s||c&1)&&ue(e,"ddOpen",a[0]),a[1].head&&a[1].body&&a[1].legs&&a[1].feet?l?(l.p(a,c),c&2&&B(l,1)):(l=Va(a),l.c(),B(l,1),l.m(i.parentNode,i)):l&&(Be(),q(l,1,1,()=>{l=null}),Ue())},i(a){s||(B(l),s=!0)},o(a){q(l),s=!1},d(a){a&&(N(e),N(t),N(i)),l&&l.d(a),r=!1,o()}}}function Qy(n,e,t){let i;V(n,Ut,l=>t(1,i=l));let{ddOpen:s=!1}=e;const r=()=>t(0,s=!s);function o(l){s=l,t(0,s)}return n.$$set=l=>{"ddOpen"in l&&t(0,s=l.ddOpen)},[s,i,r,o]}class Jy extends Se{constructor(e){super(),Ie(this,e,Qy,Yy,ge,{ddOpen:0})}}function Xy(n){let e;return{c(){e=g("span"),e.textContent="Create some builds to get started!",m(e,"class","tooltip svelte-1cwaghb"),m(e,"id","top"),ze(e,"left","70.5%")},m(t,i){P(t,e,i)},p:$,d(t){t&&N(e)}}}function xy(n){let e,t=n[4]?"Select some gear or armor to get started!":"You must be logged in to access these features",i;return{c(){e=g("span"),i=ie(t),m(e,"class","tooltip svelte-1cwaghb"),m(e,"id","top"),ze(e,"left",n[3]?"38%":"")},m(s,r){P(s,e,r),h(e,i)},p(s,r){r&16&&t!==(t=s[4]?"Select some gear or armor to get started!":"You must be logged in to access these features")&&Ee(i,t),r&8&&ze(e,"left",s[3]?"38%":"")},d(s){s&&N(e)}}}function Zy(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v,y,w,k,I,M,W,O,L,U,Y,T,C,H,z;function j(J,oe){if(!J[5])return xy;if(!J[3])return Xy}let S=j(n),A=S&&S(n);k=new Ky({props:{size:7,text:!1}});function G(J){n[19](J)}let Q={};return n[1]!==void 0&&(Q.ddOpen=n[1]),Y=new Jy({props:Q}),fe.push(()=>Me(Y,"ddOpen",G)),{c(){e=g("div"),t=g("div"),i=g("div"),s=g("button"),r=ie("Export new build"),l=E(),a=g("div"),c=g("button"),u=ie("Save to build"),f=E(),p=g("div"),_=g("button"),b=ie("Delete build"),y=E(),A&&A.c(),w=E(),le(k.$$.fragment),I=E(),M=g("div"),W=g("div"),O=g("button"),O.textContent="Load build",L=E(),U=g("div"),le(Y.$$.fragment),s.disabled=o=!n[4]||!n[5],m(s,"class","svelte-1cwaghb"),m(i,"class","buttonCont svelte-1cwaghb"),c.disabled=d=!n[4]||!n[5]||!n[3],m(c,"class","svelte-1cwaghb"),m(a,"class","buttonCont svelte-1cwaghb"),m(a,"id","middle"),_.disabled=v=!n[4]||!n[3],m(_,"class","svelte-1cwaghb"),m(p,"class","buttonCont svelte-1cwaghb"),m(t,"class","posrel svelte-1cwaghb"),m(t,"id","modify"),ue(t,"no-tooltip",n[2]),m(O,"class","svelte-1cwaghb"),m(W,"class","buttonCont svelte-1cwaghb"),m(U,"class","buttonCont svelte-1cwaghb"),m(M,"id","load"),m(M,"class","svelte-1cwaghb"),m(e,"class","mainFeatures svelte-1cwaghb"),m(e,"id","build")},m(J,oe){P(J,e,oe),h(e,t),h(t,i),h(i,s),h(s,r),h(t,l),h(t,a),h(a,c),h(c,u),h(t,f),h(t,p),h(p,_),h(_,b),h(t,y),A&&A.m(t,null),h(t,w),se(k,t,null),h(e,I),h(e,M),h(M,W),h(W,O),h(M,L),h(M,U),se(Y,U,null),n[20](U),C=!0,H||(z=[R(window,"mousedown",n[9]),R(window,"keydown",n[10]),R(s,"click",n[11]),R(s,"mouseenter",n[12]),R(s,"mouseleave",n[13]),R(c,"click",n[14]),R(_,"click",n[15]),R(_,"mouseenter",n[16]),R(_,"mouseleave",n[17]),R(O,"click",n[18])],H=!0)},p(J,[oe]){(!C||oe&48&&o!==(o=!J[4]||!J[5]))&&(s.disabled=o),(!C||oe&56&&d!==(d=!J[4]||!J[5]||!J[3]))&&(c.disabled=d),(!C||oe&24&&v!==(v=!J[4]||!J[3]))&&(_.disabled=v),S===(S=j(J))&&A?A.p(J,oe):(A&&A.d(1),A=S&&S(J),A&&(A.c(),A.m(t,w))),(!C||oe&4)&&ue(t,"no-tooltip",J[2]);const ae={};!T&&oe&2&&(T=!0,ae.ddOpen=J[1],Pe(()=>T=!1)),Y.$set(ae)},i(J){C||(B(k.$$.fragment,J),B(Y.$$.fragment,J),C=!0)},o(J){q(k.$$.fragment,J),q(Y.$$.fragment,J),C=!1},d(J){J&&N(e),A&&A.d(),re(k),re(Y),n[20](null),H=!1,ve(z)}}}function $y(n,e,t){let i,s,r,o,l,a;V(n,Ot,L=>t(8,i=L)),V(n,Tn,L=>t(3,s=L)),V(n,Qr,L=>t(4,r=L)),V(n,hs,L=>t(5,o=L)),V(n,Nn,L=>t(6,l=L)),V(n,ee,L=>t(7,a=L));let c,u=!1,d=!1;const f=L=>{c.contains(L.target)||t(1,u=!1)},p=L=>{L.key=="Escape"&&t(1,u=!1)},_=()=>{r&&o&&!l&&K(ee,a.export.ongoing=!0,a)},b=()=>t(2,d=!0),v=()=>t(2,d=!1),y=()=>{r&&o&&s&&!l&&K(ee,a.save.ongoing=!0,a)},w=()=>{r&&s&&!l&&K(ee,a.delete.ongoing=!0,a)},k=()=>t(2,d=!0),I=()=>t(2,d=!1),M=()=>{l||K(ee,a.load.ongoing=!0,a)};function W(L){u=L,t(1,u)}function O(L){fe[L?"unshift":"push"](()=>{c=L,t(0,c)})}return n.$$.update=()=>{n.$$.dirty&256&&K(Tn,s=Object.keys(i).length>0,s)},[c,u,d,s,r,o,l,a,i,f,p,_,b,v,y,w,k,I,M,W,O]}class e0 extends Se{constructor(e){super(),Ie(this,e,$y,Zy,ge,{})}}function Ga(n){let e;return{c(){e=g("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function t0(n){let e,t,i,s,r,o,l,a=25-n[3].length+"",c,u,d,f,p,_,b,v,y,w,k,I=275-n[4].length+"",M,W,O,L,U,Y,T,C,H,z,j,S,A,G,Q,J,oe=(n[3]||n[4])&&Ga();return{c(){e=g("div"),t=g("div"),i=ie(`Name:\r
        `),s=g("input"),o=E(),l=g("span"),c=ie(a),u=E(),d=g("div"),f=g("div"),p=g("span"),p.textContent="Description / Notes:",_=E(),oe&&oe.c(),b=E(),v=g("textarea"),w=E(),k=g("span"),M=ie(I),W=E(),O=g("div"),L=g("div"),U=g("button"),Y=ie("CANCEL"),C=E(),H=g("div"),z=g("button"),j=ie("EXPORT"),m(s,"class","buildNameInput"),m(s,"id","firstFocusable"),s.disabled=r=n[5].export.status==0,m(s,"type","text"),m(s,"placeholder",n[6]),m(s,"maxlength","25"),m(l,"class","charCounter svelte-9d2eec"),m(l,"id","buildName"),m(t,"class","buildNameCont svelte-9d2eec"),m(v,"class","buildDescInput"),v.disabled=y=n[5].export.status==0,m(v,"placeholder","[Empty]"),m(v,"maxlength","275"),m(v,"autocomplete","off"),m(k,"class","charCounter"),m(k,"id","buildDesc"),m(d,"class","buildDescCont"),U.disabled=T=n[5].export.status==0,m(z,"id","lastFocusable"),z.disabled=S=n[5].export.status==0,m(O,"class","promptOptions"),m(e,"class","buildExporter svelte-9d2eec")},m(ae,he){P(ae,e,he),h(e,t),h(t,i),h(t,s),n[8](s),Dt(s,n[3]),h(t,o),h(t,l),h(l,c),h(e,u),h(e,d),h(d,f),h(f,p),h(f,_),oe&&oe.m(f,null),h(d,b),h(d,v),Dt(v,n[4]),n[13](v),h(d,w),h(d,k),h(k,M),h(e,W),h(e,O),h(O,L),h(L,U),h(U,Y),n[16](U),h(O,C),h(O,H),h(H,z),h(z,j),G=!0,Q||(J=[R(s,"input",n[9]),R(s,"input",n[10]),R(s,"keydown",n[11]),R(v,"input",n[12]),R(v,"input",n[14]),R(v,"keydown",n[15]),R(U,"click",n[17]),R(z,"click",n[18]),R(z,"keydown",ut),R(e,"introstart",n[19])],Q=!0)},p(ae,[he]){(!G||he&32&&r!==(r=ae[5].export.status==0))&&(s.disabled=r),he&8&&s.value!==ae[3]&&Dt(s,ae[3]),(!G||he&8)&&a!==(a=25-ae[3].length+"")&&Ee(c,a),ae[3]||ae[4]?oe||(oe=Ga(),oe.c(),oe.m(f,null)):oe&&(oe.d(1),oe=null),(!G||he&32&&y!==(y=ae[5].export.status==0))&&(v.disabled=y),he&16&&Dt(v,ae[4]),(!G||he&16)&&I!==(I=275-ae[4].length+"")&&Ee(M,I),(!G||he&32&&T!==(T=ae[5].export.status==0))&&(U.disabled=T),(!G||he&32&&S!==(S=ae[5].export.status==0))&&(z.disabled=S)},i(ae){G||(ae&&Ce(()=>{G&&(A||(A=me(e,Fe,{duration:250},!0)),A.run(1))}),G=!0)},o(ae){ae&&(A||(A=me(e,Fe,{duration:250},!1)),A.run(0)),G=!1},d(ae){ae&&N(e),n[8](null),oe&&oe.d(),n[13](null),n[16](null),ae&&A&&A.end(),Q=!1,ve(J)}}}function n0(n,e,t){let i,s,r,o,l,a,c;V(n,ee,z=>t(5,i=z)),V(n,St,z=>t(20,s=z)),V(n,Tn,z=>t(21,r=z)),V(n,Hs,z=>t(22,o=z)),V(n,Ft,z=>t(23,l=z)),V(n,Nt,z=>t(24,a=z)),V(n,Ot,z=>t(25,c=z));let u=Object.keys(c).length,d,f,p,_="",b="",v=`My ${u+1+of[(u+1)%10]} build`;function y(){if(K(ee,i.export.status=0,i),_.endsWith(" ")&&t(3,_=_.replace(/  +/g," ").replace(/ $/,"")),b.endsWith(" ")&&t(4,b=b.replace(/  +/g," ").replace(/ $/,"")),Object.keys(c).includes(_)){K(ee,i.export.status=-1,i),K(ee,i.message="duplicate_name",i);return}let z=yv(Jt(dn(Hi),"builds")).key,j=cf(a,l);j.name=_||v,j.desc=b||"[Empty]",ni(dn(Vo,`${o}/siteData/calculator/builds/${z}`),j),ni(Jt(dn(Hi),`builds/${z}`),j).then(()=>{K(ee,i.export.status=1,i),K(Tn,r=!0,r),Qo(),Ot.update(S=>({...S,[j.name]:{...j,id:z}})),K(St,s=j,s),K(St,s.id=z,s),navigator.clipboard.writeText(`${location.origin+location.pathname}?id=${z}`)}).catch(()=>{K(ee,i.export.status=-1,i),K(ee,i.message="firebase_fail",i)})}function w(z){fe[z?"unshift":"push"](()=>{d=z,t(0,d)})}function k(){_=this.value,t(3,_)}const I=z=>{t(3,_=Bs(z.target.value,25))},M=z=>{i.export.status==0&&z.preventDefault(),ct(z),zr(d,z.target.value,25)};function W(){b=this.value,t(4,b)}function O(z){fe[z?"unshift":"push"](()=>{f=z,t(1,f)})}const L=z=>{t(4,b=Bs(z.target.value,275))},U=z=>{i.export.status==0&&z.preventDefault(),zr(f,z.target.value,275)};function Y(z){fe[z?"unshift":"push"](()=>{p=z,t(2,p)})}return[d,f,p,_,b,i,v,y,w,k,I,M,W,O,L,U,Y,()=>{i.export.status!=0&&K(ee,i.export.ongoing=!1,i)},()=>{i.export.status!=0&&y()},()=>p.focus()]}class i0 extends Se{constructor(e){super(),Ie(this,e,n0,t0,ge,{})}}function s0(n){let e,t,i,s,r=n[2]?"Copied!":"Copy link",o,l,a;return{c(){e=g("button"),t=g("b"),t.textContent="Build link",i=E(),s=g("span"),o=ie(r),m(s,"class","tooltip"),m(s,"id","top"),m(e,"class","copyButton svelte-1qz7uzx"),m(e,"id","firstFocusable")},m(c,u){P(c,e,u),h(e,t),h(e,i),h(e,s),h(s,o),l||(a=[R(e,"click",n[7]),R(e,"keydown",ct)],l=!0)},p(c,u){u&4&&r!==(r=c[2]?"Copied!":"Copy link")&&Ee(o,r)},d(c){c&&N(e),l=!1,ve(a)}}}function r0(n){let e,t,i,s,r,o,l=n[2]?"Copied!":"Copy ID",a,c,u,d;return{c(){e=g("button"),t=g("b"),t.textContent="ID:",i=E(),s=ie(n[4]),r=E(),o=g("span"),a=ie(l),m(o,"class","tooltip"),m(o,"id","top"),m(e,"class","copyButton svelte-1qz7uzx"),m(e,"id",c=n[1]!="save"?"firstFocusable":"")},m(f,p){P(f,e,p),h(e,t),h(e,i),h(e,s),h(e,r),h(e,o),h(o,a),u||(d=[R(e,"click",n[5]),R(e,"keydown",n[6])],u=!0)},p(f,p){p&4&&l!==(l=f[2]?"Copied!":"Copy ID")&&Ee(a,l),p&2&&c!==(c=f[1]!="save"?"firstFocusable":"")&&m(e,"id",c)},d(f){f&&N(e),u=!1,ve(d)}}}function o0(n){let e;function t(r,o){if(r[0]=="id")return r0;if(r[0]=="link")return s0}let i=t(n),s=i&&i(n);return{c(){s&&s.c(),e=nt()},m(r,o){s&&s.m(r,o),P(r,e,o)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s&&s.d(1),s=i&&i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:$,o:$,d(r){r&&N(e),s&&s.d(r)}}}function l0(n,e,t){let i;V(n,St,f=>t(8,i=f));let{type:s,source:r}=e,o=!1;function l(f){o||(navigator.clipboard.writeText(f),t(2,o=!0),setTimeout(()=>t(2,o=!1),1e3))}let a=i?i.id:null;const c=()=>l(a),u=()=>{r!="save"&&ct()},d=()=>l(`${location.origin+location.pathname}?id=${a}`);return n.$$set=f=>{"type"in f&&t(0,s=f.type),"source"in f&&t(1,r=f.source)},[s,r,o,l,a,c,u,d]}class zi extends Se{constructor(e){super(),Ie(this,e,l0,o0,ge,{type:0,source:1})}}function a0(n){let e,t,i,s;return e=new zi({props:{type:"link",source:"share"}}),i=new zi({props:{type:"id",source:"share"}}),{c(){le(e.$$.fragment),t=E(),le(i.$$.fragment)},m(r,o){se(e,r,o),P(r,t,o),se(i,r,o),s=!0},p:$,i(r){s||(B(e.$$.fragment,r),B(i.$$.fragment,r),s=!0)},o(r){q(e.$$.fragment,r),q(i.$$.fragment,r),s=!1},d(r){r&&N(t),re(e,r),re(i,r)}}}function c0(n){let e;return{c(){e=g("span"),e.textContent="Your build has been erased from the database."},m(t,i){P(t,e,i)},p:$,i:$,o:$,d(t){t&&N(e)}}}function u0(n){let e;function t(r,o){if(r[2].message=="not_found")return _0;if(r[2].message=="invalid_id")return p0}let i=t(n),s=i&&i(n);return{c(){s&&s.c(),e=nt()},m(r,o){s&&s.m(r,o),P(r,e,o)},p(r,o){i!==(i=t(r))&&(s&&s.d(1),s=i&&i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:$,o:$,d(r){r&&N(e),s&&s.d(r)}}}function d0(n){let e,t,i,s,r,o;return i=new zi({props:{type:"link",source:"save"}}),r=new zi({props:{type:"id",source:"save"}}),{c(){e=g("span"),e.textContent="Your build has been overwritten.",t=E(),le(i.$$.fragment),s=E(),le(r.$$.fragment)},m(l,a){P(l,e,a),P(l,t,a),se(i,l,a),P(l,s,a),se(r,l,a),o=!0},p:$,i(l){o||(B(i.$$.fragment,l),B(r.$$.fragment,l),o=!0)},o(l){q(i.$$.fragment,l),q(r.$$.fragment,l),o=!1},d(l){l&&(N(e),N(t),N(s)),re(i,l),re(r,l)}}}function f0(n){let e,t,i,s;const r=[g0,m0],o=[];function l(a,c){return a[2].export.status==1?0:a[2].export.status==-1&&a[2].message=="duplicate_name"?1:-1}return~(e=l(n))&&(t=o[e]=r[e](n)),{c(){t&&t.c(),i=nt()},m(a,c){~e&&o[e].m(a,c),P(a,i,c),s=!0},p(a,c){let u=e;e=l(a),e!==u&&(t&&(Be(),q(o[u],1,1,()=>{o[u]=null}),Ue()),~e?(t=o[e],t||(t=o[e]=r[e](a),t.c()),B(t,1),t.m(i.parentNode,i)):t=null)},i(a){s||(B(t),s=!0)},o(a){q(t),s=!1},d(a){a&&N(i),~e&&o[e].d(a)}}}function h0(n){let e,t,i=n[2].export.status?"exporting":n[2].save.status?"saving":n[2].load.status?"loading":"deleting",s,r,o,l,a,c,u,d;return{c(){e=g("span"),t=ie("A problem occurred while "),s=ie(i),r=ie(` your build.\r
            `),o=g("br"),l=ie(`\r
            If needed`),a=g("b"),a.textContent=",",c=ie(" you may contact "),u=g("hl"),u.textContent="xt.ss",d=ie(` on Discord for more\r
            details.`)},m(f,p){P(f,e,p),h(e,t),h(e,s),h(e,r),h(e,o),h(e,l),h(e,a),h(e,c),h(e,u),h(e,d)},p(f,p){p&4&&i!==(i=f[2].export.status?"exporting":f[2].save.status?"saving":f[2].load.status?"loading":"deleting")&&Ee(s,i)},i:$,o:$,d(f){f&&N(e)}}}function p0(n){let e;return{c(){e=g("span"),e.textContent="The ID you have entered is invalid. Please check it again."},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function _0(n){let e;return{c(){e=g("span"),e.innerHTML=`Your build could not be found within the database.
                <br/>
                If needed<b>,</b> you may contact <hl>xt.ss</hl> on Discord for more
                details.`},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function m0(n){let e;return{c(){e=g("span"),e.innerHTML=`Another build of yours with the same name already exists.
                <br/>
                Please use a different one.`},m(t,i){P(t,e,i)},i:$,o:$,d(t){t&&N(e)}}}function g0(n){let e,t,i,s;return i=new zi({props:{type:"id",source:"export"}}),{c(){e=g("span"),e.textContent="Your build's link has been copied to your clipboard.",t=E(),le(i.$$.fragment)},m(r,o){P(r,e,o),P(r,t,o),se(i,r,o),s=!0},i(r){s||(B(i.$$.fragment,r),s=!0)},o(r){q(i.$$.fragment,r),s=!1},d(r){r&&(N(e),N(t)),re(i,r)}}}function b0(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v,y;const w=[h0,f0,d0,u0,c0,a0],k=[];function I(M,W){return M[1]==-1&&M[2].message=="firebase_fail"?0:M[2].export.status?1:M[2].save.status==1?2:M[2].load.status==-1?3:M[2].delete.status==1?4:M[2].share.ongoing?5:-1}return~(r=I(n))&&(o=k[r]=w[r](n)),{c(){e=g("div"),t=g("span"),i=ie(n[4]),s=E(),o&&o.c(),l=E(),a=g("div"),c=g("div"),u=g("button"),d=ie("OK"),m(t,"id","messageTitle"),m(t,"class","svelte-8i8nbx"),m(u,"id",f=(n[1]==-1?"firstFocusable ":"")+"lastFocusable"),m(a,"class","promptOptions svelte-8i8nbx"),m(e,"class","promptMessage svelte-8i8nbx")},m(M,W){P(M,e,W),h(e,t),h(t,i),h(e,s),~r&&k[r].m(e,null),h(e,l),h(e,a),h(a,c),h(c,u),h(u,d),n[6](u),b=!0,v||(y=[R(u,"click",n[7]),R(u,"keydown",n[8]),R(e,"introstart",n[9])],v=!0)},p(M,[W]){(!b||W&16)&&Ee(i,M[4]);let O=r;r=I(M),r===O?~r&&k[r].p(M,W):(o&&(Be(),q(k[O],1,1,()=>{k[O]=null}),Ue()),~r?(o=k[r],o?o.p(M,W):(o=k[r]=w[r](M),o.c()),B(o,1),o.m(e,l)):o=null),(!b||W&2&&f!==(f=(M[1]==-1?"firstFocusable ":"")+"lastFocusable"))&&m(u,"id",f)},i(M){b||(B(o),M&&Ce(()=>{b&&(_&&_.end(1),p=Kr(e,Fe,{duration:200,delay:75}),p.start())}),b=!0)},o(M){q(o),p&&p.invalidate(),M&&(_=Yr(e,Fe,{duration:200})),b=!1},d(M){M&&N(e),~r&&k[r].d(),n[6](null),M&&_&&_.end(),v=!1,ve(y)}}}function v0(n,e,t){let i,s,r;V(n,ee,p=>t(2,r=p));let{loadID:o}=e;const l=At();let a;function c(p){fe[p?"unshift":"push"](()=>{a=p,t(3,a)})}const u=()=>{t(0,o=null),l("resetActions")},d=p=>{s==-1&&ct(p),ut(p)},f=()=>a.focus();return n.$$set=p=>{"loadID"in p&&t(0,o=p.loadID)},n.$$.update=()=>{n.$$.dirty&4&&t(1,s=r.export.status||r.save.status||r.load.status||r.delete.status),n.$$.dirty&6&&t(4,i=r.share.ongoing?"Share this build":`${r.export.status?"Export":r.save.status?"Save":r.load.status?"Load":"Delete"} ${s==1?"Success":"Failure"}!`)},[o,s,r,a,i,l,c,u,d,f]}class y0 extends Se{constructor(e){super(),Ie(this,e,v0,b0,ge,{loadID:0})}}function w0(n){let e,t,i,s,r,o;return{c(){e=g("li"),t=g("button"),i=g("span"),s=ie(n[0]),m(i,"class","svelte-1hzohsl"),m(e,"class","svelte-1hzohsl"),ue(e,"selectedItem",n[2])},m(l,a){P(l,e,a),h(e,t),h(t,i),h(i,s),n[7](e),r||(o=R(t,"click",n[3]),r=!0)},p(l,[a]){a&1&&Ee(s,l[0]),a&4&&ue(e,"selectedItem",l[2])},i:$,o:$,d(l){l&&N(e),n[7](null),r=!1,o()}}}function k0(n,e,t){let{chosenBuild:i,buildData:s,buildName:r,ddOpen:o}=e;const l=At();let a,c;function u(){if(o){if(a.classList.contains("selectedItem")||t(2,c=!1),c)return;t(2,c=!0),t(5,o=!1),t(4,i=[r,s]),l("buildSelect",a)}}function d(f){fe[f?"unshift":"push"](()=>{a=f,t(1,a)})}return n.$$set=f=>{"chosenBuild"in f&&t(4,i=f.chosenBuild),"buildData"in f&&t(6,s=f.buildData),"buildName"in f&&t(0,r=f.buildName),"ddOpen"in f&&t(5,o=f.ddOpen)},n.$$.update=()=>{n.$$.dirty&17&&i!==null&&t(2,c=i[0]===r)},[r,a,c,u,i,o,s,d]}class C0 extends Se{constructor(e){super(),Ie(this,e,k0,w0,ge,{chosenBuild:4,buildData:6,buildName:0,ddOpen:5})}}function Ka(n,e,t){const i=n.slice();return i[25]=e[t][0],i[26]=e[t][1],i}function Ya(n){let e,t,i,s;function r(a){n[13](a)}function o(a){n[14](a)}let l={buildData:n[26],buildName:n[25]};return n[0]!==void 0&&(l.chosenBuild=n[0]),n[1]!==void 0&&(l.ddOpen=n[1]),e=new C0({props:l}),fe.push(()=>Me(e,"chosenBuild",r)),fe.push(()=>Me(e,"ddOpen",o)),e.$on("buildSelect",n[11]),{c(){le(e.$$.fragment)},m(a,c){se(e,a,c),s=!0},p(a,c){const u={};c&16&&(u.buildData=a[26]),c&16&&(u.buildName=a[25]),!t&&c&1&&(t=!0,u.chosenBuild=a[0],Pe(()=>t=!1)),!i&&c&2&&(i=!0,u.ddOpen=a[1],Pe(()=>i=!1)),e.$set(u)},i(a){s||(B(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function E0(n){let e,t,i,s,r,o,l,a=Ae(Object.entries(n[4])),c=[];for(let d=0;d<a.length;d+=1)c[d]=Ya(Ka(n,a,d));const u=d=>q(c[d],1,1,()=>{c[d]=null});return{c(){e=g("div"),t=g("input"),i=E(),s=g("ul");for(let d=0;d<c.length;d+=1)c[d].c();m(t,"type","text"),m(t,"class","searchBarInput svelte-nka60b"),m(t,"placeholder","Search..."),m(s,"class","svelte-nka60b"),ue(s,"no-scrollbar",n[8].length<=4),m(e,"class","dropdown svelte-nka60b"),ue(e,"ddOpen",n[1])},m(d,f){P(d,e,f),h(e,t),n[12](t),h(e,i),h(e,s);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(s,null);n[15](s),n[16](e),r=!0,o||(l=[R(t,"input",n[10]),R(t,"keydown",n[9]),R(e,"transitionend",n[17]),R(e,"transitioncancel",n[18])],o=!0)},p(d,[f]){if(f&2067){a=Ae(Object.entries(d[4]));let p;for(p=0;p<a.length;p+=1){const _=Ka(d,a,p);c[p]?(c[p].p(_,f),B(c[p],1)):(c[p]=Ya(_),c[p].c(),B(c[p],1),c[p].m(s,null))}for(Be(),p=a.length;p<c.length;p+=1)u(p);Ue()}(!r||f&256)&&ue(s,"no-scrollbar",d[8].length<=4),(!r||f&2)&&ue(e,"ddOpen",d[1])},i(d){if(!r){for(let f=0;f<a.length;f+=1)B(c[f]);r=!0}},o(d){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)q(c[f]);r=!1},d(d){d&&N(e),n[12](null),st(c,d),n[15](null),n[16](null),o=!1,ve(l)}}}function I0(n,e,t){let i;V(n,Ot,C=>t(4,i=C));let{chosenBuild:s,ddOpen:r=!1,dropdown:o}=e;const l=At();let a,c,u,d,f={},p=!1,_=[];function b(C){!C.shiftKey&&C.key=="Tab"&&(C.preventDefault(),setTimeout(()=>a.focus()))}function v(){c&&c.removeEventListener("keydown",b),k(),c&&c.addEventListener("keydown",b)}function y(C){C.shiftKey&&C.key=="Tab"&&(C.preventDefault(),setTimeout(()=>(c.querySelector("button")||c).focus()))}function w(){af(a.value,f),v()}function k(){c&&c.classList.remove("lastElement"),t(8,_=u.querySelectorAll("li:not(.hidden)")),c=_[_.length-1],c?c.classList.add("lastElement"):c=a}function I(C){l("buildSelect"),t(6,d=C.detail);let H=u.querySelector(".selectedItem");H&&H!=C.detail&&H.classList.remove("selectedItem"),t(7,p=!0)}function M(C){fe[C?"unshift":"push"](()=>{a=C,t(5,a)})}function W(C){s=C,t(0,s)}function O(C){r=C,t(1,r)}function L(C){fe[C?"unshift":"push"](()=>{u=C,t(3,u)})}function U(C){fe[C?"unshift":"push"](()=>{o=C,t(2,o)})}const Y=C=>{C.propertyName=="visibility"&&(p&&(t(7,p=!1),t(5,a.value="",a),w()),!r&&d&&u.scrollTo(0,d.offsetTop),Fs(a,r))},T=C=>{C.propertyName=="visibility"&&(t(7,p=!1),Fs(a,r))};return n.$$set=C=>{"chosenBuild"in C&&t(0,s=C.chosenBuild),"ddOpen"in C&&t(1,r=C.ddOpen),"dropdown"in C&&t(2,o=C.dropdown)},n.$$.update=()=>{if(n.$$.dirty&24&&u){t(8,_=u.querySelectorAll("li:not(.hidden)"));for(let C=0;C<u.childElementCount;C++)f[Object.keys(i)[C]]=u.children[C];k(),v()}},[s,r,o,u,i,a,d,p,_,y,w,I,M,W,O,L,U,Y,T]}class Xo extends Se{constructor(e){super(),Ie(this,e,I0,E0,ge,{chosenBuild:0,ddOpen:1,dropdown:2})}}function Qa(n){let e,t=(n[6]>n[5]*.8?n[11].slice(0,20)+"<b>...</b>":n[11])+"",i;return{c(){e=g("span"),Ce(()=>n[15].call(e))},m(s,r){P(s,e,r),e.innerHTML=t,i=fn(e,n[15].bind(e))},p(s,r){r[0]&2144&&t!==(t=(s[6]>s[5]*.8?s[11].slice(0,20)+"<b>...</b>":s[11])+"")&&(e.innerHTML=t)},d(s){s&&N(e),i()}}}function Ja(n){let e;return{c(){e=g("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function S0(n){let e,t,i,s,r,o=n[11],l,a,c,u,d,f,p,_,b,v,y,w,k,I,M=275-n[2].length+"",W,O,L,U,Y,T,C,H,z,j,S,A,G,Q,J,oe,ae,he,F,D,ce,de=Qa(n),ye=n[1]!=null&&n[1]!=n[2]&&Ja();function $e(_e){n[26](_e)}function De(_e){n[27](_e)}function Z(_e){n[28](_e)}let ke={};return n[0]!==void 0&&(ke.chosenBuild=n[0]),n[3]!==void 0&&(ke.ddOpen=n[3]),n[9]!==void 0&&(ke.dropdown=n[9]),Q=new Xo({props:ke}),fe.push(()=>Me(Q,"chosenBuild",$e)),fe.push(()=>Me(Q,"ddOpen",De)),fe.push(()=>Me(Q,"dropdown",Z)),Q.$on("buildSelect",n[29]),{c(){e=g("div"),t=g("div"),i=g("span"),i.textContent="Save to:",s=E(),r=g("button"),de.c(),l=E(),a=g("iconify-icon"),d=E(),f=g("div"),p=g("div"),_=g("span"),_.textContent="Description / Notes:",b=E(),ye&&ye.c(),v=E(),y=g("textarea"),k=E(),I=g("span"),W=ie(M),O=E(),L=g("div"),U=g("div"),Y=g("button"),T=ie("CANCEL"),H=E(),z=g("div"),j=g("button"),S=ie("SAVE"),G=E(),le(Q.$$.fragment),Re(a,"icon","iconamoon:arrow-down-2-fill"),m(r,"id","firstFocusable"),r.disabled=c=n[12].save.status==0,m(r,"class","promptDDButton svelte-106wt5q"),Ce(()=>n[17].call(r)),ue(r,"ddOpen",n[3]),m(t,"class","chosenBuildCont"),m(y,"class","buildDescInput"),y.disabled=w=n[12].save.status==0,m(y,"placeholder","[Empty]"),m(y,"maxlength","275"),m(y,"autocomplete","off"),m(I,"class","charCounter"),m(I,"id","buildDesc"),m(f,"class","buildDescCont"),Y.disabled=C=n[12].save.status==0,m(j,"id","lastFocusable"),j.disabled=A=n[12].save.status==0,m(L,"class","promptOptions"),m(e,"class","buildSaver")},m(_e,We){P(_e,e,We),h(e,t),h(t,i),h(t,s),h(t,r),de.m(r,null),h(r,l),h(r,a),n[16](r),u=fn(r,n[17].bind(r)),h(e,d),h(e,f),h(f,p),h(p,_),h(p,b),ye&&ye.m(p,null),h(f,v),h(f,y),n[19](y),Dt(y,n[10]),h(f,k),h(f,I),h(I,W),h(e,O),h(e,L),h(L,U),h(U,Y),h(Y,T),n[23](Y),h(L,H),h(L,z),h(z,j),h(j,S),h(e,G),se(Q,e,null),F=!0,D||(ce=[R(window,"mousedown",n[14]),R(r,"click",n[18]),R(r,"keydown",ct),R(y,"input",n[20]),R(y,"input",n[21]),R(y,"keydown",n[22]),R(Y,"click",n[24]),R(j,"click",n[25]),R(j,"keydown",ut),R(e,"introstart",n[30]),R(e,"keydown",n[31])],D=!0)},p(_e,We){We[0]&2048&&ge(o,o=_e[11])?(de.d(1),de=Qa(_e),de.c(),de.m(r,l)):de.p(_e,We),(!F||We[0]&4096&&c!==(c=_e[12].save.status==0))&&(r.disabled=c),(!F||We[0]&8)&&ue(r,"ddOpen",_e[3]),_e[1]!=null&&_e[1]!=_e[2]?ye||(ye=Ja(),ye.c(),ye.m(p,null)):ye&&(ye.d(1),ye=null),(!F||We[0]&4096&&w!==(w=_e[12].save.status==0))&&(y.disabled=w),We[0]&1024&&Dt(y,_e[10]),(!F||We[0]&4)&&M!==(M=275-_e[2].length+"")&&Ee(W,M),(!F||We[0]&4096&&C!==(C=_e[12].save.status==0))&&(Y.disabled=C),(!F||We[0]&4096&&A!==(A=_e[12].save.status==0))&&(j.disabled=A);const rt={};!J&&We[0]&1&&(J=!0,rt.chosenBuild=_e[0],Pe(()=>J=!1)),!oe&&We[0]&8&&(oe=!0,rt.ddOpen=_e[3],Pe(()=>oe=!1)),!ae&&We[0]&512&&(ae=!0,rt.dropdown=_e[9],Pe(()=>ae=!1)),Q.$set(rt)},i(_e){F||(B(Q.$$.fragment,_e),_e&&Ce(()=>{F&&(he||(he=me(e,Fe,{duration:250},!0)),he.run(1))}),F=!0)},o(_e){q(Q.$$.fragment,_e),_e&&(he||(he=me(e,Fe,{duration:250},!1)),he.run(0)),F=!1},d(_e){_e&&N(e),de.d(_e),n[16](null),u(),ye&&ye.d(),n[19](null),n[23](null),re(Q),_e&&he&&he.end(),D=!1,ve(ce)}}}function T0(n,e,t){let i,s,r,o,l,a,c,u,d;V(n,ee,F=>t(12,o=F)),V(n,St,F=>t(32,l=F)),V(n,Ot,F=>t(33,a=F)),V(n,Hs,F=>t(34,c=F)),V(n,Ft,F=>t(35,u=F)),V(n,Nt,F=>t(36,d=F));let f=!1,p,_,b,v,y,w,k=Object.entries(a)[0],I=null;function M(){K(ee,o.save.status=0,o);let F=cf(d,u),D=I==null?s:I==""?"[Empty]":I,ce=k[1].id;F.name=i,F.desc=D,ni(dn(Vo,`${c}/siteData/calculator/builds/${ce}`),F),ni(Jt(dn(Hi),`builds/${ce}`),F).then(()=>{K(ee,o.save.status=1,o);let de={...a};de[i]=F,de[i].id=ce,de[i].desc=D,Qo(),Ot.update(()=>de),K(St,l=F,l),K(St,l.id=ce,l)}).catch(()=>{K(ee,o.save.status=-1,o),K(ee,o.message="firebase_fail",o)})}const W=F=>{!p.contains(F.target)&&!w.contains(F.target)&&t(3,f=!1)};function O(){b=this.offsetWidth,t(6,b)}function L(F){fe[F?"unshift":"push"](()=>{p=F,t(4,p)})}function U(){_=this.offsetWidth,t(5,_)}const Y=()=>{o.save.status!=0&&t(3,f=!f)};function T(F){fe[F?"unshift":"push"](()=>{v=F,t(7,v)})}function C(){r=this.value,t(10,r),t(1,I),t(2,s),t(0,k)}const H=F=>{t(1,I=Bs(F.target.value,275))},z=F=>{o.save.status==0&&F.preventDefault(),zr(v,F.target.value,275)};function j(F){fe[F?"unshift":"push"](()=>{y=F,t(8,y)})}const S=()=>{o.save.status!=0&&K(ee,o.save.ongoing=!1,o)},A=()=>{o.save.status!=0&&M()};function G(F){k=F,t(0,k)}function Q(F){f=F,t(3,f)}function J(F){w=F,t(9,w)}const oe=()=>t(1,I=null),ae=()=>y.focus(),he=F=>{F.key=="Escape"&&(t(3,f=!1),p.focus())};return n.$$.update=()=>{n.$$.dirty[0]&1&&t(11,i=k[0]),n.$$.dirty[0]&1&&t(2,s=k[1].desc),n.$$.dirty[0]&6&&t(10,r=I??s)},[k,I,s,f,p,_,b,v,y,w,r,i,o,M,W,O,L,U,Y,T,C,H,z,j,S,A,G,Q,J,oe,ae,he]}class N0 extends Se{constructor(e){super(),Ie(this,e,T0,S0,ge,{},null,[-1,-1])}}function O0(n){let e,t,i,s,r,o,l,a,c;return{c(){e=g("div"),t=g("span"),t.textContent="ID:",i=E(),s=g("input"),m(s,"class","buildIDInput svelte-1ort6ez"),s.disabled=r=n[13].load.status==0,m(s,"type","text"),m(s,"placeholder","Example ID: -NDqeA1Scn0EAJcYWN3b"),m(s,"maxlength","25"),m(e,"class","buildIDCont svelte-1ort6ez")},m(u,d){P(u,e,d),h(e,t),h(e,i),h(e,s),n[24](s),Dt(s,n[11]),l=!0,a||(c=[R(s,"input",n[25]),R(s,"input",n[26]),R(s,"keydown",n[27])],a=!0)},p(u,d){(!l||d[0]&8192&&r!==(r=u[13].load.status==0))&&(s.disabled=r),d[0]&2048&&s.value!==u[11]&&Dt(s,u[11])},i(u){l||(u&&Ce(()=>{l&&(o||(o=me(e,Ke,{duration:150},!0)),o.run(1))}),l=!0)},o(u){u&&(o||(o=me(e,Ke,{duration:150},!1)),o.run(0)),l=!1},d(u){u&&N(e),n[24](null),u&&o&&o.end(),a=!1,ve(c)}}}function R0(n){let e,t,i,s,r=n[10],o,l,a,c,u,d,f,p,_=Xa(n);return{c(){e=g("div"),t=g("span"),t.textContent="Load:",i=E(),s=g("button"),_.c(),o=E(),l=g("iconify-icon"),Re(l,"icon","iconamoon:arrow-down-2-fill"),s.disabled=a=n[13].load.status==0,m(s,"class","promptDDButton svelte-1ort6ez"),Ce(()=>n[22].call(s)),ue(s,"ddOpen",n[9]),m(e,"class","chosenBuildCont svelte-1ort6ez")},m(b,v){P(b,e,v),h(e,t),h(e,i),h(e,s),_.m(s,null),h(s,o),h(s,l),n[21](s),c=fn(s,n[22].bind(s)),d=!0,f||(p=R(s,"click",n[23]),f=!0)},p(b,v){v[0]&1024&&ge(r,r=b[10])?(_.d(1),_=Xa(b),_.c(),_.m(s,o)):_.p(b,v),(!d||v[0]&8192&&a!==(a=b[13].load.status==0))&&(s.disabled=a),(!d||v[0]&512)&&ue(s,"ddOpen",b[9])},i(b){d||(b&&Ce(()=>{d&&(u||(u=me(e,Ke,{duration:150},!0)),u.run(1))}),d=!0)},o(b){b&&(u||(u=me(e,Ke,{duration:150},!1)),u.run(0)),d=!1},d(b){b&&N(e),_.d(b),n[21](null),c(),b&&u&&u.end(),f=!1,p()}}}function Xa(n){let e,t=(n[7]>n[6]*.7?n[10].slice(0,20)+"<b>...</b>":n[10])+"",i;return{c(){e=g("span"),Ce(()=>n[20].call(e))},m(s,r){P(s,e,r),e.innerHTML=t,i=fn(e,n[20].bind(e))},p(s,r){r[0]&1216&&t!==(t=(s[7]>s[6]*.7?s[10].slice(0,20)+"<b>...</b>":s[10])+"")&&(e.innerHTML=t)},d(s){s&&N(e),i()}}}function xa(n){let e,t,i,s,r;function o(u){n[30](u)}function l(u){n[31](u)}function a(u){n[32](u)}let c={};return n[3]!==void 0&&(c.chosenBuild=n[3]),n[9]!==void 0&&(c.ddOpen=n[9]),n[8]!==void 0&&(c.dropdown=n[8]),e=new Xo({props:c}),fe.push(()=>Me(e,"chosenBuild",o)),fe.push(()=>Me(e,"ddOpen",l)),fe.push(()=>Me(e,"dropdown",a)),{c(){le(e.$$.fragment)},m(u,d){se(e,u,d),r=!0},p(u,d){const f={};!t&&d[0]&8&&(t=!0,f.chosenBuild=u[3],Pe(()=>t=!1)),!i&&d[0]&512&&(i=!0,f.ddOpen=u[9],Pe(()=>i=!1)),!s&&d[0]&256&&(s=!0,f.dropdown=u[8],Pe(()=>s=!1)),e.$set(f)},i(u){r||(B(e.$$.fragment,u),r=!0)},o(u){q(e.$$.fragment,u),r=!1},d(u){re(e,u)}}}function A0(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v,y,w,k,I,M,W,O,L,U,Y,T,C,H,z,j,S,A,G,Q;const J=[R0,O0],oe=[];function ae(F,D){return F[2]?0:1}w=ae(n),k=oe[w]=J[w](n);let he=n[4]&&n[2]&&xa(n);return{c(){e=g("div"),t=g("span"),t.textContent="Load build via:",i=E(),s=g("div"),r=g("div"),o=g("button"),l=ie("Online saves"),u=E(),d=g("div"),f=g("button"),p=ie("Exported ID"),v=E(),y=g("div"),k.c(),I=E(),M=g("div"),W=g("div"),O=g("button"),L=ie("CANCEL"),Y=E(),T=g("div"),C=g("button"),H=ie("LOAD"),j=E(),he&&he.c(),m(t,"class","svelte-1ort6ez"),m(o,"id",a=n[2]?"firstFocusable":""),o.disabled=c=n[13].load.status==0||!n[4]||!n[12],m(o,"class","svelte-1ort6ez"),ue(o,"chosen",n[2]),ue(o,"unavailable",!n[12]),m(r,"class","svelte-1ort6ez"),m(f,"id",_=n[2]?"":"firstFocusable"),f.disabled=b=n[13].load.status==0,m(f,"class","svelte-1ort6ez"),ue(f,"chosen",!n[2]),m(d,"class","svelte-1ort6ez"),m(s,"class","loadMethodRadio svelte-1ort6ez"),m(y,"class","loadMethodCont svelte-1ort6ez"),O.disabled=U=n[13].load.status==0,m(C,"id","lastFocusable"),C.disabled=z=n[13].load.status==0,m(M,"class","promptOptions svelte-1ort6ez"),m(e,"class","buildLoader svelte-1ort6ez")},m(F,D){P(F,e,D),h(e,t),h(e,i),h(e,s),h(s,r),h(r,o),h(o,l),h(s,u),h(s,d),h(d,f),h(f,p),h(e,v),h(e,y),oe[w].m(y,null),h(e,I),h(e,M),h(M,W),h(W,O),h(O,L),n[28](O),h(M,Y),h(M,T),h(T,C),h(C,H),h(e,j),he&&he.m(e,null),A=!0,G||(Q=[R(window,"mousedown",n[15]),R(o,"click",n[16]),R(o,"keydown",n[17]),R(f,"click",n[18]),R(f,"keydown",n[19]),R(O,"click",n[29]),R(C,"keydown",ut),R(C,"click",n[14]),R(e,"introstart",n[33]),R(e,"keydown",n[34])],G=!0)},p(F,D){(!A||D[0]&4&&a!==(a=F[2]?"firstFocusable":""))&&m(o,"id",a),(!A||D[0]&12304&&c!==(c=F[13].load.status==0||!F[4]||!F[12]))&&(o.disabled=c),(!A||D[0]&4)&&ue(o,"chosen",F[2]),(!A||D[0]&4096)&&ue(o,"unavailable",!F[12]),(!A||D[0]&4&&_!==(_=F[2]?"":"firstFocusable"))&&m(f,"id",_),(!A||D[0]&8192&&b!==(b=F[13].load.status==0))&&(f.disabled=b),(!A||D[0]&4)&&ue(f,"chosen",!F[2]);let ce=w;w=ae(F),w===ce?oe[w].p(F,D):(Be(),q(oe[ce],1,1,()=>{oe[ce]=null}),Ue(),k=oe[w],k?k.p(F,D):(k=oe[w]=J[w](F),k.c()),B(k,1),k.m(y,null)),(!A||D[0]&8192&&U!==(U=F[13].load.status==0))&&(O.disabled=U),(!A||D[0]&8192&&z!==(z=F[13].load.status==0))&&(C.disabled=z),F[4]&&F[2]?he?(he.p(F,D),D[0]&20&&B(he,1)):(he=xa(F),he.c(),B(he,1),he.m(e,null)):he&&(Be(),q(he,1,1,()=>{he=null}),Ue())},i(F){A||(B(k),B(he),F&&Ce(()=>{A&&(S||(S=me(e,Fe,{duration:250},!0)),S.run(1))}),A=!0)},o(F){q(k),q(he),F&&(S||(S=me(e,Fe,{duration:250},!1)),S.run(0)),A=!1},d(F){F&&N(e),oe[w].d(),n[28](null),he&&he.d(),F&&S&&S.end(),G=!1,ve(Q)}}}function D0(n,e,t){let i,s,r,o;V(n,Qr,D=>t(4,i=D)),V(n,Ot,D=>t(35,s=D)),V(n,Tn,D=>t(12,r=D)),V(n,ee,D=>t(13,o=D));const l=At();let a,c,u,d,f,p,_=r,b=!1,v,y,w="";function k(){if(!_&&!w.startsWith("-")){K(ee,o.load.status=-1,o),K(ee,o.message="invalid_id",o);return}if(_){let D=s[Object.keys(s).find(ce=>ce===y)];l("buildLoad",{build:D,id:D.id})}else{let D=Iv(dn(Hi,"builds"),Ev()),ce=0;K(ee,o.load.status=0,o),wv(D).then(de=>{for(let ye in de.val()){if(ye===w){console.log(de.val()[ye]),l("buildLoad",{build:de.val()[ye],id:ye});break}else ce==Object.keys(de.val()).length-1&&(K(ee,o.load.status=-1,o),K(ee,o.message="invalid_id",o));ce++}}).catch(()=>{K(ee,o.load.status=-1,o),K(ee,o.message="firebase_fail",o)})}}function I(){t(3,v=r?Object.entries(s)[0]:null),t(10,y=v!=null?v[0]:null)}const M=D=>{a&&!a.contains(D.target)&&p&&!p.contains(D.target)&&t(9,b=!1)},W=()=>{o.load.status!=0&&i&&r&&t(2,_=!0)},O=D=>{_&&ct(D)},L=()=>{o.load.status!=0&&t(2,_=!1)},U=D=>{_||ct(D)};function Y(){f=this.offsetWidth,t(7,f)}function T(D){fe[D?"unshift":"push"](()=>{a=D,t(0,a)})}function C(){d=this.offsetWidth,t(6,d)}const H=()=>{o.load.status!=0&&t(9,b=!b)};function z(D){fe[D?"unshift":"push"](()=>{u=D,t(1,u)})}function j(){w=this.value,t(11,w)}const S=D=>{t(11,w=Bs(D.target.value,25))},A=D=>{o.load.status==0&&D.preventDefault()};function G(D){fe[D?"unshift":"push"](()=>{c=D,t(5,c)})}const Q=()=>{o.load.status!=0&&K(ee,o.load.ongoing=!1,o)};function J(D){v=D,t(3,v)}function oe(D){b=D,t(9,b)}function ae(D){p=D,t(8,p)}const he=()=>c.focus(),F=D=>{D.key=="Escape"&&(t(9,b=!1),a.focus())};return n.$$.update=()=>{n.$$.dirty[0]&16&&i&&I(),n.$$.dirty[0]&7&&setTimeout(_?()=>{I(),a.focus()}:()=>u.focus()),n.$$.dirty[0]&8&&t(10,y=v!=null?v[0]:null)},[a,u,_,v,i,c,d,f,p,b,y,w,r,o,k,M,W,O,L,U,Y,T,C,H,z,j,S,A,G,Q,J,oe,ae,he,F]}class P0 extends Se{constructor(e){super(),Ie(this,e,D0,A0,ge,{},null,[-1,-1])}}function Za(n){let e,t=(n[3]>n[4]*.8?n[8].slice(0,20)+"<b>...</b>":n[8])+"",i;return{c(){e=g("span"),Ce(()=>n[12].call(e))},m(s,r){P(s,e,r),e.innerHTML=t,i=fn(e,n[12].bind(e))},p(s,r){r&280&&t!==(t=(s[3]>s[4]*.8?s[8].slice(0,20)+"<b>...</b>":s[8])+"")&&(e.innerHTML=t)},d(s){s&&N(e),i()}}}function M0(n){let e,t,i,s,r,o=n[8],l,a,c,u,d,f,p,_,b,v,y,w,k,I,M,W,O,L,U,Y,T,C,H,z,j,S,A,G,Q=Za(n);f=new lt({props:{text:"I'm aware that this action is irreversible and want to erase this build from the database."}}),f.$on("toggle",n[16]);function J(F){n[21](F)}function oe(F){n[22](F)}function ae(F){n[23](F)}let he={};return n[0]!==void 0&&(he.chosenBuild=n[0]),n[6]!==void 0&&(he.ddOpen=n[6]),n[5]!==void 0&&(he.dropdown=n[5]),T=new Xo({props:he}),fe.push(()=>Me(T,"chosenBuild",J)),fe.push(()=>Me(T,"ddOpen",oe)),fe.push(()=>Me(T,"dropdown",ae)),{c(){e=g("div"),t=g("div"),i=g("span"),i.textContent="Delete:",s=E(),r=g("button"),Q.c(),l=E(),a=g("iconify-icon"),d=E(),le(f.$$.fragment),p=E(),_=g("div"),b=g("div"),v=g("button"),y=ie("CANCEL"),I=E(),M=g("div"),W=g("button"),O=ie("DELETE"),Y=E(),le(T.$$.fragment),Re(a,"icon","iconamoon:arrow-down-2-fill"),m(r,"class","promptDDButton svelte-1nywh"),m(r,"id","firstFocusable"),r.disabled=c=n[9].delete.status==0,Ce(()=>n[14].call(r)),ue(r,"ddOpen",n[6]),m(t,"class","chosenBuildCont"),m(v,"id",w=n[7]?"":"lastFocusable"),v.disabled=k=n[9].delete.status==0,W.disabled=L=!n[7]||n[9].delete.status==0,m(W,"id",U=n[7]?"lastFocusable":""),ue(W,"unavailable",!n[7]),m(_,"class","promptOptions svelte-1nywh"),m(e,"class","buildDeleter svelte-1nywh")},m(F,D){P(F,e,D),h(e,t),h(t,i),h(t,s),h(t,r),Q.m(r,null),h(r,l),h(r,a),n[13](r),u=fn(r,n[14].bind(r)),h(e,d),se(f,e,null),h(e,p),h(e,_),h(_,b),h(b,v),h(v,y),n[17](v),h(_,I),h(_,M),h(M,W),h(W,O),h(e,Y),se(T,e,null),S=!0,A||(G=[R(window,"mousedown",n[11]),R(r,"click",n[15]),R(r,"keydown",ct),R(v,"click",n[18]),R(v,"keydown",n[19]),R(W,"click",n[20]),R(W,"keydown",ut),R(e,"introstart",n[24]),R(e,"keydown",n[25])],A=!0)},p(F,[D]){D&256&&ge(o,o=F[8])?(Q.d(1),Q=Za(F),Q.c(),Q.m(r,l)):Q.p(F,D),(!S||D&512&&c!==(c=F[9].delete.status==0))&&(r.disabled=c),(!S||D&64)&&ue(r,"ddOpen",F[6]),(!S||D&128&&w!==(w=F[7]?"":"lastFocusable"))&&m(v,"id",w),(!S||D&512&&k!==(k=F[9].delete.status==0))&&(v.disabled=k),(!S||D&640&&L!==(L=!F[7]||F[9].delete.status==0))&&(W.disabled=L),(!S||D&128&&U!==(U=F[7]?"lastFocusable":""))&&m(W,"id",U),(!S||D&128)&&ue(W,"unavailable",!F[7]);const ce={};!C&&D&1&&(C=!0,ce.chosenBuild=F[0],Pe(()=>C=!1)),!H&&D&64&&(H=!0,ce.ddOpen=F[6],Pe(()=>H=!1)),!z&&D&32&&(z=!0,ce.dropdown=F[5],Pe(()=>z=!1)),T.$set(ce)},i(F){S||(B(f.$$.fragment,F),B(T.$$.fragment,F),F&&Ce(()=>{S&&(j||(j=me(e,Fe,{duration:250},!0)),j.run(1))}),S=!0)},o(F){q(f.$$.fragment,F),q(T.$$.fragment,F),F&&(j||(j=me(e,Fe,{duration:250},!1)),j.run(0)),S=!1},d(F){F&&N(e),Q.d(F),n[13](null),u(),re(f),n[17](null),re(T),F&&j&&j.end(),A=!1,ve(G)}}}function L0(n,e,t){let i,s,r,o,l;V(n,ee,S=>t(9,s=S)),V(n,Ot,S=>t(26,r=S)),V(n,St,S=>t(27,o=S)),V(n,Hs,S=>t(28,l=S));let a,c,u,d,f,p=!1,_=Object.entries(r)[0],b=!1;function v(){K(ee,s.delete.status=0,s);let S=_[1].id;la(dn(Vo,`${l}/siteData/calculator/builds/${S}`)),la(Jt(dn(Hi),`builds/${S}`)).then(()=>{K(ee,s.delete.status=1,s),o&&S==o.id&&K(St,o=null,o);let A={...r};delete A[i],Qo(),Ot.update(()=>A)}).catch(A=>{K(ee,s.delete.status=-1,s),K(ee,s.message="firebase_fail",s)})}const y=S=>{!c.contains(S.target)&&!f.contains(S.target)&&t(6,p=!1)};function w(){u=this.offsetWidth,t(3,u)}function k(S){fe[S?"unshift":"push"](()=>{c=S,t(2,c)})}function I(){d=this.offsetWidth,t(4,d)}const M=()=>{s.delete.status!=0&&t(6,p=!p)},W=S=>t(7,b=S.detail);function O(S){fe[S?"unshift":"push"](()=>{a=S,t(1,a)})}const L=()=>{s.delete.status!=0&&K(ee,s.delete.ongoing=!1,s)},U=S=>{b||ut(S)},Y=()=>{b&&s.delete.status!=0&&v()};function T(S){_=S,t(0,_)}function C(S){p=S,t(6,p)}function H(S){f=S,t(5,f)}const z=()=>a.focus(),j=S=>{S.key=="Escape"&&(t(6,p=!1),c.focus())};return n.$$.update=()=>{n.$$.dirty&1&&t(8,i=_[0])},[_,a,c,u,d,f,p,b,i,s,v,y,w,k,I,M,W,O,L,U,Y,T,C,H,z,j]}class F0 extends Se{constructor(e){super(),Ie(this,e,L0,M0,ge,{})}}function B0(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_;return{c(){e=g("div"),t=g("div"),i=g("button"),i.innerHTML='<iconify-icon icon="tabler:coins" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Build costs</span>',s=E(),r=g("div"),o=g("button"),o.innerHTML='<iconify-icon icon="codicon:sparkle-filled" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Add bonuses</span>',l=E(),a=g("div"),c=g("button"),c.innerHTML='<iconify-icon icon="fa-solid:random" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Randomize build</span>',u=E(),d=g("div"),f=g("button"),f.innerHTML='<iconify-icon icon="fe:picture" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Screenshot mode</span>',m(i,"class","svelte-1o20s8w"),m(t,"class","svelte-1o20s8w"),m(o,"class","svelte-1o20s8w"),m(r,"class","svelte-1o20s8w"),m(c,"class","svelte-1o20s8w"),m(a,"id","randomize"),m(a,"class","svelte-1o20s8w"),m(f,"class","svelte-1o20s8w"),m(d,"id","screenshot"),m(d,"class","svelte-1o20s8w"),m(e,"class","sideFeatures svelte-1o20s8w")},m(b,v){P(b,e,v),h(e,t),h(t,i),h(e,s),h(e,r),h(r,o),h(e,l),h(e,a),h(a,c),h(e,u),h(e,d),h(d,f),p||(_=[R(i,"click",n[2]),R(o,"click",n[3]),R(c,"click",n[4]),R(f,"click",n[5])],p=!0)},p:$,i:$,o:$,d(b){b&&N(e),p=!1,ve(_)}}}function U0(n,e,t){let i,s;return V(n,Nn,c=>t(0,i=c)),V(n,ee,c=>t(1,s=c)),[i,s,c=>{Vt(c),i||K(ee,s.costs.ongoing=!0,s)},c=>{Vt(c),i||K(ee,s.bonus.ongoing=!0,s)},c=>{Vt(c),i||K(ee,s.randomize.ongoing=!0,s)},()=>{i||(K(ee,s.screenshot.ongoing=!0,s),setTimeout(()=>K(ee,s.screenshot.ongoing=!1,s),3500))}]}class W0 extends Se{constructor(e){super(),Ie(this,e,U0,B0,ge,{})}}function $a(n,e,t){const i=n.slice();i[11]=e[t];const s=i[1].bonuses[0].name==i[11].name;return i[12]=s,i}function ec(n){let e,t,i,s,r,o,l,a,c,u,d,f;function p(...b){return n[5](n[12],...b)}function _(...b){return n[6](n[11],...b)}return a=new lt({props:{text:n[11].name,checked:n[2][n[11].name]}}),a.$on("toggle",_),{c(){e=g("div"),t=g("a"),i=g("img"),l=E(),le(a.$$.fragment),c=E(),Qe(i.src,s=n[11].image)||m(i,"src",s),m(i,"alt",""),m(i,"class","svelte-1i20pwb"),m(t,"id",r=n[12]?"firstFocusable":""),m(t,"href",o=n[11].link),m(t,"target","_blank"),m(t,"class","svelte-1i20pwb"),m(e,"class","svelte-1i20pwb")},m(b,v){P(b,e,v),h(e,t),h(t,i),h(e,l),se(a,e,null),h(e,c),u=!0,d||(f=R(t,"keydown",p),d=!0)},p(b,v){n=b,(!u||v&2&&!Qe(i.src,s=n[11].image))&&m(i,"src",s),(!u||v&2&&r!==(r=n[12]?"firstFocusable":""))&&m(t,"id",r),(!u||v&2&&o!==(o=n[11].link))&&m(t,"href",o);const y={};v&2&&(y.text=n[11].name),v&6&&(y.checked=n[2][n[11].name]),a.$set(y)},i(b){u||(B(a.$$.fragment,b),u=!0)},o(b){q(a.$$.fragment,b),u=!1},d(b){b&&N(e),re(a),d=!1,f()}}}function H0(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_=Ae(n[1].bonuses),b=[];for(let y=0;y<_.length;y+=1)b[y]=ec($a(n,_,y));const v=y=>q(b[y],1,1,()=>{b[y]=null});return{c(){e=g("div"),t=g("div");for(let y=0;y<b.length;y+=1)b[y].c();i=E(),s=g("div"),r=g("div"),o=g("button"),o.textContent="CLEAR",l=E(),a=g("div"),c=g("button"),c.textContent="OK",m(t,"class","bonusesCont svelte-1i20pwb"),m(c,"id","lastFocusable"),m(s,"class","promptOptions svelte-1i20pwb"),m(e,"class","bonusChooser svelte-1i20pwb")},m(y,w){P(y,e,w),h(e,t);for(let k=0;k<b.length;k+=1)b[k]&&b[k].m(t,null);h(e,i),h(e,s),h(s,r),h(r,o),h(s,l),h(s,a),h(a,c),n[8](c),d=!0,f||(p=[R(o,"click",n[7]),R(c,"click",n[9]),R(c,"keydown",ut),R(e,"introstart",n[10])],f=!0)},p(y,[w]){if(w&14){_=Ae(y[1].bonuses);let k;for(k=0;k<_.length;k+=1){const I=$a(y,_,k);b[k]?(b[k].p(I,w),B(b[k],1)):(b[k]=ec(I),b[k].c(),B(b[k],1),b[k].m(t,null))}for(Be(),k=_.length;k<b.length;k+=1)v(k);Ue()}},i(y){if(!d){for(let w=0;w<_.length;w+=1)B(b[w]);y&&Ce(()=>{d&&(u||(u=me(e,Fe,{duration:250},!0)),u.run(1))}),d=!0}},o(y){b=b.filter(Boolean);for(let w=0;w<b.length;w+=1)q(b[w]);y&&(u||(u=me(e,Fe,{duration:250},!1)),u.run(0)),d=!1},d(y){y&&N(e),st(b,y),n[8](null),y&&u&&u.end(),f=!1,ve(p)}}}function q0(n,e,t){let i,s,r,o;V(n,Ut,_=>t(1,i=_)),V(n,Vn,_=>t(2,s=_)),V(n,ft,_=>t(3,r=_)),V(n,ee,_=>t(4,o=_));let l;const a=(_,b)=>{_&&ct(b)},c=(_,b)=>{K(Vn,s[_.name]=b.detail,s);for(let v in r)b.detail?K(ft,r[v]+=_.stats[v],r):K(ft,r[v]-=_.stats[v],r),K(ft,r[v]=Math.round(r[v]*10)/10,r)},u=()=>{for(let _ in s){if(!s[_])continue;let b=i.bonuses.find(v=>v.name==_);K(Vn,s[_]=!1,s);for(let v in r)K(ft,r[v]-=b.stats[v],r),K(ft,r[v]=Math.round(r[v]*10)/10,r)}};function d(_){fe[_?"unshift":"push"](()=>{l=_,t(0,l)})}return[l,i,s,r,o,a,c,u,d,()=>K(ee,o.bonus.ongoing=!1,o),()=>l.focus()]}class z0 extends Se{constructor(e){super(),Ie(this,e,q0,H0,ge,{})}}function j0(n){let e;return{c(){e=g("span"),e.textContent=`Includes equipment such as ore-based armor and their variants,\r
            ore-based weapons, and shoes with no special stats`,m(e,"slot","tooltip"),m(e,"class","tooltip svelte-21yikp"),m(e,"id","right")},m(t,i){P(t,e,i)},p:$,d(t){t&&N(e)}}}function V0(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v,y,w,k,I,M,W,O,L,U,Y;return s=new lt({props:{text:"Force Mushroom Parasol",checked:n[0].parasol,first:!0}}),s.$on("toggle",n[5]),o=new lt({props:{text:"Randomize armor",checked:n[0].armor}}),o.$on("toggle",n[6]),a=new lt({props:{text:"Randomize gear",checked:n[0].gear}}),a.$on("toggle",n[7]),u=new lt({props:{text:"Allow 'basic' equipment",checked:n[0].basic,$$slots:{tooltip:[j0]},$$scope:{ctx:n}}}),u.$on("toggle",n[8]),{c(){e=g("div"),t=g("span"),t.textContent="Randomize your build",i=E(),le(s.$$.fragment),r=E(),le(o.$$.fragment),l=E(),le(a.$$.fragment),c=E(),le(u.$$.fragment),d=E(),f=g("div"),p=g("div"),_=g("button"),b=ie("CANCEL"),y=E(),w=g("div"),k=g("button"),I=ie("ROLL THE DICE"),m(t,"class","svelte-21yikp"),m(_,"id",v=n[2]?"":"lastFocusable"),m(k,"id",M=n[2]?"lastFocusable":""),k.disabled=W=!n[2],m(f,"class","promptOptions"),m(e,"class","buildRandomizer svelte-21yikp")},m(T,C){P(T,e,C),h(e,t),h(e,i),se(s,e,null),h(e,r),se(o,e,null),h(e,l),se(a,e,null),h(e,c),se(u,e,null),h(e,d),h(e,f),h(f,p),h(p,_),h(_,b),n[9](_),h(f,y),h(f,w),h(w,k),h(k,I),L=!0,U||(Y=[R(_,"click",n[10]),R(_,"keydown",n[11]),R(k,"click",n[12]),R(k,"keydown",n[13]),R(e,"introstart",n[14])],U=!0)},p(T,[C]){const H={};C&1&&(H.checked=T[0].parasol),s.$set(H);const z={};C&1&&(z.checked=T[0].armor),o.$set(z);const j={};C&1&&(j.checked=T[0].gear),a.$set(j);const S={};C&1&&(S.checked=T[0].basic),C&16777216&&(S.$$scope={dirty:C,ctx:T}),u.$set(S),(!L||C&4&&v!==(v=T[2]?"":"lastFocusable"))&&m(_,"id",v),(!L||C&4&&M!==(M=T[2]?"lastFocusable":""))&&m(k,"id",M),(!L||C&4&&W!==(W=!T[2]))&&(k.disabled=W)},i(T){L||(B(s.$$.fragment,T),B(o.$$.fragment,T),B(a.$$.fragment,T),B(u.$$.fragment,T),T&&Ce(()=>{L&&(O||(O=me(e,Fe,{duration:250},!0)),O.run(1))}),L=!0)},o(T){q(s.$$.fragment,T),q(o.$$.fragment,T),q(a.$$.fragment,T),q(u.$$.fragment,T),T&&(O||(O=me(e,Fe,{duration:250},!1)),O.run(0)),L=!1},d(T){T&&N(e),re(s),re(o),re(a),re(u),n[9](null),T&&O&&O.end(),U=!1,ve(Y)}}}function G0(n,e,t){let i,s,r,o,l,a,c,u;V(n,hi,T=>t(0,s=T)),V(n,ee,T=>t(3,r=T)),V(n,Ut,T=>t(15,o=T)),V(n,Xn,T=>t(16,l=T)),V(n,Ft,T=>t(17,a=T)),V(n,Jn,T=>t(18,c=T)),V(n,Nt,T=>t(19,u=T));let d,f=["Bronze","Iron","Cobalt","Titanium","Gold","Onyx"],p=["Hardened","Royal"],_=["Black","Brown","Green","Red","White","Dark","Golden","Grey","Phantom"];function b(){if(s.armor){for(let T of ii){let C=u[T]||Go;C.name&&c[T][C.name].querySelector("button").click()}setTimeout(()=>{for(let T of ii)(function C(){let H=Math.floor(Math.random()*o[T].length);!c[T][o[T][H].name].classList.contains("selectedItem")&&(s.basic||!s.basic&&!v(o[T][H].name))?c[T][o[T][H].name].querySelector("button").click():C()})()})}if(s.gear){for(let T in a){let C=a[T]||Ko;C.name&&l[T][C.name].querySelector("button").click()}setTimeout(()=>{let T=!1,C=qi.length,H=qi.length,z=[];for(let j in a)z.push(a[j].name);(function j(){setTimeout(()=>{let S=Math.floor(Math.random()*C);(function A(){let G=Math.floor(Math.random()*o.gear.length);!z.includes(o.gear[G].name)&&!l[H][o.gear[G].name].classList.contains("switchable")&&(!T||T&&G!=0)&&(s.basic||!s.basic&&!v(o.gear[G].name))?(l[H][o.gear[!T&&s.parasol&&!S?0:G].name].querySelector("button").click(),!T&&!S?T=!0:T||C--):A()})(),--H&&j()},25)})()},50)}K(ee,r.randomize.ongoing=!1,r)}function v(T){let C=!1,H=T.split(" ");return C=f.includes(H[0])||p.includes(H[0])||T=="Mining Helmet"||_.includes(H[0]),C}const y=T=>K(hi,s.parasol=T.detail,s),w=T=>K(hi,s.armor=T.detail,s),k=T=>K(hi,s.gear=T.detail,s),I=T=>K(hi,s.basic=T.detail,s);function M(T){fe[T?"unshift":"push"](()=>{d=T,t(1,d)})}const W=()=>K(ee,r.randomize.ongoing=!1,r),O=T=>{i||ut(T)},L=()=>{i&&b()},U=T=>{i&&ut(T)},Y=()=>d.focus();return n.$$.update=()=>{n.$$.dirty&1&&t(2,i=s.armor||s.gear)},[s,d,i,r,b,y,w,k,I,M,W,O,L,U,Y]}class K0 extends Se{constructor(e){super(),Ie(this,e,G0,V0,ge,{})}}function tc(n,e,t){const i=n.slice();return i[5]=e[t],i}function Y0(n){let e,t=Ae(n[1]),i=[];for(let s=0;s<t.length;s+=1)i[s]=nc(tc(n,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=nt()},m(s,r){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(s,r);P(s,e,r)},p(s,r){if(r&2){t=Ae(s[1]);let o;for(o=0;o<t.length;o+=1){const l=tc(s,t,o);i[o]?i[o].p(l,r):(i[o]=nc(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&N(e),st(i,s)}}}function Q0(n){let e,t,i;return{c(){e=g("span"),t=ie("— "),i=ie(n[1]),m(e,"id","info"),m(e,"class","svelte-155nax9")},m(s,r){P(s,e,r),h(e,t),h(e,i)},p(s,r){r&2&&Ee(i,s[1])},d(s){s&&N(e)}}}function nc(n){let e,t,i=n[5]+"",s;return{c(){e=g("span"),t=ie("— "),s=ie(i),m(e,"id","info"),m(e,"class","svelte-155nax9")},m(r,o){P(r,e,o),h(e,t),h(e,s)},p(r,o){o&2&&i!==(i=r[5]+"")&&Ee(s,i)},d(r){r&&N(e)}}}function J0(n){let e,t,i,s,r,o,l;function a(d,f){return typeof d[1]=="string"?Q0:Y0}let c=a(n),u=c(n);return{c(){e=g("li"),t=g("span"),i=ie("v"),s=ie(n[0]),r=E(),o=g("i"),o.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":of[n[2][0]%10])+", 20"+n[2][2]}`,l=E(),u.c(),m(t,"id","version"),m(t,"class","svelte-155nax9"),m(o,"id","date"),m(o,"class","svelte-155nax9"),m(e,"class","svelte-155nax9")},m(d,f){P(d,e,f),h(e,t),h(t,i),h(t,s),h(e,r),h(e,o),h(e,l),u.m(e,null)},p(d,[f]){f&1&&Ee(s,d[0]),c===(c=a(d))&&u?u.p(d,f):(u.d(1),u=c(d),u&&(u.c(),u.m(e,null)))},i:$,o:$,d(d){d&&N(e),u.d()}}}function X0(n,e,t){let{version:i,date:s,text:r}=e,o=s.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,i=a.version),"date"in a&&t(4,s=a.date),"text"in a&&t(1,r=a.text)},[i,r,o,l,s]}class Xe extends Se{constructor(e){super(),Ie(this,e,X0,J0,ge,{version:0,date:4,text:1})}}function x0(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v,y,w,k,I,M,W,O,L,U,Y,T,C,H,z,j,S,A,G,Q,J,oe,ae,he,F,D,ce,de,ye,$e,De,Z,ke,_e,We,rt,x,yt;return r=new Xe({props:{version:"3.27.0",date:"7/6/25",text:["Implemented data synchronization process","Restricted build features to those with a user account"]}}),l=new Xe({props:{version:"3.26.8",date:"10/3/25",text:"Removed current gear-related mutual exclusions (salamanders)"}}),c=new Xe({props:{version:"3.26.7",date:"5/4/24",text:["Added special ability cooldown stat to gears","Fixed page size and zoom occasionally breaking"]}}),d=new Xe({props:{version:"3.26.6",date:"28/3/24",text:"Added 'support me' link in the case of any kind act"}}),p=new Xe({props:{version:"3.26.5",date:"22/3/24",text:"Added policy information"}}),b=new Xe({props:{version:"3.26.4",date:"21/3/24",text:["Added feature to copy stats as text","Fixed detailed view prompt activating while scrolling"]}}),y=new Xe({props:{version:"3.26.3",date:"24/2/24",text:"Reimplemented 'Strict' filter type in search options"}}),k=new Xe({props:{version:"3.26.2",date:"22/2/24",text:"Fixed build randomizer not working properly"}}),M=new Xe({props:{version:"3.26.1",date:"22/2/24",text:"Holding Shift and interacting with a dropdown item or simply holding down on it activates detailed view prompt"}}),O=new Xe({props:{version:"3.26.0",date:"21/2/24",text:"Added detailed view prompt to armor and gear whenever the selected item's icon is clicked"}}),U=new Xe({props:{version:"3.25.9",date:"14/1/24",text:"Added build costs visibility while 'screenshot mode' is active"}}),T=new Xe({props:{version:"3.25.8",date:"11/1/24",text:"Fixed mutually exclusive gear staying disabled when deselecting the selected item"}}),H=new Xe({props:{version:"3.25.7",date:"9/1/24",text:["Enabled 'unsaved changes' prompt to appear before leaving site when certain conditions are met","Fixed dropdowns blocking interactions behind them for a short period after being closed","Fixed dropdown sort incorrectly defaulting to the last sorted list in some cases"]}}),j=new Xe({props:{version:"3.25.6",date:"7/1/24",text:"Fixed armor filter not working properly when 'Exclusive' filter type and 'No Stats' option were selected"}}),A=new Xe({props:{version:"3.25.5",date:"6/1/24",text:["Fixed issue with switching gear slots while full weapon view was on","Tools are now selectable even if full weapon view is on"]}}),Q=new Xe({props:{version:"3.25.4",date:"5/1/24",text:'Fixed crash caused by using the build randomizer while "Force Mushroom Parasol" option was on'}}),oe=new Xe({props:{version:"3.25.3",date:"5/1/24",text:["Added feature to swap gear slots when clicking on an already selected gear item","Added visual cues to both deselecting and swapping options for dropdown items"]}}),he=new Xe({props:{version:"3.25.2",date:"3/1/24",text:["Replaced 'Strict' filter type with 'Exclusive' filter type in search options of dropdowns","Added icons to resource links and credits"]}}),D=new Xe({props:{version:"3.25.1",date:"2/1/24",text:`"Allow 'basic' equipment" option is no longer restricted when "Randomize gear" option isn't selected in the build randomizer`}}),de=new Xe({props:{version:"3.25.0",date:"2/1/24",text:["Added 'Build Costs' feature","Removed spectacles from 'basic' equipment pool in the build randomizer"]}}),$e=new Xe({props:{version:"3.24.5",date:"31/12/23",text:"v3 Release"}}),{c(){e=g("div"),t=g("span"),t.textContent="Changelog",i=E(),s=g("ul"),le(r.$$.fragment),o=E(),le(l.$$.fragment),a=E(),le(c.$$.fragment),u=E(),le(d.$$.fragment),f=E(),le(p.$$.fragment),_=E(),le(b.$$.fragment),v=E(),le(y.$$.fragment),w=E(),le(k.$$.fragment),I=E(),le(M.$$.fragment),W=E(),le(O.$$.fragment),L=E(),le(U.$$.fragment),Y=E(),le(T.$$.fragment),C=E(),le(H.$$.fragment),z=E(),le(j.$$.fragment),S=E(),le(A.$$.fragment),G=E(),le(Q.$$.fragment),J=E(),le(oe.$$.fragment),ae=E(),le(he.$$.fragment),F=E(),le(D.$$.fragment),ce=E(),le(de.$$.fragment),ye=E(),le($e.$$.fragment),De=E(),Z=g("div"),ke=g("div"),_e=g("button"),_e.textContent="OK",m(t,"id","title"),m(s,"id","contents"),m(s,"class","svelte-15kc2i1"),m(_e,"id","firstFocusable lastFocusable"),m(Z,"class","promptOptions svelte-15kc2i1"),m(e,"class","infoPrompt svelte-15kc2i1")},m(pe,di){P(pe,e,di),h(e,t),h(e,i),h(e,s),se(r,s,null),h(s,o),se(l,s,null),h(s,a),se(c,s,null),h(s,u),se(d,s,null),h(s,f),se(p,s,null),h(s,_),se(b,s,null),h(s,v),se(y,s,null),h(s,w),se(k,s,null),h(s,I),se(M,s,null),h(s,W),se(O,s,null),h(s,L),se(U,s,null),h(s,Y),se(T,s,null),h(s,C),se(H,s,null),h(s,z),se(j,s,null),h(s,S),se(A,s,null),h(s,G),se(Q,s,null),h(s,J),se(oe,s,null),h(s,ae),se(he,s,null),h(s,F),se(D,s,null),h(s,ce),se(de,s,null),h(s,ye),se($e,s,null),h(e,De),h(e,Z),h(Z,ke),h(ke,_e),n[2](_e),rt=!0,x||(yt=[R(_e,"click",n[3]),R(_e,"keydown",n[4]),R(e,"introstart",n[5])],x=!0)},p:$,i(pe){rt||(B(r.$$.fragment,pe),B(l.$$.fragment,pe),B(c.$$.fragment,pe),B(d.$$.fragment,pe),B(p.$$.fragment,pe),B(b.$$.fragment,pe),B(y.$$.fragment,pe),B(k.$$.fragment,pe),B(M.$$.fragment,pe),B(O.$$.fragment,pe),B(U.$$.fragment,pe),B(T.$$.fragment,pe),B(H.$$.fragment,pe),B(j.$$.fragment,pe),B(A.$$.fragment,pe),B(Q.$$.fragment,pe),B(oe.$$.fragment,pe),B(he.$$.fragment,pe),B(D.$$.fragment,pe),B(de.$$.fragment,pe),B($e.$$.fragment,pe),pe&&Ce(()=>{rt&&(We||(We=me(e,Fe,{duration:250},!0)),We.run(1))}),rt=!0)},o(pe){q(r.$$.fragment,pe),q(l.$$.fragment,pe),q(c.$$.fragment,pe),q(d.$$.fragment,pe),q(p.$$.fragment,pe),q(b.$$.fragment,pe),q(y.$$.fragment,pe),q(k.$$.fragment,pe),q(M.$$.fragment,pe),q(O.$$.fragment,pe),q(U.$$.fragment,pe),q(T.$$.fragment,pe),q(H.$$.fragment,pe),q(j.$$.fragment,pe),q(A.$$.fragment,pe),q(Q.$$.fragment,pe),q(oe.$$.fragment,pe),q(he.$$.fragment,pe),q(D.$$.fragment,pe),q(de.$$.fragment,pe),q($e.$$.fragment,pe),pe&&(We||(We=me(e,Fe,{duration:250},!1)),We.run(0)),rt=!1},d(pe){pe&&N(e),re(r),re(l),re(c),re(d),re(p),re(b),re(y),re(k),re(M),re(O),re(U),re(T),re(H),re(j),re(A),re(Q),re(oe),re(he),re(D),re(de),re($e),n[2](null),pe&&We&&We.end(),x=!1,ve(yt)}}}function Z0(n,e,t){let i;V(n,ee,c=>t(1,i=c));let s;function r(c){fe[c?"unshift":"push"](()=>{s=c,t(0,s)})}return[s,i,r,()=>K(ee,i.changelog.ongoing=!1,i),c=>{ct(c),ut(c)},()=>s.focus()]}class $0 extends Se{constructor(e){super(),Ie(this,e,Z0,x0,ge,{})}}function e1(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v,y,w,k,I,M,W;return{c(){e=g("div"),t=g("span"),t.textContent="Resources",i=E(),s=g("ul"),r=g("li"),o=g("iconify-icon"),l=E(),a=g("a"),a.textContent="Fantastic Frontier Wiki",c=E(),u=g("li"),u.innerHTML='<iconify-icon icon="ic:baseline-discord" class="svelte-1d9mkog"></iconify-icon> <a href="https://discord.gg/ff" target="_blank" class="svelte-1d9mkog">Fantastic Frontier Discord Server</a>',d=E(),f=g("li"),f.innerHTML='<iconify-icon icon="simple-icons:googledocs" class="svelte-1d9mkog"></iconify-icon> <a href="https://docs.google.com/document/d/1H9HXoExCDVfXx15LQ4Te-2tTjrLFB-XCbMmx44Ynld4/edit" target="_blank" class="svelte-1d9mkog">Fantastic Frontier Build List</a>',p=E(),_=g("li"),_.innerHTML='<iconify-icon icon="simple-icons:googledocs" class="svelte-1d9mkog"></iconify-icon> <a href="https://docs.google.com/document/d/15vwSRojTqZ8LI09Wq4dvGF1kSTPmH2_gECQvwlSFki8/edit" target="_blank" class="svelte-1d9mkog">Fantastic Frontier Max Stat List</a>',b=E(),v=g("div"),y=g("div"),w=g("button"),w.textContent="OK",m(t,"id","title"),Re(o,"icon","simple-icons:fandom"),Re(o,"class","svelte-1d9mkog"),m(a,"id","firstFocusable"),m(a,"href","https://fantastic-frontier-roblox.fandom.com/wiki/Fantastic_Frontier_-_Roblox_Wiki"),m(a,"target","_blank"),m(a,"class","svelte-1d9mkog"),m(r,"class","svelte-1d9mkog"),m(u,"class","svelte-1d9mkog"),m(f,"class","svelte-1d9mkog"),m(_,"class","svelte-1d9mkog"),m(s,"class","svelte-1d9mkog"),m(w,"id","lastFocusable"),m(v,"class","promptOptions"),m(e,"class","infoPrompt")},m(O,L){P(O,e,L),h(e,t),h(e,i),h(e,s),h(s,r),h(r,o),h(r,l),h(r,a),h(s,c),h(s,u),h(s,d),h(s,f),h(s,p),h(s,_),h(e,b),h(e,v),h(v,y),h(y,w),n[2](w),I=!0,M||(W=[R(a,"keydown",ct),R(w,"click",n[3]),R(w,"keydown",ut),R(e,"introstart",n[4])],M=!0)},p:$,i(O){I||(O&&Ce(()=>{I&&(k||(k=me(e,Fe,{duration:250},!0)),k.run(1))}),I=!0)},o(O){O&&(k||(k=me(e,Fe,{duration:250},!1)),k.run(0)),I=!1},d(O){O&&N(e),n[2](null),O&&k&&k.end(),M=!1,ve(W)}}}function t1(n,e,t){let i;V(n,ee,a=>t(1,i=a));let s;function r(a){fe[a?"unshift":"push"](()=>{s=a,t(0,s)})}return[s,i,r,()=>K(ee,i.resources.ongoing=!1,i),()=>s.focus()]}class n1 extends Se{constructor(e){super(),Ie(this,e,t1,e1,ge,{})}}function ic(n,e,t){const i=n.slice();return i[7]=e[t],i}function sc(n,e,t){const i=n.slice();return i[10]=e[t],i}function rc(n){let e,t,i,s,r,o,l,a=n[1][n[7]][n[10]].toLocaleString()+" Gold",c,u;return{c(){e=g("div"),t=g("span"),t.textContent=`${n[10].charAt(0).toUpperCase()+n[10].slice(1)+":"}`,i=E(),s=g("img"),o=E(),l=g("span"),c=ie(a),u=E(),m(t,"id","costTypeName"),m(t,"class","svelte-1u2pv9q"),Qe(s.src,r="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(s,"src",r),m(s,"alt",""),m(s,"class","svelte-1u2pv9q"),m(e,"class","svelte-1u2pv9q")},m(d,f){P(d,e,f),h(e,t),h(e,i),h(e,s),h(e,o),h(e,l),h(l,c),h(e,u)},p(d,f){f&2&&a!==(a=d[1][d[7]][d[10]].toLocaleString()+" Gold")&&Ee(c,a)},d(d){d&&N(e)}}}function oc(n){let e,t,i,s,r,o=Ae(["min","avg","max"]),l=[];for(let a=0;a<3;a+=1)l[a]=rc(sc(n,o,a));return{c(){e=g("div"),t=g("span"),t.textContent=`${n[7].charAt(0).toUpperCase()+n[7].slice(1)+" Costs"}`,i=E(),s=g("div");for(let a=0;a<3;a+=1)l[a].c();r=E(),m(t,"id","subtitle"),m(t,"class","svelte-1u2pv9q"),m(s,"class","costTypes svelte-1u2pv9q"),m(e,"class","costs svelte-1u2pv9q"),m(e,"id",n[7])},m(a,c){P(a,e,c),h(e,t),h(e,i),h(e,s);for(let u=0;u<3;u+=1)l[u]&&l[u].m(s,null);h(e,r)},p(a,c){if(c&2){o=Ae(["min","avg","max"]);let u;for(u=0;u<3;u+=1){const d=sc(a,o,u);l[u]?l[u].p(d,c):(l[u]=rc(d),l[u].c(),l[u].m(s,null))}for(;u<3;u+=1)l[u].d(1)}},d(a){a&&N(e),st(l,a)}}}function i1(n){let e,t,i,s,r,o,l,a,c,u,d=Ae(["armor","gear","total"]),f=[];for(let p=0;p<3;p+=1)f[p]=oc(ic(n,d,p));return{c(){e=g("div"),t=g("div");for(let p=0;p<3;p+=1)f[p].c();i=E(),s=g("div"),r=g("div"),o=g("button"),o.textContent="OK",m(t,"class","costsInfo svelte-1u2pv9q"),m(o,"id","firstFocusable lastFocusable"),m(s,"class","promptOptions svelte-1u2pv9q"),m(e,"class","buildCosts svelte-1u2pv9q")},m(p,_){P(p,e,_),h(e,t);for(let b=0;b<3;b+=1)f[b]&&f[b].m(t,null);h(e,i),h(e,s),h(s,r),h(r,o),n[3](o),a=!0,c||(u=[R(o,"click",n[4]),R(o,"keydown",n[5]),R(e,"introstart",n[6])],c=!0)},p(p,[_]){if(_&2){d=Ae(["armor","gear","total"]);let b;for(b=0;b<3;b+=1){const v=ic(p,d,b);f[b]?f[b].p(v,_):(f[b]=oc(v),f[b].c(),f[b].m(t,null))}for(;b<3;b+=1)f[b].d(1)}},i(p){a||(p&&Ce(()=>{a&&(l||(l=me(e,Fe,{duration:250},!0)),l.run(1))}),a=!0)},o(p){p&&(l||(l=me(e,Fe,{duration:250},!1)),l.run(0)),a=!1},d(p){p&&N(e),st(f,p),n[3](null),p&&l&&l.end(),c=!1,ve(u)}}}function s1(n,e,t){let i,s;V(n,vt,u=>t(1,i=u)),V(n,ee,u=>t(2,s=u));let r;function o(u){fe[u?"unshift":"push"](()=>{r=u,t(0,r)})}return[r,i,s,o,()=>K(ee,s.costs.ongoing=!1,s),u=>{ct(u),ut(u)},()=>r.focus()]}class r1 extends Se{constructor(e){super(),Ie(this,e,s1,i1,ge,{})}}function lc(n,e,t){const i=n.slice();return i[19]=e[t][0],i[20]=e[t][1],i}function ac(n,e,t){const i=n.slice();return i[11]=e[t],i}function cc(n,e,t){const i=n.slice();return i[16]=e[t],i}function o1(n){const e=n.slice(),t=e[14]?e[5][e[2].name][e[11].name]:`${Math.round(e[11].mult*100*10)/10}<b>%</b> ${Rt[e[11].type]}`;return e[15]=t,e}function uc(n){const e=n.slice(),t=e[5][e[2].name]!=null&&e[5][e[2].name][e[11].name]!=null;return e[14]=t,e}function l1(n){let e;return{c(){e=g("span"),e.textContent=`Slot: ${n[2].slot.charAt(0).toUpperCase()+n[2].slot.slice(1)}`},m(t,i){P(t,e,i)},p:$,d(t){t&&N(e)}}}function a1(n){let e;return{c(){e=g("span"),e.textContent=`Type: ${n[2].tool?"Tool":n[2].info.type}`},m(t,i){P(t,e,i)},p:$,d(t){t&&N(e)}}}function c1(n){let e,t,i,s,r=Ae(Object.entries(Rt)),o=[];for(let l=0;l<r.length;l+=1)o[l]=dc(lc(n,r,l));return{c(){e=g("div"),t=g("span"),t.textContent=`${n[2].noStats?"No stats available":"Stats:"}`,i=E(),s=g("div");for(let l=0;l<o.length;l+=1)o[l].c();m(t,"id","subtitle"),m(t,"class","svelte-1c4y2ce"),m(s,"class","svelte-1c4y2ce"),m(e,"id","itemStats"),m(e,"class","svelte-1c4y2ce")},m(l,a){P(l,e,a),h(e,t),h(e,i),h(e,s);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(s,null)},p(l,a){if(a&4){r=Ae(Object.entries(Rt));let c;for(c=0;c<r.length;c+=1){const u=lc(l,r,c);o[c]?o[c].p(u,a):(o[c]=dc(u),o[c].c(),o[c].m(s,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}},d(l){l&&N(e),st(o,l)}}}function u1(n){let e;function t(r,o){return r[2].tool?h1:f1}let s=t(n)(n);return{c(){s.c(),e=nt()},m(r,o){s.m(r,o),P(r,e,o)},p(r,o){s.p(r,o)},d(r){r&&N(e),s.d(r)}}}function d1(n){let e,t,i,s,r,o=(n[19]=="endurance"?n[2].stats[n[19]].toFixed(2):n[2].stats[n[19]])+"",l,a;return{c(){e=g("div"),t=g("img"),s=E(),r=g("span"),l=ie(o),a=E(),Qe(t.src,i="stats/"+n[19]+".svg")||m(t,"src",i),m(t,"alt",n[20]),m(t,"class","svelte-1c4y2ce"),m(r,"class","statValue svelte-1c4y2ce"),m(r,"id",n[19]),ue(r,"negative",n[2].stats[n[19]]<0),m(e,"class","svelte-1c4y2ce")},m(c,u){P(c,e,u),h(e,t),h(e,s),h(e,r),h(r,l),h(e,a)},p(c,u){u&4&&ue(r,"negative",c[2].stats[c[19]]<0)},d(c){c&&N(e)}}}function dc(n){let e,t=n[2].stats[n[19]]!=0&&d1(n);return{c(){t&&t.c(),e=nt()},m(i,s){t&&t.m(i,s),P(i,e,s)},p(i,s){i[2].stats[i[19]]!=0&&t.p(i,s)},d(i){i&&N(e),t&&t.d(i)}}}function f1(n){let e,t,i,s,r,o=Ae(n[2].moves),l=[];for(let a=0;a<o.length;a+=1)l[a]=pc(ac(n,o,a));return{c(){e=g("div"),t=g("div"),i=g("div"),s=g("div"),s.innerHTML='<span class="svelte-1c4y2ce">Move</span> <span class="svelte-1c4y2ce">Base Value</span> <span class="svelte-1c4y2ce">Scaling(s)</span>',r=E();for(let a=0;a<l.length;a+=1)l[a].c();m(s,"id","subtitle"),m(s,"class","svelte-1c4y2ce"),m(i,"class","svelte-1c4y2ce"),m(t,"id","itemMoves"),m(t,"class","svelte-1c4y2ce"),m(e,"id","itemMovesCont"),m(e,"class","svelte-1c4y2ce")},m(a,c){P(a,e,c),h(e,t),h(t,i),h(i,s),h(i,r);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(i,null)},p(a,c){if(c&52){o=Ae(a[2].moves);let u;for(u=0;u<o.length;u+=1){const d=ac(a,o,u);l[u]?l[u].p(d,c):(l[u]=pc(d),l[u].c(),l[u].m(i,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=o.length}},d(a){a&&N(e),st(l,a)}}}function h1(n){let e;return{c(){e=g("div"),e.innerHTML='<span id="subtitle" class="svelte-1c4y2ce">No moves available</span>',m(e,"id","itemMovesCont"),m(e,"class","svelte-1c4y2ce"),ze(e,"text-align","center")},m(t,i){P(t,e,i)},p:$,d(t){t&&N(e)}}}function p1(n){let e,t,i,s,r,o;function l(d,f){return!d[11].type||!d[11].type.includes("/")?fc:_1}function a(d,f){return f===fc?o1(d):d}let c=l(n),u=c(a(n,c));return{c(){e=g("div"),t=g("span"),t.textContent=`${n[11].name}`,i=E(),s=g("span"),s.textContent=`${(n[11].name.includes("Fantastic Beamstorm")?"~":"")+n[11].base}`,r=E(),u.c(),o=E(),m(t,"class","svelte-1c4y2ce"),m(s,"class","svelte-1c4y2ce"),m(e,"class","svelte-1c4y2ce")},m(d,f){P(d,e,f),h(e,t),h(e,i),h(e,s),h(e,r),u.m(e,null),h(e,o)},p(d,f){u.p(a(d,c),f)},d(d){d&&N(e),u.d()}}}function _1(n){let e,t=Ae(n[11].type.split("/")),i=[];for(let s=0;s<t.length;s+=1)i[s]=hc(cc(n,t,s));return{c(){e=g("span");for(let s=0;s<i.length;s+=1)i[s].c();m(e,"id","hybrid"),m(e,"class","svelte-1c4y2ce")},m(s,r){P(s,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(s,r){if(r&4){t=Ae(s[11].type.split("/"));let o;for(o=0;o<t.length;o+=1){const l=cc(s,t,o);i[o]?i[o].p(l,r):(i[o]=hc(l),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&N(e),st(i,s)}}}function fc(n){let e,t=n[15]+"";return{c(){e=g("span"),m(e,"class","svelte-1c4y2ce"),ze(e,"font-size",n[15].length>30?"2.5rem":"")},m(i,s){P(i,e,s),e.innerHTML=t},p:$,d(i){i&&N(e)}}}function hc(n){let e,t=Math.round(n[11][`${n[16]}Mult`]*100*10)/10+"",i,s,r,o=Rt[n[16]]+"",l,a;return{c(){e=g("span"),i=ie(t),s=g("b"),s.textContent="%",r=E(),l=ie(o),a=E()},m(c,u){P(c,e,u),h(e,i),h(e,s),h(e,r),h(e,l),h(e,a)},p:$,d(c){c&&N(e)}}}function pc(n){let e=!n[4].includes(n[11].name),t,i=e&&p1(uc(n));return{c(){i&&i.c(),t=nt()},m(s,r){i&&i.m(s,r),P(s,t,r)},p(s,r){e&&i.p(uc(s),r)},d(s){s&&N(t),i&&i.d(s)}}}function m1(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v,y,w,k,I,M,W,O,L,U,Y,T,C,H,z,j,S,A,G,Q,J,oe,ae,he,F;function D(Z,ke){return Z[3]?a1:l1}let de=D(n)(n);function ye(Z,ke){return Z[3]?u1:c1}let De=ye(n)(n);return{c(){e=g("div"),t=g("div"),i=g("a"),s=g("img"),o=E(),l=g("div"),a=g("span"),a.textContent="Click the image in order to visit the wiki page",c=E(),u=g("span"),u.textContent=`Name: ${n[2].name}`,d=E(),de.c(),f=E(),De.c(),p=E(),_=g("div"),b=g("span"),b.textContent="Costs:",v=E(),y=g("div"),w=g("div"),k=g("span"),k.textContent="Minimum:",I=E(),M=g("img"),O=E(),L=g("span"),L.textContent=`${n[2].cost.min==null?"Unpurchasable":n[2].cost.min.toLocaleString()+" Gold"}`,U=E(),Y=g("div"),T=g("span"),T.textContent="Maximum:",C=E(),H=g("img"),j=E(),S=g("span"),S.textContent=`${n[2].cost.max==null?"Unpurchasable":n[2].cost.max.toLocaleString()+" Gold"}`,A=E(),G=g("div"),Q=g("div"),J=g("button"),J.textContent="OK",Qe(s.src,r=n[2].image)||m(s,"src",r),m(s,"alt",""),m(s,"class","svelte-1c4y2ce"),m(i,"href",n[2].link),m(i,"target","_blank"),m(i,"class","svelte-1c4y2ce"),m(a,"id","tip"),m(a,"class","svelte-1c4y2ce"),m(l,"class","svelte-1c4y2ce"),m(t,"id","basicInfo"),m(t,"class","svelte-1c4y2ce"),m(b,"id","subtitle"),m(b,"class","svelte-1c4y2ce"),m(k,"class","svelte-1c4y2ce"),Qe(M.src,W="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(M,"src",W),m(M,"alt",""),m(M,"class","svelte-1c4y2ce"),m(L,"class","svelte-1c4y2ce"),m(w,"class","svelte-1c4y2ce"),m(T,"class","svelte-1c4y2ce"),Qe(H.src,z="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(H,"src",z),m(H,"alt",""),m(H,"class","svelte-1c4y2ce"),m(S,"class","svelte-1c4y2ce"),m(Y,"class","svelte-1c4y2ce"),m(y,"class","svelte-1c4y2ce"),m(_,"id","itemCosts"),m(_,"class","svelte-1c4y2ce"),m(J,"id","firstFocusable lastFocusable"),m(G,"class","promptOptions svelte-1c4y2ce"),m(e,"class","itemInfo svelte-1c4y2ce")},m(Z,ke){P(Z,e,ke),h(e,t),h(t,i),h(i,s),h(t,o),h(t,l),h(l,a),h(l,c),h(l,u),h(l,d),de.m(l,null),h(e,f),De.m(e,null),h(e,p),h(e,_),h(_,b),h(_,v),h(_,y),h(y,w),h(w,k),h(w,I),h(w,M),h(w,O),h(w,L),h(y,U),h(y,Y),h(Y,T),h(Y,C),h(Y,H),h(Y,j),h(Y,S),h(e,A),h(e,G),h(G,Q),h(Q,J),n[6](J),ae=!0,he||(F=[R(J,"click",n[7]),R(J,"keydown",n[8]),R(e,"introstart",n[9]),R(e,"outroend",n[10])],he=!0)},p(Z,[ke]){de.p(Z,ke),De.p(Z,ke)},i(Z){ae||(Z&&Ce(()=>{ae&&(oe||(oe=me(e,Fe,{duration:250},!0)),oe.run(1))}),ae=!0)},o(Z){Z&&(oe||(oe=me(e,Fe,{duration:250},!1)),oe.run(0)),ae=!1},d(Z){Z&&N(e),de.d(),De.d(),n[6](null),Z&&oe&&oe.end(),he=!1,ve(F)}}}function g1(n,e,t){let i;V(n,ee,_=>t(1,i=_));let s,r=i.item.data,o=r.type=="gear",l=["Charged Basic Attack","Charged Solar Beam"],a={"Void Spike Ultradagger":{"Void Needle":"100<b>%</b> Melee - 562.5<b>%</b> Armor"},"Pureblood Dagger":{"Basic Attack":"200<b>%</b> HighestBonus - 100<b>%</b> LowerBonuses","Blood Sap":"200<b>%</b> HighestBonus - 100<b>%</b> LowerBonuses","+ HP per Blood Sap":"(200<b>%</b> HighestBonus - 100<b>%</b> LowerBonuses) / 2"},"Gnome Rocket Launcher":{"Basic Attack":"None"}};function c(_){fe[_?"unshift":"push"](()=>{s=_,t(0,s)})}return[s,i,r,o,l,a,c,()=>K(ee,i.item.ongoing=!1,i),_=>{ct(_),ut(_)},()=>s.focus(),()=>{r.element&&r.element.querySelector("button").focus()}]}class b1 extends Se{constructor(e){super(),Ie(this,e,g1,m1,ge,{})}}function v1(n){let e,t,i,s,r,o,l,a,c,u,d,f;return{c(){e=g("div"),t=g("span"),t.textContent="Fantastic Calculator Policy",i=E(),s=g("div"),s.innerHTML=`<span id="subtitle" class="svelte-1fj0tys">About</span> <p class="svelte-1fj0tys">This tool is a passion project, one that is independent and is not
            affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span id="subtitle" class="svelte-1fj0tys">Privacy Policy</span> <p class="svelte-1fj0tys">This policy explains what information Fantastic Calculator (&quot;we&quot;,
            &quot;us&quot; or &quot;our&quot;) collects, uses, and shares when you use our website.</p> <span id="subtitle" class="svelte-1fj0tys">Information We Collect</span> <p class="svelte-1fj0tys">We collect information provided by you; that is which is inputted
            directly into our tool. We also collect information about how you
            use and interact with our website, general demographic details, and
            information about your device or browser.</p> <span id="subtitle" class="svelte-1fj0tys">How We Use This Information</span> <p class="svelte-1fj0tys">Your information may be utilized to test and improve the tool, once
            the aggregated, non-identifying information provided has been
            collected and analyzed.</p> <span id="subtitle" class="svelte-1fj0tys">Contact</span> <p class="svelte-1fj0tys">For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,r=E(),o=g("div"),l=g("div"),a=g("button"),a.textContent="OK",m(t,"id","title"),m(s,"id","contents"),m(a,"id","firstFocusable lastFocusable"),m(o,"class","promptOptions svelte-1fj0tys"),m(e,"class","infoPrompt svelte-1fj0tys")},m(p,_){P(p,e,_),h(e,t),h(e,i),h(e,s),h(e,r),h(e,o),h(o,l),h(l,a),n[2](a),u=!0,d||(f=[R(a,"click",n[3]),R(a,"keydown",n[4])],d=!0)},p:$,i(p){u||(p&&Ce(()=>{u&&(c||(c=me(e,Fe,{duration:250},!0)),c.run(1))}),u=!0)},o(p){p&&(c||(c=me(e,Fe,{duration:250},!1)),c.run(0)),u=!1},d(p){p&&N(e),n[2](null),p&&c&&c.end(),d=!1,ve(f)}}}function y1(n,e,t){let i;V(n,ee,a=>t(1,i=a));let s;function r(a){fe[a?"unshift":"push"](()=>{s=a,t(0,s)})}return[s,i,r,()=>K(ee,i.policy.ongoing=!1,i),a=>{ct(a),ut(a)}]}class w1 extends Se{constructor(e){super(),Ie(this,e,y1,v1,ge,{})}}function k1(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v,y,w,k,I,M;return{c(){e=g("div"),t=g("span"),t.textContent="Support Me",i=E(),s=g("p"),s.textContent="Thank you for your continuous use of my site!",r=E(),o=g("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,l=E(),a=g("p"),a.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,c=E(),u=g("a"),u.innerHTML='<img src="kofi-badge.png" alt="Ko-fi" class="svelte-ywc66p"/>',d=E(),f=g("div"),p=g("div"),_=g("button"),_.textContent="DON'T SHOW AGAIN",b=E(),v=g("div"),y=g("button"),y.textContent="MAYBE LATER",m(t,"id","title"),m(u,"class","flex br-1 light-hover svelte-ywc66p"),m(u,"href","https://ko-fi.com/xt8ss"),m(u,"target","_blank"),m(f,"class","promptOptions"),m(e,"class","supportCont infoPrompt svelte-ywc66p")},m(W,O){P(W,e,O),h(e,t),h(e,i),h(e,s),h(e,r),h(e,o),h(e,l),h(e,a),h(e,c),h(e,u),h(e,d),h(e,f),h(f,p),h(p,_),h(f,b),h(f,v),h(v,y),n[4](y),k=!0,I||(M=[R(_,"click",n[3]),R(y,"click",n[5]),R(e,"introstart",n[6])],I=!0)},p:$,i(W){k||(W&&Ce(()=>{k&&(w||(w=me(e,Fe,{duration:250},!0)),w.run(1))}),k=!0)},o(W){W&&(w||(w=me(e,Fe,{duration:250},!1)),w.run(0)),k=!1},d(W){W&&N(e),n[4](null),W&&w&&w.end(),I=!1,ve(M)}}}function C1(n,e,t){let i,s;V(n,vi,u=>t(1,i=u)),V(n,ee,u=>t(2,s=u));let r;const o=()=>{K(vi,i.showAgain=!1,i),K(ee,s.donate.ongoing=!1,s)};function l(u){fe[u?"unshift":"push"](()=>{r=u,t(0,r)})}return[r,i,s,o,l,()=>{K(vi,i.timesDenied++,i),K(ee,s.donate.ongoing=!1,s)},()=>r.focus()]}class E1 extends Se{constructor(e){super(),Ie(this,e,C1,k1,ge,{})}}function I1(n){let e,t,i,s,r,o,l,a,c,u,d,f;return{c(){e=g("div"),t=g("span"),t.textContent="Notice",i=E(),s=g("div"),s.innerHTML=`<p class="svelte-1r3ayw4">Due to site-related incompatibilities with the new user account
            interface, we ask you to manage your user account in another
            affiliated site in the meantime.</p> <p class="svelte-1r3ayw4">This includes any affiliation listed in our
            <a href="https://xt8ss.github.io/fantastic-hub/" class="svelte-1r3ayw4">Fantastic Hub</a>,
            as well as the hub itself.</p> <p class="svelte-1r3ayw4">Thank you for your understanding!</p>`,r=E(),o=g("div"),l=g("div"),a=g("button"),a.textContent="OK",m(t,"id","title"),m(s,"id","contents"),m(a,"id","firstFocusable lastFocusable"),m(o,"class","promptOptions svelte-1r3ayw4"),m(e,"class","infoPrompt svelte-1r3ayw4")},m(p,_){P(p,e,_),h(e,t),h(e,i),h(e,s),h(e,r),h(e,o),h(o,l),h(l,a),u=!0,d||(f=[R(a,"click",n[1]),R(a,"keydown",n[2])],d=!0)},p:$,i(p){u||(p&&Ce(()=>{u&&(c||(c=me(e,Fe,{duration:250},!0)),c.run(1))}),u=!0)},o(p){p&&(c||(c=me(e,Fe,{duration:250},!1)),c.run(0)),u=!1},d(p){p&&N(e),p&&c&&c.end(),d=!1,ve(f)}}}function S1(n,e,t){let i;return V(n,ee,o=>t(0,i=o)),[i,()=>K(ee,i.login.ongoing=!1,i),o=>{ct(o),ut(o)}]}class T1 extends Se{constructor(e){super(),Ie(this,e,S1,I1,ge,{})}}function N1(n){let e,t;return{c(){e=g("hl"),t=ie(n[0])},m(i,s){P(i,e,s),h(e,t)},p(i,[s]){s&1&&Ee(t,i[0])},i:$,o:$,d(i){i&&N(e)}}}function O1(n,e,t){let{startTime:i}=e;const s=At();let r=Date.now(),o=r+i*1e3,l=i,a=setInterval(()=>{let c=Date.now();t(0,l=i-Math.floor((c-r)/1e3)),c>=o&&(s("end"),clearTimeout(a))},50);return n.$$set=c=>{"startTime"in c&&t(1,i=c.startTime)},[l,i]}class R1 extends Se{constructor(e){super(),Ie(this,e,O1,N1,ge,{startTime:1})}}function _c(n){let e,t;return{c(){e=g("a"),t=ie("Couldn't be redirected? Click here"),m(e,"href",df),m(e,"class","svelte-19x9isj")},m(i,s){P(i,e,s),h(e,t)},p:$,d(i){i&&N(e)}}}function A1(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v;f=new R1({props:{startTime:10}}),f.$on("end",n[1]);let y=n[0]&&_c();return{c(){e=g("div"),t=g("span"),t.textContent="Data Sync Required",i=E(),s=g("div"),r=g("p"),r.textContent=`It looks like you have data from previous sessions waiting to be\r
            synced to an account.`,o=E(),l=g("p"),l.textContent="You will be redirected to the data synchronization process shortly.",a=E(),c=g("p"),u=g("i"),u.textContent="Attempting redirect in",d=E(),le(f.$$.fragment),p=ie("..."),_=E(),y&&y.c(),m(t,"id","title"),m(s,"class","contents flex fd-col rg-1 svelte-19x9isj"),m(e,"class","infoPrompt svelte-19x9isj"),ue(e,"redirectFail",n[0])},m(w,k){P(w,e,k),h(e,t),h(e,i),h(e,s),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(c,u),h(c,d),se(f,c,null),h(c,p),h(s,_),y&&y.m(s,null),v=!0},p(w,[k]){w[0]?y?y.p(w,k):(y=_c(),y.c(),y.m(s,null)):y&&(y.d(1),y=null),(!v||k&1)&&ue(e,"redirectFail",w[0])},i(w){v||(B(f.$$.fragment,w),w&&Ce(()=>{v&&(b||(b=me(e,Fe,{duration:250},!0)),b.run(1))}),v=!0)},o(w){q(f.$$.fragment,w),w&&(b||(b=me(e,Fe,{duration:250},!1)),b.run(0)),v=!1},d(w){w&&N(e),re(f),y&&y.d(),w&&b&&b.end()}}}let df="https://xt8ss.github.io/fantastic-hub/?dataSync=true";function D1(n,e,t){let i=!1;return[i,()=>{location.href=df,setTimeout(()=>t(0,i=!0),1e3)}]}class P1 extends Se{constructor(e){super(),Ie(this,e,D1,A1,ge,{})}}function M1(n,{from:e,to:t},i={}){const s=getComputedStyle(n),r=s.transform==="none"?"":s.transform,[o,l]=s.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:d=p=>Math.sqrt(p)*120,easing:f=uf}=i;return{delay:u,duration:gn(d)?d(Math.sqrt(a*a+c*c)):d,easing:f,css:(p,_)=>{const b=_*a,v=_*c,y=p+_*e.width/t.width,w=p+_*e.height/t.height;return`transform: ${r} translate(${b}px, ${v}px) scale(${y}, ${w});`}}}function mc(n,e,t){const i=n.slice();return i[2]=e[t],i}function L1(n){const e=n.slice(),t=`<span class="font-ms smaller-fs">${ff.exec(e[2].text)}</span>`;return e[5]=t,e}function F1(n){let e=n[2].text+"",t;return{c(){t=ie(e)},m(i,s){P(i,t,s)},p(i,s){s&1&&e!==(e=i[2].text+"")&&Ee(t,e)},d(i){i&&N(t)}}}function gc(n){let e,t=n[2].text.replace(vc,n[5])+"",i;return{c(){e=new jc(!1),i=nt(),e.a=i},m(s,r){e.m(t,s,r),P(s,i,r)},p(s,r){r&1&&t!==(t=s[2].text.replace(vc,s[5])+"")&&e.p(t)},d(s){s&&(N(i),e.d())}}}function bc(n,e){let t,i,s,r,o,l,a,c,u,d=$,f;function p(y,w){return w&1&&(o=null),o==null&&(o=!!ff.test(y[2].text)),o?gc:F1}function _(y,w){return w===gc?L1(y):y}let b=p(e,-1),v=b(_(e,b));return{key:n,first:null,c(){t=g("div"),i=g("iconify-icon"),r=E(),v.c(),l=E(),Re(i,"icon",s=e[2].icon),m(t,"class","toast flex fai-center cg-1 br-1 bs ta-center svelte-jahp22"),this.first=t},m(y,w){P(y,t,w),h(t,i),h(t,r),v.m(t,null),h(t,l),f=!0},p(y,w){e=y,(!f||w&1&&s!==(s=e[2].icon))&&Re(i,"icon",s),b===(b=p(e,w))&&v?v.p(_(e,b),w):(v.d(1),v=b(_(e,b)),v&&(v.c(),v.m(t,l)))},r(){u=t.getBoundingClientRect()},f(){Df(t),d(),Vc(t,u)},a(){d(),d=Af(t,u,M1,{duration:250})},i(y){f||(y&&Ce(()=>{f&&(c&&c.end(1),a=Kr(t,Fe,{}),a.start())}),f=!0)},o(y){a&&a.invalidate(),y&&(c=Yr(t,e[1],{})),f=!1},d(y){y&&N(t),v.d(),y&&c&&c.end()}}}function B1(n){let e,t=[],i=new Map,s,r=Ae(n[0]);const o=l=>l[2];for(let l=0;l<r.length;l+=1){let a=mc(n,r,l),c=o(a);i.set(c,t[l]=bc(c,a))}return{c(){e=g("div");for(let l=0;l<t.length;l+=1)t[l].c();m(e,"class","toasts centered flex fjc-center fai-center fd-col svelte-jahp22")},m(l,a){P(l,e,a);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);s=!0},p(l,[a]){if(a&1){r=Ae(l[0]),Be();for(let c=0;c<t.length;c+=1)t[c].r();t=Hf(t,a,o,1,l,r,i,e,Wf,bc,null,mc);for(let c=0;c<t.length;c+=1)t[c].a();Ue()}},i(l){if(!s){for(let a=0;a<r.length;a+=1)B(t[a]);s=!0}},o(l){for(let a=0;a<t.length;a+=1)q(t[a]);s=!1},d(l){l&&N(e);for(let a=0;a<t.length;a+=1)t[a].d()}}}let ff=new RegExp("(?<={).+(?=})"),vc=/{.+} ?/;function U1(n,e,t){let i;V(n,jf,r=>t(0,i=r));function s(r){return i.length?Fe(r):Ke(r)}return[i,s]}class W1 extends Se{constructor(e){super(),Ie(this,e,U1,B1,ge,{})}}const{document:kt,window:$t}=kf;function yc(n,e,t){const i=n.slice();return i[59]=e[t],i}function wc(n,e,t){const i=n.slice();return i[59]=e[t],i}function kc(n){let e;return{c(){e=g("style"),e.textContent=`* {\r
                pointer-events: none;\r
            }\r
        `},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function Cc(n){let e;return{c(){e=g("link"),m(e,"rel","preload"),m(e,"as","image"),m(e,"href",n[59])},m(t,i){P(t,e,i)},p:$,d(t){t&&N(e)}}}function Ec(n){let e;return{c(){e=g("style"),e.textContent=`body > div:not(.backgrounds),\r
            main > :not(.promptCont),\r
            .backgrounds > img,\r
            #donate,\r
            #resources,\r
            #changelog,\r
            #policy {\r
                filter: blur(0.5rem);\r
                pointer-events: none;\r
            }\r
            #account {\r
                filter: invert() blur(0.5rem) !important;\r
            }\r
            .sideFeatures {\r
                z-index: 3;\r
            }\r
            .sideFeatures button:hover,\r
            .sideFeatures button:focus,\r
            .info:hover,\r
            .info:focus {\r
                background-color: var(--transparent);\r
            }\r
            .sideFeatures button > .tooltip,\r
            .info:not(#credits) > .tooltip {\r
                opacity: 0 !important;\r
                visibility: hidden !important;\r
            }\r
        `},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function Ic(n){let e;return{c(){e=g("style"),e.textContent=`body {\r
                overflow: hidden;\r
            }\r
        `},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function Sc(n){let e;return{c(){e=g("style"),e.textContent=`body {\r
                pointer-events: none;\r
            }\r
            #donate,\r
            #account,\r
            #resources,\r
            #changelog,\r
            #policy,\r
            .mainFeatures,\r
            .sideFeatures,\r
            .statBox > .toggleCont,\r
            .ddButton > iconify-icon,\r
            .copyStatsButton {\r
                opacity: 0;\r
                visibility: hidden;\r
            }\r
            .gearBox .ddButton > iconify-icon {\r
                width: 15% !important;\r
            }\r
            .eqSlotIcon button > .tooltip,\r
            .gearSlotIcon button > .tooltip {\r
                opacity: 1;\r
                visibility: visible;\r
            }\r
            .calcBox {\r
                translate: -3%;\r
            }\r
            .currentBuild {\r
                left: 50% !important;\r
                padding: 2rem !important;\r
            }\r
            .currentBuild > button {\r
                min-width: 0 !important;\r
                width: 0;\r
                opacity: 0;\r
                visibility: hidden;\r
            }`},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function Tc(n){let e,t;return{c(){e=g("img"),m(e,"class","background svelte-nuvlra"),Qe(e.src,t=n[59])||m(e,"src",t),m(e,"alt",""),ue(e,"active",n[20].indexOf(n[59])==n[12])},m(i,s){P(i,e,s)},p(i,s){s[0]&1052672&&ue(e,"active",i[20].indexOf(i[59])==i[12])},d(i){i&&N(e)}}}function Nc(n){let e,t,i=Math.floor(n[19][n[2]]*100)+"",s,r,o,l;return{c(){e=g("span"),t=ie("Zoom: "),s=ie(i),r=g("b"),r.textContent="%",m(e,"class","info svelte-nuvlra"),m(e,"id","zoomLevel")},m(a,c){P(a,e,c),h(e,t),h(e,s),h(e,r),l=!0},p(a,c){(!l||c[0]&4)&&i!==(i=Math.floor(a[19][a[2]]*100)+"")&&Ee(s,i)},i(a){l||(a&&Ce(()=>{l&&(o||(o=me(e,Ke,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=me(e,Ke,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&N(e),a&&o&&o.end()}}}function H1(n){let e;return{c(){e=g("div"),e.innerHTML=`Fantastic Calculator is currently down for maintenance.
        <br/>
        Something big is coming... We&#39;ll be back soon!`,m(e,"class","maintenanceNotice ff-bg pos-abs border-tp br-1 bs svelte-nuvlra")},m(t,i){P(t,e,i)},p:$,i:$,o:$,d(t){t&&N(e)}}}function q1(n){let e,t=n[6]?"Account":"Log In",i,s,r,o,l,a,c,u,d,f,p,_,b,v,y,w,k,I,M,W,O,L,U,Y,T,C,H,z,j,S,A,G,Q,J,oe,ae,he,F=n[4].screenshot.ongoing&&Oc(n),D=n[3]&&Rc(n);u=new jy({}),f=new W0({}),v=new by({}),w=new Oy({}),I=new Hy({}),W=new e0({}),L=new W1({});let ce=n[4].screenshot.ongoing&&Ac(n);const de=[nw,tw,ew,$1,Z1,x1,X1,J1,Q1,Y1,K1,G1,V1,j1,z1],ye=[];function $e(Z,ke){return Z[4].item.ongoing?0:Z[14]||Z[4].share.ongoing?1:Z[4].export.ongoing?2:Z[4].save.ongoing?3:Z[4].load.ongoing&&!Z[9]?4:Z[4].delete.ongoing?5:Z[4].costs.ongoing?6:Z[4].bonus.ongoing?7:Z[4].randomize.ongoing?8:Z[4].login.ongoing?9:Z[4].resources.ongoing?10:Z[4].changelog.ongoing?11:Z[4].policy.ongoing?12:Z[4].donate.ongoing?13:Z[4].sync.ongoing?14:-1}~(T=$e(n))&&(C=ye[T]=de[T](n));let De=!n[16]&&Dc();return{c(){e=g("button"),i=ie(t),s=E(),r=g("button"),r.innerHTML='<iconify-icon icon="charm:stack"></iconify-icon> <span class="tooltip" id="left">Resources</span>',o=E(),l=g("main"),F&&F.c(),a=E(),D&&D.c(),c=E(),le(u.$$.fragment),d=E(),le(f.$$.fragment),p=E(),_=g("div"),b=g("div"),le(v.$$.fragment),y=E(),le(w.$$.fragment),k=E(),le(I.$$.fragment),M=E(),le(W.$$.fragment),O=E(),le(L.$$.fragment),U=E(),ce&&ce.c(),Y=E(),C&&C.c(),H=E(),z=g("button"),j=g("iconify-icon"),S=E(),A=g("span"),A.textContent="Changelog",G=E(),De&&De.c(),Q=E(),J=g("button"),J.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',m(e,"class","info svelte-nuvlra"),m(e,"id","account"),m(r,"class","info svelte-nuvlra"),m(r,"id","resources"),m(b,"class","eqCont svelte-nuvlra"),m(_,"class","calcBox svelte-nuvlra"),m(_,"id","calc"),m(l,"class","svelte-nuvlra"),Re(j,"icon","octicon:log-16"),m(A,"class","tooltip"),m(A,"id","right"),m(z,"class","info svelte-nuvlra"),m(z,"id","changelog"),m(J,"class","info svelte-nuvlra"),m(J,"id","policy")},m(Z,ke){P(Z,e,ke),h(e,i),P(Z,s,ke),P(Z,r,ke),P(Z,o,ke),P(Z,l,ke),F&&F.m(l,null),h(l,a),D&&D.m(l,null),h(l,c),se(u,l,null),h(l,d),se(f,l,null),h(l,p),h(l,_),h(_,b),se(v,b,null),h(b,y),se(w,b,null),h(_,k),se(I,_,null),h(l,M),se(W,l,null),h(l,O),se(L,l,null),h(l,U),ce&&ce.m(l,null),h(l,Y),~T&&ye[T].m(l,null),P(Z,H,ke),P(Z,z,ke),h(z,j),h(z,S),h(z,A),h(z,G),De&&De.m(z,null),P(Z,Q,ke),P(Z,J,ke),oe=!0,ae||(he=[R(e,"click",n[32]),R(r,"click",n[33]),R(z,"click",n[39]),R(J,"click",n[40])],ae=!0)},p(Z,ke){(!oe||ke[0]&64)&&t!==(t=Z[6]?"Account":"Log In")&&Ee(i,t),Z[4].screenshot.ongoing?F?(F.p(Z,ke),ke[0]&16&&B(F,1)):(F=Oc(Z),F.c(),B(F,1),F.m(l,a)):F&&(Be(),q(F,1,1,()=>{F=null}),Ue()),Z[3]?D?(D.p(Z,ke),ke[0]&8&&B(D,1)):(D=Rc(Z),D.c(),B(D,1),D.m(l,c)):D&&(Be(),q(D,1,1,()=>{D=null}),Ue()),Z[4].screenshot.ongoing?ce?(ce.p(Z,ke),ke[0]&16&&B(ce,1)):(ce=Ac(Z),ce.c(),B(ce,1),ce.m(l,Y)):ce&&(Be(),q(ce,1,1,()=>{ce=null}),Ue());let _e=T;T=$e(Z),T===_e?~T&&ye[T].p(Z,ke):(C&&(Be(),q(ye[_e],1,1,()=>{ye[_e]=null}),Ue()),~T?(C=ye[T],C?C.p(Z,ke):(C=ye[T]=de[T](Z),C.c()),B(C,1),C.m(l,null)):C=null),Z[16]?De&&(Be(),q(De,1,1,()=>{De=null}),Ue()):De?ke[0]&65536&&B(De,1):(De=Dc(),De.c(),B(De,1),De.m(z,null))},i(Z){oe||(B(F),B(D),B(u.$$.fragment,Z),B(f.$$.fragment,Z),B(v.$$.fragment,Z),B(w.$$.fragment,Z),B(I.$$.fragment,Z),B(W.$$.fragment,Z),B(L.$$.fragment,Z),B(ce),B(C),B(De),oe=!0)},o(Z){q(F),q(D),q(u.$$.fragment,Z),q(f.$$.fragment,Z),q(v.$$.fragment,Z),q(w.$$.fragment,Z),q(I.$$.fragment,Z),q(W.$$.fragment,Z),q(L.$$.fragment,Z),q(ce),q(C),q(De),oe=!1},d(Z){Z&&(N(e),N(s),N(r),N(o),N(l),N(H),N(z),N(Q),N(J)),F&&F.d(),D&&D.d(),re(u),re(f),re(v),re(w),re(I),re(W),re(L),ce&&ce.d(),~T&&ye[T].d(),De&&De.d(),ae=!1,ve(he)}}}function Oc(n){let e,t,i,s,r,o,l,a,c=n[18].armor.avg.toLocaleString()+" Gold",u,d,f,p,_,b,v,y,w,k=n[18].gear.avg.toLocaleString()+" Gold",I,M,W;return{c(){e=g("div"),t=g("div"),i=g("span"),i.textContent="Avg. armor cost:",s=E(),r=g("img"),l=E(),a=g("span"),u=ie(c),d=E(),f=g("div"),p=g("span"),p.textContent="Avg. gear cost:",_=E(),b=g("img"),y=E(),w=g("span"),I=ie(k),Qe(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(r,"src",o),m(r,"alt",""),m(r,"class","svelte-nuvlra"),m(t,"class","svelte-nuvlra"),Qe(b.src,v="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(b,"src",v),m(b,"alt",""),m(b,"class","svelte-nuvlra"),m(f,"class","svelte-nuvlra"),m(e,"class","costPreview svelte-nuvlra"),m(e,"id","specific")},m(O,L){P(O,e,L),h(e,t),h(t,i),h(t,s),h(t,r),h(t,l),h(t,a),h(a,u),h(e,d),h(e,f),h(f,p),h(f,_),h(f,b),h(f,y),h(f,w),h(w,I),W=!0},p(O,L){(!W||L[0]&262144)&&c!==(c=O[18].armor.avg.toLocaleString()+" Gold")&&Ee(u,c),(!W||L[0]&262144)&&k!==(k=O[18].gear.avg.toLocaleString()+" Gold")&&Ee(I,k)},i(O){W||(O&&Ce(()=>{W&&(M||(M=me(e,Ke,{duration:150},!0)),M.run(1))}),W=!0)},o(O){O&&(M||(M=me(e,Ke,{duration:150},!1)),M.run(0)),W=!1},d(O){O&&N(e),O&&M&&M.end()}}}function Rc(n){let e,t,i=n[3].name+"",s,r,o,l,a,c,u,d,f,p,_=n[3].desc+"",b,v,y,w,k;return{c(){e=g("div"),t=g("span"),s=ie(i),r=E(),o=g("button"),o.innerHTML='<iconify-icon icon="ri:share-fill"></iconify-icon> <span class="tooltip" id="right">Share build</span>',l=E(),a=g("span"),c=ie(`Description / Notes:\r
                    `),u=g("br"),d=E(),f=g("br"),p=E(),b=ie(_),m(t,"id","buildName"),m(t,"class","svelte-nuvlra"),m(o,"class","svelte-nuvlra"),m(a,"class","tooltip"),m(a,"id","bottom"),m(e,"class","currentBuild svelte-nuvlra"),ue(e,"no-tooltip",n[13])},m(I,M){P(I,e,M),h(e,t),h(t,s),h(e,r),h(e,o),h(e,l),h(e,a),h(a,c),h(a,u),h(a,d),h(a,f),h(a,p),h(a,b),y=!0,w||(k=[R(o,"click",n[34]),R(o,"mouseenter",n[35]),R(o,"mouseleave",n[36])],w=!0)},p(I,M){(!y||M[0]&8)&&i!==(i=I[3].name+"")&&Ee(s,i),(!y||M[0]&8)&&_!==(_=I[3].desc+"")&&Ee(b,_),(!y||M[0]&8192)&&ue(e,"no-tooltip",I[13])},i(I){y||(I&&Ce(()=>{y&&(v||(v=me(e,Ke,{duration:100},!0)),v.run(1))}),y=!0)},o(I){I&&(v||(v=me(e,Ke,{duration:100},!1)),v.run(0)),y=!1},d(I){I&&N(e),I&&v&&v.end(),w=!1,ve(k)}}}function Ac(n){let e,t,i,s,r,o,l,a,c=n[18].total.avg.toLocaleString()+" Gold",u,d,f;return{c(){e=g("div"),t=g("div"),i=g("span"),i.textContent="Avg. total cost:",s=E(),r=g("img"),l=E(),a=g("span"),u=ie(c),Qe(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(r,"src",o),m(r,"alt",""),m(r,"class","svelte-nuvlra"),m(t,"class","svelte-nuvlra"),m(e,"class","costPreview svelte-nuvlra"),m(e,"id","total")},m(p,_){P(p,e,_),h(e,t),h(t,i),h(t,s),h(t,r),h(t,l),h(t,a),h(a,u),f=!0},p(p,_){(!f||_[0]&262144)&&c!==(c=p[18].total.avg.toLocaleString()+" Gold")&&Ee(u,c)},i(p){f||(p&&Ce(()=>{f&&(d||(d=me(e,Ke,{duration:150},!0)),d.run(1))}),f=!0)},o(p){p&&(d||(d=me(e,Ke,{duration:150},!1)),d.run(0)),f=!1},d(p){p&&N(e),p&&d&&d.end()}}}function z1(n){let e,t,i;return t=new P1({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function j1(n){let e,t,i;return t=new E1({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function V1(n){let e,t,i;return t=new w1({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function G1(n){let e,t,i;return t=new $0({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function K1(n){let e,t,i;return t=new n1({}),t.$on("loadPending",function(){gn(n[10])&&n[10].apply(this,arguments)}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p(s,r){n=s},i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function Y1(n){let e,t,i;return t=new T1({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function Q1(n){let e,t,i;return t=new K0({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function J1(n){let e,t,i;return t=new z0({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function X1(n){let e,t,i;return t=new r1({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function x1(n){let e,t,i;return t=new F0({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function Z1(n){let e,t,i;return t=new P0({}),t.$on("buildLoad",n[38]),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function $1(n){let e,t,i;return t=new N0({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function ew(n){let e,t,i;return t=new i0({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function tw(n){let e,t,i,s;function r(l){n[37](l)}let o={};return n[9]!==void 0&&(o.loadID=n[9]),t=new y0({props:o}),fe.push(()=>Me(t,"loadID",r)),t.$on("resetActions",n[22]),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(l,a){P(l,e,a),se(t,e,null),s=!0},p(l,a){const c={};!i&&a[0]&512&&(i=!0,c.loadID=l[9],Pe(()=>i=!1)),t.$set(c)},i(l){s||(B(t.$$.fragment,l),s=!0)},o(l){q(t.$$.fragment,l),s=!1},d(l){l&&N(e),re(t)}}}function nw(n){let e,t,i;return t=new b1({}),{c(){e=g("div"),le(t.$$.fragment),m(e,"class","promptCont svelte-nuvlra")},m(s,r){P(s,e,r),se(t,e,null),i=!0},p:$,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function Dc(n){let e,t,i;return{c(){e=g("iconify-icon"),Re(e,"icon","uil:exclamation"),Re(e,"id","unseen"),Re(e,"class","svelte-nuvlra")},m(s,r){P(s,e,r),i=!0},i(s){i||(s&&Ce(()=>{i&&(t||(t=me(e,Ke,{duration:150},!0)),t.run(1))}),i=!0)},o(s){s&&(t||(t=me(e,Ke,{duration:150},!1)),t.run(0)),i=!1},d(s){s&&N(e),s&&t&&t.end()}}}function Pc(n){let e;return{c(){e=g("div"),e.innerHTML='<iconify-icon icon="eos-icons:three-dots-loading" class="svelte-nuvlra"></iconify-icon>',m(e,"class","promptCont svelte-nuvlra")},m(t,i){P(t,e,i)},d(t){t&&N(e)}}}function iw(n){let e,t,i,s,r,o,l,a,c,u,d,f,p,_,b,v,y,w,k,I,M,W,O,L,U,Y,T;Ce(n[29]);let C=!n[7]&&kc(),H=Ae(n[20]),z=[];for(let D=0;D<H.length;D+=1)z[D]=Cc(wc(n,H,D));let j=(n[15]||!n[7])&&Ec(),S=n[4].screenshot.ongoing&&n[19][n[2]]<=1&&Ic(),A=n[4].screenshot.ongoing&&Sc(),G=Ae(n[20]),Q=[];for(let D=0;D<G.length;D+=1)Q[D]=Tc(yc(n,G,D));let J=n[8]&&Nc(n);const oe=[q1,H1],ae=[];function he(D,ce){return 1}k=he(),I=ae[k]=oe[k](n);let F=!n[7]&&Pc();return{c(){e=E(),C&&C.c(),t=nt();for(let D=0;D<z.length;D+=1)z[D].c();i=nt(),j&&j.c(),s=nt(),S&&S.c(),r=nt(),A&&A.c(),o=nt(),l=E(),a=g("div"),c=g("audio"),d=E(),f=g("div");for(let D=0;D<Q.length;D+=1)Q[D].c();p=E(),J&&J.c(),_=E(),b=g("span"),b.innerHTML=`<iconify-icon icon="ic:baseline-discord" class="svelte-nuvlra"></iconify-icon>
    xt.ss
    <span class="tooltip svelte-nuvlra" id="right">Contact me on Discord!</span>`,v=E(),y=g("button"),y.innerHTML=`<a href="https://ko-fi.com/xt8ss" target="_blank" class="svelte-nuvlra">Support me
        <img src="kofi-badge.png" alt="" class="svelte-nuvlra"/></a>`,w=E(),I.c(),M=E(),W=g("span"),W.textContent=`${sw}`,O=E(),F&&F.c(),L=nt(),Qe(c.src,u=rf+"/audios/select.mp3")||m(c,"src",u),m(f,"class","backgrounds"),m(b,"class","info svelte-nuvlra"),m(b,"id","credits"),m(y,"class","info svelte-nuvlra"),m(y,"id","donate"),m(W,"class","info svelte-nuvlra"),m(W,"id","version")},m(D,ce){P(D,e,ce),C&&C.m(kt.head,null),h(kt.head,t);for(let de=0;de<z.length;de+=1)z[de]&&z[de].m(kt.head,null);h(kt.head,i),j&&j.m(kt.head,null),h(kt.head,s),S&&S.m(kt.head,null),h(kt.head,r),A&&A.m(kt.head,null),h(kt.head,o),P(D,l,ce),P(D,a,ce),h(a,c),n[31](c),P(D,d,ce),P(D,f,ce);for(let de=0;de<Q.length;de+=1)Q[de]&&Q[de].m(f,null);P(D,p,ce),J&&J.m(D,ce),P(D,_,ce),P(D,b,ce),P(D,v,ce),P(D,y,ce),P(D,w,ce),ae[k].m(D,ce),P(D,M,ce),P(D,W,ce),P(D,O,ce),F&&F.m(D,ce),P(D,L,ce),U=!0,Y||(T=[R($t,"beforeunload",n[25]),R($t,"storage",n[26]),R($t,"click",rw),R($t,"wheel",n[27],{passive:!1}),R($t,"keydown",n[28]),R($t,"resize",n[29]),R(kt,"visibilitychange",n[30])],Y=!0)},p(D,ce){if(D[7]?C&&(C.d(1),C=null):C||(C=kc(),C.c(),C.m(t.parentNode,t)),ce[0]&1048576){H=Ae(D[20]);let de;for(de=0;de<H.length;de+=1){const ye=wc(D,H,de);z[de]?z[de].p(ye,ce):(z[de]=Cc(ye),z[de].c(),z[de].m(i.parentNode,i))}for(;de<z.length;de+=1)z[de].d(1);z.length=H.length}if(D[15]||!D[7]?j||(j=Ec(),j.c(),j.m(s.parentNode,s)):j&&(j.d(1),j=null),D[4].screenshot.ongoing&&D[19][D[2]]<=1?S||(S=Ic(),S.c(),S.m(r.parentNode,r)):S&&(S.d(1),S=null),D[4].screenshot.ongoing?A||(A=Sc(),A.c(),A.m(o.parentNode,o)):A&&(A.d(1),A=null),ce[0]&1052672){G=Ae(D[20]);let de;for(de=0;de<G.length;de+=1){const ye=yc(D,G,de);Q[de]?Q[de].p(ye,ce):(Q[de]=Tc(ye),Q[de].c(),Q[de].m(f,null))}for(;de<Q.length;de+=1)Q[de].d(1);Q.length=G.length}D[8]?J?(J.p(D,ce),ce[0]&256&&B(J,1)):(J=Nc(D),J.c(),B(J,1),J.m(_.parentNode,_)):J&&(Be(),q(J,1,1,()=>{J=null}),Ue()),I.p(D,ce),D[7]?F&&(F.d(1),F=null):F||(F=Pc(),F.c(),F.m(L.parentNode,L))},i(D){U||(B(J),B(I),U=!0)},o(D){q(J),q(I),U=!1},d(D){D&&(N(e),N(l),N(a),N(d),N(f),N(p),N(_),N(b),N(v),N(y),N(w),N(M),N(W),N(O),N(L)),C&&C.d(D),N(t),st(z,D),N(i),j&&j.d(D),N(s),S&&S.d(D),N(r),A&&A.d(D),N(o),n[31](null),st(Q,D),J&&J.d(D),ae[k].d(D),F&&F.d(D),Y=!1,ve(T)}}}let sw="v3.27.0",Mc=!0;const rw=n=>{};function ow(n,e,t){let i,s,r,o,l,a,c,u,d,f,p;V(n,St,x=>t(3,s=x)),V(n,ee,x=>t(4,r=x)),V(n,Nn,x=>t(15,o=x)),V(n,Tn,x=>t(44,l=x)),V(n,hs,x=>t(5,a=x)),V(n,Qr,x=>t(6,c=x)),V(n,Jr,x=>t(24,u=x)),V(n,Xn,x=>t(45,x)),V(n,Ft,x=>t(46,x)),V(n,Jn,x=>t(47,x)),V(n,Nt,x=>t(48,x)),V(n,kr,x=>t(16,d=x)),V(n,Hs,x=>t(49,x)),V(n,Ot,x=>t(50,x)),V(n,Kc,x=>t(51,x)),V(n,vi,x=>t(52,x)),V(n,Ut,x=>t(53,x)),V(n,tl,x=>t(17,f=x)),V(n,vt,x=>t(18,p=x));let _=!!Mc,b,v,y=7,w=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],k=!1,I,M=!Mc;location.href.includes("ls=true");let W,O,L=[],U=[],Y,T,C=9;for(let x=0;x<C;x++)L.push(`backgrounds/BG${x}.jpg`);function H(x){T=Math.floor(Math.random()*x.length)}H(L);function z(){t(12,Y=T),U.push(T)}z(),function x(){setTimeout(()=>{if(H(L),!U.length)z();else if(U.length>3&&(U=U.slice(1)),!U.includes(T))z();else{let yt=[...Array(C).keys()].filter(pe=>!U.includes(pe));H(yt),z()}document.hasFocus&&x()},45e3)}();function j(){I=setTimeout(()=>{t(8,k=!1)},750)}function S(){clearTimeout(I),t(8,k=!0),j()}function A(){K(ee,r.export.status=null,r),K(ee,r.export.ongoing=!1,r),K(ee,r.save.status=null,r),K(ee,r.save.ongoing=!1,r),K(ee,r.load.status=null,r),K(ee,r.load.ongoing=!1,r),K(ee,r.delete.status=null,r),K(ee,r.delete.ongoing=!1,r),K(ee,r.share.ongoing=!1,r),K(ee,r.message="",r)}function G(){let x=v>b;document.documentElement.style.fontSize=`${(x?.75:window.outerWidth/window.outerHeight/2)*w[y]}vh`}let Q=!1;const J=x=>{(a||o)&&!r.sync.ongoing&&x.preventDefault()},oe=x=>{/^f[a-z]{1,2}-/.test(x.key)&&localStorage.setItem(x.key,x.oldValue)},ae=x=>{let yt=x.wheelDeltaY;if(x.ctrlKey){if(x.preventDefault(),w[y]==.2&&yt<0||w[y]==5&&yt>0)return;yt>0?t(2,y++,y):t(2,y--,y),S()}},he=x=>{x.ctrlKey&&(x.key=="-"||x.key=="+"||x.code=="Equal"||x.key=="0")&&(x.preventDefault(),(x.key=="+"||x.code=="Equal")&&w[y]!=5?t(2,y++,y):x.key=="-"&&w[y]!=.2?t(2,y--,y):x.key=="0"&&w[y]!=1&&t(2,y=7),S()),o&&qv(x)};function F(){t(0,b=$t.outerHeight),t(1,v=$t.outerWidth)}const D=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,b=window.outerHeight),t(1,v=window.outerWidth),G()})};function ce(x){fe[x?"unshift":"push"](()=>{f.select=x,tl.set(f)})}const de=x=>{Vt(x),o||K(ee,r.login.ongoing=!0,r)},ye=x=>{Vt(x),o||K(ee,r.resources.ongoing=!0,r)},$e=()=>{o||K(ee,r.share.ongoing=!0,r)},De=()=>t(13,Q=!0),Z=()=>t(13,Q=!1);function ke(x){M=x,t(9,M)}const _e=x=>O(x.detail.build,x.detail.id),We=x=>{Vt(x),!o&&(K(ee,r.changelog.ongoing=!0,r),K(kr,d=!0,d))},rt=x=>{Vt(x),o||K(ee,r.policy.ongoing=!0,r)};return n.$$.update=()=>{if(n.$$.dirty[0]&16777219&&(v||b)&&u)for(let x of u)Yo(x.node,x.itemName);n.$$.dirty[0]&7&&(v||b||y)&&G(),n.$$.dirty[0]&96&&a&&!c&&(K(hs,a=!1,a),K(Tn,l=!1,l)),n.$$.dirty[0]&16&&t(14,i=r.export.status||r.save.status||r.load.status||r.delete.status),n.$$.dirty[0]&16&&K(Nn,o=r.item.ongoing||r.export.ongoing||r.save.ongoing||r.load.ongoing||r.delete.ongoing||r.share.ongoing||r.costs.ongoing||r.bonus.ongoing||r.randomize.ongoing||r.login.ongoing||r.resources.ongoing||r.changelog.ongoing||r.policy.ongoing||r.donate.ongoing||r.sync.ongoing,o),n.$$.dirty[0]&8&&(document.title=(s?s.name+" - ":"")+"Fantastic Calculator")},[b,v,y,s,r,a,c,_,k,M,W,O,Y,Q,i,o,d,f,p,w,L,S,A,G,u,J,oe,ae,he,F,D,ce,de,ye,$e,De,Z,ke,_e,We,rt]}class lw extends Se{constructor(e){super(),Ie(this,e,ow,iw,ge,{},null,[-1,-1,-1])}}new lw({target:document.body});
