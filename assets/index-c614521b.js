var Uf=Object.defineProperty;var qf=(n,e,t)=>e in n?Uf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var gn=(n,e,t)=>(qf(n,typeof e!="symbol"?e+"":e,t),t);import{checkSyncNeed as Wf}from"https://xt8ss.github.io/ff-site-data/data-sync.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Z(){}const cs=n=>n;function Hf(n,e){for(const t in e)n[t]=e[t];return n}function ru(n){return n()}function kl(){return Object.create(null)}function be(n){n.forEach(ru)}function $n(n){return typeof n=="function"}function pe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ys;function et(n,e){return n===e?!0:(ys||(ys=document.createElement("a")),ys.href=e,n===ys.href)}function zf(n){return Object.keys(n).length===0}function ou(n,...e){if(n==null){for(const i of e)i(void 0);return Z}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function jf(n){let e;return ou(n,t=>e=t)(),e}function Y(n,e,t){n.$$.on_destroy.push(ou(e,t))}function Vf(n,e,t,i){if(n){const s=lu(n,e,t,i);return n[0](s)}}function lu(n,e,t,i){return n[1]&&i?Hf(t.ctx.slice(),n[1](i(e))):t.ctx}function Gf(n,e,t,i){if(n[2]&&i){const s=n[2](i(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function Kf(n,e,t,i,s,r){if(s){const o=lu(e,t,i,r);n.p(o,s)}}function Yf(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function z(n,e,t){return n.set(t),e}function au(n){return n&&$n(n.destroy)?n.destroy:Z}const cu=typeof window<"u";let rr=cu?()=>window.performance.now():()=>Date.now(),po=cu?n=>requestAnimationFrame(n):Z;const ai=new Set;function uu(n){ai.forEach(e=>{e.c(n)||(ai.delete(e),e.f())}),ai.size!==0&&po(uu)}function or(n){let e;return ai.size===0&&po(uu),{promise:new Promise(t=>{ai.add(e={c:n,f:t})}),abort(){ai.delete(e)}}}const Qf=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(n,e){n.appendChild(e)}function du(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Jf(n){const e=g("style");return e.textContent="/* empty */",Xf(du(n),e),e.sheet}function Xf(n,e){return h(n.head||n,e),e.sheet}function D(n,e,t){n.insertBefore(e,t||null)}function N(n){n.parentNode&&n.parentNode.removeChild(n)}function vt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function g(n){return document.createElement(n)}function xf(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ee(n){return document.createTextNode(n)}function C(){return ee(" ")}function mt(){return ee("")}function A(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function m(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Oe(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:m(n,e,t)}function fu(n){return n===""?null:+n}function Zf(n){return Array.from(n.childNodes)}function ke(n,e){e=""+e,n.data!==e&&(n.data=e)}function xt(n,e){n.value=e??""}function Ye(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}let ws;function $f(){if(ws===void 0){ws=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ws=!0}}return ws}function An(n,e){getComputedStyle(n).position==="static"&&(n.style.position="relative");const i=g("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=$f();let r;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=A(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{r=A(i.contentWindow,"resize",e),e()}),h(n,i),()=>{(s||r&&i.contentWindow)&&r(),N(i)}}function ae(n,e,t){n.classList.toggle(e,!!t)}function hu(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}class pu{constructor(e=!1){gn(this,"is_svg",!1);gn(this,"e");gn(this,"n");gn(this,"t");gn(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,i=null){this.e||(this.is_svg?this.e=xf(t.nodeName):this.e=g(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)D(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}const As=new Map;let Ds=0;function eh(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function th(n,e){const t={stylesheet:Jf(e),rules:{}};return As.set(n,t),t}function Yi(n,e,t,i,s,r,o,a=0){const l=16.666/i;let c=`{
`;for(let v=0;v<=1;v+=l){const y=e+(t-e)*r(v);c+=v*100+`%{${o(y,1-y)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,d=`__svelte_${eh(u)}_${a}`,f=du(n),{stylesheet:p,rules:_}=As.get(f)||th(f,n);_[d]||(_[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const b=n.style.animation||"";return n.style.animation=`${b?`${b}, `:""}${d} ${i}ms linear ${s}ms 1 both`,Ds+=1,d}function Qi(n,e){const t=(n.style.animation||"").split(", "),i=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-i.length;s&&(n.style.animation=i.join(", "),Ds-=s,Ds||nh())}function nh(){po(()=>{Ds||(As.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&N(e)}),As.clear())})}function ih(n,e,t,i){if(!e)return Z;const s=n.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return Z;const{delay:r=0,duration:o=300,easing:a=cs,start:l=rr()+r,end:c=l+o,tick:u=Z,css:d}=t(n,{from:e,to:s},i);let f=!0,p=!1,_;function b(){d&&(_=Yi(n,0,1,o,r,a,d)),r||(p=!0)}function v(){d&&Qi(n,_),f=!1}return or(y=>{if(!p&&y>=l&&(p=!0),p&&y>=c&&(u(1,0),v()),!f)return!1;if(p){const w=y-l,k=0+1*a(w/o);u(k,1-k)}return!0}),b(),u(0,1),v}function sh(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,s=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,_u(n,s)}}function _u(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform;n.style.transform=`${s} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Ji;function Wi(n){Ji=n}function mu(){if(!Ji)throw new Error("Function called outside component initialization");return Ji}function rh(n){mu().$$.on_mount.push(n)}function Xt(){const n=mu();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=hu(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const ri=[],ce=[];let ci=[];const zr=[],oh=Promise.resolve();let jr=!1;function lh(){jr||(jr=!0,oh.then(gu))}function ye(n){ci.push(n)}function Fe(n){zr.push(n)}const Sr=new Set;let ni=0;function gu(){if(ni!==0)return;const n=Ji;do{try{for(;ni<ri.length;){const e=ri[ni];ni++,Wi(e),ah(e.$$)}}catch(e){throw ri.length=0,ni=0,e}for(Wi(null),ri.length=0,ni=0;ce.length;)ce.pop()();for(let e=0;e<ci.length;e+=1){const t=ci[e];Sr.has(t)||(Sr.add(t),t())}ci.length=0}while(ri.length);for(;zr.length;)zr.pop()();jr=!1,Sr.clear(),Wi(n)}function ah(n){if(n.fragment!==null){n.update(),be(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ye)}}function ch(n){const e=[],t=[];ci.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),ci=e}let Mi;function _o(){return Mi||(Mi=Promise.resolve(),Mi.then(()=>{Mi=null})),Mi}function Hn(n,e,t){n.dispatchEvent(hu(`${e?"intro":"outro"}${t}`))}const Es=new Set;let Zt;function je(){Zt={r:0,c:[],p:Zt}}function Ve(){Zt.r||be(Zt.c),Zt=Zt.p}function B(n,e){n&&n.i&&(Es.delete(n),n.i(e))}function U(n,e,t,i){if(n&&n.o){if(Es.has(n))return;Es.add(n),Zt.c.push(()=>{Es.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}const mo={duration:0};function go(n,e,t){const i={direction:"in"};let s=e(n,t,i),r=!1,o,a,l=0;function c(){o&&Qi(n,o)}function u(){const{delay:f=0,duration:p=300,easing:_=cs,tick:b=Z,css:v}=s||mo;v&&(o=Yi(n,0,1,p,f,_,v,l++)),b(0,1);const y=rr()+f,w=y+p;a&&a.abort(),r=!0,ye(()=>Hn(n,!0,"start")),a=or(k=>{if(r){if(k>=w)return b(1,0),Hn(n,!0,"end"),c(),r=!1;if(k>=y){const S=_((k-y)/p);b(S,1-S)}}return r})}let d=!1;return{start(){d||(d=!0,Qi(n),$n(s)?(s=s(i),_o().then(u)):u())},invalidate(){d=!1},end(){r&&(c(),r=!1)}}}function bo(n,e,t){const i={direction:"out"};let s=e(n,t,i),r=!0,o;const a=Zt;a.r+=1;let l;function c(){const{delay:u=0,duration:d=300,easing:f=cs,tick:p=Z,css:_}=s||mo;_&&(o=Yi(n,1,0,d,u,f,_));const b=rr()+u,v=b+d;ye(()=>Hn(n,!1,"start")),"inert"in n&&(l=n.inert,n.inert=!0),or(y=>{if(r){if(y>=v)return p(0,1),Hn(n,!1,"end"),--a.r||be(a.c),!1;if(y>=b){const w=f((y-b)/d);p(1-w,w)}}return r})}return $n(s)?_o().then(()=>{s=s(i),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=l),u&&s.tick&&s.tick(1,0),r&&(o&&Qi(n,o),r=!1)}}}function he(n,e,t,i){let r=e(n,t,{direction:"both"}),o=i?0:1,a=null,l=null,c=null,u;function d(){c&&Qi(n,c)}function f(_,b){const v=_.b-o;return b*=Math.abs(v),{a:o,b:_.b,d:v,duration:b,start:_.start,end:_.start+b,group:_.group}}function p(_){const{delay:b=0,duration:v=300,easing:y=cs,tick:w=Z,css:k}=r||mo,S={start:rr()+b,b:_};_||(S.group=Zt,Zt.r+=1),"inert"in n&&(_?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),a||l?l=S:(k&&(d(),c=Yi(n,o,_,v,b,y,k)),_&&w(0,1),a=f(S,v),ye(()=>Hn(n,_,"start")),or(P=>{if(l&&P>l.start&&(a=f(l,v),l=null,Hn(n,a.b,"start"),k&&(d(),c=Yi(n,o,a.b,a.duration,0,y,r.css))),a){if(P>=a.end)w(o=a.b,1-o),Hn(n,a.b,"end"),l||(a.b?d():--a.group.r||be(a.group.c)),a=null;else if(P>=a.start){const W=P-a.start;o=a.a+a.d*y(W/a.duration),w(o,1-o)}}return!!(a||l)}))}return{run(_){$n(r)?_o().then(()=>{r=r({direction:_?"in":"out"}),p(_)}):p(_)},end(){d(),a=l=null}}}function Re(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function uh(n,e){U(n,1,1,()=>{e.delete(n.key)})}function dh(n,e){n.f(),uh(n,e)}function fh(n,e,t,i,s,r,o,a,l,c,u,d){let f=n.length,p=r.length,_=f;const b={};for(;_--;)b[n[_].key]=_;const v=[],y=new Map,w=new Map,k=[];for(_=p;_--;){const O=d(s,r,_),L=t(O);let R=o.get(L);R?i&&k.push(()=>R.p(O,e)):(R=c(L,O),R.c()),y.set(L,v[_]=R),L in b&&w.set(L,Math.abs(_-b[L]))}const S=new Set,P=new Set;function W(O){B(O,1),O.m(a,u),o.set(O.key,O),u=O.first,p--}for(;f&&p;){const O=v[p-1],L=n[f-1],R=O.key,G=L.key;O===L?(u=O.first,f--,p--):y.has(G)?!o.has(R)||S.has(R)?W(O):P.has(G)?f--:w.get(R)>w.get(G)?(P.add(R),W(O)):(S.add(G),f--):(l(L,o),f--)}for(;f--;){const O=n[f];y.has(O.key)||l(O,o)}for(;p;)W(v[p-1]);return be(k),v}function Be(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function oe(n){n&&n.c()}function se(n,e,t){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),ye(()=>{const r=n.$$.on_mount.map(ru).filter($n);n.$$.on_destroy?n.$$.on_destroy.push(...r):be(r),n.$$.on_mount=[]}),s.forEach(ye)}function re(n,e){const t=n.$$;t.fragment!==null&&(ch(t.after_update),be(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function hh(n,e){n.$$.dirty[0]===-1&&(ri.push(n),lh(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ce(n,e,t,i,s,r,o=null,a=[-1]){const l=Ji;Wi(n);const c=n.$$={fragment:null,ctx:[],props:r,update:Z,not_equal:s,bound:kl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:kl(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,f,...p)=>{const _=p.length?p[0]:f;return c.ctx&&s(c.ctx[d],c.ctx[d]=_)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](_),u&&hh(n,d)),f}):[],c.update(),u=!0,be(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const d=Zf(e.target);c.fragment&&c.fragment.l(d),d.forEach(N)}else c.fragment&&c.fragment.c();e.intro&&B(n.$$.fragment),se(n,e.target,e.anchor),gu()}Wi(l)}class Ie{constructor(){gn(this,"$$");gn(this,"$$set")}$destroy(){re(this,1),this.$destroy=Z}$on(e,t){if(!$n(t))return Z;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!zf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ph="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ph);const ii=[];function $e(n,e=Z){let t;const i=new Set;function s(a){if(pe(n,a)&&(n=a,t)){const l=!ii.length;for(const c of i)c[1](),ii.push(c,n);if(l){for(let c=0;c<ii.length;c+=2)ii[c][0](ii[c+1]);ii.length=0}}}function r(a){s(a(n))}function o(a,l=Z){const c=[a,l];return i.add(c),i.size===1&&(t=e(s,r)||Z),a(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}let Cl=0,Il=localStorage.getItem("changelogSeen"),El=localStorage.getItem("supportMe"),Vr=$e({}),Ps=$e(!1),_i=$e(""),Gr=$e([]),Sl=$e({select:new Audio}),Yt=$e({}),Qt=$e({}),St=$e({armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0}),nn=$e({}),vo=$e([]),Tr=$e({}),Bt=$e(),Ms=$e(!1),Wt=$e({}),In=$e(!1),Ss=$e(Il?JSON.parse(Il):!1),zn=$e(El?JSON.parse(El):{showAgain:!0,timesDenied:0,totalVisits:0,lastVisits:0}),Gn=$e(!1),mi=$e({}),gi=$e({}),_h=$e({}),Ft=$e({armor:{min:0,avg:0,max:0},gear:{min:0,avg:0,max:0},total:{min:0,avg:0,max:0}}),ui=$e({}),Li=$e({parasol:!0,armor:!0,gear:!0,basic:!0}),X=$e({item:{ongoing:!1,data:null},export:{ongoing:!1,status:null},save:{ongoing:!1,status:null},load:{ongoing:!1,status:null},delete:{ongoing:!1,status:null},share:{ongoing:!1},costs:{ongoing:!1},bonus:{ongoing:!1},screenshot:{ongoing:!1},randomize:{ongoing:!1},login:{ongoing:!1},resources:{ongoing:!1},changelog:{ongoing:!1},policy:{ongoing:!1},donate:{ongoing:!1},sync:{ongoing:!1},message:""});Wt.subscribe(()=>{Cl++,setTimeout(()=>{Cl>1&&window.history.replaceState(null,null,location.origin+location.pathname)})});Ss.subscribe(n=>window.localStorage.setItem("changelogSeen",JSON.stringify(n)));zn.subscribe(n=>localStorage.setItem("supportMe",JSON.stringify(n)));/**
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
 */const bu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const $=function(n,e){if(!n)throw Si(e)},Si=function(n){return new Error("Firebase Database ("+bu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const vu=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},mh=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),i.push(t[u],t[d],t[f],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new gh;const f=r<<2|a>>4;if(i.push(f),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const _=c<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yu=function(n){const e=vu(n);return yo.encodeByteArray(e,!0)},Ls=function(n){return yu(n).replace(/\./g,"")},Fs=function(n){try{return yo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bh(n){return wu(void 0,n)}function wu(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!vh(t)||(n[t]=wu(n[t],e[t]));return n}function vh(n){return n!=="__proto__"}/**
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
 */function yh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wh=()=>yh().__FIREBASE_DEFAULTS__,kh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ch=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fs(n[1]);return e&&JSON.parse(e)},wo=()=>{try{return wh()||kh()||Ch()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ku=n=>{var e,t;return(t=(e=wo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ih=n=>{const e=ku(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Cu=()=>{var n;return(n=wo())===null||n===void 0?void 0:n.config},Iu=n=>{var e;return(e=wo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class lr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Eh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ls(JSON.stringify(t)),Ls(JSON.stringify(o)),a].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ko(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function Sh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Eu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Th(){const n=kt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Su(){return bu.NODE_ADMIN===!0}function Nh(){try{return typeof indexedDB=="object"}catch{return!1}}function Oh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Rh="FirebaseError";class Fn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Rh,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ah(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,a,i)}}function Ah(n,e){return n.replace(Dh,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Dh=/\{\$([^}]+)}/g;/**
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
 */function Xi(n){return JSON.parse(n)}function at(n){return JSON.stringify(n)}/**
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
 */const Tu=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Xi(Fs(r[0])||""),t=Xi(Fs(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Ph=function(n){const e=Tu(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Mh=function(n){const e=Tu(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function rn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function bi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Kr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bs(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Us(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Tl(r)&&Tl(o)){if(!Us(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Tl(n){return n!==null&&typeof n=="object"}/**
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
 */function Ti(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Lh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const f=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Fh(n,e){const t=new Bh(n,e);return t.subscribe.bind(t)}class Bh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Uh(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Nr),s.error===void 0&&(s.error=Nr),s.complete===void 0&&(s.complete=Nr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Nr(){}function Co(n,e){return`${n} failed: ${e} argument `}/**
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
 */const qh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,$(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ar=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Nt(n){return n&&n._delegate?n._delegate:n}class Kn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bn="[DEFAULT]";/**
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
 */class Wh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new lr;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zh(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Hh(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hh(n){return n===Bn?void 0:n}function zh(n){return n.instantiationMode==="EAGER"}/**
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
 */class jh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ke||(Ke={}));const Vh={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},Gh=Ke.INFO,Kh={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},Yh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Kh[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Io{constructor(e){this.name=e,this._logLevel=Gh,this._logHandler=Yh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...e),this._logHandler(this,Ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...e),this._logHandler(this,Ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...e),this._logHandler(this,Ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...e),this._logHandler(this,Ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...e),this._logHandler(this,Ke.ERROR,...e)}}const Qh=(n,e)=>e.some(t=>n instanceof t);let Nl,Ol;function Jh(){return Nl||(Nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xh(){return Ol||(Ol=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nu=new WeakMap,Yr=new WeakMap,Ou=new WeakMap,Or=new WeakMap,Eo=new WeakMap;function xh(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(En(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Nu.set(t,n)}).catch(()=>{}),Eo.set(e,n),e}function Zh(n){if(Yr.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Yr.set(n,e)}let Qr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ou.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return En(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $h(n){Qr=n(Qr)}function ep(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Rr(this),e,...t);return Ou.set(i,e.sort?e.sort():[e]),En(i)}:Xh().includes(n)?function(...e){return n.apply(Rr(this),e),En(Nu.get(this))}:function(...e){return En(n.apply(Rr(this),e))}}function tp(n){return typeof n=="function"?ep(n):(n instanceof IDBTransaction&&Zh(n),Qh(n,Jh())?new Proxy(n,Qr):n)}function En(n){if(n instanceof IDBRequest)return xh(n);if(Or.has(n))return Or.get(n);const e=tp(n);return e!==n&&(Or.set(n,e),Eo.set(e,n)),e}const Rr=n=>Eo.get(n);function np(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=En(o);return i&&o.addEventListener("upgradeneeded",l=>{i(En(o.result),l.oldVersion,l.newVersion,En(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ip=["get","getKey","getAll","getAllKeys","count"],sp=["put","add","delete","clear"],Ar=new Map;function Rl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ar.get(e))return Ar.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=sp.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ip.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Ar.set(e,r),r}$h(n=>({...n,get:(e,t,i)=>Rl(e,t)||n.get(e,t,i),has:(e,t)=>!!Rl(e,t)||n.has(e,t)}));/**
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
 */class rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(op(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function op(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jr="@firebase/app",Al="0.9.23";/**
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
 */const Yn=new Io("@firebase/app"),lp="@firebase/app-compat",ap="@firebase/analytics-compat",cp="@firebase/analytics",up="@firebase/app-check-compat",dp="@firebase/app-check",fp="@firebase/auth",hp="@firebase/auth-compat",pp="@firebase/database",_p="@firebase/database-compat",mp="@firebase/functions",gp="@firebase/functions-compat",bp="@firebase/installations",vp="@firebase/installations-compat",yp="@firebase/messaging",wp="@firebase/messaging-compat",kp="@firebase/performance",Cp="@firebase/performance-compat",Ip="@firebase/remote-config",Ep="@firebase/remote-config-compat",Sp="@firebase/storage",Tp="@firebase/storage-compat",Np="@firebase/firestore",Op="@firebase/firestore-compat",Rp="firebase",Ap="10.6.0";/**
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
 */const Xr="[DEFAULT]",Dp={[Jr]:"fire-core",[lp]:"fire-core-compat",[cp]:"fire-analytics",[ap]:"fire-analytics-compat",[dp]:"fire-app-check",[up]:"fire-app-check-compat",[fp]:"fire-auth",[hp]:"fire-auth-compat",[pp]:"fire-rtdb",[_p]:"fire-rtdb-compat",[mp]:"fire-fn",[gp]:"fire-fn-compat",[bp]:"fire-iid",[vp]:"fire-iid-compat",[yp]:"fire-fcm",[wp]:"fire-fcm-compat",[kp]:"fire-perf",[Cp]:"fire-perf-compat",[Ip]:"fire-rc",[Ep]:"fire-rc-compat",[Sp]:"fire-gcs",[Tp]:"fire-gcs-compat",[Np]:"fire-fst",[Op]:"fire-fst-compat","fire-js":"fire-js",[Rp]:"fire-js-all"};/**
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
 */const qs=new Map,xr=new Map;function Pp(n,e){try{n.container.addComponent(e)}catch(t){Yn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vi(n){const e=n.name;if(xr.has(e))return Yn.debug(`There were multiple attempts to register component ${e}.`),!1;xr.set(e,n);for(const t of qs.values())Pp(t,n);return!0}function So(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Mp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sn=new us("app","Firebase",Mp);/**
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
 */class Lp{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ni=Ap;function To(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Xr,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Sn.create("bad-app-name",{appName:String(s)});if(t||(t=Cu()),!t)throw Sn.create("no-options");const r=qs.get(s);if(r){if(Us(t,r.options)&&Us(i,r.config))return r;throw Sn.create("duplicate-app",{appName:s})}const o=new jh(s);for(const l of xr.values())o.addComponent(l);const a=new Lp(t,i,o);return qs.set(s,a),a}function cr(n=Xr){const e=qs.get(n);if(!e&&n===Xr&&Cu())return To();if(!e)throw Sn.create("no-app",{appName:n});return e}function Tn(n,e,t){var i;let s=(i=Dp[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yn.warn(a.join(" "));return}vi(new Kn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Fp="firebase-heartbeat-database",Bp=1,xi="firebase-heartbeat-store";let Dr=null;function Ru(){return Dr||(Dr=np(Fp,Bp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(xi)}}}).catch(n=>{throw Sn.create("idb-open",{originalErrorMessage:n.message})})),Dr}async function Up(n){try{return await(await Ru()).transaction(xi).objectStore(xi).get(Au(n))}catch(e){if(e instanceof Fn)Yn.warn(e.message);else{const t=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yn.warn(t.message)}}}async function Dl(n,e){try{const i=(await Ru()).transaction(xi,"readwrite");await i.objectStore(xi).put(e,Au(n)),await i.done}catch(t){if(t instanceof Fn)Yn.warn(t.message);else{const i=Sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yn.warn(i.message)}}}function Au(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qp=1024,Wp=30*24*60*60*1e3;class Hp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jp(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Wp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pl(),{heartbeatsToSend:i,unsentEntries:s}=zp(this._heartbeatsCache.heartbeats),r=Ls(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pl(){return new Date().toISOString().substring(0,10)}function zp(n,e=qp){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ml(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ml(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nh()?Oh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Up(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ml(n){return Ls(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Vp(n){vi(new Kn("platform-logger",e=>new rp(e),"PRIVATE")),vi(new Kn("heartbeat",e=>new Hp(e),"PRIVATE")),Tn(Jr,Al,n),Tn(Jr,Al,"esm2017"),Tn("fire-js","")}Vp("");var Gp="firebase",Kp="10.6.0";/**
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
 */Tn(Gp,Kp,"app");function No(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Du(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yp=Du,Pu=new us("auth","Firebase",Du());/**
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
 */const Ws=new Io("@firebase/auth");function Qp(n,...e){Ws.logLevel<=Ke.WARN&&Ws.warn(`Auth (${Ni}): ${n}`,...e)}function Ts(n,...e){Ws.logLevel<=Ke.ERROR&&Ws.error(`Auth (${Ni}): ${n}`,...e)}/**
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
 */function dn(n,...e){throw Oo(n,...e)}function $t(n,...e){return Oo(n,...e)}function Jp(n,e,t){const i=Object.assign(Object.assign({},Yp()),{[e]:t});return new us("auth","Firebase",i).create(e,{appName:n.name})}function Oo(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Pu.create(n,...e)}function ge(n,e,...t){if(!n)throw Oo(e,...t)}function on(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ts(e),new Error(e)}function fn(n,e){n||on(e)}/**
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
 */function Zr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Xp(){return Ll()==="http:"||Ll()==="https:"}function Ll(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function xp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xp()||Sh()||"connection"in navigator)?navigator.onLine:!0}function Zp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ds{constructor(e,t){this.shortDelay=e,this.longDelay=t,fn(t>e,"Short delay should be less than long delay!"),this.isMobile=ko()||Eu()}get(){return xp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ro(n,e){fn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Mu{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $p={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const e_=new ds(3e4,6e4);function Ao(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Oi(n,e,t,i,s={}){return Lu(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ti(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Mu.fetch()(Fu(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Lu(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},$p),e);try{const s=new n_(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ks(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ks(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ks(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ks(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Jp(n,u,c);dn(n,u)}}catch(s){if(s instanceof Fn)throw s;dn(n,"network-request-failed",{message:String(s)})}}async function t_(n,e,t,i,s={}){const r=await Oi(n,e,t,i,s);return"mfaPendingCredential"in r&&dn(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Fu(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Ro(n.config,s):`${n.config.apiScheme}://${s}`}class n_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i($t(this.auth,"network-request-failed")),e_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ks(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=$t(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function i_(n,e){return Oi(n,"POST","/v1/accounts:delete",e)}async function s_(n,e){return Oi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r_(n,e=!1){const t=Nt(n),i=await t.getIdToken(e),s=Do(i);ge(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Hi(Pr(s.auth_time)),issuedAtTime:Hi(Pr(s.iat)),expirationTime:Hi(Pr(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Pr(n){return Number(n)*1e3}function Do(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ts("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fs(t);return s?JSON.parse(s):(Ts("Failed to decode base64 JWT payload"),null)}catch(s){return Ts("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function o_(n){const e=Do(n);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Fn&&l_(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function l_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class a_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hs(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Zi(n,s_(t,{idToken:i}));ge(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?d_(r.providerUserInfo):[],a=u_(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Bu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function c_(n){const e=Nt(n);await Hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u_(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function d_(n){return n.map(e=>{var{providerId:t}=e,i=No(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function f_(n,e){const t=await Lu(n,{},async()=>{const i=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Fu(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mu.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function h_(n,e){return Oi(n,"POST","/v2/accounts:revokeToken",Ao(n,e))}/**
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
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):o_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ge(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await f_(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new $i;return i&&(ge(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ge(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ge(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
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
 */function bn(n,e){ge(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=No(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Bu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Zi(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return r_(this,e)}reload(){return c_(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Hs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zi(this,i_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=t.createdAt)!==null&&c!==void 0?c:void 0,w=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:S,isAnonymous:P,providerData:W,stsTokenManager:O}=t;ge(k&&O,e,"internal-error");const L=$i.fromJSON(this.name,O);ge(typeof k=="string",e,"internal-error"),bn(d,e.name),bn(f,e.name),ge(typeof S=="boolean",e,"internal-error"),ge(typeof P=="boolean",e,"internal-error"),bn(p,e.name),bn(_,e.name),bn(b,e.name),bn(v,e.name),bn(y,e.name),bn(w,e.name);const R=new jn({uid:k,auth:e,email:f,emailVerified:S,displayName:d,isAnonymous:P,photoURL:_,phoneNumber:p,tenantId:b,stsTokenManager:L,createdAt:y,lastLoginAt:w});return W&&Array.isArray(W)&&(R.providerData=W.map(G=>Object.assign({},G))),v&&(R._redirectEventId=v),R}static async _fromIdTokenResponse(e,t,i=!1){const s=new $i;s.updateFromServerResponse(t);const r=new jn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Hs(r),r}}/**
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
 */const Fl=new Map;function ln(n){fn(n instanceof Function,"Expected a class definition");let e=Fl.get(n);return e?(fn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fl.set(n,e),e)}/**
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
 */class Uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uu.type="NONE";const Bl=Uu;/**
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
 */function Ns(n,e,t){return`firebase:${n}:${e}:${t}`}class di{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ns(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ns("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new di(ln(Bl),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||ln(Bl);const o=Ns(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=jn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new di(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new di(r,e,i))}}/**
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
 */function Ul(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ju(e))return"Blackberry";if(Vu(e))return"Webos";if(Po(e))return"Safari";if((e.includes("chrome/")||Wu(e))&&!e.includes("edge/"))return"Chrome";if(zu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function qu(n=kt()){return/firefox\//i.test(n)}function Po(n=kt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wu(n=kt()){return/crios\//i.test(n)}function Hu(n=kt()){return/iemobile/i.test(n)}function zu(n=kt()){return/android/i.test(n)}function ju(n=kt()){return/blackberry/i.test(n)}function Vu(n=kt()){return/webos/i.test(n)}function ur(n=kt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function p_(n=kt()){var e;return ur(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function __(){return Th()&&document.documentMode===10}function Gu(n=kt()){return ur(n)||zu(n)||Vu(n)||ju(n)||/windows phone/i.test(n)||Hu(n)}function m_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ku(n,e=[]){let t;switch(n){case"Browser":t=Ul(kt());break;case"Worker":t=`${Ul(kt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ni}/${i}`}/**
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
 */class g_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function b_(n,e={}){return Oi(n,"GET","/v2/passwordPolicy",Ao(n,e))}/**
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
 */const v_=6;class y_{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:v_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class w_{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ql(this),this.idTokenSubscription=new ql(this),this.beforeStateQueue=new g_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ln(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Nt(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await b_(this),t=new y_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await h_(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ln(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ku(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Qp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Mo(n){return Nt(n)}class ql{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fh(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function k_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function C_(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=$t("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",k_().appendChild(i)})}function I_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function E_(n,e){const t=So(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Us(r,e??{}))return s;dn(s,"already-initialized")}return t.initialize({options:e})}function S_(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ln);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function T_(n,e,t){const i=Mo(n);ge(i._canInitEmulator,i,"emulator-config-failed"),ge(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Yu(e),{host:o,port:a}=N_(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||O_()}function Yu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function N_(n){const e=Yu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Wl(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Wl(o)}}}function Wl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function O_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Qu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,t){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
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
 */async function fi(n,e){return t_(n,"POST","/v1/accounts:signInWithIdp",Ao(n,e))}/**
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
 */const R_="http://localhost";class Qn extends Qu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=No(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Qn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return fi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,fi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fi(e,t)}buildRequest(){const e={requestUri:R_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ti(t)}return e}}/**
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
 */class Ju{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fs extends Ju{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yn extends fs{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
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
 */class wn extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return wn.credential(t,i)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
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
 */class kn extends fs{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
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
 */class Cn extends fs{constructor(){super("twitter.com")}static credential(e,t){return Qn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Cn.credential(t,i)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
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
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await jn._fromIdTokenResponse(e,i,s),o=Hl(i);return new yi({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Hl(i);return new yi({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Hl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class zs extends Fn{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,zs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new zs(e,t,i,s)}}function Xu(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?zs._fromErrorAndOperation(n,r,e,i):r})}async function A_(n,e,t=!1){const i=await Zi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yi._forOperation(n,"link",i)}/**
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
 */async function D_(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Zi(n,Xu(i,s,e,n),t);ge(r.idToken,i,"internal-error");const o=Do(r.idToken);ge(o,i,"internal-error");const{sub:a}=o;return ge(n.uid===a,i,"user-mismatch"),yi._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&dn(i,"user-mismatch"),r}}/**
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
 */async function P_(n,e,t=!1){const i="signIn",s=await Xu(n,i,e),r=await yi._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function M_(n,e,t,i){return Nt(n).onIdTokenChanged(e,t,i)}function L_(n,e,t){return Nt(n).beforeAuthStateChanged(e,t)}function F_(n,e,t,i){return Nt(n).onAuthStateChanged(e,t,i)}const js="__sak";/**
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
 */class xu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(js,"1"),this.storage.removeItem(js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function B_(){const n=kt();return Po(n)||ur(n)}const U_=1e3,q_=10;class Zu extends xu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=B_()&&m_(),this.fallbackToPolling=Gu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);__()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,q_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},U_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zu.type="LOCAL";const W_=Zu;/**
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
 */class $u extends xu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$u.type="SESSION";const ed=$u;/**
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
 */function H_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class dr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new dr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await H_(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dr.receivers=[];/**
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
 */function Lo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class z_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Lo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function en(){return window}function j_(n){en().location.href=n}/**
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
 */function td(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function V_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function K_(){return td()?self:null}/**
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
 */const nd="firebaseLocalStorageDb",Y_=1,Vs="firebaseLocalStorage",id="fbase_key";class hs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fr(n,e){return n.transaction([Vs],e?"readwrite":"readonly").objectStore(Vs)}function Q_(){const n=indexedDB.deleteDatabase(nd);return new hs(n).toPromise()}function $r(){const n=indexedDB.open(nd,Y_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Vs,{keyPath:id})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Vs)?e(i):(i.close(),await Q_(),e(await $r()))})})}async function zl(n,e,t){const i=fr(n,!0).put({[id]:e,value:t});return new hs(i).toPromise()}async function J_(n,e){const t=fr(n,!1).get(e),i=await new hs(t).toPromise();return i===void 0?null:i.value}function jl(n,e){const t=fr(n,!0).delete(e);return new hs(t).toPromise()}const X_=800,x_=3;class sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $r(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>x_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return td()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dr._getInstance(K_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await V_(),!this.activeServiceWorker)return;this.sender=new z_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||G_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $r();return await zl(e,js,"1"),await jl(e,js),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>zl(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>J_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=fr(s,!1).getAll();return new hs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sd.type="LOCAL";const Z_=sd;new ds(3e4,6e4);/**
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
 */function $_(n,e){return e?ln(e):(ge(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Fo extends Qu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function em(n){return P_(n.auth,new Fo(n),n.bypassAuthState)}function tm(n){const{auth:e,user:t}=n;return ge(t,e,"internal-error"),D_(t,new Fo(n),n.bypassAuthState)}async function nm(n){const{auth:e,user:t}=n;return ge(t,e,"internal-error"),A_(t,new Fo(n),n.bypassAuthState)}/**
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
 */class rd{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return em;case"linkViaPopup":case"linkViaRedirect":return nm;case"reauthViaPopup":case"reauthViaRedirect":return tm;default:dn(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const im=new ds(2e3,1e4);class oi extends rd{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=Lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,im.get())};e()}}oi.currentPopupAction=null;/**
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
 */const sm="pendingRedirect",Os=new Map;class rm extends rd{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Os.get(this.auth._key());if(!e){try{const i=await om(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Os.set(this.auth._key(),e)}return this.bypassAuthState||Os.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function om(n,e){const t=cm(e),i=am(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function lm(n,e){Os.set(n._key(),e)}function am(n){return ln(n._redirectPersistence)}function cm(n){return Ns(sm,n.config.apiKey,n.name)}async function um(n,e,t=!1){const i=Mo(n),s=$_(i,e),o=await new rm(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const dm=10*60*1e3;class fm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!od(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError($t(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vl(e))}saveEventToCache(e){this.cachedEventUids.add(Vl(e)),this.lastProcessedEventTime=Date.now()}}function Vl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function od({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return od(n);default:return!1}}/**
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
 */async function pm(n,e={}){return Oi(n,"GET","/v1/projects",e)}/**
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
 */const _m=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mm=/^https?/;async function gm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pm(n);for(const t of e)try{if(bm(t))return}catch{}dn(n,"unauthorized-domain")}function bm(n){const e=Zr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!mm.test(t))return!1;if(_m.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const vm=new ds(3e4,6e4);function Gl(){const n=en().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ym(n){return new Promise((e,t)=>{var i,s,r;function o(){Gl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gl(),t($t(n,"network-request-failed"))},timeout:vm.get()})}if(!((s=(i=en().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=en().gapi)===null||r===void 0)&&r.load)o();else{const a=I_("iframefcb");return en()[a]=()=>{gapi.load?o():t($t(n,"network-request-failed"))},C_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Rs=null,e})}let Rs=null;function wm(n){return Rs=Rs||ym(n),Rs}/**
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
 */const km=new ds(5e3,15e3),Cm="__/auth/iframe",Im="emulator/auth/iframe",Em={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tm(n){const e=n.config;ge(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ro(e,Im):`https://${n.config.authDomain}/${Cm}`,i={apiKey:e.apiKey,appName:n.name,v:Ni},s=Sm.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Ti(i).slice(1)}`}async function Nm(n){const e=await wm(n),t=en().gapi;return ge(t,n,"internal-error"),e.open({where:document.body,url:Tm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Em,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=$t(n,"network-request-failed"),a=en().setTimeout(()=>{r(o)},km.get());function l(){en().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Om={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rm=500,Am=600,Dm="_blank",Pm="http://localhost";class Kl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mm(n,e,t,i=Rm,s=Am){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Om),{width:i.toString(),height:s.toString(),top:r,left:o}),c=kt().toLowerCase();t&&(a=Wu(c)?Dm:t),qu(c)&&(e=e||Pm,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,_])=>`${f}${p}=${_},`,"");if(p_(c)&&a!=="_self")return Lm(e||"",a),new Kl(null);const d=window.open(e||"",a,u);ge(d,n,"popup-blocked");try{d.focus()}catch{}return new Kl(d)}function Lm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Fm="__/auth/handler",Bm="emulator/auth/handler",Um=encodeURIComponent("fac");async function Yl(n,e,t,i,s,r){ge(n.config.authDomain,n,"auth-domain-config-required"),ge(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ni,eventId:s};if(e instanceof Ju){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Kr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof fs){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${Um}=${encodeURIComponent(l)}`:"";return`${qm(n)}?${Ti(a).slice(1)}${c}`}function qm({config:n}){return n.emulator?Ro(n,Bm):`https://${n.authDomain}/${Fm}`}/**
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
 */const Mr="webStorageSupport";class Wm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ed,this._completeRedirectFn=um,this._overrideRedirectResult=lm}async _openPopup(e,t,i,s){var r;fn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Yl(e,t,i,Zr(),s);return Mm(e,o,Lo())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Yl(e,t,i,Zr(),s);return j_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(fn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Nm(e),i=new fm(e);return t.register("authEvent",s=>(ge(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mr,{type:Mr},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Mr];o!==void 0&&t(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gu()||Po()||ur()}}const Hm=Wm;var Ql="@firebase/auth",Jl="1.4.0";/**
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
 */class zm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vm(n){vi(new Kn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ku(n)},c=new w_(i,s,r,l);return S_(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),vi(new Kn("auth-internal",e=>{const t=Mo(e.getProvider("auth").getImmediate());return(i=>new zm(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(Ql,Jl,jm(n)),Tn(Ql,Jl,"esm2017")}/**
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
 */const Gm=5*60,Km=Iu("authIdTokenMaxAge")||Gm;let Xl=null;const Ym=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Km)return;const s=t==null?void 0:t.token;Xl!==s&&(Xl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qm(n=cr()){const e=So(n,"auth");if(e.isInitialized())return e.getImmediate();const t=E_(n,{popupRedirectResolver:Hm,persistence:[Z_,W_,ed]}),i=Iu("authTokenSyncURL");if(i){const r=Ym(i);L_(t,r,()=>r(t.currentUser)),M_(t,o=>r(o))}const s=ku("auth");return s&&T_(t,`http://${s}`),t}Vm("Browser");const xl="@firebase/database",Zl="1.0.1";/**
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
 */let ld="";function Jm(n){ld=n}/**
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
 */class Xm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Xi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class xm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ad=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Xm(e)}}catch{}return new xm},qn=ad("localStorage"),eo=ad("sessionStorage");/**
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
 */const hi=new Io("@firebase/database"),Zm=function(){let n=1;return function(){return n++}}(),cd=function(n){const e=qh(n),t=new Lh;t.update(e);const i=t.digest();return yo.encodeByteArray(i)},ps=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ps.apply(null,i):typeof i=="object"?e+=at(i):e+=i,e+=" "}return e};let Vn=null,$l=!0;const $m=function(n,e){$(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(hi.logLevel=Ke.VERBOSE,Vn=hi.log.bind(hi),e&&eo.set("logging_enabled",!0)):typeof n=="function"?Vn=n:(Vn=null,eo.remove("logging_enabled"))},yt=function(...n){if($l===!0&&($l=!1,Vn===null&&eo.get("logging_enabled")===!0&&$m(!0)),Vn){const e=ps.apply(null,n);Vn(e)}},_s=function(n){return function(...e){yt(n,...e)}},to=function(...n){const e="FIREBASE INTERNAL ERROR: "+ps(...n);hi.error(e)},hn=function(...n){const e=`FIREBASE FATAL ERROR: ${ps(...n)}`;throw hi.error(e),new Error(e)},At=function(...n){const e="FIREBASE WARNING: "+ps(...n);hi.warn(e)},eg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&At("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},tg=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Jn="[MIN_NAME]",Dn="[MAX_NAME]",Ri=function(n,e){if(n===e)return 0;if(n===Jn||e===Dn)return-1;if(e===Jn||n===Dn)return 1;{const t=ea(n),i=ea(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},ng=function(n,e){return n===e?0:n<e?-1:1},Fi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+at(e))},Uo=function(n){if(typeof n!="object"||n===null)return at(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=at(e[i]),t+=":",t+=Uo(n[e[i]]);return t+="}",t},ud=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Dt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const dd=function(n){$(!Bo(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},ig=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rg(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const og=new RegExp("^-?(0*)\\d{1,10}$"),lg=-2147483648,ag=2147483647,ea=function(n){if(og.test(n)){const e=Number(n);if(e>=lg&&e<=ag)return e}return null},Ai=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw At("Exception was thrown by user callback.",t),e},Math.floor(0))}},cg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class ug{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){At(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class dg{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',At(e)}}class pi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pi.OWNER="owner";/**
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
 */const qo="5",fd="v",hd="s",pd="r",_d="f",md=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gd="ls",bd="p",no="ac",vd="websocket",yd="long_polling";/**
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
 */class wd{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function fg(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function kd(n,e,t){$(typeof e=="string","typeof type must == string"),$(typeof t=="object","typeof params must == object");let i;if(e===vd)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===yd)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fg(n)&&(t.ns=n.namespace);const s=[];return Dt(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class hg{constructor(){this.counters_={}}incrementCounter(e,t=1){rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return bh(this.counters_)}}/**
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
 */const Lr={},Fr={};function Wo(n){const e=n.toString();return Lr[e]||(Lr[e]=new hg),Lr[e]}function pg(n,e){const t=n.toString();return Fr[t]||(Fr[t]=e()),Fr[t]}/**
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
 */class _g{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ai(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ta="start",mg="close",gg="pLPCommand",bg="pRTLPCB",Cd="id",Id="pw",Ed="ser",vg="cb",yg="seg",wg="ts",kg="d",Cg="dframe",Sd=1870,Td=30,Ig=Sd-Td,Eg=25e3,Sg=3e4;class li{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_s(e),this.stats_=Wo(t),this.urlFn=l=>(this.appCheckToken&&(l[no]=this.appCheckToken),kd(t,yd,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _g(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sg)),tg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ho((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ta)this.id=a,this.password=l;else if(o===mg)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ta]="t",i[Ed]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[vg]=this.scriptTagHolder.uniqueCallbackIdentifier),i[fd]=qo,this.transportSessionId&&(i[hd]=this.transportSessionId),this.lastSessionId&&(i[gd]=this.lastSessionId),this.applicationId&&(i[bd]=this.applicationId),this.appCheckToken&&(i[no]=this.appCheckToken),typeof location<"u"&&location.hostname&&md.test(location.hostname)&&(i[pd]=_d);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){li.forceAllow_=!0}static forceDisallow(){li.forceDisallow_=!0}static isAvailable(){return li.forceAllow_?!0:!li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ig()&&!sg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=at(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=yu(t),s=ud(i,Ig);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Cg]="t",i[Cd]=e,i[Id]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=at(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ho{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zm(),window[gg+this.uniqueCallbackIdentifier]=e,window[bg+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ho.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){yt("frame writing exception"),a.stack&&yt(a.stack),yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||yt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cd]=this.myID,e[Id]=this.myPW,e[Ed]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Td+i.length<=Sd;){const o=this.pendingSegs.shift();i=i+"&"+yg+s+"="+o.seg+"&"+wg+s+"="+o.ts+"&"+kg+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Eg)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Tg=16384,Ng=45e3;let Gs=null;typeof MozWebSocket<"u"?Gs=MozWebSocket:typeof WebSocket<"u"&&(Gs=WebSocket);class jt{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_s(this.connId),this.stats_=Wo(t),this.connURL=jt.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[fd]=qo,typeof location<"u"&&location.hostname&&md.test(location.hostname)&&(o[pd]=_d),t&&(o[hd]=t),i&&(o[gd]=i),s&&(o[no]=s),r&&(o[bd]=r),kd(e,vd,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qn.set("previous_websocket_failure",!0);try{let i;Su(),this.mySock=new Gs(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Gs!==null&&!jt.forceDisallow_}static previouslyFailed(){return qn.isInMemoryStorage||qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){qn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Xi(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=at(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ud(t,Tg);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ng))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jt.responsesRequiredToBeHealthy=2;jt.healthyTimeout=3e4;/**
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
 */class es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[li,jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=jt&&jt.isAvailable();let i=t&&!jt.previouslyFailed();if(e.webSocketOnly&&(t||At("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[jt];else{const s=this.transports_=[];for(const r of es.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}es.globalTransportInitialized_=!1;/**
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
 */const Og=6e4,Rg=5e3,Ag=10*1024,Dg=100*1024,Br="t",na="d",Pg="s",ia="r",Mg="e",sa="o",ra="a",oa="n",la="p",Lg="h";class Fg{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_s("c:"+this.id+":"),this.transportManager_=new es(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Dg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ag?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Br in e){const t=e[Br];t===ra?this.upgradeIfSecondaryHealthy_():t===ia?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===sa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Fi("t",e),i=Fi("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:la,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ra,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:oa,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Fi("t",e),i=Fi("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Fi(Br,e);if(na in e){const i=e[na];if(t===Lg){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===oa){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Pg?this.onConnectionShutdown_(i):t===ia?this.onReset_(i):t===Mg?to("Server Error: "+i):t===sa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):to("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),qo!==i&&At("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Og))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Rg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:la,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Nd{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Od{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){$(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Ks extends Od{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ko()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ks}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const aa=32,ca=768;class Qe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function He(){return new Qe("")}function Ne(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Pn(n){return n.pieces_.length-n.pieceNum_}function Je(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Qe(n.pieces_,e)}function Rd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Bg(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ad(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Dd(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Qe(e,0)}function ct(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof Qe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new Qe(t,0)}function Te(n){return n.pieceNum_>=n.pieces_.length}function Tt(n,e){const t=Ne(n),i=Ne(e);if(t===null)return e;if(t===i)return Tt(Je(n),Je(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Pd(n,e){if(Pn(n)!==Pn(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Vt(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Pn(n)>Pn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Ug{constructor(e,t){this.errorPrefix_=t,this.parts_=Ad(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ar(this.parts_[i]);Md(this)}}function qg(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ar(e),Md(n)}function Wg(n){const e=n.parts_.pop();n.byteLength_-=ar(e),n.parts_.length>0&&(n.byteLength_-=1)}function Md(n){if(n.byteLength_>ca)throw new Error(n.errorPrefix_+"has a key path longer than "+ca+" bytes ("+n.byteLength_+").");if(n.parts_.length>aa)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+aa+") or object contains a cycle "+Un(n))}function Un(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class zo extends Od{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new zo}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Bi=1e3,Hg=60*5*1e3,ua=30*1e3,zg=1.3,jg=3e4,Vg="server_kill",da=3;class un extends Nd{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=un.nextPersistentConnectionId_++,this.log_=_s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bi,this.maxReconnectDelay_=Hg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Su())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ks.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(at(r)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new lr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;un.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&rn(e,"w")){const i=bi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();At(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Mh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ua)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ph(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):to("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jg&&(this.reconnectDelay_=Bi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+un.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?yt("getToken() completed but was canceled"):(yt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Fg(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{At(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Vg)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&At(d),l())}}}interrupt(e){yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Kr(this.interruptReasons_)&&(this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Uo(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new Qe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){yt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=da&&(this.reconnectDelay_=ua,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){yt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=da&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ld.replace(/\./g,"-")]=1,ko()?e["framework.cordova"]=1:Eu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ks.getInstance().currentlyOnline();return Kr(this.interruptReasons_)&&e}}un.nextPersistentConnectionId_=0;un.nextConnectionId_=0;/**
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
 */class Se{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Se(e,t)}}/**
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
 */class hr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Se(Jn,e),s=new Se(Jn,t);return this.compare(i,s)!==0}minPost(){return Se.MIN}}/**
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
 */let Cs;class Ld extends hr{static get __EMPTY_NODE(){return Cs}static set __EMPTY_NODE(e){Cs=e}compare(e,t){return Ri(e.name,t.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Se.MIN}maxPost(){return new Se(Dn,Cs)}makePost(e,t){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new Se(e,Cs)}toString(){return".key"}}const Nn=new Ld;/**
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
 */class Is{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _t{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??_t.RED,this.left=s??Rt.EMPTY_NODE,this.right=r??Rt.EMPTY_NODE}copy(e,t,i,s,r){return new _t(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Rt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_t.RED=!0;_t.BLACK=!1;class Gg{copy(e,t,i,s,r){return this}insert(e,t,i){return new _t(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,t=Rt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,_t.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_t.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Is(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Is(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new Gg;/**
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
 */function Kg(n,e){return Ri(n.name,e.name)}function jo(n,e){return Ri(n,e)}/**
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
 */let io;function Yg(n){io=n}const Fd=function(n){return typeof n=="number"?"number:"+dd(n):"string:"+n},Bd=function(n){if(n.isLeafNode()){const e=n.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rn(e,".sv"),"Priority must be a string or number.")}else $(n===io||n.isEmpty(),"priority of unexpected type.");$(n===io||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let fa;class pt{constructor(e,t=pt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bd(this.priorityNode_)}static set __childrenNodeConstructor(e){fa=e}static get __childrenNodeConstructor(){return fa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Te(e)?this:Ne(e)===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:pt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Ne(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:($(i!==".priority"||Pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,pt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Je(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fd(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=dd(this.value_):e+=this.value_,this.lazyHash_=cd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pt.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=pt.VALUE_TYPE_ORDER.indexOf(t),r=pt.VALUE_TYPE_ORDER.indexOf(i);return $(s>=0,"Unknown leaf type: "+t),$(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}pt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ud,qd;function Qg(n){Ud=n}function Jg(n){qd=n}class Xg extends hr{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Ri(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Se.MIN}maxPost(){return new Se(Dn,new pt("[PRIORITY-POST]",qd))}makePost(e,t){const i=Ud(e);return new Se(t,new pt("[PRIORITY-POST]",i))}toString(){return".priority"}}const it=new Xg;/**
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
 */const xg=Math.log(2);class Zg{constructor(e){const t=r=>parseInt(Math.log(r)/xg,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ys=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=n[l],f=t?t(d):d,new _t(f,d.node,_t.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=s(l,p),b=s(p+1,c);return d=n[p],f=t?t(d):d,new _t(f,d.node,_t.BLACK,_,b)}},r=function(l){let c=null,u=null,d=n.length;const f=function(_,b){const v=d-_,y=d;d-=_;const w=s(v+1,y),k=n[v],S=t?t(k):k;p(new _t(S,k.node,b,null,w))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const b=l.nextBitIsOne(),v=Math.pow(2,l.count-(_+1));b?f(v,_t.BLACK):(f(v,_t.BLACK),f(v,_t.RED))}return u},o=new Zg(n.length),a=r(o);return new Rt(i||e,a)};/**
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
 */let Ur;const si={};class an{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return $(si&&it,"ChildrenNode.ts has not been loaded"),Ur=Ur||new an({".priority":si},{".priority":it}),Ur}get(e){const t=bi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rt?t:null}hasIndex(e){return rn(this.indexSet_,e.toString())}addIndex(e,t){$(e!==Nn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(Se.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ys(i,e.getCompare()):a=si;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new an(u,c)}addToIndexes(e,t){const i=Bs(this.indexes_,(s,r)=>{const o=bi(this.indexSet_,r);if($(o,"Missing index implementation for "+r),s===si)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(Se.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ys(a,o.getCompare())}else return si;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new Se(e.name,a))),l.insert(e,e.node)}});return new an(i,this.indexSet_)}removeFromIndexes(e,t){const i=Bs(this.indexes_,s=>{if(s===si)return s;{const r=t.get(e.name);return r?s.remove(new Se(e.name,r)):s}});return new an(i,this.indexSet_)}}/**
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
 */let Ui;class _e{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Bd(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ui||(Ui=new _e(new Rt(jo),null,an.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ui}updatePriority(e){return this.children_.isEmpty()?this:new _e(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ui:t}}getChild(e){const t=Ne(e);return t===null?this:this.getImmediateChild(t).getChild(Je(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if($(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Se(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ui:this.priorityNode_;return new _e(s,o,r)}}updateChild(e,t){const i=Ne(e);if(i===null)return t;{$(Ne(e)!==".priority"||Pn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Je(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(it,(o,a)=>{t[o]=a.val(e),i++,r&&_e.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fd(this.getPriority().val())+":"),this.forEachChild(it,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":cd(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Se(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Se(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Se(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Se.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Se.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ms?-1:0}withIndex(e){if(e===Nn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _e(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Nn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(it),s=t.getIterator(it);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nn?null:this.indexMap_.get(e.toString())}}_e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $g extends _e{constructor(){super(new Rt(jo),_e.EMPTY_NODE,an.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _e.EMPTY_NODE}isEmpty(){return!1}}const ms=new $g;Object.defineProperties(Se,{MIN:{value:new Se(Jn,_e.EMPTY_NODE)},MAX:{value:new Se(Dn,ms)}});Ld.__EMPTY_NODE=_e.EMPTY_NODE;pt.__childrenNodeConstructor=_e;Yg(ms);Jg(ms);/**
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
 */const eb=!0;function gt(n,e=null){if(n===null)return _e.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new pt(t,gt(e))}if(!(n instanceof Array)&&eb){const t=[];let i=!1;if(Dt(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=gt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new Se(o,l)))}}),t.length===0)return _e.EMPTY_NODE;const r=Ys(t,Kg,o=>o.name,jo);if(i){const o=Ys(t,it.getCompare());return new _e(r,gt(e),new an({".priority":o},{".priority":it}))}else return new _e(r,gt(e),an.Default)}else{let t=_e.EMPTY_NODE;return Dt(n,(i,s)=>{if(rn(n,i)&&i.substring(0,1)!=="."){const r=gt(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(gt(e))}}Qg(gt);/**
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
 */class Wd extends hr{constructor(e){super(),this.indexPath_=e,$(!Te(e)&&Ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Ri(e.name,t.name):r}makePost(e,t){const i=gt(e),s=_e.EMPTY_NODE.updateChild(this.indexPath_,i);return new Se(t,s)}maxPost(){const e=_e.EMPTY_NODE.updateChild(this.indexPath_,ms);return new Se(Dn,e)}toString(){return Ad(this.indexPath_,0).join("/")}}/**
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
 */class tb extends hr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Ri(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Se.MIN}maxPost(){return Se.MAX}makePost(e,t){const i=gt(e);return new Se(t,i)}toString(){return".value"}}const Hd=new tb;/**
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
 */function zd(n){return{type:"value",snapshotNode:n}}function wi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ts(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ns(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function nb(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Vo{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(ts(t,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(wi(t,i)):o.trackChildChange(ns(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(it,(s,r)=>{t.hasChild(s)||i.trackChildChange(ts(s,r))}),t.isLeafNode()||t.forEachChild(it,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(ns(s,r,o))}else i.trackChildChange(wi(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_e.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class is{constructor(e){this.indexedFilter_=new Vo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=is.getStartPost_(e),this.endPost_=is.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new Se(t,i))||(i=_e.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=_e.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(_e.EMPTY_NODE);const r=this;return t.forEachChild(it,(o,a)=>{r.matches(new Se(o,a))||(s=s.updateImmediateChild(o,_e.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class ib{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new Se(t,i))||(i=_e.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=_e.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=_e.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(_e.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,_e.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const l=new Se(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(ns(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(ts(t,d));const b=a.updateImmediateChild(t,_e.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(wi(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ts(c.name,c.node)),r.trackChildChange(wi(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,_e.EMPTY_NODE)):e}}/**
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
 */class Go{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=it}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jn}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===it}copy(){const e=new Go;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sb(n){return n.loadsAllData()?new Vo(n.getIndex()):n.hasLimit()?new ib(n):new is(n)}function rb(n,e){const t=n.copy();return t.index_=e,t}function ha(n){const e={};if(n.isDefault())return e;let t;if(n.index_===it?t="$priority":n.index_===Hd?t="$value":n.index_===Nn?t="$key":($(n.index_ instanceof Wd,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=at(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=at(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+at(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=at(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+at(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function pa(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==it&&(e.i=n.index_.toString()),e}/**
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
 */class Qs extends Nd{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=_s("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qs.getListenId_(e,i),a={};this.listens_[o]=a;const l=ha(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),bi(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){const i=Qs.getListenId_(e,t);delete this.listens_[i]}get(e){const t=ha(e._queryParams),i=e._path.toString(),s=new lr;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ti(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xi(a.responseText)}catch{At("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&At("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class ob{constructor(){this.rootNode_=_e.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Js(){return{value:null,children:new Map}}function jd(n,e,t){if(Te(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=Ne(e);n.children.has(i)||n.children.set(i,Js());const s=n.children.get(i);e=Je(e),jd(s,e,t)}}function so(n,e,t){n.value!==null?t(e,n.value):lb(n,(i,s)=>{const r=new Qe(e.toString()+"/"+i);so(s,r,t)})}function lb(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class ab{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Dt(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const _a=10*1e3,cb=30*1e3,ub=5*60*1e3;class db{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ab(e);const i=_a+(cb-_a)*Math.random();zi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Dt(e,(s,r)=>{r>0&&rn(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*ub))}}/**
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
 */var Gt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gt||(Gt={}));function Vd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ko(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yo(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Xs{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Gt.ACK_USER_WRITE,this.source=Vd()}operationForChild(e){if(Te(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Qe(e));return new Xs(He(),t,this.revert)}}else return $(Ne(this.path)===e,"operationForChild called for unrelated child."),new Xs(Je(this.path),this.affectedTree,this.revert)}}/**
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
 */class ss{constructor(e,t){this.source=e,this.path=t,this.type=Gt.LISTEN_COMPLETE}operationForChild(e){return Te(this.path)?new ss(this.source,He()):new ss(this.source,Je(this.path))}}/**
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
 */class Xn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Gt.OVERWRITE}operationForChild(e){return Te(this.path)?new Xn(this.source,He(),this.snap.getImmediateChild(e)):new Xn(this.source,Je(this.path),this.snap)}}/**
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
 */class rs{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Gt.MERGE}operationForChild(e){if(Te(this.path)){const t=this.children.subtree(new Qe(e));return t.isEmpty()?null:t.value?new Xn(this.source,He(),t.value):new rs(this.source,He(),t)}else return $(Ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rs(this.source,Je(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Mn{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Te(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ne(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class fb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hb(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(nb(o.childName,o.snapshotNode))}),qi(n,s,"child_removed",e,i,t),qi(n,s,"child_added",e,i,t),qi(n,s,"child_moved",r,i,t),qi(n,s,"child_changed",e,i,t),qi(n,s,"value",e,i,t),s}function qi(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>_b(n,a,l)),o.forEach(a=>{const l=pb(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function pb(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function _b(n,e,t){if(e.childName==null||t.childName==null)throw Si("Should only compare child_ events.");const i=new Se(e.childName,e.snapshotNode),s=new Se(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function pr(n,e){return{eventCache:n,serverCache:e}}function ji(n,e,t,i){return pr(new Mn(e,t,i),n.serverCache)}function Gd(n,e,t,i){return pr(n.eventCache,new Mn(e,t,i))}function xs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function xn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let qr;const mb=()=>(qr||(qr=new Rt(ng)),qr);class xe{constructor(e,t=mb()){this.value=e,this.children=t}static fromObject(e){let t=new xe(null);return Dt(e,(i,s)=>{t=t.set(new Qe(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:He(),value:this.value};if(Te(e))return null;{const i=Ne(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Je(e),t);return r!=null?{path:ct(new Qe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Te(e))return this;{const t=Ne(e),i=this.children.get(t);return i!==null?i.subtree(Je(e)):new xe(null)}}set(e,t){if(Te(e))return new xe(t,this.children);{const i=Ne(e),r=(this.children.get(i)||new xe(null)).set(Je(e),t),o=this.children.insert(i,r);return new xe(this.value,o)}}remove(e){if(Te(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const t=Ne(e),i=this.children.get(t);if(i){const s=i.remove(Je(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new xe(null):new xe(this.value,r)}else return this}}get(e){if(Te(e))return this.value;{const t=Ne(e),i=this.children.get(t);return i?i.get(Je(e)):null}}setTree(e,t){if(Te(e))return t;{const i=Ne(e),r=(this.children.get(i)||new xe(null)).setTree(Je(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new xe(this.value,o)}}fold(e){return this.fold_(He(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ct(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,He(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(Te(e))return null;{const r=Ne(e),o=this.children.get(r);return o?o.findOnPath_(Je(e),ct(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,He(),t)}foreachOnPath_(e,t,i){if(Te(e))return this;{this.value&&i(t,this.value);const s=Ne(e),r=this.children.get(s);return r?r.foreachOnPath_(Je(e),ct(t,s),i):new xe(null)}}foreach(e){this.foreach_(He(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ct(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Kt{constructor(e){this.writeTree_=e}static empty(){return new Kt(new xe(null))}}function Vi(n,e,t){if(Te(e))return new Kt(new xe(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Tt(s,e);return r=r.updateChild(o,t),new Kt(n.writeTree_.set(s,r))}else{const s=new xe(t),r=n.writeTree_.setTree(e,s);return new Kt(r)}}}function ma(n,e,t){let i=n;return Dt(t,(s,r)=>{i=Vi(i,ct(e,s),r)}),i}function ga(n,e){if(Te(e))return Kt.empty();{const t=n.writeTree_.setTree(e,new xe(null));return new Kt(t)}}function ro(n,e){return ei(n,e)!=null}function ei(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Tt(t.path,e)):null}function ba(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(it,(i,s)=>{e.push(new Se(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Se(i,s.value))}),e}function On(n,e){if(Te(e))return n;{const t=ei(n,e);return t!=null?new Kt(new xe(t)):new Kt(n.writeTree_.subtree(e))}}function oo(n){return n.writeTree_.isEmpty()}function ki(n,e){return Kd(He(),n.writeTree_,e)}function Kd(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?($(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Kd(ct(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ct(n,".priority"),i)),t}}/**
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
 */function _r(n,e){return Xd(e,n)}function gb(n,e,t,i,s){$(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Vi(n.visibleWrites,e,t)),n.lastWriteId=i}function bb(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function vb(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);$(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&yb(a,i.path)?s=!1:Vt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return wb(n),!0;if(i.snap)n.visibleWrites=ga(n.visibleWrites,i.path);else{const a=i.children;Dt(a,l=>{n.visibleWrites=ga(n.visibleWrites,ct(i.path,l))})}return!0}else return!1}function yb(n,e){if(n.snap)return Vt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Vt(ct(n.path,t),e))return!0;return!1}function wb(n){n.visibleWrites=Yd(n.allWrites,kb,He()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function kb(n){return n.visible}function Yd(n,e,t){let i=Kt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Vt(t,o)?(a=Tt(t,o),i=Vi(i,a,r.snap)):Vt(o,t)&&(a=Tt(o,t),i=Vi(i,He(),r.snap.getChild(a)));else if(r.children){if(Vt(t,o))a=Tt(t,o),i=ma(i,a,r.children);else if(Vt(o,t))if(a=Tt(o,t),Te(a))i=ma(i,He(),r.children);else{const l=bi(r.children,Ne(a));if(l){const c=l.getChild(Je(a));i=Vi(i,He(),c)}}}else throw Si("WriteRecord should have .snap or .children")}}return i}function Qd(n,e,t,i,s){if(!i&&!s){const r=ei(n.visibleWrites,e);if(r!=null)return r;{const o=On(n.visibleWrites,e);if(oo(o))return t;if(t==null&&!ro(o,He()))return null;{const a=t||_e.EMPTY_NODE;return ki(o,a)}}}else{const r=On(n.visibleWrites,e);if(!s&&oo(r))return t;if(!s&&t==null&&!ro(r,He()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Vt(c.path,e)||Vt(e,c.path))},a=Yd(n.allWrites,o,e),l=t||_e.EMPTY_NODE;return ki(a,l)}}}function Cb(n,e,t){let i=_e.EMPTY_NODE;const s=ei(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(it,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=On(n.visibleWrites,e);return t.forEachChild(it,(o,a)=>{const l=ki(On(r,new Qe(o)),a);i=i.updateImmediateChild(o,l)}),ba(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=On(n.visibleWrites,e);return ba(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Ib(n,e,t,i,s){$(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ct(e,t);if(ro(n.visibleWrites,r))return null;{const o=On(n.visibleWrites,r);return oo(o)?s.getChild(t):ki(o,s.getChild(t))}}function Eb(n,e,t,i){const s=ct(e,t),r=ei(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=On(n.visibleWrites,s);return ki(o,i.getNode().getImmediateChild(t))}else return null}function Sb(n,e){return ei(n.visibleWrites,e)}function Tb(n,e,t,i,s,r,o){let a;const l=On(n.visibleWrites,e),c=ei(l,He());if(c!=null)a=c;else if(t!=null)a=ki(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=f.getNext();for(;p&&u.length<s;)d(p,i)!==0&&u.push(p),p=f.getNext();return u}else return[]}function Nb(){return{visibleWrites:Kt.empty(),allWrites:[],lastWriteId:-1}}function Zs(n,e,t,i){return Qd(n.writeTree,n.treePath,e,t,i)}function Qo(n,e){return Cb(n.writeTree,n.treePath,e)}function va(n,e,t,i){return Ib(n.writeTree,n.treePath,e,t,i)}function $s(n,e){return Sb(n.writeTree,ct(n.treePath,e))}function Ob(n,e,t,i,s,r){return Tb(n.writeTree,n.treePath,e,t,i,s,r)}function Jo(n,e,t){return Eb(n.writeTree,n.treePath,e,t)}function Jd(n,e){return Xd(ct(n.treePath,e),n.writeTree)}function Xd(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Rb{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;$(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),$(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,ns(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,ts(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,wi(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,ns(i,e.snapshotNode,s.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ab{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const xd=new Ab;class Xo{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Mn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jo(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xn(this.viewCache_),r=Ob(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Db(n){return{filter:n}}function Pb(n,e){$(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Mb(n,e,t,i,s){const r=new Rb;let o,a;if(t.type===Gt.OVERWRITE){const c=t;c.source.fromUser?o=lo(n,e,c.path,c.snap,i,s,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Te(c.path),o=er(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Gt.MERGE){const c=t;c.source.fromUser?o=Fb(n,e,c.path,c.children,i,s,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ao(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Gt.ACK_USER_WRITE){const c=t;c.revert?o=qb(n,e,c.path,i,s,r):o=Bb(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Gt.LISTEN_COMPLETE)o=Ub(n,e,t.path,i,r);else throw Si("Unknown operation type: "+t.type);const l=r.getChanges();return Lb(e,o,l),{viewCache:o,changes:l}}function Lb(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=xs(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(zd(xs(e)))}}function Zd(n,e,t,i,s,r){const o=e.eventCache;if($s(i,t)!=null)return e;{let a,l;if(Te(t))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xn(e),u=c instanceof _e?c:_e.EMPTY_NODE,d=Qo(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Zs(i,xn(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Ne(t);if(c===".priority"){$(Pn(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=va(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=Je(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=va(i,t,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Jo(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return ji(e,a,o.isFullyInitialized()||Te(t),n.filter.filtersNodes())}}function er(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(Te(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=Ne(t);if(!l.isCompleteForPath(t)&&Pn(t)>1)return e;const _=Je(t),v=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,_,xd,null)}const d=Gd(e,c,l.isFullyInitialized()||Te(t),u.filtersNodes()),f=new Xo(s,d,r);return Zd(n,d,t,s,f,a)}function lo(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Xo(s,e,r);if(Te(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ji(e,c,!0,n.filter.filtersNodes());else{const d=Ne(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=ji(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Je(t),p=a.getNode().getImmediateChild(d);let _;if(Te(f))_=i;else{const b=u.getCompleteChild(d);b!=null?Rd(f)===".priority"&&b.getChild(Dd(f)).isEmpty()?_=b:_=b.updateChild(f,i):_=_e.EMPTY_NODE}if(p.equals(_))l=e;else{const b=n.filter.updateChild(a.getNode(),d,_,f,u,o);l=ji(e,b,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ya(n,e){return n.eventCache.isCompleteForChild(e)}function Fb(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=ct(t,l);ya(e,Ne(u))&&(a=lo(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=ct(t,l);ya(e,Ne(u))||(a=lo(n,a,u,c,s,r,o))}),a}function wa(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ao(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Te(t)?c=i:c=new xe(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),_=wa(n,p,f);l=er(n,l,new Qe(d),_,s,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const _=e.serverCache.getNode().getImmediateChild(d),b=wa(n,_,f);l=er(n,l,new Qe(d),b,s,r,o,a)}}),l}function Bb(n,e,t,i,s,r,o){if($s(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Te(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return er(n,e,t,l.getNode().getChild(t),s,r,a,o);if(Te(t)){let c=new xe(null);return l.getNode().forEachChild(Nn,(u,d)=>{c=c.set(new Qe(u),d)}),ao(n,e,t,c,s,r,a,o)}else return e}else{let c=new xe(null);return i.foreach((u,d)=>{const f=ct(t,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ao(n,e,t,c,s,r,a,o)}}function Ub(n,e,t,i,s){const r=e.serverCache,o=Gd(e,r.getNode(),r.isFullyInitialized()||Te(t),r.isFiltered());return Zd(n,o,t,i,xd,s)}function qb(n,e,t,i,s,r){let o;if($s(i,t)!=null)return e;{const a=new Xo(i,e,s),l=e.eventCache.getNode();let c;if(Te(t)||Ne(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Zs(i,xn(e));else{const d=e.serverCache.getNode();$(d instanceof _e,"serverChildren would be complete if leaf node"),u=Qo(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=Ne(t);let d=Jo(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,Je(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,_e.EMPTY_NODE,Je(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zs(i,xn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||$s(i,He())!=null,ji(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Wb{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Vo(i.getIndex()),r=sb(i);this.processor_=Db(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(_e.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(_e.EMPTY_NODE,a.getNode(),null),u=new Mn(l,o.isFullyInitialized(),s.filtersNodes()),d=new Mn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=pr(d,u),this.eventGenerator_=new fb(this.query_)}get query(){return this.query_}}function Hb(n){return n.viewCache_.serverCache.getNode()}function zb(n){return xs(n.viewCache_)}function jb(n,e){const t=xn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Te(e)&&!t.getImmediateChild(Ne(e)).isEmpty())?t.getChild(e):null}function ka(n){return n.eventRegistrations_.length===0}function Vb(n,e){n.eventRegistrations_.push(e)}function Ca(n,e,t){const i=[];if(t){$(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Ia(n,e,t,i){e.type===Gt.MERGE&&e.source.queryId!==null&&($(xn(n.viewCache_),"We should always have a full cache before handling merges"),$(xs(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Mb(n.processor_,s,e,t,i);return Pb(n.processor_,r.viewCache),$(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,$d(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Gb(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(it,(r,o)=>{i.push(wi(r,o))}),t.isFullyInitialized()&&i.push(zd(t.getNode())),$d(n,i,t.getNode(),e)}function $d(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return hb(n.eventGenerator_,e,t,s)}/**
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
 */let tr;class ef{constructor(){this.views=new Map}}function Kb(n){$(!tr,"__referenceConstructor has already been defined"),tr=n}function Yb(){return $(tr,"Reference.ts has not been loaded"),tr}function Qb(n){return n.views.size===0}function xo(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return $(r!=null,"SyncTree gave us an op for an invalid query."),Ia(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Ia(o,e,t,i));return r}}function tf(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Zs(t,s?i:null),l=!1;a?l=!0:i instanceof _e?(a=Qo(t,i),l=!1):(a=_e.EMPTY_NODE,l=!1);const c=pr(new Mn(a,l,!1),new Mn(i,s,!1));return new Wb(e,c)}return o}function Jb(n,e,t,i,s,r){const o=tf(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Vb(o,t),Gb(o,t)}function Xb(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Ln(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Ca(c,t,i)),ka(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Ca(l,t,i)),ka(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ln(n)&&r.push(new(Yb())(e._repo,e._path)),{removed:r,events:o}}function nf(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Rn(n,e){let t=null;for(const i of n.views.values())t=t||jb(i,e);return t}function sf(n,e){if(e._queryParams.loadsAllData())return mr(n);{const i=e._queryIdentifier;return n.views.get(i)}}function rf(n,e){return sf(n,e)!=null}function Ln(n){return mr(n)!=null}function mr(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let nr;function xb(n){$(!nr,"__referenceConstructor has already been defined"),nr=n}function Zb(){return $(nr,"Reference.ts has not been loaded"),nr}let $b=1;class Ea{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=Nb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function of(n,e,t,i,s){return gb(n.pendingWriteTree_,e,t,i,s),s?bs(n,new Xn(Vd(),e,t)):[]}function Wn(n,e,t=!1){const i=bb(n.pendingWriteTree_,e);if(vb(n.pendingWriteTree_,e)){let r=new xe(null);return i.snap!=null?r=r.set(He(),!0):Dt(i.children,o=>{r=r.set(new Qe(o),!0)}),bs(n,new Xs(i.path,r,t))}else return[]}function gs(n,e,t){return bs(n,new Xn(Ko(),e,t))}function ev(n,e,t){const i=xe.fromObject(t);return bs(n,new rs(Ko(),e,i))}function tv(n,e){return bs(n,new ss(Ko(),e))}function nv(n,e,t){const i=$o(n,t);if(i){const s=el(i),r=s.path,o=s.queryId,a=Tt(r,e),l=new ss(Yo(o),a);return tl(n,r,l)}else return[]}function lf(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||rf(o,e))){const l=Xb(o,e,t,i);Qb(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(f,p)=>Ln(p));if(u&&!d){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=ov(f);for(let _=0;_<p.length;++_){const b=p[_],v=b.query,y=df(n,b);n.listenProvider_.startListening(Gi(v),os(n,v),y.hashFn,y.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Gi(e),null):c.forEach(f=>{const p=n.queryToTagMap.get(gr(f));n.listenProvider_.stopListening(Gi(f),p)}))}lv(n,c)}return a}function af(n,e,t,i){const s=$o(n,i);if(s!=null){const r=el(s),o=r.path,a=r.queryId,l=Tt(o,e),c=new Xn(Yo(a),l,t);return tl(n,o,c)}else return[]}function iv(n,e,t,i){const s=$o(n,i);if(s){const r=el(s),o=r.path,a=r.queryId,l=Tt(o,e),c=xe.fromObject(t),u=new rs(Yo(a),l,c);return tl(n,o,u)}else return[]}function sv(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,p)=>{const _=Tt(f,s);r=r||Rn(p,_),o=o||Ln(p)});let a=n.syncPointTree_.get(s);a?(o=o||Ln(a),r=r||Rn(a,He())):(a=new ef,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=_e.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,_)=>{const b=Rn(_,He());b&&(r=r.updateImmediateChild(p,b))}));const c=rf(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=gr(e);$(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=av();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const u=_r(n.pendingWriteTree_,s);let d=Jb(a,e,t,u,r,l);if(!c&&!o&&!i){const f=sf(a,e);d=d.concat(cv(n,e,f))}return d}function Zo(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Tt(o,e),c=Rn(a,l);if(c)return c});return Qd(s,e,r,t,!0)}function rv(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=Tt(c,t);i=i||Rn(u,d)});let s=n.syncPointTree_.get(t);s?i=i||Rn(s,He()):(s=new ef,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Mn(i,!0,!1):null,a=_r(n.pendingWriteTree_,e._path),l=tf(s,e,a,r?o.getNode():_e.EMPTY_NODE,r);return zb(l)}function bs(n,e){return cf(e,n.syncPointTree_,null,_r(n.pendingWriteTree_,He()))}function cf(n,e,t,i){if(Te(n.path))return uf(n,e,t,i);{const s=e.get(He());t==null&&s!=null&&(t=Rn(s,He()));let r=[];const o=Ne(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Jd(i,o);r=r.concat(cf(a,l,c,u))}return s&&(r=r.concat(xo(s,n,i,t))),r}}function uf(n,e,t,i){const s=e.get(He());t==null&&s!=null&&(t=Rn(s,He()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Jd(i,o),u=n.operationForChild(o);u&&(r=r.concat(uf(u,a,l,c)))}),s&&(r=r.concat(xo(s,n,i,t))),r}function df(n,e){const t=e.query,i=os(n,t);return{hashFn:()=>(Hb(e)||_e.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?nv(n,t._path,i):tv(n,t._path);{const r=rg(s,t);return lf(n,t,null,r)}}}}function os(n,e){const t=gr(e);return n.queryToTagMap.get(t)}function gr(n){return n._path.toString()+"$"+n._queryIdentifier}function $o(n,e){return n.tagToQueryMap.get(e)}function el(n){const e=n.indexOf("$");return $(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Qe(n.substr(0,e))}}function tl(n,e,t){const i=n.syncPointTree_.get(e);$(i,"Missing sync point for query tag that we're tracking");const s=_r(n.pendingWriteTree_,e);return xo(i,t,s,null)}function ov(n){return n.fold((e,t,i)=>{if(t&&Ln(t))return[mr(t)];{let s=[];return t&&(s=nf(t)),Dt(i,(r,o)=>{s=s.concat(o)}),s}})}function Gi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Zb())(n._repo,n._path):n}function lv(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=gr(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function av(){return $b++}function cv(n,e,t){const i=e._path,s=os(n,e),r=df(n,t),o=n.listenProvider_.startListening(Gi(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)$(!Ln(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!Te(c)&&u&&Ln(u))return[mr(u).query];{let f=[];return u&&(f=f.concat(nf(u).map(p=>p.query))),Dt(d,(p,_)=>{f=f.concat(_)}),f}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Gi(u),os(n,u))}}return o}/**
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
 */class nl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new nl(t)}node(){return this.node_}}class il{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ct(this.path_,e);return new il(this.syncTree_,t)}node(){return Zo(this.syncTree_,this.path_)}}const uv=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Sa=function(n,e,t){if(!n||typeof n!="object")return n;if($(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return dv(n[".sv"],e,t);if(typeof n[".sv"]=="object")return fv(n[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},dv=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:$(!1,"Unexpected server value: "+n)}},fv=function(n,e,t){n.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&$(!1,"Unexpected increment value: "+i);const s=e.node();if($(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},hv=function(n,e,t,i){return sl(e,new il(t,n),i)},ff=function(n,e,t){return sl(n,new nl(e),t)};function sl(n,e,t){const i=n.getPriority().val(),s=Sa(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Sa(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new pt(a,gt(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new pt(s))),o.forEachChild(it,(a,l)=>{const c=sl(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class rl{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ol(n,e){let t=e instanceof Qe?e:new Qe(e),i=n,s=Ne(t);for(;s!==null;){const r=bi(i.node.children,s)||{children:{},childCount:0};i=new rl(s,i,r),t=Je(t),s=Ne(t)}return i}function Di(n){return n.node.value}function hf(n,e){n.node.value=e,co(n)}function pf(n){return n.node.childCount>0}function pv(n){return Di(n)===void 0&&!pf(n)}function br(n,e){Dt(n.node.children,(t,i)=>{e(new rl(t,n,i))})}function _f(n,e,t,i){t&&!i&&e(n),br(n,s=>{_f(s,e,!0,i)}),t&&i&&e(n)}function _v(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function vs(n){return new Qe(n.parent===null?n.name:vs(n.parent)+"/"+n.name)}function co(n){n.parent!==null&&mv(n.parent,n.name,n)}function mv(n,e,t){const i=pv(t),s=rn(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,co(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,co(n))}/**
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
 */const gv=/[\[\].#$\/\u0000-\u001F\u007F]/,bv=/[\[\].#$\u0000-\u001F\u007F]/,Wr=10*1024*1024,mf=function(n){return typeof n=="string"&&n.length!==0&&!gv.test(n)},gf=function(n){return typeof n=="string"&&n.length!==0&&!bv.test(n)},vv=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gf(n)},Ta=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Bo(n)||n&&typeof n=="object"&&rn(n,".sv")},bf=function(n,e,t,i){i&&e===void 0||ll(Co(n,"value"),e,t)},ll=function(n,e,t){const i=t instanceof Qe?new Ug(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Un(i));if(typeof e=="function")throw new Error(n+"contains a function "+Un(i)+" with contents = "+e.toString());if(Bo(e))throw new Error(n+"contains "+e.toString()+" "+Un(i));if(typeof e=="string"&&e.length>Wr/3&&ar(e)>Wr)throw new Error(n+"contains a string greater than "+Wr+" utf8 bytes "+Un(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Dt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!mf(o)))throw new Error(n+" contains an invalid key ("+o+") "+Un(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qg(i,o),ll(n,a,i),Wg(i)}),s&&r)throw new Error(n+' contains ".value" child '+Un(i)+" in addition to actual children.")}},vf=function(n,e,t,i){if(!(i&&t===void 0)&&!gf(t))throw new Error(Co(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yv=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vf(n,e,t,i)},al=function(n,e){if(Ne(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},wv=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!vv(t))throw new Error(Co(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class kv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yf(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Pd(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function sn(n,e,t){yf(n,t),Cv(n,i=>Vt(i,e)||Vt(e,i))}function Cv(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Iv(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Iv(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Vn&&yt("event: "+t.toString()),Ai(i)}}}/**
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
 */const Ev="repo_interrupt",Sv=25;class Tv{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Js(),this.transactionQueueTree_=new rl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Nv(n,e,t){if(n.stats_=Wo(n.repoInfo_),n.forceRestClient_||cg())n.server_=new Qs(n.repoInfo_,(i,s,r,o)=>{Na(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Oa(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new un(n.repoInfo_,e,(i,s,r,o)=>{Na(n,i,s,r,o)},i=>{Oa(n,i)},i=>{Ov(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=pg(n.repoInfo_,()=>new db(n.stats_,n.server_)),n.infoData_=new ob,n.infoSyncTree_=new Ea({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=gs(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ul(n,"connected",!1),n.serverSyncTree_=new Ea({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);sn(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function wf(n){const t=n.infoData_.getNode(new Qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function cl(n){return uv({timestamp:wf(n)})}function Na(n,e,t,i,s){n.dataUpdateCount++;const r=new Qe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Bs(t,c=>gt(c));o=iv(n.serverSyncTree_,r,l,s)}else{const l=gt(t);o=af(n.serverSyncTree_,r,l,s)}else if(i){const l=Bs(t,c=>gt(c));o=ev(n.serverSyncTree_,r,l)}else{const l=gt(t);o=gs(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=yr(n,r)),sn(n.eventQueue_,a,o)}function Oa(n,e){ul(n,"connected",e),e===!1&&Dv(n)}function Ov(n,e){Dt(e,(t,i)=>{ul(n,t,i)})}function ul(n,e,t){const i=new Qe("/.info/"+e),s=gt(t);n.infoData_.updateSnapshot(i,s);const r=gs(n.infoSyncTree_,i,s);sn(n.eventQueue_,i,r)}function kf(n){return n.nextWriteId_++}function Rv(n,e,t){const i=rv(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=gt(s).withIndex(e._queryParams.getIndex());sv(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=gs(n.serverSyncTree_,e._path,r);else{const a=os(n.serverSyncTree_,e);o=af(n.serverSyncTree_,e._path,r,a)}return sn(n.eventQueue_,e._path,o),lf(n.serverSyncTree_,e,t,null,!0),r},s=>(vr(n,"get for query "+at(e)+" failed: "+s),Promise.reject(new Error(s))))}function Av(n,e,t,i,s){vr(n,"set",{path:e.toString(),value:t,priority:i});const r=cl(n),o=gt(t,i),a=Zo(n.serverSyncTree_,e),l=ff(o,a,r),c=kf(n),u=of(n.serverSyncTree_,e,l,c,!0);yf(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const _=f==="ok";_||At("set at "+e+" failed: "+f);const b=Wn(n.serverSyncTree_,c,!_);sn(n.eventQueue_,e,b),Mv(n,s,f,p)});const d=Tf(n,e);yr(n,d),sn(n.eventQueue_,d,[])}function Dv(n){vr(n,"onDisconnectEvents");const e=cl(n),t=Js();so(n.onDisconnect_,He(),(s,r)=>{const o=hv(s,r,n.serverSyncTree_,e);jd(t,s,o)});let i=[];so(t,He(),(s,r)=>{i=i.concat(gs(n.serverSyncTree_,s,r));const o=Tf(n,s);yr(n,o)}),n.onDisconnect_=Js(),sn(n.eventQueue_,He(),i)}function Pv(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ev)}function vr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),yt(t,...e)}function Mv(n,e,t,i){e&&Ai(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Cf(n,e,t){return Zo(n.serverSyncTree_,e,t)||_e.EMPTY_NODE}function dl(n,e=n.transactionQueueTree_){if(e||wr(n,e),Di(e)){const t=Ef(n,e);$(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Lv(n,vs(e),t)}else pf(e)&&br(e,t=>{dl(n,t)})}function Lv(n,e,t){const i=t.map(c=>c.currentWriteId),s=Cf(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];$(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Tt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{vr(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(Wn(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&d.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();wr(n,ol(n.transactionQueueTree_,e)),dl(n,n.transactionQueueTree_),sn(n.eventQueue_,e,u);for(let f=0;f<d.length;f++)Ai(d[f])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{At("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}yr(n,e)}},o)}function yr(n,e){const t=If(n,e),i=vs(t),s=Ef(n,t);return Fv(n,s,i),i}function Fv(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Tt(t,l.path);let u=!1,d;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(Wn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Sv)u=!0,d="maxretry",s=s.concat(Wn(n.serverSyncTree_,l.currentWriteId,!0));else{const f=Cf(n,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ll("transaction failed: Data returned ",p,l.path);let _=gt(p);typeof p=="object"&&p!=null&&rn(p,".priority")||(_=_.updatePriority(f.getPriority()));const v=l.currentWriteId,y=cl(n),w=ff(_,f,y);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=w,l.currentWriteId=kf(n),o.splice(o.indexOf(v),1),s=s.concat(of(n.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),s=s.concat(Wn(n.serverSyncTree_,v,!0))}else u=!0,d="nodata",s=s.concat(Wn(n.serverSyncTree_,l.currentWriteId,!0))}sn(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}wr(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ai(i[a]);dl(n,n.transactionQueueTree_)}function If(n,e){let t,i=n.transactionQueueTree_;for(t=Ne(e);t!==null&&Di(i)===void 0;)i=ol(i,t),e=Je(e),t=Ne(e);return i}function Ef(n,e){const t=[];return Sf(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Sf(n,e,t){const i=Di(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);br(e,s=>{Sf(n,s,t)})}function wr(n,e){const t=Di(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,hf(e,t.length>0?t:void 0)}br(e,i=>{wr(n,i)})}function Tf(n,e){const t=vs(If(n,e)),i=ol(n.transactionQueueTree_,e);return _v(i,s=>{Hr(n,s)}),Hr(n,i),_f(i,s=>{Hr(n,s)}),t}function Hr(n,e){const t=Di(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?($(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):($(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Wn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?hf(e,void 0):t.length=r+1,sn(n.eventQueue_,vs(e),s);for(let o=0;o<i.length;o++)Ai(i[o])}}/**
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
 */function Bv(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Uv(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):At(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ra=function(n,e){const t=qv(n),i=t.namespace;t.domain==="firebase.com"&&hn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||eg();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new wd(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new Qe(t.pathString)}},qv=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=Bv(n.substring(u,d)));const f=Uv(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const Aa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Wv=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Aa.charAt(t%64),t=Math.floor(t/64);$(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Aa.charAt(e[s]);return $(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Hv{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+at(this.snapshot.exportVal())}}class zv{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class jv{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class kr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return Te(this._path)?null:Rd(this._path)}get ref(){return new _n(this._repo,this._path)}get _queryIdentifier(){const e=pa(this._queryParams),t=Uo(e);return t==="{}"?"default":t}get _queryObject(){return pa(this._queryParams)}isEqual(e){if(e=Nt(e),!(e instanceof kr))return!1;const t=this._repo===e._repo,i=Pd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Bg(this._path)}}function Vv(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Gv(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Nn){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Jn)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==Dn)throw new Error(i);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===it){if(e!=null&&!Ta(e)||t!=null&&!Ta(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if($(n.getIndex()instanceof Wd||n.getIndex()===Hd,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class _n extends kr{constructor(e,t){super(e,t,new Go,!1)}get parent(){const e=Dd(this._path);return e===null?null:new _n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ls{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Qe(e),i=pn(this.ref,e);return new ls(this._node.getChild(t),i,it)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new ls(s,pn(this.ref,i),it)))}hasChild(e){const t=new Qe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tn(n,e){return n=Nt(n),n._checkNotDeleted("ref"),e!==void 0?pn(n._root,e):n._root}function pn(n,e){return n=Nt(n),Ne(n._path)===null?yv("child","path",e,!1):vf("child","path",e,!1),new _n(n._repo,ct(n._path,e))}function Kv(n,e){n=Nt(n),al("push",n._path),bf("push",e,n._path,!0);const t=wf(n._repo),i=Wv(t),s=pn(n,i),r=pn(n,i);let o;return e!=null?o=Ci(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Da(n){return al("remove",n._path),Ci(n,null)}function Ci(n,e){n=Nt(n),al("set",n._path),bf("set",e,n._path,!1);const t=new lr;return Av(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function fl(n){n=Nt(n);const e=new jv(()=>{}),t=new hl(e);return Rv(n._repo,n,t).then(i=>new ls(i,new _n(n._repo,n._path),n._queryParams.getIndex()))}class hl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Hv("value",this,new ls(e.snapshotNode,new _n(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new zv(this,e,t):null}matches(e){return e instanceof hl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Yv{}class Qv extends Yv{_apply(e){Vv(e,"orderByKey");const t=rb(e._queryParams,Nn);return Gv(t),new kr(e._repo,e._path,t,!0)}}function pl(){return new Qv}function _l(n,...e){let t=Nt(n);for(const i of e)t=i._apply(t);return t}Kb(_n);xb(_n);/**
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
 */const Jv="FIREBASE_DATABASE_EMULATOR_HOST",uo={};let Xv=!1;function xv(n,e,t,i){n.repoInfo_=new wd(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Zv(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ra(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Jv]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ra(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new pi(pi.OWNER):new dg(n.name,n.options,e);wv("Invalid Firebase Database URL",o),Te(o.path)||hn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ey(a,n,u,new ug(n.name,t));return new ty(d,n)}function $v(n,e){const t=uo[e];(!t||t[n.key]!==n)&&hn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Pv(n),delete t[n.key]}function ey(n,e,t,i){let s=uo[e.name];s||(s={},uo[e.name]=s);let r=s[n.toURLString()];return r&&hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Tv(n,Xv,t,i),s[n.toURLString()]=r,r}class ty{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Nv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _n(this._repo,He())),this._rootInternal}_delete(){return this._rootInternal!==null&&($v(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hn("Cannot call "+e+" on a deleted database.")}}function Nf(n=cr(),e){const t=So(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Ih("database");i&&ny(t,...i)}return t}function ny(n,e,t,i={}){n=Nt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&hn("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new pi(pi.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Eh(i.mockUserToken,n.app.options.projectId);r=new pi(o)}xv(s,e,t,r)}/**
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
 */function iy(n){Jm(Ni),vi(new Kn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Zv(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Tn(xl,Zl,n),Tn(xl,Zl,"esm2017")}un.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};un.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};iy();const sy={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"},ry={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};To(sy,"sud");To(ry,"builds");const Of=cr("sud"),oy=cr("builds"),Rf="https://xt8ss.github.io/ff-site-data";fetch(Rf+"/user-ranks.json").then(async n=>await n.json());const Pa=Qm(Of),Cr=Nf(Of),Ii=Nf(oy),ly={logIn:"material-symbols:login-rounded",logOut:"material-symbols:logout-rounded"},Jt={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},Ei=["head","body","legs","feet","neck","back","ring","misc"],Ir={name:"",stats:{armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0},cost:{min:0,max:0},image:"",link:""},Er={name:"",info:{type:"",special:""},moves:[],cost:{min:0,max:0},image:"",link:""},ay={armor:{min:0,avg:0,max:0},gear:{min:0,avg:0,max:0},total:{min:0,avg:0,max:0}},Zn=[...Array(5).keys()].map(n=>++n),cy=["head","body","legs","feet","neck","back","ring","misc","gear","sets","bonuses"],Af={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function Df(n,e){let t=!1;for(let i of[n,e])for(let s in i)if(i[s].name){t=!0;break}Ms.set(t),Bt.set(null),window.history.replaceState(null,null,location.origin+location.pathname)}function ml(n,e){let t=2.8,i=e.split(" ").length,s=n.querySelector("span");if(s.style.removeProperty("font-size"),i>2&&e.length/i>=5){for(;s.offsetHeight>n.offsetHeight*.75;)t-=.05,s.style.fontSize=`${t}rem`;return t<2.8}return null}function uy(n,e){let t=2.8,i=n.querySelector("span");for(i.style.removeProperty("font-size");i.offsetWidth>n.offsetWidth;)t-=.05,i.style.fontSize=`${t}rem`;for(;i.offsetHeight>n.offsetHeight*.75&&e;)t-=.05,i.style.fontSize=`${t}rem`;return t<2.8?t:null}function dy(n){let e=2.35,t=n.querySelector(".tooltip");for(t.style.removeProperty("font-size");t.offsetHeight>n.offsetHeight*1.125;)e-=.02,t.style.fontSize=`${e}rem`}function fy(n){document.activeElement==document.body&&n.key=="Tab"&&(n.preventDefault(),document.querySelector(`.promptCont [id*='${n.shiftKey?"last":"first"}Focusable']`).focus())}function Pf(n,e){let t=n.toLowerCase();for(let i in e)i.toLowerCase().includes(t)&&!e[i].classList.contains("filtered")?e[i].classList.remove("hidden"):e[i].classList.add("hidden")}function ir(n,e){e&&setTimeout(()=>{n.focus(),n.click(),n.select()})}function Ct(n){n.shiftKey&&n.key=="Tab"&&n.preventDefault()}function It(n){n.key=="Tab"&&!n.shiftKey&&n.preventDefault()}function sr(n,e){let t=/[^a-zA-Z0-9~!#$%^&*()\-_+[\]{}\\|;:'",.<>/? ]/g;return n.replace(t,"").replaceAll(`
`,"").replace(/^ /,"").slice(0,e)}function fo(n,e,t){(!n.maxLength||n.maxLength!=t)&&e.length>=t&&(n.maxLength=t)}function Mf(n,e){n={...n},e={...e};for(let t of Ei)n[t]?n[t]=n[t].name:n[t]="";for(let t of Zn)e[t]?e[t]=e[t].name:e[t]="";return{eq:n,gear:e}}function gl(){window.history.replaceState(null,null,location.origin+location.pathname+"?ls=true")}function cn(n){n.target.closest("button").blur()}function hy(n,e){Gr.update(t=>[...t,{icon:ly[n],text:e}]),setTimeout(()=>Gr.update(t=>t.slice(1)),3e3)}function Ki(n){return n!=null&&Object.keys(n).length}async function py(){return(await fl(_l(tn(Cr,`${jf(_i).toLowerCase()}/siteData/calculator`),pl()))).val()}function _y(n){let e,t,i,s,r,o,a,l,c,u,d,f;return{c(){e=g("li"),t=g("button"),i=g("img"),r=C(),o=g("span"),o.textContent=`${n[5]}`,a=C(),l=g("iconify-icon"),c=C(),u=g("iconify-icon"),et(i.src,s=n[0].image)||m(i,"src",s),m(i,"alt",""),Oe(l,"icon","maki:cross"),Oe(l,"id","cross"),Oe(u,"icon","eva:info-outline"),Oe(u,"id","info"),ae(e,"selectedItem",n[2])},m(p,_){D(p,e,_),h(e,t),h(t,i),h(t,r),h(t,o),h(t,a),h(t,l),h(t,c),h(t,u),n[20](e),d||(f=[au(n[6].call(null,o)),A(t,"touchstart",n[9],{passive:!0}),A(t,"touchend",n[10],{passive:!0}),A(t,"mousedown",n[9]),A(t,"mouseup",n[10]),A(t,"click",n[15]),A(t,"mouseenter",n[16]),A(t,"focusin",n[17]),A(t,"mouseleave",n[18]),A(t,"focusout",n[19]),A(e,"contextmenu",my)],d=!0)},p(p,[_]){_&1&&!et(i.src,s=p[0].image)&&m(i,"src",s),_&4&&ae(e,"selectedItem",p[2])},i:Z,o:Z,d(p){p&&N(e),n[20](null),d=!1,be(f)}}}const my=n=>n.preventDefault();function gy(n,e,t){let i,s,r,o,a,l,c;Y(n,X,T=>t(4,i=T)),Y(n,St,T=>t(22,s=T)),Y(n,ui,T=>t(23,r=T)),Y(n,Yt,T=>t(24,o=T)),Y(n,Qt,T=>t(25,a=T)),Y(n,nn,T=>t(26,l=T)),Y(n,vo,T=>t(27,c=T));let{itemData:u,slotOpen:d,eqSlotName:f,scrolling:p}=e;const _=Xt();let b,v=!1,y=u.name,w,k=0,S;function P(T){setTimeout(()=>{ml(b,y)&&c.push({node:b,itemName:y})})}function W(T){if(d||!d&&T.isTrusted==!1){_("itemSelect",{element:b,trusted:T.isTrusted}),b.classList.contains("selectedItem")||t(2,v=!1),t(2,v=!v),t(11,d=!1),z(Qt,a[f]=v?u:Ir,a),Df(a,l);for(let F of Object.keys(Jt)){z(St,s[F]=0,s);for(let Q in a)a[Q].noStats||(z(St,s[F]+=a[Q].stats[F],s),z(St,s[F]=Math.round(s[F]*10)/10,s))}for(let F of o.bonuses)if(r[F.name])for(let Q in s)z(St,s[Q]+=F.stats[Q],s),z(St,s[Q]=Math.round(s[Q]*10)/10,s)}}function O(){p||(z(X,i.item.ongoing=!0,i),z(X,i.item.data={...u,slot:f,type:"eq",element:b},i))}function L(){S=setInterval(()=>t(14,k+=50),50)}function R(){clearInterval(S),k>=750&&O(),t(14,k=0)}const G=T=>{T.shiftKey?O():i.item.ongoing||W(T)},M=()=>t(3,w=!0),E=()=>t(3,w=!0),H=()=>t(3,w=!1),V=()=>t(3,w=!1);function j(T){ce[T?"unshift":"push"](()=>{b=T,t(1,b)})}return n.$$set=T=>{"itemData"in T&&t(0,u=T.itemData),"slotOpen"in T&&t(11,d=T.slotOpen),"eqSlotName"in T&&t(12,f=T.eqSlotName),"scrolling"in T&&t(13,p=T.scrolling)},n.$$.update=()=>{n.$$.dirty&16384&&k==750&&_("displayInfo")},[u,b,v,w,i,y,P,W,O,L,R,d,f,p,k,G,M,E,H,V,j]}class by extends Ie{constructor(e){super(),Ce(this,e,gy,_y,pe,{itemData:0,slotOpen:11,eqSlotName:12,scrolling:13})}}function vy(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b;return{c(){e=g("li"),t=g("button"),i=g("img"),r=C(),o=g("span"),o.textContent=`${n[6]}`,a=C(),l=g("iconify-icon"),d=C(),f=g("iconify-icon"),et(i.src,s=n[0].image)||m(i,"src",s),m(i,"alt",""),Oe(l,"icon",c=n[5]?"heroicons-solid:switch-vertical":"maki:cross"),Oe(l,"id",u=n[5]?"switchable":"cross"),Oe(f,"icon","eva:info-outline"),Oe(f,"id","info"),t.disabled=p=!n[4]&&!n[5],ae(e,"selectedItem",n[1]),ae(e,"non-eligible",!n[4]&&!n[5]),ae(e,"switchable",n[5])},m(v,y){D(v,e,y),h(e,t),h(t,i),h(t,r),h(t,o),h(t,a),h(t,l),h(t,d),h(t,f),n[19](e),_||(b=[au(n[7].call(null,o)),A(t,"touchstart",n[10],{passive:!0}),A(t,"touchend",n[11],{passive:!0}),A(t,"mousedown",n[10]),A(t,"mouseup",n[11]),A(t,"click",n[18]),A(e,"contextmenu",yy)],_=!0)},p(v,[y]){y&1&&!et(i.src,s=v[0].image)&&m(i,"src",s),y&32&&c!==(c=v[5]?"heroicons-solid:switch-vertical":"maki:cross")&&Oe(l,"icon",c),y&32&&u!==(u=v[5]?"switchable":"cross")&&Oe(l,"id",u),y&48&&p!==(p=!v[4]&&!v[5])&&(t.disabled=p),y&2&&ae(e,"selectedItem",v[1]),y&48&&ae(e,"non-eligible",!v[4]&&!v[5]),y&32&&ae(e,"switchable",v[5])},i:Z,o:Z,d(v){v&&N(e),n[19](null),_=!1,be(b)}}}const yy=n=>n.preventDefault();function wy(n,e,t){let i,s,r,o,a;Y(n,nn,H=>t(17,i=H)),Y(n,X,H=>t(2,s=H)),Y(n,Qt,H=>t(21,r=H)),Y(n,gi,H=>t(22,o=H)),Y(n,vo,H=>t(23,a=H));let{itemData:l,slotOpen:c,index:u,weaponExpand:d,scrolling:f}=e;const p=Xt();let _,b=!1,v=!0,y=!1,w=l.name,k=0,S,P={};function W(H){setTimeout(()=>{ml(_,w)&&a.push({node:_,itemName:w})})}function O(H){v&&(c||!c&&H.isTrusted==!1)&&(l.tool&&d&&p("toolSelect"),p("itemSelect",{element:_,trusted:H.isTrusted}),_.classList.contains("selectedItem")||t(1,b=!1),t(12,c=!1),y?setTimeout(()=>{o[u][w].querySelector("button").click(),o[Object.keys(i).find(V=>i[V].name==w)][i[u]&&i[u].name?i[u].name:w].querySelector("button").click(),t(4,v=!0),t(5,y=!1)},5):(t(1,b=!b),z(nn,i[u]=b?l:Er,i)),Df(r,i))}function L(){f||(z(X,s.item.ongoing=!0,s),z(X,s.item.data={...l,type:"gear",element:_},s))}function R(){S=setInterval(()=>t(16,k+=50),50)}function G(){clearInterval(S),k>=750&&L(),t(16,k=0)}const M=H=>{H.shiftKey?L():s.item.ongoing||O(H)};function E(H){ce[H?"unshift":"push"](()=>{_=H,t(3,_)})}return n.$$set=H=>{"itemData"in H&&t(0,l=H.itemData),"slotOpen"in H&&t(12,c=H.slotOpen),"index"in H&&t(13,u=H.index),"weaponExpand"in H&&t(14,d=H.weaponExpand),"scrolling"in H&&t(15,f=H.scrolling)},n.$$.update=()=>{if(n.$$.dirty&155650&&i)for(let H in i){if(!d&&H!=u&&i[H].name==w){t(5,y=!0);break}if(H!=u&&P[i[H].name]&&P[i[H].name].includes(w)){t(4,v=!1);break}else b||t(4,v=!0)}if(n.$$.dirty&139268)if(s.randomize.ongoing)t(5,y=!1);else for(let H in i)if(H!=u&&i[H].name==w){t(5,y=!0);break}else t(5,y=!1);n.$$.dirty&65536&&k==750&&p("displayInfo")},[l,b,s,_,v,y,w,W,O,L,R,G,c,u,d,f,k,i,M,E]}class ky extends Ie{constructor(e){super(),Ce(this,e,wy,vy,pe,{itemData:0,slotOpen:12,index:13,weaponExpand:14,scrolling:15})}}function Lf(n){const e=n-1;return e*e*e+1}function Ze(n,{delay:e=0,duration:t=400,easing:i=cs}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}function ze(n,{delay:e=0,duration:t=400,easing:i=Lf,start:s=0,opacity:r=0}={}){const o=getComputedStyle(n),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-s,u=a*(1-r);return{delay:e,duration:t,easing:i,css:(d,f)=>`
			transform: ${l} scale(${1-c*f});
			opacity: ${a-u*f}
		`}}function Ma(n){let e,t,i,s;return{c(){e=g("img"),et(e.src,t=n[5][n[3]])||m(e,"src",t),m(e,"alt","")},m(r,o){D(r,e,o),s=!0},p(r,o){(!s||o&8&&!et(e.src,t=r[5][r[3]]))&&m(e,"src",t)},i(r){s||(r&&ye(()=>{s&&(i||(i=he(e,Ze,{duration:150},!0)),i.run(1))}),s=!0)},o(r){r&&(i||(i=he(e,Ze,{duration:150},!1)),i.run(0)),s=!1},d(r){r&&N(e),r&&i&&i.end()}}}function Cy(n){let e,t,i=n[5][n[3]],s,r,o=n[0].name+"",a,l,c,u=Ma(n);return{c(){e=g("li"),t=g("button"),u.c(),s=C(),r=g("span"),a=ee(o),ae(e,"selectedItem",n[4])},m(d,f){D(d,e,f),h(e,t),u.m(t,null),h(t,s),h(t,r),h(r,a),n[8](e),l||(c=[A(t,"click",n[6]),A(e,"mouseenter",n[9]),A(e,"focusin",n[10]),A(e,"mouseleave",n[11]),A(e,"focusout",n[12])],l=!0)},p(d,[f]){f&8&&pe(i,i=d[5][d[3]])?(je(),U(u,1,1,Z),Ve(),u=Ma(d),u.c(),B(u,1),u.m(t,s)):u.p(d,f),f&1&&o!==(o=d[0].name+"")&&ke(a,o)},i(d){B(u)},o(d){U(u)},d(d){d&&N(e),u.d(d),n[8](null),l=!1,be(c)}}}function Iy(n,e,t){let i,s,r;Y(n,mi,L=>t(14,i=L)),Y(n,Qt,L=>t(15,s=L)),Y(n,Yt,L=>t(16,r=L));let{itemData:o,ddOpen:a=!1}=e;const l=Xt();let c,u=!1,d=!1,f,p=0,_=o.pieces.length,b=[];for(let L of o.pieces)e:for(let R of Ei)for(let G of r[R])if(G.name==L){b.push(R);break e}let v=[];for(let L=0;L<_;L++)v.push(r[b[L]].find(R=>R.name==o.pieces[L]).image);function y(){d?f=setInterval(()=>{t(3,p++,p),p==_&&t(3,p=0)},750):(clearInterval(f),t(3,p=0))}function w(){l("setSelect");let L=0;for(let R=0;R<_;R++)!s[b[R]]||s[b[R]].name!=o.pieces[R]?i[b[R]][o.pieces[R]].querySelector("button").click():L++;L!=_&&t(7,a=!1)}function k(L){ce[L?"unshift":"push"](()=>{c=L,t(2,c)})}const S=()=>t(1,d=!0),P=()=>t(1,d=!0),W=()=>t(1,d=!1),O=()=>t(1,d=!1);return n.$$set=L=>{"itemData"in L&&t(0,o=L.itemData),"ddOpen"in L&&t(7,a=L.ddOpen)},n.$$.update=()=>{n.$$.dirty&2&&(d||!d)&&y()},[o,d,c,p,u,v,w,a,k,S,P,W,O]}class Ey extends Ie{constructor(e){super(),Ce(this,e,Iy,Cy,pe,{itemData:0,ddOpen:7})}}const Sy=n=>({}),La=n=>({});function Ty(n){let e,t,i,s,r,o,a,l,c;const u=n[8].tooltip,d=Vf(u,n,n[7],La);return{c(){e=g("div"),t=g("span"),i=C(),s=g("input"),o=C(),d&&d.c(),m(s,"id",r=n[2]?"firstFocusable":n[3]?"lastFocusable":""),s.disabled=n[4],m(s,"type","checkbox"),s.checked=n[1],m(s,"class","svelte-i9pcgn"),m(e,"class","toggleCont svelte-i9pcgn"),ae(e,"unavailable",n[4])},m(f,p){D(f,e,p),h(e,t),t.innerHTML=n[0],h(e,i),h(e,s),h(e,o),d&&d.m(e,null),a=!0,l||(c=[A(s,"change",n[9]),A(s,"keydown",n[10])],l=!0)},p(f,[p]){(!a||p&1)&&(t.innerHTML=f[0]),(!a||p&12&&r!==(r=f[2]?"firstFocusable":f[3]?"lastFocusable":""))&&m(s,"id",r),(!a||p&16)&&(s.disabled=f[4]),(!a||p&2)&&(s.checked=f[1]),d&&d.p&&(!a||p&128)&&Kf(d,u,f,f[7],a?Gf(u,f[7],p,Sy):Yf(f[7]),La),(!a||p&16)&&ae(e,"unavailable",f[4])},i(f){a||(B(d,f),a=!0)},o(f){U(d,f),a=!1},d(f){f&&N(e),d&&d.d(f),l=!1,be(c)}}}function Ny(n,e,t){let{$$slots:i={},$$scope:s}=e,{text:r,checked:o=!1,first:a=!1,last:l=!1,disabled:c=!1,forced:u=!1}=e;const d=Xt(),f=_=>{_.target.blur(),u?_.target.checked=!0:d("toggle",_.target.checked)},p=_=>{a&&Ct(_),l&&It(_),_.key=="Enter"&&!u?(_.target.checked=!_.target.checked,d("toggle",_.target.checked)):u&&(_.target.checked=!0)};return n.$$set=_=>{"text"in _&&t(0,r=_.text),"checked"in _&&t(1,o=_.checked),"first"in _&&t(2,a=_.first),"last"in _&&t(3,l=_.last),"disabled"in _&&t(4,c=_.disabled),"forced"in _&&t(5,u=_.forced),"$$scope"in _&&t(7,s=_.$$scope)},[r,o,a,l,c,u,d,s,i,f,p]}class wt extends Ie{constructor(e){super(),Ce(this,e,Ny,Ty,pe,{text:0,checked:1,first:2,last:3,disabled:4,forced:5})}}function Fa(n,e,t){const i=n.slice();return i[28]=e[t][0],i[29]=e[t][1],i}function Ba(n,e,t){const i=n.slice();return i[28]=e[t][0],i[29]=e[t][1],i}function Ua(n){let e,t;function i(...s){return n[19](n[28],...s)}return e=new wt({props:{text:n[29],checked:n[6][n[28]]}}),e.$on("toggle",i),{c(){oe(e.$$.fragment)},m(s,r){se(e,s,r),t=!0},p(s,r){n=s;const o={};r[0]&64&&(o.checked=n[6][n[28]]),e.$set(o)},i(s){t||(B(e.$$.fragment,s),t=!0)},o(s){U(e.$$.fragment,s),t=!1},d(s){re(e,s)}}}function Oy(n){let e,t,i,s,r,o,a,l,c;s=new wt({props:{text:"Descension",checked:n[4],forced:n[4]}}),s.$on("toggle",n[20]),o=new wt({props:{text:"Ascension",checked:n[5],forced:n[5]}}),o.$on("toggle",n[21]);let u=Re(Object.entries(n[9])),d=[];for(let p=0;p<u.length;p+=1)d[p]=qa(Fa(n,u,p));const f=p=>U(d[p],1,1,()=>{d[p]=null});return{c(){e=g("p"),e.textContent="Sort",t=C(),i=g("div"),oe(s.$$.fragment),r=C(),oe(o.$$.fragment),a=C(),l=g("div");for(let p=0;p<d.length;p+=1)d[p].c();m(e,"id","title"),m(e,"class","svelte-6kxnh3"),m(i,"class","radio ttFocus svelte-6kxnh3"),m(i,"id","sort"),m(l,"class","options svelte-6kxnh3")},m(p,_){D(p,e,_),D(p,t,_),D(p,i,_),se(s,i,null),h(i,r),se(o,i,null),D(p,a,_),D(p,l,_);for(let b=0;b<d.length;b+=1)d[b]&&d[b].m(l,null);c=!0},p(p,_){const b={};_[0]&16&&(b.checked=p[4]),_[0]&16&&(b.forced=p[4]),s.$set(b);const v={};if(_[0]&32&&(v.checked=p[5]),_[0]&32&&(v.forced=p[5]),o.$set(v),_[0]&1664){u=Re(Object.entries(p[9]));let y;for(y=0;y<u.length;y+=1){const w=Fa(p,u,y);d[y]?(d[y].p(w,_),B(d[y],1)):(d[y]=qa(w),d[y].c(),B(d[y],1),d[y].m(l,null))}for(je(),y=u.length;y<d.length;y+=1)f(y);Ve()}},i(p){if(!c){B(s.$$.fragment,p),B(o.$$.fragment,p);for(let _=0;_<u.length;_+=1)B(d[_]);c=!0}},o(p){U(s.$$.fragment,p),U(o.$$.fragment,p),d=d.filter(Boolean);for(let _=0;_<d.length;_+=1)U(d[_]);c=!1},d(p){p&&(N(e),N(t),N(i),N(a),N(l)),re(s),re(o),vt(d,p)}}}function qa(n){let e,t;function i(...s){return n[22](n[28],...s)}return e=new wt({props:{text:n[29],checked:n[7][n[28]],last:n[28]=="none"||n[28]=="tool"}}),e.$on("toggle",i),{c(){oe(e.$$.fragment)},m(s,r){se(e,s,r),t=!0},p(s,r){n=s;const o={};r[0]&128&&(o.checked=n[7][n[28]]),e.$set(o)},i(s){t||(B(e.$$.fragment,s),t=!0)},o(s){U(e.$$.fragment,s),t=!1},d(s){re(e,s)}}}function Ry(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v,y,w,k,S,P,W,O;o=new wt({props:{text:"Inclusive",checked:n[1],forced:n[1]}}),o.$on("toggle",n[14]),l=new wt({props:{text:"Exclusive",checked:n[2],forced:n[2]}}),l.$on("toggle",n[15]),u=new wt({props:{text:"Strict",checked:n[3],forced:n[3]}}),u.$on("toggle",n[16]);let L=Re(Object.entries(n[9])),R=[];for(let E=0;E<L.length;E+=1)R[E]=Ua(Ba(n,L,E));const G=E=>U(R[E],1,1,()=>{R[E]=null});let M=!n[8]&&Oy(n);return{c(){e=g("div"),t=g("div"),i=g("p"),i.innerHTML=`Filter
            <span class="tooltip svelte-6kxnh3" id="bottom">Inclusive: Equipment that includes the selected search types
                <br/> <br/>
                Exclusive: Equipment that does not include the selected search types
                <br/> <br/>
                Strict: Equipment that includes the selected search types and no
                others</span> <iconify-icon icon="eva:info-outline"></iconify-icon>`,s=C(),r=g("div"),oe(o.$$.fragment),a=C(),oe(l.$$.fragment),c=C(),oe(u.$$.fragment),d=C(),f=g("div"),p=g("div"),_=g("button"),_.textContent="Select all",b=C(),v=g("div"),y=g("button"),y.textContent="Clear all",w=C(),k=g("div");for(let E=0;E<R.length;E+=1)R[E].c();S=C(),M&&M.c(),m(i,"id","title"),m(i,"class","svelte-6kxnh3"),m(r,"class","radio ttFocus svelte-6kxnh3"),m(r,"id","filter"),m(_,"class","svelte-6kxnh3"),m(p,"class","svelte-6kxnh3"),m(y,"class","svelte-6kxnh3"),m(v,"class","svelte-6kxnh3"),m(f,"class","optionsAll svelte-6kxnh3"),m(k,"class","options svelte-6kxnh3"),m(t,"class","searchOptions svelte-6kxnh3"),m(e,"class","searchOptionsCont svelte-6kxnh3"),ae(e,"optionsOpen",n[0])},m(E,H){D(E,e,H),h(e,t),h(t,i),h(t,s),h(t,r),se(o,r,null),h(r,a),se(l,r,null),h(r,c),se(u,r,null),h(t,d),h(t,f),h(f,p),h(p,_),h(f,b),h(f,v),h(v,y),h(t,w),h(t,k);for(let V=0;V<R.length;V+=1)R[V]&&R[V].m(k,null);h(t,S),M&&M.m(t,null),P=!0,W||(O=[A(_,"click",n[17]),A(y,"click",n[18])],W=!0)},p(E,H){const V={};H[0]&2&&(V.checked=E[1]),H[0]&2&&(V.forced=E[1]),o.$set(V);const j={};H[0]&4&&(j.checked=E[2]),H[0]&4&&(j.forced=E[2]),l.$set(j);const T={};if(H[0]&8&&(T.checked=E[3]),H[0]&8&&(T.forced=E[3]),u.$set(T),H[0]&1600){L=Re(Object.entries(E[9]));let F;for(F=0;F<L.length;F+=1){const Q=Ba(E,L,F);R[F]?(R[F].p(Q,H),B(R[F],1)):(R[F]=Ua(Q),R[F].c(),B(R[F],1),R[F].m(k,null))}for(je(),F=L.length;F<R.length;F+=1)G(F);Ve()}E[8]||M.p(E,H),(!P||H[0]&1)&&ae(e,"optionsOpen",E[0])},i(E){if(!P){B(o.$$.fragment,E),B(l.$$.fragment,E),B(u.$$.fragment,E);for(let H=0;H<L.length;H+=1)B(R[H]);B(M),P=!0}},o(E){U(o.$$.fragment,E),U(l.$$.fragment,E),U(u.$$.fragment,E),R=R.filter(Boolean);for(let H=0;H<R.length;H+=1)U(R[H]);U(M),P=!1},d(E){E&&N(e),re(o),re(l),re(u),vt(R,E),M&&M.d(),W=!1,be(O)}}}function Ay(n,e,t){let i;Y(n,Yt,j=>t(24,i=j));let{optionsOpen:s,slotName:r,elementData:o,list:a}=e;const l=Xt();let c=r=="gear",u=!0,d=!1,f=!1,p=!0,_=!1,b={},v={},y=c?{armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",unique:"Unique",tool:"Tool"}:{...Jt,none:"No Stats"};for(let j of Object.keys(y))b[j]=!0;for(let j of Object.keys(y))v[j]=!1;let w=["Void Spike Ultradagger","Pureblood Dagger","Gnome Rocket Launcher"],k=[];function S(j){setTimeout(()=>{for(let T in o){let F=i[r].find(le=>le.name==T),Q={...Jt},te={armor:!1,magicDmg:!1,meleeDmg:!1,rangedDmg:!1,unique:!1,tool:!1},ne=c?te:Q,ie=!1;if(c)if(!F.tool&&!w.includes(F.name)){for(let le in b)for(let ue of F.moves)if(te[le]=ue.type.includes(le),te[le])break}else te.tool=!!F.tool,te.tool||(te.unique=F.info.type=="Unique",F.name=="Void Spike Ultradagger"&&(te.armor=!0,te.meleeDmg=!0));else{for(let le in b)Q[le]=F.stats[le]!=0;Q.none=!!F.noStats}if(u)for(let le in ne)if(b[le]&&ne[le]){ie=!1;break}else ie=!0;else if(d)for(let le in ne)if(b[le]&&ne[le]){ie=!0;break}else ie=!1;else if(f)for(let le in ne)if(b[le]&&ne[le]||!b[le]&&!ne[le])ie=!1;else{ie=!0;break}ie?o[T].classList.add("hidden","filtered"):o[T].classList.remove("hidden","filtered")}if(j=="sort"){let T=Object.keys(v).find(Q=>v[Q]),F=0;for(T&&!(T=="none"||T=="tool")?(k.sort((Q,te)=>{let ne=P(Q,te,!0).stats[T]-P(Q,te,!1).stats[T];return F||(F=ne),ne}),F||(k=Object.values(o))):!T&&_&&(k=Object.values(o).toReversed()),T=="none"&&(k=[...Object.entries(o).filter(Q=>i[r].find(te=>te.name==Q[0]).noStats),...Object.entries(o).filter(Q=>!i[r].find(te=>te.name==Q[0]).noStats)],k=k.map(Q=>Q[1]),_&&k.reverse());a.lastElementChild;)a.removeChild(a.lastElementChild);if(T||!T&&_)for(let Q of k)a.appendChild(Q);else for(let Q in o)a.appendChild(o[Q])}l("listUpdate")})}function P(j,T,F){return i[r].find(Q=>Q.name==Object.keys(o).find(te=>o[te]===(p?F?T:j:F?j:T)))}const W=j=>{t(1,u=j.detail),j.detail&&(t(2,d=!1),t(3,f=!1)),S("filter")},O=j=>{t(2,d=j.detail),j.detail&&(t(1,u=!1),t(3,f=!1)),S("filter")},L=j=>{t(3,f=j.detail),j.detail&&(t(1,u=!1),t(2,d=!1)),S("filter")},R=j=>{j.target.blur();for(let T in b)t(6,b[T]=!0,b);S("filter")},G=j=>{j.target.blur();for(let T in b)t(6,b[T]=!1,b);S("filter")},M=(j,T)=>{t(6,b[j]=T.detail,b),S("filter")},E=j=>{t(4,p=j.detail),j.detail&&t(5,_=!1),S("sort")},H=j=>{t(5,_=j.detail),j.detail&&t(4,p=!1),S("sort")},V=(j,T)=>{if(t(7,v[j]=T.detail,v),T.detail)for(let F in v)F!=j&&t(7,v[F]=!1,v);S("sort")};return n.$$set=j=>{"optionsOpen"in j&&t(0,s=j.optionsOpen),"slotName"in j&&t(11,r=j.slotName),"elementData"in j&&t(12,o=j.elementData),"list"in j&&t(13,a=j.list)},n.$$.update=()=>{n.$$.dirty[0]&8192&&a&&(k=[...a.children])},[s,u,d,f,p,_,b,v,c,y,S,r,o,a,W,O,L,R,G,M,E,H,V]}class Dy extends Ie{constructor(e){super(),Ce(this,e,Ay,Ry,pe,{optionsOpen:0,slotName:11,elementData:12,list:13},null,[-1,-1])}}function Wa(n,e,t){const i=n.slice();return i[61]=e[t],i}function Py(n){let e;return{c(){e=g("span"),e.textContent="Loading items...",m(e,"class","svelte-3qe8b")},m(t,i){D(t,e,i)},p:Z,i:Z,o:Z,d(t){t&&N(e)}}}function My(n){let e,t,i,s,r,o,a,l=n[3]!="sets"&&Ha(n),c=Re(n[6]),u=[];for(let f=0;f<c.length;f+=1)u[f]=za(Wa(n,c,f));const d=f=>U(u[f],1,1,()=>{u[f]=null});return{c(){e=g("input"),t=C(),l&&l.c(),i=C(),s=g("ul");for(let f=0;f<u.length;f+=1)u[f].c();m(e,"type","text"),m(e,"class","searchBarInput"),m(e,"placeholder","Search..."),m(s,"class","svelte-3qe8b"),ae(s,"no-scrollbar",n[15].length<=4)},m(f,p){D(f,e,p),n[29](e),D(f,t,p),l&&l.m(f,p),D(f,i,p),D(f,s,p);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(s,null);n[42](s),r=!0,o||(a=[A(e,"keydown",n[18]),A(e,"input",n[19]),A(s,"mouseup",n[43]),A(s,"touchend",n[44],{passive:!0}),A(s,"scroll",n[45]),A(s,"scrollend",n[46])],o=!0)},p(f,p){if(f[3]!="sets"?l?l.p(f,p):(l=Ha(f),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),p[0]&1197019){c=Re(f[6]);let _;for(_=0;_<c.length;_+=1){const b=Wa(f,c,_);u[_]?(u[_].p(b,p),B(u[_],1)):(u[_]=za(b),u[_].c(),B(u[_],1),u[_].m(s,null))}for(je(),_=c.length;_<u.length;_+=1)d(_);Ve()}(!r||p[0]&32768)&&ae(s,"no-scrollbar",f[15].length<=4)},i(f){if(!r){for(let p=0;p<c.length;p+=1)B(u[p]);r=!0}},o(f){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)U(u[p]);r=!1},d(f){f&&(N(e),N(t),N(i),N(s)),n[29](null),l&&l.d(f),vt(u,f),n[42](null),o=!1,be(a)}}}function Ha(n){let e,t,i;return{c(){e=g("button"),e.innerHTML='<iconify-icon icon="mi:filter"></iconify-icon>',m(e,"class","optionsButton svelte-3qe8b")},m(s,r){D(s,e,r),n[30](e),t||(i=A(e,"click",n[31]),t=!0)},p:Z,d(s){s&&N(e),n[30](null),t=!1,i()}}}function Ly(n){let e,t,i,s;function r(l){n[39](l)}function o(l){n[40](l)}let a={itemData:n[61],eqSlotName:n[3]};return n[0]!==void 0&&(a.slotOpen=n[0]),n[9]!==void 0&&(a.scrolling=n[9]),e=new by({props:a}),ce.push(()=>Be(e,"slotOpen",r)),ce.push(()=>Be(e,"scrolling",o)),e.$on("itemSelect",n[20]),e.$on("displayInfo",n[41]),{c(){oe(e.$$.fragment)},m(l,c){se(e,l,c),s=!0},p(l,c){const u={};c[0]&64&&(u.itemData=l[61]),c[0]&8&&(u.eqSlotName=l[3]),!t&&c[0]&1&&(t=!0,u.slotOpen=l[0],Fe(()=>t=!1)),!i&&c[0]&512&&(i=!0,u.scrolling=l[9],Fe(()=>i=!1)),e.$set(u)},i(l){s||(B(e.$$.fragment,l),s=!0)},o(l){U(e.$$.fragment,l),s=!1},d(l){re(e,l)}}}function Fy(n){let e,t,i;function s(o){n[37](o)}let r={itemData:n[61]};return n[0]!==void 0&&(r.ddOpen=n[0]),e=new Ey({props:r}),ce.push(()=>Be(e,"ddOpen",s)),e.$on("setSelect",n[38]),{c(){oe(e.$$.fragment)},m(o,a){se(e,o,a),i=!0},p(o,a){const l={};a[0]&64&&(l.itemData=o[61]),!t&&a[0]&1&&(t=!0,l.ddOpen=o[0],Fe(()=>t=!1)),e.$set(l)},i(o){i||(B(e.$$.fragment,o),i=!0)},o(o){U(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function By(n){let e,t,i,s,r;function o(u){n[32](u)}function a(u){n[33](u)}function l(u){n[34](u)}let c={itemData:n[61],index:n[4]};return n[0]!==void 0&&(c.slotOpen=n[0]),n[1]!==void 0&&(c.weaponExpand=n[1]),n[9]!==void 0&&(c.scrolling=n[9]),e=new ky({props:c}),ce.push(()=>Be(e,"slotOpen",o)),ce.push(()=>Be(e,"weaponExpand",a)),ce.push(()=>Be(e,"scrolling",l)),e.$on("itemSelect",n[20]),e.$on("toolSelect",n[35]),e.$on("displayInfo",n[36]),{c(){oe(e.$$.fragment)},m(u,d){se(e,u,d),r=!0},p(u,d){const f={};d[0]&64&&(f.itemData=u[61]),d[0]&16&&(f.index=u[4]),!t&&d[0]&1&&(t=!0,f.slotOpen=u[0],Fe(()=>t=!1)),!i&&d[0]&2&&(i=!0,f.weaponExpand=u[1],Fe(()=>i=!1)),!s&&d[0]&512&&(s=!0,f.scrolling=u[9],Fe(()=>s=!1)),e.$set(f)},i(u){r||(B(e.$$.fragment,u),r=!0)},o(u){U(e.$$.fragment,u),r=!1},d(u){re(e,u)}}}function za(n){let e,t,i,s;const r=[By,Fy,Ly],o=[];function a(l,c){return l[4]?0:l[3]=="sets"?1:2}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=mt()},m(l,c){o[e].m(l,c),D(l,i,c),s=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(je(),U(o[u],1,1,()=>{o[u]=null}),Ve(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),B(t,1),t.m(i.parentNode,i))},i(l){s||(B(t),s=!0)},o(l){U(t),s=!1},d(l){l&&N(i),o[e].d(l)}}}function ja(n){let e,t,i,s;function r(l){n[47](l)}function o(l){n[48](l)}let a={slotName:n[3],elementData:n[16]};return n[2]!==void 0&&(a.optionsOpen=n[2]),n[5]!==void 0&&(a.list=n[5]),e=new Dy({props:a}),ce.push(()=>Be(e,"optionsOpen",r)),ce.push(()=>Be(e,"list",o)),e.$on("listUpdate",n[19]),{c(){oe(e.$$.fragment)},m(l,c){se(e,l,c),s=!0},p(l,c){const u={};c[0]&8&&(u.slotName=l[3]),c[0]&65536&&(u.elementData=l[16]),!t&&c[0]&4&&(t=!0,u.optionsOpen=l[2],Fe(()=>t=!1)),!i&&c[0]&32&&(i=!0,u.list=l[5],Fe(()=>i=!1)),e.$set(u)},i(l){s||(B(e.$$.fragment,l),s=!0)},o(l){U(e.$$.fragment,l),s=!1},d(l){re(e,l)}}}function Uy(n){let e,t,i,s,r,o,a;const l=[My,Py],c=[];function u(f,p){return f[6]?0:1}t=u(n),i=c[t]=l[t](n);let d=n[3]!="sets"&&ja(n);return{c(){e=g("div"),i.c(),s=C(),d&&d.c(),m(e,"class","dropdown svelte-3qe8b"),ae(e,"infoDisplay",n[7])},m(f,p){D(f,e,p),c[t].m(e,null),h(e,s),d&&d.m(e,null),n[49](e),r=!0,o||(a=[A(window,"keydown",n[26]),A(window,"keyup",n[27]),A(window,"mousedown",n[28]),A(e,"transitionend",n[50]),A(e,"transitioncancel",n[51])],o=!0)},p(f,p){let _=t;t=u(f),t===_?c[t].p(f,p):(je(),U(c[_],1,1,()=>{c[_]=null}),Ve(),i=c[t],i?i.p(f,p):(i=c[t]=l[t](f),i.c()),B(i,1),i.m(e,s)),f[3]!="sets"?d?(d.p(f,p),p[0]&8&&B(d,1)):(d=ja(f),d.c(),B(d,1),d.m(e,null)):d&&(je(),U(d,1,1,()=>{d=null}),Ve()),(!r||p[0]&128)&&ae(e,"infoDisplay",f[7])},i(f){r||(B(i),B(d),r=!0)},o(f){U(i),U(d),r=!1},d(f){f&&N(e),c[t].d(),d&&d.d(),n[49](null),o=!1,be(a)}}}function qy(n,e,t){let i,s,r,o,a,l,c,u,d;Y(n,Yt,I=>t(22,r=I)),Y(n,mi,I=>t(23,o=I)),Y(n,_h,I=>t(24,a=I)),Y(n,gi,I=>t(25,l=I)),Y(n,Ft,I=>t(54,c=I)),Y(n,nn,I=>t(55,u=I)),Y(n,Qt,I=>t(56,d=I));let{slotName:f,index:p=0,slotOpen:_,weaponExpand:b=null,optionsOpen:v=!1}=e;const y=Xt();p?z(gi,l[p]={},l):z(mi,o[f]={},o);let w=!1,k=!1,S=!1,P,W,O,L,R,G=null,M=!1,E=!1,H=[];function V(){R&&R.classList.remove("lastElement"),t(15,H=O.querySelectorAll("li:not(.hidden)")),R=H[H.length-1],R&&R.classList.add("lastElement"),(!R||R.classList.contains("non-eligible"))&&(R=L)}function j(I){!I.shiftKey&&I.key=="Tab"&&!v&&(I.preventDefault(),setTimeout(()=>W.focus()))}function T(){R&&R.removeEventListener("keydown",j),V(),R&&R.addEventListener("keydown",j)}function F(I){I.shiftKey&&I.key=="Tab"&&(I.preventDefault(),setTimeout(()=>(R.querySelector("button")||R).focus()))}function Q(){Pf(W.value,i),T()}function te(I){y("itemSelect",I.detail.element),t(13,G=I.detail.element),M=I.detail.trusted;let De=O.querySelector(".selectedItem");De&&De!=I.detail.element&&De.classList.remove("selectedItem"),t(14,E=!0),M||(ie(),O.scrollTo(0,G.offsetTop)),setTimeout(ne)}function ne(){z(Ft,c=structuredClone(ay),c);for(let I in d)d[I].cost.min!=null&&(z(Ft,c.armor.min+=d[I].cost.min,c),z(Ft,c.armor.max+=d[I].cost.max,c));z(Ft,c.armor.avg=Math.ceil((c.armor.min+c.armor.max)/2),c);for(let I in u)u[I].cost.min!=null&&(z(Ft,c.gear.min+=u[I].cost.min,c),z(Ft,c.gear.max+=u[I].cost.max,c));z(Ft,c.gear.avg=Math.ceil((c.gear.min+c.gear.max)/2),c),z(Ft,c.total.min=c.armor.min+c.gear.min,c),z(Ft,c.total.max=c.armor.max+c.gear.max,c),z(Ft,c.total.avg=Math.ceil((c.total.min+c.total.max)/2),c)}function ie(){t(14,E=!1),t(11,W.value="",W),Q()}const le=I=>{f!="sets"&&!w&&I.shiftKey&&t(7,w=!0)},ue=I=>{f!="sets"&&I.key=="Shift"&&!k&&t(7,w=!1)},q=()=>(t(7,w=!1),t(8,k=!1));function x(I){ce[I?"unshift":"push"](()=>{W=I,t(11,W)})}function we(I){ce[I?"unshift":"push"](()=>{L=I,t(12,L)})}const Ee=()=>t(2,v=!v);function Ae(I){_=I,t(0,_)}function Ue(I){b=I,t(1,b)}function qe(I){S=I,t(9,S)}const Pe=()=>y("toolSelect"),Me=()=>(t(7,w=!0),t(8,k=!0));function fe(I){_=I,t(0,_)}const We=()=>t(14,E=!0);function st(I){_=I,t(0,_)}function Ut(I){S=I,t(9,S)}const qt=()=>(t(7,w=!0),t(8,k=!0));function de(I){ce[I?"unshift":"push"](()=>{O=I,t(5,O)})}const Ht=()=>t(7,w=!1),J=()=>t(7,w=!1),Le=()=>t(9,S=!0),tt=()=>t(9,S=!1);function ot(I){v=I,t(2,v)}function lt(I){O=I,t(5,O)}function Ot(I){ce[I?"unshift":"push"](()=>{P=I,t(10,P)})}const nt=I=>{I.propertyName=="visibility"&&I.target==P&&(E&&ie(),!_&&G&&setTimeout(()=>O.scrollTo(0,G.offsetTop)),ir(W,_))},Pt=I=>{I.propertyName=="visibility"&&I.target==P&&(t(14,E=!1),ir(W,_))};return n.$$set=I=>{"slotName"in I&&t(3,f=I.slotName),"index"in I&&t(4,p=I.index),"slotOpen"in I&&t(0,_=I.slotOpen),"weaponExpand"in I&&t(1,b=I.weaponExpand),"optionsOpen"in I&&t(2,v=I.optionsOpen)},n.$$.update=()=>{if(n.$$.dirty[0]&58720280&&t(16,i=p?l[p]:f=="sets"?a:o[f]),n.$$.dirty[0]&4194312&&t(6,s=r[f]),n.$$.dirty[0]&96&&O){t(15,H=O.querySelectorAll("li:not(.hidden)"));for(let I=0;I<O.childElementCount;I++)t(16,i[s[I].name]=O.children[I],i);V(),T()}},[_,b,v,f,p,O,s,w,k,S,P,W,L,G,E,H,i,y,F,Q,te,ie,r,o,a,l,le,ue,q,x,we,Ee,Ae,Ue,qe,Pe,Me,fe,We,st,Ut,qt,de,Ht,J,Le,tt,ot,lt,Ot,nt,Pt]}class bl extends Ie{constructor(e){super(),Ce(this,e,qy,Uy,pe,{slotName:3,index:4,slotOpen:0,weaponExpand:1,optionsOpen:2},null,[-1,-1,-1])}}function Va(n){let e,t,i,s,r,o,a=n[1].name+"",l,c,u,d,f;return{c(){e=g("button"),t=g("img"),r=C(),o=g("span"),l=ee(a),et(t.src,i=n[1].image)||m(t,"src",i),m(t,"alt",s=n[1].name),m(t,"draggable","false"),m(t,"class","svelte-1bgnkwv"),m(o,"class","tooltip"),m(o,"id","left"),m(e,"class","svelte-1bgnkwv"),Ye(e,"display",n[1].link?"":"none")},m(p,_){D(p,e,_),h(e,t),h(e,r),h(e,o),h(o,l),u=!0,d||(f=[A(e,"click",n[13]),A(e,"focusin",n[14]),A(e,"outroend",n[15])],d=!0)},p(p,_){(!u||_&2&&!et(t.src,i=p[1].image))&&m(t,"src",i),(!u||_&2&&s!==(s=p[1].name))&&m(t,"alt",s),(!u||_&2)&&a!==(a=p[1].name+"")&&ke(l,a),_&2&&Ye(e,"display",p[1].link?"":"none")},i(p){u||(p&&ye(()=>{u&&(c||(c=he(e,Ze,{duration:150},!0)),c.run(1))}),u=!0)},o(p){p&&(c||(c=he(e,Ze,{duration:150},!1)),c.run(0)),u=!1},d(p){p&&N(e),p&&c&&c.end(),d=!1,be(f)}}}function Wy(n){let e,t,i=n[1],s,r,o=n[0].charAt(0).toUpperCase()+n[0].slice(1)+"",a,l,c,u,d,f,p,_,b,v,y,w,k=Va(n);function S(O){n[19](O)}function P(O){n[20](O)}let W={slotName:n[0]};return n[4]!==void 0&&(W.slotOpen=n[4]),n[6]!==void 0&&(W.optionsOpen=n[6]),p=new bl({props:W}),ce.push(()=>Be(p,"slotOpen",S)),ce.push(()=>Be(p,"optionsOpen",P)),p.$on("itemSelect",n[21]),{c(){e=g("div"),t=g("div"),k.c(),s=C(),r=g("button"),a=ee(o),l=C(),c=g("iconify-icon"),u=C(),d=g("button"),d.innerHTML='<iconify-icon icon="maki:cross" class="svelte-1bgnkwv"></iconify-icon> <span class="tooltip" id="top">Clear selection</span>',f=C(),oe(p.$$.fragment),m(t,"class","eqSlotIcon ff-border svelte-1bgnkwv"),Oe(c,"icon","iconamoon:arrow-down-2-fill"),Oe(c,"class","svelte-1bgnkwv"),m(r,"class","ddButton svelte-1bgnkwv"),m(d,"class","clearButton svelte-1bgnkwv"),m(e,"class","eqSlotCont svelte-1bgnkwv"),ae(e,"slotOpen",n[4]),ae(e,"clearAllowed",n[5]&&n[7])},m(O,L){D(O,e,L),h(e,t),k.m(t,null),n[16](t),h(e,s),h(e,r),h(r,a),h(r,l),h(r,c),h(e,u),h(e,d),h(e,f),se(p,e,null),n[22](e),v=!0,y||(w=[A(window,"mousedown",n[11]),A(window,"keydown",n[12]),A(r,"click",n[17]),A(d,"click",n[18]),A(e,"mouseenter",n[23]),A(e,"mouseleave",n[24])],y=!0)},p(O,[L]){L&2&&pe(i,i=O[1])?(je(),U(k,1,1,Z),Ve(),k=Va(O),k.c(),B(k,1),k.m(t,null)):k.p(O,L),(!v||L&1)&&o!==(o=O[0].charAt(0).toUpperCase()+O[0].slice(1)+"")&&ke(a,o);const R={};L&1&&(R.slotName=O[0]),!_&&L&16&&(_=!0,R.slotOpen=O[4],Fe(()=>_=!1)),!b&&L&64&&(b=!0,R.optionsOpen=O[6],Fe(()=>b=!1)),p.$set(R),(!v||L&16)&&ae(e,"slotOpen",O[4]),(!v||L&160)&&ae(e,"clearAllowed",O[5]&&O[7])},i(O){v||(B(k),B(p.$$.fragment,O),v=!0)},o(O){U(k),U(p.$$.fragment,O),v=!1},d(O){O&&N(e),k.d(O),n[16](null),re(p),n[22](null),y=!1,be(w)}}}function Hy(n,e,t){let i,s,r;Y(n,Qt,E=>t(10,i=E)),Y(n,Gn,E=>t(8,s=E)),Y(n,X,E=>t(9,r=E));let{eqSlotName:o}=e,a,l,c=Ir,u,d,f,p;const _=E=>{(!a.contains(E.target)&&!s||E.target==a||E.target==l)&&(t(4,u=!1),t(6,f=!1),E.target!=a&&E.target!=l&&t(5,d=!1))},b=E=>{E.key=="Tab"?setTimeout(()=>{t(5,d=a.contains(document.activeElement))}):E.key=="Escape"&&(t(4,u=!1),t(6,f=!1))},v=()=>{s||(t(4,u=!1),z(X,r.item.ongoing=!0,r),z(X,r.item.data={...c,slot:o,type:"eq"},r))},y=E=>{E.relatedTarget==null&&t(5,d=!0)},w=()=>{setTimeout(()=>dy(l))};function k(E){ce[E?"unshift":"push"](()=>{l=E,t(3,l)})}const S=()=>{r.screenshot.ongoing||t(4,u=!u)},P=()=>{t(5,d=!1),a.classList.contains("clearAllowed")&&p.querySelector("button").click()};function W(E){u=E,t(4,u)}function O(E){f=E,t(6,f)}const L=E=>{setTimeout(()=>{t(7,p=E.detail.classList.contains("selectedItem")?E.detail:null),t(6,f=!1)})};function R(E){ce[E?"unshift":"push"](()=>{a=E,t(2,a)})}const G=()=>t(5,d=!0),M=()=>{a.contains(document.activeElement)||t(5,d=!1)};return n.$$set=E=>{"eqSlotName"in E&&t(0,o=E.eqSlotName)},n.$$.update=()=>{n.$$.dirty&1027&&i[o]&&i[o].name!=c.name&&t(1,c=i[o])},[o,c,a,l,u,d,f,p,s,r,i,_,b,v,y,w,k,S,P,W,O,L,R,G,M]}class zy extends Ie{constructor(e){super(),Ce(this,e,Hy,Wy,pe,{eqSlotName:0})}}function Ga(n,e,t){const i=n.slice();return i[1]=e[t],i[2]=e,i[3]=t,i}function Ka(n){let e,t,i;function s(o){n[0](o,n[1],n[2],n[3])}let r={};return n[1]!==void 0&&(r.eqSlotName=n[1]),e=new zy({props:r}),ce.push(()=>Be(e,"eqSlotName",s)),{c(){oe(e.$$.fragment)},m(o,a){se(e,o,a),i=!0},p(o,a){n=o;const l={};!t&&a&0&&(t=!0,l.eqSlotName=n[1],Fe(()=>t=!1)),e.$set(l)},i(o){i||(B(e.$$.fragment,o),i=!0)},o(o){U(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function jy(n){let e,t,i=Re(Array(...Ei)),s=[];for(let o=0;o<i.length;o+=1)s[o]=Ka(Ga(n,i,o));const r=o=>U(s[o],1,1,()=>{s[o]=null});return{c(){e=g("div");for(let o=0;o<s.length;o+=1)s[o].c();m(e,"class","armorBox svelte-16092aw")},m(o,a){D(o,e,a);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null);t=!0},p(o,[a]){if(a&0){i=Re(Array(...Ei));let l;for(l=0;l<i.length;l+=1){const c=Ga(o,i,l);s[l]?(s[l].p(c,a),B(s[l],1)):(s[l]=Ka(c),s[l].c(),B(s[l],1),s[l].m(e,null))}for(je(),l=i.length;l<s.length;l+=1)r(l);Ve()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)B(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)U(s[a]);t=!1},d(o){o&&N(e),vt(s,o)}}}function Vy(n,e,t){function i(s,r,o,a){o[a]=s}return[i]}class Gy extends Ie{constructor(e){super(),Ce(this,e,Vy,jy,pe,{})}}function Ky(n){let e,t=(n[3]?`${Math.floor(n[5]*.675+19.8)}% Reduction`:n[5])+"",i,s,r;return{c(){e=g("span"),i=ee(t),m(e,"class","statValue svelte-78f402"),m(e,"tabindex","0"),ae(e,"hidden",n[2]),ae(e,"negative",n[5]<0),ae(e,"zero",n[5]==0),ae(e,"reduction",n[3])},m(o,a){D(o,e,a),h(e,i),s||(r=[A(e,"mouseenter",n[11]),A(e,"mouseleave",n[12]),A(e,"focusin",n[13]),A(e,"focusout",n[14])],s=!0)},p(o,a){a&40&&t!==(t=(o[3]?`${Math.floor(o[5]*.675+19.8)}% Reduction`:o[5])+"")&&ke(i,t),a&4&&ae(e,"hidden",o[2]),a&32&&ae(e,"negative",o[5]<0),a&32&&ae(e,"zero",o[5]==0),a&8&&ae(e,"reduction",o[3])},d(o){o&&N(e),s=!1,be(r)}}}function Yy(n){let e,t=(n[0]!="endurance"?n[5]:n[5].toFixed(2))+"",i;return{c(){e=g("span"),i=ee(t),m(e,"class","statValue svelte-78f402"),ae(e,"hidden",n[2]),ae(e,"negative",n[5]<0),ae(e,"zero",n[5]==0)},m(s,r){D(s,e,r),h(e,i)},p(s,r){r&33&&t!==(t=(s[0]!="endurance"?s[5]:s[5].toFixed(2))+"")&&ke(i,t),r&4&&ae(e,"hidden",s[2]),r&32&&ae(e,"negative",s[5]<0),r&32&&ae(e,"zero",s[5]==0)},d(s){s&&N(e)}}}function Qy(n){let e;return{c(){e=g("iconify-icon"),Oe(e,"icon","codicon:sparkle-filled"),Oe(e,"class","svelte-78f402")},m(t,i){D(t,e,i)},p:Z,d(t){t&&N(e)}}}function Jy(n){let e,t=`${n[1]} Bonus`,i;return{c(){e=g("span"),i=ee(t),m(e,"class","statName svelte-78f402")},m(s,r){D(s,e,r),h(e,i)},p(s,r){r&2&&t!==(t=`${s[1]} Bonus`)&&ke(i,t)},d(s){s&&N(e)}}}function Xy(n){let e,t,i,s,r,o,a;function l(_,b){return _[0]!="armor"?Yy:Ky}let c=l(n),u=c(n);function d(_,b){if(_[2])return Jy;if(_[4])return Qy}let f=d(n),p=f&&f(n);return{c(){e=g("div"),t=g("img"),s=C(),u.c(),r=C(),p&&p.c(),et(t.src,i="stats/"+n[0]+".svg")||m(t,"src",i),m(t,"alt",n[1]),m(t,"class","svelte-78f402"),m(e,"id",n[0]),m(e,"class","svelte-78f402"),ae(e,"hidden",n[5]==0)},m(_,b){D(_,e,b),h(e,t),h(e,s),u.m(e,null),h(e,r),p&&p.m(e,null),o||(a=[A(t,"mouseenter",n[9]),A(t,"mouseleave",n[10])],o=!0)},p(_,[b]){b&1&&!et(t.src,i="stats/"+_[0]+".svg")&&m(t,"src",i),b&2&&m(t,"alt",_[1]),c===(c=l(_))&&u?u.p(_,b):(u.d(1),u=c(_),u&&(u.c(),u.m(e,r))),f===(f=d(_))&&p?p.p(_,b):(p&&p.d(1),p=f&&f(_),p&&(p.c(),p.m(e,null))),b&1&&m(e,"id",_[0]),b&32&&ae(e,"hidden",_[5]==0)},i:Z,o:Z,d(_){_&&N(e),u.d(),p&&p.d(),o=!1,be(a)}}}function xy(n,e,t){let i,s,r,o;Y(n,Yt,w=>t(6,s=w)),Y(n,ui,w=>t(7,r=w)),Y(n,St,w=>t(8,o=w));let{codeName:a,formalName:l}=e,c,u,d=!1;const f=()=>t(2,c=!0),p=()=>t(2,c=!1),_=()=>t(3,u=!0),b=()=>t(3,u=!1),v=()=>t(3,u=!0),y=()=>t(3,u=!1);return n.$$set=w=>{"codeName"in w&&t(0,a=w.codeName),"formalName"in w&&t(1,l=w.formalName)},n.$$.update=()=>{if(n.$$.dirty&257&&t(5,i=o[a]),n.$$.dirty&193)for(let w in r)if(r[w]&&s.bonuses.find(k=>k.name==w).stats[a]!=0){t(4,d=!0);break}else t(4,d=!1)},[a,l,c,u,d,i,s,r,o,f,p,_,b,v,y]}class Zy extends Ie{constructor(e){super(),Ce(this,e,xy,Xy,pe,{codeName:0,formalName:1})}}function Ya(n,e,t){const i=n.slice();return i[8]=e[t][0],i[9]=e[t][1],i[10]=e,i[11]=t,i}function Qa(n){let e,t,i,s;function r(l){n[4](l,n[8],n[10],n[11])}function o(l){n[5](l,n[9],n[10],n[11])}let a={};return n[8]!==void 0&&(a.codeName=n[8]),n[9]!==void 0&&(a.formalName=n[9]),e=new Zy({props:a}),ce.push(()=>Be(e,"codeName",r)),ce.push(()=>Be(e,"formalName",o)),{c(){oe(e.$$.fragment)},m(l,c){se(e,l,c),s=!0},p(l,c){n=l;const u={};!t&&c&0&&(t=!0,u.codeName=n[8],Fe(()=>t=!1)),!i&&c&0&&(i=!0,u.formalName=n[9],Fe(()=>i=!1)),e.$set(u)},i(l){s||(B(e.$$.fragment,l),s=!0)},o(l){U(e.$$.fragment,l),s=!1},d(l){re(e,l)}}}function Ja(n){let e,t,i,s,r=n[2]?"Copied!":`Copy ${n[1]?"all":""} as text`,o,a,l,c,u;return{c(){e=g("button"),t=g("iconify-icon"),i=C(),s=g("span"),o=ee(r),Oe(t,"icon","ic:round-content-copy"),Oe(t,"class","svelte-cimkzy"),m(s,"class","tooltip"),m(s,"id","top"),m(e,"class","copyStatsButton svelte-cimkzy")},m(d,f){D(d,e,f),h(e,t),h(e,i),h(e,s),h(s,o),l=!0,c||(u=A(e,"click",n[6]),c=!0)},p(d,f){(!l||f&6)&&r!==(r=d[2]?"Copied!":`Copy ${d[1]?"all":""} as text`)&&ke(o,r)},i(d){l||(d&&ye(()=>{l&&(a||(a=he(e,Ze,{duration:100},!0)),a.run(1))}),l=!0)},o(d){d&&(a||(a=he(e,Ze,{duration:100},!1)),a.run(0)),l=!1},d(d){d&&N(e),d&&a&&a.end(),c=!1,u()}}}function $y(n){let e;return{c(){e=g("span"),e.textContent="Show all stats",m(e,"slot","tooltip"),m(e,"class","tooltip"),m(e,"id","top")},m(t,i){D(t,e,i)},p:Z,d(t){t&&N(e)}}}function e1(n){let e,t,i,s,r,o=Re(Object.entries(Jt)),a=[];for(let u=0;u<o.length;u+=1)a[u]=Qa(Ya(n,o,u));const l=u=>U(a[u],1,1,()=>{a[u]=null});let c=n[3]&&Ja(n);return s=new wt({props:{text:"",$$slots:{tooltip:[$y]},$$scope:{ctx:n}}}),s.$on("toggle",n[7]),{c(){e=g("div");for(let u=0;u<a.length;u+=1)a[u].c();t=C(),c&&c.c(),i=C(),oe(s.$$.fragment),m(e,"class","statBox svelte-cimkzy"),ae(e,"showAll",n[1])},m(u,d){D(u,e,d);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(e,null);h(e,t),c&&c.m(e,null),h(e,i),se(s,e,null),r=!0},p(u,[d]){if(d&0){o=Re(Object.entries(Jt));let p;for(p=0;p<o.length;p+=1){const _=Ya(u,o,p);a[p]?(a[p].p(_,d),B(a[p],1)):(a[p]=Qa(_),a[p].c(),B(a[p],1),a[p].m(e,t))}for(je(),p=o.length;p<a.length;p+=1)l(p);Ve()}u[3]?c?(c.p(u,d),d&8&&B(c,1)):(c=Ja(u),c.c(),B(c,1),c.m(e,i)):c&&(je(),U(c,1,1,()=>{c=null}),Ve());const f={};d&4096&&(f.$$scope={dirty:d,ctx:u}),s.$set(f),(!r||d&2)&&ae(e,"showAll",u[1])},i(u){if(!r){for(let d=0;d<o.length;d+=1)B(a[d]);B(c),B(s.$$.fragment,u),r=!0}},o(u){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)U(a[d]);U(c),U(s.$$.fragment,u),r=!1},d(u){u&&N(e),vt(a,u),c&&c.d(),re(s)}}}function t1(n,e,t){let i;Y(n,St,d=>t(0,i=d));let s=!1,r=!1,o=!1;function a(d,f,p,_){p[_][0]=d}function l(d,f,p,_){p[_][1]=d}const c=d=>{if(cn(d),r)return;let f="";for(let[p,_]of Object.entries(Jt)){let b=p=="armor"?"":`
`,v=i[p];p=="armor"?v+=` (${Math.floor(v*.675+19.8)}% Reduction)`:p=="endurance"?v=v.toFixed(2)+"%":p=="ammoReturn"&&(v+="%"),(s||!s&&i[p])&&(f+=`${b}${_}: ${v}`)}navigator.clipboard.writeText(f),t(2,r=!0),setTimeout(()=>t(2,r=!1),1e3)},u=d=>t(1,s=d.detail);return n.$$.update=()=>{if(n.$$.dirty&1&&i){t(3,o=!1);for(let d in i)if(i[d]){t(3,o=!0);break}}},[i,s,r,o,a,l,c,u]}class n1 extends Ie{constructor(e){super(),Ce(this,e,t1,e1,pe,{})}}function i1(n){let e,t,i,s,r,o,a,l,c,u;return{c(){e=g("div"),t=g("button"),t.textContent="-",i=C(),s=g("input"),r=C(),o=g("b"),o.textContent="%",a=C(),l=g("button"),l.textContent="+",m(t,"id","decrease"),m(t,"class","svelte-f5qib2"),m(s,"type","number"),m(s,"placeholder","0"),m(s,"class","svelte-f5qib2"),m(o,"class","svelte-f5qib2"),m(l,"id","increase"),m(l,"class","svelte-f5qib2"),m(e,"class","svelte-f5qib2"),ae(e,"non-percent",!n[1])},m(d,f){D(d,e,f),h(e,t),h(e,i),h(e,s),xt(s,n[0]),h(e,r),h(e,o),h(e,a),h(e,l),c||(u=[A(t,"click",n[4]),A(s,"input",n[5]),A(s,"input",n[2]),A(l,"click",n[6])],c=!0)},p(d,[f]){f&1&&fu(s.value)!==d[0]&&xt(s,d[0])},i:Z,o:Z,d(d){d&&N(e),c=!1,be(u)}}}function s1(n,e,t){let{weaponName:i,value:s}=e,r=i!="Nature's Wrath Spellbook",o;r?(s=100,o=100):(s=4,o=4);function a(){s<0?t(0,s=0):s>o&&t(0,s=o),s%1!=0&&t(0,s=Math.floor(s))}const l=()=>{t(0,s--,s),a()};function c(){s=fu(this.value),t(0,s)}const u=()=>{t(0,s++,s),a()};return n.$$set=d=>{"weaponName"in d&&t(3,i=d.weaponName),"value"in d&&t(0,s=d.value)},[s,r,a,i,l,c,u]}class r1 extends Ie{constructor(e){super(),Ce(this,e,s1,i1,pe,{weaponName:3,value:0})}}function Xa(n,e,t){const i=n.slice();i[53]=e[t];const s=i[53].name.includes("Fantastic Beamstorm")?"~":"";i[23]=s;const r=i[24].includes(i[53].name);return i[54]=r,i}function o1(n){let e,t,i=n[2].description+"",s,r;return{c(){e=g("span"),t=ee('"'),s=ee(i),r=ee('"'),m(e,"id","toolDesc"),m(e,"class","svelte-12jhw87")},m(o,a){D(o,e,a),h(e,t),h(e,s),h(e,r)},p(o,a){a[0]&4&&i!==(i=o[2].description+"")&&ke(s,i)},d(o){o&&N(e)}}}function l1(n){let e,t,i,s=`${n[5]?"Type":n[3].name}:`,r,o,a=n[20],l,c,u,d,f,p=n[5]?"Return":"Expand",_,b,v,y,w=Za(n),k=n[4]&&$a(n);return{c(){e=g("button"),t=g("div"),i=g("span"),r=ee(s),o=C(),w.c(),c=C(),k&&k.c(),u=C(),d=g("span"),f=ee("("),_=ee(p),b=ee(")"),m(i,"class","svelte-12jhw87"),Ye(i,"font-size",Object.keys(n[21]).includes(n[3].name)?`calc(1rem * ${n[21][n[3].name]})`:""),m(t,"id",l=n[5]?"":"basic"),m(t,"class","svelte-12jhw87"),m(d,"class","tooltip svelte-12jhw87"),m(d,"id","top"),m(e,"class","gearPreview svelte-12jhw87"),Ye(e,"line-height",`${n[10]/6.5}px`)},m(S,P){D(S,e,P),h(e,t),h(t,i),h(i,r),h(t,o),w.m(t,null),h(e,c),k&&k.m(e,null),h(e,u),h(e,d),h(d,f),h(d,_),h(d,b),n[36](e),v||(y=A(e,"click",n[37]),v=!0)},p(S,P){P[0]&40&&s!==(s=`${S[5]?"Type":S[3].name}:`)&&ke(r,s),P[0]&2097160&&Ye(i,"font-size",Object.keys(S[21]).includes(S[3].name)?`calc(1rem * ${S[21][S[3].name]})`:""),P[0]&1048576&&pe(a,a=S[20])?(w.d(1),w=Za(S),w.c(),w.m(t,null)):w.p(S,P),P[0]&32&&l!==(l=S[5]?"":"basic")&&m(t,"id",l),S[4]?k?k.p(S,P):(k=$a(S),k.c(),k.m(e,u)):k&&(k.d(1),k=null),P[0]&32&&p!==(p=S[5]?"Return":"Expand")&&ke(_,p),P[0]&1024&&Ye(e,"line-height",`${S[10]/6.5}px`)},d(S){S&&N(e),w.d(S),k&&k.d(),n[36](null),v=!1,y()}}}function xa(n){let e;return{c(){e=g("iconify-icon"),Oe(e,"icon","codicon:sparkle-filled"),Oe(e,"class","svelte-12jhw87")},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function Za(n){let e,t,i=(n[5]?n[2].info.type.replace("/","<b>,</b><br/>"):n[26](n[3]))+"",s,r=!n[5]&&n[6].basic&&xa();return{c(){e=g("span"),t=new pu(!1),s=C(),r&&r.c(),t.a=s,m(e,"class","svelte-12jhw87")},m(o,a){D(o,e,a),t.m(i,e),h(e,s),r&&r.m(e,null)},p(o,a){a[0]&44&&i!==(i=(o[5]?o[2].info.type.replace("/","<b>,</b><br/>"):o[26](o[3]))+"")&&t.p(i),!o[5]&&o[6].basic?r||(r=xa(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&N(e),r&&r.d()}}}function $a(n){let e,t,i,s=`${n[5]?"Special":n[4].name.split(" (")[0]}:`,r,o,a,l=n[20],c,u=!n[5]&&ec(n),d=ic(n);return{c(){e=g("div"),t=g("span"),i=g("span"),r=ee(s),o=C(),u&&u.c(),a=C(),d.c(),m(i,"class","svelte-12jhw87"),m(t,"class","svelte-12jhw87"),Ye(t,"font-size",Object.keys(n[21]).includes(n[4].name)?`calc(1rem * ${n[21][n[4].name]})`:""),m(e,"id",c=n[5]?"":"special"),m(e,"class","svelte-12jhw87")},m(f,p){D(f,e,p),h(e,t),h(t,i),h(i,r),h(t,o),u&&u.m(t,null),h(e,a),d.m(e,null)},p(f,p){p[0]&48&&s!==(s=`${f[5]?"Special":f[4].name.split(" (")[0]}:`)&&ke(r,s),f[5]?u&&(u.d(1),u=null):u?u.p(f,p):(u=ec(f),u.c(),u.m(t,null)),p[0]&2097168&&Ye(t,"font-size",Object.keys(f[21]).includes(f[4].name)?`calc(1rem * ${f[21][f[4].name]})`:""),p[0]&1048576&&pe(l,l=f[20])?(d.d(1),d=ic(f),d.c(),d.m(e,null)):d.p(f,p),p[0]&32&&c!==(c=f[5]?"":"special")&&m(e,"id",c)},d(f){f&&N(e),u&&u.d(),d.d(f)}}}function ec(n){let e,t,i=n[4].cd+"",s,r;return{c(){e=g("span"),t=ee("("),s=ee(i),r=ee("s cd.)"),m(e,"id","cd"),m(e,"class","svelte-12jhw87")},m(o,a){D(o,e,a),h(e,t),h(e,s),h(e,r)},p(o,a){a[0]&16&&i!==(i=o[4].cd+"")&&ke(s,i)},d(o){o&&N(e)}}}function tc(n){let e,t;return{c(){e=g("span"),t=ee(n[23]),m(e,"id","prefix"),m(e,"class","svelte-12jhw87")},m(i,s){D(i,e,s),h(e,t)},p(i,s){s[0]&8388608&&ke(t,i[23])},d(i){i&&N(e)}}}function nc(n){let e;return{c(){e=g("iconify-icon"),Oe(e,"icon","codicon:sparkle-filled"),Oe(e,"class","svelte-12jhw87")},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function ic(n){let e,t,i=(n[5]?n[2].info.special:n[26](n[4]))+"",s,r,o=n[23]&&!n[5]&&tc(n),a=!n[5]&&n[6].special&&nc();return{c(){e=g("span"),o&&o.c(),t=C(),s=ee(i),r=C(),a&&a.c(),m(e,"class","svelte-12jhw87")},m(l,c){D(l,e,c),o&&o.m(e,null),h(e,t),h(e,s),h(e,r),a&&a.m(e,null)},p(l,c){l[23]&&!l[5]?o?o.p(l,c):(o=tc(l),o.c(),o.m(e,t)):o&&(o.d(1),o=null),c[0]&52&&i!==(i=(l[5]?l[2].info.special:l[26](l[4]))+"")&&ke(s,i),!l[5]&&l[6].special?a||(a=nc(),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(l){l&&N(e),o&&o.d(),a&&a.d()}}}function sc(n){let e,t,i,s,r,o,a=n[2].name+"",l,c,u,d,f,p;return{c(){e=g("button"),t=g("img"),r=C(),o=g("span"),l=ee(a),et(t.src,i=n[2].image)||m(t,"src",i),m(t,"alt",s=n[2].name),m(t,"draggable","false"),m(t,"class","svelte-12jhw87"),m(o,"class","tooltip svelte-12jhw87"),m(o,"id",c=n[19].screenshot.ongoing?"right":"top"),m(e,"class","svelte-12jhw87"),Ye(e,"display",n[2].link?"":"none"),Ye(e,"border-radius",n[2].tool?"calc(1rem)":"")},m(_,b){D(_,e,b),h(e,t),h(e,r),h(e,o),h(o,l),d=!0,f||(p=A(e,"click",n[38]),f=!0)},p(_,b){(!d||b[0]&4&&!et(t.src,i=_[2].image))&&m(t,"src",i),(!d||b[0]&4&&s!==(s=_[2].name))&&m(t,"alt",s),(!d||b[0]&4)&&a!==(a=_[2].name+"")&&ke(l,a),(!d||b[0]&524288&&c!==(c=_[19].screenshot.ongoing?"right":"top"))&&m(o,"id",c),b[0]&4&&Ye(e,"display",_[2].link?"":"none"),b[0]&4&&Ye(e,"border-radius",_[2].tool?"calc(1rem)":"")},i(_){d||(_&&ye(()=>{d&&(u||(u=he(e,Ze,{duration:150},!0)),u.run(1))}),d=!0)},o(_){_&&(u||(u=he(e,Ze,{duration:150},!1)),u.run(0)),d=!1},d(_){_&&N(e),_&&u&&u.end(),f=!1,p()}}}function rc(n){let e,t,i,s,r,o,a,l,c,u;i=new wt({props:{text:"Toggle base values",checked:n[16]}}),i.$on("toggle",n[47]),r=new wt({props:{text:"Eyeball of Reckoning buff",checked:n[17]}}),r.$on("toggle",n[48]);let d=Re(n[2].moves),f=[];for(let _=0;_<d.length;_+=1)f[_]=uc(Xa(n,d,_));const p=_=>U(f[_],1,1,()=>{f[_]=null});return{c(){e=g("div"),t=g("div"),oe(i.$$.fragment),s=C(),oe(r.$$.fragment),o=C(),a=g("div");for(let _=0;_<f.length;_+=1)f[_].c();m(t,"class","weaponToggles svelte-12jhw87"),m(a,"class","weaponMoves svelte-12jhw87"),m(e,"class","fullWeaponView svelte-12jhw87")},m(_,b){D(_,e,b),h(e,t),se(i,t,null),h(t,s),se(r,t,null),h(e,o),h(e,a);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(a,null);u=!0},p(_,b){const v={};b[0]&65536&&(v.checked=_[16]),i.$set(v);const y={};if(b[0]&131072&&(y.checked=_[17]),r.$set(y),b[0]&219611268){d=Re(_[2].moves);let w;for(w=0;w<d.length;w+=1){const k=Xa(_,d,w);f[w]?(f[w].p(k,b),B(f[w],1)):(f[w]=uc(k),f[w].c(),B(f[w],1),f[w].m(a,null))}for(je(),w=d.length;w<f.length;w+=1)p(w);Ve()}},i(_){if(!u){B(i.$$.fragment,_),B(r.$$.fragment,_);for(let b=0;b<d.length;b+=1)B(f[b]);_&&ye(()=>{u&&(c&&c.end(1),l=go(e,Ze,{duration:150,delay:300}),l.start())}),u=!0}},o(_){U(i.$$.fragment,_),U(r.$$.fragment,_),f=f.filter(Boolean);for(let b=0;b<f.length;b+=1)U(f[b]);l&&l.invalidate(),_&&(c=bo(e,Ze,{duration:150})),u=!1},d(_){_&&N(e),re(i),re(r),vt(f,_),_&&c&&c.end()}}}function oc(n){let e,t,i,s;function r(l){n[49](l)}function o(l){n[50](l)}let a={};return n[7]!==void 0&&(a.value=n[7]),n[2].name!==void 0&&(a.weaponName=n[2].name),e=new r1({props:a}),ce.push(()=>Be(e,"value",r)),ce.push(()=>Be(e,"weaponName",o)),{c(){oe(e.$$.fragment)},m(l,c){se(e,l,c),s=!0},p(l,c){const u={};!t&&c[0]&128&&(t=!0,u.value=l[7],Fe(()=>t=!1)),!i&&c[0]&4&&(i=!0,u.weaponName=l[2].name,Fe(()=>i=!1)),e.$set(u)},i(l){s||(B(e.$$.fragment,l),s=!0)},o(l){U(e.$$.fragment,l),s=!1},d(l){re(e,l)}}}function lc(n){let e,t,i=n[53].cd+"",s,r;return{c(){e=g("span"),t=ee("("),s=ee(i),r=ee("s cd.)"),m(e,"id","cd"),m(e,"class","svelte-12jhw87")},m(o,a){D(o,e,a),h(e,t),h(e,s),h(e,r)},p(o,a){a[0]&4&&i!==(i=o[53].cd+"")&&ke(s,i)},d(o){o&&N(e)}}}function ac(n){let e;return{c(){e=g("iconify-icon"),Oe(e,"icon","codicon:sparkle-filled"),Oe(e,"class","svelte-12jhw87")},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function cc(n){let e,t=n[23]+(n[16]&&!n[54]?n[53].base:n[54]?n[27](n[53]):n[26](n[53]))+"",i,s,r=n[18][n[53].name]&&!n[16]&&ac();return{c(){e=g("span"),i=ee(t),s=C(),r&&r.c(),m(e,"class","svelte-12jhw87")},m(o,a){D(o,e,a),h(e,i),h(e,s),r&&r.m(e,null)},p(o,a){a[0]&65540&&t!==(t=o[23]+(o[16]&&!o[54]?o[53].base:o[54]?o[27](o[53]):o[26](o[53]))+"")&&ke(i,t),o[18][o[53].name]&&!o[16]?r||(r=ac(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&N(e),r&&r.d()}}}function uc(n){let e,t,i,s,r,o=(n[54]&&n[2].name=="Nature's Wrath Spellbook"?n[53].name.replace("Charged","Charge(s)"):n[53].name)+":",a,l,c,u=n[54]?[n[20],n[7],n[17]]:[n[20],n[17]],d,f,p=n[54]&&oc(n),_=n[53].special&&lc(n),b=cc(n);return{c(){e=g("div"),t=g("div"),i=g("span"),s=g("span"),p&&p.c(),r=C(),a=ee(o),l=C(),_&&_.c(),c=C(),b.c(),d=C(),m(s,"class","flex fd-col svelte-12jhw87"),m(i,"class","flex fd-col ai-center svelte-12jhw87"),m(t,"class","ff-border svelte-12jhw87"),m(e,"class","svelte-12jhw87")},m(v,y){D(v,e,y),h(e,t),h(t,i),h(i,s),p&&p.m(s,null),h(s,r),h(s,a),h(i,l),_&&_.m(i,null),h(t,c),b.m(t,null),h(e,d),f=!0},p(v,y){v[54]?p?(p.p(v,y),y[0]&4&&B(p,1)):(p=oc(v),p.c(),B(p,1),p.m(s,r)):p&&(je(),U(p,1,1,()=>{p=null}),Ve()),(!f||y[0]&4)&&o!==(o=(v[54]&&v[2].name=="Nature's Wrath Spellbook"?v[53].name.replace("Charged","Charge(s)"):v[53].name)+":")&&ke(a,o),v[53].special?_?_.p(v,y):(_=lc(v),_.c(),_.m(i,null)):_&&(_.d(1),_=null),y[0]&1179780&&pe(u,u=v[54]?[v[20],v[7],v[17]]:[v[20],v[17]])?(b.d(1),b=cc(v),b.c(),b.m(t,null)):b.p(v,y)},i(v){f||(B(p),f=!0)},o(v){U(p),f=!1},d(v){v&&N(e),p&&p.d(),_&&_.d(),b.d(v)}}}function a1(n){let e,t,i,s,r="Gear"+(n[19].screenshot.ongoing?":":""),o,a,l,c,u,d=n[2],f,p,_,b,v,y,w,k,S,P,W,O;function L(F,Q){if(F[2].name&&!F[2].tool)return l1;if(F[2].tool)return o1}let R=L(n),G=R&&R(n),M=sc(n);function E(F){n[42](F)}function H(F){n[43](F)}function V(F){n[44](F)}let j={slotName:n[0],index:n[1]};n[14]!==void 0&&(j.slotOpen=n[14]),n[5]!==void 0&&(j.weaponExpand=n[5]),n[15]!==void 0&&(j.optionsOpen=n[15]),b=new bl({props:j}),ce.push(()=>Be(b,"slotOpen",E)),ce.push(()=>Be(b,"weaponExpand",H)),ce.push(()=>Be(b,"optionsOpen",V)),b.$on("itemSelect",n[45]),b.$on("toolSelect",n[28]);let T=n[5]&&rc(n);return{c(){e=g("div"),t=g("button"),i=g("iconify-icon"),s=C(),o=ee(r),a=C(),l=g("div"),G&&G.c(),c=C(),u=g("div"),M.c(),_=C(),oe(b.$$.fragment),k=C(),T&&T.c(),S=mt(),Oe(i,"icon","iconamoon:arrow-down-2-fill"),Oe(i,"class","svelte-12jhw87"),m(t,"class","ddButton svelte-12jhw87"),m(u,"class","gearSlotIcon svelte-12jhw87"),ye(()=>n[39].call(u)),Ye(u,"min-width",`${n[11]}px`),m(l,"class","gearInfoCont ff-border svelte-12jhw87"),ye(()=>n[41].call(l)),Ye(l,"justify-content",n[2].name?"":"flex-end"),m(e,"class","gearSlot svelte-12jhw87"),ae(e,"slotOpen",n[14]),ae(e,"weapon-expand",n[5])},m(F,Q){D(F,e,Q),h(e,t),h(t,i),h(t,s),h(t,o),n[34](t),h(e,a),h(e,l),G&&G.m(l,null),h(l,c),h(l,u),M.m(u,null),f=An(u,n[39].bind(u)),n[40](l),p=An(l,n[41].bind(l)),h(e,_),se(b,e,null),n[46](e),D(F,k,Q),T&&T.m(F,Q),D(F,S,Q),P=!0,W||(O=[A(window,"mousedown",n[32]),A(window,"keydown",n[33]),A(t,"click",n[35])],W=!0)},p(F,Q){(!P||Q[0]&524288)&&r!==(r="Gear"+(F[19].screenshot.ongoing?":":""))&&ke(o,r),R===(R=L(F))&&G?G.p(F,Q):(G&&G.d(1),G=R&&R(F),G&&(G.c(),G.m(l,c))),Q[0]&4&&pe(d,d=F[2])?(je(),U(M,1,1,Z),Ve(),M=sc(F),M.c(),B(M,1),M.m(u,null)):M.p(F,Q),Q[0]&2048&&Ye(u,"min-width",`${F[11]}px`),Q[0]&4&&Ye(l,"justify-content",F[2].name?"":"flex-end");const te={};Q[0]&1&&(te.slotName=F[0]),Q[0]&2&&(te.index=F[1]),!v&&Q[0]&16384&&(v=!0,te.slotOpen=F[14],Fe(()=>v=!1)),!y&&Q[0]&32&&(y=!0,te.weaponExpand=F[5],Fe(()=>y=!1)),!w&&Q[0]&32768&&(w=!0,te.optionsOpen=F[15],Fe(()=>w=!1)),b.$set(te),(!P||Q[0]&16384)&&ae(e,"slotOpen",F[14]),(!P||Q[0]&32)&&ae(e,"weapon-expand",F[5]),F[5]?T?(T.p(F,Q),Q[0]&32&&B(T,1)):(T=rc(F),T.c(),B(T,1),T.m(S.parentNode,S)):T&&(je(),U(T,1,1,()=>{T=null}),Ve())},i(F){P||(B(M),B(b.$$.fragment,F),B(T),P=!0)},o(F){U(M),U(b.$$.fragment,F),U(T),P=!1},d(F){F&&(N(e),N(k),N(S)),n[34](null),G&&G.d(),M.d(F),f(),n[40](null),p(),re(b),n[46](null),T&&T.d(F),W=!1,be(O)}}}function c1(n,e,t){let i,s,r,o,a,l,c;Y(n,ui,J=>t(30,i=J)),Y(n,nn,J=>t(31,s=J)),Y(n,Yt,J=>t(51,r=J)),Y(n,X,J=>t(19,o=J)),Y(n,St,J=>t(20,a=J)),Y(n,Tr,J=>t(21,l=J)),Y(n,Gn,J=>t(22,c=J));let{gearBox:u,slotName:d,index:f}=e,p,_,b,v,y,w,k,S=Er,P,W,O,L,R,G=!1,M=!1,E="",H=["Charged Basic Attack","Charged Solar Beam"],V={basic:!1,special:!1},j={};function T(){if(k)for(let J of k.querySelectorAll(".gearPreview > div")){if(Object.keys(l).includes(J.id=="basic"?P.name:W?W.name:null))return;let Le=uy(J,c);Le&&(J.id=="basic"?z(Tr,l[P.name]=Le,l):z(Tr,l[W.name]=Le,l))}}function F(J){let Le;if(J.name=="Void Needle")Le=J.base+a[J.type]-a.armor*5.625;else if(S.name=="Pureblood Dagger"){let tt,ot={magicDmg:a.magicDmg,meleeDmg:a.meleeDmg,rangedDmg:a.rangedDmg},lt=Object.keys(ot).reduce((nt,Pt)=>ot[nt]>ot[Pt]?nt:Pt),Ot=0;for(let nt in ot)nt!=lt&&(Ot+=ot[nt]);tt=a[lt]*2-Ot,Le=J.base+(J.name.includes("HP")?tt/2:tt)}else if(J.type.includes("/")){let tt=J.type.split("/"),ot=0;for(let lt of tt)ot+=a[lt]*J[`${lt}Mult`];Le=J.base+ot}else Le=J.base+a[J.type]*J.mult;return M&&(!J.name.includes("HP")||J.name.includes("HP")&&S.name=="Pureblood Dagger")&&(Le+=Le*.08775),R?Math.floor(Le*10)/10:Math.floor(Le)}function Q(J){let Le,tt=G?0:a[J.type];return S.name=="Celestial Powers Spellbook"?Le=(80+tt*1.1)*(.8+2.2*p/100):S.name=="Staff of Dreams"?Le=160+160*p/100+tt*(.4+1.3*p/100):S.name=="Nature's Wrath Spellbook"&&(Le=260+400*p/4+tt*(1+1.5*p/4)),M&&(Le+=Le*.08775),Math.floor(Le*10)/10}function te(){o.screenshot.ongoing||(t(16,G=!1),t(17,M=!1),R?(t(5,R=!1),u.classList.remove("weapon-expand"),setTimeout(T)):(u.classList.add("weapon-expand"),t(5,R=!0)))}function ne(J,Le){e:for(let tt in i){let ot=r.bonuses.find(Ot=>Ot.name==tt).stats,lt=J?J.type:null;for(let Ot in Jt){if(lt===null)break e;if(S.name=="Void Spike Ultradagger"&&Le=="special"||J.name=="Void Needle"?lt="armor/meleeDmg":S.name=="Pureblood Dagger"?lt=tt=="Fish of Rage"?"":"magicDmg/meleeDmg/rangedDmg":S.name=="Gnome Rocket Launcher"&&(lt=""),i[tt]&&ot[Ot]!=0&&lt.includes(Ot)){t(18,j[J.name]=!0,j),Le&&t(6,V[Le]=!0,V);break e}else t(18,j[J.name]=!1,j),Le&&t(6,V[Le]=!1,V)}}}const ie=J=>{(!_.contains(J.target)&&!c||_.contains(J.target)&&b.contains(J.target))&&(t(14,O=!1),t(15,L=!1))},le=J=>{J.key=="Escape"&&(t(14,O=!1),t(15,L=!1))};function ue(J){ce[J?"unshift":"push"](()=>{w=J,t(12,w)})}const q=()=>{o.screenshot.ongoing||t(14,O=!O)};function x(J){ce[J?"unshift":"push"](()=>{k=J,t(13,k)})}const we=J=>{cn(J),te()},Ee=()=>{c||(z(X,o.item.ongoing=!0,o),z(X,o.item.data={...S,type:"gear"},o))};function Ae(){y=this.offsetHeight,t(11,y)}function Ue(J){ce[J?"unshift":"push"](()=>{b=J,t(9,b)})}function qe(){v=this.offsetHeight,t(10,v)}function Pe(J){O=J,t(14,O)}function Me(J){R=J,t(5,R)}function fe(J){L=J,t(15,L)}const We=()=>{setTimeout(()=>{T(),(!S.name||S.tool)&&R&&te(),t(15,L=!1)})};function st(J){ce[J?"unshift":"push"](()=>{_=J,t(8,_)})}const Ut=J=>{t(16,G=J.detail),J.detail&&t(17,M=!1)},qt=J=>{t(17,M=J.detail),J.detail&&t(16,G=!1)};function de(J){p=J,t(7,p)}function Ht(J){n.$$.not_equal(S.name,J)&&(S.name=J,t(2,S),t(31,s),t(1,f),t(4,W))}return n.$$set=J=>{"gearBox"in J&&t(29,u=J.gearBox),"slotName"in J&&t(0,d=J.slotName),"index"in J&&t(1,f=J.index)},n.$$.update=()=>{if(n.$$.dirty[0]&22|n.$$.dirty[1]&1&&s[f]&&s[f].name!=S.name&&(t(2,S=s[f]),!S.tool&&S.name)){t(3,P=S.moves.filter(J=>J.basic)[0]),t(4,W=S.moves.filter(J=>J.special)[0]),t(18,j={});for(let J of S.moves)t(18,j[J.name]=!1,j),ne(J);W&&W.name.includes("Fantastic Beamstorm")?t(23,E="~"):t(23,E="")}if(n.$$.dirty[0]&1073741948&&(i||R)&&!S.tool&&S.name){for(let J in V)ne(J=="basic"?P:W||null,J);for(let J of S.moves)ne(J)}},[d,f,S,P,W,R,V,p,_,b,v,y,w,k,O,L,G,M,j,o,a,l,c,E,H,T,F,Q,te,u,i,s,ie,le,ue,q,x,we,Ee,Ae,Ue,qe,Pe,Me,fe,We,st,Ut,qt,de,Ht]}class u1 extends Ie{constructor(e){super(),Ce(this,e,c1,a1,pe,{gearBox:29,slotName:0,index:1},null,[-1,-1])}}function dc(n,e,t){const i=n.slice();return i[3]=e[t],i}function fc(n){let e,t,i;function s(o){n[1](o)}let r={slotName:"gear",index:n[3]};return n[0]!==void 0&&(r.gearBox=n[0]),e=new u1({props:r}),ce.push(()=>Be(e,"gearBox",s)),{c(){oe(e.$$.fragment)},m(o,a){se(e,o,a),i=!0},p(o,a){const l={};!t&&a&1&&(t=!0,l.gearBox=o[0],Fe(()=>t=!1)),e.$set(l)},i(o){i||(B(e.$$.fragment,o),i=!0)},o(o){U(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function d1(n){let e,t,i=Re(Zn),s=[];for(let o=0;o<i.length;o+=1)s[o]=fc(dc(n,i,o));const r=o=>U(s[o],1,1,()=>{s[o]=null});return{c(){e=g("div");for(let o=0;o<s.length;o+=1)s[o].c();m(e,"class","gearBox svelte-oyqozi")},m(o,a){D(o,e,a);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null);n[2](e),t=!0},p(o,[a]){if(a&1){i=Re(Zn);let l;for(l=0;l<i.length;l+=1){const c=dc(o,i,l);s[l]?(s[l].p(c,a),B(s[l],1)):(s[l]=fc(c),s[l].c(),B(s[l],1),s[l].m(e,null))}for(je(),l=i.length;l<s.length;l+=1)r(l);Ve()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)B(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)U(s[a]);t=!1},d(o){o&&N(e),vt(s,o),n[2](null)}}}function f1(n,e,t){let i;function s(o){i=o,t(0,i)}function r(o){ce[o?"unshift":"push"](()=>{i=o,t(0,i)})}return[i,s,r]}class h1 extends Ie{constructor(e){super(),Ce(this,e,f1,d1,pe,{})}}function p1(n){let e,t,i,s,r,o,a,l;return{c(){e=g("div"),t=g("div"),i=g("button"),i.textContent="Clear armor",s=C(),r=g("div"),o=g("button"),o.textContent="Clear gear",m(i,"class","svelte-5d0uid"),m(t,"class","buttonCont svelte-5d0uid"),m(o,"class","svelte-5d0uid"),m(r,"class","buttonCont svelte-5d0uid"),m(e,"class","mainFeatures svelte-5d0uid"),m(e,"id","box")},m(c,u){D(c,e,u),h(e,t),h(t,i),h(e,s),h(e,r),h(r,o),a||(l=[A(i,"click",n[3]),A(o,"click",n[4])],a=!0)},p:Z,i:Z,o:Z,d(c){c&&N(e),a=!1,be(l)}}}function _1(n,e,t){let i,s,r,o,a;Y(n,nn,f=>t(5,i=f)),Y(n,gi,f=>t(6,s=f)),Y(n,Qt,f=>t(7,r=f)),Y(n,mi,f=>t(8,o=f)),Y(n,Gn,f=>t(0,a=f));function l(){for(let f in r)r[f].name&&o[f][r[f].name].querySelector("button").click()}function c(){for(let f in i)i[f].name&&s[f][i[f].name].querySelector("button").click()}return[a,l,c,f=>{f.target.blur(),a||l()},f=>{f.target.blur(),a||c()}]}class m1 extends Ie{constructor(e){super(),Ce(this,e,_1,p1,pe,{})}}function hc(n){let e,t,i=`${n[1]}rem`,s,r=`${n[1]/4}rem`,o=n[0]&&pc(n);return{c(){e=g("span"),t=g("iconify-icon"),s=C(),o&&o.c(),Oe(t,"icon","material-symbols:lock"),Ye(t,"font-size",i),m(e,"class","lockedNotice flex fd-col jc-center ai-center rg-1 svelte-13zu3gt"),Ye(e,"padding",r)},m(a,l){D(a,e,l),h(e,t),h(e,s),o&&o.m(e,null)},p(a,l){l&2&&i!==(i=`${a[1]}rem`)&&Ye(t,"font-size",i),a[0]?o?o.p(a,l):(o=pc(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null),l&2&&r!==(r=`${a[1]/4}rem`)&&Ye(e,"padding",r)},d(a){a&&N(e),o&&o.d()}}}function pc(n){let e,t=`${n[1]*.4}rem`;return{c(){e=g("span"),e.textContent="You must be logged in to access this feature",Ye(e,"font-size",t)},m(i,s){D(i,e,s)},p(i,s){s&2&&t!==(t=`${i[1]*.4}rem`)&&Ye(e,"font-size",t)},d(i){i&&N(e)}}}function g1(n){let e=!Ki(n[2]),t,i=e&&hc(n);return{c(){i&&i.c(),t=mt()},m(s,r){i&&i.m(s,r),D(s,t,r)},p(s,[r]){r&4&&(e=!Ki(s[2])),e?i?i.p(s,r):(i=hc(s),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:Z,o:Z,d(s){s&&N(t),i&&i.d(s)}}}function b1(n,e,t){let i;Y(n,Vr,o=>t(2,i=o));let{text:s=!0,size:r=10}=e;return n.$$set=o=>{"text"in o&&t(0,s=o.text),"size"in o&&t(1,r=o.size)},[s,r,i]}class v1 extends Ie{constructor(e){super(),Ce(this,e,b1,g1,pe,{text:0,size:1})}}function _c(n){let e,t,i;function s(o){n[3](o)}let r={slotName:"sets"};return n[0]!==void 0&&(r.slotOpen=n[0]),e=new bl({props:r}),ce.push(()=>Be(e,"slotOpen",s)),{c(){oe(e.$$.fragment)},m(o,a){se(e,o,a),i=!0},p(o,a){const l={};!t&&a&1&&(t=!0,l.slotOpen=o[0],Fe(()=>t=!1)),e.$set(l)},i(o){i||(B(e.$$.fragment,o),i=!0)},o(o){U(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function y1(n){let e,t,i,s,r,o,a=n[1].head&&n[1].body&&n[1].legs&&n[1].feet&&_c(n);return{c(){e=g("button"),e.innerHTML=`Load armor set
    <iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="180deg" class="svelte-l9dczq"></iconify-icon>`,t=C(),a&&a.c(),i=mt(),m(e,"class","svelte-l9dczq"),ae(e,"ddOpen",n[0])},m(l,c){D(l,e,c),D(l,t,c),a&&a.m(l,c),D(l,i,c),s=!0,r||(o=A(e,"click",n[2]),r=!0)},p(l,[c]){(!s||c&1)&&ae(e,"ddOpen",l[0]),l[1].head&&l[1].body&&l[1].legs&&l[1].feet?a?(a.p(l,c),c&2&&B(a,1)):(a=_c(l),a.c(),B(a,1),a.m(i.parentNode,i)):a&&(je(),U(a,1,1,()=>{a=null}),Ve())},i(l){s||(B(a),s=!0)},o(l){U(a),s=!1},d(l){l&&(N(e),N(t),N(i)),a&&a.d(l),r=!1,o()}}}function w1(n,e,t){let i;Y(n,Yt,a=>t(1,i=a));let{ddOpen:s=!1}=e;const r=()=>t(0,s=!s);function o(a){s=a,t(0,s)}return n.$$set=a=>{"ddOpen"in a&&t(0,s=a.ddOpen)},[s,i,r,o]}class k1 extends Ie{constructor(e){super(),Ce(this,e,w1,y1,pe,{ddOpen:0})}}function C1(n){let e;return{c(){e=g("span"),e.textContent="Create some builds to get started!",m(e,"class","tooltip svelte-1cwaghb"),m(e,"id","top"),Ye(e,"left","70.5%")},m(t,i){D(t,e,i)},p:Z,d(t){t&&N(e)}}}function I1(n){let e,t=n[4]?"Select some gear or armor to get started!":"You must be logged in to access these features",i;return{c(){e=g("span"),i=ee(t),m(e,"class","tooltip svelte-1cwaghb"),m(e,"id","top"),Ye(e,"left",n[3]?"38%":"")},m(s,r){D(s,e,r),h(e,i)},p(s,r){r&16&&t!==(t=s[4]?"Select some gear or armor to get started!":"You must be logged in to access these features")&&ke(i,t),r&8&&Ye(e,"left",s[3]?"38%":"")},d(s){s&&N(e)}}}function E1(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v,y,w,k,S,P,W,O,L,R,G,M,E,H,V;function j(ne,ie){if(!ne[5])return I1;if(!ne[3])return C1}let T=j(n),F=T&&T(n);k=new v1({props:{size:7,text:!1}});function Q(ne){n[19](ne)}let te={};return n[1]!==void 0&&(te.ddOpen=n[1]),G=new k1({props:te}),ce.push(()=>Be(G,"ddOpen",Q)),{c(){e=g("div"),t=g("div"),i=g("div"),s=g("button"),r=ee("Export new build"),a=C(),l=g("div"),c=g("button"),u=ee("Save to build"),f=C(),p=g("div"),_=g("button"),b=ee("Delete build"),y=C(),F&&F.c(),w=C(),oe(k.$$.fragment),S=C(),P=g("div"),W=g("div"),O=g("button"),O.textContent="Load build",L=C(),R=g("div"),oe(G.$$.fragment),s.disabled=o=!n[4]||!n[5],m(s,"class","svelte-1cwaghb"),m(i,"class","buttonCont svelte-1cwaghb"),c.disabled=d=!n[4]||!n[5]||!n[3],m(c,"class","svelte-1cwaghb"),m(l,"class","buttonCont svelte-1cwaghb"),m(l,"id","middle"),_.disabled=v=!n[4]||!n[3],m(_,"class","svelte-1cwaghb"),m(p,"class","buttonCont svelte-1cwaghb"),m(t,"class","posrel svelte-1cwaghb"),m(t,"id","modify"),ae(t,"no-tooltip",n[2]),m(O,"class","svelte-1cwaghb"),m(W,"class","buttonCont svelte-1cwaghb"),m(R,"class","buttonCont svelte-1cwaghb"),m(P,"id","load"),m(P,"class","svelte-1cwaghb"),m(e,"class","mainFeatures svelte-1cwaghb"),m(e,"id","build")},m(ne,ie){D(ne,e,ie),h(e,t),h(t,i),h(i,s),h(s,r),h(t,a),h(t,l),h(l,c),h(c,u),h(t,f),h(t,p),h(p,_),h(_,b),h(t,y),F&&F.m(t,null),h(t,w),se(k,t,null),h(e,S),h(e,P),h(P,W),h(W,O),h(P,L),h(P,R),se(G,R,null),n[20](R),E=!0,H||(V=[A(window,"mousedown",n[9]),A(window,"keydown",n[10]),A(s,"click",n[11]),A(s,"mouseenter",n[12]),A(s,"mouseleave",n[13]),A(c,"click",n[14]),A(_,"click",n[15]),A(_,"mouseenter",n[16]),A(_,"mouseleave",n[17]),A(O,"click",n[18])],H=!0)},p(ne,[ie]){(!E||ie&48&&o!==(o=!ne[4]||!ne[5]))&&(s.disabled=o),(!E||ie&56&&d!==(d=!ne[4]||!ne[5]||!ne[3]))&&(c.disabled=d),(!E||ie&24&&v!==(v=!ne[4]||!ne[3]))&&(_.disabled=v),T===(T=j(ne))&&F?F.p(ne,ie):(F&&F.d(1),F=T&&T(ne),F&&(F.c(),F.m(t,w))),(!E||ie&4)&&ae(t,"no-tooltip",ne[2]);const le={};!M&&ie&2&&(M=!0,le.ddOpen=ne[1],Fe(()=>M=!1)),G.$set(le)},i(ne){E||(B(k.$$.fragment,ne),B(G.$$.fragment,ne),E=!0)},o(ne){U(k.$$.fragment,ne),U(G.$$.fragment,ne),E=!1},d(ne){ne&&N(e),F&&F.d(),re(k),re(G),n[20](null),H=!1,be(V)}}}function S1(n,e,t){let i,s,r,o,a,l;Y(n,Wt,L=>t(8,i=L)),Y(n,In,L=>t(3,s=L)),Y(n,Ps,L=>t(4,r=L)),Y(n,Ms,L=>t(5,o=L)),Y(n,Gn,L=>t(6,a=L)),Y(n,X,L=>t(7,l=L));let c,u=!1,d=!1;const f=L=>{c.contains(L.target)||t(1,u=!1)},p=L=>{L.key=="Escape"&&t(1,u=!1)},_=()=>{r&&o&&!a&&z(X,l.export.ongoing=!0,l)},b=()=>t(2,d=!0),v=()=>t(2,d=!1),y=()=>{r&&o&&s&&!a&&z(X,l.save.ongoing=!0,l)},w=()=>{r&&s&&!a&&z(X,l.delete.ongoing=!0,l)},k=()=>t(2,d=!0),S=()=>t(2,d=!1),P=()=>{a||z(X,l.load.ongoing=!0,l)};function W(L){u=L,t(1,u)}function O(L){ce[L?"unshift":"push"](()=>{c=L,t(0,c)})}return n.$$.update=()=>{n.$$.dirty&256&&z(In,s=Object.keys(i).length>0,s)},[c,u,d,s,r,o,a,l,i,f,p,_,b,v,y,w,k,S,P,W,O]}class T1 extends Ie{constructor(e){super(),Ce(this,e,S1,E1,pe,{})}}function mc(n){let e;return{c(){e=g("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function N1(n){let e,t,i,s,r,o,a,l=25-n[3].length+"",c,u,d,f,p,_,b,v,y,w,k,S=275-n[4].length+"",P,W,O,L,R,G,M,E,H,V,j,T,F,Q,te,ne,ie=(n[3]||n[4])&&mc();return{c(){e=g("div"),t=g("div"),i=ee(`Name:\r
        `),s=g("input"),o=C(),a=g("span"),c=ee(l),u=C(),d=g("div"),f=g("div"),p=g("span"),p.textContent="Description / Notes:",_=C(),ie&&ie.c(),b=C(),v=g("textarea"),w=C(),k=g("span"),P=ee(S),W=C(),O=g("div"),L=g("div"),R=g("button"),G=ee("CANCEL"),E=C(),H=g("div"),V=g("button"),j=ee("EXPORT"),m(s,"class","buildNameInput"),m(s,"id","firstFocusable"),s.disabled=r=n[5].export.status==0,m(s,"type","text"),m(s,"placeholder",n[6]),m(s,"maxlength","25"),m(a,"class","charCounter svelte-9d2eec"),m(a,"id","buildName"),m(t,"class","buildNameCont svelte-9d2eec"),m(v,"class","buildDescInput"),v.disabled=y=n[5].export.status==0,m(v,"placeholder","[Empty]"),m(v,"maxlength","275"),m(v,"autocomplete","off"),m(k,"class","charCounter"),m(k,"id","buildDesc"),m(d,"class","buildDescCont"),R.disabled=M=n[5].export.status==0,m(V,"id","lastFocusable"),V.disabled=T=n[5].export.status==0,m(O,"class","promptOptions"),m(e,"class","buildExporter svelte-9d2eec")},m(le,ue){D(le,e,ue),h(e,t),h(t,i),h(t,s),n[8](s),xt(s,n[3]),h(t,o),h(t,a),h(a,c),h(e,u),h(e,d),h(d,f),h(f,p),h(f,_),ie&&ie.m(f,null),h(d,b),h(d,v),xt(v,n[4]),n[13](v),h(d,w),h(d,k),h(k,P),h(e,W),h(e,O),h(O,L),h(L,R),h(R,G),n[16](R),h(O,E),h(O,H),h(H,V),h(V,j),Q=!0,te||(ne=[A(s,"input",n[9]),A(s,"input",n[10]),A(s,"keydown",n[11]),A(v,"input",n[12]),A(v,"input",n[14]),A(v,"keydown",n[15]),A(R,"click",n[17]),A(V,"click",n[18]),A(V,"keydown",It),A(e,"introstart",n[19])],te=!0)},p(le,[ue]){(!Q||ue&32&&r!==(r=le[5].export.status==0))&&(s.disabled=r),ue&8&&s.value!==le[3]&&xt(s,le[3]),(!Q||ue&8)&&l!==(l=25-le[3].length+"")&&ke(c,l),le[3]||le[4]?ie||(ie=mc(),ie.c(),ie.m(f,null)):ie&&(ie.d(1),ie=null),(!Q||ue&32&&y!==(y=le[5].export.status==0))&&(v.disabled=y),ue&16&&xt(v,le[4]),(!Q||ue&16)&&S!==(S=275-le[4].length+"")&&ke(P,S),(!Q||ue&32&&M!==(M=le[5].export.status==0))&&(R.disabled=M),(!Q||ue&32&&T!==(T=le[5].export.status==0))&&(V.disabled=T)},i(le){Q||(le&&ye(()=>{Q&&(F||(F=he(e,ze,{duration:250},!0)),F.run(1))}),Q=!0)},o(le){le&&(F||(F=he(e,ze,{duration:250},!1)),F.run(0)),Q=!1},d(le){le&&N(e),n[8](null),ie&&ie.d(),n[13](null),n[16](null),le&&F&&F.end(),te=!1,be(ne)}}}function O1(n,e,t){let i,s,r,o,a,l,c;Y(n,X,V=>t(5,i=V)),Y(n,Bt,V=>t(20,s=V)),Y(n,In,V=>t(21,r=V)),Y(n,_i,V=>t(22,o=V)),Y(n,nn,V=>t(23,a=V)),Y(n,Qt,V=>t(24,l=V)),Y(n,Wt,V=>t(25,c=V));let u=Object.keys(c).length,d,f,p,_="",b="",v=`My ${u+1+Af[(u+1)%10]} build`;function y(){if(z(X,i.export.status=0,i),_.endsWith(" ")&&t(3,_=_.replace(/  +/g," ").replace(/ $/,"")),b.endsWith(" ")&&t(4,b=b.replace(/  +/g," ").replace(/ $/,"")),Object.keys(c).includes(_)){z(X,i.export.status=-1,i),z(X,i.message="duplicate_name",i);return}let V=Kv(pn(tn(Ii),"builds")).key,j=Mf(l,a);j.name=_||v,j.desc=b||"[Empty]",Ci(tn(Cr,`${o}/siteData/calculator/builds/${V}`),j),Ci(pn(tn(Ii),`builds/${V}`),j).then(()=>{z(X,i.export.status=1,i),z(In,r=!0,r),gl(),Wt.update(T=>({...T,[j.name]:{...j,id:V}})),z(Bt,s=j,s),z(Bt,s.id=V,s),navigator.clipboard.writeText(`${location.origin+location.pathname}?id=${V}`)}).catch(()=>{z(X,i.export.status=-1,i),z(X,i.message="firebase_fail",i)})}function w(V){ce[V?"unshift":"push"](()=>{d=V,t(0,d)})}function k(){_=this.value,t(3,_)}const S=V=>{t(3,_=sr(V.target.value,25))},P=V=>{i.export.status==0&&V.preventDefault(),Ct(V),fo(d,V.target.value,25)};function W(){b=this.value,t(4,b)}function O(V){ce[V?"unshift":"push"](()=>{f=V,t(1,f)})}const L=V=>{t(4,b=sr(V.target.value,275))},R=V=>{i.export.status==0&&V.preventDefault(),fo(f,V.target.value,275)};function G(V){ce[V?"unshift":"push"](()=>{p=V,t(2,p)})}return[d,f,p,_,b,i,v,y,w,k,S,P,W,O,L,R,G,()=>{i.export.status!=0&&z(X,i.export.ongoing=!1,i)},()=>{i.export.status!=0&&y()},()=>p.focus()]}class R1 extends Ie{constructor(e){super(),Ce(this,e,O1,N1,pe,{})}}function A1(n){let e,t,i,s,r=n[2]?"Copied!":"Copy link",o,a,l;return{c(){e=g("button"),t=g("b"),t.textContent="Build link",i=C(),s=g("span"),o=ee(r),m(s,"class","tooltip"),m(s,"id","top"),m(e,"class","copyButton svelte-1qz7uzx"),m(e,"id","firstFocusable")},m(c,u){D(c,e,u),h(e,t),h(e,i),h(e,s),h(s,o),a||(l=[A(e,"click",n[7]),A(e,"keydown",Ct)],a=!0)},p(c,u){u&4&&r!==(r=c[2]?"Copied!":"Copy link")&&ke(o,r)},d(c){c&&N(e),a=!1,be(l)}}}function D1(n){let e,t,i,s,r,o,a=n[2]?"Copied!":"Copy ID",l,c,u,d;return{c(){e=g("button"),t=g("b"),t.textContent="ID:",i=C(),s=ee(n[4]),r=C(),o=g("span"),l=ee(a),m(o,"class","tooltip"),m(o,"id","top"),m(e,"class","copyButton svelte-1qz7uzx"),m(e,"id",c=n[1]!="save"?"firstFocusable":"")},m(f,p){D(f,e,p),h(e,t),h(e,i),h(e,s),h(e,r),h(e,o),h(o,l),u||(d=[A(e,"click",n[5]),A(e,"keydown",n[6])],u=!0)},p(f,p){p&4&&a!==(a=f[2]?"Copied!":"Copy ID")&&ke(l,a),p&2&&c!==(c=f[1]!="save"?"firstFocusable":"")&&m(e,"id",c)},d(f){f&&N(e),u=!1,be(d)}}}function P1(n){let e;function t(r,o){if(r[0]=="id")return D1;if(r[0]=="link")return A1}let i=t(n),s=i&&i(n);return{c(){s&&s.c(),e=mt()},m(r,o){s&&s.m(r,o),D(r,e,o)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s&&s.d(1),s=i&&i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:Z,o:Z,d(r){r&&N(e),s&&s.d(r)}}}function M1(n,e,t){let i;Y(n,Bt,f=>t(8,i=f));let{type:s,source:r}=e,o=!1;function a(f){o||(navigator.clipboard.writeText(f),t(2,o=!0),setTimeout(()=>t(2,o=!1),1e3))}let l=i?i.id:null;const c=()=>a(l),u=()=>{r!="save"&&Ct()},d=()=>a(`${location.origin+location.pathname}?id=${l}`);return n.$$set=f=>{"type"in f&&t(0,s=f.type),"source"in f&&t(1,r=f.source)},[s,r,o,a,l,c,u,d]}class as extends Ie{constructor(e){super(),Ce(this,e,M1,P1,pe,{type:0,source:1})}}function L1(n){let e,t,i,s;return e=new as({props:{type:"link",source:"share"}}),i=new as({props:{type:"id",source:"share"}}),{c(){oe(e.$$.fragment),t=C(),oe(i.$$.fragment)},m(r,o){se(e,r,o),D(r,t,o),se(i,r,o),s=!0},p:Z,i(r){s||(B(e.$$.fragment,r),B(i.$$.fragment,r),s=!0)},o(r){U(e.$$.fragment,r),U(i.$$.fragment,r),s=!1},d(r){r&&N(t),re(e,r),re(i,r)}}}function F1(n){let e;return{c(){e=g("span"),e.textContent="Your build has been erased from the database."},m(t,i){D(t,e,i)},p:Z,i:Z,o:Z,d(t){t&&N(e)}}}function B1(n){let e;function t(r,o){if(r[2].message=="not_found")return z1;if(r[2].message=="invalid_id")return H1}let i=t(n),s=i&&i(n);return{c(){s&&s.c(),e=mt()},m(r,o){s&&s.m(r,o),D(r,e,o)},p(r,o){i!==(i=t(r))&&(s&&s.d(1),s=i&&i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:Z,o:Z,d(r){r&&N(e),s&&s.d(r)}}}function U1(n){let e,t,i,s,r,o;return i=new as({props:{type:"link",source:"save"}}),r=new as({props:{type:"id",source:"save"}}),{c(){e=g("span"),e.textContent="Your build has been overwritten.",t=C(),oe(i.$$.fragment),s=C(),oe(r.$$.fragment)},m(a,l){D(a,e,l),D(a,t,l),se(i,a,l),D(a,s,l),se(r,a,l),o=!0},p:Z,i(a){o||(B(i.$$.fragment,a),B(r.$$.fragment,a),o=!0)},o(a){U(i.$$.fragment,a),U(r.$$.fragment,a),o=!1},d(a){a&&(N(e),N(t),N(s)),re(i,a),re(r,a)}}}function q1(n){let e,t,i,s;const r=[V1,j1],o=[];function a(l,c){return l[2].export.status==1?0:l[2].export.status==-1&&l[2].message=="duplicate_name"?1:-1}return~(e=a(n))&&(t=o[e]=r[e](n)),{c(){t&&t.c(),i=mt()},m(l,c){~e&&o[e].m(l,c),D(l,i,c),s=!0},p(l,c){let u=e;e=a(l),e!==u&&(t&&(je(),U(o[u],1,1,()=>{o[u]=null}),Ve()),~e?(t=o[e],t||(t=o[e]=r[e](l),t.c()),B(t,1),t.m(i.parentNode,i)):t=null)},i(l){s||(B(t),s=!0)},o(l){U(t),s=!1},d(l){l&&N(i),~e&&o[e].d(l)}}}function W1(n){let e,t,i=n[2].export.status?"exporting":n[2].save.status?"saving":n[2].load.status?"loading":"deleting",s,r,o,a,l,c,u,d;return{c(){e=g("span"),t=ee("A problem occurred while "),s=ee(i),r=ee(` your build.\r
            `),o=g("br"),a=ee(`\r
            If needed`),l=g("b"),l.textContent=",",c=ee(" you may contact "),u=g("hl"),u.textContent="xt.ss",d=ee(` on Discord for more\r
            details.`)},m(f,p){D(f,e,p),h(e,t),h(e,s),h(e,r),h(e,o),h(e,a),h(e,l),h(e,c),h(e,u),h(e,d)},p(f,p){p&4&&i!==(i=f[2].export.status?"exporting":f[2].save.status?"saving":f[2].load.status?"loading":"deleting")&&ke(s,i)},i:Z,o:Z,d(f){f&&N(e)}}}function H1(n){let e;return{c(){e=g("span"),e.textContent="The ID you have entered is invalid. Please check it again."},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function z1(n){let e;return{c(){e=g("span"),e.innerHTML=`Your build could not be found within the database.
                <br/>
                If needed<b>,</b> you may contact <hl>xt.ss</hl> on Discord for more
                details.`},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function j1(n){let e;return{c(){e=g("span"),e.innerHTML=`Another build of yours with the same name already exists.
                <br/>
                Please use a different one.`},m(t,i){D(t,e,i)},i:Z,o:Z,d(t){t&&N(e)}}}function V1(n){let e,t,i,s;return i=new as({props:{type:"id",source:"export"}}),{c(){e=g("span"),e.textContent="Your build's link has been copied to your clipboard.",t=C(),oe(i.$$.fragment)},m(r,o){D(r,e,o),D(r,t,o),se(i,r,o),s=!0},i(r){s||(B(i.$$.fragment,r),s=!0)},o(r){U(i.$$.fragment,r),s=!1},d(r){r&&(N(e),N(t)),re(i,r)}}}function G1(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v,y;const w=[W1,q1,U1,B1,F1,L1],k=[];function S(P,W){return P[1]==-1&&P[2].message=="firebase_fail"?0:P[2].export.status?1:P[2].save.status==1?2:P[2].load.status==-1?3:P[2].delete.status==1?4:P[2].share.ongoing?5:-1}return~(r=S(n))&&(o=k[r]=w[r](n)),{c(){e=g("div"),t=g("span"),i=ee(n[4]),s=C(),o&&o.c(),a=C(),l=g("div"),c=g("div"),u=g("button"),d=ee("OK"),m(t,"id","messageTitle"),m(t,"class","svelte-8i8nbx"),m(u,"id",f=(n[1]==-1?"firstFocusable ":"")+"lastFocusable"),m(l,"class","promptOptions svelte-8i8nbx"),m(e,"class","promptMessage svelte-8i8nbx")},m(P,W){D(P,e,W),h(e,t),h(t,i),h(e,s),~r&&k[r].m(e,null),h(e,a),h(e,l),h(l,c),h(c,u),h(u,d),n[6](u),b=!0,v||(y=[A(u,"click",n[7]),A(u,"keydown",n[8]),A(e,"introstart",n[9])],v=!0)},p(P,[W]){(!b||W&16)&&ke(i,P[4]);let O=r;r=S(P),r===O?~r&&k[r].p(P,W):(o&&(je(),U(k[O],1,1,()=>{k[O]=null}),Ve()),~r?(o=k[r],o?o.p(P,W):(o=k[r]=w[r](P),o.c()),B(o,1),o.m(e,a)):o=null),(!b||W&2&&f!==(f=(P[1]==-1?"firstFocusable ":"")+"lastFocusable"))&&m(u,"id",f)},i(P){b||(B(o),P&&ye(()=>{b&&(_&&_.end(1),p=go(e,ze,{duration:200,delay:75}),p.start())}),b=!0)},o(P){U(o),p&&p.invalidate(),P&&(_=bo(e,ze,{duration:200})),b=!1},d(P){P&&N(e),~r&&k[r].d(),n[6](null),P&&_&&_.end(),v=!1,be(y)}}}function K1(n,e,t){let i,s,r;Y(n,X,p=>t(2,r=p));let{loadID:o}=e;const a=Xt();let l;function c(p){ce[p?"unshift":"push"](()=>{l=p,t(3,l)})}const u=()=>{t(0,o=null),a("resetActions")},d=p=>{s==-1&&Ct(p),It(p)},f=()=>l.focus();return n.$$set=p=>{"loadID"in p&&t(0,o=p.loadID)},n.$$.update=()=>{n.$$.dirty&4&&t(1,s=r.export.status||r.save.status||r.load.status||r.delete.status),n.$$.dirty&6&&t(4,i=r.share.ongoing?"Share this build":`${r.export.status?"Export":r.save.status?"Save":r.load.status?"Load":"Delete"} ${s==1?"Success":"Failure"}!`)},[o,s,r,l,i,a,c,u,d,f]}class Y1 extends Ie{constructor(e){super(),Ce(this,e,K1,G1,pe,{loadID:0})}}function Q1(n){let e,t,i,s,r,o;return{c(){e=g("li"),t=g("button"),i=g("span"),s=ee(n[0]),m(i,"class","svelte-1hzohsl"),m(e,"class","svelte-1hzohsl"),ae(e,"selectedItem",n[2])},m(a,l){D(a,e,l),h(e,t),h(t,i),h(i,s),n[7](e),r||(o=A(t,"click",n[3]),r=!0)},p(a,[l]){l&1&&ke(s,a[0]),l&4&&ae(e,"selectedItem",a[2])},i:Z,o:Z,d(a){a&&N(e),n[7](null),r=!1,o()}}}function J1(n,e,t){let{chosenBuild:i,buildData:s,buildName:r,ddOpen:o}=e;const a=Xt();let l,c;function u(){if(o){if(l.classList.contains("selectedItem")||t(2,c=!1),c)return;t(2,c=!0),t(5,o=!1),t(4,i=[r,s]),a("buildSelect",l)}}function d(f){ce[f?"unshift":"push"](()=>{l=f,t(1,l)})}return n.$$set=f=>{"chosenBuild"in f&&t(4,i=f.chosenBuild),"buildData"in f&&t(6,s=f.buildData),"buildName"in f&&t(0,r=f.buildName),"ddOpen"in f&&t(5,o=f.ddOpen)},n.$$.update=()=>{n.$$.dirty&17&&i!==null&&t(2,c=i[0]===r)},[r,l,c,u,i,o,s,d]}class X1 extends Ie{constructor(e){super(),Ce(this,e,J1,Q1,pe,{chosenBuild:4,buildData:6,buildName:0,ddOpen:5})}}function gc(n,e,t){const i=n.slice();return i[25]=e[t][0],i[26]=e[t][1],i}function bc(n){let e,t,i,s;function r(l){n[13](l)}function o(l){n[14](l)}let a={buildData:n[26],buildName:n[25]};return n[0]!==void 0&&(a.chosenBuild=n[0]),n[1]!==void 0&&(a.ddOpen=n[1]),e=new X1({props:a}),ce.push(()=>Be(e,"chosenBuild",r)),ce.push(()=>Be(e,"ddOpen",o)),e.$on("buildSelect",n[11]),{c(){oe(e.$$.fragment)},m(l,c){se(e,l,c),s=!0},p(l,c){const u={};c&16&&(u.buildData=l[26]),c&16&&(u.buildName=l[25]),!t&&c&1&&(t=!0,u.chosenBuild=l[0],Fe(()=>t=!1)),!i&&c&2&&(i=!0,u.ddOpen=l[1],Fe(()=>i=!1)),e.$set(u)},i(l){s||(B(e.$$.fragment,l),s=!0)},o(l){U(e.$$.fragment,l),s=!1},d(l){re(e,l)}}}function x1(n){let e,t,i,s,r,o,a,l=Re(Object.entries(n[4])),c=[];for(let d=0;d<l.length;d+=1)c[d]=bc(gc(n,l,d));const u=d=>U(c[d],1,1,()=>{c[d]=null});return{c(){e=g("div"),t=g("input"),i=C(),s=g("ul");for(let d=0;d<c.length;d+=1)c[d].c();m(t,"type","text"),m(t,"class","searchBarInput svelte-nka60b"),m(t,"placeholder","Search..."),m(s,"class","svelte-nka60b"),ae(s,"no-scrollbar",n[8].length<=4),m(e,"class","dropdown svelte-nka60b"),ae(e,"ddOpen",n[1])},m(d,f){D(d,e,f),h(e,t),n[12](t),h(e,i),h(e,s);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(s,null);n[15](s),n[16](e),r=!0,o||(a=[A(t,"input",n[10]),A(t,"keydown",n[9]),A(e,"transitionend",n[17]),A(e,"transitioncancel",n[18])],o=!0)},p(d,[f]){if(f&2067){l=Re(Object.entries(d[4]));let p;for(p=0;p<l.length;p+=1){const _=gc(d,l,p);c[p]?(c[p].p(_,f),B(c[p],1)):(c[p]=bc(_),c[p].c(),B(c[p],1),c[p].m(s,null))}for(je(),p=l.length;p<c.length;p+=1)u(p);Ve()}(!r||f&256)&&ae(s,"no-scrollbar",d[8].length<=4),(!r||f&2)&&ae(e,"ddOpen",d[1])},i(d){if(!r){for(let f=0;f<l.length;f+=1)B(c[f]);r=!0}},o(d){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)U(c[f]);r=!1},d(d){d&&N(e),n[12](null),vt(c,d),n[15](null),n[16](null),o=!1,be(a)}}}function Z1(n,e,t){let i;Y(n,Wt,E=>t(4,i=E));let{chosenBuild:s,ddOpen:r=!1,dropdown:o}=e;const a=Xt();let l,c,u,d,f={},p=!1,_=[];function b(E){!E.shiftKey&&E.key=="Tab"&&(E.preventDefault(),setTimeout(()=>l.focus()))}function v(){c&&c.removeEventListener("keydown",b),k(),c&&c.addEventListener("keydown",b)}function y(E){E.shiftKey&&E.key=="Tab"&&(E.preventDefault(),setTimeout(()=>(c.querySelector("button")||c).focus()))}function w(){Pf(l.value,f),v()}function k(){c&&c.classList.remove("lastElement"),t(8,_=u.querySelectorAll("li:not(.hidden)")),c=_[_.length-1],c?c.classList.add("lastElement"):c=l}function S(E){a("buildSelect"),t(6,d=E.detail);let H=u.querySelector(".selectedItem");H&&H!=E.detail&&H.classList.remove("selectedItem"),t(7,p=!0)}function P(E){ce[E?"unshift":"push"](()=>{l=E,t(5,l)})}function W(E){s=E,t(0,s)}function O(E){r=E,t(1,r)}function L(E){ce[E?"unshift":"push"](()=>{u=E,t(3,u)})}function R(E){ce[E?"unshift":"push"](()=>{o=E,t(2,o)})}const G=E=>{E.propertyName=="visibility"&&(p&&(t(7,p=!1),t(5,l.value="",l),w()),!r&&d&&u.scrollTo(0,d.offsetTop),ir(l,r))},M=E=>{E.propertyName=="visibility"&&(t(7,p=!1),ir(l,r))};return n.$$set=E=>{"chosenBuild"in E&&t(0,s=E.chosenBuild),"ddOpen"in E&&t(1,r=E.ddOpen),"dropdown"in E&&t(2,o=E.dropdown)},n.$$.update=()=>{if(n.$$.dirty&24&&u){t(8,_=u.querySelectorAll("li:not(.hidden)"));for(let E=0;E<u.childElementCount;E++)f[Object.keys(i)[E]]=u.children[E];k(),v()}},[s,r,o,u,i,l,d,p,_,y,w,S,P,W,O,L,R,G,M]}class vl extends Ie{constructor(e){super(),Ce(this,e,Z1,x1,pe,{chosenBuild:0,ddOpen:1,dropdown:2})}}function vc(n){let e,t=(n[6]>n[5]*.8?n[11].slice(0,20)+"<b>...</b>":n[11])+"",i;return{c(){e=g("span"),ye(()=>n[15].call(e))},m(s,r){D(s,e,r),e.innerHTML=t,i=An(e,n[15].bind(e))},p(s,r){r[0]&2144&&t!==(t=(s[6]>s[5]*.8?s[11].slice(0,20)+"<b>...</b>":s[11])+"")&&(e.innerHTML=t)},d(s){s&&N(e),i()}}}function yc(n){let e;return{c(){e=g("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function $1(n){let e,t,i,s,r,o=n[11],a,l,c,u,d,f,p,_,b,v,y,w,k,S,P=275-n[2].length+"",W,O,L,R,G,M,E,H,V,j,T,F,Q,te,ne,ie,le,ue,q,x,we,Ee=vc(n),Ae=n[1]!=null&&n[1]!=n[2]&&yc();function Ue(fe){n[26](fe)}function qe(fe){n[27](fe)}function Pe(fe){n[28](fe)}let Me={};return n[0]!==void 0&&(Me.chosenBuild=n[0]),n[3]!==void 0&&(Me.ddOpen=n[3]),n[9]!==void 0&&(Me.dropdown=n[9]),te=new vl({props:Me}),ce.push(()=>Be(te,"chosenBuild",Ue)),ce.push(()=>Be(te,"ddOpen",qe)),ce.push(()=>Be(te,"dropdown",Pe)),te.$on("buildSelect",n[29]),{c(){e=g("div"),t=g("div"),i=g("span"),i.textContent="Save to:",s=C(),r=g("button"),Ee.c(),a=C(),l=g("iconify-icon"),d=C(),f=g("div"),p=g("div"),_=g("span"),_.textContent="Description / Notes:",b=C(),Ae&&Ae.c(),v=C(),y=g("textarea"),k=C(),S=g("span"),W=ee(P),O=C(),L=g("div"),R=g("div"),G=g("button"),M=ee("CANCEL"),H=C(),V=g("div"),j=g("button"),T=ee("SAVE"),Q=C(),oe(te.$$.fragment),Oe(l,"icon","iconamoon:arrow-down-2-fill"),m(r,"id","firstFocusable"),r.disabled=c=n[12].save.status==0,m(r,"class","promptDDButton svelte-106wt5q"),ye(()=>n[17].call(r)),ae(r,"ddOpen",n[3]),m(t,"class","chosenBuildCont"),m(y,"class","buildDescInput"),y.disabled=w=n[12].save.status==0,m(y,"placeholder","[Empty]"),m(y,"maxlength","275"),m(y,"autocomplete","off"),m(S,"class","charCounter"),m(S,"id","buildDesc"),m(f,"class","buildDescCont"),G.disabled=E=n[12].save.status==0,m(j,"id","lastFocusable"),j.disabled=F=n[12].save.status==0,m(L,"class","promptOptions"),m(e,"class","buildSaver")},m(fe,We){D(fe,e,We),h(e,t),h(t,i),h(t,s),h(t,r),Ee.m(r,null),h(r,a),h(r,l),n[16](r),u=An(r,n[17].bind(r)),h(e,d),h(e,f),h(f,p),h(p,_),h(p,b),Ae&&Ae.m(p,null),h(f,v),h(f,y),n[19](y),xt(y,n[10]),h(f,k),h(f,S),h(S,W),h(e,O),h(e,L),h(L,R),h(R,G),h(G,M),n[23](G),h(L,H),h(L,V),h(V,j),h(j,T),h(e,Q),se(te,e,null),q=!0,x||(we=[A(window,"mousedown",n[14]),A(r,"click",n[18]),A(r,"keydown",Ct),A(y,"input",n[20]),A(y,"input",n[21]),A(y,"keydown",n[22]),A(G,"click",n[24]),A(j,"click",n[25]),A(j,"keydown",It),A(e,"introstart",n[30]),A(e,"keydown",n[31])],x=!0)},p(fe,We){We[0]&2048&&pe(o,o=fe[11])?(Ee.d(1),Ee=vc(fe),Ee.c(),Ee.m(r,a)):Ee.p(fe,We),(!q||We[0]&4096&&c!==(c=fe[12].save.status==0))&&(r.disabled=c),(!q||We[0]&8)&&ae(r,"ddOpen",fe[3]),fe[1]!=null&&fe[1]!=fe[2]?Ae||(Ae=yc(),Ae.c(),Ae.m(p,null)):Ae&&(Ae.d(1),Ae=null),(!q||We[0]&4096&&w!==(w=fe[12].save.status==0))&&(y.disabled=w),We[0]&1024&&xt(y,fe[10]),(!q||We[0]&4)&&P!==(P=275-fe[2].length+"")&&ke(W,P),(!q||We[0]&4096&&E!==(E=fe[12].save.status==0))&&(G.disabled=E),(!q||We[0]&4096&&F!==(F=fe[12].save.status==0))&&(j.disabled=F);const st={};!ne&&We[0]&1&&(ne=!0,st.chosenBuild=fe[0],Fe(()=>ne=!1)),!ie&&We[0]&8&&(ie=!0,st.ddOpen=fe[3],Fe(()=>ie=!1)),!le&&We[0]&512&&(le=!0,st.dropdown=fe[9],Fe(()=>le=!1)),te.$set(st)},i(fe){q||(B(te.$$.fragment,fe),fe&&ye(()=>{q&&(ue||(ue=he(e,ze,{duration:250},!0)),ue.run(1))}),q=!0)},o(fe){U(te.$$.fragment,fe),fe&&(ue||(ue=he(e,ze,{duration:250},!1)),ue.run(0)),q=!1},d(fe){fe&&N(e),Ee.d(fe),n[16](null),u(),Ae&&Ae.d(),n[19](null),n[23](null),re(te),fe&&ue&&ue.end(),x=!1,be(we)}}}function e0(n,e,t){let i,s,r,o,a,l,c,u,d;Y(n,X,q=>t(12,o=q)),Y(n,Bt,q=>t(32,a=q)),Y(n,Wt,q=>t(33,l=q)),Y(n,_i,q=>t(34,c=q)),Y(n,nn,q=>t(35,u=q)),Y(n,Qt,q=>t(36,d=q));let f=!1,p,_,b,v,y,w,k=Object.entries(l)[0],S=null;function P(){z(X,o.save.status=0,o);let q=Mf(d,u),x=S==null?s:S==""?"[Empty]":S,we=k[1].id;q.name=i,q.desc=x,Ci(tn(Cr,`${c}/siteData/calculator/builds/${we}`),q),Ci(pn(tn(Ii),`builds/${we}`),q).then(()=>{z(X,o.save.status=1,o);let Ee={...l};Ee[i]=q,Ee[i].id=we,Ee[i].desc=x,gl(),Wt.update(()=>Ee),z(Bt,a=q,a),z(Bt,a.id=we,a)}).catch(()=>{z(X,o.save.status=-1,o),z(X,o.message="firebase_fail",o)})}const W=q=>{!p.contains(q.target)&&!w.contains(q.target)&&t(3,f=!1)};function O(){b=this.offsetWidth,t(6,b)}function L(q){ce[q?"unshift":"push"](()=>{p=q,t(4,p)})}function R(){_=this.offsetWidth,t(5,_)}const G=()=>{o.save.status!=0&&t(3,f=!f)};function M(q){ce[q?"unshift":"push"](()=>{v=q,t(7,v)})}function E(){r=this.value,t(10,r),t(1,S),t(2,s),t(0,k)}const H=q=>{t(1,S=sr(q.target.value,275))},V=q=>{o.save.status==0&&q.preventDefault(),fo(v,q.target.value,275)};function j(q){ce[q?"unshift":"push"](()=>{y=q,t(8,y)})}const T=()=>{o.save.status!=0&&z(X,o.save.ongoing=!1,o)},F=()=>{o.save.status!=0&&P()};function Q(q){k=q,t(0,k)}function te(q){f=q,t(3,f)}function ne(q){w=q,t(9,w)}const ie=()=>t(1,S=null),le=()=>y.focus(),ue=q=>{q.key=="Escape"&&(t(3,f=!1),p.focus())};return n.$$.update=()=>{n.$$.dirty[0]&1&&t(11,i=k[0]),n.$$.dirty[0]&1&&t(2,s=k[1].desc),n.$$.dirty[0]&6&&t(10,r=S??s)},[k,S,s,f,p,_,b,v,y,w,r,i,o,P,W,O,L,R,G,M,E,H,V,j,T,F,Q,te,ne,ie,le,ue]}class t0 extends Ie{constructor(e){super(),Ce(this,e,e0,$1,pe,{},null,[-1,-1])}}function n0(n){let e,t,i,s,r,o,a,l,c;return{c(){e=g("div"),t=g("span"),t.textContent="ID:",i=C(),s=g("input"),m(s,"class","buildIDInput svelte-1ort6ez"),s.disabled=r=n[13].load.status==0,m(s,"type","text"),m(s,"placeholder","Example ID: -NDqeA1Scn0EAJcYWN3b"),m(s,"maxlength","25"),m(e,"class","buildIDCont svelte-1ort6ez")},m(u,d){D(u,e,d),h(e,t),h(e,i),h(e,s),n[24](s),xt(s,n[11]),a=!0,l||(c=[A(s,"input",n[25]),A(s,"input",n[26]),A(s,"keydown",n[27])],l=!0)},p(u,d){(!a||d[0]&8192&&r!==(r=u[13].load.status==0))&&(s.disabled=r),d[0]&2048&&s.value!==u[11]&&xt(s,u[11])},i(u){a||(u&&ye(()=>{a&&(o||(o=he(e,Ze,{duration:150},!0)),o.run(1))}),a=!0)},o(u){u&&(o||(o=he(e,Ze,{duration:150},!1)),o.run(0)),a=!1},d(u){u&&N(e),n[24](null),u&&o&&o.end(),l=!1,be(c)}}}function i0(n){let e,t,i,s,r=n[10],o,a,l,c,u,d,f,p,_=wc(n);return{c(){e=g("div"),t=g("span"),t.textContent="Load:",i=C(),s=g("button"),_.c(),o=C(),a=g("iconify-icon"),Oe(a,"icon","iconamoon:arrow-down-2-fill"),s.disabled=l=n[13].load.status==0,m(s,"class","promptDDButton svelte-1ort6ez"),ye(()=>n[22].call(s)),ae(s,"ddOpen",n[9]),m(e,"class","chosenBuildCont svelte-1ort6ez")},m(b,v){D(b,e,v),h(e,t),h(e,i),h(e,s),_.m(s,null),h(s,o),h(s,a),n[21](s),c=An(s,n[22].bind(s)),d=!0,f||(p=A(s,"click",n[23]),f=!0)},p(b,v){v[0]&1024&&pe(r,r=b[10])?(_.d(1),_=wc(b),_.c(),_.m(s,o)):_.p(b,v),(!d||v[0]&8192&&l!==(l=b[13].load.status==0))&&(s.disabled=l),(!d||v[0]&512)&&ae(s,"ddOpen",b[9])},i(b){d||(b&&ye(()=>{d&&(u||(u=he(e,Ze,{duration:150},!0)),u.run(1))}),d=!0)},o(b){b&&(u||(u=he(e,Ze,{duration:150},!1)),u.run(0)),d=!1},d(b){b&&N(e),_.d(b),n[21](null),c(),b&&u&&u.end(),f=!1,p()}}}function wc(n){let e,t=(n[7]>n[6]*.7?n[10].slice(0,20)+"<b>...</b>":n[10])+"",i;return{c(){e=g("span"),ye(()=>n[20].call(e))},m(s,r){D(s,e,r),e.innerHTML=t,i=An(e,n[20].bind(e))},p(s,r){r[0]&1216&&t!==(t=(s[7]>s[6]*.7?s[10].slice(0,20)+"<b>...</b>":s[10])+"")&&(e.innerHTML=t)},d(s){s&&N(e),i()}}}function kc(n){let e,t,i,s,r;function o(u){n[30](u)}function a(u){n[31](u)}function l(u){n[32](u)}let c={};return n[3]!==void 0&&(c.chosenBuild=n[3]),n[9]!==void 0&&(c.ddOpen=n[9]),n[8]!==void 0&&(c.dropdown=n[8]),e=new vl({props:c}),ce.push(()=>Be(e,"chosenBuild",o)),ce.push(()=>Be(e,"ddOpen",a)),ce.push(()=>Be(e,"dropdown",l)),{c(){oe(e.$$.fragment)},m(u,d){se(e,u,d),r=!0},p(u,d){const f={};!t&&d[0]&8&&(t=!0,f.chosenBuild=u[3],Fe(()=>t=!1)),!i&&d[0]&512&&(i=!0,f.ddOpen=u[9],Fe(()=>i=!1)),!s&&d[0]&256&&(s=!0,f.dropdown=u[8],Fe(()=>s=!1)),e.$set(f)},i(u){r||(B(e.$$.fragment,u),r=!0)},o(u){U(e.$$.fragment,u),r=!1},d(u){re(e,u)}}}function s0(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v,y,w,k,S,P,W,O,L,R,G,M,E,H,V,j,T,F,Q,te;const ne=[i0,n0],ie=[];function le(q,x){return q[2]?0:1}w=le(n),k=ie[w]=ne[w](n);let ue=n[4]&&n[2]&&kc(n);return{c(){e=g("div"),t=g("span"),t.textContent="Load build via:",i=C(),s=g("div"),r=g("div"),o=g("button"),a=ee("Online saves"),u=C(),d=g("div"),f=g("button"),p=ee("Exported ID"),v=C(),y=g("div"),k.c(),S=C(),P=g("div"),W=g("div"),O=g("button"),L=ee("CANCEL"),G=C(),M=g("div"),E=g("button"),H=ee("LOAD"),j=C(),ue&&ue.c(),m(t,"class","svelte-1ort6ez"),m(o,"id",l=n[2]?"firstFocusable":""),o.disabled=c=n[13].load.status==0||!n[4]||!n[12],m(o,"class","svelte-1ort6ez"),ae(o,"chosen",n[2]),ae(o,"unavailable",!n[12]),m(r,"class","svelte-1ort6ez"),m(f,"id",_=n[2]?"":"firstFocusable"),f.disabled=b=n[13].load.status==0,m(f,"class","svelte-1ort6ez"),ae(f,"chosen",!n[2]),m(d,"class","svelte-1ort6ez"),m(s,"class","loadMethodRadio svelte-1ort6ez"),m(y,"class","loadMethodCont svelte-1ort6ez"),O.disabled=R=n[13].load.status==0,m(E,"id","lastFocusable"),E.disabled=V=n[13].load.status==0,m(P,"class","promptOptions svelte-1ort6ez"),m(e,"class","buildLoader svelte-1ort6ez")},m(q,x){D(q,e,x),h(e,t),h(e,i),h(e,s),h(s,r),h(r,o),h(o,a),h(s,u),h(s,d),h(d,f),h(f,p),h(e,v),h(e,y),ie[w].m(y,null),h(e,S),h(e,P),h(P,W),h(W,O),h(O,L),n[28](O),h(P,G),h(P,M),h(M,E),h(E,H),h(e,j),ue&&ue.m(e,null),F=!0,Q||(te=[A(window,"mousedown",n[15]),A(o,"click",n[16]),A(o,"keydown",n[17]),A(f,"click",n[18]),A(f,"keydown",n[19]),A(O,"click",n[29]),A(E,"keydown",It),A(E,"click",n[14]),A(e,"introstart",n[33]),A(e,"keydown",n[34])],Q=!0)},p(q,x){(!F||x[0]&4&&l!==(l=q[2]?"firstFocusable":""))&&m(o,"id",l),(!F||x[0]&12304&&c!==(c=q[13].load.status==0||!q[4]||!q[12]))&&(o.disabled=c),(!F||x[0]&4)&&ae(o,"chosen",q[2]),(!F||x[0]&4096)&&ae(o,"unavailable",!q[12]),(!F||x[0]&4&&_!==(_=q[2]?"":"firstFocusable"))&&m(f,"id",_),(!F||x[0]&8192&&b!==(b=q[13].load.status==0))&&(f.disabled=b),(!F||x[0]&4)&&ae(f,"chosen",!q[2]);let we=w;w=le(q),w===we?ie[w].p(q,x):(je(),U(ie[we],1,1,()=>{ie[we]=null}),Ve(),k=ie[w],k?k.p(q,x):(k=ie[w]=ne[w](q),k.c()),B(k,1),k.m(y,null)),(!F||x[0]&8192&&R!==(R=q[13].load.status==0))&&(O.disabled=R),(!F||x[0]&8192&&V!==(V=q[13].load.status==0))&&(E.disabled=V),q[4]&&q[2]?ue?(ue.p(q,x),x[0]&20&&B(ue,1)):(ue=kc(q),ue.c(),B(ue,1),ue.m(e,null)):ue&&(je(),U(ue,1,1,()=>{ue=null}),Ve())},i(q){F||(B(k),B(ue),q&&ye(()=>{F&&(T||(T=he(e,ze,{duration:250},!0)),T.run(1))}),F=!0)},o(q){U(k),U(ue),q&&(T||(T=he(e,ze,{duration:250},!1)),T.run(0)),F=!1},d(q){q&&N(e),ie[w].d(),n[28](null),ue&&ue.d(),q&&T&&T.end(),Q=!1,be(te)}}}function r0(n,e,t){let i,s,r,o;Y(n,Ps,x=>t(4,i=x)),Y(n,Wt,x=>t(35,s=x)),Y(n,In,x=>t(12,r=x)),Y(n,X,x=>t(13,o=x));const a=Xt();let l,c,u,d,f,p,_=r,b=!1,v,y,w="";function k(){if(!_&&!w.startsWith("-")){z(X,o.load.status=-1,o),z(X,o.message="invalid_id",o);return}if(_){let x=s[Object.keys(s).find(we=>we===y)];a("buildLoad",{build:x,id:x.id})}else{let x=_l(tn(Ii,"builds"),pl()),we=0;z(X,o.load.status=0,o),fl(x).then(Ee=>{for(let Ae in Ee.val()){if(Ae===w){console.log(Ee.val()[Ae]),a("buildLoad",{build:Ee.val()[Ae],id:Ae});break}else we==Object.keys(Ee.val()).length-1&&(z(X,o.load.status=-1,o),z(X,o.message="invalid_id",o));we++}}).catch(()=>{z(X,o.load.status=-1,o),z(X,o.message="firebase_fail",o)})}}function S(){t(3,v=r?Object.entries(s)[0]:null),t(10,y=v!=null?v[0]:null)}const P=x=>{l&&!l.contains(x.target)&&p&&!p.contains(x.target)&&t(9,b=!1)},W=()=>{o.load.status!=0&&i&&r&&t(2,_=!0)},O=x=>{_&&Ct(x)},L=()=>{o.load.status!=0&&t(2,_=!1)},R=x=>{_||Ct(x)};function G(){f=this.offsetWidth,t(7,f)}function M(x){ce[x?"unshift":"push"](()=>{l=x,t(0,l)})}function E(){d=this.offsetWidth,t(6,d)}const H=()=>{o.load.status!=0&&t(9,b=!b)};function V(x){ce[x?"unshift":"push"](()=>{u=x,t(1,u)})}function j(){w=this.value,t(11,w)}const T=x=>{t(11,w=sr(x.target.value,25))},F=x=>{o.load.status==0&&x.preventDefault()};function Q(x){ce[x?"unshift":"push"](()=>{c=x,t(5,c)})}const te=()=>{o.load.status!=0&&z(X,o.load.ongoing=!1,o)};function ne(x){v=x,t(3,v)}function ie(x){b=x,t(9,b)}function le(x){p=x,t(8,p)}const ue=()=>c.focus(),q=x=>{x.key=="Escape"&&(t(9,b=!1),l.focus())};return n.$$.update=()=>{n.$$.dirty[0]&16&&i&&S(),n.$$.dirty[0]&7&&setTimeout(_?()=>{S(),l.focus()}:()=>u.focus()),n.$$.dirty[0]&8&&t(10,y=v!=null?v[0]:null)},[l,u,_,v,i,c,d,f,p,b,y,w,r,o,k,P,W,O,L,R,G,M,E,H,V,j,T,F,Q,te,ne,ie,le,ue,q]}class o0 extends Ie{constructor(e){super(),Ce(this,e,r0,s0,pe,{},null,[-1,-1])}}function Cc(n){let e,t=(n[3]>n[4]*.8?n[8].slice(0,20)+"<b>...</b>":n[8])+"",i;return{c(){e=g("span"),ye(()=>n[12].call(e))},m(s,r){D(s,e,r),e.innerHTML=t,i=An(e,n[12].bind(e))},p(s,r){r&280&&t!==(t=(s[3]>s[4]*.8?s[8].slice(0,20)+"<b>...</b>":s[8])+"")&&(e.innerHTML=t)},d(s){s&&N(e),i()}}}function l0(n){let e,t,i,s,r,o=n[8],a,l,c,u,d,f,p,_,b,v,y,w,k,S,P,W,O,L,R,G,M,E,H,V,j,T,F,Q,te=Cc(n);f=new wt({props:{text:"I'm aware that this action is irreversible and want to erase this build from the database."}}),f.$on("toggle",n[16]);function ne(q){n[21](q)}function ie(q){n[22](q)}function le(q){n[23](q)}let ue={};return n[0]!==void 0&&(ue.chosenBuild=n[0]),n[6]!==void 0&&(ue.ddOpen=n[6]),n[5]!==void 0&&(ue.dropdown=n[5]),M=new vl({props:ue}),ce.push(()=>Be(M,"chosenBuild",ne)),ce.push(()=>Be(M,"ddOpen",ie)),ce.push(()=>Be(M,"dropdown",le)),{c(){e=g("div"),t=g("div"),i=g("span"),i.textContent="Delete:",s=C(),r=g("button"),te.c(),a=C(),l=g("iconify-icon"),d=C(),oe(f.$$.fragment),p=C(),_=g("div"),b=g("div"),v=g("button"),y=ee("CANCEL"),S=C(),P=g("div"),W=g("button"),O=ee("DELETE"),G=C(),oe(M.$$.fragment),Oe(l,"icon","iconamoon:arrow-down-2-fill"),m(r,"class","promptDDButton svelte-1nywh"),m(r,"id","firstFocusable"),r.disabled=c=n[9].delete.status==0,ye(()=>n[14].call(r)),ae(r,"ddOpen",n[6]),m(t,"class","chosenBuildCont"),m(v,"id",w=n[7]?"":"lastFocusable"),v.disabled=k=n[9].delete.status==0,W.disabled=L=!n[7]||n[9].delete.status==0,m(W,"id",R=n[7]?"lastFocusable":""),ae(W,"unavailable",!n[7]),m(_,"class","promptOptions svelte-1nywh"),m(e,"class","buildDeleter svelte-1nywh")},m(q,x){D(q,e,x),h(e,t),h(t,i),h(t,s),h(t,r),te.m(r,null),h(r,a),h(r,l),n[13](r),u=An(r,n[14].bind(r)),h(e,d),se(f,e,null),h(e,p),h(e,_),h(_,b),h(b,v),h(v,y),n[17](v),h(_,S),h(_,P),h(P,W),h(W,O),h(e,G),se(M,e,null),T=!0,F||(Q=[A(window,"mousedown",n[11]),A(r,"click",n[15]),A(r,"keydown",Ct),A(v,"click",n[18]),A(v,"keydown",n[19]),A(W,"click",n[20]),A(W,"keydown",It),A(e,"introstart",n[24]),A(e,"keydown",n[25])],F=!0)},p(q,[x]){x&256&&pe(o,o=q[8])?(te.d(1),te=Cc(q),te.c(),te.m(r,a)):te.p(q,x),(!T||x&512&&c!==(c=q[9].delete.status==0))&&(r.disabled=c),(!T||x&64)&&ae(r,"ddOpen",q[6]),(!T||x&128&&w!==(w=q[7]?"":"lastFocusable"))&&m(v,"id",w),(!T||x&512&&k!==(k=q[9].delete.status==0))&&(v.disabled=k),(!T||x&640&&L!==(L=!q[7]||q[9].delete.status==0))&&(W.disabled=L),(!T||x&128&&R!==(R=q[7]?"lastFocusable":""))&&m(W,"id",R),(!T||x&128)&&ae(W,"unavailable",!q[7]);const we={};!E&&x&1&&(E=!0,we.chosenBuild=q[0],Fe(()=>E=!1)),!H&&x&64&&(H=!0,we.ddOpen=q[6],Fe(()=>H=!1)),!V&&x&32&&(V=!0,we.dropdown=q[5],Fe(()=>V=!1)),M.$set(we)},i(q){T||(B(f.$$.fragment,q),B(M.$$.fragment,q),q&&ye(()=>{T&&(j||(j=he(e,ze,{duration:250},!0)),j.run(1))}),T=!0)},o(q){U(f.$$.fragment,q),U(M.$$.fragment,q),q&&(j||(j=he(e,ze,{duration:250},!1)),j.run(0)),T=!1},d(q){q&&N(e),te.d(q),n[13](null),u(),re(f),n[17](null),re(M),q&&j&&j.end(),F=!1,be(Q)}}}function a0(n,e,t){let i,s,r,o,a;Y(n,X,T=>t(9,s=T)),Y(n,Wt,T=>t(26,r=T)),Y(n,Bt,T=>t(27,o=T)),Y(n,_i,T=>t(28,a=T));let l,c,u,d,f,p=!1,_=Object.entries(r)[0],b=!1;function v(){z(X,s.delete.status=0,s);let T=_[1].id;Da(tn(Cr,`${a}/siteData/calculator/builds/${T}`)),Da(pn(tn(Ii),`builds/${T}`)).then(()=>{z(X,s.delete.status=1,s),o&&T==o.id&&z(Bt,o=null,o);let F={...r};delete F[i],gl(),Wt.update(()=>F)}).catch(F=>{z(X,s.delete.status=-1,s),z(X,s.message="firebase_fail",s)})}const y=T=>{!c.contains(T.target)&&!f.contains(T.target)&&t(6,p=!1)};function w(){u=this.offsetWidth,t(3,u)}function k(T){ce[T?"unshift":"push"](()=>{c=T,t(2,c)})}function S(){d=this.offsetWidth,t(4,d)}const P=()=>{s.delete.status!=0&&t(6,p=!p)},W=T=>t(7,b=T.detail);function O(T){ce[T?"unshift":"push"](()=>{l=T,t(1,l)})}const L=()=>{s.delete.status!=0&&z(X,s.delete.ongoing=!1,s)},R=T=>{b||It(T)},G=()=>{b&&s.delete.status!=0&&v()};function M(T){_=T,t(0,_)}function E(T){p=T,t(6,p)}function H(T){f=T,t(5,f)}const V=()=>l.focus(),j=T=>{T.key=="Escape"&&(t(6,p=!1),c.focus())};return n.$$.update=()=>{n.$$.dirty&1&&t(8,i=_[0])},[_,l,c,u,d,f,p,b,i,s,v,y,w,k,S,P,W,O,L,R,G,M,E,H,V,j]}class c0 extends Ie{constructor(e){super(),Ce(this,e,a0,l0,pe,{})}}function u0(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_;return{c(){e=g("div"),t=g("div"),i=g("button"),i.innerHTML='<iconify-icon icon="tabler:coins" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Build costs</span>',s=C(),r=g("div"),o=g("button"),o.innerHTML='<iconify-icon icon="codicon:sparkle-filled" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Add bonuses</span>',a=C(),l=g("div"),c=g("button"),c.innerHTML='<iconify-icon icon="fa-solid:random" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Randomize build</span>',u=C(),d=g("div"),f=g("button"),f.innerHTML='<iconify-icon icon="fe:picture" class="svelte-1o20s8w"></iconify-icon> <span class="tooltip" id="right">Screenshot mode</span>',m(i,"class","svelte-1o20s8w"),m(t,"class","svelte-1o20s8w"),m(o,"class","svelte-1o20s8w"),m(r,"class","svelte-1o20s8w"),m(c,"class","svelte-1o20s8w"),m(l,"id","randomize"),m(l,"class","svelte-1o20s8w"),m(f,"class","svelte-1o20s8w"),m(d,"id","screenshot"),m(d,"class","svelte-1o20s8w"),m(e,"class","sideFeatures svelte-1o20s8w")},m(b,v){D(b,e,v),h(e,t),h(t,i),h(e,s),h(e,r),h(r,o),h(e,a),h(e,l),h(l,c),h(e,u),h(e,d),h(d,f),p||(_=[A(i,"click",n[2]),A(o,"click",n[3]),A(c,"click",n[4]),A(f,"click",n[5])],p=!0)},p:Z,i:Z,o:Z,d(b){b&&N(e),p=!1,be(_)}}}function d0(n,e,t){let i,s;return Y(n,Gn,c=>t(0,i=c)),Y(n,X,c=>t(1,s=c)),[i,s,c=>{cn(c),i||z(X,s.costs.ongoing=!0,s)},c=>{cn(c),i||z(X,s.bonus.ongoing=!0,s)},c=>{cn(c),i||z(X,s.randomize.ongoing=!0,s)},()=>{i||(z(X,s.screenshot.ongoing=!0,s),setTimeout(()=>z(X,s.screenshot.ongoing=!1,s),3500))}]}class f0 extends Ie{constructor(e){super(),Ce(this,e,d0,u0,pe,{})}}function Ic(n,e,t){const i=n.slice();i[11]=e[t];const s=i[1].bonuses[0].name==i[11].name;return i[12]=s,i}function Ec(n){let e,t,i,s,r,o,a,l,c,u,d,f;function p(...b){return n[5](n[12],...b)}function _(...b){return n[6](n[11],...b)}return l=new wt({props:{text:n[11].name,checked:n[2][n[11].name]}}),l.$on("toggle",_),{c(){e=g("div"),t=g("a"),i=g("img"),a=C(),oe(l.$$.fragment),c=C(),et(i.src,s=n[11].image)||m(i,"src",s),m(i,"alt",""),m(i,"class","svelte-1i20pwb"),m(t,"id",r=n[12]?"firstFocusable":""),m(t,"href",o=n[11].link),m(t,"target","_blank"),m(t,"class","svelte-1i20pwb"),m(e,"class","svelte-1i20pwb")},m(b,v){D(b,e,v),h(e,t),h(t,i),h(e,a),se(l,e,null),h(e,c),u=!0,d||(f=A(t,"keydown",p),d=!0)},p(b,v){n=b,(!u||v&2&&!et(i.src,s=n[11].image))&&m(i,"src",s),(!u||v&2&&r!==(r=n[12]?"firstFocusable":""))&&m(t,"id",r),(!u||v&2&&o!==(o=n[11].link))&&m(t,"href",o);const y={};v&2&&(y.text=n[11].name),v&6&&(y.checked=n[2][n[11].name]),l.$set(y)},i(b){u||(B(l.$$.fragment,b),u=!0)},o(b){U(l.$$.fragment,b),u=!1},d(b){b&&N(e),re(l),d=!1,f()}}}function h0(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_=Re(n[1].bonuses),b=[];for(let y=0;y<_.length;y+=1)b[y]=Ec(Ic(n,_,y));const v=y=>U(b[y],1,1,()=>{b[y]=null});return{c(){e=g("div"),t=g("div");for(let y=0;y<b.length;y+=1)b[y].c();i=C(),s=g("div"),r=g("div"),o=g("button"),o.textContent="CLEAR",a=C(),l=g("div"),c=g("button"),c.textContent="OK",m(t,"class","bonusesCont svelte-1i20pwb"),m(c,"id","lastFocusable"),m(s,"class","promptOptions svelte-1i20pwb"),m(e,"class","bonusChooser svelte-1i20pwb")},m(y,w){D(y,e,w),h(e,t);for(let k=0;k<b.length;k+=1)b[k]&&b[k].m(t,null);h(e,i),h(e,s),h(s,r),h(r,o),h(s,a),h(s,l),h(l,c),n[8](c),d=!0,f||(p=[A(o,"click",n[7]),A(c,"click",n[9]),A(c,"keydown",It),A(e,"introstart",n[10])],f=!0)},p(y,[w]){if(w&14){_=Re(y[1].bonuses);let k;for(k=0;k<_.length;k+=1){const S=Ic(y,_,k);b[k]?(b[k].p(S,w),B(b[k],1)):(b[k]=Ec(S),b[k].c(),B(b[k],1),b[k].m(t,null))}for(je(),k=_.length;k<b.length;k+=1)v(k);Ve()}},i(y){if(!d){for(let w=0;w<_.length;w+=1)B(b[w]);y&&ye(()=>{d&&(u||(u=he(e,ze,{duration:250},!0)),u.run(1))}),d=!0}},o(y){b=b.filter(Boolean);for(let w=0;w<b.length;w+=1)U(b[w]);y&&(u||(u=he(e,ze,{duration:250},!1)),u.run(0)),d=!1},d(y){y&&N(e),vt(b,y),n[8](null),y&&u&&u.end(),f=!1,be(p)}}}function p0(n,e,t){let i,s,r,o;Y(n,Yt,_=>t(1,i=_)),Y(n,ui,_=>t(2,s=_)),Y(n,St,_=>t(3,r=_)),Y(n,X,_=>t(4,o=_));let a;const l=(_,b)=>{_&&Ct(b)},c=(_,b)=>{z(ui,s[_.name]=b.detail,s);for(let v in r)b.detail?z(St,r[v]+=_.stats[v],r):z(St,r[v]-=_.stats[v],r),z(St,r[v]=Math.round(r[v]*10)/10,r)},u=()=>{for(let _ in s){if(!s[_])continue;let b=i.bonuses.find(v=>v.name==_);z(ui,s[_]=!1,s);for(let v in r)z(St,r[v]-=b.stats[v],r),z(St,r[v]=Math.round(r[v]*10)/10,r)}};function d(_){ce[_?"unshift":"push"](()=>{a=_,t(0,a)})}return[a,i,s,r,o,l,c,u,d,()=>z(X,o.bonus.ongoing=!1,o),()=>a.focus()]}class _0 extends Ie{constructor(e){super(),Ce(this,e,p0,h0,pe,{})}}function m0(n){let e;return{c(){e=g("span"),e.textContent=`Includes equipment such as ore-based armor and their variants,\r
            ore-based weapons, and shoes with no special stats`,m(e,"slot","tooltip"),m(e,"class","tooltip svelte-21yikp"),m(e,"id","right")},m(t,i){D(t,e,i)},p:Z,d(t){t&&N(e)}}}function g0(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v,y,w,k,S,P,W,O,L,R,G;return s=new wt({props:{text:"Force Mushroom Parasol",checked:n[0].parasol,first:!0}}),s.$on("toggle",n[5]),o=new wt({props:{text:"Randomize armor",checked:n[0].armor}}),o.$on("toggle",n[6]),l=new wt({props:{text:"Randomize gear",checked:n[0].gear}}),l.$on("toggle",n[7]),u=new wt({props:{text:"Allow 'basic' equipment",checked:n[0].basic,$$slots:{tooltip:[m0]},$$scope:{ctx:n}}}),u.$on("toggle",n[8]),{c(){e=g("div"),t=g("span"),t.textContent="Randomize your build",i=C(),oe(s.$$.fragment),r=C(),oe(o.$$.fragment),a=C(),oe(l.$$.fragment),c=C(),oe(u.$$.fragment),d=C(),f=g("div"),p=g("div"),_=g("button"),b=ee("CANCEL"),y=C(),w=g("div"),k=g("button"),S=ee("ROLL THE DICE"),m(t,"class","svelte-21yikp"),m(_,"id",v=n[2]?"":"lastFocusable"),m(k,"id",P=n[2]?"lastFocusable":""),k.disabled=W=!n[2],m(f,"class","promptOptions"),m(e,"class","buildRandomizer svelte-21yikp")},m(M,E){D(M,e,E),h(e,t),h(e,i),se(s,e,null),h(e,r),se(o,e,null),h(e,a),se(l,e,null),h(e,c),se(u,e,null),h(e,d),h(e,f),h(f,p),h(p,_),h(_,b),n[9](_),h(f,y),h(f,w),h(w,k),h(k,S),L=!0,R||(G=[A(_,"click",n[10]),A(_,"keydown",n[11]),A(k,"click",n[12]),A(k,"keydown",n[13]),A(e,"introstart",n[14])],R=!0)},p(M,[E]){const H={};E&1&&(H.checked=M[0].parasol),s.$set(H);const V={};E&1&&(V.checked=M[0].armor),o.$set(V);const j={};E&1&&(j.checked=M[0].gear),l.$set(j);const T={};E&1&&(T.checked=M[0].basic),E&16777216&&(T.$$scope={dirty:E,ctx:M}),u.$set(T),(!L||E&4&&v!==(v=M[2]?"":"lastFocusable"))&&m(_,"id",v),(!L||E&4&&P!==(P=M[2]?"lastFocusable":""))&&m(k,"id",P),(!L||E&4&&W!==(W=!M[2]))&&(k.disabled=W)},i(M){L||(B(s.$$.fragment,M),B(o.$$.fragment,M),B(l.$$.fragment,M),B(u.$$.fragment,M),M&&ye(()=>{L&&(O||(O=he(e,ze,{duration:250},!0)),O.run(1))}),L=!0)},o(M){U(s.$$.fragment,M),U(o.$$.fragment,M),U(l.$$.fragment,M),U(u.$$.fragment,M),M&&(O||(O=he(e,ze,{duration:250},!1)),O.run(0)),L=!1},d(M){M&&N(e),re(s),re(o),re(l),re(u),n[9](null),M&&O&&O.end(),R=!1,be(G)}}}function b0(n,e,t){let i,s,r,o,a,l,c,u;Y(n,Li,M=>t(0,s=M)),Y(n,X,M=>t(3,r=M)),Y(n,Yt,M=>t(15,o=M)),Y(n,gi,M=>t(16,a=M)),Y(n,nn,M=>t(17,l=M)),Y(n,mi,M=>t(18,c=M)),Y(n,Qt,M=>t(19,u=M));let d,f=["Bronze","Iron","Cobalt","Titanium","Gold","Onyx"],p=["Hardened","Royal"],_=["Black","Brown","Green","Red","White","Dark","Golden","Grey","Phantom"];function b(){if(s.armor){for(let M of Ei){let E=u[M]||Ir;E.name&&c[M][E.name].querySelector("button").click()}setTimeout(()=>{for(let M of Ei)(function E(){let H=Math.floor(Math.random()*o[M].length);!c[M][o[M][H].name].classList.contains("selectedItem")&&(s.basic||!s.basic&&!v(o[M][H].name))?c[M][o[M][H].name].querySelector("button").click():E()})()})}if(s.gear){for(let M in l){let E=l[M]||Er;E.name&&a[M][E.name].querySelector("button").click()}setTimeout(()=>{let M=!1,E=Zn.length,H=Zn.length,V=[];for(let j in l)V.push(l[j].name);(function j(){setTimeout(()=>{let T=Math.floor(Math.random()*E);(function F(){let Q=Math.floor(Math.random()*o.gear.length);!V.includes(o.gear[Q].name)&&!a[H][o.gear[Q].name].classList.contains("switchable")&&(!M||M&&Q!=0)&&(s.basic||!s.basic&&!v(o.gear[Q].name))?(a[H][o.gear[!M&&s.parasol&&!T?0:Q].name].querySelector("button").click(),!M&&!T?M=!0:M||E--):F()})(),--H&&j()},25)})()},50)}z(X,r.randomize.ongoing=!1,r)}function v(M){let E=!1,H=M.split(" ");return E=f.includes(H[0])||p.includes(H[0])||M=="Mining Helmet"||_.includes(H[0]),E}const y=M=>z(Li,s.parasol=M.detail,s),w=M=>z(Li,s.armor=M.detail,s),k=M=>z(Li,s.gear=M.detail,s),S=M=>z(Li,s.basic=M.detail,s);function P(M){ce[M?"unshift":"push"](()=>{d=M,t(1,d)})}const W=()=>z(X,r.randomize.ongoing=!1,r),O=M=>{i||It(M)},L=()=>{i&&b()},R=M=>{i&&It(M)},G=()=>d.focus();return n.$$.update=()=>{n.$$.dirty&1&&t(2,i=s.armor||s.gear)},[s,d,i,r,b,y,w,k,S,P,W,O,L,R,G]}class v0 extends Ie{constructor(e){super(),Ce(this,e,b0,g0,pe,{})}}function Sc(n,e,t){const i=n.slice();return i[5]=e[t],i}function y0(n){let e,t=Re(n[1]),i=[];for(let s=0;s<t.length;s+=1)i[s]=Tc(Sc(n,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=mt()},m(s,r){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(s,r);D(s,e,r)},p(s,r){if(r&2){t=Re(s[1]);let o;for(o=0;o<t.length;o+=1){const a=Sc(s,t,o);i[o]?i[o].p(a,r):(i[o]=Tc(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&N(e),vt(i,s)}}}function w0(n){let e,t,i;return{c(){e=g("span"),t=ee("— "),i=ee(n[1]),m(e,"id","info"),m(e,"class","svelte-155nax9")},m(s,r){D(s,e,r),h(e,t),h(e,i)},p(s,r){r&2&&ke(i,s[1])},d(s){s&&N(e)}}}function Tc(n){let e,t,i=n[5]+"",s;return{c(){e=g("span"),t=ee("— "),s=ee(i),m(e,"id","info"),m(e,"class","svelte-155nax9")},m(r,o){D(r,e,o),h(e,t),h(e,s)},p(r,o){o&2&&i!==(i=r[5]+"")&&ke(s,i)},d(r){r&&N(e)}}}function k0(n){let e,t,i,s,r,o,a;function l(d,f){return typeof d[1]=="string"?w0:y0}let c=l(n),u=c(n);return{c(){e=g("li"),t=g("span"),i=ee("v"),s=ee(n[0]),r=C(),o=g("i"),o.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":Af[n[2][0]%10])+", 20"+n[2][2]}`,a=C(),u.c(),m(t,"id","version"),m(t,"class","svelte-155nax9"),m(o,"id","date"),m(o,"class","svelte-155nax9"),m(e,"class","svelte-155nax9")},m(d,f){D(d,e,f),h(e,t),h(t,i),h(t,s),h(e,r),h(e,o),h(e,a),u.m(e,null)},p(d,[f]){f&1&&ke(s,d[0]),c===(c=l(d))&&u?u.p(d,f):(u.d(1),u=c(d),u&&(u.c(),u.m(e,null)))},i:Z,o:Z,d(d){d&&N(e),u.d()}}}function C0(n,e,t){let{version:i,date:s,text:r}=e,o=s.split("/"),a=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=l=>{"version"in l&&t(0,i=l.version),"date"in l&&t(4,s=l.date),"text"in l&&t(1,r=l.text)},[i,r,o,a,s]}class rt extends Ie{constructor(e){super(),Ce(this,e,C0,k0,pe,{version:0,date:4,text:1})}}function I0(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v,y,w,k,S,P,W,O,L,R,G,M,E,H,V,j,T,F,Q,te,ne,ie,le,ue,q,x,we,Ee,Ae,Ue,qe,Pe,Me,fe,We,st,Ut,qt;return r=new rt({props:{version:"3.27.0",date:"7/6/25",text:["Implemented data synchronization process","Restricted build features to those with a user account"]}}),a=new rt({props:{version:"3.26.8",date:"10/3/25",text:"Removed current gear-related mutual exclusions (salamanders)"}}),c=new rt({props:{version:"3.26.7",date:"5/4/24",text:["Added special ability cooldown stat to gears","Fixed page size and zoom occasionally breaking"]}}),d=new rt({props:{version:"3.26.6",date:"28/3/24",text:"Added 'support me' link in the case of any kind act"}}),p=new rt({props:{version:"3.26.5",date:"22/3/24",text:"Added policy information"}}),b=new rt({props:{version:"3.26.4",date:"21/3/24",text:["Added feature to copy stats as text","Fixed detailed view prompt activating while scrolling"]}}),y=new rt({props:{version:"3.26.3",date:"24/2/24",text:"Reimplemented 'Strict' filter type in search options"}}),k=new rt({props:{version:"3.26.2",date:"22/2/24",text:"Fixed build randomizer not working properly"}}),P=new rt({props:{version:"3.26.1",date:"22/2/24",text:"Holding Shift and interacting with a dropdown item or simply holding down on it activates detailed view prompt"}}),O=new rt({props:{version:"3.26.0",date:"21/2/24",text:"Added detailed view prompt to armor and gear whenever the selected item's icon is clicked"}}),R=new rt({props:{version:"3.25.9",date:"14/1/24",text:"Added build costs visibility while 'screenshot mode' is active"}}),M=new rt({props:{version:"3.25.8",date:"11/1/24",text:"Fixed mutually exclusive gear staying disabled when deselecting the selected item"}}),H=new rt({props:{version:"3.25.7",date:"9/1/24",text:["Enabled 'unsaved changes' prompt to appear before leaving site when certain conditions are met","Fixed dropdowns blocking interactions behind them for a short period after being closed","Fixed dropdown sort incorrectly defaulting to the last sorted list in some cases"]}}),j=new rt({props:{version:"3.25.6",date:"7/1/24",text:"Fixed armor filter not working properly when 'Exclusive' filter type and 'No Stats' option were selected"}}),F=new rt({props:{version:"3.25.5",date:"6/1/24",text:["Fixed issue with switching gear slots while full weapon view was on","Tools are now selectable even if full weapon view is on"]}}),te=new rt({props:{version:"3.25.4",date:"5/1/24",text:'Fixed crash caused by using the build randomizer while "Force Mushroom Parasol" option was on'}}),ie=new rt({props:{version:"3.25.3",date:"5/1/24",text:["Added feature to swap gear slots when clicking on an already selected gear item","Added visual cues to both deselecting and swapping options for dropdown items"]}}),ue=new rt({props:{version:"3.25.2",date:"3/1/24",text:["Replaced 'Strict' filter type with 'Exclusive' filter type in search options of dropdowns","Added icons to resource links and credits"]}}),x=new rt({props:{version:"3.25.1",date:"2/1/24",text:`"Allow 'basic' equipment" option is no longer restricted when "Randomize gear" option isn't selected in the build randomizer`}}),Ee=new rt({props:{version:"3.25.0",date:"2/1/24",text:["Added 'Build Costs' feature","Removed spectacles from 'basic' equipment pool in the build randomizer"]}}),Ue=new rt({props:{version:"3.24.5",date:"31/12/23",text:"v3 Release"}}),{c(){e=g("div"),t=g("span"),t.textContent="Changelog",i=C(),s=g("ul"),oe(r.$$.fragment),o=C(),oe(a.$$.fragment),l=C(),oe(c.$$.fragment),u=C(),oe(d.$$.fragment),f=C(),oe(p.$$.fragment),_=C(),oe(b.$$.fragment),v=C(),oe(y.$$.fragment),w=C(),oe(k.$$.fragment),S=C(),oe(P.$$.fragment),W=C(),oe(O.$$.fragment),L=C(),oe(R.$$.fragment),G=C(),oe(M.$$.fragment),E=C(),oe(H.$$.fragment),V=C(),oe(j.$$.fragment),T=C(),oe(F.$$.fragment),Q=C(),oe(te.$$.fragment),ne=C(),oe(ie.$$.fragment),le=C(),oe(ue.$$.fragment),q=C(),oe(x.$$.fragment),we=C(),oe(Ee.$$.fragment),Ae=C(),oe(Ue.$$.fragment),qe=C(),Pe=g("div"),Me=g("div"),fe=g("button"),fe.textContent="OK",m(t,"id","title"),m(s,"id","contents"),m(s,"class","svelte-15kc2i1"),m(fe,"id","firstFocusable lastFocusable"),m(Pe,"class","promptOptions svelte-15kc2i1"),m(e,"class","infoPrompt svelte-15kc2i1")},m(de,Ht){D(de,e,Ht),h(e,t),h(e,i),h(e,s),se(r,s,null),h(s,o),se(a,s,null),h(s,l),se(c,s,null),h(s,u),se(d,s,null),h(s,f),se(p,s,null),h(s,_),se(b,s,null),h(s,v),se(y,s,null),h(s,w),se(k,s,null),h(s,S),se(P,s,null),h(s,W),se(O,s,null),h(s,L),se(R,s,null),h(s,G),se(M,s,null),h(s,E),se(H,s,null),h(s,V),se(j,s,null),h(s,T),se(F,s,null),h(s,Q),se(te,s,null),h(s,ne),se(ie,s,null),h(s,le),se(ue,s,null),h(s,q),se(x,s,null),h(s,we),se(Ee,s,null),h(s,Ae),se(Ue,s,null),h(e,qe),h(e,Pe),h(Pe,Me),h(Me,fe),n[2](fe),st=!0,Ut||(qt=[A(fe,"click",n[3]),A(fe,"keydown",n[4]),A(e,"introstart",n[5])],Ut=!0)},p:Z,i(de){st||(B(r.$$.fragment,de),B(a.$$.fragment,de),B(c.$$.fragment,de),B(d.$$.fragment,de),B(p.$$.fragment,de),B(b.$$.fragment,de),B(y.$$.fragment,de),B(k.$$.fragment,de),B(P.$$.fragment,de),B(O.$$.fragment,de),B(R.$$.fragment,de),B(M.$$.fragment,de),B(H.$$.fragment,de),B(j.$$.fragment,de),B(F.$$.fragment,de),B(te.$$.fragment,de),B(ie.$$.fragment,de),B(ue.$$.fragment,de),B(x.$$.fragment,de),B(Ee.$$.fragment,de),B(Ue.$$.fragment,de),de&&ye(()=>{st&&(We||(We=he(e,ze,{duration:250},!0)),We.run(1))}),st=!0)},o(de){U(r.$$.fragment,de),U(a.$$.fragment,de),U(c.$$.fragment,de),U(d.$$.fragment,de),U(p.$$.fragment,de),U(b.$$.fragment,de),U(y.$$.fragment,de),U(k.$$.fragment,de),U(P.$$.fragment,de),U(O.$$.fragment,de),U(R.$$.fragment,de),U(M.$$.fragment,de),U(H.$$.fragment,de),U(j.$$.fragment,de),U(F.$$.fragment,de),U(te.$$.fragment,de),U(ie.$$.fragment,de),U(ue.$$.fragment,de),U(x.$$.fragment,de),U(Ee.$$.fragment,de),U(Ue.$$.fragment,de),de&&(We||(We=he(e,ze,{duration:250},!1)),We.run(0)),st=!1},d(de){de&&N(e),re(r),re(a),re(c),re(d),re(p),re(b),re(y),re(k),re(P),re(O),re(R),re(M),re(H),re(j),re(F),re(te),re(ie),re(ue),re(x),re(Ee),re(Ue),n[2](null),de&&We&&We.end(),Ut=!1,be(qt)}}}function E0(n,e,t){let i;Y(n,X,c=>t(1,i=c));let s;function r(c){ce[c?"unshift":"push"](()=>{s=c,t(0,s)})}return[s,i,r,()=>z(X,i.changelog.ongoing=!1,i),c=>{Ct(c),It(c)},()=>s.focus()]}class S0 extends Ie{constructor(e){super(),Ce(this,e,E0,I0,pe,{})}}function T0(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v,y,w,k,S,P,W;return{c(){e=g("div"),t=g("span"),t.textContent="Resources",i=C(),s=g("ul"),r=g("li"),o=g("iconify-icon"),a=C(),l=g("a"),l.textContent="Fantastic Frontier Wiki",c=C(),u=g("li"),u.innerHTML='<iconify-icon icon="ic:baseline-discord" class="svelte-1d9mkog"></iconify-icon> <a href="https://discord.gg/ff" target="_blank" class="svelte-1d9mkog">Fantastic Frontier Discord Server</a>',d=C(),f=g("li"),f.innerHTML='<iconify-icon icon="simple-icons:googledocs" class="svelte-1d9mkog"></iconify-icon> <a href="https://docs.google.com/document/d/1H9HXoExCDVfXx15LQ4Te-2tTjrLFB-XCbMmx44Ynld4/edit" target="_blank" class="svelte-1d9mkog">Fantastic Frontier Build List</a>',p=C(),_=g("li"),_.innerHTML='<iconify-icon icon="simple-icons:googledocs" class="svelte-1d9mkog"></iconify-icon> <a href="https://docs.google.com/document/d/15vwSRojTqZ8LI09Wq4dvGF1kSTPmH2_gECQvwlSFki8/edit" target="_blank" class="svelte-1d9mkog">Fantastic Frontier Max Stat List</a>',b=C(),v=g("div"),y=g("div"),w=g("button"),w.textContent="OK",m(t,"id","title"),Oe(o,"icon","simple-icons:fandom"),Oe(o,"class","svelte-1d9mkog"),m(l,"id","firstFocusable"),m(l,"href","https://fantastic-frontier-roblox.fandom.com/wiki/Fantastic_Frontier_-_Roblox_Wiki"),m(l,"target","_blank"),m(l,"class","svelte-1d9mkog"),m(r,"class","svelte-1d9mkog"),m(u,"class","svelte-1d9mkog"),m(f,"class","svelte-1d9mkog"),m(_,"class","svelte-1d9mkog"),m(s,"class","svelte-1d9mkog"),m(w,"id","lastFocusable"),m(v,"class","promptOptions"),m(e,"class","infoPrompt")},m(O,L){D(O,e,L),h(e,t),h(e,i),h(e,s),h(s,r),h(r,o),h(r,a),h(r,l),h(s,c),h(s,u),h(s,d),h(s,f),h(s,p),h(s,_),h(e,b),h(e,v),h(v,y),h(y,w),n[2](w),S=!0,P||(W=[A(l,"keydown",Ct),A(w,"click",n[3]),A(w,"keydown",It),A(e,"introstart",n[4])],P=!0)},p:Z,i(O){S||(O&&ye(()=>{S&&(k||(k=he(e,ze,{duration:250},!0)),k.run(1))}),S=!0)},o(O){O&&(k||(k=he(e,ze,{duration:250},!1)),k.run(0)),S=!1},d(O){O&&N(e),n[2](null),O&&k&&k.end(),P=!1,be(W)}}}function N0(n,e,t){let i;Y(n,X,l=>t(1,i=l));let s;function r(l){ce[l?"unshift":"push"](()=>{s=l,t(0,s)})}return[s,i,r,()=>z(X,i.resources.ongoing=!1,i),()=>s.focus()]}class O0 extends Ie{constructor(e){super(),Ce(this,e,N0,T0,pe,{})}}function Nc(n,e,t){const i=n.slice();return i[7]=e[t],i}function Oc(n,e,t){const i=n.slice();return i[10]=e[t],i}function Rc(n){let e,t,i,s,r,o,a,l=n[1][n[7]][n[10]].toLocaleString()+" Gold",c,u;return{c(){e=g("div"),t=g("span"),t.textContent=`${n[10].charAt(0).toUpperCase()+n[10].slice(1)+":"}`,i=C(),s=g("img"),o=C(),a=g("span"),c=ee(l),u=C(),m(t,"id","costTypeName"),m(t,"class","svelte-1u2pv9q"),et(s.src,r="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(s,"src",r),m(s,"alt",""),m(s,"class","svelte-1u2pv9q"),m(e,"class","svelte-1u2pv9q")},m(d,f){D(d,e,f),h(e,t),h(e,i),h(e,s),h(e,o),h(e,a),h(a,c),h(e,u)},p(d,f){f&2&&l!==(l=d[1][d[7]][d[10]].toLocaleString()+" Gold")&&ke(c,l)},d(d){d&&N(e)}}}function Ac(n){let e,t,i,s,r,o=Re(["min","avg","max"]),a=[];for(let l=0;l<3;l+=1)a[l]=Rc(Oc(n,o,l));return{c(){e=g("div"),t=g("span"),t.textContent=`${n[7].charAt(0).toUpperCase()+n[7].slice(1)+" Costs"}`,i=C(),s=g("div");for(let l=0;l<3;l+=1)a[l].c();r=C(),m(t,"id","subtitle"),m(t,"class","svelte-1u2pv9q"),m(s,"class","costTypes svelte-1u2pv9q"),m(e,"class","costs svelte-1u2pv9q"),m(e,"id",n[7])},m(l,c){D(l,e,c),h(e,t),h(e,i),h(e,s);for(let u=0;u<3;u+=1)a[u]&&a[u].m(s,null);h(e,r)},p(l,c){if(c&2){o=Re(["min","avg","max"]);let u;for(u=0;u<3;u+=1){const d=Oc(l,o,u);a[u]?a[u].p(d,c):(a[u]=Rc(d),a[u].c(),a[u].m(s,null))}for(;u<3;u+=1)a[u].d(1)}},d(l){l&&N(e),vt(a,l)}}}function R0(n){let e,t,i,s,r,o,a,l,c,u,d=Re(["armor","gear","total"]),f=[];for(let p=0;p<3;p+=1)f[p]=Ac(Nc(n,d,p));return{c(){e=g("div"),t=g("div");for(let p=0;p<3;p+=1)f[p].c();i=C(),s=g("div"),r=g("div"),o=g("button"),o.textContent="OK",m(t,"class","costsInfo svelte-1u2pv9q"),m(o,"id","firstFocusable lastFocusable"),m(s,"class","promptOptions svelte-1u2pv9q"),m(e,"class","buildCosts svelte-1u2pv9q")},m(p,_){D(p,e,_),h(e,t);for(let b=0;b<3;b+=1)f[b]&&f[b].m(t,null);h(e,i),h(e,s),h(s,r),h(r,o),n[3](o),l=!0,c||(u=[A(o,"click",n[4]),A(o,"keydown",n[5]),A(e,"introstart",n[6])],c=!0)},p(p,[_]){if(_&2){d=Re(["armor","gear","total"]);let b;for(b=0;b<3;b+=1){const v=Nc(p,d,b);f[b]?f[b].p(v,_):(f[b]=Ac(v),f[b].c(),f[b].m(t,null))}for(;b<3;b+=1)f[b].d(1)}},i(p){l||(p&&ye(()=>{l&&(a||(a=he(e,ze,{duration:250},!0)),a.run(1))}),l=!0)},o(p){p&&(a||(a=he(e,ze,{duration:250},!1)),a.run(0)),l=!1},d(p){p&&N(e),vt(f,p),n[3](null),p&&a&&a.end(),c=!1,be(u)}}}function A0(n,e,t){let i,s;Y(n,Ft,u=>t(1,i=u)),Y(n,X,u=>t(2,s=u));let r;function o(u){ce[u?"unshift":"push"](()=>{r=u,t(0,r)})}return[r,i,s,o,()=>z(X,s.costs.ongoing=!1,s),u=>{Ct(u),It(u)},()=>r.focus()]}class D0 extends Ie{constructor(e){super(),Ce(this,e,A0,R0,pe,{})}}function Dc(n,e,t){const i=n.slice();return i[19]=e[t][0],i[20]=e[t][1],i}function Pc(n,e,t){const i=n.slice();return i[11]=e[t],i}function Mc(n,e,t){const i=n.slice();return i[16]=e[t],i}function P0(n){const e=n.slice(),t=e[14]?e[5][e[2].name][e[11].name]:`${Math.round(e[11].mult*100*10)/10}<b>%</b> ${Jt[e[11].type]}`;return e[15]=t,e}function Lc(n){const e=n.slice(),t=e[5][e[2].name]!=null&&e[5][e[2].name][e[11].name]!=null;return e[14]=t,e}function M0(n){let e;return{c(){e=g("span"),e.textContent=`Slot: ${n[2].slot.charAt(0).toUpperCase()+n[2].slot.slice(1)}`},m(t,i){D(t,e,i)},p:Z,d(t){t&&N(e)}}}function L0(n){let e;return{c(){e=g("span"),e.textContent=`Type: ${n[2].tool?"Tool":n[2].info.type}`},m(t,i){D(t,e,i)},p:Z,d(t){t&&N(e)}}}function F0(n){let e,t,i,s,r=Re(Object.entries(Jt)),o=[];for(let a=0;a<r.length;a+=1)o[a]=Fc(Dc(n,r,a));return{c(){e=g("div"),t=g("span"),t.textContent=`${n[2].noStats?"No stats available":"Stats:"}`,i=C(),s=g("div");for(let a=0;a<o.length;a+=1)o[a].c();m(t,"id","subtitle"),m(t,"class","svelte-1c4y2ce"),m(s,"class","svelte-1c4y2ce"),m(e,"id","itemStats"),m(e,"class","svelte-1c4y2ce")},m(a,l){D(a,e,l),h(e,t),h(e,i),h(e,s);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(s,null)},p(a,l){if(l&4){r=Re(Object.entries(Jt));let c;for(c=0;c<r.length;c+=1){const u=Dc(a,r,c);o[c]?o[c].p(u,l):(o[c]=Fc(u),o[c].c(),o[c].m(s,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}},d(a){a&&N(e),vt(o,a)}}}function B0(n){let e;function t(r,o){return r[2].tool?W0:q0}let s=t(n)(n);return{c(){s.c(),e=mt()},m(r,o){s.m(r,o),D(r,e,o)},p(r,o){s.p(r,o)},d(r){r&&N(e),s.d(r)}}}function U0(n){let e,t,i,s,r,o=(n[19]=="endurance"?n[2].stats[n[19]].toFixed(2):n[2].stats[n[19]])+"",a,l;return{c(){e=g("div"),t=g("img"),s=C(),r=g("span"),a=ee(o),l=C(),et(t.src,i="stats/"+n[19]+".svg")||m(t,"src",i),m(t,"alt",n[20]),m(t,"class","svelte-1c4y2ce"),m(r,"class","statValue svelte-1c4y2ce"),m(r,"id",n[19]),ae(r,"negative",n[2].stats[n[19]]<0),m(e,"class","svelte-1c4y2ce")},m(c,u){D(c,e,u),h(e,t),h(e,s),h(e,r),h(r,a),h(e,l)},p(c,u){u&4&&ae(r,"negative",c[2].stats[c[19]]<0)},d(c){c&&N(e)}}}function Fc(n){let e,t=n[2].stats[n[19]]!=0&&U0(n);return{c(){t&&t.c(),e=mt()},m(i,s){t&&t.m(i,s),D(i,e,s)},p(i,s){i[2].stats[i[19]]!=0&&t.p(i,s)},d(i){i&&N(e),t&&t.d(i)}}}function q0(n){let e,t,i,s,r,o=Re(n[2].moves),a=[];for(let l=0;l<o.length;l+=1)a[l]=qc(Pc(n,o,l));return{c(){e=g("div"),t=g("div"),i=g("div"),s=g("div"),s.innerHTML='<span class="svelte-1c4y2ce">Move</span> <span class="svelte-1c4y2ce">Base Value</span> <span class="svelte-1c4y2ce">Scaling(s)</span>',r=C();for(let l=0;l<a.length;l+=1)a[l].c();m(s,"id","subtitle"),m(s,"class","svelte-1c4y2ce"),m(i,"class","svelte-1c4y2ce"),m(t,"id","itemMoves"),m(t,"class","svelte-1c4y2ce"),m(e,"id","itemMovesCont"),m(e,"class","svelte-1c4y2ce")},m(l,c){D(l,e,c),h(e,t),h(t,i),h(i,s),h(i,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(i,null)},p(l,c){if(c&52){o=Re(l[2].moves);let u;for(u=0;u<o.length;u+=1){const d=Pc(l,o,u);a[u]?a[u].p(d,c):(a[u]=qc(d),a[u].c(),a[u].m(i,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=o.length}},d(l){l&&N(e),vt(a,l)}}}function W0(n){let e;return{c(){e=g("div"),e.innerHTML='<span id="subtitle" class="svelte-1c4y2ce">No moves available</span>',m(e,"id","itemMovesCont"),m(e,"class","svelte-1c4y2ce"),Ye(e,"text-align","center")},m(t,i){D(t,e,i)},p:Z,d(t){t&&N(e)}}}function H0(n){let e,t,i,s,r,o;function a(d,f){return!d[11].type||!d[11].type.includes("/")?Bc:z0}function l(d,f){return f===Bc?P0(d):d}let c=a(n),u=c(l(n,c));return{c(){e=g("div"),t=g("span"),t.textContent=`${n[11].name}`,i=C(),s=g("span"),s.textContent=`${(n[11].name.includes("Fantastic Beamstorm")?"~":"")+n[11].base}`,r=C(),u.c(),o=C(),m(t,"class","svelte-1c4y2ce"),m(s,"class","svelte-1c4y2ce"),m(e,"class","svelte-1c4y2ce")},m(d,f){D(d,e,f),h(e,t),h(e,i),h(e,s),h(e,r),u.m(e,null),h(e,o)},p(d,f){u.p(l(d,c),f)},d(d){d&&N(e),u.d()}}}function z0(n){let e,t=Re(n[11].type.split("/")),i=[];for(let s=0;s<t.length;s+=1)i[s]=Uc(Mc(n,t,s));return{c(){e=g("span");for(let s=0;s<i.length;s+=1)i[s].c();m(e,"id","hybrid"),m(e,"class","svelte-1c4y2ce")},m(s,r){D(s,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(s,r){if(r&4){t=Re(s[11].type.split("/"));let o;for(o=0;o<t.length;o+=1){const a=Mc(s,t,o);i[o]?i[o].p(a,r):(i[o]=Uc(a),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&N(e),vt(i,s)}}}function Bc(n){let e,t=n[15]+"";return{c(){e=g("span"),m(e,"class","svelte-1c4y2ce"),Ye(e,"font-size",n[15].length>30?"2.5rem":"")},m(i,s){D(i,e,s),e.innerHTML=t},p:Z,d(i){i&&N(e)}}}function Uc(n){let e,t=Math.round(n[11][`${n[16]}Mult`]*100*10)/10+"",i,s,r,o=Jt[n[16]]+"",a,l;return{c(){e=g("span"),i=ee(t),s=g("b"),s.textContent="%",r=C(),a=ee(o),l=C()},m(c,u){D(c,e,u),h(e,i),h(e,s),h(e,r),h(e,a),h(e,l)},p:Z,d(c){c&&N(e)}}}function qc(n){let e=!n[4].includes(n[11].name),t,i=e&&H0(Lc(n));return{c(){i&&i.c(),t=mt()},m(s,r){i&&i.m(s,r),D(s,t,r)},p(s,r){e&&i.p(Lc(s),r)},d(s){s&&N(t),i&&i.d(s)}}}function j0(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v,y,w,k,S,P,W,O,L,R,G,M,E,H,V,j,T,F,Q,te,ne,ie,le,ue,q;function x(Pe,Me){return Pe[3]?L0:M0}let Ee=x(n)(n);function Ae(Pe,Me){return Pe[3]?B0:F0}let qe=Ae(n)(n);return{c(){e=g("div"),t=g("div"),i=g("a"),s=g("img"),o=C(),a=g("div"),l=g("span"),l.textContent="Click the image in order to visit the wiki page",c=C(),u=g("span"),u.textContent=`Name: ${n[2].name}`,d=C(),Ee.c(),f=C(),qe.c(),p=C(),_=g("div"),b=g("span"),b.textContent="Costs:",v=C(),y=g("div"),w=g("div"),k=g("span"),k.textContent="Minimum:",S=C(),P=g("img"),O=C(),L=g("span"),L.textContent=`${n[2].cost.min==null?"Unpurchasable":n[2].cost.min.toLocaleString()+" Gold"}`,R=C(),G=g("div"),M=g("span"),M.textContent="Maximum:",E=C(),H=g("img"),j=C(),T=g("span"),T.textContent=`${n[2].cost.max==null?"Unpurchasable":n[2].cost.max.toLocaleString()+" Gold"}`,F=C(),Q=g("div"),te=g("div"),ne=g("button"),ne.textContent="OK",et(s.src,r=n[2].image)||m(s,"src",r),m(s,"alt",""),m(s,"class","svelte-1c4y2ce"),m(i,"href",n[2].link),m(i,"target","_blank"),m(i,"class","svelte-1c4y2ce"),m(l,"id","tip"),m(l,"class","svelte-1c4y2ce"),m(a,"class","svelte-1c4y2ce"),m(t,"id","basicInfo"),m(t,"class","svelte-1c4y2ce"),m(b,"id","subtitle"),m(b,"class","svelte-1c4y2ce"),m(k,"class","svelte-1c4y2ce"),et(P.src,W="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(P,"src",W),m(P,"alt",""),m(P,"class","svelte-1c4y2ce"),m(L,"class","svelte-1c4y2ce"),m(w,"class","svelte-1c4y2ce"),m(M,"class","svelte-1c4y2ce"),et(H.src,V="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(H,"src",V),m(H,"alt",""),m(H,"class","svelte-1c4y2ce"),m(T,"class","svelte-1c4y2ce"),m(G,"class","svelte-1c4y2ce"),m(y,"class","svelte-1c4y2ce"),m(_,"id","itemCosts"),m(_,"class","svelte-1c4y2ce"),m(ne,"id","firstFocusable lastFocusable"),m(Q,"class","promptOptions svelte-1c4y2ce"),m(e,"class","itemInfo svelte-1c4y2ce")},m(Pe,Me){D(Pe,e,Me),h(e,t),h(t,i),h(i,s),h(t,o),h(t,a),h(a,l),h(a,c),h(a,u),h(a,d),Ee.m(a,null),h(e,f),qe.m(e,null),h(e,p),h(e,_),h(_,b),h(_,v),h(_,y),h(y,w),h(w,k),h(w,S),h(w,P),h(w,O),h(w,L),h(y,R),h(y,G),h(G,M),h(G,E),h(G,H),h(G,j),h(G,T),h(e,F),h(e,Q),h(Q,te),h(te,ne),n[6](ne),le=!0,ue||(q=[A(ne,"click",n[7]),A(ne,"keydown",n[8]),A(e,"introstart",n[9]),A(e,"outroend",n[10])],ue=!0)},p(Pe,[Me]){Ee.p(Pe,Me),qe.p(Pe,Me)},i(Pe){le||(Pe&&ye(()=>{le&&(ie||(ie=he(e,ze,{duration:250},!0)),ie.run(1))}),le=!0)},o(Pe){Pe&&(ie||(ie=he(e,ze,{duration:250},!1)),ie.run(0)),le=!1},d(Pe){Pe&&N(e),Ee.d(),qe.d(),n[6](null),Pe&&ie&&ie.end(),ue=!1,be(q)}}}function V0(n,e,t){let i;Y(n,X,_=>t(1,i=_));let s,r=i.item.data,o=r.type=="gear",a=["Charged Basic Attack","Charged Solar Beam"],l={"Void Spike Ultradagger":{"Void Needle":"100<b>%</b> Melee - 562.5<b>%</b> Armor"},"Pureblood Dagger":{"Basic Attack":"200<b>%</b> HighestBonus - 100<b>%</b> LowerBonuses","Blood Sap":"200<b>%</b> HighestBonus - 100<b>%</b> LowerBonuses","+ HP per Blood Sap":"(200<b>%</b> HighestBonus - 100<b>%</b> LowerBonuses) / 2"},"Gnome Rocket Launcher":{"Basic Attack":"None"}};function c(_){ce[_?"unshift":"push"](()=>{s=_,t(0,s)})}return[s,i,r,o,a,l,c,()=>z(X,i.item.ongoing=!1,i),_=>{Ct(_),It(_)},()=>s.focus(),()=>{r.element&&r.element.querySelector("button").focus()}]}class G0 extends Ie{constructor(e){super(),Ce(this,e,V0,j0,pe,{})}}function K0(n){let e,t,i,s,r,o,a,l,c,u,d,f;return{c(){e=g("div"),t=g("span"),t.textContent="Fantastic Calculator Policy",i=C(),s=g("div"),s.innerHTML=`<span id="subtitle" class="svelte-1fj0tys">About</span> <p class="svelte-1fj0tys">This tool is a passion project, one that is independent and is not
            affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span id="subtitle" class="svelte-1fj0tys">Privacy Policy</span> <p class="svelte-1fj0tys">This policy explains what information Fantastic Calculator (&quot;we&quot;,
            &quot;us&quot; or &quot;our&quot;) collects, uses, and shares when you use our website.</p> <span id="subtitle" class="svelte-1fj0tys">Information We Collect</span> <p class="svelte-1fj0tys">We collect information provided by you; that is which is inputted
            directly into our tool. We also collect information about how you
            use and interact with our website, general demographic details, and
            information about your device or browser.</p> <span id="subtitle" class="svelte-1fj0tys">How We Use This Information</span> <p class="svelte-1fj0tys">Your information may be utilized to test and improve the tool, once
            the aggregated, non-identifying information provided has been
            collected and analyzed.</p> <span id="subtitle" class="svelte-1fj0tys">Contact</span> <p class="svelte-1fj0tys">For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,r=C(),o=g("div"),a=g("div"),l=g("button"),l.textContent="OK",m(t,"id","title"),m(s,"id","contents"),m(l,"id","firstFocusable lastFocusable"),m(o,"class","promptOptions svelte-1fj0tys"),m(e,"class","infoPrompt svelte-1fj0tys")},m(p,_){D(p,e,_),h(e,t),h(e,i),h(e,s),h(e,r),h(e,o),h(o,a),h(a,l),n[2](l),u=!0,d||(f=[A(l,"click",n[3]),A(l,"keydown",n[4])],d=!0)},p:Z,i(p){u||(p&&ye(()=>{u&&(c||(c=he(e,ze,{duration:250},!0)),c.run(1))}),u=!0)},o(p){p&&(c||(c=he(e,ze,{duration:250},!1)),c.run(0)),u=!1},d(p){p&&N(e),n[2](null),p&&c&&c.end(),d=!1,be(f)}}}function Y0(n,e,t){let i;Y(n,X,l=>t(1,i=l));let s;function r(l){ce[l?"unshift":"push"](()=>{s=l,t(0,s)})}return[s,i,r,()=>z(X,i.policy.ongoing=!1,i),l=>{Ct(l),It(l)}]}class Q0 extends Ie{constructor(e){super(),Ce(this,e,Y0,K0,pe,{})}}function J0(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v,y,w,k,S,P;return{c(){e=g("div"),t=g("span"),t.textContent="Support Me",i=C(),s=g("p"),s.textContent="Thank you for your continuous use of my site!",r=C(),o=g("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,a=C(),l=g("p"),l.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,c=C(),u=g("a"),u.innerHTML='<img src="kofi-badge.png" alt="Ko-fi" class="svelte-ywc66p"/>',d=C(),f=g("div"),p=g("div"),_=g("button"),_.textContent="DON'T SHOW AGAIN",b=C(),v=g("div"),y=g("button"),y.textContent="MAYBE LATER",m(t,"id","title"),m(u,"class","flex br-1 light-hover svelte-ywc66p"),m(u,"href","https://ko-fi.com/xt8ss"),m(u,"target","_blank"),m(f,"class","promptOptions"),m(e,"class","supportCont infoPrompt svelte-ywc66p")},m(W,O){D(W,e,O),h(e,t),h(e,i),h(e,s),h(e,r),h(e,o),h(e,a),h(e,l),h(e,c),h(e,u),h(e,d),h(e,f),h(f,p),h(p,_),h(f,b),h(f,v),h(v,y),n[4](y),k=!0,S||(P=[A(_,"click",n[3]),A(y,"click",n[5]),A(e,"introstart",n[6])],S=!0)},p:Z,i(W){k||(W&&ye(()=>{k&&(w||(w=he(e,ze,{duration:250},!0)),w.run(1))}),k=!0)},o(W){W&&(w||(w=he(e,ze,{duration:250},!1)),w.run(0)),k=!1},d(W){W&&N(e),n[4](null),W&&w&&w.end(),S=!1,be(P)}}}function X0(n,e,t){let i,s;Y(n,zn,u=>t(1,i=u)),Y(n,X,u=>t(2,s=u));let r;const o=()=>{z(zn,i.showAgain=!1,i),z(X,s.donate.ongoing=!1,s)};function a(u){ce[u?"unshift":"push"](()=>{r=u,t(0,r)})}return[r,i,s,o,a,()=>{z(zn,i.timesDenied++,i),z(X,s.donate.ongoing=!1,s)},()=>r.focus()]}class x0 extends Ie{constructor(e){super(),Ce(this,e,X0,J0,pe,{})}}function Z0(n){let e,t,i,s,r,o,a,l,c,u,d,f;return{c(){e=g("div"),t=g("span"),t.textContent="Notice",i=C(),s=g("div"),s.innerHTML=`<p class="svelte-1r3ayw4">Due to site-related incompatibilities with the new user account
            interface, we ask you to manage your user account in another
            affiliated site in the meantime.</p> <p class="svelte-1r3ayw4">This includes any affiliation listed in our
            <a href="https://xt8ss.github.io/fantastic-hub/" class="svelte-1r3ayw4">Fantastic Hub</a>,
            as well as the hub itself.</p> <p class="svelte-1r3ayw4">Thank you for your understanding!</p>`,r=C(),o=g("div"),a=g("div"),l=g("button"),l.textContent="OK",m(t,"id","title"),m(s,"id","contents"),m(l,"id","firstFocusable lastFocusable"),m(o,"class","promptOptions svelte-1r3ayw4"),m(e,"class","infoPrompt svelte-1r3ayw4")},m(p,_){D(p,e,_),h(e,t),h(e,i),h(e,s),h(e,r),h(e,o),h(o,a),h(a,l),u=!0,d||(f=[A(l,"click",n[1]),A(l,"keydown",n[2])],d=!0)},p:Z,i(p){u||(p&&ye(()=>{u&&(c||(c=he(e,ze,{duration:250},!0)),c.run(1))}),u=!0)},o(p){p&&(c||(c=he(e,ze,{duration:250},!1)),c.run(0)),u=!1},d(p){p&&N(e),p&&c&&c.end(),d=!1,be(f)}}}function $0(n,e,t){let i;return Y(n,X,o=>t(0,i=o)),[i,()=>z(X,i.login.ongoing=!1,i),o=>{Ct(o),It(o)}]}class ew extends Ie{constructor(e){super(),Ce(this,e,$0,Z0,pe,{})}}function tw(n){let e,t;return{c(){e=g("hl"),t=ee(n[0])},m(i,s){D(i,e,s),h(e,t)},p(i,[s]){s&1&&ke(t,i[0])},i:Z,o:Z,d(i){i&&N(e)}}}function nw(n,e,t){let{startTime:i}=e;const s=Xt();let r=Date.now(),o=r+i*1e3,a=i,l=setInterval(()=>{let c=Date.now();t(0,a=i-Math.floor((c-r)/1e3)),c>=o&&(s("end"),clearTimeout(l))},50);return n.$$set=c=>{"startTime"in c&&t(1,i=c.startTime)},[a,i]}class iw extends Ie{constructor(e){super(),Ce(this,e,nw,tw,pe,{startTime:1})}}function Wc(n){let e,t;return{c(){e=g("a"),t=ee("Couldn't be redirected? Click here"),m(e,"href",Ff),m(e,"class","svelte-19x9isj")},m(i,s){D(i,e,s),h(e,t)},p:Z,d(i){i&&N(e)}}}function sw(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v;f=new iw({props:{startTime:10}}),f.$on("end",n[1]);let y=n[0]&&Wc();return{c(){e=g("div"),t=g("span"),t.textContent="Data Sync Required",i=C(),s=g("div"),r=g("p"),r.textContent=`It looks like you have data from previous sessions waiting to be\r
            synced to an account.`,o=C(),a=g("p"),a.textContent="You will be redirected to the data synchronization process shortly.",l=C(),c=g("p"),u=g("i"),u.textContent="Attempting redirect in",d=C(),oe(f.$$.fragment),p=ee("..."),_=C(),y&&y.c(),m(t,"id","title"),m(s,"class","contents flex fd-col rg-1 svelte-19x9isj"),m(e,"class","infoPrompt svelte-19x9isj"),ae(e,"redirectFail",n[0])},m(w,k){D(w,e,k),h(e,t),h(e,i),h(e,s),h(s,r),h(s,o),h(s,a),h(s,l),h(s,c),h(c,u),h(c,d),se(f,c,null),h(c,p),h(s,_),y&&y.m(s,null),v=!0},p(w,[k]){w[0]?y?y.p(w,k):(y=Wc(),y.c(),y.m(s,null)):y&&(y.d(1),y=null),(!v||k&1)&&ae(e,"redirectFail",w[0])},i(w){v||(B(f.$$.fragment,w),w&&ye(()=>{v&&(b||(b=he(e,ze,{duration:250},!0)),b.run(1))}),v=!0)},o(w){U(f.$$.fragment,w),w&&(b||(b=he(e,ze,{duration:250},!1)),b.run(0)),v=!1},d(w){w&&N(e),re(f),y&&y.d(),w&&b&&b.end()}}}let Ff="https://xt8ss.github.io/fantastic-hub/?dataSync=true";function rw(n,e,t){let i=!1;return[i,()=>{location.href=Ff,setTimeout(()=>t(0,i=!0),1e3)}]}class ow extends Ie{constructor(e){super(),Ce(this,e,rw,sw,pe,{})}}function lw(n,{from:e,to:t},i={}){const s=getComputedStyle(n),r=s.transform==="none"?"":s.transform,[o,a]=s.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:d=p=>Math.sqrt(p)*120,easing:f=Lf}=i;return{delay:u,duration:$n(d)?d(Math.sqrt(l*l+c*c)):d,easing:f,css:(p,_)=>{const b=_*l,v=_*c,y=p+_*e.width/t.width,w=p+_*e.height/t.height;return`transform: ${r} translate(${b}px, ${v}px) scale(${y}, ${w});`}}}function Hc(n,e,t){const i=n.slice();return i[2]=e[t],i}function aw(n){const e=n.slice(),t=`<span class="font-ms smaller-fs">${Bf.exec(e[2].text)}</span>`;return e[5]=t,e}function cw(n){let e=n[2].text+"",t;return{c(){t=ee(e)},m(i,s){D(i,t,s)},p(i,s){s&1&&e!==(e=i[2].text+"")&&ke(t,e)},d(i){i&&N(t)}}}function zc(n){let e,t=n[2].text.replace(Vc,n[5])+"",i;return{c(){e=new pu(!1),i=mt(),e.a=i},m(s,r){e.m(t,s,r),D(s,i,r)},p(s,r){r&1&&t!==(t=s[2].text.replace(Vc,s[5])+"")&&e.p(t)},d(s){s&&(N(i),e.d())}}}function jc(n,e){let t,i,s,r,o,a,l,c,u,d=Z,f;function p(y,w){return w&1&&(o=null),o==null&&(o=!!Bf.test(y[2].text)),o?zc:cw}function _(y,w){return w===zc?aw(y):y}let b=p(e,-1),v=b(_(e,b));return{key:n,first:null,c(){t=g("div"),i=g("iconify-icon"),r=C(),v.c(),a=C(),Oe(i,"icon",s=e[2].icon),m(t,"class","toast flex fai-center cg-1 br-1 bs ta-center svelte-jahp22"),this.first=t},m(y,w){D(y,t,w),h(t,i),h(t,r),v.m(t,null),h(t,a),f=!0},p(y,w){e=y,(!f||w&1&&s!==(s=e[2].icon))&&Oe(i,"icon",s),b===(b=p(e,w))&&v?v.p(_(e,b),w):(v.d(1),v=b(_(e,b)),v&&(v.c(),v.m(t,a)))},r(){u=t.getBoundingClientRect()},f(){sh(t),d(),_u(t,u)},a(){d(),d=ih(t,u,lw,{duration:250})},i(y){f||(y&&ye(()=>{f&&(c&&c.end(1),l=go(t,ze,{}),l.start())}),f=!0)},o(y){l&&l.invalidate(),y&&(c=bo(t,e[1],{})),f=!1},d(y){y&&N(t),v.d(),y&&c&&c.end()}}}function uw(n){let e,t=[],i=new Map,s,r=Re(n[0]);const o=a=>a[2];for(let a=0;a<r.length;a+=1){let l=Hc(n,r,a),c=o(l);i.set(c,t[a]=jc(c,l))}return{c(){e=g("div");for(let a=0;a<t.length;a+=1)t[a].c();m(e,"class","toasts centered flex fjc-center fai-center fd-col svelte-jahp22")},m(a,l){D(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);s=!0},p(a,[l]){if(l&1){r=Re(a[0]),je();for(let c=0;c<t.length;c+=1)t[c].r();t=fh(t,l,o,1,a,r,i,e,dh,jc,null,Hc);for(let c=0;c<t.length;c+=1)t[c].a();Ve()}},i(a){if(!s){for(let l=0;l<r.length;l+=1)B(t[l]);s=!0}},o(a){for(let l=0;l<t.length;l+=1)U(t[l]);s=!1},d(a){a&&N(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}let Bf=new RegExp("(?<={).+(?=})"),Vc=/{.+} ?/;function dw(n,e,t){let i;Y(n,Gr,r=>t(0,i=r));function s(r){return i.length?ze(r):Ze(r)}return[i,s]}class fw extends Ie{constructor(e){super(),Ce(this,e,dw,uw,pe,{})}}const{document:zt,window:vn}=Qf;function Gc(n,e,t){const i=n.slice();return i[62]=e[t],i}function Kc(n,e,t){const i=n.slice();return i[62]=e[t],i}function Yc(n){let e;return{c(){e=g("style"),e.textContent=`* {\r
                pointer-events: none;\r
            }\r
        `},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function Qc(n){let e;return{c(){e=g("link"),m(e,"rel","preload"),m(e,"as","image"),m(e,"href",n[62])},m(t,i){D(t,e,i)},p:Z,d(t){t&&N(e)}}}function Jc(n){let e;return{c(){e=g("style"),e.textContent=`body > div:not(.backgrounds),\r
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
        `},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function Xc(n){let e;return{c(){e=g("style"),e.textContent=`body {\r
                overflow: hidden;\r
            }\r
        `},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function xc(n){let e;return{c(){e=g("style"),e.textContent=`body {\r
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
            }`},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function Zc(n){let e,t;return{c(){e=g("img"),m(e,"class","background svelte-144mwq2"),et(e.src,t=n[62])||m(e,"src",t),m(e,"alt",""),ae(e,"active",n[20].indexOf(n[62])==n[10])},m(i,s){D(i,e,s)},p(i,s){s[0]&1049600&&ae(e,"active",i[20].indexOf(i[62])==i[10])},d(i){i&&N(e)}}}function $c(n){let e,t,i=Math.floor(n[17][n[2]]*100)+"",s,r,o,a;return{c(){e=g("span"),t=ee("Zoom: "),s=ee(i),r=g("b"),r.textContent="%",m(e,"class","info svelte-144mwq2"),m(e,"id","zoomLevel")},m(l,c){D(l,e,c),h(e,t),h(e,s),h(e,r),a=!0},p(l,c){(!a||c[0]&4)&&i!==(i=Math.floor(l[17][l[2]]*100)+"")&&ke(s,i)},i(l){a||(l&&ye(()=>{a&&(o||(o=he(e,Ze,{duration:150},!0)),o.run(1))}),a=!0)},o(l){l&&(o||(o=he(e,Ze,{duration:150},!1)),o.run(0)),a=!1},d(l){l&&N(e),l&&o&&o.end()}}}function eu(n){let e,t,i,s,r,o,a,l,c=n[16].armor.avg.toLocaleString()+" Gold",u,d,f,p,_,b,v,y,w,k=n[16].gear.avg.toLocaleString()+" Gold",S,P,W;return{c(){e=g("div"),t=g("div"),i=g("span"),i.textContent="Avg. armor cost:",s=C(),r=g("img"),a=C(),l=g("span"),u=ee(c),d=C(),f=g("div"),p=g("span"),p.textContent="Avg. gear cost:",_=C(),b=g("img"),y=C(),w=g("span"),S=ee(k),et(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(r,"src",o),m(r,"alt",""),m(r,"class","svelte-144mwq2"),m(t,"class","svelte-144mwq2"),et(b.src,v="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(b,"src",v),m(b,"alt",""),m(b,"class","svelte-144mwq2"),m(f,"class","svelte-144mwq2"),m(e,"class","costPreview svelte-144mwq2"),m(e,"id","specific")},m(O,L){D(O,e,L),h(e,t),h(t,i),h(t,s),h(t,r),h(t,a),h(t,l),h(l,u),h(e,d),h(e,f),h(f,p),h(f,_),h(f,b),h(f,y),h(f,w),h(w,S),W=!0},p(O,L){(!W||L[0]&65536)&&c!==(c=O[16].armor.avg.toLocaleString()+" Gold")&&ke(u,c),(!W||L[0]&65536)&&k!==(k=O[16].gear.avg.toLocaleString()+" Gold")&&ke(S,k)},i(O){W||(O&&ye(()=>{W&&(P||(P=he(e,Ze,{duration:150},!0)),P.run(1))}),W=!0)},o(O){O&&(P||(P=he(e,Ze,{duration:150},!1)),P.run(0)),W=!1},d(O){O&&N(e),O&&P&&P.end()}}}function tu(n){let e,t,i=n[3].name+"",s,r,o,a,l,c,u,d,f,p,_=n[3].desc+"",b,v,y,w,k;return{c(){e=g("div"),t=g("span"),s=ee(i),r=C(),o=g("button"),o.innerHTML='<iconify-icon icon="ri:share-fill"></iconify-icon> <span class="tooltip" id="right">Share build</span>',a=C(),l=g("span"),c=ee(`Description / Notes:\r
                `),u=g("br"),d=C(),f=g("br"),p=C(),b=ee(_),m(t,"id","buildName"),m(t,"class","svelte-144mwq2"),m(o,"class","svelte-144mwq2"),m(l,"class","tooltip"),m(l,"id","bottom"),m(e,"class","currentBuild svelte-144mwq2"),ae(e,"no-tooltip",n[11])},m(S,P){D(S,e,P),h(e,t),h(t,s),h(e,r),h(e,o),h(e,a),h(e,l),h(l,c),h(l,u),h(l,d),h(l,f),h(l,p),h(l,b),y=!0,w||(k=[A(o,"click",n[34]),A(o,"mouseenter",n[35]),A(o,"mouseleave",n[36])],w=!0)},p(S,P){(!y||P[0]&8)&&i!==(i=S[3].name+"")&&ke(s,i),(!y||P[0]&8)&&_!==(_=S[3].desc+"")&&ke(b,_),(!y||P[0]&2048)&&ae(e,"no-tooltip",S[11])},i(S){y||(S&&ye(()=>{y&&(v||(v=he(e,Ze,{duration:100},!0)),v.run(1))}),y=!0)},o(S){S&&(v||(v=he(e,Ze,{duration:100},!1)),v.run(0)),y=!1},d(S){S&&N(e),S&&v&&v.end(),w=!1,be(k)}}}function nu(n){let e,t,i,s,r,o,a,l,c=n[16].total.avg.toLocaleString()+" Gold",u,d,f;return{c(){e=g("div"),t=g("div"),i=g("span"),i.textContent="Avg. total cost:",s=C(),r=g("img"),a=C(),l=g("span"),u=ee(c),et(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/ba/GoldCoins.png")||m(r,"src",o),m(r,"alt",""),m(r,"class","svelte-144mwq2"),m(t,"class","svelte-144mwq2"),m(e,"class","costPreview svelte-144mwq2"),m(e,"id","total")},m(p,_){D(p,e,_),h(e,t),h(t,i),h(t,s),h(t,r),h(t,a),h(t,l),h(l,u),f=!0},p(p,_){(!f||_[0]&65536)&&c!==(c=p[16].total.avg.toLocaleString()+" Gold")&&ke(u,c)},i(p){f||(p&&ye(()=>{f&&(d||(d=he(e,Ze,{duration:150},!0)),d.run(1))}),f=!0)},o(p){p&&(d||(d=he(e,Ze,{duration:150},!1)),d.run(0)),f=!1},d(p){p&&N(e),p&&d&&d.end()}}}function hw(n){let e,t,i;return t=new ow({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function pw(n){let e,t,i;return t=new x0({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function _w(n){let e,t,i;return t=new Q0({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function mw(n){let e,t,i;return t=new S0({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function gw(n){let e,t,i;return t=new O0({}),t.$on("loadPending",n[18]),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function bw(n){let e,t,i;return t=new ew({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function vw(n){let e,t,i;return t=new v0({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function yw(n){let e,t,i;return t=new _0({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function ww(n){let e,t,i;return t=new D0({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function kw(n){let e,t,i;return t=new c0({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function Cw(n){let e,t,i;return t=new o0({}),t.$on("buildLoad",n[38]),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function Iw(n){let e,t,i;return t=new t0({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function Ew(n){let e,t,i;return t=new R1({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function Sw(n){let e,t,i,s;function r(a){n[37](a)}let o={};return n[9]!==void 0&&(o.loadID=n[9]),t=new Y1({props:o}),ce.push(()=>Be(t,"loadID",r)),t.$on("resetActions",n[22]),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(a,l){D(a,e,l),se(t,e,null),s=!0},p(a,l){const c={};!i&&l[0]&512&&(i=!0,c.loadID=a[9],Fe(()=>i=!1)),t.$set(c)},i(a){s||(B(t.$$.fragment,a),s=!0)},o(a){U(t.$$.fragment,a),s=!1},d(a){a&&N(e),re(t)}}}function Tw(n){let e,t,i;return t=new G0({}),{c(){e=g("div"),oe(t.$$.fragment),m(e,"class","promptCont svelte-144mwq2")},m(s,r){D(s,e,r),se(t,e,null),i=!0},p:Z,i(s){i||(B(t.$$.fragment,s),i=!0)},o(s){U(t.$$.fragment,s),i=!1},d(s){s&&N(e),re(t)}}}function iu(n){let e,t,i;return{c(){e=g("iconify-icon"),Oe(e,"icon","uil:exclamation"),Oe(e,"id","unseen"),Oe(e,"class","svelte-144mwq2")},m(s,r){D(s,e,r),i=!0},i(s){i||(s&&ye(()=>{i&&(t||(t=he(e,Ze,{duration:150},!0)),t.run(1))}),i=!0)},o(s){s&&(t||(t=he(e,Ze,{duration:150},!1)),t.run(0)),i=!1},d(s){s&&N(e),s&&t&&t.end()}}}function su(n){let e;return{c(){e=g("div"),e.innerHTML='<iconify-icon icon="eos-icons:three-dots-loading" class="svelte-144mwq2"></iconify-icon>',m(e,"class","promptCont svelte-144mwq2")},m(t,i){D(t,e,i)},d(t){t&&N(e)}}}function Nw(n){let e,t,i,s,r,o,a,l,c,u,d,f,p,_,b,v,y,w,k,S=n[6]?"Account":"Log In",P,W,O,L,R,G,M,E,H,V,j,T,F,Q,te,ne,ie,le,ue,q,x,we,Ee,Ae,Ue,qe,Pe,Me,fe,We,st,Ut,qt,de,Ht,J,Le,tt,ot,lt,Ot;ye(n[29]);let nt=!n[7]&&Yc(),Pt=Re(n[20]),I=[];for(let K=0;K<Pt.length;K+=1)I[K]=Qc(Kc(n,Pt,K));let De=(n[13]||!n[7])&&Jc(),ve=n[4].screenshot.ongoing&&n[17][n[2]]<=1&&Xc(),Ge=n[4].screenshot.ongoing&&xc(),ti=Re(n[20]),Et=[];for(let K=0;K<ti.length;K+=1)Et[K]=Zc(Gc(n,ti,K));let ut=n[8]&&$c(n),dt=n[4].screenshot.ongoing&&eu(n),ft=n[3]&&tu(n);E=new m1({}),V=new f0({}),Q=new Gy({}),ne=new n1({}),le=new h1({}),q=new T1({}),we=new fw({});let ht=n[4].screenshot.ongoing&&nu(n);const yl=[Tw,Sw,Ew,Iw,Cw,kw,ww,yw,vw,bw,gw,mw,_w,pw,hw],mn=[];function wl(K,me){return K[4].item.ongoing?0:K[12]||K[4].share.ongoing?1:K[4].export.ongoing?2:K[4].save.ongoing?3:K[4].load.ongoing&&!K[9]?4:K[4].delete.ongoing?5:K[4].costs.ongoing?6:K[4].bonus.ongoing?7:K[4].randomize.ongoing?8:K[4].login.ongoing?9:K[4].resources.ongoing?10:K[4].changelog.ongoing?11:K[4].policy.ongoing?12:K[4].donate.ongoing?13:K[4].sync.ongoing?14:-1}~(Ue=wl(n))&&(qe=mn[Ue]=yl[Ue](n));let bt=!n[14]&&iu(),Mt=!n[7]&&su();return{c(){e=C(),nt&&nt.c(),t=mt();for(let K=0;K<I.length;K+=1)I[K].c();i=mt(),De&&De.c(),s=mt(),ve&&ve.c(),r=mt(),Ge&&Ge.c(),o=mt(),a=C(),l=g("div"),c=g("audio"),d=C(),f=g("div");for(let K=0;K<Et.length;K+=1)Et[K].c();p=C(),ut&&ut.c(),_=C(),b=g("span"),b.innerHTML=`<iconify-icon icon="ic:baseline-discord" class="svelte-144mwq2"></iconify-icon>
    xt.ss
    <span class="tooltip svelte-144mwq2" id="right">Contact me on Discord!</span>`,v=C(),y=g("button"),y.innerHTML=`<a href="https://ko-fi.com/xt8ss" target="_blank" class="svelte-144mwq2">Support me
        <img src="kofi-badge.png" alt="" class="svelte-144mwq2"/></a>`,w=C(),k=g("button"),P=ee(S),W=C(),O=g("button"),O.innerHTML='<iconify-icon icon="charm:stack"></iconify-icon> <span class="tooltip" id="left">Resources</span>',L=C(),R=g("main"),dt&&dt.c(),G=C(),ft&&ft.c(),M=C(),oe(E.$$.fragment),H=C(),oe(V.$$.fragment),j=C(),T=g("div"),F=g("div"),oe(Q.$$.fragment),te=C(),oe(ne.$$.fragment),ie=C(),oe(le.$$.fragment),ue=C(),oe(q.$$.fragment),x=C(),oe(we.$$.fragment),Ee=C(),ht&&ht.c(),Ae=C(),qe&&qe.c(),Pe=C(),Me=g("button"),fe=g("iconify-icon"),We=C(),st=g("span"),st.textContent="Changelog",Ut=C(),bt&&bt.c(),qt=C(),de=g("button"),de.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',Ht=C(),J=g("span"),J.textContent=`${ho}`,Le=C(),Mt&&Mt.c(),tt=mt(),et(c.src,u=Rf+"/audios/select.mp3")||m(c,"src",u),m(f,"class","backgrounds"),m(b,"class","info svelte-144mwq2"),m(b,"id","credits"),m(y,"class","info svelte-144mwq2"),m(y,"id","donate"),m(k,"class","info svelte-144mwq2"),m(k,"id","account"),m(O,"class","info svelte-144mwq2"),m(O,"id","resources"),m(F,"class","eqCont svelte-144mwq2"),m(T,"class","calcBox svelte-144mwq2"),m(T,"id","calc"),m(R,"class","svelte-144mwq2"),Oe(fe,"icon","octicon:log-16"),m(st,"class","tooltip"),m(st,"id","right"),m(Me,"class","info svelte-144mwq2"),m(Me,"id","changelog"),m(de,"class","info svelte-144mwq2"),m(de,"id","policy"),m(J,"class","info svelte-144mwq2"),m(J,"id","version")},m(K,me){D(K,e,me),nt&&nt.m(zt.head,null),h(zt.head,t);for(let Lt=0;Lt<I.length;Lt+=1)I[Lt]&&I[Lt].m(zt.head,null);h(zt.head,i),De&&De.m(zt.head,null),h(zt.head,s),ve&&ve.m(zt.head,null),h(zt.head,r),Ge&&Ge.m(zt.head,null),h(zt.head,o),D(K,a,me),D(K,l,me),h(l,c),n[31](c),D(K,d,me),D(K,f,me);for(let Lt=0;Lt<Et.length;Lt+=1)Et[Lt]&&Et[Lt].m(f,null);D(K,p,me),ut&&ut.m(K,me),D(K,_,me),D(K,b,me),D(K,v,me),D(K,y,me),D(K,w,me),D(K,k,me),h(k,P),D(K,W,me),D(K,O,me),D(K,L,me),D(K,R,me),dt&&dt.m(R,null),h(R,G),ft&&ft.m(R,null),h(R,M),se(E,R,null),h(R,H),se(V,R,null),h(R,j),h(R,T),h(T,F),se(Q,F,null),h(F,te),se(ne,F,null),h(T,ie),se(le,T,null),h(R,ue),se(q,R,null),h(R,x),se(we,R,null),h(R,Ee),ht&&ht.m(R,null),h(R,Ae),~Ue&&mn[Ue].m(R,null),D(K,Pe,me),D(K,Me,me),h(Me,fe),h(Me,We),h(Me,st),h(Me,Ut),bt&&bt.m(Me,null),D(K,qt,me),D(K,de,me),D(K,Ht,me),D(K,J,me),D(K,Le,me),Mt&&Mt.m(K,me),D(K,tt,me),ot=!0,lt||(Ot=[A(vn,"beforeunload",n[25]),A(vn,"storage",n[26]),A(vn,"click",Ow),A(vn,"wheel",n[27],{passive:!1}),A(vn,"keydown",n[28]),A(vn,"resize",n[29]),A(zt,"visibilitychange",n[30]),A(k,"click",n[32]),A(O,"click",n[33]),A(Me,"click",n[39]),A(de,"click",n[40])],lt=!0)},p(K,me){if(K[7]?nt&&(nt.d(1),nt=null):nt||(nt=Yc(),nt.c(),nt.m(t.parentNode,t)),me[0]&1048576){Pt=Re(K[20]);let Xe;for(Xe=0;Xe<Pt.length;Xe+=1){const Pi=Kc(K,Pt,Xe);I[Xe]?I[Xe].p(Pi,me):(I[Xe]=Qc(Pi),I[Xe].c(),I[Xe].m(i.parentNode,i))}for(;Xe<I.length;Xe+=1)I[Xe].d(1);I.length=Pt.length}if(K[13]||!K[7]?De||(De=Jc(),De.c(),De.m(s.parentNode,s)):De&&(De.d(1),De=null),K[4].screenshot.ongoing&&K[17][K[2]]<=1?ve||(ve=Xc(),ve.c(),ve.m(r.parentNode,r)):ve&&(ve.d(1),ve=null),K[4].screenshot.ongoing?Ge||(Ge=xc(),Ge.c(),Ge.m(o.parentNode,o)):Ge&&(Ge.d(1),Ge=null),me[0]&1049600){ti=Re(K[20]);let Xe;for(Xe=0;Xe<ti.length;Xe+=1){const Pi=Gc(K,ti,Xe);Et[Xe]?Et[Xe].p(Pi,me):(Et[Xe]=Zc(Pi),Et[Xe].c(),Et[Xe].m(f,null))}for(;Xe<Et.length;Xe+=1)Et[Xe].d(1);Et.length=ti.length}K[8]?ut?(ut.p(K,me),me[0]&256&&B(ut,1)):(ut=$c(K),ut.c(),B(ut,1),ut.m(_.parentNode,_)):ut&&(je(),U(ut,1,1,()=>{ut=null}),Ve()),(!ot||me[0]&64)&&S!==(S=K[6]?"Account":"Log In")&&ke(P,S),K[4].screenshot.ongoing?dt?(dt.p(K,me),me[0]&16&&B(dt,1)):(dt=eu(K),dt.c(),B(dt,1),dt.m(R,G)):dt&&(je(),U(dt,1,1,()=>{dt=null}),Ve()),K[3]?ft?(ft.p(K,me),me[0]&8&&B(ft,1)):(ft=tu(K),ft.c(),B(ft,1),ft.m(R,M)):ft&&(je(),U(ft,1,1,()=>{ft=null}),Ve()),K[4].screenshot.ongoing?ht?(ht.p(K,me),me[0]&16&&B(ht,1)):(ht=nu(K),ht.c(),B(ht,1),ht.m(R,Ae)):ht&&(je(),U(ht,1,1,()=>{ht=null}),Ve());let Lt=Ue;Ue=wl(K),Ue===Lt?~Ue&&mn[Ue].p(K,me):(qe&&(je(),U(mn[Lt],1,1,()=>{mn[Lt]=null}),Ve()),~Ue?(qe=mn[Ue],qe?qe.p(K,me):(qe=mn[Ue]=yl[Ue](K),qe.c()),B(qe,1),qe.m(R,null)):qe=null),K[14]?bt&&(je(),U(bt,1,1,()=>{bt=null}),Ve()):bt?me[0]&16384&&B(bt,1):(bt=iu(),bt.c(),B(bt,1),bt.m(Me,null)),K[7]?Mt&&(Mt.d(1),Mt=null):Mt||(Mt=su(),Mt.c(),Mt.m(tt.parentNode,tt))},i(K){ot||(B(ut),B(dt),B(ft),B(E.$$.fragment,K),B(V.$$.fragment,K),B(Q.$$.fragment,K),B(ne.$$.fragment,K),B(le.$$.fragment,K),B(q.$$.fragment,K),B(we.$$.fragment,K),B(ht),B(qe),B(bt),ot=!0)},o(K){U(ut),U(dt),U(ft),U(E.$$.fragment,K),U(V.$$.fragment,K),U(Q.$$.fragment,K),U(ne.$$.fragment,K),U(le.$$.fragment,K),U(q.$$.fragment,K),U(we.$$.fragment,K),U(ht),U(qe),U(bt),ot=!1},d(K){K&&(N(e),N(a),N(l),N(d),N(f),N(p),N(_),N(b),N(v),N(y),N(w),N(k),N(W),N(O),N(L),N(R),N(Pe),N(Me),N(qt),N(de),N(Ht),N(J),N(Le),N(tt)),nt&&nt.d(K),N(t),vt(I,K),N(i),De&&De.d(K),N(s),ve&&ve.d(K),N(r),Ge&&Ge.d(K),N(o),n[31](null),vt(Et,K),ut&&ut.d(K),dt&&dt.d(),ft&&ft.d(),re(E),re(V),re(Q),re(ne),re(le),re(q),re(we),ht&&ht.d(),~Ue&&mn[Ue].d(),bt&&bt.d(),Mt&&Mt.d(K),lt=!1,be(Ot)}}}let ho="v3.27.0";const Ow=n=>{};function Rw(n,e,t){let i,s,r,o,a,l,c,u,d,f,p,_,b,v,y,w,k,S,P,W;Y(n,Bt,I=>t(3,s=I)),Y(n,X,I=>t(4,r=I)),Y(n,Gn,I=>t(13,o=I)),Y(n,In,I=>t(45,a=I)),Y(n,Ms,I=>t(5,l=I)),Y(n,Ps,I=>t(6,c=I)),Y(n,vo,I=>t(24,u=I)),Y(n,gi,I=>t(46,d=I)),Y(n,nn,I=>t(47,f=I)),Y(n,mi,I=>t(48,p=I)),Y(n,Qt,I=>t(49,_=I)),Y(n,Ss,I=>t(14,b=I)),Y(n,_i,I=>t(50,v=I)),Y(n,Wt,I=>t(51,y=I)),Y(n,Vr,I=>t(52,w=I)),Y(n,zn,I=>t(53,k=I)),Y(n,Yt,I=>t(54,S=I)),Y(n,Sl,I=>t(15,P=I)),Y(n,Ft,I=>t(16,W=I));let O=!1,L,R,G=7,M=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],E=!1,H,V=new URLSearchParams(location.search).get("id"),j=location.href.includes("ls=true"),T=Wf();T&&(V=null);function F(){if(T)return setTimeout(()=>{z(X,r.sync.ongoing=!0,r)}),!0}for(let I of cy){let De=`https://raw.githubusercontent.com/XT8SS/fantastic-calculator/gh-pages/ff-data/${I}.json`;fetch(De).then(async ve=>{if(ve.status!=200){console.error(`Failed to fetch "${I}" data!
Status: ${ve.status}`);return}z(Yt,S[I]=await ve.json(),S)}).catch(ve=>console.error(`Failed to initiate "${I}" data fetch!
${ve}`))}rh(()=>{if(t(7,O=!0),V?(j&&window.history.replaceState(null,null,location.origin+location.pathname+`?id=${V}`),Q()):j&&window.history.replaceState(null,null,location.origin+location.pathname),z(zn,k.totalVisits++,k),k.showAgain){let I=Math.floor((k.totalVisits-k.lastVisits)/3);I&&I>=k.timesDenied&&(z(zn,k.lastVisits=k.totalVisits,k),z(X,r.donate.ongoing=!0,r))}F_(Pa,async()=>{if(z(Vr,w=Pa.currentUser,w),z(Ps,c=!!Ki(w),c),z(_i,v=c?w.displayName||v:"",v),c){let I=await py();if(Ki(I)){let De={};for(let ve in I.builds){let Ge=I.builds[ve];De[Ge.name]=Ge,De[Ge.name].id=ve}z(Wt,y=De,y),Ki(y)&&z(In,a=!0,a)}hy("logIn",`Succesfully logged in as {${v}}`),F()}}),localStorage.getItem("version")!=ho&&(z(Ss,b=!1,b),localStorage.setItem("version",ho)),localStorage.getItem("changelogSeen")||localStorage.setItem("changelogSeen",!1)});function Q(){if(z(X,r.load.ongoing=!0,r),!V.startsWith("-"))z(X,r.load.status=-1,r),z(X,r.message="invalid_id",r);else{z(X,r.load.status=0,r);let I=_l(tn(Ii,"builds"),pl()),De=0;fl(I).then(ve=>{for(let Ge in ve.val()){if(Ge==V){te(ve.val()[Ge],Ge);break}else De==Object.keys(ve.val()).length-1&&(z(X,r.load.status=-1,r),z(X,r.message="invalid_id",r));De++}}).catch(()=>{z(X,r.load.status=-1,r),z(X,r.message="firebase_fail",r)})}}function te(I,De){for(let ve in I.eq){let Ge=_[ve]||Ir;I.eq[ve]&&I.eq[ve]!=Ge.name?p[ve][I.eq[ve]].querySelector("button").click():!I.eq[ve]&&Ge.name&&p[ve][Ge.name].querySelector("button").click()}for(let ve of Zn){let Ge=f[ve]||Er;Ge.name&&d[ve][Ge.name].querySelector("button").click()}setTimeout(()=>{for(let ve of Zn)I.gear[ve]&&d[ve][I.gear[ve]].querySelector("button").click();z(X,r.load.ongoing=!1,r),z(X,r.load.status=null,r),De&&(z(Bt,s=I,s),z(Bt,s.id=De,s),t(9,V=null))})}let ne=[],ie=[],le,ue,q=9;for(let I=0;I<q;I++)ne.push(`backgrounds/BG${I}.jpg`);function x(I){ue=Math.floor(Math.random()*I.length)}x(ne);function we(){t(10,le=ue),ie.push(ue)}we(),function I(){setTimeout(()=>{if(x(ne),!ie.length)we();else if(ie.length>3&&(ie=ie.slice(1)),!ie.includes(ue))we();else{let De=[...Array(q).keys()].filter(ve=>!ie.includes(ve));x(De),we()}document.hasFocus&&I()},45e3)}();function Ee(){H=setTimeout(()=>{t(8,E=!1)},750)}function Ae(){clearTimeout(H),t(8,E=!0),Ee()}function Ue(){z(X,r.export.status=null,r),z(X,r.export.ongoing=!1,r),z(X,r.save.status=null,r),z(X,r.save.ongoing=!1,r),z(X,r.load.status=null,r),z(X,r.load.ongoing=!1,r),z(X,r.delete.status=null,r),z(X,r.delete.ongoing=!1,r),z(X,r.share.ongoing=!1,r),z(X,r.message="",r)}function qe(){let I=R>L;document.documentElement.style.fontSize=`${(I?.75:window.outerWidth/window.outerHeight/2)*M[G]}vh`}let Pe=!1;const Me=I=>{(l||o)&&!r.sync.ongoing&&I.preventDefault()},fe=I=>{/^f[a-z]{1,2}-/.test(I.key)&&localStorage.setItem(I.key,I.oldValue)},We=I=>{let De=I.wheelDeltaY;if(I.ctrlKey){if(I.preventDefault(),M[G]==.2&&De<0||M[G]==5&&De>0)return;De>0?t(2,G++,G):t(2,G--,G),Ae()}},st=I=>{I.ctrlKey&&(I.key=="-"||I.key=="+"||I.code=="Equal"||I.key=="0")&&(I.preventDefault(),(I.key=="+"||I.code=="Equal")&&M[G]!=5?t(2,G++,G):I.key=="-"&&M[G]!=.2?t(2,G--,G):I.key=="0"&&M[G]!=1&&t(2,G=7),Ae()),o&&fy(I)};function Ut(){t(0,L=vn.outerHeight),t(1,R=vn.outerWidth)}const qt=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,L=window.outerHeight),t(1,R=window.outerWidth),qe()})};function de(I){ce[I?"unshift":"push"](()=>{P.select=I,Sl.set(P)})}const Ht=I=>{cn(I),o||z(X,r.login.ongoing=!0,r)},J=I=>{cn(I),o||z(X,r.resources.ongoing=!0,r)},Le=()=>{o||z(X,r.share.ongoing=!0,r)},tt=()=>t(11,Pe=!0),ot=()=>t(11,Pe=!1);function lt(I){V=I,t(9,V)}const Ot=I=>te(I.detail.build,I.detail.id),nt=I=>{cn(I),!o&&(z(X,r.changelog.ongoing=!0,r),z(Ss,b=!0,b))},Pt=I=>{cn(I),o||z(X,r.policy.ongoing=!0,r)};return n.$$.update=()=>{if(n.$$.dirty[0]&16777219&&(R||L)&&u)for(let I of u)ml(I.node,I.itemName);n.$$.dirty[0]&7&&(R||L||G)&&qe(),n.$$.dirty[0]&96&&l&&!c&&(z(Ms,l=!1,l),z(In,a=!1,a)),n.$$.dirty[0]&16&&t(12,i=r.export.status||r.save.status||r.load.status||r.delete.status),n.$$.dirty[0]&16&&z(Gn,o=r.item.ongoing||r.export.ongoing||r.save.ongoing||r.load.ongoing||r.delete.ongoing||r.share.ongoing||r.costs.ongoing||r.bonus.ongoing||r.randomize.ongoing||r.login.ongoing||r.resources.ongoing||r.changelog.ongoing||r.policy.ongoing||r.donate.ongoing||r.sync.ongoing,o),n.$$.dirty[0]&8&&(document.title=(s?s.name+" - ":"")+"Fantastic Calculator")},[L,R,G,s,r,l,c,O,E,V,le,Pe,i,o,b,P,W,M,Q,te,ne,Ae,Ue,qe,u,Me,fe,We,st,Ut,qt,de,Ht,J,Le,tt,ot,lt,Ot,nt,Pt]}class Aw extends Ie{constructor(e){super(),Ce(this,e,Rw,Nw,pe,{},null,[-1,-1,-1])}}new Aw({target:document.body});
