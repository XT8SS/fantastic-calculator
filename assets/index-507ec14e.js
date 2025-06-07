var z1=Object.defineProperty;var V1=(n,e,t)=>e in n?z1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Yn=(n,e,t)=>(V1(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function ie(){}const Fr=n=>n;function j1(n,e){for(const t in e)n[t]=e[t];return n}function vp(n){return n()}function cd(){return Object.create(null)}function we(n){n.forEach(vp)}function Vi(n){return typeof n=="function"}function ve(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Jr;function mt(n,e){return n===e?!0:(Jr||(Jr=document.createElement("a")),Jr.href=e,n===Jr.href)}function G1(n){return Object.keys(n).length===0}function bp(n,...e){if(n==null){for(const i of e)i(void 0);return ie}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function K1(n){let e;return bp(n,t=>e=t)(),e}function J(n,e,t){n.$$.on_destroy.push(bp(e,t))}function Y1(n,e,t,i){if(n){const s=yp(n,e,t,i);return n[0](s)}}function yp(n,e,t,i){return n[1]&&i?j1(t.ctx.slice(),n[1](i(e))):t.ctx}function Q1(n,e,t,i){if(n[2]&&i){const s=n[2](i(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let l=0;l<o;l+=1)r[l]=e.dirty[l]|s[l];return r}return e.dirty|s}return e.dirty}function X1(n,e,t,i,s,r){if(s){const o=yp(e,t,i,r);n.p(o,s)}}function J1(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function Y(n,e,t){return n.set(t),e}function xp(n){return n&&Vi(n.destroy)?n.destroy:ie}const Cp=typeof window<"u";let Zo=Cp?()=>window.performance.now():()=>Date.now(),Nc=Cp?n=>requestAnimationFrame(n):ie;const ls=new Set;function Ep(n){ls.forEach(e=>{e.c(n)||(ls.delete(e),e.f())}),ls.size!==0&&Nc(Ep)}function el(n){let e;return ls.size===0&&Nc(Ep),{promise:new Promise(t=>{ls.add(e={c:n,f:t})}),abort(){ls.delete(e)}}}const Z1=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function m(n,e){n.appendChild(e)}function wp(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function ev(n){const e=C("style");return e.textContent="/* empty */",tv(wp(n),e),e.sheet}function tv(n,e){return m(n.head||n,e),e.sheet}function q(n,e,t){n.insertBefore(e,t||null)}function $(n){n.parentNode&&n.parentNode.removeChild(n)}function Lt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function C(n){return document.createElement(n)}function nv(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function re(n){return document.createTextNode(n)}function O(){return re(" ")}function Dt(){return re("")}function U(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function y(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function $e(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:y(n,e,t)}function kp(n){return n===""?null:+n}function iv(n){return Array.from(n.childNodes)}function Se(n,e){e=""+e,n.data!==e&&(n.data=e)}function In(n,e){n.value=e??""}function ot(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}let Zr;function sv(){if(Zr===void 0){Zr=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{Zr=!0}}return Zr}function fi(n,e){getComputedStyle(n).position==="static"&&(n.style.position="relative");const i=C("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=sv();let r;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=U(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{r=U(i.contentWindow,"resize",e),e()}),m(n,i),()=>{(s||r&&i.contentWindow)&&r(),$(i)}}function ce(n,e,t){n.classList.toggle(e,!!t)}function Ip(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}class Sp{constructor(e=!1){Yn(this,"is_svg",!1);Yn(this,"e");Yn(this,"n");Yn(this,"t");Yn(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,i=null){this.e||(this.is_svg?this.e=nv(t.nodeName):this.e=C(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)q(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach($)}}const _o=new Map;let mo=0;function rv(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function ov(n,e){const t={stylesheet:ev(e),rules:{}};return _o.set(n,t),t}function _r(n,e,t,i,s,r,o,l=0){const a=16.666/i;let c=`{
`;for(let g=0;g<=1;g+=a){const x=e+(t-e)*r(g);c+=g*100+`%{${o(x,1-x)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${rv(u)}_${l}`,d=wp(n),{stylesheet:h,rules:p}=_o.get(d)||ov(d,n);p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const _=n.style.animation||"";return n.style.animation=`${_?`${_}, `:""}${f} ${i}ms linear ${s}ms 1 both`,mo+=1,f}function mr(n,e){const t=(n.style.animation||"").split(", "),i=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-i.length;s&&(n.style.animation=i.join(", "),mo-=s,mo||lv())}function lv(){Nc(()=>{mo||(_o.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&$(e)}),_o.clear())})}function av(n,e,t,i){if(!e)return ie;const s=n.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return ie;const{delay:r=0,duration:o=300,easing:l=Fr,start:a=Zo()+r,end:c=a+o,tick:u=ie,css:f}=t(n,{from:e,to:s},i);let d=!0,h=!1,p;function _(){f&&(p=_r(n,0,1,o,r,l,f)),r||(h=!0)}function g(){f&&mr(n,p),d=!1}return el(x=>{if(!h&&x>=a&&(h=!0),h&&x>=c&&(u(1,0),g()),!d)return!1;if(h){const v=x-a,b=0+1*l(v/o);u(b,1-b)}return!0}),_(),u(0,1),g}function cv(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,s=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,Ap(n,s)}}function Ap(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform;n.style.transform=`${s} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let gr;function rr(n){gr=n}function Tp(){if(!gr)throw new Error("Function called outside component initialization");return gr}function uv(n){Tp().$$.on_mount.push(n)}function wn(){const n=Tp();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=Ip(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const ns=[],de=[];let as=[];const Oa=[],dv=Promise.resolve();let Pa=!1;function fv(){Pa||(Pa=!0,dv.then(Dp))}function Ie(n){as.push(n)}function Ge(n){Oa.push(n)}const Sl=new Set;let Ji=0;function Dp(){if(Ji!==0)return;const n=gr;do{try{for(;Ji<ns.length;){const e=ns[Ji];Ji++,rr(e),hv(e.$$)}}catch(e){throw ns.length=0,Ji=0,e}for(rr(null),ns.length=0,Ji=0;de.length;)de.pop()();for(let e=0;e<as.length;e+=1){const t=as[e];Sl.has(t)||(Sl.add(t),t())}as.length=0}while(ns.length);for(;Oa.length;)Oa.pop()();Pa=!1,Sl.clear(),rr(n)}function hv(n){if(n.fragment!==null){n.update(),we(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ie)}}function pv(n){const e=[],t=[];as.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),as=e}let js;function Rc(){return js||(js=Promise.resolve(),js.then(()=>{js=null})),js}function Ai(n,e,t){n.dispatchEvent(Ip(`${e?"intro":"outro"}${t}`))}const ro=new Set;let Sn;function Je(){Sn={r:0,c:[],p:Sn}}function Ze(){Sn.r||we(Sn.c),Sn=Sn.p}function j(n,e){n&&n.i&&(ro.delete(n),n.i(e))}function G(n,e,t,i){if(n&&n.o){if(ro.has(n))return;ro.add(n),Sn.c.push(()=>{ro.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}const Bc={duration:0};function Fc(n,e,t){const i={direction:"in"};let s=e(n,t,i),r=!1,o,l,a=0;function c(){o&&mr(n,o)}function u(){const{delay:d=0,duration:h=300,easing:p=Fr,tick:_=ie,css:g}=s||Bc;g&&(o=_r(n,0,1,h,d,p,g,a++)),_(0,1);const x=Zo()+d,v=x+h;l&&l.abort(),r=!0,Ie(()=>Ai(n,!0,"start")),l=el(b=>{if(r){if(b>=v)return _(1,0),Ai(n,!0,"end"),c(),r=!1;if(b>=x){const E=p((b-x)/h);_(E,1-E)}}return r})}let f=!1;return{start(){f||(f=!0,mr(n),Vi(s)?(s=s(i),Rc().then(u)):u())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function Oc(n,e,t){const i={direction:"out"};let s=e(n,t,i),r=!0,o;const l=Sn;l.r+=1;let a;function c(){const{delay:u=0,duration:f=300,easing:d=Fr,tick:h=ie,css:p}=s||Bc;p&&(o=_r(n,1,0,f,u,d,p));const _=Zo()+u,g=_+f;Ie(()=>Ai(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),el(x=>{if(r){if(x>=g)return h(0,1),Ai(n,!1,"end"),--l.r||we(l.c),!1;if(x>=_){const v=d((x-_)/f);h(1-v,v)}}return r})}return Vi(s)?Rc().then(()=>{s=s(i),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&s.tick&&s.tick(1,0),r&&(o&&mr(n,o),r=!1)}}}function ge(n,e,t,i){let r=e(n,t,{direction:"both"}),o=i?0:1,l=null,a=null,c=null,u;function f(){c&&mr(n,c)}function d(p,_){const g=p.b-o;return _*=Math.abs(g),{a:o,b:p.b,d:g,duration:_,start:p.start,end:p.start+_,group:p.group}}function h(p){const{delay:_=0,duration:g=300,easing:x=Fr,tick:v=ie,css:b}=r||Bc,E={start:Zo()+_,b:p};p||(E.group=Sn,Sn.r+=1),"inert"in n&&(p?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=E:(b&&(f(),c=_r(n,o,p,g,_,x,b)),p&&v(0,1),l=d(E,g),Ie(()=>Ai(n,p,"start")),el(w=>{if(a&&w>a.start&&(l=d(a,g),a=null,Ai(n,l.b,"start"),b&&(f(),c=_r(n,o,l.b,l.duration,0,x,r.css))),l){if(w>=l.end)v(o=l.b,1-o),Ai(n,l.b,"end"),a||(l.b?f():--l.group.r||we(l.group.c)),l=null;else if(w>=l.start){const T=w-l.start;o=l.a+l.d*x(T/l.duration),v(o,1-o)}}return!!(l||a)}))}return{run(p){Vi(r)?Rc().then(()=>{r=r({direction:p?"in":"out"}),h(p)}):h(p)},end(){f(),l=a=null}}}function Ue(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function _v(n,e){G(n,1,1,()=>{e.delete(n.key)})}function mv(n,e){n.f(),_v(n,e)}function gv(n,e,t,i,s,r,o,l,a,c,u,f){let d=n.length,h=r.length,p=d;const _={};for(;p--;)_[n[p].key]=p;const g=[],x=new Map,v=new Map,b=[];for(p=h;p--;){const k=f(s,r,p),A=t(k);let N=o.get(A);N?i&&b.push(()=>N.p(k,e)):(N=c(A,k),N.c()),x.set(A,g[p]=N),A in _&&v.set(A,Math.abs(p-_[A]))}const E=new Set,w=new Set;function T(k){j(k,1),k.m(l,u),o.set(k.key,k),u=k.first,h--}for(;d&&h;){const k=g[h-1],A=n[d-1],N=k.key,D=A.key;k===A?(u=k.first,d--,h--):x.has(D)?!o.has(N)||E.has(N)?T(k):w.has(D)?d--:v.get(N)>v.get(D)?(w.add(N),T(k)):(E.add(D),d--):(a(A,o),d--)}for(;d--;){const k=n[d];x.has(k.key)||a(k,o)}for(;h;)T(g[h-1]);return we(b),g}function Ke(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function ae(n){n&&n.c()}function oe(n,e,t){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),Ie(()=>{const r=n.$$.on_mount.map(vp).filter(Vi);n.$$.on_destroy?n.$$.on_destroy.push(...r):we(r),n.$$.on_mount=[]}),s.forEach(Ie)}function le(n,e){const t=n.$$;t.fragment!==null&&(pv(t.after_update),we(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function vv(n,e){n.$$.dirty[0]===-1&&(ns.push(n),fv(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Te(n,e,t,i,s,r,o=null,l=[-1]){const a=gr;rr(n);const c=n.$$={fragment:null,ctx:[],props:r,update:ie,not_equal:s,bound:cd(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:cd(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,d,...h)=>{const p=h.length?h[0]:d;return c.ctx&&s(c.ctx[f],c.ctx[f]=p)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](p),u&&vv(n,f)),d}):[],c.update(),u=!0,we(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const f=iv(e.target);c.fragment&&c.fragment.l(f),f.forEach($)}else c.fragment&&c.fragment.c();e.intro&&j(n.$$.fragment),oe(n,e.target,e.anchor),Dp()}rr(a)}class De{constructor(){Yn(this,"$$");Yn(this,"$$set")}$destroy(){le(this,1),this.$destroy=ie}$on(e,t){if(!Vi(t))return ie;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!G1(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const bv="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(bv);const Zi=[];function pt(n,e=ie){let t;const i=new Set;function s(l){if(ve(n,l)&&(n=l,t)){const a=!Zi.length;for(const c of i)c[1](),Zi.push(c,n);if(a){for(let c=0;c<Zi.length;c+=2)Zi[c][0](Zi[c+1]);Zi.length=0}}}function r(l){s(l(n))}function o(l,a=ie){const c=[l,a];return i.add(c),i.size===1&&(t=e(s,r)||ie),l(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}let ud=0,dd=localStorage.getItem("changelogSeen"),fd=localStorage.getItem("supportMe"),Ma=pt({}),go=pt(!1),vs=pt(""),La=pt([]),hd=pt({select:new Audio}),xn=pt({}),Cn=pt({}),Qt=pt({armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0}),Bn=pt({}),Pc=pt([]),Al=pt({}),ln=pt(),vo=pt(!1),dn=pt({}),ni=pt(!1),oo=pt(dd?JSON.parse(dd):!1),Ti=pt(fd?JSON.parse(fd):{showAgain:!0,timesDenied:0,totalVisits:0,lastVisits:0}),Bi=pt(!1),bs=pt({}),ys=pt({}),yv=pt({}),rn=pt({armor:{min:0,avg:0,max:0},gear:{min:0,avg:0,max:0},total:{min:0,avg:0,max:0}}),cs=pt({}),Gs=pt({parasol:!0,armor:!0,gear:!0,basic:!0}),ne=pt({item:{ongoing:!1,data:null},export:{ongoing:!1,status:null},save:{ongoing:!1,status:null},load:{ongoing:!1,status:null},delete:{ongoing:!1,status:null},share:{ongoing:!1},costs:{ongoing:!1},bonus:{ongoing:!1},screenshot:{ongoing:!1},randomize:{ongoing:!1},login:{ongoing:!1},resources:{ongoing:!1},changelog:{ongoing:!1},policy:{ongoing:!1},donate:{ongoing:!1},sync:{ongoing:!1},message:""});dn.subscribe(()=>{ud++,setTimeout(()=>{ud>1&&window.history.replaceState(null,null,location.origin+location.pathname)})});oo.subscribe(n=>window.localStorage.setItem("changelogSeen",JSON.stringify(n)));Ti.subscribe(n=>localStorage.setItem("supportMe",JSON.stringify(n)));/**
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
 */const Np={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const se=function(n,e){if(!n)throw Rs(e)},Rs=function(n){return new Error("Firebase Database ("+Np.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Rp=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},xv=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Mc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,a=s+2<n.length,c=a?n[s+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,h=c&63;a||(h=64,o||(d=64)),i.push(t[u],t[f],t[d],t[h])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||c==null||f==null)throw new Cv;const d=r<<2|l>>4;if(i.push(d),c!==64){const h=l<<4&240|c>>2;if(i.push(h),f!==64){const p=c<<6&192|f;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};let Cv=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const Bp=function(n){const e=Rp(n);return Mc.encodeByteArray(e,!0)},bo=function(n){return Bp(n).replace(/\./g,"")},yo=function(n){try{return Mc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ev(n){return Fp(void 0,n)}function Fp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!wv(t)||(n[t]=Fp(n[t],e[t]));return n}function wv(n){return n!=="__proto__"}/**
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
 */function kv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Iv=()=>kv().__FIREBASE_DEFAULTS__,Sv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Av=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&yo(n[1]);return e&&JSON.parse(e)},Lc=()=>{try{return Iv()||Sv()||Av()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Op=n=>{var e,t;return(t=(e=Lc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Tv=n=>{const e=Op(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Pp=()=>{var n;return(n=Lc())===null||n===void 0?void 0:n.config},Mp=n=>{var e;return(e=Lc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */let tl=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}};/**
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
 */function Dv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[bo(JSON.stringify(t)),bo(JSON.stringify(o)),l].join(".")}/**
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $c(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function Nv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rv(){const n=Vt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $p(){return Np.NODE_ADMIN===!0}function Bv(){try{return typeof indexedDB=="object"}catch{return!1}}function Fv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ov="FirebaseError";let Bs=class Hp extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ov,Object.setPrototypeOf(this,Hp.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}},Or=class{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Pv(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Bs(s,l,i)}};function Pv(n,e){return n.replace(Mv,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Mv=/\{\$([^}]+)}/g;/**
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
 */function vr(n){return JSON.parse(n)}function kt(n){return JSON.stringify(n)}/**
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
 */const Up=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=vr(yo(r[0])||""),t=vr(yo(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Lv=function(n){const e=Up(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},$v=function(n){const e=Up(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function On(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function xs(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function $a(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xo(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Co(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(pd(r)&&pd(o)){if(!Co(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function pd(n){return n!==null&&typeof n=="object"}/**
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
 */function Fs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */let Hv=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)i[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const d=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):f<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(s<<5|s>>>27)+c+a+u+i[f]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}};function Uv(n,e){const t=new Wv(n,e);return t.subscribe.bind(t)}class Wv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");qv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Tl),s.error===void 0&&(s.error=Tl),s.complete===void 0&&(s.complete=Tl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Tl(){}function Hc(n,e){return`${n} failed: ${e} argument `}/**
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
 */const zv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,se(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},nl=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Jt(n){return n&&n._delegate?n._delegate:n}let Fi=class{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const yi="[DEFAULT]";/**
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
 */let Vv=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new tl;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gv(e))try{this.getOrInitializeService({instanceIdentifier:yi})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yi){return this.instances.has(e)}getOptions(e=yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:jv(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yi){return this.component?this.component.multipleInstances?e:yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function jv(n){return n===yi?void 0:n}function Gv(n){return n.instantiationMode==="EAGER"}/**
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
 */let Kv=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};/**
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
 */var it;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(it||(it={}));const Yv={debug:it.DEBUG,verbose:it.VERBOSE,info:it.INFO,warn:it.WARN,error:it.ERROR,silent:it.SILENT},Qv=it.INFO,Xv={[it.DEBUG]:"log",[it.VERBOSE]:"log",[it.INFO]:"info",[it.WARN]:"warn",[it.ERROR]:"error"},Jv=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Xv[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Uc=class{constructor(e){this.name=e,this._logLevel=Qv,this._logHandler=Jv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in it))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,it.DEBUG,...e),this._logHandler(this,it.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,it.VERBOSE,...e),this._logHandler(this,it.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,it.INFO,...e),this._logHandler(this,it.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,it.WARN,...e),this._logHandler(this,it.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,it.ERROR,...e),this._logHandler(this,it.ERROR,...e)}};const Zv=(n,e)=>e.some(t=>n instanceof t);let _d,md;function eb(){return _d||(_d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tb(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wp=new WeakMap,Ha=new WeakMap,qp=new WeakMap,Dl=new WeakMap,Wc=new WeakMap;function nb(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ii(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wp.set(t,n)}).catch(()=>{}),Wc.set(e,n),e}function ib(n){if(Ha.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ha.set(n,e)}let Ua={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ha.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ii(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sb(n){Ua=n(Ua)}function rb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Nl(this),e,...t);return qp.set(i,e.sort?e.sort():[e]),ii(i)}:tb().includes(n)?function(...e){return n.apply(Nl(this),e),ii(Wp.get(this))}:function(...e){return ii(n.apply(Nl(this),e))}}function ob(n){return typeof n=="function"?rb(n):(n instanceof IDBTransaction&&ib(n),Zv(n,eb())?new Proxy(n,Ua):n)}function ii(n){if(n instanceof IDBRequest)return nb(n);if(Dl.has(n))return Dl.get(n);const e=ob(n);return e!==n&&(Dl.set(n,e),Wc.set(e,n)),e}const Nl=n=>Wc.get(n);function lb(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),l=ii(o);return i&&o.addEventListener("upgradeneeded",a=>{i(ii(o.result),a.oldVersion,a.newVersion,ii(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const ab=["get","getKey","getAll","getAllKeys","count"],cb=["put","add","delete","clear"],Rl=new Map;function gd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rl.get(e))return Rl.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=cb.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ab.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),s&&a.done]))[0]};return Rl.set(e,r),r}sb(n=>({...n,get:(e,t,i)=>gd(e,t)||n.get(e,t,i),has:(e,t)=>!!gd(e,t)||n.has(e,t)}));/**
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
 */let ub=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(db(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}};function db(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wa="@firebase/app",vd="0.9.23";/**
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
 */const Oi=new Uc("@firebase/app"),fb="@firebase/app-compat",hb="@firebase/analytics-compat",pb="@firebase/analytics",_b="@firebase/app-check-compat",mb="@firebase/app-check",gb="@firebase/auth",vb="@firebase/auth-compat",bb="@firebase/database",yb="@firebase/database-compat",xb="@firebase/functions",Cb="@firebase/functions-compat",Eb="@firebase/installations",wb="@firebase/installations-compat",kb="@firebase/messaging",Ib="@firebase/messaging-compat",Sb="@firebase/performance",Ab="@firebase/performance-compat",Tb="@firebase/remote-config",Db="@firebase/remote-config-compat",Nb="@firebase/storage",Rb="@firebase/storage-compat",Bb="@firebase/firestore",Fb="@firebase/firestore-compat",Ob="firebase",Pb="10.6.0";/**
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
 */const qa="[DEFAULT]",Mb={[Wa]:"fire-core",[fb]:"fire-core-compat",[pb]:"fire-analytics",[hb]:"fire-analytics-compat",[mb]:"fire-app-check",[_b]:"fire-app-check-compat",[gb]:"fire-auth",[vb]:"fire-auth-compat",[bb]:"fire-rtdb",[yb]:"fire-rtdb-compat",[xb]:"fire-fn",[Cb]:"fire-fn-compat",[Eb]:"fire-iid",[wb]:"fire-iid-compat",[kb]:"fire-fcm",[Ib]:"fire-fcm-compat",[Sb]:"fire-perf",[Ab]:"fire-perf-compat",[Tb]:"fire-rc",[Db]:"fire-rc-compat",[Nb]:"fire-gcs",[Rb]:"fire-gcs-compat",[Bb]:"fire-fst",[Fb]:"fire-fst-compat","fire-js":"fire-js",[Ob]:"fire-js-all"};/**
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
 */const Eo=new Map,za=new Map;function Lb(n,e){try{n.container.addComponent(e)}catch(t){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cs(n){const e=n.name;if(za.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,n);for(const t of Eo.values())Lb(t,n);return!0}function qc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const $b={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},si=new Or("app","Firebase",$b);/**
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
 */let Hb=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Fi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}};/**
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
 */const Os=Pb;function zc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:qa,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw si.create("bad-app-name",{appName:String(s)});if(t||(t=Pp()),!t)throw si.create("no-options");const r=Eo.get(s);if(r){if(Co(t,r.options)&&Co(i,r.config))return r;throw si.create("duplicate-app",{appName:s})}const o=new Kv(s);for(const a of za.values())o.addComponent(a);const l=new Hb(t,i,o);return Eo.set(s,l),l}function il(n=qa){const e=Eo.get(n);if(!e&&n===qa&&Pp())return zc();if(!e)throw si.create("no-app",{appName:n});return e}function ri(n,e,t){var i;let s=(i=Mb[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(l.join(" "));return}Cs(new Fi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ub="firebase-heartbeat-database",Wb=1,br="firebase-heartbeat-store";let Bl=null;function zp(){return Bl||(Bl=lb(Ub,Wb,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(br)}}}).catch(n=>{throw si.create("idb-open",{originalErrorMessage:n.message})})),Bl}async function qb(n){try{return await(await zp()).transaction(br).objectStore(br).get(Vp(n))}catch(e){if(e instanceof Bs)Oi.warn(e.message);else{const t=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(t.message)}}}async function bd(n,e){try{const i=(await zp()).transaction(br,"readwrite");await i.objectStore(br).put(e,Vp(n)),await i.done}catch(t){if(t instanceof Bs)Oi.warn(t.message);else{const i=si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Oi.warn(i.message)}}}function Vp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zb=1024,Vb=30*24*60*60*1e3;let jb=class{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kb(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Vb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yd(),{heartbeatsToSend:i,unsentEntries:s}=Gb(this._heartbeatsCache.heartbeats),r=bo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}};function yd(){return new Date().toISOString().substring(0,10)}function Gb(n,e=zb){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),xd(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),xd(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}let Kb=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bv()?Fv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return bd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return bd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}};function xd(n){return bo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Yb(n){Cs(new Fi("platform-logger",e=>new ub(e),"PRIVATE")),Cs(new Fi("heartbeat",e=>new jb(e),"PRIVATE")),ri(Wa,vd,n),ri(Wa,vd,"esm2017"),ri("fire-js","")}Yb("");var Qb="firebase",Xb="10.6.0";/**
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
 */ri(Qb,Xb,"app");function Vc(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function jp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jb=jp,Gp=new Or("auth","Firebase",jp());/**
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
 */const wo=new Uc("@firebase/auth");function Zb(n,...e){wo.logLevel<=it.WARN&&wo.warn(`Auth (${Os}): ${n}`,...e)}function lo(n,...e){wo.logLevel<=it.ERROR&&wo.error(`Auth (${Os}): ${n}`,...e)}/**
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
 */function Wn(n,...e){throw jc(n,...e)}function Dn(n,...e){return jc(n,...e)}function ey(n,e,t){const i=Object.assign(Object.assign({},Jb()),{[e]:t});return new Or("auth","Firebase",i).create(e,{appName:n.name})}function jc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Gp.create(n,...e)}function Ee(n,e,...t){if(!n)throw jc(e,...t)}function Pn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lo(e),new Error(e)}function qn(n,e){n||Pn(e)}/**
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
 */function Va(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ty(){return Cd()==="http:"||Cd()==="https:"}function Cd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ny(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ty()||Nv()||"connection"in navigator)?navigator.onLine:!0}function iy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,qn(t>e,"Short delay should be less than long delay!"),this.isMobile=$c()||Lp()}get(){return ny()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gc(n,e){qn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Kp{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ry=new Pr(3e4,6e4);function Kc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ps(n,e,t,i,s={}){return Yp(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=Fs(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode),Kp.fetch()(Qp(n,n.config.apiHost,t,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function Yp(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},sy),e);try{const s=new ly(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw eo(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw eo(n,"email-already-in-use",o);if(a==="USER_DISABLED")throw eo(n,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ey(n,u,c);Wn(n,u)}}catch(s){if(s instanceof Bs)throw s;Wn(n,"network-request-failed",{message:String(s)})}}async function oy(n,e,t,i,s={}){const r=await Ps(n,e,t,i,s);return"mfaPendingCredential"in r&&Wn(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Qp(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Gc(n.config,s):`${n.config.apiScheme}://${s}`}class ly{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Dn(this.auth,"network-request-failed")),ry.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eo(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Dn(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function ay(n,e){return Ps(n,"POST","/v1/accounts:delete",e)}async function cy(n,e){return Ps(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function or(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uy(n,e=!1){const t=Jt(n),i=await t.getIdToken(e),s=Yc(i);Ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:or(Fl(s.auth_time)),issuedAtTime:or(Fl(s.iat)),expirationTime:or(Fl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Fl(n){return Number(n)*1e3}function Yc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=yo(t);return s?JSON.parse(s):(lo("Failed to decode base64 JWT payload"),null)}catch(s){return lo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dy(n){const e=Yc(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yr(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Bs&&fy(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function fy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class hy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ko(n){var e;const t=n.auth,i=await n.getIdToken(),s=await yr(n,cy(t,{idToken:i}));Ee(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?my(r.providerUserInfo):[],l=_y(n.providerData,o),a=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Xp(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function py(n){const e=Jt(n);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _y(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function my(n){return n.map(e=>{var{providerId:t}=e,i=Vc(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function gy(n,e){const t=await Yp(n,{},async()=>{const i=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Qp(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Kp.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function vy(n,e){return Ps(n,"POST","/v2/accounts:revokeToken",Kc(n,e))}/**
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
 */class xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await gy(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new xr;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(Ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xr,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Qn(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Di{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Vc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Xp(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await yr(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uy(this,e)}reload(){return py(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Di(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ko(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yr(this,ay(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,l,a,c,u;const f=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,h=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(l=t.tenantId)!==null&&l!==void 0?l:void 0,g=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,x=(c=t.createdAt)!==null&&c!==void 0?c:void 0,v=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:E,isAnonymous:w,providerData:T,stsTokenManager:k}=t;Ee(b&&k,e,"internal-error");const A=xr.fromJSON(this.name,k);Ee(typeof b=="string",e,"internal-error"),Qn(f,e.name),Qn(d,e.name),Ee(typeof E=="boolean",e,"internal-error"),Ee(typeof w=="boolean",e,"internal-error"),Qn(h,e.name),Qn(p,e.name),Qn(_,e.name),Qn(g,e.name),Qn(x,e.name),Qn(v,e.name);const N=new Di({uid:b,auth:e,email:d,emailVerified:E,displayName:f,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:_,stsTokenManager:A,createdAt:x,lastLoginAt:v});return T&&Array.isArray(T)&&(N.providerData=T.map(D=>Object.assign({},D))),g&&(N._redirectEventId=g),N}static async _fromIdTokenResponse(e,t,i=!1){const s=new xr;s.updateFromServerResponse(t);const r=new Di({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ko(r),r}}/**
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
 */const Ed=new Map;function Mn(n){qn(n instanceof Function,"Expected a class definition");let e=Ed.get(n);return e?(qn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ed.set(n,e),e)}/**
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
 */class Jp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jp.type="NONE";const wd=Jp;/**
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
 */function ao(n,e,t){return`firebase:${n}:${e}:${t}`}class us{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ao(this.userKey,s.apiKey,r),this.fullPersistenceKey=ao("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Di._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new us(Mn(wd),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Mn(wd);const o=ao(i,e.config.apiKey,e.name);let l=null;for(const c of t)try{const u=await c._get(o);if(u){const f=Di._fromJSON(e,u);c!==r&&(l=f),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new us(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new us(r,e,i))}}/**
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
 */function kd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(t_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(i_(e))return"Blackberry";if(s_(e))return"Webos";if(Qc(e))return"Safari";if((e.includes("chrome/")||e_(e))&&!e.includes("edge/"))return"Chrome";if(n_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Zp(n=Vt()){return/firefox\//i.test(n)}function Qc(n=Vt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function e_(n=Vt()){return/crios\//i.test(n)}function t_(n=Vt()){return/iemobile/i.test(n)}function n_(n=Vt()){return/android/i.test(n)}function i_(n=Vt()){return/blackberry/i.test(n)}function s_(n=Vt()){return/webos/i.test(n)}function sl(n=Vt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function by(n=Vt()){var e;return sl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yy(){return Rv()&&document.documentMode===10}function r_(n=Vt()){return sl(n)||n_(n)||s_(n)||i_(n)||/windows phone/i.test(n)||t_(n)}function xy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function o_(n,e=[]){let t;switch(n){case"Browser":t=kd(Vt());break;case"Worker":t=`${kd(Vt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Os}/${i}`}/**
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
 */class Cy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Ey(n,e={}){return Ps(n,"GET","/v2/passwordPolicy",Kc(n,e))}/**
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
 */const wy=6;class ky{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:wy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(t=a.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),a.isValid&&(a.isValid=(i=a.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsUppercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Iy{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Id(this),this.idTokenSubscription=new Id(this),this.beforeStateQueue=new Cy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mn(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Jt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ey(this),t=new ky(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await vy(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mn(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Mn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const a=e.addObserver(t,i,s);return()=>{o=!0,a()}}else{const a=e.addObserver(t);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=o_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Zb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xc(n){return Jt(n)}class Id{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uv(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Sy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ay(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Dn("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Sy().appendChild(i)})}function Ty(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Dy(n,e){const t=qc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Co(r,e??{}))return s;Wn(s,"already-initialized")}return t.initialize({options:e})}function Ny(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Mn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ry(n,e,t){const i=Xc(n);Ee(i._canInitEmulator,i,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=l_(e),{host:o,port:l}=By(e),a=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${o}${a}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Fy()}function l_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function By(n){const e=l_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Sd(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Sd(o)}}}function Sd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class a_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,t){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
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
 */async function ds(n,e){return oy(n,"POST","/v1/accounts:signInWithIdp",Kc(n,e))}/**
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
 */const Oy="http://localhost";class Pi extends a_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Vc(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Pi(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ds(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ds(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ds(e,t)}buildRequest(){const e={requestUri:Oy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fs(t)}return e}}/**
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
 */class c_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mr extends c_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jn extends Mr{constructor(){super("facebook.com")}static credential(e){return Pi._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
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
 */class Zn extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pi._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Zn.credential(t,i)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
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
 */class ei extends Mr{constructor(){super("github.com")}static credential(e){return Pi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
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
 */class ti extends Mr{constructor(){super("twitter.com")}static credential(e,t){return Pi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ti.credential(t,i)}catch{return null}}}ti.TWITTER_SIGN_IN_METHOD="twitter.com";ti.PROVIDER_ID="twitter.com";/**
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
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Di._fromIdTokenResponse(e,i,s),o=Ad(i);return new Es({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ad(i);return new Es({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ad(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Io extends Bs{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Io(e,t,i,s)}}function u_(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(n,r,e,i):r})}async function Py(n,e,t=!1){const i=await yr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Es._forOperation(n,"link",i)}/**
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
 */async function My(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await yr(n,u_(i,s,e,n),t);Ee(r.idToken,i,"internal-error");const o=Yc(r.idToken);Ee(o,i,"internal-error");const{sub:l}=o;return Ee(n.uid===l,i,"user-mismatch"),Es._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Wn(i,"user-mismatch"),r}}/**
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
 */async function Ly(n,e,t=!1){const i="signIn",s=await u_(n,i,e),r=await Es._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function $y(n,e,t,i){return Jt(n).onIdTokenChanged(e,t,i)}function Hy(n,e,t){return Jt(n).beforeAuthStateChanged(e,t)}function Uy(n,e,t,i){return Jt(n).onAuthStateChanged(e,t,i)}const So="__sak";/**
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
 */class d_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(So,"1"),this.storage.removeItem(So),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Wy(){const n=Vt();return Qc(n)||sl(n)}const qy=1e3,zy=10;class f_ extends d_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wy()&&xy(),this.fallbackToPolling=r_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);yy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zy):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}f_.type="LOCAL";const Vy=f_;/**
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
 */class h_ extends d_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}h_.type="SESSION";const p_=h_;/**
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
 */function jy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new rl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async c=>c(t.origin,r)),a=await jy(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rl.receivers=[];/**
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
 */function Jc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Gy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,a)=>{const c=Jc("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(d.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function Ky(n){Nn().location.href=n}/**
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
 */function __(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function Yy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Xy(){return __()?self:null}/**
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
 */const m_="firebaseLocalStorageDb",Jy=1,Ao="firebaseLocalStorage",g_="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ol(n,e){return n.transaction([Ao],e?"readwrite":"readonly").objectStore(Ao)}function Zy(){const n=indexedDB.deleteDatabase(m_);return new Lr(n).toPromise()}function ja(){const n=indexedDB.open(m_,Jy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ao,{keyPath:g_})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ao)?e(i):(i.close(),await Zy(),e(await ja()))})})}async function Td(n,e,t){const i=ol(n,!0).put({[g_]:e,value:t});return new Lr(i).toPromise()}async function ex(n,e){const t=ol(n,!1).get(e),i=await new Lr(t).toPromise();return i===void 0?null:i.value}function Dd(n,e){const t=ol(n,!0).delete(e);return new Lr(t).toPromise()}const tx=800,nx=3;class v_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ja(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>nx)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return __()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rl._getInstance(Xy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Yy(),!this.activeServiceWorker)return;this.sender=new Gy(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ja();return await Td(e,So,"1"),await Dd(e,So),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Td(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>ex(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ol(s,!1).getAll();return new Lr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v_.type="LOCAL";const ix=v_;new Pr(3e4,6e4);/**
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
 */function sx(n,e){return e?Mn(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Zc extends a_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ds(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rx(n){return Ly(n.auth,new Zc(n),n.bypassAuthState)}function ox(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),My(t,new Zc(n),n.bypassAuthState)}async function lx(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),Py(t,new Zc(n),n.bypassAuthState)}/**
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
 */class b_{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rx;case"linkViaPopup":case"linkViaRedirect":return lx;case"reauthViaPopup":case"reauthViaRedirect":return ox;default:Wn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ax=new Pr(2e3,1e4);class ss extends b_{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ss.currentPopupAction&&ss.currentPopupAction.cancel(),ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ax.get())};e()}}ss.currentPopupAction=null;/**
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
 */const cx="pendingRedirect",co=new Map;class ux extends b_{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=co.get(this.auth._key());if(!e){try{const i=await dx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}co.set(this.auth._key(),e)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dx(n,e){const t=px(e),i=hx(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function fx(n,e){co.set(n._key(),e)}function hx(n){return Mn(n._redirectPersistence)}function px(n){return ao(cx,n.config.apiKey,n.name)}async function _x(n,e,t=!1){const i=Xc(n),s=sx(i,e),o=await new ux(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const mx=10*60*1e3;class gx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!y_(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Dn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nd(e))}saveEventToCache(e){this.cachedEventUids.add(Nd(e)),this.lastProcessedEventTime=Date.now()}}function Nd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function y_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vx(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y_(n);default:return!1}}/**
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
 */async function bx(n,e={}){return Ps(n,"GET","/v1/projects",e)}/**
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
 */const yx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xx=/^https?/;async function Cx(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bx(n);for(const t of e)try{if(Ex(t))return}catch{}Wn(n,"unauthorized-domain")}function Ex(n){const e=Va(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!xx.test(t))return!1;if(yx.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const wx=new Pr(3e4,6e4);function Rd(){const n=Nn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function kx(n){return new Promise((e,t)=>{var i,s,r;function o(){Rd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rd(),t(Dn(n,"network-request-failed"))},timeout:wx.get()})}if(!((s=(i=Nn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Nn().gapi)===null||r===void 0)&&r.load)o();else{const l=Ty("iframefcb");return Nn()[l]=()=>{gapi.load?o():t(Dn(n,"network-request-failed"))},Ay(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>t(a))}}).catch(e=>{throw uo=null,e})}let uo=null;function Ix(n){return uo=uo||kx(n),uo}/**
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
 */const Sx=new Pr(5e3,15e3),Ax="__/auth/iframe",Tx="emulator/auth/iframe",Dx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rx(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gc(e,Tx):`https://${n.config.authDomain}/${Ax}`,i={apiKey:e.apiKey,appName:n.name,v:Os},s=Nx.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Fs(i).slice(1)}`}async function Bx(n){const e=await Ix(n),t=Nn().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:Rx(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dx,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Dn(n,"network-request-failed"),l=Nn().setTimeout(()=>{r(o)},Sx.get());function a(){Nn().clearTimeout(l),s(i)}i.ping(a).then(a,()=>{r(o)})}))}/**
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
 */const Fx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ox=500,Px=600,Mx="_blank",Lx="http://localhost";class Bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $x(n,e,t,i=Ox,s=Px){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Fx),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Vt().toLowerCase();t&&(l=e_(c)?Mx:t),Zp(c)&&(e=e||Lx,a.scrollbars="yes");const u=Object.entries(a).reduce((d,[h,p])=>`${d}${h}=${p},`,"");if(by(c)&&l!=="_self")return Hx(e||"",l),new Bd(null);const f=window.open(e||"",l,u);Ee(f,n,"popup-blocked");try{f.focus()}catch{}return new Bd(f)}function Hx(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Ux="__/auth/handler",Wx="emulator/auth/handler",qx=encodeURIComponent("fac");async function Fd(n,e,t,i,s,r){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Os,eventId:s};if(e instanceof c_){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",$a(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(r||{}))o[u]=f}if(e instanceof Mr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await n._getAppCheckToken(),c=a?`#${qx}=${encodeURIComponent(a)}`:"";return`${zx(n)}?${Fs(l).slice(1)}${c}`}function zx({config:n}){return n.emulator?Gc(n,Wx):`https://${n.authDomain}/${Ux}`}/**
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
 */const Ol="webStorageSupport";class Vx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=p_,this._completeRedirectFn=_x,this._overrideRedirectResult=fx}async _openPopup(e,t,i,s){var r;qn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Fd(e,t,i,Va(),s);return $x(e,o,Jc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Fd(e,t,i,Va(),s);return Ky(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(qn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Bx(e),i=new gx(e);return t.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ol,{type:Ol},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ol];o!==void 0&&t(!!o),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return r_()||Qc()||sl()}}const jx=Vx;var Od="@firebase/auth",Pd="1.4.0";/**
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
 */class Gx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Kx(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yx(n){Cs(new Fi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;Ee(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:o_(n)},c=new Iy(i,s,r,a);return Ny(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Cs(new Fi("auth-internal",e=>{const t=Xc(e.getProvider("auth").getImmediate());return(i=>new Gx(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ri(Od,Pd,Kx(n)),ri(Od,Pd,"esm2017")}/**
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
 */const Qx=5*60,Xx=Mp("authIdTokenMaxAge")||Qx;let Md=null;const Jx=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Xx)return;const s=t==null?void 0:t.token;Md!==s&&(Md=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zx(n=il()){const e=qc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Dy(n,{popupRedirectResolver:jx,persistence:[ix,Vy,p_]}),i=Mp("authTokenSyncURL");if(i){const r=Jx(i);Hy(t,r,()=>r(t.currentUser)),$y(t,o=>r(o))}const s=Op("auth");return s&&Ry(t,`http://${s}`),t}Yx("Browser");const Ld="@firebase/database",$d="1.0.1";/**
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
 */let x_="";function eC(n){x_=n}/**
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
 */let tC=class{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),kt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:vr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};/**
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
 */let nC=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return On(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};/**
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
 */const C_=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tC(e)}}catch{}return new nC},ki=C_("localStorage"),Ga=C_("sessionStorage");/**
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
 */const fs=new Uc("@firebase/database"),iC=function(){let n=1;return function(){return n++}}(),E_=function(n){const e=zv(n),t=new Hv;t.update(e);const i=t.digest();return Mc.encodeByteArray(i)},$r=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=$r.apply(null,i):typeof i=="object"?e+=kt(i):e+=i,e+=" "}return e};let Ni=null,Hd=!0;const sC=function(n,e){se(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(fs.logLevel=it.VERBOSE,Ni=fs.log.bind(fs),e&&Ga.set("logging_enabled",!0)):typeof n=="function"?Ni=n:(Ni=null,Ga.remove("logging_enabled"))},Ht=function(...n){if(Hd===!0&&(Hd=!1,Ni===null&&Ga.get("logging_enabled")===!0&&sC(!0)),Ni){const e=$r.apply(null,n);Ni(e)}},Hr=function(n){return function(...e){Ht(n,...e)}},Ka=function(...n){const e="FIREBASE INTERNAL ERROR: "+$r(...n);fs.error(e)},zn=function(...n){const e=`FIREBASE FATAL ERROR: ${$r(...n)}`;throw fs.error(e),new Error(e)},en=function(...n){const e="FIREBASE WARNING: "+$r(...n);fs.warn(e)},rC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&en("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},eu=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},oC=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Mi="[MIN_NAME]",hi="[MAX_NAME]",Ms=function(n,e){if(n===e)return 0;if(n===Mi||e===hi)return-1;if(e===Mi||n===hi)return 1;{const t=Ud(n),i=Ud(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},lC=function(n,e){return n===e?0:n<e?-1:1},Ks=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+kt(e))},tu=function(n){if(typeof n!="object"||n===null)return kt(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=kt(e[i]),t+=":",t+=tu(n[e[i]]);return t+="}",t},w_=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function tn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const k_=function(n){se(!eu(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,a;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let f="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},aC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uC(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const dC=new RegExp("^-?(0*)\\d{1,10}$"),fC=-2147483648,hC=2147483647,Ud=function(n){if(dC.test(n)){const e=Number(n);if(e>=fC&&e<=hC)return e}return null},Ls=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw en("Exception was thrown by user callback.",t),e},Math.floor(0))}},pC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},lr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */let _C=class{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){en(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}};/**
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
 */let mC=class{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',en(e)}},hs=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};hs.OWNER="owner";/**
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
 */const nu="5",I_="v",S_="s",A_="r",T_="f",D_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,N_="ls",R_="p",Ya="ac",B_="websocket",F_="long_polling";/**
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
 */let O_=class{constructor(e,t,i,s,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ki.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ki.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}};function gC(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function P_(n,e,t){se(typeof e=="string","typeof type must == string"),se(typeof t=="object","typeof params must == object");let i;if(e===B_)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===F_)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gC(n)&&(t.ns=n.namespace);const s=[];return tn(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */let vC=class{constructor(){this.counters_={}}incrementCounter(e,t=1){On(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ev(this.counters_)}};/**
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
 */const Pl={},Ml={};function iu(n){const e=n.toString();return Pl[e]||(Pl[e]=new vC),Pl[e]}function bC(n,e){const t=n.toString();return Ml[t]||(Ml[t]=e()),Ml[t]}/**
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
 */let yC=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ls(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};/**
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
 */const Wd="start",xC="close",CC="pLPCommand",EC="pRTLPCB",M_="id",L_="pw",$_="ser",wC="cb",kC="seg",IC="ts",SC="d",AC="dframe",H_=1870,U_=30,TC=H_-U_,DC=25e3,NC=3e4;let RC=class nr{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Hr(e),this.stats_=iu(t),this.urlFn=a=>(this.appCheckToken&&(a[Ya]=this.appCheckToken),P_(t,F_,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new yC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(NC)),oC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new BC((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wd)this.id=l,this.password=a;else if(o===xC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Wd]="t",i[$_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[wC]=this.scriptTagHolder.uniqueCallbackIdentifier),i[I_]=nu,this.transportSessionId&&(i[S_]=this.transportSessionId),this.lastSessionId&&(i[N_]=this.lastSessionId),this.applicationId&&(i[R_]=this.applicationId),this.appCheckToken&&(i[Ya]=this.appCheckToken),typeof location<"u"&&location.hostname&&D_.test(location.hostname)&&(i[A_]=T_);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nr.forceAllow_=!0}static forceDisallow(){nr.forceDisallow_=!0}static isAvailable(){return nr.forceAllow_?!0:!nr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aC()&&!cC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=kt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Bp(t),s=w_(i,TC);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[AC]="t",i[M_]=e,i[L_]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=kt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}},BC=class W_{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=iC(),window[CC+this.uniqueCallbackIdentifier]=e,window[EC+this.uniqueCallbackIdentifier]=t,this.myIFrame=W_.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ht("frame writing exception"),l.stack&&Ht(l.stack),Ht(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ht("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[M_]=this.myID,e[L_]=this.myPW,e[$_]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+U_+i.length<=H_;){const o=this.pendingSegs.shift();i=i+"&"+kC+s+"="+o.seg+"&"+IC+s+"="+o.ts+"&"+SC+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(DC)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}};/**
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
 */const FC=16384,OC=45e3;let To=null;typeof MozWebSocket<"u"?To=MozWebSocket:typeof WebSocket<"u"&&(To=WebSocket);let wi=class fo{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Hr(this.connId),this.stats_=iu(t),this.connURL=fo.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[I_]=nu,typeof location<"u"&&location.hostname&&D_.test(location.hostname)&&(o[A_]=T_),t&&(o[S_]=t),i&&(o[N_]=i),s&&(o[Ya]=s),r&&(o[R_]=r),P_(e,B_,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ki.set("previous_websocket_failure",!0);try{let i;$p(),this.mySock=new To(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){fo.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&To!==null&&!fo.forceDisallow_}static previouslyFailed(){return ki.isInMemoryStorage||ki.get("previous_websocket_failure")===!0}markConnectionHealthy(){ki.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=vr(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(se(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=kt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=w_(t,FC);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(OC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};wi.responsesRequiredToBeHealthy=2;wi.healthyTimeout=3e4;/**
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
 */let q_=class Qa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[RC,wi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=wi&&wi.isAvailable();let i=t&&!wi.previouslyFailed();if(e.webSocketOnly&&(t||en("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[wi];else{const s=this.transports_=[];for(const r of Qa.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Qa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};q_.globalTransportInitialized_=!1;/**
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
 */const PC=6e4,MC=5e3,LC=10*1024,$C=100*1024,Ll="t",qd="d",HC="s",zd="r",UC="e",Vd="o",jd="a",Gd="n",Kd="p",WC="h";let qC=class{constructor(e,t,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Hr("c:"+this.id+":"),this.transportManager_=new q_(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=lr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$C?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ll in e){const t=e[Ll];t===jd?this.upgradeIfSecondaryHealthy_():t===zd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Vd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ks("t",e),i=Ks("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Kd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Gd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ks("t",e),i=Ks("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ks(Ll,e);if(qd in e){const i=e[qd];if(t===WC){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Gd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===HC?this.onConnectionShutdown_(i):t===zd?this.onReset_(i):t===UC?Ka("Server Error: "+i):t===Vd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ka("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),nu!==i&&en("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),lr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):lr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(MC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Kd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ki.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};/**
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
 */let z_=class{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}};/**
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
 */let V_=class{constructor(e){this.allowedEvents_=e,this.listeners_={},se(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){se(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};/**
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
 */let Yd=class j_ extends V_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$c()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new j_}getInitialEvent(e){return se(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};/**
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
 */const Qd=32,Xd=768;let lt=class{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}};function Ye(){return new lt("")}function Le(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function pi(n){return n.pieces_.length-n.pieceNum_}function ct(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new lt(n.pieces_,e)}function G_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function zC(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function K_(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Y_(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new lt(e,0)}function It(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof lt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new lt(t,0)}function Pe(n){return n.pieceNum_>=n.pieces_.length}function Xt(n,e){const t=Le(n),i=Le(e);if(t===null)return e;if(t===i)return Xt(ct(n),ct(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Q_(n,e){if(pi(n)!==pi(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function gn(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(pi(n)>pi(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}let VC=class{constructor(e,t){this.errorPrefix_=t,this.parts_=K_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=nl(this.parts_[i]);X_(this)}};function jC(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=nl(e),X_(n)}function GC(n){const e=n.parts_.pop();n.byteLength_-=nl(e),n.parts_.length>0&&(n.byteLength_-=1)}function X_(n){if(n.byteLength_>Xd)throw new Error(n.errorPrefix_+"has a key path longer than "+Xd+" bytes ("+n.byteLength_+").");if(n.parts_.length>Qd)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qd+") or object contains a cycle "+xi(n))}function xi(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */let KC=class J_ extends V_{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new J_}getInitialEvent(e){return se(e==="visible","Unknown event type: "+e),[this.visible_]}};/**
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
 */const Ys=1e3,YC=60*5*1e3,Jd=30*1e3,QC=1.3,XC=3e4,JC="server_kill",Zd=3;let Ur=class ho extends z_{constructor(e,t,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=ho.nextPersistentConnectionId_++,this.log_=Hr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ys,this.maxReconnectDelay_=YC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!$p())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");KC.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(kt(r)),se(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new tl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),se(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;ho.warnOnListenWarnings_(a,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&On(e,"w")){const i=xs(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();en(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$v(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Lv(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+kt(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ka("Unrecognized action received from server: "+kt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){se(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XC&&(this.reconnectDelay_=Ys),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ho.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(f){se(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ht("getToken() completed but was canceled"):(Ht("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,l=new qC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,h=>{en(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(JC)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&en(f),a())}}}interrupt(e){Ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$a(this.interruptReasons_)&&(this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>tu(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new lt(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ht("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zd&&(this.reconnectDelay_=Jd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ht("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+x_.replace(/\./g,"-")]=1,$c()?e["framework.cordova"]=1:Lp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yd.getInstance().currentlyOnline();return $a(this.interruptReasons_)&&e}};Ur.nextPersistentConnectionId_=0;Ur.nextConnectionId_=0;/**
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
 */let He=class Z_{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Z_(e,t)}};/**
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
 */let ll=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new He(Mi,e),s=new He(Mi,t);return this.compare(i,s)!==0}minPost(){return He.MIN}};/**
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
 */let to,em=class extends ll{static get __EMPTY_NODE(){return to}static set __EMPTY_NODE(e){to=e}compare(e,t){return Ms(e.name,t.name)}isDefinedOn(e){throw Rs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return He.MIN}maxPost(){return new He(hi,to)}makePost(e,t){return se(typeof e=="string","KeyIndex indexValue must always be a string."),new He(e,to)}toString(){return".key"}};const oi=new em;/**
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
 */let no=class{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},on=class ir{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ir.RED,this.left=s??An.EMPTY_NODE,this.right=r??An.EMPTY_NODE}copy(e,t,i,s,r){return new ir(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return An.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return An.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ir.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ir.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};on.RED=!0;on.BLACK=!1;let ZC=class{copy(e,t,i,s,r){return this}insert(e,t,i){return new on(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},An=class po{constructor(e,t=po.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new po(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,on.BLACK,null,null))}remove(e){return new po(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,on.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new no(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new no(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new no(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new no(this.root_,null,this.comparator_,!0,e)}};An.EMPTY_NODE=new ZC;/**
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
 */function eE(n,e){return Ms(n.name,e.name)}function su(n,e){return Ms(n,e)}/**
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
 */let Xa;function tE(n){Xa=n}const tm=function(n){return typeof n=="number"?"number:"+k_(n):"string:"+n},nm=function(n){if(n.isLeafNode()){const e=n.val();se(typeof e=="string"||typeof e=="number"||typeof e=="object"&&On(e,".sv"),"Priority must be a string or number.")}else se(n===Xa||n.isEmpty(),"priority of unexpected type.");se(n===Xa||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ef,Li=class _n{constructor(e,t=_n.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,se(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nm(this.priorityNode_)}static set __childrenNodeConstructor(e){ef=e}static get __childrenNodeConstructor(){return ef}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _n(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_n.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Pe(e)?this:Le(e)===".priority"?this.priorityNode_:_n.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:_n.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Le(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(se(i!==".priority"||pi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,_n.__childrenNodeConstructor.EMPTY_NODE.updateChild(ct(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tm(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=k_(this.value_):e+=this.value_,this.lazyHash_=E_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_n.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _n.__childrenNodeConstructor?-1:(se(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=_n.VALUE_TYPE_ORDER.indexOf(t),r=_n.VALUE_TYPE_ORDER.indexOf(i);return se(s>=0,"Unknown leaf type: "+t),se(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};Li.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let im,sm;function nE(n){im=n}function iE(n){sm=n}let sE=class extends ll{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Ms(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return He.MIN}maxPost(){return new He(hi,new Li("[PRIORITY-POST]",sm))}makePost(e,t){const i=im(e);return new He(t,new Li("[PRIORITY-POST]",i))}toString(){return".priority"}};const gt=new sE;/**
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
 */const rE=Math.log(2);let oE=class{constructor(e){const t=r=>parseInt(Math.log(r)/rE,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}};const Do=function(n,e,t,i){n.sort(e);const s=function(a,c){const u=c-a;let f,d;if(u===0)return null;if(u===1)return f=n[a],d=t?t(f):f,new on(d,f.node,on.BLACK,null,null);{const h=parseInt(u/2,10)+a,p=s(a,h),_=s(h+1,c);return f=n[h],d=t?t(f):f,new on(d,f.node,on.BLACK,p,_)}},r=function(a){let c=null,u=null,f=n.length;const d=function(p,_){const g=f-p,x=f;f-=p;const v=s(g+1,x),b=n[g],E=t?t(b):b;h(new on(E,b.node,_,null,v))},h=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<a.count;++p){const _=a.nextBitIsOne(),g=Math.pow(2,a.count-(p+1));_?d(g,on.BLACK):(d(g,on.BLACK),d(g,on.RED))}return u},o=new oE(n.length),l=r(o);return new An(i||e,l)};/**
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
 */let $l;const es={};let No=class sr{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return se(es&&gt,"ChildrenNode.ts has not been loaded"),$l=$l||new sr({".priority":es},{".priority":gt}),$l}get(e){const t=xs(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof An?t:null}hasIndex(e){return On(this.indexSet_,e.toString())}addIndex(e,t){se(e!==oi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(He.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Do(i,e.getCompare()):l=es;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new sr(u,c)}addToIndexes(e,t){const i=xo(this.indexes_,(s,r)=>{const o=xs(this.indexSet_,r);if(se(o,"Missing index implementation for "+r),s===es)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(He.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Do(l,o.getCompare())}else return es;else{const l=t.get(e.name);let a=s;return l&&(a=a.remove(new He(e.name,l))),a.insert(e,e.node)}});return new sr(i,this.indexSet_)}removeFromIndexes(e,t){const i=xo(this.indexes_,s=>{if(s===es)return s;{const r=t.get(e.name);return r?s.remove(new He(e.name,r)):s}});return new sr(i,this.indexSet_)}};/**
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
 */let Qs,ke=class is{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&nm(this.priorityNode_),this.children_.isEmpty()&&se(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Qs||(Qs=new is(new An(su),null,No.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qs}updatePriority(e){return this.children_.isEmpty()?this:new is(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Qs:t}}getChild(e){const t=Le(e);return t===null?this:this.getImmediateChild(t).getChild(ct(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(se(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new He(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Qs:this.priorityNode_;return new is(s,o,r)}}updateChild(e,t){const i=Le(e);if(i===null)return t;{se(Le(e)!==".priority"||pi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ct(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(gt,(o,l)=>{t[o]=l.val(e),i++,r&&is.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tm(this.getPriority().val())+":"),this.forEachChild(gt,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":E_(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new He(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new He(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new He(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,He.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,He.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wr?-1:0}withIndex(e){if(e===oi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new is(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===oi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(gt),s=t.getIterator(gt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===oi?null:this.indexMap_.get(e.toString())}};ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let lE=class extends ke{constructor(){super(new An(su),ke.EMPTY_NODE,No.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}};const Wr=new lE;Object.defineProperties(He,{MIN:{value:new He(Mi,ke.EMPTY_NODE)},MAX:{value:new He(hi,Wr)}});em.__EMPTY_NODE=ke.EMPTY_NODE;Li.__childrenNodeConstructor=ke;tE(Wr);iE(Wr);/**
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
 */const aE=!0;function Nt(n,e=null){if(n===null)return ke.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),se(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Li(t,Nt(e))}if(!(n instanceof Array)&&aE){const t=[];let i=!1;if(tn(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=Nt(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),t.push(new He(o,a)))}}),t.length===0)return ke.EMPTY_NODE;const r=Do(t,eE,o=>o.name,su);if(i){const o=Do(t,gt.getCompare());return new ke(r,Nt(e),new No({".priority":o},{".priority":gt}))}else return new ke(r,Nt(e),No.Default)}else{let t=ke.EMPTY_NODE;return tn(n,(i,s)=>{if(On(n,i)&&i.substring(0,1)!=="."){const r=Nt(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Nt(e))}}nE(Nt);/**
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
 */let rm=class extends ll{constructor(e){super(),this.indexPath_=e,se(!Pe(e)&&Le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Ms(e.name,t.name):r}makePost(e,t){const i=Nt(e),s=ke.EMPTY_NODE.updateChild(this.indexPath_,i);return new He(t,s)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,Wr);return new He(hi,e)}toString(){return K_(this.indexPath_,0).join("/")}};/**
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
 */let cE=class extends ll{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Ms(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return He.MIN}maxPost(){return He.MAX}makePost(e,t){const i=Nt(e);return new He(t,i)}toString(){return".value"}};const om=new cE;/**
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
 */function lm(n){return{type:"value",snapshotNode:n}}function ws(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Cr(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Er(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function uE(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ru{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){se(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Cr(t,l)):se(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ws(t,i)):o.trackChildChange(Er(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(gt,(s,r)=>{t.hasChild(s)||i.trackChildChange(Cr(s,r))}),t.isLeafNode()||t.forEachChild(gt,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Er(s,r,o))}else i.trackChildChange(ws(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ke.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class wr{constructor(e){this.indexedFilter_=new ru(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wr.getStartPost_(e),this.endPost_=wr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new He(t,i))||(i=ke.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=ke.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(ke.EMPTY_NODE);const r=this;return t.forEachChild(gt,(o,l)=>{r.matches(new He(o,l))||(s=s.updateImmediateChild(o,ke.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class dE{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new wr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new He(t,i))||(i=ke.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=ke.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=ke.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(ke.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,ke.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,h)=>f(h,d)}else o=this.index_.getCompare();const l=e;se(l.numChildren()===this.limit_,"");const a=new He(t,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const f=l.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:o(d,a);if(u&&!i.isEmpty()&&h>=0)return r!=null&&r.trackChildChange(Er(t,i,f)),l.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Cr(t,f));const _=l.updateImmediateChild(t,ke.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ws(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return i.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Cr(c.name,c.node)),r.trackChildChange(ws(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(c.name,ke.EMPTY_NODE)):e}}/**
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
 */let fE=class am{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=gt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return se(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return se(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mi}hasEnd(){return this.endSet_}getIndexEndValue(){return se(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return se(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return se(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===gt}copy(){const e=new am;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function hE(n){return n.loadsAllData()?new ru(n.getIndex()):n.hasLimit()?new dE(n):new wr(n)}function pE(n,e){const t=n.copy();return t.index_=e,t}function tf(n){const e={};if(n.isDefault())return e;let t;if(n.index_===gt?t="$priority":n.index_===om?t="$value":n.index_===oi?t="$key":(se(n.index_ instanceof rm,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=kt(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=kt(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+kt(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=kt(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+kt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function nf(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==gt&&(e.i=n.index_.toString()),e}/**
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
 */let _E=class Ja extends z_{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Hr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(se(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ja.getListenId_(e,i),l={};this.listens_[o]=l;const a=tf(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,i),xs(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=Ja.getListenId_(e,t);delete this.listens_[i]}get(e){const t=tf(e._queryParams),i=e._path.toString(),s=new tl;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fs(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=vr(l.responseText)}catch{en("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&en("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}};/**
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
 */let mE=class{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};/**
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
 */function Ro(){return{value:null,children:new Map}}function cm(n,e,t){if(Pe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=Le(e);n.children.has(i)||n.children.set(i,Ro());const s=n.children.get(i);e=ct(e),cm(s,e,t)}}function Za(n,e,t){n.value!==null?t(e,n.value):gE(n,(i,s)=>{const r=new lt(e.toString()+"/"+i);Za(s,r,t)})}function gE(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */let vE=class{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&tn(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}};/**
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
 */const sf=10*1e3,bE=30*1e3,yE=5*60*1e3;let xE=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new vE(e);const i=sf+(bE-sf)*Math.random();lr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;tn(e,(s,r)=>{r>0&&On(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),lr(this.reportStats_.bind(this),Math.floor(Math.random()*2*yE))}};/**
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
 */var vn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vn||(vn={}));function um(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ou(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lu(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */let CE=class ec{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=vn.ACK_USER_WRITE,this.source=um()}operationForChild(e){if(Pe(this.path)){if(this.affectedTree.value!=null)return se(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new ec(Ye(),t,this.revert)}}else return se(Le(this.path)===e,"operationForChild called for unrelated child."),new ec(ct(this.path),this.affectedTree,this.revert)}};/**
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
 */class kr{constructor(e,t){this.source=e,this.path=t,this.type=vn.LISTEN_COMPLETE}operationForChild(e){return Pe(this.path)?new kr(this.source,Ye()):new kr(this.source,ct(this.path))}}/**
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
 */let al=class tc{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=vn.OVERWRITE}operationForChild(e){return Pe(this.path)?new tc(this.source,Ye(),this.snap.getImmediateChild(e)):new tc(this.source,ct(this.path),this.snap)}};/**
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
 */let dm=class nc{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=vn.MERGE}operationForChild(e){if(Pe(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new al(this.source,Ye(),t.value):new nc(this.source,Ye(),t)}else return se(Le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new nc(this.source,ct(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};/**
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
 */let _i=class{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Pe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Le(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};/**
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
 */class EE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wE(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(uE(o.childName,o.snapshotNode))}),Xs(n,s,"child_removed",e,i,t),Xs(n,s,"child_added",e,i,t),Xs(n,s,"child_moved",r,i,t),Xs(n,s,"child_changed",e,i,t),Xs(n,s,"value",e,i,t),s}function Xs(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,a)=>IE(n,l,a)),o.forEach(l=>{const a=kE(n,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function kE(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function IE(n,e,t){if(e.childName==null||t.childName==null)throw Rs("Should only compare child_ events.");const i=new He(e.childName,e.snapshotNode),s=new He(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function cl(n,e){return{eventCache:n,serverCache:e}}function ar(n,e,t,i){return cl(new _i(e,t,i),n.serverCache)}function fm(n,e,t,i){return cl(n.eventCache,new _i(e,t,i))}function Bo(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function $i(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Hl;const SE=()=>(Hl||(Hl=new An(lC)),Hl);let fn=class sn{constructor(e,t=SE()){this.value=e,this.children=t}static fromObject(e){let t=new sn(null);return tn(e,(i,s)=>{t=t.set(new lt(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(Pe(e))return null;{const i=Le(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ct(e),t);return r!=null?{path:It(new lt(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Pe(e))return this;{const t=Le(e),i=this.children.get(t);return i!==null?i.subtree(ct(e)):new sn(null)}}set(e,t){if(Pe(e))return new sn(t,this.children);{const i=Le(e),r=(this.children.get(i)||new sn(null)).set(ct(e),t),o=this.children.insert(i,r);return new sn(this.value,o)}}remove(e){if(Pe(e))return this.children.isEmpty()?new sn(null):new sn(null,this.children);{const t=Le(e),i=this.children.get(t);if(i){const s=i.remove(ct(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new sn(null):new sn(this.value,r)}else return this}}get(e){if(Pe(e))return this.value;{const t=Le(e),i=this.children.get(t);return i?i.get(ct(e)):null}}setTree(e,t){if(Pe(e))return t;{const i=Le(e),r=(this.children.get(i)||new sn(null)).setTree(ct(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new sn(this.value,o)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(It(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(Pe(e))return null;{const r=Le(e),o=this.children.get(r);return o?o.findOnPath_(ct(e),It(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,i){if(Pe(e))return this;{this.value&&i(t,this.value);const s=Le(e),r=this.children.get(s);return r?r.foreachOnPath_(ct(e),It(t,s),i):new sn(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(It(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}};/**
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
 */let Hn=class hm{constructor(e){this.writeTree_=e}static empty(){return new hm(new fn(null))}};function cr(n,e,t){if(Pe(e))return new Hn(new fn(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Xt(s,e);return r=r.updateChild(o,t),new Hn(n.writeTree_.set(s,r))}else{const s=new fn(t),r=n.writeTree_.setTree(e,s);return new Hn(r)}}}function rf(n,e,t){let i=n;return tn(t,(s,r)=>{i=cr(i,It(e,s),r)}),i}function of(n,e){if(Pe(e))return Hn.empty();{const t=n.writeTree_.setTree(e,new fn(null));return new Hn(t)}}function ic(n,e){return ji(n,e)!=null}function ji(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Xt(t.path,e)):null}function lf(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(gt,(i,s)=>{e.push(new He(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new He(i,s.value))}),e}function li(n,e){if(Pe(e))return n;{const t=ji(n,e);return t!=null?new Hn(new fn(t)):new Hn(n.writeTree_.subtree(e))}}function sc(n){return n.writeTree_.isEmpty()}function ks(n,e){return pm(Ye(),n.writeTree_,e)}function pm(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(se(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=pm(It(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(It(n,".priority"),i)),t}}/**
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
 */function ul(n,e){return vm(e,n)}function AE(n,e,t,i,s){se(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=cr(n.visibleWrites,e,t)),n.lastWriteId=i}function TE(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function DE(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);se(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&NE(l,i.path)?s=!1:gn(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return RE(n),!0;if(i.snap)n.visibleWrites=of(n.visibleWrites,i.path);else{const l=i.children;tn(l,a=>{n.visibleWrites=of(n.visibleWrites,It(i.path,a))})}return!0}else return!1}function NE(n,e){if(n.snap)return gn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&gn(It(n.path,t),e))return!0;return!1}function RE(n){n.visibleWrites=_m(n.allWrites,BE,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function BE(n){return n.visible}function _m(n,e,t){let i=Hn.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)gn(t,o)?(l=Xt(t,o),i=cr(i,l,r.snap)):gn(o,t)&&(l=Xt(o,t),i=cr(i,Ye(),r.snap.getChild(l)));else if(r.children){if(gn(t,o))l=Xt(t,o),i=rf(i,l,r.children);else if(gn(o,t))if(l=Xt(o,t),Pe(l))i=rf(i,Ye(),r.children);else{const a=xs(r.children,Le(l));if(a){const c=a.getChild(ct(l));i=cr(i,Ye(),c)}}}else throw Rs("WriteRecord should have .snap or .children")}}return i}function mm(n,e,t,i,s){if(!i&&!s){const r=ji(n.visibleWrites,e);if(r!=null)return r;{const o=li(n.visibleWrites,e);if(sc(o))return t;if(t==null&&!ic(o,Ye()))return null;{const l=t||ke.EMPTY_NODE;return ks(o,l)}}}else{const r=li(n.visibleWrites,e);if(!s&&sc(r))return t;if(!s&&t==null&&!ic(r,Ye()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(gn(c.path,e)||gn(e,c.path))},l=_m(n.allWrites,o,e),a=t||ke.EMPTY_NODE;return ks(l,a)}}}function FE(n,e,t){let i=ke.EMPTY_NODE;const s=ji(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(gt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=li(n.visibleWrites,e);return t.forEachChild(gt,(o,l)=>{const a=ks(li(r,new lt(o)),l);i=i.updateImmediateChild(o,a)}),lf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=li(n.visibleWrites,e);return lf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function OE(n,e,t,i,s){se(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=It(e,t);if(ic(n.visibleWrites,r))return null;{const o=li(n.visibleWrites,r);return sc(o)?s.getChild(t):ks(o,s.getChild(t))}}function PE(n,e,t,i){const s=It(e,t),r=ji(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=li(n.visibleWrites,s);return ks(o,i.getNode().getImmediateChild(t))}else return null}function ME(n,e){return ji(n.visibleWrites,e)}function LE(n,e,t,i,s,r,o){let l;const a=li(n.visibleWrites,e),c=ji(a,Ye());if(c!=null)l=c;else if(t!=null)l=ks(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let h=d.getNext();for(;h&&u.length<s;)f(h,i)!==0&&u.push(h),h=d.getNext();return u}else return[]}function $E(){return{visibleWrites:Hn.empty(),allWrites:[],lastWriteId:-1}}function Fo(n,e,t,i){return mm(n.writeTree,n.treePath,e,t,i)}function au(n,e){return FE(n.writeTree,n.treePath,e)}function af(n,e,t,i){return OE(n.writeTree,n.treePath,e,t,i)}function Oo(n,e){return ME(n.writeTree,It(n.treePath,e))}function HE(n,e,t,i,s,r){return LE(n.writeTree,n.treePath,e,t,i,s,r)}function cu(n,e,t){return PE(n.writeTree,n.treePath,e,t)}function gm(n,e){return vm(It(n.treePath,e),n.writeTree)}function vm(n,e){return{treePath:n,writeTree:e}}/**
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
 */let UE=class{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;se(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),se(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Er(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Cr(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,ws(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Er(i,e.snapshotNode,s.oldSnap));else throw Rs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}};/**
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
 */let WE=class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}};const bm=new WE;let uu=class{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new _i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cu(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$i(this.viewCache_),r=HE(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}};/**
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
 */function qE(n){return{filter:n}}function zE(n,e){se(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),se(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function VE(n,e,t,i,s){const r=new UE;let o,l;if(t.type===vn.OVERWRITE){const c=t;c.source.fromUser?o=rc(n,e,c.path,c.snap,i,s,r):(se(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!Pe(c.path),o=Po(n,e,c.path,c.snap,i,s,l,r))}else if(t.type===vn.MERGE){const c=t;c.source.fromUser?o=GE(n,e,c.path,c.children,i,s,r):(se(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=oc(n,e,c.path,c.children,i,s,l,r))}else if(t.type===vn.ACK_USER_WRITE){const c=t;c.revert?o=QE(n,e,c.path,i,s,r):o=KE(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===vn.LISTEN_COMPLETE)o=YE(n,e,t.path,i,r);else throw Rs("Unknown operation type: "+t.type);const a=r.getChanges();return jE(e,o,a),{viewCache:o,changes:a}}function jE(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Bo(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(lm(Bo(e)))}}function ym(n,e,t,i,s,r){const o=e.eventCache;if(Oo(i,t)!=null)return e;{let l,a;if(Pe(t))if(se(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$i(e),u=c instanceof ke?c:ke.EMPTY_NODE,f=au(i,u);l=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Fo(i,$i(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Le(t);if(c===".priority"){se(pi(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const f=af(i,t,u,a);f!=null?l=n.filter.updatePriority(u,f):l=o.getNode()}else{const u=ct(t);let f;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=af(i,t,o.getNode(),a);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=cu(i,c,e.serverCache);f!=null?l=n.filter.updateChild(o.getNode(),c,f,u,s,r):l=o.getNode()}}return ar(e,l,o.isFullyInitialized()||Pe(t),n.filter.filtersNodes())}}function Po(n,e,t,i,s,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(Pe(t))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const h=a.getNode().updateChild(t,i);c=u.updateFullNode(a.getNode(),h,null)}else{const h=Le(t);if(!a.isCompleteForPath(t)&&pi(t)>1)return e;const p=ct(t),g=a.getNode().getImmediateChild(h).updateChild(p,i);h===".priority"?c=u.updatePriority(a.getNode(),g):c=u.updateChild(a.getNode(),h,g,p,bm,null)}const f=fm(e,c,a.isFullyInitialized()||Pe(t),u.filtersNodes()),d=new uu(s,f,r);return ym(n,f,t,s,d,l)}function rc(n,e,t,i,s,r,o){const l=e.eventCache;let a,c;const u=new uu(s,e,r);if(Pe(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),a=ar(e,c,!0,n.filter.filtersNodes());else{const f=Le(t);if(f===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),a=ar(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ct(t),h=l.getNode().getImmediateChild(f);let p;if(Pe(d))p=i;else{const _=u.getCompleteChild(f);_!=null?G_(d)===".priority"&&_.getChild(Y_(d)).isEmpty()?p=_:p=_.updateChild(d,i):p=ke.EMPTY_NODE}if(h.equals(p))a=e;else{const _=n.filter.updateChild(l.getNode(),f,p,d,u,o);a=ar(e,_,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function cf(n,e){return n.eventCache.isCompleteForChild(e)}function GE(n,e,t,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=It(t,a);cf(e,Le(u))&&(l=rc(n,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=It(t,a);cf(e,Le(u))||(l=rc(n,l,u,c,s,r,o))}),l}function uf(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function oc(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;Pe(t)?c=i:c=new fn(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const h=e.serverCache.getNode().getImmediateChild(f),p=uf(n,h,d);a=Po(n,a,new lt(f),p,s,r,o,l)}}),c.children.inorderTraversal((f,d)=>{const h=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!h){const p=e.serverCache.getNode().getImmediateChild(f),_=uf(n,p,d);a=Po(n,a,new lt(f),_,s,r,o,l)}}),a}function KE(n,e,t,i,s,r,o){if(Oo(s,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(Pe(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Po(n,e,t,a.getNode().getChild(t),s,r,l,o);if(Pe(t)){let c=new fn(null);return a.getNode().forEachChild(oi,(u,f)=>{c=c.set(new lt(u),f)}),oc(n,e,t,c,s,r,l,o)}else return e}else{let c=new fn(null);return i.foreach((u,f)=>{const d=It(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),oc(n,e,t,c,s,r,l,o)}}function YE(n,e,t,i,s){const r=e.serverCache,o=fm(e,r.getNode(),r.isFullyInitialized()||Pe(t),r.isFiltered());return ym(n,o,t,i,bm,s)}function QE(n,e,t,i,s,r){let o;if(Oo(i,t)!=null)return e;{const l=new uu(i,e,s),a=e.eventCache.getNode();let c;if(Pe(t)||Le(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Fo(i,$i(e));else{const f=e.serverCache.getNode();se(f instanceof ke,"serverChildren would be complete if leaf node"),u=au(i,f)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=Le(t);let f=cu(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=a.getImmediateChild(u)),f!=null?c=n.filter.updateChild(a,u,f,ct(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,ke.EMPTY_NODE,ct(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fo(i,$i(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Oo(i,Ye())!=null,ar(e,c,o,n.filter.filtersNodes())}}/**
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
 */class XE{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ru(i.getIndex()),r=hE(i);this.processor_=qE(r);const o=t.serverCache,l=t.eventCache,a=s.updateFullNode(ke.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(ke.EMPTY_NODE,l.getNode(),null),u=new _i(a,o.isFullyInitialized(),s.filtersNodes()),f=new _i(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=cl(f,u),this.eventGenerator_=new EE(this.query_)}get query(){return this.query_}}function JE(n){return n.viewCache_.serverCache.getNode()}function ZE(n){return Bo(n.viewCache_)}function e2(n,e){const t=$i(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Pe(e)&&!t.getImmediateChild(Le(e)).isEmpty())?t.getChild(e):null}function df(n){return n.eventRegistrations_.length===0}function t2(n,e){n.eventRegistrations_.push(e)}function ff(n,e,t){const i=[];if(t){se(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function hf(n,e,t,i){e.type===vn.MERGE&&e.source.queryId!==null&&(se($i(n.viewCache_),"We should always have a full cache before handling merges"),se(Bo(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=VE(n.processor_,s,e,t,i);return zE(n.processor_,r.viewCache),se(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,xm(n,r.changes,r.viewCache.eventCache.getNode(),null)}function n2(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(gt,(r,o)=>{i.push(ws(r,o))}),t.isFullyInitialized()&&i.push(lm(t.getNode())),xm(n,i,t.getNode(),e)}function xm(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return wE(n.eventGenerator_,e,t,s)}/**
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
 */let Mo;class Cm{constructor(){this.views=new Map}}function i2(n){se(!Mo,"__referenceConstructor has already been defined"),Mo=n}function s2(){return se(Mo,"Reference.ts has not been loaded"),Mo}function r2(n){return n.views.size===0}function du(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return se(r!=null,"SyncTree gave us an op for an invalid query."),hf(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(hf(o,e,t,i));return r}}function Em(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Fo(t,s?i:null),a=!1;l?a=!0:i instanceof ke?(l=au(t,i),a=!1):(l=ke.EMPTY_NODE,a=!1);const c=cl(new _i(l,a,!1),new _i(i,s,!1));return new XE(e,c)}return o}function o2(n,e,t,i,s,r){const o=Em(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),t2(o,t),n2(o,t)}function l2(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const l=mi(n);if(s==="default")for(const[a,c]of n.views.entries())o=o.concat(ff(c,t,i)),df(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(s);a&&(o=o.concat(ff(a,t,i)),df(a)&&(n.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!mi(n)&&r.push(new(s2())(e._repo,e._path)),{removed:r,events:o}}function wm(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ai(n,e){let t=null;for(const i of n.views.values())t=t||e2(i,e);return t}function km(n,e){if(e._queryParams.loadsAllData())return dl(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Im(n,e){return km(n,e)!=null}function mi(n){return dl(n)!=null}function dl(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Lo;function a2(n){se(!Lo,"__referenceConstructor has already been defined"),Lo=n}function c2(){return se(Lo,"Reference.ts has not been loaded"),Lo}let u2=1,pf=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fn(null),this.pendingWriteTree_=$E(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function Sm(n,e,t,i,s){return AE(n.pendingWriteTree_,e,t,i,s),s?zr(n,new al(um(),e,t)):[]}function Ii(n,e,t=!1){const i=TE(n.pendingWriteTree_,e);if(DE(n.pendingWriteTree_,e)){let r=new fn(null);return i.snap!=null?r=r.set(Ye(),!0):tn(i.children,o=>{r=r.set(new lt(o),!0)}),zr(n,new CE(i.path,r,t))}else return[]}function qr(n,e,t){return zr(n,new al(ou(),e,t))}function d2(n,e,t){const i=fn.fromObject(t);return zr(n,new dm(ou(),e,i))}function f2(n,e){return zr(n,new kr(ou(),e))}function h2(n,e,t){const i=hu(n,t);if(i){const s=pu(i),r=s.path,o=s.queryId,l=Xt(r,e),a=new kr(lu(o),l);return _u(n,r,a)}else return[]}function Am(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Im(o,e))){const a=l2(o,e,t,i);r2(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(d,h)=>mi(h));if(u&&!f){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const h=g2(d);for(let p=0;p<h.length;++p){const _=h[p],g=_.query,x=Rm(n,_);n.listenProvider_.startListening(ur(g),Ir(n,g),x.hashFn,x.onComplete)}}}!f&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(ur(e),null):c.forEach(d=>{const h=n.queryToTagMap.get(fl(d));n.listenProvider_.stopListening(ur(d),h)}))}v2(n,c)}return l}function Tm(n,e,t,i){const s=hu(n,i);if(s!=null){const r=pu(s),o=r.path,l=r.queryId,a=Xt(o,e),c=new al(lu(l),a,t);return _u(n,o,c)}else return[]}function p2(n,e,t,i){const s=hu(n,i);if(s){const r=pu(s),o=r.path,l=r.queryId,a=Xt(o,e),c=fn.fromObject(t),u=new dm(lu(l),a,c);return _u(n,o,u)}else return[]}function _2(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,h)=>{const p=Xt(d,s);r=r||ai(h,p),o=o||mi(h)});let l=n.syncPointTree_.get(s);l?(o=o||mi(l),r=r||ai(l,Ye())):(l=new Cm,n.syncPointTree_=n.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=ke.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((h,p)=>{const _=ai(p,Ye());_&&(r=r.updateImmediateChild(h,_))}));const c=Im(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=fl(e);se(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=b2();n.queryToTagMap.set(d,h),n.tagToQueryMap.set(h,d)}const u=ul(n.pendingWriteTree_,s);let f=o2(l,e,t,u,r,a);if(!c&&!o&&!i){const d=km(l,e);f=f.concat(y2(n,e,d))}return f}function fu(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=Xt(o,e),c=ai(l,a);if(c)return c});return mm(s,e,r,t,!0)}function m2(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const f=Xt(c,t);i=i||ai(u,f)});let s=n.syncPointTree_.get(t);s?i=i||ai(s,Ye()):(s=new Cm,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new _i(i,!0,!1):null,l=ul(n.pendingWriteTree_,e._path),a=Em(s,e,l,r?o.getNode():ke.EMPTY_NODE,r);return ZE(a)}function zr(n,e){return Dm(e,n.syncPointTree_,null,ul(n.pendingWriteTree_,Ye()))}function Dm(n,e,t,i){if(Pe(n.path))return Nm(n,e,t,i);{const s=e.get(Ye());t==null&&s!=null&&(t=ai(s,Ye()));let r=[];const o=Le(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=gm(i,o);r=r.concat(Dm(l,a,c,u))}return s&&(r=r.concat(du(s,n,i,t))),r}}function Nm(n,e,t,i){const s=e.get(Ye());t==null&&s!=null&&(t=ai(s,Ye()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=gm(i,o),u=n.operationForChild(o);u&&(r=r.concat(Nm(u,l,a,c)))}),s&&(r=r.concat(du(s,n,i,t))),r}function Rm(n,e){const t=e.query,i=Ir(n,t);return{hashFn:()=>(JE(e)||ke.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?h2(n,t._path,i):f2(n,t._path);{const r=uC(s,t);return Am(n,t,null,r)}}}}function Ir(n,e){const t=fl(e);return n.queryToTagMap.get(t)}function fl(n){return n._path.toString()+"$"+n._queryIdentifier}function hu(n,e){return n.tagToQueryMap.get(e)}function pu(n){const e=n.indexOf("$");return se(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new lt(n.substr(0,e))}}function _u(n,e,t){const i=n.syncPointTree_.get(e);se(i,"Missing sync point for query tag that we're tracking");const s=ul(n.pendingWriteTree_,e);return du(i,t,s,null)}function g2(n){return n.fold((e,t,i)=>{if(t&&mi(t))return[dl(t)];{let s=[];return t&&(s=wm(t)),tn(i,(r,o)=>{s=s.concat(o)}),s}})}function ur(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(c2())(n._repo,n._path):n}function v2(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=fl(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function b2(){return u2++}function y2(n,e,t){const i=e._path,s=Ir(n,e),r=Rm(n,t),o=n.listenProvider_.startListening(ur(e),s,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(i);if(s)se(!mi(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,f)=>{if(!Pe(c)&&u&&mi(u))return[dl(u).query];{let d=[];return u&&(d=d.concat(wm(u).map(h=>h.query))),tn(f,(h,p)=>{d=d.concat(p)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(ur(u),Ir(n,u))}}return o}/**
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
 */let x2=class Bm{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Bm(t)}node(){return this.node_}},C2=class Fm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=It(this.path_,e);return new Fm(this.syncTree_,t)}node(){return fu(this.syncTree_,this.path_)}};const E2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},_f=function(n,e,t){if(!n||typeof n!="object")return n;if(se(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return w2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return k2(n[".sv"],e);se(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},w2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:se(!1,"Unexpected server value: "+n)}},k2=function(n,e,t){n.hasOwnProperty("increment")||se(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&se(!1,"Unexpected increment value: "+i);const s=e.node();if(se(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},I2=function(n,e,t,i){return mu(e,new C2(t,n),i)},Om=function(n,e,t){return mu(n,new x2(e),t)};function mu(n,e,t){const i=n.getPriority().val(),s=_f(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=_f(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new Li(l,Nt(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Li(s))),o.forEachChild(gt,(l,a)=>{const c=mu(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */let gu=class{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}};function vu(n,e){let t=e instanceof lt?e:new lt(e),i=n,s=Le(t);for(;s!==null;){const r=xs(i.node.children,s)||{children:{},childCount:0};i=new gu(s,i,r),t=ct(t),s=Le(t)}return i}function $s(n){return n.node.value}function Pm(n,e){n.node.value=e,lc(n)}function Mm(n){return n.node.childCount>0}function S2(n){return $s(n)===void 0&&!Mm(n)}function hl(n,e){tn(n.node.children,(t,i)=>{e(new gu(t,n,i))})}function Lm(n,e,t,i){t&&!i&&e(n),hl(n,s=>{Lm(s,e,!0,i)}),t&&i&&e(n)}function A2(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Vr(n){return new lt(n.parent===null?n.name:Vr(n.parent)+"/"+n.name)}function lc(n){n.parent!==null&&T2(n.parent,n.name,n)}function T2(n,e,t){const i=S2(t),s=On(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,lc(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,lc(n))}/**
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
 */const D2=/[\[\].#$\/\u0000-\u001F\u007F]/,N2=/[\[\].#$\u0000-\u001F\u007F]/,Ul=10*1024*1024,$m=function(n){return typeof n=="string"&&n.length!==0&&!D2.test(n)},Hm=function(n){return typeof n=="string"&&n.length!==0&&!N2.test(n)},R2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hm(n)},mf=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!eu(n)||n&&typeof n=="object"&&On(n,".sv")},Um=function(n,e,t,i){i&&e===void 0||bu(Hc(n,"value"),e,t)},bu=function(n,e,t){const i=t instanceof lt?new VC(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+xi(i));if(typeof e=="function")throw new Error(n+"contains a function "+xi(i)+" with contents = "+e.toString());if(eu(e))throw new Error(n+"contains "+e.toString()+" "+xi(i));if(typeof e=="string"&&e.length>Ul/3&&nl(e)>Ul)throw new Error(n+"contains a string greater than "+Ul+" utf8 bytes "+xi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(tn(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!$m(o)))throw new Error(n+" contains an invalid key ("+o+") "+xi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jC(i,o),bu(n,l,i),GC(i)}),s&&r)throw new Error(n+' contains ".value" child '+xi(i)+" in addition to actual children.")}},Wm=function(n,e,t,i){if(!(i&&t===void 0)&&!Hm(t))throw new Error(Hc(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},B2=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wm(n,e,t,i)},yu=function(n,e){if(Le(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},F2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$m(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!R2(t))throw new Error(Hc(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */let O2=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function qm(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Q_(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Fn(n,e,t){qm(n,t),P2(n,i=>gn(i,e)||gn(e,i))}function P2(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(M2(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function M2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ni&&Ht("event: "+t.toString()),Ls(i)}}}/**
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
 */const L2="repo_interrupt",$2=25;let H2=class{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new O2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ro(),this.transactionQueueTree_=new gu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function U2(n,e,t){if(n.stats_=iu(n.repoInfo_),n.forceRestClient_||pC())n.server_=new _E(n.repoInfo_,(i,s,r,o)=>{gf(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>vf(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{kt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ur(n.repoInfo_,e,(i,s,r,o)=>{gf(n,i,s,r,o)},i=>{vf(n,i)},i=>{W2(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=bC(n.repoInfo_,()=>new xE(n.stats_,n.server_)),n.infoData_=new mE,n.infoSyncTree_=new pf({startListening:(i,s,r,o)=>{let l=[];const a=n.infoData_.getNode(i._path);return a.isEmpty()||(l=qr(n.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Cu(n,"connected",!1),n.serverSyncTree_=new pf({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);Fn(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function zm(n){const t=n.infoData_.getNode(new lt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function xu(n){return E2({timestamp:zm(n)})}function gf(n,e,t,i,s){n.dataUpdateCount++;const r=new lt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const a=xo(t,c=>Nt(c));o=p2(n.serverSyncTree_,r,a,s)}else{const a=Nt(t);o=Tm(n.serverSyncTree_,r,a,s)}else if(i){const a=xo(t,c=>Nt(c));o=d2(n.serverSyncTree_,r,a)}else{const a=Nt(t);o=qr(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=_l(n,r)),Fn(n.eventQueue_,l,o)}function vf(n,e){Cu(n,"connected",e),e===!1&&V2(n)}function W2(n,e){tn(e,(t,i)=>{Cu(n,t,i)})}function Cu(n,e,t){const i=new lt("/.info/"+e),s=Nt(t);n.infoData_.updateSnapshot(i,s);const r=qr(n.infoSyncTree_,i,s);Fn(n.eventQueue_,i,r)}function Vm(n){return n.nextWriteId_++}function q2(n,e,t){const i=m2(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=Nt(s).withIndex(e._queryParams.getIndex());_2(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=qr(n.serverSyncTree_,e._path,r);else{const l=Ir(n.serverSyncTree_,e);o=Tm(n.serverSyncTree_,e._path,r,l)}return Fn(n.eventQueue_,e._path,o),Am(n.serverSyncTree_,e,t,null,!0),r},s=>(pl(n,"get for query "+kt(e)+" failed: "+s),Promise.reject(new Error(s))))}function z2(n,e,t,i,s){pl(n,"set",{path:e.toString(),value:t,priority:i});const r=xu(n),o=Nt(t,i),l=fu(n.serverSyncTree_,e),a=Om(o,l,r),c=Vm(n),u=Sm(n.serverSyncTree_,e,a,c,!0);qm(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,h)=>{const p=d==="ok";p||en("set at "+e+" failed: "+d);const _=Ii(n.serverSyncTree_,c,!p);Fn(n.eventQueue_,e,_),G2(n,s,d,h)});const f=Qm(n,e);_l(n,f),Fn(n.eventQueue_,f,[])}function V2(n){pl(n,"onDisconnectEvents");const e=xu(n),t=Ro();Za(n.onDisconnect_,Ye(),(s,r)=>{const o=I2(s,r,n.serverSyncTree_,e);cm(t,s,o)});let i=[];Za(t,Ye(),(s,r)=>{i=i.concat(qr(n.serverSyncTree_,s,r));const o=Qm(n,s);_l(n,o)}),n.onDisconnect_=Ro(),Fn(n.eventQueue_,Ye(),i)}function j2(n){n.persistentConnection_&&n.persistentConnection_.interrupt(L2)}function pl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ht(t,...e)}function G2(n,e,t,i){e&&Ls(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function jm(n,e,t){return fu(n.serverSyncTree_,e,t)||ke.EMPTY_NODE}function Eu(n,e=n.transactionQueueTree_){if(e||ml(n,e),$s(e)){const t=Km(n,e);se(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&K2(n,Vr(e),t)}else Mm(e)&&hl(e,t=>{Eu(n,t)})}function K2(n,e,t){const i=t.map(c=>c.currentWriteId),s=jm(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];se(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Xt(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{pl(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Ii(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&f.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();ml(n,vu(n.transactionQueueTree_,e)),Eu(n,n.transactionQueueTree_),Fn(n.eventQueue_,e,u);for(let d=0;d<f.length;d++)Ls(f[d])}else{if(c==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{en("transaction at "+a.toString()+" failed: "+c);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=c}_l(n,e)}},o)}function _l(n,e){const t=Gm(n,e),i=Vr(t),s=Km(n,t);return Y2(n,s,i),i}function Y2(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Xt(t,a.path);let u=!1,f;if(se(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,f=a.abortReason,s=s.concat(Ii(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=$2)u=!0,f="maxretry",s=s.concat(Ii(n.serverSyncTree_,a.currentWriteId,!0));else{const d=jm(n,a.path,o);a.currentInputSnapshot=d;const h=e[l].update(d.val());if(h!==void 0){bu("transaction failed: Data returned ",h,a.path);let p=Nt(h);typeof h=="object"&&h!=null&&On(h,".priority")||(p=p.updatePriority(d.getPriority()));const g=a.currentWriteId,x=xu(n),v=Om(p,d,x);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=v,a.currentWriteId=Vm(n),o.splice(o.indexOf(g),1),s=s.concat(Sm(n.serverSyncTree_,a.path,v,a.currentWriteId,a.applyLocally)),s=s.concat(Ii(n.serverSyncTree_,g,!0))}else u=!0,f="nodata",s=s.concat(Ii(n.serverSyncTree_,a.currentWriteId,!0))}Fn(n.eventQueue_,t,s),s=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(f),!1,null))))}ml(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Ls(i[l]);Eu(n,n.transactionQueueTree_)}function Gm(n,e){let t,i=n.transactionQueueTree_;for(t=Le(e);t!==null&&$s(i)===void 0;)i=vu(i,t),e=ct(e),t=Le(e);return i}function Km(n,e){const t=[];return Ym(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Ym(n,e,t){const i=$s(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);hl(e,s=>{Ym(n,s,t)})}function ml(n,e){const t=$s(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Pm(e,t.length>0?t:void 0)}hl(e,i=>{ml(n,i)})}function Qm(n,e){const t=Vr(Gm(n,e)),i=vu(n.transactionQueueTree_,e);return A2(i,s=>{Wl(n,s)}),Wl(n,i),Lm(i,s=>{Wl(n,s)}),t}function Wl(n,e){const t=$s(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(se(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(se(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ii(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Pm(e,void 0):t.length=r+1,Fn(n.eventQueue_,Vr(e),s);for(let o=0;o<i.length;o++)Ls(i[o])}}/**
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
 */function Q2(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function X2(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):en(`Invalid query segment '${t}' in query '${n}'`)}return e}const bf=function(n,e){const t=J2(n),i=t.namespace;t.domain==="firebase.com"&&zn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&zn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||rC();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new O_(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new lt(t.pathString)}},J2=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(u,f)),u<f&&(s=Q2(n.substring(u,f)));const d=X2(n.substring(Math.min(n.length,f)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")t="localhost";else if(h.split(".").length<=2)t=h;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
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
 */const yf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Z2=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=yf.charAt(t%64),t=Math.floor(t/64);se(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=yf.charAt(e[s]);return se(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class ew{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+kt(this.snapshot.exportVal())}}class tw{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nw{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return se(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let Xm=class Jm{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return Pe(this._path)?null:G_(this._path)}get ref(){return new Gi(this._repo,this._path)}get _queryIdentifier(){const e=nf(this._queryParams),t=tu(e);return t==="{}"?"default":t}get _queryObject(){return nf(this._queryParams)}isEqual(e){if(e=Jt(e),!(e instanceof Jm))return!1;const t=this._repo===e._repo,i=Q_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+zC(this._path)}};function iw(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function sw(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===oi){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Mi)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==hi)throw new Error(i);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===gt){if(e!=null&&!mf(e)||t!=null&&!mf(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(se(n.getIndex()instanceof rm||n.getIndex()===om,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}let Gi=class Zm extends Xm{constructor(e,t){super(e,t,new fE,!1)}get parent(){const e=Y_(this._path);return e===null?null:new Zm(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}};class Sr{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),i=Vn(this.ref,e);return new Sr(this._node.getChild(t),i,gt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Sr(s,Vn(this.ref,i),gt)))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rn(n,e){return n=Jt(n),n._checkNotDeleted("ref"),e!==void 0?Vn(n._root,e):n._root}function Vn(n,e){return n=Jt(n),Le(n._path)===null?B2("child","path",e,!1):Wm("child","path",e,!1),new Gi(n._repo,It(n._path,e))}function rw(n,e){n=Jt(n),yu("push",n._path),Um("push",e,n._path,!0);const t=zm(n._repo),i=Z2(t),s=Vn(n,i),r=Vn(n,i);let o;return e!=null?o=Is(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function xf(n){return yu("remove",n._path),Is(n,null)}function Is(n,e){n=Jt(n),yu("set",n._path),Um("set",e,n._path,!1);const t=new tl;return z2(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function wu(n){n=Jt(n);const e=new nw(()=>{}),t=new ku(e);return q2(n._repo,n,t).then(i=>new Sr(i,new Gi(n._repo,n._path),n._queryParams.getIndex()))}class ku{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new ew("value",this,new Sr(e.snapshotNode,new Gi(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new tw(this,e,t):null}matches(e){return e instanceof ku?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ow{}class lw extends ow{_apply(e){iw(e,"orderByKey");const t=pE(e._queryParams,oi);return sw(t),new Xm(e._repo,e._path,t,!0)}}function Iu(){return new lw}function Su(n,...e){let t=Jt(n);for(const i of e)t=i._apply(t);return t}i2(Gi);a2(Gi);/**
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
 */const aw="FIREBASE_DATABASE_EMULATOR_HOST",ac={};let cw=!1;function uw(n,e,t,i){n.repoInfo_=new O_(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function dw(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||zn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ht("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=bf(r,s),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[aw]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=bf(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new hs(hs.OWNER):new mC(n.name,n.options,e);F2("Invalid Firebase Database URL",o),Pe(o.path)||zn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=hw(l,n,u,new _C(n.name,t));return new pw(f,n)}function fw(n,e){const t=ac[e];(!t||t[n.key]!==n)&&zn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),j2(n),delete t[n.key]}function hw(n,e,t,i){let s=ac[e.name];s||(s={},ac[e.name]=s);let r=s[n.toURLString()];return r&&zn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new H2(n,cw,t,i),s[n.toURLString()]=r,r}let pw=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(U2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gi(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zn("Cannot call "+e+" on a deleted database.")}};function eg(n=il(),e){const t=qc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Tv("database");i&&_w(t,...i)}return t}function _w(n,e,t,i={}){n=Jt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&zn("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&zn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new hs(hs.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Dv(i.mockUserToken,n.app.options.projectId);r=new hs(o)}uw(s,e,t,r)}/**
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
 */function mw(n){eC(Os),Cs(new Fi("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return dw(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ri(Ld,$d,n),ri(Ld,$d,"esm2017")}Ur.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ur.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};mw();const gw={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"},vw={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};zc(gw,"sud");zc(vw,"builds");const tg=il("sud"),bw=il("builds"),ng="https://xt8ss.github.io/ff-site-data";fetch(ng+"/user-ranks.json").then(async n=>await n.json());const Cf=Zx(tg),gl=eg(tg),Ss=eg(bw),yw={logIn:"material-symbols:login-rounded",logOut:"material-symbols:logout-rounded"},En={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},As=["head","body","legs","feet","neck","back","ring","misc"],vl={name:"",stats:{armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0},cost:{min:0,max:0},image:"",link:""},bl={name:"",info:{type:"",special:""},moves:[],cost:{min:0,max:0},image:"",link:""},xw={armor:{min:0,avg:0,max:0},gear:{min:0,avg:0,max:0},total:{min:0,avg:0,max:0}},Hi=[...Array(5).keys()].map(n=>++n),Cw=["head","body","legs","feet","neck","back","ring","misc","gear","sets","bonuses"],ig={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function sg(n,e){let t=!1;for(let i of[n,e])for(let s in i)if(i[s].name){t=!0;break}vo.set(t),ln.set(null),window.history.replaceState(null,null,location.origin+location.pathname)}function Au(n,e){let t=2.8,i=e.split(" ").length,s=n.querySelector("span");if(s.style.removeProperty("font-size"),i>2&&e.length/i>=5){for(;s.offsetHeight>n.offsetHeight*.75;)t-=.05,s.style.fontSize=`${t}rem`;return t<2.8}return null}function Ew(n,e){let t=2.8,i=n.querySelector("span");for(i.style.removeProperty("font-size");i.offsetWidth>n.offsetWidth;)t-=.05,i.style.fontSize=`${t}rem`;for(;i.offsetHeight>n.offsetHeight*.75&&e;)t-=.05,i.style.fontSize=`${t}rem`;return t<2.8?t:null}function ww(n){let e=2.35,t=n.querySelector(".tooltip");for(t.style.removeProperty("font-size");t.offsetHeight>n.offsetHeight*1.125;)e-=.02,t.style.fontSize=`${e}rem`}function kw(n){document.activeElement==document.body&&n.key=="Tab"&&(n.preventDefault(),document.querySelector(`.promptCont [id*='${n.shiftKey?"last":"first"}Focusable']`).focus())}function rg(n,e){let t=n.toLowerCase();for(let i in e)i.toLowerCase().includes(t)&&!e[i].classList.contains("filtered")?e[i].classList.remove("hidden"):e[i].classList.add("hidden")}function $o(n,e){e&&setTimeout(()=>{n.focus(),n.click(),n.select()})}function jt(n){n.shiftKey&&n.key=="Tab"&&n.preventDefault()}function Gt(n){n.key=="Tab"&&!n.shiftKey&&n.preventDefault()}function Ho(n,e){let t=/[^a-zA-Z0-9~!#$%^&*()\-_+[\]{}\\|;:'",.<>/? ]/g;return n.replace(t,"").replaceAll(`
`,"").replace(/^ /,"").slice(0,e)}function cc(n,e,t){(!n.maxLength||n.maxLength!=t)&&e.length>=t&&(n.maxLength=t)}function og(n,e){n={...n},e={...e};for(let t of As)n[t]?n[t]=n[t].name:n[t]="";for(let t of Hi)e[t]?e[t]=e[t].name:e[t]="";return{eq:n,gear:e}}function Tu(){window.history.replaceState(null,null,location.origin+location.pathname+"?ls=true")}function Ln(n){n.target.closest("button").blur()}function Iw(n,e){La.update(t=>[...t,{icon:yw[n],text:e}]),setTimeout(()=>La.update(t=>t.slice(1)),3e3)}function dr(n){return n!=null&&Object.keys(n).length}async function Sw(){return(await wu(Su(Rn(gl,`${K1(vs).toLowerCase()}/siteData/calculator`),Iu()))).val()}function Aw(n){let e,t,i,s,r,o,l,a,c,u,f,d;return{c(){e=C("li"),t=C("button"),i=C("img"),r=O(),o=C("span"),o.textContent=`${n[5]}`,l=O(),a=C("iconify-icon"),c=O(),u=C("iconify-icon"),mt(i.src,s=n[0].image)||y(i,"src",s),y(i,"alt",""),$e(a,"icon","maki:cross"),$e(a,"id","cross"),$e(u,"icon","eva:info-outline"),$e(u,"id","info"),ce(e,"selectedItem",n[2])},m(h,p){q(h,e,p),m(e,t),m(t,i),m(t,r),m(t,o),m(t,l),m(t,a),m(t,c),m(t,u),n[20](e),f||(d=[xp(n[6].call(null,o)),U(t,"touchstart",n[9],{passive:!0}),U(t,"touchend",n[10],{passive:!0}),U(t,"mousedown",n[9]),U(t,"mouseup",n[10]),U(t,"click",n[15]),U(t,"mouseenter",n[16]),U(t,"focusin",n[17]),U(t,"mouseleave",n[18]),U(t,"focusout",n[19]),U(e,"contextmenu",Tw)],f=!0)},p(h,[p]){p&1&&!mt(i.src,s=h[0].image)&&y(i,"src",s),p&4&&ce(e,"selectedItem",h[2])},i:ie,o:ie,d(h){h&&$(e),n[20](null),f=!1,we(d)}}}const Tw=n=>n.preventDefault();function Dw(n,e,t){let i,s,r,o,l,a,c;J(n,ne,F=>t(4,i=F)),J(n,Qt,F=>t(22,s=F)),J(n,cs,F=>t(23,r=F)),J(n,xn,F=>t(24,o=F)),J(n,Cn,F=>t(25,l=F)),J(n,Bn,F=>t(26,a=F)),J(n,Pc,F=>t(27,c=F));let{itemData:u,slotOpen:f,eqSlotName:d,scrolling:h}=e;const p=wn();let _,g=!1,x=u.name,v,b=0,E;function w(F){setTimeout(()=>{Au(_,x)&&c.push({node:_,itemName:x})})}function T(F){if(f||!f&&F.isTrusted==!1){p("itemSelect",{element:_,trusted:F.isTrusted}),_.classList.contains("selectedItem")||t(2,g=!1),t(2,g=!g),t(11,f=!1),Y(Cn,l[d]=g?u:vl,l),sg(l,a);for(let M of Object.keys(En)){Y(Qt,s[M]=0,s);for(let K in l)l[K].noStats||(Y(Qt,s[M]+=l[K].stats[M],s),Y(Qt,s[M]=Math.round(s[M]*10)/10,s))}for(let M of o.bonuses)if(r[M.name])for(let K in s)Y(Qt,s[K]+=M.stats[K],s),Y(Qt,s[K]=Math.round(s[K]*10)/10,s)}}function k(){h||(Y(ne,i.item.ongoing=!0,i),Y(ne,i.item.data={...u,slot:d,type:"eq",element:_},i))}function A(){E=setInterval(()=>t(14,b+=50),50)}function N(){clearInterval(E),b>=750&&k(),t(14,b=0)}const D=F=>{F.shiftKey?k():i.item.ongoing||T(F)},I=()=>t(3,v=!0),S=()=>t(3,v=!0),B=()=>t(3,v=!1),H=()=>t(3,v=!1);function W(F){de[F?"unshift":"push"](()=>{_=F,t(1,_)})}return n.$$set=F=>{"itemData"in F&&t(0,u=F.itemData),"slotOpen"in F&&t(11,f=F.slotOpen),"eqSlotName"in F&&t(12,d=F.eqSlotName),"scrolling"in F&&t(13,h=F.scrolling)},n.$$.update=()=>{n.$$.dirty&16384&&b==750&&p("displayInfo")},[u,_,g,v,i,x,w,T,k,A,N,f,d,h,b,D,I,S,B,H,W]}class Nw extends De{constructor(e){super(),Te(this,e,Dw,Aw,ve,{itemData:0,slotOpen:11,eqSlotName:12,scrolling:13})}}function Rw(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_;return{c(){e=C("li"),t=C("button"),i=C("img"),r=O(),o=C("span"),o.textContent=`${n[6]}`,l=O(),a=C("iconify-icon"),f=O(),d=C("iconify-icon"),mt(i.src,s=n[0].image)||y(i,"src",s),y(i,"alt",""),$e(a,"icon",c=n[5]?"heroicons-solid:switch-vertical":"maki:cross"),$e(a,"id",u=n[5]?"switchable":"cross"),$e(d,"icon","eva:info-outline"),$e(d,"id","info"),t.disabled=h=!n[4]&&!n[5],ce(e,"selectedItem",n[1]),ce(e,"non-eligible",!n[4]&&!n[5]),ce(e,"switchable",n[5])},m(g,x){q(g,e,x),m(e,t),m(t,i),m(t,r),m(t,o),m(t,l),m(t,a),m(t,f),m(t,d),n[19](e),p||(_=[xp(n[7].call(null,o)),U(t,"touchstart",n[10],{passive:!0}),U(t,"touchend",n[11],{passive:!0}),U(t,"mousedown",n[10]),U(t,"mouseup",n[11]),U(t,"click",n[18]),U(e,"contextmenu",Bw)],p=!0)},p(g,[x]){x&1&&!mt(i.src,s=g[0].image)&&y(i,"src",s),x&32&&c!==(c=g[5]?"heroicons-solid:switch-vertical":"maki:cross")&&$e(a,"icon",c),x&32&&u!==(u=g[5]?"switchable":"cross")&&$e(a,"id",u),x&48&&h!==(h=!g[4]&&!g[5])&&(t.disabled=h),x&2&&ce(e,"selectedItem",g[1]),x&48&&ce(e,"non-eligible",!g[4]&&!g[5]),x&32&&ce(e,"switchable",g[5])},i:ie,o:ie,d(g){g&&$(e),n[19](null),p=!1,we(_)}}}const Bw=n=>n.preventDefault();function Fw(n,e,t){let i,s,r,o,l;J(n,Bn,B=>t(17,i=B)),J(n,ne,B=>t(2,s=B)),J(n,Cn,B=>t(21,r=B)),J(n,ys,B=>t(22,o=B)),J(n,Pc,B=>t(23,l=B));let{itemData:a,slotOpen:c,index:u,weaponExpand:f,scrolling:d}=e;const h=wn();let p,_=!1,g=!0,x=!1,v=a.name,b=0,E,w={};function T(B){setTimeout(()=>{Au(p,v)&&l.push({node:p,itemName:v})})}function k(B){g&&(c||!c&&B.isTrusted==!1)&&(a.tool&&f&&h("toolSelect"),h("itemSelect",{element:p,trusted:B.isTrusted}),p.classList.contains("selectedItem")||t(1,_=!1),t(12,c=!1),x?setTimeout(()=>{o[u][v].querySelector("button").click(),o[Object.keys(i).find(H=>i[H].name==v)][i[u]&&i[u].name?i[u].name:v].querySelector("button").click(),t(4,g=!0),t(5,x=!1)},5):(t(1,_=!_),Y(Bn,i[u]=_?a:bl,i)),sg(r,i))}function A(){d||(Y(ne,s.item.ongoing=!0,s),Y(ne,s.item.data={...a,type:"gear",element:p},s))}function N(){E=setInterval(()=>t(16,b+=50),50)}function D(){clearInterval(E),b>=750&&A(),t(16,b=0)}const I=B=>{B.shiftKey?A():s.item.ongoing||k(B)};function S(B){de[B?"unshift":"push"](()=>{p=B,t(3,p)})}return n.$$set=B=>{"itemData"in B&&t(0,a=B.itemData),"slotOpen"in B&&t(12,c=B.slotOpen),"index"in B&&t(13,u=B.index),"weaponExpand"in B&&t(14,f=B.weaponExpand),"scrolling"in B&&t(15,d=B.scrolling)},n.$$.update=()=>{if(n.$$.dirty&155650&&i)for(let B in i){if(!f&&B!=u&&i[B].name==v){t(5,x=!0);break}if(B!=u&&w[i[B].name]&&w[i[B].name].includes(v)){t(4,g=!1);break}else _||t(4,g=!0)}if(n.$$.dirty&139268)if(s.randomize.ongoing)t(5,x=!1);else for(let B in i)if(B!=u&&i[B].name==v){t(5,x=!0);break}else t(5,x=!1);n.$$.dirty&65536&&b==750&&h("displayInfo")},[a,_,s,p,g,x,v,T,k,A,N,D,c,u,f,d,b,i,I,S]}class Ow extends De{constructor(e){super(),Te(this,e,Fw,Rw,ve,{itemData:0,slotOpen:12,index:13,weaponExpand:14,scrolling:15})}}function lg(n){const e=n-1;return e*e*e+1}function ft(n,{delay:e=0,duration:t=400,easing:i=Fr}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}function Qe(n,{delay:e=0,duration:t=400,easing:i=lg,start:s=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-s,u=l*(1-r);return{delay:e,duration:t,easing:i,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${l-u*d}
		`}}function Ef(n){let e,t,i,s;return{c(){e=C("img"),mt(e.src,t=n[5][n[3]])||y(e,"src",t),y(e,"alt","")},m(r,o){q(r,e,o),s=!0},p(r,o){(!s||o&8&&!mt(e.src,t=r[5][r[3]]))&&y(e,"src",t)},i(r){s||(r&&Ie(()=>{s&&(i||(i=ge(e,ft,{duration:150},!0)),i.run(1))}),s=!0)},o(r){r&&(i||(i=ge(e,ft,{duration:150},!1)),i.run(0)),s=!1},d(r){r&&$(e),r&&i&&i.end()}}}function Pw(n){let e,t,i=n[5][n[3]],s,r,o=n[0].name+"",l,a,c,u=Ef(n);return{c(){e=C("li"),t=C("button"),u.c(),s=O(),r=C("span"),l=re(o),ce(e,"selectedItem",n[4])},m(f,d){q(f,e,d),m(e,t),u.m(t,null),m(t,s),m(t,r),m(r,l),n[8](e),a||(c=[U(t,"click",n[6]),U(e,"mouseenter",n[9]),U(e,"focusin",n[10]),U(e,"mouseleave",n[11]),U(e,"focusout",n[12])],a=!0)},p(f,[d]){d&8&&ve(i,i=f[5][f[3]])?(Je(),G(u,1,1,ie),Ze(),u=Ef(f),u.c(),j(u,1),u.m(t,s)):u.p(f,d),d&1&&o!==(o=f[0].name+"")&&Se(l,o)},i(f){j(u)},o(f){G(u)},d(f){f&&$(e),u.d(f),n[8](null),a=!1,we(c)}}}function Mw(n,e,t){let i,s,r;J(n,bs,A=>t(14,i=A)),J(n,Cn,A=>t(15,s=A)),J(n,xn,A=>t(16,r=A));let{itemData:o,ddOpen:l=!1}=e;const a=wn();let c,u=!1,f=!1,d,h=0,p=o.pieces.length,_=[];for(let A of o.pieces)e:for(let N of As)for(let D of r[N])if(D.name==A){_.push(N);break e}let g=[];for(let A=0;A<p;A++)g.push(r[_[A]].find(N=>N.name==o.pieces[A]).image);function x(){f?d=setInterval(()=>{t(3,h++,h),h==p&&t(3,h=0)},750):(clearInterval(d),t(3,h=0))}function v(){a("setSelect");let A=0;for(let N=0;N<p;N++)!s[_[N]]||s[_[N]].name!=o.pieces[N]?i[_[N]][o.pieces[N]].querySelector("button").click():A++;A!=p&&t(7,l=!1)}function b(A){de[A?"unshift":"push"](()=>{c=A,t(2,c)})}const E=()=>t(1,f=!0),w=()=>t(1,f=!0),T=()=>t(1,f=!1),k=()=>t(1,f=!1);return n.$$set=A=>{"itemData"in A&&t(0,o=A.itemData),"ddOpen"in A&&t(7,l=A.ddOpen)},n.$$.update=()=>{n.$$.dirty&2&&(f||!f)&&x()},[o,f,c,h,u,g,v,l,b,E,w,T,k]}class Lw extends De{constructor(e){super(),Te(this,e,Mw,Pw,ve,{itemData:0,ddOpen:7})}}const $w=n=>({}),wf=n=>({});function Hw(n){let e,t,i,s,r,o,l,a,c;const u=n[8].tooltip,f=Y1(u,n,n[7],wf);return{c(){e=C("div"),t=C("span"),i=O(),s=C("input"),o=O(),f&&f.c(),y(s,"id",r=n[2]?"firstFocusable":n[3]?"lastFocusable":""),s.disabled=n[4],y(s,"type","checkbox"),s.checked=n[1],y(s,"class","svelte-i9pcgn"),y(e,"class","toggleCont svelte-i9pcgn"),ce(e,"unavailable",n[4])},m(d,h){q(d,e,h),m(e,t),t.innerHTML=n[0],m(e,i),m(e,s),m(e,o),f&&f.m(e,null),l=!0,a||(c=[U(s,"change",n[9]),U(s,"keydown",n[10])],a=!0)},p(d,[h]){(!l||h&1)&&(t.innerHTML=d[0]),(!l||h&12&&r!==(r=d[2]?"firstFocusable":d[3]?"lastFocusable":""))&&y(s,"id",r),(!l||h&16)&&(s.disabled=d[4]),(!l||h&2)&&(s.checked=d[1]),f&&f.p&&(!l||h&128)&&X1(f,u,d,d[7],l?Q1(u,d[7],h,$w):J1(d[7]),wf),(!l||h&16)&&ce(e,"unavailable",d[4])},i(d){l||(j(f,d),l=!0)},o(d){G(f,d),l=!1},d(d){d&&$(e),f&&f.d(d),a=!1,we(c)}}}function Uw(n,e,t){let{$$slots:i={},$$scope:s}=e,{text:r,checked:o=!1,first:l=!1,last:a=!1,disabled:c=!1,forced:u=!1}=e;const f=wn(),d=p=>{p.target.blur(),u?p.target.checked=!0:f("toggle",p.target.checked)},h=p=>{l&&jt(p),a&&Gt(p),p.key=="Enter"&&!u?(p.target.checked=!p.target.checked,f("toggle",p.target.checked)):u&&(p.target.checked=!0)};return n.$$set=p=>{"text"in p&&t(0,r=p.text),"checked"in p&&t(1,o=p.checked),"first"in p&&t(2,l=p.first),"last"in p&&t(3,a=p.last),"disabled"in p&&t(4,c=p.disabled),"forced"in p&&t(5,u=p.forced),"$$scope"in p&&t(7,s=p.$$scope)},[r,o,l,a,c,u,f,s,i,d,h]}class qt extends De{constructor(e){super(),Te(this,e,Uw,Hw,ve,{text:0,checked:1,first:2,last:3,disabled:4,forced:5})}}function kf(n,e,t){const i=n.slice();return i[28]=e[t][0],i[29]=e[t][1],i}function If(n,e,t){const i=n.slice();return i[28]=e[t][0],i[29]=e[t][1],i}function Sf(n){let e,t;function i(...s){return n[19](n[28],...s)}return e=new qt({props:{text:n[29],checked:n[6][n[28]]}}),e.$on("toggle",i),{c(){ae(e.$$.fragment)},m(s,r){oe(e,s,r),t=!0},p(s,r){n=s;const o={};r[0]&64&&(o.checked=n[6][n[28]]),e.$set(o)},i(s){t||(j(e.$$.fragment,s),t=!0)},o(s){G(e.$$.fragment,s),t=!1},d(s){le(e,s)}}}function Ww(n){let e,t,i,s,r,o,l,a,c;s=new qt({props:{text:"Descension",checked:n[4],forced:n[4]}}),s.$on("toggle",n[20]),o=new qt({props:{text:"Ascension",checked:n[5],forced:n[5]}}),o.$on("toggle",n[21]);let u=Ue(Object.entries(n[9])),f=[];for(let h=0;h<u.length;h+=1)f[h]=Af(kf(n,u,h));const d=h=>G(f[h],1,1,()=>{f[h]=null});return{c(){e=C("p"),e.textContent="Sort",t=O(),i=C("div"),ae(s.$$.fragment),r=O(),ae(o.$$.fragment),l=O(),a=C("div");for(let h=0;h<f.length;h+=1)f[h].c();y(e,"id","title"),y(e,"class","svelte-6kxnh3"),y(i,"class","radio ttFocus svelte-6kxnh3"),y(i,"id","sort"),y(a,"class","options svelte-6kxnh3")},m(h,p){q(h,e,p),q(h,t,p),q(h,i,p),oe(s,i,null),m(i,r),oe(o,i,null),q(h,l,p),q(h,a,p);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(a,null);c=!0},p(h,p){const _={};p[0]&16&&(_.checked=h[4]),p[0]&16&&(_.forced=h[4]),s.$set(_);const g={};if(p[0]&32&&(g.checked=h[5]),p[0]&32&&(g.forced=h[5]),o.$set(g),p[0]&1664){u=Ue(Object.entries(h[9]));let x;for(x=0;x<u.length;x+=1){const v=kf(h,u,x);f[x]?(f[x].p(v,p),j(f[x],1)):(f[x]=Af(v),f[x].c(),j(f[x],1),f[x].m(a,null))}for(Je(),x=u.length;x<f.length;x+=1)d(x);Ze()}},i(h){if(!c){j(s.$$.fragment,h),j(o.$$.fragment,h);for(let p=0;p<u.length;p+=1)j(f[p]);c=!0}},o(h){G(s.$$.fragment,h),G(o.$$.fragment,h),f=f.filter(Boolean);for(let p=0;p<f.length;p+=1)G(f[p]);c=!1},d(h){h&&($(e),$(t),$(i),$(l),$(a)),le(s),le(o),Lt(f,h)}}}function Af(n){let e,t;function i(...s){return n[22](n[28],...s)}return e=new qt({props:{text:n[29],checked:n[7][n[28]],last:n[28]=="none"||n[28]=="tool"}}),e.$on("toggle",i),{c(){ae(e.$$.fragment)},m(s,r){oe(e,s,r),t=!0},p(s,r){n=s;const o={};r[0]&128&&(o.checked=n[7][n[28]]),e.$set(o)},i(s){t||(j(e.$$.fragment,s),t=!0)},o(s){G(e.$$.fragment,s),t=!1},d(s){le(e,s)}}}function qw(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g,x,v,b,E,w,T,k;o=new qt({props:{text:"Inclusive",checked:n[1],forced:n[1]}}),o.$on("toggle",n[14]),a=new qt({props:{text:"Exclusive",checked:n[2],forced:n[2]}}),a.$on("toggle",n[15]),u=new qt({props:{text:"Strict",checked:n[3],forced:n[3]}}),u.$on("toggle",n[16]);let A=Ue(Object.entries(n[9])),N=[];for(let S=0;S<A.length;S+=1)N[S]=Sf(If(n,A,S));const D=S=>G(N[S],1,1,()=>{N[S]=null});let I=!n[8]&&Ww(n);return{c(){e=C("div"),t=C("div"),i=C("p"),i.innerHTML=`Filter
            <span class="tooltip svelte-6kxnh3" id="bottom">Inclusive: Equipment that includes the selected search types
                <br/> <br/>
                Exclusive: Equipment that does not include the selected search types
                <br/> <br/>
                Strict: Equipment that includes the selected search types and no
                others</span> <iconify-icon icon="eva:info-outline"></iconify-icon>`,s=O(),r=C("div"),ae(o.$$.fragment),l=O(),ae(a.$$.fragment),c=O(),ae(u.$$.fragment),f=O(),d=C("div"),h=C("div"),p=C("button"),p.textContent="Select all",_=O(),g=C("div"),x=C("button"),x.textContent="Clear all",v=O(),b=C("div");for(let S=0;S<N.length;S+=1)N[S].c();E=O(),I&&I.c(),y(i,"id","title"),y(i,"class","svelte-6kxnh3"),y(r,"class","radio ttFocus svelte-6kxnh3"),y(r,"id","filter"),y(p,"class","svelte-6kxnh3"),y(h,"class","svelte-6kxnh3"),y(x,"class","svelte-6kxnh3"),y(g,"class","svelte-6kxnh3"),y(d,"class","optionsAll svelte-6kxnh3"),y(b,"class","options svelte-6kxnh3"),y(t,"class","searchOptions svelte-6kxnh3"),y(e,"class","searchOptionsCont svelte-6kxnh3"),ce(e,"optionsOpen",n[0])},m(S,B){q(S,e,B),m(e,t),m(t,i),m(t,s),m(t,r),oe(o,r,null),m(r,l),oe(a,r,null),m(r,c),oe(u,r,null),m(t,f),m(t,d),m(d,h),m(h,p),m(d,_),m(d,g),m(g,x),m(t,v),m(t,b);for(let H=0;H<N.length;H+=1)N[H]&&N[H].m(b,null);m(t,E),I&&I.m(t,null),w=!0,T||(k=[U(p,"click",n[17]),U(x,"click",n[18])],T=!0)},p(S,B){const H={};B[0]&2&&(H.checked=S[1]),B[0]&2&&(H.forced=S[1]),o.$set(H);const W={};B[0]&4&&(W.checked=S[2]),B[0]&4&&(W.forced=S[2]),a.$set(W);const F={};if(B[0]&8&&(F.checked=S[3]),B[0]&8&&(F.forced=S[3]),u.$set(F),B[0]&1600){A=Ue(Object.entries(S[9]));let M;for(M=0;M<A.length;M+=1){const K=If(S,A,M);N[M]?(N[M].p(K,B),j(N[M],1)):(N[M]=Sf(K),N[M].c(),j(N[M],1),N[M].m(b,null))}for(Je(),M=A.length;M<N.length;M+=1)D(M);Ze()}S[8]||I.p(S,B),(!w||B[0]&1)&&ce(e,"optionsOpen",S[0])},i(S){if(!w){j(o.$$.fragment,S),j(a.$$.fragment,S),j(u.$$.fragment,S);for(let B=0;B<A.length;B+=1)j(N[B]);j(I),w=!0}},o(S){G(o.$$.fragment,S),G(a.$$.fragment,S),G(u.$$.fragment,S),N=N.filter(Boolean);for(let B=0;B<N.length;B+=1)G(N[B]);G(I),w=!1},d(S){S&&$(e),le(o),le(a),le(u),Lt(N,S),I&&I.d(),T=!1,we(k)}}}function zw(n,e,t){let i;J(n,xn,W=>t(24,i=W));let{optionsOpen:s,slotName:r,elementData:o,list:l}=e;const a=wn();let c=r=="gear",u=!0,f=!1,d=!1,h=!0,p=!1,_={},g={},x=c?{armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",unique:"Unique",tool:"Tool"}:{...En,none:"No Stats"};for(let W of Object.keys(x))_[W]=!0;for(let W of Object.keys(x))g[W]=!1;let v=["Void Spike Ultradagger","Pureblood Dagger","Gnome Rocket Launcher"],b=[];function E(W){setTimeout(()=>{for(let F in o){let M=i[r].find(z=>z.name==F),K={...En},te={armor:!1,magicDmg:!1,meleeDmg:!1,rangedDmg:!1,unique:!1,tool:!1},ee=c?te:K,L=!1;if(c)if(!M.tool&&!v.includes(M.name)){for(let z in _)for(let V of M.moves)if(te[z]=V.type.includes(z),te[z])break}else te.tool=!!M.tool,te.tool||(te.unique=M.info.type=="Unique",M.name=="Void Spike Ultradagger"&&(te.armor=!0,te.meleeDmg=!0));else{for(let z in _)K[z]=M.stats[z]!=0;K.none=!!M.noStats}if(u)for(let z in ee)if(_[z]&&ee[z]){L=!1;break}else L=!0;else if(f)for(let z in ee)if(_[z]&&ee[z]){L=!0;break}else L=!1;else if(d)for(let z in ee)if(_[z]&&ee[z]||!_[z]&&!ee[z])L=!1;else{L=!0;break}L?o[F].classList.add("hidden","filtered"):o[F].classList.remove("hidden","filtered")}if(W=="sort"){let F=Object.keys(g).find(K=>g[K]),M=0;for(F&&!(F=="none"||F=="tool")?(b.sort((K,te)=>{let ee=w(K,te,!0).stats[F]-w(K,te,!1).stats[F];return M||(M=ee),ee}),M||(b=Object.values(o))):!F&&p&&(b=Object.values(o).toReversed()),F=="none"&&(b=[...Object.entries(o).filter(K=>i[r].find(te=>te.name==K[0]).noStats),...Object.entries(o).filter(K=>!i[r].find(te=>te.name==K[0]).noStats)],b=b.map(K=>K[1]),p&&b.reverse());l.lastElementChild;)l.removeChild(l.lastElementChild);if(F||!F&&p)for(let K of b)l.appendChild(K);else for(let K in o)l.appendChild(o[K])}a("listUpdate")})}function w(W,F,M){return i[r].find(K=>K.name==Object.keys(o).find(te=>o[te]===(h?M?F:W:M?W:F)))}const T=W=>{t(1,u=W.detail),W.detail&&(t(2,f=!1),t(3,d=!1)),E("filter")},k=W=>{t(2,f=W.detail),W.detail&&(t(1,u=!1),t(3,d=!1)),E("filter")},A=W=>{t(3,d=W.detail),W.detail&&(t(1,u=!1),t(2,f=!1)),E("filter")},N=W=>{W.target.blur();for(let F in _)t(6,_[F]=!0,_);E("filter")},D=W=>{W.target.blur();for(let F in _)t(6,_[F]=!1,_);E("filter")},I=(W,F)=>{t(6,_[W]=F.detail,_),E("filter")},S=W=>{t(4,h=W.detail),W.detail&&t(5,p=!1),E("sort")},B=W=>{t(5,p=W.detail),W.detail&&t(4,h=!1),E("sort")},H=(W,F)=>{if(t(7,g[W]=F.detail,g),F.detail)for(let M in g)M!=W&&t(7,g[M]=!1,g);E("sort")};return n.$$set=W=>{"optionsOpen"in W&&t(0,s=W.optionsOpen),"slotName"in W&&t(11,r=W.slotName),"elementData"in W&&t(12,o=W.elementData),"list"in W&&t(13,l=W.list)},n.$$.update=()=>{n.$$.dirty[0]&8192&&l&&(b=[...l.children])},[s,u,f,d,h,p,_,g,c,x,E,r,o,l,T,k,A,N,D,I,S,B,H]}class Vw extends De{constructor(e){super(),Te(this,e,zw,qw,ve,{optionsOpen:0,slotName:11,elementData:12,list:13},null,[-1,-1])}}function Tf(n,e,t){const i=n.slice();return i[61]=e[t],i}function jw(n){let e;return{c(){e=C("span"),e.textContent="Loading items...",y(e,"class","svelte-3qe8b")},m(t,i){q(t,e,i)},p:ie,i:ie,o:ie,d(t){t&&$(e)}}}function Gw(n){let e,t,i,s,r,o,l,a=n[3]!="sets"&&Df(n),c=Ue(n[6]),u=[];for(let d=0;d<c.length;d+=1)u[d]=Nf(Tf(n,c,d));const f=d=>G(u[d],1,1,()=>{u[d]=null});return{c(){e=C("input"),t=O(),a&&a.c(),i=O(),s=C("ul");for(let d=0;d<u.length;d+=1)u[d].c();y(e,"type","text"),y(e,"class","searchBarInput"),y(e,"placeholder","Search..."),y(s,"class","svelte-3qe8b"),ce(s,"no-scrollbar",n[15].length<=4)},m(d,h){q(d,e,h),n[29](e),q(d,t,h),a&&a.m(d,h),q(d,i,h),q(d,s,h);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(s,null);n[42](s),r=!0,o||(l=[U(e,"keydown",n[18]),U(e,"input",n[19]),U(s,"mouseup",n[43]),U(s,"touchend",n[44],{passive:!0}),U(s,"scroll",n[45]),U(s,"scrollend",n[46])],o=!0)},p(d,h){if(d[3]!="sets"?a?a.p(d,h):(a=Df(d),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null),h[0]&1197019){c=Ue(d[6]);let p;for(p=0;p<c.length;p+=1){const _=Tf(d,c,p);u[p]?(u[p].p(_,h),j(u[p],1)):(u[p]=Nf(_),u[p].c(),j(u[p],1),u[p].m(s,null))}for(Je(),p=c.length;p<u.length;p+=1)f(p);Ze()}(!r||h[0]&32768)&&ce(s,"no-scrollbar",d[15].length<=4)},i(d){if(!r){for(let h=0;h<c.length;h+=1)j(u[h]);r=!0}},o(d){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)G(u[h]);r=!1},d(d){d&&($(e),$(t),$(i),$(s)),n[29](null),a&&a.d(d),Lt(u,d),n[42](null),o=!1,we(l)}}}function Df(n){let e,t,i;return{c(){e=C("button"),e.innerHTML='<iconify-icon icon="mi:filter"></iconify-icon>',y(e,"class","optionsButton svelte-3qe8b")},m(s,r){q(s,e,r),n[30](e),t||(i=U(e,"click",n[31]),t=!0)},p:ie,d(s){s&&$(e),n[30](null),t=!1,i()}}}function Kw(n){let e,t,i,s;function r(a){n[39](a)}function o(a){n[40](a)}let l={itemData:n[61],eqSlotName:n[3]};return n[0]!==void 0&&(l.slotOpen=n[0]),n[9]!==void 0&&(l.scrolling=n[9]),e=new Nw({props:l}),de.push(()=>Ke(e,"slotOpen",r)),de.push(()=>Ke(e,"scrolling",o)),e.$on("itemSelect",n[20]),e.$on("displayInfo",n[41]),{c(){ae(e.$$.fragment)},m(a,c){oe(e,a,c),s=!0},p(a,c){const u={};c[0]&64&&(u.itemData=a[61]),c[0]&8&&(u.eqSlotName=a[3]),!t&&c[0]&1&&(t=!0,u.slotOpen=a[0],Ge(()=>t=!1)),!i&&c[0]&512&&(i=!0,u.scrolling=a[9],Ge(()=>i=!1)),e.$set(u)},i(a){s||(j(e.$$.fragment,a),s=!0)},o(a){G(e.$$.fragment,a),s=!1},d(a){le(e,a)}}}function Yw(n){let e,t,i;function s(o){n[37](o)}let r={itemData:n[61]};return n[0]!==void 0&&(r.ddOpen=n[0]),e=new Lw({props:r}),de.push(()=>Ke(e,"ddOpen",s)),e.$on("setSelect",n[38]),{c(){ae(e.$$.fragment)},m(o,l){oe(e,o,l),i=!0},p(o,l){const a={};l[0]&64&&(a.itemData=o[61]),!t&&l[0]&1&&(t=!0,a.ddOpen=o[0],Ge(()=>t=!1)),e.$set(a)},i(o){i||(j(e.$$.fragment,o),i=!0)},o(o){G(e.$$.fragment,o),i=!1},d(o){le(e,o)}}}function Qw(n){let e,t,i,s,r;function o(u){n[32](u)}function l(u){n[33](u)}function a(u){n[34](u)}let c={itemData:n[61],index:n[4]};return n[0]!==void 0&&(c.slotOpen=n[0]),n[1]!==void 0&&(c.weaponExpand=n[1]),n[9]!==void 0&&(c.scrolling=n[9]),e=new Ow({props:c}),de.push(()=>Ke(e,"slotOpen",o)),de.push(()=>Ke(e,"weaponExpand",l)),de.push(()=>Ke(e,"scrolling",a)),e.$on("itemSelect",n[20]),e.$on("toolSelect",n[35]),e.$on("displayInfo",n[36]),{c(){ae(e.$$.fragment)},m(u,f){oe(e,u,f),r=!0},p(u,f){const d={};f[0]&64&&(d.itemData=u[61]),f[0]&16&&(d.index=u[4]),!t&&f[0]&1&&(t=!0,d.slotOpen=u[0],Ge(()=>t=!1)),!i&&f[0]&2&&(i=!0,d.weaponExpand=u[1],Ge(()=>i=!1)),!s&&f[0]&512&&(s=!0,d.scrolling=u[9],Ge(()=>s=!1)),e.$set(d)},i(u){r||(j(e.$$.fragment,u),r=!0)},o(u){G(e.$$.fragment,u),r=!1},d(u){le(e,u)}}}function Nf(n){let e,t,i,s;const r=[Qw,Yw,Kw],o=[];function l(a,c){return a[4]?0:a[3]=="sets"?1:2}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),i=Dt()},m(a,c){o[e].m(a,c),q(a,i,c),s=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(Je(),G(o[u],1,1,()=>{o[u]=null}),Ze(),t=o[e],t?t.p(a,c):(t=o[e]=r[e](a),t.c()),j(t,1),t.m(i.parentNode,i))},i(a){s||(j(t),s=!0)},o(a){G(t),s=!1},d(a){a&&$(i),o[e].d(a)}}}function Rf(n){let e,t,i,s;function r(a){n[47](a)}function o(a){n[48](a)}let l={slotName:n[3],elementData:n[16]};return n[2]!==void 0&&(l.optionsOpen=n[2]),n[5]!==void 0&&(l.list=n[5]),e=new Vw({props:l}),de.push(()=>Ke(e,"optionsOpen",r)),de.push(()=>Ke(e,"list",o)),e.$on("listUpdate",n[19]),{c(){ae(e.$$.fragment)},m(a,c){oe(e,a,c),s=!0},p(a,c){const u={};c[0]&8&&(u.slotName=a[3]),c[0]&65536&&(u.elementData=a[16]),!t&&c[0]&4&&(t=!0,u.optionsOpen=a[2],Ge(()=>t=!1)),!i&&c[0]&32&&(i=!0,u.list=a[5],Ge(()=>i=!1)),e.$set(u)},i(a){s||(j(e.$$.fragment,a),s=!0)},o(a){G(e.$$.fragment,a),s=!1},d(a){le(e,a)}}}function Xw(n){let e,t,i,s,r,o,l;const a=[Gw,jw],c=[];function u(d,h){return d[6]?0:1}t=u(n),i=c[t]=a[t](n);let f=n[3]!="sets"&&Rf(n);return{c(){e=C("div"),i.c(),s=O(),f&&f.c(),y(e,"class","dropdown svelte-3qe8b"),ce(e,"infoDisplay",n[7])},m(d,h){q(d,e,h),c[t].m(e,null),m(e,s),f&&f.m(e,null),n[49](e),r=!0,o||(l=[U(window,"keydown",n[26]),U(window,"keyup",n[27]),U(window,"mousedown",n[28]),U(e,"transitionend",n[50]),U(e,"transitioncancel",n[51])],o=!0)},p(d,h){let p=t;t=u(d),t===p?c[t].p(d,h):(Je(),G(c[p],1,1,()=>{c[p]=null}),Ze(),i=c[t],i?i.p(d,h):(i=c[t]=a[t](d),i.c()),j(i,1),i.m(e,s)),d[3]!="sets"?f?(f.p(d,h),h[0]&8&&j(f,1)):(f=Rf(d),f.c(),j(f,1),f.m(e,null)):f&&(Je(),G(f,1,1,()=>{f=null}),Ze()),(!r||h[0]&128)&&ce(e,"infoDisplay",d[7])},i(d){r||(j(i),j(f),r=!0)},o(d){G(i),G(f),r=!1},d(d){d&&$(e),c[t].d(),f&&f.d(),n[49](null),o=!1,we(l)}}}function Jw(n,e,t){let i,s,r,o,l,a,c,u,f;J(n,xn,P=>t(22,r=P)),J(n,bs,P=>t(23,o=P)),J(n,yv,P=>t(24,l=P)),J(n,ys,P=>t(25,a=P)),J(n,rn,P=>t(54,c=P)),J(n,Bn,P=>t(55,u=P)),J(n,Cn,P=>t(56,f=P));let{slotName:d,index:h=0,slotOpen:p,weaponExpand:_=null,optionsOpen:g=!1}=e;const x=wn();h?Y(ys,a[h]={},a):Y(bs,o[d]={},o);let v=!1,b=!1,E=!1,w,T,k,A,N,D=null,I=!1,S=!1,B=[];function H(){N&&N.classList.remove("lastElement"),t(15,B=k.querySelectorAll("li:not(.hidden)")),N=B[B.length-1],N&&N.classList.add("lastElement"),(!N||N.classList.contains("non-eligible"))&&(N=A)}function W(P){!P.shiftKey&&P.key=="Tab"&&!g&&(P.preventDefault(),setTimeout(()=>T.focus()))}function F(){N&&N.removeEventListener("keydown",W),H(),N&&N.addEventListener("keydown",W)}function M(P){P.shiftKey&&P.key=="Tab"&&(P.preventDefault(),setTimeout(()=>(N.querySelector("button")||N).focus()))}function K(){rg(T.value,i),F()}function te(P){x("itemSelect",P.detail.element),t(13,D=P.detail.element),I=P.detail.trusted;let Oe=k.querySelector(".selectedItem");Oe&&Oe!=P.detail.element&&Oe.classList.remove("selectedItem"),t(14,S=!0),I||(L(),k.scrollTo(0,D.offsetTop)),setTimeout(ee)}function ee(){Y(rn,c=structuredClone(xw),c);for(let P in f)f[P].cost.min!=null&&(Y(rn,c.armor.min+=f[P].cost.min,c),Y(rn,c.armor.max+=f[P].cost.max,c));Y(rn,c.armor.avg=Math.ceil((c.armor.min+c.armor.max)/2),c);for(let P in u)u[P].cost.min!=null&&(Y(rn,c.gear.min+=u[P].cost.min,c),Y(rn,c.gear.max+=u[P].cost.max,c));Y(rn,c.gear.avg=Math.ceil((c.gear.min+c.gear.max)/2),c),Y(rn,c.total.min=c.armor.min+c.gear.min,c),Y(rn,c.total.max=c.armor.max+c.gear.max,c),Y(rn,c.total.avg=Math.ceil((c.total.min+c.total.max)/2),c)}function L(){t(14,S=!1),t(11,T.value="",T),K()}const z=P=>{d!="sets"&&!v&&P.shiftKey&&t(7,v=!0)},V=P=>{d!="sets"&&P.key=="Shift"&&!b&&t(7,v=!1)},R=()=>(t(7,v=!1),t(8,b=!1));function Q(P){de[P?"unshift":"push"](()=>{T=P,t(11,T)})}function pe(P){de[P?"unshift":"push"](()=>{A=P,t(12,A)})}const me=()=>t(2,g=!g);function fe(P){p=P,t(0,p)}function Be(P){_=P,t(1,_)}function Ne(P){E=P,t(9,E)}const Fe=()=>x("toolSelect"),Ae=()=>(t(7,v=!0),t(8,b=!0));function _e(P){p=P,t(0,p)}const be=()=>t(14,S=!0);function rt(P){p=P,t(0,p)}function St(P){E=P,t(9,E)}const Ft=()=>(t(7,v=!0),t(8,b=!0));function he(P){de[P?"unshift":"push"](()=>{k=P,t(5,k)})}const Kt=()=>t(7,v=!1),Z=()=>t(7,v=!1),Ce=()=>t(9,E=!0),Me=()=>t(9,E=!1);function tt(P){g=P,t(2,g)}function _t(P){k=P,t(5,k)}function Ot(P){de[P?"unshift":"push"](()=>{w=P,t(10,w)})}const Xe=P=>{P.propertyName=="visibility"&&P.target==w&&(S&&L(),!p&&D&&setTimeout(()=>k.scrollTo(0,D.offsetTop)),$o(T,p))},Et=P=>{P.propertyName=="visibility"&&P.target==w&&(t(14,S=!1),$o(T,p))};return n.$$set=P=>{"slotName"in P&&t(3,d=P.slotName),"index"in P&&t(4,h=P.index),"slotOpen"in P&&t(0,p=P.slotOpen),"weaponExpand"in P&&t(1,_=P.weaponExpand),"optionsOpen"in P&&t(2,g=P.optionsOpen)},n.$$.update=()=>{if(n.$$.dirty[0]&58720280&&t(16,i=h?a[h]:d=="sets"?l:o[d]),n.$$.dirty[0]&4194312&&t(6,s=r[d]),n.$$.dirty[0]&96&&k){t(15,B=k.querySelectorAll("li:not(.hidden)"));for(let P=0;P<k.childElementCount;P++)t(16,i[s[P].name]=k.children[P],i);H(),F()}},[p,_,g,d,h,k,s,v,b,E,w,T,A,D,S,B,i,x,M,K,te,L,r,o,l,a,z,V,R,Q,pe,me,fe,Be,Ne,Fe,Ae,_e,be,rt,St,Ft,he,Kt,Z,Ce,Me,tt,_t,Ot,Xe,Et]}class Du extends De{constructor(e){super(),Te(this,e,Jw,Xw,ve,{slotName:3,index:4,slotOpen:0,weaponExpand:1,optionsOpen:2},null,[-1,-1,-1])}}function Bf(n){let e,t,i,s,r,o,l=n[1].name+"",a,c,u,f,d;return{c(){e=C("button"),t=C("img"),r=O(),o=C("span"),a=re(l),mt(t.src,i=n[1].image)||y(t,"src",i),y(t,"alt",s=n[1].name),y(t,"draggable","false"),y(t,"class","svelte-1bgnkwv"),y(o,"class","tooltip"),y(o,"id","left"),y(e,"class","svelte-1bgnkwv"),ot(e,"display",n[1].link?"":"none")},m(h,p){q(h,e,p),m(e,t),m(e,r),m(e,o),m(o,a),u=!0,f||(d=[U(e,"click",n[13]),U(e,"focusin",n[14]),U(e,"outroend",n[15])],f=!0)},p(h,p){(!u||p&2&&!mt(t.src,i=h[1].image))&&y(t,"src",i),(!u||p&2&&s!==(s=h[1].name))&&y(t,"alt",s),(!u||p&2)&&l!==(l=h[1].name+"")&&Se(a,l),p&2&&ot(e,"display",h[1].link?"":"none")},i(h){u||(h&&Ie(()=>{u&&(c||(c=ge(e,ft,{duration:150},!0)),c.run(1))}),u=!0)},o(h){h&&(c||(c=ge(e,ft,{duration:150},!1)),c.run(0)),u=!1},d(h){h&&$(e),h&&c&&c.end(),f=!1,we(d)}}}function Zw(n){let e,t,i=n[1],s,r,o=n[0].charAt(0).toUpperCase()+n[0].slice(1)+"",l,a,c,u,f,d,h,p,_,g,x,v,b=Bf(n);function E(k){n[19](k)}function w(k){n[20](k)}let T={slotName:n[0]};return n[4]!==void 0&&(T.slotOpen=n[4]),n[6]!==void 0&&(T.optionsOpen=n[6]),h=new Du({props:T}),de.push(()=>Ke(h,"slotOpen",E)),de.push(()=>Ke(h,"optionsOpen",w)),h.$on("itemSelect",n[21]),{c(){e=C("div"),t=C("div"),b.c(),s=O(),r=C("button"),l=re(o),a=O(),c=C("iconify-icon"),u=O(),f=C("button"),f.innerHTML='<iconify-icon icon="maki:cross" class="svelte-1bgnkwv"></iconify-icon> <span class="tooltip" id="top">Clear selection</span>',d=O(),ae(h.$$.fragment),y(t,"class","eqSlotIcon ff-border svelte-1bgnkwv"),$e(c,"icon","iconamoon:arrow-down-2-fill"),$e(c,"class","svelte-1bgnkwv"),y(r,"class","ddButton svelte-1bgnkwv"),y(f,"class","clearButton svelte-1bgnkwv"),y(e,"class","eqSlotCont svelte-1bgnkwv"),ce(e,"slotOpen",n[4]),ce(e,"clearAllowed",n[5]&&n[7])},m(k,A){q(k,e,A),m(e,t),b.m(t,null),n[16](t),m(e,s),m(e,r),m(r,l),m(r,a),m(r,c),m(e,u),m(e,f),m(e,d),oe(h,e,null),n[22](e),g=!0,x||(v=[U(window,"mousedown",n[11]),U(window,"keydown",n[12]),U(r,"click",n[17]),U(f,"click",n[18]),U(e,"mouseenter",n[23]),U(e,"mouseleave",n[24])],x=!0)},p(k,[A]){A&2&&ve(i,i=k[1])?(Je(),G(b,1,1,ie),Ze(),b=Bf(k),b.c(),j(b,1),b.m(t,null)):b.p(k,A),(!g||A&1)&&o!==(o=k[0].charAt(0).toUpperCase()+k[0].slice(1)+"")&&Se(l,o);const N={};A&1&&(N.slotName=k[0]),!p&&A&16&&(p=!0,N.slotOpen=k[4],Ge(()=>p=!1)),!_&&A&64&&(_=!0,N.optionsOpen=k[6],Ge(()=>_=!1)),h.$set(N),(!g||A&16)&&ce(e,"slotOpen",k[4]),(!g||A&160)&&ce(e,"clearAllowed",k[5]&&k[7])},i(k){g||(j(b),j(h.$$.fragment,k),g=!0)},o(k){G(b),G(h.$$.fragment,k),g=!1},d(k){k&&$(e),b.d(k),n[16](null),le(h),n[22](null),x=!1,we(v)}}}function ek(n,e,t){let i,s,r;J(n,Cn,S=>t(10,i=S)),J(n,Bi,S=>t(8,s=S)),J(n,ne,S=>t(9,r=S));let{eqSlotName:o}=e,l,a,c=vl,u,f,d,h;const p=S=>{(!l.contains(S.target)&&!s||S.target==l||S.target==a)&&(t(4,u=!1),t(6,d=!1),S.target!=l&&S.target!=a&&t(5,f=!1))},_=S=>{S.key=="Tab"?setTimeout(()=>{t(5,f=l.contains(document.activeElement))}):S.key=="Escape"&&(t(4,u=!1),t(6,d=!1))},g=()=>{s||(t(4,u=!1),Y(ne,r.item.ongoing=!0,r),Y(ne,r.item.data={...c,slot:o,type:"eq"},r))},x=S=>{S.relatedTarget==null&&t(5,f=!0)},v=()=>{setTimeout(()=>ww(a))};function b(S){de[S?"unshift":"push"](()=>{a=S,t(3,a)})}const E=()=>{r.screenshot.ongoing||t(4,u=!u)},w=()=>{t(5,f=!1),l.classList.contains("clearAllowed")&&h.querySelector("button").click()};function T(S){u=S,t(4,u)}function k(S){d=S,t(6,d)}const A=S=>{setTimeout(()=>{t(7,h=S.detail.classList.contains("selectedItem")?S.detail:null),t(6,d=!1)})};function N(S){de[S?"unshift":"push"](()=>{l=S,t(2,l)})}const D=()=>t(5,f=!0),I=()=>{l.contains(document.activeElement)||t(5,f=!1)};return n.$$set=S=>{"eqSlotName"in S&&t(0,o=S.eqSlotName)},n.$$.update=()=>{n.$$.dirty&1027&&i[o]&&i[o].name!=c.name&&t(1,c=i[o])},[o,c,l,a,u,f,d,h,s,r,i,p,_,g,x,v,b,E,w,T,k,A,N,D,I]}class tk extends De{constructor(e){super(),Te(this,e,ek,Zw,ve,{eqSlotName:0})}}function Ff(n,e,t){const i=n.slice();return i[1]=e[t],i[2]=e,i[3]=t,i}function Of(n){let e,t,i;function s(o){n[0](o,n[1],n[2],n[3])}let r={};return n[1]!==void 0&&(r.eqSlotName=n[1]),e=new tk({props:r}),de.push(()=>Ke(e,"eqSlotName",s)),{c(){ae(e.$$.fragment)},m(o,l){oe(e,o,l),i=!0},p(o,l){n=o;const a={};!t&&l&0&&(t=!0,a.eqSlotName=n[1],Ge(()=>t=!1)),e.$set(a)},i(o){i||(j(e.$$.fragment,o),i=!0)},o(o){G(e.$$.fragment,o),i=!1},d(o){le(e,o)}}}function nk(n){let e,t,i=Ue(Array(...As)),s=[];for(let o=0;o<i.length;o+=1)s[o]=Of(Ff(n,i,o));const r=o=>G(s[o],1,1,()=>{s[o]=null});return{c(){e=C("div");for(let o=0;o<s.length;o+=1)s[o].c();y(e,"class","armorBox svelte-16092aw")},m(o,l){q(o,e,l);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);t=!0},p(o,[l]){if(l&0){i=Ue(Array(...As));let a;for(a=0;a<i.length;a+=1){const c=Ff(o,i,a);s[a]?(s[a].p(c,l),j(s[a],1)):(s[a]=Of(c),s[a].c(),j(s[a],1),s[a].m(e,null))}for(Je(),a=i.length;a<s.length;a+=1)r(a);Ze()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)j(s[l]);t=!0}},o(o){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)G(s[l]);t=!1},d(o){o&&$(e),Lt(s,o)}}}function ik(n,e,t){function i(s,r,o,l){o[l]=s}return[i]}class sk extends De{constructor(e){super(),Te(this,e,ik,nk,ve,{})}}function rk(n){let e,t=(n[3]?`${Math.floor(n[5]*.675+19.8)}% Reduction`:n[5])+"",i,s,r;return{c(){e=C("span"),i=re(t),y(e,"class","statValue svelte-78f402"),y(e,"tabindex","0"),ce(e,"hidden",n[2]),ce(e,"negative",n[5]<0),ce(e,"zero",n[5]==0),ce(e,"reduction",n[3])},m(o,l){q(o,e,l),m(e,i),s||(r=[U(e,"mouseenter",n[11]),U(e,"mouseleave",n[12]),U(e,"focusin",n[13]),U(e,"focusout",n[14])],s=!0)},p(o,l){l&40&&t!==(t=(o[3]?`${Math.floor(o[5]*.675+19.8)}% Reduction`:o[5])+"")&&Se(i,t),l&4&&ce(e,"hidden",o[2]),l&32&&ce(e,"negative",o[5]<0),l&32&&ce(e,"zero",o[5]==0),l&8&&ce(e,"reduction",o[3])},d(o){o&&$(e),s=!1,we(r)}}}function ok(n){let e,t=(n[0]!="endurance"?n[5]:n[5].toFixed(2))+"",i;return{c(){e=C("span"),i=re(t),y(e,"class","statValue svelte-78f402"),ce(e,"hidden",n[2]),ce(e,"negative",n[5]<0),ce(e,"zero",n[5]==0)},m(s,r){q(s,e,r),m(e,i)},p(s,r){r&33&&t!==(t=(s[0]!="endurance"?s[5]:s[5].toFixed(2))+"")&&Se(i,t),r&4&&ce(e,"hidden",s[2]),r&32&&ce(e,"negative",s[5]<0),r&32&&ce(e,"zero",s[5]==0)},d(s){s&&$(e)}}}function lk(n){let e;return{c(){e=C("iconify-icon"),$e(e,"icon","codicon:sparkle-filled"),$e(e,"class","svelte-78f402")},m(t,i){q(t,e,i)},p:ie,d(t){t&&$(e)}}}function ak(n){let e,t=`${n[1]} Bonus`,i;return{c(){e=C("span"),i=re(t),y(e,"class","statName svelte-78f402")},m(s,r){q(s,e,r),m(e,i)},p(s,r){r&2&&t!==(t=`${s[1]} Bonus`)&&Se(i,t)},d(s){s&&$(e)}}}function ck(n){let e,t,i,s,r,o,l;function a(p,_){return p[0]!="armor"?ok:rk}let c=a(n),u=c(n);function f(p,_){if(p[2])return ak;if(p[4])return lk}let d=f(n),h=d&&d(n);return{c(){e=C("div"),t=C("img"),s=O(),u.c(),r=O(),h&&h.c(),mt(t.src,i="stats/"+n[0]+".svg")||y(t,"src",i),y(t,"alt",n[1]),y(t,"class","svelte-78f402"),y(e,"id",n[0]),y(e,"class","svelte-78f402"),ce(e,"hidden",n[5]==0)},m(p,_){q(p,e,_),m(e,t),m(e,s),u.m(e,null),m(e,r),h&&h.m(e,null),o||(l=[U(t,"mouseenter",n[9]),U(t,"mouseleave",n[10])],o=!0)},p(p,[_]){_&1&&!mt(t.src,i="stats/"+p[0]+".svg")&&y(t,"src",i),_&2&&y(t,"alt",p[1]),c===(c=a(p))&&u?u.p(p,_):(u.d(1),u=c(p),u&&(u.c(),u.m(e,r))),d===(d=f(p))&&h?h.p(p,_):(h&&h.d(1),h=d&&d(p),h&&(h.c(),h.m(e,null))),_&1&&y(e,"id",p[0]),_&32&&ce(e,"hidden",p[5]==0)},i:ie,o:ie,d(p){p&&$(e),u.d(),h&&h.d(),o=!1,we(l)}}}function uk(n,e,t){let i,s,r,o;J(n,xn,v=>t(6,s=v)),J(n,cs,v=>t(7,r=v)),J(n,Qt,v=>t(8,o=v));let{codeName:l,formalName:a}=e,c,u,f=!1;const d=()=>t(2,c=!0),h=()=>t(2,c=!1),p=()=>t(3,u=!0),_=()=>t(3,u=!1),g=()=>t(3,u=!0),x=()=>t(3,u=!1);return n.$$set=v=>{"codeName"in v&&t(0,l=v.codeName),"formalName"in v&&t(1,a=v.formalName)},n.$$.update=()=>{if(n.$$.dirty&257&&t(5,i=o[l]),n.$$.dirty&193)for(let v in r)if(r[v]&&s.bonuses.find(b=>b.name==v).stats[l]!=0){t(4,f=!0);break}else t(4,f=!1)},[l,a,c,u,f,i,s,r,o,d,h,p,_,g,x]}class dk extends De{constructor(e){super(),Te(this,e,uk,ck,ve,{codeName:0,formalName:1})}}function Pf(n,e,t){const i=n.slice();return i[8]=e[t][0],i[9]=e[t][1],i[10]=e,i[11]=t,i}function Mf(n){let e,t,i,s;function r(a){n[4](a,n[8],n[10],n[11])}function o(a){n[5](a,n[9],n[10],n[11])}let l={};return n[8]!==void 0&&(l.codeName=n[8]),n[9]!==void 0&&(l.formalName=n[9]),e=new dk({props:l}),de.push(()=>Ke(e,"codeName",r)),de.push(()=>Ke(e,"formalName",o)),{c(){ae(e.$$.fragment)},m(a,c){oe(e,a,c),s=!0},p(a,c){n=a;const u={};!t&&c&0&&(t=!0,u.codeName=n[8],Ge(()=>t=!1)),!i&&c&0&&(i=!0,u.formalName=n[9],Ge(()=>i=!1)),e.$set(u)},i(a){s||(j(e.$$.fragment,a),s=!0)},o(a){G(e.$$.fragment,a),s=!1},d(a){le(e,a)}}}function Lf(n){let e,t,i,s,r=n[2]?"Copied!":`Copy ${n[1]?"all":""} as text`,o,l,a,c,u;return{c(){e=C("button"),t=C("iconify-icon"),i=O(),s=C("span"),o=re(r),$e(t,"icon","ic:round-content-copy"),$e(t,"class","svelte-cimkzy"),y(s,"class","tooltip"),y(s,"id","top"),y(e,"class","copyStatsButton svelte-cimkzy")},m(f,d){q(f,e,d),m(e,t),m(e,i),m(e,s),m(s,o),a=!0,c||(u=U(e,"click",n[6]),c=!0)},p(f,d){(!a||d&6)&&r!==(r=f[2]?"Copied!":`Copy ${f[1]?"all":""} as text`)&&Se(o,r)},i(f){a||(f&&Ie(()=>{a&&(l||(l=ge(e,ft,{duration:100},!0)),l.run(1))}),a=!0)},o(f){f&&(l||(l=ge(e,ft,{duration:100},!1)),l.run(0)),a=!1},d(f){f&&$(e),f&&l&&l.end(),c=!1,u()}}}function fk(n){let e;return{c(){e=C("span"),e.textContent="Show all stats",y(e,"slot","tooltip"),y(e,"class","tooltip"),y(e,"id","top")},m(t,i){q(t,e,i)},p:ie,d(t){t&&$(e)}}}function hk(n){let e,t,i,s,r,o=Ue(Object.entries(En)),l=[];for(let u=0;u<o.length;u+=1)l[u]=Mf(Pf(n,o,u));const a=u=>G(l[u],1,1,()=>{l[u]=null});let c=n[3]&&Lf(n);return s=new qt({props:{text:"",$$slots:{tooltip:[fk]},$$scope:{ctx:n}}}),s.$on("toggle",n[7]),{c(){e=C("div");for(let u=0;u<l.length;u+=1)l[u].c();t=O(),c&&c.c(),i=O(),ae(s.$$.fragment),y(e,"class","statBox svelte-cimkzy"),ce(e,"showAll",n[1])},m(u,f){q(u,e,f);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null);m(e,t),c&&c.m(e,null),m(e,i),oe(s,e,null),r=!0},p(u,[f]){if(f&0){o=Ue(Object.entries(En));let h;for(h=0;h<o.length;h+=1){const p=Pf(u,o,h);l[h]?(l[h].p(p,f),j(l[h],1)):(l[h]=Mf(p),l[h].c(),j(l[h],1),l[h].m(e,t))}for(Je(),h=o.length;h<l.length;h+=1)a(h);Ze()}u[3]?c?(c.p(u,f),f&8&&j(c,1)):(c=Lf(u),c.c(),j(c,1),c.m(e,i)):c&&(Je(),G(c,1,1,()=>{c=null}),Ze());const d={};f&4096&&(d.$$scope={dirty:f,ctx:u}),s.$set(d),(!r||f&2)&&ce(e,"showAll",u[1])},i(u){if(!r){for(let f=0;f<o.length;f+=1)j(l[f]);j(c),j(s.$$.fragment,u),r=!0}},o(u){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)G(l[f]);G(c),G(s.$$.fragment,u),r=!1},d(u){u&&$(e),Lt(l,u),c&&c.d(),le(s)}}}function pk(n,e,t){let i;J(n,Qt,f=>t(0,i=f));let s=!1,r=!1,o=!1;function l(f,d,h,p){h[p][0]=f}function a(f,d,h,p){h[p][1]=f}const c=f=>{if(Ln(f),r)return;let d="";for(let[h,p]of Object.entries(En)){let _=h=="armor"?"":`
`,g=i[h];h=="armor"?g+=` (${Math.floor(g*.675+19.8)}% Reduction)`:h=="endurance"?g=g.toFixed(2)+"%":h=="ammoReturn"&&(g+="%"),(s||!s&&i[h])&&(d+=`${_}${p}: ${g}`)}navigator.clipboard.writeText(d),t(2,r=!0),setTimeout(()=>t(2,r=!1),1e3)},u=f=>t(1,s=f.detail);return n.$$.update=()=>{if(n.$$.dirty&1&&i){t(3,o=!1);for(let f in i)if(i[f]){t(3,o=!0);break}}},[i,s,r,o,l,a,c,u]}class _k extends De{constructor(e){super(),Te(this,e,pk,hk,ve,{})}}function mk(n){let e,t,i,s,r,o,l,a,c,u;return{c(){e=C("div"),t=C("button"),t.textContent="-",i=O(),s=C("input"),r=O(),o=C("b"),o.textContent="%",l=O(),a=C("button"),a.textContent="+",y(t,"id","decrease"),y(t,"class","svelte-f5qib2"),y(s,"type","number"),y(s,"placeholder","0"),y(s,"class","svelte-f5qib2"),y(o,"class","svelte-f5qib2"),y(a,"id","increase"),y(a,"class","svelte-f5qib2"),y(e,"class","svelte-f5qib2"),ce(e,"non-percent",!n[1])},m(f,d){q(f,e,d),m(e,t),m(e,i),m(e,s),In(s,n[0]),m(e,r),m(e,o),m(e,l),m(e,a),c||(u=[U(t,"click",n[4]),U(s,"input",n[5]),U(s,"input",n[2]),U(a,"click",n[6])],c=!0)},p(f,[d]){d&1&&kp(s.value)!==f[0]&&In(s,f[0])},i:ie,o:ie,d(f){f&&$(e),c=!1,we(u)}}}function gk(n,e,t){let{weaponName:i,value:s}=e,r=i!="Nature's Wrath Spellbook",o;r?(s=100,o=100):(s=4,o=4);function l(){s<0?t(0,s=0):s>o&&t(0,s=o),s%1!=0&&t(0,s=Math.floor(s))}const a=()=>{t(0,s--,s),l()};function c(){s=kp(this.value),t(0,s)}const u=()=>{t(0,s++,s),l()};return n.$$set=f=>{"weaponName"in f&&t(3,i=f.weaponName),"value"in f&&t(0,s=f.value)},[s,r,l,i,a,c,u]}class vk extends De{constructor(e){super(),Te(this,e,gk,mk,ve,{weaponName:3,value:0})}}function $f(n,e,t){const i=n.slice();i[53]=e[t];const s=i[53].name.includes("Fantastic Beamstorm")?"~":"";i[23]=s;const r=i[24].includes(i[53].name);return i[54]=r,i}function bk(n){let e,t,i=n[2].description+"",s,r;return{c(){e=C("span"),t=re('"'),s=re(i),r=re('"'),y(e,"id","toolDesc"),y(e,"class","svelte-12jhw87")},m(o,l){q(o,e,l),m(e,t),m(e,s),m(e,r)},p(o,l){l[0]&4&&i!==(i=o[2].description+"")&&Se(s,i)},d(o){o&&$(e)}}}function yk(n){let e,t,i,s=`${n[5]?"Type":n[3].name}:`,r,o,l=n[20],a,c,u,f,d,h=n[5]?"Return":"Expand",p,_,g,x,v=Uf(n),b=n[4]&&Wf(n);return{c(){e=C("button"),t=C("div"),i=C("span"),r=re(s),o=O(),v.c(),c=O(),b&&b.c(),u=O(),f=C("span"),d=re("("),p=re(h),_=re(")"),y(i,"class","svelte-12jhw87"),ot(i,"font-size",Object.keys(n[21]).includes(n[3].name)?`calc(1rem * ${n[21][n[3].name]})`:""),y(t,"id",a=n[5]?"":"basic"),y(t,"class","svelte-12jhw87"),y(f,"class","tooltip svelte-12jhw87"),y(f,"id","top"),y(e,"class","gearPreview svelte-12jhw87"),ot(e,"line-height",`${n[10]/6.5}px`)},m(E,w){q(E,e,w),m(e,t),m(t,i),m(i,r),m(t,o),v.m(t,null),m(e,c),b&&b.m(e,null),m(e,u),m(e,f),m(f,d),m(f,p),m(f,_),n[36](e),g||(x=U(e,"click",n[37]),g=!0)},p(E,w){w[0]&40&&s!==(s=`${E[5]?"Type":E[3].name}:`)&&Se(r,s),w[0]&2097160&&ot(i,"font-size",Object.keys(E[21]).includes(E[3].name)?`calc(1rem * ${E[21][E[3].name]})`:""),w[0]&1048576&&ve(l,l=E[20])?(v.d(1),v=Uf(E),v.c(),v.m(t,null)):v.p(E,w),w[0]&32&&a!==(a=E[5]?"":"basic")&&y(t,"id",a),E[4]?b?b.p(E,w):(b=Wf(E),b.c(),b.m(e,u)):b&&(b.d(1),b=null),w[0]&32&&h!==(h=E[5]?"Return":"Expand")&&Se(p,h),w[0]&1024&&ot(e,"line-height",`${E[10]/6.5}px`)},d(E){E&&$(e),v.d(E),b&&b.d(),n[36](null),g=!1,x()}}}function Hf(n){let e;return{c(){e=C("iconify-icon"),$e(e,"icon","codicon:sparkle-filled"),$e(e,"class","svelte-12jhw87")},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function Uf(n){let e,t,i=(n[5]?n[2].info.type.replace("/","<b>,</b><br/>"):n[26](n[3]))+"",s,r=!n[5]&&n[6].basic&&Hf();return{c(){e=C("span"),t=new Sp(!1),s=O(),r&&r.c(),t.a=s,y(e,"class","svelte-12jhw87")},m(o,l){q(o,e,l),t.m(i,e),m(e,s),r&&r.m(e,null)},p(o,l){l[0]&44&&i!==(i=(o[5]?o[2].info.type.replace("/","<b>,</b><br/>"):o[26](o[3]))+"")&&t.p(i),!o[5]&&o[6].basic?r||(r=Hf(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&$(e),r&&r.d()}}}function Wf(n){let e,t,i,s=`${n[5]?"Special":n[4].name.split(" (")[0]}:`,r,o,l,a=n[20],c,u=!n[5]&&qf(n),f=jf(n);return{c(){e=C("div"),t=C("span"),i=C("span"),r=re(s),o=O(),u&&u.c(),l=O(),f.c(),y(i,"class","svelte-12jhw87"),y(t,"class","svelte-12jhw87"),ot(t,"font-size",Object.keys(n[21]).includes(n[4].name)?`calc(1rem * ${n[21][n[4].name]})`:""),y(e,"id",c=n[5]?"":"special"),y(e,"class","svelte-12jhw87")},m(d,h){q(d,e,h),m(e,t),m(t,i),m(i,r),m(t,o),u&&u.m(t,null),m(e,l),f.m(e,null)},p(d,h){h[0]&48&&s!==(s=`${d[5]?"Special":d[4].name.split(" (")[0]}:`)&&Se(r,s),d[5]?u&&(u.d(1),u=null):u?u.p(d,h):(u=qf(d),u.c(),u.m(t,null)),h[0]&2097168&&ot(t,"font-size",Object.keys(d[21]).includes(d[4].name)?`calc(1rem * ${d[21][d[4].name]})`:""),h[0]&1048576&&ve(a,a=d[20])?(f.d(1),f=jf(d),f.c(),f.m(e,null)):f.p(d,h),h[0]&32&&c!==(c=d[5]?"":"special")&&y(e,"id",c)},d(d){d&&$(e),u&&u.d(),f.d(d)}}}function qf(n){let e,t,i=n[4].cd+"",s,r;return{c(){e=C("span"),t=re("("),s=re(i),r=re("s cd.)"),y(e,"id","cd"),y(e,"class","svelte-12jhw87")},m(o,l){q(o,e,l),m(e,t),m(e,s),m(e,r)},p(o,l){l[0]&16&&i!==(i=o[4].cd+"")&&Se(s,i)},d(o){o&&$(e)}}}function zf(n){let e,t;return{c(){e=C("span"),t=re(n[23]),y(e,"id","prefix"),y(e,"class","svelte-12jhw87")},m(i,s){q(i,e,s),m(e,t)},p(i,s){s[0]&8388608&&Se(t,i[23])},d(i){i&&$(e)}}}function Vf(n){let e;return{c(){e=C("iconify-icon"),$e(e,"icon","codicon:sparkle-filled"),$e(e,"class","svelte-12jhw87")},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function jf(n){let e,t,i=(n[5]?n[2].info.special:n[26](n[4]))+"",s,r,o=n[23]&&!n[5]&&zf(n),l=!n[5]&&n[6].special&&Vf();return{c(){e=C("span"),o&&o.c(),t=O(),s=re(i),r=O(),l&&l.c(),y(e,"class","svelte-12jhw87")},m(a,c){q(a,e,c),o&&o.m(e,null),m(e,t),m(e,s),m(e,r),l&&l.m(e,null)},p(a,c){a[23]&&!a[5]?o?o.p(a,c):(o=zf(a),o.c(),o.m(e,t)):o&&(o.d(1),o=null),c[0]&52&&i!==(i=(a[5]?a[2].info.special:a[26](a[4]))+"")&&Se(s,i),!a[5]&&a[6].special?l||(l=Vf(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(a){a&&$(e),o&&o.d(),l&&l.d()}}}function Gf(n){let e,t,i,s,r,o,l=n[2].name+"",a,c,u,f,d,h;return{c(){e=C("button"),t=C("img"),r=O(),o=C("span"),a=re(l),mt(t.src,i=n[2].image)||y(t,"src",i),y(t,"alt",s=n[2].name),y(t,"draggable","false"),y(t,"class","svelte-12jhw87"),y(o,"class","tooltip svelte-12jhw87"),y(o,"id",c=n[19].screenshot.ongoing?"right":"top"),y(e,"class","svelte-12jhw87"),ot(e,"display",n[2].link?"":"none"),ot(e,"border-radius",n[2].tool?"calc(1rem)":"")},m(p,_){q(p,e,_),m(e,t),m(e,r),m(e,o),m(o,a),f=!0,d||(h=U(e,"click",n[38]),d=!0)},p(p,_){(!f||_[0]&4&&!mt(t.src,i=p[2].image))&&y(t,"src",i),(!f||_[0]&4&&s!==(s=p[2].name))&&y(t,"alt",s),(!f||_[0]&4)&&l!==(l=p[2].name+"")&&Se(a,l),(!f||_[0]&524288&&c!==(c=p[19].screenshot.ongoing?"right":"top"))&&y(o,"id",c),_[0]&4&&ot(e,"display",p[2].link?"":"none"),_[0]&4&&ot(e,"border-radius",p[2].tool?"calc(1rem)":"")},i(p){f||(p&&Ie(()=>{f&&(u||(u=ge(e,ft,{duration:150},!0)),u.run(1))}),f=!0)},o(p){p&&(u||(u=ge(e,ft,{duration:150},!1)),u.run(0)),f=!1},d(p){p&&$(e),p&&u&&u.end(),d=!1,h()}}}function Kf(n){let e,t,i,s,r,o,l,a,c,u;i=new qt({props:{text:"Toggle base values",checked:n[16]}}),i.$on("toggle",n[47]),r=new qt({props:{text:"Eyeball of Reckoning buff",checked:n[17]}}),r.$on("toggle",n[48]);let f=Ue(n[2].moves),d=[];for(let p=0;p<f.length;p+=1)d[p]=Zf($f(n,f,p));const h=p=>G(d[p],1,1,()=>{d[p]=null});return{c(){e=C("div"),t=C("div"),ae(i.$$.fragment),s=O(),ae(r.$$.fragment),o=O(),l=C("div");for(let p=0;p<d.length;p+=1)d[p].c();y(t,"class","weaponToggles svelte-12jhw87"),y(l,"class","weaponMoves svelte-12jhw87"),y(e,"class","fullWeaponView svelte-12jhw87")},m(p,_){q(p,e,_),m(e,t),oe(i,t,null),m(t,s),oe(r,t,null),m(e,o),m(e,l);for(let g=0;g<d.length;g+=1)d[g]&&d[g].m(l,null);u=!0},p(p,_){const g={};_[0]&65536&&(g.checked=p[16]),i.$set(g);const x={};if(_[0]&131072&&(x.checked=p[17]),r.$set(x),_[0]&219611268){f=Ue(p[2].moves);let v;for(v=0;v<f.length;v+=1){const b=$f(p,f,v);d[v]?(d[v].p(b,_),j(d[v],1)):(d[v]=Zf(b),d[v].c(),j(d[v],1),d[v].m(l,null))}for(Je(),v=f.length;v<d.length;v+=1)h(v);Ze()}},i(p){if(!u){j(i.$$.fragment,p),j(r.$$.fragment,p);for(let _=0;_<f.length;_+=1)j(d[_]);p&&Ie(()=>{u&&(c&&c.end(1),a=Fc(e,ft,{duration:150,delay:300}),a.start())}),u=!0}},o(p){G(i.$$.fragment,p),G(r.$$.fragment,p),d=d.filter(Boolean);for(let _=0;_<d.length;_+=1)G(d[_]);a&&a.invalidate(),p&&(c=Oc(e,ft,{duration:150})),u=!1},d(p){p&&$(e),le(i),le(r),Lt(d,p),p&&c&&c.end()}}}function Yf(n){let e,t,i,s;function r(a){n[49](a)}function o(a){n[50](a)}let l={};return n[7]!==void 0&&(l.value=n[7]),n[2].name!==void 0&&(l.weaponName=n[2].name),e=new vk({props:l}),de.push(()=>Ke(e,"value",r)),de.push(()=>Ke(e,"weaponName",o)),{c(){ae(e.$$.fragment)},m(a,c){oe(e,a,c),s=!0},p(a,c){const u={};!t&&c[0]&128&&(t=!0,u.value=a[7],Ge(()=>t=!1)),!i&&c[0]&4&&(i=!0,u.weaponName=a[2].name,Ge(()=>i=!1)),e.$set(u)},i(a){s||(j(e.$$.fragment,a),s=!0)},o(a){G(e.$$.fragment,a),s=!1},d(a){le(e,a)}}}function Qf(n){let e,t,i=n[53].cd+"",s,r;return{c(){e=C("span"),t=re("("),s=re(i),r=re("s cd.)"),y(e,"id","cd"),y(e,"class","svelte-12jhw87")},m(o,l){q(o,e,l),m(e,t),m(e,s),m(e,r)},p(o,l){l[0]&4&&i!==(i=o[53].cd+"")&&Se(s,i)},d(o){o&&$(e)}}}function Xf(n){let e;return{c(){e=C("iconify-icon"),$e(e,"icon","codicon:sparkle-filled"),$e(e,"class","svelte-12jhw87")},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function Jf(n){let e,t=n[23]+(n[16]&&!n[54]?n[53].base:n[54]?n[27](n[53]):n[26](n[53]))+"",i,s,r=n[18][n[53].name]&&!n[16]&&Xf();return{c(){e=C("span"),i=re(t),s=O(),r&&r.c(),y(e,"class","svelte-12jhw87")},m(o,l){q(o,e,l),m(e,i),m(e,s),r&&r.m(e,null)},p(o,l){l[0]&65540&&t!==(t=o[23]+(o[16]&&!o[54]?o[53].base:o[54]?o[27](o[53]):o[26](o[53]))+"")&&Se(i,t),o[18][o[53].name]&&!o[16]?r||(r=Xf(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&$(e),r&&r.d()}}}function Zf(n){let e,t,i,s,r,o=(n[54]&&n[2].name=="Nature's Wrath Spellbook"?n[53].name.replace("Charged","Charge(s)"):n[53].name)+":",l,a,c,u=n[54]?[n[20],n[7],n[17]]:[n[20],n[17]],f,d,h=n[54]&&Yf(n),p=n[53].special&&Qf(n),_=Jf(n);return{c(){e=C("div"),t=C("div"),i=C("span"),s=C("span"),h&&h.c(),r=O(),l=re(o),a=O(),p&&p.c(),c=O(),_.c(),f=O(),y(s,"class","flex fd-col svelte-12jhw87"),y(i,"class","flex fd-col ai-center svelte-12jhw87"),y(t,"class","ff-border svelte-12jhw87"),y(e,"class","svelte-12jhw87")},m(g,x){q(g,e,x),m(e,t),m(t,i),m(i,s),h&&h.m(s,null),m(s,r),m(s,l),m(i,a),p&&p.m(i,null),m(t,c),_.m(t,null),m(e,f),d=!0},p(g,x){g[54]?h?(h.p(g,x),x[0]&4&&j(h,1)):(h=Yf(g),h.c(),j(h,1),h.m(s,r)):h&&(Je(),G(h,1,1,()=>{h=null}),Ze()),(!d||x[0]&4)&&o!==(o=(g[54]&&g[2].name=="Nature's Wrath Spellbook"?g[53].name.replace("Charged","Charge(s)"):g[53].name)+":")&&Se(l,o),g[53].special?p?p.p(g,x):(p=Qf(g),p.c(),p.m(i,null)):p&&(p.d(1),p=null),x[0]&1179780&&ve(u,u=g[54]?[g[20],g[7],g[17]]:[g[20],g[17]])?(_.d(1),_=Jf(g),_.c(),_.m(t,null)):_.p(g,x)},i(g){d||(j(h),d=!0)},o(g){G(h),d=!1},d(g){g&&$(e),h&&h.d(),p&&p.d(),_.d(g)}}}function xk(n){let e,t,i,s,r="Gear"+(n[19].screenshot.ongoing?":":""),o,l,a,c,u,f=n[2],d,h,p,_,g,x,v,b,E,w,T,k;function A(M,K){if(M[2].name&&!M[2].tool)return yk;if(M[2].tool)return bk}let N=A(n),D=N&&N(n),I=Gf(n);function S(M){n[42](M)}function B(M){n[43](M)}function H(M){n[44](M)}let W={slotName:n[0],index:n[1]};n[14]!==void 0&&(W.slotOpen=n[14]),n[5]!==void 0&&(W.weaponExpand=n[5]),n[15]!==void 0&&(W.optionsOpen=n[15]),_=new Du({props:W}),de.push(()=>Ke(_,"slotOpen",S)),de.push(()=>Ke(_,"weaponExpand",B)),de.push(()=>Ke(_,"optionsOpen",H)),_.$on("itemSelect",n[45]),_.$on("toolSelect",n[28]);let F=n[5]&&Kf(n);return{c(){e=C("div"),t=C("button"),i=C("iconify-icon"),s=O(),o=re(r),l=O(),a=C("div"),D&&D.c(),c=O(),u=C("div"),I.c(),p=O(),ae(_.$$.fragment),b=O(),F&&F.c(),E=Dt(),$e(i,"icon","iconamoon:arrow-down-2-fill"),$e(i,"class","svelte-12jhw87"),y(t,"class","ddButton svelte-12jhw87"),y(u,"class","gearSlotIcon svelte-12jhw87"),Ie(()=>n[39].call(u)),ot(u,"min-width",`${n[11]}px`),y(a,"class","gearInfoCont ff-border svelte-12jhw87"),Ie(()=>n[41].call(a)),ot(a,"justify-content",n[2].name?"":"flex-end"),y(e,"class","gearSlot svelte-12jhw87"),ce(e,"slotOpen",n[14]),ce(e,"weapon-expand",n[5])},m(M,K){q(M,e,K),m(e,t),m(t,i),m(t,s),m(t,o),n[34](t),m(e,l),m(e,a),D&&D.m(a,null),m(a,c),m(a,u),I.m(u,null),d=fi(u,n[39].bind(u)),n[40](a),h=fi(a,n[41].bind(a)),m(e,p),oe(_,e,null),n[46](e),q(M,b,K),F&&F.m(M,K),q(M,E,K),w=!0,T||(k=[U(window,"mousedown",n[32]),U(window,"keydown",n[33]),U(t,"click",n[35])],T=!0)},p(M,K){(!w||K[0]&524288)&&r!==(r="Gear"+(M[19].screenshot.ongoing?":":""))&&Se(o,r),N===(N=A(M))&&D?D.p(M,K):(D&&D.d(1),D=N&&N(M),D&&(D.c(),D.m(a,c))),K[0]&4&&ve(f,f=M[2])?(Je(),G(I,1,1,ie),Ze(),I=Gf(M),I.c(),j(I,1),I.m(u,null)):I.p(M,K),K[0]&2048&&ot(u,"min-width",`${M[11]}px`),K[0]&4&&ot(a,"justify-content",M[2].name?"":"flex-end");const te={};K[0]&1&&(te.slotName=M[0]),K[0]&2&&(te.index=M[1]),!g&&K[0]&16384&&(g=!0,te.slotOpen=M[14],Ge(()=>g=!1)),!x&&K[0]&32&&(x=!0,te.weaponExpand=M[5],Ge(()=>x=!1)),!v&&K[0]&32768&&(v=!0,te.optionsOpen=M[15],Ge(()=>v=!1)),_.$set(te),(!w||K[0]&16384)&&ce(e,"slotOpen",M[14]),(!w||K[0]&32)&&ce(e,"weapon-expand",M[5]),M[5]?F?(F.p(M,K),K[0]&32&&j(F,1)):(F=Kf(M),F.c(),j(F,1),F.m(E.parentNode,E)):F&&(Je(),G(F,1,1,()=>{F=null}),Ze())},i(M){w||(j(I),j(_.$$.fragment,M),j(F),w=!0)},o(M){G(I),G(_.$$.fragment,M),G(F),w=!1},d(M){M&&($(e),$(b),$(E)),n[34](null),D&&D.d(),I.d(M),d(),n[40](null),h(),le(_),n[46](null),F&&F.d(M),T=!1,we(k)}}}function Ck(n,e,t){let i,s,r,o,l,a,c;J(n,cs,Z=>t(30,i=Z)),J(n,Bn,Z=>t(31,s=Z)),J(n,xn,Z=>t(51,r=Z)),J(n,ne,Z=>t(19,o=Z)),J(n,Qt,Z=>t(20,l=Z)),J(n,Al,Z=>t(21,a=Z)),J(n,Bi,Z=>t(22,c=Z));let{gearBox:u,slotName:f,index:d}=e,h,p,_,g,x,v,b,E=bl,w,T,k,A,N,D=!1,I=!1,S="",B=["Charged Basic Attack","Charged Solar Beam"],H={basic:!1,special:!1},W={};function F(){if(b)for(let Z of b.querySelectorAll(".gearPreview > div")){if(Object.keys(a).includes(Z.id=="basic"?w.name:T?T.name:null))return;let Ce=Ew(Z,c);Ce&&(Z.id=="basic"?Y(Al,a[w.name]=Ce,a):Y(Al,a[T.name]=Ce,a))}}function M(Z){let Ce;if(Z.name=="Void Needle")Ce=Z.base+l[Z.type]-l.armor*5.625;else if(E.name=="Pureblood Dagger"){let Me,tt={magicDmg:l.magicDmg,meleeDmg:l.meleeDmg,rangedDmg:l.rangedDmg},_t=Object.keys(tt).reduce((Xe,Et)=>tt[Xe]>tt[Et]?Xe:Et),Ot=0;for(let Xe in tt)Xe!=_t&&(Ot+=tt[Xe]);Me=l[_t]*2-Ot,Ce=Z.base+(Z.name.includes("HP")?Me/2:Me)}else if(Z.type.includes("/")){let Me=Z.type.split("/"),tt=0;for(let _t of Me)tt+=l[_t]*Z[`${_t}Mult`];Ce=Z.base+tt}else Ce=Z.base+l[Z.type]*Z.mult;return I&&(!Z.name.includes("HP")||Z.name.includes("HP")&&E.name=="Pureblood Dagger")&&(Ce+=Ce*.08775),N?Math.floor(Ce*10)/10:Math.floor(Ce)}function K(Z){let Ce,Me=D?0:l[Z.type];return E.name=="Celestial Powers Spellbook"?Ce=(80+Me*1.1)*(.8+2.2*h/100):E.name=="Staff of Dreams"?Ce=160+160*h/100+Me*(.4+1.3*h/100):E.name=="Nature's Wrath Spellbook"&&(Ce=260+400*h/4+Me*(1+1.5*h/4)),I&&(Ce+=Ce*.08775),Math.floor(Ce*10)/10}function te(){o.screenshot.ongoing||(t(16,D=!1),t(17,I=!1),N?(t(5,N=!1),u.classList.remove("weapon-expand"),setTimeout(F)):(u.classList.add("weapon-expand"),t(5,N=!0)))}function ee(Z,Ce){e:for(let Me in i){let tt=r.bonuses.find(Ot=>Ot.name==Me).stats,_t=Z?Z.type:null;for(let Ot in En){if(_t===null)break e;if(E.name=="Void Spike Ultradagger"&&Ce=="special"||Z.name=="Void Needle"?_t="armor/meleeDmg":E.name=="Pureblood Dagger"?_t=Me=="Fish of Rage"?"":"magicDmg/meleeDmg/rangedDmg":E.name=="Gnome Rocket Launcher"&&(_t=""),i[Me]&&tt[Ot]!=0&&_t.includes(Ot)){t(18,W[Z.name]=!0,W),Ce&&t(6,H[Ce]=!0,H);break e}else t(18,W[Z.name]=!1,W),Ce&&t(6,H[Ce]=!1,H)}}}const L=Z=>{(!p.contains(Z.target)&&!c||p.contains(Z.target)&&_.contains(Z.target))&&(t(14,k=!1),t(15,A=!1))},z=Z=>{Z.key=="Escape"&&(t(14,k=!1),t(15,A=!1))};function V(Z){de[Z?"unshift":"push"](()=>{v=Z,t(12,v)})}const R=()=>{o.screenshot.ongoing||t(14,k=!k)};function Q(Z){de[Z?"unshift":"push"](()=>{b=Z,t(13,b)})}const pe=Z=>{Ln(Z),te()},me=()=>{c||(Y(ne,o.item.ongoing=!0,o),Y(ne,o.item.data={...E,type:"gear"},o))};function fe(){x=this.offsetHeight,t(11,x)}function Be(Z){de[Z?"unshift":"push"](()=>{_=Z,t(9,_)})}function Ne(){g=this.offsetHeight,t(10,g)}function Fe(Z){k=Z,t(14,k)}function Ae(Z){N=Z,t(5,N)}function _e(Z){A=Z,t(15,A)}const be=()=>{setTimeout(()=>{F(),(!E.name||E.tool)&&N&&te(),t(15,A=!1)})};function rt(Z){de[Z?"unshift":"push"](()=>{p=Z,t(8,p)})}const St=Z=>{t(16,D=Z.detail),Z.detail&&t(17,I=!1)},Ft=Z=>{t(17,I=Z.detail),Z.detail&&t(16,D=!1)};function he(Z){h=Z,t(7,h)}function Kt(Z){n.$$.not_equal(E.name,Z)&&(E.name=Z,t(2,E),t(31,s),t(1,d),t(4,T))}return n.$$set=Z=>{"gearBox"in Z&&t(29,u=Z.gearBox),"slotName"in Z&&t(0,f=Z.slotName),"index"in Z&&t(1,d=Z.index)},n.$$.update=()=>{if(n.$$.dirty[0]&22|n.$$.dirty[1]&1&&s[d]&&s[d].name!=E.name&&(t(2,E=s[d]),!E.tool&&E.name)){t(3,w=E.moves.filter(Z=>Z.basic)[0]),t(4,T=E.moves.filter(Z=>Z.special)[0]),t(18,W={});for(let Z of E.moves)t(18,W[Z.name]=!1,W),ee(Z);T&&T.name.includes("Fantastic Beamstorm")?t(23,S="~"):t(23,S="")}if(n.$$.dirty[0]&1073741948&&(i||N)&&!E.tool&&E.name){for(let Z in H)ee(Z=="basic"?w:T||null,Z);for(let Z of E.moves)ee(Z)}},[f,d,E,w,T,N,H,h,p,_,g,x,v,b,k,A,D,I,W,o,l,a,c,S,B,F,M,K,te,u,i,s,L,z,V,R,Q,pe,me,fe,Be,Ne,Fe,Ae,_e,be,rt,St,Ft,he,Kt]}class Ek extends De{constructor(e){super(),Te(this,e,Ck,xk,ve,{gearBox:29,slotName:0,index:1},null,[-1,-1])}}function eh(n,e,t){const i=n.slice();return i[3]=e[t],i}function th(n){let e,t,i;function s(o){n[1](o)}let r={slotName:"gear",index:n[3]};return n[0]!==void 0&&(r.gearBox=n[0]),e=new Ek({props:r}),de.push(()=>Ke(e,"gearBox",s)),{c(){ae(e.$$.fragment)},m(o,l){oe(e,o,l),i=!0},p(o,l){const a={};!t&&l&1&&(t=!0,a.gearBox=o[0],Ge(()=>t=!1)),e.$set(a)},i(o){i||(j(e.$$.fragment,o),i=!0)},o(o){G(e.$$.fragment,o),i=!1},d(o){le(e,o)}}}function wk(n){let e,t,i=Ue(Hi),s=[];for(let o=0;o<i.length;o+=1)s[o]=th(eh(n,i,o));const r=o=>G(s[o],1,1,()=>{s[o]=null});return{c(){e=C("div");for(let o=0;o<s.length;o+=1)s[o].c();y(e,"class","gearBox svelte-oyqozi")},m(o,l){q(o,e,l);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);n[2](e),t=!0},p(o,[l]){if(l&1){i=Ue(Hi);let a;for(a=0;a<i.length;a+=1){const c=eh(o,i,a);s[a]?(s[a].p(c,l),j(s[a],1)):(s[a]=th(c),s[a].c(),j(s[a],1),s[a].m(e,null))}for(Je(),a=i.length;a<s.length;a+=1)r(a);Ze()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)j(s[l]);t=!0}},o(o){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)G(s[l]);t=!1},d(o){o&&$(e),Lt(s,o),n[2](null)}}}function kk(n,e,t){let i;function s(o){i=o,t(0,i)}function r(o){de[o?"unshift":"push"](()=>{i=o,t(0,i)})}return[i,s,r]}class Ik extends De{constructor(e){super(),Te(this,e,kk,wk,ve,{})}}function Sk(n){let e,t,i,s,r,o,l,a;return{c(){e=C("div"),t=C("div"),i=C("button"),i.textContent="Clear armor",s=O(),r=C("div"),o=C("button"),o.textContent="Clear gear",y(i,"class","svelte-5d0uid"),y(t,"class","buttonCont svelte-5d0uid"),y(o,"class","svelte-5d0uid"),y(r,"class","buttonCont svelte-5d0uid"),y(e,"class","mainFeatures svelte-5d0uid"),y(e,"id","box")},m(c,u){q(c,e,u),m(e,t),m(t,i),m(e,s),m(e,r),m(r,o),l||(a=[U(i,"click",n[3]),U(o,"click",n[4])],l=!0)},p:ie,i:ie,o:ie,d(c){c&&$(e),l=!1,we(a)}}}function Ak(n,e,t){let i,s,r,o,l;J(n,Bn,d=>t(5,i=d)),J(n,ys,d=>t(6,s=d)),J(n,Cn,d=>t(7,r=d)),J(n,bs,d=>t(8,o=d)),J(n,Bi,d=>t(0,l=d));function a(){for(let d in r)r[d].name&&o[d][r[d].name].querySelector("button").click()}function c(){for(let d in i)i[d].name&&s[d][i[d].name].querySelector("button").click()}return[l,a,c,d=>{d.target.blur(),l||a()},d=>{d.target.blur(),l||c()}]}class Tk extends De{constructor(e){super(),Te(this,e,Ak,Sk,ve,{})}}function nh(n){let e,t,i=`${n[1]}rem`,s,r=`${n[1]/4}rem`,o=n[0]&&ih(n);return{c(){e=C("span"),t=C("iconify-icon"),s=O(),o&&o.c(),$e(t,"icon","material-symbols:lock"),ot(t,"font-size",i),y(e,"class","lockedNotice flex fd-col jc-center ai-center rg-1 svelte-13zu3gt"),ot(e,"padding",r)},m(l,a){q(l,e,a),m(e,t),m(e,s),o&&o.m(e,null)},p(l,a){a&2&&i!==(i=`${l[1]}rem`)&&ot(t,"font-size",i),l[0]?o?o.p(l,a):(o=ih(l),o.c(),o.m(e,null)):o&&(o.d(1),o=null),a&2&&r!==(r=`${l[1]/4}rem`)&&ot(e,"padding",r)},d(l){l&&$(e),o&&o.d()}}}function ih(n){let e,t=`${n[1]*.4}rem`;return{c(){e=C("span"),e.textContent="You must be logged in to access this feature",ot(e,"font-size",t)},m(i,s){q(i,e,s)},p(i,s){s&2&&t!==(t=`${i[1]*.4}rem`)&&ot(e,"font-size",t)},d(i){i&&$(e)}}}function Dk(n){let e=!dr(n[2]),t,i=e&&nh(n);return{c(){i&&i.c(),t=Dt()},m(s,r){i&&i.m(s,r),q(s,t,r)},p(s,[r]){r&4&&(e=!dr(s[2])),e?i?i.p(s,r):(i=nh(s),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:ie,o:ie,d(s){s&&$(t),i&&i.d(s)}}}function Nk(n,e,t){let i;J(n,Ma,o=>t(2,i=o));let{text:s=!0,size:r=10}=e;return n.$$set=o=>{"text"in o&&t(0,s=o.text),"size"in o&&t(1,r=o.size)},[s,r,i]}class Rk extends De{constructor(e){super(),Te(this,e,Nk,Dk,ve,{text:0,size:1})}}function sh(n){let e,t,i;function s(o){n[3](o)}let r={slotName:"sets"};return n[0]!==void 0&&(r.slotOpen=n[0]),e=new Du({props:r}),de.push(()=>Ke(e,"slotOpen",s)),{c(){ae(e.$$.fragment)},m(o,l){oe(e,o,l),i=!0},p(o,l){const a={};!t&&l&1&&(t=!0,a.slotOpen=o[0],Ge(()=>t=!1)),e.$set(a)},i(o){i||(j(e.$$.fragment,o),i=!0)},o(o){G(e.$$.fragment,o),i=!1},d(o){le(e,o)}}}function Bk(n){let e,t,i,s,r,o,l=n[1].head&&n[1].body&&n[1].legs&&n[1].feet&&sh(n);return{c(){e=C("button"),e.innerHTML=`Load armor set
    <iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="180deg" class="svelte-l9dczq"></iconify-icon>`,t=O(),l&&l.c(),i=Dt(),y(e,"class","svelte-l9dczq"),ce(e,"ddOpen",n[0])},m(a,c){q(a,e,c),q(a,t,c),l&&l.m(a,c),q(a,i,c),s=!0,r||(o=U(e,"click",n[2]),r=!0)},p(a,[c]){(!s||c&1)&&ce(e,"ddOpen",a[0]),a[1].head&&a[1].body&&a[1].legs&&a[1].feet?l?(l.p(a,c),c&2&&j(l,1)):(l=sh(a),l.c(),j(l,1),l.m(i.parentNode,i)):l&&(Je(),G(l,1,1,()=>{l=null}),Ze())},i(a){s||(j(l),s=!0)},o(a){G(l),s=!1},d(a){a&&($(e),$(t),$(i)),l&&l.d(a),r=!1,o()}}}function Fk(n,e,t){let i;J(n,xn,l=>t(1,i=l));let{ddOpen:s=!1}=e;const r=()=>t(0,s=!s);function o(l){s=l,t(0,s)}return n.$$set=l=>{"ddOpen"in l&&t(0,s=l.ddOpen)},[s,i,r,o]}class Ok extends De{constructor(e){super(),Te(this,e,Fk,Bk,ve,{ddOpen:0})}}function Pk(n){let e;return{c(){e=C("span"),e.textContent="Create some builds to get started!",y(e,"class","tooltip svelte-1cwaghb"),y(e,"id","top"),ot(e,"left","70.5%")},m(t,i){q(t,e,i)},p:ie,d(t){t&&$(e)}}}function Mk(n){let e,t=n[4]?"Select some gear or armor to get started!":"You must be logged in to access these features",i;return{c(){e=C("span"),i=re(t),y(e,"class","tooltip svelte-1cwaghb"),y(e,"id","top"),ot(e,"left",n[3]?"38%":"")},m(s,r){q(s,e,r),m(e,i)},p(s,r){r&16&&t!==(t=s[4]?"Select some gear or armor to get started!":"You must be logged in to access these features")&&Se(i,t),r&8&&ot(e,"left",s[3]?"38%":"")},d(s){s&&$(e)}}}function Lk(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g,x,v,b,E,w,T,k,A,N,D,I,S,B,H;function W(ee,L){if(!ee[5])return Mk;if(!ee[3])return Pk}let F=W(n),M=F&&F(n);b=new Rk({props:{size:7,text:!1}});function K(ee){n[19](ee)}let te={};return n[1]!==void 0&&(te.ddOpen=n[1]),D=new Ok({props:te}),de.push(()=>Ke(D,"ddOpen",K)),{c(){e=C("div"),t=C("div"),i=C("div"),s=C("button"),r=re("Export new build"),l=O(),a=C("div"),c=C("button"),u=re("Save to build"),d=O(),h=C("div"),p=C("button"),_=re("Delete build"),x=O(),M&&M.c(),v=O(),ae(b.$$.fragment),E=O(),w=C("div"),T=C("div"),k=C("button"),k.textContent="Load build",A=O(),N=C("div"),ae(D.$$.fragment),s.disabled=o=!n[4]||!n[5],y(s,"class","svelte-1cwaghb"),y(i,"class","buttonCont svelte-1cwaghb"),c.disabled=f=!n[4]||!n[5]||!n[3],y(c,"class","svelte-1cwaghb"),y(a,"class","buttonCont svelte-1cwaghb"),y(a,"id","middle"),p.disabled=g=!n[4]||!n[3],y(p,"class","svelte-1cwaghb"),y(h,"class","buttonCont svelte-1cwaghb"),y(t,"class","posrel svelte-1cwaghb"),y(t,"id","modify"),ce(t,"no-tooltip",n[2]),y(k,"class","svelte-1cwaghb"),y(T,"class","buttonCont svelte-1cwaghb"),y(N,"class","buttonCont svelte-1cwaghb"),y(w,"id","load"),y(w,"class","svelte-1cwaghb"),y(e,"class","mainFeatures svelte-1cwaghb"),y(e,"id","build")},m(ee,L){q(ee,e,L),m(e,t),m(t,i),m(i,s),m(s,r),m(t,l),m(t,a),m(a,c),m(c,u),m(t,d),m(t,h),m(h,p),m(p,_),m(t,x),M&&M.m(t,null),m(t,v),oe(b,t,null),m(e,E),m(e,w),m(w,T),m(T,k),m(w,A),m(w,N),oe(D,N,null),n[20](N),S=!0,B||(H=[U(window,"mousedown",n[9]),U(window,"keydown",n[10]),U(s,"click",n[11]),U(s,"mouseenter",n[12]),U(s,"mouseleave",n[13]),U(c,"click",n[14]),U(p,"click",n[15]),U(p,"mouseenter",n[16]),U(p,"mouseleave",n[17]),U(k,"click",n[18])],B=!0)},p(ee,[L]){(!S||L&48&&o!==(o=!ee[4]||!ee[5]))&&(s.disabled=o),(!S||L&56&&f!==(f=!ee[4]||!ee[5]||!ee[3]))&&(c.disabled=f),(!S||L&24&&g!==(g=!ee[4]||!ee[3]))&&(p.disabled=g),F===(F=W(ee))&&M?M.p(ee,L):(M&&M.d(1),M=F&&F(ee),M&&(M.c(),M.m(t,v))),(!S||L&4)&&ce(t,"no-tooltip",ee[2]);const z={};!I&&L&2&&(I=!0,z.ddOpen=ee[1],Ge(()=>I=!1)),D.$set(z)},i(ee){S||(j(b.$$.fragment,ee),j(D.$$.fragment,ee),S=!0)},o(ee){G(b.$$.fragment,ee),G(D.$$.fragment,ee),S=!1},d(ee){ee&&$(e),M&&M.d(),le(b),le(D),n[20](null),B=!1,we(H)}}}function $k(n,e,t){let i,s,r,o,l,a;J(n,dn,A=>t(8,i=A)),J(n,ni,A=>t(3,s=A)),J(n,go,A=>t(4,r=A)),J(n,vo,A=>t(5,o=A)),J(n,Bi,A=>t(6,l=A)),J(n,ne,A=>t(7,a=A));let c,u=!1,f=!1;const d=A=>{c.contains(A.target)||t(1,u=!1)},h=A=>{A.key=="Escape"&&t(1,u=!1)},p=()=>{r&&o&&!l&&Y(ne,a.export.ongoing=!0,a)},_=()=>t(2,f=!0),g=()=>t(2,f=!1),x=()=>{r&&o&&s&&!l&&Y(ne,a.save.ongoing=!0,a)},v=()=>{r&&s&&!l&&Y(ne,a.delete.ongoing=!0,a)},b=()=>t(2,f=!0),E=()=>t(2,f=!1),w=()=>{l||Y(ne,a.load.ongoing=!0,a)};function T(A){u=A,t(1,u)}function k(A){de[A?"unshift":"push"](()=>{c=A,t(0,c)})}return n.$$.update=()=>{n.$$.dirty&256&&Y(ni,s=Object.keys(i).length>0,s)},[c,u,f,s,r,o,l,a,i,d,h,p,_,g,x,v,b,E,w,T,k]}class Hk extends De{constructor(e){super(),Te(this,e,$k,Lk,ve,{})}}function rh(n){let e;return{c(){e=C("span"),e.textContent="New changes! Exiting will erase them.",y(e,"id","alert")},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function Uk(n){let e,t,i,s,r,o,l,a=25-n[3].length+"",c,u,f,d,h,p,_,g,x,v,b,E=275-n[4].length+"",w,T,k,A,N,D,I,S,B,H,W,F,M,K,te,ee,L=(n[3]||n[4])&&rh();return{c(){e=C("div"),t=C("div"),i=re(`Name:\r
        `),s=C("input"),o=O(),l=C("span"),c=re(a),u=O(),f=C("div"),d=C("div"),h=C("span"),h.textContent="Description / Notes:",p=O(),L&&L.c(),_=O(),g=C("textarea"),v=O(),b=C("span"),w=re(E),T=O(),k=C("div"),A=C("div"),N=C("button"),D=re("CANCEL"),S=O(),B=C("div"),H=C("button"),W=re("EXPORT"),y(s,"class","buildNameInput"),y(s,"id","firstFocusable"),s.disabled=r=n[5].export.status==0,y(s,"type","text"),y(s,"placeholder",n[6]),y(s,"maxlength","25"),y(l,"class","charCounter svelte-9d2eec"),y(l,"id","buildName"),y(t,"class","buildNameCont svelte-9d2eec"),y(g,"class","buildDescInput"),g.disabled=x=n[5].export.status==0,y(g,"placeholder","[Empty]"),y(g,"maxlength","275"),y(g,"autocomplete","off"),y(b,"class","charCounter"),y(b,"id","buildDesc"),y(f,"class","buildDescCont"),N.disabled=I=n[5].export.status==0,y(H,"id","lastFocusable"),H.disabled=F=n[5].export.status==0,y(k,"class","promptOptions"),y(e,"class","buildExporter svelte-9d2eec")},m(z,V){q(z,e,V),m(e,t),m(t,i),m(t,s),n[8](s),In(s,n[3]),m(t,o),m(t,l),m(l,c),m(e,u),m(e,f),m(f,d),m(d,h),m(d,p),L&&L.m(d,null),m(f,_),m(f,g),In(g,n[4]),n[13](g),m(f,v),m(f,b),m(b,w),m(e,T),m(e,k),m(k,A),m(A,N),m(N,D),n[16](N),m(k,S),m(k,B),m(B,H),m(H,W),K=!0,te||(ee=[U(s,"input",n[9]),U(s,"input",n[10]),U(s,"keydown",n[11]),U(g,"input",n[12]),U(g,"input",n[14]),U(g,"keydown",n[15]),U(N,"click",n[17]),U(H,"click",n[18]),U(H,"keydown",Gt),U(e,"introstart",n[19])],te=!0)},p(z,[V]){(!K||V&32&&r!==(r=z[5].export.status==0))&&(s.disabled=r),V&8&&s.value!==z[3]&&In(s,z[3]),(!K||V&8)&&a!==(a=25-z[3].length+"")&&Se(c,a),z[3]||z[4]?L||(L=rh(),L.c(),L.m(d,null)):L&&(L.d(1),L=null),(!K||V&32&&x!==(x=z[5].export.status==0))&&(g.disabled=x),V&16&&In(g,z[4]),(!K||V&16)&&E!==(E=275-z[4].length+"")&&Se(w,E),(!K||V&32&&I!==(I=z[5].export.status==0))&&(N.disabled=I),(!K||V&32&&F!==(F=z[5].export.status==0))&&(H.disabled=F)},i(z){K||(z&&Ie(()=>{K&&(M||(M=ge(e,Qe,{duration:250},!0)),M.run(1))}),K=!0)},o(z){z&&(M||(M=ge(e,Qe,{duration:250},!1)),M.run(0)),K=!1},d(z){z&&$(e),n[8](null),L&&L.d(),n[13](null),n[16](null),z&&M&&M.end(),te=!1,we(ee)}}}function Wk(n,e,t){let i,s,r,o,l,a,c;J(n,ne,H=>t(5,i=H)),J(n,ln,H=>t(20,s=H)),J(n,ni,H=>t(21,r=H)),J(n,vs,H=>t(22,o=H)),J(n,Bn,H=>t(23,l=H)),J(n,Cn,H=>t(24,a=H)),J(n,dn,H=>t(25,c=H));let u=Object.keys(c).length,f,d,h,p="",_="",g=`My ${u+1+ig[(u+1)%10]} build`;function x(){if(Y(ne,i.export.status=0,i),p.endsWith(" ")&&t(3,p=p.replace(/  +/g," ").replace(/ $/,"")),_.endsWith(" ")&&t(4,_=_.replace(/  +/g," ").replace(/ $/,"")),Object.keys(c).includes(p)){Y(ne,i.export.status=-1,i),Y(ne,i.message="duplicate_name",i);return}let H=rw(Vn(Rn(Ss),"builds")).key,W=og(a,l);W.name=p||g,W.desc=_||"[Empty]",Is(Rn(gl,`${o}/siteData/calculator/builds/${H}`),W),Is(Vn(Rn(Ss),`builds/${H}`),W).then(()=>{Y(ne,i.export.status=1,i),Y(ni,r=!0,r),Tu(),dn.update(F=>({...F,[W.name]:{...W,id:H}})),Y(ln,s=W,s),Y(ln,s.id=H,s),navigator.clipboard.writeText(`${location.origin+location.pathname}?id=${H}`)}).catch(()=>{Y(ne,i.export.status=-1,i),Y(ne,i.message="firebase_fail",i)})}function v(H){de[H?"unshift":"push"](()=>{f=H,t(0,f)})}function b(){p=this.value,t(3,p)}const E=H=>{t(3,p=Ho(H.target.value,25))},w=H=>{i.export.status==0&&H.preventDefault(),jt(H),cc(f,H.target.value,25)};function T(){_=this.value,t(4,_)}function k(H){de[H?"unshift":"push"](()=>{d=H,t(1,d)})}const A=H=>{t(4,_=Ho(H.target.value,275))},N=H=>{i.export.status==0&&H.preventDefault(),cc(d,H.target.value,275)};function D(H){de[H?"unshift":"push"](()=>{h=H,t(2,h)})}return[f,d,h,p,_,i,g,x,v,b,E,w,T,k,A,N,D,()=>{i.export.status!=0&&Y(ne,i.export.ongoing=!1,i)},()=>{i.export.status!=0&&x()},()=>h.focus()]}class qk extends De{constructor(e){super(),Te(this,e,Wk,Uk,ve,{})}}function zk(n){let e,t,i,s,r=n[2]?"Copied!":"Copy link",o,l,a;return{c(){e=C("button"),t=C("b"),t.textContent="Build link",i=O(),s=C("span"),o=re(r),y(s,"class","tooltip"),y(s,"id","top"),y(e,"class","copyButton svelte-1qz7uzx"),y(e,"id","firstFocusable")},m(c,u){q(c,e,u),m(e,t),m(e,i),m(e,s),m(s,o),l||(a=[U(e,"click",n[7]),U(e,"keydown",jt)],l=!0)},p(c,u){u&4&&r!==(r=c[2]?"Copied!":"Copy link")&&Se(o,r)},d(c){c&&$(e),l=!1,we(a)}}}function Vk(n){let e,t,i,s,r,o,l=n[2]?"Copied!":"Copy ID",a,c,u,f;return{c(){e=C("button"),t=C("b"),t.textContent="ID:",i=O(),s=re(n[4]),r=O(),o=C("span"),a=re(l),y(o,"class","tooltip"),y(o,"id","top"),y(e,"class","copyButton svelte-1qz7uzx"),y(e,"id",c=n[1]!="save"?"firstFocusable":"")},m(d,h){q(d,e,h),m(e,t),m(e,i),m(e,s),m(e,r),m(e,o),m(o,a),u||(f=[U(e,"click",n[5]),U(e,"keydown",n[6])],u=!0)},p(d,h){h&4&&l!==(l=d[2]?"Copied!":"Copy ID")&&Se(a,l),h&2&&c!==(c=d[1]!="save"?"firstFocusable":"")&&y(e,"id",c)},d(d){d&&$(e),u=!1,we(f)}}}function jk(n){let e;function t(r,o){if(r[0]=="id")return Vk;if(r[0]=="link")return zk}let i=t(n),s=i&&i(n);return{c(){s&&s.c(),e=Dt()},m(r,o){s&&s.m(r,o),q(r,e,o)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s&&s.d(1),s=i&&i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:ie,o:ie,d(r){r&&$(e),s&&s.d(r)}}}function Gk(n,e,t){let i;J(n,ln,d=>t(8,i=d));let{type:s,source:r}=e,o=!1;function l(d){o||(navigator.clipboard.writeText(d),t(2,o=!0),setTimeout(()=>t(2,o=!1),1e3))}let a=i?i.id:null;const c=()=>l(a),u=()=>{r!="save"&&jt()},f=()=>l(`${location.origin+location.pathname}?id=${a}`);return n.$$set=d=>{"type"in d&&t(0,s=d.type),"source"in d&&t(1,r=d.source)},[s,r,o,l,a,c,u,f]}class Ar extends De{constructor(e){super(),Te(this,e,Gk,jk,ve,{type:0,source:1})}}function Kk(n){let e,t,i,s;return e=new Ar({props:{type:"link",source:"share"}}),i=new Ar({props:{type:"id",source:"share"}}),{c(){ae(e.$$.fragment),t=O(),ae(i.$$.fragment)},m(r,o){oe(e,r,o),q(r,t,o),oe(i,r,o),s=!0},p:ie,i(r){s||(j(e.$$.fragment,r),j(i.$$.fragment,r),s=!0)},o(r){G(e.$$.fragment,r),G(i.$$.fragment,r),s=!1},d(r){r&&$(t),le(e,r),le(i,r)}}}function Yk(n){let e;return{c(){e=C("span"),e.textContent="Your build has been erased from the database."},m(t,i){q(t,e,i)},p:ie,i:ie,o:ie,d(t){t&&$(e)}}}function Qk(n){let e;function t(r,o){if(r[2].message=="not_found")return tI;if(r[2].message=="invalid_id")return eI}let i=t(n),s=i&&i(n);return{c(){s&&s.c(),e=Dt()},m(r,o){s&&s.m(r,o),q(r,e,o)},p(r,o){i!==(i=t(r))&&(s&&s.d(1),s=i&&i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:ie,o:ie,d(r){r&&$(e),s&&s.d(r)}}}function Xk(n){let e,t,i,s,r,o;return i=new Ar({props:{type:"link",source:"save"}}),r=new Ar({props:{type:"id",source:"save"}}),{c(){e=C("span"),e.textContent="Your build has been overwritten.",t=O(),ae(i.$$.fragment),s=O(),ae(r.$$.fragment)},m(l,a){q(l,e,a),q(l,t,a),oe(i,l,a),q(l,s,a),oe(r,l,a),o=!0},p:ie,i(l){o||(j(i.$$.fragment,l),j(r.$$.fragment,l),o=!0)},o(l){G(i.$$.fragment,l),G(r.$$.fragment,l),o=!1},d(l){l&&($(e),$(t),$(s)),le(i,l),le(r,l)}}}function Jk(n){let e,t,i,s;const r=[iI,nI],o=[];function l(a,c){return a[2].export.status==1?0:a[2].export.status==-1&&a[2].message=="duplicate_name"?1:-1}return~(e=l(n))&&(t=o[e]=r[e](n)),{c(){t&&t.c(),i=Dt()},m(a,c){~e&&o[e].m(a,c),q(a,i,c),s=!0},p(a,c){let u=e;e=l(a),e!==u&&(t&&(Je(),G(o[u],1,1,()=>{o[u]=null}),Ze()),~e?(t=o[e],t||(t=o[e]=r[e](a),t.c()),j(t,1),t.m(i.parentNode,i)):t=null)},i(a){s||(j(t),s=!0)},o(a){G(t),s=!1},d(a){a&&$(i),~e&&o[e].d(a)}}}function Zk(n){let e,t,i=n[2].export.status?"exporting":n[2].save.status?"saving":n[2].load.status?"loading":"deleting",s,r,o,l,a,c,u,f;return{c(){e=C("span"),t=re("A problem occurred while "),s=re(i),r=re(` your build.\r
            `),o=C("br"),l=re(`\r
            If needed`),a=C("b"),a.textContent=",",c=re(" you may contact "),u=C("hl"),u.textContent="xt.ss",f=re(` on Discord for more\r
            details.`)},m(d,h){q(d,e,h),m(e,t),m(e,s),m(e,r),m(e,o),m(e,l),m(e,a),m(e,c),m(e,u),m(e,f)},p(d,h){h&4&&i!==(i=d[2].export.status?"exporting":d[2].save.status?"saving":d[2].load.status?"loading":"deleting")&&Se(s,i)},i:ie,o:ie,d(d){d&&$(e)}}}function eI(n){let e;return{c(){e=C("span"),e.textContent="The ID you have entered is invalid. Please check it again."},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function tI(n){let e;return{c(){e=C("span"),e.innerHTML=`Your build could not be found within the database.
                <br/>
                If needed<b>,</b> you may contact <hl>xt.ss</hl> on Discord for more
                details.`},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function nI(n){let e;return{c(){e=C("span"),e.innerHTML=`Another build of yours with the same name already exists.
                <br/>
                Please use a different one.`},m(t,i){q(t,e,i)},i:ie,o:ie,d(t){t&&$(e)}}}function iI(n){let e,t,i,s;return i=new Ar({props:{type:"id",source:"export"}}),{c(){e=C("span"),e.textContent="Your build's link has been copied to your clipboard.",t=O(),ae(i.$$.fragment)},m(r,o){q(r,e,o),q(r,t,o),oe(i,r,o),s=!0},i(r){s||(j(i.$$.fragment,r),s=!0)},o(r){G(i.$$.fragment,r),s=!1},d(r){r&&($(e),$(t)),le(i,r)}}}function sI(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g,x;const v=[Zk,Jk,Xk,Qk,Yk,Kk],b=[];function E(w,T){return w[1]==-1&&w[2].message=="firebase_fail"?0:w[2].export.status?1:w[2].save.status==1?2:w[2].load.status==-1?3:w[2].delete.status==1?4:w[2].share.ongoing?5:-1}return~(r=E(n))&&(o=b[r]=v[r](n)),{c(){e=C("div"),t=C("span"),i=re(n[4]),s=O(),o&&o.c(),l=O(),a=C("div"),c=C("div"),u=C("button"),f=re("OK"),y(t,"id","messageTitle"),y(t,"class","svelte-8i8nbx"),y(u,"id",d=(n[1]==-1?"firstFocusable ":"")+"lastFocusable"),y(a,"class","promptOptions svelte-8i8nbx"),y(e,"class","promptMessage svelte-8i8nbx")},m(w,T){q(w,e,T),m(e,t),m(t,i),m(e,s),~r&&b[r].m(e,null),m(e,l),m(e,a),m(a,c),m(c,u),m(u,f),n[6](u),_=!0,g||(x=[U(u,"click",n[7]),U(u,"keydown",n[8]),U(e,"introstart",n[9])],g=!0)},p(w,[T]){(!_||T&16)&&Se(i,w[4]);let k=r;r=E(w),r===k?~r&&b[r].p(w,T):(o&&(Je(),G(b[k],1,1,()=>{b[k]=null}),Ze()),~r?(o=b[r],o?o.p(w,T):(o=b[r]=v[r](w),o.c()),j(o,1),o.m(e,l)):o=null),(!_||T&2&&d!==(d=(w[1]==-1?"firstFocusable ":"")+"lastFocusable"))&&y(u,"id",d)},i(w){_||(j(o),w&&Ie(()=>{_&&(p&&p.end(1),h=Fc(e,Qe,{duration:200,delay:75}),h.start())}),_=!0)},o(w){G(o),h&&h.invalidate(),w&&(p=Oc(e,Qe,{duration:200})),_=!1},d(w){w&&$(e),~r&&b[r].d(),n[6](null),w&&p&&p.end(),g=!1,we(x)}}}function rI(n,e,t){let i,s,r;J(n,ne,h=>t(2,r=h));let{loadID:o}=e;const l=wn();let a;function c(h){de[h?"unshift":"push"](()=>{a=h,t(3,a)})}const u=()=>{t(0,o=null),l("resetActions")},f=h=>{s==-1&&jt(h),Gt(h)},d=()=>a.focus();return n.$$set=h=>{"loadID"in h&&t(0,o=h.loadID)},n.$$.update=()=>{n.$$.dirty&4&&t(1,s=r.export.status||r.save.status||r.load.status||r.delete.status),n.$$.dirty&6&&t(4,i=r.share.ongoing?"Share this build":`${r.export.status?"Export":r.save.status?"Save":r.load.status?"Load":"Delete"} ${s==1?"Success":"Failure"}!`)},[o,s,r,a,i,l,c,u,f,d]}class oI extends De{constructor(e){super(),Te(this,e,rI,sI,ve,{loadID:0})}}function lI(n){let e,t,i,s,r,o;return{c(){e=C("li"),t=C("button"),i=C("span"),s=re(n[0]),y(i,"class","svelte-1hzohsl"),y(e,"class","svelte-1hzohsl"),ce(e,"selectedItem",n[2])},m(l,a){q(l,e,a),m(e,t),m(t,i),m(i,s),n[7](e),r||(o=U(t,"click",n[3]),r=!0)},p(l,[a]){a&1&&Se(s,l[0]),a&4&&ce(e,"selectedItem",l[2])},i:ie,o:ie,d(l){l&&$(e),n[7](null),r=!1,o()}}}function aI(n,e,t){let{chosenBuild:i,buildData:s,buildName:r,ddOpen:o}=e;const l=wn();let a,c;function u(){if(o){if(a.classList.contains("selectedItem")||t(2,c=!1),c)return;t(2,c=!0),t(5,o=!1),t(4,i=[r,s]),l("buildSelect",a)}}function f(d){de[d?"unshift":"push"](()=>{a=d,t(1,a)})}return n.$$set=d=>{"chosenBuild"in d&&t(4,i=d.chosenBuild),"buildData"in d&&t(6,s=d.buildData),"buildName"in d&&t(0,r=d.buildName),"ddOpen"in d&&t(5,o=d.ddOpen)},n.$$.update=()=>{n.$$.dirty&17&&i!==null&&t(2,c=i[0]===r)},[r,a,c,u,i,o,s,f]}class cI extends De{constructor(e){super(),Te(this,e,aI,lI,ve,{chosenBuild:4,buildData:6,buildName:0,ddOpen:5})}}function oh(n,e,t){const i=n.slice();return i[25]=e[t][0],i[26]=e[t][1],i}function lh(n){let e,t,i,s;function r(a){n[13](a)}function o(a){n[14](a)}let l={buildData:n[26],buildName:n[25]};return n[0]!==void 0&&(l.chosenBuild=n[0]),n[1]!==void 0&&(l.ddOpen=n[1]),e=new cI({props:l}),de.push(()=>Ke(e,"chosenBuild",r)),de.push(()=>Ke(e,"ddOpen",o)),e.$on("buildSelect",n[11]),{c(){ae(e.$$.fragment)},m(a,c){oe(e,a,c),s=!0},p(a,c){const u={};c&16&&(u.buildData=a[26]),c&16&&(u.buildName=a[25]),!t&&c&1&&(t=!0,u.chosenBuild=a[0],Ge(()=>t=!1)),!i&&c&2&&(i=!0,u.ddOpen=a[1],Ge(()=>i=!1)),e.$set(u)},i(a){s||(j(e.$$.fragment,a),s=!0)},o(a){G(e.$$.fragment,a),s=!1},d(a){le(e,a)}}}function uI(n){let e,t,i,s,r,o,l,a=Ue(Object.entries(n[4])),c=[];for(let f=0;f<a.length;f+=1)c[f]=lh(oh(n,a,f));const u=f=>G(c[f],1,1,()=>{c[f]=null});return{c(){e=C("div"),t=C("input"),i=O(),s=C("ul");for(let f=0;f<c.length;f+=1)c[f].c();y(t,"type","text"),y(t,"class","searchBarInput svelte-nka60b"),y(t,"placeholder","Search..."),y(s,"class","svelte-nka60b"),ce(s,"no-scrollbar",n[8].length<=4),y(e,"class","dropdown svelte-nka60b"),ce(e,"ddOpen",n[1])},m(f,d){q(f,e,d),m(e,t),n[12](t),m(e,i),m(e,s);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(s,null);n[15](s),n[16](e),r=!0,o||(l=[U(t,"input",n[10]),U(t,"keydown",n[9]),U(e,"transitionend",n[17]),U(e,"transitioncancel",n[18])],o=!0)},p(f,[d]){if(d&2067){a=Ue(Object.entries(f[4]));let h;for(h=0;h<a.length;h+=1){const p=oh(f,a,h);c[h]?(c[h].p(p,d),j(c[h],1)):(c[h]=lh(p),c[h].c(),j(c[h],1),c[h].m(s,null))}for(Je(),h=a.length;h<c.length;h+=1)u(h);Ze()}(!r||d&256)&&ce(s,"no-scrollbar",f[8].length<=4),(!r||d&2)&&ce(e,"ddOpen",f[1])},i(f){if(!r){for(let d=0;d<a.length;d+=1)j(c[d]);r=!0}},o(f){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)G(c[d]);r=!1},d(f){f&&$(e),n[12](null),Lt(c,f),n[15](null),n[16](null),o=!1,we(l)}}}function dI(n,e,t){let i;J(n,dn,S=>t(4,i=S));let{chosenBuild:s,ddOpen:r=!1,dropdown:o}=e;const l=wn();let a,c,u,f,d={},h=!1,p=[];function _(S){!S.shiftKey&&S.key=="Tab"&&(S.preventDefault(),setTimeout(()=>a.focus()))}function g(){c&&c.removeEventListener("keydown",_),b(),c&&c.addEventListener("keydown",_)}function x(S){S.shiftKey&&S.key=="Tab"&&(S.preventDefault(),setTimeout(()=>(c.querySelector("button")||c).focus()))}function v(){rg(a.value,d),g()}function b(){c&&c.classList.remove("lastElement"),t(8,p=u.querySelectorAll("li:not(.hidden)")),c=p[p.length-1],c?c.classList.add("lastElement"):c=a}function E(S){l("buildSelect"),t(6,f=S.detail);let B=u.querySelector(".selectedItem");B&&B!=S.detail&&B.classList.remove("selectedItem"),t(7,h=!0)}function w(S){de[S?"unshift":"push"](()=>{a=S,t(5,a)})}function T(S){s=S,t(0,s)}function k(S){r=S,t(1,r)}function A(S){de[S?"unshift":"push"](()=>{u=S,t(3,u)})}function N(S){de[S?"unshift":"push"](()=>{o=S,t(2,o)})}const D=S=>{S.propertyName=="visibility"&&(h&&(t(7,h=!1),t(5,a.value="",a),v()),!r&&f&&u.scrollTo(0,f.offsetTop),$o(a,r))},I=S=>{S.propertyName=="visibility"&&(t(7,h=!1),$o(a,r))};return n.$$set=S=>{"chosenBuild"in S&&t(0,s=S.chosenBuild),"ddOpen"in S&&t(1,r=S.ddOpen),"dropdown"in S&&t(2,o=S.dropdown)},n.$$.update=()=>{if(n.$$.dirty&24&&u){t(8,p=u.querySelectorAll("li:not(.hidden)"));for(let S=0;S<u.childElementCount;S++)d[Object.keys(i)[S]]=u.children[S];b(),g()}},[s,r,o,u,i,a,f,h,p,x,v,E,w,T,k,A,N,D,I]}class Nu extends De{constructor(e){super(),Te(this,e,dI,uI,ve,{chosenBuild:0,ddOpen:1,dropdown:2})}}function ah(n){let e,t=(n[6]>n[5]*.8?n[11].slice(0,20)+"<b>...</b>":n[11])+"",i;return{c(){e=C("span"),Ie(()=>n[15].call(e))},m(s,r){q(s,e,r),e.innerHTML=t,i=fi(e,n[15].bind(e))},p(s,r){r[0]&2144&&t!==(t=(s[6]>s[5]*.8?s[11].slice(0,20)+"<b>...</b>":s[11])+"")&&(e.innerHTML=t)},d(s){s&&$(e),i()}}}function ch(n){let e;return{c(){e=C("span"),e.textContent="New changes! Exiting will erase them.",y(e,"id","alert")},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function fI(n){let e,t,i,s,r,o=n[11],l,a,c,u,f,d,h,p,_,g,x,v,b,E,w=275-n[2].length+"",T,k,A,N,D,I,S,B,H,W,F,M,K,te,ee,L,z,V,R,Q,pe,me=ah(n),fe=n[1]!=null&&n[1]!=n[2]&&ch();function Be(_e){n[26](_e)}function Ne(_e){n[27](_e)}function Fe(_e){n[28](_e)}let Ae={};return n[0]!==void 0&&(Ae.chosenBuild=n[0]),n[3]!==void 0&&(Ae.ddOpen=n[3]),n[9]!==void 0&&(Ae.dropdown=n[9]),te=new Nu({props:Ae}),de.push(()=>Ke(te,"chosenBuild",Be)),de.push(()=>Ke(te,"ddOpen",Ne)),de.push(()=>Ke(te,"dropdown",Fe)),te.$on("buildSelect",n[29]),{c(){e=C("div"),t=C("div"),i=C("span"),i.textContent="Save to:",s=O(),r=C("button"),me.c(),l=O(),a=C("iconify-icon"),f=O(),d=C("div"),h=C("div"),p=C("span"),p.textContent="Description / Notes:",_=O(),fe&&fe.c(),g=O(),x=C("textarea"),b=O(),E=C("span"),T=re(w),k=O(),A=C("div"),N=C("div"),D=C("button"),I=re("CANCEL"),B=O(),H=C("div"),W=C("button"),F=re("SAVE"),K=O(),ae(te.$$.fragment),$e(a,"icon","iconamoon:arrow-down-2-fill"),y(r,"id","firstFocusable"),r.disabled=c=n[12].save.status==0,y(r,"class","promptDDButton svelte-106wt5q"),Ie(()=>n[17].call(r)),ce(r,"ddOpen",n[3]),y(t,"class","chosenBuildCont"),y(x,"class","buildDescInput"),x.disabled=v=n[12].save.status==0,y(x,"placeholder","[Empty]"),y(x,"maxlength","275"),y(x,"autocomplete","off"),y(E,"class","charCounter"),y(E,"id","buildDesc"),y(d,"class","buildDescCont"),D.disabled=S=n[12].save.status==0,y(W,"id","lastFocusable"),W.disabled=M=n[12].save.status==0,y(A,"class","promptOptions"),y(e,"class","buildSaver")},m(_e,be){q(_e,e,be),m(e,t),m(t,i),m(t,s),m(t,r),me.m(r,null),m(r,l),m(r,a),n[16](r),u=fi(r,n[17].bind(r)),m(e,f),m(e,d),m(d,h),m(h,p),m(h,_),fe&&fe.m(h,null),m(d,g),m(d,x),n[19](x),In(x,n[10]),m(d,b),m(d,E),m(E,T),m(e,k),m(e,A),m(A,N),m(N,D),m(D,I),n[23](D),m(A,B),m(A,H),m(H,W),m(W,F),m(e,K),oe(te,e,null),R=!0,Q||(pe=[U(window,"mousedown",n[14]),U(r,"click",n[18]),U(r,"keydown",jt),U(x,"input",n[20]),U(x,"input",n[21]),U(x,"keydown",n[22]),U(D,"click",n[24]),U(W,"click",n[25]),U(W,"keydown",Gt),U(e,"introstart",n[30]),U(e,"keydown",n[31])],Q=!0)},p(_e,be){be[0]&2048&&ve(o,o=_e[11])?(me.d(1),me=ah(_e),me.c(),me.m(r,l)):me.p(_e,be),(!R||be[0]&4096&&c!==(c=_e[12].save.status==0))&&(r.disabled=c),(!R||be[0]&8)&&ce(r,"ddOpen",_e[3]),_e[1]!=null&&_e[1]!=_e[2]?fe||(fe=ch(),fe.c(),fe.m(h,null)):fe&&(fe.d(1),fe=null),(!R||be[0]&4096&&v!==(v=_e[12].save.status==0))&&(x.disabled=v),be[0]&1024&&In(x,_e[10]),(!R||be[0]&4)&&w!==(w=275-_e[2].length+"")&&Se(T,w),(!R||be[0]&4096&&S!==(S=_e[12].save.status==0))&&(D.disabled=S),(!R||be[0]&4096&&M!==(M=_e[12].save.status==0))&&(W.disabled=M);const rt={};!ee&&be[0]&1&&(ee=!0,rt.chosenBuild=_e[0],Ge(()=>ee=!1)),!L&&be[0]&8&&(L=!0,rt.ddOpen=_e[3],Ge(()=>L=!1)),!z&&be[0]&512&&(z=!0,rt.dropdown=_e[9],Ge(()=>z=!1)),te.$set(rt)},i(_e){R||(j(te.$$.fragment,_e),_e&&Ie(()=>{R&&(V||(V=ge(e,Qe,{duration:250},!0)),V.run(1))}),R=!0)},o(_e){G(te.$$.fragment,_e),_e&&(V||(V=ge(e,Qe,{duration:250},!1)),V.run(0)),R=!1},d(_e){_e&&$(e),me.d(_e),n[16](null),u(),fe&&fe.d(),n[19](null),n[23](null),le(te),_e&&V&&V.end(),Q=!1,we(pe)}}}function hI(n,e,t){let i,s,r,o,l,a,c,u,f;J(n,ne,R=>t(12,o=R)),J(n,ln,R=>t(32,l=R)),J(n,dn,R=>t(33,a=R)),J(n,vs,R=>t(34,c=R)),J(n,Bn,R=>t(35,u=R)),J(n,Cn,R=>t(36,f=R));let d=!1,h,p,_,g,x,v,b=Object.entries(a)[0],E=null;function w(){Y(ne,o.save.status=0,o);let R=og(f,u),Q=E==null?s:E==""?"[Empty]":E,pe=b[1].id;R.name=i,R.desc=Q,Is(Rn(gl,`${c}/siteData/calculator/builds/${pe}`),R),Is(Vn(Rn(Ss),`builds/${pe}`),R).then(()=>{Y(ne,o.save.status=1,o);let me={...a};me[i]=R,me[i].id=pe,me[i].desc=Q,Tu(),dn.update(()=>me),Y(ln,l=R,l),Y(ln,l.id=pe,l)}).catch(()=>{Y(ne,o.save.status=-1,o),Y(ne,o.message="firebase_fail",o)})}const T=R=>{!h.contains(R.target)&&!v.contains(R.target)&&t(3,d=!1)};function k(){_=this.offsetWidth,t(6,_)}function A(R){de[R?"unshift":"push"](()=>{h=R,t(4,h)})}function N(){p=this.offsetWidth,t(5,p)}const D=()=>{o.save.status!=0&&t(3,d=!d)};function I(R){de[R?"unshift":"push"](()=>{g=R,t(7,g)})}function S(){r=this.value,t(10,r),t(1,E),t(2,s),t(0,b)}const B=R=>{t(1,E=Ho(R.target.value,275))},H=R=>{o.save.status==0&&R.preventDefault(),cc(g,R.target.value,275)};function W(R){de[R?"unshift":"push"](()=>{x=R,t(8,x)})}const F=()=>{o.save.status!=0&&Y(ne,o.save.ongoing=!1,o)},M=()=>{o.save.status!=0&&w()};function K(R){b=R,t(0,b)}function te(R){d=R,t(3,d)}function ee(R){v=R,t(9,v)}const L=()=>t(1,E=null),z=()=>x.focus(),V=R=>{R.key=="Escape"&&(t(3,d=!1),h.focus())};return n.$$.update=()=>{n.$$.dirty[0]&1&&t(11,i=b[0]),n.$$.dirty[0]&1&&t(2,s=b[1].desc),n.$$.dirty[0]&6&&t(10,r=E??s)},[b,E,s,d,h,p,_,g,x,v,r,i,o,w,T,k,A,N,D,I,S,B,H,W,F,M,K,te,ee,L,z,V]}class pI extends De{constructor(e){super(),Te(this,e,hI,fI,ve,{},null,[-1,-1])}}function _I(n){let e,t,i,s,r,o,l,a,c;return{c(){e=C("div"),t=C("span"),t.textContent="ID:",i=O(),s=C("input"),y(s,"class","buildIDInput svelte-1ort6ez"),s.disabled=r=n[13].load.status==0,y(s,"type","text"),y(s,"placeholder","Example ID: -NDqeA1Scn0EAJcYWN3b"),y(s,"maxlength","25"),y(e,"class","buildIDCont svelte-1ort6ez")},m(u,f){q(u,e,f),m(e,t),m(e,i),m(e,s),n[24](s),In(s,n[11]),l=!0,a||(c=[U(s,"input",n[25]),U(s,"input",n[26]),U(s,"keydown",n[27])],a=!0)},p(u,f){(!l||f[0]&8192&&r!==(r=u[13].load.status==0))&&(s.disabled=r),f[0]&2048&&s.value!==u[11]&&In(s,u[11])},i(u){l||(u&&Ie(()=>{l&&(o||(o=ge(e,ft,{duration:150},!0)),o.run(1))}),l=!0)},o(u){u&&(o||(o=ge(e,ft,{duration:150},!1)),o.run(0)),l=!1},d(u){u&&$(e),n[24](null),u&&o&&o.end(),a=!1,we(c)}}}function mI(n){let e,t,i,s,r=n[10],o,l,a,c,u,f,d,h,p=uh(n);return{c(){e=C("div"),t=C("span"),t.textContent="Load:",i=O(),s=C("button"),p.c(),o=O(),l=C("iconify-icon"),$e(l,"icon","iconamoon:arrow-down-2-fill"),s.disabled=a=n[13].load.status==0,y(s,"class","promptDDButton svelte-1ort6ez"),Ie(()=>n[22].call(s)),ce(s,"ddOpen",n[9]),y(e,"class","chosenBuildCont svelte-1ort6ez")},m(_,g){q(_,e,g),m(e,t),m(e,i),m(e,s),p.m(s,null),m(s,o),m(s,l),n[21](s),c=fi(s,n[22].bind(s)),f=!0,d||(h=U(s,"click",n[23]),d=!0)},p(_,g){g[0]&1024&&ve(r,r=_[10])?(p.d(1),p=uh(_),p.c(),p.m(s,o)):p.p(_,g),(!f||g[0]&8192&&a!==(a=_[13].load.status==0))&&(s.disabled=a),(!f||g[0]&512)&&ce(s,"ddOpen",_[9])},i(_){f||(_&&Ie(()=>{f&&(u||(u=ge(e,ft,{duration:150},!0)),u.run(1))}),f=!0)},o(_){_&&(u||(u=ge(e,ft,{duration:150},!1)),u.run(0)),f=!1},d(_){_&&$(e),p.d(_),n[21](null),c(),_&&u&&u.end(),d=!1,h()}}}function uh(n){let e,t=(n[7]>n[6]*.7?n[10].slice(0,20)+"<b>...</b>":n[10])+"",i;return{c(){e=C("span"),Ie(()=>n[20].call(e))},m(s,r){q(s,e,r),e.innerHTML=t,i=fi(e,n[20].bind(e))},p(s,r){r[0]&1216&&t!==(t=(s[7]>s[6]*.7?s[10].slice(0,20)+"<b>...</b>":s[10])+"")&&(e.innerHTML=t)},d(s){s&&$(e),i()}}}function dh(n){let e,t,i,s,r;function o(u){n[30](u)}function l(u){n[31](u)}function a(u){n[32](u)}let c={};return n[3]!==void 0&&(c.chosenBuild=n[3]),n[9]!==void 0&&(c.ddOpen=n[9]),n[8]!==void 0&&(c.dropdown=n[8]),e=new Nu({props:c}),de.push(()=>Ke(e,"chosenBuild",o)),de.push(()=>Ke(e,"ddOpen",l)),de.push(()=>Ke(e,"dropdown",a)),{c(){ae(e.$$.fragment)},m(u,f){oe(e,u,f),r=!0},p(u,f){const d={};!t&&f[0]&8&&(t=!0,d.chosenBuild=u[3],Ge(()=>t=!1)),!i&&f[0]&512&&(i=!0,d.ddOpen=u[9],Ge(()=>i=!1)),!s&&f[0]&256&&(s=!0,d.dropdown=u[8],Ge(()=>s=!1)),e.$set(d)},i(u){r||(j(e.$$.fragment,u),r=!0)},o(u){G(e.$$.fragment,u),r=!1},d(u){le(e,u)}}}function gI(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g,x,v,b,E,w,T,k,A,N,D,I,S,B,H,W,F,M,K,te;const ee=[mI,_I],L=[];function z(R,Q){return R[2]?0:1}v=z(n),b=L[v]=ee[v](n);let V=n[4]&&n[2]&&dh(n);return{c(){e=C("div"),t=C("span"),t.textContent="Load build via:",i=O(),s=C("div"),r=C("div"),o=C("button"),l=re("Online saves"),u=O(),f=C("div"),d=C("button"),h=re("Exported ID"),g=O(),x=C("div"),b.c(),E=O(),w=C("div"),T=C("div"),k=C("button"),A=re("CANCEL"),D=O(),I=C("div"),S=C("button"),B=re("LOAD"),W=O(),V&&V.c(),y(t,"class","svelte-1ort6ez"),y(o,"id",a=n[2]?"firstFocusable":""),o.disabled=c=n[13].load.status==0||!n[4]||!n[12],y(o,"class","svelte-1ort6ez"),ce(o,"chosen",n[2]),ce(o,"unavailable",!n[12]),y(r,"class","svelte-1ort6ez"),y(d,"id",p=n[2]?"":"firstFocusable"),d.disabled=_=n[13].load.status==0,y(d,"class","svelte-1ort6ez"),ce(d,"chosen",!n[2]),y(f,"class","svelte-1ort6ez"),y(s,"class","loadMethodRadio svelte-1ort6ez"),y(x,"class","loadMethodCont svelte-1ort6ez"),k.disabled=N=n[13].load.status==0,y(S,"id","lastFocusable"),S.disabled=H=n[13].load.status==0,y(w,"class","promptOptions svelte-1ort6ez"),y(e,"class","buildLoader svelte-1ort6ez")},m(R,Q){q(R,e,Q),m(e,t),m(e,i),m(e,s),m(s,r),m(r,o),m(o,l),m(s,u),m(s,f),m(f,d),m(d,h),m(e,g),m(e,x),L[v].m(x,null),m(e,E),m(e,w),m(w,T),m(T,k),m(k,A),n[28](k),m(w,D),m(w,I),m(I,S),m(S,B),m(e,W),V&&V.m(e,null),M=!0,K||(te=[U(window,"mousedown",n[15]),U(o,"click",n[16]),U(o,"keydown",n[17]),U(d,"click",n[18]),U(d,"keydown",n[19]),U(k,"click",n[29]),U(S,"keydown",Gt),U(S,"click",n[14]),U(e,"introstart",n[33]),U(e,"keydown",n[34])],K=!0)},p(R,Q){(!M||Q[0]&4&&a!==(a=R[2]?"firstFocusable":""))&&y(o,"id",a),(!M||Q[0]&12304&&c!==(c=R[13].load.status==0||!R[4]||!R[12]))&&(o.disabled=c),(!M||Q[0]&4)&&ce(o,"chosen",R[2]),(!M||Q[0]&4096)&&ce(o,"unavailable",!R[12]),(!M||Q[0]&4&&p!==(p=R[2]?"":"firstFocusable"))&&y(d,"id",p),(!M||Q[0]&8192&&_!==(_=R[13].load.status==0))&&(d.disabled=_),(!M||Q[0]&4)&&ce(d,"chosen",!R[2]);let pe=v;v=z(R),v===pe?L[v].p(R,Q):(Je(),G(L[pe],1,1,()=>{L[pe]=null}),Ze(),b=L[v],b?b.p(R,Q):(b=L[v]=ee[v](R),b.c()),j(b,1),b.m(x,null)),(!M||Q[0]&8192&&N!==(N=R[13].load.status==0))&&(k.disabled=N),(!M||Q[0]&8192&&H!==(H=R[13].load.status==0))&&(S.disabled=H),R[4]&&R[2]?V?(V.p(R,Q),Q[0]&20&&j(V,1)):(V=dh(R),V.c(),j(V,1),V.m(e,null)):V&&(Je(),G(V,1,1,()=>{V=null}),Ze())},i(R){M||(j(b),j(V),R&&Ie(()=>{M&&(F||(F=ge(e,Qe,{duration:250},!0)),F.run(1))}),M=!0)},o(R){G(b),G(V),R&&(F||(F=ge(e,Qe,{duration:250},!1)),F.run(0)),M=!1},d(R){R&&$(e),L[v].d(),n[28](null),V&&V.d(),R&&F&&F.end(),K=!1,we(te)}}}function vI(n,e,t){let i,s,r,o;J(n,go,Q=>t(4,i=Q)),J(n,dn,Q=>t(35,s=Q)),J(n,ni,Q=>t(12,r=Q)),J(n,ne,Q=>t(13,o=Q));const l=wn();let a,c,u,f,d,h,p=r,_=!1,g,x,v="";function b(){if(!p&&!v.startsWith("-")){Y(ne,o.load.status=-1,o),Y(ne,o.message="invalid_id",o);return}if(p){let Q=s[Object.keys(s).find(pe=>pe===x)];l("buildLoad",{build:Q,id:Q.id})}else{let Q=Su(Rn(Ss,"builds"),Iu()),pe=0;Y(ne,o.load.status=0,o),wu(Q).then(me=>{for(let fe in me.val()){if(fe===v){console.log(me.val()[fe]),l("buildLoad",{build:me.val()[fe],id:fe});break}else pe==Object.keys(me.val()).length-1&&(Y(ne,o.load.status=-1,o),Y(ne,o.message="invalid_id",o));pe++}}).catch(()=>{Y(ne,o.load.status=-1,o),Y(ne,o.message="firebase_fail",o)})}}function E(){t(3,g=r?Object.entries(s)[0]:null),t(10,x=g!=null?g[0]:null)}const w=Q=>{a&&!a.contains(Q.target)&&h&&!h.contains(Q.target)&&t(9,_=!1)},T=()=>{o.load.status!=0&&i&&r&&t(2,p=!0)},k=Q=>{p&&jt(Q)},A=()=>{o.load.status!=0&&t(2,p=!1)},N=Q=>{p||jt(Q)};function D(){d=this.offsetWidth,t(7,d)}function I(Q){de[Q?"unshift":"push"](()=>{a=Q,t(0,a)})}function S(){f=this.offsetWidth,t(6,f)}const B=()=>{o.load.status!=0&&t(9,_=!_)};function H(Q){de[Q?"unshift":"push"](()=>{u=Q,t(1,u)})}function W(){v=this.value,t(11,v)}const F=Q=>{t(11,v=Ho(Q.target.value,25))},M=Q=>{o.load.status==0&&Q.preventDefault()};function K(Q){de[Q?"unshift":"push"](()=>{c=Q,t(5,c)})}const te=()=>{o.load.status!=0&&Y(ne,o.load.ongoing=!1,o)};function ee(Q){g=Q,t(3,g)}function L(Q){_=Q,t(9,_)}function z(Q){h=Q,t(8,h)}const V=()=>c.focus(),R=Q=>{Q.key=="Escape"&&(t(9,_=!1),a.focus())};return n.$$.update=()=>{n.$$.dirty[0]&16&&i&&E(),n.$$.dirty[0]&7&&setTimeout(p?()=>{E(),a.focus()}:()=>u.focus()),n.$$.dirty[0]&8&&t(10,x=g!=null?g[0]:null)},[a,u,p,g,i,c,f,d,h,_,x,v,r,o,b,w,T,k,A,N,D,I,S,B,H,W,F,M,K,te,ee,L,z,V,R]}class bI extends De{constructor(e){super(),Te(this,e,vI,gI,ve,{},null,[-1,-1])}}function fh(n){let e,t=(n[3]>n[4]*.8?n[8].slice(0,20)+"<b>...</b>":n[8])+"",i;return{c(){e=C("span"),Ie(()=>n[12].call(e))},m(s,r){q(s,e,r),e.innerHTML=t,i=fi(e,n[12].bind(e))},p(s,r){r&280&&t!==(t=(s[3]>s[4]*.8?s[8].slice(0,20)+"<b>...</b>":s[8])+"")&&(e.innerHTML=t)},d(s){s&&$(e),i()}}}function yI(n){let e,t,i,s,r,o=n[8],l,a,c,u,f,d,h,p,_,g,x,v,b,E,w,T,k,A,N,D,I,S,B,H,W,F,M,K,te=fh(n);d=new qt({props:{text:"I'm aware that this action is irreversible and want to erase this build from the database."}}),d.$on("toggle",n[16]);function ee(R){n[21](R)}function L(R){n[22](R)}function z(R){n[23](R)}let V={};return n[0]!==void 0&&(V.chosenBuild=n[0]),n[6]!==void 0&&(V.ddOpen=n[6]),n[5]!==void 0&&(V.dropdown=n[5]),I=new Nu({props:V}),de.push(()=>Ke(I,"chosenBuild",ee)),de.push(()=>Ke(I,"ddOpen",L)),de.push(()=>Ke(I,"dropdown",z)),{c(){e=C("div"),t=C("div"),i=C("span"),i.textContent="Delete:",s=O(),r=C("button"),te.c(),l=O(),a=C("iconify-icon"),f=O(),ae(d.$$.fragment),h=O(),p=C("div"),_=C("div"),g=C("button"),x=re("CANCEL"),E=O(),w=C("div"),T=C("button"),k=re("DELETE"),D=O(),ae(I.$$.fragment),$e(a,"icon","iconamoon:arrow-down-2-fill"),y(r,"class","promptDDButton svelte-1nywh"),y(r,"id","firstFocusable"),r.disabled=c=n[9].delete.status==0,Ie(()=>n[14].call(r)),ce(r,"ddOpen",n[6]),y(t,"class","chosenBuildCont"),y(g,"id",v=n[7]?"":"lastFocusable"),g.disabled=b=n[9].delete.status==0,T.disabled=A=!n[7]||n[9].delete.status==0,y(T,"id",N=n[7]?"lastFocusable":""),ce(T,"unavailable",!n[7]),y(p,"class","promptOptions svelte-1nywh"),y(e,"class","buildDeleter svelte-1nywh")},m(R,Q){q(R,e,Q),m(e,t),m(t,i),m(t,s),m(t,r),te.m(r,null),m(r,l),m(r,a),n[13](r),u=fi(r,n[14].bind(r)),m(e,f),oe(d,e,null),m(e,h),m(e,p),m(p,_),m(_,g),m(g,x),n[17](g),m(p,E),m(p,w),m(w,T),m(T,k),m(e,D),oe(I,e,null),F=!0,M||(K=[U(window,"mousedown",n[11]),U(r,"click",n[15]),U(r,"keydown",jt),U(g,"click",n[18]),U(g,"keydown",n[19]),U(T,"click",n[20]),U(T,"keydown",Gt),U(e,"introstart",n[24]),U(e,"keydown",n[25])],M=!0)},p(R,[Q]){Q&256&&ve(o,o=R[8])?(te.d(1),te=fh(R),te.c(),te.m(r,l)):te.p(R,Q),(!F||Q&512&&c!==(c=R[9].delete.status==0))&&(r.disabled=c),(!F||Q&64)&&ce(r,"ddOpen",R[6]),(!F||Q&128&&v!==(v=R[7]?"":"lastFocusable"))&&y(g,"id",v),(!F||Q&512&&b!==(b=R[9].delete.status==0))&&(g.disabled=b),(!F||Q&640&&A!==(A=!R[7]||R[9].delete.status==0))&&(T.disabled=A),(!F||Q&128&&N!==(N=R[7]?"lastFocusable":""))&&y(T,"id",N),(!F||Q&128)&&ce(T,"unavailable",!R[7]);const pe={};!S&&Q&1&&(S=!0,pe.chosenBuild=R[0],Ge(()=>S=!1)),!B&&Q&64&&(B=!0,pe.ddOpen=R[6],Ge(()=>B=!1)),!H&&Q&32&&(H=!0,pe.dropdown=R[5],Ge(()=>H=!1)),I.$set(pe)},i(R){F||(j(d.$$.fragment,R),j(I.$$.fragment,R),R&&Ie(()=>{F&&(W||(W=ge(e,Qe,{duration:250},!0)),W.run(1))}),F=!0)},o(R){G(d.$$.fragment,R),G(I.$$.fragment,R),R&&(W||(W=ge(e,Qe,{duration:250},!1)),W.run(0)),F=!1},d(R){R&&$(e),te.d(R),n[13](null),u(),le(d),n[17](null),le(I),R&&W&&W.end(),M=!1,we(K)}}}function xI(n,e,t){let i,s,r,o,l;J(n,ne,F=>t(9,s=F)),J(n,dn,F=>t(26,r=F)),J(n,ln,F=>t(27,o=F)),J(n,vs,F=>t(28,l=F));let a,c,u,f,d,h=!1,p=Object.entries(r)[0],_=!1;function g(){Y(ne,s.delete.status=0,s);let F=p[1].id;xf(Rn(gl,`${l}/siteData/calculator/builds/${F}`)),xf(Vn(Rn(Ss),`builds/${F}`)).then(()=>{Y(ne,s.delete.status=1,s),o&&F==o.id&&Y(ln,o=null,o);let M={...r};delete M[i],Tu(),dn.update(()=>M)}).catch(M=>{Y(ne,s.delete.status=-1,s),Y(ne,s.message="firebase_fail",s)})}const x=F=>{!c.contains(F.target)&&!d.contains(F.target)&&t(6,h=!1)};function v(){u=this.offsetWidth,t(3,u)}function b(F){de[F?"unshift":"push"](()=>{c=F,t(2,c)})}function E(){f=this.offsetWidth,t(4,f)}const w=()=>{s.delete.status!=0&&t(6,h=!h)},T=F=>t(7,_=F.detail);function k(F){de[F?"unshift":"push"](()=>{a=F,t(1,a)})}const A=()=>{s.delete.status!=0&&Y(ne,s.delete.ongoing=!1,s)},N=F=>{_||Gt(F)},D=()=>{_&&s.delete.status!=0&&g()};function I(F){p=F,t(0,p)}function S(F){h=F,t(6,h)}function B(F){d=F,t(5,d)}const H=()=>a.focus(),W=F=>{F.key=="Escape"&&(t(6,h=!1),c.focus())};return n.$$.update=()=>{n.$$.dirty&1&&t(8,i=p[0])},[p,a,c,u,f,d,h,_,i,s,g,x,v,b,E,w,T,k,A,N,D,I,S,B,H,W]}class CI extends De{constructor(e){super(),Te(this,e,xI,yI,ve,{})}}function EI(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p;return{c(){e=C("div"),t=C("div"),i=C("button"),i.innerHTML='<iconify-icon icon="tabler:coins" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Build costs</span>',s=O(),r=C("div"),o=C("button"),o.innerHTML='<iconify-icon icon="codicon:sparkle-filled" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Add bonuses</span>',l=O(),a=C("div"),c=C("button"),c.innerHTML='<iconify-icon icon="fa-solid:random" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Randomize build</span>',u=O(),f=C("div"),d=C("button"),d.innerHTML='<iconify-icon icon="fe:picture" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Screenshot mode</span>',y(i,"class","svelte-1o20s8w"),y(t,"class","svelte-1o20s8w"),y(o,"class","svelte-1o20s8w"),y(r,"class","svelte-1o20s8w"),y(c,"class","svelte-1o20s8w"),y(a,"id","randomize"),y(a,"class","svelte-1o20s8w"),y(d,"class","svelte-1o20s8w"),y(f,"id","screenshot"),y(f,"class","svelte-1o20s8w"),y(e,"class","sideFeatures svelte-1o20s8w")},m(_,g){q(_,e,g),m(e,t),m(t,i),m(e,s),m(e,r),m(r,o),m(e,l),m(e,a),m(a,c),m(e,u),m(e,f),m(f,d),h||(p=[U(i,"click",n[2]),U(o,"click",n[3]),U(c,"click",n[4]),U(d,"click",n[5])],h=!0)},p:ie,i:ie,o:ie,d(_){_&&$(e),h=!1,we(p)}}}function wI(n,e,t){let i,s;return J(n,Bi,c=>t(0,i=c)),J(n,ne,c=>t(1,s=c)),[i,s,c=>{Ln(c),i||Y(ne,s.costs.ongoing=!0,s)},c=>{Ln(c),i||Y(ne,s.bonus.ongoing=!0,s)},c=>{Ln(c),i||Y(ne,s.randomize.ongoing=!0,s)},()=>{i||(Y(ne,s.screenshot.ongoing=!0,s),setTimeout(()=>Y(ne,s.screenshot.ongoing=!1,s),3500))}]}class kI extends De{constructor(e){super(),Te(this,e,wI,EI,ve,{})}}function hh(n,e,t){const i=n.slice();i[11]=e[t];const s=i[1].bonuses[0].name==i[11].name;return i[12]=s,i}function ph(n){let e,t,i,s,r,o,l,a,c,u,f,d;function h(..._){return n[5](n[12],..._)}function p(..._){return n[6](n[11],..._)}return a=new qt({props:{text:n[11].name,checked:n[2][n[11].name]}}),a.$on("toggle",p),{c(){e=C("div"),t=C("a"),i=C("img"),l=O(),ae(a.$$.fragment),c=O(),mt(i.src,s=n[11].image)||y(i,"src",s),y(i,"alt",""),y(i,"class","svelte-1i20pwb"),y(t,"id",r=n[12]?"firstFocusable":""),y(t,"href",o=n[11].link),y(t,"target","_blank"),y(t,"class","svelte-1i20pwb"),y(e,"class","svelte-1i20pwb")},m(_,g){q(_,e,g),m(e,t),m(t,i),m(e,l),oe(a,e,null),m(e,c),u=!0,f||(d=U(t,"keydown",h),f=!0)},p(_,g){n=_,(!u||g&2&&!mt(i.src,s=n[11].image))&&y(i,"src",s),(!u||g&2&&r!==(r=n[12]?"firstFocusable":""))&&y(t,"id",r),(!u||g&2&&o!==(o=n[11].link))&&y(t,"href",o);const x={};g&2&&(x.text=n[11].name),g&6&&(x.checked=n[2][n[11].name]),a.$set(x)},i(_){u||(j(a.$$.fragment,_),u=!0)},o(_){G(a.$$.fragment,_),u=!1},d(_){_&&$(e),le(a),f=!1,d()}}}function II(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p=Ue(n[1].bonuses),_=[];for(let x=0;x<p.length;x+=1)_[x]=ph(hh(n,p,x));const g=x=>G(_[x],1,1,()=>{_[x]=null});return{c(){e=C("div"),t=C("div");for(let x=0;x<_.length;x+=1)_[x].c();i=O(),s=C("div"),r=C("div"),o=C("button"),o.textContent="CLEAR",l=O(),a=C("div"),c=C("button"),c.textContent="OK",y(t,"class","bonusesCont svelte-1i20pwb"),y(c,"id","lastFocusable"),y(s,"class","promptOptions svelte-1i20pwb"),y(e,"class","bonusChooser svelte-1i20pwb")},m(x,v){q(x,e,v),m(e,t);for(let b=0;b<_.length;b+=1)_[b]&&_[b].m(t,null);m(e,i),m(e,s),m(s,r),m(r,o),m(s,l),m(s,a),m(a,c),n[8](c),f=!0,d||(h=[U(o,"click",n[7]),U(c,"click",n[9]),U(c,"keydown",Gt),U(e,"introstart",n[10])],d=!0)},p(x,[v]){if(v&14){p=Ue(x[1].bonuses);let b;for(b=0;b<p.length;b+=1){const E=hh(x,p,b);_[b]?(_[b].p(E,v),j(_[b],1)):(_[b]=ph(E),_[b].c(),j(_[b],1),_[b].m(t,null))}for(Je(),b=p.length;b<_.length;b+=1)g(b);Ze()}},i(x){if(!f){for(let v=0;v<p.length;v+=1)j(_[v]);x&&Ie(()=>{f&&(u||(u=ge(e,Qe,{duration:250},!0)),u.run(1))}),f=!0}},o(x){_=_.filter(Boolean);for(let v=0;v<_.length;v+=1)G(_[v]);x&&(u||(u=ge(e,Qe,{duration:250},!1)),u.run(0)),f=!1},d(x){x&&$(e),Lt(_,x),n[8](null),x&&u&&u.end(),d=!1,we(h)}}}function SI(n,e,t){let i,s,r,o;J(n,xn,p=>t(1,i=p)),J(n,cs,p=>t(2,s=p)),J(n,Qt,p=>t(3,r=p)),J(n,ne,p=>t(4,o=p));let l;const a=(p,_)=>{p&&jt(_)},c=(p,_)=>{Y(cs,s[p.name]=_.detail,s);for(let g in r)_.detail?Y(Qt,r[g]+=p.stats[g],r):Y(Qt,r[g]-=p.stats[g],r),Y(Qt,r[g]=Math.round(r[g]*10)/10,r)},u=()=>{for(let p in s){if(!s[p])continue;let _=i.bonuses.find(g=>g.name==p);Y(cs,s[p]=!1,s);for(let g in r)Y(Qt,r[g]-=_.stats[g],r),Y(Qt,r[g]=Math.round(r[g]*10)/10,r)}};function f(p){de[p?"unshift":"push"](()=>{l=p,t(0,l)})}return[l,i,s,r,o,a,c,u,f,()=>Y(ne,o.bonus.ongoing=!1,o),()=>l.focus()]}class AI extends De{constructor(e){super(),Te(this,e,SI,II,ve,{})}}function TI(n){let e;return{c(){e=C("span"),e.textContent=`Includes equipment such as ore-based armor and their variants,\r
            ore-based weapons, and shoes with no special stats`,y(e,"slot","tooltip"),y(e,"class","tooltip svelte-21yikp"),y(e,"id","right")},m(t,i){q(t,e,i)},p:ie,d(t){t&&$(e)}}}function DI(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g,x,v,b,E,w,T,k,A,N,D;return s=new qt({props:{text:"Force Mushroom Parasol",checked:n[0].parasol,first:!0}}),s.$on("toggle",n[5]),o=new qt({props:{text:"Randomize armor",checked:n[0].armor}}),o.$on("toggle",n[6]),a=new qt({props:{text:"Randomize gear",checked:n[0].gear}}),a.$on("toggle",n[7]),u=new qt({props:{text:"Allow 'basic' equipment",checked:n[0].basic,$$slots:{tooltip:[TI]},$$scope:{ctx:n}}}),u.$on("toggle",n[8]),{c(){e=C("div"),t=C("span"),t.textContent="Randomize your build",i=O(),ae(s.$$.fragment),r=O(),ae(o.$$.fragment),l=O(),ae(a.$$.fragment),c=O(),ae(u.$$.fragment),f=O(),d=C("div"),h=C("div"),p=C("button"),_=re("CANCEL"),x=O(),v=C("div"),b=C("button"),E=re("ROLL THE DICE"),y(t,"class","svelte-21yikp"),y(p,"id",g=n[2]?"":"lastFocusable"),y(b,"id",w=n[2]?"lastFocusable":""),b.disabled=T=!n[2],y(d,"class","promptOptions"),y(e,"class","buildRandomizer svelte-21yikp")},m(I,S){q(I,e,S),m(e,t),m(e,i),oe(s,e,null),m(e,r),oe(o,e,null),m(e,l),oe(a,e,null),m(e,c),oe(u,e,null),m(e,f),m(e,d),m(d,h),m(h,p),m(p,_),n[9](p),m(d,x),m(d,v),m(v,b),m(b,E),A=!0,N||(D=[U(p,"click",n[10]),U(p,"keydown",n[11]),U(b,"click",n[12]),U(b,"keydown",n[13]),U(e,"introstart",n[14])],N=!0)},p(I,[S]){const B={};S&1&&(B.checked=I[0].parasol),s.$set(B);const H={};S&1&&(H.checked=I[0].armor),o.$set(H);const W={};S&1&&(W.checked=I[0].gear),a.$set(W);const F={};S&1&&(F.checked=I[0].basic),S&16777216&&(F.$$scope={dirty:S,ctx:I}),u.$set(F),(!A||S&4&&g!==(g=I[2]?"":"lastFocusable"))&&y(p,"id",g),(!A||S&4&&w!==(w=I[2]?"lastFocusable":""))&&y(b,"id",w),(!A||S&4&&T!==(T=!I[2]))&&(b.disabled=T)},i(I){A||(j(s.$$.fragment,I),j(o.$$.fragment,I),j(a.$$.fragment,I),j(u.$$.fragment,I),I&&Ie(()=>{A&&(k||(k=ge(e,Qe,{duration:250},!0)),k.run(1))}),A=!0)},o(I){G(s.$$.fragment,I),G(o.$$.fragment,I),G(a.$$.fragment,I),G(u.$$.fragment,I),I&&(k||(k=ge(e,Qe,{duration:250},!1)),k.run(0)),A=!1},d(I){I&&$(e),le(s),le(o),le(a),le(u),n[9](null),I&&k&&k.end(),N=!1,we(D)}}}function NI(n,e,t){let i,s,r,o,l,a,c,u;J(n,Gs,I=>t(0,s=I)),J(n,ne,I=>t(3,r=I)),J(n,xn,I=>t(15,o=I)),J(n,ys,I=>t(16,l=I)),J(n,Bn,I=>t(17,a=I)),J(n,bs,I=>t(18,c=I)),J(n,Cn,I=>t(19,u=I));let f,d=["Bronze","Iron","Cobalt","Titanium","Gold","Onyx"],h=["Hardened","Royal"],p=["Black","Brown","Green","Red","White","Dark","Golden","Grey","Phantom"];function _(){if(s.armor){for(let I of As){let S=u[I]||vl;S.name&&c[I][S.name].querySelector("button").click()}setTimeout(()=>{for(let I of As)(function S(){let B=Math.floor(Math.random()*o[I].length);!c[I][o[I][B].name].classList.contains("selectedItem")&&(s.basic||!s.basic&&!g(o[I][B].name))?c[I][o[I][B].name].querySelector("button").click():S()})()})}if(s.gear){for(let I in a){let S=a[I]||bl;S.name&&l[I][S.name].querySelector("button").click()}setTimeout(()=>{let I=!1,S=Hi.length,B=Hi.length,H=[];for(let W in a)H.push(a[W].name);(function W(){setTimeout(()=>{let F=Math.floor(Math.random()*S);(function M(){let K=Math.floor(Math.random()*o.gear.length);!H.includes(o.gear[K].name)&&!l[B][o.gear[K].name].classList.contains("switchable")&&(!I||I&&K!=0)&&(s.basic||!s.basic&&!g(o.gear[K].name))?(l[B][o.gear[!I&&s.parasol&&!F?0:K].name].querySelector("button").click(),!I&&!F?I=!0:I||S--):M()})(),--B&&W()},25)})()},50)}Y(ne,r.randomize.ongoing=!1,r)}function g(I){let S=!1,B=I.split(" ");return S=d.includes(B[0])||h.includes(B[0])||I=="Mining Helmet"||p.includes(B[0]),S}const x=I=>Y(Gs,s.parasol=I.detail,s),v=I=>Y(Gs,s.armor=I.detail,s),b=I=>Y(Gs,s.gear=I.detail,s),E=I=>Y(Gs,s.basic=I.detail,s);function w(I){de[I?"unshift":"push"](()=>{f=I,t(1,f)})}const T=()=>Y(ne,r.randomize.ongoing=!1,r),k=I=>{i||Gt(I)},A=()=>{i&&_()},N=I=>{i&&Gt(I)},D=()=>f.focus();return n.$$.update=()=>{n.$$.dirty&1&&t(2,i=s.armor||s.gear)},[s,f,i,r,_,x,v,b,E,w,T,k,A,N,D]}class RI extends De{constructor(e){super(),Te(this,e,NI,DI,ve,{})}}function _h(n,e,t){const i=n.slice();return i[5]=e[t],i}function BI(n){let e,t=Ue(n[1]),i=[];for(let s=0;s<t.length;s+=1)i[s]=mh(_h(n,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=Dt()},m(s,r){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(s,r);q(s,e,r)},p(s,r){if(r&2){t=Ue(s[1]);let o;for(o=0;o<t.length;o+=1){const l=_h(s,t,o);i[o]?i[o].p(l,r):(i[o]=mh(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&$(e),Lt(i,s)}}}function FI(n){let e,t,i;return{c(){e=C("span"),t=re("— "),i=re(n[1]),y(e,"id","info"),y(e,"class","svelte-155nax9")},m(s,r){q(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&Se(i,s[1])},d(s){s&&$(e)}}}function mh(n){let e,t,i=n[5]+"",s;return{c(){e=C("span"),t=re("— "),s=re(i),y(e,"id","info"),y(e,"class","svelte-155nax9")},m(r,o){q(r,e,o),m(e,t),m(e,s)},p(r,o){o&2&&i!==(i=r[5]+"")&&Se(s,i)},d(r){r&&$(e)}}}function OI(n){let e,t,i,s,r,o,l;function a(f,d){return typeof f[1]=="string"?FI:BI}let c=a(n),u=c(n);return{c(){e=C("li"),t=C("span"),i=re("v"),s=re(n[0]),r=O(),o=C("i"),o.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":ig[n[2][0]%10])+", 20"+n[2][2]}`,l=O(),u.c(),y(t,"id","version"),y(t,"class","svelte-155nax9"),y(o,"id","date"),y(o,"class","svelte-155nax9"),y(e,"class","svelte-155nax9")},m(f,d){q(f,e,d),m(e,t),m(t,i),m(t,s),m(e,r),m(e,o),m(e,l),u.m(e,null)},p(f,[d]){d&1&&Se(s,f[0]),c===(c=a(f))&&u?u.p(f,d):(u.d(1),u=c(f),u&&(u.c(),u.m(e,null)))},i:ie,o:ie,d(f){f&&$(e),u.d()}}}function PI(n,e,t){let{version:i,date:s,text:r}=e,o=s.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,i=a.version),"date"in a&&t(4,s=a.date),"text"in a&&t(1,r=a.text)},[i,r,o,l,s]}class yt extends De{constructor(e){super(),Te(this,e,PI,OI,ve,{version:0,date:4,text:1})}}function MI(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g,x,v,b,E,w,T,k,A,N,D,I,S,B,H,W,F,M,K,te,ee,L,z,V,R,Q,pe,me,fe,Be,Ne,Fe,Ae,_e,be,rt,St,Ft;return r=new yt({props:{version:"3.27.0",date:"7/6/25",text:["Implemented data synchronization process","Restricted build features to those with a user account"]}}),l=new yt({props:{version:"3.26.8",date:"10/3/25",text:"Removed current gear-related mutual exclusions (salamanders)"}}),c=new yt({props:{version:"3.26.7",date:"5/4/24",text:["Added special ability cooldown stat to gears","Fixed page size and zoom occasionally breaking"]}}),f=new yt({props:{version:"3.26.6",date:"28/3/24",text:"Added 'support me' link in the case of any kind act"}}),h=new yt({props:{version:"3.26.5",date:"22/3/24",text:"Added policy information"}}),_=new yt({props:{version:"3.26.4",date:"21/3/24",text:["Added feature to copy stats as text","Fixed detailed view prompt activating while scrolling"]}}),x=new yt({props:{version:"3.26.3",date:"24/2/24",text:"Reimplemented 'Strict' filter type in search options"}}),b=new yt({props:{version:"3.26.2",date:"22/2/24",text:"Fixed build randomizer not working properly"}}),w=new yt({props:{version:"3.26.1",date:"22/2/24",text:"Holding Shift and interacting with a dropdown item or simply holding down on it activates detailed view prompt"}}),k=new yt({props:{version:"3.26.0",date:"21/2/24",text:"Added detailed view prompt to armor and gear whenever the selected item's icon is clicked"}}),N=new yt({props:{version:"3.25.9",date:"14/1/24",text:"Added build costs visibility while 'screenshot mode' is active"}}),I=new yt({props:{version:"3.25.8",date:"11/1/24",text:"Fixed mutually exclusive gear staying disabled when deselecting the selected item"}}),B=new yt({props:{version:"3.25.7",date:"9/1/24",text:["Enabled 'unsaved changes' prompt to appear before leaving site when certain conditions are met","Fixed dropdowns blocking interactions behind them for a short period after being closed","Fixed dropdown sort incorrectly defaulting to the last sorted list in some cases"]}}),W=new yt({props:{version:"3.25.6",date:"7/1/24",text:"Fixed armor filter not working properly when 'Exclusive' filter type and 'No Stats' option were selected"}}),M=new yt({props:{version:"3.25.5",date:"6/1/24",text:["Fixed issue with switching gear slots while full weapon view was on","Tools are now selectable even if full weapon view is on"]}}),te=new yt({props:{version:"3.25.4",date:"5/1/24",text:'Fixed crash caused by using the build randomizer while "Force Mushroom Parasol" option was on'}}),L=new yt({props:{version:"3.25.3",date:"5/1/24",text:["Added feature to swap gear slots when clicking on an already selected gear item","Added visual cues to both deselecting and swapping options for dropdown items"]}}),V=new yt({props:{version:"3.25.2",date:"3/1/24",text:["Replaced 'Strict' filter type with 'Exclusive' filter type in search options of dropdowns","Added icons to resource links and credits"]}}),Q=new yt({props:{version:"3.25.1",date:"2/1/24",text:`"Allow 'basic' equipment" option is no longer restricted when "Randomize gear" option isn't selected in the build randomizer`}}),me=new yt({props:{version:"3.25.0",date:"2/1/24",text:["Added 'Build Costs' feature","Removed spectacles from 'basic' equipment pool in the build randomizer"]}}),Be=new yt({props:{version:"3.24.5",date:"31/12/23",text:"v3 Release"}}),{c(){e=C("div"),t=C("span"),t.textContent="Changelog",i=O(),s=C("ul"),ae(r.$$.fragment),o=O(),ae(l.$$.fragment),a=O(),ae(c.$$.fragment),u=O(),ae(f.$$.fragment),d=O(),ae(h.$$.fragment),p=O(),ae(_.$$.fragment),g=O(),ae(x.$$.fragment),v=O(),ae(b.$$.fragment),E=O(),ae(w.$$.fragment),T=O(),ae(k.$$.fragment),A=O(),ae(N.$$.fragment),D=O(),ae(I.$$.fragment),S=O(),ae(B.$$.fragment),H=O(),ae(W.$$.fragment),F=O(),ae(M.$$.fragment),K=O(),ae(te.$$.fragment),ee=O(),ae(L.$$.fragment),z=O(),ae(V.$$.fragment),R=O(),ae(Q.$$.fragment),pe=O(),ae(me.$$.fragment),fe=O(),ae(Be.$$.fragment),Ne=O(),Fe=C("div"),Ae=C("div"),_e=C("button"),_e.textContent="OK",y(t,"id","title"),y(s,"id","contents"),y(s,"class","svelte-15kc2i1"),y(_e,"id","firstFocusable lastFocusable"),y(Fe,"class","promptOptions svelte-15kc2i1"),y(e,"class","infoPrompt svelte-15kc2i1")},m(he,Kt){q(he,e,Kt),m(e,t),m(e,i),m(e,s),oe(r,s,null),m(s,o),oe(l,s,null),m(s,a),oe(c,s,null),m(s,u),oe(f,s,null),m(s,d),oe(h,s,null),m(s,p),oe(_,s,null),m(s,g),oe(x,s,null),m(s,v),oe(b,s,null),m(s,E),oe(w,s,null),m(s,T),oe(k,s,null),m(s,A),oe(N,s,null),m(s,D),oe(I,s,null),m(s,S),oe(B,s,null),m(s,H),oe(W,s,null),m(s,F),oe(M,s,null),m(s,K),oe(te,s,null),m(s,ee),oe(L,s,null),m(s,z),oe(V,s,null),m(s,R),oe(Q,s,null),m(s,pe),oe(me,s,null),m(s,fe),oe(Be,s,null),m(e,Ne),m(e,Fe),m(Fe,Ae),m(Ae,_e),n[2](_e),rt=!0,St||(Ft=[U(_e,"click",n[3]),U(_e,"keydown",n[4]),U(e,"introstart",n[5])],St=!0)},p:ie,i(he){rt||(j(r.$$.fragment,he),j(l.$$.fragment,he),j(c.$$.fragment,he),j(f.$$.fragment,he),j(h.$$.fragment,he),j(_.$$.fragment,he),j(x.$$.fragment,he),j(b.$$.fragment,he),j(w.$$.fragment,he),j(k.$$.fragment,he),j(N.$$.fragment,he),j(I.$$.fragment,he),j(B.$$.fragment,he),j(W.$$.fragment,he),j(M.$$.fragment,he),j(te.$$.fragment,he),j(L.$$.fragment,he),j(V.$$.fragment,he),j(Q.$$.fragment,he),j(me.$$.fragment,he),j(Be.$$.fragment,he),he&&Ie(()=>{rt&&(be||(be=ge(e,Qe,{duration:250},!0)),be.run(1))}),rt=!0)},o(he){G(r.$$.fragment,he),G(l.$$.fragment,he),G(c.$$.fragment,he),G(f.$$.fragment,he),G(h.$$.fragment,he),G(_.$$.fragment,he),G(x.$$.fragment,he),G(b.$$.fragment,he),G(w.$$.fragment,he),G(k.$$.fragment,he),G(N.$$.fragment,he),G(I.$$.fragment,he),G(B.$$.fragment,he),G(W.$$.fragment,he),G(M.$$.fragment,he),G(te.$$.fragment,he),G(L.$$.fragment,he),G(V.$$.fragment,he),G(Q.$$.fragment,he),G(me.$$.fragment,he),G(Be.$$.fragment,he),he&&(be||(be=ge(e,Qe,{duration:250},!1)),be.run(0)),rt=!1},d(he){he&&$(e),le(r),le(l),le(c),le(f),le(h),le(_),le(x),le(b),le(w),le(k),le(N),le(I),le(B),le(W),le(M),le(te),le(L),le(V),le(Q),le(me),le(Be),n[2](null),he&&be&&be.end(),St=!1,we(Ft)}}}function LI(n,e,t){let i;J(n,ne,c=>t(1,i=c));let s;function r(c){de[c?"unshift":"push"](()=>{s=c,t(0,s)})}return[s,i,r,()=>Y(ne,i.changelog.ongoing=!1,i),c=>{jt(c),Gt(c)},()=>s.focus()]}class $I extends De{constructor(e){super(),Te(this,e,LI,MI,ve,{})}}function HI(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g,x,v,b,E,w,T;return{c(){e=C("div"),t=C("span"),t.textContent="Resources",i=O(),s=C("ul"),r=C("li"),o=C("iconify-icon"),l=O(),a=C("a"),a.textContent="Fantastic Frontier Wiki",c=O(),u=C("li"),u.innerHTML='<iconify-icon icon="ic:baseline-discord" class="svelte-1d9mkog"></iconify-icon> <a href="https://discord.gg/ff" target="_blank" class="svelte-1d9mkog">Fantastic Frontier Discord Server</a>',f=O(),d=C("li"),d.innerHTML='<iconify-icon icon="simple-icons:googledocs" class="svelte-1d9mkog"></iconify-icon> <a href="https://docs.google.com/document/d/1H9HXoExCDVfXx15LQ4Te-2tTjrLFB-XCbMmx44Ynld4/edit" target="_blank" class="svelte-1d9mkog">Fantastic Frontier Build List</a>',h=O(),p=C("li"),p.innerHTML='<iconify-icon icon="simple-icons:googledocs" class="svelte-1d9mkog"></iconify-icon> <a href="https://docs.google.com/document/d/15vwSRojTqZ8LI09Wq4dvGF1kSTPmH2_gECQvwlSFki8/edit" target="_blank" class="svelte-1d9mkog">Fantastic Frontier Max Stat List</a>',_=O(),g=C("div"),x=C("div"),v=C("button"),v.textContent="OK",y(t,"id","title"),$e(o,"icon","simple-icons:fandom"),$e(o,"class","svelte-1d9mkog"),y(a,"id","firstFocusable"),y(a,"href","https://fantastic-frontier-roblox.fandom.com/wiki/Fantastic_Frontier_-_Roblox_Wiki"),y(a,"target","_blank"),y(a,"class","svelte-1d9mkog"),y(r,"class","svelte-1d9mkog"),y(u,"class","svelte-1d9mkog"),y(d,"class","svelte-1d9mkog"),y(p,"class","svelte-1d9mkog"),y(s,"class","svelte-1d9mkog"),y(v,"id","lastFocusable"),y(g,"class","promptOptions"),y(e,"class","infoPrompt")},m(k,A){q(k,e,A),m(e,t),m(e,i),m(e,s),m(s,r),m(r,o),m(r,l),m(r,a),m(s,c),m(s,u),m(s,f),m(s,d),m(s,h),m(s,p),m(e,_),m(e,g),m(g,x),m(x,v),n[2](v),E=!0,w||(T=[U(a,"keydown",jt),U(v,"click",n[3]),U(v,"keydown",Gt),U(e,"introstart",n[4])],w=!0)},p:ie,i(k){E||(k&&Ie(()=>{E&&(b||(b=ge(e,Qe,{duration:250},!0)),b.run(1))}),E=!0)},o(k){k&&(b||(b=ge(e,Qe,{duration:250},!1)),b.run(0)),E=!1},d(k){k&&$(e),n[2](null),k&&b&&b.end(),w=!1,we(T)}}}function UI(n,e,t){let i;J(n,ne,a=>t(1,i=a));let s;function r(a){de[a?"unshift":"push"](()=>{s=a,t(0,s)})}return[s,i,r,()=>Y(ne,i.resources.ongoing=!1,i),()=>s.focus()]}class WI extends De{constructor(e){super(),Te(this,e,UI,HI,ve,{})}}function gh(n,e,t){const i=n.slice();return i[7]=e[t],i}function vh(n,e,t){const i=n.slice();return i[10]=e[t],i}function bh(n){let e,t,i,s,r,o,l,a=n[1][n[7]][n[10]].toLocaleString()+" Gold",c,u;return{c(){e=C("div"),t=C("span"),t.textContent=`${n[10].charAt(0).toUpperCase()+n[10].slice(1)+":"}`,i=O(),s=C("img"),o=O(),l=C("span"),c=re(a),u=O(),y(t,"id","costTypeName"),y(t,"class","svelte-1u2pv9q"),mt(s.src,r="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||y(s,"src",r),y(s,"alt",""),y(s,"class","svelte-1u2pv9q"),y(e,"class","svelte-1u2pv9q")},m(f,d){q(f,e,d),m(e,t),m(e,i),m(e,s),m(e,o),m(e,l),m(l,c),m(e,u)},p(f,d){d&2&&a!==(a=f[1][f[7]][f[10]].toLocaleString()+" Gold")&&Se(c,a)},d(f){f&&$(e)}}}function yh(n){let e,t,i,s,r,o=Ue(["min","avg","max"]),l=[];for(let a=0;a<3;a+=1)l[a]=bh(vh(n,o,a));return{c(){e=C("div"),t=C("span"),t.textContent=`${n[7].charAt(0).toUpperCase()+n[7].slice(1)+" Costs"}`,i=O(),s=C("div");for(let a=0;a<3;a+=1)l[a].c();r=O(),y(t,"id","subtitle"),y(t,"class","svelte-1u2pv9q"),y(s,"class","costTypes svelte-1u2pv9q"),y(e,"class","costs svelte-1u2pv9q"),y(e,"id",n[7])},m(a,c){q(a,e,c),m(e,t),m(e,i),m(e,s);for(let u=0;u<3;u+=1)l[u]&&l[u].m(s,null);m(e,r)},p(a,c){if(c&2){o=Ue(["min","avg","max"]);let u;for(u=0;u<3;u+=1){const f=vh(a,o,u);l[u]?l[u].p(f,c):(l[u]=bh(f),l[u].c(),l[u].m(s,null))}for(;u<3;u+=1)l[u].d(1)}},d(a){a&&$(e),Lt(l,a)}}}function qI(n){let e,t,i,s,r,o,l,a,c,u,f=Ue(["armor","gear","total"]),d=[];for(let h=0;h<3;h+=1)d[h]=yh(gh(n,f,h));return{c(){e=C("div"),t=C("div");for(let h=0;h<3;h+=1)d[h].c();i=O(),s=C("div"),r=C("div"),o=C("button"),o.textContent="OK",y(t,"class","costsInfo svelte-1u2pv9q"),y(o,"id","firstFocusable lastFocusable"),y(s,"class","promptOptions svelte-1u2pv9q"),y(e,"class","buildCosts svelte-1u2pv9q")},m(h,p){q(h,e,p),m(e,t);for(let _=0;_<3;_+=1)d[_]&&d[_].m(t,null);m(e,i),m(e,s),m(s,r),m(r,o),n[3](o),a=!0,c||(u=[U(o,"click",n[4]),U(o,"keydown",n[5]),U(e,"introstart",n[6])],c=!0)},p(h,[p]){if(p&2){f=Ue(["armor","gear","total"]);let _;for(_=0;_<3;_+=1){const g=gh(h,f,_);d[_]?d[_].p(g,p):(d[_]=yh(g),d[_].c(),d[_].m(t,null))}for(;_<3;_+=1)d[_].d(1)}},i(h){a||(h&&Ie(()=>{a&&(l||(l=ge(e,Qe,{duration:250},!0)),l.run(1))}),a=!0)},o(h){h&&(l||(l=ge(e,Qe,{duration:250},!1)),l.run(0)),a=!1},d(h){h&&$(e),Lt(d,h),n[3](null),h&&l&&l.end(),c=!1,we(u)}}}function zI(n,e,t){let i,s;J(n,rn,u=>t(1,i=u)),J(n,ne,u=>t(2,s=u));let r;function o(u){de[u?"unshift":"push"](()=>{r=u,t(0,r)})}return[r,i,s,o,()=>Y(ne,s.costs.ongoing=!1,s),u=>{jt(u),Gt(u)},()=>r.focus()]}class VI extends De{constructor(e){super(),Te(this,e,zI,qI,ve,{})}}function xh(n,e,t){const i=n.slice();return i[19]=e[t][0],i[20]=e[t][1],i}function Ch(n,e,t){const i=n.slice();return i[11]=e[t],i}function Eh(n,e,t){const i=n.slice();return i[16]=e[t],i}function jI(n){const e=n.slice(),t=e[14]?e[5][e[2].name][e[11].name]:`${Math.round(e[11].mult*100*10)/10}<b>%</b> ${En[e[11].type]}`;return e[15]=t,e}function wh(n){const e=n.slice(),t=e[5][e[2].name]!=null&&e[5][e[2].name][e[11].name]!=null;return e[14]=t,e}function GI(n){let e;return{c(){e=C("span"),e.textContent=`Slot: ${n[2].slot.charAt(0).toUpperCase()+n[2].slot.slice(1)}`},m(t,i){q(t,e,i)},p:ie,d(t){t&&$(e)}}}function KI(n){let e;return{c(){e=C("span"),e.textContent=`Type: ${n[2].tool?"Tool":n[2].info.type}`},m(t,i){q(t,e,i)},p:ie,d(t){t&&$(e)}}}function YI(n){let e,t,i,s,r=Ue(Object.entries(En)),o=[];for(let l=0;l<r.length;l+=1)o[l]=kh(xh(n,r,l));return{c(){e=C("div"),t=C("span"),t.textContent=`${n[2].noStats?"No stats available":"Stats:"}`,i=O(),s=C("div");for(let l=0;l<o.length;l+=1)o[l].c();y(t,"id","subtitle"),y(t,"class","svelte-1c4y2ce"),y(s,"class","svelte-1c4y2ce"),y(e,"id","itemStats"),y(e,"class","svelte-1c4y2ce")},m(l,a){q(l,e,a),m(e,t),m(e,i),m(e,s);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(s,null)},p(l,a){if(a&4){r=Ue(Object.entries(En));let c;for(c=0;c<r.length;c+=1){const u=xh(l,r,c);o[c]?o[c].p(u,a):(o[c]=kh(u),o[c].c(),o[c].m(s,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}},d(l){l&&$(e),Lt(o,l)}}}function QI(n){let e;function t(r,o){return r[2].tool?ZI:JI}let s=t(n)(n);return{c(){s.c(),e=Dt()},m(r,o){s.m(r,o),q(r,e,o)},p(r,o){s.p(r,o)},d(r){r&&$(e),s.d(r)}}}function XI(n){let e,t,i,s,r,o=(n[19]=="endurance"?n[2].stats[n[19]].toFixed(2):n[2].stats[n[19]])+"",l,a;return{c(){e=C("div"),t=C("img"),s=O(),r=C("span"),l=re(o),a=O(),mt(t.src,i="stats/"+n[19]+".svg")||y(t,"src",i),y(t,"alt",n[20]),y(t,"class","svelte-1c4y2ce"),y(r,"class","statValue svelte-1c4y2ce"),y(r,"id",n[19]),ce(r,"negative",n[2].stats[n[19]]<0),y(e,"class","svelte-1c4y2ce")},m(c,u){q(c,e,u),m(e,t),m(e,s),m(e,r),m(r,l),m(e,a)},p(c,u){u&4&&ce(r,"negative",c[2].stats[c[19]]<0)},d(c){c&&$(e)}}}function kh(n){let e,t=n[2].stats[n[19]]!=0&&XI(n);return{c(){t&&t.c(),e=Dt()},m(i,s){t&&t.m(i,s),q(i,e,s)},p(i,s){i[2].stats[i[19]]!=0&&t.p(i,s)},d(i){i&&$(e),t&&t.d(i)}}}function JI(n){let e,t,i,s,r,o=Ue(n[2].moves),l=[];for(let a=0;a<o.length;a+=1)l[a]=Ah(Ch(n,o,a));return{c(){e=C("div"),t=C("div"),i=C("div"),s=C("div"),s.innerHTML='<span class="svelte-1c4y2ce">Move</span> <span class="svelte-1c4y2ce">Base Value</span> <span class="svelte-1c4y2ce">Scaling(s)</span>',r=O();for(let a=0;a<l.length;a+=1)l[a].c();y(s,"id","subtitle"),y(s,"class","svelte-1c4y2ce"),y(i,"class","svelte-1c4y2ce"),y(t,"id","itemMoves"),y(t,"class","svelte-1c4y2ce"),y(e,"id","itemMovesCont"),y(e,"class","svelte-1c4y2ce")},m(a,c){q(a,e,c),m(e,t),m(t,i),m(i,s),m(i,r);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(i,null)},p(a,c){if(c&52){o=Ue(a[2].moves);let u;for(u=0;u<o.length;u+=1){const f=Ch(a,o,u);l[u]?l[u].p(f,c):(l[u]=Ah(f),l[u].c(),l[u].m(i,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=o.length}},d(a){a&&$(e),Lt(l,a)}}}function ZI(n){let e;return{c(){e=C("div"),e.innerHTML='<span id="subtitle" class="svelte-1c4y2ce">No moves available</span>',y(e,"id","itemMovesCont"),y(e,"class","svelte-1c4y2ce"),ot(e,"text-align","center")},m(t,i){q(t,e,i)},p:ie,d(t){t&&$(e)}}}function eS(n){let e,t,i,s,r,o;function l(f,d){return!f[11].type||!f[11].type.includes("/")?Ih:tS}function a(f,d){return d===Ih?jI(f):f}let c=l(n),u=c(a(n,c));return{c(){e=C("div"),t=C("span"),t.textContent=`${n[11].name}`,i=O(),s=C("span"),s.textContent=`${(n[11].name.includes("Fantastic Beamstorm")?"~":"")+n[11].base}`,r=O(),u.c(),o=O(),y(t,"class","svelte-1c4y2ce"),y(s,"class","svelte-1c4y2ce"),y(e,"class","svelte-1c4y2ce")},m(f,d){q(f,e,d),m(e,t),m(e,i),m(e,s),m(e,r),u.m(e,null),m(e,o)},p(f,d){u.p(a(f,c),d)},d(f){f&&$(e),u.d()}}}function tS(n){let e,t=Ue(n[11].type.split("/")),i=[];for(let s=0;s<t.length;s+=1)i[s]=Sh(Eh(n,t,s));return{c(){e=C("span");for(let s=0;s<i.length;s+=1)i[s].c();y(e,"id","hybrid"),y(e,"class","svelte-1c4y2ce")},m(s,r){q(s,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(s,r){if(r&4){t=Ue(s[11].type.split("/"));let o;for(o=0;o<t.length;o+=1){const l=Eh(s,t,o);i[o]?i[o].p(l,r):(i[o]=Sh(l),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&$(e),Lt(i,s)}}}function Ih(n){let e,t=n[15]+"";return{c(){e=C("span"),y(e,"class","svelte-1c4y2ce"),ot(e,"font-size",n[15].length>30?"2.5rem":"")},m(i,s){q(i,e,s),e.innerHTML=t},p:ie,d(i){i&&$(e)}}}function Sh(n){let e,t=Math.round(n[11][`${n[16]}Mult`]*100*10)/10+"",i,s,r,o=En[n[16]]+"",l,a;return{c(){e=C("span"),i=re(t),s=C("b"),s.textContent="%",r=O(),l=re(o),a=O()},m(c,u){q(c,e,u),m(e,i),m(e,s),m(e,r),m(e,l),m(e,a)},p:ie,d(c){c&&$(e)}}}function Ah(n){let e=!n[4].includes(n[11].name),t,i=e&&eS(wh(n));return{c(){i&&i.c(),t=Dt()},m(s,r){i&&i.m(s,r),q(s,t,r)},p(s,r){e&&i.p(wh(s),r)},d(s){s&&$(t),i&&i.d(s)}}}function nS(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g,x,v,b,E,w,T,k,A,N,D,I,S,B,H,W,F,M,K,te,ee,L,z,V,R;function Q(Fe,Ae){return Fe[3]?KI:GI}let me=Q(n)(n);function fe(Fe,Ae){return Fe[3]?QI:YI}let Ne=fe(n)(n);return{c(){e=C("div"),t=C("div"),i=C("a"),s=C("img"),o=O(),l=C("div"),a=C("span"),a.textContent="Click the image in order to visit the wiki page",c=O(),u=C("span"),u.textContent=`Name: ${n[2].name}`,f=O(),me.c(),d=O(),Ne.c(),h=O(),p=C("div"),_=C("span"),_.textContent="Costs:",g=O(),x=C("div"),v=C("div"),b=C("span"),b.textContent="Minimum:",E=O(),w=C("img"),k=O(),A=C("span"),A.textContent=`${n[2].cost.min==null?"Unpurchasable":n[2].cost.min.toLocaleString()+" Gold"}`,N=O(),D=C("div"),I=C("span"),I.textContent="Maximum:",S=O(),B=C("img"),W=O(),F=C("span"),F.textContent=`${n[2].cost.max==null?"Unpurchasable":n[2].cost.max.toLocaleString()+" Gold"}`,M=O(),K=C("div"),te=C("div"),ee=C("button"),ee.textContent="OK",mt(s.src,r=n[2].image)||y(s,"src",r),y(s,"alt",""),y(s,"class","svelte-1c4y2ce"),y(i,"href",n[2].link),y(i,"target","_blank"),y(i,"class","svelte-1c4y2ce"),y(a,"id","tip"),y(a,"class","svelte-1c4y2ce"),y(l,"class","svelte-1c4y2ce"),y(t,"id","basicInfo"),y(t,"class","svelte-1c4y2ce"),y(_,"id","subtitle"),y(_,"class","svelte-1c4y2ce"),y(b,"class","svelte-1c4y2ce"),mt(w.src,T="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||y(w,"src",T),y(w,"alt",""),y(w,"class","svelte-1c4y2ce"),y(A,"class","svelte-1c4y2ce"),y(v,"class","svelte-1c4y2ce"),y(I,"class","svelte-1c4y2ce"),mt(B.src,H="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||y(B,"src",H),y(B,"alt",""),y(B,"class","svelte-1c4y2ce"),y(F,"class","svelte-1c4y2ce"),y(D,"class","svelte-1c4y2ce"),y(x,"class","svelte-1c4y2ce"),y(p,"id","itemCosts"),y(p,"class","svelte-1c4y2ce"),y(ee,"id","firstFocusable lastFocusable"),y(K,"class","promptOptions svelte-1c4y2ce"),y(e,"class","itemInfo svelte-1c4y2ce")},m(Fe,Ae){q(Fe,e,Ae),m(e,t),m(t,i),m(i,s),m(t,o),m(t,l),m(l,a),m(l,c),m(l,u),m(l,f),me.m(l,null),m(e,d),Ne.m(e,null),m(e,h),m(e,p),m(p,_),m(p,g),m(p,x),m(x,v),m(v,b),m(v,E),m(v,w),m(v,k),m(v,A),m(x,N),m(x,D),m(D,I),m(D,S),m(D,B),m(D,W),m(D,F),m(e,M),m(e,K),m(K,te),m(te,ee),n[6](ee),z=!0,V||(R=[U(ee,"click",n[7]),U(ee,"keydown",n[8]),U(e,"introstart",n[9]),U(e,"outroend",n[10])],V=!0)},p(Fe,[Ae]){me.p(Fe,Ae),Ne.p(Fe,Ae)},i(Fe){z||(Fe&&Ie(()=>{z&&(L||(L=ge(e,Qe,{duration:250},!0)),L.run(1))}),z=!0)},o(Fe){Fe&&(L||(L=ge(e,Qe,{duration:250},!1)),L.run(0)),z=!1},d(Fe){Fe&&$(e),me.d(),Ne.d(),n[6](null),Fe&&L&&L.end(),V=!1,we(R)}}}function iS(n,e,t){let i;J(n,ne,p=>t(1,i=p));let s,r=i.item.data,o=r.type=="gear",l=["Charged Basic Attack","Charged Solar Beam"],a={"Void Spike Ultradagger":{"Void Needle":"100<b>%</b> Melee - 562.5<b>%</b> Armor"},"Pureblood Dagger":{"Basic Attack":"200<b>%</b> HighestBonus - 100<b>%</b> LowerBonuses","Blood Sap":"200<b>%</b> HighestBonus - 100<b>%</b> LowerBonuses","+ HP per Blood Sap":"(200<b>%</b> HighestBonus - 100<b>%</b> LowerBonuses) / 2"},"Gnome Rocket Launcher":{"Basic Attack":"None"}};function c(p){de[p?"unshift":"push"](()=>{s=p,t(0,s)})}return[s,i,r,o,l,a,c,()=>Y(ne,i.item.ongoing=!1,i),p=>{jt(p),Gt(p)},()=>s.focus(),()=>{r.element&&r.element.querySelector("button").focus()}]}class sS extends De{constructor(e){super(),Te(this,e,iS,nS,ve,{})}}function rS(n){let e,t,i,s,r,o,l,a,c,u,f,d;return{c(){e=C("div"),t=C("span"),t.textContent="Fantastic Calculator Policy",i=O(),s=C("div"),s.innerHTML=`<span id="subtitle" class="svelte-1fj0tys">About</span> <p class="svelte-1fj0tys">This tool is a passion project, one that is independent and is not
            affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span id="subtitle" class="svelte-1fj0tys">Privacy Policy</span> <p class="svelte-1fj0tys">This policy explains what information Fantastic Calculator (&quot;we&quot;,
            &quot;us&quot; or &quot;our&quot;) collects, uses, and shares when you use our website.</p> <span id="subtitle" class="svelte-1fj0tys">Information We Collect</span> <p class="svelte-1fj0tys">We collect information provided by you; that is which is inputted
            directly into our tool. We also collect information about how you
            use and interact with our website, general demographic details, and
            information about your device or browser.</p> <span id="subtitle" class="svelte-1fj0tys">How We Use This Information</span> <p class="svelte-1fj0tys">Your information may be utilized to test and improve the tool, once
            the aggregated, non-identifying information provided has been
            collected and analyzed.</p> <span id="subtitle" class="svelte-1fj0tys">Contact</span> <p class="svelte-1fj0tys">For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,r=O(),o=C("div"),l=C("div"),a=C("button"),a.textContent="OK",y(t,"id","title"),y(s,"id","contents"),y(a,"id","firstFocusable lastFocusable"),y(o,"class","promptOptions svelte-1fj0tys"),y(e,"class","infoPrompt svelte-1fj0tys")},m(h,p){q(h,e,p),m(e,t),m(e,i),m(e,s),m(e,r),m(e,o),m(o,l),m(l,a),n[2](a),u=!0,f||(d=[U(a,"click",n[3]),U(a,"keydown",n[4])],f=!0)},p:ie,i(h){u||(h&&Ie(()=>{u&&(c||(c=ge(e,Qe,{duration:250},!0)),c.run(1))}),u=!0)},o(h){h&&(c||(c=ge(e,Qe,{duration:250},!1)),c.run(0)),u=!1},d(h){h&&$(e),n[2](null),h&&c&&c.end(),f=!1,we(d)}}}function oS(n,e,t){let i;J(n,ne,a=>t(1,i=a));let s;function r(a){de[a?"unshift":"push"](()=>{s=a,t(0,s)})}return[s,i,r,()=>Y(ne,i.policy.ongoing=!1,i),a=>{jt(a),Gt(a)}]}class lS extends De{constructor(e){super(),Te(this,e,oS,rS,ve,{})}}function aS(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g,x,v,b,E,w;return{c(){e=C("div"),t=C("span"),t.textContent="Support Me",i=O(),s=C("p"),s.textContent="Thank you for your continuous use of my site!",r=O(),o=C("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,l=O(),a=C("p"),a.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,c=O(),u=C("a"),u.innerHTML='<img src="kofi-badge.png" alt="Ko-fi" class="svelte-ywc66p"/>',f=O(),d=C("div"),h=C("div"),p=C("button"),p.textContent="DON'T SHOW AGAIN",_=O(),g=C("div"),x=C("button"),x.textContent="MAYBE LATER",y(t,"id","title"),y(u,"class","flex br-1 light-hover svelte-ywc66p"),y(u,"href","https://ko-fi.com/xt8ss"),y(u,"target","_blank"),y(d,"class","promptOptions"),y(e,"class","supportCont infoPrompt svelte-ywc66p")},m(T,k){q(T,e,k),m(e,t),m(e,i),m(e,s),m(e,r),m(e,o),m(e,l),m(e,a),m(e,c),m(e,u),m(e,f),m(e,d),m(d,h),m(h,p),m(d,_),m(d,g),m(g,x),n[4](x),b=!0,E||(w=[U(p,"click",n[3]),U(x,"click",n[5]),U(e,"introstart",n[6])],E=!0)},p:ie,i(T){b||(T&&Ie(()=>{b&&(v||(v=ge(e,Qe,{duration:250},!0)),v.run(1))}),b=!0)},o(T){T&&(v||(v=ge(e,Qe,{duration:250},!1)),v.run(0)),b=!1},d(T){T&&$(e),n[4](null),T&&v&&v.end(),E=!1,we(w)}}}function cS(n,e,t){let i,s;J(n,Ti,u=>t(1,i=u)),J(n,ne,u=>t(2,s=u));let r;const o=()=>{Y(Ti,i.showAgain=!1,i),Y(ne,s.donate.ongoing=!1,s)};function l(u){de[u?"unshift":"push"](()=>{r=u,t(0,r)})}return[r,i,s,o,l,()=>{Y(Ti,i.timesDenied++,i),Y(ne,s.donate.ongoing=!1,s)},()=>r.focus()]}class uS extends De{constructor(e){super(),Te(this,e,cS,aS,ve,{})}}function dS(n){let e,t,i,s,r,o,l,a,c,u,f,d;return{c(){e=C("div"),t=C("span"),t.textContent="Notice",i=O(),s=C("div"),s.innerHTML=`<p class="svelte-1r3ayw4">Due to site-related incompatibilities with the new user account
            interface, we ask you to manage your user account in another
            affiliated site in the meantime.</p> <p class="svelte-1r3ayw4">This includes any affiliation listed in our
            <a href="https://xt8ss.github.io/fantastic-hub/" class="svelte-1r3ayw4">Fantastic Hub</a>,
            as well as the hub itself.</p> <p class="svelte-1r3ayw4">Thank you for your understanding!</p>`,r=O(),o=C("div"),l=C("div"),a=C("button"),a.textContent="OK",y(t,"id","title"),y(s,"id","contents"),y(a,"id","firstFocusable lastFocusable"),y(o,"class","promptOptions svelte-1r3ayw4"),y(e,"class","infoPrompt svelte-1r3ayw4")},m(h,p){q(h,e,p),m(e,t),m(e,i),m(e,s),m(e,r),m(e,o),m(o,l),m(l,a),u=!0,f||(d=[U(a,"click",n[1]),U(a,"keydown",n[2])],f=!0)},p:ie,i(h){u||(h&&Ie(()=>{u&&(c||(c=ge(e,Qe,{duration:250},!0)),c.run(1))}),u=!0)},o(h){h&&(c||(c=ge(e,Qe,{duration:250},!1)),c.run(0)),u=!1},d(h){h&&$(e),h&&c&&c.end(),f=!1,we(d)}}}function fS(n,e,t){let i;return J(n,ne,o=>t(0,i=o)),[i,()=>Y(ne,i.login.ongoing=!1,i),o=>{jt(o),Gt(o)}]}class hS extends De{constructor(e){super(),Te(this,e,fS,dS,ve,{})}}var Re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pS(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var s=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return n[i]}})}),t}var _S={exports:{}};function mS(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ql={exports:{}};const gS={},vS=Object.freeze(Object.defineProperty({__proto__:null,default:gS},Symbol.toStringTag,{value:"Module"})),bS=pS(vS);var Th;function ze(){return Th||(Th=1,function(n,e){(function(t,i){n.exports=i()})(Re,function(){var t=t||function(i,s){var r;if(typeof window<"u"&&window.crypto&&(r=window.crypto),typeof self<"u"&&self.crypto&&(r=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(r=globalThis.crypto),!r&&typeof window<"u"&&window.msCrypto&&(r=window.msCrypto),!r&&typeof Re<"u"&&Re.crypto&&(r=Re.crypto),!r&&typeof mS=="function")try{r=bS}catch{}var o=function(){if(r){if(typeof r.getRandomValues=="function")try{return r.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof r.randomBytes=="function")try{return r.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},l=Object.create||function(){function v(){}return function(b){var E;return v.prototype=b,E=new v,v.prototype=null,E}}(),a={},c=a.lib={},u=c.Base=function(){return{extend:function(v){var b=l(this);return v&&b.mixIn(v),(!b.hasOwnProperty("init")||this.init===b.init)&&(b.init=function(){b.$super.init.apply(this,arguments)}),b.init.prototype=b,b.$super=this,b},create:function(){var v=this.extend();return v.init.apply(v,arguments),v},init:function(){},mixIn:function(v){for(var b in v)v.hasOwnProperty(b)&&(this[b]=v[b]);v.hasOwnProperty("toString")&&(this.toString=v.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),f=c.WordArray=u.extend({init:function(v,b){v=this.words=v||[],b!=s?this.sigBytes=b:this.sigBytes=v.length*4},toString:function(v){return(v||h).stringify(this)},concat:function(v){var b=this.words,E=v.words,w=this.sigBytes,T=v.sigBytes;if(this.clamp(),w%4)for(var k=0;k<T;k++){var A=E[k>>>2]>>>24-k%4*8&255;b[w+k>>>2]|=A<<24-(w+k)%4*8}else for(var N=0;N<T;N+=4)b[w+N>>>2]=E[N>>>2];return this.sigBytes+=T,this},clamp:function(){var v=this.words,b=this.sigBytes;v[b>>>2]&=4294967295<<32-b%4*8,v.length=i.ceil(b/4)},clone:function(){var v=u.clone.call(this);return v.words=this.words.slice(0),v},random:function(v){for(var b=[],E=0;E<v;E+=4)b.push(o());return new f.init(b,v)}}),d=a.enc={},h=d.Hex={stringify:function(v){for(var b=v.words,E=v.sigBytes,w=[],T=0;T<E;T++){var k=b[T>>>2]>>>24-T%4*8&255;w.push((k>>>4).toString(16)),w.push((k&15).toString(16))}return w.join("")},parse:function(v){for(var b=v.length,E=[],w=0;w<b;w+=2)E[w>>>3]|=parseInt(v.substr(w,2),16)<<24-w%8*4;return new f.init(E,b/2)}},p=d.Latin1={stringify:function(v){for(var b=v.words,E=v.sigBytes,w=[],T=0;T<E;T++){var k=b[T>>>2]>>>24-T%4*8&255;w.push(String.fromCharCode(k))}return w.join("")},parse:function(v){for(var b=v.length,E=[],w=0;w<b;w++)E[w>>>2]|=(v.charCodeAt(w)&255)<<24-w%4*8;return new f.init(E,b)}},_=d.Utf8={stringify:function(v){try{return decodeURIComponent(escape(p.stringify(v)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(v){return p.parse(unescape(encodeURIComponent(v)))}},g=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(v){typeof v=="string"&&(v=_.parse(v)),this._data.concat(v),this._nDataBytes+=v.sigBytes},_process:function(v){var b,E=this._data,w=E.words,T=E.sigBytes,k=this.blockSize,A=k*4,N=T/A;v?N=i.ceil(N):N=i.max((N|0)-this._minBufferSize,0);var D=N*k,I=i.min(D*4,T);if(D){for(var S=0;S<D;S+=k)this._doProcessBlock(w,S);b=w.splice(0,D),E.sigBytes-=I}return new f.init(b,I)},clone:function(){var v=u.clone.call(this);return v._data=this._data.clone(),v},_minBufferSize:0});c.Hasher=g.extend({cfg:u.extend(),init:function(v){this.cfg=this.cfg.extend(v),this.reset()},reset:function(){g.reset.call(this),this._doReset()},update:function(v){return this._append(v),this._process(),this},finalize:function(v){v&&this._append(v);var b=this._doFinalize();return b},blockSize:16,_createHelper:function(v){return function(b,E){return new v.init(E).finalize(b)}},_createHmacHelper:function(v){return function(b,E){return new x.HMAC.init(v,E).finalize(b)}}});var x=a.algo={};return a}(Math);return t})}(ql)),ql.exports}var zl={exports:{}},Dh;function yl(){return Dh||(Dh=1,function(n,e){(function(t,i){n.exports=i(ze())})(Re,function(t){return function(i){var s=t,r=s.lib,o=r.Base,l=r.WordArray,a=s.x64={};a.Word=o.extend({init:function(c,u){this.high=c,this.low=u}}),a.WordArray=o.extend({init:function(c,u){c=this.words=c||[],u!=i?this.sigBytes=u:this.sigBytes=c.length*8},toX32:function(){for(var c=this.words,u=c.length,f=[],d=0;d<u;d++){var h=c[d];f.push(h.high),f.push(h.low)}return l.create(f,this.sigBytes)},clone:function(){for(var c=o.clone.call(this),u=c.words=this.words.slice(0),f=u.length,d=0;d<f;d++)u[d]=u[d].clone();return c}})}(),t})}(zl)),zl.exports}var Vl={exports:{}},Nh;function yS(){return Nh||(Nh=1,function(n,e){(function(t,i){n.exports=i(ze())})(Re,function(t){return function(){if(typeof ArrayBuffer=="function"){var i=t,s=i.lib,r=s.WordArray,o=r.init,l=r.init=function(a){if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),(a instanceof Int8Array||typeof Uint8ClampedArray<"u"&&a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array)&&(a=new Uint8Array(a.buffer,a.byteOffset,a.byteLength)),a instanceof Uint8Array){for(var c=a.byteLength,u=[],f=0;f<c;f++)u[f>>>2]|=a[f]<<24-f%4*8;o.call(this,u,c)}else o.apply(this,arguments)};l.prototype=r}}(),t.lib.WordArray})}(Vl)),Vl.exports}var jl={exports:{}},Rh;function xS(){return Rh||(Rh=1,function(n,e){(function(t,i){n.exports=i(ze())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.WordArray,o=i.enc;o.Utf16=o.Utf16BE={stringify:function(a){for(var c=a.words,u=a.sigBytes,f=[],d=0;d<u;d+=2){var h=c[d>>>2]>>>16-d%4*8&65535;f.push(String.fromCharCode(h))}return f.join("")},parse:function(a){for(var c=a.length,u=[],f=0;f<c;f++)u[f>>>1]|=a.charCodeAt(f)<<16-f%2*16;return r.create(u,c*2)}},o.Utf16LE={stringify:function(a){for(var c=a.words,u=a.sigBytes,f=[],d=0;d<u;d+=2){var h=l(c[d>>>2]>>>16-d%4*8&65535);f.push(String.fromCharCode(h))}return f.join("")},parse:function(a){for(var c=a.length,u=[],f=0;f<c;f++)u[f>>>1]|=l(a.charCodeAt(f)<<16-f%2*16);return r.create(u,c*2)}};function l(a){return a<<8&4278255360|a>>>8&16711935}}(),t.enc.Utf16})}(jl)),jl.exports}var Gl={exports:{}},Bh;function Ki(){return Bh||(Bh=1,function(n,e){(function(t,i){n.exports=i(ze())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.WordArray,o=i.enc;o.Base64={stringify:function(a){var c=a.words,u=a.sigBytes,f=this._map;a.clamp();for(var d=[],h=0;h<u;h+=3)for(var p=c[h>>>2]>>>24-h%4*8&255,_=c[h+1>>>2]>>>24-(h+1)%4*8&255,g=c[h+2>>>2]>>>24-(h+2)%4*8&255,x=p<<16|_<<8|g,v=0;v<4&&h+v*.75<u;v++)d.push(f.charAt(x>>>6*(3-v)&63));var b=f.charAt(64);if(b)for(;d.length%4;)d.push(b);return d.join("")},parse:function(a){var c=a.length,u=this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var d=0;d<u.length;d++)f[u.charCodeAt(d)]=d}var h=u.charAt(64);if(h){var p=a.indexOf(h);p!==-1&&(c=p)}return l(a,c,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function l(a,c,u){for(var f=[],d=0,h=0;h<c;h++)if(h%4){var p=u[a.charCodeAt(h-1)]<<h%4*2,_=u[a.charCodeAt(h)]>>>6-h%4*2,g=p|_;f[d>>>2]|=g<<24-d%4*8,d++}return r.create(f,d)}}(),t.enc.Base64})}(Gl)),Gl.exports}var Kl={exports:{}},Fh;function CS(){return Fh||(Fh=1,function(n,e){(function(t,i){n.exports=i(ze())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.WordArray,o=i.enc;o.Base64url={stringify:function(a,c){c===void 0&&(c=!0);var u=a.words,f=a.sigBytes,d=c?this._safe_map:this._map;a.clamp();for(var h=[],p=0;p<f;p+=3)for(var _=u[p>>>2]>>>24-p%4*8&255,g=u[p+1>>>2]>>>24-(p+1)%4*8&255,x=u[p+2>>>2]>>>24-(p+2)%4*8&255,v=_<<16|g<<8|x,b=0;b<4&&p+b*.75<f;b++)h.push(d.charAt(v>>>6*(3-b)&63));var E=d.charAt(64);if(E)for(;h.length%4;)h.push(E);return h.join("")},parse:function(a,c){c===void 0&&(c=!0);var u=a.length,f=c?this._safe_map:this._map,d=this._reverseMap;if(!d){d=this._reverseMap=[];for(var h=0;h<f.length;h++)d[f.charCodeAt(h)]=h}var p=f.charAt(64);if(p){var _=a.indexOf(p);_!==-1&&(u=_)}return l(a,u,d)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function l(a,c,u){for(var f=[],d=0,h=0;h<c;h++)if(h%4){var p=u[a.charCodeAt(h-1)]<<h%4*2,_=u[a.charCodeAt(h)]>>>6-h%4*2,g=p|_;f[d>>>2]|=g<<24-d%4*8,d++}return r.create(f,d)}}(),t.enc.Base64url})}(Kl)),Kl.exports}var Yl={exports:{}},Oh;function Yi(){return Oh||(Oh=1,function(n,e){(function(t,i){n.exports=i(ze())})(Re,function(t){return function(i){var s=t,r=s.lib,o=r.WordArray,l=r.Hasher,a=s.algo,c=[];(function(){for(var _=0;_<64;_++)c[_]=i.abs(i.sin(_+1))*4294967296|0})();var u=a.MD5=l.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(_,g){for(var x=0;x<16;x++){var v=g+x,b=_[v];_[v]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360}var E=this._hash.words,w=_[g+0],T=_[g+1],k=_[g+2],A=_[g+3],N=_[g+4],D=_[g+5],I=_[g+6],S=_[g+7],B=_[g+8],H=_[g+9],W=_[g+10],F=_[g+11],M=_[g+12],K=_[g+13],te=_[g+14],ee=_[g+15],L=E[0],z=E[1],V=E[2],R=E[3];L=f(L,z,V,R,w,7,c[0]),R=f(R,L,z,V,T,12,c[1]),V=f(V,R,L,z,k,17,c[2]),z=f(z,V,R,L,A,22,c[3]),L=f(L,z,V,R,N,7,c[4]),R=f(R,L,z,V,D,12,c[5]),V=f(V,R,L,z,I,17,c[6]),z=f(z,V,R,L,S,22,c[7]),L=f(L,z,V,R,B,7,c[8]),R=f(R,L,z,V,H,12,c[9]),V=f(V,R,L,z,W,17,c[10]),z=f(z,V,R,L,F,22,c[11]),L=f(L,z,V,R,M,7,c[12]),R=f(R,L,z,V,K,12,c[13]),V=f(V,R,L,z,te,17,c[14]),z=f(z,V,R,L,ee,22,c[15]),L=d(L,z,V,R,T,5,c[16]),R=d(R,L,z,V,I,9,c[17]),V=d(V,R,L,z,F,14,c[18]),z=d(z,V,R,L,w,20,c[19]),L=d(L,z,V,R,D,5,c[20]),R=d(R,L,z,V,W,9,c[21]),V=d(V,R,L,z,ee,14,c[22]),z=d(z,V,R,L,N,20,c[23]),L=d(L,z,V,R,H,5,c[24]),R=d(R,L,z,V,te,9,c[25]),V=d(V,R,L,z,A,14,c[26]),z=d(z,V,R,L,B,20,c[27]),L=d(L,z,V,R,K,5,c[28]),R=d(R,L,z,V,k,9,c[29]),V=d(V,R,L,z,S,14,c[30]),z=d(z,V,R,L,M,20,c[31]),L=h(L,z,V,R,D,4,c[32]),R=h(R,L,z,V,B,11,c[33]),V=h(V,R,L,z,F,16,c[34]),z=h(z,V,R,L,te,23,c[35]),L=h(L,z,V,R,T,4,c[36]),R=h(R,L,z,V,N,11,c[37]),V=h(V,R,L,z,S,16,c[38]),z=h(z,V,R,L,W,23,c[39]),L=h(L,z,V,R,K,4,c[40]),R=h(R,L,z,V,w,11,c[41]),V=h(V,R,L,z,A,16,c[42]),z=h(z,V,R,L,I,23,c[43]),L=h(L,z,V,R,H,4,c[44]),R=h(R,L,z,V,M,11,c[45]),V=h(V,R,L,z,ee,16,c[46]),z=h(z,V,R,L,k,23,c[47]),L=p(L,z,V,R,w,6,c[48]),R=p(R,L,z,V,S,10,c[49]),V=p(V,R,L,z,te,15,c[50]),z=p(z,V,R,L,D,21,c[51]),L=p(L,z,V,R,M,6,c[52]),R=p(R,L,z,V,A,10,c[53]),V=p(V,R,L,z,W,15,c[54]),z=p(z,V,R,L,T,21,c[55]),L=p(L,z,V,R,B,6,c[56]),R=p(R,L,z,V,ee,10,c[57]),V=p(V,R,L,z,I,15,c[58]),z=p(z,V,R,L,K,21,c[59]),L=p(L,z,V,R,N,6,c[60]),R=p(R,L,z,V,F,10,c[61]),V=p(V,R,L,z,k,15,c[62]),z=p(z,V,R,L,H,21,c[63]),E[0]=E[0]+L|0,E[1]=E[1]+z|0,E[2]=E[2]+V|0,E[3]=E[3]+R|0},_doFinalize:function(){var _=this._data,g=_.words,x=this._nDataBytes*8,v=_.sigBytes*8;g[v>>>5]|=128<<24-v%32;var b=i.floor(x/4294967296),E=x;g[(v+64>>>9<<4)+15]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360,g[(v+64>>>9<<4)+14]=(E<<8|E>>>24)&16711935|(E<<24|E>>>8)&4278255360,_.sigBytes=(g.length+1)*4,this._process();for(var w=this._hash,T=w.words,k=0;k<4;k++){var A=T[k];T[k]=(A<<8|A>>>24)&16711935|(A<<24|A>>>8)&4278255360}return w},clone:function(){var _=l.clone.call(this);return _._hash=this._hash.clone(),_}});function f(_,g,x,v,b,E,w){var T=_+(g&x|~g&v)+b+w;return(T<<E|T>>>32-E)+g}function d(_,g,x,v,b,E,w){var T=_+(g&v|x&~v)+b+w;return(T<<E|T>>>32-E)+g}function h(_,g,x,v,b,E,w){var T=_+(g^x^v)+b+w;return(T<<E|T>>>32-E)+g}function p(_,g,x,v,b,E,w){var T=_+(x^(g|~v))+b+w;return(T<<E|T>>>32-E)+g}s.MD5=l._createHelper(u),s.HmacMD5=l._createHmacHelper(u)}(Math),t.MD5})}(Yl)),Yl.exports}var Ql={exports:{}},Ph;function ag(){return Ph||(Ph=1,function(n,e){(function(t,i){n.exports=i(ze())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.WordArray,o=s.Hasher,l=i.algo,a=[],c=l.SHA1=o.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,f){for(var d=this._hash.words,h=d[0],p=d[1],_=d[2],g=d[3],x=d[4],v=0;v<80;v++){if(v<16)a[v]=u[f+v]|0;else{var b=a[v-3]^a[v-8]^a[v-14]^a[v-16];a[v]=b<<1|b>>>31}var E=(h<<5|h>>>27)+x+a[v];v<20?E+=(p&_|~p&g)+1518500249:v<40?E+=(p^_^g)+1859775393:v<60?E+=(p&_|p&g|_&g)-1894007588:E+=(p^_^g)-899497514,x=g,g=_,_=p<<30|p>>>2,p=h,h=E}d[0]=d[0]+h|0,d[1]=d[1]+p|0,d[2]=d[2]+_|0,d[3]=d[3]+g|0,d[4]=d[4]+x|0},_doFinalize:function(){var u=this._data,f=u.words,d=this._nDataBytes*8,h=u.sigBytes*8;return f[h>>>5]|=128<<24-h%32,f[(h+64>>>9<<4)+14]=Math.floor(d/4294967296),f[(h+64>>>9<<4)+15]=d,u.sigBytes=f.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});i.SHA1=o._createHelper(c),i.HmacSHA1=o._createHmacHelper(c)}(),t.SHA1})}(Ql)),Ql.exports}var Xl={exports:{}},Mh;function Ru(){return Mh||(Mh=1,function(n,e){(function(t,i){n.exports=i(ze())})(Re,function(t){return function(i){var s=t,r=s.lib,o=r.WordArray,l=r.Hasher,a=s.algo,c=[],u=[];(function(){function h(x){for(var v=i.sqrt(x),b=2;b<=v;b++)if(!(x%b))return!1;return!0}function p(x){return(x-(x|0))*4294967296|0}for(var _=2,g=0;g<64;)h(_)&&(g<8&&(c[g]=p(i.pow(_,1/2))),u[g]=p(i.pow(_,1/3)),g++),_++})();var f=[],d=a.SHA256=l.extend({_doReset:function(){this._hash=new o.init(c.slice(0))},_doProcessBlock:function(h,p){for(var _=this._hash.words,g=_[0],x=_[1],v=_[2],b=_[3],E=_[4],w=_[5],T=_[6],k=_[7],A=0;A<64;A++){if(A<16)f[A]=h[p+A]|0;else{var N=f[A-15],D=(N<<25|N>>>7)^(N<<14|N>>>18)^N>>>3,I=f[A-2],S=(I<<15|I>>>17)^(I<<13|I>>>19)^I>>>10;f[A]=D+f[A-7]+S+f[A-16]}var B=E&w^~E&T,H=g&x^g&v^x&v,W=(g<<30|g>>>2)^(g<<19|g>>>13)^(g<<10|g>>>22),F=(E<<26|E>>>6)^(E<<21|E>>>11)^(E<<7|E>>>25),M=k+F+B+u[A]+f[A],K=W+H;k=T,T=w,w=E,E=b+M|0,b=v,v=x,x=g,g=M+K|0}_[0]=_[0]+g|0,_[1]=_[1]+x|0,_[2]=_[2]+v|0,_[3]=_[3]+b|0,_[4]=_[4]+E|0,_[5]=_[5]+w|0,_[6]=_[6]+T|0,_[7]=_[7]+k|0},_doFinalize:function(){var h=this._data,p=h.words,_=this._nDataBytes*8,g=h.sigBytes*8;return p[g>>>5]|=128<<24-g%32,p[(g+64>>>9<<4)+14]=i.floor(_/4294967296),p[(g+64>>>9<<4)+15]=_,h.sigBytes=p.length*4,this._process(),this._hash},clone:function(){var h=l.clone.call(this);return h._hash=this._hash.clone(),h}});s.SHA256=l._createHelper(d),s.HmacSHA256=l._createHmacHelper(d)}(Math),t.SHA256})}(Xl)),Xl.exports}var Jl={exports:{}},Lh;function ES(){return Lh||(Lh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Ru())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.WordArray,o=i.algo,l=o.SHA256,a=o.SHA224=l.extend({_doReset:function(){this._hash=new r.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var c=l._doFinalize.call(this);return c.sigBytes-=4,c}});i.SHA224=l._createHelper(a),i.HmacSHA224=l._createHmacHelper(a)}(),t.SHA224})}(Jl)),Jl.exports}var Zl={exports:{}},$h;function cg(){return $h||($h=1,function(n,e){(function(t,i,s){n.exports=i(ze(),yl())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.Hasher,o=i.x64,l=o.Word,a=o.WordArray,c=i.algo;function u(){return l.create.apply(l,arguments)}var f=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],d=[];(function(){for(var p=0;p<80;p++)d[p]=u()})();var h=c.SHA512=r.extend({_doReset:function(){this._hash=new a.init([new l.init(1779033703,4089235720),new l.init(3144134277,2227873595),new l.init(1013904242,4271175723),new l.init(2773480762,1595750129),new l.init(1359893119,2917565137),new l.init(2600822924,725511199),new l.init(528734635,4215389547),new l.init(1541459225,327033209)])},_doProcessBlock:function(p,_){for(var g=this._hash.words,x=g[0],v=g[1],b=g[2],E=g[3],w=g[4],T=g[5],k=g[6],A=g[7],N=x.high,D=x.low,I=v.high,S=v.low,B=b.high,H=b.low,W=E.high,F=E.low,M=w.high,K=w.low,te=T.high,ee=T.low,L=k.high,z=k.low,V=A.high,R=A.low,Q=N,pe=D,me=I,fe=S,Be=B,Ne=H,Fe=W,Ae=F,_e=M,be=K,rt=te,St=ee,Ft=L,he=z,Kt=V,Z=R,Ce=0;Ce<80;Ce++){var Me,tt,_t=d[Ce];if(Ce<16)tt=_t.high=p[_+Ce*2]|0,Me=_t.low=p[_+Ce*2+1]|0;else{var Ot=d[Ce-15],Xe=Ot.high,Et=Ot.low,P=(Xe>>>1|Et<<31)^(Xe>>>8|Et<<24)^Xe>>>7,Oe=(Et>>>1|Xe<<31)^(Et>>>8|Xe<<24)^(Et>>>7|Xe<<25),ye=d[Ce-2],We=ye.high,cn=ye.low,Pt=(We>>>19|cn<<13)^(We<<3|cn>>>29)^We>>>6,vt=(cn>>>19|We<<13)^(cn<<3|We>>>29)^(cn>>>6|We<<26),bt=d[Ce-7],xt=bt.high,Ct=bt.low,zs=d[Ce-16],kn=zs.high,Vs=zs.low;Me=Oe+Ct,tt=P+xt+(Me>>>0<Oe>>>0?1:0),Me=Me+vt,tt=tt+Pt+(Me>>>0<vt>>>0?1:0),Me=Me+Vs,tt=tt+kn+(Me>>>0<Vs>>>0?1:0),_t.high=tt,_t.low=Me}var wt=_e&rt^~_e&Ft,$t=be&St^~be&he,X=Q&me^Q&Be^me&Be,xe=pe&fe^pe&Ne^fe&Ne,Yt=(Q>>>28|pe<<4)^(Q<<30|pe>>>2)^(Q<<25|pe>>>7),nt=(pe>>>28|Q<<4)^(pe<<30|Q>>>2)^(pe<<25|Q>>>7),bi=(_e>>>14|be<<18)^(_e>>>18|be<<14)^(_e<<23|be>>>9),U1=(be>>>14|_e<<18)^(be>>>18|_e<<14)^(be<<23|_e>>>9),od=f[Ce],W1=od.high,ld=od.low,nn=Z+U1,Kn=Kt+bi+(nn>>>0<Z>>>0?1:0),nn=nn+$t,Kn=Kn+wt+(nn>>>0<$t>>>0?1:0),nn=nn+ld,Kn=Kn+W1+(nn>>>0<ld>>>0?1:0),nn=nn+Me,Kn=Kn+tt+(nn>>>0<Me>>>0?1:0),ad=nt+xe,q1=Yt+X+(ad>>>0<nt>>>0?1:0);Kt=Ft,Z=he,Ft=rt,he=St,rt=_e,St=be,be=Ae+nn|0,_e=Fe+Kn+(be>>>0<Ae>>>0?1:0)|0,Fe=Be,Ae=Ne,Be=me,Ne=fe,me=Q,fe=pe,pe=nn+ad|0,Q=Kn+q1+(pe>>>0<nn>>>0?1:0)|0}D=x.low=D+pe,x.high=N+Q+(D>>>0<pe>>>0?1:0),S=v.low=S+fe,v.high=I+me+(S>>>0<fe>>>0?1:0),H=b.low=H+Ne,b.high=B+Be+(H>>>0<Ne>>>0?1:0),F=E.low=F+Ae,E.high=W+Fe+(F>>>0<Ae>>>0?1:0),K=w.low=K+be,w.high=M+_e+(K>>>0<be>>>0?1:0),ee=T.low=ee+St,T.high=te+rt+(ee>>>0<St>>>0?1:0),z=k.low=z+he,k.high=L+Ft+(z>>>0<he>>>0?1:0),R=A.low=R+Z,A.high=V+Kt+(R>>>0<Z>>>0?1:0)},_doFinalize:function(){var p=this._data,_=p.words,g=this._nDataBytes*8,x=p.sigBytes*8;_[x>>>5]|=128<<24-x%32,_[(x+128>>>10<<5)+30]=Math.floor(g/4294967296),_[(x+128>>>10<<5)+31]=g,p.sigBytes=_.length*4,this._process();var v=this._hash.toX32();return v},clone:function(){var p=r.clone.call(this);return p._hash=this._hash.clone(),p},blockSize:1024/32});i.SHA512=r._createHelper(h),i.HmacSHA512=r._createHmacHelper(h)}(),t.SHA512})}(Zl)),Zl.exports}var ea={exports:{}},Hh;function wS(){return Hh||(Hh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),yl(),cg())})(Re,function(t){return function(){var i=t,s=i.x64,r=s.Word,o=s.WordArray,l=i.algo,a=l.SHA512,c=l.SHA384=a.extend({_doReset:function(){this._hash=new o.init([new r.init(3418070365,3238371032),new r.init(1654270250,914150663),new r.init(2438529370,812702999),new r.init(355462360,4144912697),new r.init(1731405415,4290775857),new r.init(2394180231,1750603025),new r.init(3675008525,1694076839),new r.init(1203062813,3204075428)])},_doFinalize:function(){var u=a._doFinalize.call(this);return u.sigBytes-=16,u}});i.SHA384=a._createHelper(c),i.HmacSHA384=a._createHmacHelper(c)}(),t.SHA384})}(ea)),ea.exports}var ta={exports:{}},Uh;function kS(){return Uh||(Uh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),yl())})(Re,function(t){return function(i){var s=t,r=s.lib,o=r.WordArray,l=r.Hasher,a=s.x64,c=a.Word,u=s.algo,f=[],d=[],h=[];(function(){for(var g=1,x=0,v=0;v<24;v++){f[g+5*x]=(v+1)*(v+2)/2%64;var b=x%5,E=(2*g+3*x)%5;g=b,x=E}for(var g=0;g<5;g++)for(var x=0;x<5;x++)d[g+5*x]=x+(2*g+3*x)%5*5;for(var w=1,T=0;T<24;T++){for(var k=0,A=0,N=0;N<7;N++){if(w&1){var D=(1<<N)-1;D<32?A^=1<<D:k^=1<<D-32}w&128?w=w<<1^113:w<<=1}h[T]=c.create(k,A)}})();var p=[];(function(){for(var g=0;g<25;g++)p[g]=c.create()})();var _=u.SHA3=l.extend({cfg:l.cfg.extend({outputLength:512}),_doReset:function(){for(var g=this._state=[],x=0;x<25;x++)g[x]=new c.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(g,x){for(var v=this._state,b=this.blockSize/2,E=0;E<b;E++){var w=g[x+2*E],T=g[x+2*E+1];w=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360,T=(T<<8|T>>>24)&16711935|(T<<24|T>>>8)&4278255360;var k=v[E];k.high^=T,k.low^=w}for(var A=0;A<24;A++){for(var N=0;N<5;N++){for(var D=0,I=0,S=0;S<5;S++){var k=v[N+5*S];D^=k.high,I^=k.low}var B=p[N];B.high=D,B.low=I}for(var N=0;N<5;N++)for(var H=p[(N+4)%5],W=p[(N+1)%5],F=W.high,M=W.low,D=H.high^(F<<1|M>>>31),I=H.low^(M<<1|F>>>31),S=0;S<5;S++){var k=v[N+5*S];k.high^=D,k.low^=I}for(var K=1;K<25;K++){var D,I,k=v[K],te=k.high,ee=k.low,L=f[K];L<32?(D=te<<L|ee>>>32-L,I=ee<<L|te>>>32-L):(D=ee<<L-32|te>>>64-L,I=te<<L-32|ee>>>64-L);var z=p[d[K]];z.high=D,z.low=I}var V=p[0],R=v[0];V.high=R.high,V.low=R.low;for(var N=0;N<5;N++)for(var S=0;S<5;S++){var K=N+5*S,k=v[K],Q=p[K],pe=p[(N+1)%5+5*S],me=p[(N+2)%5+5*S];k.high=Q.high^~pe.high&me.high,k.low=Q.low^~pe.low&me.low}var k=v[0],fe=h[A];k.high^=fe.high,k.low^=fe.low}},_doFinalize:function(){var g=this._data,x=g.words;this._nDataBytes*8;var v=g.sigBytes*8,b=this.blockSize*32;x[v>>>5]|=1<<24-v%32,x[(i.ceil((v+1)/b)*b>>>5)-1]|=128,g.sigBytes=x.length*4,this._process();for(var E=this._state,w=this.cfg.outputLength/8,T=w/8,k=[],A=0;A<T;A++){var N=E[A],D=N.high,I=N.low;D=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360,I=(I<<8|I>>>24)&16711935|(I<<24|I>>>8)&4278255360,k.push(I),k.push(D)}return new o.init(k,w)},clone:function(){for(var g=l.clone.call(this),x=g._state=this._state.slice(0),v=0;v<25;v++)x[v]=x[v].clone();return g}});s.SHA3=l._createHelper(_),s.HmacSHA3=l._createHmacHelper(_)}(Math),t.SHA3})}(ta)),ta.exports}var na={exports:{}},Wh;function IS(){return Wh||(Wh=1,function(n,e){(function(t,i){n.exports=i(ze())})(Re,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(i){var s=t,r=s.lib,o=r.WordArray,l=r.Hasher,a=s.algo,c=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),f=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),d=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),h=o.create([0,1518500249,1859775393,2400959708,2840853838]),p=o.create([1352829926,1548603684,1836072691,2053994217,0]),_=a.RIPEMD160=l.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(T,k){for(var A=0;A<16;A++){var N=k+A,D=T[N];T[N]=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360}var I=this._hash.words,S=h.words,B=p.words,H=c.words,W=u.words,F=f.words,M=d.words,K,te,ee,L,z,V,R,Q,pe,me;V=K=I[0],R=te=I[1],Q=ee=I[2],pe=L=I[3],me=z=I[4];for(var fe,A=0;A<80;A+=1)fe=K+T[k+H[A]]|0,A<16?fe+=g(te,ee,L)+S[0]:A<32?fe+=x(te,ee,L)+S[1]:A<48?fe+=v(te,ee,L)+S[2]:A<64?fe+=b(te,ee,L)+S[3]:fe+=E(te,ee,L)+S[4],fe=fe|0,fe=w(fe,F[A]),fe=fe+z|0,K=z,z=L,L=w(ee,10),ee=te,te=fe,fe=V+T[k+W[A]]|0,A<16?fe+=E(R,Q,pe)+B[0]:A<32?fe+=b(R,Q,pe)+B[1]:A<48?fe+=v(R,Q,pe)+B[2]:A<64?fe+=x(R,Q,pe)+B[3]:fe+=g(R,Q,pe)+B[4],fe=fe|0,fe=w(fe,M[A]),fe=fe+me|0,V=me,me=pe,pe=w(Q,10),Q=R,R=fe;fe=I[1]+ee+pe|0,I[1]=I[2]+L+me|0,I[2]=I[3]+z+V|0,I[3]=I[4]+K+R|0,I[4]=I[0]+te+Q|0,I[0]=fe},_doFinalize:function(){var T=this._data,k=T.words,A=this._nDataBytes*8,N=T.sigBytes*8;k[N>>>5]|=128<<24-N%32,k[(N+64>>>9<<4)+14]=(A<<8|A>>>24)&16711935|(A<<24|A>>>8)&4278255360,T.sigBytes=(k.length+1)*4,this._process();for(var D=this._hash,I=D.words,S=0;S<5;S++){var B=I[S];I[S]=(B<<8|B>>>24)&16711935|(B<<24|B>>>8)&4278255360}return D},clone:function(){var T=l.clone.call(this);return T._hash=this._hash.clone(),T}});function g(T,k,A){return T^k^A}function x(T,k,A){return T&k|~T&A}function v(T,k,A){return(T|~k)^A}function b(T,k,A){return T&A|k&~A}function E(T,k,A){return T^(k|~A)}function w(T,k){return T<<k|T>>>32-k}s.RIPEMD160=l._createHelper(_),s.HmacRIPEMD160=l._createHmacHelper(_)}(),t.RIPEMD160})}(na)),na.exports}var ia={exports:{}},qh;function Bu(){return qh||(qh=1,function(n,e){(function(t,i){n.exports=i(ze())})(Re,function(t){(function(){var i=t,s=i.lib,r=s.Base,o=i.enc,l=o.Utf8,a=i.algo;a.HMAC=r.extend({init:function(c,u){c=this._hasher=new c.init,typeof u=="string"&&(u=l.parse(u));var f=c.blockSize,d=f*4;u.sigBytes>d&&(u=c.finalize(u)),u.clamp();for(var h=this._oKey=u.clone(),p=this._iKey=u.clone(),_=h.words,g=p.words,x=0;x<f;x++)_[x]^=1549556828,g[x]^=909522486;h.sigBytes=p.sigBytes=d,this.reset()},reset:function(){var c=this._hasher;c.reset(),c.update(this._iKey)},update:function(c){return this._hasher.update(c),this},finalize:function(c){var u=this._hasher,f=u.finalize(c);u.reset();var d=u.finalize(this._oKey.clone().concat(f));return d}})})()})}(ia)),ia.exports}var sa={exports:{}},zh;function SS(){return zh||(zh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Ru(),Bu())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.Base,o=s.WordArray,l=i.algo,a=l.SHA256,c=l.HMAC,u=l.PBKDF2=r.extend({cfg:r.extend({keySize:128/32,hasher:a,iterations:25e4}),init:function(f){this.cfg=this.cfg.extend(f)},compute:function(f,d){for(var h=this.cfg,p=c.create(h.hasher,f),_=o.create(),g=o.create([1]),x=_.words,v=g.words,b=h.keySize,E=h.iterations;x.length<b;){var w=p.update(d).finalize(g);p.reset();for(var T=w.words,k=T.length,A=w,N=1;N<E;N++){A=p.finalize(A),p.reset();for(var D=A.words,I=0;I<k;I++)T[I]^=D[I]}_.concat(w),v[0]++}return _.sigBytes=b*4,_}});i.PBKDF2=function(f,d,h){return u.create(h).compute(f,d)}}(),t.PBKDF2})}(sa)),sa.exports}var ra={exports:{}},Vh;function vi(){return Vh||(Vh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),ag(),Bu())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.Base,o=s.WordArray,l=i.algo,a=l.MD5,c=l.EvpKDF=r.extend({cfg:r.extend({keySize:128/32,hasher:a,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,f){for(var d,h=this.cfg,p=h.hasher.create(),_=o.create(),g=_.words,x=h.keySize,v=h.iterations;g.length<x;){d&&p.update(d),d=p.update(u).finalize(f),p.reset();for(var b=1;b<v;b++)d=p.finalize(d),p.reset();_.concat(d)}return _.sigBytes=x*4,_}});i.EvpKDF=function(u,f,d){return c.create(d).compute(u,f)}}(),t.EvpKDF})}(ra)),ra.exports}var oa={exports:{}},jh;function Bt(){return jh||(jh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),vi())})(Re,function(t){t.lib.Cipher||function(i){var s=t,r=s.lib,o=r.Base,l=r.WordArray,a=r.BufferedBlockAlgorithm,c=s.enc;c.Utf8;var u=c.Base64,f=s.algo,d=f.EvpKDF,h=r.Cipher=a.extend({cfg:o.extend(),createEncryptor:function(D,I){return this.create(this._ENC_XFORM_MODE,D,I)},createDecryptor:function(D,I){return this.create(this._DEC_XFORM_MODE,D,I)},init:function(D,I,S){this.cfg=this.cfg.extend(S),this._xformMode=D,this._key=I,this.reset()},reset:function(){a.reset.call(this),this._doReset()},process:function(D){return this._append(D),this._process()},finalize:function(D){D&&this._append(D);var I=this._doFinalize();return I},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function D(I){return typeof I=="string"?N:T}return function(I){return{encrypt:function(S,B,H){return D(B).encrypt(I,S,B,H)},decrypt:function(S,B,H){return D(B).decrypt(I,S,B,H)}}}}()});r.StreamCipher=h.extend({_doFinalize:function(){var D=this._process(!0);return D},blockSize:1});var p=s.mode={},_=r.BlockCipherMode=o.extend({createEncryptor:function(D,I){return this.Encryptor.create(D,I)},createDecryptor:function(D,I){return this.Decryptor.create(D,I)},init:function(D,I){this._cipher=D,this._iv=I}}),g=p.CBC=function(){var D=_.extend();D.Encryptor=D.extend({processBlock:function(S,B){var H=this._cipher,W=H.blockSize;I.call(this,S,B,W),H.encryptBlock(S,B),this._prevBlock=S.slice(B,B+W)}}),D.Decryptor=D.extend({processBlock:function(S,B){var H=this._cipher,W=H.blockSize,F=S.slice(B,B+W);H.decryptBlock(S,B),I.call(this,S,B,W),this._prevBlock=F}});function I(S,B,H){var W,F=this._iv;F?(W=F,this._iv=i):W=this._prevBlock;for(var M=0;M<H;M++)S[B+M]^=W[M]}return D}(),x=s.pad={},v=x.Pkcs7={pad:function(D,I){for(var S=I*4,B=S-D.sigBytes%S,H=B<<24|B<<16|B<<8|B,W=[],F=0;F<B;F+=4)W.push(H);var M=l.create(W,B);D.concat(M)},unpad:function(D){var I=D.words[D.sigBytes-1>>>2]&255;D.sigBytes-=I}};r.BlockCipher=h.extend({cfg:h.cfg.extend({mode:g,padding:v}),reset:function(){var D;h.reset.call(this);var I=this.cfg,S=I.iv,B=I.mode;this._xformMode==this._ENC_XFORM_MODE?D=B.createEncryptor:(D=B.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==D?this._mode.init(this,S&&S.words):(this._mode=D.call(B,this,S&&S.words),this._mode.__creator=D)},_doProcessBlock:function(D,I){this._mode.processBlock(D,I)},_doFinalize:function(){var D,I=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(I.pad(this._data,this.blockSize),D=this._process(!0)):(D=this._process(!0),I.unpad(D)),D},blockSize:128/32});var b=r.CipherParams=o.extend({init:function(D){this.mixIn(D)},toString:function(D){return(D||this.formatter).stringify(this)}}),E=s.format={},w=E.OpenSSL={stringify:function(D){var I,S=D.ciphertext,B=D.salt;return B?I=l.create([1398893684,1701076831]).concat(B).concat(S):I=S,I.toString(u)},parse:function(D){var I,S=u.parse(D),B=S.words;return B[0]==1398893684&&B[1]==1701076831&&(I=l.create(B.slice(2,4)),B.splice(0,4),S.sigBytes-=16),b.create({ciphertext:S,salt:I})}},T=r.SerializableCipher=o.extend({cfg:o.extend({format:w}),encrypt:function(D,I,S,B){B=this.cfg.extend(B);var H=D.createEncryptor(S,B),W=H.finalize(I),F=H.cfg;return b.create({ciphertext:W,key:S,iv:F.iv,algorithm:D,mode:F.mode,padding:F.padding,blockSize:D.blockSize,formatter:B.format})},decrypt:function(D,I,S,B){B=this.cfg.extend(B),I=this._parse(I,B.format);var H=D.createDecryptor(S,B).finalize(I.ciphertext);return H},_parse:function(D,I){return typeof D=="string"?I.parse(D,this):D}}),k=s.kdf={},A=k.OpenSSL={execute:function(D,I,S,B,H){if(B||(B=l.random(64/8)),H)var W=d.create({keySize:I+S,hasher:H}).compute(D,B);else var W=d.create({keySize:I+S}).compute(D,B);var F=l.create(W.words.slice(I),S*4);return W.sigBytes=I*4,b.create({key:W,iv:F,salt:B})}},N=r.PasswordBasedCipher=T.extend({cfg:T.cfg.extend({kdf:A}),encrypt:function(D,I,S,B){B=this.cfg.extend(B);var H=B.kdf.execute(S,D.keySize,D.ivSize,B.salt,B.hasher);B.iv=H.iv;var W=T.encrypt.call(this,D,I,H.key,B);return W.mixIn(H),W},decrypt:function(D,I,S,B){B=this.cfg.extend(B),I=this._parse(I,B.format);var H=B.kdf.execute(S,D.keySize,D.ivSize,I.salt,B.hasher);B.iv=H.iv;var W=T.decrypt.call(this,D,I,H.key,B);return W}})}()})}(oa)),oa.exports}var la={exports:{}},Gh;function AS(){return Gh||(Gh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){return t.mode.CFB=function(){var i=t.lib.BlockCipherMode.extend();i.Encryptor=i.extend({processBlock:function(r,o){var l=this._cipher,a=l.blockSize;s.call(this,r,o,a,l),this._prevBlock=r.slice(o,o+a)}}),i.Decryptor=i.extend({processBlock:function(r,o){var l=this._cipher,a=l.blockSize,c=r.slice(o,o+a);s.call(this,r,o,a,l),this._prevBlock=c}});function s(r,o,l,a){var c,u=this._iv;u?(c=u.slice(0),this._iv=void 0):c=this._prevBlock,a.encryptBlock(c,0);for(var f=0;f<l;f++)r[o+f]^=c[f]}return i}(),t.mode.CFB})}(la)),la.exports}var aa={exports:{}},Kh;function TS(){return Kh||(Kh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){return t.mode.CTR=function(){var i=t.lib.BlockCipherMode.extend(),s=i.Encryptor=i.extend({processBlock:function(r,o){var l=this._cipher,a=l.blockSize,c=this._iv,u=this._counter;c&&(u=this._counter=c.slice(0),this._iv=void 0);var f=u.slice(0);l.encryptBlock(f,0),u[a-1]=u[a-1]+1|0;for(var d=0;d<a;d++)r[o+d]^=f[d]}});return i.Decryptor=s,i}(),t.mode.CTR})}(aa)),aa.exports}var ca={exports:{}},Yh;function DS(){return Yh||(Yh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var i=t.lib.BlockCipherMode.extend();function s(l){if((l>>24&255)===255){var a=l>>16&255,c=l>>8&255,u=l&255;a===255?(a=0,c===255?(c=0,u===255?u=0:++u):++c):++a,l=0,l+=a<<16,l+=c<<8,l+=u}else l+=1<<24;return l}function r(l){return(l[0]=s(l[0]))===0&&(l[1]=s(l[1])),l}var o=i.Encryptor=i.extend({processBlock:function(l,a){var c=this._cipher,u=c.blockSize,f=this._iv,d=this._counter;f&&(d=this._counter=f.slice(0),this._iv=void 0),r(d);var h=d.slice(0);c.encryptBlock(h,0);for(var p=0;p<u;p++)l[a+p]^=h[p]}});return i.Decryptor=o,i}(),t.mode.CTRGladman})}(ca)),ca.exports}var ua={exports:{}},Qh;function NS(){return Qh||(Qh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){return t.mode.OFB=function(){var i=t.lib.BlockCipherMode.extend(),s=i.Encryptor=i.extend({processBlock:function(r,o){var l=this._cipher,a=l.blockSize,c=this._iv,u=this._keystream;c&&(u=this._keystream=c.slice(0),this._iv=void 0),l.encryptBlock(u,0);for(var f=0;f<a;f++)r[o+f]^=u[f]}});return i.Decryptor=s,i}(),t.mode.OFB})}(ua)),ua.exports}var da={exports:{}},Xh;function RS(){return Xh||(Xh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){return t.mode.ECB=function(){var i=t.lib.BlockCipherMode.extend();return i.Encryptor=i.extend({processBlock:function(s,r){this._cipher.encryptBlock(s,r)}}),i.Decryptor=i.extend({processBlock:function(s,r){this._cipher.decryptBlock(s,r)}}),i}(),t.mode.ECB})}(da)),da.exports}var fa={exports:{}},Jh;function BS(){return Jh||(Jh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){return t.pad.AnsiX923={pad:function(i,s){var r=i.sigBytes,o=s*4,l=o-r%o,a=r+l-1;i.clamp(),i.words[a>>>2]|=l<<24-a%4*8,i.sigBytes+=l},unpad:function(i){var s=i.words[i.sigBytes-1>>>2]&255;i.sigBytes-=s}},t.pad.Ansix923})}(fa)),fa.exports}var ha={exports:{}},Zh;function FS(){return Zh||(Zh=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){return t.pad.Iso10126={pad:function(i,s){var r=s*4,o=r-i.sigBytes%r;i.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(i){var s=i.words[i.sigBytes-1>>>2]&255;i.sigBytes-=s}},t.pad.Iso10126})}(ha)),ha.exports}var pa={exports:{}},e0;function OS(){return e0||(e0=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){return t.pad.Iso97971={pad:function(i,s){i.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(i,s)},unpad:function(i){t.pad.ZeroPadding.unpad(i),i.sigBytes--}},t.pad.Iso97971})}(pa)),pa.exports}var _a={exports:{}},t0;function PS(){return t0||(t0=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){return t.pad.ZeroPadding={pad:function(i,s){var r=s*4;i.clamp(),i.sigBytes+=r-(i.sigBytes%r||r)},unpad:function(i){for(var s=i.words,r=i.sigBytes-1,r=i.sigBytes-1;r>=0;r--)if(s[r>>>2]>>>24-r%4*8&255){i.sigBytes=r+1;break}}},t.pad.ZeroPadding})}(_a)),_a.exports}var ma={exports:{}},n0;function MS(){return n0||(n0=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}(ma)),ma.exports}var ga={exports:{}},i0;function LS(){return i0||(i0=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Bt())})(Re,function(t){return function(i){var s=t,r=s.lib,o=r.CipherParams,l=s.enc,a=l.Hex,c=s.format;c.Hex={stringify:function(u){return u.ciphertext.toString(a)},parse:function(u){var f=a.parse(u);return o.create({ciphertext:f})}}}(),t.format.Hex})}(ga)),ga.exports}var va={exports:{}},s0;function $S(){return s0||(s0=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Ki(),Yi(),vi(),Bt())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.BlockCipher,o=i.algo,l=[],a=[],c=[],u=[],f=[],d=[],h=[],p=[],_=[],g=[];(function(){for(var b=[],E=0;E<256;E++)E<128?b[E]=E<<1:b[E]=E<<1^283;for(var w=0,T=0,E=0;E<256;E++){var k=T^T<<1^T<<2^T<<3^T<<4;k=k>>>8^k&255^99,l[w]=k,a[k]=w;var A=b[w],N=b[A],D=b[N],I=b[k]*257^k*16843008;c[w]=I<<24|I>>>8,u[w]=I<<16|I>>>16,f[w]=I<<8|I>>>24,d[w]=I;var I=D*16843009^N*65537^A*257^w*16843008;h[k]=I<<24|I>>>8,p[k]=I<<16|I>>>16,_[k]=I<<8|I>>>24,g[k]=I,w?(w=A^b[b[b[D^A]]],T^=b[b[T]]):w=T=1}})();var x=[0,1,2,4,8,16,32,64,128,27,54],v=o.AES=r.extend({_doReset:function(){var b;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var E=this._keyPriorReset=this._key,w=E.words,T=E.sigBytes/4,k=this._nRounds=T+6,A=(k+1)*4,N=this._keySchedule=[],D=0;D<A;D++)D<T?N[D]=w[D]:(b=N[D-1],D%T?T>6&&D%T==4&&(b=l[b>>>24]<<24|l[b>>>16&255]<<16|l[b>>>8&255]<<8|l[b&255]):(b=b<<8|b>>>24,b=l[b>>>24]<<24|l[b>>>16&255]<<16|l[b>>>8&255]<<8|l[b&255],b^=x[D/T|0]<<24),N[D]=N[D-T]^b);for(var I=this._invKeySchedule=[],S=0;S<A;S++){var D=A-S;if(S%4)var b=N[D];else var b=N[D-4];S<4||D<=4?I[S]=b:I[S]=h[l[b>>>24]]^p[l[b>>>16&255]]^_[l[b>>>8&255]]^g[l[b&255]]}}},encryptBlock:function(b,E){this._doCryptBlock(b,E,this._keySchedule,c,u,f,d,l)},decryptBlock:function(b,E){var w=b[E+1];b[E+1]=b[E+3],b[E+3]=w,this._doCryptBlock(b,E,this._invKeySchedule,h,p,_,g,a);var w=b[E+1];b[E+1]=b[E+3],b[E+3]=w},_doCryptBlock:function(b,E,w,T,k,A,N,D){for(var I=this._nRounds,S=b[E]^w[0],B=b[E+1]^w[1],H=b[E+2]^w[2],W=b[E+3]^w[3],F=4,M=1;M<I;M++){var K=T[S>>>24]^k[B>>>16&255]^A[H>>>8&255]^N[W&255]^w[F++],te=T[B>>>24]^k[H>>>16&255]^A[W>>>8&255]^N[S&255]^w[F++],ee=T[H>>>24]^k[W>>>16&255]^A[S>>>8&255]^N[B&255]^w[F++],L=T[W>>>24]^k[S>>>16&255]^A[B>>>8&255]^N[H&255]^w[F++];S=K,B=te,H=ee,W=L}var K=(D[S>>>24]<<24|D[B>>>16&255]<<16|D[H>>>8&255]<<8|D[W&255])^w[F++],te=(D[B>>>24]<<24|D[H>>>16&255]<<16|D[W>>>8&255]<<8|D[S&255])^w[F++],ee=(D[H>>>24]<<24|D[W>>>16&255]<<16|D[S>>>8&255]<<8|D[B&255])^w[F++],L=(D[W>>>24]<<24|D[S>>>16&255]<<16|D[B>>>8&255]<<8|D[H&255])^w[F++];b[E]=K,b[E+1]=te,b[E+2]=ee,b[E+3]=L},keySize:256/32});i.AES=r._createHelper(v)}(),t.AES})}(va)),va.exports}var ba={exports:{}},r0;function HS(){return r0||(r0=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Ki(),Yi(),vi(),Bt())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.WordArray,o=s.BlockCipher,l=i.algo,a=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],c=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],f=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],d=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],h=l.DES=o.extend({_doReset:function(){for(var x=this._key,v=x.words,b=[],E=0;E<56;E++){var w=a[E]-1;b[E]=v[w>>>5]>>>31-w%32&1}for(var T=this._subKeys=[],k=0;k<16;k++){for(var A=T[k]=[],N=u[k],E=0;E<24;E++)A[E/6|0]|=b[(c[E]-1+N)%28]<<31-E%6,A[4+(E/6|0)]|=b[28+(c[E+24]-1+N)%28]<<31-E%6;A[0]=A[0]<<1|A[0]>>>31;for(var E=1;E<7;E++)A[E]=A[E]>>>(E-1)*4+3;A[7]=A[7]<<5|A[7]>>>27}for(var D=this._invSubKeys=[],E=0;E<16;E++)D[E]=T[15-E]},encryptBlock:function(x,v){this._doCryptBlock(x,v,this._subKeys)},decryptBlock:function(x,v){this._doCryptBlock(x,v,this._invSubKeys)},_doCryptBlock:function(x,v,b){this._lBlock=x[v],this._rBlock=x[v+1],p.call(this,4,252645135),p.call(this,16,65535),_.call(this,2,858993459),_.call(this,8,16711935),p.call(this,1,1431655765);for(var E=0;E<16;E++){for(var w=b[E],T=this._lBlock,k=this._rBlock,A=0,N=0;N<8;N++)A|=f[N][((k^w[N])&d[N])>>>0];this._lBlock=k,this._rBlock=T^A}var D=this._lBlock;this._lBlock=this._rBlock,this._rBlock=D,p.call(this,1,1431655765),_.call(this,8,16711935),_.call(this,2,858993459),p.call(this,16,65535),p.call(this,4,252645135),x[v]=this._lBlock,x[v+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function p(x,v){var b=(this._lBlock>>>x^this._rBlock)&v;this._rBlock^=b,this._lBlock^=b<<x}function _(x,v){var b=(this._rBlock>>>x^this._lBlock)&v;this._lBlock^=b,this._rBlock^=b<<x}i.DES=o._createHelper(h);var g=l.TripleDES=o.extend({_doReset:function(){var x=this._key,v=x.words;if(v.length!==2&&v.length!==4&&v.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var b=v.slice(0,2),E=v.length<4?v.slice(0,2):v.slice(2,4),w=v.length<6?v.slice(0,2):v.slice(4,6);this._des1=h.createEncryptor(r.create(b)),this._des2=h.createEncryptor(r.create(E)),this._des3=h.createEncryptor(r.create(w))},encryptBlock:function(x,v){this._des1.encryptBlock(x,v),this._des2.decryptBlock(x,v),this._des3.encryptBlock(x,v)},decryptBlock:function(x,v){this._des3.decryptBlock(x,v),this._des2.encryptBlock(x,v),this._des1.decryptBlock(x,v)},keySize:192/32,ivSize:64/32,blockSize:64/32});i.TripleDES=o._createHelper(g)}(),t.TripleDES})}(ba)),ba.exports}var ya={exports:{}},o0;function US(){return o0||(o0=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Ki(),Yi(),vi(),Bt())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.StreamCipher,o=i.algo,l=o.RC4=r.extend({_doReset:function(){for(var u=this._key,f=u.words,d=u.sigBytes,h=this._S=[],p=0;p<256;p++)h[p]=p;for(var p=0,_=0;p<256;p++){var g=p%d,x=f[g>>>2]>>>24-g%4*8&255;_=(_+h[p]+x)%256;var v=h[p];h[p]=h[_],h[_]=v}this._i=this._j=0},_doProcessBlock:function(u,f){u[f]^=a.call(this)},keySize:256/32,ivSize:0});function a(){for(var u=this._S,f=this._i,d=this._j,h=0,p=0;p<4;p++){f=(f+1)%256,d=(d+u[f])%256;var _=u[f];u[f]=u[d],u[d]=_,h|=u[(u[f]+u[d])%256]<<24-p*8}return this._i=f,this._j=d,h}i.RC4=r._createHelper(l);var c=o.RC4Drop=l.extend({cfg:l.cfg.extend({drop:192}),_doReset:function(){l._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)a.call(this)}});i.RC4Drop=r._createHelper(c)}(),t.RC4})}(ya)),ya.exports}var xa={exports:{}},l0;function WS(){return l0||(l0=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Ki(),Yi(),vi(),Bt())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.StreamCipher,o=i.algo,l=[],a=[],c=[],u=o.Rabbit=r.extend({_doReset:function(){for(var d=this._key.words,h=this.cfg.iv,p=0;p<4;p++)d[p]=(d[p]<<8|d[p]>>>24)&16711935|(d[p]<<24|d[p]>>>8)&4278255360;var _=this._X=[d[0],d[3]<<16|d[2]>>>16,d[1],d[0]<<16|d[3]>>>16,d[2],d[1]<<16|d[0]>>>16,d[3],d[2]<<16|d[1]>>>16],g=this._C=[d[2]<<16|d[2]>>>16,d[0]&4294901760|d[1]&65535,d[3]<<16|d[3]>>>16,d[1]&4294901760|d[2]&65535,d[0]<<16|d[0]>>>16,d[2]&4294901760|d[3]&65535,d[1]<<16|d[1]>>>16,d[3]&4294901760|d[0]&65535];this._b=0;for(var p=0;p<4;p++)f.call(this);for(var p=0;p<8;p++)g[p]^=_[p+4&7];if(h){var x=h.words,v=x[0],b=x[1],E=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,w=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360,T=E>>>16|w&4294901760,k=w<<16|E&65535;g[0]^=E,g[1]^=T,g[2]^=w,g[3]^=k,g[4]^=E,g[5]^=T,g[6]^=w,g[7]^=k;for(var p=0;p<4;p++)f.call(this)}},_doProcessBlock:function(d,h){var p=this._X;f.call(this),l[0]=p[0]^p[5]>>>16^p[3]<<16,l[1]=p[2]^p[7]>>>16^p[5]<<16,l[2]=p[4]^p[1]>>>16^p[7]<<16,l[3]=p[6]^p[3]>>>16^p[1]<<16;for(var _=0;_<4;_++)l[_]=(l[_]<<8|l[_]>>>24)&16711935|(l[_]<<24|l[_]>>>8)&4278255360,d[h+_]^=l[_]},blockSize:128/32,ivSize:64/32});function f(){for(var d=this._X,h=this._C,p=0;p<8;p++)a[p]=h[p];h[0]=h[0]+1295307597+this._b|0,h[1]=h[1]+3545052371+(h[0]>>>0<a[0]>>>0?1:0)|0,h[2]=h[2]+886263092+(h[1]>>>0<a[1]>>>0?1:0)|0,h[3]=h[3]+1295307597+(h[2]>>>0<a[2]>>>0?1:0)|0,h[4]=h[4]+3545052371+(h[3]>>>0<a[3]>>>0?1:0)|0,h[5]=h[5]+886263092+(h[4]>>>0<a[4]>>>0?1:0)|0,h[6]=h[6]+1295307597+(h[5]>>>0<a[5]>>>0?1:0)|0,h[7]=h[7]+3545052371+(h[6]>>>0<a[6]>>>0?1:0)|0,this._b=h[7]>>>0<a[7]>>>0?1:0;for(var p=0;p<8;p++){var _=d[p]+h[p],g=_&65535,x=_>>>16,v=((g*g>>>17)+g*x>>>15)+x*x,b=((_&4294901760)*_|0)+((_&65535)*_|0);c[p]=v^b}d[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,d[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,d[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,d[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,d[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,d[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,d[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,d[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}i.Rabbit=r._createHelper(u)}(),t.Rabbit})}(xa)),xa.exports}var Ca={exports:{}},a0;function qS(){return a0||(a0=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Ki(),Yi(),vi(),Bt())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.StreamCipher,o=i.algo,l=[],a=[],c=[],u=o.RabbitLegacy=r.extend({_doReset:function(){var d=this._key.words,h=this.cfg.iv,p=this._X=[d[0],d[3]<<16|d[2]>>>16,d[1],d[0]<<16|d[3]>>>16,d[2],d[1]<<16|d[0]>>>16,d[3],d[2]<<16|d[1]>>>16],_=this._C=[d[2]<<16|d[2]>>>16,d[0]&4294901760|d[1]&65535,d[3]<<16|d[3]>>>16,d[1]&4294901760|d[2]&65535,d[0]<<16|d[0]>>>16,d[2]&4294901760|d[3]&65535,d[1]<<16|d[1]>>>16,d[3]&4294901760|d[0]&65535];this._b=0;for(var g=0;g<4;g++)f.call(this);for(var g=0;g<8;g++)_[g]^=p[g+4&7];if(h){var x=h.words,v=x[0],b=x[1],E=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,w=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360,T=E>>>16|w&4294901760,k=w<<16|E&65535;_[0]^=E,_[1]^=T,_[2]^=w,_[3]^=k,_[4]^=E,_[5]^=T,_[6]^=w,_[7]^=k;for(var g=0;g<4;g++)f.call(this)}},_doProcessBlock:function(d,h){var p=this._X;f.call(this),l[0]=p[0]^p[5]>>>16^p[3]<<16,l[1]=p[2]^p[7]>>>16^p[5]<<16,l[2]=p[4]^p[1]>>>16^p[7]<<16,l[3]=p[6]^p[3]>>>16^p[1]<<16;for(var _=0;_<4;_++)l[_]=(l[_]<<8|l[_]>>>24)&16711935|(l[_]<<24|l[_]>>>8)&4278255360,d[h+_]^=l[_]},blockSize:128/32,ivSize:64/32});function f(){for(var d=this._X,h=this._C,p=0;p<8;p++)a[p]=h[p];h[0]=h[0]+1295307597+this._b|0,h[1]=h[1]+3545052371+(h[0]>>>0<a[0]>>>0?1:0)|0,h[2]=h[2]+886263092+(h[1]>>>0<a[1]>>>0?1:0)|0,h[3]=h[3]+1295307597+(h[2]>>>0<a[2]>>>0?1:0)|0,h[4]=h[4]+3545052371+(h[3]>>>0<a[3]>>>0?1:0)|0,h[5]=h[5]+886263092+(h[4]>>>0<a[4]>>>0?1:0)|0,h[6]=h[6]+1295307597+(h[5]>>>0<a[5]>>>0?1:0)|0,h[7]=h[7]+3545052371+(h[6]>>>0<a[6]>>>0?1:0)|0,this._b=h[7]>>>0<a[7]>>>0?1:0;for(var p=0;p<8;p++){var _=d[p]+h[p],g=_&65535,x=_>>>16,v=((g*g>>>17)+g*x>>>15)+x*x,b=((_&4294901760)*_|0)+((_&65535)*_|0);c[p]=v^b}d[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,d[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,d[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,d[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,d[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,d[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,d[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,d[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}i.RabbitLegacy=r._createHelper(u)}(),t.RabbitLegacy})}(Ca)),Ca.exports}var Ea={exports:{}},c0;function zS(){return c0||(c0=1,function(n,e){(function(t,i,s){n.exports=i(ze(),Ki(),Yi(),vi(),Bt())})(Re,function(t){return function(){var i=t,s=i.lib,r=s.BlockCipher,o=i.algo;const l=16,a=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],c=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var u={pbox:[],sbox:[]};function f(g,x){let v=x>>24&255,b=x>>16&255,E=x>>8&255,w=x&255,T=g.sbox[0][v]+g.sbox[1][b];return T=T^g.sbox[2][E],T=T+g.sbox[3][w],T}function d(g,x,v){let b=x,E=v,w;for(let T=0;T<l;++T)b=b^g.pbox[T],E=f(g,b)^E,w=b,b=E,E=w;return w=b,b=E,E=w,E=E^g.pbox[l],b=b^g.pbox[l+1],{left:b,right:E}}function h(g,x,v){let b=x,E=v,w;for(let T=l+1;T>1;--T)b=b^g.pbox[T],E=f(g,b)^E,w=b,b=E,E=w;return w=b,b=E,E=w,E=E^g.pbox[1],b=b^g.pbox[0],{left:b,right:E}}function p(g,x,v){for(let k=0;k<4;k++){g.sbox[k]=[];for(let A=0;A<256;A++)g.sbox[k][A]=c[k][A]}let b=0;for(let k=0;k<l+2;k++)g.pbox[k]=a[k]^x[b],b++,b>=v&&(b=0);let E=0,w=0,T=0;for(let k=0;k<l+2;k+=2)T=d(g,E,w),E=T.left,w=T.right,g.pbox[k]=E,g.pbox[k+1]=w;for(let k=0;k<4;k++)for(let A=0;A<256;A+=2)T=d(g,E,w),E=T.left,w=T.right,g.sbox[k][A]=E,g.sbox[k][A+1]=w;return!0}var _=o.Blowfish=r.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var g=this._keyPriorReset=this._key,x=g.words,v=g.sigBytes/4;p(u,x,v)}},encryptBlock:function(g,x){var v=d(u,g[x],g[x+1]);g[x]=v.left,g[x+1]=v.right},decryptBlock:function(g,x){var v=h(u,g[x],g[x+1]);g[x]=v.left,g[x+1]=v.right},blockSize:64/32,keySize:128/32,ivSize:64/32});i.Blowfish=r._createHelper(_)}(),t.Blowfish})}(Ea)),Ea.exports}(function(n,e){(function(t,i,s){n.exports=i(ze(),yl(),yS(),xS(),Ki(),CS(),Yi(),ag(),Ru(),ES(),cg(),wS(),kS(),IS(),Bu(),SS(),vi(),Bt(),AS(),TS(),DS(),NS(),RS(),BS(),FS(),OS(),PS(),MS(),LS(),$S(),HS(),US(),WS(),qS(),zS())})(Re,function(t){return t})})(_S);/**
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
 */const ug={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ue=function(n,e){if(!n)throw Hs(e)},Hs=function(n){return new Error("Firebase Database ("+ug.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const dg=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},VS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Fu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,a=s+2<n.length,c=a?n[s+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,h=c&63;a||(h=64,o||(d=64)),i.push(t[u],t[f],t[d],t[h])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dg(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):VS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||c==null||f==null)throw new jS;const d=r<<2|l>>4;if(i.push(d),c!==64){const h=l<<4&240|c>>2;if(i.push(h),f!==64){const p=c<<6&192|f;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fg=function(n){const e=dg(n);return Fu.encodeByteArray(e,!0)},Uo=function(n){return fg(n).replace(/\./g,"")},uc=function(n){try{return Fu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GS(n){return hg(void 0,n)}function hg(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!KS(t)||(n[t]=hg(n[t],e[t]));return n}function KS(n){return n!=="__proto__"}/**
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
 */function YS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QS=()=>YS().__FIREBASE_DEFAULTS__,XS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},JS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&uc(n[1]);return e&&JSON.parse(e)},pg=()=>{try{return QS()||XS()||JS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ZS=n=>{var e,t;return(t=(e=pg())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},e4=n=>{const e=ZS(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},_g=()=>{var n;return(n=pg())===null||n===void 0?void 0:n.config};/**
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
 */class Ou{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function t4(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[Uo(JSON.stringify(t)),Uo(JSON.stringify(o)),l].join(".")}/**
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
 */function n4(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(n4())}function i4(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gg(){return ug.NODE_ADMIN===!0}function s4(){try{return typeof indexedDB=="object"}catch{return!1}}function r4(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const o4="FirebaseError";class jr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=o4,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vg.prototype.create)}}class vg{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?l4(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new jr(s,l,i)}}function l4(n,e){return n.replace(a4,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const a4=/\{\$([^}]+)}/g;/**
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
 */function Tr(n){return JSON.parse(n)}function Mt(n){return JSON.stringify(n)}/**
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
 */const bg=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Tr(uc(r[0])||""),t=Tr(uc(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},c4=function(n){const e=bg(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},u4=function(n){const e=bg(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Gn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ts(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function u0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wo(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function dc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(d0(r)&&d0(o)){if(!dc(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function d0(n){return n!==null&&typeof n=="object"}/**
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
 */function d4(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class f4{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)i[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const d=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):f<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(s<<5|s>>>27)+c+a+u+i[f]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function h4(n,e){return`${n} failed: ${e} argument `}/**
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
 */const p4=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,ue(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},xl=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function yg(n){return n&&n._delegate?n._delegate:n}class Dr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ci="[DEFAULT]";/**
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
 */class _4{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ou;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(g4(e))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ci){return this.instances.has(e)}getOptions(e=Ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:m4(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ci){return this.component?this.component.multipleInstances?e:Ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m4(n){return n===Ci?void 0:n}function g4(n){return n.instantiationMode==="EAGER"}/**
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
 */class v4{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _4(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var at;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(at||(at={}));const b4={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},y4=at.INFO,x4={[at.DEBUG]:"log",[at.VERBOSE]:"log",[at.INFO]:"info",[at.WARN]:"warn",[at.ERROR]:"error"},C4=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=x4[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xg{constructor(e){this.name=e,this._logLevel=y4,this._logHandler=C4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in at))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?b4[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,at.DEBUG,...e),this._logHandler(this,at.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,at.VERBOSE,...e),this._logHandler(this,at.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,at.INFO,...e),this._logHandler(this,at.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,at.WARN,...e),this._logHandler(this,at.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,at.ERROR,...e),this._logHandler(this,at.ERROR,...e)}}const E4=(n,e)=>e.some(t=>n instanceof t);let f0,h0;function w4(){return f0||(f0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k4(){return h0||(h0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cg=new WeakMap,fc=new WeakMap,Eg=new WeakMap,wa=new WeakMap,Pu=new WeakMap;function I4(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ci(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Cg.set(t,n)}).catch(()=>{}),Pu.set(e,n),e}function S4(n){if(fc.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});fc.set(n,e)}let hc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return fc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Eg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ci(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function A4(n){hc=n(hc)}function T4(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ka(this),e,...t);return Eg.set(i,e.sort?e.sort():[e]),ci(i)}:k4().includes(n)?function(...e){return n.apply(ka(this),e),ci(Cg.get(this))}:function(...e){return ci(n.apply(ka(this),e))}}function D4(n){return typeof n=="function"?T4(n):(n instanceof IDBTransaction&&S4(n),E4(n,w4())?new Proxy(n,hc):n)}function ci(n){if(n instanceof IDBRequest)return I4(n);if(wa.has(n))return wa.get(n);const e=D4(n);return e!==n&&(wa.set(n,e),Pu.set(e,n)),e}const ka=n=>Pu.get(n);function N4(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),l=ci(o);return i&&o.addEventListener("upgradeneeded",a=>{i(ci(o.result),a.oldVersion,a.newVersion,ci(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const R4=["get","getKey","getAll","getAllKeys","count"],B4=["put","add","delete","clear"],Ia=new Map;function p0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ia.get(e))return Ia.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=B4.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||R4.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),s&&a.done]))[0]};return Ia.set(e,r),r}A4(n=>({...n,get:(e,t,i)=>p0(e,t)||n.get(e,t,i),has:(e,t)=>!!p0(e,t)||n.has(e,t)}));/**
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
 */class F4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(O4(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function O4(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pc="@firebase/app",_0="0.9.13";/**
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
 */const Ui=new xg("@firebase/app"),P4="@firebase/app-compat",M4="@firebase/analytics-compat",L4="@firebase/analytics",$4="@firebase/app-check-compat",H4="@firebase/app-check",U4="@firebase/auth",W4="@firebase/auth-compat",q4="@firebase/database",z4="@firebase/database-compat",V4="@firebase/functions",j4="@firebase/functions-compat",G4="@firebase/installations",K4="@firebase/installations-compat",Y4="@firebase/messaging",Q4="@firebase/messaging-compat",X4="@firebase/performance",J4="@firebase/performance-compat",Z4="@firebase/remote-config",eA="@firebase/remote-config-compat",tA="@firebase/storage",nA="@firebase/storage-compat",iA="@firebase/firestore",sA="@firebase/firestore-compat",rA="firebase",oA="9.23.0";/**
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
 */const _c="[DEFAULT]",lA={[pc]:"fire-core",[P4]:"fire-core-compat",[L4]:"fire-analytics",[M4]:"fire-analytics-compat",[H4]:"fire-app-check",[$4]:"fire-app-check-compat",[U4]:"fire-auth",[W4]:"fire-auth-compat",[q4]:"fire-rtdb",[z4]:"fire-rtdb-compat",[V4]:"fire-fn",[j4]:"fire-fn-compat",[G4]:"fire-iid",[K4]:"fire-iid-compat",[Y4]:"fire-fcm",[Q4]:"fire-fcm-compat",[X4]:"fire-perf",[J4]:"fire-perf-compat",[Z4]:"fire-rc",[eA]:"fire-rc-compat",[tA]:"fire-gcs",[nA]:"fire-gcs-compat",[iA]:"fire-fst",[sA]:"fire-fst-compat","fire-js":"fire-js",[rA]:"fire-js-all"};/**
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
 */const qo=new Map,mc=new Map;function aA(n,e){try{n.container.addComponent(e)}catch(t){Ui.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zo(n){const e=n.name;if(mc.has(e))return Ui.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,n);for(const t of qo.values())aA(t,n);return!0}function cA(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const uA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ui=new vg("app","Firebase",uA);/**
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
 */class dA{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
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
 */const fA=oA;function Mu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:_c,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ui.create("bad-app-name",{appName:String(s)});if(t||(t=_g()),!t)throw ui.create("no-options");const r=qo.get(s);if(r){if(dc(t,r.options)&&dc(i,r.config))return r;throw ui.create("duplicate-app",{appName:s})}const o=new v4(s);for(const a of mc.values())o.addComponent(a);const l=new dA(t,i,o);return qo.set(s,l),l}function Lu(n=_c){const e=qo.get(n);if(!e&&n===_c&&_g())return Mu();if(!e)throw ui.create("no-app",{appName:n});return e}function ps(n,e,t){var i;let s=(i=lA[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ui.warn(l.join(" "));return}zo(new Dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hA="firebase-heartbeat-database",pA=1,Nr="firebase-heartbeat-store";let Sa=null;function wg(){return Sa||(Sa=N4(hA,pA,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Nr)}}}).catch(n=>{throw ui.create("idb-open",{originalErrorMessage:n.message})})),Sa}async function _A(n){try{return await(await wg()).transaction(Nr).objectStore(Nr).get(kg(n))}catch(e){if(e instanceof jr)Ui.warn(e.message);else{const t=ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ui.warn(t.message)}}}async function m0(n,e){try{const i=(await wg()).transaction(Nr,"readwrite");await i.objectStore(Nr).put(e,kg(n)),await i.done}catch(t){if(t instanceof jr)Ui.warn(t.message);else{const i=ui.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ui.warn(i.message)}}}function kg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const mA=1024,gA=30*24*60*60*1e3;class vA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=g0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=gA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=g0(),{heartbeatsToSend:t,unsentEntries:i}=bA(this._heartbeatsCache.heartbeats),s=Uo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function g0(){return new Date().toISOString().substring(0,10)}function bA(n,e=mA){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),v0(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),v0(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class yA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s4()?r4().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _A(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return m0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return m0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function v0(n){return Uo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function xA(n){zo(new Dr("platform-logger",e=>new F4(e),"PRIVATE")),zo(new Dr("heartbeat",e=>new vA(e),"PRIVATE")),ps(pc,_0,n),ps(pc,_0,"esm2017"),ps("fire-js","")}xA("");var CA="firebase",EA="9.23.0";/**
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
 */ps(CA,EA,"app");const b0="@firebase/database",y0="0.14.4";/**
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
 */let Ig="";function wA(n){Ig=n}/**
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
 */class kA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Mt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Tr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class IA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Gn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Sg=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kA(e)}}catch{}return new IA},Si=Sg("localStorage"),gc=Sg("sessionStorage");/**
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
 */const _s=new xg("@firebase/database"),SA=function(){let n=1;return function(){return n++}}(),Ag=function(n){const e=p4(n),t=new f4;t.update(e);const i=t.digest();return Fu.encodeByteArray(i)},Gr=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Gr.apply(null,i):typeof i=="object"?e+=Mt(i):e+=i,e+=" "}return e};let Ri=null,x0=!0;const AA=function(n,e){ue(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(_s.logLevel=at.VERBOSE,Ri=_s.log.bind(_s),e&&gc.set("logging_enabled",!0)):typeof n=="function"?Ri=n:(Ri=null,gc.remove("logging_enabled"))},Ut=function(...n){if(x0===!0&&(x0=!1,Ri===null&&gc.get("logging_enabled")===!0&&AA(!0)),Ri){const e=Gr.apply(null,n);Ri(e)}},Kr=function(n){return function(...e){Ut(n,...e)}},vc=function(...n){const e="FIREBASE INTERNAL ERROR: "+Gr(...n);_s.error(e)},jn=function(...n){const e=`FIREBASE FATAL ERROR: ${Gr(...n)}`;throw _s.error(e),new Error(e)},an=function(...n){const e="FIREBASE WARNING: "+Gr(...n);_s.warn(e)},TA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&an("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tg=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},DA=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ds="[MIN_NAME]",Wi="[MAX_NAME]",Us=function(n,e){if(n===e)return 0;if(n===Ds||e===Wi)return-1;if(e===Ds||n===Wi)return 1;{const t=C0(n),i=C0(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},NA=function(n,e){return n===e?0:n<e?-1:1},Js=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Mt(e))},$u=function(n){if(typeof n!="object"||n===null)return Mt(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Mt(e[i]),t+=":",t+=$u(n[e[i]]);return t+="}",t},Dg=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function hn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ng=function(n){ue(!Tg(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,a;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let f="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},RA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},FA=new RegExp("^-?(0*)\\d{1,10}$"),OA=-2147483648,PA=2147483647,C0=function(n){if(FA.test(n)){const e=Number(n);if(e>=OA&&e<=PA)return e}return null},Yr=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw an("Exception was thrown by user callback.",t),e},Math.floor(0))}},MA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class LA{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){an(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class $A{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',an(e)}}class ms{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ms.OWNER="owner";/**
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
 */const Hu="5",Rg="v",Bg="s",Fg="r",Og="f",Pg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mg="ls",Lg="p",bc="ac",$g="websocket",Hg="long_polling";/**
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
 */class Ug{constructor(e,t,i,s,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Si.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Si.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function HA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Wg(n,e,t){ue(typeof e=="string","typeof type must == string"),ue(typeof t=="object","typeof params must == object");let i;if(e===$g)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Hg)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HA(n)&&(t.ns=n.namespace);const s=[];return hn(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class UA{constructor(){this.counters_={}}incrementCounter(e,t=1){Gn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return GS(this.counters_)}}/**
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
 */const Aa={},Ta={};function Uu(n){const e=n.toString();return Aa[e]||(Aa[e]=new UA),Aa[e]}function WA(n,e){const t=n.toString();return Ta[t]||(Ta[t]=e()),Ta[t]}/**
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
 */class qA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Yr(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const E0="start",zA="close",VA="pLPCommand",jA="pRTLPCB",qg="id",zg="pw",Vg="ser",GA="cb",KA="seg",YA="ts",QA="d",XA="dframe",jg=1870,Gg=30,JA=jg-Gg,ZA=25e3,eT=3e4;class rs{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kr(e),this.stats_=Uu(t),this.urlFn=a=>(this.appCheckToken&&(a[bc]=this.appCheckToken),Wg(t,Hg,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new qA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eT)),DA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wu((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===E0)this.id=l,this.password=a;else if(o===zA)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[E0]="t",i[Vg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[GA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Rg]=Hu,this.transportSessionId&&(i[Bg]=this.transportSessionId),this.lastSessionId&&(i[Mg]=this.lastSessionId),this.applicationId&&(i[Lg]=this.applicationId),this.appCheckToken&&(i[bc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pg.test(location.hostname)&&(i[Fg]=Og);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){rs.forceAllow_=!0}static forceDisallow(){rs.forceDisallow_=!0}static isAvailable(){return rs.forceAllow_?!0:!rs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!RA()&&!BA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Mt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=fg(t),s=Dg(i,JA);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[XA]="t",i[qg]=e,i[zg]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Mt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Wu{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SA(),window[VA+this.uniqueCallbackIdentifier]=e,window[jA+this.uniqueCallbackIdentifier]=t,this.myIFrame=Wu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ut("frame writing exception"),l.stack&&Ut(l.stack),Ut(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ut("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qg]=this.myID,e[zg]=this.myPW,e[Vg]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gg+i.length<=jg;){const o=this.pendingSegs.shift();i=i+"&"+KA+s+"="+o.seg+"&"+YA+s+"="+o.ts+"&"+QA+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(ZA)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ut("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const tT=16384,nT=45e3;let Vo=null;typeof MozWebSocket<"u"?Vo=MozWebSocket:typeof WebSocket<"u"&&(Vo=WebSocket);class mn{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kr(this.connId),this.stats_=Uu(t),this.connURL=mn.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Rg]=Hu,typeof location<"u"&&location.hostname&&Pg.test(location.hostname)&&(o[Fg]=Og),t&&(o[Bg]=t),i&&(o[Mg]=i),s&&(o[bc]=s),r&&(o[Lg]=r),Wg(e,$g,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Si.set("previous_websocket_failure",!0);try{let i;gg(),this.mySock=new Vo(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){mn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Vo!==null&&!mn.forceDisallow_}static previouslyFailed(){return Si.isInMemoryStorage||Si.get("previous_websocket_failure")===!0}markConnectionHealthy(){Si.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Tr(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ue(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Mt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Dg(t,tT);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nT))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mn.responsesRequiredToBeHealthy=2;mn.healthyTimeout=3e4;/**
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
 */class Rr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[rs,mn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=mn&&mn.isAvailable();let i=t&&!mn.previouslyFailed();if(e.webSocketOnly&&(t||an("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[mn];else{const s=this.transports_=[];for(const r of Rr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Rr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rr.globalTransportInitialized_=!1;/**
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
 */const iT=6e4,sT=5e3,rT=10*1024,oT=100*1024,Da="t",w0="d",lT="s",k0="r",aT="e",I0="o",S0="a",A0="n",T0="p",cT="h";class uT{constructor(e,t,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kr("c:"+this.id+":"),this.transportManager_=new Rr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=fr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Da in e){const t=e[Da];t===S0?this.upgradeIfSecondaryHealthy_():t===k0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===I0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Js("t",e),i=Js("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:T0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:S0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:A0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Js("t",e),i=Js("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Js(Da,e);if(w0 in e){const i=e[w0];if(t===cT){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===A0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===lT?this.onConnectionShutdown_(i):t===k0?this.onReset_(i):t===aT?vc("Server Error: "+i):t===I0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Hu!==i&&an("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),fr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:T0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Si.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Kg{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Yg{constructor(e){this.allowedEvents_=e,this.listeners_={},ue(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){ue(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class jo extends Yg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new jo}getInitialEvent(e){return ue(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const D0=32,N0=768;class ht{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function st(){return new ht("")}function Ve(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function gi(n){return n.pieces_.length-n.pieceNum_}function dt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ht(n.pieces_,e)}function Qg(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function dT(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Xg(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Jg(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ht(e,0)}function Rt(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ht)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new ht(t,0)}function qe(n){return n.pieceNum_>=n.pieces_.length}function un(n,e){const t=Ve(n),i=Ve(e);if(t===null)return e;if(t===i)return un(dt(n),dt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Zg(n,e){if(gi(n)!==gi(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function bn(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(gi(n)>gi(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class fT{constructor(e,t){this.errorPrefix_=t,this.parts_=Xg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=xl(this.parts_[i]);e1(this)}}function hT(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=xl(e),e1(n)}function pT(n){const e=n.parts_.pop();n.byteLength_-=xl(e),n.parts_.length>0&&(n.byteLength_-=1)}function e1(n){if(n.byteLength_>N0)throw new Error(n.errorPrefix_+"has a key path longer than "+N0+" bytes ("+n.byteLength_+").");if(n.parts_.length>D0)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+D0+") or object contains a cycle "+Ei(n))}function Ei(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class qu extends Yg{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new qu}getInitialEvent(e){return ue(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Zs=1e3,_T=60*5*1e3,R0=30*1e3,mT=1.3,gT=3e4,vT="server_kill",B0=3;class Un extends Kg{constructor(e,t,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Un.nextPersistentConnectionId_++,this.log_=Kr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zs,this.maxReconnectDelay_=_T,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!gg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&jo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Mt(r)),ue(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ou,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ue(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Un.warnOnListenWarnings_(a,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Gn(e,"w")){const i=Ts(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();an(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||u4(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=R0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=c4(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Mt(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):vc("Unrecognized action received from server: "+Mt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ue(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gT&&(this.reconnectDelay_=Zs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Un.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(f){ue(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ut("getToken() completed but was canceled"):(Ut("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,l=new uT(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,h=>{an(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(vT)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&an(f),a())}}}interrupt(e){Ut("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ut("Resuming connection for reason: "+e),delete this.interruptReasons_[e],u0(this.interruptReasons_)&&(this.reconnectDelay_=Zs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>$u(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new ht(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ut("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=B0&&(this.reconnectDelay_=R0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ut("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=B0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ig.replace(/\./g,"-")]=1,mg()?e["framework.cordova"]=1:i4()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=jo.getInstance().currentlyOnline();return u0(this.interruptReasons_)&&e}}Un.nextPersistentConnectionId_=0;Un.nextConnectionId_=0;/**
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
 */class je{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new je(e,t)}}/**
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
 */class Cl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new je(Ds,e),s=new je(Ds,t);return this.compare(i,s)!==0}minPost(){return je.MIN}}/**
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
 */let io;class t1 extends Cl{static get __EMPTY_NODE(){return io}static set __EMPTY_NODE(e){io=e}compare(e,t){return Us(e.name,t.name)}isDefinedOn(e){throw Hs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return je.MIN}maxPost(){return new je(Wi,io)}makePost(e,t){return ue(typeof e=="string","KeyIndex indexValue must always be a string."),new je(e,io)}toString(){return".key"}}const gs=new t1;/**
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
 */class so{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Tt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Tt.RED,this.left=s??Zt.EMPTY_NODE,this.right=r??Zt.EMPTY_NODE}copy(e,t,i,s,r){return new Tt(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Zt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Zt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Tt.RED=!0;Tt.BLACK=!1;class bT{copy(e,t,i,s,r){return this}insert(e,t,i){return new Tt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Zt{constructor(e,t=Zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Tt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new so(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new so(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new so(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new so(this.root_,null,this.comparator_,!0,e)}}Zt.EMPTY_NODE=new bT;/**
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
 */function yT(n,e){return Us(n.name,e.name)}function zu(n,e){return Us(n,e)}/**
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
 */let yc;function xT(n){yc=n}const n1=function(n){return typeof n=="number"?"number:"+Ng(n):"string:"+n},i1=function(n){if(n.isLeafNode()){const e=n.val();ue(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gn(e,".sv"),"Priority must be a string or number.")}else ue(n===yc||n.isEmpty(),"priority of unexpected type.");ue(n===yc||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let F0;class At{constructor(e,t=At.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ue(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),i1(this.priorityNode_)}static set __childrenNodeConstructor(e){F0=e}static get __childrenNodeConstructor(){return F0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new At(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:At.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return qe(e)?this:Ve(e)===".priority"?this.priorityNode_:At.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:At.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Ve(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ue(i!==".priority"||gi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,At.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+n1(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ng(this.value_):e+=this.value_,this.lazyHash_=Ag(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===At.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof At.__childrenNodeConstructor?-1:(ue(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=At.VALUE_TYPE_ORDER.indexOf(t),r=At.VALUE_TYPE_ORDER.indexOf(i);return ue(s>=0,"Unknown leaf type: "+t),ue(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}At.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let s1,r1;function CT(n){s1=n}function ET(n){r1=n}class wT extends Cl{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Us(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return je.MIN}maxPost(){return new je(Wi,new At("[PRIORITY-POST]",r1))}makePost(e,t){const i=s1(e);return new je(t,new At("[PRIORITY-POST]",i))}toString(){return".priority"}}const zt=new wT;/**
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
 */const kT=Math.log(2);class IT{constructor(e){const t=r=>parseInt(Math.log(r)/kT,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Go=function(n,e,t,i){n.sort(e);const s=function(a,c){const u=c-a;let f,d;if(u===0)return null;if(u===1)return f=n[a],d=t?t(f):f,new Tt(d,f.node,Tt.BLACK,null,null);{const h=parseInt(u/2,10)+a,p=s(a,h),_=s(h+1,c);return f=n[h],d=t?t(f):f,new Tt(d,f.node,Tt.BLACK,p,_)}},r=function(a){let c=null,u=null,f=n.length;const d=function(p,_){const g=f-p,x=f;f-=p;const v=s(g+1,x),b=n[g],E=t?t(b):b;h(new Tt(E,b.node,_,null,v))},h=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<a.count;++p){const _=a.nextBitIsOne(),g=Math.pow(2,a.count-(p+1));_?d(g,Tt.BLACK):(d(g,Tt.BLACK),d(g,Tt.RED))}return u},o=new IT(n.length),l=r(o);return new Zt(i||e,l)};/**
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
 */let Na;const ts={};class $n{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return ue(ts&&zt,"ChildrenNode.ts has not been loaded"),Na=Na||new $n({".priority":ts},{".priority":zt}),Na}get(e){const t=Ts(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Zt?t:null}hasIndex(e){return Gn(this.indexSet_,e.toString())}addIndex(e,t){ue(e!==gs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(je.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Go(i,e.getCompare()):l=ts;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new $n(u,c)}addToIndexes(e,t){const i=Wo(this.indexes_,(s,r)=>{const o=Ts(this.indexSet_,r);if(ue(o,"Missing index implementation for "+r),s===ts)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(je.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Go(l,o.getCompare())}else return ts;else{const l=t.get(e.name);let a=s;return l&&(a=a.remove(new je(e.name,l))),a.insert(e,e.node)}});return new $n(i,this.indexSet_)}removeFromIndexes(e,t){const i=Wo(this.indexes_,s=>{if(s===ts)return s;{const r=t.get(e.name);return r?s.remove(new je(e.name,r)):s}});return new $n(i,this.indexSet_)}}/**
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
 */let er;class et{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&i1(this.priorityNode_),this.children_.isEmpty()&&ue(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return er||(er=new et(new Zt(zu),null,$n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||er}updatePriority(e){return this.children_.isEmpty()?this:new et(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?er:t}}getChild(e){const t=Ve(e);return t===null?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ue(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new je(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?er:this.priorityNode_;return new et(s,o,r)}}updateChild(e,t){const i=Ve(e);if(i===null)return t;{ue(Ve(e)!==".priority"||gi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(dt(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(zt,(o,l)=>{t[o]=l.val(e),i++,r&&et.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+n1(this.getPriority().val())+":"),this.forEachChild(zt,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ag(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new je(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new je(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,je.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,je.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qr?-1:0}withIndex(e){if(e===gs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new et(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===gs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(zt),s=t.getIterator(zt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===gs?null:this.indexMap_.get(e.toString())}}et.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ST extends et{constructor(){super(new Zt(zu),et.EMPTY_NODE,$n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return et.EMPTY_NODE}isEmpty(){return!1}}const Qr=new ST;Object.defineProperties(je,{MIN:{value:new je(Ds,et.EMPTY_NODE)},MAX:{value:new je(Wi,Qr)}});t1.__EMPTY_NODE=et.EMPTY_NODE;At.__childrenNodeConstructor=et;xT(Qr);ET(Qr);/**
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
 */const AT=!0;function Wt(n,e=null){if(n===null)return et.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ue(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new At(t,Wt(e))}if(!(n instanceof Array)&&AT){const t=[];let i=!1;if(hn(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=Wt(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),t.push(new je(o,a)))}}),t.length===0)return et.EMPTY_NODE;const r=Go(t,yT,o=>o.name,zu);if(i){const o=Go(t,zt.getCompare());return new et(r,Wt(e),new $n({".priority":o},{".priority":zt}))}else return new et(r,Wt(e),$n.Default)}else{let t=et.EMPTY_NODE;return hn(n,(i,s)=>{if(Gn(n,i)&&i.substring(0,1)!=="."){const r=Wt(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Wt(e))}}CT(Wt);/**
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
 */class TT extends Cl{constructor(e){super(),this.indexPath_=e,ue(!qe(e)&&Ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Us(e.name,t.name):r}makePost(e,t){const i=Wt(e),s=et.EMPTY_NODE.updateChild(this.indexPath_,i);return new je(t,s)}maxPost(){const e=et.EMPTY_NODE.updateChild(this.indexPath_,Qr);return new je(Wi,e)}toString(){return Xg(this.indexPath_,0).join("/")}}/**
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
 */class DT extends Cl{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Us(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return je.MIN}maxPost(){return je.MAX}makePost(e,t){const i=Wt(e);return new je(t,i)}toString(){return".value"}}const NT=new DT;/**
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
 */function RT(n){return{type:"value",snapshotNode:n}}function BT(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function FT(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function O0(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function OT(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Vu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=zt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ue(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ue(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ds}hasEnd(){return this.endSet_}getIndexEndValue(){return ue(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ue(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ue(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===zt}copy(){const e=new Vu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function P0(n){const e={};if(n.isDefault())return e;let t;if(n.index_===zt?t="$priority":n.index_===NT?t="$value":n.index_===gs?t="$key":(ue(n.index_ instanceof TT,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Mt(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Mt(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Mt(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Mt(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Mt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function M0(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==zt&&(e.i=n.index_.toString()),e}/**
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
 */class Ko extends Kg{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Kr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ue(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ko.getListenId_(e,i),l={};this.listens_[o]=l;const a=P0(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,i),Ts(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=Ko.getListenId_(e,t);delete this.listens_[i]}get(e){const t=P0(e._queryParams),i=e._path.toString(),s=new Ou;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+d4(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Tr(l.responseText)}catch{an("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&an("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class PT{constructor(){this.rootNode_=et.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Yo(){return{value:null,children:new Map}}function o1(n,e,t){if(qe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=Ve(e);n.children.has(i)||n.children.set(i,Yo());const s=n.children.get(i);e=dt(e),o1(s,e,t)}}function xc(n,e,t){n.value!==null?t(e,n.value):MT(n,(i,s)=>{const r=new ht(e.toString()+"/"+i);xc(s,r,t)})}function MT(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class LT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&hn(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const L0=10*1e3,$T=30*1e3,HT=5*60*1e3;class UT{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new LT(e);const i=L0+($T-L0)*Math.random();fr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;hn(e,(s,r)=>{r>0&&Gn(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),fr(this.reportStats_.bind(this),Math.floor(Math.random()*2*HT))}}/**
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
 */var Tn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function l1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function a1(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function c1(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Qo{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Tn.ACK_USER_WRITE,this.source=l1()}operationForChild(e){if(qe(this.path)){if(this.affectedTree.value!=null)return ue(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ht(e));return new Qo(st(),t,this.revert)}}else return ue(Ve(this.path)===e,"operationForChild called for unrelated child."),new Qo(dt(this.path),this.affectedTree,this.revert)}}/**
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
 */class qi{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Tn.OVERWRITE}operationForChild(e){return qe(this.path)?new qi(this.source,st(),this.snap.getImmediateChild(e)):new qi(this.source,dt(this.path),this.snap)}}/**
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
 */class Br{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Tn.MERGE}operationForChild(e){if(qe(this.path)){const t=this.children.subtree(new ht(e));return t.isEmpty()?null:t.value?new qi(this.source,st(),t.value):new Br(this.source,st(),t)}else return ue(Ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Br(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ju{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(qe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ve(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function WT(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(OT(o.childName,o.snapshotNode))}),tr(n,s,"child_removed",e,i,t),tr(n,s,"child_added",e,i,t),tr(n,s,"child_moved",r,i,t),tr(n,s,"child_changed",e,i,t),tr(n,s,"value",e,i,t),s}function tr(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,a)=>zT(n,l,a)),o.forEach(l=>{const a=qT(n,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function qT(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function zT(n,e,t){if(e.childName==null||t.childName==null)throw Hs("Should only compare child_ events.");const i=new je(e.childName,e.snapshotNode),s=new je(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function u1(n,e){return{eventCache:n,serverCache:e}}function hr(n,e,t,i){return u1(new ju(e,t,i),n.serverCache)}function d1(n,e,t,i){return u1(n.eventCache,new ju(e,t,i))}function Cc(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function zi(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ra;const VT=()=>(Ra||(Ra=new Zt(NA)),Ra);class ut{constructor(e,t=VT()){this.value=e,this.children=t}static fromObject(e){let t=new ut(null);return hn(e,(i,s)=>{t=t.set(new ht(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:st(),value:this.value};if(qe(e))return null;{const i=Ve(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(dt(e),t);return r!=null?{path:Rt(new ht(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(qe(e))return this;{const t=Ve(e),i=this.children.get(t);return i!==null?i.subtree(dt(e)):new ut(null)}}set(e,t){if(qe(e))return new ut(t,this.children);{const i=Ve(e),r=(this.children.get(i)||new ut(null)).set(dt(e),t),o=this.children.insert(i,r);return new ut(this.value,o)}}remove(e){if(qe(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=Ve(e),i=this.children.get(t);if(i){const s=i.remove(dt(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new ut(null):new ut(this.value,r)}else return this}}get(e){if(qe(e))return this.value;{const t=Ve(e),i=this.children.get(t);return i?i.get(dt(e)):null}}setTree(e,t){if(qe(e))return t;{const i=Ve(e),r=(this.children.get(i)||new ut(null)).setTree(dt(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ut(this.value,o)}}fold(e){return this.fold_(st(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Rt(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,st(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(qe(e))return null;{const r=Ve(e),o=this.children.get(r);return o?o.findOnPath_(dt(e),Rt(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,st(),t)}foreachOnPath_(e,t,i){if(qe(e))return this;{this.value&&i(t,this.value);const s=Ve(e),r=this.children.get(s);return r?r.foreachOnPath_(dt(e),Rt(t,s),i):new ut(null)}}foreach(e){this.foreach_(st(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Rt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new ut(null))}}function pr(n,e,t){if(qe(e))return new yn(new ut(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=un(s,e);return r=r.updateChild(o,t),new yn(n.writeTree_.set(s,r))}else{const s=new ut(t),r=n.writeTree_.setTree(e,s);return new yn(r)}}}function $0(n,e,t){let i=n;return hn(t,(s,r)=>{i=pr(i,Rt(e,s),r)}),i}function H0(n,e){if(qe(e))return yn.empty();{const t=n.writeTree_.setTree(e,new ut(null));return new yn(t)}}function Ec(n,e){return Qi(n,e)!=null}function Qi(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(un(t.path,e)):null}function U0(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(zt,(i,s)=>{e.push(new je(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new je(i,s.value))}),e}function di(n,e){if(qe(e))return n;{const t=Qi(n,e);return t!=null?new yn(new ut(t)):new yn(n.writeTree_.subtree(e))}}function wc(n){return n.writeTree_.isEmpty()}function Ns(n,e){return f1(st(),n.writeTree_,e)}function f1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(ue(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=f1(Rt(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Rt(n,".priority"),i)),t}}/**
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
 */function h1(n,e){return v1(e,n)}function jT(n,e,t,i,s){ue(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=pr(n.visibleWrites,e,t)),n.lastWriteId=i}function GT(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function KT(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);ue(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&YT(l,i.path)?s=!1:bn(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return QT(n),!0;if(i.snap)n.visibleWrites=H0(n.visibleWrites,i.path);else{const l=i.children;hn(l,a=>{n.visibleWrites=H0(n.visibleWrites,Rt(i.path,a))})}return!0}else return!1}function YT(n,e){if(n.snap)return bn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&bn(Rt(n.path,t),e))return!0;return!1}function QT(n){n.visibleWrites=p1(n.allWrites,XT,st()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function XT(n){return n.visible}function p1(n,e,t){let i=yn.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)bn(t,o)?(l=un(t,o),i=pr(i,l,r.snap)):bn(o,t)&&(l=un(o,t),i=pr(i,st(),r.snap.getChild(l)));else if(r.children){if(bn(t,o))l=un(t,o),i=$0(i,l,r.children);else if(bn(o,t))if(l=un(o,t),qe(l))i=$0(i,st(),r.children);else{const a=Ts(r.children,Ve(l));if(a){const c=a.getChild(dt(l));i=pr(i,st(),c)}}}else throw Hs("WriteRecord should have .snap or .children")}}return i}function _1(n,e,t,i,s){if(!i&&!s){const r=Qi(n.visibleWrites,e);if(r!=null)return r;{const o=di(n.visibleWrites,e);if(wc(o))return t;if(t==null&&!Ec(o,st()))return null;{const l=t||et.EMPTY_NODE;return Ns(o,l)}}}else{const r=di(n.visibleWrites,e);if(!s&&wc(r))return t;if(!s&&t==null&&!Ec(r,st()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(bn(c.path,e)||bn(e,c.path))},l=p1(n.allWrites,o,e),a=t||et.EMPTY_NODE;return Ns(l,a)}}}function JT(n,e,t){let i=et.EMPTY_NODE;const s=Qi(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(zt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=di(n.visibleWrites,e);return t.forEachChild(zt,(o,l)=>{const a=Ns(di(r,new ht(o)),l);i=i.updateImmediateChild(o,a)}),U0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=di(n.visibleWrites,e);return U0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function ZT(n,e,t,i,s){ue(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Rt(e,t);if(Ec(n.visibleWrites,r))return null;{const o=di(n.visibleWrites,r);return wc(o)?s.getChild(t):Ns(o,s.getChild(t))}}function eD(n,e,t,i){const s=Rt(e,t),r=Qi(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=di(n.visibleWrites,s);return Ns(o,i.getNode().getImmediateChild(t))}else return null}function tD(n,e){return Qi(n.visibleWrites,e)}function nD(n,e,t,i,s,r,o){let l;const a=di(n.visibleWrites,e),c=Qi(a,st());if(c!=null)l=c;else if(t!=null)l=Ns(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let h=d.getNext();for(;h&&u.length<s;)f(h,i)!==0&&u.push(h),h=d.getNext();return u}else return[]}function iD(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function kc(n,e,t,i){return _1(n.writeTree,n.treePath,e,t,i)}function m1(n,e){return JT(n.writeTree,n.treePath,e)}function W0(n,e,t,i){return ZT(n.writeTree,n.treePath,e,t,i)}function Xo(n,e){return tD(n.writeTree,Rt(n.treePath,e))}function sD(n,e,t,i,s,r){return nD(n.writeTree,n.treePath,e,t,i,s,r)}function Gu(n,e,t){return eD(n.writeTree,n.treePath,e,t)}function g1(n,e){return v1(Rt(n.treePath,e),n.writeTree)}function v1(n,e){return{treePath:n,writeTree:e}}/**
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
 */class rD{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;ue(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ue(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,O0(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,FT(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,BT(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,O0(i,e.snapshotNode,s.oldSnap));else throw Hs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class oD{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const b1=new oD;class Ku{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ju(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gu(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zi(this.viewCache_),r=sD(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}function lD(n,e){ue(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ue(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function aD(n,e,t,i,s){const r=new rD;let o,l;if(t.type===Tn.OVERWRITE){const c=t;c.source.fromUser?o=Ic(n,e,c.path,c.snap,i,s,r):(ue(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!qe(c.path),o=Jo(n,e,c.path,c.snap,i,s,l,r))}else if(t.type===Tn.MERGE){const c=t;c.source.fromUser?o=uD(n,e,c.path,c.children,i,s,r):(ue(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Sc(n,e,c.path,c.children,i,s,l,r))}else if(t.type===Tn.ACK_USER_WRITE){const c=t;c.revert?o=hD(n,e,c.path,i,s,r):o=dD(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Tn.LISTEN_COMPLETE)o=fD(n,e,t.path,i,r);else throw Hs("Unknown operation type: "+t.type);const a=r.getChanges();return cD(e,o,a),{viewCache:o,changes:a}}function cD(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Cc(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(RT(Cc(e)))}}function y1(n,e,t,i,s,r){const o=e.eventCache;if(Xo(i,t)!=null)return e;{let l,a;if(qe(t))if(ue(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=zi(e),u=c instanceof et?c:et.EMPTY_NODE,f=m1(i,u);l=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=kc(i,zi(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Ve(t);if(c===".priority"){ue(gi(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const f=W0(i,t,u,a);f!=null?l=n.filter.updatePriority(u,f):l=o.getNode()}else{const u=dt(t);let f;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=W0(i,t,o.getNode(),a);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=Gu(i,c,e.serverCache);f!=null?l=n.filter.updateChild(o.getNode(),c,f,u,s,r):l=o.getNode()}}return hr(e,l,o.isFullyInitialized()||qe(t),n.filter.filtersNodes())}}function Jo(n,e,t,i,s,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(qe(t))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const h=a.getNode().updateChild(t,i);c=u.updateFullNode(a.getNode(),h,null)}else{const h=Ve(t);if(!a.isCompleteForPath(t)&&gi(t)>1)return e;const p=dt(t),g=a.getNode().getImmediateChild(h).updateChild(p,i);h===".priority"?c=u.updatePriority(a.getNode(),g):c=u.updateChild(a.getNode(),h,g,p,b1,null)}const f=d1(e,c,a.isFullyInitialized()||qe(t),u.filtersNodes()),d=new Ku(s,f,r);return y1(n,f,t,s,d,l)}function Ic(n,e,t,i,s,r,o){const l=e.eventCache;let a,c;const u=new Ku(s,e,r);if(qe(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),a=hr(e,c,!0,n.filter.filtersNodes());else{const f=Ve(t);if(f===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),a=hr(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=dt(t),h=l.getNode().getImmediateChild(f);let p;if(qe(d))p=i;else{const _=u.getCompleteChild(f);_!=null?Qg(d)===".priority"&&_.getChild(Jg(d)).isEmpty()?p=_:p=_.updateChild(d,i):p=et.EMPTY_NODE}if(h.equals(p))a=e;else{const _=n.filter.updateChild(l.getNode(),f,p,d,u,o);a=hr(e,_,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function q0(n,e){return n.eventCache.isCompleteForChild(e)}function uD(n,e,t,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=Rt(t,a);q0(e,Ve(u))&&(l=Ic(n,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=Rt(t,a);q0(e,Ve(u))||(l=Ic(n,l,u,c,s,r,o))}),l}function z0(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Sc(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;qe(t)?c=i:c=new ut(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const h=e.serverCache.getNode().getImmediateChild(f),p=z0(n,h,d);a=Jo(n,a,new ht(f),p,s,r,o,l)}}),c.children.inorderTraversal((f,d)=>{const h=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!h){const p=e.serverCache.getNode().getImmediateChild(f),_=z0(n,p,d);a=Jo(n,a,new ht(f),_,s,r,o,l)}}),a}function dD(n,e,t,i,s,r,o){if(Xo(s,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(qe(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Jo(n,e,t,a.getNode().getChild(t),s,r,l,o);if(qe(t)){let c=new ut(null);return a.getNode().forEachChild(gs,(u,f)=>{c=c.set(new ht(u),f)}),Sc(n,e,t,c,s,r,l,o)}else return e}else{let c=new ut(null);return i.foreach((u,f)=>{const d=Rt(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Sc(n,e,t,c,s,r,l,o)}}function fD(n,e,t,i,s){const r=e.serverCache,o=d1(e,r.getNode(),r.isFullyInitialized()||qe(t),r.isFiltered());return y1(n,o,t,i,b1,s)}function hD(n,e,t,i,s,r){let o;if(Xo(i,t)!=null)return e;{const l=new Ku(i,e,s),a=e.eventCache.getNode();let c;if(qe(t)||Ve(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=kc(i,zi(e));else{const f=e.serverCache.getNode();ue(f instanceof et,"serverChildren would be complete if leaf node"),u=m1(i,f)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=Ve(t);let f=Gu(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=a.getImmediateChild(u)),f!=null?c=n.filter.updateChild(a,u,f,dt(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,et.EMPTY_NODE,dt(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kc(i,zi(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Xo(i,st())!=null,hr(e,c,o,n.filter.filtersNodes())}}function pD(n,e){const t=zi(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!qe(e)&&!t.getImmediateChild(Ve(e)).isEmpty())?t.getChild(e):null}function V0(n,e,t,i){e.type===Tn.MERGE&&e.source.queryId!==null&&(ue(zi(n.viewCache_),"We should always have a full cache before handling merges"),ue(Cc(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=aD(n.processor_,s,e,t,i);return lD(n.processor_,r.viewCache),ue(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,_D(n,r.changes,r.viewCache.eventCache.getNode(),null)}function _D(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return WT(n.eventGenerator_,e,t,s)}/**
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
 */let j0;function mD(n){ue(!j0,"__referenceConstructor has already been defined"),j0=n}function Yu(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return ue(r!=null,"SyncTree gave us an op for an invalid query."),V0(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(V0(o,e,t,i));return r}}function Qu(n,e){let t=null;for(const i of n.views.values())t=t||pD(i,e);return t}/**
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
 */let G0;function gD(n){ue(!G0,"__referenceConstructor has already been defined"),G0=n}class K0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=iD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vD(n,e,t,i,s){return jT(n.pendingWriteTree_,e,t,i,s),s?wl(n,new qi(l1(),e,t)):[]}function os(n,e,t=!1){const i=GT(n.pendingWriteTree_,e);if(KT(n.pendingWriteTree_,e)){let r=new ut(null);return i.snap!=null?r=r.set(st(),!0):hn(i.children,o=>{r=r.set(new ht(o),!0)}),wl(n,new Qo(i.path,r,t))}else return[]}function El(n,e,t){return wl(n,new qi(a1(),e,t))}function bD(n,e,t){const i=ut.fromObject(t);return wl(n,new Br(a1(),e,i))}function yD(n,e,t,i){const s=w1(n,i);if(s!=null){const r=k1(s),o=r.path,l=r.queryId,a=un(o,e),c=new qi(c1(l),a,t);return I1(n,o,c)}else return[]}function xD(n,e,t,i){const s=w1(n,i);if(s){const r=k1(s),o=r.path,l=r.queryId,a=un(o,e),c=ut.fromObject(t),u=new Br(c1(l),a,c);return I1(n,o,u)}else return[]}function x1(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=un(o,e),c=Qu(l,a);if(c)return c});return _1(s,e,r,t,!0)}function wl(n,e){return C1(e,n.syncPointTree_,null,h1(n.pendingWriteTree_,st()))}function C1(n,e,t,i){if(qe(n.path))return E1(n,e,t,i);{const s=e.get(st());t==null&&s!=null&&(t=Qu(s,st()));let r=[];const o=Ve(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=g1(i,o);r=r.concat(C1(l,a,c,u))}return s&&(r=r.concat(Yu(s,n,i,t))),r}}function E1(n,e,t,i){const s=e.get(st());t==null&&s!=null&&(t=Qu(s,st()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=g1(i,o),u=n.operationForChild(o);u&&(r=r.concat(E1(u,l,a,c)))}),s&&(r=r.concat(Yu(s,n,i,t))),r}function w1(n,e){return n.tagToQueryMap.get(e)}function k1(n){const e=n.indexOf("$");return ue(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ht(n.substr(0,e))}}function I1(n,e,t){const i=n.syncPointTree_.get(e);ue(i,"Missing sync point for query tag that we're tracking");const s=h1(n.pendingWriteTree_,e);return Yu(i,t,s,null)}/**
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
 */class Xu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Xu(t)}node(){return this.node_}}class Ju{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Rt(this.path_,e);return new Ju(this.syncTree_,t)}node(){return x1(this.syncTree_,this.path_)}}const CD=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Y0=function(n,e,t){if(!n||typeof n!="object")return n;if(ue(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return ED(n[".sv"],e,t);if(typeof n[".sv"]=="object")return wD(n[".sv"],e);ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},ED=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ue(!1,"Unexpected server value: "+n)}},wD=function(n,e,t){n.hasOwnProperty("increment")||ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&ue(!1,"Unexpected increment value: "+i);const s=e.node();if(ue(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},kD=function(n,e,t,i){return Zu(e,new Ju(t,n),i)},ID=function(n,e,t){return Zu(n,new Xu(e),t)};function Zu(n,e,t){const i=n.getPriority().val(),s=Y0(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Y0(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new At(l,Wt(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new At(s))),o.forEachChild(zt,(l,a)=>{const c=Zu(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class ed{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function td(n,e){let t=e instanceof ht?e:new ht(e),i=n,s=Ve(t);for(;s!==null;){const r=Ts(i.node.children,s)||{children:{},childCount:0};i=new ed(s,i,r),t=dt(t),s=Ve(t)}return i}function Ws(n){return n.node.value}function S1(n,e){n.node.value=e,Ac(n)}function A1(n){return n.node.childCount>0}function SD(n){return Ws(n)===void 0&&!A1(n)}function kl(n,e){hn(n.node.children,(t,i)=>{e(new ed(t,n,i))})}function T1(n,e,t,i){t&&!i&&e(n),kl(n,s=>{T1(s,e,!0,i)}),t&&i&&e(n)}function AD(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Xr(n){return new ht(n.parent===null?n.name:Xr(n.parent)+"/"+n.name)}function Ac(n){n.parent!==null&&TD(n.parent,n.name,n)}function TD(n,e,t){const i=SD(t),s=Gn(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Ac(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Ac(n))}/**
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
 */const DD=/[\[\].#$\/\u0000-\u001F\u007F]/,ND=/[\[\].#$\u0000-\u001F\u007F]/,Ba=10*1024*1024,D1=function(n){return typeof n=="string"&&n.length!==0&&!DD.test(n)},RD=function(n){return typeof n=="string"&&n.length!==0&&!ND.test(n)},BD=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),RD(n)},N1=function(n,e,t){const i=t instanceof ht?new fT(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ei(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ei(i)+" with contents = "+e.toString());if(Tg(e))throw new Error(n+"contains "+e.toString()+" "+Ei(i));if(typeof e=="string"&&e.length>Ba/3&&xl(e)>Ba)throw new Error(n+"contains a string greater than "+Ba+" utf8 bytes "+Ei(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(hn(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!D1(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ei(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hT(i,o),N1(n,l,i),pT(i)}),s&&r)throw new Error(n+' contains ".value" child '+Ei(i)+" in addition to actual children.")}},FD=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!D1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!BD(t))throw new Error(h4(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class OD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function PD(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Zg(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Xi(n,e,t){PD(n,t),MD(n,i=>bn(i,e)||bn(e,i))}function MD(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(LD(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function LD(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ri&&Ut("event: "+t.toString()),Yr(i)}}}/**
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
 */const $D="repo_interrupt",HD=25;class UD{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new OD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yo(),this.transactionQueueTree_=new ed,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function WD(n,e,t){if(n.stats_=Uu(n.repoInfo_),n.forceRestClient_||MA())n.server_=new Ko(n.repoInfo_,(i,s,r,o)=>{Q0(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>X0(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Mt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Un(n.repoInfo_,e,(i,s,r,o)=>{Q0(n,i,s,r,o)},i=>{X0(n,i)},i=>{zD(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=WA(n.repoInfo_,()=>new UT(n.stats_,n.server_)),n.infoData_=new PT,n.infoSyncTree_=new K0({startListening:(i,s,r,o)=>{let l=[];const a=n.infoData_.getNode(i._path);return a.isEmpty()||(l=El(n.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),nd(n,"connected",!1),n.serverSyncTree_=new K0({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);Xi(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function qD(n){const t=n.infoData_.getNode(new ht(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function R1(n){return CD({timestamp:qD(n)})}function Q0(n,e,t,i,s){n.dataUpdateCount++;const r=new ht(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const a=Wo(t,c=>Wt(c));o=xD(n.serverSyncTree_,r,a,s)}else{const a=Wt(t);o=yD(n.serverSyncTree_,r,a,s)}else if(i){const a=Wo(t,c=>Wt(c));o=bD(n.serverSyncTree_,r,a)}else{const a=Wt(t);o=El(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=sd(n,r)),Xi(n.eventQueue_,l,o)}function X0(n,e){nd(n,"connected",e),e===!1&&jD(n)}function zD(n,e){hn(e,(t,i)=>{nd(n,t,i)})}function nd(n,e,t){const i=new ht("/.info/"+e),s=Wt(t);n.infoData_.updateSnapshot(i,s);const r=El(n.infoSyncTree_,i,s);Xi(n.eventQueue_,i,r)}function VD(n){return n.nextWriteId_++}function jD(n){B1(n,"onDisconnectEvents");const e=R1(n),t=Yo();xc(n.onDisconnect_,st(),(s,r)=>{const o=kD(s,r,n.serverSyncTree_,e);o1(t,s,o)});let i=[];xc(t,st(),(s,r)=>{i=i.concat(El(n.serverSyncTree_,s,r));const o=QD(n,s);sd(n,o)}),n.onDisconnect_=Yo(),Xi(n.eventQueue_,st(),i)}function GD(n){n.persistentConnection_&&n.persistentConnection_.interrupt($D)}function B1(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ut(t,...e)}function F1(n,e,t){return x1(n.serverSyncTree_,e,t)||et.EMPTY_NODE}function id(n,e=n.transactionQueueTree_){if(e||Il(n,e),Ws(e)){const t=P1(n,e);ue(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&KD(n,Xr(e),t)}else A1(e)&&kl(e,t=>{id(n,t)})}function KD(n,e,t){const i=t.map(c=>c.currentWriteId),s=F1(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];ue(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=un(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{B1(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(os(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&f.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Il(n,td(n.transactionQueueTree_,e)),id(n,n.transactionQueueTree_),Xi(n.eventQueue_,e,u);for(let d=0;d<f.length;d++)Yr(f[d])}else{if(c==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{an("transaction at "+a.toString()+" failed: "+c);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=c}sd(n,e)}},o)}function sd(n,e){const t=O1(n,e),i=Xr(t),s=P1(n,t);return YD(n,s,i),i}function YD(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=un(t,a.path);let u=!1,f;if(ue(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,f=a.abortReason,s=s.concat(os(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=HD)u=!0,f="maxretry",s=s.concat(os(n.serverSyncTree_,a.currentWriteId,!0));else{const d=F1(n,a.path,o);a.currentInputSnapshot=d;const h=e[l].update(d.val());if(h!==void 0){N1("transaction failed: Data returned ",h,a.path);let p=Wt(h);typeof h=="object"&&h!=null&&Gn(h,".priority")||(p=p.updatePriority(d.getPriority()));const g=a.currentWriteId,x=R1(n),v=ID(p,d,x);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=v,a.currentWriteId=VD(n),o.splice(o.indexOf(g),1),s=s.concat(vD(n.serverSyncTree_,a.path,v,a.currentWriteId,a.applyLocally)),s=s.concat(os(n.serverSyncTree_,g,!0))}else u=!0,f="nodata",s=s.concat(os(n.serverSyncTree_,a.currentWriteId,!0))}Xi(n.eventQueue_,t,s),s=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(f),!1,null))))}Il(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Yr(i[l]);id(n,n.transactionQueueTree_)}function O1(n,e){let t,i=n.transactionQueueTree_;for(t=Ve(e);t!==null&&Ws(i)===void 0;)i=td(i,t),e=dt(e),t=Ve(e);return i}function P1(n,e){const t=[];return M1(n,e,t),t.sort((i,s)=>i.order-s.order),t}function M1(n,e,t){const i=Ws(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);kl(e,s=>{M1(n,s,t)})}function Il(n,e){const t=Ws(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,S1(e,t.length>0?t:void 0)}kl(e,i=>{Il(n,i)})}function QD(n,e){const t=Xr(O1(n,e)),i=td(n.transactionQueueTree_,e);return AD(i,s=>{Fa(n,s)}),Fa(n,i),T1(i,s=>{Fa(n,s)}),t}function Fa(n,e){const t=Ws(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(ue(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(ue(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(os(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?S1(e,void 0):t.length=r+1,Xi(n.eventQueue_,Xr(e),s);for(let o=0;o<i.length;o++)Yr(i[o])}}/**
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
 */function XD(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function JD(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):an(`Invalid query segment '${t}' in query '${n}'`)}return e}const J0=function(n,e){const t=ZD(n),i=t.namespace;t.domain==="firebase.com"&&jn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&jn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||TA();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ug(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new ht(t.pathString)}},ZD=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(u,f)),u<f&&(s=XD(n.substring(u,f)));const d=JD(n.substring(Math.min(n.length,f)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")t="localhost";else if(h.split(".").length<=2)t=h;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
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
 */class rd{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return qe(this._path)?null:Qg(this._path)}get ref(){return new qs(this._repo,this._path)}get _queryIdentifier(){const e=M0(this._queryParams),t=$u(e);return t==="{}"?"default":t}get _queryObject(){return M0(this._queryParams)}isEqual(e){if(e=yg(e),!(e instanceof rd))return!1;const t=this._repo===e._repo,i=Zg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+dT(this._path)}}class qs extends rd{constructor(e,t){super(e,t,new Vu,!1)}get parent(){const e=Jg(this._path);return e===null?null:new qs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}mD(qs);gD(qs);/**
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
 */const e8="FIREBASE_DATABASE_EMULATOR_HOST",Tc={};let t8=!1;function n8(n,e,t,i){n.repoInfo_=new Ug(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function i8(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||jn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ut("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=J0(r,s),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[e8]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=J0(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new ms(ms.OWNER):new $A(n.name,n.options,e);FD("Invalid Firebase Database URL",o),qe(o.path)||jn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=r8(l,n,u,new LA(n.name,t));return new o8(f,n)}function s8(n,e){const t=Tc[e];(!t||t[n.key]!==n)&&jn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),GD(n),delete t[n.key]}function r8(n,e,t,i){let s=Tc[e.name];s||(s={},Tc[e.name]=s);let r=s[n.toURLString()];return r&&jn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new UD(n,t8,t,i),s[n.toURLString()]=r,r}class o8{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(WD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qs(this._repo,st())),this._rootInternal}_delete(){return this._rootInternal!==null&&(s8(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jn("Cannot call "+e+" on a deleted database.")}}function L1(n=Lu(),e){const t=cA(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=e4("database");i&&l8(t,...i)}return t}function l8(n,e,t,i={}){n=yg(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&jn("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&jn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ms(ms.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:t4(i.mockUserToken,n.app.options.projectId);r=new ms(o)}n8(s,e,t,r)}/**
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
 */function a8(n){wA(fA),zo(new Dr("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return i8(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ps(b0,y0,n),ps(b0,y0,"esm2017")}Un.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Un.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};a8();let c8=["builds","fa-trackItems","fd-currentGameData","fd-endlessModesData","fd-playerStats"];const u8={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"},d8={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};Mu(u8,"sud");Mu(d8,"fc");L1(Lu("sud"));L1(Lu("fc"));let f8=()=>{for(let n of c8)if(localStorage.getItem(n))return!0};function h8(n){let e,t;return{c(){e=C("hl"),t=re(n[0])},m(i,s){q(i,e,s),m(e,t)},p(i,[s]){s&1&&Se(t,i[0])},i:ie,o:ie,d(i){i&&$(e)}}}function p8(n,e,t){let{startTime:i}=e;const s=wn();let r=Date.now(),o=r+i*1e3,l=i,a=setInterval(()=>{let c=Date.now();t(0,l=i-Math.floor((c-r)/1e3)),c>=o&&(s("end"),clearTimeout(a))},50);return n.$$set=c=>{"startTime"in c&&t(1,i=c.startTime)},[l,i]}class _8 extends De{constructor(e){super(),Te(this,e,p8,h8,ve,{startTime:1})}}function Z0(n){let e,t;return{c(){e=C("a"),t=re("Couldn't be redirected? Click here"),y(e,"href",$1),y(e,"class","svelte-19x9isj")},m(i,s){q(i,e,s),m(e,t)},p:ie,d(i){i&&$(e)}}}function m8(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g;d=new _8({props:{startTime:10}}),d.$on("end",n[1]);let x=n[0]&&Z0();return{c(){e=C("div"),t=C("span"),t.textContent="Data Sync Required",i=O(),s=C("div"),r=C("p"),r.textContent=`It looks like you have data from previous sessions waiting to be\r
            synced to an account.`,o=O(),l=C("p"),l.textContent="You will be redirected to the data synchronization process shortly.",a=O(),c=C("p"),u=C("i"),u.textContent="Attempting redirect in",f=O(),ae(d.$$.fragment),h=re("..."),p=O(),x&&x.c(),y(t,"id","title"),y(s,"class","contents flex fd-col rg-1 svelte-19x9isj"),y(e,"class","infoPrompt svelte-19x9isj"),ce(e,"redirectFail",n[0])},m(v,b){q(v,e,b),m(e,t),m(e,i),m(e,s),m(s,r),m(s,o),m(s,l),m(s,a),m(s,c),m(c,u),m(c,f),oe(d,c,null),m(c,h),m(s,p),x&&x.m(s,null),g=!0},p(v,[b]){v[0]?x?x.p(v,b):(x=Z0(),x.c(),x.m(s,null)):x&&(x.d(1),x=null),(!g||b&1)&&ce(e,"redirectFail",v[0])},i(v){g||(j(d.$$.fragment,v),v&&Ie(()=>{g&&(_||(_=ge(e,Qe,{duration:250},!0)),_.run(1))}),g=!0)},o(v){G(d.$$.fragment,v),v&&(_||(_=ge(e,Qe,{duration:250},!1)),_.run(0)),g=!1},d(v){v&&$(e),le(d),x&&x.d(),v&&_&&_.end()}}}let $1="https://xt8ss.github.io/fantastic-hub/?dataSync=true";function g8(n,e,t){let i=!1;return[i,()=>{location.href=$1,setTimeout(()=>t(0,i=!0),1e3)}]}class v8 extends De{constructor(e){super(),Te(this,e,g8,m8,ve,{})}}function b8(n,{from:e,to:t},i={}){const s=getComputedStyle(n),r=s.transform==="none"?"":s.transform,[o,l]=s.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:f=h=>Math.sqrt(h)*120,easing:d=lg}=i;return{delay:u,duration:Vi(f)?f(Math.sqrt(a*a+c*c)):f,easing:d,css:(h,p)=>{const _=p*a,g=p*c,x=h+p*e.width/t.width,v=h+p*e.height/t.height;return`transform: ${r} translate(${_}px, ${g}px) scale(${x}, ${v});`}}}function ep(n,e,t){const i=n.slice();return i[2]=e[t],i}function y8(n){const e=n.slice(),t=`<span class="font-ms smaller-fs">${H1.exec(e[2].text)}</span>`;return e[5]=t,e}function x8(n){let e=n[2].text+"",t;return{c(){t=re(e)},m(i,s){q(i,t,s)},p(i,s){s&1&&e!==(e=i[2].text+"")&&Se(t,e)},d(i){i&&$(t)}}}function tp(n){let e,t=n[2].text.replace(ip,n[5])+"",i;return{c(){e=new Sp(!1),i=Dt(),e.a=i},m(s,r){e.m(t,s,r),q(s,i,r)},p(s,r){r&1&&t!==(t=s[2].text.replace(ip,s[5])+"")&&e.p(t)},d(s){s&&($(i),e.d())}}}function np(n,e){let t,i,s,r,o,l,a,c,u,f=ie,d;function h(x,v){return v&1&&(o=null),o==null&&(o=!!H1.test(x[2].text)),o?tp:x8}function p(x,v){return v===tp?y8(x):x}let _=h(e,-1),g=_(p(e,_));return{key:n,first:null,c(){t=C("div"),i=C("iconify-icon"),r=O(),g.c(),l=O(),$e(i,"icon",s=e[2].icon),y(t,"class","toast flex fai-center cg-1 br-1 bs ta-center svelte-jahp22"),this.first=t},m(x,v){q(x,t,v),m(t,i),m(t,r),g.m(t,null),m(t,l),d=!0},p(x,v){e=x,(!d||v&1&&s!==(s=e[2].icon))&&$e(i,"icon",s),_===(_=h(e,v))&&g?g.p(p(e,_),v):(g.d(1),g=_(p(e,_)),g&&(g.c(),g.m(t,l)))},r(){u=t.getBoundingClientRect()},f(){cv(t),f(),Ap(t,u)},a(){f(),f=av(t,u,b8,{duration:250})},i(x){d||(x&&Ie(()=>{d&&(c&&c.end(1),a=Fc(t,Qe,{}),a.start())}),d=!0)},o(x){a&&a.invalidate(),x&&(c=Oc(t,e[1],{})),d=!1},d(x){x&&$(t),g.d(),x&&c&&c.end()}}}function C8(n){let e,t=[],i=new Map,s,r=Ue(n[0]);const o=l=>l[2];for(let l=0;l<r.length;l+=1){let a=ep(n,r,l),c=o(a);i.set(c,t[l]=np(c,a))}return{c(){e=C("div");for(let l=0;l<t.length;l+=1)t[l].c();y(e,"class","toasts centered flex fjc-center fai-center fd-col svelte-jahp22")},m(l,a){q(l,e,a);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);s=!0},p(l,[a]){if(a&1){r=Ue(l[0]),Je();for(let c=0;c<t.length;c+=1)t[c].r();t=gv(t,a,o,1,l,r,i,e,mv,np,null,ep);for(let c=0;c<t.length;c+=1)t[c].a();Ze()}},i(l){if(!s){for(let a=0;a<r.length;a+=1)j(t[a]);s=!0}},o(l){for(let a=0;a<t.length;a+=1)G(t[a]);s=!1},d(l){l&&$(e);for(let a=0;a<t.length;a+=1)t[a].d()}}}let H1=new RegExp("(?<={).+(?=})"),ip=/{.+} ?/;function E8(n,e,t){let i;J(n,La,r=>t(0,i=r));function s(r){return i.length?Qe(r):ft(r)}return[i,s]}class w8 extends De{constructor(e){super(),Te(this,e,E8,C8,ve,{})}}const{document:pn,window:Xn}=Z1;function sp(n,e,t){const i=n.slice();return i[62]=e[t],i}function rp(n,e,t){const i=n.slice();return i[62]=e[t],i}function op(n){let e;return{c(){e=C("style"),e.textContent=`* {\r
                pointer-events: none;\r
            }\r
        `},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function lp(n){let e;return{c(){e=C("link"),y(e,"rel","preload"),y(e,"as","image"),y(e,"href",n[62])},m(t,i){q(t,e,i)},p:ie,d(t){t&&$(e)}}}function ap(n){let e;return{c(){e=C("style"),e.textContent=`body > div:not(.backgrounds),\r
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
        `},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function cp(n){let e;return{c(){e=C("style"),e.textContent=`body {\r
                overflow: hidden;\r
            }\r
        `},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function up(n){let e;return{c(){e=C("style"),e.textContent=`body {\r
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
            }`},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function dp(n){let e,t;return{c(){e=C("img"),y(e,"class","background svelte-144mwq2"),mt(e.src,t=n[62])||y(e,"src",t),y(e,"alt",""),ce(e,"active",n[20].indexOf(n[62])==n[10])},m(i,s){q(i,e,s)},p(i,s){s[0]&1049600&&ce(e,"active",i[20].indexOf(i[62])==i[10])},d(i){i&&$(e)}}}function fp(n){let e,t,i=Math.floor(n[17][n[2]]*100)+"",s,r,o,l;return{c(){e=C("span"),t=re("Zoom: "),s=re(i),r=C("b"),r.textContent="%",y(e,"class","info svelte-144mwq2"),y(e,"id","zoomLevel")},m(a,c){q(a,e,c),m(e,t),m(e,s),m(e,r),l=!0},p(a,c){(!l||c[0]&4)&&i!==(i=Math.floor(a[17][a[2]]*100)+"")&&Se(s,i)},i(a){l||(a&&Ie(()=>{l&&(o||(o=ge(e,ft,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=ge(e,ft,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&$(e),a&&o&&o.end()}}}function hp(n){let e,t,i,s,r,o,l,a,c=n[16].armor.avg.toLocaleString()+" Gold",u,f,d,h,p,_,g,x,v,b=n[16].gear.avg.toLocaleString()+" Gold",E,w,T;return{c(){e=C("div"),t=C("div"),i=C("span"),i.textContent="Avg. armor cost:",s=O(),r=C("img"),l=O(),a=C("span"),u=re(c),f=O(),d=C("div"),h=C("span"),h.textContent="Avg. gear cost:",p=O(),_=C("img"),x=O(),v=C("span"),E=re(b),mt(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||y(r,"src",o),y(r,"alt",""),y(r,"class","svelte-144mwq2"),y(t,"class","svelte-144mwq2"),mt(_.src,g="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||y(_,"src",g),y(_,"alt",""),y(_,"class","svelte-144mwq2"),y(d,"class","svelte-144mwq2"),y(e,"class","costPreview svelte-144mwq2"),y(e,"id","specific")},m(k,A){q(k,e,A),m(e,t),m(t,i),m(t,s),m(t,r),m(t,l),m(t,a),m(a,u),m(e,f),m(e,d),m(d,h),m(d,p),m(d,_),m(d,x),m(d,v),m(v,E),T=!0},p(k,A){(!T||A[0]&65536)&&c!==(c=k[16].armor.avg.toLocaleString()+" Gold")&&Se(u,c),(!T||A[0]&65536)&&b!==(b=k[16].gear.avg.toLocaleString()+" Gold")&&Se(E,b)},i(k){T||(k&&Ie(()=>{T&&(w||(w=ge(e,ft,{duration:150},!0)),w.run(1))}),T=!0)},o(k){k&&(w||(w=ge(e,ft,{duration:150},!1)),w.run(0)),T=!1},d(k){k&&$(e),k&&w&&w.end()}}}function pp(n){let e,t,i=n[3].name+"",s,r,o,l,a,c,u,f,d,h,p=n[3].desc+"",_,g,x,v,b;return{c(){e=C("div"),t=C("span"),s=re(i),r=O(),o=C("button"),o.innerHTML='<iconify-icon icon="ri:share-fill"></iconify-icon> <span class="tooltip" id="right">Share build</span>',l=O(),a=C("span"),c=re(`Description / Notes:\r
                `),u=C("br"),f=O(),d=C("br"),h=O(),_=re(p),y(t,"id","buildName"),y(t,"class","svelte-144mwq2"),y(o,"class","svelte-144mwq2"),y(a,"class","tooltip"),y(a,"id","bottom"),y(e,"class","currentBuild svelte-144mwq2"),ce(e,"no-tooltip",n[11])},m(E,w){q(E,e,w),m(e,t),m(t,s),m(e,r),m(e,o),m(e,l),m(e,a),m(a,c),m(a,u),m(a,f),m(a,d),m(a,h),m(a,_),x=!0,v||(b=[U(o,"click",n[34]),U(o,"mouseenter",n[35]),U(o,"mouseleave",n[36])],v=!0)},p(E,w){(!x||w[0]&8)&&i!==(i=E[3].name+"")&&Se(s,i),(!x||w[0]&8)&&p!==(p=E[3].desc+"")&&Se(_,p),(!x||w[0]&2048)&&ce(e,"no-tooltip",E[11])},i(E){x||(E&&Ie(()=>{x&&(g||(g=ge(e,ft,{duration:100},!0)),g.run(1))}),x=!0)},o(E){E&&(g||(g=ge(e,ft,{duration:100},!1)),g.run(0)),x=!1},d(E){E&&$(e),E&&g&&g.end(),v=!1,we(b)}}}function _p(n){let e,t,i,s,r,o,l,a,c=n[16].total.avg.toLocaleString()+" Gold",u,f,d;return{c(){e=C("div"),t=C("div"),i=C("span"),i.textContent="Avg. total cost:",s=O(),r=C("img"),l=O(),a=C("span"),u=re(c),mt(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||y(r,"src",o),y(r,"alt",""),y(r,"class","svelte-144mwq2"),y(t,"class","svelte-144mwq2"),y(e,"class","costPreview svelte-144mwq2"),y(e,"id","total")},m(h,p){q(h,e,p),m(e,t),m(t,i),m(t,s),m(t,r),m(t,l),m(t,a),m(a,u),d=!0},p(h,p){(!d||p[0]&65536)&&c!==(c=h[16].total.avg.toLocaleString()+" Gold")&&Se(u,c)},i(h){d||(h&&Ie(()=>{d&&(f||(f=ge(e,ft,{duration:150},!0)),f.run(1))}),d=!0)},o(h){h&&(f||(f=ge(e,ft,{duration:150},!1)),f.run(0)),d=!1},d(h){h&&$(e),h&&f&&f.end()}}}function k8(n){let e,t,i;return t=new v8({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function I8(n){let e,t,i;return t=new uS({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function S8(n){let e,t,i;return t=new lS({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function A8(n){let e,t,i;return t=new $I({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function T8(n){let e,t,i;return t=new WI({}),t.$on("loadPending",n[18]),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function D8(n){let e,t,i;return t=new hS({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function N8(n){let e,t,i;return t=new RI({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function R8(n){let e,t,i;return t=new AI({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function B8(n){let e,t,i;return t=new VI({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function F8(n){let e,t,i;return t=new CI({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function O8(n){let e,t,i;return t=new bI({}),t.$on("buildLoad",n[38]),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function P8(n){let e,t,i;return t=new pI({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function M8(n){let e,t,i;return t=new qk({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function L8(n){let e,t,i,s;function r(l){n[37](l)}let o={};return n[9]!==void 0&&(o.loadID=n[9]),t=new oI({props:o}),de.push(()=>Ke(t,"loadID",r)),t.$on("resetActions",n[22]),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(l,a){q(l,e,a),oe(t,e,null),s=!0},p(l,a){const c={};!i&&a[0]&512&&(i=!0,c.loadID=l[9],Ge(()=>i=!1)),t.$set(c)},i(l){s||(j(t.$$.fragment,l),s=!0)},o(l){G(t.$$.fragment,l),s=!1},d(l){l&&$(e),le(t)}}}function $8(n){let e,t,i;return t=new sS({}),{c(){e=C("div"),ae(t.$$.fragment),y(e,"class","promptCont svelte-144mwq2")},m(s,r){q(s,e,r),oe(t,e,null),i=!0},p:ie,i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),i=!1},d(s){s&&$(e),le(t)}}}function mp(n){let e,t,i;return{c(){e=C("iconify-icon"),$e(e,"icon","uil:exclamation"),$e(e,"id","unseen"),$e(e,"class","svelte-144mwq2")},m(s,r){q(s,e,r),i=!0},i(s){i||(s&&Ie(()=>{i&&(t||(t=ge(e,ft,{duration:150},!0)),t.run(1))}),i=!0)},o(s){s&&(t||(t=ge(e,ft,{duration:150},!1)),t.run(0)),i=!1},d(s){s&&$(e),s&&t&&t.end()}}}function gp(n){let e;return{c(){e=C("div"),e.innerHTML='<iconify-icon icon="eos-icons:three-dots-loading" class="svelte-144mwq2"></iconify-icon>',y(e,"class","promptCont svelte-144mwq2")},m(t,i){q(t,e,i)},d(t){t&&$(e)}}}function H8(n){let e,t,i,s,r,o,l,a,c,u,f,d,h,p,_,g,x,v,b,E=n[6]?"Account":"Log In",w,T,k,A,N,D,I,S,B,H,W,F,M,K,te,ee,L,z,V,R,Q,pe,me,fe,Be,Ne,Fe,Ae,_e,be,rt,St,Ft,he,Kt,Z,Ce,Me,tt,_t,Ot;Ie(n[29]);let Xe=!n[7]&&op(),Et=Ue(n[20]),P=[];for(let X=0;X<Et.length;X+=1)P[X]=lp(rp(n,Et,X));let Oe=(n[13]||!n[7])&&ap(),ye=n[4].screenshot.ongoing&&n[17][n[2]]<=1&&cp(),We=n[4].screenshot.ongoing&&up(),cn=Ue(n[20]),Pt=[];for(let X=0;X<cn.length;X+=1)Pt[X]=dp(sp(n,cn,X));let vt=n[8]&&fp(n),bt=n[4].screenshot.ongoing&&hp(n),xt=n[3]&&pp(n);S=new Tk({}),H=new kI({}),K=new sk({}),ee=new _k({}),z=new Ik({}),R=new Hk({}),pe=new w8({});let Ct=n[4].screenshot.ongoing&&_p(n);const zs=[$8,L8,M8,P8,O8,F8,B8,R8,N8,D8,T8,A8,S8,I8,k8],kn=[];function Vs(X,xe){return X[4].item.ongoing?0:X[12]||X[4].share.ongoing?1:X[4].export.ongoing?2:X[4].save.ongoing?3:X[4].load.ongoing&&!X[9]?4:X[4].delete.ongoing?5:X[4].costs.ongoing?6:X[4].bonus.ongoing?7:X[4].randomize.ongoing?8:X[4].login.ongoing?9:X[4].resources.ongoing?10:X[4].changelog.ongoing?11:X[4].policy.ongoing?12:X[4].donate.ongoing?13:X[4].sync.ongoing?14:-1}~(Be=Vs(n))&&(Ne=kn[Be]=zs[Be](n));let wt=!n[14]&&mp(),$t=!n[7]&&gp();return{c(){e=O(),Xe&&Xe.c(),t=Dt();for(let X=0;X<P.length;X+=1)P[X].c();i=Dt(),Oe&&Oe.c(),s=Dt(),ye&&ye.c(),r=Dt(),We&&We.c(),o=Dt(),l=O(),a=C("div"),c=C("audio"),f=O(),d=C("div");for(let X=0;X<Pt.length;X+=1)Pt[X].c();h=O(),vt&&vt.c(),p=O(),_=C("span"),_.innerHTML=`<iconify-icon icon="ic:baseline-discord" class="svelte-144mwq2"></iconify-icon>
    xt.ss
    <span class="tooltip svelte-144mwq2" id="right">Contact me on Discord!</span>`,g=O(),x=C("button"),x.innerHTML=`<a href="https://ko-fi.com/xt8ss" target="_blank" class="svelte-144mwq2">Support me
        <img src="kofi-badge.png" alt="" class="svelte-144mwq2"/></a>`,v=O(),b=C("button"),w=re(E),T=O(),k=C("button"),k.innerHTML='<iconify-icon icon="charm:stack"></iconify-icon> <span class="tooltip" id="left">Resources</span>',A=O(),N=C("main"),bt&&bt.c(),D=O(),xt&&xt.c(),I=O(),ae(S.$$.fragment),B=O(),ae(H.$$.fragment),W=O(),F=C("div"),M=C("div"),ae(K.$$.fragment),te=O(),ae(ee.$$.fragment),L=O(),ae(z.$$.fragment),V=O(),ae(R.$$.fragment),Q=O(),ae(pe.$$.fragment),me=O(),Ct&&Ct.c(),fe=O(),Ne&&Ne.c(),Fe=O(),Ae=C("button"),_e=C("iconify-icon"),be=O(),rt=C("span"),rt.textContent="Changelog",St=O(),wt&&wt.c(),Ft=O(),he=C("button"),he.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',Kt=O(),Z=C("span"),Z.textContent=`${Dc}`,Ce=O(),$t&&$t.c(),Me=Dt(),mt(c.src,u=ng+"/audios/select.mp3")||y(c,"src",u),y(d,"class","backgrounds"),y(_,"class","info svelte-144mwq2"),y(_,"id","credits"),y(x,"class","info svelte-144mwq2"),y(x,"id","donate"),y(b,"class","info svelte-144mwq2"),y(b,"id","account"),y(k,"class","info svelte-144mwq2"),y(k,"id","resources"),y(M,"class","eqCont svelte-144mwq2"),y(F,"class","calcBox svelte-144mwq2"),y(F,"id","calc"),y(N,"class","svelte-144mwq2"),$e(_e,"icon","octicon:log-16"),y(rt,"class","tooltip"),y(rt,"id","right"),y(Ae,"class","info svelte-144mwq2"),y(Ae,"id","changelog"),y(he,"class","info svelte-144mwq2"),y(he,"id","policy"),y(Z,"class","info svelte-144mwq2"),y(Z,"id","version")},m(X,xe){q(X,e,xe),Xe&&Xe.m(pn.head,null),m(pn.head,t);for(let Yt=0;Yt<P.length;Yt+=1)P[Yt]&&P[Yt].m(pn.head,null);m(pn.head,i),Oe&&Oe.m(pn.head,null),m(pn.head,s),ye&&ye.m(pn.head,null),m(pn.head,r),We&&We.m(pn.head,null),m(pn.head,o),q(X,l,xe),q(X,a,xe),m(a,c),n[31](c),q(X,f,xe),q(X,d,xe);for(let Yt=0;Yt<Pt.length;Yt+=1)Pt[Yt]&&Pt[Yt].m(d,null);q(X,h,xe),vt&&vt.m(X,xe),q(X,p,xe),q(X,_,xe),q(X,g,xe),q(X,x,xe),q(X,v,xe),q(X,b,xe),m(b,w),q(X,T,xe),q(X,k,xe),q(X,A,xe),q(X,N,xe),bt&&bt.m(N,null),m(N,D),xt&&xt.m(N,null),m(N,I),oe(S,N,null),m(N,B),oe(H,N,null),m(N,W),m(N,F),m(F,M),oe(K,M,null),m(M,te),oe(ee,M,null),m(F,L),oe(z,F,null),m(N,V),oe(R,N,null),m(N,Q),oe(pe,N,null),m(N,me),Ct&&Ct.m(N,null),m(N,fe),~Be&&kn[Be].m(N,null),q(X,Fe,xe),q(X,Ae,xe),m(Ae,_e),m(Ae,be),m(Ae,rt),m(Ae,St),wt&&wt.m(Ae,null),q(X,Ft,xe),q(X,he,xe),q(X,Kt,xe),q(X,Z,xe),q(X,Ce,xe),$t&&$t.m(X,xe),q(X,Me,xe),tt=!0,_t||(Ot=[U(Xn,"beforeunload",n[25]),U(Xn,"storage",n[26]),U(Xn,"click",U8),U(Xn,"wheel",n[27],{passive:!1}),U(Xn,"keydown",n[28]),U(Xn,"resize",n[29]),U(pn,"visibilitychange",n[30]),U(b,"click",n[32]),U(k,"click",n[33]),U(Ae,"click",n[39]),U(he,"click",n[40])],_t=!0)},p(X,xe){if(X[7]?Xe&&(Xe.d(1),Xe=null):Xe||(Xe=op(),Xe.c(),Xe.m(t.parentNode,t)),xe[0]&1048576){Et=Ue(X[20]);let nt;for(nt=0;nt<Et.length;nt+=1){const bi=rp(X,Et,nt);P[nt]?P[nt].p(bi,xe):(P[nt]=lp(bi),P[nt].c(),P[nt].m(i.parentNode,i))}for(;nt<P.length;nt+=1)P[nt].d(1);P.length=Et.length}if(X[13]||!X[7]?Oe||(Oe=ap(),Oe.c(),Oe.m(s.parentNode,s)):Oe&&(Oe.d(1),Oe=null),X[4].screenshot.ongoing&&X[17][X[2]]<=1?ye||(ye=cp(),ye.c(),ye.m(r.parentNode,r)):ye&&(ye.d(1),ye=null),X[4].screenshot.ongoing?We||(We=up(),We.c(),We.m(o.parentNode,o)):We&&(We.d(1),We=null),xe[0]&1049600){cn=Ue(X[20]);let nt;for(nt=0;nt<cn.length;nt+=1){const bi=sp(X,cn,nt);Pt[nt]?Pt[nt].p(bi,xe):(Pt[nt]=dp(bi),Pt[nt].c(),Pt[nt].m(d,null))}for(;nt<Pt.length;nt+=1)Pt[nt].d(1);Pt.length=cn.length}X[8]?vt?(vt.p(X,xe),xe[0]&256&&j(vt,1)):(vt=fp(X),vt.c(),j(vt,1),vt.m(p.parentNode,p)):vt&&(Je(),G(vt,1,1,()=>{vt=null}),Ze()),(!tt||xe[0]&64)&&E!==(E=X[6]?"Account":"Log In")&&Se(w,E),X[4].screenshot.ongoing?bt?(bt.p(X,xe),xe[0]&16&&j(bt,1)):(bt=hp(X),bt.c(),j(bt,1),bt.m(N,D)):bt&&(Je(),G(bt,1,1,()=>{bt=null}),Ze()),X[3]?xt?(xt.p(X,xe),xe[0]&8&&j(xt,1)):(xt=pp(X),xt.c(),j(xt,1),xt.m(N,I)):xt&&(Je(),G(xt,1,1,()=>{xt=null}),Ze()),X[4].screenshot.ongoing?Ct?(Ct.p(X,xe),xe[0]&16&&j(Ct,1)):(Ct=_p(X),Ct.c(),j(Ct,1),Ct.m(N,fe)):Ct&&(Je(),G(Ct,1,1,()=>{Ct=null}),Ze());let Yt=Be;Be=Vs(X),Be===Yt?~Be&&kn[Be].p(X,xe):(Ne&&(Je(),G(kn[Yt],1,1,()=>{kn[Yt]=null}),Ze()),~Be?(Ne=kn[Be],Ne?Ne.p(X,xe):(Ne=kn[Be]=zs[Be](X),Ne.c()),j(Ne,1),Ne.m(N,null)):Ne=null),X[14]?wt&&(Je(),G(wt,1,1,()=>{wt=null}),Ze()):wt?xe[0]&16384&&j(wt,1):(wt=mp(),wt.c(),j(wt,1),wt.m(Ae,null)),X[7]?$t&&($t.d(1),$t=null):$t||($t=gp(),$t.c(),$t.m(Me.parentNode,Me))},i(X){tt||(j(vt),j(bt),j(xt),j(S.$$.fragment,X),j(H.$$.fragment,X),j(K.$$.fragment,X),j(ee.$$.fragment,X),j(z.$$.fragment,X),j(R.$$.fragment,X),j(pe.$$.fragment,X),j(Ct),j(Ne),j(wt),tt=!0)},o(X){G(vt),G(bt),G(xt),G(S.$$.fragment,X),G(H.$$.fragment,X),G(K.$$.fragment,X),G(ee.$$.fragment,X),G(z.$$.fragment,X),G(R.$$.fragment,X),G(pe.$$.fragment,X),G(Ct),G(Ne),G(wt),tt=!1},d(X){X&&($(e),$(l),$(a),$(f),$(d),$(h),$(p),$(_),$(g),$(x),$(v),$(b),$(T),$(k),$(A),$(N),$(Fe),$(Ae),$(Ft),$(he),$(Kt),$(Z),$(Ce),$(Me)),Xe&&Xe.d(X),$(t),Lt(P,X),$(i),Oe&&Oe.d(X),$(s),ye&&ye.d(X),$(r),We&&We.d(X),$(o),n[31](null),Lt(Pt,X),vt&&vt.d(X),bt&&bt.d(),xt&&xt.d(),le(S),le(H),le(K),le(ee),le(z),le(R),le(pe),Ct&&Ct.d(),~Be&&kn[Be].d(),wt&&wt.d(),$t&&$t.d(X),_t=!1,we(Ot)}}}let Dc="v3.27.0";const U8=n=>{};function W8(n,e,t){let i,s,r,o,l,a,c,u,f,d,h,p,_,g,x,v,b,E,w,T;J(n,ln,P=>t(3,s=P)),J(n,ne,P=>t(4,r=P)),J(n,Bi,P=>t(13,o=P)),J(n,ni,P=>t(45,l=P)),J(n,vo,P=>t(5,a=P)),J(n,go,P=>t(6,c=P)),J(n,Pc,P=>t(24,u=P)),J(n,ys,P=>t(46,f=P)),J(n,Bn,P=>t(47,d=P)),J(n,bs,P=>t(48,h=P)),J(n,Cn,P=>t(49,p=P)),J(n,oo,P=>t(14,_=P)),J(n,vs,P=>t(50,g=P)),J(n,dn,P=>t(51,x=P)),J(n,Ma,P=>t(52,v=P)),J(n,Ti,P=>t(53,b=P)),J(n,xn,P=>t(54,E=P)),J(n,hd,P=>t(15,w=P)),J(n,rn,P=>t(16,T=P));let k=!1,A,N,D=7,I=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],S=!1,B,H=new URLSearchParams(location.search).get("id"),W=location.href.includes("ls=true"),F=f8();F&&(H=null);function M(){if(F)return setTimeout(()=>{Y(ne,r.sync.ongoing=!0,r)}),!0}for(let P of Cw){let Oe=`https://raw.githubusercontent.com/XT8SS/fantastic-calculator/gh-pages/ff-data/${P}.json`;fetch(Oe).then(async ye=>{if(ye.status!=200){console.error(`Failed to fetch "${P}" data!
Status: ${ye.status}`);return}Y(xn,E[P]=await ye.json(),E)}).catch(ye=>console.error(`Failed to initiate "${P}" data fetch!
${ye}`))}uv(()=>{if(t(7,k=!0),H?(W&&window.history.replaceState(null,null,location.origin+location.pathname+`?id=${H}`),K()):W&&window.history.replaceState(null,null,location.origin+location.pathname),Y(Ti,b.totalVisits++,b),b.showAgain){let P=Math.floor((b.totalVisits-b.lastVisits)/3);P&&P>=b.timesDenied&&(Y(Ti,b.lastVisits=b.totalVisits,b),Y(ne,r.donate.ongoing=!0,r))}Uy(Cf,async()=>{if(Y(Ma,v=Cf.currentUser,v),Y(go,c=!!dr(v),c),Y(vs,g=c?v.displayName||g:"",g),c){let P=await Sw();if(dr(P)){let Oe={};for(let ye in P.builds){let We=P.builds[ye];Oe[We.name]=We,Oe[We.name].id=ye}Y(dn,x=Oe,x),dr(x)&&Y(ni,l=!0,l)}Iw("logIn",`Succesfully logged in as {${g}}`),M()}}),localStorage.getItem("version")!=Dc&&(Y(oo,_=!1,_),localStorage.setItem("version",Dc)),localStorage.getItem("changelogSeen")||localStorage.setItem("changelogSeen",!1)});function K(){if(Y(ne,r.load.ongoing=!0,r),!H.startsWith("-"))Y(ne,r.load.status=-1,r),Y(ne,r.message="invalid_id",r);else{Y(ne,r.load.status=0,r);let P=Su(Rn(Ss,"builds"),Iu()),Oe=0;wu(P).then(ye=>{for(let We in ye.val()){if(We==H){te(ye.val()[We],We);break}else Oe==Object.keys(ye.val()).length-1&&(Y(ne,r.load.status=-1,r),Y(ne,r.message="invalid_id",r));Oe++}}).catch(()=>{Y(ne,r.load.status=-1,r),Y(ne,r.message="firebase_fail",r)})}}function te(P,Oe){for(let ye in P.eq){let We=p[ye]||vl;P.eq[ye]&&P.eq[ye]!=We.name?h[ye][P.eq[ye]].querySelector("button").click():!P.eq[ye]&&We.name&&h[ye][We.name].querySelector("button").click()}for(let ye of Hi){let We=d[ye]||bl;We.name&&f[ye][We.name].querySelector("button").click()}setTimeout(()=>{for(let ye of Hi)P.gear[ye]&&f[ye][P.gear[ye]].querySelector("button").click();Y(ne,r.load.ongoing=!1,r),Y(ne,r.load.status=null,r),Oe&&(Y(ln,s=P,s),Y(ln,s.id=Oe,s),t(9,H=null))})}let ee=[],L=[],z,V,R=9;for(let P=0;P<R;P++)ee.push(`backgrounds/BG${P}.jpg`);function Q(P){V=Math.floor(Math.random()*P.length)}Q(ee);function pe(){t(10,z=V),L.push(V)}pe(),function P(){setTimeout(()=>{if(Q(ee),!L.length)pe();else if(L.length>3&&(L=L.slice(1)),!L.includes(V))pe();else{let Oe=[...Array(R).keys()].filter(ye=>!L.includes(ye));Q(Oe),pe()}document.hasFocus&&P()},45e3)}();function me(){B=setTimeout(()=>{t(8,S=!1)},750)}function fe(){clearTimeout(B),t(8,S=!0),me()}function Be(){Y(ne,r.export.status=null,r),Y(ne,r.export.ongoing=!1,r),Y(ne,r.save.status=null,r),Y(ne,r.save.ongoing=!1,r),Y(ne,r.load.status=null,r),Y(ne,r.load.ongoing=!1,r),Y(ne,r.delete.status=null,r),Y(ne,r.delete.ongoing=!1,r),Y(ne,r.share.ongoing=!1,r),Y(ne,r.message="",r)}function Ne(){let P=N>A;document.documentElement.style.fontSize=`${(P?.75:window.outerWidth/window.outerHeight/2)*I[D]}vh`}let Fe=!1;const Ae=P=>{(a||o)&&!r.sync.ongoing&&P.preventDefault()},_e=P=>{/^f[a-z]{1,2}-/.test(P.key)&&localStorage.setItem(P.key,P.oldValue)},be=P=>{let Oe=P.wheelDeltaY;if(P.ctrlKey){if(P.preventDefault(),I[D]==.2&&Oe<0||I[D]==5&&Oe>0)return;Oe>0?t(2,D++,D):t(2,D--,D),fe()}},rt=P=>{P.ctrlKey&&(P.key=="-"||P.key=="+"||P.code=="Equal"||P.key=="0")&&(P.preventDefault(),(P.key=="+"||P.code=="Equal")&&I[D]!=5?t(2,D++,D):P.key=="-"&&I[D]!=.2?t(2,D--,D):P.key=="0"&&I[D]!=1&&t(2,D=7),fe()),o&&kw(P)};function St(){t(0,A=Xn.outerHeight),t(1,N=Xn.outerWidth)}const Ft=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,A=window.outerHeight),t(1,N=window.outerWidth),Ne()})};function he(P){de[P?"unshift":"push"](()=>{w.select=P,hd.set(w)})}const Kt=P=>{Ln(P),o||Y(ne,r.login.ongoing=!0,r)},Z=P=>{Ln(P),o||Y(ne,r.resources.ongoing=!0,r)},Ce=()=>{o||Y(ne,r.share.ongoing=!0,r)},Me=()=>t(11,Fe=!0),tt=()=>t(11,Fe=!1);function _t(P){H=P,t(9,H)}const Ot=P=>te(P.detail.build,P.detail.id),Xe=P=>{Ln(P),!o&&(Y(ne,r.changelog.ongoing=!0,r),Y(oo,_=!0,_))},Et=P=>{Ln(P),o||Y(ne,r.policy.ongoing=!0,r)};return n.$$.update=()=>{if(n.$$.dirty[0]&16777219&&(N||A)&&u)for(let P of u)Au(P.node,P.itemName);n.$$.dirty[0]&7&&(N||A||D)&&Ne(),n.$$.dirty[0]&96&&a&&!c&&(Y(vo,a=!1,a),Y(ni,l=!1,l)),n.$$.dirty[0]&16&&t(12,i=r.export.status||r.save.status||r.load.status||r.delete.status),n.$$.dirty[0]&16&&Y(Bi,o=r.item.ongoing||r.export.ongoing||r.save.ongoing||r.load.ongoing||r.delete.ongoing||r.share.ongoing||r.costs.ongoing||r.bonus.ongoing||r.randomize.ongoing||r.login.ongoing||r.resources.ongoing||r.changelog.ongoing||r.policy.ongoing||r.donate.ongoing||r.sync.ongoing,o),n.$$.dirty[0]&8&&(document.title=(s?s.name+" - ":"")+"Fantastic Calculator")},[A,N,D,s,r,a,c,k,S,H,z,Fe,i,o,_,w,T,I,K,te,ee,fe,Be,Ne,u,Ae,_e,be,rt,St,Ft,he,Kt,Z,Ce,Me,tt,_t,Ot,Xe,Et]}class q8 extends De{constructor(e){super(),Te(this,e,W8,H8,ve,{},null,[-1,-1,-1])}}new q8({target:document.body});
