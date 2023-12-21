var eu=Object.defineProperty;var tu=(t,e,n)=>e in t?eu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var kt=(t,e,n)=>(tu(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function te(){}const As=t=>t;function el(t){return t()}function vr(){return Object.create(null)}function ve(t){t.forEach(el)}function yn(t){return typeof t=="function"}function ye(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ss;function Qe(t,e){return t===e?!0:(ss||(ss=document.createElement("a")),ss.href=e,t===ss.href)}function nu(t){return Object.keys(t).length===0}function su(t,...e){if(t==null){for(const s of e)s(void 0);return te}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Y(t,e,n){t.$$.on_destroy.push(su(e,n))}function U(t,e,n){return t.set(n),e}function tl(t){return t&&yn(t.destroy)?t.destroy:te}const nl=typeof window<"u";let Ni=nl?()=>window.performance.now():()=>Date.now(),Di=nl?t=>requestAnimationFrame(t):te;const ln=new Set;function sl(t){ln.forEach(e=>{e.c(t)||(ln.delete(e),e.f())}),ln.size!==0&&Di(sl)}function Oi(t){let e;return ln.size===0&&Di(sl),{promise:new Promise(n=>{ln.add(e={c:t,f:n})}),abort(){ln.delete(e)}}}const iu=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function p(t,e){t.appendChild(e)}function il(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ru(t){const e=b("style");return e.textContent="/* empty */",ou(il(t),e),e.sheet}function ou(t,e){return p(t.head||t,e),e.sheet}function F(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function lu(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function se(t){return document.createTextNode(t)}function L(){return se(" ")}function St(){return se("")}function D(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Xe(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:m(t,e,n)}function rl(t){return t===""?null:+t}function au(t){return Array.from(t.childNodes)}function Re(t,e){e=""+e,t.data!==e&&(t.data=e)}function ct(t,e){t.value=e??""}function Pe(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let is;function uu(){if(is===void 0){is=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{is=!0}}return is}function ft(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const s=b("iframe");s.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),s.setAttribute("aria-hidden","true"),s.tabIndex=-1;const i=uu();let r;return i?(s.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=D(window,"message",o=>{o.source===s.contentWindow&&e()})):(s.src="about:blank",s.onload=()=>{r=D(s.contentWindow,"resize",e),e()}),p(t,s),()=>{(i||r&&s.contentWindow)&&r(),M(s)}}function J(t,e,n){t.classList.toggle(e,!!n)}function ol(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}class cu{constructor(e=!1){kt(this,"is_svg",!1);kt(this,"e");kt(this,"n");kt(this,"t");kt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=lu(n.nodeName):this.e=b(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)F(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}const as=new Map;let us=0;function du(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function fu(t,e){const n={stylesheet:ru(e),rules:{}};return as.set(t,n),n}function cs(t,e,n,s,i,r,o,a=0){const l=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=l){const w=e+(n-e)*r(v);u+=v*100+`%{${o(w,1-w)}}
`}const c=u+`100% {${o(n,1-n)}}
}`,d=`__svelte_${du(c)}_${a}`,f=il(t),{stylesheet:h,rules:_}=as.get(f)||fu(f,t);_[d]||(_[d]=!0,h.insertRule(`@keyframes ${d} ${c}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${s}ms linear ${i}ms 1 both`,us+=1,d}function ds(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),us-=i,us||hu())}function hu(){Di(()=>{us||(as.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&M(e)}),as.clear())})}let Ln;function On(t){Ln=t}function ll(){if(!Ln)throw new Error("Function called outside component initialization");return Ln}function _u(t){ll().$$.on_mount.push(t)}function Ct(){const t=ll();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=ol(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}const sn=[],ee=[];let an=[];const oi=[],pu=Promise.resolve();let li=!1;function mu(){li||(li=!0,pu.then(al))}function Ce(t){an.push(t)}function Ee(t){oi.push(t)}const Ks=new Set;let $t=0;function al(){if($t!==0)return;const t=Ln;do{try{for(;$t<sn.length;){const e=sn[$t];$t++,On(e),gu(e.$$)}}catch(e){throw sn.length=0,$t=0,e}for(On(null),sn.length=0,$t=0;ee.length;)ee.pop()();for(let e=0;e<an.length;e+=1){const n=an[e];Ks.has(n)||(Ks.add(n),n())}an.length=0}while(sn.length);for(;oi.length;)oi.pop()();li=!1,Ks.clear(),On(t)}function gu(t){if(t.fragment!==null){t.update(),ve(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ce)}}function bu(t){const e=[],n=[];an.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),an=e}let Sn;function Ri(){return Sn||(Sn=Promise.resolve(),Sn.then(()=>{Sn=null})),Sn}function jt(t,e,n){t.dispatchEvent(ol(`${e?"intro":"outro"}${n}`))}const ls=new Set;let dt;function Le(){dt={r:0,c:[],p:dt}}function Be(){dt.r||ve(dt.c),dt=dt.p}function z(t,e){t&&t.i&&(ls.delete(t),t.i(e))}function G(t,e,n,s){if(t&&t.o){if(ls.has(t))return;ls.add(t),dt.c.push(()=>{ls.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Ai={duration:0};function ul(t,e,n){const s={direction:"in"};let i=e(t,n,s),r=!1,o,a,l=0;function u(){o&&ds(t,o)}function c(){const{delay:f=0,duration:h=300,easing:_=As,tick:g=te,css:v}=i||Ai;v&&(o=cs(t,0,1,h,f,_,v,l++)),g(0,1);const w=Ni()+f,k=w+h;a&&a.abort(),r=!0,Ce(()=>jt(t,!0,"start")),a=Oi(y=>{if(r){if(y>=k)return g(1,0),jt(t,!0,"end"),u(),r=!1;if(y>=w){const C=_((y-w)/h);g(C,1-C)}}return r})}let d=!1;return{start(){d||(d=!0,ds(t),yn(i)?(i=i(s),Ri().then(c)):c())},invalidate(){d=!1},end(){r&&(u(),r=!1)}}}function cl(t,e,n){const s={direction:"out"};let i=e(t,n,s),r=!0,o;const a=dt;a.r+=1;let l;function u(){const{delay:c=0,duration:d=300,easing:f=As,tick:h=te,css:_}=i||Ai;_&&(o=cs(t,1,0,d,c,f,_));const g=Ni()+c,v=g+d;Ce(()=>jt(t,!1,"start")),"inert"in t&&(l=t.inert,t.inert=!0),Oi(w=>{if(r){if(w>=v)return h(0,1),jt(t,!1,"end"),--a.r||ve(a.c),!1;if(w>=g){const k=f((w-g)/d);h(1-k,k)}}return r})}return yn(i)?Ri().then(()=>{i=i(s),u()}):u(),{end(c){c&&"inert"in t&&(t.inert=l),c&&i.tick&&i.tick(1,0),r&&(o&&ds(t,o),r=!1)}}}function Ae(t,e,n,s){let r=e(t,n,{direction:"both"}),o=s?0:1,a=null,l=null,u=null,c;function d(){u&&ds(t,u)}function f(_,g){const v=_.b-o;return g*=Math.abs(v),{a:o,b:_.b,d:v,duration:g,start:_.start,end:_.start+g,group:_.group}}function h(_){const{delay:g=0,duration:v=300,easing:w=As,tick:k=te,css:y}=r||Ai,C={start:Ni()+g,b:_};_||(C.group=dt,dt.r+=1),"inert"in t&&(_?c!==void 0&&(t.inert=c):(c=t.inert,t.inert=!0)),a||l?l=C:(y&&(d(),u=cs(t,o,_,v,g,w,y)),_&&k(0,1),a=f(C,v),Ce(()=>jt(t,_,"start")),Oi(E=>{if(l&&E>l.start&&(a=f(l,v),l=null,jt(t,a.b,"start"),y&&(d(),u=cs(t,o,a.b,a.duration,0,w,r.css))),a){if(E>=a.end)k(o=a.b,1-o),jt(t,a.b,"end"),l||(a.b?d():--a.group.r||ve(a.group.c)),a=null;else if(E>=a.start){const O=E-a.start;o=a.a+a.d*w(O/a.duration),k(o,1-o)}}return!!(a||l)}))}return{run(_){yn(r)?Ri().then(()=>{r=r({direction:_?"in":"out"}),h(_)}):h(_)},end(){d(),a=l=null}}}function Ue(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ke(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function be(t){t&&t.c()}function pe(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),Ce(()=>{const r=t.$$.on_mount.map(el).filter(yn);t.$$.on_destroy?t.$$.on_destroy.push(...r):ve(r),t.$$.on_mount=[]}),i.forEach(Ce)}function me(t,e){const n=t.$$;n.fragment!==null&&(bu(n.after_update),ve(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yu(t,e){t.$$.dirty[0]===-1&&(sn.push(t),mu(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,s,i,r,o=null,a=[-1]){const l=Ln;On(t);const u=t.$$={fragment:null,ctx:[],props:r,update:te,not_equal:i,bound:vr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:vr(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let c=!1;if(u.ctx=n?n(t,e.props||{},(d,f,...h)=>{const _=h.length?h[0]:f;return u.ctx&&i(u.ctx[d],u.ctx[d]=_)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](_),c&&yu(t,d)),f}):[],u.update(),c=!0,ve(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const d=au(e.target);u.fragment&&u.fragment.l(d),d.forEach(M)}else u.fragment&&u.fragment.c();e.intro&&z(t.$$.fragment),pe(t,e.target,e.anchor),al()}On(l)}class De{constructor(){kt(this,"$$");kt(this,"$$set")}$destroy(){me(this,1),this.$destroy=te}$on(e,n){if(!yn(n))return te;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!nu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const vu="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(vu);const en=[];function Ye(t,e=te){let n;const s=new Set;function i(a){if(ye(t,a)&&(t=a,n)){const l=!en.length;for(const u of s)u[1](),en.push(u,t);if(l){for(let u=0;u<en.length;u+=2)en[u][0](en[u+1]);en.length=0}}}function r(a){i(a(t))}function o(a,l=te){const u=[a,l];return s.add(u),s.size===1&&(n=e(i,r)||te),a(t),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}let wr=localStorage.getItem("builds"),Cr=0,At=Ye({}),bt=Ye({}),xe=Ye({armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0}),Pt=Ye({}),Pi=Ye([]),Qs=Ye({}),Ze=Ye(),dl=Ye(!1),nt=Ye(wr?JSON.parse(wr):{}),It=Ye(!1),hn=Ye(!1),Bn=Ye({}),fs=Ye({}),wu=Ye({}),un=Ye({}),x=Ye({export:{ongoing:!1,status:null},save:{ongoing:!1,status:null},load:{ongoing:!1,status:null},delete:{ongoing:!1,status:null},share:{ongoing:!1},bonus:{ongoing:!1},screenshot:{ongoing:!1},message:""});nt.subscribe(t=>{Cr++,setTimeout(()=>{window.localStorage.setItem("builds",JSON.stringify(t)),Cr>1&&window.history.replaceState(null,null,location.origin+location.pathname)})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(t,e){if(!t)throw vn(e)},vn=function(t){return new Error("Firebase Database ("+fl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cu=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Mi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,h=u&63;l||(h=64,o||(f=64)),s.push(n[c],n[d],n[f],n[h])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new Eu;const f=r<<2|a>>4;if(s.push(f),u!==64){const h=a<<4&240|u>>2;if(s.push(h),d!==64){const _=u<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Eu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _l=function(t){const e=hl(t);return Mi.encodeByteArray(e,!0)},hs=function(t){return _l(t).replace(/\./g,"")},ai=function(t){try{return Mi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){return pl(void 0,t)}function pl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Su(n)||(t[n]=pl(t[n],e[n]));return t}function Su(t){return t!=="__proto__"}/**
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
 */function Iu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tu=()=>Iu().__FIREBASE_DEFAULTS__,Nu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Du=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ai(t[1]);return e&&JSON.parse(e)},ml=()=>{try{return Tu()||Nu()||Du()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ou=t=>{var e,n;return(n=(e=ml())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ru=t=>{const e=Ou(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},gl=()=>{var t;return(t=ml())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Au(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[hs(JSON.stringify(n)),hs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pu())}function Mu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yl(){return fl.NODE_ADMIN===!0}function Lu(){try{return typeof indexedDB=="object"}catch{return!1}}function Bu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="FirebaseError";class Jn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Fu,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vl.prototype.create)}}class vl{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Wu(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jn(i,a,s)}}function Wu(t,e){return t.replace(qu,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){return JSON.parse(t)}function Fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Fn(ai(r[0])||""),n=Fn(ai(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Hu=function(t){const e=wl(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zu=function(t){const e=wl(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _n(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Er(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _s(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ui(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(kr(r)&&kr(o)){if(!ui(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function kr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^r&(o^a),c=1518500249):(u=r^o^a,c=1859775393):d<60?(u=r&o|a&(r|o),c=2400959708):(u=r^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Li(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,V(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ms=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Wt(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class Gu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ps;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ku(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yu(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yu(t){return t===Ht?void 0:t}function Ku(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const Xu={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},Ju=Ie.INFO,xu={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},Zu=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=xu[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=Ju,this._logHandler=Zu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const $u=(t,e)=>e.some(n=>t instanceof n);let Sr,Ir;function ec(){return Sr||(Sr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tc(){return Ir||(Ir=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const El=new WeakMap,ci=new WeakMap,kl=new WeakMap,Xs=new WeakMap,Bi=new WeakMap;function nc(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Tt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&El.set(n,t)}).catch(()=>{}),Bi.set(e,t),e}function sc(t){if(ci.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ci.set(t,e)}let di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ci.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ic(t){di=t(di)}function rc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Js(this),e,...n);return kl.set(s,e.sort?e.sort():[e]),Tt(s)}:tc().includes(t)?function(...e){return t.apply(Js(this),e),Tt(El.get(this))}:function(...e){return Tt(t.apply(Js(this),e))}}function oc(t){return typeof t=="function"?rc(t):(t instanceof IDBTransaction&&sc(t),$u(t,ec())?new Proxy(t,di):t)}function Tt(t){if(t instanceof IDBRequest)return nc(t);if(Xs.has(t))return Xs.get(t);const e=oc(t);return e!==t&&(Xs.set(t,e),Bi.set(e,t)),e}const Js=t=>Bi.get(t);function lc(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Tt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Tt(o.result),l.oldVersion,l.newVersion,Tt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ac=["get","getKey","getAll","getAllKeys","count"],uc=["put","add","delete","clear"],xs=new Map;function Tr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xs.get(e))return xs.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=uc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ac.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return xs.set(e,r),r}ic(t=>({...t,get:(e,n,s)=>Tr(e,n)||t.get(e,n,s),has:(e,n)=>!!Tr(e,n)||t.has(e,n)}));/**
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
 */class cc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fi="@firebase/app",Nr="0.9.23";/**
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
 */const Yt=new Cl("@firebase/app"),fc="@firebase/app-compat",hc="@firebase/analytics-compat",_c="@firebase/analytics",pc="@firebase/app-check-compat",mc="@firebase/app-check",gc="@firebase/auth",bc="@firebase/auth-compat",yc="@firebase/database",vc="@firebase/database-compat",wc="@firebase/functions",Cc="@firebase/functions-compat",Ec="@firebase/installations",kc="@firebase/installations-compat",Sc="@firebase/messaging",Ic="@firebase/messaging-compat",Tc="@firebase/performance",Nc="@firebase/performance-compat",Dc="@firebase/remote-config",Oc="@firebase/remote-config-compat",Rc="@firebase/storage",Ac="@firebase/storage-compat",Pc="@firebase/firestore",Mc="@firebase/firestore-compat",Lc="firebase",Bc="10.6.0";/**
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
 */const hi="[DEFAULT]",Fc={[fi]:"fire-core",[fc]:"fire-core-compat",[_c]:"fire-analytics",[hc]:"fire-analytics-compat",[mc]:"fire-app-check",[pc]:"fire-app-check-compat",[gc]:"fire-auth",[bc]:"fire-auth-compat",[yc]:"fire-rtdb",[vc]:"fire-rtdb-compat",[wc]:"fire-fn",[Cc]:"fire-fn-compat",[Ec]:"fire-iid",[kc]:"fire-iid-compat",[Sc]:"fire-fcm",[Ic]:"fire-fcm-compat",[Tc]:"fire-perf",[Nc]:"fire-perf-compat",[Dc]:"fire-rc",[Oc]:"fire-rc-compat",[Rc]:"fire-gcs",[Ac]:"fire-gcs-compat",[Pc]:"fire-fst",[Mc]:"fire-fst-compat","fire-js":"fire-js",[Lc]:"fire-js-all"};/**
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
 */const ps=new Map,_i=new Map;function Wc(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(_i.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;_i.set(e,t);for(const n of ps.values())Wc(n,t);return!0}function qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Hc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nt=new vl("app","Firebase",Hc);/**
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
 */class zc{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const Uc=Bc;function Sl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:hi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=gl()),!n)throw Nt.create("no-options");const r=ps.get(i);if(r){if(ui(n,r.options)&&ui(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const o=new Qu(i);for(const l of _i.values())o.addComponent(l);const a=new zc(n,s,o);return ps.set(i,a),a}function Vc(t=hi){const e=ps.get(t);if(!e&&t===hi&&gl())return Sl();if(!e)throw Nt.create("no-app",{appName:t});return e}function cn(t,e,n){var s;let i=(s=Fc[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}ms(new Wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const jc="firebase-heartbeat-database",Gc=1,qn="firebase-heartbeat-store";let Zs=null;function Il(){return Zs||(Zs=lc(jc,Gc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),Zs}async function Yc(t){try{return await(await Il()).transaction(qn).objectStore(qn).get(Tl(t))}catch(e){if(e instanceof Jn)Yt.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function Dr(t,e){try{const s=(await Il()).transaction(qn,"readwrite");await s.objectStore(qn).put(e,Tl(t)),await s.done}catch(n){if(n instanceof Jn)Yt.warn(n.message);else{const s=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(s.message)}}}function Tl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Kc=1024,Qc=30*24*60*60*1e3;class Xc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Or();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Qc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Or(),{heartbeatsToSend:s,unsentEntries:i}=Jc(this._heartbeatsCache.heartbeats),r=hs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Or(){return new Date().toISOString().substring(0,10)}function Jc(t,e=Kc){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Rr(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class xc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lu()?Bu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rr(t){return hs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Zc(t){ms(new Wn("platform-logger",e=>new cc(e),"PRIVATE")),ms(new Wn("heartbeat",e=>new Xc(e),"PRIVATE")),cn(fi,Nr,t),cn(fi,Nr,"esm2017"),cn("fire-js","")}Zc("");var $c="firebase",ed="10.6.0";/**
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
 */cn($c,ed,"app");const Ar="@firebase/database",Pr="1.0.1";/**
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
 */let Nl="";function td(t){Nl=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nd(e)}}catch{}return new sd},Ut=Dl("localStorage"),pi=Dl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new Cl("@firebase/database"),id=function(){let t=1;return function(){return t++}}(),Ol=function(t){const e=ju(t),n=new Vu;n.update(e);const s=n.digest();return Mi.encodeByteArray(s)},xn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xn.apply(null,s):typeof s=="object"?e+=Fe(s):e+=s,e+=" "}return e};let Gt=null,Mr=!0;const rd=function(t,e){V(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(dn.logLevel=Ie.VERBOSE,Gt=dn.log.bind(dn),e&&pi.set("logging_enabled",!0)):typeof t=="function"?Gt=t:(Gt=null,pi.remove("logging_enabled"))},je=function(...t){if(Mr===!0&&(Mr=!1,Gt===null&&pi.get("logging_enabled")===!0&&rd(!0)),Gt){const e=xn.apply(null,t);Gt(e)}},Zn=function(t){return function(...e){je(t,...e)}},mi=function(...t){const e="FIREBASE INTERNAL ERROR: "+xn(...t);dn.error(e)},yt=function(...t){const e=`FIREBASE FATAL ERROR: ${xn(...t)}`;throw dn.error(e),new Error(e)},et=function(...t){const e="FIREBASE WARNING: "+xn(...t);dn.warn(e)},od=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ld=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Kt="[MIN_NAME]",Mt="[MAX_NAME]",wn=function(t,e){if(t===e)return 0;if(t===Kt||e===Mt)return-1;if(e===Kt||t===Mt)return 1;{const n=Lr(t),s=Lr(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ad=function(t,e){return t===e?0:t<e?-1:1},In=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Fe(e))},Wi=function(t){if(typeof t!="object"||t===null)return Fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Fe(e[s]),n+=":",n+=Wi(t[e[s]]);return n+="}",n},Rl=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Al=function(t){V(!Fi(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},ud=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cd=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dd(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const fd=new RegExp("^-?(0*)\\d{1,10}$"),hd=-2147483648,_d=2147483647,Lr=function(t){if(fd.test(t)){const e=Number(t);if(e>=hd&&e<=_d)return e}return null},Cn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw et("Exception was thrown by user callback.",n),e},Math.floor(0))}},pd=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class md{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class fn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="5",Pl="v",Ml="s",Ll="r",Bl="f",Fl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wl="ls",ql="p",gi="ac",Hl="websocket",zl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ut.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ut.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bd(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Vl(t,e,n){V(typeof e=="string","typeof type must == string"),V(typeof n=="object","typeof params must == object");let s;if(e===Hl)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zl)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bd(t)&&(n.ns=t.namespace);const i=[];return tt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.counters_={}}incrementCounter(e,n=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ku(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s={},ei={};function Hi(t){const e=t.toString();return $s[e]||($s[e]=new yd),$s[e]}function vd(t,e){const n=t.toString();return ei[n]||(ei[n]=e()),ei[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Cn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="start",Cd="close",Ed="pLPCommand",kd="pRTLPCB",jl="id",Gl="pw",Yl="ser",Sd="cb",Id="seg",Td="ts",Nd="d",Dd="dframe",Kl=1870,Ql=30,Od=Kl-Ql,Rd=25e3,Ad=3e4;class rn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zn(e),this.stats_=Hi(n),this.urlFn=l=>(this.appCheckToken&&(l[gi]=this.appCheckToken),Vl(n,zl,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wd(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ad)),ld(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zi((...r)=>{const[o,a,l,u,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Br)this.id=a,this.password=l;else if(o===Cd)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Br]="t",s[Yl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Sd]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Pl]=qi,this.transportSessionId&&(s[Ml]=this.transportSessionId),this.lastSessionId&&(s[Wl]=this.lastSessionId),this.applicationId&&(s[ql]=this.applicationId),this.appCheckToken&&(s[gi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fl.test(location.hostname)&&(s[Ll]=Bl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){rn.forceAllow_=!0}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){return rn.forceAllow_?!0:!rn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ud()&&!cd()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_l(n),i=Rl(s,Od);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Dd]="t",s[jl]=e,s[Gl]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zi{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=id(),window[Ed+this.uniqueCallbackIdentifier]=e,window[kd+this.uniqueCallbackIdentifier]=n,this.myIFrame=zi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jl]=this.myID,e[Gl]=this.myPW,e[Yl]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ql+s.length<=Kl;){const o=this.pendingSegs.shift();s=s+"&"+Id+i+"="+o.seg+"&"+Td+i+"="+o.ts+"&"+Nd+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Rd)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=16384,Md=45e3;let gs=null;typeof MozWebSocket<"u"?gs=MozWebSocket:typeof WebSocket<"u"&&(gs=WebSocket);class rt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zn(this.connId),this.stats_=Hi(n),this.connURL=rt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Pl]=qi,typeof location<"u"&&location.hostname&&Fl.test(location.hostname)&&(o[Ll]=Bl),n&&(o[Ml]=n),s&&(o[Wl]=s),i&&(o[gi]=i),r&&(o[ql]=r),Vl(e,Hl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ut.set("previous_websocket_failure",!0);try{let s;yl(),this.mySock=new gs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gs!==null&&!rt.forceDisallow_}static previouslyFailed(){return Ut.isInMemoryStorage||Ut.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ut.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Fn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Rl(n,Pd);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Md))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[rn,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let s=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[rt];else{const i=this.transports_=[];for(const r of Hn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Hn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=6e4,Bd=5e3,Fd=10*1024,Wd=100*1024,ti="t",Fr="d",qd="s",Wr="r",Hd="e",qr="o",Hr="a",zr="n",Ur="p",zd="h";class Ud{constructor(e,n,s,i,r,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zn("c:"+this.id+":"),this.transportManager_=new Hn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Rn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fd?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ti in e){const n=e[ti];n===Hr?this.upgradeIfSecondaryHealthy_():n===Wr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=In("t",e),s=In("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ur,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=In("t",e),s=In("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=In(ti,e);if(Fr in e){const s=e[Fr];if(n===zd){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===zr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qd?this.onConnectionShutdown_(s):n===Wr?this.onReset_(s):n===Hd?mi("Server Error: "+s):n===qr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),qi!==s&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Rn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ld))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Bd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ur,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ut.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){V(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Jl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bs}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=32,jr=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function we(){return new Se("")}function ge(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Lt(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Se(t.pieces_,e)}function xl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Vd(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $l(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Se(e,0)}function We(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Se(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function Ke(t,e){const n=ge(t),s=ge(e);if(n===null)return e;if(n===s)return Ke(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ea(t,e){if(Lt(t)!==Lt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ot(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Lt(t)>Lt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class jd{constructor(e,n){this.errorPrefix_=n,this.parts_=Zl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ms(this.parts_[s]);ta(this)}}function Gd(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ms(e),ta(t)}function Yd(t){const e=t.parts_.pop();t.byteLength_-=Ms(e),t.parts_.length>0&&(t.byteLength_-=1)}function ta(t){if(t.byteLength_>jr)throw new Error(t.errorPrefix_+"has a key path longer than "+jr+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vr+") or object contains a cycle "+zt(t))}function zt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Jl{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ui}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=1e3,Kd=60*5*1e3,Gr=30*1e3,Qd=1.3,Xd=3e4,Jd="server_kill",Yr=3;class mt extends Xl{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=mt.nextPersistentConnectionId_++,this.log_=Zn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Tn,this.maxReconnectDelay_=Kd,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!yl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ui.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Fe(r)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ps,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,u=a.s;mt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_t(e,"w")){const s=_n(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Hu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mi("Unrecognized action received from server: "+Fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Xd&&(this.reconnectDelay_=Tn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Qd)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},u=function(d){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Ud(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,h=>{et(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jd)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&et(d),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Er(this.interruptReasons_)&&(this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Wi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yr&&(this.reconnectDelay_=Gr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Nl.replace(/\./g,"-")]=1,bl()?e["framework.cordova"]=1:Mu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bs.getInstance().currentlyOnline();return Er(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new fe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new fe(Kt,e),i=new fe(Kt,n);return this.compare(s,i)!==0}minPost(){return fe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class na extends Ls{static get __EMPTY_NODE(){return rs}static set __EMPTY_NODE(e){rs=e}compare(e,n){return wn(e.name,n.name)}isDefinedOn(e){throw vn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return fe.MIN}maxPost(){return new fe(Mt,rs)}makePost(e,n){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new fe(e,rs)}toString(){return".key"}}const Dt=new na;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??He.RED,this.left=i??$e.EMPTY_NODE,this.right=r??$e.EMPTY_NODE}copy(e,n,s,i,r){return new He(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class xd{copy(e,n,s,i,r){return this}insert(e,n,s){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new os(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new os(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new os(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new xd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t,e){return wn(t.name,e.name)}function Vi(t,e){return wn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi;function $d(t){bi=t}const sa=function(t){return typeof t=="number"?"number:"+Al(t):"string:"+t},ia=function(t){if(t.isLeafNode()){const e=t.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else V(t===bi||t.isEmpty(),"priority of unexpected type.");V(t===bi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ia(this.priorityNode_)}static set __childrenNodeConstructor(e){Kr=e}static get __childrenNodeConstructor(){return Kr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _e(e)?this:ge(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ge(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(V(s!==".priority"||Lt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sa(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Al(this.value_):e+=this.value_,this.lazyHash_=Ol(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),r=qe.VALUE_TYPE_ORDER.indexOf(s);return V(i>=0,"Unknown leaf type: "+n),V(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra,oa;function ef(t){ra=t}function tf(t){oa=t}class nf extends Ls{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?wn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return fe.MIN}maxPost(){return new fe(Mt,new qe("[PRIORITY-POST]",oa))}makePost(e,n){const s=ra(e);return new fe(n,new qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Me=new nf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=Math.log(2);class rf{constructor(e){const n=r=>parseInt(Math.log(r)/sf,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ys=function(t,e,n,s){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new He(f,d.node,He.BLACK,null,null);{const h=parseInt(c/2,10)+l,_=i(l,h),g=i(h+1,u);return d=t[h],f=n?n(d):d,new He(f,d.node,He.BLACK,_,g)}},r=function(l){let u=null,c=null,d=t.length;const f=function(_,g){const v=d-_,w=d;d-=_;const k=i(v+1,w),y=t[v],C=n?n(y):y;h(new He(C,y.node,g,null,k))},h=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<l.count;++_){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(_+1));g?f(v,He.BLACK):(f(v,He.BLACK),f(v,He.RED))}return c},o=new rf(t.length),a=r(o);return new $e(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni;const tn={};class pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return V(tn&&Me,"ChildrenNode.ts has not been loaded"),ni=ni||new pt({".priority":tn},{".priority":Me}),ni}get(e){const n=_n(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,n){V(e!==Dt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(fe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ys(s,e.getCompare()):a=tn;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new pt(c,u)}addToIndexes(e,n){const s=_s(this.indexes_,(i,r)=>{const o=_n(this.indexSet_,r);if(V(o,"Missing index implementation for "+r),i===tn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(fe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ys(a,o.getCompare())}else return tn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new fe(e.name,a))),l.insert(e,e.node)}});return new pt(s,this.indexSet_)}removeFromIndexes(e,n){const s=_s(this.indexes_,i=>{if(i===tn)return i;{const r=n.get(e.name);return r?i.remove(new fe(e.name,r)):i}});return new pt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn;class re{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ia(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Nn||(Nn=new re(new $e(Vi),null,pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Nn}updatePriority(e){return this.children_.isEmpty()?this:new re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Nn:n}}getChild(e){const n=ge(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(V(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new fe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Nn:this.priorityNode_;return new re(i,o,r)}}updateChild(e,n){const s=ge(e);if(s===null)return n;{V(ge(e)!==".priority"||Lt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Te(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),s++,r&&re.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sa(this.getPriority().val())+":"),this.forEachChild(Me,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ol(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new fe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new fe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new fe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,fe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,fe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$n?-1:0}withIndex(e){if(e===Dt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new re(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Me),i=n.getIterator(Me);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dt?null:this.indexMap_.get(e.toString())}}re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class of extends re{constructor(){super(new $e(Vi),re.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return re.EMPTY_NODE}isEmpty(){return!1}}const $n=new of;Object.defineProperties(fe,{MIN:{value:new fe(Kt,re.EMPTY_NODE)},MAX:{value:new fe(Mt,$n)}});na.__EMPTY_NODE=re.EMPTY_NODE;qe.__childrenNodeConstructor=re;$d($n);tf($n);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=!0;function ze(t,e=null){if(t===null)return re.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,ze(e))}if(!(t instanceof Array)&&lf){const n=[];let s=!1;if(tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ze(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new fe(o,l)))}}),n.length===0)return re.EMPTY_NODE;const r=ys(n,Zd,o=>o.name,Vi);if(s){const o=ys(n,Me.getCompare());return new re(r,ze(e),new pt({".priority":o},{".priority":Me}))}else return new re(r,ze(e),pt.Default)}else{let n=re.EMPTY_NODE;return tt(t,(s,i)=>{if(_t(t,s)&&s.substring(0,1)!=="."){const r=ze(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ze(e))}}ef(ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Ls{constructor(e){super(),this.indexPath_=e,V(!_e(e)&&ge(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?wn(e.name,n.name):r}makePost(e,n){const s=ze(e),i=re.EMPTY_NODE.updateChild(this.indexPath_,s);return new fe(n,i)}maxPost(){const e=re.EMPTY_NODE.updateChild(this.indexPath_,$n);return new fe(Mt,e)}toString(){return Zl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends Ls{compare(e,n){const s=e.node.compareTo(n.node);return s===0?wn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return fe.MIN}maxPost(){return fe.MAX}makePost(e,n){const s=ze(e);return new fe(n,s)}toString(){return".value"}}const aa=new af;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){return{type:"value",snapshotNode:t}}function pn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Un(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function uf(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(zn(n,a)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(pn(n,s)):o.trackChildChange(Un(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Me,(i,r)=>{n.hasChild(i)||s.trackChildChange(zn(i,r))}),n.isLeafNode()||n.forEachChild(Me,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Un(i,r,o))}else s.trackChildChange(pn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?re.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.indexedFilter_=new ji(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vn.getStartPost_(e),this.endPost_=Vn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new fe(n,s))||(s=re.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=re.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(re.EMPTY_NODE);const r=this;return n.forEachChild(Me,(o,a)=>{r.matches(new fe(o,a))||(i=i.updateImmediateChild(o,re.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Vn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new fe(n,s))||(s=re.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=re.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=re.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(re.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,re.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,h)=>d(h,f)}else o=this.index_.getCompare();const a=e;V(a.numChildren()===this.limit_,"");const l=new fe(n,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,l);if(c&&!s.isEmpty()&&h>=0)return r!=null&&r.trackChildChange(Un(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(zn(n,d));const g=a.updateImmediateChild(n,re.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(pn(f.name,f.node)),g.updateImmediateChild(f.name,f.node)):g}}else return s.isEmpty()?e:c&&o(u,l)>=0?(r!=null&&(r.trackChildChange(zn(u.name,u.node)),r.trackChildChange(pn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(u.name,re.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kt}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new Gi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function df(t){return t.loadsAllData()?new ji(t.getIndex()):t.hasLimit()?new cf(t):new Vn(t)}function ff(t,e){const n=t.copy();return n.index_=e,n}function Qr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===aa?n="$value":t.index_===Dt?n="$key":(V(t.index_ instanceof la,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Xr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Xl{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Zn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vs.getListenId_(e,s),a={};this.listens_[o]=a;const l=Qr(e._queryParams);this.restRequest_(r+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(r,d,!1,s),_n(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const s=vs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Qr(e._queryParams),s=e._path.toString(),i=new Ps;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Uu(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fn(a.responseText)}catch{et("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.rootNode_=re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){return{value:null,children:new Map}}function ca(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ge(e);t.children.has(s)||t.children.set(s,ws());const i=t.children.get(s);e=Te(e),ca(i,e,n)}}function yi(t,e,n){t.value!==null?n(e,t.value):_f(t,(s,i)=>{const r=new Se(e.toString()+"/"+s);yi(i,r,n)})}function _f(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=10*1e3,mf=30*1e3,gf=5*60*1e3;class bf{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pf(e);const s=Jr+(mf-Jr)*Math.random();Rn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;tt(e,(i,r)=>{r>0&&_t(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Rn(this.reportStats_.bind(this),Math.floor(Math.random()*2*gf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lt||(lt={}));function da(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ki(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=lt.ACK_USER_WRITE,this.source=da()}operationForChild(e){if(_e(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new Cs(we(),n,this.revert)}}else return V(ge(this.path)===e,"operationForChild called for unrelated child."),new Cs(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){this.source=e,this.path=n,this.type=lt.LISTEN_COMPLETE}operationForChild(e){return _e(this.path)?new jn(this.source,we()):new jn(this.source,Te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=lt.OVERWRITE}operationForChild(e){return _e(this.path)?new Qt(this.source,we(),this.snap.getImmediateChild(e)):new Qt(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=lt.MERGE}operationForChild(e){if(_e(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new Qt(this.source,we(),n.value):new Gn(this.source,we(),n)}else return V(ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gn(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_e(e))return this.isFullyInitialized()&&!this.filtered_;const n=ge(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vf(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(uf(o.childName,o.snapshotNode))}),Dn(t,i,"child_removed",e,s,n),Dn(t,i,"child_added",e,s,n),Dn(t,i,"child_moved",r,s,n),Dn(t,i,"child_changed",e,s,n),Dn(t,i,"value",e,s,n),i}function Dn(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Cf(t,a,l)),o.forEach(a=>{const l=wf(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function wf(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Cf(t,e,n){if(e.childName==null||n.childName==null)throw vn("Should only compare child_ events.");const s=new fe(e.childName,e.snapshotNode),i=new fe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t,e){return{eventCache:t,serverCache:e}}function An(t,e,n,s){return Bs(new Bt(e,n,s),t.serverCache)}function fa(t,e,n,s){return Bs(t.eventCache,new Bt(e,n,s))}function Es(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;const Ef=()=>(si||(si=new $e(ad)),si);class Oe{constructor(e,n=Ef()){this.value=e,this.children=n}static fromObject(e){let n=new Oe(null);return tt(e,(s,i)=>{n=n.set(new Se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:we(),value:this.value};if(_e(e))return null;{const s=ge(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Te(e),n);return r!=null?{path:We(new Se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(_e(e))return this;{const n=ge(e),s=this.children.get(n);return s!==null?s.subtree(Te(e)):new Oe(null)}}set(e,n){if(_e(e))return new Oe(n,this.children);{const s=ge(e),r=(this.children.get(s)||new Oe(null)).set(Te(e),n),o=this.children.insert(s,r);return new Oe(this.value,o)}}remove(e){if(_e(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const n=ge(e),s=this.children.get(n);if(s){const i=s.remove(Te(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Oe(null):new Oe(this.value,r)}else return this}}get(e){if(_e(e))return this.value;{const n=ge(e),s=this.children.get(n);return s?s.get(Te(e)):null}}setTree(e,n){if(_e(e))return n;{const s=ge(e),r=(this.children.get(s)||new Oe(null)).setTree(Te(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Oe(this.value,o)}}fold(e){return this.fold_(we(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(We(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,we(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(_e(e))return null;{const r=ge(e),o=this.children.get(r);return o?o.findOnPath_(Te(e),We(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,we(),n)}foreachOnPath_(e,n,s){if(_e(e))return this;{this.value&&s(n,this.value);const i=ge(e),r=this.children.get(i);return r?r.foreachOnPath_(Te(e),We(n,i),s):new Oe(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(We(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new Oe(null))}}function Pn(t,e,n){if(_e(e))return new at(new Oe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ke(i,e);return r=r.updateChild(o,n),new at(t.writeTree_.set(i,r))}else{const i=new Oe(n),r=t.writeTree_.setTree(e,i);return new at(r)}}}function xr(t,e,n){let s=t;return tt(n,(i,r)=>{s=Pn(s,We(e,i),r)}),s}function Zr(t,e){if(_e(e))return at.empty();{const n=t.writeTree_.setTree(e,new Oe(null));return new at(n)}}function vi(t,e){return Jt(t,e)!=null}function Jt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ke(n.path,e)):null}function $r(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(s,i)=>{e.push(new fe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new fe(s,i.value))}),e}function Ot(t,e){if(_e(e))return t;{const n=Jt(t,e);return n!=null?new at(new Oe(n)):new at(t.writeTree_.subtree(e))}}function wi(t){return t.writeTree_.isEmpty()}function mn(t,e){return ha(we(),t.writeTree_,e)}function ha(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(V(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ha(We(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(We(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e){return ga(e,t)}function kf(t,e,n,s,i){V(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Pn(t.visibleWrites,e,n)),t.lastWriteId=s}function Sf(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function If(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);V(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Tf(a,s.path)?i=!1:ot(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Nf(t),!0;if(s.snap)t.visibleWrites=Zr(t.visibleWrites,s.path);else{const a=s.children;tt(a,l=>{t.visibleWrites=Zr(t.visibleWrites,We(s.path,l))})}return!0}else return!1}function Tf(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(We(t.path,n),e))return!0;return!1}function Nf(t){t.visibleWrites=_a(t.allWrites,Df,we()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Df(t){return t.visible}function _a(t,e,n){let s=at.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ot(n,o)?(a=Ke(n,o),s=Pn(s,a,r.snap)):ot(o,n)&&(a=Ke(o,n),s=Pn(s,we(),r.snap.getChild(a)));else if(r.children){if(ot(n,o))a=Ke(n,o),s=xr(s,a,r.children);else if(ot(o,n))if(a=Ke(o,n),_e(a))s=xr(s,we(),r.children);else{const l=_n(r.children,ge(a));if(l){const u=l.getChild(Te(a));s=Pn(s,we(),u)}}}else throw vn("WriteRecord should have .snap or .children")}}return s}function pa(t,e,n,s,i){if(!s&&!i){const r=Jt(t.visibleWrites,e);if(r!=null)return r;{const o=Ot(t.visibleWrites,e);if(wi(o))return n;if(n==null&&!vi(o,we()))return null;{const a=n||re.EMPTY_NODE;return mn(o,a)}}}else{const r=Ot(t.visibleWrites,e);if(!i&&wi(r))return n;if(!i&&n==null&&!vi(r,we()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(ot(u.path,e)||ot(e,u.path))},a=_a(t.allWrites,o,e),l=n||re.EMPTY_NODE;return mn(a,l)}}}function Of(t,e,n){let s=re.EMPTY_NODE;const i=Jt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Me,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ot(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const l=mn(Ot(r,new Se(o)),a);s=s.updateImmediateChild(o,l)}),$r(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ot(t.visibleWrites,e);return $r(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Rf(t,e,n,s,i){V(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=We(e,n);if(vi(t.visibleWrites,r))return null;{const o=Ot(t.visibleWrites,r);return wi(o)?i.getChild(n):mn(o,i.getChild(n))}}function Af(t,e,n,s){const i=We(e,n),r=Jt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ot(t.visibleWrites,i);return mn(o,s.getNode().getImmediateChild(n))}else return null}function Pf(t,e){return Jt(t.visibleWrites,e)}function Mf(t,e,n,s,i,r,o){let a;const l=Ot(t.visibleWrites,e),u=Jt(l,we());if(u!=null)a=u;else if(n!=null)a=mn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let h=f.getNext();for(;h&&c.length<i;)d(h,s)!==0&&c.push(h),h=f.getNext();return c}else return[]}function Lf(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function ks(t,e,n,s){return pa(t.writeTree,t.treePath,e,n,s)}function Qi(t,e){return Of(t.writeTree,t.treePath,e)}function eo(t,e,n,s){return Rf(t.writeTree,t.treePath,e,n,s)}function Ss(t,e){return Pf(t.writeTree,We(t.treePath,e))}function Bf(t,e,n,s,i,r){return Mf(t.writeTree,t.treePath,e,n,s,i,r)}function Xi(t,e,n){return Af(t.writeTree,t.treePath,e,n)}function ma(t,e){return ga(We(t.treePath,e),t.writeTree)}function ga(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;V(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),V(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Un(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,zn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,pn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Un(s,e.snapshotNode,i.oldSnap));else throw vn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ba=new Wf;class Ji{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xi(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xt(this.viewCache_),r=Bf(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t){return{filter:t}}function Hf(t,e){V(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function zf(t,e,n,s,i){const r=new Ff;let o,a;if(n.type===lt.OVERWRITE){const u=n;u.source.fromUser?o=Ci(t,e,u.path,u.snap,s,i,r):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!_e(u.path),o=Is(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===lt.MERGE){const u=n;u.source.fromUser?o=Vf(t,e,u.path,u.children,s,i,r):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Ei(t,e,u.path,u.children,s,i,a,r))}else if(n.type===lt.ACK_USER_WRITE){const u=n;u.revert?o=Yf(t,e,u.path,s,i,r):o=jf(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===lt.LISTEN_COMPLETE)o=Gf(t,e,n.path,s,r);else throw vn("Unknown operation type: "+n.type);const l=r.getChanges();return Uf(e,o,l),{viewCache:o,changes:l}}function Uf(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Es(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ua(Es(e)))}}function ya(t,e,n,s,i,r){const o=e.eventCache;if(Ss(s,n)!=null)return e;{let a,l;if(_e(n))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Xt(e),c=u instanceof re?u:re.EMPTY_NODE,d=Qi(s,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const u=ks(s,Xt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=ge(n);if(u===".priority"){V(Lt(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=eo(s,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=Te(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=eo(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Xi(s,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,r):a=o.getNode()}}return An(e,a,o.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function Is(t,e,n,s,i,r,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(_e(n))u=c.updateFullNode(l.getNode(),s,null);else if(c.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,s);u=c.updateFullNode(l.getNode(),h,null)}else{const h=ge(n);if(!l.isCompleteForPath(n)&&Lt(n)>1)return e;const _=Te(n),v=l.getNode().getImmediateChild(h).updateChild(_,s);h===".priority"?u=c.updatePriority(l.getNode(),v):u=c.updateChild(l.getNode(),h,v,_,ba,null)}const d=fa(e,u,l.isFullyInitialized()||_e(n),c.filtersNodes()),f=new Ji(i,d,r);return ya(t,d,n,i,f,a)}function Ci(t,e,n,s,i,r,o){const a=e.eventCache;let l,u;const c=new Ji(i,e,r);if(_e(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=An(e,u,!0,t.filter.filtersNodes());else{const d=ge(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),l=An(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Te(n),h=a.getNode().getImmediateChild(d);let _;if(_e(f))_=s;else{const g=c.getCompleteChild(d);g!=null?xl(f)===".priority"&&g.getChild($l(f)).isEmpty()?_=g:_=g.updateChild(f,s):_=re.EMPTY_NODE}if(h.equals(_))l=e;else{const g=t.filter.updateChild(a.getNode(),d,_,f,c,o);l=An(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function to(t,e){return t.eventCache.isCompleteForChild(e)}function Vf(t,e,n,s,i,r,o){let a=e;return s.foreach((l,u)=>{const c=We(n,l);to(e,ge(c))&&(a=Ci(t,a,c,u,i,r,o))}),s.foreach((l,u)=>{const c=We(n,l);to(e,ge(c))||(a=Ci(t,a,c,u,i,r,o))}),a}function no(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ei(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;_e(n)?u=s:u=new Oe(null).setTree(n,s);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const h=e.serverCache.getNode().getImmediateChild(d),_=no(t,h,f);l=Is(t,l,new Se(d),_,i,r,o,a)}}),u.children.inorderTraversal((d,f)=>{const h=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!h){const _=e.serverCache.getNode().getImmediateChild(d),g=no(t,_,f);l=Is(t,l,new Se(d),g,i,r,o,a)}}),l}function jf(t,e,n,s,i,r,o){if(Ss(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(_e(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Is(t,e,n,l.getNode().getChild(n),i,r,a,o);if(_e(n)){let u=new Oe(null);return l.getNode().forEachChild(Dt,(c,d)=>{u=u.set(new Se(c),d)}),Ei(t,e,n,u,i,r,a,o)}else return e}else{let u=new Oe(null);return s.foreach((c,d)=>{const f=We(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Ei(t,e,n,u,i,r,a,o)}}function Gf(t,e,n,s,i){const r=e.serverCache,o=fa(e,r.getNode(),r.isFullyInitialized()||_e(n),r.isFiltered());return ya(t,o,n,s,ba,i)}function Yf(t,e,n,s,i,r){let o;if(Ss(s,n)!=null)return e;{const a=new Ji(s,e,i),l=e.eventCache.getNode();let u;if(_e(n)||ge(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=ks(s,Xt(e));else{const d=e.serverCache.getNode();V(d instanceof re,"serverChildren would be complete if leaf node"),c=Qi(s,d)}c=c,u=t.filter.updateFullNode(l,c,r)}else{const c=ge(n);let d=Xi(s,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,Te(n),a,r):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,re.EMPTY_NODE,Te(n),a,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ks(s,Xt(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Ss(s,we())!=null,An(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ji(s.getIndex()),r=df(s);this.processor_=qf(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(re.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(re.EMPTY_NODE,a.getNode(),null),c=new Bt(l,o.isFullyInitialized(),i.filtersNodes()),d=new Bt(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Bs(d,c),this.eventGenerator_=new yf(this.query_)}get query(){return this.query_}}function Qf(t){return t.viewCache_.serverCache.getNode()}function Xf(t){return Es(t.viewCache_)}function Jf(t,e){const n=Xt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(ge(e)).isEmpty())?n.getChild(e):null}function so(t){return t.eventRegistrations_.length===0}function xf(t,e){t.eventRegistrations_.push(e)}function io(t,e,n){const s=[];if(n){V(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ro(t,e,n,s){e.type===lt.MERGE&&e.source.queryId!==null&&(V(Xt(t.viewCache_),"We should always have a full cache before handling merges"),V(Es(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=zf(t.processor_,i,e,n,s);return Hf(t.processor_,r.viewCache),V(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,va(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Zf(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(r,o)=>{s.push(pn(r,o))}),n.isFullyInitialized()&&s.push(ua(n.getNode())),va(t,s,n.getNode(),e)}function va(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return vf(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;class wa{constructor(){this.views=new Map}}function $f(t){V(!Ts,"__referenceConstructor has already been defined"),Ts=t}function eh(){return V(Ts,"Reference.ts has not been loaded"),Ts}function th(t){return t.views.size===0}function xi(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return V(r!=null,"SyncTree gave us an op for an invalid query."),ro(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ro(o,e,n,s));return r}}function Ca(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ks(n,i?s:null),l=!1;a?l=!0:s instanceof re?(a=Qi(n,s),l=!1):(a=re.EMPTY_NODE,l=!1);const u=Bs(new Bt(a,l,!1),new Bt(s,i,!1));return new Kf(e,u)}return o}function nh(t,e,n,s,i,r){const o=Ca(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xf(o,n),Zf(o,n)}function sh(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ft(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(io(u,n,s)),so(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(io(l,n,s)),so(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ft(t)&&r.push(new(eh())(e._repo,e._path)),{removed:r,events:o}}function Ea(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rt(t,e){let n=null;for(const s of t.views.values())n=n||Jf(s,e);return n}function ka(t,e){if(e._queryParams.loadsAllData())return Ws(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Sa(t,e){return ka(t,e)!=null}function Ft(t){return Ws(t)!=null}function Ws(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;function ih(t){V(!Ns,"__referenceConstructor has already been defined"),Ns=t}function rh(){return V(Ns,"Reference.ts has not been loaded"),Ns}let oh=1;class oo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=Lf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ia(t,e,n,s,i){return kf(t.pendingWriteTree_,e,n,s,i),i?ts(t,new Qt(da(),e,n)):[]}function Vt(t,e,n=!1){const s=Sf(t.pendingWriteTree_,e);if(If(t.pendingWriteTree_,e)){let r=new Oe(null);return s.snap!=null?r=r.set(we(),!0):tt(s.children,o=>{r=r.set(new Se(o),!0)}),ts(t,new Cs(s.path,r,n))}else return[]}function es(t,e,n){return ts(t,new Qt(Yi(),e,n))}function lh(t,e,n){const s=Oe.fromObject(n);return ts(t,new Gn(Yi(),e,s))}function ah(t,e){return ts(t,new jn(Yi(),e))}function uh(t,e,n){const s=$i(t,n);if(s){const i=er(s),r=i.path,o=i.queryId,a=Ke(r,e),l=new jn(Ki(o),a);return tr(t,r,l)}else return[]}function Ta(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Sa(o,e))){const l=sh(o,e,n,s);th(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,h)=>Ft(h));if(c&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const h=hh(f);for(let _=0;_<h.length;++_){const g=h[_],v=g.query,w=Ra(t,g);t.listenProvider_.startListening(Mn(v),Yn(t,v),w.hashFn,w.onComplete)}}}!d&&u.length>0&&!s&&(c?t.listenProvider_.stopListening(Mn(e),null):u.forEach(f=>{const h=t.queryToTagMap.get(qs(f));t.listenProvider_.stopListening(Mn(f),h)}))}_h(t,u)}return a}function Na(t,e,n,s){const i=$i(t,s);if(i!=null){const r=er(i),o=r.path,a=r.queryId,l=Ke(o,e),u=new Qt(Ki(a),l,n);return tr(t,o,u)}else return[]}function ch(t,e,n,s){const i=$i(t,s);if(i){const r=er(i),o=r.path,a=r.queryId,l=Ke(o,e),u=Oe.fromObject(n),c=new Gn(Ki(a),l,u);return tr(t,o,c)}else return[]}function dh(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,h)=>{const _=Ke(f,i);r=r||Rt(h,_),o=o||Ft(h)});let a=t.syncPointTree_.get(i);a?(o=o||Ft(a),r=r||Rt(a,we())):(a=new wa,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=re.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,_)=>{const g=Rt(_,we());g&&(r=r.updateImmediateChild(h,g))}));const u=Sa(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=qs(e);V(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=ph();t.queryToTagMap.set(f,h),t.tagToQueryMap.set(h,f)}const c=Fs(t.pendingWriteTree_,i);let d=nh(a,e,n,c,r,l);if(!u&&!o&&!s){const f=ka(a,e);d=d.concat(mh(t,e,f))}return d}function Zi(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ke(o,e),u=Rt(a,l);if(u)return u});return pa(i,e,r,n,!0)}function fh(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=Ke(u,n);s=s||Rt(c,d)});let i=t.syncPointTree_.get(n);i?s=s||Rt(i,we()):(i=new wa,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Bt(s,!0,!1):null,a=Fs(t.pendingWriteTree_,e._path),l=Ca(i,e,a,r?o.getNode():re.EMPTY_NODE,r);return Xf(l)}function ts(t,e){return Da(e,t.syncPointTree_,null,Fs(t.pendingWriteTree_,we()))}function Da(t,e,n,s){if(_e(t.path))return Oa(t,e,n,s);{const i=e.get(we());n==null&&i!=null&&(n=Rt(i,we()));let r=[];const o=ge(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=ma(s,o);r=r.concat(Da(a,l,u,c))}return i&&(r=r.concat(xi(i,t,s,n))),r}}function Oa(t,e,n,s){const i=e.get(we());n==null&&i!=null&&(n=Rt(i,we()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=ma(s,o),c=t.operationForChild(o);c&&(r=r.concat(Oa(c,a,l,u)))}),i&&(r=r.concat(xi(i,t,s,n))),r}function Ra(t,e){const n=e.query,s=Yn(t,n);return{hashFn:()=>(Qf(e)||re.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?uh(t,n._path,s):ah(t,n._path);{const r=dd(i,n);return Ta(t,n,null,r)}}}}function Yn(t,e){const n=qs(e);return t.queryToTagMap.get(n)}function qs(t){return t._path.toString()+"$"+t._queryIdentifier}function $i(t,e){return t.tagToQueryMap.get(e)}function er(t){const e=t.indexOf("$");return V(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Se(t.substr(0,e))}}function tr(t,e,n){const s=t.syncPointTree_.get(e);V(s,"Missing sync point for query tag that we're tracking");const i=Fs(t.pendingWriteTree_,e);return xi(s,n,i,null)}function hh(t){return t.fold((e,n,s)=>{if(n&&Ft(n))return[Ws(n)];{let i=[];return n&&(i=Ea(n)),tt(s,(r,o)=>{i=i.concat(o)}),i}})}function Mn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(rh())(t._repo,t._path):t}function _h(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=qs(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ph(){return oh++}function mh(t,e,n){const s=e._path,i=Yn(t,e),r=Ra(t,n),o=t.listenProvider_.startListening(Mn(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)V(!Ft(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!_e(u)&&c&&Ft(c))return[Ws(c).query];{let f=[];return c&&(f=f.concat(Ea(c).map(h=>h.query))),tt(d,(h,_)=>{f=f.concat(_)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Mn(c),Yn(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nr(n)}node(){return this.node_}}class sr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new sr(this.syncTree_,n)}node(){return Zi(this.syncTree_,this.path_)}}const gh=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},lo=function(t,e,n){if(!t||typeof t!="object")return t;if(V(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return bh(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yh(t[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},bh=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:V(!1,"Unexpected server value: "+t)}},yh=function(t,e,n){t.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&V(!1,"Unexpected increment value: "+s);const i=e.node();if(V(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},vh=function(t,e,n,s){return ir(e,new sr(n,t),s)},Aa=function(t,e,n){return ir(t,new nr(e),n)};function ir(t,e,n){const s=t.getPriority().val(),i=lo(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=lo(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,ze(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new qe(i))),o.forEachChild(Me,(a,l)=>{const u=ir(l,e.getImmediateChild(a),n);u!==l&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function or(t,e){let n=e instanceof Se?e:new Se(e),s=t,i=ge(n);for(;i!==null;){const r=_n(s.node.children,i)||{children:{},childCount:0};s=new rr(i,s,r),n=Te(n),i=ge(n)}return s}function En(t){return t.node.value}function Pa(t,e){t.node.value=e,ki(t)}function Ma(t){return t.node.childCount>0}function wh(t){return En(t)===void 0&&!Ma(t)}function Hs(t,e){tt(t.node.children,(n,s)=>{e(new rr(n,t,s))})}function La(t,e,n,s){n&&!s&&e(t),Hs(t,i=>{La(i,e,!0,s)}),n&&s&&e(t)}function Ch(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ns(t){return new Se(t.parent===null?t.name:ns(t.parent)+"/"+t.name)}function ki(t){t.parent!==null&&Eh(t.parent,t.name,t)}function Eh(t,e,n){const s=wh(n),i=_t(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ki(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ki(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=/[\[\].#$\/\u0000-\u001F\u007F]/,Sh=/[\[\].#$\u0000-\u001F\u007F]/,ii=10*1024*1024,Ba=function(t){return typeof t=="string"&&t.length!==0&&!kh.test(t)},Fa=function(t){return typeof t=="string"&&t.length!==0&&!Sh.test(t)},Ih=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fa(t)},ao=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Fi(t)||t&&typeof t=="object"&&_t(t,".sv")},Wa=function(t,e,n,s){s&&e===void 0||lr(Li(t,"value"),e,n)},lr=function(t,e,n){const s=n instanceof Se?new jd(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zt(s));if(typeof e=="function")throw new Error(t+"contains a function "+zt(s)+" with contents = "+e.toString());if(Fi(e))throw new Error(t+"contains "+e.toString()+" "+zt(s));if(typeof e=="string"&&e.length>ii/3&&Ms(e)>ii)throw new Error(t+"contains a string greater than "+ii+" utf8 bytes "+zt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ba(o)))throw new Error(t+" contains an invalid key ("+o+") "+zt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Gd(s,o),lr(t,a,s),Yd(s)}),i&&r)throw new Error(t+' contains ".value" child '+zt(s)+" in addition to actual children.")}},qa=function(t,e,n,s){if(!(s&&n===void 0)&&!Fa(n))throw new Error(Li(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Th=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qa(t,e,n,s)},ar=function(t,e){if(ge(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Nh=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ba(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ih(n))throw new Error(Li(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ha(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ea(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ht(t,e,n){Ha(t,n),Oh(t,s=>ot(s,e)||ot(e,s))}function Oh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Rh(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Rh(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Gt&&je("event: "+n.toString()),Cn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="repo_interrupt",Ph=25;class Mh{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Dh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ws(),this.transactionQueueTree_=new rr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lh(t,e,n){if(t.stats_=Hi(t.repoInfo_),t.forceRestClient_||pd())t.server_=new vs(t.repoInfo_,(s,i,r,o)=>{uo(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>co(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new mt(t.repoInfo_,e,(s,i,r,o)=>{uo(t,s,i,r,o)},s=>{co(t,s)},s=>{Bh(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=vd(t.repoInfo_,()=>new bf(t.stats_,t.server_)),t.infoData_=new hf,t.infoSyncTree_=new oo({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=es(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cr(t,"connected",!1),t.serverSyncTree_=new oo({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const u=o(a,l);ht(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function za(t){const n=t.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ur(t){return gh({timestamp:za(t)})}function uo(t,e,n,s,i){t.dataUpdateCount++;const r=new Se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=_s(n,u=>ze(u));o=ch(t.serverSyncTree_,r,l,i)}else{const l=ze(n);o=Na(t.serverSyncTree_,r,l,i)}else if(s){const l=_s(n,u=>ze(u));o=lh(t.serverSyncTree_,r,l)}else{const l=ze(n);o=es(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Us(t,r)),ht(t.eventQueue_,a,o)}function co(t,e){cr(t,"connected",e),e===!1&&qh(t)}function Bh(t,e){tt(e,(n,s)=>{cr(t,n,s)})}function cr(t,e,n){const s=new Se("/.info/"+e),i=ze(n);t.infoData_.updateSnapshot(s,i);const r=es(t.infoSyncTree_,s,i);ht(t.eventQueue_,s,r)}function Ua(t){return t.nextWriteId_++}function Fh(t,e,n){const s=fh(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ze(i).withIndex(e._queryParams.getIndex());dh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=es(t.serverSyncTree_,e._path,r);else{const a=Yn(t.serverSyncTree_,e);o=Na(t.serverSyncTree_,e._path,r,a)}return ht(t.eventQueue_,e._path,o),Ta(t.serverSyncTree_,e,n,null,!0),r},i=>(zs(t,"get for query "+Fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function Wh(t,e,n,s,i){zs(t,"set",{path:e.toString(),value:n,priority:s});const r=ur(t),o=ze(n,s),a=Zi(t.serverSyncTree_,e),l=Aa(o,a,r),u=Ua(t),c=Ia(t.serverSyncTree_,e,l,u,!0);Ha(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,h)=>{const _=f==="ok";_||et("set at "+e+" failed: "+f);const g=Vt(t.serverSyncTree_,u,!_);ht(t.eventQueue_,e,g),zh(t,i,f,h)});const d=Ka(t,e);Us(t,d),ht(t.eventQueue_,d,[])}function qh(t){zs(t,"onDisconnectEvents");const e=ur(t),n=ws();yi(t.onDisconnect_,we(),(i,r)=>{const o=vh(i,r,t.serverSyncTree_,e);ca(n,i,o)});let s=[];yi(n,we(),(i,r)=>{s=s.concat(es(t.serverSyncTree_,i,r));const o=Ka(t,i);Us(t,o)}),t.onDisconnect_=ws(),ht(t.eventQueue_,we(),s)}function Hh(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ah)}function zs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function zh(t,e,n,s){e&&Cn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Va(t,e,n){return Zi(t.serverSyncTree_,e,n)||re.EMPTY_NODE}function dr(t,e=t.transactionQueueTree_){if(e||Vs(t,e),En(e)){const n=Ga(t,e);V(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Uh(t,ns(e),n)}else Ma(e)&&Hs(e,n=>{dr(t,n)})}function Uh(t,e,n){const s=n.map(u=>u.currentWriteId),i=Va(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];V(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ke(e,c.path);r=r.updateChild(d,c.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,u=>{zs(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Vt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Vs(t,or(t.transactionQueueTree_,e)),dr(t,t.transactionQueueTree_),ht(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Cn(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{et("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Us(t,e)}},o)}function Us(t,e){const n=ja(t,e),s=ns(n),i=Ga(t,n);return Vh(t,i,s),s}function Vh(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ke(n,l.path);let c=!1,d;if(V(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Vt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ph)c=!0,d="maxretry",i=i.concat(Vt(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Va(t,l.path,o);l.currentInputSnapshot=f;const h=e[a].update(f.val());if(h!==void 0){lr("transaction failed: Data returned ",h,l.path);let _=ze(h);typeof h=="object"&&h!=null&&_t(h,".priority")||(_=_.updatePriority(f.getPriority()));const v=l.currentWriteId,w=ur(t),k=Aa(_,f,w);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=k,l.currentWriteId=Ua(t),o.splice(o.indexOf(v),1),i=i.concat(Ia(t.serverSyncTree_,l.path,k,l.currentWriteId,l.applyLocally)),i=i.concat(Vt(t.serverSyncTree_,v,!0))}else c=!0,d="nodata",i=i.concat(Vt(t.serverSyncTree_,l.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Vs(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Cn(s[a]);dr(t,t.transactionQueueTree_)}function ja(t,e){let n,s=t.transactionQueueTree_;for(n=ge(e);n!==null&&En(s)===void 0;)s=or(s,n),e=Te(e),n=ge(e);return s}function Ga(t,e){const n=[];return Ya(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ya(t,e,n){const s=En(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Hs(e,i=>{Ya(t,i,n)})}function Vs(t,e){const n=En(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Pa(e,n.length>0?n:void 0)}Hs(e,s=>{Vs(t,s)})}function Ka(t,e){const n=ns(ja(t,e)),s=or(t.transactionQueueTree_,e);return Ch(s,i=>{ri(t,i)}),ri(t,s),La(s,i=>{ri(t,i)}),n}function ri(t,e){const n=En(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(V(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(V(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Pa(e,void 0):n.length=r+1,ht(t.eventQueue_,ns(e),i);for(let o=0;o<s.length;o++)Cn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Gh(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):et(`Invalid query segment '${n}' in query '${t}'`)}return e}const fo=function(t,e){const n=Yh(t),s=n.namespace;n.domain==="firebase.com"&&yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||od();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ul(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Se(n.pathString)}},Yh=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=jh(t.substring(c,d)));const f=Gh(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const h=e.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Kh=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ho.charAt(n%64),n=Math.floor(n/64);V(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ho.charAt(e[i]);return V(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Fe(this.snapshot.exportVal())}}class Xh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class js{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return _e(this._path)?null:xl(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=Xr(this._queryParams),n=Wi(e);return n==="{}"?"default":n}get _queryObject(){return Xr(this._queryParams)}isEqual(e){if(e=Wt(e),!(e instanceof js))return!1;const n=this._repo===e._repo,s=ea(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vd(this._path)}}function xh(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Zh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Dt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Kt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Mt)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Me){if(e!=null&&!ao(e)||n!=null&&!ao(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(V(t.getIndex()instanceof la||t.getIndex()===aa,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Et extends js{constructor(e,n){super(e,n,new Gi,!1)}get parent(){const e=$l(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Se(e),s=vt(this.ref,e);return new Kn(this._node.getChild(n),s,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Kn(i,vt(this.ref,s),Me)))}hasChild(e){const n=new Se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gn(t,e){return t=Wt(t),t._checkNotDeleted("ref"),e!==void 0?vt(t._root,e):t._root}function vt(t,e){return t=Wt(t),ge(t._path)===null?Th("child","path",e,!1):qa("child","path",e,!1),new Et(t._repo,We(t._path,e))}function $h(t,e){t=Wt(t),ar("push",t._path),Wa("push",e,t._path,!0);const n=za(t._repo),s=Kh(n),i=vt(t,s),r=vt(t,s);let o;return e!=null?o=Gs(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function e_(t){return ar("remove",t._path),Gs(t,null)}function Gs(t,e){t=Wt(t),ar("set",t._path),Wa("set",e,t._path,!1);const n=new Ps;return Wh(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Qa(t){t=Wt(t);const e=new Jh(()=>{}),n=new fr(e);return Fh(t._repo,t,n).then(s=>new Kn(s,new Et(t._repo,t._path),t._queryParams.getIndex()))}class fr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Qh("value",this,new Kn(e.snapshotNode,new Et(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Xh(this,e,n):null}matches(e){return e instanceof fr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class t_{}class n_ extends t_{_apply(e){xh(e,"orderByKey");const n=ff(e._queryParams,Dt);return Zh(n),new js(e._repo,e._path,n,!0)}}function Xa(){return new n_}function Ja(t,...e){let n=Wt(t);for(const s of e)n=s._apply(n);return n}$f(Et);ih(Et);/**
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
 */const s_="FIREBASE_DATABASE_EMULATOR_HOST",Si={};let i_=!1;function r_(t,e,n,s){t.repoInfo_=new Ul(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function o_(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fo(r,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[s_]),u?(l=!0,r=`http://${u}?ns=${a.namespace}`,o=fo(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new fn(fn.OWNER):new gd(t.name,t.options,e);Nh("Invalid Firebase Database URL",o),_e(o.path)||yt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=a_(a,t,c,new md(t.name,n));return new u_(d,t)}function l_(t,e){const n=Si[e];(!n||n[t.key]!==t)&&yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Hh(t),delete n[t.key]}function a_(t,e,n,s){let i=Si[e.name];i||(i={},Si[e.name]=i);let r=i[t.toURLString()];return r&&yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Mh(t,i_,n,s),i[t.toURLString()]=r,r}class u_{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(l_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yt("Cannot call "+e+" on a deleted database.")}}function c_(t=Vc(),e){const n=qc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Ru("database");s&&d_(n,...s)}return n}function d_(t,e,n,s={}){t=Wt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&yt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new fn(fn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Au(s.mockUserToken,t.app.options.projectId);r=new fn(o)}r_(i,e,n,r)}/**
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
 */function f_(t){td(Uc),ms(new Wn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return o_(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),cn(Ar,Pr,t),cn(Ar,Pr,"esm2017")}mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};f_();const h_={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};let Ds={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},Ii=["head","body","legs","feet","neck","back","ring","misc"],hr={name:"",stats:{armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0},image:"",link:""},_r={name:"",info:{type:"",special:""},moves:[],image:"",link:""},Qn=[...Array(5).keys()].map(t=>++t),bn=c_(Sl(h_)),__=["head","body","legs","feet","neck","back","ring","misc","gear","sets","bonuses"];function xa(t,e){let n=!1;for(let s of[t,e])for(let i in s)if(s[i].name){n=!0;break}dl.set(n),Ze.set(null),window.history.replaceState(null,null,location.origin+location.pathname)}function pr(t,e){let n=2.8,s=e.split(" ").length,i=t.querySelector("span");if(i.style.removeProperty("font-size"),s>2&&e.length/s>=5){for(;i.offsetHeight>t.offsetHeight*.75;)n-=.05,i.style.fontSize=`calc(var(--u) * ${n})`;return n<2.8}return null}function p_(t,e){let n=2.8,s=t.querySelector("span");for(s.style.removeProperty("font-size");s.offsetWidth>t.offsetWidth;)n-=.05,s.style.fontSize=`calc(var(--u) * ${n})`;for(;s.offsetHeight>t.offsetHeight*.75&&e;)console.log("C"),n-=.05,s.style.fontSize=`calc(var(--u) * ${n})`;return n<2.8?n:null}function m_(t){let e=2.35,n=t.querySelector(".tooltip");for(n.style.removeProperty("font-size");n.offsetHeight>t.offsetHeight*1.125;)e-=.02,n.style.fontSize=`calc(var(--u) * ${e})`}function g_(t){document.activeElement==document.body&&t.key=="Tab"&&(t.preventDefault(),document.querySelector(`.promptCont [id*='${t.shiftKey?"last":"first"}Focusable']`).focus())}function Za(t,e){let n=t.toLowerCase();for(let s in e)s.toLowerCase().includes(n)?e[s].classList.remove("hidden"):e[s].classList.add("hidden")}function Os(t,e){e&&setTimeout(()=>{t.focus(),t.click(),t.select()})}function wt(t){t.shiftKey&&t.key=="Tab"&&t.preventDefault()}function xt(t){t.key=="Tab"&&!t.shiftKey&&t.preventDefault()}function Rs(t,e){let n=/[^a-zA-Z0-9~!#$%^&*()\-_+[\]{}\\|;:'",.<>/? ]/g;return t.replace(n,"").replaceAll(`
`,"").replace(/^ /,"").slice(0,e)}function Ti(t,e,n){(!t.maxLength||t.maxLength!=n)&&e.length>=n&&(t.maxLength=n)}function $a(t,e){t={...t},e={...e};for(let n of Ii)t[n]?t[n]=t[n].name:t[n]="";for(let n of Qn)e[n]?e[n]=e[n].name:e[n]="";return{eq:t,gear:e}}function mr(){window.history.replaceState(null,null,location.origin+location.pathname+"?ls=true")}function b_(t){let e,n,s,i,r,o,a,l;return{c(){e=b("li"),n=b("button"),s=b("img"),r=L(),o=b("span"),o.textContent=`${t[3]}`,Qe(s.src,i=t[0].image)||m(s,"src",i),m(s,"alt",""),J(e,"selectedItem",t[2])},m(u,c){F(u,e,c),p(e,n),p(n,s),p(n,r),p(n,o),t[8](e),a||(l=[tl(t[4].call(null,o)),D(n,"click",t[5])],a=!0)},p(u,[c]){c&1&&!Qe(s.src,i=u[0].image)&&m(s,"src",i),c&4&&J(e,"selectedItem",u[2])},i:te,o:te,d(u){u&&M(e),t[8](null),a=!1,ve(l)}}}function y_(t,e,n){let s,i,r,o,a,l;Y(t,xe,y=>n(9,s=y)),Y(t,un,y=>n(10,i=y)),Y(t,At,y=>n(11,r=y)),Y(t,bt,y=>n(12,o=y)),Y(t,Pt,y=>n(13,a=y)),Y(t,Pi,y=>n(14,l=y));let{itemData:u,slotOpen:c,eqSlotName:d}=e;const f=Ct();let h,_=!1,g=u.name;function v(y){setTimeout(()=>{pr(h,g)&&l.push({node:h,itemName:g})})}function w(y){if(c||!c&&y.isTrusted==!1){f("itemSelect",{element:h,trusted:y.isTrusted}),h.classList.contains("selectedItem")||n(2,_=!1),n(2,_=!_),n(6,c=!1),U(bt,o[d]=_?u:hr,o),xa(o,a);for(let C of Object.keys(Ds)){U(xe,s[C]=0,s);for(let E in o)U(xe,s[C]+=o[E].stats[C],s),U(xe,s[C]=Math.round(s[C]*10)/10,s)}for(let C of r.bonuses)if(i[C.name])for(let E in s)U(xe,s[E]+=C.stats[E],s),U(xe,s[E]=Math.round(s[E]*10)/10,s)}}function k(y){ee[y?"unshift":"push"](()=>{h=y,n(1,h)})}return t.$$set=y=>{"itemData"in y&&n(0,u=y.itemData),"slotOpen"in y&&n(6,c=y.slotOpen),"eqSlotName"in y&&n(7,d=y.eqSlotName)},[u,h,_,g,v,w,c,d,k]}class v_ extends De{constructor(e){super(),Ne(this,e,y_,b_,ye,{itemData:0,slotOpen:6,eqSlotName:7})}}function w_(t){let e,n,s,i,r,o,a,l,u;return{c(){e=b("li"),n=b("button"),s=b("img"),r=L(),o=b("span"),o.textContent=`${t[4]}`,Qe(s.src,i=t[0].image)||m(s,"src",i),m(s,"alt",""),n.disabled=a=!t[3],J(e,"selectedItem",t[2]),J(e,"non-eligible",!t[3])},m(c,d){F(c,e,d),p(e,n),p(n,s),p(n,r),p(n,o),t[11](e),l||(u=[tl(t[5].call(null,o)),D(n,"click",t[6])],l=!0)},p(c,[d]){d&1&&!Qe(s.src,i=c[0].image)&&m(s,"src",i),d&8&&a!==(a=!c[3])&&(n.disabled=a),d&4&&J(e,"selectedItem",c[2]),d&8&&J(e,"non-eligible",!c[3])},i:te,o:te,d(c){c&&M(e),t[11](null),l=!1,ve(u)}}}function C_(t,e,n){let s,i,r;Y(t,Pt,y=>n(10,s=y)),Y(t,bt,y=>n(12,i=y)),Y(t,Pi,y=>n(13,r=y));let{itemData:o,slotOpen:a,index:l,weaponExpand:u}=e;const c=Ct();let d,f=!1,h=!0,_=o.name,g={"Orange Salamander":["Green Salamander","Purple Salamander"],"Green Salamander":["Orange Salamander","Purple Salamander"],"Purple Salamander":["Orange Salamander","Green Salamander"],"White Salamander":["Black Salamander","Gold Salamander"],"Black Salamander":["White Salamander","Gold Salamander"],"Gold Salamander":["White Salamander","Black Salamander"]};function v(y){setTimeout(()=>{pr(d,_)&&r.push({node:d,itemName:_})})}function w(y){h&&(a||!a&&y.isTrusted==!1)&&(c("itemSelect",{element:d,trusted:y.isTrusted}),d.classList.contains("selectedItem")||n(2,f=!1),n(2,f=!f),n(7,a=!1),U(Pt,s[l]=f?o:_r,s),xa(i,s))}function k(y){ee[y?"unshift":"push"](()=>{d=y,n(1,d)})}return t.$$set=y=>{"itemData"in y&&n(0,o=y.itemData),"slotOpen"in y&&n(7,a=y.slotOpen),"index"in y&&n(8,l=y.index),"weaponExpand"in y&&n(9,u=y.weaponExpand)},t.$$.update=()=>{if(t.$$.dirty&1793&&s)for(let y in s)if(y!=l&&(s[y].name==_||g[s[y].name]&&g[s[y].name].includes(_))){n(3,h=!1);break}else!u&&!o.tool&&n(3,h=!0);if(t.$$.dirty&1793){if(u)o.tool&&n(3,h=!1);else if(o.tool)for(let y in s)if(y!=l&&s[y].name==_){n(3,h=!1);break}else n(3,h=!0)}},[o,d,f,h,_,v,w,a,l,u,s,k]}class E_ extends De{constructor(e){super(),Ne(this,e,C_,w_,ye,{itemData:0,slotOpen:7,index:8,weaponExpand:9})}}function k_(t){const e=t-1;return e*e*e+1}function Ge(t,{delay:e=0,duration:n=400,easing:s=As}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function st(t,{delay:e=0,duration:n=400,easing:s=k_,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,u=1-i,c=a*(1-r);return{delay:e,duration:n,easing:s,css:(d,f)=>`
			transform: ${l} scale(${1-u*f});
			opacity: ${a-c*f}
		`}}function _o(t){let e,n,s,i;return{c(){e=b("img"),Qe(e.src,n=t[5][t[3]])||m(e,"src",n),m(e,"alt","")},m(r,o){F(r,e,o),i=!0},p(r,o){(!i||o&8&&!Qe(e.src,n=r[5][r[3]]))&&m(e,"src",n)},i(r){i||(r&&Ce(()=>{i&&(s||(s=Ae(e,Ge,{duration:150},!0)),s.run(1))}),i=!0)},o(r){r&&(s||(s=Ae(e,Ge,{duration:150},!1)),s.run(0)),i=!1},d(r){r&&M(e),r&&s&&s.end()}}}function S_(t){let e,n,s=t[5][t[3]],i,r,o=t[0].name+"",a,l,u,c=_o(t);return{c(){e=b("li"),n=b("button"),c.c(),i=L(),r=b("span"),a=se(o),J(e,"selectedItem",t[4])},m(d,f){F(d,e,f),p(e,n),c.m(n,null),p(n,i),p(n,r),p(r,a),t[8](e),l||(u=[D(n,"click",t[6]),D(e,"mouseenter",t[9]),D(e,"focusin",t[10]),D(e,"mouseleave",t[11]),D(e,"focusout",t[12])],l=!0)},p(d,[f]){f&8&&ye(s,s=d[5][d[3]])?(Le(),G(c,1,1,te),Be(),c=_o(d),c.c(),z(c,1),c.m(n,i)):c.p(d,f),f&1&&o!==(o=d[0].name+"")&&Re(a,o)},i(d){z(c)},o(d){G(c)},d(d){d&&M(e),c.d(d),t[8](null),l=!1,ve(u)}}}function I_(t,e,n){let s,i,r;Y(t,Bn,H=>n(15,s=H)),Y(t,bt,H=>n(16,i=H)),Y(t,At,H=>n(17,r=H));let{itemData:o,ddOpen:a=!1}=e;const l=Ct();let u,c=!1,d=!1,f,h=0,_=o.pieces.length,g=["head","body","legs","feet"];g=_==2?g.slice(1,3):_==3?g.slice(0,3):g;let v=[];for(let H=0;H<_;H++)v.push(r[g[H]].find(Q=>Q.name==o.pieces[H]).image);function w(){d?f=setInterval(()=>{n(3,h++,h),h==_&&n(3,h=0)},750):(clearInterval(f),n(3,h=0))}function k(){l("setSelect");let H=0;for(let Q=0;Q<_;Q++)!i[g[Q]]||i[g[Q]].name!=o.pieces[Q]?s[g[Q]][o.pieces[Q]].querySelector("button").click():H++;H!=_&&n(7,a=!1)}function y(H){ee[H?"unshift":"push"](()=>{u=H,n(2,u)})}const C=()=>n(1,d=!0),E=()=>n(1,d=!0),O=()=>n(1,d=!1),W=()=>n(1,d=!1);return t.$$set=H=>{"itemData"in H&&n(0,o=H.itemData),"ddOpen"in H&&n(7,a=H.ddOpen)},t.$$.update=()=>{t.$$.dirty&2&&(d||!d)&&w()},[o,d,u,h,c,v,k,a,y,C,E,O,W]}class T_ extends De{constructor(e){super(),Ne(this,e,I_,S_,ye,{itemData:0,ddOpen:7})}}function po(t,e,n){const s=t.slice();return s[34]=e[n],s}function N_(t){let e;return{c(){e=b("span"),e.textContent="Loading items...",m(e,"class","svelte-o6g1ik")},m(n,s){F(n,e,s)},p:te,i:te,o:te,d(n){n&&M(e)}}}function D_(t){let e,n,s,i,r,o,a=Ue(t[5]),l=[];for(let c=0;c<a.length;c+=1)l[c]=mo(po(t,a,c));const u=c=>G(l[c],1,1,()=>{l[c]=null});return{c(){e=b("input"),n=L(),s=b("ul");for(let c=0;c<l.length;c+=1)l[c].c();m(e,"type","text"),m(e,"class","searchBarInput"),m(e,"placeholder","Search..."),J(s,"no-scrollbar",t[9].length<=4)},m(c,d){F(c,e,d),t[18](e),F(c,n,d),F(c,s,d);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(s,null);t[24](s),i=!0,r||(o=[D(e,"keydown",t[10]),D(e,"input",t[11])],r=!0)},p(c,d){if(d[0]&4399){a=Ue(c[5]);let f;for(f=0;f<a.length;f+=1){const h=po(c,a,f);l[f]?(l[f].p(h,d),z(l[f],1)):(l[f]=mo(h),l[f].c(),z(l[f],1),l[f].m(s,null))}for(Le(),f=a.length;f<l.length;f+=1)u(f);Be()}(!i||d[0]&512)&&J(s,"no-scrollbar",c[9].length<=4)},i(c){if(!i){for(let d=0;d<a.length;d+=1)z(l[d]);i=!0}},o(c){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)G(l[d]);i=!1},d(c){c&&(M(e),M(n),M(s)),t[18](null),gt(l,c),t[24](null),r=!1,ve(o)}}}function O_(t){let e,n,s;function i(o){t[23](o)}let r={itemData:t[34],eqSlotName:t[2]};return t[0]!==void 0&&(r.slotOpen=t[0]),e=new v_({props:r}),ee.push(()=>ke(e,"slotOpen",i)),e.$on("itemSelect",t[12]),{c(){be(e.$$.fragment)},m(o,a){pe(e,o,a),s=!0},p(o,a){const l={};a[0]&32&&(l.itemData=o[34]),a[0]&4&&(l.eqSlotName=o[2]),!n&&a[0]&1&&(n=!0,l.slotOpen=o[0],Ee(()=>n=!1)),e.$set(l)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){me(e,o)}}}function R_(t){let e,n,s;function i(o){t[21](o)}let r={itemData:t[34]};return t[0]!==void 0&&(r.ddOpen=t[0]),e=new T_({props:r}),ee.push(()=>ke(e,"ddOpen",i)),e.$on("setSelect",t[22]),{c(){be(e.$$.fragment)},m(o,a){pe(e,o,a),s=!0},p(o,a){const l={};a[0]&32&&(l.itemData=o[34]),!n&&a[0]&1&&(n=!0,l.ddOpen=o[0],Ee(()=>n=!1)),e.$set(l)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){me(e,o)}}}function A_(t){let e,n,s,i;function r(l){t[19](l)}function o(l){t[20](l)}let a={itemData:t[34],index:t[3]};return t[0]!==void 0&&(a.slotOpen=t[0]),t[1]!==void 0&&(a.weaponExpand=t[1]),e=new E_({props:a}),ee.push(()=>ke(e,"slotOpen",r)),ee.push(()=>ke(e,"weaponExpand",o)),e.$on("itemSelect",t[12]),{c(){be(e.$$.fragment)},m(l,u){pe(e,l,u),i=!0},p(l,u){const c={};u[0]&32&&(c.itemData=l[34]),u[0]&8&&(c.index=l[3]),!n&&u[0]&1&&(n=!0,c.slotOpen=l[0],Ee(()=>n=!1)),!s&&u[0]&2&&(s=!0,c.weaponExpand=l[1],Ee(()=>s=!1)),e.$set(c)},i(l){i||(z(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){me(e,l)}}}function mo(t){let e,n,s,i;const r=[A_,R_,O_],o=[];function a(l,u){return l[3]?0:l[2]=="sets"?1:2}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=St()},m(l,u){o[e].m(l,u),F(l,s,u),i=!0},p(l,u){let c=e;e=a(l),e===c?o[e].p(l,u):(Le(),G(o[c],1,1,()=>{o[c]=null}),Be(),n=o[e],n?n.p(l,u):(n=o[e]=r[e](l),n.c()),z(n,1),n.m(s.parentNode,s))},i(l){i||(z(n),i=!0)},o(l){G(n),i=!1},d(l){l&&M(s),o[e].d(l)}}}function P_(t){let e,n,s,i,r,o;const a=[D_,N_],l=[];function u(c,d){return c[5]?0:1}return n=u(t),s=l[n]=a[n](t),{c(){e=b("div"),s.c(),m(e,"class","dropdown svelte-o6g1ik")},m(c,d){F(c,e,d),l[n].m(e,null),i=!0,r||(o=[D(e,"transitionend",t[25]),D(e,"transitioncancel",t[26])],r=!0)},p(c,d){let f=n;n=u(c),n===f?l[n].p(c,d):(Le(),G(l[f],1,1,()=>{l[f]=null}),Be(),s=l[n],s?s.p(c,d):(s=l[n]=a[n](c),s.c()),z(s,1),s.m(e,null))},i(c){i||(z(s),i=!0)},o(c){G(s),i=!1},d(c){c&&M(e),l[n].d(),r=!1,ve(o)}}}function M_(t,e,n){let s,i,r,o,a,l;Y(t,At,A=>n(14,r=A)),Y(t,Bn,A=>n(15,o=A)),Y(t,wu,A=>n(16,a=A)),Y(t,fs,A=>n(17,l=A));let{slotName:u,index:c,slotOpen:d,weaponExpand:f}=e;const h=Ct();c?U(fs,l[c]={},l):U(Bn,o[u]={},o);let _,g,v,w=null,k=!1,y=!1,C=[];function E(){v&&v.classList.remove("lastElement"),n(9,C=g.querySelectorAll("li:not(.hidden)")),v=C[C.length-1],v&&v.classList.add("lastElement"),(!v||v.classList.contains("non-eligible"))&&(v=_)}function O(A){!A.shiftKey&&A.key=="Tab"&&(A.preventDefault(),setTimeout(()=>_.focus()))}function W(){v&&v.removeEventListener("keydown",O),E(),v&&v.addEventListener("keydown",O)}function H(A){A.shiftKey&&A.key=="Tab"&&(A.preventDefault(),setTimeout(()=>(v.querySelector("button")||v).focus()))}function Q(){Za(_.value,s),W()}function j(A){h("itemSelect",A.detail.element),n(7,w=A.detail.element),k=A.detail.trusted;let $=g.querySelector(".selectedItem");$&&$!=A.detail.element&&$.classList.remove("selectedItem"),n(8,y=!0),k||(k=!1,S(),g.scrollTo(0,w.offsetTop))}function S(){n(8,y=!1),n(6,_.value="",_),Q()}function R(A){ee[A?"unshift":"push"](()=>{_=A,n(6,_)})}function oe(A){d=A,n(0,d)}function le(A){f=A,n(1,f)}function T(A){d=A,n(0,d)}const K=()=>n(8,y=!0);function Z(A){d=A,n(0,d)}function X(A){ee[A?"unshift":"push"](()=>{g=A,n(4,g)})}const ne=A=>{A.propertyName=="visibility"&&(y&&S(),!d&&w&&g.scrollTo(0,w.offsetTop),Os(_,d))},ue=A=>{A.propertyName=="visibility"&&(n(8,y=!1),Os(_,d))};return t.$$set=A=>{"slotName"in A&&n(2,u=A.slotName),"index"in A&&n(3,c=A.index),"slotOpen"in A&&n(0,d=A.slotOpen),"weaponExpand"in A&&n(1,f=A.weaponExpand)},t.$$.update=()=>{if(t.$$.dirty[0]&229388&&(s=c?l[c]:u=="sets"?a:o[u]),t.$$.dirty[0]&16388&&n(5,i=r[u]),t.$$.dirty[0]&48&&g){n(9,C=g.querySelectorAll("li:not(.hidden)"));for(let A=0;A<g.childElementCount;A++)s[i[A].name]=g.children[A];E(),W()}},[d,f,u,c,g,i,_,w,y,C,H,Q,j,S,r,o,a,l,R,oe,le,T,K,Z,X,ne,ue]}class gr extends De{constructor(e){super(),Ne(this,e,M_,P_,ye,{slotName:2,index:3,slotOpen:0,weaponExpand:1},null,[-1,-1])}}function go(t){let e,n,s,i,r,o,a=t[1].name+"",l,u,c,d,f,h;return{c(){e=b("a"),n=b("img"),r=L(),o=b("span"),l=se(a),Qe(n.src,s=t[1].image)||m(n,"src",s),m(n,"alt",i=t[1].name),m(n,"draggable","false"),m(n,"class","svelte-2kf2oz"),m(o,"class","tooltip"),m(o,"id","left"),m(e,"href",u=t[1].link),m(e,"target","_blank"),m(e,"class","svelte-2kf2oz"),Pe(e,"display",t[1].link?"":"none")},m(_,g){F(_,e,g),p(e,n),p(e,r),p(e,o),p(o,l),d=!0,f||(h=[D(e,"focusin",t[12]),D(e,"outroend",t[13])],f=!0)},p(_,g){(!d||g&2&&!Qe(n.src,s=_[1].image))&&m(n,"src",s),(!d||g&2&&i!==(i=_[1].name))&&m(n,"alt",i),(!d||g&2)&&a!==(a=_[1].name+"")&&Re(l,a),(!d||g&2&&u!==(u=_[1].link))&&m(e,"href",u),g&2&&Pe(e,"display",_[1].link?"":"none")},i(_){d||(_&&Ce(()=>{d&&(c||(c=Ae(e,Ge,{duration:150},!0)),c.run(1))}),d=!0)},o(_){_&&(c||(c=Ae(e,Ge,{duration:150},!1)),c.run(0)),d=!1},d(_){_&&M(e),_&&c&&c.end(),f=!1,ve(h)}}}function L_(t){let e,n,s=t[1],i,r,o,a=t[0].charAt(0).toUpperCase()+t[0].slice(1)+"",l,u,c,d,f,h,_,g,v,w,k,y=go(t);function C(O){t[18](O)}let E={slotName:t[0],index:null,weaponExpand:null};return t[5]!==void 0&&(E.slotOpen=t[5]),_=new gr({props:E}),ee.push(()=>ke(_,"slotOpen",C)),_.$on("itemSelect",t[19]),{c(){e=b("div"),n=b("div"),y.c(),r=L(),o=b("button"),l=se(a),u=L(),c=b("iconify-icon"),d=L(),f=b("button"),f.innerHTML='<iconify-icon icon="maki:cross" class="svelte-2kf2oz"></iconify-icon> <span class="tooltip" id="top">Clear selection</span>',h=L(),be(_.$$.fragment),m(n,"class","eqSlotIcon ff-border svelte-2kf2oz"),Ce(()=>t[15].call(n)),Pe(n,"min-width",`${t[4]}px`),Xe(c,"icon","iconamoon:arrow-down-2-fill"),Xe(c,"class","svelte-2kf2oz"),m(o,"class","ddButton svelte-2kf2oz"),m(f,"class","clearButton svelte-2kf2oz"),m(e,"class","eqSlotCont svelte-2kf2oz"),J(e,"slotOpen",t[5]),J(e,"clearAllowed",t[6]&&t[7])},m(O,W){F(O,e,W),p(e,n),y.m(n,null),t[14](n),i=ft(n,t[15].bind(n)),p(e,r),p(e,o),p(o,l),p(o,u),p(o,c),p(e,d),p(e,f),p(e,h),pe(_,e,null),t[20](e),v=!0,w||(k=[D(window,"mousedown",t[10]),D(window,"keydown",t[11]),D(o,"click",t[16]),D(f,"click",t[17]),D(e,"keydown",t[21]),D(e,"mouseenter",t[22]),D(e,"mouseleave",t[23])],w=!0)},p(O,[W]){W&2&&ye(s,s=O[1])?(Le(),G(y,1,1,te),Be(),y=go(O),y.c(),z(y,1),y.m(n,null)):y.p(O,W),W&16&&Pe(n,"min-width",`${O[4]}px`),(!v||W&1)&&a!==(a=O[0].charAt(0).toUpperCase()+O[0].slice(1)+"")&&Re(l,a);const H={};W&1&&(H.slotName=O[0]),!g&&W&32&&(g=!0,H.slotOpen=O[5],Ee(()=>g=!1)),_.$set(H),(!v||W&32)&&J(e,"slotOpen",O[5]),(!v||W&192)&&J(e,"clearAllowed",O[6]&&O[7])},i(O){v||(z(y),z(_.$$.fragment,O),v=!0)},o(O){G(y),G(_.$$.fragment,O),v=!1},d(O){O&&M(e),y.d(O),t[14](null),i(),me(_),t[20](null),w=!1,ve(k)}}}function B_(t,e,n){let s,i;Y(t,bt,S=>n(9,s=S)),Y(t,x,S=>n(8,i=S));let{eqSlotName:r}=e,o,a,l,u=hr,c,d,f;const h=S=>{(!o.contains(S.target)||S.target==o||S.target==a)&&(n(5,c=!1),S.target!=o&&S.target!=a&&n(6,d=!1))},_=S=>{S.key=="Tab"&&setTimeout(()=>{n(6,d=o.contains(document.activeElement))})},g=S=>{S.relatedTarget==null&&n(6,d=!0)},v=()=>{setTimeout(()=>{m_(a)})};function w(S){ee[S?"unshift":"push"](()=>{a=S,n(3,a)})}function k(){l=this.offsetHeight,n(4,l)}const y=()=>{i.screenshot.ongoing||n(5,c=!c)},C=()=>{n(6,d=!1),o.classList.contains("clearAllowed")&&f.querySelector("button").click()};function E(S){c=S,n(5,c)}const O=S=>{setTimeout(()=>{n(7,f=S.detail.classList.contains("selectedItem")?S.detail:null)})};function W(S){ee[S?"unshift":"push"](()=>{o=S,n(2,o)})}const H=S=>{S.key=="Escape"&&n(5,c=!1)},Q=()=>n(6,d=!0),j=()=>{o.contains(document.activeElement)||n(6,d=!1)};return t.$$set=S=>{"eqSlotName"in S&&n(0,r=S.eqSlotName)},t.$$.update=()=>{t.$$.dirty&515&&s[r]&&s[r].name!=u.name&&n(1,u=s[r])},[r,u,o,a,l,c,d,f,i,s,h,_,g,v,w,k,y,C,E,O,W,H,Q,j]}class F_ extends De{constructor(e){super(),Ne(this,e,B_,L_,ye,{eqSlotName:0})}}function bo(t,e,n){const s=t.slice();return s[1]=e[n],s[2]=e,s[3]=n,s}function yo(t){let e,n,s;function i(o){t[0](o,t[1],t[2],t[3])}let r={};return t[1]!==void 0&&(r.eqSlotName=t[1]),e=new F_({props:r}),ee.push(()=>ke(e,"eqSlotName",i)),{c(){be(e.$$.fragment)},m(o,a){pe(e,o,a),s=!0},p(o,a){t=o;const l={};!n&&a&0&&(n=!0,l.eqSlotName=t[1],Ee(()=>n=!1)),e.$set(l)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){me(e,o)}}}function W_(t){let e,n,s=Ue(Array(...Ii)),i=[];for(let o=0;o<s.length;o+=1)i[o]=yo(bo(t,s,o));const r=o=>G(i[o],1,1,()=>{i[o]=null});return{c(){e=b("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","armorBox svelte-106aluw")},m(o,a){F(o,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);n=!0},p(o,[a]){if(a&0){s=Ue(Array(...Ii));let l;for(l=0;l<s.length;l+=1){const u=bo(o,s,l);i[l]?(i[l].p(u,a),z(i[l],1)):(i[l]=yo(u),i[l].c(),z(i[l],1),i[l].m(e,null))}for(Le(),l=s.length;l<i.length;l+=1)r(l);Be()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)z(i[a]);n=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)G(i[a]);n=!1},d(o){o&&M(e),gt(i,o)}}}function q_(t,e,n){function s(i,r,o,a){o[a]=i}return[s]}class H_ extends De{constructor(e){super(),Ne(this,e,q_,W_,ye,{})}}function z_(t){let e,n=(t[4]?`${Math.floor(t[6]*.675+19.8)}% Reduction`:t[6])+"",s,i,r,o;return{c(){e=b("span"),s=se(n),m(e,"class","statValue svelte-14t9ks5"),m(e,"tabindex","0"),m(e,"style",i=t[4]?`font-size: ${t[2]*.7/6.85}px;`:""),J(e,"hidden",t[3]),J(e,"negative",t[6]<0),J(e,"zero",t[6]==0),J(e,"reduction",t[4])},m(a,l){F(a,e,l),p(e,s),r||(o=[D(e,"mouseenter",t[13]),D(e,"mouseleave",t[14]),D(e,"focusin",t[15]),D(e,"focusout",t[16])],r=!0)},p(a,l){l&80&&n!==(n=(a[4]?`${Math.floor(a[6]*.675+19.8)}% Reduction`:a[6])+"")&&Re(s,n),l&20&&i!==(i=a[4]?`font-size: ${a[2]*.7/6.85}px;`:"")&&m(e,"style",i),l&8&&J(e,"hidden",a[3]),l&64&&J(e,"negative",a[6]<0),l&64&&J(e,"zero",a[6]==0),l&16&&J(e,"reduction",a[4])},d(a){a&&M(e),r=!1,ve(o)}}}function U_(t){let e,n=(t[0]!="endurance"?t[6]:t[6].toFixed(2))+"",s;return{c(){e=b("span"),s=se(n),m(e,"class","statValue svelte-14t9ks5"),J(e,"hidden",t[3]),J(e,"negative",t[6]<0),J(e,"zero",t[6]==0)},m(i,r){F(i,e,r),p(e,s)},p(i,r){r&65&&n!==(n=(i[0]!="endurance"?i[6]:i[6].toFixed(2))+"")&&Re(s,n),r&8&&J(e,"hidden",i[3]),r&64&&J(e,"negative",i[6]<0),r&64&&J(e,"zero",i[6]==0)},d(i){i&&M(e)}}}function V_(t){let e;return{c(){e=b("iconify-icon"),Xe(e,"icon","codicon:sparkle-filled"),Xe(e,"class","svelte-14t9ks5")},m(n,s){F(n,e,s)},p:te,d(n){n&&M(e)}}}function j_(t){let e,n=`${t[1]} Bonus`,s;return{c(){e=b("span"),s=se(n),Pe(e,"font-size",`${t[2]*.7/t[7][t[0]]}px`)},m(i,r){F(i,e,r),p(e,s)},p(i,r){r&2&&n!==(n=`${i[1]} Bonus`)&&Re(s,n),r&5&&Pe(e,"font-size",`${i[2]*.7/i[7][i[0]]}px`)},d(i){i&&M(e)}}}function G_(t){let e,n,s,i,r,o,a,l;function u(g,v){return g[0]!="armor"?U_:z_}let c=u(t),d=c(t);function f(g,v){if(g[3])return j_;if(g[5])return V_}let h=f(t),_=h&&h(t);return{c(){e=b("div"),n=b("img"),i=L(),d.c(),r=L(),_&&_.c(),Qe(n.src,s="stats/"+t[0]+".svg")||m(n,"src",s),m(n,"alt",t[1]),m(n,"class","svelte-14t9ks5"),m(e,"id",t[0]),m(e,"class","svelte-14t9ks5"),Ce(()=>t[17].call(e)),J(e,"hidden",t[6]==0)},m(g,v){F(g,e,v),p(e,n),p(e,i),d.m(e,null),p(e,r),_&&_.m(e,null),o=ft(e,t[17].bind(e)),a||(l=[D(n,"mouseenter",t[11]),D(n,"mouseleave",t[12])],a=!0)},p(g,[v]){v&1&&!Qe(n.src,s="stats/"+g[0]+".svg")&&m(n,"src",s),v&2&&m(n,"alt",g[1]),c===(c=u(g))&&d?d.p(g,v):(d.d(1),d=c(g),d&&(d.c(),d.m(e,r))),h===(h=f(g))&&_?_.p(g,v):(_&&_.d(1),_=h&&h(g),_&&(_.c(),_.m(e,null))),v&1&&m(e,"id",g[0]),v&64&&J(e,"hidden",g[6]==0)},i:te,o:te,d(g){g&&M(e),d.d(),_&&_.d(),o(),a=!1,ve(l)}}}function Y_(t,e,n){let s,i,r,o;Y(t,At,E=>n(8,i=E)),Y(t,un,E=>n(9,r=E)),Y(t,xe,E=>n(10,o=E));let{codeName:a,formalName:l}=e,u,c,d,f=!1,h={armor:5.9,magicDmg:5.65,meleeDmg:5.7,rangedDmg:6.45,hpRegen:7.35,endurance:7.85,sightRange:8.45,walkSpeed:8.3,jumpPower:8.7,ammoReturn:9.3,height:6.1};const _=()=>n(3,c=!0),g=()=>n(3,c=!1),v=()=>n(4,d=!0),w=()=>n(4,d=!1),k=()=>n(4,d=!0),y=()=>n(4,d=!1);function C(){u=this.offsetWidth,n(2,u)}return t.$$set=E=>{"codeName"in E&&n(0,a=E.codeName),"formalName"in E&&n(1,l=E.formalName)},t.$$.update=()=>{if(t.$$.dirty&1025&&n(6,s=o[a]),t.$$.dirty&769)for(let E in r)if(r[E]&&i.bonuses.find(O=>O.name==E).stats[a]!=0){n(5,f=!0);break}else n(5,f=!1)},[a,l,u,c,d,f,s,h,i,r,o,_,g,v,w,k,y,C]}class K_ extends De{constructor(e){super(),Ne(this,e,Y_,G_,ye,{codeName:0,formalName:1})}}function Q_(t){let e,n,s,i,r,o,a,l;return{c(){e=b("div"),n=b("span"),s=L(),i=b("input"),r=L(),o=b("iconify-icon"),m(i,"type","checkbox"),i.checked=t[1],m(i,"class","svelte-apn2c6"),Xe(o,"icon","mingcute:check-fill"),Xe(o,"class","svelte-apn2c6"),m(e,"class","toggleCont svelte-apn2c6")},m(u,c){F(u,e,c),p(e,n),n.innerHTML=t[0],p(e,s),p(e,i),p(e,r),p(e,o),a||(l=[D(i,"change",t[3]),D(i,"keydown",t[4])],a=!0)},p(u,[c]){c&1&&(n.innerHTML=u[0]),c&2&&(i.checked=u[1])},i:te,o:te,d(u){u&&M(e),a=!1,ve(l)}}}function X_(t,e,n){let{text:s,checked:i}=e;const r=Ct(),o=l=>r("toggle",l.target.checked),a=l=>{l.key=="Enter"&&(l.target.checked=!l.target.checked,r("toggle",l.target.checked))};return t.$$set=l=>{"text"in l&&n(0,s=l.text),"checked"in l&&n(1,i=l.checked)},[s,i,r,o,a]}class Ys extends De{constructor(e){super(),Ne(this,e,X_,Q_,ye,{text:0,checked:1})}}function vo(t,e,n){const s=t.slice();return s[4]=e[n][0],s[5]=e[n][1],s[6]=e,s[7]=n,s}function wo(t){let e,n,s,i;function r(l){t[1](l,t[4],t[6],t[7])}function o(l){t[2](l,t[5],t[6],t[7])}let a={};return t[4]!==void 0&&(a.codeName=t[4]),t[5]!==void 0&&(a.formalName=t[5]),e=new K_({props:a}),ee.push(()=>ke(e,"codeName",r)),ee.push(()=>ke(e,"formalName",o)),{c(){be(e.$$.fragment)},m(l,u){pe(e,l,u),i=!0},p(l,u){t=l;const c={};!n&&u&0&&(n=!0,c.codeName=t[4],Ee(()=>n=!1)),!s&&u&0&&(s=!0,c.formalName=t[5],Ee(()=>s=!1)),e.$set(c)},i(l){i||(z(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){me(e,l)}}}function J_(t){let e,n,s,i,r=Ue(Object.entries(Ds)),o=[];for(let l=0;l<r.length;l+=1)o[l]=wo(vo(t,r,l));const a=l=>G(o[l],1,1,()=>{o[l]=null});return s=new Ys({props:{text:"Show all stats",checked:!1}}),s.$on("toggle",t[3]),{c(){e=b("div");for(let l=0;l<o.length;l+=1)o[l].c();n=L(),be(s.$$.fragment),m(e,"class","statBox svelte-lu37w6"),J(e,"showAll",t[0])},m(l,u){F(l,e,u);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(e,null);p(e,n),pe(s,e,null),i=!0},p(l,[u]){if(u&0){r=Ue(Object.entries(Ds));let c;for(c=0;c<r.length;c+=1){const d=vo(l,r,c);o[c]?(o[c].p(d,u),z(o[c],1)):(o[c]=wo(d),o[c].c(),z(o[c],1),o[c].m(e,n))}for(Le(),c=r.length;c<o.length;c+=1)a(c);Be()}(!i||u&1)&&J(e,"showAll",l[0])},i(l){if(!i){for(let u=0;u<r.length;u+=1)z(o[u]);z(s.$$.fragment,l),i=!0}},o(l){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)G(o[u]);G(s.$$.fragment,l),i=!1},d(l){l&&M(e),gt(o,l),me(s)}}}function x_(t,e,n){let s=!1;function i(a,l,u,c){u[c][0]=a}function r(a,l,u,c){u[c][1]=a}return[s,i,r,a=>n(0,s=a.detail)]}class Z_ extends De{constructor(e){super(),Ne(this,e,x_,J_,ye,{})}}function $_(t){let e,n,s,i,r,o,a,l,u,c;return{c(){e=b("div"),n=b("button"),n.textContent="-",s=L(),i=b("input"),r=L(),o=b("b"),o.textContent="%",a=L(),l=b("button"),l.textContent="+",m(n,"id","decrease"),m(n,"class","svelte-1d7zneu"),m(i,"type","number"),m(i,"placeholder","0"),m(i,"class","svelte-1d7zneu"),m(o,"class","svelte-1d7zneu"),m(l,"id","increase"),m(l,"class","svelte-1d7zneu"),m(e,"class","svelte-1d7zneu"),J(e,"non-percent",!t[1])},m(d,f){F(d,e,f),p(e,n),p(e,s),p(e,i),ct(i,t[0]),p(e,r),p(e,o),p(e,a),p(e,l),u||(c=[D(n,"click",t[4]),D(i,"input",t[5]),D(i,"input",t[2]),D(l,"click",t[6])],u=!0)},p(d,[f]){f&1&&rl(i.value)!==d[0]&&ct(i,d[0])},i:te,o:te,d(d){d&&M(e),u=!1,ve(c)}}}function ep(t,e,n){let{weaponName:s,value:i}=e,r=s!="Nature's Wrath Spellbook",o;r?(i=100,o=100):(i=4,o=4);function a(){i<0?n(0,i=0):i>o&&n(0,i=o),i%1!=0&&n(0,i=Math.floor(i))}const l=()=>{n(0,i--,i),a()};function u(){i=rl(this.value),n(0,i)}const c=()=>{n(0,i++,i),a()};return t.$$set=d=>{"weaponName"in d&&n(3,s=d.weaponName),"value"in d&&n(0,i=d.value)},[i,r,a,s,l,u,c]}class tp extends De{constructor(e){super(),Ne(this,e,ep,$_,ye,{weaponName:3,value:0})}}function Co(t,e,n){const s=t.slice();s[46]=e[n];const i=s[46].name.includes("Fantastic Beamstorm")?"~":"";s[20]=i;const r=s[46].name.includes("Charged");return s[47]=r,s}function np(t){let e,n,s=t[2].description+"",i,r;return{c(){e=b("span"),n=se('"'),i=se(s),r=se('"'),m(e,"id","toolDesc"),m(e,"class","svelte-w3rtuy")},m(o,a){F(o,e,a),p(e,n),p(e,i),p(e,r)},p(o,a){a[0]&4&&s!==(s=o[2].description+"")&&Re(i,s)},d(o){o&&M(e)}}}function sp(t){let e,n,s,i=`${t[5]?"Type":t[3].name}:`,r,o,a=t[18],l,u,c,d,f,h=t[5]?"Return":"Expand",_,g,v,w,k=ko(t),y=t[4]&&So(t);return{c(){e=b("button"),n=b("div"),s=b("span"),r=se(i),o=L(),k.c(),u=L(),y&&y.c(),c=L(),d=b("span"),f=se("("),_=se(h),g=se(")"),m(s,"class","svelte-w3rtuy"),Pe(s,"font-size",Object.keys(t[19]).includes(t[3].name)?`calc(var(--u) * ${t[19][t[3].name]})`:""),m(n,"id",l=t[5]?"":"basic"),m(n,"class","svelte-w3rtuy"),m(d,"class","tooltip svelte-w3rtuy"),m(d,"id","top"),m(e,"class","gearPreview svelte-w3rtuy"),Pe(e,"line-height",`${t[10]/6.5}px`)},m(C,E){F(C,e,E),p(e,n),p(n,s),p(s,r),p(n,o),k.m(n,null),p(e,u),y&&y.m(e,null),p(e,c),p(e,d),p(d,f),p(d,_),p(d,g),t[32](e),v||(w=D(e,"click",t[24]),v=!0)},p(C,E){E[0]&40&&i!==(i=`${C[5]?"Type":C[3].name}:`)&&Re(r,i),E[0]&524296&&Pe(s,"font-size",Object.keys(C[19]).includes(C[3].name)?`calc(var(--u) * ${C[19][C[3].name]})`:""),E[0]&262144&&ye(a,a=C[18])?(k.d(1),k=ko(C),k.c(),k.m(n,null)):k.p(C,E),E[0]&32&&l!==(l=C[5]?"":"basic")&&m(n,"id",l),C[4]?y?y.p(C,E):(y=So(C),y.c(),y.m(e,c)):y&&(y.d(1),y=null),E[0]&32&&h!==(h=C[5]?"Return":"Expand")&&Re(_,h),E[0]&1024&&Pe(e,"line-height",`${C[10]/6.5}px`)},d(C){C&&M(e),k.d(C),y&&y.d(),t[32](null),v=!1,w()}}}function Eo(t){let e;return{c(){e=b("iconify-icon"),Xe(e,"icon","codicon:sparkle-filled"),Xe(e,"class","svelte-w3rtuy")},m(n,s){F(n,e,s)},d(n){n&&M(e)}}}function ko(t){let e,n,s=(t[5]?t[2].info.type.replace("/","<b>,</b><br/>"):t[22](t[3]))+"",i,r=!t[5]&&t[6].basic&&Eo();return{c(){e=b("span"),n=new cu(!1),i=L(),r&&r.c(),n.a=i,m(e,"class","svelte-w3rtuy")},m(o,a){F(o,e,a),n.m(s,e),p(e,i),r&&r.m(e,null)},p(o,a){a[0]&44&&s!==(s=(o[5]?o[2].info.type.replace("/","<b>,</b><br/>"):o[22](o[3]))+"")&&n.p(s),!o[5]&&o[6].basic?r||(r=Eo(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&M(e),r&&r.d()}}}function So(t){let e,n,s=`${t[5]?"Special":t[4].name.split(" (")[0]}:`,i,r,o=t[18],a,l=To(t);return{c(){e=b("div"),n=b("span"),i=se(s),r=L(),l.c(),m(n,"class","svelte-w3rtuy"),Pe(n,"font-size",Object.keys(t[19]).includes(t[4].name)?`calc(var(--u) * ${t[19][t[4].name]})`:""),m(e,"id",a=t[5]?"":"special"),m(e,"class","svelte-w3rtuy")},m(u,c){F(u,e,c),p(e,n),p(n,i),p(e,r),l.m(e,null)},p(u,c){c[0]&48&&s!==(s=`${u[5]?"Special":u[4].name.split(" (")[0]}:`)&&Re(i,s),c[0]&524304&&Pe(n,"font-size",Object.keys(u[19]).includes(u[4].name)?`calc(var(--u) * ${u[19][u[4].name]})`:""),c[0]&262144&&ye(o,o=u[18])?(l.d(1),l=To(u),l.c(),l.m(e,null)):l.p(u,c),c[0]&32&&a!==(a=u[5]?"":"special")&&m(e,"id",a)},d(u){u&&M(e),l.d(u)}}}function Io(t){let e;return{c(){e=b("iconify-icon"),Xe(e,"icon","codicon:sparkle-filled"),Xe(e,"class","svelte-w3rtuy")},m(n,s){F(n,e,s)},d(n){n&&M(e)}}}function To(t){let e,n=(t[5]?t[2].info.special:t[20]+t[22](t[4]))+"",s,i,r=!t[5]&&t[6].special&&Io();return{c(){e=b("span"),s=se(n),i=L(),r&&r.c(),m(e,"class","svelte-w3rtuy")},m(o,a){F(o,e,a),p(e,s),p(e,i),r&&r.m(e,null)},p(o,a){a[0]&1048628&&n!==(n=(o[5]?o[2].info.special:o[20]+o[22](o[4]))+"")&&Re(s,n),!o[5]&&o[6].special?r||(r=Io(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&M(e),r&&r.d()}}}function No(t){let e,n,s,i,r,o,a=t[2].name+"",l,u,c,d,f;return{c(){e=b("a"),n=b("img"),r=L(),o=b("span"),l=se(a),Qe(n.src,s=t[2].image)||m(n,"src",s),m(n,"alt",i=t[2].name),m(n,"draggable","false"),m(n,"class","svelte-w3rtuy"),m(o,"class","tooltip svelte-w3rtuy"),m(o,"id",u=t[17].screenshot.ongoing?"right":"top"),m(e,"href",c=t[2].link),m(e,"target","_blank"),m(e,"class","svelte-w3rtuy"),Pe(e,"display",t[2].link?"":"none"),Pe(e,"border-radius",t[2].tool?"calc(var(--u))":"")},m(h,_){F(h,e,_),p(e,n),p(e,r),p(e,o),p(o,l),f=!0},p(h,_){(!f||_[0]&4&&!Qe(n.src,s=h[2].image))&&m(n,"src",s),(!f||_[0]&4&&i!==(i=h[2].name))&&m(n,"alt",i),(!f||_[0]&4)&&a!==(a=h[2].name+"")&&Re(l,a),(!f||_[0]&131072&&u!==(u=h[17].screenshot.ongoing?"right":"top"))&&m(o,"id",u),(!f||_[0]&4&&c!==(c=h[2].link))&&m(e,"href",c),_[0]&4&&Pe(e,"display",h[2].link?"":"none"),_[0]&4&&Pe(e,"border-radius",h[2].tool?"calc(var(--u))":"")},i(h){f||(h&&Ce(()=>{f&&(d||(d=Ae(e,Ge,{duration:150},!0)),d.run(1))}),f=!0)},o(h){h&&(d||(d=Ae(e,Ge,{duration:150},!1)),d.run(0)),f=!1},d(h){h&&M(e),h&&d&&d.end()}}}function Do(t){let e,n,s,i,r,o,a;n=new Ys({props:{text:"Toggle base values",checked:!1}}),n.$on("toggle",t[40]);let l=Ue(t[2].moves),u=[];for(let d=0;d<l.length;d+=1)u[d]=Po(Co(t,l,d));const c=d=>G(u[d],1,1,()=>{u[d]=null});return{c(){e=b("div"),be(n.$$.fragment),s=L(),i=b("div");for(let d=0;d<u.length;d+=1)u[d].c();m(i,"class","weaponMoves svelte-w3rtuy"),m(e,"class","fullWeaponView svelte-w3rtuy")},m(d,f){F(d,e,f),pe(n,e,null),p(e,s),p(e,i);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(i,null);a=!0},p(d,f){if(f[0]&12943492){l=Ue(d[2].moves);let h;for(h=0;h<l.length;h+=1){const _=Co(d,l,h);u[h]?(u[h].p(_,f),z(u[h],1)):(u[h]=Po(_),u[h].c(),z(u[h],1),u[h].m(i,null))}for(Le(),h=l.length;h<u.length;h+=1)c(h);Be()}},i(d){if(!a){z(n.$$.fragment,d);for(let f=0;f<l.length;f+=1)z(u[f]);d&&Ce(()=>{a&&(o&&o.end(1),r=ul(e,Ge,{duration:150,delay:300}),r.start())}),a=!0}},o(d){G(n.$$.fragment,d),u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)G(u[f]);r&&r.invalidate(),d&&(o=cl(e,Ge,{duration:150})),a=!1},d(d){d&&M(e),me(n),gt(u,d),d&&o&&o.end()}}}function Oo(t){let e,n,s,i;function r(l){t[41](l)}function o(l){t[42](l)}let a={};return t[7]!==void 0&&(a.value=t[7]),t[2].name!==void 0&&(a.weaponName=t[2].name),e=new tp({props:a}),ee.push(()=>ke(e,"value",r)),ee.push(()=>ke(e,"weaponName",o)),{c(){be(e.$$.fragment)},m(l,u){pe(e,l,u),i=!0},p(l,u){const c={};!n&&u[0]&128&&(n=!0,c.value=l[7],Ee(()=>n=!1)),!s&&u[0]&4&&(s=!0,c.weaponName=l[2].name,Ee(()=>s=!1)),e.$set(c)},i(l){i||(z(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){me(e,l)}}}function Ro(t){let e;return{c(){e=b("iconify-icon"),Xe(e,"icon","codicon:sparkle-filled"),Xe(e,"class","svelte-w3rtuy")},m(n,s){F(n,e,s)},d(n){n&&M(e)}}}function Ao(t){let e,n=t[20]+(t[15]&&!t[47]?t[46].base:t[47]?t[23](t[46]):t[22](t[46]))+"",s,i,r=t[16][t[46].name]&&!t[15]&&Ro();return{c(){e=b("span"),s=se(n),i=L(),r&&r.c(),m(e,"class","svelte-w3rtuy")},m(o,a){F(o,e,a),p(e,s),p(e,i),r&&r.m(e,null)},p(o,a){a[0]&32772&&n!==(n=o[20]+(o[15]&&!o[47]?o[46].base:o[47]?o[23](o[46]):o[22](o[46]))+"")&&Re(s,n),o[16][o[46].name]&&!o[15]?r||(r=Ro(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&M(e),r&&r.d()}}}function Po(t){let e,n,s,i,r=(t[47]&&t[2].name=="Nature's Wrath Spellbook"?t[46].name.replace("Charged","Charge(s)"):t[46].name)+":",o,a,l=t[47]?[t[18],t[7]]:t[18],u,c,d=t[47]&&Oo(t),f=Ao(t);return{c(){e=b("div"),n=b("div"),s=b("span"),d&&d.c(),i=L(),o=se(r),a=L(),f.c(),u=L(),m(s,"class","svelte-w3rtuy"),m(n,"class","ff-border svelte-w3rtuy"),m(e,"class","svelte-w3rtuy")},m(h,_){F(h,e,_),p(e,n),p(n,s),d&&d.m(s,null),p(s,i),p(s,o),p(n,a),f.m(n,null),p(e,u),c=!0},p(h,_){h[47]?d?(d.p(h,_),_[0]&4&&z(d,1)):(d=Oo(h),d.c(),z(d,1),d.m(s,i)):d&&(Le(),G(d,1,1,()=>{d=null}),Be()),(!c||_[0]&4)&&r!==(r=(h[47]&&h[2].name=="Nature's Wrath Spellbook"?h[46].name.replace("Charged","Charge(s)"):h[46].name)+":")&&Re(o,r),_[0]&262276&&ye(l,l=h[47]?[h[18],h[7]]:h[18])?(f.d(1),f=Ao(h),f.c(),f.m(n,null)):f.p(h,_)},i(h){c||(z(d),c=!0)},o(h){G(d),c=!1},d(h){h&&M(e),d&&d.d(),f.d(h)}}}function ip(t){let e,n,s,i,r,o,a=t[2],l,u,c,d,f,h,_,g,v,w,k;function y(S,R){if(S[2].name&&!S[2].tool)return sp;if(S[2].tool)return np}let C=y(t),E=C&&C(t),O=No(t);function W(S){t[36](S)}function H(S){t[37](S)}let Q={slotName:t[0],index:t[1]};t[14]!==void 0&&(Q.slotOpen=t[14]),t[5]!==void 0&&(Q.weaponExpand=t[5]),d=new gr({props:Q}),ee.push(()=>ke(d,"slotOpen",W)),ee.push(()=>ke(d,"weaponExpand",H)),d.$on("itemSelect",t[38]);let j=t[5]&&Do(t);return{c(){e=b("div"),n=b("button"),n.innerHTML=`<iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="90deg" class="svelte-w3rtuy"></iconify-icon>
        Gear`,s=L(),i=b("div"),E&&E.c(),r=L(),o=b("div"),O.c(),c=L(),be(d.$$.fragment),_=L(),j&&j.c(),g=St(),m(n,"class","ddButton svelte-w3rtuy"),m(o,"class","gearSlotIcon svelte-w3rtuy"),Ce(()=>t[33].call(o)),Pe(o,"min-width",`${t[11]}px`),m(i,"class","gearInfoCont ff-border svelte-w3rtuy"),Ce(()=>t[35].call(i)),Pe(i,"justify-content",t[2].name?"":"flex-end"),m(e,"class","gearSlot svelte-w3rtuy"),J(e,"slotOpen",t[14]),J(e,"weapon-expand",t[5])},m(S,R){F(S,e,R),p(e,n),t[30](n),p(e,s),p(e,i),E&&E.m(i,null),p(i,r),p(i,o),O.m(o,null),l=ft(o,t[33].bind(o)),t[34](i),u=ft(i,t[35].bind(i)),p(e,c),pe(d,e,null),t[39](e),F(S,_,R),j&&j.m(S,R),F(S,g,R),v=!0,w||(k=[D(window,"mousedown",t[28]),D(window,"keydown",t[29]),D(n,"click",t[31])],w=!0)},p(S,R){C===(C=y(S))&&E?E.p(S,R):(E&&E.d(1),E=C&&C(S),E&&(E.c(),E.m(i,r))),R[0]&4&&ye(a,a=S[2])?(Le(),G(O,1,1,te),Be(),O=No(S),O.c(),z(O,1),O.m(o,null)):O.p(S,R),R[0]&2048&&Pe(o,"min-width",`${S[11]}px`),R[0]&4&&Pe(i,"justify-content",S[2].name?"":"flex-end");const oe={};R[0]&1&&(oe.slotName=S[0]),R[0]&2&&(oe.index=S[1]),!f&&R[0]&16384&&(f=!0,oe.slotOpen=S[14],Ee(()=>f=!1)),!h&&R[0]&32&&(h=!0,oe.weaponExpand=S[5],Ee(()=>h=!1)),d.$set(oe),(!v||R[0]&16384)&&J(e,"slotOpen",S[14]),(!v||R[0]&32)&&J(e,"weapon-expand",S[5]),S[5]?j?(j.p(S,R),R[0]&32&&z(j,1)):(j=Do(S),j.c(),z(j,1),j.m(g.parentNode,g)):j&&(Le(),G(j,1,1,()=>{j=null}),Be())},i(S){v||(z(O),z(d.$$.fragment,S),z(j),v=!0)},o(S){G(O),G(d.$$.fragment,S),G(j),v=!1},d(S){S&&(M(e),M(_),M(g)),t[30](null),E&&E.d(),O.d(S),l(),t[34](null),u(),me(d),t[39](null),j&&j.d(S),w=!1,ve(k)}}}function rp(t,e,n){let s,i,r,o,a,l,u;Y(t,un,N=>n(26,s=N)),Y(t,Pt,N=>n(27,i=N)),Y(t,At,N=>n(43,r=N)),Y(t,x,N=>n(17,o=N)),Y(t,xe,N=>n(18,a=N)),Y(t,Qs,N=>n(19,l=N)),Y(t,hn,N=>n(44,u=N));let{gearBox:c,slotName:d,index:f}=e,h,_,g,v,w,k,y,C=_r,E,O,W,H,Q,j="",S={basic:!1,special:!1},R={};function oe(){if(y)for(let N of y.querySelectorAll(".gearPreview > div")){if(Object.keys(l).includes(N.id=="basic"?E.name:O?O.name:null))return;let he=p_(N,u);he&&(N.id=="basic"?U(Qs,l[E.name]=he,l):U(Qs,l[O.name]=he,l))}}function le(N){let he;if(N.name=="Void Needle")he=N.base+a[N.type]-a.armor*5.625;else if(C.name=="Pureblood Dagger"){let Ve,ut={magicDmg:a.magicDmg,meleeDmg:a.meleeDmg,rangedDmg:a.rangedDmg},it=Object.keys(ut).reduce((kn,yr)=>ut[kn]>ut[yr]?kn:yr),qt=0;for(let kn in ut)kn!=it&&(qt+=ut[kn]);Ve=a[it]*2-qt,he=N.base+Ve,N.name.includes("HP")&&(he/=2)}else if(N.type.includes("/")){let Ve=N.type.split("/"),ut=0;for(let it of Ve)ut+=a[it]*N[`${it}Mult`];he=N.base+ut}else he=N.base+a[N.type]*N.mult;return H?Math.floor(he*10)/10:Math.floor(he)}function T(N){let he,Ve=Q?0:a[N.type];return C.name=="Celestial Powers Spellbook"?he=(80+Ve*1.1)*(.8+2.2*h/100):C.name=="Staff of Dreams"?he=160+160*h/100+Ve*(.4+1.3*h/100):C.name=="Nature's Wrath Spellbook"&&(he=260+400*h/4+Ve*(1+1.5*h/4)),Math.floor(he*10)/10}function K(){o.screenshot.ongoing||(n(15,Q=!1),H?(n(5,H=!1),c.classList.remove("weapon-expand"),setTimeout(()=>{oe()})):(c.classList.add("weapon-expand"),n(5,H=!0)))}function Z(N,he){e:for(let Ve in s){let ut=r.bonuses.find(qt=>qt.name==Ve).stats,it=N?N.type:null;for(let qt in Ds){if(it===null)break e;if(C.name=="Void Spike Ultradagger"&&he=="special"||N.name=="Void Needle"?it="armor/meleeDmg":C.name=="Pureblood Dagger"?it=Ve=="Fish of Rage"?"":"magicDmg/meleeDmg/rangedDmg":C.name=="Gnome Rocket Launcher"&&(it=""),s[Ve]&&ut[qt]!=0&&it.includes(qt)){n(16,R[N.name]=!0,R),he&&n(6,S[he]=!0,S);break e}else n(16,R[N.name]=!1,R),he&&n(6,S[he]=!1,S)}}}const X=N=>{(!_.contains(N.target)||_.contains(N.target)&&g.contains(N.target))&&n(14,W=!1)},ne=N=>{N.key=="Escape"&&n(14,W=!1)};function ue(N){ee[N?"unshift":"push"](()=>{k=N,n(12,k)})}const A=()=>{o.screenshot.ongoing||n(14,W=!W)};function $(N){ee[N?"unshift":"push"](()=>{y=N,n(13,y)})}function I(){w=this.offsetHeight,n(11,w)}function q(N){ee[N?"unshift":"push"](()=>{g=N,n(9,g)})}function ie(){v=this.offsetHeight,n(10,v)}function B(N){W=N,n(14,W)}function ce(N){H=N,n(5,H)}const P=()=>{setTimeout(()=>{oe(),!C.name&&H&&K()})};function ae(N){ee[N?"unshift":"push"](()=>{_=N,n(8,_)})}const de=N=>n(15,Q=N.detail);function Je(N){h=N,n(7,h)}function Zt(N){t.$$.not_equal(C.name,N)&&(C.name=N,n(2,C),n(27,i),n(1,f),n(4,O))}return t.$$set=N=>{"gearBox"in N&&n(25,c=N.gearBox),"slotName"in N&&n(0,d=N.slotName),"index"in N&&n(1,f=N.index)},t.$$.update=()=>{if(t.$$.dirty[0]&134217750&&i[f]&&i[f].name!=C.name&&(n(2,C=i[f]),!C.tool&&C.name)){n(3,E=C.moves.filter(N=>N.basic)[0]),n(4,O=C.moves.filter(N=>N.special)[0]),n(16,R={});for(let N of C.moves)n(16,R[N.name]=!1,R),Z(N);O&&O.name.includes("Fantastic Beamstorm")?n(20,j="~"):n(20,j="")}if(t.$$.dirty[0]&67108988&&(s||H)&&!C.tool&&C.name){for(let N in S)Z(N=="basic"?E:O||null,N);for(let N of C.moves)Z(N)}},[d,f,C,E,O,H,S,h,_,g,v,w,k,y,W,Q,R,o,a,l,j,oe,le,T,K,c,s,i,X,ne,ue,A,$,I,q,ie,B,ce,P,ae,de,Je,Zt]}class op extends De{constructor(e){super(),Ne(this,e,rp,ip,ye,{gearBox:25,slotName:0,index:1},null,[-1,-1])}}function Mo(t,e,n){const s=t.slice();return s[3]=e[n],s}function Lo(t){let e,n,s;function i(o){t[1](o)}let r={slotName:"gear",index:t[3]};return t[0]!==void 0&&(r.gearBox=t[0]),e=new op({props:r}),ee.push(()=>ke(e,"gearBox",i)),{c(){be(e.$$.fragment)},m(o,a){pe(e,o,a),s=!0},p(o,a){const l={};!n&&a&1&&(n=!0,l.gearBox=o[0],Ee(()=>n=!1)),e.$set(l)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){me(e,o)}}}function lp(t){let e,n,s=Ue(Qn),i=[];for(let o=0;o<s.length;o+=1)i[o]=Lo(Mo(t,s,o));const r=o=>G(i[o],1,1,()=>{i[o]=null});return{c(){e=b("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","gearBox svelte-1lv6xba")},m(o,a){F(o,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);t[2](e),n=!0},p(o,[a]){if(a&1){s=Ue(Qn);let l;for(l=0;l<s.length;l+=1){const u=Mo(o,s,l);i[l]?(i[l].p(u,a),z(i[l],1)):(i[l]=Lo(u),i[l].c(),z(i[l],1),i[l].m(e,null))}for(Le(),l=s.length;l<i.length;l+=1)r(l);Be()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)z(i[a]);n=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)G(i[a]);n=!1},d(o){o&&M(e),gt(i,o),t[2](null)}}}function ap(t,e,n){let s;function i(o){s=o,n(0,s)}function r(o){ee[o?"unshift":"push"](()=>{s=o,n(0,s)})}return[s,i,r]}class up extends De{constructor(e){super(),Ne(this,e,ap,lp,ye,{})}}function cp(t){let e,n,s,i,r,o,a,l;return{c(){e=b("div"),n=b("div"),s=b("button"),s.textContent="Clear armor",i=L(),r=b("div"),o=b("button"),o.textContent="Clear gear",m(s,"class","svelte-e94uvj"),m(n,"class","svelte-e94uvj"),m(o,"class","svelte-e94uvj"),m(r,"class","svelte-e94uvj"),m(e,"class","mainFeatures svelte-e94uvj"),m(e,"id","box")},m(u,c){F(u,e,c),p(e,n),p(n,s),p(e,i),p(e,r),p(r,o),a||(l=[D(s,"click",t[3]),D(o,"click",t[4])],a=!0)},p:te,i:te,o:te,d(u){u&&M(e),a=!1,ve(l)}}}function dp(t,e,n){let s,i,r,o,a;Y(t,Pt,f=>n(5,s=f)),Y(t,fs,f=>n(6,i=f)),Y(t,bt,f=>n(7,r=f)),Y(t,Bn,f=>n(8,o=f)),Y(t,hn,f=>n(0,a=f));function l(){for(let f in r)r[f].name&&o[f][r[f].name].querySelector("button").click()}function u(){for(let f in s)s[f].name&&i[f][s[f].name].querySelector("button").click()}return[a,l,u,()=>{a||l()},()=>{a||u()}]}class fp extends De{constructor(e){super(),Ne(this,e,dp,cp,ye,{})}}function hp(t){let e,n,s,i,r,o,a;function l(c){t[2](c)}let u={slotName:"sets",index:null,weaponExpand:null};return t[0]!==void 0&&(u.slotOpen=t[0]),s=new gr({props:u}),ee.push(()=>ke(s,"slotOpen",l)),{c(){e=b("button"),e.innerHTML=`Load armor set
    <iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="180deg" class="svelte-l9dczq"></iconify-icon>`,n=L(),be(s.$$.fragment),m(e,"class","svelte-l9dczq"),J(e,"ddOpen",t[0])},m(c,d){F(c,e,d),F(c,n,d),pe(s,c,d),r=!0,o||(a=D(e,"click",t[1]),o=!0)},p(c,[d]){(!r||d&1)&&J(e,"ddOpen",c[0]);const f={};!i&&d&1&&(i=!0,f.slotOpen=c[0],Ee(()=>i=!1)),s.$set(f)},i(c){r||(z(s.$$.fragment,c),r=!0)},o(c){G(s.$$.fragment,c),r=!1},d(c){c&&(M(e),M(n)),me(s,c),o=!1,a()}}}function _p(t,e,n){let{ddOpen:s=!1}=e;const i=()=>n(0,s=!s);function r(o){s=o,n(0,s)}return t.$$set=o=>{"ddOpen"in o&&n(0,s=o.ddOpen)},[s,i,r]}class pp extends De{constructor(e){super(),Ne(this,e,_p,hp,ye,{ddOpen:0})}}function mp(t){let e;return{c(){e=b("span"),e.textContent="Create some builds to get started!",m(e,"class","tooltip svelte-1c244fb"),m(e,"id","top"),Pe(e,"left","70.5%")},m(n,s){F(n,e,s)},p:te,d(n){n&&M(e)}}}function gp(t){let e;return{c(){e=b("span"),e.textContent="Select some gear or armor to get started!",m(e,"class","tooltip svelte-1c244fb"),m(e,"id","top"),Pe(e,"left",t[3]?"38%":"")},m(n,s){F(n,e,s)},p(n,s){s&8&&Pe(e,"left",n[3]?"38%":"")},d(n){n&&M(e)}}}function bp(t){let e,n,s,i,r,o,a,l,u,c,d,f,h,_,g,v,w,k,y,C,E,O,W,H,Q,j,S,R;function oe(X,ne){if(!X[4])return gp;if(!X[3])return mp}let le=oe(t),T=le&&le(t);function K(X){t[18](X)}let Z={};return t[1]!==void 0&&(Z.ddOpen=t[1]),H=new pp({props:Z}),ee.push(()=>ke(H,"ddOpen",K)),{c(){e=b("div"),n=b("div"),s=b("div"),i=b("button"),r=se("Export new build"),a=L(),l=b("div"),u=b("button"),c=se("Save to build"),f=L(),h=b("div"),_=b("button"),g=se("Delete build"),w=L(),T&&T.c(),k=L(),y=b("div"),C=b("div"),E=b("button"),E.textContent="Load build",O=L(),W=b("div"),be(H.$$.fragment),i.disabled=o=!t[4],m(i,"class","svelte-1c244fb"),m(s,"class","buttonCont svelte-1c244fb"),u.disabled=d=!t[4]||!t[3],m(u,"class","svelte-1c244fb"),m(l,"class","buttonCont svelte-1c244fb"),m(l,"id","middle"),_.disabled=v=!t[3],m(_,"class","svelte-1c244fb"),m(h,"class","buttonCont svelte-1c244fb"),m(n,"id","modify"),m(n,"class","svelte-1c244fb"),J(n,"no-tooltip",t[2]),m(E,"class","svelte-1c244fb"),m(C,"class","buttonCont svelte-1c244fb"),m(W,"class","buttonCont svelte-1c244fb"),m(y,"id","load"),m(y,"class","svelte-1c244fb"),m(e,"class","mainFeatures svelte-1c244fb"),m(e,"id","build")},m(X,ne){F(X,e,ne),p(e,n),p(n,s),p(s,i),p(i,r),p(n,a),p(n,l),p(l,u),p(u,c),p(n,f),p(n,h),p(h,_),p(_,g),p(n,w),T&&T.m(n,null),p(e,k),p(e,y),p(y,C),p(C,E),p(y,O),p(y,W),pe(H,W,null),t[19](W),j=!0,S||(R=[D(window,"mousedown",t[8]),D(window,"keydown",t[9]),D(i,"click",t[10]),D(i,"mouseenter",t[11]),D(i,"mouseleave",t[12]),D(u,"click",t[13]),D(_,"click",t[14]),D(_,"mouseenter",t[15]),D(_,"mouseleave",t[16]),D(E,"click",t[17])],S=!0)},p(X,[ne]){(!j||ne&16&&o!==(o=!X[4]))&&(i.disabled=o),(!j||ne&24&&d!==(d=!X[4]||!X[3]))&&(u.disabled=d),(!j||ne&8&&v!==(v=!X[3]))&&(_.disabled=v),le===(le=oe(X))&&T?T.p(X,ne):(T&&T.d(1),T=le&&le(X),T&&(T.c(),T.m(n,null))),(!j||ne&4)&&J(n,"no-tooltip",X[2]);const ue={};!Q&&ne&2&&(Q=!0,ue.ddOpen=X[1],Ee(()=>Q=!1)),H.$set(ue)},i(X){j||(z(H.$$.fragment,X),j=!0)},o(X){G(H.$$.fragment,X),j=!1},d(X){X&&M(e),T&&T.d(),me(H),t[19](null),S=!1,ve(R)}}}function yp(t,e,n){let s,i,r,o,a;Y(t,nt,W=>n(7,s=W)),Y(t,It,W=>n(3,i=W)),Y(t,dl,W=>n(4,r=W)),Y(t,hn,W=>n(5,o=W)),Y(t,x,W=>n(6,a=W));let l,u=!1,c=!1;const d=W=>{l.contains(W.target)||n(1,u=!1)},f=W=>{W.key=="Escape"&&n(1,u=!1)},h=()=>{r&&!o&&U(x,a.export.ongoing=!0,a)},_=()=>n(2,c=!0),g=()=>n(2,c=!1),v=()=>{r&&i&&!o&&U(x,a.save.ongoing=!0,a)},w=()=>{i&&!o&&U(x,a.delete.ongoing=!0,a)},k=()=>n(2,c=!0),y=()=>n(2,c=!1),C=()=>{o||U(x,a.load.ongoing=!0,a)};function E(W){u=W,n(1,u)}function O(W){ee[W?"unshift":"push"](()=>{l=W,n(0,l)})}return t.$$.update=()=>{t.$$.dirty&128&&U(It,i=Object.keys(s).length>0,i)},[l,u,c,i,r,o,a,s,d,f,h,_,g,v,w,k,y,C,E,O]}class vp extends De{constructor(e){super(),Ne(this,e,yp,bp,ye,{})}}function Bo(t){let e;return{c(){e=b("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(n,s){F(n,e,s)},d(n){n&&M(e)}}}function wp(t){let e,n,s,i,r,o,a,l=25-t[3].length+"",u,c,d,f,h,_,g,v,w,k,y,C=275-t[4].length+"",E,O,W,H,Q,j,S,R,oe,le,T,K,Z,X,ne,ue,A=(t[3]||t[4])&&Bo();return{c(){e=b("div"),n=b("div"),s=se(`Name:\r
        `),i=b("input"),o=L(),a=b("span"),u=se(l),c=L(),d=b("div"),f=b("div"),h=b("span"),h.textContent="Description / Notes:",_=L(),A&&A.c(),g=L(),v=b("textarea"),k=L(),y=b("span"),E=se(C),O=L(),W=b("div"),H=b("div"),Q=b("button"),j=se("CANCEL"),R=L(),oe=b("div"),le=b("button"),T=se("EXPORT"),m(i,"class","buildNameInput"),m(i,"id","firstFocusable"),i.disabled=r=t[5].export.status==0,m(i,"type","text"),m(i,"placeholder",t[6]),m(i,"maxlength","25"),m(a,"class","charCounter svelte-1vypdkl"),m(a,"id","buildName"),m(n,"class","buildNameCont svelte-1vypdkl"),m(v,"class","buildDescInput"),v.disabled=w=t[5].export.status==0,m(v,"placeholder","[Empty]"),m(v,"maxlength","275"),m(v,"autocomplete","off"),m(y,"class","charCounter"),m(y,"id","buildDesc"),m(d,"class","buildDescCont"),Q.disabled=S=t[5].export.status==0,m(le,"id","lastFocusable"),le.disabled=K=t[5].export.status==0,m(W,"class","promptOptions"),m(e,"class","buildExporter svelte-1vypdkl")},m($,I){F($,e,I),p(e,n),p(n,s),p(n,i),t[8](i),ct(i,t[3]),p(n,o),p(n,a),p(a,u),p(e,c),p(e,d),p(d,f),p(f,h),p(f,_),A&&A.m(f,null),p(d,g),p(d,v),ct(v,t[4]),t[13](v),p(d,k),p(d,y),p(y,E),p(e,O),p(e,W),p(W,H),p(H,Q),p(Q,j),t[16](Q),p(W,R),p(W,oe),p(oe,le),p(le,T),X=!0,ne||(ue=[D(i,"input",t[9]),D(i,"input",t[10]),D(i,"keydown",t[11]),D(v,"input",t[12]),D(v,"input",t[14]),D(v,"keydown",t[15]),D(Q,"click",t[17]),D(le,"click",t[18]),D(le,"keydown",xt),D(e,"introstart",t[19])],ne=!0)},p($,[I]){(!X||I&32&&r!==(r=$[5].export.status==0))&&(i.disabled=r),I&8&&i.value!==$[3]&&ct(i,$[3]),(!X||I&8)&&l!==(l=25-$[3].length+"")&&Re(u,l),$[3]||$[4]?A||(A=Bo(),A.c(),A.m(f,null)):A&&(A.d(1),A=null),(!X||I&32&&w!==(w=$[5].export.status==0))&&(v.disabled=w),I&16&&ct(v,$[4]),(!X||I&16)&&C!==(C=275-$[4].length+"")&&Re(E,C),(!X||I&32&&S!==(S=$[5].export.status==0))&&(Q.disabled=S),(!X||I&32&&K!==(K=$[5].export.status==0))&&(le.disabled=K)},i($){X||($&&Ce(()=>{X&&(Z||(Z=Ae(e,st,{duration:250},!0)),Z.run(1))}),X=!0)},o($){$&&(Z||(Z=Ae(e,st,{duration:250},!1)),Z.run(0)),X=!1},d($){$&&M(e),t[8](null),A&&A.d(),t[13](null),t[16](null),$&&Z&&Z.end(),ne=!1,ve(ue)}}}function Cp(t,e,n){let s,i,r,o,a,l;Y(t,x,T=>n(5,s=T)),Y(t,Ze,T=>n(20,i=T)),Y(t,It,T=>n(21,r=T)),Y(t,Pt,T=>n(22,o=T)),Y(t,bt,T=>n(23,a=T)),Y(t,nt,T=>n(24,l=T));let u=Object.keys(l).length,c=(u+1)%10,d=c==1?"st":c==2?"nd":c==3?"rd":"th",f,h,_,g="",v="",w=`My ${u+1+d} build`;function k(){if(U(x,s.export.status=0,s),g.endsWith(" ")&&n(3,g=g.replace(/  +/g," ").replace(/ $/,"")),v.endsWith(" ")&&n(4,v=v.replace(/  +/g," ").replace(/ $/,"")),Object.keys(l).includes(g)){U(x,s.export.status=-1,s),U(x,s.message="duplicate_name",s);return}let T=$h(vt(gn(bn),"builds")).key,K=$a(a,o);K.name=g||w,K.desc=v||"[Empty]",Gs(vt(gn(bn),`builds/${T}`),K).then(()=>{U(x,s.export.status=1,s),U(It,r=!0,r),mr(),nt.update(Z=>({...Z,[K.name]:{id:T,desc:K.desc}})),U(Ze,i=K,i),U(Ze,i.id=T,i),navigator.clipboard.writeText(`${location.origin+location.pathname}?id=${T}`)}).catch(()=>{U(x,s.export.status=-1,s),U(x,s.message="firebase_fail",s)})}function y(T){ee[T?"unshift":"push"](()=>{f=T,n(0,f)})}function C(){g=this.value,n(3,g)}const E=T=>{n(3,g=Rs(T.target.value,25))},O=T=>{s.export.status==0&&T.preventDefault(),wt(T),Ti(f,T.target.value,25)};function W(){v=this.value,n(4,v)}function H(T){ee[T?"unshift":"push"](()=>{h=T,n(1,h)})}const Q=T=>{n(4,v=Rs(T.target.value,275))},j=T=>{s.export.status==0&&T.preventDefault(),Ti(h,T.target.value,275)};function S(T){ee[T?"unshift":"push"](()=>{_=T,n(2,_)})}return[f,h,_,g,v,s,w,k,y,C,E,O,W,H,Q,j,S,()=>{s.export.status!=0&&U(x,s.export.ongoing=!1,s)},()=>{s.export.status!=0&&k()},()=>_.focus()]}class Ep extends De{constructor(e){super(),Ne(this,e,Cp,wp,ye,{})}}function kp(t){let e,n,s,i,r=t[2]?"Copied!":"Copy link",o,a,l;return{c(){e=b("button"),n=b("b"),n.textContent="Build link",s=L(),i=b("span"),o=se(r),m(i,"class","tooltip svelte-zqs0fu"),m(i,"id","top"),m(e,"class","copyButton svelte-zqs0fu"),m(e,"id","firstFocusable")},m(u,c){F(u,e,c),p(e,n),p(e,s),p(e,i),p(i,o),a||(l=[D(e,"click",t[7]),D(e,"keydown",wt)],a=!0)},p(u,c){c&4&&r!==(r=u[2]?"Copied!":"Copy link")&&Re(o,r)},d(u){u&&M(e),a=!1,ve(l)}}}function Sp(t){let e,n,s,i,r,o,a=t[2]?"Copied!":"Copy ID",l,u,c,d;return{c(){e=b("button"),n=b("b"),n.textContent="ID:",s=L(),i=se(t[4]),r=L(),o=b("span"),l=se(a),m(o,"class","tooltip svelte-zqs0fu"),m(o,"id","top"),m(e,"class","copyButton svelte-zqs0fu"),m(e,"id",u=t[1]!="save"?"firstFocusable":"")},m(f,h){F(f,e,h),p(e,n),p(e,s),p(e,i),p(e,r),p(e,o),p(o,l),c||(d=[D(e,"click",t[5]),D(e,"keydown",t[6])],c=!0)},p(f,h){h&4&&a!==(a=f[2]?"Copied!":"Copy ID")&&Re(l,a),h&2&&u!==(u=f[1]!="save"?"firstFocusable":"")&&m(e,"id",u)},d(f){f&&M(e),c=!1,ve(d)}}}function Ip(t){let e;function n(r,o){if(r[0]=="id")return Sp;if(r[0]=="link")return kp}let s=n(t),i=s&&s(t);return{c(){i&&i.c(),e=St()},m(r,o){i&&i.m(r,o),F(r,e,o)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i&&i.d(1),i=s&&s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:te,o:te,d(r){r&&M(e),i&&i.d(r)}}}function Tp(t,e,n){let s;Y(t,Ze,f=>n(8,s=f));let{type:i,source:r}=e,o=!1;function a(f){o||(navigator.clipboard.writeText(f),n(2,o=!0),setTimeout(()=>{n(2,o=!1)},1e3))}let l=s?s.id:null;const u=()=>a(l),c=()=>{r!="save"&&wt()},d=()=>a(`${location.origin+location.pathname}?id=${l}`);return t.$$set=f=>{"type"in f&&n(0,i=f.type),"source"in f&&n(1,r=f.source)},[i,r,o,a,l,u,c,d]}class Xn extends De{constructor(e){super(),Ne(this,e,Tp,Ip,ye,{type:0,source:1})}}function Np(t){let e,n,s,i;return e=new Xn({props:{type:"link",source:"share"}}),s=new Xn({props:{type:"id",source:"share"}}),{c(){be(e.$$.fragment),n=L(),be(s.$$.fragment)},m(r,o){pe(e,r,o),F(r,n,o),pe(s,r,o),i=!0},p:te,i(r){i||(z(e.$$.fragment,r),z(s.$$.fragment,r),i=!0)},o(r){G(e.$$.fragment,r),G(s.$$.fragment,r),i=!1},d(r){r&&M(n),me(e,r),me(s,r)}}}function Dp(t){let e;return{c(){e=b("span"),e.textContent="Your build has been erased from your local saves and the database."},m(n,s){F(n,e,s)},p:te,i:te,o:te,d(n){n&&M(e)}}}function Op(t){let e;function n(r,o){if(r[2].message=="not_found")return Lp;if(r[2].message=="invalid_id")return Mp}let s=n(t),i=s&&s(t);return{c(){i&&i.c(),e=St()},m(r,o){i&&i.m(r,o),F(r,e,o)},p(r,o){s!==(s=n(r))&&(i&&i.d(1),i=s&&s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:te,o:te,d(r){r&&M(e),i&&i.d(r)}}}function Rp(t){let e,n,s,i,r,o;return s=new Xn({props:{type:"link",source:"save"}}),r=new Xn({props:{type:"id",source:"save"}}),{c(){e=b("span"),e.textContent="Your build has been overwritten.",n=L(),be(s.$$.fragment),i=L(),be(r.$$.fragment)},m(a,l){F(a,e,l),F(a,n,l),pe(s,a,l),F(a,i,l),pe(r,a,l),o=!0},p:te,i(a){o||(z(s.$$.fragment,a),z(r.$$.fragment,a),o=!0)},o(a){G(s.$$.fragment,a),G(r.$$.fragment,a),o=!1},d(a){a&&(M(e),M(n),M(i)),me(s,a),me(r,a)}}}function Ap(t){let e,n,s,i;const r=[Fp,Bp],o=[];function a(l,u){return l[2].export.status==1?0:l[2].export.status==-1&&l[2].message=="duplicate_name"?1:-1}return~(e=a(t))&&(n=o[e]=r[e](t)),{c(){n&&n.c(),s=St()},m(l,u){~e&&o[e].m(l,u),F(l,s,u),i=!0},p(l,u){let c=e;e=a(l),e!==c&&(n&&(Le(),G(o[c],1,1,()=>{o[c]=null}),Be()),~e?(n=o[e],n||(n=o[e]=r[e](l),n.c()),z(n,1),n.m(s.parentNode,s)):n=null)},i(l){i||(z(n),i=!0)},o(l){G(n),i=!1},d(l){l&&M(s),~e&&o[e].d(l)}}}function Pp(t){let e,n,s=t[2].export.status?"exporting":t[2].save.status?"saving":t[2].load.status?"loading":"deleting",i,r,o,a,l,u,c,d;return{c(){e=b("span"),n=se("A problem occurred while "),i=se(s),r=se(` your build.\r
            `),o=b("br"),a=se(`\r
            If needed`),l=b("b"),l.textContent=",",u=se(" you may contact "),c=b("hl"),c.textContent="xt.ss",d=se(` on Discord for more\r
            details.`)},m(f,h){F(f,e,h),p(e,n),p(e,i),p(e,r),p(e,o),p(e,a),p(e,l),p(e,u),p(e,c),p(e,d)},p(f,h){h&4&&s!==(s=f[2].export.status?"exporting":f[2].save.status?"saving":f[2].load.status?"loading":"deleting")&&Re(i,s)},i:te,o:te,d(f){f&&M(e)}}}function Mp(t){let e;return{c(){e=b("span"),e.textContent="The ID you have entered is invalid. Please check it again."},m(n,s){F(n,e,s)},d(n){n&&M(e)}}}function Lp(t){let e;return{c(){e=b("span"),e.innerHTML=`Your build could not be found within the database.
                <br/>
                If needed<b>,</b> you may contact <hl>xt.ss</hl> on Discord for more
                details.`},m(n,s){F(n,e,s)},d(n){n&&M(e)}}}function Bp(t){let e;return{c(){e=b("span"),e.innerHTML=`Another build of yours with the same name already exists.
                <br/>
                Please use a different one.`},m(n,s){F(n,e,s)},i:te,o:te,d(n){n&&M(e)}}}function Fp(t){let e,n,s,i;return s=new Xn({props:{type:"id",source:"export"}}),{c(){e=b("span"),e.textContent="Your build's link has been copied to your clipboard.",n=L(),be(s.$$.fragment)},m(r,o){F(r,e,o),F(r,n,o),pe(s,r,o),i=!0},i(r){i||(z(s.$$.fragment,r),i=!0)},o(r){G(s.$$.fragment,r),i=!1},d(r){r&&(M(e),M(n)),me(s,r)}}}function Wp(t){let e,n,s,i,r,o,a,l,u,c,d,f,h,_,g,v,w;const k=[Pp,Ap,Rp,Op,Dp,Np],y=[];function C(E,O){return E[1]==-1&&E[2].message=="firebase_fail"?0:E[2].export.status?1:E[2].save.status==1?2:E[2].load.status==-1?3:E[2].delete.status==1?4:E[2].share.ongoing?5:-1}return~(r=C(t))&&(o=y[r]=k[r](t)),{c(){e=b("div"),n=b("span"),s=se(t[4]),i=L(),o&&o.c(),a=L(),l=b("div"),u=b("div"),c=b("button"),d=se("OK"),m(n,"id","messageTitle"),m(n,"class","svelte-nfbx2w"),m(c,"id",f=(t[1]==-1?"firstFocusable ":"")+"lastFocusable"),m(l,"class","promptOptions svelte-nfbx2w"),m(e,"class","promptMessage svelte-nfbx2w")},m(E,O){F(E,e,O),p(e,n),p(n,s),p(e,i),~r&&y[r].m(e,null),p(e,a),p(e,l),p(l,u),p(u,c),p(c,d),t[6](c),g=!0,v||(w=[D(c,"click",t[7]),D(c,"keydown",t[8]),D(e,"introstart",t[9])],v=!0)},p(E,[O]){(!g||O&16)&&Re(s,E[4]);let W=r;r=C(E),r===W?~r&&y[r].p(E,O):(o&&(Le(),G(y[W],1,1,()=>{y[W]=null}),Be()),~r?(o=y[r],o?o.p(E,O):(o=y[r]=k[r](E),o.c()),z(o,1),o.m(e,a)):o=null),(!g||O&2&&f!==(f=(E[1]==-1?"firstFocusable ":"")+"lastFocusable"))&&m(c,"id",f)},i(E){g||(z(o),E&&Ce(()=>{g&&(_&&_.end(1),h=ul(e,st,{duration:200,delay:75}),h.start())}),g=!0)},o(E){G(o),h&&h.invalidate(),E&&(_=cl(e,st,{duration:200})),g=!1},d(E){E&&M(e),~r&&y[r].d(),t[6](null),E&&_&&_.end(),v=!1,ve(w)}}}function qp(t,e,n){let s,i,r;Y(t,x,h=>n(2,r=h));let{loadID:o}=e;const a=Ct();let l;function u(h){ee[h?"unshift":"push"](()=>{l=h,n(3,l)})}const c=()=>{n(0,o=null),a("resetActions")},d=h=>{i==-1&&wt(h),xt(h)},f=()=>l.focus();return t.$$set=h=>{"loadID"in h&&n(0,o=h.loadID)},t.$$.update=()=>{t.$$.dirty&4&&n(1,i=r.export.status||r.save.status||r.load.status||r.delete.status),t.$$.dirty&6&&n(4,s=r.share.ongoing?"Share this build":`${r.export.status?"Export":r.save.status?"Save":r.load.status?"Load":"Delete"} ${i==1?"Success":"Failure"}!`)},[o,i,r,l,s,a,u,c,d,f]}class Hp extends De{constructor(e){super(),Ne(this,e,qp,Wp,ye,{loadID:0})}}function zp(t){let e,n,s,i,r,o;return{c(){e=b("li"),n=b("button"),s=b("span"),i=se(t[0]),m(s,"class","svelte-1opo0ke"),m(e,"class","svelte-1opo0ke"),J(e,"selectedItem",t[2])},m(a,l){F(a,e,l),p(e,n),p(n,s),p(s,i),t[7](e),r||(o=D(n,"click",t[3]),r=!0)},p(a,[l]){l&1&&Re(i,a[0]),l&4&&J(e,"selectedItem",a[2])},i:te,o:te,d(a){a&&M(e),t[7](null),r=!1,o()}}}function Up(t,e,n){let{chosenBuild:s,buildData:i,buildName:r,ddOpen:o}=e;const a=Ct();let l,u=s[0]==r;function c(){if(o){if(l.classList.contains("selectedItem")||n(2,u=!1),u)return;a("buildSelect",l),n(2,u=!0),n(5,o=!1),n(4,s=[r,i])}}function d(f){ee[f?"unshift":"push"](()=>{l=f,n(1,l)})}return t.$$set=f=>{"chosenBuild"in f&&n(4,s=f.chosenBuild),"buildData"in f&&n(6,i=f.buildData),"buildName"in f&&n(0,r=f.buildName),"ddOpen"in f&&n(5,o=f.ddOpen)},[r,l,u,c,s,o,i,d]}class Vp extends De{constructor(e){super(),Ne(this,e,Up,zp,ye,{chosenBuild:4,buildData:6,buildName:0,ddOpen:5})}}function Fo(t,e,n){const s=t.slice();return s[25]=e[n][0],s[26]=e[n][1],s}function Wo(t){let e,n,s,i;function r(l){t[13](l)}function o(l){t[14](l)}let a={buildData:t[26],buildName:t[25]};return t[0]!==void 0&&(a.chosenBuild=t[0]),t[1]!==void 0&&(a.ddOpen=t[1]),e=new Vp({props:a}),ee.push(()=>ke(e,"chosenBuild",r)),ee.push(()=>ke(e,"ddOpen",o)),e.$on("buildSelect",t[11]),{c(){be(e.$$.fragment)},m(l,u){pe(e,l,u),i=!0},p(l,u){const c={};u&16&&(c.buildData=l[26]),u&16&&(c.buildName=l[25]),!n&&u&1&&(n=!0,c.chosenBuild=l[0],Ee(()=>n=!1)),!s&&u&2&&(s=!0,c.ddOpen=l[1],Ee(()=>s=!1)),e.$set(c)},i(l){i||(z(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){me(e,l)}}}function jp(t){let e,n,s,i,r,o,a,l=Ue(Object.entries(t[4])),u=[];for(let d=0;d<l.length;d+=1)u[d]=Wo(Fo(t,l,d));const c=d=>G(u[d],1,1,()=>{u[d]=null});return{c(){e=b("div"),n=b("input"),s=L(),i=b("ul");for(let d=0;d<u.length;d+=1)u[d].c();m(n,"type","text"),m(n,"class","searchBarInput svelte-p20blu"),m(n,"placeholder","Search..."),m(i,"class","svelte-p20blu"),J(i,"no-scrollbar",t[8].length<=4),m(e,"class","dropdown svelte-p20blu"),J(e,"ddOpen",t[1])},m(d,f){F(d,e,f),p(e,n),t[12](n),p(e,s),p(e,i);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(i,null);t[15](i),t[16](e),r=!0,o||(a=[D(n,"input",t[10]),D(n,"keydown",t[9]),D(e,"transitionend",t[17]),D(e,"transitioncancel",t[18])],o=!0)},p(d,[f]){if(f&2067){l=Ue(Object.entries(d[4]));let h;for(h=0;h<l.length;h+=1){const _=Fo(d,l,h);u[h]?(u[h].p(_,f),z(u[h],1)):(u[h]=Wo(_),u[h].c(),z(u[h],1),u[h].m(i,null))}for(Le(),h=l.length;h<u.length;h+=1)c(h);Be()}(!r||f&256)&&J(i,"no-scrollbar",d[8].length<=4),(!r||f&2)&&J(e,"ddOpen",d[1])},i(d){if(!r){for(let f=0;f<l.length;f+=1)z(u[f]);r=!0}},o(d){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)G(u[f]);r=!1},d(d){d&&M(e),t[12](null),gt(u,d),t[15](null),t[16](null),o=!1,ve(a)}}}function Gp(t,e,n){let s;Y(t,nt,R=>n(4,s=R));let{chosenBuild:i,ddOpen:r=!1,dropdown:o}=e;const a=Ct();let l,u,c,d,f={},h=!1,_=[];function g(R){!R.shiftKey&&R.key=="Tab"&&(R.preventDefault(),setTimeout(()=>l.focus()))}function v(){u&&u.removeEventListener("keydown",g),y(),u&&u.addEventListener("keydown",g)}function w(R){R.shiftKey&&R.key=="Tab"&&(R.preventDefault(),setTimeout(()=>(u.querySelector("button")||u).focus()))}function k(){Za(l.value,f),v()}function y(){u&&u.classList.remove("lastElement"),n(8,_=c.querySelectorAll("li:not(.hidden)")),u=_[_.length-1],u?u.classList.add("lastElement"):u=l}function C(R){a("buildSelect"),n(6,d=R.detail);let oe=c.querySelector(".selectedItem");oe&&oe!=R.detail&&oe.classList.remove("selectedItem"),n(7,h=!0)}function E(R){ee[R?"unshift":"push"](()=>{l=R,n(5,l)})}function O(R){i=R,n(0,i)}function W(R){r=R,n(1,r)}function H(R){ee[R?"unshift":"push"](()=>{c=R,n(3,c)})}function Q(R){ee[R?"unshift":"push"](()=>{o=R,n(2,o)})}const j=R=>{R.propertyName=="visibility"&&(h&&(n(7,h=!1),n(5,l.value="",l),k()),!r&&d&&c.scrollTo(0,d.offsetTop),Os(l,r))},S=R=>{R.propertyName=="visibility"&&(n(7,h=!1),Os(l,r))};return t.$$set=R=>{"chosenBuild"in R&&n(0,i=R.chosenBuild),"ddOpen"in R&&n(1,r=R.ddOpen),"dropdown"in R&&n(2,o=R.dropdown)},t.$$.update=()=>{if(t.$$.dirty&24&&c){n(8,_=c.querySelectorAll("li:not(.hidden)"));for(let R=0;R<c.childElementCount;R++)f[Object.keys(s)[R]]=c.children[R];y(),v()}},[i,r,o,c,s,l,d,h,_,w,k,C,E,O,W,H,Q,j,S]}class br extends De{constructor(e){super(),Ne(this,e,Gp,jp,ye,{chosenBuild:0,ddOpen:1,dropdown:2})}}function qo(t){let e,n=(t[6]>t[5]*.8?t[11].slice(0,20)+"<b>...</b>":t[11])+"",s;return{c(){e=b("span"),Ce(()=>t[15].call(e))},m(i,r){F(i,e,r),e.innerHTML=n,s=ft(e,t[15].bind(e))},p(i,r){r[0]&2144&&n!==(n=(i[6]>i[5]*.8?i[11].slice(0,20)+"<b>...</b>":i[11])+"")&&(e.innerHTML=n)},d(i){i&&M(e),s()}}}function Ho(t){let e;return{c(){e=b("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(n,s){F(n,e,s)},d(n){n&&M(e)}}}function Yp(t){let e,n,s,i,r,o=t[11],a,l,u,c,d,f,h,_,g,v,w,k,y,C,E=275-t[2].length+"",O,W,H,Q,j,S,R,oe,le,T,K,Z,X,ne,ue,A,$,I,q,ie,B,ce=qo(t),P=t[1]!=null&&t[1]!=t[2]&&Ho();function ae(N){t[26](N)}function de(N){t[27](N)}function Je(N){t[28](N)}let Zt={};return t[0]!==void 0&&(Zt.chosenBuild=t[0]),t[3]!==void 0&&(Zt.ddOpen=t[3]),t[9]!==void 0&&(Zt.dropdown=t[9]),ne=new br({props:Zt}),ee.push(()=>ke(ne,"chosenBuild",ae)),ee.push(()=>ke(ne,"ddOpen",de)),ee.push(()=>ke(ne,"dropdown",Je)),ne.$on("buildSelect",t[29]),{c(){e=b("div"),n=b("div"),s=b("span"),s.textContent="Save to:",i=L(),r=b("button"),ce.c(),a=L(),l=b("iconify-icon"),d=L(),f=b("div"),h=b("div"),_=b("span"),_.textContent="Description / Notes:",g=L(),P&&P.c(),v=L(),w=b("textarea"),y=L(),C=b("span"),O=se(E),W=L(),H=b("div"),Q=b("div"),j=b("button"),S=se("CANCEL"),oe=L(),le=b("div"),T=b("button"),K=se("SAVE"),X=L(),be(ne.$$.fragment),Xe(l,"icon","iconamoon:arrow-down-2-fill"),m(r,"id","firstFocusable"),r.disabled=u=t[12].save.status==0,m(r,"class","promptDDButton svelte-106wt5q"),Ce(()=>t[17].call(r)),J(r,"ddOpen",t[3]),m(n,"class","chosenBuildCont"),m(w,"class","buildDescInput"),w.disabled=k=t[12].save.status==0,m(w,"placeholder","[Empty]"),m(w,"maxlength","275"),m(w,"autocomplete","off"),m(C,"class","charCounter"),m(C,"id","buildDesc"),m(f,"class","buildDescCont"),j.disabled=R=t[12].save.status==0,m(T,"id","lastFocusable"),T.disabled=Z=t[12].save.status==0,m(H,"class","promptOptions"),m(e,"class","buildSaver")},m(N,he){F(N,e,he),p(e,n),p(n,s),p(n,i),p(n,r),ce.m(r,null),p(r,a),p(r,l),t[16](r),c=ft(r,t[17].bind(r)),p(e,d),p(e,f),p(f,h),p(h,_),p(h,g),P&&P.m(h,null),p(f,v),p(f,w),t[19](w),ct(w,t[10]),p(f,y),p(f,C),p(C,O),p(e,W),p(e,H),p(H,Q),p(Q,j),p(j,S),t[23](j),p(H,oe),p(H,le),p(le,T),p(T,K),p(e,X),pe(ne,e,null),q=!0,ie||(B=[D(window,"mousedown",t[14]),D(r,"click",t[18]),D(r,"keydown",wt),D(w,"input",t[20]),D(w,"input",t[21]),D(w,"keydown",t[22]),D(j,"click",t[24]),D(T,"click",t[25]),D(T,"keydown",xt),D(e,"introstart",t[30]),D(e,"keydown",t[31])],ie=!0)},p(N,he){he[0]&2048&&ye(o,o=N[11])?(ce.d(1),ce=qo(N),ce.c(),ce.m(r,a)):ce.p(N,he),(!q||he[0]&4096&&u!==(u=N[12].save.status==0))&&(r.disabled=u),(!q||he[0]&8)&&J(r,"ddOpen",N[3]),N[1]!=null&&N[1]!=N[2]?P||(P=Ho(),P.c(),P.m(h,null)):P&&(P.d(1),P=null),(!q||he[0]&4096&&k!==(k=N[12].save.status==0))&&(w.disabled=k),he[0]&1024&&ct(w,N[10]),(!q||he[0]&4)&&E!==(E=275-N[2].length+"")&&Re(O,E),(!q||he[0]&4096&&R!==(R=N[12].save.status==0))&&(j.disabled=R),(!q||he[0]&4096&&Z!==(Z=N[12].save.status==0))&&(T.disabled=Z);const Ve={};!ue&&he[0]&1&&(ue=!0,Ve.chosenBuild=N[0],Ee(()=>ue=!1)),!A&&he[0]&8&&(A=!0,Ve.ddOpen=N[3],Ee(()=>A=!1)),!$&&he[0]&512&&($=!0,Ve.dropdown=N[9],Ee(()=>$=!1)),ne.$set(Ve)},i(N){q||(z(ne.$$.fragment,N),N&&Ce(()=>{q&&(I||(I=Ae(e,st,{duration:250},!0)),I.run(1))}),q=!0)},o(N){G(ne.$$.fragment,N),N&&(I||(I=Ae(e,st,{duration:250},!1)),I.run(0)),q=!1},d(N){N&&M(e),ce.d(N),t[16](null),c(),P&&P.d(),t[19](null),t[23](null),me(ne),N&&I&&I.end(),ie=!1,ve(B)}}}function Kp(t,e,n){let s,i,r,o,a,l,u,c;Y(t,x,I=>n(12,o=I)),Y(t,Ze,I=>n(32,a=I)),Y(t,nt,I=>n(33,l=I)),Y(t,Pt,I=>n(34,u=I)),Y(t,bt,I=>n(35,c=I));let d=!1,f,h,_,g,v,w,k=Object.entries(l)[0],y=null;function C(){U(x,o.save.status=0,o);let I=$a(c,u),q=y==null?i:y==""?"[Empty]":y,ie=k[1].id;I.name=s,I.desc=q,Gs(vt(gn(bn),`builds/${ie}`),I).then(()=>{U(x,o.save.status=1,o);let B={...l};B[s].desc=q,mr(),nt.update(()=>B),U(Ze,a=I,a),U(Ze,a.id=ie,a)}).catch(()=>{U(x,o.save.status=-1,o),U(x,o.message="firebase_fail",o)})}const E=I=>{!f.contains(I.target)&&!w.contains(I.target)&&n(3,d=!1)};function O(){_=this.offsetWidth,n(6,_)}function W(I){ee[I?"unshift":"push"](()=>{f=I,n(4,f)})}function H(){h=this.offsetWidth,n(5,h)}const Q=()=>{o.save.status!=0&&n(3,d=!d)};function j(I){ee[I?"unshift":"push"](()=>{g=I,n(7,g)})}function S(){r=this.value,n(10,r),n(1,y),n(2,i),n(0,k)}const R=I=>{n(1,y=Rs(I.target.value,275))},oe=I=>{o.save.status==0&&I.preventDefault(),Ti(g,I.target.value,275)};function le(I){ee[I?"unshift":"push"](()=>{v=I,n(8,v)})}const T=()=>{o.save.status!=0&&U(x,o.save.ongoing=!1,o)},K=()=>{o.save.status!=0&&C()};function Z(I){k=I,n(0,k)}function X(I){d=I,n(3,d)}function ne(I){w=I,n(9,w)}const ue=()=>n(1,y=null),A=()=>v.focus(),$=I=>{I.key=="Escape"&&(n(3,d=!1),f.focus())};return t.$$.update=()=>{t.$$.dirty[0]&1&&n(11,s=k[0]),t.$$.dirty[0]&1&&n(2,i=k[1].desc),t.$$.dirty[0]&6&&n(10,r=y??i)},[k,y,i,d,f,h,_,g,v,w,r,s,o,C,E,O,W,H,Q,j,S,R,oe,le,T,K,Z,X,ne,ue,A,$]}class Qp extends De{constructor(e){super(),Ne(this,e,Kp,Yp,ye,{},null,[-1,-1])}}function Xp(t){let e,n,s,i,r,o,a,l,u;return{c(){e=b("div"),n=b("span"),n.textContent="ID:",s=L(),i=b("input"),m(i,"class","buildIDInput svelte-w8elgk"),i.disabled=r=t[11].load.status==0,m(i,"type","text"),m(i,"placeholder","Example ID: -NDqeA1Scn0EAJcYWN3b"),m(i,"maxlength","25"),m(e,"class","buildIDCont svelte-w8elgk")},m(c,d){F(c,e,d),p(e,n),p(e,s),p(e,i),t[23](i),ct(i,t[10]),a=!0,l||(u=[D(i,"input",t[24]),D(i,"input",t[25]),D(i,"keydown",t[26])],l=!0)},p(c,d){(!a||d[0]&2048&&r!==(r=c[11].load.status==0))&&(i.disabled=r),d[0]&1024&&i.value!==c[10]&&ct(i,c[10])},i(c){a||(c&&Ce(()=>{a&&(o||(o=Ae(e,Ge,{duration:150},!0)),o.run(1))}),a=!0)},o(c){c&&(o||(o=Ae(e,Ge,{duration:150},!1)),o.run(0)),a=!1},d(c){c&&M(e),t[23](null),c&&o&&o.end(),l=!1,ve(u)}}}function Jp(t){let e,n,s,i,r=t[9],o,a,l,u,c,d,f,h,_=zo(t);return{c(){e=b("div"),n=b("span"),n.textContent="Load:",s=L(),i=b("button"),_.c(),o=L(),a=b("iconify-icon"),Xe(a,"icon","iconamoon:arrow-down-2-fill"),i.disabled=l=t[11].load.status==0,m(i,"class","promptDDButton svelte-w8elgk"),Ce(()=>t[21].call(i)),J(i,"ddOpen",t[8]),m(e,"class","chosenBuildCont svelte-w8elgk")},m(g,v){F(g,e,v),p(e,n),p(e,s),p(e,i),_.m(i,null),p(i,o),p(i,a),t[20](i),u=ft(i,t[21].bind(i)),d=!0,f||(h=D(i,"click",t[22]),f=!0)},p(g,v){v[0]&512&&ye(r,r=g[9])?(_.d(1),_=zo(g),_.c(),_.m(i,o)):_.p(g,v),(!d||v[0]&2048&&l!==(l=g[11].load.status==0))&&(i.disabled=l),(!d||v[0]&256)&&J(i,"ddOpen",g[8])},i(g){d||(g&&Ce(()=>{d&&(c||(c=Ae(e,Ge,{duration:150},!0)),c.run(1))}),d=!0)},o(g){g&&(c||(c=Ae(e,Ge,{duration:150},!1)),c.run(0)),d=!1},d(g){g&&M(e),_.d(g),t[20](null),u(),g&&c&&c.end(),f=!1,h()}}}function zo(t){let e,n=(t[6]>t[5]*.7?t[9].slice(0,20)+"<b>...</b>":t[9])+"",s;return{c(){e=b("span"),Ce(()=>t[19].call(e))},m(i,r){F(i,e,r),e.innerHTML=n,s=ft(e,t[19].bind(e))},p(i,r){r[0]&608&&n!==(n=(i[6]>i[5]*.7?i[9].slice(0,20)+"<b>...</b>":i[9])+"")&&(e.innerHTML=n)},d(i){i&&M(e),s()}}}function Uo(t){let e,n,s,i,r;function o(c){t[29](c)}function a(c){t[30](c)}function l(c){t[31](c)}let u={};return t[3]!==void 0&&(u.chosenBuild=t[3]),t[8]!==void 0&&(u.ddOpen=t[8]),t[7]!==void 0&&(u.dropdown=t[7]),e=new br({props:u}),ee.push(()=>ke(e,"chosenBuild",o)),ee.push(()=>ke(e,"ddOpen",a)),ee.push(()=>ke(e,"dropdown",l)),{c(){be(e.$$.fragment)},m(c,d){pe(e,c,d),r=!0},p(c,d){const f={};!n&&d[0]&8&&(n=!0,f.chosenBuild=c[3],Ee(()=>n=!1)),!s&&d[0]&256&&(s=!0,f.ddOpen=c[8],Ee(()=>s=!1)),!i&&d[0]&128&&(i=!0,f.dropdown=c[7],Ee(()=>i=!1)),e.$set(f)},i(c){r||(z(e.$$.fragment,c),r=!0)},o(c){G(e.$$.fragment,c),r=!1},d(c){me(e,c)}}}function xp(t){let e,n,s,i,r,o,a,l,u,c,d,f,h,_,g,v,w,k,y,C,E,O,W,H,Q,j,S,R,oe,le,T,K,Z,X,ne;const ue=[Jp,Xp],A=[];function $(q,ie){return q[2]?0:1}k=$(t),y=A[k]=ue[k](t);let I=t[2]&&Uo(t);return{c(){e=b("div"),n=b("span"),n.textContent="Load build via:",s=L(),i=b("div"),r=b("div"),o=b("button"),a=se("Local saves"),c=L(),d=b("div"),f=b("button"),h=se("Exported ID"),v=L(),w=b("div"),y.c(),C=L(),E=b("div"),O=b("div"),W=b("button"),H=se("CANCEL"),j=L(),S=b("div"),R=b("button"),oe=se("LOAD"),T=L(),I&&I.c(),m(n,"class","svelte-w8elgk"),m(o,"id",l=t[2]?"firstFocusable":""),o.disabled=u=t[11].load.status==0||!t[12],m(o,"class","svelte-w8elgk"),J(o,"chosen",t[2]),J(o,"unavailable",!t[12]),m(r,"class","svelte-w8elgk"),m(f,"id",_=t[2]?"":"firstFocusable"),f.disabled=g=t[11].load.status==0,m(f,"class","svelte-w8elgk"),J(f,"chosen",!t[2]),m(d,"class","svelte-w8elgk"),m(i,"class","loadMethodRadio svelte-w8elgk"),m(w,"class","loadMethodCont svelte-w8elgk"),W.disabled=Q=t[11].load.status==0,m(R,"id","lastFocusable"),R.disabled=le=t[11].load.status==0,m(E,"class","promptOptions svelte-w8elgk"),m(e,"class","buildLoader svelte-w8elgk")},m(q,ie){F(q,e,ie),p(e,n),p(e,s),p(e,i),p(i,r),p(r,o),p(o,a),p(i,c),p(i,d),p(d,f),p(f,h),p(e,v),p(e,w),A[k].m(w,null),p(e,C),p(e,E),p(E,O),p(O,W),p(W,H),t[27](W),p(E,j),p(E,S),p(S,R),p(R,oe),p(e,T),I&&I.m(e,null),Z=!0,X||(ne=[D(window,"mousedown",t[14]),D(o,"click",t[15]),D(o,"keydown",t[16]),D(f,"click",t[17]),D(f,"keydown",t[18]),D(W,"click",t[28]),D(R,"keydown",xt),D(R,"click",t[13]),D(e,"introstart",t[32]),D(e,"keydown",t[33])],X=!0)},p(q,ie){(!Z||ie[0]&4&&l!==(l=q[2]?"firstFocusable":""))&&m(o,"id",l),(!Z||ie[0]&6144&&u!==(u=q[11].load.status==0||!q[12]))&&(o.disabled=u),(!Z||ie[0]&4)&&J(o,"chosen",q[2]),(!Z||ie[0]&4096)&&J(o,"unavailable",!q[12]),(!Z||ie[0]&4&&_!==(_=q[2]?"":"firstFocusable"))&&m(f,"id",_),(!Z||ie[0]&2048&&g!==(g=q[11].load.status==0))&&(f.disabled=g),(!Z||ie[0]&4)&&J(f,"chosen",!q[2]);let B=k;k=$(q),k===B?A[k].p(q,ie):(Le(),G(A[B],1,1,()=>{A[B]=null}),Be(),y=A[k],y?y.p(q,ie):(y=A[k]=ue[k](q),y.c()),z(y,1),y.m(w,null)),(!Z||ie[0]&2048&&Q!==(Q=q[11].load.status==0))&&(W.disabled=Q),(!Z||ie[0]&2048&&le!==(le=q[11].load.status==0))&&(R.disabled=le),q[2]?I?(I.p(q,ie),ie[0]&4&&z(I,1)):(I=Uo(q),I.c(),z(I,1),I.m(e,null)):I&&(Le(),G(I,1,1,()=>{I=null}),Be())},i(q){Z||(z(y),z(I),q&&Ce(()=>{Z&&(K||(K=Ae(e,st,{duration:250},!0)),K.run(1))}),Z=!0)},o(q){G(y),G(I),q&&(K||(K=Ae(e,st,{duration:250},!1)),K.run(0)),Z=!1},d(q){q&&M(e),A[k].d(),t[27](null),I&&I.d(),q&&K&&K.end(),X=!1,ve(ne)}}}function Zp(t,e,n){let s,i,r;Y(t,x,I=>n(11,s=I)),Y(t,nt,I=>n(34,i=I)),Y(t,It,I=>n(12,r=I));const o=Ct();let a,l,u,c,d,f,h=r,_=!1,g=r?Object.entries(i)[0]:null,v,w="";function k(){if(!h&&!w.startsWith("-N")){U(x,s.load.status=-1,s),U(x,s.message="invalid_id",s);return}let I=Ja(gn(bn,"builds"),Xa()),q=0;U(x,s.load.status=0,s),Qa(I).then(ie=>{let B=h?g[1].id:w;for(let ce in ie.val()){if(ce==B){o("buildLoad",{build:ie.val()[ce],id:ce});break}else q==Object.keys(ie.val()).length-1&&(U(x,s.load.status=-1,s),U(x,s.message=h?"not_found":"invalid_id",s));q++}}).catch(()=>{U(x,s.load.status=-1,s),U(x,s.message="firebase_fail",s)})}const y=I=>{a&&!a.contains(I.target)&&!f.contains(I.target)&&n(8,_=!1)},C=()=>{s.load.status!=0&&r&&n(2,h=!0)},E=I=>{h&&wt(I)},O=()=>{s.load.status!=0&&n(2,h=!1)},W=I=>{h||wt(I)};function H(){d=this.offsetWidth,n(6,d)}function Q(I){ee[I?"unshift":"push"](()=>{a=I,n(0,a)})}function j(){c=this.offsetWidth,n(5,c)}const S=()=>{s.load.status!=0&&n(8,_=!_)};function R(I){ee[I?"unshift":"push"](()=>{u=I,n(1,u)})}function oe(){w=this.value,n(10,w)}const le=I=>{n(10,w=Rs(I.target.value,25))},T=I=>{s.load.status==0&&I.preventDefault()};function K(I){ee[I?"unshift":"push"](()=>{l=I,n(4,l)})}const Z=()=>{s.load.status!=0&&U(x,s.load.ongoing=!1,s)};function X(I){g=I,n(3,g)}function ne(I){_=I,n(8,_)}function ue(I){f=I,n(7,f)}const A=()=>l.focus(),$=I=>{I.key=="Escape"&&(n(8,_=!1),a.focus())};return t.$$.update=()=>{t.$$.dirty[0]&8&&n(9,v=g!=null?g[0]:null),t.$$.dirty[0]&7&&setTimeout(h?()=>a.focus():()=>u.focus())},[a,u,h,g,l,c,d,f,_,v,w,s,r,k,y,C,E,O,W,H,Q,j,S,R,oe,le,T,K,Z,X,ne,ue,A,$]}class $p extends De{constructor(e){super(),Ne(this,e,Zp,xp,ye,{},null,[-1,-1])}}function Vo(t){let e,n=(t[3]>t[4]*.8?t[8].slice(0,20)+"<b>...</b>":t[8])+"",s;return{c(){e=b("span"),Ce(()=>t[12].call(e))},m(i,r){F(i,e,r),e.innerHTML=n,s=ft(e,t[12].bind(e))},p(i,r){r&280&&n!==(n=(i[3]>i[4]*.8?i[8].slice(0,20)+"<b>...</b>":i[8])+"")&&(e.innerHTML=n)},d(i){i&&M(e),s()}}}function em(t){let e,n,s,i,r,o=t[8],a,l,u,c,d,f,h,_,g,v,w,k,y,C,E,O,W,H,Q,j,S,R,oe,le,T,K,Z,X,ne=Vo(t);f=new Ys({props:{text:"I'm aware that this action is irreversible and want to erase this build from the database.",checked:!1}}),f.$on("toggle",t[16]);function ue(q){t[21](q)}function A(q){t[22](q)}function $(q){t[23](q)}let I={};return t[0]!==void 0&&(I.chosenBuild=t[0]),t[6]!==void 0&&(I.ddOpen=t[6]),t[5]!==void 0&&(I.dropdown=t[5]),S=new br({props:I}),ee.push(()=>ke(S,"chosenBuild",ue)),ee.push(()=>ke(S,"ddOpen",A)),ee.push(()=>ke(S,"dropdown",$)),{c(){e=b("div"),n=b("div"),s=b("span"),s.textContent="Delete:",i=L(),r=b("button"),ne.c(),a=L(),l=b("iconify-icon"),d=L(),be(f.$$.fragment),h=L(),_=b("div"),g=b("div"),v=b("button"),w=se("CANCEL"),C=L(),E=b("div"),O=b("button"),W=se("DELETE"),j=L(),be(S.$$.fragment),Xe(l,"icon","iconamoon:arrow-down-2-fill"),m(r,"class","promptDDButton svelte-1t9ajmz"),m(r,"id","firstFocusable"),r.disabled=u=t[9].delete.status==0,Ce(()=>t[14].call(r)),J(r,"ddOpen",t[6]),m(n,"class","chosenBuildCont"),m(v,"id",k=t[7]?"":"lastFocusable"),v.disabled=y=t[9].delete.status==0,O.disabled=H=!t[7]||t[9].delete.status==0,m(O,"id",Q=t[7]?"lastFocusable":""),J(O,"unavailable",!t[7]),m(_,"class","promptOptions svelte-1t9ajmz"),m(e,"class","buildDeleter svelte-1t9ajmz")},m(q,ie){F(q,e,ie),p(e,n),p(n,s),p(n,i),p(n,r),ne.m(r,null),p(r,a),p(r,l),t[13](r),c=ft(r,t[14].bind(r)),p(e,d),pe(f,e,null),p(e,h),p(e,_),p(_,g),p(g,v),p(v,w),t[17](v),p(_,C),p(_,E),p(E,O),p(O,W),p(e,j),pe(S,e,null),K=!0,Z||(X=[D(window,"mousedown",t[11]),D(r,"click",t[15]),D(r,"keydown",wt),D(v,"click",t[18]),D(v,"keydown",t[19]),D(O,"click",t[20]),D(O,"keydown",xt),D(e,"introstart",t[24]),D(e,"keydown",t[25])],Z=!0)},p(q,[ie]){ie&256&&ye(o,o=q[8])?(ne.d(1),ne=Vo(q),ne.c(),ne.m(r,a)):ne.p(q,ie),(!K||ie&512&&u!==(u=q[9].delete.status==0))&&(r.disabled=u),(!K||ie&64)&&J(r,"ddOpen",q[6]),(!K||ie&128&&k!==(k=q[7]?"":"lastFocusable"))&&m(v,"id",k),(!K||ie&512&&y!==(y=q[9].delete.status==0))&&(v.disabled=y),(!K||ie&640&&H!==(H=!q[7]||q[9].delete.status==0))&&(O.disabled=H),(!K||ie&128&&Q!==(Q=q[7]?"lastFocusable":""))&&m(O,"id",Q),(!K||ie&128)&&J(O,"unavailable",!q[7]);const B={};!R&&ie&1&&(R=!0,B.chosenBuild=q[0],Ee(()=>R=!1)),!oe&&ie&64&&(oe=!0,B.ddOpen=q[6],Ee(()=>oe=!1)),!le&&ie&32&&(le=!0,B.dropdown=q[5],Ee(()=>le=!1)),S.$set(B)},i(q){K||(z(f.$$.fragment,q),z(S.$$.fragment,q),q&&Ce(()=>{K&&(T||(T=Ae(e,st,{duration:250},!0)),T.run(1))}),K=!0)},o(q){G(f.$$.fragment,q),G(S.$$.fragment,q),q&&(T||(T=Ae(e,st,{duration:250},!1)),T.run(0)),K=!1},d(q){q&&M(e),ne.d(q),t[13](null),c(),me(f),t[17](null),me(S),q&&T&&T.end(),Z=!1,ve(X)}}}function tm(t,e,n){let s,i,r,o;Y(t,x,T=>n(9,i=T)),Y(t,nt,T=>n(26,r=T)),Y(t,Ze,T=>n(27,o=T));let a,l,u,c,d,f=!1,h=Object.entries(r)[0],_=!1;function g(){U(x,i.delete.status=0,i);let T=h[1].id;e_(vt(gn(bn),`builds/${T}`)).then(()=>{U(x,i.delete.status=1,i),o&&T==o.id&&U(Ze,o=null,o);let K={...r};delete K[s],mr(),nt.update(()=>K)}).catch(K=>{console.log(K),U(x,i.delete.status=-1,i),U(x,i.message="firebase_fail",i)})}const v=T=>{!l.contains(T.target)&&!d.contains(T.target)&&n(6,f=!1)};function w(){u=this.offsetWidth,n(3,u)}function k(T){ee[T?"unshift":"push"](()=>{l=T,n(2,l)})}function y(){c=this.offsetWidth,n(4,c)}const C=()=>{i.delete.status!=0&&n(6,f=!f)},E=T=>n(7,_=T.detail);function O(T){ee[T?"unshift":"push"](()=>{a=T,n(1,a)})}const W=()=>{i.delete.status!=0&&U(x,i.delete.ongoing=!1,i)},H=T=>{_||xt(T)},Q=()=>{_&&i.delete.status!=0&&g()};function j(T){h=T,n(0,h)}function S(T){f=T,n(6,f)}function R(T){d=T,n(5,d)}const oe=()=>a.focus(),le=T=>{T.key=="Escape"&&(n(6,f=!1),l.focus())};return t.$$.update=()=>{t.$$.dirty&1&&n(8,s=h[0])},[h,a,l,u,c,d,f,_,s,i,g,v,w,k,y,C,E,O,W,H,Q,j,S,R,oe,le]}class nm extends De{constructor(e){super(),Ne(this,e,tm,em,ye,{})}}function sm(t){let e,n,s,i,r,o,a,l;return{c(){e=b("div"),n=b("div"),s=b("button"),s.innerHTML='<iconify-icon icon="codicon:sparkle-filled" class="svelte-1uqpmfm"></iconify-icon> <span class="tooltip svelte-1uqpmfm" id="right">Add bonuses</span>',i=L(),r=b("div"),o=b("button"),o.innerHTML='<iconify-icon icon="fe:picture" class="svelte-1uqpmfm"></iconify-icon> <span class="tooltip svelte-1uqpmfm" id="right">Screenshot mode</span>',m(s,"class","svelte-1uqpmfm"),m(n,"class","svelte-1uqpmfm"),m(o,"class","svelte-1uqpmfm"),m(r,"id","screenshot"),m(r,"class","svelte-1uqpmfm"),m(e,"class","sideFeatures svelte-1uqpmfm")},m(u,c){F(u,e,c),p(e,n),p(n,s),p(e,i),p(e,r),p(r,o),a||(l=[D(s,"click",t[2]),D(o,"click",t[3])],a=!0)},p:te,i:te,o:te,d(u){u&&M(e),a=!1,ve(l)}}}function im(t,e,n){let s,i;return Y(t,hn,a=>n(0,s=a)),Y(t,x,a=>n(1,i=a)),[s,i,()=>{s||U(x,i.bonus.ongoing=!0,i)},()=>{s||(U(x,i.screenshot.ongoing=!0,i),setTimeout(()=>U(x,i.screenshot.ongoing=!1,i),3500))}]}class rm extends De{constructor(e){super(),Ne(this,e,im,sm,ye,{})}}function jo(t,e,n){const s=t.slice();s[11]=e[n];const i=s[1].bonuses[0].name==s[11].name;return s[12]=i,s}function Go(t){let e,n,s,i,r,o,a,l,u,c,d,f;function h(...g){return t[5](t[12],...g)}function _(...g){return t[6](t[11],...g)}return l=new Ys({props:{text:t[11].name,checked:t[2][t[11].name]}}),l.$on("toggle",_),{c(){e=b("div"),n=b("a"),s=b("img"),a=L(),be(l.$$.fragment),u=L(),Qe(s.src,i=t[11].image)||m(s,"src",i),m(s,"alt",""),m(s,"class","svelte-1xnyxhr"),m(n,"id",r=t[12]?"firstFocusable":""),m(n,"href",o=t[11].link),m(n,"target","_blank"),m(n,"class","svelte-1xnyxhr"),m(e,"class","svelte-1xnyxhr")},m(g,v){F(g,e,v),p(e,n),p(n,s),p(e,a),pe(l,e,null),p(e,u),c=!0,d||(f=D(n,"keydown",h),d=!0)},p(g,v){t=g,(!c||v&2&&!Qe(s.src,i=t[11].image))&&m(s,"src",i),(!c||v&2&&r!==(r=t[12]?"firstFocusable":""))&&m(n,"id",r),(!c||v&2&&o!==(o=t[11].link))&&m(n,"href",o);const w={};v&2&&(w.text=t[11].name),v&6&&(w.checked=t[2][t[11].name]),l.$set(w)},i(g){c||(z(l.$$.fragment,g),c=!0)},o(g){G(l.$$.fragment,g),c=!1},d(g){g&&M(e),me(l),d=!1,f()}}}function om(t){let e,n,s,i,r,o,a,l,u,c,d,f,h,_=Ue(t[1].bonuses),g=[];for(let w=0;w<_.length;w+=1)g[w]=Go(jo(t,_,w));const v=w=>G(g[w],1,1,()=>{g[w]=null});return{c(){e=b("div"),n=b("div");for(let w=0;w<g.length;w+=1)g[w].c();s=L(),i=b("div"),r=b("div"),o=b("button"),o.textContent="CLEAR",a=L(),l=b("div"),u=b("button"),u.textContent="OK",m(n,"class","bonusesCont svelte-1xnyxhr"),m(u,"id","lastFocusable"),m(i,"class","promptOptions svelte-1xnyxhr"),m(e,"class","bonusChooser svelte-1xnyxhr")},m(w,k){F(w,e,k),p(e,n);for(let y=0;y<g.length;y+=1)g[y]&&g[y].m(n,null);p(e,s),p(e,i),p(i,r),p(r,o),p(i,a),p(i,l),p(l,u),t[8](u),d=!0,f||(h=[D(o,"click",t[7]),D(u,"click",t[9]),D(u,"keydown",xt),D(e,"introstart",t[10])],f=!0)},p(w,[k]){if(k&14){_=Ue(w[1].bonuses);let y;for(y=0;y<_.length;y+=1){const C=jo(w,_,y);g[y]?(g[y].p(C,k),z(g[y],1)):(g[y]=Go(C),g[y].c(),z(g[y],1),g[y].m(n,null))}for(Le(),y=_.length;y<g.length;y+=1)v(y);Be()}},i(w){if(!d){for(let k=0;k<_.length;k+=1)z(g[k]);w&&Ce(()=>{d&&(c||(c=Ae(e,st,{duration:250},!0)),c.run(1))}),d=!0}},o(w){g=g.filter(Boolean);for(let k=0;k<g.length;k+=1)G(g[k]);w&&(c||(c=Ae(e,st,{duration:250},!1)),c.run(0)),d=!1},d(w){w&&M(e),gt(g,w),t[8](null),w&&c&&c.end(),f=!1,ve(h)}}}function lm(t,e,n){let s,i,r,o;Y(t,At,_=>n(1,s=_)),Y(t,un,_=>n(2,i=_)),Y(t,xe,_=>n(3,r=_)),Y(t,x,_=>n(4,o=_));let a;const l=(_,g)=>{_&&wt(g)},u=(_,g)=>{U(un,i[_.name]=g.detail,i);for(let v in r)g.detail?U(xe,r[v]+=_.stats[v],r):U(xe,r[v]-=_.stats[v],r),U(xe,r[v]=Math.round(r[v]*10)/10,r)},c=()=>{for(let _ in i){if(!i[_])continue;let g=s.bonuses.find(v=>v.name==_);U(un,i[_]=!1,i);for(let v in r)U(xe,r[v]-=g.stats[v],r),U(xe,r[v]=Math.round(r[v]*10)/10,r)}};function d(_){ee[_?"unshift":"push"](()=>{a=_,n(0,a)})}return[a,s,i,r,o,l,u,c,d,()=>U(x,o.bonus.ongoing=!1,o),()=>a.focus()]}class am extends De{constructor(e){super(),Ne(this,e,lm,om,ye,{})}}const{document:nn,window:on}=iu;function Yo(t,e,n){const s=t.slice();return s[41]=e[n],s}function Ko(t,e,n){const s=t.slice();return s[41]=e[n],s}function Qo(t){let e;return{c(){e=b("link"),m(e,"rel","preload"),m(e,"as","image"),m(e,"href",t[41])},m(n,s){F(n,e,s)},p:te,d(n){n&&M(e)}}}function Xo(t){let e;return{c(){e=b("style"),e.textContent=`body > div:not(.backgrounds, .zoomLevel),\r
            main > :not(.promptCont),\r
            .backgrounds > img {\r
                filter: blur(calc(var(--u) * 0.5));\r
                pointer-events: none;\r
            }\r
            .sideFeatures {\r
                z-index: 3;\r
            }\r
        `},m(n,s){F(n,e,s)},d(n){n&&M(e)}}}function Jo(t){let e;return{c(){e=b("style"),e.textContent=`body {\r
                overflow: hidden;\r
            }`},m(n,s){F(n,e,s)},d(n){n&&M(e)}}}function xo(t){let e,n;return{c(){e=b("img"),m(e,"class","background svelte-1d16y8k"),Qe(e.src,n=t[41])||m(e,"src",n),m(e,"alt",""),J(e,"active",t[15].indexOf(t[41])==t[7])},m(s,i){F(s,e,i)},p(s,i){i[0]&32896&&J(e,"active",s[15].indexOf(s[41])==s[7])},d(s){s&&M(e)}}}function Zo(t){let e,n,s=Math.floor(t[13][t[2]]*100)+"",i,r,o,a;return{c(){e=b("div"),n=se("Zoom: "),i=se(s),r=b("b"),r.textContent="%",m(e,"class","zoomLevel svelte-1d16y8k")},m(l,u){F(l,e,u),p(e,n),p(e,i),p(e,r),a=!0},p(l,u){(!a||u[0]&4)&&s!==(s=Math.floor(l[13][l[2]]*100)+"")&&Re(i,s)},i(l){a||(l&&Ce(()=>{a&&(o||(o=Ae(e,Ge,{duration:150},!0)),o.run(1))}),a=!0)},o(l){l&&(o||(o=Ae(e,Ge,{duration:150},!1)),o.run(0)),a=!1},d(l){l&&M(e),l&&o&&o.end()}}}function $o(t){let e,n,s=t[3].name+"",i,r,o,a,l,u,c,d,f,h,_=t[3].desc+"",g,v,w,k,y;return{c(){e=b("div"),n=b("span"),i=se(s),r=L(),o=b("button"),o.innerHTML='<iconify-icon icon="ri:share-fill"></iconify-icon> <span class="tooltip" id="right">Share build</span>',a=L(),l=b("span"),u=se(`Description / Notes:\r
                `),c=b("br"),d=L(),f=b("br"),h=L(),g=se(_),m(n,"id","buildName"),m(n,"class","svelte-1d16y8k"),m(o,"class","svelte-1d16y8k"),m(l,"class","tooltip"),m(l,"id","bottom"),m(e,"class","currentBuild svelte-1d16y8k"),J(e,"no-tooltip",t[8])},m(C,E){F(C,e,E),p(e,n),p(n,i),p(e,r),p(e,o),p(e,a),p(e,l),p(l,u),p(l,c),p(l,d),p(l,f),p(l,h),p(l,g),w=!0,k||(y=[D(o,"click",t[24]),D(o,"mouseenter",t[25]),D(o,"mouseleave",t[26])],k=!0)},p(C,E){(!w||E[0]&8)&&s!==(s=C[3].name+"")&&Re(i,s),(!w||E[0]&8)&&_!==(_=C[3].desc+"")&&Re(g,_),(!w||E[0]&256)&&J(e,"no-tooltip",C[8])},i(C){w||(C&&Ce(()=>{w&&(v||(v=Ae(e,Ge,{duration:100},!0)),v.run(1))}),w=!0)},o(C){C&&(v||(v=Ae(e,Ge,{duration:100},!1)),v.run(0)),w=!1},d(C){C&&M(e),C&&v&&v.end(),k=!1,ve(y)}}}function um(t){let e,n,s;return n=new am({}),{c(){e=b("div"),be(n.$$.fragment),m(e,"class","promptCont svelte-1d16y8k")},m(i,r){F(i,e,r),pe(n,e,null),s=!0},p:te,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&M(e),me(n)}}}function cm(t){let e,n,s;return n=new nm({}),{c(){e=b("div"),be(n.$$.fragment),m(e,"class","promptCont svelte-1d16y8k")},m(i,r){F(i,e,r),pe(n,e,null),s=!0},p:te,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&M(e),me(n)}}}function dm(t){let e,n,s;return n=new $p({}),n.$on("buildLoad",t[28]),{c(){e=b("div"),be(n.$$.fragment),m(e,"class","promptCont svelte-1d16y8k")},m(i,r){F(i,e,r),pe(n,e,null),s=!0},p:te,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&M(e),me(n)}}}function fm(t){let e,n,s;return n=new Qp({}),{c(){e=b("div"),be(n.$$.fragment),m(e,"class","promptCont svelte-1d16y8k")},m(i,r){F(i,e,r),pe(n,e,null),s=!0},p:te,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&M(e),me(n)}}}function hm(t){let e,n,s;return n=new Ep({}),{c(){e=b("div"),be(n.$$.fragment),m(e,"class","promptCont svelte-1d16y8k")},m(i,r){F(i,e,r),pe(n,e,null),s=!0},p:te,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&M(e),me(n)}}}function _m(t){let e,n,s,i;function r(a){t[27](a)}let o={};return t[6]!==void 0&&(o.loadID=t[6]),n=new Hp({props:o}),ee.push(()=>ke(n,"loadID",r)),n.$on("resetActions",t[17]),{c(){e=b("div"),be(n.$$.fragment),m(e,"class","promptCont svelte-1d16y8k")},m(a,l){F(a,e,l),pe(n,e,null),i=!0},p(a,l){const u={};!s&&l[0]&64&&(s=!0,u.loadID=a[6],Ee(()=>s=!1)),n.$set(u)},i(a){i||(z(n.$$.fragment,a),i=!0)},o(a){G(n.$$.fragment,a),i=!1},d(a){a&&M(e),me(n)}}}function pm(t){let e,n,s,i,r,o,a,l,u,c,d,f,h,_,g,v,w,k,y,C,E,O,W,H,Q,j,S,R,oe,le;Ce(t[23]);let T=Ue(t[15]),K=[];for(let B=0;B<T.length;B+=1)K[B]=Qo(Ko(t,T,B));let Z=t[10]&&Xo(),X=t[4].screenshot.ongoing&&t[13][t[2]]<=1&&Jo(),ne=Ue(t[15]),ue=[];for(let B=0;B<ne.length;B+=1)ue[B]=xo(Yo(t,ne,B));let A=t[5]&&Zo(t),$=t[3]&&$o(t);f=new fp({}),_=new rm({}),k=new H_({}),C=new Z_({}),O=new up({}),H=new vp({});const I=[_m,hm,fm,dm,cm,um],q=[];function ie(B,ce){return B[9]||B[4].share.ongoing?0:B[4].export.ongoing?1:B[4].save.ongoing?2:B[4].load.ongoing&&!B[6]?3:B[4].delete.ongoing?4:B[4].bonus.ongoing?5:-1}return~(j=ie(t))&&(S=q[j]=I[j](t)),{c(){for(let B=0;B<K.length;B+=1)K[B].c();e=St(),Z&&Z.c(),n=St(),X&&X.c(),s=St(),i=L(),r=b("div");for(let B=0;B<ue.length;B+=1)ue[B].c();o=L(),a=b("div"),a.textContent=`${mm}`,l=L(),A&&A.c(),u=L(),c=b("main"),$&&$.c(),d=L(),be(f.$$.fragment),h=L(),be(_.$$.fragment),g=L(),v=b("div"),w=b("div"),be(k.$$.fragment),y=L(),be(C.$$.fragment),E=L(),be(O.$$.fragment),W=L(),be(H.$$.fragment),Q=L(),S&&S.c(),m(r,"class","backgrounds"),m(a,"style","position: absolute; right: 0; padding: var(--u); font-size: calc(var(--u) * 2.5); color: var(--light);"),m(w,"class","eqCont svelte-1d16y8k"),m(v,"class","calcBox svelte-1d16y8k"),m(v,"id","calc"),m(c,"class","svelte-1d16y8k"),J(c,"screenshot",t[4].screenshot.ongoing)},m(B,ce){for(let P=0;P<K.length;P+=1)K[P]&&K[P].m(nn.head,null);p(nn.head,e),Z&&Z.m(nn.head,null),p(nn.head,n),X&&X.m(nn.head,null),p(nn.head,s),F(B,i,ce),F(B,r,ce);for(let P=0;P<ue.length;P+=1)ue[P]&&ue[P].m(r,null);F(B,o,ce),F(B,a,ce),F(B,l,ce),A&&A.m(B,ce),F(B,u,ce),F(B,c,ce),$&&$.m(c,null),p(c,d),pe(f,c,null),p(c,h),pe(_,c,null),p(c,g),p(c,v),p(v,w),pe(k,w,null),p(w,y),pe(C,w,null),p(v,E),pe(O,v,null),p(c,W),pe(H,c,null),p(c,Q),~j&&q[j].m(c,null),R=!0,oe||(le=[D(on,"storage",t[20]),D(on,"wheel",t[21],{passive:!1}),D(on,"keydown",t[22]),D(on,"resize",t[23])],oe=!0)},p(B,ce){if(ce[0]&32768){T=Ue(B[15]);let ae;for(ae=0;ae<T.length;ae+=1){const de=Ko(B,T,ae);K[ae]?K[ae].p(de,ce):(K[ae]=Qo(de),K[ae].c(),K[ae].m(e.parentNode,e))}for(;ae<K.length;ae+=1)K[ae].d(1);K.length=T.length}if(B[10]?Z||(Z=Xo(),Z.c(),Z.m(n.parentNode,n)):Z&&(Z.d(1),Z=null),B[4].screenshot.ongoing&&B[13][B[2]]<=1?X||(X=Jo(),X.c(),X.m(s.parentNode,s)):X&&(X.d(1),X=null),ce[0]&32896){ne=Ue(B[15]);let ae;for(ae=0;ae<ne.length;ae+=1){const de=Yo(B,ne,ae);ue[ae]?ue[ae].p(de,ce):(ue[ae]=xo(de),ue[ae].c(),ue[ae].m(r,null))}for(;ae<ue.length;ae+=1)ue[ae].d(1);ue.length=ne.length}B[5]?A?(A.p(B,ce),ce[0]&32&&z(A,1)):(A=Zo(B),A.c(),z(A,1),A.m(u.parentNode,u)):A&&(Le(),G(A,1,1,()=>{A=null}),Be()),B[3]?$?($.p(B,ce),ce[0]&8&&z($,1)):($=$o(B),$.c(),z($,1),$.m(c,d)):$&&(Le(),G($,1,1,()=>{$=null}),Be());let P=j;j=ie(B),j===P?~j&&q[j].p(B,ce):(S&&(Le(),G(q[P],1,1,()=>{q[P]=null}),Be()),~j?(S=q[j],S?S.p(B,ce):(S=q[j]=I[j](B),S.c()),z(S,1),S.m(c,null)):S=null),(!R||ce[0]&16)&&J(c,"screenshot",B[4].screenshot.ongoing)},i(B){R||(z(A),z($),z(f.$$.fragment,B),z(_.$$.fragment,B),z(k.$$.fragment,B),z(C.$$.fragment,B),z(O.$$.fragment,B),z(H.$$.fragment,B),z(S),R=!0)},o(B){G(A),G($),G(f.$$.fragment,B),G(_.$$.fragment,B),G(k.$$.fragment,B),G(C.$$.fragment,B),G(O.$$.fragment,B),G(H.$$.fragment,B),G(S),R=!1},d(B){B&&(M(i),M(r),M(o),M(a),M(l),M(u),M(c)),gt(K,B),M(e),Z&&Z.d(B),M(n),X&&X.d(B),M(s),gt(ue,B),A&&A.d(B),$&&$.d(),me(f),me(_),me(k),me(C),me(O),me(H),~j&&q[j].d(),oe=!1,ve(le)}}}let mm="3.19.0-alpha";function gm(t,e,n){let s,i,r,o,a,l,u,c,d,f,h,_;Y(t,Ze,P=>n(3,i=P)),Y(t,x,P=>n(4,r=P)),Y(t,hn,P=>n(10,o=P)),Y(t,Pi,P=>n(19,a=P)),Y(t,fs,P=>n(32,l=P)),Y(t,Pt,P=>n(33,u=P)),Y(t,Bn,P=>n(34,c=P)),Y(t,bt,P=>n(35,d=P)),Y(t,It,P=>n(11,f=P)),Y(t,nt,P=>n(12,h=P)),Y(t,At,P=>n(36,_=P));let g,v,w,k=7,y=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],C=!1,E,O=new URLSearchParams(window.location.search).get("id");for(let P of __){let ae=`https://raw.githubusercontent.com/XT8SS/fc-sv/gh-pages/ff-data/${P}.json`;fetch(ae).then(async de=>{if(de.status!=200){console.error(`Failed to fetch "${P}" data!
Status: ${de.status}`);return}U(At,_[P]=await de.json(),_)}).catch(de=>console.error(`Failed to initiate "${P}" data fetch!
${de}`))}_u(()=>{if(O)if(U(x,r.load.ongoing=!0,r),!O.startsWith("-N"))U(x,r.load.status=-1,r),U(x,r.message="invalid_id",r);else{U(x,r.load.status=0,r);let P=Ja(gn(bn,"builds"),Xa()),ae=0;Qa(P).then(de=>{for(let Je in de.val()){if(Je==O){W(de.val()[Je],Je);break}else ae==Object.keys(de.val()).length-1&&(U(x,r.load.status=-1,r),U(x,r.message="invalid_id",r));ae++}}).catch(()=>{U(x,r.load.status=-1,r),U(x,r.message="firebase_fail",r)})}n(18,w=v>g),h[Object.keys(h)[0]]&&U(It,f=!0,f)});function W(P,ae){for(let de in P.eq){let Je=d[de]||hr;P.eq[de]&&P.eq[de]!=Je.name?c[de][P.eq[de]].querySelector("button").click():!P.eq[de]&&Je.name&&c[de][Je.name].querySelector("button").click()}for(let de of Qn){let Je=u[de]||_r;Je.name&&l[de][Je.name].querySelector("button").click()}setTimeout(()=>{for(let de of Qn)P.gear[de]&&l[de][P.gear[de]].querySelector("button").click();U(x,r.load.ongoing=!1,r),U(x,r.load.status=null,r),ae&&(U(Ze,i=P,i),U(Ze,i.id=ae,i),n(6,O=null))})}let H=[],Q=[],j,S,R=9;for(let P=0;P<R;P++)H.push(`backgrounds/BG${P}.jpg`);function oe(P){S=Math.floor(Math.random()*P.length)}oe(H);function le(){n(7,j=S),Q.push(S)}le(),function P(){setTimeout(()=>{if(oe(H),!Q.length)le();else if(Q.length>3&&(Q=Q.slice(1)),!Q.includes(S))le();else{let ae=[...Array(R).keys()].filter(de=>!Q.includes(de));oe(ae),le()}document.hasFocus&&P()},45e3)}();function T(){E=setTimeout(()=>{n(5,C=!1)},2e3)}function K(){clearTimeout(E),n(5,C=!0),T()}function Z(){U(x,r.export.status=null,r),U(x,r.export.ongoing=!1,r),U(x,r.save.status=null,r),U(x,r.save.ongoing=!1,r),U(x,r.load.status=null,r),U(x,r.load.ongoing=!1,r),U(x,r.delete.status=null,r),U(x,r.delete.ongoing=!1,r),U(x,r.share.ongoing=!1,r),U(x,r.message="",r)}let X=!1;const ne=P=>{if(P.key=="builds")if(P.url.includes("ls=true")){U(nt,h=JSON.parse(P.newValue),h),U(It,f=Object.keys(JSON.parse(P.newValue)).length>0,f),Z();let ae=Object.keys(JSON.parse(P.oldValue)).filter(de=>!Object.keys(JSON.parse(P.newValue)).includes(de))[0];ae&&i&&ae==i.name&&U(Ze,i=null,i)}else window.localStorage.setItem("builds",JSON.stringify(h))},ue=P=>{let ae=P.wheelDeltaY;if(P.ctrlKey){if(P.preventDefault(),y[k]==.2&&ae<0||y[k]==5&&ae>0)return;ae>0?n(2,k++,k):n(2,k--,k),K()}},A=P=>{P.ctrlKey&&(P.key=="-"||P.key=="+"||P.code=="Equal"||P.key=="0")&&(P.preventDefault(),(P.key=="+"||P.code=="Equal")&&y[k]!=5?n(2,k++,k):P.key=="-"&&y[k]!=.2?n(2,k--,k):P.key=="0"&&y[k]!=1&&n(2,k=7),K()),o&&g_(P)};function $(){n(0,g=on.outerHeight),n(1,v=on.outerWidth)}const I=()=>{o||U(x,r.share.ongoing=!0,r)},q=()=>n(8,X=!0),ie=()=>n(8,X=!1);function B(P){O=P,n(6,O)}const ce=P=>W(P.detail.build,P.detail.id);return t.$$.update=()=>{if(t.$$.dirty[0]&524291&&(v||g)&&(n(18,w=v>g),a))for(let P of a)pr(P.node,P.itemName);t.$$.dirty[0]&262148&&(w?document.documentElement.style.setProperty("--u",`${.75*y[k]}vh`):document.documentElement.style.setProperty("--u","0.75vh")),t.$$.dirty[0]&16&&n(9,s=r.export.status||r.save.status||r.load.status||r.delete.status),t.$$.dirty[0]&16&&U(hn,o=r.export.ongoing||r.save.ongoing||r.load.ongoing||r.delete.ongoing||r.share.ongoing||r.bonus.ongoing,o),t.$$.dirty[0]&8&&(document.title=(i?i.name+" - ":"")+"Fantastic Calculator")},[g,v,k,i,r,C,O,j,X,s,o,f,h,y,W,H,K,Z,w,a,ne,ue,A,$,I,q,ie,B,ce]}class bm extends De{constructor(e){super(),Ne(this,e,gm,pm,ye,{},null,[-1,-1])}}new bm({target:document.body});
