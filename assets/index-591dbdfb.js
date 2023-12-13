var za=Object.defineProperty;var Ha=(t,e,n)=>e in t?za(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ws=(t,e,n)=>(Ha(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Q(){}const Ss=t=>t;function Ua(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Ho(t){return t()}function _r(){return Object.create(null)}function ge(t){t.forEach(Ho)}function cn(t){return typeof t=="function"}function ce(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Qn;function Je(t,e){return t===e?!0:(Qn||(Qn=document.createElement("a")),Qn.href=e,t===Qn.href)}function ja(t){return Object.keys(t).length===0}function Va(t,...e){if(t==null){for(const s of e)s(void 0);return Q}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function x(t,e,n){t.$$.on_destroy.push(Va(e,n))}function G(t,e,n){return t.set(n),e}function Uo(t){return t&&cn(t.destroy)?t.destroy:Q}const jo=typeof window<"u";let Ci=jo?()=>window.performance.now():()=>Date.now(),Ei=jo?t=>requestAnimationFrame(t):Q;const $t=new Set;function Vo(t){$t.forEach(e=>{e.c(t)||($t.delete(e),e.f())}),$t.size!==0&&Ei(Vo)}function Si(t){let e;return $t.size===0&&Ei(Vo),{promise:new Promise(n=>{$t.add(e={c:t,f:n})}),abort(){$t.delete(e)}}}const Ga=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function _(t,e){t.appendChild(e)}function Go(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ya(t){const e=g("style");return e.textContent="/* empty */",Ka(Go(t),e),e.sheet}function Ka(t,e){return _(t.head||t,e),e.sheet}function H(t,e,n){t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function te(t){return document.createTextNode(t)}function F(){return te(" ")}function Bt(){return te("")}function N(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ft(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:m(t,e,n)}function Yo(t){return t===""?null:+t}function xa(t){return Array.from(t.childNodes)}function ke(t,e){e=""+e,t.data!==e&&(t.data=e)}function st(t,e){t.value=e??""}function De(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let Xn;function Qa(){if(Xn===void 0){Xn=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{Xn=!0}}return Xn}function rt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const s=g("iframe");s.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),s.setAttribute("aria-hidden","true"),s.tabIndex=-1;const i=Qa();let r;return i?(s.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=N(window,"message",o=>{o.source===s.contentWindow&&e()})):(s.src="about:blank",s.onload=()=>{r=N(s.contentWindow,"resize",e),e()}),_(t,s),()=>{(i||r&&s.contentWindow)&&r(),W(s)}}function J(t,e,n){t.classList.toggle(e,!!n)}function Ko(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}const ts=new Map;let ns=0;function Xa(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ja(t,e){const n={stylesheet:Ya(e),rules:{}};return ts.set(t,n),n}function ss(t,e,n,s,i,r,o,l=0){const a=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=a){const y=e+(n-e)*r(v);u+=v*100+`%{${o(y,1-y)}}
`}const d=u+`100% {${o(n,1-n)}}
}`,c=`__svelte_${Xa(d)}_${l}`,f=Go(t),{stylesheet:h,rules:p}=ts.get(f)||Ja(f,t);p[c]||(p[c]=!0,h.insertRule(`@keyframes ${c} ${d}`,h.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${c} ${s}ms linear ${i}ms 1 both`,ns+=1,c}function is(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),ns-=i,ns||Za())}function Za(){Ei(()=>{ns||(ts.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&W(e)}),ts.clear())})}let kn;function ut(t){kn=t}function ki(){if(!kn)throw new Error("Function called outside component initialization");return kn}function $a(t){ki().$$.on_mount.push(t)}function It(){const t=ki();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Ko(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}const Qt=[],Z=[];let en=[];const Zs=[],eu=Promise.resolve();let $s=!1;function tu(){$s||($s=!0,eu.then(Ii))}function be(t){en.push(t)}function ve(t){Zs.push(t)}const qs=new Set;let Yt=0;function Ii(){if(Yt!==0)return;const t=kn;do{try{for(;Yt<Qt.length;){const e=Qt[Yt];Yt++,ut(e),nu(e.$$)}}catch(e){throw Qt.length=0,Yt=0,e}for(ut(null),Qt.length=0,Yt=0;Z.length;)Z.pop()();for(let e=0;e<en.length;e+=1){const n=en[e];qs.has(n)||(qs.add(n),n())}en.length=0}while(Qt.length);for(;Zs.length;)Zs.pop()();$s=!1,qs.clear(),ut(t)}function nu(t){if(t.fragment!==null){t.update(),ge(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(be)}}function su(t){const e=[],n=[];en.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),en=e}let mn;function Ti(){return mn||(mn=Promise.resolve(),mn.then(()=>{mn=null})),mn}function Mt(t,e,n){t.dispatchEvent(Ko(`${e?"intro":"outro"}${n}`))}const es=new Set;let it;function Pe(){it={r:0,c:[],p:it}}function Me(){it.r||ge(it.c),it=it.p}function z(t,e){t&&t.i&&(es.delete(t),t.i(e))}function j(t,e,n,s){if(t&&t.o){if(es.has(t))return;es.add(t),it.c.push(()=>{es.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Ni={duration:0};function xo(t,e,n){const s={direction:"in"};let i=e(t,n,s),r=!1,o,l,a=0;function u(){o&&is(t,o)}function d(){const{delay:f=0,duration:h=300,easing:p=Ss,tick:b=Q,css:v}=i||Ni;v&&(o=ss(t,0,1,h,f,p,v,a++)),b(0,1);const y=Ci()+f,T=y+h;l&&l.abort(),r=!0,be(()=>Mt(t,!0,"start")),l=Si(w=>{if(r){if(w>=T)return b(1,0),Mt(t,!0,"end"),u(),r=!1;if(w>=y){const I=p((w-y)/h);b(I,1-I)}}return r})}let c=!1;return{start(){c||(c=!0,is(t),cn(i)?(i=i(s),Ti().then(d)):d())},invalidate(){c=!1},end(){r&&(u(),r=!1)}}}function Qo(t,e,n){const s={direction:"out"};let i=e(t,n,s),r=!0,o;const l=it;l.r+=1;let a;function u(){const{delay:d=0,duration:c=300,easing:f=Ss,tick:h=Q,css:p}=i||Ni;p&&(o=ss(t,1,0,c,d,f,p));const b=Ci()+d,v=b+c;be(()=>Mt(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),Si(y=>{if(r){if(y>=v)return h(0,1),Mt(t,!1,"end"),--l.r||ge(l.c),!1;if(y>=b){const T=f((y-b)/c);h(1-T,T)}}return r})}return cn(i)?Ti().then(()=>{i=i(s),u()}):u(),{end(d){d&&"inert"in t&&(t.inert=a),d&&i.tick&&i.tick(1,0),r&&(o&&is(t,o),r=!1)}}}function Re(t,e,n,s){let r=e(t,n,{direction:"both"}),o=s?0:1,l=null,a=null,u=null,d;function c(){u&&is(t,u)}function f(p,b){const v=p.b-o;return b*=Math.abs(v),{a:o,b:p.b,d:v,duration:b,start:p.start,end:p.start+b,group:p.group}}function h(p){const{delay:b=0,duration:v=300,easing:y=Ss,tick:T=Q,css:w}=r||Ni,I={start:Ci()+b,b:p};p||(I.group=it,it.r+=1),"inert"in t&&(p?d!==void 0&&(t.inert=d):(d=t.inert,t.inert=!0)),l||a?a=I:(w&&(c(),u=ss(t,o,p,v,b,y,w)),p&&T(0,1),l=f(I,v),be(()=>Mt(t,p,"start")),Si(C=>{if(a&&C>a.start&&(l=f(a,v),a=null,Mt(t,l.b,"start"),w&&(c(),u=ss(t,o,l.b,l.duration,0,y,r.css))),l){if(C>=l.end)T(o=l.b,1-o),Mt(t,l.b,"end"),a||(l.b?c():--l.group.r||ge(l.group.c)),l=null;else if(C>=l.start){const O=C-l.start;o=l.a+l.d*y(O/l.duration),T(o,1-o)}}return!!(l||a)}))}return{run(p){cn(r)?Ti().then(()=>{r=r({direction:p?"in":"out"}),h(p)}):h(p)},end(){c(),l=a=null}}}function pr(t,e){const n=e.token={};function s(i,r,o,l){if(e.token!==n)return;e.resolved=l;let a=e.ctx;o!==void 0&&(a=a.slice(),a[o]=l);const u=i&&(e.current=i)(a);let d=!1;e.block&&(e.blocks?e.blocks.forEach((c,f)=>{f!==r&&c&&(Pe(),j(c,1,1,()=>{e.blocks[f]===c&&(e.blocks[f]=null)}),Me())}):e.block.d(1),u.c(),z(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[r]=u),d&&Ii()}if(Ua(t)){const i=ki();if(t.then(r=>{ut(i),s(e.then,1,e.value,r),ut(null)},r=>{if(ut(i),s(e.catch,2,e.error,r),ut(null),!e.hasCatch)throw r}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function iu(t,e,n){const s=e.slice(),{resolved:i}=t;t.current===t.then&&(s[t.value]=i),t.current===t.catch&&(s[t.error]=i),t.block.p(s,n)}function xe(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function we(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function pe(t){t&&t.c()}function fe(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),be(()=>{const r=t.$$.on_mount.map(Ho).filter(cn);t.$$.on_destroy?t.$$.on_destroy.push(...r):ge(r),t.$$.on_mount=[]}),i.forEach(be)}function he(t,e){const n=t.$$;n.fragment!==null&&(su(n.after_update),ge(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ru(t,e){t.$$.dirty[0]===-1&&(Qt.push(t),tu(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Te(t,e,n,s,i,r,o=null,l=[-1]){const a=kn;ut(t);const u=t.$$={fragment:null,ctx:[],props:r,update:Q,not_equal:i,bound:_r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:_r(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(c,f,...h)=>{const p=h.length?h[0]:f;return u.ctx&&i(u.ctx[c],u.ctx[c]=p)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](p),d&&ru(t,c)),f}):[],u.update(),d=!0,ge(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const c=xa(e.target);u.fragment&&u.fragment.l(c),c.forEach(W)}else u.fragment&&u.fragment.c();e.intro&&z(t.$$.fragment),fe(t,e.target,e.anchor),Ii()}ut(a)}class Ne{constructor(){Ws(this,"$$");Ws(this,"$$set")}$destroy(){he(this,1),this.$destroy=Q}$on(e,n){if(!cn(n))return Q;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!ja(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ou="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ou);const Kt=[];function Ve(t,e=Q){let n;const s=new Set;function i(l){if(ce(t,l)&&(t=l,n)){const a=!Kt.length;for(const u of s)u[1](),Kt.push(u,t);if(a){for(let u=0;u<Kt.length;u+=2)Kt[u][0](Kt[u+1]);Kt.length=0}}}function r(l){i(l(t))}function o(l,a=Q){const u=[l,a];return s.add(u),s.size===1&&(n=e(i,r)||Q),l(t),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}let mr=localStorage.getItem("builds"),ei=Ve({}),ft=Ve({}),Xt=Ve({}),wt=Ve({}),Di=Ve([]),zs=Ve({}),Xe=Ve(),Xo=Ve(!1),nt=Ve(mr?JSON.parse(mr):{}),Wt=Ve(!1),In=Ve(!1),Tn=Ve({}),rs=Ve({}),lu=Ve({}),ee=Ve({export:{ongoing:!1,status:null},save:{ongoing:!1,status:null},load:{ongoing:!1,status:null},delete:{ongoing:!1,status:null},share:{ongoing:!1},message:""});nt.subscribe(t=>window.localStorage.setItem("builds",JSON.stringify(t)));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=function(t,e){if(!t)throw dn(e)},dn=function(t){return new Error("Firebase Database ("+Jo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},au=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=r>>2,c=(r&3)<<4|l>>4;let f=(l&15)<<2|u>>6,h=u&63;a||(h=64,o||(f=64)),s.push(n[d],n[c],n[f],n[h])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):au(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||c==null)throw new uu;const f=r<<2|l>>4;if(s.push(f),u!==64){const h=l<<4&240|u>>2;if(s.push(h),c!==64){const p=u<<6&192|c;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $o=function(t){const e=Zo(t);return Oi.encodeByteArray(e,!0)},os=function(t){return $o(t).replace(/\./g,"")},ti=function(t){try{return Oi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){return el(void 0,t)}function el(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!du(n)||(t[n]=el(t[n],e[n]));return t}function du(t){return t!=="__proto__"}/**
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
 */function fu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hu=()=>fu().__FIREBASE_DEFAULTS__,_u=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ti(t[1]);return e&&JSON.parse(e)},tl=()=>{try{return hu()||_u()||pu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mu=t=>{var e,n;return(n=(e=tl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gu=t=>{const e=mu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},nl=()=>{var t;return(t=tl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function bu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[os(JSON.stringify(n)),os(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yu())}function vu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function il(){return Jo.NODE_ADMIN===!0}function wu(){try{return typeof indexedDB=="object"}catch{return!1}}function Cu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="FirebaseError";class Hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Eu,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rl.prototype.create)}}class rl{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Su(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,l,s)}}function Su(t,e){return t.replace(ku,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ku=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){return JSON.parse(t)}function Le(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Nn(ti(r[0])||""),n=Nn(ti(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Iu=function(t){const e=ol(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Tu=function(t){const e=ol(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function rn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ls(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(br(r)&&br(o)){if(!ni(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function br(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)s[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)s[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=s[c-3]^s[c-8]^s[c-14]^s[c-16];s[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^r&(o^l),d=1518500249):(u=r^o^l,d=1859775393):c<60?(u=r&o|l&(r|o),d=2400959708):(u=r^o^l,d=3395469782);const f=(i<<5|i>>>27)+u+a+d+s[c]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ri(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,q(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Is=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Tt(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ot="[DEFAULT]";/**
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
 */class Ru{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ks;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pu(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Au(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Au(t){return t===Ot?void 0:t}function Pu(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ru(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Lu={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Bu=Ee.INFO,Fu={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Wu=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Fu[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=Bu,this._logHandler=Wu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const qu=(t,e)=>e.some(n=>t instanceof n);let yr,vr;function zu(){return yr||(yr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hu(){return vr||(vr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const al=new WeakMap,si=new WeakMap,ul=new WeakMap,Hs=new WeakMap,Ai=new WeakMap;function Uu(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&al.set(n,t)}).catch(()=>{}),Ai.set(e,t),e}function ju(t){if(si.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});si.set(t,e)}let ii={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return si.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ul.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vu(t){ii=t(ii)}function Gu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Us(this),e,...n);return ul.set(s,e.sort?e.sort():[e]),mt(s)}:Hu().includes(t)?function(...e){return t.apply(Us(this),e),mt(al.get(this))}:function(...e){return mt(t.apply(Us(this),e))}}function Yu(t){return typeof t=="function"?Gu(t):(t instanceof IDBTransaction&&ju(t),qu(t,zu())?new Proxy(t,ii):t)}function mt(t){if(t instanceof IDBRequest)return Uu(t);if(Hs.has(t))return Hs.get(t);const e=Yu(t);return e!==t&&(Hs.set(t,e),Ai.set(e,t)),e}const Us=t=>Ai.get(t);function Ku(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=mt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(mt(o.result),a.oldVersion,a.newVersion,mt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const xu=["get","getKey","getAll","getAllKeys","count"],Qu=["put","add","delete","clear"],js=new Map;function wr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(js.get(e))return js.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Qu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xu.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return js.set(e,r),r}Vu(t=>({...t,get:(e,n,s)=>wr(e,n)||t.get(e,n,s),has:(e,n)=>!!wr(e,n)||t.has(e,n)}));/**
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
 */class Xu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ju(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ju(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ri="@firebase/app",Cr="0.9.23";/**
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
 */const qt=new ll("@firebase/app"),Zu="@firebase/app-compat",$u="@firebase/analytics-compat",ec="@firebase/analytics",tc="@firebase/app-check-compat",nc="@firebase/app-check",sc="@firebase/auth",ic="@firebase/auth-compat",rc="@firebase/database",oc="@firebase/database-compat",lc="@firebase/functions",ac="@firebase/functions-compat",uc="@firebase/installations",cc="@firebase/installations-compat",dc="@firebase/messaging",fc="@firebase/messaging-compat",hc="@firebase/performance",_c="@firebase/performance-compat",pc="@firebase/remote-config",mc="@firebase/remote-config-compat",gc="@firebase/storage",bc="@firebase/storage-compat",yc="@firebase/firestore",vc="@firebase/firestore-compat",wc="firebase",Cc="10.6.0";/**
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
 */const oi="[DEFAULT]",Ec={[ri]:"fire-core",[Zu]:"fire-core-compat",[ec]:"fire-analytics",[$u]:"fire-analytics-compat",[nc]:"fire-app-check",[tc]:"fire-app-check-compat",[sc]:"fire-auth",[ic]:"fire-auth-compat",[rc]:"fire-rtdb",[oc]:"fire-rtdb-compat",[lc]:"fire-fn",[ac]:"fire-fn-compat",[uc]:"fire-iid",[cc]:"fire-iid-compat",[dc]:"fire-fcm",[fc]:"fire-fcm-compat",[hc]:"fire-perf",[_c]:"fire-perf-compat",[pc]:"fire-rc",[mc]:"fire-rc-compat",[gc]:"fire-gcs",[bc]:"fire-gcs-compat",[yc]:"fire-fst",[vc]:"fire-fst-compat","fire-js":"fire-js",[wc]:"fire-js-all"};/**
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
 */const as=new Map,li=new Map;function Sc(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(li.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;li.set(e,t);for(const n of as.values())Sc(n,t);return!0}function kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ic={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new rl("app","Firebase",Ic);/**
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
 */class Tc{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Nc=Cc;function cl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:oi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(n||(n=nl()),!n)throw gt.create("no-options");const r=as.get(i);if(r){if(ni(n,r.options)&&ni(s,r.config))return r;throw gt.create("duplicate-app",{appName:i})}const o=new Mu(i);for(const a of li.values())o.addComponent(a);const l=new Tc(n,s,o);return as.set(i,l),l}function Dc(t=oi){const e=as.get(t);if(!e&&t===oi&&nl())return cl();if(!e)throw gt.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let i=(s=Ec[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(l.join(" "));return}us(new Dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Oc="firebase-heartbeat-database",Rc=1,On="firebase-heartbeat-store";let Vs=null;function dl(){return Vs||(Vs=Ku(Oc,Rc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(On)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),Vs}async function Ac(t){try{return await(await dl()).transaction(On).objectStore(On).get(fl(t))}catch(e){if(e instanceof Hn)qt.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function Er(t,e){try{const s=(await dl()).transaction(On,"readwrite");await s.objectStore(On).put(e,fl(t)),await s.done}catch(n){if(n instanceof Hn)qt.warn(n.message);else{const s=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(s.message)}}}function fl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pc=1024,Mc=30*24*60*60*1e3;class Lc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Mc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sr(),{heartbeatsToSend:s,unsentEntries:i}=Bc(this._heartbeatsCache.heartbeats),r=os(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Sr(){return new Date().toISOString().substring(0,10)}function Bc(t,e=Pc){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),kr(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Fc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wu()?Cu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ac(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Er(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Er(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kr(t){return os(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wc(t){us(new Dn("platform-logger",e=>new Xu(e),"PRIVATE")),us(new Dn("heartbeat",e=>new Lc(e),"PRIVATE")),tn(ri,Cr,t),tn(ri,Cr,"esm2017"),tn("fire-js","")}Wc("");var qc="firebase",zc="10.6.0";/**
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
 */tn(qc,zc,"app");const Ir="@firebase/database",Tr="1.0.1";/**
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
 */let hl="";function Hc(t){hl=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Nn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return at(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Uc(e)}}catch{}return new jc},At=_l("localStorage"),ai=_l("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new ll("@firebase/database"),Vc=function(){let t=1;return function(){return t++}}(),pl=function(t){const e=Ou(t),n=new Du;n.update(e);const s=n.digest();return Oi.encodeByteArray(s)},Un=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Un.apply(null,s):typeof s=="object"?e+=Le(s):e+=s,e+=" "}return e};let Lt=null,Nr=!0;const Gc=function(t,e){q(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(nn.logLevel=Ee.VERBOSE,Lt=nn.log.bind(nn),e&&ai.set("logging_enabled",!0)):typeof t=="function"?Lt=t:(Lt=null,ai.remove("logging_enabled"))},He=function(...t){if(Nr===!0&&(Nr=!1,Lt===null&&ai.get("logging_enabled")===!0&&Gc(!0)),Lt){const e=Un.apply(null,t);Lt(e)}},jn=function(t){return function(...e){He(t,...e)}},ui=function(...t){const e="FIREBASE INTERNAL ERROR: "+Un(...t);nn.error(e)},ht=function(...t){const e=`FIREBASE FATAL ERROR: ${Un(...t)}`;throw nn.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+Un(...t);nn.warn(e)},Yc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Kc=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zt="[MIN_NAME]",Ct="[MAX_NAME]",fn=function(t,e){if(t===e)return 0;if(t===zt||e===Ct)return-1;if(e===zt||t===Ct)return 1;{const n=Dr(t),s=Dr(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},xc=function(t,e){return t===e?0:t<e?-1:1},gn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Le(e))},Mi=function(t){if(typeof t!="object"||t===null)return Le(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Le(e[s]),n+=":",n+=Mi(t[e[s]]);return n+="}",n},ml=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gl=function(t){q(!Pi(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},Qc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Xc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Jc(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Zc=new RegExp("^-?(0*)\\d{1,10}$"),$c=-2147483648,ed=2147483647,Dr=function(t){if(Zc.test(t)){const e=Number(t);if(e>=$c&&e<=ed)return e}return null},hn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},td=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nd{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class sn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="5",bl="v",yl="s",vl="r",wl="f",Cl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,El="ls",Sl="p",ci="ac",kl="websocket",Il="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=At.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&At.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function id(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Nl(t,e,n){q(typeof e=="string","typeof type must == string"),q(typeof n=="object","typeof params must == object");let s;if(e===kl)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Il)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);id(t)&&(n.ns=t.namespace);const i=[];return Qe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.counters_={}}incrementCounter(e,n=1){at(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs={},Ys={};function Bi(t){const e=t.toString();return Gs[e]||(Gs[e]=new rd),Gs[e]}function od(t,e){const n=t.toString();return Ys[n]||(Ys[n]=e()),Ys[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&hn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="start",ad="close",ud="pLPCommand",cd="pRTLPCB",Dl="id",Ol="pw",Rl="ser",dd="cb",fd="seg",hd="ts",_d="d",pd="dframe",Al=1870,Pl=30,md=Al-Pl,gd=25e3,bd=3e4;class Jt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jn(e),this.stats_=Bi(n),this.urlFn=a=>(this.appCheckToken&&(a[ci]=this.appCheckToken),Nl(n,Il,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ld(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bd)),Kc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fi((...r)=>{const[o,l,a,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Or)this.id=l,this.password=a;else if(o===ad)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Or]="t",s[Rl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[dd]=this.scriptTagHolder.uniqueCallbackIdentifier),s[bl]=Li,this.transportSessionId&&(s[yl]=this.transportSessionId),this.lastSessionId&&(s[El]=this.lastSessionId),this.applicationId&&(s[Sl]=this.applicationId),this.appCheckToken&&(s[ci]=this.appCheckToken),typeof location<"u"&&location.hostname&&Cl.test(location.hostname)&&(s[vl]=wl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jt.forceAllow_=!0}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){return Jt.forceAllow_?!0:!Jt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qc()&&!Xc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$o(n),i=ml(s,md);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[pd]="t",s[Dl]=e,s[Ol]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fi{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vc(),window[ud+this.uniqueCallbackIdentifier]=e,window[cd+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){He("frame writing exception"),l.stack&&He(l.stack),He(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dl]=this.myID,e[Ol]=this.myPW,e[Rl]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pl+s.length<=Al;){const o=this.pendingSegs.shift();s=s+"&"+fd+i+"="+o.seg+"&"+hd+i+"="+o.ts+"&"+_d+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(gd)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=16384,vd=45e3;let cs=null;typeof MozWebSocket<"u"?cs=MozWebSocket:typeof WebSocket<"u"&&(cs=WebSocket);class Ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jn(this.connId),this.stats_=Bi(n),this.connURL=Ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[bl]=Li,typeof location<"u"&&location.hostname&&Cl.test(location.hostname)&&(o[vl]=wl),n&&(o[yl]=n),s&&(o[El]=s),i&&(o[ci]=i),r&&(o[Sl]=r),Nl(e,kl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,At.set("previous_websocket_failure",!0);try{let s;il(),this.mySock=new cs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&cs!==null&&!Ze.forceDisallow_}static previouslyFailed(){return At.isInMemoryStorage||At.get("previous_websocket_failure")===!0}markConnectionHealthy(){At.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Nn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ml(n,yd);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vd))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jt,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ze&&Ze.isAvailable();let s=n&&!Ze.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ze];else{const i=this.transports_=[];for(const r of Rn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Rn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=6e4,Cd=5e3,Ed=10*1024,Sd=100*1024,Ks="t",Rr="d",kd="s",Ar="r",Id="e",Pr="o",Mr="a",Lr="n",Br="p",Td="h";class Nd{constructor(e,n,s,i,r,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jn("c:"+this.id+":"),this.transportManager_=new Rn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Sd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ed?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ks in e){const n=e[Ks];n===Mr?this.upgradeIfSecondaryHealthy_():n===Ar?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gn("t",e),s=gn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Br,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gn("t",e),s=gn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gn(Ks,e);if(Rr in e){const s=e[Rr];if(n===Td){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kd?this.onConnectionShutdown_(s):n===Ar?this.onReset_(s):n===Id?ui("Server Error: "+s):n===Pr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ui("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Li!==s&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),wn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Cd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Br,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(At.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.allowedEvents_=e,this.listeners_={},q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Ll{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ds}getInitialEvent(e){return q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=32,Wr=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new Ce("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Et(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function Bl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Dd(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Fl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Wl(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function Be(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ce(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=ue(t),s=ue(e);if(n===null)return e;if(n===s)return je(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ql(t,e){if(Et(t)!==Et(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function $e(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Et(t)>Et(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Od{constructor(e,n){this.errorPrefix_=n,this.parts_=Fl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Is(this.parts_[s]);zl(this)}}function Rd(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Is(e),zl(t)}function Ad(t){const e=t.parts_.pop();t.byteLength_-=Is(e),t.parts_.length>0&&(t.byteLength_-=1)}function zl(t){if(t.byteLength_>Wr)throw new Error(t.errorPrefix_+"has a key path longer than "+Wr+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fr+") or object contains a cycle "+Rt(t))}function Rt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Ll{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wi}getInitialEvent(e){return q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=1e3,Pd=60*5*1e3,qr=30*1e3,Md=1.3,Ld=3e4,Bd="server_kill",zr=3;class dt extends Ml{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=dt.nextPersistentConnectionId_++,this.log_=jn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bn,this.maxReconnectDelay_=Pd,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!il())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ds.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Le(r)),q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ks,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),q(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,u=l.s;dt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&at(e,"w")){const s=rn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Iu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ui("Unrecognized action received from server: "+Le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ld&&(this.reconnectDelay_=bn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Md)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},u=function(c){q(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new Nd(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,h=>{Ke(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Bd)},r))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Ke(c),a())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gr(this.interruptReasons_)&&(this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Mi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ce(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zr&&(this.reconnectDelay_=qr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hl.replace(/\./g,"-")]=1,sl()?e["framework.cordova"]=1:vu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ds.getInstance().currentlyOnline();return gr(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new le(zt,e),i=new le(zt,n);return this.compare(s,i)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn;class Hl extends Ts{static get __EMPTY_NODE(){return Jn}static set __EMPTY_NODE(e){Jn=e}compare(e,n){return fn(e.name,n.name)}isDefinedOn(e){throw dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(Ct,Jn)}makePost(e,n){return q(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Jn)}toString(){return".key"}}const bt=new Hl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??We.RED,this.left=i??Ye.EMPTY_NODE,this.right=r??Ye.EMPTY_NODE}copy(e,n,s,i,r){return new We(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class Fd{copy(e,n,s,i,r){return this}insert(e,n,s){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,n=Ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zn(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new Fd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e){return fn(t.name,e.name)}function qi(t,e){return fn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;function qd(t){di=t}const Ul=function(t){return typeof t=="number"?"number:"+gl(t):"string:"+t},jl=function(t){if(t.isLeafNode()){const e=t.val();q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&at(e,".sv"),"Priority must be a string or number.")}else q(t===di||t.isEmpty(),"priority of unexpected type.");q(t===di||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jl(this.priorityNode_)}static set __childrenNodeConstructor(e){Hr=e}static get __childrenNodeConstructor(){return Hr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:ue(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ue(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(q(s!==".priority"||Et(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ul(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gl(this.value_):e+=this.value_,this.lazyHash_=pl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),r=Fe.VALUE_TYPE_ORDER.indexOf(s);return q(i>=0,"Unknown leaf type: "+n),q(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl,Gl;function zd(t){Vl=t}function Hd(t){Gl=t}class Ud extends Ts{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?fn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(Ct,new Fe("[PRIORITY-POST]",Gl))}makePost(e,n){const s=Vl(e);return new le(n,new Fe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Oe=new Ud;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=Math.log(2);class Vd{constructor(e){const n=r=>parseInt(Math.log(r)/jd,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fs=function(t,e,n,s){t.sort(e);const i=function(a,u){const d=u-a;let c,f;if(d===0)return null;if(d===1)return c=t[a],f=n?n(c):c,new We(f,c.node,We.BLACK,null,null);{const h=parseInt(d/2,10)+a,p=i(a,h),b=i(h+1,u);return c=t[h],f=n?n(c):c,new We(f,c.node,We.BLACK,p,b)}},r=function(a){let u=null,d=null,c=t.length;const f=function(p,b){const v=c-p,y=c;c-=p;const T=i(v+1,y),w=t[v],I=n?n(w):w;h(new We(I,w.node,b,null,T))},h=function(p){u?(u.left=p,u=p):(d=p,u=p)};for(let p=0;p<a.count;++p){const b=a.nextBitIsOne(),v=Math.pow(2,a.count-(p+1));b?f(v,We.BLACK):(f(v,We.BLACK),f(v,We.RED))}return d},o=new Vd(t.length),l=r(o);return new Ye(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;const xt={};class ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return q(xt&&Oe,"ChildrenNode.ts has not been loaded"),xs=xs||new ct({".priority":xt},{".priority":Oe}),xs}get(e){const n=rn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ye?n:null}hasIndex(e){return at(this.indexSet_,e.toString())}addIndex(e,n){q(e!==bt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(le.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=fs(s,e.getCompare()):l=xt;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new ct(d,u)}addToIndexes(e,n){const s=ls(this.indexes_,(i,r)=>{const o=rn(this.indexSet_,r);if(q(o,"Missing index implementation for "+r),i===xt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(le.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),fs(l,o.getCompare())}else return xt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new le(e.name,l))),a.insert(e,e.node)}});return new ct(s,this.indexSet_)}removeFromIndexes(e,n){const s=ls(this.indexes_,i=>{if(i===xt)return i;{const r=n.get(e.name);return r?i.remove(new le(e.name,r)):i}});return new ct(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn;class se{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&jl(this.priorityNode_),this.children_.isEmpty()&&q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yn||(yn=new se(new Ye(qi),null,ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yn}updatePriority(e){return this.children_.isEmpty()?this:new se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yn:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new le(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?yn:this.priorityNode_;return new se(i,o,r)}}updateChild(e,n){const s=ue(e);if(s===null)return n;{q(ue(e)!==".priority"||Et(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Se(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Oe,(o,l)=>{n[o]=l.val(e),s++,r&&se.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ul(this.getPriority().val())+":"),this.forEachChild(Oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":pl(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new le(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vn?-1:0}withIndex(e){if(e===bt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new se(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Oe),i=n.getIterator(Oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bt?null:this.indexMap_.get(e.toString())}}se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gd extends se{constructor(){super(new Ye(qi),se.EMPTY_NODE,ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return se.EMPTY_NODE}isEmpty(){return!1}}const Vn=new Gd;Object.defineProperties(le,{MIN:{value:new le(zt,se.EMPTY_NODE)},MAX:{value:new le(Ct,Vn)}});Hl.__EMPTY_NODE=se.EMPTY_NODE;Fe.__childrenNodeConstructor=se;qd(Vn);Hd(Vn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=!0;function qe(t,e=null){if(t===null)return se.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,qe(e))}if(!(t instanceof Array)&&Yd){const n=[];let s=!1;if(Qe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=qe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new le(o,a)))}}),n.length===0)return se.EMPTY_NODE;const r=fs(n,Wd,o=>o.name,qi);if(s){const o=fs(n,Oe.getCompare());return new se(r,qe(e),new ct({".priority":o},{".priority":Oe}))}else return new se(r,qe(e),ct.Default)}else{let n=se.EMPTY_NODE;return Qe(t,(s,i)=>{if(at(t,s)&&s.substring(0,1)!=="."){const r=qe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(qe(e))}}zd(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends Ts{constructor(e){super(),this.indexPath_=e,q(!ae(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?fn(e.name,n.name):r}makePost(e,n){const s=qe(e),i=se.EMPTY_NODE.updateChild(this.indexPath_,s);return new le(n,i)}maxPost(){const e=se.EMPTY_NODE.updateChild(this.indexPath_,Vn);return new le(Ct,e)}toString(){return Fl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends Ts{compare(e,n){const s=e.node.compareTo(n.node);return s===0?fn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const s=qe(e);return new le(n,s)}toString(){return".value"}}const Kl=new Kd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){return{type:"value",snapshotNode:t}}function on(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function An(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Pn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xd(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){q(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(An(n,l)):q(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(on(n,s)):o.trackChildChange(Pn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(An(i,r))}),n.isLeafNode()||n.forEachChild(Oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Pn(i,r,o))}else s.trackChildChange(on(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?se.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.indexedFilter_=new zi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mn.getStartPost_(e),this.endPost_=Mn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new le(n,s))||(s=se.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=se.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(se.EMPTY_NODE);const r=this;return n.forEachChild(Oe,(o,l)=>{r.matches(new le(o,l))||(i=i.updateImmediateChild(o,se.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Mn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new le(n,s))||(s=se.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=se.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=se.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(se.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,se.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,h)=>c(h,f)}else o=this.index_.getCompare();const l=e;q(l.numChildren()===this.limit_,"");const a=new le(n,s),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,a);if(d&&!s.isEmpty()&&h>=0)return r!=null&&r.trackChildChange(Pn(n,s,c)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(An(n,c));const b=l.updateImmediateChild(n,se.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(on(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:d&&o(u,a)>=0?(r!=null&&(r.trackChildChange(An(u.name,u.node)),r.trackChildChange(on(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(u.name,se.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zt}hasEnd(){return this.endSet_}getIndexEndValue(){return q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ct}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new Hi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xd(t){return t.loadsAllData()?new zi(t.getIndex()):t.hasLimit()?new Qd(t):new Mn(t)}function Jd(t,e){const n=t.copy();return n.index_=e,n}function Ur(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===Kl?n="$value":t.index_===bt?n="$key":(q(t.index_ instanceof Yl,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Le(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Le(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Le(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Le(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Le(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Ml{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=jn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=hs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ur(e._queryParams);this.restRequest_(r+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(r,c,!1,s),rn(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const s=hs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ur(e._queryParams),s=e._path.toString(),i=new ks;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Nu(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Nn(l.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.rootNode_=se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(){return{value:null,children:new Map}}function Ql(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ue(e);t.children.has(s)||t.children.set(s,_s());const i=t.children.get(s);e=Se(e),Ql(i,e,n)}}function fi(t,e,n){t.value!==null?n(e,t.value):$d(t,(s,i)=>{const r=new Ce(e.toString()+"/"+s);fi(i,r,n)})}function $d(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=10*1e3,tf=30*1e3,nf=5*60*1e3;class sf{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ef(e);const s=Vr+(tf-Vr)*Math.random();wn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Qe(e,(i,r)=>{r>0&&at(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),wn(this.reportStats_.bind(this),Math.floor(Math.random()*2*nf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(et||(et={}));function Xl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ui(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ji(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=et.ACK_USER_WRITE,this.source=Xl()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new ps(me(),n,this.revert)}}else return q(ue(this.path)===e,"operationForChild called for unrelated child."),new ps(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){this.source=e,this.path=n,this.type=et.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new Ln(this.source,me()):new Ln(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=et.OVERWRITE}operationForChild(e){return ae(this.path)?new Ht(this.source,me(),this.snap.getImmediateChild(e)):new Ht(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=et.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new Ht(this.source,me(),n.value):new Bn(this.source,me(),n)}else return q(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bn(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function of(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xd(o.childName,o.snapshotNode))}),vn(t,i,"child_removed",e,s,n),vn(t,i,"child_added",e,s,n),vn(t,i,"child_moved",r,s,n),vn(t,i,"child_changed",e,s,n),vn(t,i,"value",e,s,n),i}function vn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>af(t,l,a)),o.forEach(l=>{const a=lf(t,l,r);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function lf(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function af(t,e,n){if(e.childName==null||n.childName==null)throw dn("Should only compare child_ events.");const s=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t,e){return{eventCache:t,serverCache:e}}function Cn(t,e,n,s){return Ns(new St(e,n,s),t.serverCache)}function Jl(t,e,n,s){return Ns(t.eventCache,new St(e,n,s))}function ms(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ut(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;const uf=()=>(Qs||(Qs=new Ye(xc)),Qs);class Ie{constructor(e,n=uf()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return Qe(e,(s,i)=>{n=n.set(new Ce(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ae(e))return null;{const s=ue(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Se(e),n);return r!=null?{path:Be(new Ce(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=ue(e),s=this.children.get(n);return s!==null?s.subtree(Se(e)):new Ie(null)}}set(e,n){if(ae(e))return new Ie(n,this.children);{const s=ue(e),r=(this.children.get(s)||new Ie(null)).set(Se(e),n),o=this.children.insert(s,r);return new Ie(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=ue(e),s=this.children.get(n);if(s){const i=s.remove(Se(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ie(null):new Ie(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=ue(e),s=this.children.get(n);return s?s.get(Se(e)):null}}setTree(e,n){if(ae(e))return n;{const s=ue(e),r=(this.children.get(s)||new Ie(null)).setTree(Se(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ie(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Be(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ae(e))return null;{const r=ue(e),o=this.children.get(r);return o?o.findOnPath_(Se(e),Be(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const i=ue(e),r=this.children.get(i);return r?r.foreachOnPath_(Se(e),Be(n,i),s):new Ie(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.writeTree_=e}static empty(){return new tt(new Ie(null))}}function En(t,e,n){if(ae(e))return new tt(new Ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=je(i,e);return r=r.updateChild(o,n),new tt(t.writeTree_.set(i,r))}else{const i=new Ie(n),r=t.writeTree_.setTree(e,i);return new tt(r)}}}function Gr(t,e,n){let s=t;return Qe(n,(i,r)=>{s=En(s,Be(e,i),r)}),s}function Yr(t,e){if(ae(e))return tt.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new tt(n)}}function hi(t,e){return Vt(t,e)!=null}function Vt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Kr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(s,i)=>{e.push(new le(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new le(s,i.value))}),e}function yt(t,e){if(ae(e))return t;{const n=Vt(t,e);return n!=null?new tt(new Ie(n)):new tt(t.writeTree_.subtree(e))}}function _i(t){return t.writeTree_.isEmpty()}function ln(t,e){return Zl(me(),t.writeTree_,e)}function Zl(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(q(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Zl(Be(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Be(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t,e){return na(e,t)}function cf(t,e,n,s,i){q(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=En(t.visibleWrites,e,n)),t.lastWriteId=s}function df(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ff(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);q(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&hf(l,s.path)?i=!1:$e(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return _f(t),!0;if(s.snap)t.visibleWrites=Yr(t.visibleWrites,s.path);else{const l=s.children;Qe(l,a=>{t.visibleWrites=Yr(t.visibleWrites,Be(s.path,a))})}return!0}else return!1}function hf(t,e){if(t.snap)return $e(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$e(Be(t.path,n),e))return!0;return!1}function _f(t){t.visibleWrites=$l(t.allWrites,pf,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pf(t){return t.visible}function $l(t,e,n){let s=tt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)$e(n,o)?(l=je(n,o),s=En(s,l,r.snap)):$e(o,n)&&(l=je(o,n),s=En(s,me(),r.snap.getChild(l)));else if(r.children){if($e(n,o))l=je(n,o),s=Gr(s,l,r.children);else if($e(o,n))if(l=je(o,n),ae(l))s=Gr(s,me(),r.children);else{const a=rn(r.children,ue(l));if(a){const u=a.getChild(Se(l));s=En(s,me(),u)}}}else throw dn("WriteRecord should have .snap or .children")}}return s}function ea(t,e,n,s,i){if(!s&&!i){const r=Vt(t.visibleWrites,e);if(r!=null)return r;{const o=yt(t.visibleWrites,e);if(_i(o))return n;if(n==null&&!hi(o,me()))return null;{const l=n||se.EMPTY_NODE;return ln(o,l)}}}else{const r=yt(t.visibleWrites,e);if(!i&&_i(r))return n;if(!i&&n==null&&!hi(r,me()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&($e(u.path,e)||$e(e,u.path))},l=$l(t.allWrites,o,e),a=n||se.EMPTY_NODE;return ln(l,a)}}}function mf(t,e,n){let s=se.EMPTY_NODE;const i=Vt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=yt(t.visibleWrites,e);return n.forEachChild(Oe,(o,l)=>{const a=ln(yt(r,new Ce(o)),l);s=s.updateImmediateChild(o,a)}),Kr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=yt(t.visibleWrites,e);return Kr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function gf(t,e,n,s,i){q(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Be(e,n);if(hi(t.visibleWrites,r))return null;{const o=yt(t.visibleWrites,r);return _i(o)?i.getChild(n):ln(o,i.getChild(n))}}function bf(t,e,n,s){const i=Be(e,n),r=Vt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=yt(t.visibleWrites,i);return ln(o,s.getNode().getImmediateChild(n))}else return null}function yf(t,e){return Vt(t.visibleWrites,e)}function vf(t,e,n,s,i,r,o){let l;const a=yt(t.visibleWrites,e),u=Vt(a,me());if(u!=null)l=u;else if(n!=null)l=ln(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let h=f.getNext();for(;h&&d.length<i;)c(h,s)!==0&&d.push(h),h=f.getNext();return d}else return[]}function wf(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function gs(t,e,n,s){return ea(t.writeTree,t.treePath,e,n,s)}function Vi(t,e){return mf(t.writeTree,t.treePath,e)}function xr(t,e,n,s){return gf(t.writeTree,t.treePath,e,n,s)}function bs(t,e){return yf(t.writeTree,Be(t.treePath,e))}function Cf(t,e,n,s,i,r){return vf(t.writeTree,t.treePath,e,n,s,i,r)}function Gi(t,e,n){return bf(t.writeTree,t.treePath,e,n)}function ta(t,e){return na(Be(t.treePath,e),t.writeTree)}function na(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),q(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Pn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,An(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,on(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Pn(s,e.snapshotNode,i.oldSnap));else throw dn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const sa=new Sf;class Yi{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new St(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gi(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ut(this.viewCache_),r=Cf(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){return{filter:t}}function If(t,e){q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Tf(t,e,n,s,i){const r=new Ef;let o,l;if(n.type===et.OVERWRITE){const u=n;u.source.fromUser?o=pi(t,e,u.path,u.snap,s,i,r):(q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!ae(u.path),o=ys(t,e,u.path,u.snap,s,i,l,r))}else if(n.type===et.MERGE){const u=n;u.source.fromUser?o=Df(t,e,u.path,u.children,s,i,r):(q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=mi(t,e,u.path,u.children,s,i,l,r))}else if(n.type===et.ACK_USER_WRITE){const u=n;u.revert?o=Af(t,e,u.path,s,i,r):o=Of(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===et.LISTEN_COMPLETE)o=Rf(t,e,n.path,s,r);else throw dn("Unknown operation type: "+n.type);const a=r.getChanges();return Nf(e,o,a),{viewCache:o,changes:a}}function Nf(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ms(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(xl(ms(e)))}}function ia(t,e,n,s,i,r){const o=e.eventCache;if(bs(s,n)!=null)return e;{let l,a;if(ae(n))if(q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ut(e),d=u instanceof se?u:se.EMPTY_NODE,c=Vi(s,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const u=gs(s,Ut(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=ue(n);if(u===".priority"){q(Et(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=xr(s,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=Se(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=xr(s,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Gi(s,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,r):l=o.getNode()}}return Cn(e,l,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function ys(t,e,n,s,i,r,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(ae(n))u=d.updateFullNode(a.getNode(),s,null);else if(d.filtersNodes()&&!a.isFiltered()){const h=a.getNode().updateChild(n,s);u=d.updateFullNode(a.getNode(),h,null)}else{const h=ue(n);if(!a.isCompleteForPath(n)&&Et(n)>1)return e;const p=Se(n),v=a.getNode().getImmediateChild(h).updateChild(p,s);h===".priority"?u=d.updatePriority(a.getNode(),v):u=d.updateChild(a.getNode(),h,v,p,sa,null)}const c=Jl(e,u,a.isFullyInitialized()||ae(n),d.filtersNodes()),f=new Yi(i,c,r);return ia(t,c,n,i,f,l)}function pi(t,e,n,s,i,r,o){const l=e.eventCache;let a,u;const d=new Yi(i,e,r);if(ae(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Cn(e,u,!0,t.filter.filtersNodes());else{const c=ue(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),a=Cn(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=Se(n),h=l.getNode().getImmediateChild(c);let p;if(ae(f))p=s;else{const b=d.getCompleteChild(c);b!=null?Bl(f)===".priority"&&b.getChild(Wl(f)).isEmpty()?p=b:p=b.updateChild(f,s):p=se.EMPTY_NODE}if(h.equals(p))a=e;else{const b=t.filter.updateChild(l.getNode(),c,p,f,d,o);a=Cn(e,b,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Qr(t,e){return t.eventCache.isCompleteForChild(e)}function Df(t,e,n,s,i,r,o){let l=e;return s.foreach((a,u)=>{const d=Be(n,a);Qr(e,ue(d))&&(l=pi(t,l,d,u,i,r,o))}),s.foreach((a,u)=>{const d=Be(n,a);Qr(e,ue(d))||(l=pi(t,l,d,u,i,r,o))}),l}function Xr(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function mi(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;ae(n)?u=s:u=new Ie(null).setTree(n,s);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const h=e.serverCache.getNode().getImmediateChild(c),p=Xr(t,h,f);a=ys(t,a,new Ce(c),p,i,r,o,l)}}),u.children.inorderTraversal((c,f)=>{const h=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!h){const p=e.serverCache.getNode().getImmediateChild(c),b=Xr(t,p,f);a=ys(t,a,new Ce(c),b,i,r,o,l)}}),a}function Of(t,e,n,s,i,r,o){if(bs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(ae(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ys(t,e,n,a.getNode().getChild(n),i,r,l,o);if(ae(n)){let u=new Ie(null);return a.getNode().forEachChild(bt,(d,c)=>{u=u.set(new Ce(d),c)}),mi(t,e,n,u,i,r,l,o)}else return e}else{let u=new Ie(null);return s.foreach((d,c)=>{const f=Be(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),mi(t,e,n,u,i,r,l,o)}}function Rf(t,e,n,s,i){const r=e.serverCache,o=Jl(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return ia(t,o,n,s,sa,i)}function Af(t,e,n,s,i,r){let o;if(bs(s,n)!=null)return e;{const l=new Yi(s,e,i),a=e.eventCache.getNode();let u;if(ae(n)||ue(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=gs(s,Ut(e));else{const c=e.serverCache.getNode();q(c instanceof se,"serverChildren would be complete if leaf node"),d=Vi(s,c)}d=d,u=t.filter.updateFullNode(a,d,r)}else{const d=ue(n);let c=Gi(s,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,Se(n),l,r):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,se.EMPTY_NODE,Se(n),l,r):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gs(s,Ut(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||bs(s,me())!=null,Cn(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new zi(s.getIndex()),r=Xd(s);this.processor_=kf(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(se.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(se.EMPTY_NODE,l.getNode(),null),d=new St(a,o.isFullyInitialized(),i.filtersNodes()),c=new St(u,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ns(c,d),this.eventGenerator_=new rf(this.query_)}get query(){return this.query_}}function Mf(t){return t.viewCache_.serverCache.getNode()}function Lf(t){return ms(t.viewCache_)}function Bf(t,e){const n=Ut(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function Jr(t){return t.eventRegistrations_.length===0}function Ff(t,e){t.eventRegistrations_.push(e)}function Zr(t,e,n){const s=[];if(n){q(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function $r(t,e,n,s){e.type===et.MERGE&&e.source.queryId!==null&&(q(Ut(t.viewCache_),"We should always have a full cache before handling merges"),q(ms(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Tf(t.processor_,i,e,n,s);return If(t.processor_,r.viewCache),q(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ra(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Wf(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(r,o)=>{s.push(on(r,o))}),n.isFullyInitialized()&&s.push(xl(n.getNode())),ra(t,s,n.getNode(),e)}function ra(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return of(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs;class oa{constructor(){this.views=new Map}}function qf(t){q(!vs,"__referenceConstructor has already been defined"),vs=t}function zf(){return q(vs,"Reference.ts has not been loaded"),vs}function Hf(t){return t.views.size===0}function Ki(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return q(r!=null,"SyncTree gave us an op for an invalid query."),$r(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat($r(o,e,n,s));return r}}function la(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=gs(n,i?s:null),a=!1;l?a=!0:s instanceof se?(l=Vi(n,s),a=!1):(l=se.EMPTY_NODE,a=!1);const u=Ns(new St(l,a,!1),new St(s,i,!1));return new Pf(e,u)}return o}function Uf(t,e,n,s,i,r){const o=la(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ff(o,n),Wf(o,n)}function jf(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=kt(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Zr(u,n,s)),Jr(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||r.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Zr(a,n,s)),Jr(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!kt(t)&&r.push(new(zf())(e._repo,e._path)),{removed:r,events:o}}function aa(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vt(t,e){let n=null;for(const s of t.views.values())n=n||Bf(s,e);return n}function ua(t,e){if(e._queryParams.loadsAllData())return Os(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ca(t,e){return ua(t,e)!=null}function kt(t){return Os(t)!=null}function Os(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;function Vf(t){q(!ws,"__referenceConstructor has already been defined"),ws=t}function Gf(){return q(ws,"Reference.ts has not been loaded"),ws}let Yf=1;class eo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=wf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function da(t,e,n,s,i){return cf(t.pendingWriteTree_,e,n,s,i),i?Yn(t,new Ht(Xl(),e,n)):[]}function Pt(t,e,n=!1){const s=df(t.pendingWriteTree_,e);if(ff(t.pendingWriteTree_,e)){let r=new Ie(null);return s.snap!=null?r=r.set(me(),!0):Qe(s.children,o=>{r=r.set(new Ce(o),!0)}),Yn(t,new ps(s.path,r,n))}else return[]}function Gn(t,e,n){return Yn(t,new Ht(Ui(),e,n))}function Kf(t,e,n){const s=Ie.fromObject(n);return Yn(t,new Bn(Ui(),e,s))}function xf(t,e){return Yn(t,new Ln(Ui(),e))}function Qf(t,e,n){const s=Qi(t,n);if(s){const i=Xi(s),r=i.path,o=i.queryId,l=je(r,e),a=new Ln(ji(o),l);return Ji(t,r,a)}else return[]}function fa(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ca(o,e))){const a=jf(o,e,n,s);Hf(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(r,(f,h)=>kt(h));if(d&&!c){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const h=$f(f);for(let p=0;p<h.length;++p){const b=h[p],v=b.query,y=ma(t,b);t.listenProvider_.startListening(Sn(v),Fn(t,v),y.hashFn,y.onComplete)}}}!c&&u.length>0&&!s&&(d?t.listenProvider_.stopListening(Sn(e),null):u.forEach(f=>{const h=t.queryToTagMap.get(Rs(f));t.listenProvider_.stopListening(Sn(f),h)}))}eh(t,u)}return l}function ha(t,e,n,s){const i=Qi(t,s);if(i!=null){const r=Xi(i),o=r.path,l=r.queryId,a=je(o,e),u=new Ht(ji(l),a,n);return Ji(t,o,u)}else return[]}function Xf(t,e,n,s){const i=Qi(t,s);if(i){const r=Xi(i),o=r.path,l=r.queryId,a=je(o,e),u=Ie.fromObject(n),d=new Bn(ji(l),a,u);return Ji(t,o,d)}else return[]}function Jf(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,h)=>{const p=je(f,i);r=r||vt(h,p),o=o||kt(h)});let l=t.syncPointTree_.get(i);l?(o=o||kt(l),r=r||vt(l,me())):(l=new oa,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=se.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,p)=>{const b=vt(p,me());b&&(r=r.updateImmediateChild(h,b))}));const u=ca(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Rs(e);q(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=th();t.queryToTagMap.set(f,h),t.tagToQueryMap.set(h,f)}const d=Ds(t.pendingWriteTree_,i);let c=Uf(l,e,n,d,r,a);if(!u&&!o&&!s){const f=ua(l,e);c=c.concat(nh(t,e,f))}return c}function xi(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=je(o,e),u=vt(l,a);if(u)return u});return ea(i,e,r,n,!0)}function Zf(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=je(u,n);s=s||vt(d,c)});let i=t.syncPointTree_.get(n);i?s=s||vt(i,me()):(i=new oa,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new St(s,!0,!1):null,l=Ds(t.pendingWriteTree_,e._path),a=la(i,e,l,r?o.getNode():se.EMPTY_NODE,r);return Lf(a)}function Yn(t,e){return _a(e,t.syncPointTree_,null,Ds(t.pendingWriteTree_,me()))}function _a(t,e,n,s){if(ae(t.path))return pa(t,e,n,s);{const i=e.get(me());n==null&&i!=null&&(n=vt(i,me()));let r=[];const o=ue(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=ta(s,o);r=r.concat(_a(l,a,u,d))}return i&&(r=r.concat(Ki(i,t,s,n))),r}}function pa(t,e,n,s){const i=e.get(me());n==null&&i!=null&&(n=vt(i,me()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=ta(s,o),d=t.operationForChild(o);d&&(r=r.concat(pa(d,l,a,u)))}),i&&(r=r.concat(Ki(i,t,s,n))),r}function ma(t,e){const n=e.query,s=Fn(t,n);return{hashFn:()=>(Mf(e)||se.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Qf(t,n._path,s):xf(t,n._path);{const r=Jc(i,n);return fa(t,n,null,r)}}}}function Fn(t,e){const n=Rs(e);return t.queryToTagMap.get(n)}function Rs(t){return t._path.toString()+"$"+t._queryIdentifier}function Qi(t,e){return t.tagToQueryMap.get(e)}function Xi(t){const e=t.indexOf("$");return q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function Ji(t,e,n){const s=t.syncPointTree_.get(e);q(s,"Missing sync point for query tag that we're tracking");const i=Ds(t.pendingWriteTree_,e);return Ki(s,n,i,null)}function $f(t){return t.fold((e,n,s)=>{if(n&&kt(n))return[Os(n)];{let i=[];return n&&(i=aa(n)),Qe(s,(r,o)=>{i=i.concat(o)}),i}})}function Sn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Gf())(t._repo,t._path):t}function eh(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Rs(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function th(){return Yf++}function nh(t,e,n){const s=e._path,i=Fn(t,e),r=ma(t,n),o=t.listenProvider_.startListening(Sn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)q(!kt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!ae(u)&&d&&kt(d))return[Os(d).query];{let f=[];return d&&(f=f.concat(aa(d).map(h=>h.query))),Qe(c,(h,p)=>{f=f.concat(p)}),f}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Sn(d),Fn(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zi(n)}node(){return this.node_}}class $i{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new $i(this.syncTree_,n)}node(){return xi(this.syncTree_,this.path_)}}const sh=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},to=function(t,e,n){if(!t||typeof t!="object")return t;if(q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ih(t[".sv"],e,n);if(typeof t[".sv"]=="object")return rh(t[".sv"],e);q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ih=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:q(!1,"Unexpected server value: "+t)}},rh=function(t,e,n){t.hasOwnProperty("increment")||q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&q(!1,"Unexpected increment value: "+s);const i=e.node();if(q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},oh=function(t,e,n,s){return er(e,new $i(n,t),s)},ga=function(t,e,n){return er(t,new Zi(e),n)};function er(t,e,n){const s=t.getPriority().val(),i=to(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=to(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Fe(l,qe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Fe(i))),o.forEachChild(Oe,(l,a)=>{const u=er(a,e.getImmediateChild(l),n);u!==a&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function nr(t,e){let n=e instanceof Ce?e:new Ce(e),s=t,i=ue(n);for(;i!==null;){const r=rn(s.node.children,i)||{children:{},childCount:0};s=new tr(i,s,r),n=Se(n),i=ue(n)}return s}function _n(t){return t.node.value}function ba(t,e){t.node.value=e,gi(t)}function ya(t){return t.node.childCount>0}function lh(t){return _n(t)===void 0&&!ya(t)}function As(t,e){Qe(t.node.children,(n,s)=>{e(new tr(n,t,s))})}function va(t,e,n,s){n&&!s&&e(t),As(t,i=>{va(i,e,!0,s)}),n&&s&&e(t)}function ah(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Kn(t){return new Ce(t.parent===null?t.name:Kn(t.parent)+"/"+t.name)}function gi(t){t.parent!==null&&uh(t.parent,t.name,t)}function uh(t,e,n){const s=lh(n),i=at(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,gi(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gi(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=/[\[\].#$\/\u0000-\u001F\u007F]/,dh=/[\[\].#$\u0000-\u001F\u007F]/,Xs=10*1024*1024,wa=function(t){return typeof t=="string"&&t.length!==0&&!ch.test(t)},Ca=function(t){return typeof t=="string"&&t.length!==0&&!dh.test(t)},fh=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ca(t)},no=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Pi(t)||t&&typeof t=="object"&&at(t,".sv")},Ea=function(t,e,n,s){s&&e===void 0||sr(Ri(t,"value"),e,n)},sr=function(t,e,n){const s=n instanceof Ce?new Od(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Rt(s)+" with contents = "+e.toString());if(Pi(e))throw new Error(t+"contains "+e.toString()+" "+Rt(s));if(typeof e=="string"&&e.length>Xs/3&&Is(e)>Xs)throw new Error(t+"contains a string greater than "+Xs+" utf8 bytes "+Rt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Qe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!wa(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Rd(s,o),sr(t,l,s),Ad(s)}),i&&r)throw new Error(t+' contains ".value" child '+Rt(s)+" in addition to actual children.")}},Sa=function(t,e,n,s){if(!(s&&n===void 0)&&!Ca(n))throw new Error(Ri(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hh=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sa(t,e,n,s)},ir=function(t,e){if(ue(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_h=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wa(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!fh(n))throw new Error(Ri(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ka(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ql(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ot(t,e,n){ka(t,n),mh(t,s=>$e(s,e)||$e(e,s))}function mh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(gh(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gh(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Lt&&He("event: "+n.toString()),hn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="repo_interrupt",yh=25;class vh{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ph,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_s(),this.transactionQueueTree_=new tr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wh(t,e,n){if(t.stats_=Bi(t.repoInfo_),t.forceRestClient_||td())t.server_=new hs(t.repoInfo_,(s,i,r,o)=>{so(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>io(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new dt(t.repoInfo_,e,(s,i,r,o)=>{so(t,s,i,r,o)},s=>{io(t,s)},s=>{Ch(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=od(t.repoInfo_,()=>new sf(t.stats_,t.server_)),t.infoData_=new Zd,t.infoSyncTree_=new eo({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Gn(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),or(t,"connected",!1),t.serverSyncTree_=new eo({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const u=o(l,a);ot(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Ia(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rr(t){return sh({timestamp:Ia(t)})}function so(t,e,n,s,i){t.dataUpdateCount++;const r=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ls(n,u=>qe(u));o=Xf(t.serverSyncTree_,r,a,i)}else{const a=qe(n);o=ha(t.serverSyncTree_,r,a,i)}else if(s){const a=ls(n,u=>qe(u));o=Kf(t.serverSyncTree_,r,a)}else{const a=qe(n);o=Gn(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ms(t,r)),ot(t.eventQueue_,l,o)}function io(t,e){or(t,"connected",e),e===!1&&kh(t)}function Ch(t,e){Qe(e,(n,s)=>{or(t,n,s)})}function or(t,e,n){const s=new Ce("/.info/"+e),i=qe(n);t.infoData_.updateSnapshot(s,i);const r=Gn(t.infoSyncTree_,s,i);ot(t.eventQueue_,s,r)}function Ta(t){return t.nextWriteId_++}function Eh(t,e,n){const s=Zf(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=qe(i).withIndex(e._queryParams.getIndex());Jf(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Gn(t.serverSyncTree_,e._path,r);else{const l=Fn(t.serverSyncTree_,e);o=ha(t.serverSyncTree_,e._path,r,l)}return ot(t.eventQueue_,e._path,o),fa(t.serverSyncTree_,e,n,null,!0),r},i=>(Ps(t,"get for query "+Le(e)+" failed: "+i),Promise.reject(new Error(i))))}function Sh(t,e,n,s,i){Ps(t,"set",{path:e.toString(),value:n,priority:s});const r=rr(t),o=qe(n,s),l=xi(t.serverSyncTree_,e),a=ga(o,l,r),u=Ta(t),d=da(t.serverSyncTree_,e,a,u,!0);ka(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,h)=>{const p=f==="ok";p||Ke("set at "+e+" failed: "+f);const b=Pt(t.serverSyncTree_,u,!p);ot(t.eventQueue_,e,b),Th(t,i,f,h)});const c=Aa(t,e);Ms(t,c),ot(t.eventQueue_,c,[])}function kh(t){Ps(t,"onDisconnectEvents");const e=rr(t),n=_s();fi(t.onDisconnect_,me(),(i,r)=>{const o=oh(i,r,t.serverSyncTree_,e);Ql(n,i,o)});let s=[];fi(n,me(),(i,r)=>{s=s.concat(Gn(t.serverSyncTree_,i,r));const o=Aa(t,i);Ms(t,o)}),t.onDisconnect_=_s(),ot(t.eventQueue_,me(),s)}function Ih(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bh)}function Ps(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function Th(t,e,n,s){e&&hn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Na(t,e,n){return xi(t.serverSyncTree_,e,n)||se.EMPTY_NODE}function lr(t,e=t.transactionQueueTree_){if(e||Ls(t,e),_n(e)){const n=Oa(t,e);q(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Nh(t,Kn(e),n)}else ya(e)&&As(e,n=>{lr(t,n)})}function Nh(t,e,n){const s=n.map(u=>u.currentWriteId),i=Na(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];q(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=je(e,d.path);r=r.updateChild(c,d.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ps(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Pt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ls(t,nr(t.transactionQueueTree_,e)),lr(t,t.transactionQueueTree_),ot(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)hn(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Ke("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ms(t,e)}},o)}function Ms(t,e){const n=Da(t,e),s=Kn(n),i=Oa(t,n);return Dh(t,i,s),s}function Dh(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=je(n,a.path);let d=!1,c;if(q(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Pt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=yh)d=!0,c="maxretry",i=i.concat(Pt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Na(t,a.path,o);a.currentInputSnapshot=f;const h=e[l].update(f.val());if(h!==void 0){sr("transaction failed: Data returned ",h,a.path);let p=qe(h);typeof h=="object"&&h!=null&&at(h,".priority")||(p=p.updatePriority(f.getPriority()));const v=a.currentWriteId,y=rr(t),T=ga(p,f,y);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=T,a.currentWriteId=Ta(t),o.splice(o.indexOf(v),1),i=i.concat(da(t.serverSyncTree_,a.path,T,a.currentWriteId,a.applyLocally)),i=i.concat(Pt(t.serverSyncTree_,v,!0))}else d=!0,c="nodata",i=i.concat(Pt(t.serverSyncTree_,a.currentWriteId,!0))}ot(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(c),!1,null))))}Ls(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)hn(s[l]);lr(t,t.transactionQueueTree_)}function Da(t,e){let n,s=t.transactionQueueTree_;for(n=ue(e);n!==null&&_n(s)===void 0;)s=nr(s,n),e=Se(e),n=ue(e);return s}function Oa(t,e){const n=[];return Ra(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ra(t,e,n){const s=_n(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);As(e,i=>{Ra(t,i,n)})}function Ls(t,e){const n=_n(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ba(e,n.length>0?n:void 0)}As(e,s=>{Ls(t,s)})}function Aa(t,e){const n=Kn(Da(t,e)),s=nr(t.transactionQueueTree_,e);return ah(s,i=>{Js(t,i)}),Js(t,s),va(s,i=>{Js(t,i)}),n}function Js(t,e){const n=_n(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(q(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Pt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ba(e,void 0):n.length=r+1,ot(t.eventQueue_,Kn(e),i);for(let o=0;o<s.length;o++)hn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Rh(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const ro=function(t,e){const n=Ah(t),s=n.namespace;n.domain==="firebase.com"&&ht(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Yc();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Tl(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ce(n.pathString)}},Ah=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Oh(t.substring(d,c)));const f=Rh(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const h=e.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ph=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=oo.charAt(n%64),n=Math.floor(n/64);q(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=oo.charAt(e[i]);return q(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Le(this.snapshot.exportVal())}}class Lh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return q(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Bs{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ae(this._path)?null:Bl(this._path)}get ref(){return new pt(this._repo,this._path)}get _queryIdentifier(){const e=jr(this._queryParams),n=Mi(e);return n==="{}"?"default":n}get _queryObject(){return jr(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof Bs))return!1;const n=this._repo===e._repo,s=ql(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Dd(this._path)}}function Fh(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Wh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===bt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==zt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Ct)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Oe){if(e!=null&&!no(e)||n!=null&&!no(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(q(t.getIndex()instanceof Yl||t.getIndex()===Kl,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class pt extends Bs{constructor(e,n){super(e,n,new Hi,!1)}get parent(){const e=Wl(this._path);return e===null?null:new pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ce(e),s=_t(this.ref,e);return new Wn(this._node.getChild(n),s,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Wn(i,_t(this.ref,s),Oe)))}hasChild(e){const n=new Ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function an(t,e){return t=Tt(t),t._checkNotDeleted("ref"),e!==void 0?_t(t._root,e):t._root}function _t(t,e){return t=Tt(t),ue(t._path)===null?hh("child","path",e,!1):Sa("child","path",e,!1),new pt(t._repo,Be(t._path,e))}function qh(t,e){t=Tt(t),ir("push",t._path),Ea("push",e,t._path,!0);const n=Ia(t._repo),s=Ph(n),i=_t(t,s),r=_t(t,s);let o;return e!=null?o=Fs(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function zh(t){return ir("remove",t._path),Fs(t,null)}function Fs(t,e){t=Tt(t),ir("set",t._path),Ea("set",e,t._path,!1);const n=new ks;return Sh(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Pa(t){t=Tt(t);const e=new Bh(()=>{}),n=new ar(e);return Eh(t._repo,t,n).then(s=>new Wn(s,new pt(t._repo,t._path),t._queryParams.getIndex()))}class ar{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Mh("value",this,new Wn(e.snapshotNode,new pt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lh(this,e,n):null}matches(e){return e instanceof ar?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Hh{}class Uh extends Hh{_apply(e){Fh(e,"orderByKey");const n=Jd(e._queryParams,bt);return Wh(n),new Bs(e._repo,e._path,n,!0)}}function Ma(){return new Uh}function La(t,...e){let n=Tt(t);for(const s of e)n=s._apply(n);return n}qf(pt);Vf(pt);/**
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
 */const jh="FIREBASE_DATABASE_EMULATOR_HOST",bi={};let Vh=!1;function Gh(t,e,n,s){t.repoInfo_=new Tl(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Yh(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ro(r,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[jh]),u?(a=!0,r=`http://${u}?ns=${l.namespace}`,o=ro(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new sn(sn.OWNER):new sd(t.name,t.options,e);_h("Invalid Firebase Database URL",o),ae(o.path)||ht("Database URL must point to the root of a Firebase Database (not including a child path).");const c=xh(l,t,d,new nd(t.name,n));return new Qh(c,t)}function Kh(t,e){const n=bi[e];(!n||n[t.key]!==t)&&ht(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ih(t),delete n[t.key]}function xh(t,e,n,s){let i=bi[e.name];i||(i={},bi[e.name]=i);let r=i[t.toURLString()];return r&&ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vh(t,Vh,n,s),i[t.toURLString()]=r,r}class Qh{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pt(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Kh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ht("Cannot call "+e+" on a deleted database.")}}function Xh(t=Dc(),e){const n=kc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=gu("database");s&&Jh(n,...s)}return n}function Jh(t,e,n,s={}){t=Tt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ht("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new sn(sn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:bu(s.mockUserToken,t.app.options.projectId);r=new sn(o)}Gh(i,e,n,r)}/**
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
 */function Zh(t){Hc(Nc),us(new Dn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Yh(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tn(Ir,Tr,t),tn(Ir,Tr,"esm2017")}dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Zh();const $h={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};let yi={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},vi=["head","body","legs","feet","neck","back","ring","misc"],ur={name:"",stats:{armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0},image:"",link:""},cr={name:"",info:{type:"",special:""},moves:[],image:"",link:""},qn=[...Array(5).keys()].map(t=>++t),un=Xh(cl($h));function Ba(t,e){let n=!1;for(let s of[t,e])for(let i in s)if(s[i].name){n=!0;break}Xo.set(n),Xe.set(null),window.history.replaceState(null,null,location.origin+location.pathname)}function dr(t,e){let n=2.8,s=e.split(" ").length,i=t.querySelector("span");if(i.style.removeProperty("font-size"),s>2&&e.length/s>=5){for(;i.offsetHeight>t.offsetHeight*.75;)n-=.05,i.style.fontSize=`calc(var(--u) * ${n})`;return n<2.8}return null}function e_(t,e){let n=2.8,s=t.querySelector("span");for(s.style.removeProperty("font-size");s.offsetWidth>t.offsetWidth;)n-=.05,s.style.fontSize=`calc(var(--u) * ${n})`;for(;s.offsetHeight>t.offsetHeight*.75&&e;)console.log("C"),n-=.05,s.style.fontSize=`calc(var(--u) * ${n})`;return n<2.8?n:null}function t_(t){let e=2.35,n=t.querySelector(".tooltip");for(n.style.removeProperty("font-size");n.offsetHeight>t.offsetHeight*1.125;)e-=.02,n.style.fontSize=`calc(var(--u) * ${e})`}function n_(t){document.activeElement==document.body&&t.key=="Tab"&&(t.preventDefault(),document.querySelector(`.promptCont [id*='${t.shiftKey?"last":"first"}Focusable']`).focus())}function Fa(t,e){let n=t.toLowerCase();for(let s in e)s.toLowerCase().includes(n)?e[s].classList.remove("hidden"):e[s].classList.add("hidden")}function Cs(t,e){e&&setTimeout(()=>{t.focus(),t.click(),t.select()})}function Gt(t){t.shiftKey&&t.key=="Tab"&&t.preventDefault()}function pn(t){t.key=="Tab"&&!t.shiftKey&&t.preventDefault()}function Es(t,e){let n=/[^a-zA-Z0-9~!#$%^&*()\-_+[\]{}\\|;:'",.<>/? ]/g;return t.replace(n,"").replaceAll(`
`,"").replace(/^ /,"").slice(0,e)}function wi(t,e,n){(!t.maxLength||t.maxLength!=n)&&e.length>=n&&(t.maxLength=n)}function Wa(t,e){t={...t},e={...e};for(let n of vi)t[n]?t[n]=t[n].name:t[n]="";for(let n of qn)e[n]?e[n]=e[n].name:e[n]="";return{eq:t,gear:e}}function s_(t){let e,n,s,i,r,o,l,a;return{c(){e=g("li"),n=g("button"),s=g("img"),r=F(),o=g("span"),o.textContent=`${t[3]}`,Je(s.src,i=t[0].image)||m(s,"src",i),m(s,"alt",""),J(e,"selectedItem",t[2])},m(u,d){H(u,e,d),_(e,n),_(n,s),_(n,r),_(n,o),t[8](e),l||(a=[Uo(t[4].call(null,o)),N(n,"click",t[5])],l=!0)},p(u,[d]){d&1&&!Je(s.src,i=u[0].image)&&m(s,"src",i),d&4&&J(e,"selectedItem",u[2])},i:Q,o:Q,d(u){u&&W(e),t[8](null),l=!1,ge(a)}}}function i_(t,e,n){let s,i,r,o;x(t,Xt,y=>n(9,s=y)),x(t,ft,y=>n(10,i=y)),x(t,wt,y=>n(11,r=y)),x(t,Di,y=>n(12,o=y));let{itemData:l,slotOpen:a,eqSlotName:u}=e;const d=It();let c,f=!1,h=l.name;function p(y){setTimeout(()=>{dr(c,h)&&o.push({node:c,itemName:h})})}function b(y){if(a||!a&&y.isTrusted==!1){d("itemSelect",{element:c,trusted:y.isTrusted}),c.classList.contains("selectedItem")||n(2,f=!1),n(2,f=!f),n(6,a=!1),G(ft,i[u]=f?l:ur,i),Ba(i,r);for(let T of Object.keys(yi)){G(Xt,s[T]=0,s);for(let w in i)G(Xt,s[T]+=i[w].stats[T],s),G(Xt,s[T]=Math.round(s[T]*10)/10,s)}}}function v(y){Z[y?"unshift":"push"](()=>{c=y,n(1,c)})}return t.$$set=y=>{"itemData"in y&&n(0,l=y.itemData),"slotOpen"in y&&n(6,a=y.slotOpen),"eqSlotName"in y&&n(7,u=y.eqSlotName)},[l,c,f,h,p,b,a,u,v]}class r_ extends Ne{constructor(e){super(),Te(this,e,i_,s_,ce,{itemData:0,slotOpen:6,eqSlotName:7})}}function o_(t){let e,n,s,i,r,o,l,a,u;return{c(){e=g("li"),n=g("button"),s=g("img"),r=F(),o=g("span"),o.textContent=`${t[4]}`,Je(s.src,i=t[0].image)||m(s,"src",i),m(s,"alt",""),n.disabled=l=!t[3],J(e,"selectedItem",t[2]),J(e,"non-eligible",!t[3])},m(d,c){H(d,e,c),_(e,n),_(n,s),_(n,r),_(n,o),t[11](e),a||(u=[Uo(t[5].call(null,o)),N(n,"click",t[6])],a=!0)},p(d,[c]){c&1&&!Je(s.src,i=d[0].image)&&m(s,"src",i),c&8&&l!==(l=!d[3])&&(n.disabled=l),c&4&&J(e,"selectedItem",d[2]),c&8&&J(e,"non-eligible",!d[3])},i:Q,o:Q,d(d){d&&W(e),t[11](null),a=!1,ge(u)}}}function l_(t,e,n){let s,i,r;x(t,wt,w=>n(10,s=w)),x(t,ft,w=>n(12,i=w)),x(t,Di,w=>n(13,r=w));let{itemData:o,slotOpen:l,index:a,weaponExpand:u}=e;const d=It();let c,f=!1,h=!0,p=o.name,b={"Orange Salamander":["Green Salamander","Purple Salamander"],"Green Salamander":["Orange Salamander","Purple Salamander"],"Purple Salamander":["Orange Salamander","Green Salamander"],"White Salamander":["Black Salamander","Gold Salamander"],"Black Salamander":["White Salamander","Gold Salamander"],"Gold Salamander":["White Salamander","Black Salamander"]};function v(w){setTimeout(()=>{dr(c,p)&&r.push({node:c,itemName:p})})}function y(w){h&&(l||!l&&w.isTrusted==!1)&&(d("itemSelect",{element:c,trusted:w.isTrusted}),c.classList.contains("selectedItem")||n(2,f=!1),n(2,f=!f),n(7,l=!1),G(wt,s[a]=f?o:cr,s),Ba(i,s))}function T(w){Z[w?"unshift":"push"](()=>{c=w,n(1,c)})}return t.$$set=w=>{"itemData"in w&&n(0,o=w.itemData),"slotOpen"in w&&n(7,l=w.slotOpen),"index"in w&&n(8,a=w.index),"weaponExpand"in w&&n(9,u=w.weaponExpand)},t.$$.update=()=>{if(t.$$.dirty&1793&&s)for(let w in s)if(w!=a&&(s[w].name==p||b[s[w].name]&&b[s[w].name].includes(p))){n(3,h=!1);break}else!u&&!o.tool&&n(3,h=!0);if(t.$$.dirty&1793){if(u)o.tool&&n(3,h=!1);else if(o.tool)for(let w in s)if(w!=a&&s[w].name==p){n(3,h=!1);break}else n(3,h=!0)}},[o,c,f,h,p,v,y,l,a,u,s,T]}class a_ extends Ne{constructor(e){super(),Te(this,e,l_,o_,ce,{itemData:0,slotOpen:7,index:8,weaponExpand:9})}}function u_(t){const e=t-1;return e*e*e+1}function Ue(t,{delay:e=0,duration:n=400,easing:s=Ss}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function lt(t,{delay:e=0,duration:n=400,easing:s=u_,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),l=+o.opacity,a=o.transform==="none"?"":o.transform,u=1-i,d=l*(1-r);return{delay:e,duration:n,easing:s,css:(c,f)=>`
			transform: ${a} scale(${1-u*f});
			opacity: ${l-d*f}
		`}}function lo(t){let e,n,s,i;return{c(){e=g("img"),Je(e.src,n=t[5][t[3]])||m(e,"src",n),m(e,"alt","")},m(r,o){H(r,e,o),i=!0},p(r,o){(!i||o&8&&!Je(e.src,n=r[5][r[3]]))&&m(e,"src",n)},i(r){i||(r&&be(()=>{i&&(s||(s=Re(e,Ue,{duration:150},!0)),s.run(1))}),i=!0)},o(r){r&&(s||(s=Re(e,Ue,{duration:150},!1)),s.run(0)),i=!1},d(r){r&&W(e),r&&s&&s.end()}}}function c_(t){let e,n,s=t[5][t[3]],i,r,o=t[0].name+"",l,a,u,d=lo(t);return{c(){e=g("li"),n=g("button"),d.c(),i=F(),r=g("span"),l=te(o),J(e,"selectedItem",t[4])},m(c,f){H(c,e,f),_(e,n),d.m(n,null),_(n,i),_(n,r),_(r,l),t[8](e),a||(u=[N(n,"click",t[6]),N(e,"mouseenter",t[9]),N(e,"focusin",t[10]),N(e,"mouseleave",t[11]),N(e,"focusout",t[12])],a=!0)},p(c,[f]){f&8&&ce(s,s=c[5][c[3]])?(Pe(),j(d,1,1,Q),Me(),d=lo(c),d.c(),z(d,1),d.m(n,i)):d.p(c,f),f&1&&o!==(o=c[0].name+"")&&ke(l,o)},i(c){z(d)},o(c){j(d)},d(c){c&&W(e),d.d(c),t[8](null),a=!1,ge(u)}}}function d_(t,e,n){let s,i,r;x(t,Tn,D=>n(15,s=D)),x(t,ft,D=>n(16,i=D)),x(t,ei,D=>n(17,r=D));let{itemData:o,ddOpen:l=!1}=e,a,u=!1,d=!1,c,f=0,h=o.pieces.length,p=["head","body","legs","feet"];p=h==2?p.slice(1,3):h==3?p.slice(0,3):p;let b=[];for(let D=0;D<h;D++)b.push(r[p[D]].find(U=>U.name==o.pieces[D]).image);function v(){d?c=setInterval(()=>{n(3,f++,f),f==h&&n(3,f=0)},750):(clearInterval(c),n(3,f=0))}function y(){let D=0;for(let U=0;U<h;U++)!i[p[U]]||i[p[U]].name!=o.pieces[U]?s[p[U]][o.pieces[U]].querySelector("button").click():D++;D!=h&&n(7,l=!1)}function T(D){Z[D?"unshift":"push"](()=>{a=D,n(2,a)})}const w=()=>n(1,d=!0),I=()=>n(1,d=!0),C=()=>n(1,d=!1),O=()=>n(1,d=!1);return t.$$set=D=>{"itemData"in D&&n(0,o=D.itemData),"ddOpen"in D&&n(7,l=D.ddOpen)},t.$$.update=()=>{t.$$.dirty&2&&(d||!d)&&v()},[o,d,a,f,u,b,y,l,T,w,I,C,O]}class f_ extends Ne{constructor(e){super(),Te(this,e,d_,c_,ce,{itemData:0,ddOpen:7})}}function ao(t,e,n){const s=t.slice();return s[36]=e[n],s}function h_(t){return{c:Q,m:Q,p:Q,i:Q,o:Q,d:Q}}function __(t){let e,n,s,i,r,o,l=xe(t[35]),a=[];for(let d=0;d<l.length;d+=1)a[d]=uo(ao(t,l,d));const u=d=>j(a[d],1,1,()=>{a[d]=null});return{c(){e=g("input"),n=F(),s=g("ul");for(let d=0;d<a.length;d+=1)a[d].c();m(e,"type","text"),m(e,"class","searchBarInput"),m(e,"placeholder","Search..."),J(s,"no-scrollbar",t[8].length<=4)},m(d,c){H(d,e,c),t[19](e),H(d,n,c),H(d,s,c);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(s,null);t[24](s),i=!0,r||(o=[N(e,"keydown",t[11]),N(e,"input",t[12])],r=!0)},p(d,c){if(c[0]&9743){l=xe(d[35]);let f;for(f=0;f<l.length;f+=1){const h=ao(d,l,f);a[f]?(a[f].p(h,c),z(a[f],1)):(a[f]=uo(h),a[f].c(),z(a[f],1),a[f].m(s,null))}for(Pe(),f=l.length;f<a.length;f+=1)u(f);Me()}(!i||c[0]&256)&&J(s,"no-scrollbar",d[8].length<=4)},i(d){if(!i){for(let c=0;c<l.length;c+=1)z(a[c]);i=!0}},o(d){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)j(a[c]);i=!1},d(d){d&&(W(e),W(n),W(s)),t[19](null),jt(a,d),t[24](null),r=!1,ge(o)}}}function p_(t){let e,n,s;function i(o){t[23](o)}let r={itemData:t[36],eqSlotName:t[2]};return t[0]!==void 0&&(r.slotOpen=t[0]),e=new r_({props:r}),Z.push(()=>we(e,"slotOpen",i)),e.$on("itemSelect",t[13]),{c(){pe(e.$$.fragment)},m(o,l){fe(e,o,l),s=!0},p(o,l){const a={};l[0]&516&&(a.itemData=o[36]),l[0]&4&&(a.eqSlotName=o[2]),!n&&l[0]&1&&(n=!0,a.slotOpen=o[0],ve(()=>n=!1)),e.$set(a)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){j(e.$$.fragment,o),s=!1},d(o){he(e,o)}}}function m_(t){let e,n,s;function i(o){t[22](o)}let r={itemData:t[36]};return t[0]!==void 0&&(r.ddOpen=t[0]),e=new f_({props:r}),Z.push(()=>we(e,"ddOpen",i)),{c(){pe(e.$$.fragment)},m(o,l){fe(e,o,l),s=!0},p(o,l){const a={};l[0]&516&&(a.itemData=o[36]),!n&&l[0]&1&&(n=!0,a.ddOpen=o[0],ve(()=>n=!1)),e.$set(a)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){j(e.$$.fragment,o),s=!1},d(o){he(e,o)}}}function g_(t){let e,n,s,i;function r(a){t[20](a)}function o(a){t[21](a)}let l={itemData:t[36],index:t[3]};return t[0]!==void 0&&(l.slotOpen=t[0]),t[1]!==void 0&&(l.weaponExpand=t[1]),e=new a_({props:l}),Z.push(()=>we(e,"slotOpen",r)),Z.push(()=>we(e,"weaponExpand",o)),e.$on("itemSelect",t[13]),{c(){pe(e.$$.fragment)},m(a,u){fe(e,a,u),i=!0},p(a,u){const d={};u[0]&516&&(d.itemData=a[36]),u[0]&8&&(d.index=a[3]),!n&&u[0]&1&&(n=!0,d.slotOpen=a[0],ve(()=>n=!1)),!s&&u[0]&2&&(s=!0,d.weaponExpand=a[1],ve(()=>s=!1)),e.$set(d)},i(a){i||(z(e.$$.fragment,a),i=!0)},o(a){j(e.$$.fragment,a),i=!1},d(a){he(e,a)}}}function uo(t){let e,n,s,i;const r=[g_,m_,p_],o=[];function l(a,u){return a[3]?0:a[2]=="builds"?1:2}return e=l(t),n=o[e]=r[e](t),{c(){n.c(),s=Bt()},m(a,u){o[e].m(a,u),H(a,s,u),i=!0},p(a,u){let d=e;e=l(a),e===d?o[e].p(a,u):(Pe(),j(o[d],1,1,()=>{o[d]=null}),Me(),n=o[e],n?n.p(a,u):(n=o[e]=r[e](a),n.c()),z(n,1),n.m(s.parentNode,s))},i(a){i||(z(n),i=!0)},o(a){j(n),i=!1},d(a){a&&W(s),o[e].d(a)}}}function b_(t){let e;return{c(){e=g("span"),e.textContent="Loading items...",m(e,"class","svelte-o6g1ik")},m(n,s){H(n,e,s)},p:Q,i:Q,o:Q,d(n){n&&W(e)}}}function y_(t){let e,n,s,i,r,o={ctx:t,current:null,token:null,hasCatch:!1,pending:b_,then:__,catch:h_,value:35,blocks:[,,,]};return pr(n=t[10]||t[9][t[2]],o),{c(){e=g("div"),o.block.c(),m(e,"class","dropdown svelte-o6g1ik")},m(l,a){H(l,e,a),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,s=!0,i||(r=[N(e,"transitionend",t[25]),N(e,"transitioncancel",t[26])],i=!0)},p(l,a){t=l,o.ctx=t,a[0]&516&&n!==(n=t[10]||t[9][t[2]])&&pr(n,o)||iu(o,t,a)},i(l){s||(z(o.block),s=!0)},o(l){for(let a=0;a<3;a+=1){const u=o.blocks[a];j(u)}s=!1},d(l){l&&W(e),o.block.d(),o.token=null,o=null,i=!1,ge(r)}}}function v_(t,e,n){let s,i,r,o,l;x(t,Tn,k=>n(16,i=k)),x(t,lu,k=>n(17,r=k)),x(t,rs,k=>n(18,o=k)),x(t,ei,k=>n(9,l=k));let{slotName:a,index:u,slotOpen:d,weaponExpand:c}=e;const f=It();u?G(rs,o[u]={},o):G(Tn,i[a]={},i);let h,p,b,v=null,y=!1,T=`https://raw.githubusercontent.com/XT8SS/fc-sv/gh-pages/ff-data/${a}.json`,w=l[a]||null,I=!1,C=[];const O=l[a]?null:fetch(T).then(async k=>{if(k.status!=200){console.error(`Failed to fetch ${(u?"weapon #":"")+a} slot data from ${T}
Response status: ${k.status}`);return}return n(15,w=await k.json()),G(ei,l[a]=w,l),w}).catch(k=>{console.error(`Failed to initiate ${(u?"weapon #":"")+a} slot data fetch from ${T}
${k}`)});function D(){b&&b.classList.remove("lastElement"),n(8,C=p.querySelectorAll("li:not(.hidden)")),b=C[C.length-1],b&&b.classList.add("lastElement"),(!b||b.classList.contains("non-eligible"))&&(b=h)}function U(k){!k.shiftKey&&k.key=="Tab"&&(k.preventDefault(),setTimeout(()=>h.focus()))}function ne(){b&&b.removeEventListener("keydown",U),D(),b&&b.addEventListener("keydown",U)}function P(k){k.shiftKey&&k.key=="Tab"&&(k.preventDefault(),setTimeout(()=>(b.querySelector("button")||b).focus()))}function M(){Fa(h.value,s),ne()}function R(k){f("itemSelect",k.detail.element),n(6,v=k.detail.element),y=k.detail.trusted;let B=p.querySelector(".selectedItem");B&&B!=k.detail.element&&B.classList.remove("selectedItem"),n(7,I=!0),y||(y=!1,K(),p.scrollTo(0,v.offsetTop))}function K(){n(7,I=!1),n(5,h.value="",h),M()}function Y(k){Z[k?"unshift":"push"](()=>{h=k,n(5,h)})}function S(k){d=k,n(0,d)}function $(k){c=k,n(1,c)}function re(k){d=k,n(0,d)}function A(k){d=k,n(0,d)}function V(k){Z[k?"unshift":"push"](()=>{p=k,n(4,p)})}const de=k=>{k.propertyName=="visibility"&&(!d&&v&&p.scrollTo(0,v.offsetTop),I&&K(),Cs(h,d))},L=k=>{k.propertyName=="visibility"&&(n(7,I=!1),Cs(h,d))};return t.$$set=k=>{"slotName"in k&&n(2,a=k.slotName),"index"in k&&n(3,u=k.index),"slotOpen"in k&&n(0,d=k.slotOpen),"weaponExpand"in k&&n(1,c=k.weaponExpand)},t.$$.update=()=>{if(t.$$.dirty[0]&458764&&(s=u?o[u]:a=="builds"?r:i[a]),t.$$.dirty[0]&32784&&p){n(8,C=p.querySelectorAll("li:not(.hidden)"));for(let k=0;k<p.childElementCount;k++)s[w[k].name]=p.children[k];D(),ne()}},[d,c,a,u,p,h,v,I,C,l,O,P,M,R,K,w,i,r,o,Y,S,$,re,A,V,de,L]}class fr extends Ne{constructor(e){super(),Te(this,e,v_,y_,ce,{slotName:2,index:3,slotOpen:0,weaponExpand:1},null,[-1,-1])}}function co(t){let e,n,s,i,r,o,l=t[1].name+"",a,u,d,c,f,h;return{c(){e=g("a"),n=g("img"),r=F(),o=g("span"),a=te(l),Je(n.src,s=t[1].image)||m(n,"src",s),m(n,"alt",i=t[1].name),m(n,"draggable","false"),m(n,"class","svelte-1j6yuis"),m(o,"class","tooltip"),m(o,"id","left"),m(e,"href",u=t[1].link),m(e,"target","_blank"),m(e,"class","svelte-1j6yuis"),De(e,"display",t[1].link?"":"none")},m(p,b){H(p,e,b),_(e,n),_(e,r),_(e,o),_(o,a),c=!0,f||(h=[N(e,"focusin",t[11]),N(e,"outroend",t[12])],f=!0)},p(p,b){(!c||b&2&&!Je(n.src,s=p[1].image))&&m(n,"src",s),(!c||b&2&&i!==(i=p[1].name))&&m(n,"alt",i),(!c||b&2)&&l!==(l=p[1].name+"")&&ke(a,l),(!c||b&2&&u!==(u=p[1].link))&&m(e,"href",u),b&2&&De(e,"display",p[1].link?"":"none")},i(p){c||(p&&be(()=>{c&&(d||(d=Re(e,Ue,{duration:150},!0)),d.run(1))}),c=!0)},o(p){p&&(d||(d=Re(e,Ue,{duration:150},!1)),d.run(0)),c=!1},d(p){p&&W(e),p&&d&&d.end(),f=!1,ge(h)}}}function w_(t){let e,n,s=t[1],i,r,o,l=t[0].charAt(0).toUpperCase()+t[0].slice(1)+"",a,u,d,c,f,h,p,b,v,y,T,w=co(t);function I(O){t[17](O)}let C={slotName:t[0],index:null,weaponExpand:null};return t[5]!==void 0&&(C.slotOpen=t[5]),p=new fr({props:C}),Z.push(()=>we(p,"slotOpen",I)),p.$on("itemSelect",t[18]),{c(){e=g("div"),n=g("div"),w.c(),r=F(),o=g("button"),a=te(l),u=F(),d=g("iconify-icon"),c=F(),f=g("button"),f.innerHTML='<iconify-icon icon="maki:cross" class="svelte-1j6yuis"></iconify-icon> <span class="tooltip" id="top">Clear selection</span>',h=F(),pe(p.$$.fragment),m(n,"class","eqSlotIcon ff-border svelte-1j6yuis"),be(()=>t[14].call(n)),De(n,"min-width",`${t[4]}px`),Ft(d,"icon","iconamoon:arrow-down-2-fill"),Ft(d,"class","svelte-1j6yuis"),m(o,"class","ddButton svelte-1j6yuis"),m(f,"class","clearButton svelte-1j6yuis"),m(e,"class","eqSlotCont svelte-1j6yuis"),J(e,"slotOpen",t[5]),J(e,"clearAllowed",t[6]&&t[7])},m(O,D){H(O,e,D),_(e,n),w.m(n,null),t[13](n),i=rt(n,t[14].bind(n)),_(e,r),_(e,o),_(o,a),_(o,u),_(o,d),_(e,c),_(e,f),_(e,h),fe(p,e,null),t[19](e),v=!0,y||(T=[N(window,"mousedown",t[9]),N(window,"keydown",t[10]),N(o,"click",t[15]),N(f,"click",t[16]),N(e,"keydown",t[20]),N(e,"mouseenter",t[21]),N(e,"mouseleave",t[22])],y=!0)},p(O,[D]){D&2&&ce(s,s=O[1])?(Pe(),j(w,1,1,Q),Me(),w=co(O),w.c(),z(w,1),w.m(n,null)):w.p(O,D),D&16&&De(n,"min-width",`${O[4]}px`),(!v||D&1)&&l!==(l=O[0].charAt(0).toUpperCase()+O[0].slice(1)+"")&&ke(a,l);const U={};D&1&&(U.slotName=O[0]),!b&&D&32&&(b=!0,U.slotOpen=O[5],ve(()=>b=!1)),p.$set(U),(!v||D&32)&&J(e,"slotOpen",O[5]),(!v||D&192)&&J(e,"clearAllowed",O[6]&&O[7])},i(O){v||(z(w),z(p.$$.fragment,O),v=!0)},o(O){j(w),j(p.$$.fragment,O),v=!1},d(O){O&&W(e),w.d(O),t[13](null),i(),he(p),t[19](null),y=!1,ge(T)}}}function C_(t,e,n){let s;x(t,ft,P=>n(8,s=P));let{eqSlotName:i}=e,r,o,l,a=ur,u,d,c;const f=P=>{(!r.contains(P.target)||P.target==r||P.target==o)&&(n(5,u=!1),P.target!=r&&P.target!=o&&n(6,d=!1))},h=P=>{P.key=="Tab"&&setTimeout(()=>{n(6,d=r.contains(document.activeElement))})},p=P=>{P.relatedTarget==null&&n(6,d=!0)},b=()=>{setTimeout(()=>{t_(o)})};function v(P){Z[P?"unshift":"push"](()=>{o=P,n(3,o)})}function y(){l=this.offsetHeight,n(4,l)}const T=()=>n(5,u=!u),w=()=>{n(6,d=!1),r.classList.contains("clearAllowed")&&c.querySelector("button").click()};function I(P){u=P,n(5,u)}const C=P=>{setTimeout(()=>{n(7,c=P.detail.classList.contains("selectedItem")?P.detail:null)})};function O(P){Z[P?"unshift":"push"](()=>{r=P,n(2,r)})}const D=P=>{P.key=="Escape"&&n(5,u=!1)},U=()=>n(6,d=!0),ne=()=>{r.contains(document.activeElement)||n(6,d=!1)};return t.$$set=P=>{"eqSlotName"in P&&n(0,i=P.eqSlotName)},t.$$.update=()=>{t.$$.dirty&259&&s[i]&&s[i].name!=a.name&&n(1,a=s[i])},[i,a,r,o,l,u,d,c,s,f,h,p,b,v,y,T,w,I,C,O,D,U,ne]}class E_ extends Ne{constructor(e){super(),Te(this,e,C_,w_,ce,{eqSlotName:0})}}function fo(t,e,n){const s=t.slice();return s[1]=e[n],s[2]=e,s[3]=n,s}function ho(t){let e,n,s;function i(o){t[0](o,t[1],t[2],t[3])}let r={};return t[1]!==void 0&&(r.eqSlotName=t[1]),e=new E_({props:r}),Z.push(()=>we(e,"eqSlotName",i)),{c(){pe(e.$$.fragment)},m(o,l){fe(e,o,l),s=!0},p(o,l){t=o;const a={};!n&&l&0&&(n=!0,a.eqSlotName=t[1],ve(()=>n=!1)),e.$set(a)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){j(e.$$.fragment,o),s=!1},d(o){he(e,o)}}}function S_(t){let e,n,s=xe(Array(...vi)),i=[];for(let o=0;o<s.length;o+=1)i[o]=ho(fo(t,s,o));const r=o=>j(i[o],1,1,()=>{i[o]=null});return{c(){e=g("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","armorBox svelte-3p4tb9")},m(o,l){H(o,e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null);n=!0},p(o,[l]){if(l&0){s=xe(Array(...vi));let a;for(a=0;a<s.length;a+=1){const u=fo(o,s,a);i[a]?(i[a].p(u,l),z(i[a],1)):(i[a]=ho(u),i[a].c(),z(i[a],1),i[a].m(e,null))}for(Pe(),a=s.length;a<i.length;a+=1)r(a);Me()}},i(o){if(!n){for(let l=0;l<s.length;l+=1)z(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)j(i[l]);n=!1},d(o){o&&W(e),jt(i,o)}}}function k_(t,e,n){function s(i,r,o,l){o[l]=i}return[s]}class I_ extends Ne{constructor(e){super(),Te(this,e,k_,S_,ce,{})}}function T_(t){let e,n=(t[5]?`${Math.floor(t[2][t[0]]*.675+19.8)}% Reduction`:t[6])+"",s,i,r,o;return{c(){e=g("span"),s=te(n),m(e,"class","statValue svelte-16tz2kw"),m(e,"tabindex","0"),m(e,"style",i=t[5]?`font-size: ${t[3]*.7/6.85}px;`:""),J(e,"hidden",t[4]),J(e,"negative",t[6]<0),J(e,"reduction",t[5])},m(l,a){H(l,e,a),_(e,s),r||(o=[N(e,"mouseenter",t[10]),N(e,"mouseleave",t[11]),N(e,"focusin",t[12]),N(e,"focusout",t[13])],r=!0)},p(l,a){a&101&&n!==(n=(l[5]?`${Math.floor(l[2][l[0]]*.675+19.8)}% Reduction`:l[6])+"")&&ke(s,n),a&40&&i!==(i=l[5]?`font-size: ${l[3]*.7/6.85}px;`:"")&&m(e,"style",i),a&16&&J(e,"hidden",l[4]),a&64&&J(e,"negative",l[6]<0),a&32&&J(e,"reduction",l[5])},d(l){l&&W(e),r=!1,ge(o)}}}function N_(t){let e,n=(t[0]!="endurance"?t[6]:t[6].toFixed(2))+"",s;return{c(){e=g("span"),s=te(n),m(e,"class","statValue svelte-16tz2kw"),J(e,"hidden",t[4]),J(e,"negative",t[6]<0)},m(i,r){H(i,e,r),_(e,s)},p(i,r){r&65&&n!==(n=(i[0]!="endurance"?i[6]:i[6].toFixed(2))+"")&&ke(s,n),r&16&&J(e,"hidden",i[4]),r&64&&J(e,"negative",i[6]<0)},d(i){i&&W(e)}}}function _o(t){let e,n=`${t[1]} Bonus`,s;return{c(){e=g("span"),s=te(n),De(e,"font-size",`${t[3]*.7/t[7][t[0]]}px`)},m(i,r){H(i,e,r),_(e,s)},p(i,r){r&2&&n!==(n=`${i[1]} Bonus`)&&ke(s,n),r&9&&De(e,"font-size",`${i[3]*.7/i[7][i[0]]}px`)},d(i){i&&W(e)}}}function D_(t){let e,n,s,i,r,o,l,a;function u(h,p){return h[0]!="armor"?N_:T_}let d=u(t),c=d(t),f=t[4]&&_o(t);return{c(){e=g("div"),n=g("img"),i=F(),c.c(),r=F(),f&&f.c(),Je(n.src,s="stats/"+t[0]+".svg")||m(n,"src",s),m(n,"alt",t[1]),m(n,"class","svelte-16tz2kw"),m(e,"id",t[0]),m(e,"class","svelte-16tz2kw"),be(()=>t[14].call(e)),J(e,"hidden",t[6]==0)},m(h,p){H(h,e,p),_(e,n),_(e,i),c.m(e,null),_(e,r),f&&f.m(e,null),o=rt(e,t[14].bind(e)),l||(a=[N(n,"mouseenter",t[8]),N(n,"mouseleave",t[9])],l=!0)},p(h,[p]){p&1&&!Je(n.src,s="stats/"+h[0]+".svg")&&m(n,"src",s),p&2&&m(n,"alt",h[1]),d===(d=u(h))&&c?c.p(h,p):(c.d(1),c=d(h),c&&(c.c(),c.m(e,r))),h[4]?f?f.p(h,p):(f=_o(h),f.c(),f.m(e,null)):f&&(f.d(1),f=null),p&1&&m(e,"id",h[0]),p&64&&J(e,"hidden",h[6]==0)},i:Q,o:Q,d(h){h&&W(e),c.d(),f&&f.d(),o(),l=!1,ge(a)}}}function O_(t,e,n){let s,i;x(t,Xt,T=>n(2,i=T));let{codeName:r,formalName:o}=e,l,a,u,d={armor:5.9,magicDmg:5.65,meleeDmg:5.7,rangedDmg:6.45,hpRegen:7.35,endurance:7.85,sightRange:8.45,walkSpeed:8.3,jumpPower:8.7,ammoReturn:9.3,height:6.1};const c=()=>n(4,a=!0),f=()=>n(4,a=!1),h=()=>n(5,u=!0),p=()=>n(5,u=!1),b=()=>n(5,u=!0),v=()=>n(5,u=!1);function y(){l=this.offsetWidth,n(3,l)}return t.$$set=T=>{"codeName"in T&&n(0,r=T.codeName),"formalName"in T&&n(1,o=T.formalName)},t.$$.update=()=>{t.$$.dirty&5&&n(6,s=i[r]||0)},[r,o,i,l,a,u,s,d,c,f,h,p,b,v,y]}class R_ extends Ne{constructor(e){super(),Te(this,e,O_,D_,ce,{codeName:0,formalName:1})}}function po(t,e,n){const s=t.slice();return s[2]=e[n][0],s[3]=e[n][1],s[4]=e,s[5]=n,s}function mo(t){let e,n,s,i;function r(a){t[0](a,t[2],t[4],t[5])}function o(a){t[1](a,t[3],t[4],t[5])}let l={};return t[2]!==void 0&&(l.codeName=t[2]),t[3]!==void 0&&(l.formalName=t[3]),e=new R_({props:l}),Z.push(()=>we(e,"codeName",r)),Z.push(()=>we(e,"formalName",o)),{c(){pe(e.$$.fragment)},m(a,u){fe(e,a,u),i=!0},p(a,u){t=a;const d={};!n&&u&0&&(n=!0,d.codeName=t[2],ve(()=>n=!1)),!s&&u&0&&(s=!0,d.formalName=t[3],ve(()=>s=!1)),e.$set(d)},i(a){i||(z(e.$$.fragment,a),i=!0)},o(a){j(e.$$.fragment,a),i=!1},d(a){he(e,a)}}}function A_(t){let e,n,s=xe(Object.entries(yi)),i=[];for(let o=0;o<s.length;o+=1)i[o]=mo(po(t,s,o));const r=o=>j(i[o],1,1,()=>{i[o]=null});return{c(){e=g("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","statBox svelte-lu37w6")},m(o,l){H(o,e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null);n=!0},p(o,[l]){if(l&0){s=xe(Object.entries(yi));let a;for(a=0;a<s.length;a+=1){const u=po(o,s,a);i[a]?(i[a].p(u,l),z(i[a],1)):(i[a]=mo(u),i[a].c(),z(i[a],1),i[a].m(e,null))}for(Pe(),a=s.length;a<i.length;a+=1)r(a);Me()}},i(o){if(!n){for(let l=0;l<s.length;l+=1)z(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)j(i[l]);n=!1},d(o){o&&W(e),jt(i,o)}}}function P_(t,e,n){function s(r,o,l,a){l[a][0]=r}function i(r,o,l,a){l[a][1]=r}return[s,i]}class M_ extends Ne{constructor(e){super(),Te(this,e,P_,A_,ce,{})}}function L_(t){let e,n,s,i,r,o,l,a,u,d;return{c(){e=g("div"),n=g("button"),n.textContent="-",s=F(),i=g("input"),r=F(),o=g("b"),o.textContent="%",l=F(),a=g("button"),a.textContent="+",m(n,"id","decrease"),m(n,"class","svelte-1d7zneu"),m(i,"type","number"),m(i,"placeholder","0"),m(i,"class","svelte-1d7zneu"),m(o,"class","svelte-1d7zneu"),m(a,"id","increase"),m(a,"class","svelte-1d7zneu"),m(e,"class","svelte-1d7zneu"),J(e,"non-percent",!t[1])},m(c,f){H(c,e,f),_(e,n),_(e,s),_(e,i),st(i,t[0]),_(e,r),_(e,o),_(e,l),_(e,a),u||(d=[N(n,"click",t[4]),N(i,"input",t[5]),N(i,"input",t[2]),N(a,"click",t[6])],u=!0)},p(c,[f]){f&1&&Yo(i.value)!==c[0]&&st(i,c[0])},i:Q,o:Q,d(c){c&&W(e),u=!1,ge(d)}}}function B_(t,e,n){let{weaponName:s,value:i}=e,r=s!="Nature's Wrath Spellbook",o;r?(i=100,o=100):(i=4,o=4);function l(){i<0?n(0,i=0):i>o&&n(0,i=o),i%1!=0&&n(0,i=Math.floor(i))}const a=()=>{n(0,i--,i),l()};function u(){i=Yo(this.value),n(0,i)}const d=()=>{n(0,i++,i),l()};return t.$$set=c=>{"weaponName"in c&&n(3,s=c.weaponName),"value"in c&&n(0,i=c.value)},[i,r,l,s,a,u,d]}class F_ extends Ne{constructor(e){super(),Te(this,e,B_,L_,ce,{weaponName:3,value:0})}}function W_(t){let e,n,s,i,r,o,l,a;return{c(){e=g("div"),n=g("span"),s=F(),i=g("input"),r=F(),o=g("iconify-icon"),m(i,"type","checkbox"),m(i,"class","svelte-na6yc3"),Ft(o,"icon","mingcute:check-fill"),Ft(o,"class","svelte-na6yc3"),m(e,"class","toggleCont svelte-na6yc3")},m(u,d){H(u,e,d),_(e,n),n.innerHTML=t[0],_(e,s),_(e,i),_(e,r),_(e,o),l||(a=[N(i,"change",t[2]),N(i,"keydown",t[3])],l=!0)},p(u,[d]){d&1&&(n.innerHTML=u[0])},i:Q,o:Q,d(u){u&&W(e),l=!1,ge(a)}}}function q_(t,e,n){let{text:s}=e;const i=It(),r=l=>i("toggle",l.target.checked),o=l=>{l.key=="Enter"&&(l.target.checked=!l.target.checked,i("toggle",l.target.checked))};return t.$$set=l=>{"text"in l&&n(0,s=l.text)},[s,i,r,o]}class qa extends Ne{constructor(e){super(),Te(this,e,q_,W_,ce,{text:0})}}function go(t,e,n){const s=t.slice();s[40]=e[n];const i=s[40].name.includes("Fantastic Beamstorm")?"~":"";s[17]=i;const r=s[40].name.includes("Charged");return s[41]=r,s}function z_(t){let e,n,s=t[2].description+"",i,r;return{c(){e=g("span"),n=te('"'),i=te(s),r=te('"'),m(e,"id","toolDesc"),m(e,"class","svelte-1gfuxic")},m(o,l){H(o,e,l),_(e,n),_(e,i),_(e,r)},p(o,l){l[0]&4&&s!==(s=o[2].description+"")&&ke(i,s)},d(o){o&&W(e)}}}function H_(t){let e,n,s,i=`${t[13]?"Type":t[11].name}:`,r,o,l=t[15],a,u,d,c,f,h=t[13]?"Return":"Expand",p,b,v,y,T=bo(t),w=t[3]&&yo(t);return{c(){e=g("button"),n=g("div"),s=g("span"),r=te(i),o=F(),T.c(),u=F(),w&&w.c(),d=F(),c=g("span"),f=te("("),p=te(h),b=te(")"),m(s,"class","svelte-1gfuxic"),De(s,"font-size",Object.keys(t[16]).includes(t[11].name)?`calc(var(--u) * ${t[16][t[11].name]})`:""),m(n,"id",a=t[13]?"":"basic"),m(n,"class","svelte-1gfuxic"),m(c,"class","tooltip svelte-1gfuxic"),m(c,"id","top"),m(e,"class","gearPreview svelte-1gfuxic"),De(e,"line-height",`${t[7]/6.5}px`)},m(I,C){H(I,e,C),_(e,n),_(n,s),_(s,r),_(n,o),T.m(n,null),_(e,u),w&&w.m(e,null),_(e,d),_(e,c),_(c,f),_(c,p),_(c,b),t[28](e),v||(y=N(e,"click",t[21]),v=!0)},p(I,C){C[0]&10240&&i!==(i=`${I[13]?"Type":I[11].name}:`)&&ke(r,i),C[0]&67584&&De(s,"font-size",Object.keys(I[16]).includes(I[11].name)?`calc(var(--u) * ${I[16][I[11].name]})`:""),C[0]&32768&&ce(l,l=I[15])?(T.d(1),T=bo(I),T.c(),T.m(n,null)):T.p(I,C),C[0]&8192&&a!==(a=I[13]?"":"basic")&&m(n,"id",a),I[3]?w?w.p(I,C):(w=yo(I),w.c(),w.m(e,d)):w&&(w.d(1),w=null),C[0]&8192&&h!==(h=I[13]?"Return":"Expand")&&ke(p,h),C[0]&128&&De(e,"line-height",`${I[7]/6.5}px`)},d(I){I&&W(e),T.d(I),w&&w.d(),t[28](null),v=!1,y()}}}function bo(t){let e,n=(t[13]?t[2].info.type.replace("/","<b>,</b><br/>"):t[19](t[11]))+"";return{c(){e=g("span"),m(e,"class","svelte-1gfuxic")},m(s,i){H(s,e,i),e.innerHTML=n},p(s,i){i[0]&10244&&n!==(n=(s[13]?s[2].info.type.replace("/","<b>,</b><br/>"):s[19](s[11]))+"")&&(e.innerHTML=n)},d(s){s&&W(e)}}}function yo(t){let e,n,s=`${t[13]?"Special":t[3].name.split(" (")[0]}:`,i,r,o=t[15],l,a=vo(t);return{c(){e=g("div"),n=g("span"),i=te(s),r=F(),a.c(),m(n,"class","svelte-1gfuxic"),De(n,"font-size",Object.keys(t[16]).includes(t[3].name)?`calc(var(--u) * ${t[16][t[3].name]})`:""),m(e,"id",l=t[13]?"":"special"),m(e,"class","svelte-1gfuxic")},m(u,d){H(u,e,d),_(e,n),_(n,i),_(e,r),a.m(e,null)},p(u,d){d[0]&8200&&s!==(s=`${u[13]?"Special":u[3].name.split(" (")[0]}:`)&&ke(i,s),d[0]&65544&&De(n,"font-size",Object.keys(u[16]).includes(u[3].name)?`calc(var(--u) * ${u[16][u[3].name]})`:""),d[0]&32768&&ce(o,o=u[15])?(a.d(1),a=vo(u),a.c(),a.m(e,null)):a.p(u,d),d[0]&8192&&l!==(l=u[13]?"":"special")&&m(e,"id",l)},d(u){u&&W(e),a.d(u)}}}function vo(t){let e,n=(t[13]?t[2].info.special:t[17]+t[19](t[3]))+"",s;return{c(){e=g("span"),s=te(n),m(e,"class","svelte-1gfuxic")},m(i,r){H(i,e,r),_(e,s)},p(i,r){r[0]&139276&&n!==(n=(i[13]?i[2].info.special:i[17]+i[19](i[3]))+"")&&ke(s,n)},d(i){i&&W(e)}}}function wo(t){let e,n,s,i,r,o,l=t[2].name+"",a,u,d,c;return{c(){e=g("a"),n=g("img"),r=F(),o=g("span"),a=te(l),Je(n.src,s=t[2].image)||m(n,"src",s),m(n,"alt",i=t[2].name),m(n,"draggable","false"),m(n,"class","svelte-1gfuxic"),m(o,"class","tooltip"),m(o,"id","right"),m(e,"href",u=t[2].link),m(e,"target","_blank"),m(e,"class","svelte-1gfuxic"),De(e,"display",t[2].link?"":"none"),De(e,"border-radius",t[2].tool?"calc(var(--u))":"")},m(f,h){H(f,e,h),_(e,n),_(e,r),_(e,o),_(o,a),c=!0},p(f,h){(!c||h[0]&4&&!Je(n.src,s=f[2].image))&&m(n,"src",s),(!c||h[0]&4&&i!==(i=f[2].name))&&m(n,"alt",i),(!c||h[0]&4)&&l!==(l=f[2].name+"")&&ke(a,l),(!c||h[0]&4&&u!==(u=f[2].link))&&m(e,"href",u),h[0]&4&&De(e,"display",f[2].link?"":"none"),h[0]&4&&De(e,"border-radius",f[2].tool?"calc(var(--u))":"")},i(f){c||(f&&be(()=>{c&&(d||(d=Re(e,Ue,{duration:150},!0)),d.run(1))}),c=!0)},o(f){f&&(d||(d=Re(e,Ue,{duration:150},!1)),d.run(0)),c=!1},d(f){f&&W(e),f&&d&&d.end()}}}function Co(t){let e,n,s,i,r,o,l;n=new qa({props:{text:"Toggle base values"}}),n.$on("toggle",t[36]);let a=xe(t[2].moves),u=[];for(let c=0;c<a.length;c+=1)u[c]=ko(go(t,a,c));const d=c=>j(u[c],1,1,()=>{u[c]=null});return{c(){e=g("div"),pe(n.$$.fragment),s=F(),i=g("div");for(let c=0;c<u.length;c+=1)u[c].c();m(i,"class","weaponMoves svelte-1gfuxic"),m(e,"class","fullWeaponView svelte-1gfuxic")},m(c,f){H(c,e,f),fe(n,e,null),_(e,s),_(e,i);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(i,null);l=!0},p(c,f){if(f[0]&1622036){a=xe(c[2].moves);let h;for(h=0;h<a.length;h+=1){const p=go(c,a,h);u[h]?(u[h].p(p,f),z(u[h],1)):(u[h]=ko(p),u[h].c(),z(u[h],1),u[h].m(i,null))}for(Pe(),h=a.length;h<u.length;h+=1)d(h);Me()}},i(c){if(!l){z(n.$$.fragment,c);for(let f=0;f<a.length;f+=1)z(u[f]);c&&be(()=>{l&&(o&&o.end(1),r=xo(e,Ue,{duration:150,delay:300}),r.start())}),l=!0}},o(c){j(n.$$.fragment,c),u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)j(u[f]);r&&r.invalidate(),c&&(o=Qo(e,Ue,{duration:150})),l=!1},d(c){c&&W(e),he(n),jt(u,c),c&&o&&o.end()}}}function Eo(t){let e,n,s,i;function r(a){t[37](a)}function o(a){t[38](a)}let l={};return t[4]!==void 0&&(l.value=t[4]),t[2].name!==void 0&&(l.weaponName=t[2].name),e=new F_({props:l}),Z.push(()=>we(e,"value",r)),Z.push(()=>we(e,"weaponName",o)),{c(){pe(e.$$.fragment)},m(a,u){fe(e,a,u),i=!0},p(a,u){const d={};!n&&u[0]&16&&(n=!0,d.value=a[4],ve(()=>n=!1)),!s&&u[0]&4&&(s=!0,d.weaponName=a[2].name,ve(()=>s=!1)),e.$set(d)},i(a){i||(z(e.$$.fragment,a),i=!0)},o(a){j(e.$$.fragment,a),i=!1},d(a){he(e,a)}}}function So(t){let e,n=t[17]+(t[14]&&!t[41]?t[40].base:t[41]?t[20](t[40]):t[19](t[40]))+"",s;return{c(){e=g("span"),s=te(n),m(e,"class","svelte-1gfuxic")},m(i,r){H(i,e,r),_(e,s)},p(i,r){r[0]&16388&&n!==(n=i[17]+(i[14]&&!i[41]?i[40].base:i[41]?i[20](i[40]):i[19](i[40]))+"")&&ke(s,n)},d(i){i&&W(e)}}}function ko(t){let e,n,s,i,r=(t[41]&&t[2].name=="Nature's Wrath Spellbook"?t[40].name.replace("Charged","Charge(s)"):t[40].name)+":",o,l,a=t[41]?[t[15],t[4]]:t[15],u,d,c=t[41]&&Eo(t),f=So(t);return{c(){e=g("div"),n=g("div"),s=g("span"),c&&c.c(),i=F(),o=te(r),l=F(),f.c(),u=F(),m(s,"class","svelte-1gfuxic"),m(n,"class","ff-border svelte-1gfuxic"),m(e,"class","svelte-1gfuxic")},m(h,p){H(h,e,p),_(e,n),_(n,s),c&&c.m(s,null),_(s,i),_(s,o),_(n,l),f.m(n,null),_(e,u),d=!0},p(h,p){h[41]?c?(c.p(h,p),p[0]&4&&z(c,1)):(c=Eo(h),c.c(),z(c,1),c.m(s,i)):c&&(Pe(),j(c,1,1,()=>{c=null}),Me()),(!d||p[0]&4)&&r!==(r=(h[41]&&h[2].name=="Nature's Wrath Spellbook"?h[40].name.replace("Charged","Charge(s)"):h[40].name)+":")&&ke(o,r),p[0]&32788&&ce(a,a=h[41]?[h[15],h[4]]:h[15])?(f.d(1),f=So(h),f.c(),f.m(n,null)):f.p(h,p)},i(h){d||(z(c),d=!0)},o(h){j(c),d=!1},d(h){h&&W(e),c&&c.d(),f.d(h)}}}function U_(t){let e,n,s,i,r,o,l=t[2],a,u,d,c,f,h,p,b,v,y,T;function w(M,R){if(M[2].name&&!M[2].tool)return H_;if(M[2].tool)return z_}let I=w(t),C=I&&I(t),O=wo(t);function D(M){t[32](M)}function U(M){t[33](M)}let ne={slotName:t[0],index:t[1]};t[12]!==void 0&&(ne.slotOpen=t[12]),t[13]!==void 0&&(ne.weaponExpand=t[13]),c=new fr({props:ne}),Z.push(()=>we(c,"slotOpen",D)),Z.push(()=>we(c,"weaponExpand",U)),c.$on("itemSelect",t[34]);let P=t[13]&&Co(t);return{c(){e=g("div"),n=g("button"),n.innerHTML=`<iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="90deg" class="svelte-1gfuxic"></iconify-icon>
        Gear`,s=F(),i=g("div"),C&&C.c(),r=F(),o=g("div"),O.c(),d=F(),pe(c.$$.fragment),p=F(),P&&P.c(),b=Bt(),m(n,"class","ddButton svelte-1gfuxic"),m(o,"class","gearSlotIcon svelte-1gfuxic"),be(()=>t[29].call(o)),De(o,"min-width",`${t[8]}px`),m(i,"class","gearInfoCont ff-border svelte-1gfuxic"),be(()=>t[31].call(i)),De(i,"justify-content",t[2].name?"":"flex-end"),m(e,"class","gearSlot svelte-1gfuxic"),J(e,"slotOpen",t[12]),J(e,"weapon-expand",t[13])},m(M,R){H(M,e,R),_(e,n),t[26](n),_(e,s),_(e,i),C&&C.m(i,null),_(i,r),_(i,o),O.m(o,null),a=rt(o,t[29].bind(o)),t[30](i),u=rt(i,t[31].bind(i)),_(e,d),fe(c,e,null),t[35](e),H(M,p,R),P&&P.m(M,R),H(M,b,R),v=!0,y||(T=[N(window,"mousedown",t[24]),N(window,"keydown",t[25]),N(n,"click",t[27])],y=!0)},p(M,R){I===(I=w(M))&&C?C.p(M,R):(C&&C.d(1),C=I&&I(M),C&&(C.c(),C.m(i,r))),R[0]&4&&ce(l,l=M[2])?(Pe(),j(O,1,1,Q),Me(),O=wo(M),O.c(),z(O,1),O.m(o,null)):O.p(M,R),R[0]&256&&De(o,"min-width",`${M[8]}px`),R[0]&4&&De(i,"justify-content",M[2].name?"":"flex-end");const K={};R[0]&1&&(K.slotName=M[0]),R[0]&2&&(K.index=M[1]),!f&&R[0]&4096&&(f=!0,K.slotOpen=M[12],ve(()=>f=!1)),!h&&R[0]&8192&&(h=!0,K.weaponExpand=M[13],ve(()=>h=!1)),c.$set(K),(!v||R[0]&4096)&&J(e,"slotOpen",M[12]),(!v||R[0]&8192)&&J(e,"weapon-expand",M[13]),M[13]?P?(P.p(M,R),R[0]&8192&&z(P,1)):(P=Co(M),P.c(),z(P,1),P.m(b.parentNode,b)):P&&(Pe(),j(P,1,1,()=>{P=null}),Me())},i(M){v||(z(O),z(c.$$.fragment,M),z(P),v=!0)},o(M){j(O),j(c.$$.fragment,M),j(P),v=!1},d(M){M&&(W(e),W(p),W(b)),t[26](null),C&&C.d(),O.d(M),a(),t[30](null),u(),he(c),t[35](null),P&&P.d(M),y=!1,ge(T)}}}function j_(t,e,n){let s,i,r,o;x(t,wt,E=>n(23,s=E)),x(t,Xt,E=>n(15,i=E)),x(t,zs,E=>n(16,r=E)),x(t,In,E=>n(39,o=E));let{gearBox:l,slotName:a,index:u}=e,d,c,f,h,p,b,v,y=cr,T,w,I,C,O,D="";function U(){if(v)for(let E of v.querySelectorAll(".gearPreview > div")){if(Object.keys(r).includes(E.id=="basic"?T.name:w?w.name:null))return;let ie=e_(E,o);ie&&(E.id=="basic"?G(zs,r[T.name]=ie,r):G(zs,r[w.name]=ie,r))}}function ne(E){let ie;if(E.name=="Void Needle")ie=E.base+(i[E.type]||0)-(i.armor||0)*5.625;else if(y.name=="Pureblood Dagger"){let _e,Ae={magicDmg:i.magicDmg||0,meleeDmg:i.meleeDmg||0,rangedDmg:i.rangedDmg||0},Nt=Object.keys(Ae).reduce((oe,ze)=>Ae[oe]>Ae[ze]?oe:ze),Dt=0;for(let oe in Ae)oe!=Nt&&(Dt+=Ae[oe]);_e=(i[Nt]||0)*2-Dt,ie=E.base+_e,E.name=="HP restored per Blood Sap"&&(ie=E.base+_e/2)}else if(E.type.includes("/")){let _e=E.type.split("/"),Ae=0;for(let Nt of _e)Ae+=(i[Nt]||0)*E[`${Nt}Mult`];ie=E.base+Ae}else ie=E.base+(i[E.type]||0)*E.mult;return C?Math.floor(ie*10)/10:Math.floor(ie)}function P(E){let ie,_e=O?0:i[E.type]||0;return y.name=="Celestial Powers Spellbook"?ie=(80+_e*1.1)*(.8+2.2*d/100):y.name=="Staff of Dreams"?ie=160+160*d/100+_e*(.4+1.3*d/100):y.name=="Nature's Wrath Spellbook"&&(ie=260+400*d/4+_e*(1+1.5*d/4)),Math.floor(ie*10)/10}function M(){n(14,O=!1),C?(n(13,C=!1),l.classList.remove("weapon-expand"),setTimeout(()=>{U()})):(l.classList.add("weapon-expand"),n(13,C=!0))}const R=E=>{(!c.contains(E.target)||c.contains(E.target)&&f.contains(E.target))&&n(12,I=!1)},K=E=>{E.key=="Escape"&&n(12,I=!1)};function Y(E){Z[E?"unshift":"push"](()=>{b=E,n(9,b)})}const S=()=>n(12,I=!I);function $(E){Z[E?"unshift":"push"](()=>{v=E,n(10,v)})}function re(){p=this.offsetHeight,n(8,p)}function A(E){Z[E?"unshift":"push"](()=>{f=E,n(6,f)})}function V(){h=this.offsetHeight,n(7,h)}function de(E){I=E,n(12,I)}function L(E){C=E,n(13,C)}const k=()=>{setTimeout(()=>{U(),!y.name&&C&&M()})};function B(E){Z[E?"unshift":"push"](()=>{c=E,n(5,c)})}const X=E=>n(14,O=E.detail);function ye(E){d=E,n(4,d)}function Ge(E){t.$$.not_equal(y.name,E)&&(y.name=E,n(2,y),n(23,s),n(1,u),n(3,w))}return t.$$set=E=>{"gearBox"in E&&n(22,l=E.gearBox),"slotName"in E&&n(0,a=E.slotName),"index"in E&&n(1,u=E.index)},t.$$.update=()=>{t.$$.dirty[0]&8388622&&s[u]&&s[u].name!=y.name&&(n(2,y=s[u]),!y.tool&&y.name&&(n(11,T=y.moves.filter(E=>E.basic)[0]),n(3,w=y.moves.filter(E=>E.special)[0]),w&&w.name.includes("Fantastic Beamstorm")?n(17,D="~"):n(17,D="")))},[a,u,y,w,d,c,f,h,p,b,v,T,I,C,O,i,r,D,U,ne,P,M,l,s,R,K,Y,S,$,re,A,V,de,L,k,B,X,ye,Ge]}class V_ extends Ne{constructor(e){super(),Te(this,e,j_,U_,ce,{gearBox:22,slotName:0,index:1},null,[-1,-1])}}function Io(t,e,n){const s=t.slice();return s[3]=e[n],s}function To(t){let e,n,s;function i(o){t[1](o)}let r={slotName:"gear",index:t[3]};return t[0]!==void 0&&(r.gearBox=t[0]),e=new V_({props:r}),Z.push(()=>we(e,"gearBox",i)),{c(){pe(e.$$.fragment)},m(o,l){fe(e,o,l),s=!0},p(o,l){const a={};!n&&l&1&&(n=!0,a.gearBox=o[0],ve(()=>n=!1)),e.$set(a)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){j(e.$$.fragment,o),s=!1},d(o){he(e,o)}}}function G_(t){let e,n,s=xe(qn),i=[];for(let o=0;o<s.length;o+=1)i[o]=To(Io(t,s,o));const r=o=>j(i[o],1,1,()=>{i[o]=null});return{c(){e=g("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","gearBox svelte-13plk7j")},m(o,l){H(o,e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null);t[2](e),n=!0},p(o,[l]){if(l&1){s=xe(qn);let a;for(a=0;a<s.length;a+=1){const u=Io(o,s,a);i[a]?(i[a].p(u,l),z(i[a],1)):(i[a]=To(u),i[a].c(),z(i[a],1),i[a].m(e,null))}for(Pe(),a=s.length;a<i.length;a+=1)r(a);Me()}},i(o){if(!n){for(let l=0;l<s.length;l+=1)z(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)j(i[l]);n=!1},d(o){o&&W(e),jt(i,o),t[2](null)}}}function Y_(t,e,n){let s;function i(o){s=o,n(0,s)}function r(o){Z[o?"unshift":"push"](()=>{s=o,n(0,s)})}return[s,i,r]}class K_ extends Ne{constructor(e){super(),Te(this,e,Y_,G_,ce,{})}}function x_(t){let e,n,s,i,r,o,l,a;return{c(){e=g("div"),n=g("div"),s=g("button"),s.textContent="Clear armor",i=F(),r=g("div"),o=g("button"),o.textContent="Clear gear",m(s,"class","svelte-e94uvj"),m(n,"class","svelte-e94uvj"),m(o,"class","svelte-e94uvj"),m(r,"class","svelte-e94uvj"),m(e,"class","mainFeatures svelte-e94uvj"),m(e,"id","box")},m(u,d){H(u,e,d),_(e,n),_(n,s),_(e,i),_(e,r),_(r,o),l||(a=[N(s,"click",t[3]),N(o,"click",t[4])],l=!0)},p:Q,i:Q,o:Q,d(u){u&&W(e),l=!1,ge(a)}}}function Q_(t,e,n){let s,i,r,o,l;x(t,wt,f=>n(5,s=f)),x(t,rs,f=>n(6,i=f)),x(t,ft,f=>n(7,r=f)),x(t,Tn,f=>n(8,o=f)),x(t,In,f=>n(0,l=f));function a(){for(let f in r)r[f].name&&o[f][r[f].name].querySelector("button").click()}function u(){for(let f in s)s[f].name&&i[f][s[f].name].querySelector("button").click()}return[l,a,u,()=>{l||a()},()=>{l||u()}]}class X_ extends Ne{constructor(e){super(),Te(this,e,Q_,x_,ce,{})}}function J_(t){let e,n,s,i,r,o,l;function a(d){t[2](d)}let u={slotName:"builds",index:null,weaponExpand:null};return t[0]!==void 0&&(u.slotOpen=t[0]),s=new fr({props:u}),Z.push(()=>we(s,"slotOpen",a)),{c(){e=g("button"),e.innerHTML=`Load armor set
    <iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="180deg" class="svelte-l9dczq"></iconify-icon>`,n=F(),pe(s.$$.fragment),m(e,"class","svelte-l9dczq"),J(e,"ddOpen",t[0])},m(d,c){H(d,e,c),H(d,n,c),fe(s,d,c),r=!0,o||(l=N(e,"click",t[1]),o=!0)},p(d,[c]){(!r||c&1)&&J(e,"ddOpen",d[0]);const f={};!i&&c&1&&(i=!0,f.slotOpen=d[0],ve(()=>i=!1)),s.$set(f)},i(d){r||(z(s.$$.fragment,d),r=!0)},o(d){j(s.$$.fragment,d),r=!1},d(d){d&&(W(e),W(n)),he(s,d),o=!1,l()}}}function Z_(t,e,n){let{ddOpen:s=!1}=e;const i=()=>n(0,s=!s);function r(o){s=o,n(0,s)}return t.$$set=o=>{"ddOpen"in o&&n(0,s=o.ddOpen)},[s,i,r]}class $_ extends Ne{constructor(e){super(),Te(this,e,Z_,J_,ce,{ddOpen:0})}}function ep(t){let e;return{c(){e=g("span"),e.textContent="Create some builds to get started!",m(e,"class","tooltip svelte-1c244fb"),m(e,"id","top"),De(e,"left","70.5%")},m(n,s){H(n,e,s)},p:Q,d(n){n&&W(e)}}}function tp(t){let e;return{c(){e=g("span"),e.textContent="Select some gear or armor to get started!",m(e,"class","tooltip svelte-1c244fb"),m(e,"id","top"),De(e,"left",t[3]?"38%":"")},m(n,s){H(n,e,s)},p(n,s){s&8&&De(e,"left",n[3]?"38%":"")},d(n){n&&W(e)}}}function np(t){let e,n,s,i,r,o,l,a,u,d,c,f,h,p,b,v,y,T,w,I,C,O,D,U,ne,P,M,R;function K(A,V){if(!A[4])return tp;if(!A[3])return ep}let Y=K(t),S=Y&&Y(t);function $(A){t[18](A)}let re={};return t[1]!==void 0&&(re.ddOpen=t[1]),U=new $_({props:re}),Z.push(()=>we(U,"ddOpen",$)),{c(){e=g("div"),n=g("div"),s=g("div"),i=g("button"),r=te("Export new build"),l=F(),a=g("div"),u=g("button"),d=te("Save to build"),f=F(),h=g("div"),p=g("button"),b=te("Delete build"),y=F(),S&&S.c(),T=F(),w=g("div"),I=g("div"),C=g("button"),C.textContent="Load build",O=F(),D=g("div"),pe(U.$$.fragment),i.disabled=o=!t[4],m(i,"class","svelte-1c244fb"),m(s,"class","buttonCont svelte-1c244fb"),u.disabled=c=!t[4]||!t[3],m(u,"class","svelte-1c244fb"),m(a,"class","buttonCont svelte-1c244fb"),m(a,"id","middle"),p.disabled=v=!t[3],m(p,"class","svelte-1c244fb"),m(h,"class","buttonCont svelte-1c244fb"),m(n,"id","modify"),m(n,"class","svelte-1c244fb"),J(n,"no-tooltip",t[2]),m(C,"class","svelte-1c244fb"),m(I,"class","buttonCont svelte-1c244fb"),m(D,"class","buttonCont svelte-1c244fb"),m(w,"id","load"),m(w,"class","svelte-1c244fb"),m(e,"class","mainFeatures svelte-1c244fb"),m(e,"id","build")},m(A,V){H(A,e,V),_(e,n),_(n,s),_(s,i),_(i,r),_(n,l),_(n,a),_(a,u),_(u,d),_(n,f),_(n,h),_(h,p),_(p,b),_(n,y),S&&S.m(n,null),_(e,T),_(e,w),_(w,I),_(I,C),_(w,O),_(w,D),fe(U,D,null),t[19](D),P=!0,M||(R=[N(window,"mousedown",t[8]),N(window,"keydown",t[9]),N(i,"click",t[10]),N(i,"mouseenter",t[11]),N(i,"mouseleave",t[12]),N(u,"click",t[13]),N(p,"click",t[14]),N(p,"mouseenter",t[15]),N(p,"mouseleave",t[16]),N(C,"click",t[17])],M=!0)},p(A,[V]){(!P||V&16&&o!==(o=!A[4]))&&(i.disabled=o),(!P||V&24&&c!==(c=!A[4]||!A[3]))&&(u.disabled=c),(!P||V&8&&v!==(v=!A[3]))&&(p.disabled=v),Y===(Y=K(A))&&S?S.p(A,V):(S&&S.d(1),S=Y&&Y(A),S&&(S.c(),S.m(n,null))),(!P||V&4)&&J(n,"no-tooltip",A[2]);const de={};!ne&&V&2&&(ne=!0,de.ddOpen=A[1],ve(()=>ne=!1)),U.$set(de)},i(A){P||(z(U.$$.fragment,A),P=!0)},o(A){j(U.$$.fragment,A),P=!1},d(A){A&&W(e),S&&S.d(),he(U),t[19](null),M=!1,ge(R)}}}function sp(t,e,n){let s,i,r,o,l;x(t,nt,D=>n(7,s=D)),x(t,Wt,D=>n(3,i=D)),x(t,Xo,D=>n(4,r=D)),x(t,In,D=>n(5,o=D)),x(t,ee,D=>n(6,l=D));let a,u=!1,d=!1;const c=D=>{a.contains(D.target)||n(1,u=!1)},f=D=>{D.key=="Escape"&&n(1,u=!1)},h=()=>{r&&!o&&G(ee,l.export.ongoing=!0,l)},p=()=>n(2,d=!0),b=()=>n(2,d=!1),v=()=>{r&&i&&!o&&G(ee,l.save.ongoing=!0,l)},y=()=>{i&&!o&&G(ee,l.delete.ongoing=!0,l)},T=()=>n(2,d=!0),w=()=>n(2,d=!1),I=()=>{o||G(ee,l.load.ongoing=!0,l)};function C(D){u=D,n(1,u)}function O(D){Z[D?"unshift":"push"](()=>{a=D,n(0,a)})}return t.$$.update=()=>{t.$$.dirty&128&&G(Wt,i=Object.keys(s).length>0,i)},[a,u,d,i,r,o,l,s,c,f,h,p,b,v,y,T,w,I,C,O]}class ip extends Ne{constructor(e){super(),Te(this,e,sp,np,ce,{})}}function No(t){let e;return{c(){e=g("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(n,s){H(n,e,s)},d(n){n&&W(e)}}}function rp(t){let e,n,s,i,r,o,l,a=25-t[3].length+"",u,d,c,f,h,p,b,v,y,T,w,I=275-t[4].length+"",C,O,D,U,ne,P,M,R,K,Y,S,$,re,A,V,de,L=(t[3]||t[4])&&No();return{c(){e=g("div"),n=g("div"),s=te(`Name:\r
        `),i=g("input"),o=F(),l=g("span"),u=te(a),d=F(),c=g("div"),f=g("div"),h=g("span"),h.textContent="Description / Notes:",p=F(),L&&L.c(),b=F(),v=g("textarea"),T=F(),w=g("span"),C=te(I),O=F(),D=g("div"),U=g("div"),ne=g("button"),P=te("CANCEL"),R=F(),K=g("div"),Y=g("button"),S=te("EXPORT"),m(i,"class","buildNameInput"),m(i,"id","firstFocusable"),i.disabled=r=t[5].export.status==0,m(i,"type","text"),m(i,"placeholder",t[6]),m(i,"maxlength","25"),m(l,"class","charCounter svelte-1vypdkl"),m(l,"id","buildName"),m(n,"class","buildNameCont svelte-1vypdkl"),m(v,"class","buildDescInput"),v.disabled=y=t[5].export.status==0,m(v,"placeholder","[Empty]"),m(v,"maxlength","275"),m(v,"autocomplete","off"),m(w,"class","charCounter"),m(w,"id","buildDesc"),m(c,"class","buildDescCont"),ne.disabled=M=t[5].export.status==0,m(Y,"id","lastFocusable"),Y.disabled=$=t[5].export.status==0,m(D,"class","promptOptions"),m(e,"class","buildExporter svelte-1vypdkl")},m(k,B){H(k,e,B),_(e,n),_(n,s),_(n,i),t[8](i),st(i,t[3]),_(n,o),_(n,l),_(l,u),_(e,d),_(e,c),_(c,f),_(f,h),_(f,p),L&&L.m(f,null),_(c,b),_(c,v),st(v,t[4]),t[13](v),_(c,T),_(c,w),_(w,C),_(e,O),_(e,D),_(D,U),_(U,ne),_(ne,P),t[16](ne),_(D,R),_(D,K),_(K,Y),_(Y,S),A=!0,V||(de=[N(i,"input",t[9]),N(i,"input",t[10]),N(i,"keydown",t[11]),N(v,"input",t[12]),N(v,"input",t[14]),N(v,"keydown",t[15]),N(ne,"click",t[17]),N(Y,"click",t[18]),N(Y,"keydown",pn),N(e,"introstart",t[19])],V=!0)},p(k,[B]){(!A||B&32&&r!==(r=k[5].export.status==0))&&(i.disabled=r),B&8&&i.value!==k[3]&&st(i,k[3]),(!A||B&8)&&a!==(a=25-k[3].length+"")&&ke(u,a),k[3]||k[4]?L||(L=No(),L.c(),L.m(f,null)):L&&(L.d(1),L=null),(!A||B&32&&y!==(y=k[5].export.status==0))&&(v.disabled=y),B&16&&st(v,k[4]),(!A||B&16)&&I!==(I=275-k[4].length+"")&&ke(C,I),(!A||B&32&&M!==(M=k[5].export.status==0))&&(ne.disabled=M),(!A||B&32&&$!==($=k[5].export.status==0))&&(Y.disabled=$)},i(k){A||(k&&be(()=>{A&&(re||(re=Re(e,lt,{duration:250},!0)),re.run(1))}),A=!0)},o(k){k&&(re||(re=Re(e,lt,{duration:250},!1)),re.run(0)),A=!1},d(k){k&&W(e),t[8](null),L&&L.d(),t[13](null),t[16](null),k&&re&&re.end(),V=!1,ge(de)}}}function op(t,e,n){let s,i,r,o,l,a;x(t,ee,S=>n(5,s=S)),x(t,Xe,S=>n(20,i=S)),x(t,Wt,S=>n(21,r=S)),x(t,wt,S=>n(22,o=S)),x(t,ft,S=>n(23,l=S)),x(t,nt,S=>n(24,a=S));let u=Object.keys(a).length||0,d=(u+1)%10,c=d==1?"st":d==2?"nd":d==3?"rd":"th",f,h,p,b="",v="",y=`My ${u+1+c} build`;function T(){if(G(ee,s.export.status=0,s),b.endsWith(" ")&&n(3,b=b.replace(/  +/g," ").replace(/ $/,"")),v.endsWith(" ")&&n(4,v=v.replace(/  +/g," ").replace(/ $/,"")),Object.keys(a).includes(b)){G(ee,s.export.status=-1,s),G(ee,s.message="duplicate_name",s);return}let S=qh(_t(an(un),"builds")).key,$=Wa(l,o);$.name=b||y,$.desc=v||"[Empty]",Fs(_t(an(un),`builds/${S}`),$).then(()=>{G(ee,s.export.status=1,s),G(Wt,r=!0,r),nt.update(re=>({...re,[$.name]:{id:S,desc:$.desc}})),G(Xe,i=$,i),G(Xe,i.id=S,i),navigator.clipboard.writeText(`${location.origin+location.pathname}?id=${S}`)}).catch(()=>{G(ee,s.export.status=-1,s),G(ee,s.message="firebase_fail",s)})}function w(S){Z[S?"unshift":"push"](()=>{f=S,n(0,f)})}function I(){b=this.value,n(3,b)}const C=S=>{n(3,b=Es(S.target.value,25))},O=S=>{s.export.status==0&&S.preventDefault(),Gt(S),wi(f,S.target.value,25)};function D(){v=this.value,n(4,v)}function U(S){Z[S?"unshift":"push"](()=>{h=S,n(1,h)})}const ne=S=>{n(4,v=Es(S.target.value,275))},P=S=>{s.export.status==0&&S.preventDefault(),wi(h,S.target.value,275)};function M(S){Z[S?"unshift":"push"](()=>{p=S,n(2,p)})}return[f,h,p,b,v,s,y,T,w,I,C,O,D,U,ne,P,M,()=>{s.export.status!=0&&G(ee,s.export.ongoing=!1,s)},()=>{s.export.status!=0&&T()},()=>p.focus()]}class lp extends Ne{constructor(e){super(),Te(this,e,op,rp,ce,{})}}function ap(t){let e,n,s,i,r=t[2]?"Copied!":"Copy link",o,l,a;return{c(){e=g("button"),n=g("b"),n.textContent="Build link",s=F(),i=g("span"),o=te(r),m(i,"class","tooltip svelte-zqs0fu"),m(i,"id","top"),m(e,"class","copyButton svelte-zqs0fu"),m(e,"id","firstFocusable")},m(u,d){H(u,e,d),_(e,n),_(e,s),_(e,i),_(i,o),l||(a=[N(e,"click",t[7]),N(e,"keydown",Gt)],l=!0)},p(u,d){d&4&&r!==(r=u[2]?"Copied!":"Copy link")&&ke(o,r)},d(u){u&&W(e),l=!1,ge(a)}}}function up(t){let e,n,s,i,r,o,l=t[2]?"Copied!":"Copy ID",a,u,d,c;return{c(){e=g("button"),n=g("b"),n.textContent="ID:",s=F(),i=te(t[3]),r=F(),o=g("span"),a=te(l),m(o,"class","tooltip svelte-zqs0fu"),m(o,"id","top"),m(e,"class","copyButton svelte-zqs0fu"),m(e,"id",u=t[1]!="save"?"firstFocusable":"")},m(f,h){H(f,e,h),_(e,n),_(e,s),_(e,i),_(e,r),_(e,o),_(o,a),d||(c=[N(e,"click",t[5]),N(e,"keydown",t[6])],d=!0)},p(f,h){h&4&&l!==(l=f[2]?"Copied!":"Copy ID")&&ke(a,l),h&2&&u!==(u=f[1]!="save"?"firstFocusable":"")&&m(e,"id",u)},d(f){f&&W(e),d=!1,ge(c)}}}function cp(t){let e;function n(r,o){if(r[0]=="id")return up;if(r[0]=="link")return ap}let s=n(t),i=s&&s(t);return{c(){i&&i.c(),e=Bt()},m(r,o){i&&i.m(r,o),H(r,e,o)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i&&i.d(1),i=s&&s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:Q,o:Q,d(r){r&&W(e),i&&i.d(r)}}}function dp(t,e,n){let s;x(t,Xe,f=>n(8,s=f));let{type:i,source:r}=e,o=s.id||null,l=!1;function a(f){l||(navigator.clipboard.writeText(f),n(2,l=!0),setTimeout(()=>{n(2,l=!1)},1e3))}const u=()=>a(o),d=()=>{r!="save"&&Gt()},c=()=>a(`${location.host+location.pathname}?id=${o}`);return t.$$set=f=>{"type"in f&&n(0,i=f.type),"source"in f&&n(1,r=f.source)},[i,r,l,o,a,u,d,c]}class zn extends Ne{constructor(e){super(),Te(this,e,dp,cp,ce,{type:0,source:1})}}function fp(t){let e,n=t[2].delete.status+"",s;return{c(){e=g("span"),s=te(n)},m(i,r){H(i,e,r),_(e,s)},p(i,r){r&4&&n!==(n=i[2].delete.status+"")&&ke(s,n)},i:Q,o:Q,d(i){i&&W(e)}}}function hp(t){let e,n,s,i;return e=new zn({props:{type:"link",source:"share"}}),s=new zn({props:{type:"id",source:"share"}}),{c(){pe(e.$$.fragment),n=F(),pe(s.$$.fragment)},m(r,o){fe(e,r,o),H(r,n,o),fe(s,r,o),i=!0},p:Q,i(r){i||(z(e.$$.fragment,r),z(s.$$.fragment,r),i=!0)},o(r){j(e.$$.fragment,r),j(s.$$.fragment,r),i=!1},d(r){r&&W(n),he(e,r),he(s,r)}}}function _p(t){let e;return{c(){e=g("span"),e.textContent="Your build has been erased from your local saves and the database."},m(n,s){H(n,e,s)},p:Q,i:Q,o:Q,d(n){n&&W(e)}}}function pp(t){let e;function n(r,o){if(r[2].message=="not_found")return vp;if(r[2].message=="invalid_id")return yp}let s=n(t),i=s&&s(t);return{c(){i&&i.c(),e=Bt()},m(r,o){i&&i.m(r,o),H(r,e,o)},p(r,o){s!==(s=n(r))&&(i&&i.d(1),i=s&&s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:Q,o:Q,d(r){r&&W(e),i&&i.d(r)}}}function mp(t){let e,n,s,i,r,o;return s=new zn({props:{type:"link",source:"save"}}),r=new zn({props:{type:"id",source:"save"}}),{c(){e=g("span"),e.textContent="Your build has been overwritten.",n=F(),pe(s.$$.fragment),i=F(),pe(r.$$.fragment)},m(l,a){H(l,e,a),H(l,n,a),fe(s,l,a),H(l,i,a),fe(r,l,a),o=!0},p:Q,i(l){o||(z(s.$$.fragment,l),z(r.$$.fragment,l),o=!0)},o(l){j(s.$$.fragment,l),j(r.$$.fragment,l),o=!1},d(l){l&&(W(e),W(n),W(i)),he(s,l),he(r,l)}}}function gp(t){let e,n,s,i;const r=[Cp,wp],o=[];function l(a,u){return a[2].export.status==1?0:a[2].export.status==-1&&a[2].message=="duplicate_name"?1:-1}return~(e=l(t))&&(n=o[e]=r[e](t)),{c(){n&&n.c(),s=Bt()},m(a,u){~e&&o[e].m(a,u),H(a,s,u),i=!0},p(a,u){let d=e;e=l(a),e!==d&&(n&&(Pe(),j(o[d],1,1,()=>{o[d]=null}),Me()),~e?(n=o[e],n||(n=o[e]=r[e](a),n.c()),z(n,1),n.m(s.parentNode,s)):n=null)},i(a){i||(z(n),i=!0)},o(a){j(n),i=!1},d(a){a&&W(s),~e&&o[e].d(a)}}}function bp(t){let e,n,s=t[2].export.status?"exporting":t[2].save.status?"saving":t[2].load.status?"loading":"deleting",i,r,o,l,a,u,d,c;return{c(){e=g("span"),n=te("A problem occurred while "),i=te(s),r=te(` your build.\r
            `),o=g("br"),l=te(`\r
            If needed`),a=g("b"),a.textContent=",",u=te(" you may contact "),d=g("hl"),d.textContent="xt.ss",c=te(` on Discord for more\r
            details.`)},m(f,h){H(f,e,h),_(e,n),_(e,i),_(e,r),_(e,o),_(e,l),_(e,a),_(e,u),_(e,d),_(e,c)},p(f,h){h&4&&s!==(s=f[2].export.status?"exporting":f[2].save.status?"saving":f[2].load.status?"loading":"deleting")&&ke(i,s)},i:Q,o:Q,d(f){f&&W(e)}}}function yp(t){let e;return{c(){e=g("span"),e.textContent="The ID you have entered is invalid. Please check it again."},m(n,s){H(n,e,s)},d(n){n&&W(e)}}}function vp(t){let e;return{c(){e=g("span"),e.innerHTML=`Your build could not be found within the database.
                <br/>
                If needed<b>,</b> you may contact <hl>xt.ss</hl> on Discord for more
                details.`},m(n,s){H(n,e,s)},d(n){n&&W(e)}}}function wp(t){let e;return{c(){e=g("span"),e.innerHTML=`Another build of yours with the same name already exists.
                <br/>
                Please use a different one.`},m(n,s){H(n,e,s)},i:Q,o:Q,d(n){n&&W(e)}}}function Cp(t){let e,n,s,i;return s=new zn({props:{type:"id",source:"export"}}),{c(){e=g("span"),e.textContent="Your build's link has been copied to your clipboard.",n=F(),pe(s.$$.fragment)},m(r,o){H(r,e,o),H(r,n,o),fe(s,r,o),i=!0},i(r){i||(z(s.$$.fragment,r),i=!0)},o(r){j(s.$$.fragment,r),i=!1},d(r){r&&(W(e),W(n)),he(s,r)}}}function Ep(t){let e,n,s,i,r,o,l,a,u,d,c,f,h,p,b,v,y;const T=[bp,gp,mp,pp,_p,hp,fp],w=[];function I(C,O){return C[1]==-1&&C[2].message=="firebase_fail"?0:C[2].export.status?1:C[2].save.status==1?2:C[2].load.status==-1?3:C[2].delete.status==1?4:C[2].share.ongoing?5:6}return r=I(t),o=w[r]=T[r](t),{c(){e=g("div"),n=g("span"),s=te(t[4]),i=F(),o.c(),l=F(),a=g("div"),u=g("div"),d=g("button"),c=te("OK"),m(n,"id","messageTitle"),m(n,"class","svelte-nfbx2w"),m(d,"id",f=(t[1]==-1?"firstFocusable ":"")+"lastFocusable"),m(a,"class","promptOptions svelte-nfbx2w"),m(e,"class","promptMessage svelte-nfbx2w")},m(C,O){H(C,e,O),_(e,n),_(n,s),_(e,i),w[r].m(e,null),_(e,l),_(e,a),_(a,u),_(u,d),_(d,c),t[6](d),b=!0,v||(y=[N(d,"click",t[7]),N(d,"keydown",t[8]),N(e,"introstart",t[9])],v=!0)},p(C,[O]){(!b||O&16)&&ke(s,C[4]);let D=r;r=I(C),r===D?w[r].p(C,O):(Pe(),j(w[D],1,1,()=>{w[D]=null}),Me(),o=w[r],o?o.p(C,O):(o=w[r]=T[r](C),o.c()),z(o,1),o.m(e,l)),(!b||O&2&&f!==(f=(C[1]==-1?"firstFocusable ":"")+"lastFocusable"))&&m(d,"id",f)},i(C){b||(z(o),C&&be(()=>{b&&(p&&p.end(1),h=xo(e,lt,{duration:200,delay:75}),h.start())}),b=!0)},o(C){j(o),h&&h.invalidate(),C&&(p=Qo(e,lt,{duration:200})),b=!1},d(C){C&&W(e),w[r].d(),t[6](null),C&&p&&p.end(),v=!1,ge(y)}}}function Sp(t,e,n){let s,i,r;x(t,ee,h=>n(2,r=h));let{loadID:o}=e;const l=It();let a;function u(h){Z[h?"unshift":"push"](()=>{a=h,n(3,a)})}const d=()=>{n(0,o=null),l("resetActions")},c=h=>{i==-1&&Gt(h),pn(h)},f=()=>a.focus();return t.$$set=h=>{"loadID"in h&&n(0,o=h.loadID)},t.$$.update=()=>{t.$$.dirty&4&&n(1,i=r.export.status||r.save.status||r.load.status||r.delete.status),t.$$.dirty&6&&n(4,s=r.share.ongoing?"Share this build":`${r.export.status?"Export":r.save.status?"Save":r.load.status?"Load":"Delete"} ${i==1?"Success":"Failure"}!`)},[o,i,r,a,s,l,u,d,c,f]}class kp extends Ne{constructor(e){super(),Te(this,e,Sp,Ep,ce,{loadID:0})}}function Ip(t){let e,n,s,i,r,o;return{c(){e=g("li"),n=g("button"),s=g("span"),i=te(t[0]),m(s,"class","svelte-1opo0ke"),m(e,"class","svelte-1opo0ke"),J(e,"selectedItem",t[2])},m(l,a){H(l,e,a),_(e,n),_(n,s),_(s,i),t[7](e),r||(o=N(n,"click",t[3]),r=!0)},p(l,[a]){a&1&&ke(i,l[0]),a&4&&J(e,"selectedItem",l[2])},i:Q,o:Q,d(l){l&&W(e),t[7](null),r=!1,o()}}}function Tp(t,e,n){let{chosenBuild:s,buildData:i,buildName:r,ddOpen:o}=e;const l=It();let a,u=s[0]==r;function d(){if(o){if(a.classList.contains("selectedItem")||n(2,u=!1),u)return;l("buildSelect",a),n(2,u=!0),n(5,o=!1),n(4,s=[r,i])}}function c(f){Z[f?"unshift":"push"](()=>{a=f,n(1,a)})}return t.$$set=f=>{"chosenBuild"in f&&n(4,s=f.chosenBuild),"buildData"in f&&n(6,i=f.buildData),"buildName"in f&&n(0,r=f.buildName),"ddOpen"in f&&n(5,o=f.ddOpen)},[r,a,u,d,s,o,i,c]}class Np extends Ne{constructor(e){super(),Te(this,e,Tp,Ip,ce,{chosenBuild:4,buildData:6,buildName:0,ddOpen:5})}}function Do(t,e,n){const s=t.slice();return s[25]=e[n][0],s[26]=e[n][1],s}function Oo(t){let e,n,s,i;function r(a){t[13](a)}function o(a){t[14](a)}let l={buildData:t[26],buildName:t[25]};return t[0]!==void 0&&(l.chosenBuild=t[0]),t[1]!==void 0&&(l.ddOpen=t[1]),e=new Np({props:l}),Z.push(()=>we(e,"chosenBuild",r)),Z.push(()=>we(e,"ddOpen",o)),e.$on("buildSelect",t[11]),{c(){pe(e.$$.fragment)},m(a,u){fe(e,a,u),i=!0},p(a,u){const d={};u&16&&(d.buildData=a[26]),u&16&&(d.buildName=a[25]),!n&&u&1&&(n=!0,d.chosenBuild=a[0],ve(()=>n=!1)),!s&&u&2&&(s=!0,d.ddOpen=a[1],ve(()=>s=!1)),e.$set(d)},i(a){i||(z(e.$$.fragment,a),i=!0)},o(a){j(e.$$.fragment,a),i=!1},d(a){he(e,a)}}}function Dp(t){let e,n,s,i,r,o,l,a=xe(Object.entries(t[4])),u=[];for(let c=0;c<a.length;c+=1)u[c]=Oo(Do(t,a,c));const d=c=>j(u[c],1,1,()=>{u[c]=null});return{c(){e=g("div"),n=g("input"),s=F(),i=g("ul");for(let c=0;c<u.length;c+=1)u[c].c();m(n,"type","text"),m(n,"class","searchBarInput svelte-p20blu"),m(n,"placeholder","Search..."),m(i,"class","svelte-p20blu"),J(i,"no-scrollbar",t[8].length<=4),m(e,"class","dropdown svelte-p20blu"),J(e,"ddOpen",t[1])},m(c,f){H(c,e,f),_(e,n),t[12](n),_(e,s),_(e,i);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(i,null);t[15](i),t[16](e),r=!0,o||(l=[N(n,"input",t[10]),N(n,"keydown",t[9]),N(e,"transitionend",t[17]),N(e,"transitioncancel",t[18])],o=!0)},p(c,[f]){if(f&2067){a=xe(Object.entries(c[4]));let h;for(h=0;h<a.length;h+=1){const p=Do(c,a,h);u[h]?(u[h].p(p,f),z(u[h],1)):(u[h]=Oo(p),u[h].c(),z(u[h],1),u[h].m(i,null))}for(Pe(),h=a.length;h<u.length;h+=1)d(h);Me()}(!r||f&256)&&J(i,"no-scrollbar",c[8].length<=4),(!r||f&2)&&J(e,"ddOpen",c[1])},i(c){if(!r){for(let f=0;f<a.length;f+=1)z(u[f]);r=!0}},o(c){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)j(u[f]);r=!1},d(c){c&&W(e),t[12](null),jt(u,c),t[15](null),t[16](null),o=!1,ge(l)}}}function Op(t,e,n){let s;x(t,nt,R=>n(4,s=R));let{chosenBuild:i,ddOpen:r=!1,dropdown:o}=e;const l=It();let a,u,d,c,f={},h=!1,p=[];function b(R){!R.shiftKey&&R.key=="Tab"&&(R.preventDefault(),setTimeout(()=>a.focus()))}function v(){u&&u.removeEventListener("keydown",b),w(),u&&u.addEventListener("keydown",b)}function y(R){R.shiftKey&&R.key=="Tab"&&(R.preventDefault(),setTimeout(()=>(u.querySelector("button")||u).focus()))}function T(){Fa(a.value,f),v()}function w(){u&&u.classList.remove("lastElement"),n(8,p=d.querySelectorAll("li:not(.hidden)")),u=p[p.length-1],u?u.classList.add("lastElement"):u=a}function I(R){l("buildSelect"),n(6,c=R.detail);let K=d.querySelector(".selectedItem");K&&K!=R.detail&&K.classList.remove("selectedItem"),n(7,h=!0)}function C(R){Z[R?"unshift":"push"](()=>{a=R,n(5,a)})}function O(R){i=R,n(0,i)}function D(R){r=R,n(1,r)}function U(R){Z[R?"unshift":"push"](()=>{d=R,n(3,d)})}function ne(R){Z[R?"unshift":"push"](()=>{o=R,n(2,o)})}const P=R=>{R.propertyName=="visibility"&&(!r&&c&&d.scrollTo(0,c.offsetTop),h&&(n(7,h=!1),n(5,a.value="",a),T()),Cs(a,r))},M=R=>{R.propertyName=="visibility"&&(n(7,h=!1),Cs(a,r))};return t.$$set=R=>{"chosenBuild"in R&&n(0,i=R.chosenBuild),"ddOpen"in R&&n(1,r=R.ddOpen),"dropdown"in R&&n(2,o=R.dropdown)},t.$$.update=()=>{if(t.$$.dirty&24&&d){n(8,p=d.querySelectorAll("li:not(.hidden)"));for(let R=0;R<d.childElementCount;R++)f[Object.keys(s)[R]]=d.children[R];w(),v()}},[i,r,o,d,s,a,c,h,p,y,T,I,C,O,D,U,ne,P,M]}class hr extends Ne{constructor(e){super(),Te(this,e,Op,Dp,ce,{chosenBuild:0,ddOpen:1,dropdown:2})}}function Ro(t){let e,n=(t[6]>t[5]*.8?t[11].slice(0,20)+"<b>...</b>":t[11])+"",s;return{c(){e=g("span"),be(()=>t[15].call(e))},m(i,r){H(i,e,r),e.innerHTML=n,s=rt(e,t[15].bind(e))},p(i,r){r[0]&2144&&n!==(n=(i[6]>i[5]*.8?i[11].slice(0,20)+"<b>...</b>":i[11])+"")&&(e.innerHTML=n)},d(i){i&&W(e),s()}}}function Ao(t){let e;return{c(){e=g("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(n,s){H(n,e,s)},d(n){n&&W(e)}}}function Rp(t){let e,n,s,i,r,o=t[11],l,a,u,d,c,f,h,p,b,v,y,T,w,I,C=275-t[2].length+"",O,D,U,ne,P,M,R,K,Y,S,$,re,A,V,de,L,k,B,X,ye,Ge,E=Ro(t),ie=t[1]!=null&&t[1]!=t[2]&&Ao();function _e(oe){t[26](oe)}function Ae(oe){t[27](oe)}function Nt(oe){t[28](oe)}let Dt={};return t[0]!==void 0&&(Dt.chosenBuild=t[0]),t[3]!==void 0&&(Dt.ddOpen=t[3]),t[9]!==void 0&&(Dt.dropdown=t[9]),V=new hr({props:Dt}),Z.push(()=>we(V,"chosenBuild",_e)),Z.push(()=>we(V,"ddOpen",Ae)),Z.push(()=>we(V,"dropdown",Nt)),V.$on("buildSelect",t[29]),{c(){e=g("div"),n=g("div"),s=g("span"),s.textContent="Save to:",i=F(),r=g("button"),E.c(),l=F(),a=g("iconify-icon"),c=F(),f=g("div"),h=g("div"),p=g("span"),p.textContent="Description / Notes:",b=F(),ie&&ie.c(),v=F(),y=g("textarea"),w=F(),I=g("span"),O=te(C),D=F(),U=g("div"),ne=g("div"),P=g("button"),M=te("CANCEL"),K=F(),Y=g("div"),S=g("button"),$=te("SAVE"),A=F(),pe(V.$$.fragment),Ft(a,"icon","iconamoon:arrow-down-2-fill"),m(r,"id","firstFocusable"),r.disabled=u=t[12].save.status==0,m(r,"class","promptDDButton svelte-106wt5q"),be(()=>t[17].call(r)),J(r,"ddOpen",t[3]),m(n,"class","chosenBuildCont"),m(y,"class","buildDescInput"),y.disabled=T=t[12].save.status==0,m(y,"placeholder","[Empty]"),m(y,"maxlength","275"),m(y,"autocomplete","off"),m(I,"class","charCounter"),m(I,"id","buildDesc"),m(f,"class","buildDescCont"),P.disabled=R=t[12].save.status==0,m(S,"id","lastFocusable"),S.disabled=re=t[12].save.status==0,m(U,"class","promptOptions"),m(e,"class","buildSaver")},m(oe,ze){H(oe,e,ze),_(e,n),_(n,s),_(n,i),_(n,r),E.m(r,null),_(r,l),_(r,a),t[16](r),d=rt(r,t[17].bind(r)),_(e,c),_(e,f),_(f,h),_(h,p),_(h,b),ie&&ie.m(h,null),_(f,v),_(f,y),t[19](y),st(y,t[10]),_(f,w),_(f,I),_(I,O),_(e,D),_(e,U),_(U,ne),_(ne,P),_(P,M),t[23](P),_(U,K),_(U,Y),_(Y,S),_(S,$),_(e,A),fe(V,e,null),X=!0,ye||(Ge=[N(window,"mousedown",t[14]),N(r,"click",t[18]),N(r,"keydown",Gt),N(y,"input",t[20]),N(y,"input",t[21]),N(y,"keydown",t[22]),N(P,"click",t[24]),N(S,"click",t[25]),N(S,"keydown",pn),N(e,"introstart",t[30]),N(e,"keydown",t[31])],ye=!0)},p(oe,ze){ze[0]&2048&&ce(o,o=oe[11])?(E.d(1),E=Ro(oe),E.c(),E.m(r,l)):E.p(oe,ze),(!X||ze[0]&4096&&u!==(u=oe[12].save.status==0))&&(r.disabled=u),(!X||ze[0]&8)&&J(r,"ddOpen",oe[3]),oe[1]!=null&&oe[1]!=oe[2]?ie||(ie=Ao(),ie.c(),ie.m(h,null)):ie&&(ie.d(1),ie=null),(!X||ze[0]&4096&&T!==(T=oe[12].save.status==0))&&(y.disabled=T),ze[0]&1024&&st(y,oe[10]),(!X||ze[0]&4)&&C!==(C=275-oe[2].length+"")&&ke(O,C),(!X||ze[0]&4096&&R!==(R=oe[12].save.status==0))&&(P.disabled=R),(!X||ze[0]&4096&&re!==(re=oe[12].save.status==0))&&(S.disabled=re);const xn={};!de&&ze[0]&1&&(de=!0,xn.chosenBuild=oe[0],ve(()=>de=!1)),!L&&ze[0]&8&&(L=!0,xn.ddOpen=oe[3],ve(()=>L=!1)),!k&&ze[0]&512&&(k=!0,xn.dropdown=oe[9],ve(()=>k=!1)),V.$set(xn)},i(oe){X||(z(V.$$.fragment,oe),oe&&be(()=>{X&&(B||(B=Re(e,lt,{duration:250},!0)),B.run(1))}),X=!0)},o(oe){j(V.$$.fragment,oe),oe&&(B||(B=Re(e,lt,{duration:250},!1)),B.run(0)),X=!1},d(oe){oe&&W(e),E.d(oe),t[16](null),d(),ie&&ie.d(),t[19](null),t[23](null),he(V),oe&&B&&B.end(),ye=!1,ge(Ge)}}}function Ap(t,e,n){let s,i,r,o,l,a,u,d;x(t,ee,B=>n(12,o=B)),x(t,Xe,B=>n(32,l=B)),x(t,nt,B=>n(33,a=B)),x(t,wt,B=>n(34,u=B)),x(t,ft,B=>n(35,d=B));let c=!1,f,h,p,b,v,y,T=Object.entries(a)[0],w=null;function I(){G(ee,o.save.status=0,o);let B=Wa(d,u),X=w==null?i:w==""?"[Empty]":w,ye=T[1].id;B.name=s,B.desc=X,Fs(_t(an(un),`builds/${ye}`),B).then(()=>{G(ee,o.save.status=1,o);let Ge={...a};Ge[s].desc=X,nt.update(()=>Ge),G(Xe,l=B,l),G(Xe,l.id=ye,l)}).catch(()=>{G(ee,o.save.status=-1,o),G(ee,o.message="firebase_fail",o)})}const C=B=>{!f.contains(B.target)&&!y.contains(B.target)&&n(3,c=!1)};function O(){p=this.offsetWidth,n(6,p)}function D(B){Z[B?"unshift":"push"](()=>{f=B,n(4,f)})}function U(){h=this.offsetWidth,n(5,h)}const ne=()=>{o.save.status!=0&&n(3,c=!c)};function P(B){Z[B?"unshift":"push"](()=>{b=B,n(7,b)})}function M(){r=this.value,n(10,r),n(1,w),n(2,i),n(0,T)}const R=B=>{n(1,w=Es(B.target.value,275))},K=B=>{o.save.status==0&&B.preventDefault(),wi(b,B.target.value,275)};function Y(B){Z[B?"unshift":"push"](()=>{v=B,n(8,v)})}const S=()=>{o.save.status!=0&&G(ee,o.save.ongoing=!1,o)},$=()=>{o.save.status!=0&&I()};function re(B){T=B,n(0,T)}function A(B){c=B,n(3,c)}function V(B){y=B,n(9,y)}const de=()=>n(1,w=null),L=()=>v.focus(),k=B=>{B.key=="Escape"&&(n(3,c=!1),f.focus())};return t.$$.update=()=>{t.$$.dirty[0]&1&&n(11,s=T[0]),t.$$.dirty[0]&1&&n(2,i=T[1].desc),t.$$.dirty[0]&6&&n(10,r=w??i)},[T,w,i,c,f,h,p,b,v,y,r,s,o,I,C,O,D,U,ne,P,M,R,K,Y,S,$,re,A,V,de,L,k]}class Pp extends Ne{constructor(e){super(),Te(this,e,Ap,Rp,ce,{},null,[-1,-1])}}function Mp(t){let e,n,s,i,r,o,l,a,u;return{c(){e=g("div"),n=g("span"),n.textContent="ID:",s=F(),i=g("input"),m(i,"class","buildIDInput svelte-1wfx9qu"),i.disabled=r=t[11].load.status==0,m(i,"type","text"),m(i,"placeholder","Example ID: -NDqeA1Scn0EAJcYWN3b"),m(i,"maxlength","25"),m(e,"class","buildIDCont svelte-1wfx9qu")},m(d,c){H(d,e,c),_(e,n),_(e,s),_(e,i),t[21](i),st(i,t[10]),l=!0,a||(u=[N(i,"input",t[22]),N(i,"input",t[23]),N(i,"keydown",t[24])],a=!0)},p(d,c){(!l||c[0]&2048&&r!==(r=d[11].load.status==0))&&(i.disabled=r),c[0]&1024&&i.value!==d[10]&&st(i,d[10])},i(d){l||(d&&be(()=>{l&&(o||(o=Re(e,Ue,{duration:150},!0)),o.run(1))}),l=!0)},o(d){d&&(o||(o=Re(e,Ue,{duration:150},!1)),o.run(0)),l=!1},d(d){d&&W(e),t[21](null),d&&o&&o.end(),a=!1,ge(u)}}}function Lp(t){let e,n,s,i,r=t[9],o,l,a,u,d,c,f,h,p=Po(t);return{c(){e=g("div"),n=g("span"),n.textContent="Load:",s=F(),i=g("button"),p.c(),o=F(),l=g("iconify-icon"),Ft(l,"icon","iconamoon:arrow-down-2-fill"),i.disabled=a=t[11].load.status==0,m(i,"class","promptDDButton svelte-1wfx9qu"),be(()=>t[19].call(i)),J(i,"ddOpen",t[8]),m(e,"class","chosenBuildCont svelte-1wfx9qu")},m(b,v){H(b,e,v),_(e,n),_(e,s),_(e,i),p.m(i,null),_(i,o),_(i,l),t[18](i),u=rt(i,t[19].bind(i)),c=!0,f||(h=N(i,"click",t[20]),f=!0)},p(b,v){v[0]&512&&ce(r,r=b[9])?(p.d(1),p=Po(b),p.c(),p.m(i,o)):p.p(b,v),(!c||v[0]&2048&&a!==(a=b[11].load.status==0))&&(i.disabled=a),(!c||v[0]&256)&&J(i,"ddOpen",b[8])},i(b){c||(b&&be(()=>{c&&(d||(d=Re(e,Ue,{duration:150},!0)),d.run(1))}),c=!0)},o(b){b&&(d||(d=Re(e,Ue,{duration:150},!1)),d.run(0)),c=!1},d(b){b&&W(e),p.d(b),t[18](null),u(),b&&d&&d.end(),f=!1,h()}}}function Po(t){let e,n=(t[6]>t[5]*.7?t[9].slice(0,20)+"<b>...</b>":t[9])+"",s;return{c(){e=g("span"),be(()=>t[17].call(e))},m(i,r){H(i,e,r),e.innerHTML=n,s=rt(e,t[17].bind(e))},p(i,r){r[0]&608&&n!==(n=(i[6]>i[5]*.7?i[9].slice(0,20)+"<b>...</b>":i[9])+"")&&(e.innerHTML=n)},d(i){i&&W(e),s()}}}function Mo(t){let e,n,s,i,r;function o(d){t[27](d)}function l(d){t[28](d)}function a(d){t[29](d)}let u={};return t[3]!==void 0&&(u.chosenBuild=t[3]),t[8]!==void 0&&(u.ddOpen=t[8]),t[7]!==void 0&&(u.dropdown=t[7]),e=new hr({props:u}),Z.push(()=>we(e,"chosenBuild",o)),Z.push(()=>we(e,"ddOpen",l)),Z.push(()=>we(e,"dropdown",a)),{c(){pe(e.$$.fragment)},m(d,c){fe(e,d,c),r=!0},p(d,c){const f={};!n&&c[0]&8&&(n=!0,f.chosenBuild=d[3],ve(()=>n=!1)),!s&&c[0]&256&&(s=!0,f.ddOpen=d[8],ve(()=>s=!1)),!i&&c[0]&128&&(i=!0,f.dropdown=d[7],ve(()=>i=!1)),e.$set(f)},i(d){r||(z(e.$$.fragment,d),r=!0)},o(d){j(e.$$.fragment,d),r=!1},d(d){he(e,d)}}}function Bp(t){let e,n,s,i,r,o,l,a,u,d,c,f,h,p,b,v,y,T,w,I,C,O,D,U,ne,P,M,R,K,Y,S,$,re;const A=[Lp,Mp],V=[];function de(k,B){return k[2]?0:1}v=de(t),y=V[v]=A[v](t);let L=t[2]&&Mo(t);return{c(){e=g("div"),n=g("span"),n.textContent="Load build via:",s=F(),i=g("div"),r=g("div"),o=g("button"),l=te("Local saves"),u=F(),d=g("div"),c=g("button"),f=te("Exported ID"),p=F(),b=g("div"),y.c(),T=F(),w=g("div"),I=g("div"),C=g("button"),O=te("CANCEL"),U=F(),ne=g("div"),P=g("button"),M=te("LOAD"),K=F(),L&&L.c(),m(n,"class","svelte-1wfx9qu"),m(o,"id","firstFocusable"),o.disabled=a=t[11].load.status==0||!t[12],m(o,"class","svelte-1wfx9qu"),J(o,"chosen",t[2]),J(o,"unavailable",!t[12]),m(r,"class","svelte-1wfx9qu"),c.disabled=h=t[11].load.status==0,m(c,"class","svelte-1wfx9qu"),J(c,"chosen",!t[2]),m(d,"class","svelte-1wfx9qu"),m(i,"class","loadMethodRadio svelte-1wfx9qu"),m(b,"class","loadMethodCont svelte-1wfx9qu"),C.disabled=D=t[11].load.status==0,m(P,"id","lastFocusable"),P.disabled=R=t[11].load.status==0,m(w,"class","promptOptions svelte-1wfx9qu"),m(e,"class","buildLoader svelte-1wfx9qu")},m(k,B){H(k,e,B),_(e,n),_(e,s),_(e,i),_(i,r),_(r,o),_(o,l),_(i,u),_(i,d),_(d,c),_(c,f),_(e,p),_(e,b),V[v].m(b,null),_(e,T),_(e,w),_(w,I),_(I,C),_(C,O),t[25](C),_(w,U),_(w,ne),_(ne,P),_(P,M),_(e,K),L&&L.m(e,null),S=!0,$||(re=[N(window,"mousedown",t[14]),N(o,"click",t[15]),N(o,"keydown",Gt),N(c,"click",t[16]),N(C,"click",t[26]),N(P,"keydown",pn),N(P,"click",t[13]),N(e,"introstart",t[30]),N(e,"keydown",t[31])],$=!0)},p(k,B){(!S||B[0]&6144&&a!==(a=k[11].load.status==0||!k[12]))&&(o.disabled=a),(!S||B[0]&4)&&J(o,"chosen",k[2]),(!S||B[0]&4096)&&J(o,"unavailable",!k[12]),(!S||B[0]&2048&&h!==(h=k[11].load.status==0))&&(c.disabled=h),(!S||B[0]&4)&&J(c,"chosen",!k[2]);let X=v;v=de(k),v===X?V[v].p(k,B):(Pe(),j(V[X],1,1,()=>{V[X]=null}),Me(),y=V[v],y?y.p(k,B):(y=V[v]=A[v](k),y.c()),z(y,1),y.m(b,null)),(!S||B[0]&2048&&D!==(D=k[11].load.status==0))&&(C.disabled=D),(!S||B[0]&2048&&R!==(R=k[11].load.status==0))&&(P.disabled=R),k[2]?L?(L.p(k,B),B[0]&4&&z(L,1)):(L=Mo(k),L.c(),z(L,1),L.m(e,null)):L&&(Pe(),j(L,1,1,()=>{L=null}),Me())},i(k){S||(z(y),z(L),k&&be(()=>{S&&(Y||(Y=Re(e,lt,{duration:250},!0)),Y.run(1))}),S=!0)},o(k){j(y),j(L),k&&(Y||(Y=Re(e,lt,{duration:250},!1)),Y.run(0)),S=!1},d(k){k&&W(e),V[v].d(),t[25](null),L&&L.d(),k&&Y&&Y.end(),$=!1,ge(re)}}}function Fp(t,e,n){let s,i,r;x(t,ee,L=>n(11,s=L)),x(t,nt,L=>n(32,i=L)),x(t,Wt,L=>n(12,r=L));const o=It();let l,a,u,d,c,f,h=r,p=!1,b=r?Object.entries(i)[0]:null,v,y="";function T(){if(!h&&!y.startsWith("-N")){G(ee,s.load.status=-1,s),G(ee,s.message="invalid_id",s);return}let L=La(an(un,"builds"),Ma()),k=0;G(ee,s.load.status=0,s),Pa(L).then(B=>{let X=h?b[1].id:y;for(let ye in B.val()){if(ye==X){o("buildLoad",{build:B.val()[ye],id:ye});break}else k==Object.keys(B.val()).length-1&&(G(ee,s.load.status=-1,s),G(ee,s.message=h?"not_found":"invalid_id",s));k++}}).catch(()=>{G(ee,s.load.status=-1,s),G(ee,s.message="firebase_fail",s)})}const w=L=>{l&&!l.contains(L.target)&&!f.contains(L.target)&&n(8,p=!1)},I=()=>{s.load.status!=0&&r&&n(2,h=!0)},C=()=>{s.load.status!=0&&n(2,h=!1)};function O(){c=this.offsetWidth,n(6,c)}function D(L){Z[L?"unshift":"push"](()=>{l=L,n(0,l)})}function U(){d=this.offsetWidth,n(5,d)}const ne=()=>{s.load.status!=0&&n(8,p=!p)};function P(L){Z[L?"unshift":"push"](()=>{u=L,n(1,u)})}function M(){y=this.value,n(10,y)}const R=L=>{n(10,y=Es(L.target.value,25))},K=L=>{s.load.status==0&&L.preventDefault()};function Y(L){Z[L?"unshift":"push"](()=>{a=L,n(4,a)})}const S=()=>{s.load.status!=0&&G(ee,s.load.ongoing=!1,s)};function $(L){b=L,n(3,b)}function re(L){p=L,n(8,p)}function A(L){f=L,n(7,f)}const V=()=>a.focus(),de=L=>{L.key=="Escape"&&(n(8,p=!1),l.focus())};return t.$$.update=()=>{t.$$.dirty[0]&8&&n(9,v=b!=null?b[0]:null),t.$$.dirty[0]&7&&setTimeout(h?()=>l.focus():()=>u.focus())},[l,u,h,b,a,d,c,f,p,v,y,s,r,T,w,I,C,O,D,U,ne,P,M,R,K,Y,S,$,re,A,V,de]}class Wp extends Ne{constructor(e){super(),Te(this,e,Fp,Bp,ce,{},null,[-1,-1])}}function Lo(t){let e,n=(t[3]>t[4]*.8?t[8].slice(0,20)+"<b>...</b>":t[8])+"",s;return{c(){e=g("span"),be(()=>t[12].call(e))},m(i,r){H(i,e,r),e.innerHTML=n,s=rt(e,t[12].bind(e))},p(i,r){r&280&&n!==(n=(i[3]>i[4]*.8?i[8].slice(0,20)+"<b>...</b>":i[8])+"")&&(e.innerHTML=n)},d(i){i&&W(e),s()}}}function qp(t){let e,n,s,i,r,o=t[8],l,a,u,d,c,f,h,p,b,v,y,T,w,I,C,O,D,U,ne,P,M,R,K,Y,S,$,re,A,V=Lo(t);f=new qa({props:{text:"I'm aware that this action is irreversible and want to erase this build from the database."}}),f.$on("toggle",t[16]);function de(X){t[21](X)}function L(X){t[22](X)}function k(X){t[23](X)}let B={};return t[0]!==void 0&&(B.chosenBuild=t[0]),t[6]!==void 0&&(B.ddOpen=t[6]),t[5]!==void 0&&(B.dropdown=t[5]),M=new hr({props:B}),Z.push(()=>we(M,"chosenBuild",de)),Z.push(()=>we(M,"ddOpen",L)),Z.push(()=>we(M,"dropdown",k)),{c(){e=g("div"),n=g("div"),s=g("span"),s.textContent="Delete:",i=F(),r=g("button"),V.c(),l=F(),a=g("iconify-icon"),c=F(),pe(f.$$.fragment),h=F(),p=g("div"),b=g("div"),v=g("button"),y=te("CANCEL"),I=F(),C=g("div"),O=g("button"),D=te("DELETE"),P=F(),pe(M.$$.fragment),Ft(a,"icon","iconamoon:arrow-down-2-fill"),m(r,"class","promptDDButton svelte-1t9ajmz"),m(r,"id","firstFocusable"),r.disabled=u=t[9].delete.status==0,be(()=>t[14].call(r)),J(r,"ddOpen",t[6]),m(n,"class","chosenBuildCont"),m(v,"id",T=t[7]?"":"lastFocusable"),v.disabled=w=t[9].delete.status==0,O.disabled=U=!t[7]||t[9].delete.status==0,m(O,"id",ne=t[7]?"lastFocusable":""),J(O,"unavailable",!t[7]),m(p,"class","promptOptions svelte-1t9ajmz"),m(e,"class","buildDeleter svelte-1t9ajmz")},m(X,ye){H(X,e,ye),_(e,n),_(n,s),_(n,i),_(n,r),V.m(r,null),_(r,l),_(r,a),t[13](r),d=rt(r,t[14].bind(r)),_(e,c),fe(f,e,null),_(e,h),_(e,p),_(p,b),_(b,v),_(v,y),t[17](v),_(p,I),_(p,C),_(C,O),_(O,D),_(e,P),fe(M,e,null),$=!0,re||(A=[N(window,"mousedown",t[11]),N(r,"click",t[15]),N(r,"keydown",Gt),N(v,"click",t[18]),N(v,"keydown",t[19]),N(O,"click",t[20]),N(O,"keydown",pn),N(e,"introstart",t[24]),N(e,"keydown",t[25])],re=!0)},p(X,[ye]){ye&256&&ce(o,o=X[8])?(V.d(1),V=Lo(X),V.c(),V.m(r,l)):V.p(X,ye),(!$||ye&512&&u!==(u=X[9].delete.status==0))&&(r.disabled=u),(!$||ye&64)&&J(r,"ddOpen",X[6]),(!$||ye&128&&T!==(T=X[7]?"":"lastFocusable"))&&m(v,"id",T),(!$||ye&512&&w!==(w=X[9].delete.status==0))&&(v.disabled=w),(!$||ye&640&&U!==(U=!X[7]||X[9].delete.status==0))&&(O.disabled=U),(!$||ye&128&&ne!==(ne=X[7]?"lastFocusable":""))&&m(O,"id",ne),(!$||ye&128)&&J(O,"unavailable",!X[7]);const Ge={};!R&&ye&1&&(R=!0,Ge.chosenBuild=X[0],ve(()=>R=!1)),!K&&ye&64&&(K=!0,Ge.ddOpen=X[6],ve(()=>K=!1)),!Y&&ye&32&&(Y=!0,Ge.dropdown=X[5],ve(()=>Y=!1)),M.$set(Ge)},i(X){$||(z(f.$$.fragment,X),z(M.$$.fragment,X),X&&be(()=>{$&&(S||(S=Re(e,lt,{duration:250},!0)),S.run(1))}),$=!0)},o(X){j(f.$$.fragment,X),j(M.$$.fragment,X),X&&(S||(S=Re(e,lt,{duration:250},!1)),S.run(0)),$=!1},d(X){X&&W(e),V.d(X),t[13](null),d(),he(f),t[17](null),he(M),X&&S&&S.end(),re=!1,ge(A)}}}function zp(t,e,n){let s,i,r,o;x(t,ee,S=>n(9,i=S)),x(t,nt,S=>n(26,r=S)),x(t,Xe,S=>n(27,o=S));let l,a,u,d,c,f=!1,h=Object.entries(r)[0],p=!1;function b(){G(ee,i.delete.status=0,i);let S=h[1].id;zh(_t(an(un),`builds/${S}`)).then(()=>{G(ee,i.delete.status=1,i),o&&S==o.id&&G(Xe,o=null,o);let $={...r};delete $[s],nt.update(()=>$)}).catch($=>{console.log($),G(ee,i.delete.status=-1,i),G(ee,i.message="firebase_fail",i)})}const v=S=>{!a.contains(S.target)&&!c.contains(S.target)&&n(6,f=!1)};function y(){u=this.offsetWidth,n(3,u)}function T(S){Z[S?"unshift":"push"](()=>{a=S,n(2,a)})}function w(){d=this.offsetWidth,n(4,d)}const I=()=>{i.delete.status!=0&&n(6,f=!f)},C=S=>n(7,p=S.detail);function O(S){Z[S?"unshift":"push"](()=>{l=S,n(1,l)})}const D=()=>{i.delete.status!=0&&G(ee,i.delete.ongoing=!1,i)},U=S=>{p||pn(S)},ne=()=>{p&&i.delete.status!=0&&b()};function P(S){h=S,n(0,h)}function M(S){f=S,n(6,f)}function R(S){c=S,n(5,c)}const K=()=>l.focus(),Y=S=>{S.key=="Escape"&&(n(6,f=!1),a.focus())};return t.$$.update=()=>{t.$$.dirty&1&&n(8,s=h[0])},[h,l,a,u,d,c,f,p,s,i,b,v,y,T,w,I,C,O,D,U,ne,P,M,R,K,Y]}class Hp extends Ne{constructor(e){super(),Te(this,e,zp,qp,ce,{})}}const{document:$n,window:Zt}=Ga;function Bo(t,e,n){const s=t.slice();return s[5]=e[n],s}function Fo(t){let e;return{c(){e=g("link"),m(e,"rel","preload"),m(e,"as","image"),m(e,"href",t[5])},m(n,s){H(n,e,s)},p:Q,d(n){n&&W(e)}}}function Wo(t){let e;return{c(){e=g("style"),e.textContent=`body {\r
                -webkit-backdrop-filter: blur(calc(var(--u) * 0.5));\r
                backdrop-filter: blur(calc(var(--u) * 0.5));\r
            }\r
            body > div:not(.zoomLevel),\r
            main > :not(.promptCont) {\r
                filter: blur(calc(var(--u) * 0.5));\r
                pointer-events: none;\r
            }`},m(n,s){H(n,e,s)},d(n){n&&W(e)}}}function qo(t){let e,n,s=Math.floor(t[12][t[3]]*100)+"",i,r,o,l;return{c(){e=g("div"),n=te("Zoom: "),i=te(s),r=g("b"),r.textContent="%",m(e,"class","zoomLevel svelte-1km5ujz")},m(a,u){H(a,e,u),_(e,n),_(e,i),_(e,r),l=!0},p(a,u){(!l||u[0]&8)&&s!==(s=Math.floor(a[12][a[3]]*100)+"")&&ke(i,s)},i(a){l||(a&&be(()=>{l&&(o||(o=Re(e,Ue,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=Re(e,Ue,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&W(e),a&&o&&o.end()}}}function zo(t){let e,n,s=t[11].name+"",i,r,o,l,a,u,d,c,f,h,p=t[11].desc+"",b,v,y,T,w;return{c(){e=g("div"),n=g("span"),i=te(s),r=F(),o=g("button"),o.innerHTML='<iconify-icon icon="ri:share-fill"></iconify-icon> <span class="tooltip" id="right">Share build</span>',l=F(),a=g("span"),u=te(`Description / Notes:\r
                `),d=g("br"),c=F(),f=g("br"),h=F(),b=te(p),m(n,"id","buildName"),m(n,"class","svelte-1km5ujz"),m(o,"class","svelte-1km5ujz"),m(a,"class","tooltip"),m(a,"id","bottom"),m(e,"class","currentBuild svelte-1km5ujz"),J(e,"no-tooltip",t[8])},m(I,C){H(I,e,C),_(e,n),_(n,i),_(e,r),_(e,o),_(e,l),_(e,a),_(a,u),_(a,d),_(a,c),_(a,f),_(a,h),_(a,b),y=!0,T||(w=[N(o,"click",t[22]),N(o,"mouseenter",t[23]),N(o,"mouseleave",t[24])],T=!0)},p(I,C){(!y||C[0]&2048)&&s!==(s=I[11].name+"")&&ke(i,s),(!y||C[0]&2048)&&p!==(p=I[11].desc+"")&&ke(b,p),(!y||C[0]&256)&&J(e,"no-tooltip",I[8])},i(I){y||(I&&be(()=>{y&&(v||(v=Re(e,Ue,{duration:100},!0)),v.run(1))}),y=!0)},o(I){I&&(v||(v=Re(e,Ue,{duration:100},!1)),v.run(0)),y=!1},d(I){I&&W(e),I&&v&&v.end(),T=!1,ge(w)}}}function Up(t){let e,n,s;return n=new Hp({}),{c(){e=g("div"),pe(n.$$.fragment),m(e,"class","promptCont svelte-1km5ujz")},m(i,r){H(i,e,r),fe(n,e,null),s=!0},p:Q,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){j(n.$$.fragment,i),s=!1},d(i){i&&W(e),he(n)}}}function jp(t){let e,n,s;return n=new Wp({}),n.$on("buildLoad",t[26]),{c(){e=g("div"),pe(n.$$.fragment),m(e,"class","promptCont svelte-1km5ujz")},m(i,r){H(i,e,r),fe(n,e,null),s=!0},p:Q,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){j(n.$$.fragment,i),s=!1},d(i){i&&W(e),he(n)}}}function Vp(t){let e,n,s;return n=new Pp({}),{c(){e=g("div"),pe(n.$$.fragment),m(e,"class","promptCont svelte-1km5ujz")},m(i,r){H(i,e,r),fe(n,e,null),s=!0},p:Q,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){j(n.$$.fragment,i),s=!1},d(i){i&&W(e),he(n)}}}function Gp(t){let e,n,s;return n=new lp({}),{c(){e=g("div"),pe(n.$$.fragment),m(e,"class","promptCont svelte-1km5ujz")},m(i,r){H(i,e,r),fe(n,e,null),s=!0},p:Q,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){j(n.$$.fragment,i),s=!1},d(i){i&&W(e),he(n)}}}function Yp(t){let e,n,s,i;function r(l){t[25](l)}let o={};return t[7]!==void 0&&(o.loadID=t[7]),n=new kp({props:o}),Z.push(()=>we(n,"loadID",r)),n.$on("resetActions",t[16]),{c(){e=g("div"),pe(n.$$.fragment),m(e,"class","promptCont svelte-1km5ujz")},m(l,a){H(l,e,a),fe(n,e,null),i=!0},p(l,a){const u={};!s&&a[0]&128&&(s=!0,u.loadID=l[7],ve(()=>s=!1)),n.$set(u)},i(l){i||(z(n.$$.fragment,l),i=!0)},o(l){j(n.$$.fragment,l),i=!1},d(l){l&&W(e),he(n)}}}function Kp(t){let e,n,s,i,r,o,l,a,u,d,c,f,h,p,b,v,y,T,w,I,C,O,D,U,ne;be(t[21]);let P=xe(t[14]),M=[];for(let A=0;A<P.length;A+=1)M[A]=Fo(Bo(t,P,A));let R=t[10]&&Wo(),K=t[6]&&qo(t),Y=t[11]&&zo(t);u=new X_({}),h=new I_({}),b=new M_({}),y=new K_({}),w=new ip({});const S=[Yp,Gp,Vp,jp,Up],$=[];function re(A,V){return A[9]||A[4].share.ongoing?0:A[4].export.ongoing?1:A[4].save.ongoing?2:A[4].load.ongoing&&!A[7]?3:A[4].delete.ongoing?4:-1}return~(C=re(t))&&(O=$[C]=S[C](t)),{c(){for(let A=0;A<M.length;A+=1)M[A].c();e=Bt(),R&&R.c(),n=Bt(),s=F(),i=g("div"),i.textContent=`v${xp}`,r=F(),K&&K.c(),o=F(),l=g("main"),Y&&Y.c(),a=F(),pe(u.$$.fragment),d=F(),c=g("div"),f=g("div"),pe(h.$$.fragment),p=F(),pe(b.$$.fragment),v=F(),pe(y.$$.fragment),T=F(),pe(w.$$.fragment),I=F(),O&&O.c(),m(i,"style","position: absolute; bottom: 0; padding: var(--u); font-size: calc(var(--u) * 2.5); color: var(--light);"),m(f,"class","eqCont svelte-1km5ujz"),m(c,"class","calcBox svelte-1km5ujz"),m(l,"class","svelte-1km5ujz"),J(l,"portrait-NOT",!t[2])},m(A,V){for(let de=0;de<M.length;de+=1)M[de]&&M[de].m($n.head,null);_($n.head,e),R&&R.m($n.head,null),_($n.head,n),H(A,s,V),H(A,i,V),H(A,r,V),K&&K.m(A,V),H(A,o,V),H(A,l,V),Y&&Y.m(l,null),_(l,a),fe(u,l,null),_(l,d),_(l,c),_(c,f),fe(h,f,null),_(f,p),fe(b,f,null),_(c,v),fe(y,c,null),_(l,T),fe(w,l,null),_(l,I),~C&&$[C].m(l,null),D=!0,U||(ne=[N(Zt,"storage",t[18]),N(Zt,"wheel",t[19],{passive:!1}),N(Zt,"keydown",t[20]),N(Zt,"resize",t[21])],U=!0)},p(A,V){if(V[0]&16384){P=xe(A[14]);let L;for(L=0;L<P.length;L+=1){const k=Bo(A,P,L);M[L]?M[L].p(k,V):(M[L]=Fo(k),M[L].c(),M[L].m(e.parentNode,e))}for(;L<M.length;L+=1)M[L].d(1);M.length=P.length}A[10]?R||(R=Wo(),R.c(),R.m(n.parentNode,n)):R&&(R.d(1),R=null),A[6]?K?(K.p(A,V),V[0]&64&&z(K,1)):(K=qo(A),K.c(),z(K,1),K.m(o.parentNode,o)):K&&(Pe(),j(K,1,1,()=>{K=null}),Me()),A[11]?Y?(Y.p(A,V),V[0]&2048&&z(Y,1)):(Y=zo(A),Y.c(),z(Y,1),Y.m(l,a)):Y&&(Pe(),j(Y,1,1,()=>{Y=null}),Me());let de=C;C=re(A),C===de?~C&&$[C].p(A,V):(O&&(Pe(),j($[de],1,1,()=>{$[de]=null}),Me()),~C?(O=$[C],O?O.p(A,V):(O=$[C]=S[C](A),O.c()),z(O,1),O.m(l,null)):O=null),(!D||V[0]&4)&&J(l,"portrait-NOT",!A[2])},i(A){D||(z(K),z(Y),z(u.$$.fragment,A),z(h.$$.fragment,A),z(b.$$.fragment,A),z(y.$$.fragment,A),z(w.$$.fragment,A),z(O),D=!0)},o(A){j(K),j(Y),j(u.$$.fragment,A),j(h.$$.fragment,A),j(b.$$.fragment,A),j(y.$$.fragment,A),j(w.$$.fragment,A),j(O),D=!1},d(A){A&&(W(s),W(i),W(r),W(o),W(l)),jt(M,A),W(e),R&&R.d(A),W(n),K&&K.d(A),Y&&Y.d(),he(u),he(h),he(b),he(y),he(w),~C&&$[C].d(),U=!1,ge(ne)}}}let xp="3.17.4-alpha";function Qp(t,e,n){let s,i,r,o,l,a,u,d,c,f,h;x(t,ee,E=>n(4,i=E)),x(t,In,E=>n(10,r=E)),x(t,Di,E=>n(17,o=E)),x(t,Xe,E=>n(11,l=E)),x(t,rs,E=>n(30,a=E)),x(t,wt,E=>n(31,u=E)),x(t,Tn,E=>n(32,d=E)),x(t,ft,E=>n(33,c=E)),x(t,Wt,E=>n(34,f=E)),x(t,nt,E=>n(35,h=E));let p,b,v,y=7,T=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],w=!1,I,C=new URLSearchParams(window.location.search).get("id");$a(()=>{if(C)if(G(ee,i.load.ongoing=!0,i),!C.startsWith("-N"))G(ee,i.load.status=-1,i),G(ee,i.message="invalid_id",i);else{G(ee,i.load.status=0,i);let E=La(an(un,"builds"),Ma()),ie=0;Pa(E).then(_e=>{for(let Ae in _e.val()){if(Ae==C){O(_e.val()[Ae],Ae);break}else ie==Object.keys(_e.val()).length-1&&(G(ee,i.load.status=-1,i),G(ee,i.message="invalid_id",i));ie++}}).catch(()=>{G(ee,i.load.status=-1,i),G(ee,i.message="firebase_fail",i)})}n(2,v=b>p),h[Object.keys(h)[0]]&&G(Wt,f=!0,f)});function O(E,ie){for(let _e in E.eq){let Ae=c[_e]||ur;E.eq[_e]&&E.eq[_e]!=Ae.name?d[_e][E.eq[_e]].querySelector("button").click():!E.eq[_e]&&Ae.name&&d[_e][Ae.name].querySelector("button").click()}for(let _e of qn){let Ae=u[_e]||cr;Ae.name&&a[_e][Ae.name].querySelector("button").click()}setTimeout(()=>{for(let _e of qn)E.gear[_e]&&a[_e][E.gear[_e]].querySelector("button").click();G(ee,i.load.ongoing=!1,i),G(ee,i.load.status=null,i),G(Xe,l=E,l),G(Xe,l.id=ie,l),n(7,C=null)})}let D=[],U=[],ne="",P,M=9;for(let E=0;E<M;E++)D.push(`https://raw.githubusercontent.com/XT8SS/fc-sv/gh-pages/backgrounds/BG${E}.jpg`);function R(E){P=Math.floor(Math.random()*E.length)}R(D);function K(){n(5,ne=D[P]),U.push(P)}K(),function E(){setTimeout(()=>{if(R(D),!U.length)K();else{if(!U.includes(P))K();else{let ie=[...Array(M).keys()].filter(_e=>!U.includes(_e));R(ie),K()}U.length>3&&(U=U.slice(1))}document.hasFocus&&E()},45e3)}();function Y(){I=setTimeout(()=>{n(6,w=!1)},2e3)}function S(){clearTimeout(I),n(6,w=!0),Y()}function $(){G(ee,i.export.status=null,i),G(ee,i.export.ongoing=!1,i),G(ee,i.save.status=null,i),G(ee,i.save.ongoing=!1,i),G(ee,i.load.status=null,i),G(ee,i.load.ongoing=!1,i),G(ee,i.delete.status=null,i),G(ee,i.delete.ongoing=!1,i),G(ee,i.share.ongoing=!1,i),G(ee,i.message="",i)}let re=!1;const A=E=>{E.key=="builds"&&location.reload()},V=E=>{let ie=E.wheelDeltaY;if(E.ctrlKey){if(E.preventDefault(),T[y]==.2&&ie<0||T[y]==5&&ie>0)return;ie>0?n(3,y++,y):n(3,y--,y),S()}},de=E=>{E.ctrlKey&&(E.key=="-"||E.key=="+"||E.code=="Equal"||E.key=="0")&&(E.preventDefault(),(E.key=="+"||E.code=="Equal")&&T[y]!=5?n(3,y++,y):E.key=="-"&&T[y]!=.2?n(3,y--,y):E.key=="0"&&T[y]!=1&&n(3,y=7),S()),r&&n_(E)};function L(){n(0,p=Zt.outerHeight),n(1,b=Zt.outerWidth)}const k=()=>{r||G(ee,i.share.ongoing=!0,i)},B=()=>n(8,re=!0),X=()=>n(8,re=!1);function ye(E){C=E,n(7,C)}const Ge=E=>O(E.detail.build,E.detail.id);return t.$$.update=()=>{if(t.$$.dirty[0]&131075&&(b||p)&&(n(2,v=b>p),o))for(let E of o)dr(E.node,E.itemName);t.$$.dirty[0]&12&&(v?document.documentElement.style.setProperty("--u",`${.75*T[y]}vh`):document.documentElement.style.setProperty("--u","0.75vh")),t.$$.dirty[0]&32&&(document.body.style.backgroundImage=`url(${ne})`),t.$$.dirty[0]&16&&n(9,s=i.export.status||i.save.status||i.load.status||i.delete.status),t.$$.dirty[0]&16&&G(In,r=i.export.ongoing||i.save.ongoing||i.load.ongoing||i.delete.ongoing||i.share.ongoing,r)},[p,b,v,y,i,ne,w,C,re,s,r,l,T,O,D,S,$,o,A,V,de,L,k,B,X,ye,Ge]}class Xp extends Ne{constructor(e){super(),Te(this,e,Qp,Kp,ce,{},null,[-1,-1])}}new Xp({target:document.body});
