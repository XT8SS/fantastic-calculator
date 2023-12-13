var za=Object.defineProperty;var Ha=(t,e,n)=>e in t?za(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ws=(t,e,n)=>(Ha(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function J(){}const Ss=t=>t;function Ua(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function zo(t){return t()}function hr(){return Object.create(null)}function ge(t){t.forEach(zo)}function un(t){return typeof t=="function"}function de(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Qn;function Qe(t,e){return t===e?!0:(Qn||(Qn=document.createElement("a")),Qn.href=e,t===Qn.href)}function ja(t){return Object.keys(t).length===0}function Va(t,...e){if(t==null){for(const s of e)s(void 0);return J}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Q(t,e,n){t.$$.on_destroy.push(Va(e,n))}function Y(t,e,n){return t.set(n),e}function Ho(t){return t&&un(t.destroy)?t.destroy:J}const Uo=typeof window<"u";let Ci=Uo?()=>window.performance.now():()=>Date.now(),Ei=Uo?t=>requestAnimationFrame(t):J;const Zt=new Set;function jo(t){Zt.forEach(e=>{e.c(t)||(Zt.delete(e),e.f())}),Zt.size!==0&&Ei(jo)}function Si(t){let e;return Zt.size===0&&Ei(jo),{promise:new Promise(n=>{Zt.add(e={c:t,f:n})}),abort(){Zt.delete(e)}}}const Ga=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function _(t,e){t.appendChild(e)}function Vo(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ya(t){const e=g("style");return e.textContent="/* empty */",xa(Vo(t),e),e.sheet}function xa(t,e){return _(t.head||t,e),e.sheet}function U(t,e,n){t.insertBefore(e,n||null)}function q(t){t.parentNode&&t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function ne(t){return document.createTextNode(t)}function W(){return ne(" ")}function Lt(){return ne("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Bt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:m(t,e,n)}function Go(t){return t===""?null:+t}function Ka(t){return Array.from(t.childNodes)}function ke(t,e){e=""+e,t.data!==e&&(t.data=e)}function st(t,e){t.value=e??""}function De(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let Xn;function Qa(){if(Xn===void 0){Xn=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{Xn=!0}}return Xn}function rt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const s=g("iframe");s.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),s.setAttribute("aria-hidden","true"),s.tabIndex=-1;const i=Qa();let r;return i?(s.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",o=>{o.source===s.contentWindow&&e()})):(s.src="about:blank",s.onload=()=>{r=T(s.contentWindow,"resize",e),e()}),_(t,s),()=>{(i||r&&s.contentWindow)&&r(),q(s)}}function Z(t,e,n){t.classList.toggle(e,!!n)}function Yo(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}const ts=new Map;let ns=0;function Xa(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ja(t,e){const n={stylesheet:Ya(e),rules:{}};return ts.set(t,n),n}function ss(t,e,n,s,i,r,o,l=0){const a=16.666/s;let u=`{
`;for(let w=0;w<=1;w+=a){const y=e+(n-e)*r(w);u+=w*100+`%{${o(y,1-y)}}
`}const d=u+`100% {${o(n,1-n)}}
}`,c=`__svelte_${Xa(d)}_${l}`,f=Vo(t),{stylesheet:h,rules:p}=ts.get(f)||Ja(f,t);p[c]||(p[c]=!0,h.insertRule(`@keyframes ${c} ${d}`,h.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${c} ${s}ms linear ${i}ms 1 both`,ns+=1,c}function is(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),ns-=i,ns||Za())}function Za(){Ei(()=>{ns||(ts.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&q(e)}),ts.clear())})}let kn;function ut(t){kn=t}function ki(){if(!kn)throw new Error("Function called outside component initialization");return kn}function $a(t){ki().$$.on_mount.push(t)}function jt(){const t=ki();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Yo(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}const Qt=[],$=[];let $t=[];const Zs=[],eu=Promise.resolve();let $s=!1;function tu(){$s||($s=!0,eu.then(Ii))}function be(t){$t.push(t)}function ye(t){Zs.push(t)}const qs=new Set;let Yt=0;function Ii(){if(Yt!==0)return;const t=kn;do{try{for(;Yt<Qt.length;){const e=Qt[Yt];Yt++,ut(e),nu(e.$$)}}catch(e){throw Qt.length=0,Yt=0,e}for(ut(null),Qt.length=0,Yt=0;$.length;)$.pop()();for(let e=0;e<$t.length;e+=1){const n=$t[e];qs.has(n)||(qs.add(n),n())}$t.length=0}while(Qt.length);for(;Zs.length;)Zs.pop()();$s=!1,qs.clear(),ut(t)}function nu(t){if(t.fragment!==null){t.update(),ge(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(be)}}function su(t){const e=[],n=[];$t.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),$t=e}let pn;function Ti(){return pn||(pn=Promise.resolve(),pn.then(()=>{pn=null})),pn}function Pt(t,e,n){t.dispatchEvent(Yo(`${e?"intro":"outro"}${n}`))}const es=new Set;let it;function Ae(){it={r:0,c:[],p:it}}function Pe(){it.r||ge(it.c),it=it.p}function H(t,e){t&&t.i&&(es.delete(t),t.i(e))}function V(t,e,n,s){if(t&&t.o){if(es.has(t))return;es.add(t),it.c.push(()=>{es.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Ni={duration:0};function xo(t,e,n){const s={direction:"in"};let i=e(t,n,s),r=!1,o,l,a=0;function u(){o&&is(t,o)}function d(){const{delay:f=0,duration:h=300,easing:p=Ss,tick:b=J,css:w}=i||Ni;w&&(o=ss(t,0,1,h,f,p,w,a++)),b(0,1);const y=Ci()+f,I=y+h;l&&l.abort(),r=!0,be(()=>Pt(t,!0,"start")),l=Si(v=>{if(r){if(v>=I)return b(1,0),Pt(t,!0,"end"),u(),r=!1;if(v>=y){const k=p((v-y)/h);b(k,1-k)}}return r})}let c=!1;return{start(){c||(c=!0,is(t),un(i)?(i=i(s),Ti().then(d)):d())},invalidate(){c=!1},end(){r&&(u(),r=!1)}}}function Ko(t,e,n){const s={direction:"out"};let i=e(t,n,s),r=!0,o;const l=it;l.r+=1;let a;function u(){const{delay:d=0,duration:c=300,easing:f=Ss,tick:h=J,css:p}=i||Ni;p&&(o=ss(t,1,0,c,d,f,p));const b=Ci()+d,w=b+c;be(()=>Pt(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),Si(y=>{if(r){if(y>=w)return h(0,1),Pt(t,!1,"end"),--l.r||ge(l.c),!1;if(y>=b){const I=f((y-b)/c);h(1-I,I)}}return r})}return un(i)?Ti().then(()=>{i=i(s),u()}):u(),{end(d){d&&"inert"in t&&(t.inert=a),d&&i.tick&&i.tick(1,0),r&&(o&&is(t,o),r=!1)}}}function Re(t,e,n,s){let r=e(t,n,{direction:"both"}),o=s?0:1,l=null,a=null,u=null,d;function c(){u&&is(t,u)}function f(p,b){const w=p.b-o;return b*=Math.abs(w),{a:o,b:p.b,d:w,duration:b,start:p.start,end:p.start+b,group:p.group}}function h(p){const{delay:b=0,duration:w=300,easing:y=Ss,tick:I=J,css:v}=r||Ni,k={start:Ci()+b,b:p};p||(k.group=it,it.r+=1),"inert"in t&&(p?d!==void 0&&(t.inert=d):(d=t.inert,t.inert=!0)),l||a?a=k:(v&&(c(),u=ss(t,o,p,w,b,y,v)),p&&I(0,1),l=f(k,w),be(()=>Pt(t,p,"start")),Si(E=>{if(a&&E>a.start&&(l=f(a,w),a=null,Pt(t,l.b,"start"),v&&(c(),u=ss(t,o,l.b,l.duration,0,y,r.css))),l){if(E>=l.end)I(o=l.b,1-o),Pt(t,l.b,"end"),a||(l.b?c():--l.group.r||ge(l.group.c)),l=null;else if(E>=l.start){const A=E-l.start;o=l.a+l.d*y(A/l.duration),I(o,1-o)}}return!!(l||a)}))}return{run(p){un(r)?Ti().then(()=>{r=r({direction:p?"in":"out"}),h(p)}):h(p)},end(){c(),l=a=null}}}function _r(t,e){const n=e.token={};function s(i,r,o,l){if(e.token!==n)return;e.resolved=l;let a=e.ctx;o!==void 0&&(a=a.slice(),a[o]=l);const u=i&&(e.current=i)(a);let d=!1;e.block&&(e.blocks?e.blocks.forEach((c,f)=>{f!==r&&c&&(Ae(),V(c,1,1,()=>{e.blocks[f]===c&&(e.blocks[f]=null)}),Pe())}):e.block.d(1),u.c(),H(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[r]=u),d&&Ii()}if(Ua(t)){const i=ki();if(t.then(r=>{ut(i),s(e.then,1,e.value,r),ut(null)},r=>{if(ut(i),s(e.catch,2,e.error,r),ut(null),!e.hasCatch)throw r}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function iu(t,e,n){const s=e.slice(),{resolved:i}=t;t.current===t.then&&(s[t.value]=i),t.current===t.catch&&(s[t.error]=i),t.block.p(s,n)}function Ye(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ve(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function pe(t){t&&t.c()}function he(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),be(()=>{const r=t.$$.on_mount.map(zo).filter(un);t.$$.on_destroy?t.$$.on_destroy.push(...r):ge(r),t.$$.on_mount=[]}),i.forEach(be)}function _e(t,e){const n=t.$$;n.fragment!==null&&(su(n.after_update),ge(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ru(t,e){t.$$.dirty[0]===-1&&(Qt.push(t),tu(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ie(t,e,n,s,i,r,o=null,l=[-1]){const a=kn;ut(t);const u=t.$$={fragment:null,ctx:[],props:r,update:J,not_equal:i,bound:hr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:hr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(c,f,...h)=>{const p=h.length?h[0]:f;return u.ctx&&i(u.ctx[c],u.ctx[c]=p)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](p),d&&ru(t,c)),f}):[],u.update(),d=!0,ge(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const c=Ka(e.target);u.fragment&&u.fragment.l(c),c.forEach(q)}else u.fragment&&u.fragment.c();e.intro&&H(t.$$.fragment),he(t,e.target,e.anchor),Ii()}ut(a)}class Te{constructor(){Ws(this,"$$");Ws(this,"$$set")}$destroy(){_e(this,1),this.$destroy=J}$on(e,n){if(!un(n))return J;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!ja(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ou="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ou);const xt=[];function je(t,e=J){let n;const s=new Set;function i(l){if(de(t,l)&&(t=l,n)){const a=!xt.length;for(const u of s)u[1](),xt.push(u,t);if(a){for(let u=0;u<xt.length;u+=2)xt[u][0](xt[u+1]);xt.length=0}}}function r(l){i(l(t))}function o(l,a=J){const u=[l,a];return s.add(u),s.size===1&&(n=e(i,r)||J),l(t),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}let pr=localStorage.getItem("builds"),ei=je({}),ft=je({}),Xt=je({}),wt=je({}),Di=je([]),zs=je({}),Ke=je(),Qo=je(!1),tt=je(pr?JSON.parse(pr):{}),Ft=je(!1),In=je(!1),Tn=je({}),rs=je({}),lu=je({}),te=je({export:{ongoing:!1,status:null},save:{ongoing:!1,status:null},load:{ongoing:!1,status:null},delete:{ongoing:!1,status:null},share:{ongoing:!1},message:""});tt.subscribe(t=>window.localStorage.setItem("builds",JSON.stringify(t)));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw cn(e)},cn=function(t){return new Error("Firebase Database ("+Xo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},au=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=r>>2,c=(r&3)<<4|l>>4;let f=(l&15)<<2|u>>6,h=u&63;a||(h=64,o||(f=64)),s.push(n[d],n[c],n[f],n[h])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):au(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||c==null)throw new uu;const f=r<<2|l>>4;if(s.push(f),u!==64){const h=l<<4&240|u>>2;if(s.push(h),c!==64){const p=u<<6&192|c;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zo=function(t){const e=Jo(t);return Oi.encodeByteArray(e,!0)},os=function(t){return Zo(t).replace(/\./g,"")},ti=function(t){try{return Oi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){return $o(void 0,t)}function $o(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!du(n)||(t[n]=$o(t[n],e[n]));return t}function du(t){return t!=="__proto__"}/**
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
 */const hu=()=>fu().__FIREBASE_DEFAULTS__,_u=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ti(t[1]);return e&&JSON.parse(e)},el=()=>{try{return hu()||_u()||pu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mu=t=>{var e,n;return(n=(e=el())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gu=t=>{const e=mu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},tl=()=>{var t;return(t=el())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function yu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yu())}function vu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sl(){return Xo.NODE_ADMIN===!0}function wu(){try{return typeof indexedDB=="object"}catch{return!1}}function Cu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="FirebaseError";class Hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Eu,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,il.prototype.create)}}class il{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Su(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,l,s)}}function Su(t,e){return t.replace(ku,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ku=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Nn(ti(r[0])||""),n=Nn(ti(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Iu=function(t){const e=rl(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Tu=function(t){const e=rl(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function sn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ls(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(gr(r)&&gr(o)){if(!ni(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function gr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ou=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,z(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Is=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function It(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class Ru{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ks;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pu(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Au(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Au(t){return t===Dt?void 0:t}function Pu(t){return t.instantiationMode==="EAGER"}/**
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
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const Lu={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Bu=Ce.INFO,Fu={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},Wu=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Fu[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ol{constructor(e){this.name=e,this._logLevel=Bu,this._logHandler=Wu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const qu=(t,e)=>e.some(n=>t instanceof n);let br,yr;function zu(){return br||(br=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hu(){return yr||(yr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ll=new WeakMap,si=new WeakMap,al=new WeakMap,Hs=new WeakMap,Ai=new WeakMap;function Uu(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ll.set(n,t)}).catch(()=>{}),Ai.set(e,t),e}function ju(t){if(si.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});si.set(t,e)}let ii={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return si.get(t);if(e==="objectStoreNames")return t.objectStoreNames||al.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vu(t){ii=t(ii)}function Gu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Us(this),e,...n);return al.set(s,e.sort?e.sort():[e]),mt(s)}:Hu().includes(t)?function(...e){return t.apply(Us(this),e),mt(ll.get(this))}:function(...e){return mt(t.apply(Us(this),e))}}function Yu(t){return typeof t=="function"?Gu(t):(t instanceof IDBTransaction&&ju(t),qu(t,zu())?new Proxy(t,ii):t)}function mt(t){if(t instanceof IDBRequest)return Uu(t);if(Hs.has(t))return Hs.get(t);const e=Yu(t);return e!==t&&(Hs.set(t,e),Ai.set(e,t)),e}const Us=t=>Ai.get(t);function xu(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=mt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(mt(o.result),a.oldVersion,a.newVersion,mt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Ku=["get","getKey","getAll","getAllKeys","count"],Qu=["put","add","delete","clear"],js=new Map;function vr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(js.get(e))return js.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Qu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ku.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return js.set(e,r),r}Vu(t=>({...t,get:(e,n,s)=>vr(e,n)||t.get(e,n,s),has:(e,n)=>!!vr(e,n)||t.has(e,n)}));/**
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
 */class Xu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ju(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ju(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ri="@firebase/app",wr="0.9.23";/**
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
 */const Wt=new ol("@firebase/app"),Zu="@firebase/app-compat",$u="@firebase/analytics-compat",ec="@firebase/analytics",tc="@firebase/app-check-compat",nc="@firebase/app-check",sc="@firebase/auth",ic="@firebase/auth-compat",rc="@firebase/database",oc="@firebase/database-compat",lc="@firebase/functions",ac="@firebase/functions-compat",uc="@firebase/installations",cc="@firebase/installations-compat",dc="@firebase/messaging",fc="@firebase/messaging-compat",hc="@firebase/performance",_c="@firebase/performance-compat",pc="@firebase/remote-config",mc="@firebase/remote-config-compat",gc="@firebase/storage",bc="@firebase/storage-compat",yc="@firebase/firestore",vc="@firebase/firestore-compat",wc="firebase",Cc="10.6.0";/**
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
 */const as=new Map,li=new Map;function Sc(t,e){try{t.container.addComponent(e)}catch(n){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(li.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;li.set(e,t);for(const n of as.values())Sc(n,t);return!0}function kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ic={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new il("app","Firebase",Ic);/**
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
 */const Nc=Cc;function ul(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:oi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(n||(n=tl()),!n)throw gt.create("no-options");const r=as.get(i);if(r){if(ni(n,r.options)&&ni(s,r.config))return r;throw gt.create("duplicate-app",{appName:i})}const o=new Mu(i);for(const a of li.values())o.addComponent(a);const l=new Tc(n,s,o);return as.set(i,l),l}function Dc(t=oi){const e=as.get(t);if(!e&&t===oi&&tl())return ul();if(!e)throw gt.create("no-app",{appName:t});return e}function en(t,e,n){var s;let i=(s=Ec[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(l.join(" "));return}us(new Dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Oc="firebase-heartbeat-database",Rc=1,On="firebase-heartbeat-store";let Vs=null;function cl(){return Vs||(Vs=xu(Oc,Rc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(On)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),Vs}async function Ac(t){try{return await(await cl()).transaction(On).objectStore(On).get(dl(t))}catch(e){if(e instanceof Hn)Wt.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(n.message)}}}async function Cr(t,e){try{const s=(await cl()).transaction(On,"readwrite");await s.objectStore(On).put(e,dl(t)),await s.done}catch(n){if(n instanceof Hn)Wt.warn(n.message);else{const s=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(s.message)}}}function dl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pc=1024,Mc=30*24*60*60*1e3;class Lc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Er();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Mc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Er(),{heartbeatsToSend:s,unsentEntries:i}=Bc(this._heartbeatsCache.heartbeats),r=os(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Er(){return new Date().toISOString().substring(0,10)}function Bc(t,e=Pc){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sr(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Fc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wu()?Cu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ac(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sr(t){return os(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wc(t){us(new Dn("platform-logger",e=>new Xu(e),"PRIVATE")),us(new Dn("heartbeat",e=>new Lc(e),"PRIVATE")),en(ri,wr,t),en(ri,wr,"esm2017"),en("fire-js","")}Wc("");var qc="firebase",zc="10.6.0";/**
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
 */en(qc,zc,"app");const kr="@firebase/database",Ir="1.0.1";/**
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
 */let fl="";function Hc(t){fl=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Nn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const hl=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Uc(e)}}catch{}return new jc},Rt=hl("localStorage"),ai=hl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new ol("@firebase/database"),Vc=function(){let t=1;return function(){return t++}}(),_l=function(t){const e=Ou(t),n=new Du;n.update(e);const s=n.digest();return Oi.encodeByteArray(s)},Un=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Un.apply(null,s):typeof s=="object"?e+=Me(s):e+=s,e+=" "}return e};let Mt=null,Tr=!0;const Gc=function(t,e){z(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(tn.logLevel=Ce.VERBOSE,Mt=tn.log.bind(tn),e&&ai.set("logging_enabled",!0)):typeof t=="function"?Mt=t:(Mt=null,ai.remove("logging_enabled"))},ze=function(...t){if(Tr===!0&&(Tr=!1,Mt===null&&ai.get("logging_enabled")===!0&&Gc(!0)),Mt){const e=Un.apply(null,t);Mt(e)}},jn=function(t){return function(...e){ze(t,...e)}},ui=function(...t){const e="FIREBASE INTERNAL ERROR: "+Un(...t);tn.error(e)},ht=function(...t){const e=`FIREBASE FATAL ERROR: ${Un(...t)}`;throw tn.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+Un(...t);tn.warn(e)},Yc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xc=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},qt="[MIN_NAME]",Ct="[MAX_NAME]",dn=function(t,e){if(t===e)return 0;if(t===qt||e===Ct)return-1;if(e===qt||t===Ct)return 1;{const n=Nr(t),s=Nr(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Kc=function(t,e){return t===e?0:t<e?-1:1},mn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},Mi=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Me(e[s]),n+=":",n+=Mi(t[e[s]]);return n+="}",n},pl=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ml=function(t){z(!Pi(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},Qc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Xc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Jc(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Zc=new RegExp("^-?(0*)\\d{1,10}$"),$c=-2147483648,ed=2147483647,Nr=function(t){if(Zc.test(t)){const e=Number(t);if(e>=$c&&e<=ed)return e}return null},fn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},td=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nd{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class nn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="5",gl="v",bl="s",yl="r",vl="f",wl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cl="ls",El="p",ci="ac",Sl="websocket",kl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function id(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Tl(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let s;if(e===Sl)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kl)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);id(t)&&(n.ns=t.namespace);const i=[];return xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ld{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&fn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="start",ad="close",ud="pLPCommand",cd="pRTLPCB",Nl="id",Dl="pw",Ol="ser",dd="cb",fd="seg",hd="ts",_d="d",pd="dframe",Rl=1870,Al=30,md=Rl-Al,gd=25e3,bd=3e4;class Jt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jn(e),this.stats_=Bi(n),this.urlFn=a=>(this.appCheckToken&&(a[ci]=this.appCheckToken),Tl(n,kl,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ld(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bd)),xc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fi((...r)=>{const[o,l,a,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Dr)this.id=l,this.password=a;else if(o===ad)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Dr]="t",s[Ol]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[dd]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gl]=Li,this.transportSessionId&&(s[bl]=this.transportSessionId),this.lastSessionId&&(s[Cl]=this.lastSessionId),this.applicationId&&(s[El]=this.applicationId),this.appCheckToken&&(s[ci]=this.appCheckToken),typeof location<"u"&&location.hostname&&wl.test(location.hostname)&&(s[yl]=vl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jt.forceAllow_=!0}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){return Jt.forceAllow_?!0:!Jt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qc()&&!Xc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zo(n),i=pl(s,md);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[pd]="t",s[Nl]=e,s[Dl]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fi{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vc(),window[ud+this.uniqueCallbackIdentifier]=e,window[cd+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ze("frame writing exception"),l.stack&&ze(l.stack),ze(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ze("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nl]=this.myID,e[Dl]=this.myPW,e[Ol]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Al+s.length<=Rl;){const o=this.pendingSegs.shift();s=s+"&"+fd+i+"="+o.seg+"&"+hd+i+"="+o.ts+"&"+_d+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(gd)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=16384,vd=45e3;let cs=null;typeof MozWebSocket<"u"?cs=MozWebSocket:typeof WebSocket<"u"&&(cs=WebSocket);class Je{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jn(this.connId),this.stats_=Bi(n),this.connURL=Je.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[gl]=Li,typeof location<"u"&&location.hostname&&wl.test(location.hostname)&&(o[yl]=vl),n&&(o[bl]=n),s&&(o[Cl]=s),i&&(o[ci]=i),r&&(o[El]=r),Tl(e,Sl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rt.set("previous_websocket_failure",!0);try{let s;sl(),this.mySock=new cs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&cs!==null&&!Je.forceDisallow_}static previouslyFailed(){return Rt.isInMemoryStorage||Rt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Nn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=pl(n,yd);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vd))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Je.responsesRequiredToBeHealthy=2;Je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jt,Je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Je&&Je.isAvailable();let s=n&&!Je.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Je];else{const i=this.transports_=[];for(const r of Rn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Rn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=6e4,Cd=5e3,Ed=10*1024,Sd=100*1024,xs="t",Or="d",kd="s",Rr="r",Id="e",Ar="o",Pr="a",Mr="n",Lr="p",Td="h";class Nd{constructor(e,n,s,i,r,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jn("c:"+this.id+":"),this.transportManager_=new Rn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=vn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Sd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ed?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xs in e){const n=e[xs];n===Pr?this.upgradeIfSecondaryHealthy_():n===Rr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ar&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mn("t",e),s=mn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mn("t",e),s=mn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mn(xs,e);if(Or in e){const s=e[Or];if(n===Td){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Mr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kd?this.onConnectionShutdown_(s):n===Rr?this.onReset_(s):n===Id?ui("Server Error: "+s):n===Ar?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ui("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Li!==s&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),vn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Cd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Ml{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ds}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=32,Fr=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new we("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Et(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function Ll(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Dd(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Bl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fl(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function Le(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof we)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new we(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Ue(t,e){const n=ce(t),s=ce(e);if(n===null)return e;if(n===s)return Ue(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Wl(t,e){if(Et(t)!==Et(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Et(t)>Et(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Od{constructor(e,n){this.errorPrefix_=n,this.parts_=Bl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Is(this.parts_[s]);ql(this)}}function Rd(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Is(e),ql(t)}function Ad(t){const e=t.parts_.pop();t.byteLength_-=Is(e),t.parts_.length>0&&(t.byteLength_-=1)}function ql(t){if(t.byteLength_>Fr)throw new Error(t.errorPrefix_+"has a key path longer than "+Fr+" bytes ("+t.byteLength_+").");if(t.parts_.length>Br)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Br+") or object contains a cycle "+Ot(t))}function Ot(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Ml{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wi}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=1e3,Pd=60*5*1e3,Wr=30*1e3,Md=1.3,Ld=3e4,Bd="server_kill",qr=3;class dt extends Pl{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=dt.nextPersistentConnectionId_++,this.log_=jn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gn,this.maxReconnectDelay_=Pd,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!sl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ds.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Me(r)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ks,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,u=l.s;dt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&at(e,"w")){const s=sn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Iu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ui("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ld&&(this.reconnectDelay_=gn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Md)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},u=function(c){z(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ze("getToken() completed but was canceled"):(ze("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new Nd(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,h=>{Ge(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Bd)},r))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Ge(c),a())}}}interrupt(e){ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mr(this.interruptReasons_)&&(this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Mi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new we(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qr&&(this.reconnectDelay_=Wr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fl.replace(/\./g,"-")]=1,nl()?e["framework.cordova"]=1:vu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ds.getInstance().currentlyOnline();return mr(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ae(qt,e),i=new ae(qt,n);return this.compare(s,i)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn;class zl extends Ts{static get __EMPTY_NODE(){return Jn}static set __EMPTY_NODE(e){Jn=e}compare(e,n){return dn(e.name,n.name)}isDefinedOn(e){throw cn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Ct,Jn)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Jn)}toString(){return".key"}}const bt=new zl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Fe.RED,this.left=i??Ve.EMPTY_NODE,this.right=r??Ve.EMPTY_NODE}copy(e,n,s,i,r){return new Fe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class Fd{copy(e,n,s,i,r){return this}insert(e,n,s){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zn(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new Fd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e){return dn(t.name,e.name)}function qi(t,e){return dn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;function qd(t){di=t}const Hl=function(t){return typeof t=="number"?"number:"+ml(t):"string:"+t},Ul=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&at(e,".sv"),"Priority must be a string or number.")}else z(t===di||t.isEmpty(),"priority of unexpected type.");z(t===di||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ul(this.priorityNode_)}static set __childrenNodeConstructor(e){zr=e}static get __childrenNodeConstructor(){return zr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:ce(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(z(s!==".priority"||Et(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Hl(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ml(this.value_):e+=this.value_,this.lazyHash_=_l(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),r=Be.VALUE_TYPE_ORDER.indexOf(s);return z(i>=0,"Unknown leaf type: "+n),z(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl,Vl;function zd(t){jl=t}function Hd(t){Vl=t}class Ud extends Ts{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?dn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Ct,new Be("[PRIORITY-POST]",Vl))}makePost(e,n){const s=jl(e);return new ae(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const Oe=new Ud;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=Math.log(2);class Vd{constructor(e){const n=r=>parseInt(Math.log(r)/jd,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fs=function(t,e,n,s){t.sort(e);const i=function(a,u){const d=u-a;let c,f;if(d===0)return null;if(d===1)return c=t[a],f=n?n(c):c,new Fe(f,c.node,Fe.BLACK,null,null);{const h=parseInt(d/2,10)+a,p=i(a,h),b=i(h+1,u);return c=t[h],f=n?n(c):c,new Fe(f,c.node,Fe.BLACK,p,b)}},r=function(a){let u=null,d=null,c=t.length;const f=function(p,b){const w=c-p,y=c;c-=p;const I=i(w+1,y),v=t[w],k=n?n(v):v;h(new Fe(k,v.node,b,null,I))},h=function(p){u?(u.left=p,u=p):(d=p,u=p)};for(let p=0;p<a.count;++p){const b=a.nextBitIsOne(),w=Math.pow(2,a.count-(p+1));b?f(w,Fe.BLACK):(f(w,Fe.BLACK),f(w,Fe.RED))}return d},o=new Vd(t.length),l=r(o);return new Ve(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;const Kt={};class ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(Kt&&Oe,"ChildrenNode.ts has not been loaded"),Ks=Ks||new ct({".priority":Kt},{".priority":Oe}),Ks}get(e){const n=sn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return at(this.indexSet_,e.toString())}addIndex(e,n){z(e!==bt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ae.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=fs(s,e.getCompare()):l=Kt;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new ct(d,u)}addToIndexes(e,n){const s=ls(this.indexes_,(i,r)=>{const o=sn(this.indexSet_,r);if(z(o,"Missing index implementation for "+r),i===Kt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(ae.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),fs(l,o.getCompare())}else return Kt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new ae(e.name,l))),a.insert(e,e.node)}});return new ct(s,this.indexSet_)}removeFromIndexes(e,n){const s=ls(this.indexes_,i=>{if(i===Kt)return i;{const r=n.get(e.name);return r?i.remove(new ae(e.name,r)):i}});return new ct(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn;class ie{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ul(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bn||(bn=new ie(new Ve(qi),null,ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bn}updatePriority(e){return this.children_.isEmpty()?this:new ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?bn:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ae(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?bn:this.priorityNode_;return new ie(i,o,r)}}updateChild(e,n){const s=ce(e);if(s===null)return n;{z(ce(e)!==".priority"||Et(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ee(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Oe,(o,l)=>{n[o]=l.val(e),s++,r&&ie.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Hl(this.getPriority().val())+":"),this.forEachChild(Oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":_l(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ae(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vn?-1:0}withIndex(e){if(e===bt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ie(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Oe),i=n.getIterator(Oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bt?null:this.indexMap_.get(e.toString())}}ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gd extends ie{constructor(){super(new Ve(qi),ie.EMPTY_NODE,ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ie.EMPTY_NODE}isEmpty(){return!1}}const Vn=new Gd;Object.defineProperties(ae,{MIN:{value:new ae(qt,ie.EMPTY_NODE)},MAX:{value:new ae(Ct,Vn)}});zl.__EMPTY_NODE=ie.EMPTY_NODE;Be.__childrenNodeConstructor=ie;qd(Vn);Hd(Vn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=!0;function We(t,e=null){if(t===null)return ie.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,We(e))}if(!(t instanceof Array)&&Yd){const n=[];let s=!1;if(xe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=We(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new ae(o,a)))}}),n.length===0)return ie.EMPTY_NODE;const r=fs(n,Wd,o=>o.name,qi);if(s){const o=fs(n,Oe.getCompare());return new ie(r,We(e),new ct({".priority":o},{".priority":Oe}))}else return new ie(r,We(e),ct.Default)}else{let n=ie.EMPTY_NODE;return xe(t,(s,i)=>{if(at(t,s)&&s.substring(0,1)!=="."){const r=We(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(We(e))}}zd(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Ts{constructor(e){super(),this.indexPath_=e,z(!ue(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?dn(e.name,n.name):r}makePost(e,n){const s=We(e),i=ie.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(n,i)}maxPost(){const e=ie.EMPTY_NODE.updateChild(this.indexPath_,Vn);return new ae(Ct,e)}toString(){return Bl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends Ts{compare(e,n){const s=e.node.compareTo(n.node);return s===0?dn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const s=We(e);return new ae(n,s)}toString(){return".value"}}const Yl=new xd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){return{type:"value",snapshotNode:t}}function rn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function An(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Pn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Kd(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(An(n,l)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(rn(n,s)):o.trackChildChange(Pn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(An(i,r))}),n.isLeafNode()||n.forEachChild(Oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Pn(i,r,o))}else s.trackChildChange(rn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ie.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.indexedFilter_=new zi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mn.getStartPost_(e),this.endPost_=Mn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ae(n,s))||(s=ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ie.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ie.EMPTY_NODE);const r=this;return n.forEachChild(Oe,(o,l)=>{r.matches(new ae(o,l))||(i=i.updateImmediateChild(o,ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Mn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ae(n,s))||(s=ie.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ie.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ie.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,h)=>c(h,f)}else o=this.index_.getCompare();const l=e;z(l.numChildren()===this.limit_,"");const a=new ae(n,s),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,a);if(d&&!s.isEmpty()&&h>=0)return r!=null&&r.trackChildChange(Pn(n,s,c)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(An(n,c));const b=l.updateImmediateChild(n,ie.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(rn(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:d&&o(u,a)>=0?(r!=null&&(r.trackChildChange(An(u.name,u.node)),r.trackChildChange(rn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(u.name,ie.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qt}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ct}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new Hi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xd(t){return t.loadsAllData()?new zi(t.getIndex()):t.hasLimit()?new Qd(t):new Mn(t)}function Jd(t,e){const n=t.copy();return n.index_=e,n}function Hr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===Yl?n="$value":t.index_===bt?n="$key":(z(t.index_ instanceof Gl,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ur(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Pl{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=jn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=hs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Hr(e._queryParams);this.restRequest_(r+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(r,c,!1,s),sn(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const s=hs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Hr(e._queryParams),s=e._path.toString(),i=new ks;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Nu(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Nn(l.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.rootNode_=ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(){return{value:null,children:new Map}}function Kl(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ce(e);t.children.has(s)||t.children.set(s,_s());const i=t.children.get(s);e=Ee(e),Kl(i,e,n)}}function fi(t,e,n){t.value!==null?n(e,t.value):$d(t,(s,i)=>{const r=new we(e.toString()+"/"+s);fi(i,r,n)})}function $d(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=10*1e3,tf=30*1e3,nf=5*60*1e3;class sf{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ef(e);const s=jr+(tf-jr)*Math.random();vn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;xe(e,(i,r)=>{r>0&&at(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),vn(this.reportStats_.bind(this),Math.floor(Math.random()*2*nf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($e||($e={}));function Ql(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ui(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ji(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=$e.ACK_USER_WRITE,this.source=Ql()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new ps(me(),n,this.revert)}}else return z(ce(this.path)===e,"operationForChild called for unrelated child."),new ps(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){this.source=e,this.path=n,this.type=$e.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Ln(this.source,me()):new Ln(this.source,Ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=$e.OVERWRITE}operationForChild(e){return ue(this.path)?new zt(this.source,me(),this.snap.getImmediateChild(e)):new zt(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=$e.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new zt(this.source,me(),n.value):new Bn(this.source,me(),n)}else return z(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bn(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function of(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Kd(o.childName,o.snapshotNode))}),yn(t,i,"child_removed",e,s,n),yn(t,i,"child_added",e,s,n),yn(t,i,"child_moved",r,s,n),yn(t,i,"child_changed",e,s,n),yn(t,i,"value",e,s,n),i}function yn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>af(t,l,a)),o.forEach(l=>{const a=lf(t,l,r);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function lf(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function af(t,e,n){if(e.childName==null||n.childName==null)throw cn("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),i=new ae(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t,e){return{eventCache:t,serverCache:e}}function wn(t,e,n,s){return Ns(new St(e,n,s),t.serverCache)}function Xl(t,e,n,s){return Ns(t.eventCache,new St(e,n,s))}function ms(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ht(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;const uf=()=>(Qs||(Qs=new Ve(Kc)),Qs);class Se{constructor(e,n=uf()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return xe(e,(s,i)=>{n=n.set(new we(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ue(e))return null;{const s=ce(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ee(e),n);return r!=null?{path:Le(new we(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=ce(e),s=this.children.get(n);return s!==null?s.subtree(Ee(e)):new Se(null)}}set(e,n){if(ue(e))return new Se(n,this.children);{const s=ce(e),r=(this.children.get(s)||new Se(null)).set(Ee(e),n),o=this.children.insert(s,r);return new Se(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=ce(e),s=this.children.get(n);if(s){const i=s.remove(Ee(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Se(null):new Se(this.value,r)}else return this}}get(e){if(ue(e))return this.value;{const n=ce(e),s=this.children.get(n);return s?s.get(Ee(e)):null}}setTree(e,n){if(ue(e))return n;{const s=ce(e),r=(this.children.get(s)||new Se(null)).setTree(Ee(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Se(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Le(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ue(e))return null;{const r=ce(e),o=this.children.get(r);return o?o.findOnPath_(Ee(e),Le(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,s){if(ue(e))return this;{this.value&&s(n,this.value);const i=ce(e),r=this.children.get(i);return r?r.foreachOnPath_(Ee(e),Le(n,i),s):new Se(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Le(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new Se(null))}}function Cn(t,e,n){if(ue(e))return new et(new Se(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ue(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new Se(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function Vr(t,e,n){let s=t;return xe(n,(i,r)=>{s=Cn(s,Le(e,i),r)}),s}function Gr(t,e){if(ue(e))return et.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new et(n)}}function hi(t,e){return Vt(t,e)!=null}function Vt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ue(n.path,e)):null}function Yr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(s,i)=>{e.push(new ae(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ae(s,i.value))}),e}function yt(t,e){if(ue(e))return t;{const n=Vt(t,e);return n!=null?new et(new Se(n)):new et(t.writeTree_.subtree(e))}}function _i(t){return t.writeTree_.isEmpty()}function on(t,e){return Jl(me(),t.writeTree_,e)}function Jl(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(z(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Jl(Le(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Le(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t,e){return ta(e,t)}function cf(t,e,n,s,i){z(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Cn(t.visibleWrites,e,n)),t.lastWriteId=s}function df(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ff(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&hf(l,s.path)?i=!1:Ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return _f(t),!0;if(s.snap)t.visibleWrites=Gr(t.visibleWrites,s.path);else{const l=s.children;xe(l,a=>{t.visibleWrites=Gr(t.visibleWrites,Le(s.path,a))})}return!0}else return!1}function hf(t,e){if(t.snap)return Ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ze(Le(t.path,n),e))return!0;return!1}function _f(t){t.visibleWrites=Zl(t.allWrites,pf,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pf(t){return t.visible}function Zl(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ze(n,o)?(l=Ue(n,o),s=Cn(s,l,r.snap)):Ze(o,n)&&(l=Ue(o,n),s=Cn(s,me(),r.snap.getChild(l)));else if(r.children){if(Ze(n,o))l=Ue(n,o),s=Vr(s,l,r.children);else if(Ze(o,n))if(l=Ue(o,n),ue(l))s=Vr(s,me(),r.children);else{const a=sn(r.children,ce(l));if(a){const u=a.getChild(Ee(l));s=Cn(s,me(),u)}}}else throw cn("WriteRecord should have .snap or .children")}}return s}function $l(t,e,n,s,i){if(!s&&!i){const r=Vt(t.visibleWrites,e);if(r!=null)return r;{const o=yt(t.visibleWrites,e);if(_i(o))return n;if(n==null&&!hi(o,me()))return null;{const l=n||ie.EMPTY_NODE;return on(o,l)}}}else{const r=yt(t.visibleWrites,e);if(!i&&_i(r))return n;if(!i&&n==null&&!hi(r,me()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(Ze(u.path,e)||Ze(e,u.path))},l=Zl(t.allWrites,o,e),a=n||ie.EMPTY_NODE;return on(l,a)}}}function mf(t,e,n){let s=ie.EMPTY_NODE;const i=Vt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=yt(t.visibleWrites,e);return n.forEachChild(Oe,(o,l)=>{const a=on(yt(r,new we(o)),l);s=s.updateImmediateChild(o,a)}),Yr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=yt(t.visibleWrites,e);return Yr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function gf(t,e,n,s,i){z(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Le(e,n);if(hi(t.visibleWrites,r))return null;{const o=yt(t.visibleWrites,r);return _i(o)?i.getChild(n):on(o,i.getChild(n))}}function bf(t,e,n,s){const i=Le(e,n),r=Vt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=yt(t.visibleWrites,i);return on(o,s.getNode().getImmediateChild(n))}else return null}function yf(t,e){return Vt(t.visibleWrites,e)}function vf(t,e,n,s,i,r,o){let l;const a=yt(t.visibleWrites,e),u=Vt(a,me());if(u!=null)l=u;else if(n!=null)l=on(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let h=f.getNext();for(;h&&d.length<i;)c(h,s)!==0&&d.push(h),h=f.getNext();return d}else return[]}function wf(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function gs(t,e,n,s){return $l(t.writeTree,t.treePath,e,n,s)}function Vi(t,e){return mf(t.writeTree,t.treePath,e)}function xr(t,e,n,s){return gf(t.writeTree,t.treePath,e,n,s)}function bs(t,e){return yf(t.writeTree,Le(t.treePath,e))}function Cf(t,e,n,s,i,r){return vf(t.writeTree,t.treePath,e,n,s,i,r)}function Gi(t,e,n){return bf(t.writeTree,t.treePath,e,n)}function ea(t,e){return ta(Le(t.treePath,e),t.writeTree)}function ta(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Pn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,An(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,rn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Pn(s,e.snapshotNode,i.oldSnap));else throw cn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const na=new Sf;class Yi{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new St(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gi(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ht(this.viewCache_),r=Cf(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){return{filter:t}}function If(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Tf(t,e,n,s,i){const r=new Ef;let o,l;if(n.type===$e.OVERWRITE){const u=n;u.source.fromUser?o=pi(t,e,u.path,u.snap,s,i,r):(z(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!ue(u.path),o=ys(t,e,u.path,u.snap,s,i,l,r))}else if(n.type===$e.MERGE){const u=n;u.source.fromUser?o=Df(t,e,u.path,u.children,s,i,r):(z(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=mi(t,e,u.path,u.children,s,i,l,r))}else if(n.type===$e.ACK_USER_WRITE){const u=n;u.revert?o=Af(t,e,u.path,s,i,r):o=Of(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===$e.LISTEN_COMPLETE)o=Rf(t,e,n.path,s,r);else throw cn("Unknown operation type: "+n.type);const a=r.getChanges();return Nf(e,o,a),{viewCache:o,changes:a}}function Nf(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ms(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(xl(ms(e)))}}function sa(t,e,n,s,i,r){const o=e.eventCache;if(bs(s,n)!=null)return e;{let l,a;if(ue(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ht(e),d=u instanceof ie?u:ie.EMPTY_NODE,c=Vi(s,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const u=gs(s,Ht(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=ce(n);if(u===".priority"){z(Et(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=xr(s,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=Ee(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=xr(s,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Gi(s,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,r):l=o.getNode()}}return wn(e,l,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function ys(t,e,n,s,i,r,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(ue(n))u=d.updateFullNode(a.getNode(),s,null);else if(d.filtersNodes()&&!a.isFiltered()){const h=a.getNode().updateChild(n,s);u=d.updateFullNode(a.getNode(),h,null)}else{const h=ce(n);if(!a.isCompleteForPath(n)&&Et(n)>1)return e;const p=Ee(n),w=a.getNode().getImmediateChild(h).updateChild(p,s);h===".priority"?u=d.updatePriority(a.getNode(),w):u=d.updateChild(a.getNode(),h,w,p,na,null)}const c=Xl(e,u,a.isFullyInitialized()||ue(n),d.filtersNodes()),f=new Yi(i,c,r);return sa(t,c,n,i,f,l)}function pi(t,e,n,s,i,r,o){const l=e.eventCache;let a,u;const d=new Yi(i,e,r);if(ue(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=wn(e,u,!0,t.filter.filtersNodes());else{const c=ce(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),a=wn(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=Ee(n),h=l.getNode().getImmediateChild(c);let p;if(ue(f))p=s;else{const b=d.getCompleteChild(c);b!=null?Ll(f)===".priority"&&b.getChild(Fl(f)).isEmpty()?p=b:p=b.updateChild(f,s):p=ie.EMPTY_NODE}if(h.equals(p))a=e;else{const b=t.filter.updateChild(l.getNode(),c,p,f,d,o);a=wn(e,b,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Kr(t,e){return t.eventCache.isCompleteForChild(e)}function Df(t,e,n,s,i,r,o){let l=e;return s.foreach((a,u)=>{const d=Le(n,a);Kr(e,ce(d))&&(l=pi(t,l,d,u,i,r,o))}),s.foreach((a,u)=>{const d=Le(n,a);Kr(e,ce(d))||(l=pi(t,l,d,u,i,r,o))}),l}function Qr(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function mi(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;ue(n)?u=s:u=new Se(null).setTree(n,s);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const h=e.serverCache.getNode().getImmediateChild(c),p=Qr(t,h,f);a=ys(t,a,new we(c),p,i,r,o,l)}}),u.children.inorderTraversal((c,f)=>{const h=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!h){const p=e.serverCache.getNode().getImmediateChild(c),b=Qr(t,p,f);a=ys(t,a,new we(c),b,i,r,o,l)}}),a}function Of(t,e,n,s,i,r,o){if(bs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(ue(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ys(t,e,n,a.getNode().getChild(n),i,r,l,o);if(ue(n)){let u=new Se(null);return a.getNode().forEachChild(bt,(d,c)=>{u=u.set(new we(d),c)}),mi(t,e,n,u,i,r,l,o)}else return e}else{let u=new Se(null);return s.foreach((d,c)=>{const f=Le(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),mi(t,e,n,u,i,r,l,o)}}function Rf(t,e,n,s,i){const r=e.serverCache,o=Xl(e,r.getNode(),r.isFullyInitialized()||ue(n),r.isFiltered());return sa(t,o,n,s,na,i)}function Af(t,e,n,s,i,r){let o;if(bs(s,n)!=null)return e;{const l=new Yi(s,e,i),a=e.eventCache.getNode();let u;if(ue(n)||ce(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=gs(s,Ht(e));else{const c=e.serverCache.getNode();z(c instanceof ie,"serverChildren would be complete if leaf node"),d=Vi(s,c)}d=d,u=t.filter.updateFullNode(a,d,r)}else{const d=ce(n);let c=Gi(s,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,Ee(n),l,r):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,ie.EMPTY_NODE,Ee(n),l,r):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gs(s,Ht(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||bs(s,me())!=null,wn(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new zi(s.getIndex()),r=Xd(s);this.processor_=kf(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(ie.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(ie.EMPTY_NODE,l.getNode(),null),d=new St(a,o.isFullyInitialized(),i.filtersNodes()),c=new St(u,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ns(c,d),this.eventGenerator_=new rf(this.query_)}get query(){return this.query_}}function Mf(t){return t.viewCache_.serverCache.getNode()}function Lf(t){return ms(t.viewCache_)}function Bf(t,e){const n=Ht(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function Xr(t){return t.eventRegistrations_.length===0}function Ff(t,e){t.eventRegistrations_.push(e)}function Jr(t,e,n){const s=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Zr(t,e,n,s){e.type===$e.MERGE&&e.source.queryId!==null&&(z(Ht(t.viewCache_),"We should always have a full cache before handling merges"),z(ms(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Tf(t.processor_,i,e,n,s);return If(t.processor_,r.viewCache),z(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ia(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Wf(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(r,o)=>{s.push(rn(r,o))}),n.isFullyInitialized()&&s.push(xl(n.getNode())),ia(t,s,n.getNode(),e)}function ia(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return of(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs;class ra{constructor(){this.views=new Map}}function qf(t){z(!vs,"__referenceConstructor has already been defined"),vs=t}function zf(){return z(vs,"Reference.ts has not been loaded"),vs}function Hf(t){return t.views.size===0}function xi(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return z(r!=null,"SyncTree gave us an op for an invalid query."),Zr(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Zr(o,e,n,s));return r}}function oa(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=gs(n,i?s:null),a=!1;l?a=!0:s instanceof ie?(l=Vi(n,s),a=!1):(l=ie.EMPTY_NODE,a=!1);const u=Ns(new St(l,a,!1),new St(s,i,!1));return new Pf(e,u)}return o}function Uf(t,e,n,s,i,r){const o=oa(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ff(o,n),Wf(o,n)}function jf(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=kt(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Jr(u,n,s)),Xr(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||r.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Jr(a,n,s)),Xr(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!kt(t)&&r.push(new(zf())(e._repo,e._path)),{removed:r,events:o}}function la(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vt(t,e){let n=null;for(const s of t.views.values())n=n||Bf(s,e);return n}function aa(t,e){if(e._queryParams.loadsAllData())return Os(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ua(t,e){return aa(t,e)!=null}function kt(t){return Os(t)!=null}function Os(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;function Vf(t){z(!ws,"__referenceConstructor has already been defined"),ws=t}function Gf(){return z(ws,"Reference.ts has not been loaded"),ws}let Yf=1;class $r{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=wf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ca(t,e,n,s,i){return cf(t.pendingWriteTree_,e,n,s,i),i?Yn(t,new zt(Ql(),e,n)):[]}function At(t,e,n=!1){const s=df(t.pendingWriteTree_,e);if(ff(t.pendingWriteTree_,e)){let r=new Se(null);return s.snap!=null?r=r.set(me(),!0):xe(s.children,o=>{r=r.set(new we(o),!0)}),Yn(t,new ps(s.path,r,n))}else return[]}function Gn(t,e,n){return Yn(t,new zt(Ui(),e,n))}function xf(t,e,n){const s=Se.fromObject(n);return Yn(t,new Bn(Ui(),e,s))}function Kf(t,e){return Yn(t,new Ln(Ui(),e))}function Qf(t,e,n){const s=Qi(t,n);if(s){const i=Xi(s),r=i.path,o=i.queryId,l=Ue(r,e),a=new Ln(ji(o),l);return Ji(t,r,a)}else return[]}function da(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ua(o,e))){const a=jf(o,e,n,s);Hf(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(r,(f,h)=>kt(h));if(d&&!c){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const h=$f(f);for(let p=0;p<h.length;++p){const b=h[p],w=b.query,y=pa(t,b);t.listenProvider_.startListening(En(w),Fn(t,w),y.hashFn,y.onComplete)}}}!c&&u.length>0&&!s&&(d?t.listenProvider_.stopListening(En(e),null):u.forEach(f=>{const h=t.queryToTagMap.get(Rs(f));t.listenProvider_.stopListening(En(f),h)}))}eh(t,u)}return l}function fa(t,e,n,s){const i=Qi(t,s);if(i!=null){const r=Xi(i),o=r.path,l=r.queryId,a=Ue(o,e),u=new zt(ji(l),a,n);return Ji(t,o,u)}else return[]}function Xf(t,e,n,s){const i=Qi(t,s);if(i){const r=Xi(i),o=r.path,l=r.queryId,a=Ue(o,e),u=Se.fromObject(n),d=new Bn(ji(l),a,u);return Ji(t,o,d)}else return[]}function Jf(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,h)=>{const p=Ue(f,i);r=r||vt(h,p),o=o||kt(h)});let l=t.syncPointTree_.get(i);l?(o=o||kt(l),r=r||vt(l,me())):(l=new ra,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=ie.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,p)=>{const b=vt(p,me());b&&(r=r.updateImmediateChild(h,b))}));const u=ua(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Rs(e);z(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=th();t.queryToTagMap.set(f,h),t.tagToQueryMap.set(h,f)}const d=Ds(t.pendingWriteTree_,i);let c=Uf(l,e,n,d,r,a);if(!u&&!o&&!s){const f=aa(l,e);c=c.concat(nh(t,e,f))}return c}function Ki(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ue(o,e),u=vt(l,a);if(u)return u});return $l(i,e,r,n,!0)}function Zf(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Ue(u,n);s=s||vt(d,c)});let i=t.syncPointTree_.get(n);i?s=s||vt(i,me()):(i=new ra,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new St(s,!0,!1):null,l=Ds(t.pendingWriteTree_,e._path),a=oa(i,e,l,r?o.getNode():ie.EMPTY_NODE,r);return Lf(a)}function Yn(t,e){return ha(e,t.syncPointTree_,null,Ds(t.pendingWriteTree_,me()))}function ha(t,e,n,s){if(ue(t.path))return _a(t,e,n,s);{const i=e.get(me());n==null&&i!=null&&(n=vt(i,me()));let r=[];const o=ce(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=ea(s,o);r=r.concat(ha(l,a,u,d))}return i&&(r=r.concat(xi(i,t,s,n))),r}}function _a(t,e,n,s){const i=e.get(me());n==null&&i!=null&&(n=vt(i,me()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=ea(s,o),d=t.operationForChild(o);d&&(r=r.concat(_a(d,l,a,u)))}),i&&(r=r.concat(xi(i,t,s,n))),r}function pa(t,e){const n=e.query,s=Fn(t,n);return{hashFn:()=>(Mf(e)||ie.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Qf(t,n._path,s):Kf(t,n._path);{const r=Jc(i,n);return da(t,n,null,r)}}}}function Fn(t,e){const n=Rs(e);return t.queryToTagMap.get(n)}function Rs(t){return t._path.toString()+"$"+t._queryIdentifier}function Qi(t,e){return t.tagToQueryMap.get(e)}function Xi(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function Ji(t,e,n){const s=t.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const i=Ds(t.pendingWriteTree_,e);return xi(s,n,i,null)}function $f(t){return t.fold((e,n,s)=>{if(n&&kt(n))return[Os(n)];{let i=[];return n&&(i=la(n)),xe(s,(r,o)=>{i=i.concat(o)}),i}})}function En(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Gf())(t._repo,t._path):t}function eh(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Rs(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function th(){return Yf++}function nh(t,e,n){const s=e._path,i=Fn(t,e),r=pa(t,n),o=t.listenProvider_.startListening(En(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)z(!kt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!ue(u)&&d&&kt(d))return[Os(d).query];{let f=[];return d&&(f=f.concat(la(d).map(h=>h.query))),xe(c,(h,p)=>{f=f.concat(p)}),f}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(En(d),Fn(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zi(n)}node(){return this.node_}}class $i{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new $i(this.syncTree_,n)}node(){return Ki(this.syncTree_,this.path_)}}const sh=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},eo=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ih(t[".sv"],e,n);if(typeof t[".sv"]=="object")return rh(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ih=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},rh=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},oh=function(t,e,n,s){return er(e,new $i(n,t),s)},ma=function(t,e,n){return er(t,new Zi(e),n)};function er(t,e,n){const s=t.getPriority().val(),i=eo(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=eo(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Be(l,We(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Be(i))),o.forEachChild(Oe,(l,a)=>{const u=er(a,e.getImmediateChild(l),n);u!==a&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function nr(t,e){let n=e instanceof we?e:new we(e),s=t,i=ce(n);for(;i!==null;){const r=sn(s.node.children,i)||{children:{},childCount:0};s=new tr(i,s,r),n=Ee(n),i=ce(n)}return s}function hn(t){return t.node.value}function ga(t,e){t.node.value=e,gi(t)}function ba(t){return t.node.childCount>0}function lh(t){return hn(t)===void 0&&!ba(t)}function As(t,e){xe(t.node.children,(n,s)=>{e(new tr(n,t,s))})}function ya(t,e,n,s){n&&!s&&e(t),As(t,i=>{ya(i,e,!0,s)}),n&&s&&e(t)}function ah(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function xn(t){return new we(t.parent===null?t.name:xn(t.parent)+"/"+t.name)}function gi(t){t.parent!==null&&uh(t.parent,t.name,t)}function uh(t,e,n){const s=lh(n),i=at(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,gi(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gi(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=/[\[\].#$\/\u0000-\u001F\u007F]/,dh=/[\[\].#$\u0000-\u001F\u007F]/,Xs=10*1024*1024,va=function(t){return typeof t=="string"&&t.length!==0&&!ch.test(t)},wa=function(t){return typeof t=="string"&&t.length!==0&&!dh.test(t)},fh=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wa(t)},to=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Pi(t)||t&&typeof t=="object"&&at(t,".sv")},Ca=function(t,e,n,s){s&&e===void 0||sr(Ri(t,"value"),e,n)},sr=function(t,e,n){const s=n instanceof we?new Od(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ot(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ot(s)+" with contents = "+e.toString());if(Pi(e))throw new Error(t+"contains "+e.toString()+" "+Ot(s));if(typeof e=="string"&&e.length>Xs/3&&Is(e)>Xs)throw new Error(t+"contains a string greater than "+Xs+" utf8 bytes "+Ot(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(xe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!va(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ot(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Rd(s,o),sr(t,l,s),Ad(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ot(s)+" in addition to actual children.")}},Ea=function(t,e,n,s){if(!(s&&n===void 0)&&!wa(n))throw new Error(Ri(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hh=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ea(t,e,n,s)},Sa=function(t,e){if(ce(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_h=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!va(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!fh(n))throw new Error(Ri(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ka(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Wl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ot(t,e,n){ka(t,n),mh(t,s=>Ze(s,e)||Ze(e,s))}function mh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(gh(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gh(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Mt&&ze("event: "+n.toString()),fn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="repo_interrupt",yh=25;class vh{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ph,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_s(),this.transactionQueueTree_=new tr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wh(t,e,n){if(t.stats_=Bi(t.repoInfo_),t.forceRestClient_||td())t.server_=new hs(t.repoInfo_,(s,i,r,o)=>{no(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>so(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new dt(t.repoInfo_,e,(s,i,r,o)=>{no(t,s,i,r,o)},s=>{so(t,s)},s=>{Ch(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=od(t.repoInfo_,()=>new sf(t.stats_,t.server_)),t.infoData_=new Zd,t.infoSyncTree_=new $r({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Gn(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),rr(t,"connected",!1),t.serverSyncTree_=new $r({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const u=o(l,a);ot(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Ia(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ir(t){return sh({timestamp:Ia(t)})}function no(t,e,n,s,i){t.dataUpdateCount++;const r=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ls(n,u=>We(u));o=Xf(t.serverSyncTree_,r,a,i)}else{const a=We(n);o=fa(t.serverSyncTree_,r,a,i)}else if(s){const a=ls(n,u=>We(u));o=xf(t.serverSyncTree_,r,a)}else{const a=We(n);o=Gn(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ms(t,r)),ot(t.eventQueue_,l,o)}function so(t,e){rr(t,"connected",e),e===!1&&kh(t)}function Ch(t,e){xe(e,(n,s)=>{rr(t,n,s)})}function rr(t,e,n){const s=new we("/.info/"+e),i=We(n);t.infoData_.updateSnapshot(s,i);const r=Gn(t.infoSyncTree_,s,i);ot(t.eventQueue_,s,r)}function Ta(t){return t.nextWriteId_++}function Eh(t,e,n){const s=Zf(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=We(i).withIndex(e._queryParams.getIndex());Jf(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Gn(t.serverSyncTree_,e._path,r);else{const l=Fn(t.serverSyncTree_,e);o=fa(t.serverSyncTree_,e._path,r,l)}return ot(t.eventQueue_,e._path,o),da(t.serverSyncTree_,e,n,null,!0),r},i=>(Ps(t,"get for query "+Me(e)+" failed: "+i),Promise.reject(new Error(i))))}function Sh(t,e,n,s,i){Ps(t,"set",{path:e.toString(),value:n,priority:s});const r=ir(t),o=We(n,s),l=Ki(t.serverSyncTree_,e),a=ma(o,l,r),u=Ta(t),d=ca(t.serverSyncTree_,e,a,u,!0);ka(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,h)=>{const p=f==="ok";p||Ge("set at "+e+" failed: "+f);const b=At(t.serverSyncTree_,u,!p);ot(t.eventQueue_,e,b),Th(t,i,f,h)});const c=Aa(t,e);Ms(t,c),ot(t.eventQueue_,c,[])}function kh(t){Ps(t,"onDisconnectEvents");const e=ir(t),n=_s();fi(t.onDisconnect_,me(),(i,r)=>{const o=oh(i,r,t.serverSyncTree_,e);Kl(n,i,o)});let s=[];fi(n,me(),(i,r)=>{s=s.concat(Gn(t.serverSyncTree_,i,r));const o=Aa(t,i);Ms(t,o)}),t.onDisconnect_=_s(),ot(t.eventQueue_,me(),s)}function Ih(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bh)}function Ps(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ze(n,...e)}function Th(t,e,n,s){e&&fn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Na(t,e,n){return Ki(t.serverSyncTree_,e,n)||ie.EMPTY_NODE}function or(t,e=t.transactionQueueTree_){if(e||Ls(t,e),hn(e)){const n=Oa(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Nh(t,xn(e),n)}else ba(e)&&As(e,n=>{or(t,n)})}function Nh(t,e,n){const s=n.map(u=>u.currentWriteId),i=Na(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];z(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ue(e,d.path);r=r.updateChild(c,d.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ps(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(At(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ls(t,nr(t.transactionQueueTree_,e)),or(t,t.transactionQueueTree_),ot(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)fn(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Ge("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ms(t,e)}},o)}function Ms(t,e){const n=Da(t,e),s=xn(n),i=Oa(t,n);return Dh(t,i,s),s}function Dh(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ue(n,a.path);let d=!1,c;if(z(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(At(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=yh)d=!0,c="maxretry",i=i.concat(At(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Na(t,a.path,o);a.currentInputSnapshot=f;const h=e[l].update(f.val());if(h!==void 0){sr("transaction failed: Data returned ",h,a.path);let p=We(h);typeof h=="object"&&h!=null&&at(h,".priority")||(p=p.updatePriority(f.getPriority()));const w=a.currentWriteId,y=ir(t),I=ma(p,f,y);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=I,a.currentWriteId=Ta(t),o.splice(o.indexOf(w),1),i=i.concat(ca(t.serverSyncTree_,a.path,I,a.currentWriteId,a.applyLocally)),i=i.concat(At(t.serverSyncTree_,w,!0))}else d=!0,c="nodata",i=i.concat(At(t.serverSyncTree_,a.currentWriteId,!0))}ot(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(c),!1,null))))}Ls(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)fn(s[l]);or(t,t.transactionQueueTree_)}function Da(t,e){let n,s=t.transactionQueueTree_;for(n=ce(e);n!==null&&hn(s)===void 0;)s=nr(s,n),e=Ee(e),n=ce(e);return s}function Oa(t,e){const n=[];return Ra(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ra(t,e,n){const s=hn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);As(e,i=>{Ra(t,i,n)})}function Ls(t,e){const n=hn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ga(e,n.length>0?n:void 0)}As(e,s=>{Ls(t,s)})}function Aa(t,e){const n=xn(Da(t,e)),s=nr(t.transactionQueueTree_,e);return ah(s,i=>{Js(t,i)}),Js(t,s),ya(s,i=>{Js(t,i)}),n}function Js(t,e){const n=hn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(At(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ga(e,void 0):n.length=r+1,ot(t.eventQueue_,xn(e),i);for(let o=0;o<s.length;o++)fn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Rh(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const io=function(t,e){const n=Ah(t),s=n.namespace;n.domain==="firebase.com"&&ht(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Yc();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Il(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new we(n.pathString)}},Ah=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Oh(t.substring(d,c)));const f=Rh(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const h=e.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ph=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ro.charAt(n%64),n=Math.floor(n/64);z(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ro.charAt(e[i]);return z(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class Lh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Bs{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ue(this._path)?null:Ll(this._path)}get ref(){return new pt(this._repo,this._path)}get _queryIdentifier(){const e=Ur(this._queryParams),n=Mi(e);return n==="{}"?"default":n}get _queryObject(){return Ur(this._queryParams)}isEqual(e){if(e=It(e),!(e instanceof Bs))return!1;const n=this._repo===e._repo,s=Wl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Dd(this._path)}}function Fh(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Wh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===bt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==qt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Ct)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Oe){if(e!=null&&!to(e)||n!=null&&!to(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(z(t.getIndex()instanceof Gl||t.getIndex()===Yl,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class pt extends Bs{constructor(e,n){super(e,n,new Hi,!1)}get parent(){const e=Fl(this._path);return e===null?null:new pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new we(e),s=_t(this.ref,e);return new Wn(this._node.getChild(n),s,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Wn(i,_t(this.ref,s),Oe)))}hasChild(e){const n=new we(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ln(t,e){return t=It(t),t._checkNotDeleted("ref"),e!==void 0?_t(t._root,e):t._root}function _t(t,e){return t=It(t),ce(t._path)===null?hh("child","path",e,!1):Ea("child","path",e,!1),new pt(t._repo,Le(t._path,e))}function qh(t,e){t=It(t),Sa("push",t._path),Ca("push",e,t._path,!0);const n=Ia(t._repo),s=Ph(n),i=_t(t,s),r=_t(t,s);let o;return e!=null?o=Fs(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Fs(t,e){t=It(t),Sa("set",t._path),Ca("set",e,t._path,!1);const n=new ks;return Sh(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Pa(t){t=It(t);const e=new Bh(()=>{}),n=new lr(e);return Eh(t._repo,t,n).then(s=>new Wn(s,new pt(t._repo,t._path),t._queryParams.getIndex()))}class lr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Mh("value",this,new Wn(e.snapshotNode,new pt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lh(this,e,n):null}matches(e){return e instanceof lr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class zh{}class Hh extends zh{_apply(e){Fh(e,"orderByKey");const n=Jd(e._queryParams,bt);return Wh(n),new Bs(e._repo,e._path,n,!0)}}function Ma(){return new Hh}function La(t,...e){let n=It(t);for(const s of e)n=s._apply(n);return n}qf(pt);Vf(pt);/**
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
 */const Uh="FIREBASE_DATABASE_EMULATOR_HOST",bi={};let jh=!1;function Vh(t,e,n,s){t.repoInfo_=new Il(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Gh(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ze("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=io(r,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Uh]),u?(a=!0,r=`http://${u}?ns=${l.namespace}`,o=io(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new nn(nn.OWNER):new sd(t.name,t.options,e);_h("Invalid Firebase Database URL",o),ue(o.path)||ht("Database URL must point to the root of a Firebase Database (not including a child path).");const c=xh(l,t,d,new nd(t.name,n));return new Kh(c,t)}function Yh(t,e){const n=bi[e];(!n||n[t.key]!==t)&&ht(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ih(t),delete n[t.key]}function xh(t,e,n,s){let i=bi[e.name];i||(i={},bi[e.name]=i);let r=i[t.toURLString()];return r&&ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vh(t,jh,n,s),i[t.toURLString()]=r,r}class Kh{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pt(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Yh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ht("Cannot call "+e+" on a deleted database.")}}function Qh(t=Dc(),e){const n=kc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=gu("database");s&&Xh(n,...s)}return n}function Xh(t,e,n,s={}){t=It(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ht("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new nn(nn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:bu(s.mockUserToken,t.app.options.projectId);r=new nn(o)}Vh(i,e,n,r)}/**
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
 */function Jh(t){Hc(Nc),us(new Dn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Gh(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),en(kr,Ir,t),en(kr,Ir,"esm2017")}dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Jh();const Zh={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};let yi={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},vi=["head","body","legs","feet","neck","back","ring","misc"],ar={name:"",stats:{armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0},image:"",link:""},ur={name:"",info:{type:"",special:""},moves:[],image:"",link:""},qn=[...Array(5).keys()].map(t=>++t),an=Qh(ul(Zh));function Ba(t,e){let n=!1;for(let s of[t,e])for(let i in s)if(s[i].name){n=!0;break}Qo.set(n),Ke.set(null),window.history.replaceState(null,null,location.origin+location.pathname)}function cr(t,e){let n=2.8,s=e.split(" ").length,i=t.querySelector("span");if(i.style.removeProperty("font-size"),s>2&&e.length/s>=5){for(;i.offsetHeight>t.offsetHeight*.75;)n-=.05,i.style.fontSize=`calc(var(--u) * ${n})`;return n<2.8}return null}function $h(t,e){let n=2.8,s=t.querySelector("span");for(s.style.removeProperty("font-size");s.offsetWidth>t.offsetWidth;)n-=.05,s.style.fontSize=`calc(var(--u) * ${n})`;for(;s.offsetHeight>t.offsetHeight*.75&&e;)console.log("C"),n-=.05,s.style.fontSize=`calc(var(--u) * ${n})`;return n<2.8?n:null}function e_(t){let e=2.35,n=t.querySelector(".tooltip");for(n.style.removeProperty("font-size");n.offsetHeight>t.offsetHeight*1.125;)e-=.02,n.style.fontSize=`calc(var(--u) * ${e})`}function t_(t){document.activeElement==document.body&&t.key=="Tab"&&(t.preventDefault(),document.querySelector(`.promptCont [id*='${t.shiftKey?"last":"first"}Focusable']`).focus())}function Fa(t,e){let n=t.toLowerCase();for(let s in e)s.toLowerCase().includes(n)?e[s].classList.remove("hidden"):e[s].classList.add("hidden")}function Cs(t,e){e&&setTimeout(()=>{t.focus(),t.click(),t.select()})}function Gt(t){t.shiftKey&&t.key=="Tab"&&t.preventDefault()}function _n(t){t.key=="Tab"&&!t.shiftKey&&t.preventDefault()}function Es(t,e){let n=/[^a-zA-Z0-9~!#$%^&*()\-_+[\]{}\\|;:'",.<>/? ]/g;return t.replace(n,"").replaceAll(`
`,"").replace(/^ /,"").slice(0,e)}function wi(t,e,n){(!t.maxLength||t.maxLength!=n)&&e.length>=n&&(t.maxLength=n)}function Wa(t,e){t={...t},e={...e};for(let n of vi)t[n]?t[n]=t[n].name:t[n]="";for(let n of qn)e[n]?e[n]=e[n].name:e[n]="";return{eq:t,gear:e}}function n_(t){let e,n,s,i,r,o,l,a;return{c(){e=g("li"),n=g("button"),s=g("img"),r=W(),o=g("span"),o.textContent=`${t[3]}`,Qe(s.src,i=t[0].image)||m(s,"src",i),m(s,"alt",""),Z(e,"selectedItem",t[2])},m(u,d){U(u,e,d),_(e,n),_(n,s),_(n,r),_(n,o),t[8](e),l||(a=[Ho(t[4].call(null,o)),T(n,"click",t[5])],l=!0)},p(u,[d]){d&1&&!Qe(s.src,i=u[0].image)&&m(s,"src",i),d&4&&Z(e,"selectedItem",u[2])},i:J,o:J,d(u){u&&q(e),t[8](null),l=!1,ge(a)}}}function s_(t,e,n){let s,i,r,o;Q(t,Xt,y=>n(9,s=y)),Q(t,ft,y=>n(10,i=y)),Q(t,wt,y=>n(11,r=y)),Q(t,Di,y=>n(12,o=y));let{itemData:l,slotOpen:a,eqSlotName:u}=e;const d=jt();let c,f=!1,h=l.name;function p(y){setTimeout(()=>{cr(c,h)&&o.push({node:c,itemName:h})})}function b(y){if(a||!a&&y.isTrusted==!1){d("itemSelect",{element:c,trusted:y.isTrusted}),c.classList.contains("selectedItem")||n(2,f=!1),n(2,f=!f),n(6,a=!1),Y(ft,i[u]=f?l:ar,i),Ba(i,r);for(let I of Object.keys(yi)){Y(Xt,s[I]=0,s);for(let v in i)Y(Xt,s[I]+=i[v].stats[I],s),Y(Xt,s[I]=Math.round(s[I]*10)/10,s)}}}function w(y){$[y?"unshift":"push"](()=>{c=y,n(1,c)})}return t.$$set=y=>{"itemData"in y&&n(0,l=y.itemData),"slotOpen"in y&&n(6,a=y.slotOpen),"eqSlotName"in y&&n(7,u=y.eqSlotName)},[l,c,f,h,p,b,a,u,w]}class i_ extends Te{constructor(e){super(),Ie(this,e,s_,n_,de,{itemData:0,slotOpen:6,eqSlotName:7})}}function r_(t){let e,n,s,i,r,o,l,a,u;return{c(){e=g("li"),n=g("button"),s=g("img"),r=W(),o=g("span"),o.textContent=`${t[4]}`,Qe(s.src,i=t[0].image)||m(s,"src",i),m(s,"alt",""),n.disabled=l=!t[3],Z(e,"selectedItem",t[2]),Z(e,"non-eligible",!t[3])},m(d,c){U(d,e,c),_(e,n),_(n,s),_(n,r),_(n,o),t[11](e),a||(u=[Ho(t[5].call(null,o)),T(n,"click",t[6])],a=!0)},p(d,[c]){c&1&&!Qe(s.src,i=d[0].image)&&m(s,"src",i),c&8&&l!==(l=!d[3])&&(n.disabled=l),c&4&&Z(e,"selectedItem",d[2]),c&8&&Z(e,"non-eligible",!d[3])},i:J,o:J,d(d){d&&q(e),t[11](null),a=!1,ge(u)}}}function o_(t,e,n){let s,i,r;Q(t,wt,v=>n(10,s=v)),Q(t,ft,v=>n(12,i=v)),Q(t,Di,v=>n(13,r=v));let{itemData:o,slotOpen:l,index:a,weaponExpand:u}=e;const d=jt();let c,f=!1,h=!0,p=o.name,b={"Orange Salamander":["Green Salamander","Purple Salamander"],"Green Salamander":["Orange Salamander","Purple Salamander"],"Purple Salamander":["Orange Salamander","Green Salamander"],"White Salamander":["Black Salamander","Gold Salamander"],"Black Salamander":["White Salamander","Gold Salamander"],"Gold Salamander":["White Salamander","Black Salamander"]};function w(v){setTimeout(()=>{cr(c,p)&&r.push({node:c,itemName:p})})}function y(v){h&&(l||!l&&v.isTrusted==!1)&&(d("itemSelect",{element:c,trusted:v.isTrusted}),c.classList.contains("selectedItem")||n(2,f=!1),n(2,f=!f),n(7,l=!1),Y(wt,s[a]=f?o:ur,s),Ba(i,s))}function I(v){$[v?"unshift":"push"](()=>{c=v,n(1,c)})}return t.$$set=v=>{"itemData"in v&&n(0,o=v.itemData),"slotOpen"in v&&n(7,l=v.slotOpen),"index"in v&&n(8,a=v.index),"weaponExpand"in v&&n(9,u=v.weaponExpand)},t.$$.update=()=>{if(t.$$.dirty&1793&&s)for(let v in s)if(v!=a&&(s[v].name==p||b[s[v].name]&&b[s[v].name].includes(p))){n(3,h=!1);break}else!u&&!o.tool&&n(3,h=!0);if(t.$$.dirty&1793){if(u)o.tool&&n(3,h=!1);else if(o.tool)for(let v in s)if(v!=a&&s[v].name==p){n(3,h=!1);break}else n(3,h=!0)}},[o,c,f,h,p,w,y,l,a,u,s,I]}class l_ extends Te{constructor(e){super(),Ie(this,e,o_,r_,de,{itemData:0,slotOpen:7,index:8,weaponExpand:9})}}function a_(t){const e=t-1;return e*e*e+1}function He(t,{delay:e=0,duration:n=400,easing:s=Ss}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function lt(t,{delay:e=0,duration:n=400,easing:s=a_,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),l=+o.opacity,a=o.transform==="none"?"":o.transform,u=1-i,d=l*(1-r);return{delay:e,duration:n,easing:s,css:(c,f)=>`
			transform: ${a} scale(${1-u*f});
			opacity: ${l-d*f}
		`}}function oo(t){let e,n,s,i;return{c(){e=g("img"),Qe(e.src,n=t[5][t[3]])||m(e,"src",n),m(e,"alt","")},m(r,o){U(r,e,o),i=!0},p(r,o){(!i||o&8&&!Qe(e.src,n=r[5][r[3]]))&&m(e,"src",n)},i(r){i||(r&&be(()=>{i&&(s||(s=Re(e,He,{duration:150},!0)),s.run(1))}),i=!0)},o(r){r&&(s||(s=Re(e,He,{duration:150},!1)),s.run(0)),i=!1},d(r){r&&q(e),r&&s&&s.end()}}}function u_(t){let e,n,s=t[5][t[3]],i,r,o=t[0].name+"",l,a,u,d=oo(t);return{c(){e=g("li"),n=g("button"),d.c(),i=W(),r=g("span"),l=ne(o),Z(e,"selectedItem",t[4])},m(c,f){U(c,e,f),_(e,n),d.m(n,null),_(n,i),_(n,r),_(r,l),t[8](e),a||(u=[T(n,"click",t[6]),T(e,"mouseenter",t[9]),T(e,"focusin",t[10]),T(e,"mouseleave",t[11]),T(e,"focusout",t[12])],a=!0)},p(c,[f]){f&8&&de(s,s=c[5][c[3]])?(Ae(),V(d,1,1,J),Pe(),d=oo(c),d.c(),H(d,1),d.m(n,i)):d.p(c,f),f&1&&o!==(o=c[0].name+"")&&ke(l,o)},i(c){H(d)},o(c){V(d)},d(c){c&&q(e),d.d(c),t[8](null),a=!1,ge(u)}}}function c_(t,e,n){let s,i,r;Q(t,Tn,O=>n(15,s=O)),Q(t,ft,O=>n(16,i=O)),Q(t,ei,O=>n(17,r=O));let{itemData:o,ddOpen:l=!1}=e,a,u=!1,d=!1,c,f=0,h=o.pieces.length,p=["head","body","legs","feet"];p=h==2?p.slice(1,3):h==3?p.slice(0,3):p;let b=[];for(let O=0;O<h;O++)b.push(r[p[O]].find(j=>j.name==o.pieces[O]).image);function w(){d?c=setInterval(()=>{n(3,f++,f),f==h&&n(3,f=0)},750):(clearInterval(c),n(3,f=0))}function y(){let O=0;for(let j=0;j<h;j++)!i[p[j]]||i[p[j]].name!=o.pieces[j]?s[p[j]][o.pieces[j]].querySelector("button").click():O++;O!=h&&n(7,l=!1)}function I(O){$[O?"unshift":"push"](()=>{a=O,n(2,a)})}const v=()=>n(1,d=!0),k=()=>n(1,d=!0),E=()=>n(1,d=!1),A=()=>n(1,d=!1);return t.$$set=O=>{"itemData"in O&&n(0,o=O.itemData),"ddOpen"in O&&n(7,l=O.ddOpen)},t.$$.update=()=>{t.$$.dirty&2&&(d||!d)&&w()},[o,d,a,f,u,b,y,l,I,v,k,E,A]}class d_ extends Te{constructor(e){super(),Ie(this,e,c_,u_,de,{itemData:0,ddOpen:7})}}function lo(t,e,n){const s=t.slice();return s[36]=e[n],s}function f_(t){return{c:J,m:J,p:J,i:J,o:J,d:J}}function h_(t){let e,n,s,i,r,o,l=Ye(t[35]),a=[];for(let d=0;d<l.length;d+=1)a[d]=ao(lo(t,l,d));const u=d=>V(a[d],1,1,()=>{a[d]=null});return{c(){e=g("input"),n=W(),s=g("ul");for(let d=0;d<a.length;d+=1)a[d].c();m(e,"type","text"),m(e,"class","searchBarInput"),m(e,"placeholder","Search..."),Z(s,"no-scrollbar",t[8].length<=4)},m(d,c){U(d,e,c),t[19](e),U(d,n,c),U(d,s,c);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(s,null);t[24](s),i=!0,r||(o=[T(e,"keydown",t[11]),T(e,"input",t[12])],r=!0)},p(d,c){if(c[0]&9743){l=Ye(d[35]);let f;for(f=0;f<l.length;f+=1){const h=lo(d,l,f);a[f]?(a[f].p(h,c),H(a[f],1)):(a[f]=ao(h),a[f].c(),H(a[f],1),a[f].m(s,null))}for(Ae(),f=l.length;f<a.length;f+=1)u(f);Pe()}(!i||c[0]&256)&&Z(s,"no-scrollbar",d[8].length<=4)},i(d){if(!i){for(let c=0;c<l.length;c+=1)H(a[c]);i=!0}},o(d){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)V(a[c]);i=!1},d(d){d&&(q(e),q(n),q(s)),t[19](null),Ut(a,d),t[24](null),r=!1,ge(o)}}}function __(t){let e,n,s;function i(o){t[23](o)}let r={itemData:t[36],eqSlotName:t[2]};return t[0]!==void 0&&(r.slotOpen=t[0]),e=new i_({props:r}),$.push(()=>ve(e,"slotOpen",i)),e.$on("itemSelect",t[13]),{c(){pe(e.$$.fragment)},m(o,l){he(e,o,l),s=!0},p(o,l){const a={};l[0]&516&&(a.itemData=o[36]),l[0]&4&&(a.eqSlotName=o[2]),!n&&l[0]&1&&(n=!0,a.slotOpen=o[0],ye(()=>n=!1)),e.$set(a)},i(o){s||(H(e.$$.fragment,o),s=!0)},o(o){V(e.$$.fragment,o),s=!1},d(o){_e(e,o)}}}function p_(t){let e,n,s;function i(o){t[22](o)}let r={itemData:t[36]};return t[0]!==void 0&&(r.ddOpen=t[0]),e=new d_({props:r}),$.push(()=>ve(e,"ddOpen",i)),{c(){pe(e.$$.fragment)},m(o,l){he(e,o,l),s=!0},p(o,l){const a={};l[0]&516&&(a.itemData=o[36]),!n&&l[0]&1&&(n=!0,a.ddOpen=o[0],ye(()=>n=!1)),e.$set(a)},i(o){s||(H(e.$$.fragment,o),s=!0)},o(o){V(e.$$.fragment,o),s=!1},d(o){_e(e,o)}}}function m_(t){let e,n,s,i;function r(a){t[20](a)}function o(a){t[21](a)}let l={itemData:t[36],index:t[3]};return t[0]!==void 0&&(l.slotOpen=t[0]),t[1]!==void 0&&(l.weaponExpand=t[1]),e=new l_({props:l}),$.push(()=>ve(e,"slotOpen",r)),$.push(()=>ve(e,"weaponExpand",o)),e.$on("itemSelect",t[13]),{c(){pe(e.$$.fragment)},m(a,u){he(e,a,u),i=!0},p(a,u){const d={};u[0]&516&&(d.itemData=a[36]),u[0]&8&&(d.index=a[3]),!n&&u[0]&1&&(n=!0,d.slotOpen=a[0],ye(()=>n=!1)),!s&&u[0]&2&&(s=!0,d.weaponExpand=a[1],ye(()=>s=!1)),e.$set(d)},i(a){i||(H(e.$$.fragment,a),i=!0)},o(a){V(e.$$.fragment,a),i=!1},d(a){_e(e,a)}}}function ao(t){let e,n,s,i;const r=[m_,p_,__],o=[];function l(a,u){return a[3]?0:a[2]=="builds"?1:2}return e=l(t),n=o[e]=r[e](t),{c(){n.c(),s=Lt()},m(a,u){o[e].m(a,u),U(a,s,u),i=!0},p(a,u){let d=e;e=l(a),e===d?o[e].p(a,u):(Ae(),V(o[d],1,1,()=>{o[d]=null}),Pe(),n=o[e],n?n.p(a,u):(n=o[e]=r[e](a),n.c()),H(n,1),n.m(s.parentNode,s))},i(a){i||(H(n),i=!0)},o(a){V(n),i=!1},d(a){a&&q(s),o[e].d(a)}}}function g_(t){let e;return{c(){e=g("span"),e.textContent="Loading items...",m(e,"class","svelte-o6g1ik")},m(n,s){U(n,e,s)},p:J,i:J,o:J,d(n){n&&q(e)}}}function b_(t){let e,n,s,i,r,o={ctx:t,current:null,token:null,hasCatch:!1,pending:g_,then:h_,catch:f_,value:35,blocks:[,,,]};return _r(n=t[10]||t[9][t[2]],o),{c(){e=g("div"),o.block.c(),m(e,"class","dropdown svelte-o6g1ik")},m(l,a){U(l,e,a),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,s=!0,i||(r=[T(e,"transitionend",t[25]),T(e,"transitioncancel",t[26])],i=!0)},p(l,a){t=l,o.ctx=t,a[0]&516&&n!==(n=t[10]||t[9][t[2]])&&_r(n,o)||iu(o,t,a)},i(l){s||(H(o.block),s=!0)},o(l){for(let a=0;a<3;a+=1){const u=o.blocks[a];V(u)}s=!1},d(l){l&&q(e),o.block.d(),o.token=null,o=null,i=!1,ge(r)}}}function y_(t,e,n){let s,i,r,o,l;Q(t,Tn,S=>n(16,i=S)),Q(t,lu,S=>n(17,r=S)),Q(t,rs,S=>n(18,o=S)),Q(t,ei,S=>n(9,l=S));let{slotName:a,index:u,slotOpen:d,weaponExpand:c}=e;const f=jt();u?Y(rs,o[u]={},o):Y(Tn,i[a]={},i);let h,p,b,w=null,y=!1,I=`https://raw.githubusercontent.com/XT8SS/fc-sv/gh-pages/ff-data/${a}.json`,v=l[a]||null,k=!1,E=[];const A=l[a]?null:fetch(I).then(async S=>{if(S.status!=200){console.error(`Failed to fetch ${(u?"weapon #":"")+a} slot data from ${I}
Response status: ${S.status}`);return}return n(15,v=await S.json()),Y(ei,l[a]=v,l),v}).catch(S=>{console.error(`Failed to initiate ${(u?"weapon #":"")+a} slot data fetch from ${I}
${S}`)});function O(){b&&b.classList.remove("lastElement"),n(8,E=p.querySelectorAll("li:not(.hidden)")),b=E[E.length-1],b&&b.classList.add("lastElement"),(!b||b.classList.contains("non-eligible"))&&(b=h)}function j(S){!S.shiftKey&&S.key=="Tab"&&(S.preventDefault(),setTimeout(()=>h.focus()))}function se(){b&&b.removeEventListener("keydown",j),O(),b&&b.addEventListener("keydown",j)}function R(S){S.shiftKey&&S.key=="Tab"&&(S.preventDefault(),setTimeout(()=>(b.querySelector("button")||b).focus()))}function P(){Fa(h.value,s),se()}function N(S){f("itemSelect",S.detail.element),n(6,w=S.detail.element),y=S.detail.trusted;let B=p.querySelector(".selectedItem");B&&B!=S.detail.element&&B.classList.remove("selectedItem"),n(7,k=!0),y||(y=!1,K(),p.scrollTo(0,w.offsetTop))}function K(){n(7,k=!1),n(5,h.value="",h),P()}function x(S){$[S?"unshift":"push"](()=>{h=S,n(5,h)})}function C(S){d=S,n(0,d)}function ee(S){c=S,n(1,c)}function le(S){d=S,n(0,d)}function D(S){d=S,n(0,d)}function G(S){$[S?"unshift":"push"](()=>{p=S,n(4,p)})}const fe=S=>{S.propertyName=="visibility"&&(!d&&w&&p.scrollTo(0,w.offsetTop),k&&K(),Cs(h,d))},L=S=>{S.propertyName=="visibility"&&(n(7,k=!1),Cs(h,d))};return t.$$set=S=>{"slotName"in S&&n(2,a=S.slotName),"index"in S&&n(3,u=S.index),"slotOpen"in S&&n(0,d=S.slotOpen),"weaponExpand"in S&&n(1,c=S.weaponExpand)},t.$$.update=()=>{if(t.$$.dirty[0]&458764&&(s=u?o[u]:a=="builds"?r:i[a]),t.$$.dirty[0]&32784&&p){n(8,E=p.querySelectorAll("li:not(.hidden)"));for(let S=0;S<p.childElementCount;S++)s[v[S].name]=p.children[S];O(),se()}},[d,c,a,u,p,h,w,k,E,l,A,R,P,N,K,v,i,r,o,x,C,ee,le,D,G,fe,L]}class dr extends Te{constructor(e){super(),Ie(this,e,y_,b_,de,{slotName:2,index:3,slotOpen:0,weaponExpand:1},null,[-1,-1])}}function uo(t){let e,n,s,i,r,o,l=t[1].name+"",a,u,d,c,f,h;return{c(){e=g("a"),n=g("img"),r=W(),o=g("span"),a=ne(l),Qe(n.src,s=t[1].image)||m(n,"src",s),m(n,"alt",i=t[1].name),m(n,"draggable","false"),m(n,"class","svelte-1j6yuis"),m(o,"class","tooltip"),m(o,"id","left"),m(e,"href",u=t[1].link),m(e,"target","_blank"),m(e,"class","svelte-1j6yuis"),De(e,"display",t[1].link?"":"none")},m(p,b){U(p,e,b),_(e,n),_(e,r),_(e,o),_(o,a),c=!0,f||(h=[T(e,"focusin",t[11]),T(e,"outroend",t[12])],f=!0)},p(p,b){(!c||b&2&&!Qe(n.src,s=p[1].image))&&m(n,"src",s),(!c||b&2&&i!==(i=p[1].name))&&m(n,"alt",i),(!c||b&2)&&l!==(l=p[1].name+"")&&ke(a,l),(!c||b&2&&u!==(u=p[1].link))&&m(e,"href",u),b&2&&De(e,"display",p[1].link?"":"none")},i(p){c||(p&&be(()=>{c&&(d||(d=Re(e,He,{duration:150},!0)),d.run(1))}),c=!0)},o(p){p&&(d||(d=Re(e,He,{duration:150},!1)),d.run(0)),c=!1},d(p){p&&q(e),p&&d&&d.end(),f=!1,ge(h)}}}function v_(t){let e,n,s=t[1],i,r,o,l=t[0].charAt(0).toUpperCase()+t[0].slice(1)+"",a,u,d,c,f,h,p,b,w,y,I,v=uo(t);function k(A){t[17](A)}let E={slotName:t[0],index:null,weaponExpand:null};return t[5]!==void 0&&(E.slotOpen=t[5]),p=new dr({props:E}),$.push(()=>ve(p,"slotOpen",k)),p.$on("itemSelect",t[18]),{c(){e=g("div"),n=g("div"),v.c(),r=W(),o=g("button"),a=ne(l),u=W(),d=g("iconify-icon"),c=W(),f=g("button"),f.innerHTML='<iconify-icon icon="maki:cross" class="svelte-1j6yuis"></iconify-icon> <span class="tooltip" id="top">Clear selection</span>',h=W(),pe(p.$$.fragment),m(n,"class","eqSlotIcon ff-border svelte-1j6yuis"),be(()=>t[14].call(n)),De(n,"min-width",`${t[4]}px`),Bt(d,"icon","iconamoon:arrow-down-2-fill"),Bt(d,"class","svelte-1j6yuis"),m(o,"class","ddButton svelte-1j6yuis"),m(f,"class","clearButton svelte-1j6yuis"),m(e,"class","eqSlotCont svelte-1j6yuis"),Z(e,"slotOpen",t[5]),Z(e,"clearAllowed",t[6]&&t[7])},m(A,O){U(A,e,O),_(e,n),v.m(n,null),t[13](n),i=rt(n,t[14].bind(n)),_(e,r),_(e,o),_(o,a),_(o,u),_(o,d),_(e,c),_(e,f),_(e,h),he(p,e,null),t[19](e),w=!0,y||(I=[T(window,"mousedown",t[9]),T(window,"keydown",t[10]),T(o,"click",t[15]),T(f,"click",t[16]),T(e,"keydown",t[20]),T(e,"mouseenter",t[21]),T(e,"mouseleave",t[22])],y=!0)},p(A,[O]){O&2&&de(s,s=A[1])?(Ae(),V(v,1,1,J),Pe(),v=uo(A),v.c(),H(v,1),v.m(n,null)):v.p(A,O),O&16&&De(n,"min-width",`${A[4]}px`),(!w||O&1)&&l!==(l=A[0].charAt(0).toUpperCase()+A[0].slice(1)+"")&&ke(a,l);const j={};O&1&&(j.slotName=A[0]),!b&&O&32&&(b=!0,j.slotOpen=A[5],ye(()=>b=!1)),p.$set(j),(!w||O&32)&&Z(e,"slotOpen",A[5]),(!w||O&192)&&Z(e,"clearAllowed",A[6]&&A[7])},i(A){w||(H(v),H(p.$$.fragment,A),w=!0)},o(A){V(v),V(p.$$.fragment,A),w=!1},d(A){A&&q(e),v.d(A),t[13](null),i(),_e(p),t[19](null),y=!1,ge(I)}}}function w_(t,e,n){let s;Q(t,ft,R=>n(8,s=R));let{eqSlotName:i}=e,r,o,l,a=ar,u,d,c;const f=R=>{(!r.contains(R.target)||R.target==r||R.target==o)&&(n(5,u=!1),R.target!=r&&R.target!=o&&n(6,d=!1))},h=R=>{R.key=="Tab"&&setTimeout(()=>{n(6,d=r.contains(document.activeElement))})},p=R=>{R.relatedTarget==null&&n(6,d=!0)},b=()=>{setTimeout(()=>{e_(o)})};function w(R){$[R?"unshift":"push"](()=>{o=R,n(3,o)})}function y(){l=this.offsetHeight,n(4,l)}const I=()=>n(5,u=!u),v=()=>{n(6,d=!1),r.classList.contains("clearAllowed")&&c.querySelector("button").click()};function k(R){u=R,n(5,u)}const E=R=>{setTimeout(()=>{n(7,c=R.detail.classList.contains("selectedItem")?R.detail:null)})};function A(R){$[R?"unshift":"push"](()=>{r=R,n(2,r)})}const O=R=>{R.key=="Escape"&&n(5,u=!1)},j=()=>n(6,d=!0),se=()=>{r.contains(document.activeElement)||n(6,d=!1)};return t.$$set=R=>{"eqSlotName"in R&&n(0,i=R.eqSlotName)},t.$$.update=()=>{t.$$.dirty&259&&s[i]&&s[i].name!=a.name&&n(1,a=s[i])},[i,a,r,o,l,u,d,c,s,f,h,p,b,w,y,I,v,k,E,A,O,j,se]}class C_ extends Te{constructor(e){super(),Ie(this,e,w_,v_,de,{eqSlotName:0})}}function co(t,e,n){const s=t.slice();return s[1]=e[n],s[2]=e,s[3]=n,s}function fo(t){let e,n,s;function i(o){t[0](o,t[1],t[2],t[3])}let r={};return t[1]!==void 0&&(r.eqSlotName=t[1]),e=new C_({props:r}),$.push(()=>ve(e,"eqSlotName",i)),{c(){pe(e.$$.fragment)},m(o,l){he(e,o,l),s=!0},p(o,l){t=o;const a={};!n&&l&0&&(n=!0,a.eqSlotName=t[1],ye(()=>n=!1)),e.$set(a)},i(o){s||(H(e.$$.fragment,o),s=!0)},o(o){V(e.$$.fragment,o),s=!1},d(o){_e(e,o)}}}function E_(t){let e,n,s=Ye(Array(...vi)),i=[];for(let o=0;o<s.length;o+=1)i[o]=fo(co(t,s,o));const r=o=>V(i[o],1,1,()=>{i[o]=null});return{c(){e=g("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","armorBox svelte-3p4tb9")},m(o,l){U(o,e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null);n=!0},p(o,[l]){if(l&0){s=Ye(Array(...vi));let a;for(a=0;a<s.length;a+=1){const u=co(o,s,a);i[a]?(i[a].p(u,l),H(i[a],1)):(i[a]=fo(u),i[a].c(),H(i[a],1),i[a].m(e,null))}for(Ae(),a=s.length;a<i.length;a+=1)r(a);Pe()}},i(o){if(!n){for(let l=0;l<s.length;l+=1)H(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)V(i[l]);n=!1},d(o){o&&q(e),Ut(i,o)}}}function S_(t,e,n){function s(i,r,o,l){o[l]=i}return[s]}class k_ extends Te{constructor(e){super(),Ie(this,e,S_,E_,de,{})}}function I_(t){let e,n=(t[5]?`${Math.floor(t[2][t[0]]*.675+19.8)}% Reduction`:t[6])+"",s,i,r,o;return{c(){e=g("span"),s=ne(n),m(e,"class","statValue svelte-16tz2kw"),m(e,"tabindex","0"),m(e,"style",i=t[5]?`font-size: ${t[3]*.7/6.85}px;`:""),Z(e,"hidden",t[4]),Z(e,"negative",t[6]<0),Z(e,"reduction",t[5])},m(l,a){U(l,e,a),_(e,s),r||(o=[T(e,"mouseenter",t[10]),T(e,"mouseleave",t[11]),T(e,"focusin",t[12]),T(e,"focusout",t[13])],r=!0)},p(l,a){a&101&&n!==(n=(l[5]?`${Math.floor(l[2][l[0]]*.675+19.8)}% Reduction`:l[6])+"")&&ke(s,n),a&40&&i!==(i=l[5]?`font-size: ${l[3]*.7/6.85}px;`:"")&&m(e,"style",i),a&16&&Z(e,"hidden",l[4]),a&64&&Z(e,"negative",l[6]<0),a&32&&Z(e,"reduction",l[5])},d(l){l&&q(e),r=!1,ge(o)}}}function T_(t){let e,n=(t[0]!="endurance"?t[6]:t[6].toFixed(2))+"",s;return{c(){e=g("span"),s=ne(n),m(e,"class","statValue svelte-16tz2kw"),Z(e,"hidden",t[4]),Z(e,"negative",t[6]<0)},m(i,r){U(i,e,r),_(e,s)},p(i,r){r&65&&n!==(n=(i[0]!="endurance"?i[6]:i[6].toFixed(2))+"")&&ke(s,n),r&16&&Z(e,"hidden",i[4]),r&64&&Z(e,"negative",i[6]<0)},d(i){i&&q(e)}}}function ho(t){let e,n=`${t[1]} Bonus`,s;return{c(){e=g("span"),s=ne(n),De(e,"font-size",`${t[3]*.7/t[7][t[0]]}px`)},m(i,r){U(i,e,r),_(e,s)},p(i,r){r&2&&n!==(n=`${i[1]} Bonus`)&&ke(s,n),r&9&&De(e,"font-size",`${i[3]*.7/i[7][i[0]]}px`)},d(i){i&&q(e)}}}function N_(t){let e,n,s,i,r,o,l,a;function u(h,p){return h[0]!="armor"?T_:I_}let d=u(t),c=d(t),f=t[4]&&ho(t);return{c(){e=g("div"),n=g("img"),i=W(),c.c(),r=W(),f&&f.c(),Qe(n.src,s="stats/"+t[0]+".svg")||m(n,"src",s),m(n,"alt",t[1]),m(n,"class","svelte-16tz2kw"),m(e,"id",t[0]),m(e,"class","svelte-16tz2kw"),be(()=>t[14].call(e)),Z(e,"hidden",t[6]==0)},m(h,p){U(h,e,p),_(e,n),_(e,i),c.m(e,null),_(e,r),f&&f.m(e,null),o=rt(e,t[14].bind(e)),l||(a=[T(n,"mouseenter",t[8]),T(n,"mouseleave",t[9])],l=!0)},p(h,[p]){p&1&&!Qe(n.src,s="stats/"+h[0]+".svg")&&m(n,"src",s),p&2&&m(n,"alt",h[1]),d===(d=u(h))&&c?c.p(h,p):(c.d(1),c=d(h),c&&(c.c(),c.m(e,r))),h[4]?f?f.p(h,p):(f=ho(h),f.c(),f.m(e,null)):f&&(f.d(1),f=null),p&1&&m(e,"id",h[0]),p&64&&Z(e,"hidden",h[6]==0)},i:J,o:J,d(h){h&&q(e),c.d(),f&&f.d(),o(),l=!1,ge(a)}}}function D_(t,e,n){let s,i;Q(t,Xt,I=>n(2,i=I));let{codeName:r,formalName:o}=e,l,a,u,d={armor:5.9,magicDmg:5.65,meleeDmg:5.7,rangedDmg:6.45,hpRegen:7.35,endurance:7.85,sightRange:8.45,walkSpeed:8.3,jumpPower:8.7,ammoReturn:9.3,height:6.1};const c=()=>n(4,a=!0),f=()=>n(4,a=!1),h=()=>n(5,u=!0),p=()=>n(5,u=!1),b=()=>n(5,u=!0),w=()=>n(5,u=!1);function y(){l=this.offsetWidth,n(3,l)}return t.$$set=I=>{"codeName"in I&&n(0,r=I.codeName),"formalName"in I&&n(1,o=I.formalName)},t.$$.update=()=>{t.$$.dirty&5&&n(6,s=i[r]||0)},[r,o,i,l,a,u,s,d,c,f,h,p,b,w,y]}class O_ extends Te{constructor(e){super(),Ie(this,e,D_,N_,de,{codeName:0,formalName:1})}}function _o(t,e,n){const s=t.slice();return s[2]=e[n][0],s[3]=e[n][1],s[4]=e,s[5]=n,s}function po(t){let e,n,s,i;function r(a){t[0](a,t[2],t[4],t[5])}function o(a){t[1](a,t[3],t[4],t[5])}let l={};return t[2]!==void 0&&(l.codeName=t[2]),t[3]!==void 0&&(l.formalName=t[3]),e=new O_({props:l}),$.push(()=>ve(e,"codeName",r)),$.push(()=>ve(e,"formalName",o)),{c(){pe(e.$$.fragment)},m(a,u){he(e,a,u),i=!0},p(a,u){t=a;const d={};!n&&u&0&&(n=!0,d.codeName=t[2],ye(()=>n=!1)),!s&&u&0&&(s=!0,d.formalName=t[3],ye(()=>s=!1)),e.$set(d)},i(a){i||(H(e.$$.fragment,a),i=!0)},o(a){V(e.$$.fragment,a),i=!1},d(a){_e(e,a)}}}function R_(t){let e,n,s=Ye(Object.entries(yi)),i=[];for(let o=0;o<s.length;o+=1)i[o]=po(_o(t,s,o));const r=o=>V(i[o],1,1,()=>{i[o]=null});return{c(){e=g("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","statBox svelte-lu37w6")},m(o,l){U(o,e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null);n=!0},p(o,[l]){if(l&0){s=Ye(Object.entries(yi));let a;for(a=0;a<s.length;a+=1){const u=_o(o,s,a);i[a]?(i[a].p(u,l),H(i[a],1)):(i[a]=po(u),i[a].c(),H(i[a],1),i[a].m(e,null))}for(Ae(),a=s.length;a<i.length;a+=1)r(a);Pe()}},i(o){if(!n){for(let l=0;l<s.length;l+=1)H(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)V(i[l]);n=!1},d(o){o&&q(e),Ut(i,o)}}}function A_(t,e,n){function s(r,o,l,a){l[a][0]=r}function i(r,o,l,a){l[a][1]=r}return[s,i]}class P_ extends Te{constructor(e){super(),Ie(this,e,A_,R_,de,{})}}function M_(t){let e,n,s,i,r,o,l,a,u,d;return{c(){e=g("div"),n=g("button"),n.textContent="-",s=W(),i=g("input"),r=W(),o=g("b"),o.textContent="%",l=W(),a=g("button"),a.textContent="+",m(n,"id","decrease"),m(n,"class","svelte-1d7zneu"),m(i,"type","number"),m(i,"placeholder","0"),m(i,"class","svelte-1d7zneu"),m(o,"class","svelte-1d7zneu"),m(a,"id","increase"),m(a,"class","svelte-1d7zneu"),m(e,"class","svelte-1d7zneu"),Z(e,"non-percent",!t[1])},m(c,f){U(c,e,f),_(e,n),_(e,s),_(e,i),st(i,t[0]),_(e,r),_(e,o),_(e,l),_(e,a),u||(d=[T(n,"click",t[4]),T(i,"input",t[5]),T(i,"input",t[2]),T(a,"click",t[6])],u=!0)},p(c,[f]){f&1&&Go(i.value)!==c[0]&&st(i,c[0])},i:J,o:J,d(c){c&&q(e),u=!1,ge(d)}}}function L_(t,e,n){let{weaponName:s,value:i}=e,r=s!="Nature's Wrath Spellbook",o;r?(i=100,o=100):(i=4,o=4);function l(){i<0?n(0,i=0):i>o&&n(0,i=o),i%1!=0&&n(0,i=Math.floor(i))}const a=()=>{n(0,i--,i),l()};function u(){i=Go(this.value),n(0,i)}const d=()=>{n(0,i++,i),l()};return t.$$set=c=>{"weaponName"in c&&n(3,s=c.weaponName),"value"in c&&n(0,i=c.value)},[i,r,l,s,a,u,d]}class B_ extends Te{constructor(e){super(),Ie(this,e,L_,M_,de,{weaponName:3,value:0})}}function F_(t){let e,n,s,i,r,o,l,a;return{c(){e=g("div"),n=g("span"),s=W(),i=g("input"),r=W(),o=g("iconify-icon"),m(i,"type","checkbox"),m(i,"class","svelte-na6yc3"),Bt(o,"icon","mingcute:check-fill"),Bt(o,"class","svelte-na6yc3"),m(e,"class","toggleCont svelte-na6yc3")},m(u,d){U(u,e,d),_(e,n),n.innerHTML=t[0],_(e,s),_(e,i),_(e,r),_(e,o),l||(a=[T(i,"change",t[2]),T(i,"keydown",t[3])],l=!0)},p(u,[d]){d&1&&(n.innerHTML=u[0])},i:J,o:J,d(u){u&&q(e),l=!1,ge(a)}}}function W_(t,e,n){let{text:s}=e;const i=jt(),r=l=>i("toggle",l.target.checked),o=l=>{l.key=="Enter"&&(l.target.checked=!l.target.checked,i("toggle",l.target.checked))};return t.$$set=l=>{"text"in l&&n(0,s=l.text)},[s,i,r,o]}class qa extends Te{constructor(e){super(),Ie(this,e,W_,F_,de,{text:0})}}function mo(t,e,n){const s=t.slice();s[40]=e[n];const i=s[40].name.includes("Fantastic Beamstorm")?"~":"";s[17]=i;const r=s[40].name.includes("Charged");return s[41]=r,s}function q_(t){let e,n,s=t[2].description+"",i,r;return{c(){e=g("span"),n=ne('"'),i=ne(s),r=ne('"'),m(e,"id","toolDesc"),m(e,"class","svelte-1gfuxic")},m(o,l){U(o,e,l),_(e,n),_(e,i),_(e,r)},p(o,l){l[0]&4&&s!==(s=o[2].description+"")&&ke(i,s)},d(o){o&&q(e)}}}function z_(t){let e,n,s,i=`${t[13]?"Type":t[11].name}:`,r,o,l=t[15],a,u,d,c,f,h=t[13]?"Return":"Expand",p,b,w,y,I=go(t),v=t[3]&&bo(t);return{c(){e=g("button"),n=g("div"),s=g("span"),r=ne(i),o=W(),I.c(),u=W(),v&&v.c(),d=W(),c=g("span"),f=ne("("),p=ne(h),b=ne(")"),m(s,"class","svelte-1gfuxic"),De(s,"font-size",Object.keys(t[16]).includes(t[11].name)?`calc(var(--u) * ${t[16][t[11].name]})`:""),m(n,"id",a=t[13]?"":"basic"),m(n,"class","svelte-1gfuxic"),m(c,"class","tooltip svelte-1gfuxic"),m(c,"id","top"),m(e,"class","gearPreview svelte-1gfuxic"),De(e,"line-height",`${t[7]/6.5}px`)},m(k,E){U(k,e,E),_(e,n),_(n,s),_(s,r),_(n,o),I.m(n,null),_(e,u),v&&v.m(e,null),_(e,d),_(e,c),_(c,f),_(c,p),_(c,b),t[28](e),w||(y=T(e,"click",t[21]),w=!0)},p(k,E){E[0]&10240&&i!==(i=`${k[13]?"Type":k[11].name}:`)&&ke(r,i),E[0]&67584&&De(s,"font-size",Object.keys(k[16]).includes(k[11].name)?`calc(var(--u) * ${k[16][k[11].name]})`:""),E[0]&32768&&de(l,l=k[15])?(I.d(1),I=go(k),I.c(),I.m(n,null)):I.p(k,E),E[0]&8192&&a!==(a=k[13]?"":"basic")&&m(n,"id",a),k[3]?v?v.p(k,E):(v=bo(k),v.c(),v.m(e,d)):v&&(v.d(1),v=null),E[0]&8192&&h!==(h=k[13]?"Return":"Expand")&&ke(p,h),E[0]&128&&De(e,"line-height",`${k[7]/6.5}px`)},d(k){k&&q(e),I.d(k),v&&v.d(),t[28](null),w=!1,y()}}}function go(t){let e,n=(t[13]?t[2].info.type.replace("/","<b>,</b><br/>"):t[19](t[11]))+"";return{c(){e=g("span"),m(e,"class","svelte-1gfuxic")},m(s,i){U(s,e,i),e.innerHTML=n},p(s,i){i[0]&10244&&n!==(n=(s[13]?s[2].info.type.replace("/","<b>,</b><br/>"):s[19](s[11]))+"")&&(e.innerHTML=n)},d(s){s&&q(e)}}}function bo(t){let e,n,s=`${t[13]?"Special":t[3].name.split(" (")[0]}:`,i,r,o=t[15],l,a=yo(t);return{c(){e=g("div"),n=g("span"),i=ne(s),r=W(),a.c(),m(n,"class","svelte-1gfuxic"),De(n,"font-size",Object.keys(t[16]).includes(t[3].name)?`calc(var(--u) * ${t[16][t[3].name]})`:""),m(e,"id",l=t[13]?"":"special"),m(e,"class","svelte-1gfuxic")},m(u,d){U(u,e,d),_(e,n),_(n,i),_(e,r),a.m(e,null)},p(u,d){d[0]&8200&&s!==(s=`${u[13]?"Special":u[3].name.split(" (")[0]}:`)&&ke(i,s),d[0]&65544&&De(n,"font-size",Object.keys(u[16]).includes(u[3].name)?`calc(var(--u) * ${u[16][u[3].name]})`:""),d[0]&32768&&de(o,o=u[15])?(a.d(1),a=yo(u),a.c(),a.m(e,null)):a.p(u,d),d[0]&8192&&l!==(l=u[13]?"":"special")&&m(e,"id",l)},d(u){u&&q(e),a.d(u)}}}function yo(t){let e,n=(t[13]?t[2].info.special:t[17]+t[19](t[3]))+"",s;return{c(){e=g("span"),s=ne(n),m(e,"class","svelte-1gfuxic")},m(i,r){U(i,e,r),_(e,s)},p(i,r){r[0]&139276&&n!==(n=(i[13]?i[2].info.special:i[17]+i[19](i[3]))+"")&&ke(s,n)},d(i){i&&q(e)}}}function vo(t){let e,n,s,i,r,o,l=t[2].name+"",a,u,d,c;return{c(){e=g("a"),n=g("img"),r=W(),o=g("span"),a=ne(l),Qe(n.src,s=t[2].image)||m(n,"src",s),m(n,"alt",i=t[2].name),m(n,"draggable","false"),m(n,"class","svelte-1gfuxic"),m(o,"class","tooltip"),m(o,"id","right"),m(e,"href",u=t[2].link),m(e,"target","_blank"),m(e,"class","svelte-1gfuxic"),De(e,"display",t[2].link?"":"none"),De(e,"border-radius",t[2].tool?"calc(var(--u))":"")},m(f,h){U(f,e,h),_(e,n),_(e,r),_(e,o),_(o,a),c=!0},p(f,h){(!c||h[0]&4&&!Qe(n.src,s=f[2].image))&&m(n,"src",s),(!c||h[0]&4&&i!==(i=f[2].name))&&m(n,"alt",i),(!c||h[0]&4)&&l!==(l=f[2].name+"")&&ke(a,l),(!c||h[0]&4&&u!==(u=f[2].link))&&m(e,"href",u),h[0]&4&&De(e,"display",f[2].link?"":"none"),h[0]&4&&De(e,"border-radius",f[2].tool?"calc(var(--u))":"")},i(f){c||(f&&be(()=>{c&&(d||(d=Re(e,He,{duration:150},!0)),d.run(1))}),c=!0)},o(f){f&&(d||(d=Re(e,He,{duration:150},!1)),d.run(0)),c=!1},d(f){f&&q(e),f&&d&&d.end()}}}function wo(t){let e,n,s,i,r,o,l;n=new qa({props:{text:"Toggle base values"}}),n.$on("toggle",t[36]);let a=Ye(t[2].moves),u=[];for(let c=0;c<a.length;c+=1)u[c]=So(mo(t,a,c));const d=c=>V(u[c],1,1,()=>{u[c]=null});return{c(){e=g("div"),pe(n.$$.fragment),s=W(),i=g("div");for(let c=0;c<u.length;c+=1)u[c].c();m(i,"class","weaponMoves svelte-1gfuxic"),m(e,"class","fullWeaponView svelte-1gfuxic")},m(c,f){U(c,e,f),he(n,e,null),_(e,s),_(e,i);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(i,null);l=!0},p(c,f){if(f[0]&1622036){a=Ye(c[2].moves);let h;for(h=0;h<a.length;h+=1){const p=mo(c,a,h);u[h]?(u[h].p(p,f),H(u[h],1)):(u[h]=So(p),u[h].c(),H(u[h],1),u[h].m(i,null))}for(Ae(),h=a.length;h<u.length;h+=1)d(h);Pe()}},i(c){if(!l){H(n.$$.fragment,c);for(let f=0;f<a.length;f+=1)H(u[f]);c&&be(()=>{l&&(o&&o.end(1),r=xo(e,He,{duration:150,delay:300}),r.start())}),l=!0}},o(c){V(n.$$.fragment,c),u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)V(u[f]);r&&r.invalidate(),c&&(o=Ko(e,He,{duration:150})),l=!1},d(c){c&&q(e),_e(n),Ut(u,c),c&&o&&o.end()}}}function Co(t){let e,n,s,i;function r(a){t[37](a)}function o(a){t[38](a)}let l={};return t[4]!==void 0&&(l.value=t[4]),t[2].name!==void 0&&(l.weaponName=t[2].name),e=new B_({props:l}),$.push(()=>ve(e,"value",r)),$.push(()=>ve(e,"weaponName",o)),{c(){pe(e.$$.fragment)},m(a,u){he(e,a,u),i=!0},p(a,u){const d={};!n&&u[0]&16&&(n=!0,d.value=a[4],ye(()=>n=!1)),!s&&u[0]&4&&(s=!0,d.weaponName=a[2].name,ye(()=>s=!1)),e.$set(d)},i(a){i||(H(e.$$.fragment,a),i=!0)},o(a){V(e.$$.fragment,a),i=!1},d(a){_e(e,a)}}}function Eo(t){let e,n=t[17]+(t[14]&&!t[41]?t[40].base:t[41]?t[20](t[40]):t[19](t[40]))+"",s;return{c(){e=g("span"),s=ne(n),m(e,"class","svelte-1gfuxic")},m(i,r){U(i,e,r),_(e,s)},p(i,r){r[0]&16388&&n!==(n=i[17]+(i[14]&&!i[41]?i[40].base:i[41]?i[20](i[40]):i[19](i[40]))+"")&&ke(s,n)},d(i){i&&q(e)}}}function So(t){let e,n,s,i,r=(t[41]&&t[2].name=="Nature's Wrath Spellbook"?t[40].name.replace("Charged","Charge(s)"):t[40].name)+":",o,l,a=t[41]?[t[15],t[4]]:t[15],u,d,c=t[41]&&Co(t),f=Eo(t);return{c(){e=g("div"),n=g("div"),s=g("span"),c&&c.c(),i=W(),o=ne(r),l=W(),f.c(),u=W(),m(s,"class","svelte-1gfuxic"),m(n,"class","ff-border svelte-1gfuxic"),m(e,"class","svelte-1gfuxic")},m(h,p){U(h,e,p),_(e,n),_(n,s),c&&c.m(s,null),_(s,i),_(s,o),_(n,l),f.m(n,null),_(e,u),d=!0},p(h,p){h[41]?c?(c.p(h,p),p[0]&4&&H(c,1)):(c=Co(h),c.c(),H(c,1),c.m(s,i)):c&&(Ae(),V(c,1,1,()=>{c=null}),Pe()),(!d||p[0]&4)&&r!==(r=(h[41]&&h[2].name=="Nature's Wrath Spellbook"?h[40].name.replace("Charged","Charge(s)"):h[40].name)+":")&&ke(o,r),p[0]&32788&&de(a,a=h[41]?[h[15],h[4]]:h[15])?(f.d(1),f=Eo(h),f.c(),f.m(n,null)):f.p(h,p)},i(h){d||(H(c),d=!0)},o(h){V(c),d=!1},d(h){h&&q(e),c&&c.d(),f.d(h)}}}function H_(t){let e,n,s,i,r,o,l=t[2],a,u,d,c,f,h,p,b,w,y,I;function v(P,N){if(P[2].name&&!P[2].tool)return z_;if(P[2].tool)return q_}let k=v(t),E=k&&k(t),A=vo(t);function O(P){t[32](P)}function j(P){t[33](P)}let se={slotName:t[0],index:t[1]};t[12]!==void 0&&(se.slotOpen=t[12]),t[13]!==void 0&&(se.weaponExpand=t[13]),c=new dr({props:se}),$.push(()=>ve(c,"slotOpen",O)),$.push(()=>ve(c,"weaponExpand",j)),c.$on("itemSelect",t[34]);let R=t[13]&&wo(t);return{c(){e=g("div"),n=g("button"),n.innerHTML=`<iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="90deg" class="svelte-1gfuxic"></iconify-icon>
        Gear`,s=W(),i=g("div"),E&&E.c(),r=W(),o=g("div"),A.c(),d=W(),pe(c.$$.fragment),p=W(),R&&R.c(),b=Lt(),m(n,"class","ddButton svelte-1gfuxic"),m(o,"class","gearSlotIcon svelte-1gfuxic"),be(()=>t[29].call(o)),De(o,"min-width",`${t[8]}px`),m(i,"class","gearInfoCont ff-border svelte-1gfuxic"),be(()=>t[31].call(i)),De(i,"justify-content",t[2].name?"":"flex-end"),m(e,"class","gearSlot svelte-1gfuxic"),Z(e,"slotOpen",t[12]),Z(e,"weapon-expand",t[13])},m(P,N){U(P,e,N),_(e,n),t[26](n),_(e,s),_(e,i),E&&E.m(i,null),_(i,r),_(i,o),A.m(o,null),a=rt(o,t[29].bind(o)),t[30](i),u=rt(i,t[31].bind(i)),_(e,d),he(c,e,null),t[35](e),U(P,p,N),R&&R.m(P,N),U(P,b,N),w=!0,y||(I=[T(window,"mousedown",t[24]),T(window,"keydown",t[25]),T(n,"click",t[27])],y=!0)},p(P,N){k===(k=v(P))&&E?E.p(P,N):(E&&E.d(1),E=k&&k(P),E&&(E.c(),E.m(i,r))),N[0]&4&&de(l,l=P[2])?(Ae(),V(A,1,1,J),Pe(),A=vo(P),A.c(),H(A,1),A.m(o,null)):A.p(P,N),N[0]&256&&De(o,"min-width",`${P[8]}px`),N[0]&4&&De(i,"justify-content",P[2].name?"":"flex-end");const K={};N[0]&1&&(K.slotName=P[0]),N[0]&2&&(K.index=P[1]),!f&&N[0]&4096&&(f=!0,K.slotOpen=P[12],ye(()=>f=!1)),!h&&N[0]&8192&&(h=!0,K.weaponExpand=P[13],ye(()=>h=!1)),c.$set(K),(!w||N[0]&4096)&&Z(e,"slotOpen",P[12]),(!w||N[0]&8192)&&Z(e,"weapon-expand",P[13]),P[13]?R?(R.p(P,N),N[0]&8192&&H(R,1)):(R=wo(P),R.c(),H(R,1),R.m(b.parentNode,b)):R&&(Ae(),V(R,1,1,()=>{R=null}),Pe())},i(P){w||(H(A),H(c.$$.fragment,P),H(R),w=!0)},o(P){V(A),V(c.$$.fragment,P),V(R),w=!1},d(P){P&&(q(e),q(p),q(b)),t[26](null),E&&E.d(),A.d(P),a(),t[30](null),u(),_e(c),t[35](null),R&&R.d(P),y=!1,ge(I)}}}function U_(t,e,n){let s,i,r,o;Q(t,wt,M=>n(23,s=M)),Q(t,Xt,M=>n(15,i=M)),Q(t,zs,M=>n(16,r=M)),Q(t,In,M=>n(39,o=M));let{gearBox:l,slotName:a,index:u}=e,d,c,f,h,p,b,w,y=ur,I,v,k,E,A,O="";function j(){if(w)for(let M of w.querySelectorAll(".gearPreview > div")){if(Object.keys(r).includes(M.id=="basic"?I.name:v?v.name:null))return;let re=$h(M,o);re&&(M.id=="basic"?Y(zs,r[I.name]=re,r):Y(zs,r[v.name]=re,r))}}function se(M){let re;if(M.name=="Void Needle")re=M.base+(i[M.type]||0)-(i.armor||0)*5.625;else if(y.name=="Pureblood Dagger"){let Xe,nt={magicDmg:i.magicDmg||0,meleeDmg:i.meleeDmg||0,rangedDmg:i.rangedDmg||0},Tt=Object.keys(nt).reduce((oe,qe)=>nt[oe]>nt[qe]?oe:qe),Nt=0;for(let oe in nt)oe!=Tt&&(Nt+=nt[oe]);Xe=(i[Tt]||0)*2-Nt,re=M.base+Xe,M.name=="HP restored per Blood Sap"&&(re=M.base+Xe/2)}else if(M.type.includes("/")){let Xe=M.type.split("/"),nt=0;for(let Tt of Xe)nt+=(i[Tt]||0)*M[`${Tt}Mult`];re=M.base+nt}else re=M.base+(i[M.type]||0)*M.mult;return E?Math.floor(re*10)/10:Math.floor(re)}function R(M){let re,Xe=A?0:i[M.type]||0;return y.name=="Celestial Powers Spellbook"?re=(80+Xe*1.1)*(.8+2.2*d/100):y.name=="Staff of Dreams"?re=160+160*d/100+Xe*(.4+1.3*d/100):y.name=="Nature's Wrath Spellbook"&&(re=260+400*d/4+Xe*(1+1.5*d/4)),Math.floor(re*10)/10}function P(){n(14,A=!1),E?(n(13,E=!1),l.classList.remove("weapon-expand"),setTimeout(()=>{j()})):(l.classList.add("weapon-expand"),n(13,E=!0))}const N=M=>{(!c.contains(M.target)||c.contains(M.target)&&f.contains(M.target))&&n(12,k=!1)},K=M=>{M.key=="Escape"&&n(12,k=!1)};function x(M){$[M?"unshift":"push"](()=>{b=M,n(9,b)})}const C=()=>n(12,k=!k);function ee(M){$[M?"unshift":"push"](()=>{w=M,n(10,w)})}function le(){p=this.offsetHeight,n(8,p)}function D(M){$[M?"unshift":"push"](()=>{f=M,n(6,f)})}function G(){h=this.offsetHeight,n(7,h)}function fe(M){k=M,n(12,k)}function L(M){E=M,n(13,E)}const S=()=>{setTimeout(()=>{j(),!y.name&&E&&P()})};function B(M){$[M?"unshift":"push"](()=>{c=M,n(5,c)})}const X=M=>n(14,A=M.detail);function F(M){d=M,n(4,d)}function Ne(M){t.$$.not_equal(y.name,M)&&(y.name=M,n(2,y),n(23,s),n(1,u),n(3,v))}return t.$$set=M=>{"gearBox"in M&&n(22,l=M.gearBox),"slotName"in M&&n(0,a=M.slotName),"index"in M&&n(1,u=M.index)},t.$$.update=()=>{t.$$.dirty[0]&8388622&&s[u]&&s[u].name!=y.name&&(n(2,y=s[u]),!y.tool&&y.name&&(n(11,I=y.moves.filter(M=>M.basic)[0]),n(3,v=y.moves.filter(M=>M.special)[0]),v&&v.name.includes("Fantastic Beamstorm")?n(17,O="~"):n(17,O="")))},[a,u,y,v,d,c,f,h,p,b,w,I,k,E,A,i,r,O,j,se,R,P,l,s,N,K,x,C,ee,le,D,G,fe,L,S,B,X,F,Ne]}class j_ extends Te{constructor(e){super(),Ie(this,e,U_,H_,de,{gearBox:22,slotName:0,index:1},null,[-1,-1])}}function ko(t,e,n){const s=t.slice();return s[3]=e[n],s}function Io(t){let e,n,s;function i(o){t[1](o)}let r={slotName:"gear",index:t[3]};return t[0]!==void 0&&(r.gearBox=t[0]),e=new j_({props:r}),$.push(()=>ve(e,"gearBox",i)),{c(){pe(e.$$.fragment)},m(o,l){he(e,o,l),s=!0},p(o,l){const a={};!n&&l&1&&(n=!0,a.gearBox=o[0],ye(()=>n=!1)),e.$set(a)},i(o){s||(H(e.$$.fragment,o),s=!0)},o(o){V(e.$$.fragment,o),s=!1},d(o){_e(e,o)}}}function V_(t){let e,n,s=Ye(qn),i=[];for(let o=0;o<s.length;o+=1)i[o]=Io(ko(t,s,o));const r=o=>V(i[o],1,1,()=>{i[o]=null});return{c(){e=g("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","gearBox svelte-13plk7j")},m(o,l){U(o,e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null);t[2](e),n=!0},p(o,[l]){if(l&1){s=Ye(qn);let a;for(a=0;a<s.length;a+=1){const u=ko(o,s,a);i[a]?(i[a].p(u,l),H(i[a],1)):(i[a]=Io(u),i[a].c(),H(i[a],1),i[a].m(e,null))}for(Ae(),a=s.length;a<i.length;a+=1)r(a);Pe()}},i(o){if(!n){for(let l=0;l<s.length;l+=1)H(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)V(i[l]);n=!1},d(o){o&&q(e),Ut(i,o),t[2](null)}}}function G_(t,e,n){let s;function i(o){s=o,n(0,s)}function r(o){$[o?"unshift":"push"](()=>{s=o,n(0,s)})}return[s,i,r]}class Y_ extends Te{constructor(e){super(),Ie(this,e,G_,V_,de,{})}}function x_(t){let e,n,s,i,r,o,l,a;return{c(){e=g("div"),n=g("div"),s=g("button"),s.textContent="Clear armor",i=W(),r=g("div"),o=g("button"),o.textContent="Clear gear",m(s,"class","svelte-e94uvj"),m(n,"class","svelte-e94uvj"),m(o,"class","svelte-e94uvj"),m(r,"class","svelte-e94uvj"),m(e,"class","mainFeatures svelte-e94uvj"),m(e,"id","box")},m(u,d){U(u,e,d),_(e,n),_(n,s),_(e,i),_(e,r),_(r,o),l||(a=[T(s,"click",t[3]),T(o,"click",t[4])],l=!0)},p:J,i:J,o:J,d(u){u&&q(e),l=!1,ge(a)}}}function K_(t,e,n){let s,i,r,o,l;Q(t,wt,f=>n(5,s=f)),Q(t,rs,f=>n(6,i=f)),Q(t,ft,f=>n(7,r=f)),Q(t,Tn,f=>n(8,o=f)),Q(t,In,f=>n(0,l=f));function a(){for(let f in r)r[f].name&&o[f][r[f].name].querySelector("button").click()}function u(){for(let f in s)s[f].name&&i[f][s[f].name].querySelector("button").click()}return[l,a,u,()=>{l||a()},()=>{l||u()}]}class Q_ extends Te{constructor(e){super(),Ie(this,e,K_,x_,de,{})}}function X_(t){let e,n,s,i,r,o,l;function a(d){t[2](d)}let u={slotName:"builds",index:null,weaponExpand:null};return t[0]!==void 0&&(u.slotOpen=t[0]),s=new dr({props:u}),$.push(()=>ve(s,"slotOpen",a)),{c(){e=g("button"),e.innerHTML=`Load armor set
    <iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="180deg" class="svelte-l9dczq"></iconify-icon>`,n=W(),pe(s.$$.fragment),m(e,"class","svelte-l9dczq"),Z(e,"ddOpen",t[0])},m(d,c){U(d,e,c),U(d,n,c),he(s,d,c),r=!0,o||(l=T(e,"click",t[1]),o=!0)},p(d,[c]){(!r||c&1)&&Z(e,"ddOpen",d[0]);const f={};!i&&c&1&&(i=!0,f.slotOpen=d[0],ye(()=>i=!1)),s.$set(f)},i(d){r||(H(s.$$.fragment,d),r=!0)},o(d){V(s.$$.fragment,d),r=!1},d(d){d&&(q(e),q(n)),_e(s,d),o=!1,l()}}}function J_(t,e,n){let{ddOpen:s=!1}=e;const i=()=>n(0,s=!s);function r(o){s=o,n(0,s)}return t.$$set=o=>{"ddOpen"in o&&n(0,s=o.ddOpen)},[s,i,r]}class Z_ extends Te{constructor(e){super(),Ie(this,e,J_,X_,de,{ddOpen:0})}}function $_(t){let e;return{c(){e=g("span"),e.textContent="Create some builds to get started!",m(e,"class","tooltip svelte-1c244fb"),m(e,"id","top"),De(e,"left","70.5%")},m(n,s){U(n,e,s)},p:J,d(n){n&&q(e)}}}function ep(t){let e;return{c(){e=g("span"),e.textContent="Select some gear or armor to get started!",m(e,"class","tooltip svelte-1c244fb"),m(e,"id","top"),De(e,"left",t[3]?"38%":"")},m(n,s){U(n,e,s)},p(n,s){s&8&&De(e,"left",n[3]?"38%":"")},d(n){n&&q(e)}}}function tp(t){let e,n,s,i,r,o,l,a,u,d,c,f,h,p,b,w,y,I,v,k,E,A,O,j,se,R,P,N;function K(D,G){if(!D[4])return ep;if(!D[3])return $_}let x=K(t),C=x&&x(t);function ee(D){t[18](D)}let le={};return t[1]!==void 0&&(le.ddOpen=t[1]),j=new Z_({props:le}),$.push(()=>ve(j,"ddOpen",ee)),{c(){e=g("div"),n=g("div"),s=g("div"),i=g("button"),r=ne("Export new build"),l=W(),a=g("div"),u=g("button"),d=ne("Save to build"),f=W(),h=g("div"),p=g("button"),b=ne("Delete build"),y=W(),C&&C.c(),I=W(),v=g("div"),k=g("div"),E=g("button"),E.textContent="Load build",A=W(),O=g("div"),pe(j.$$.fragment),i.disabled=o=!t[4],m(i,"class","svelte-1c244fb"),m(s,"class","buttonCont svelte-1c244fb"),u.disabled=c=!t[4]||!t[3],m(u,"class","svelte-1c244fb"),m(a,"class","buttonCont svelte-1c244fb"),m(a,"id","middle"),p.disabled=w=!t[3],m(p,"class","svelte-1c244fb"),m(h,"class","buttonCont svelte-1c244fb"),m(n,"id","modify"),m(n,"class","svelte-1c244fb"),Z(n,"no-tooltip",t[2]),m(E,"class","svelte-1c244fb"),m(k,"class","buttonCont svelte-1c244fb"),m(O,"class","buttonCont svelte-1c244fb"),m(v,"id","load"),m(v,"class","svelte-1c244fb"),m(e,"class","mainFeatures svelte-1c244fb"),m(e,"id","build")},m(D,G){U(D,e,G),_(e,n),_(n,s),_(s,i),_(i,r),_(n,l),_(n,a),_(a,u),_(u,d),_(n,f),_(n,h),_(h,p),_(p,b),_(n,y),C&&C.m(n,null),_(e,I),_(e,v),_(v,k),_(k,E),_(v,A),_(v,O),he(j,O,null),t[19](O),R=!0,P||(N=[T(window,"mousedown",t[8]),T(window,"keydown",t[9]),T(i,"click",t[10]),T(i,"mouseenter",t[11]),T(i,"mouseleave",t[12]),T(u,"click",t[13]),T(p,"click",t[14]),T(p,"mouseenter",t[15]),T(p,"mouseleave",t[16]),T(E,"click",t[17])],P=!0)},p(D,[G]){(!R||G&16&&o!==(o=!D[4]))&&(i.disabled=o),(!R||G&24&&c!==(c=!D[4]||!D[3]))&&(u.disabled=c),(!R||G&8&&w!==(w=!D[3]))&&(p.disabled=w),x===(x=K(D))&&C?C.p(D,G):(C&&C.d(1),C=x&&x(D),C&&(C.c(),C.m(n,null))),(!R||G&4)&&Z(n,"no-tooltip",D[2]);const fe={};!se&&G&2&&(se=!0,fe.ddOpen=D[1],ye(()=>se=!1)),j.$set(fe)},i(D){R||(H(j.$$.fragment,D),R=!0)},o(D){V(j.$$.fragment,D),R=!1},d(D){D&&q(e),C&&C.d(),_e(j),t[19](null),P=!1,ge(N)}}}function np(t,e,n){let s,i,r,o,l;Q(t,tt,O=>n(7,s=O)),Q(t,Ft,O=>n(3,i=O)),Q(t,Qo,O=>n(4,r=O)),Q(t,In,O=>n(5,o=O)),Q(t,te,O=>n(6,l=O));let a,u=!1,d=!1;const c=O=>{a.contains(O.target)||n(1,u=!1)},f=O=>{O.key=="Escape"&&n(1,u=!1)},h=()=>{r&&!o&&Y(te,l.export.ongoing=!0,l)},p=()=>n(2,d=!0),b=()=>n(2,d=!1),w=()=>{r&&i&&!o&&Y(te,l.save.ongoing=!0,l)},y=()=>{i&&!o&&Y(te,l.delete.ongoing=!0,l)},I=()=>n(2,d=!0),v=()=>n(2,d=!1),k=()=>{o||Y(te,l.load.ongoing=!0,l)};function E(O){u=O,n(1,u)}function A(O){$[O?"unshift":"push"](()=>{a=O,n(0,a)})}return t.$$.update=()=>{t.$$.dirty&128&&Y(Ft,i=Object.keys(s).length>0,i)},[a,u,d,i,r,o,l,s,c,f,h,p,b,w,y,I,v,k,E,A]}class sp extends Te{constructor(e){super(),Ie(this,e,np,tp,de,{})}}function To(t){let e;return{c(){e=g("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(n,s){U(n,e,s)},d(n){n&&q(e)}}}function ip(t){let e,n,s,i,r,o,l,a=25-t[3].length+"",u,d,c,f,h,p,b,w,y,I,v,k=275-t[4].length+"",E,A,O,j,se,R,P,N,K,x,C,ee,le,D,G,fe,L=(t[3]||t[4])&&To();return{c(){e=g("div"),n=g("div"),s=ne(`Name:\r
        `),i=g("input"),o=W(),l=g("span"),u=ne(a),d=W(),c=g("div"),f=g("div"),h=g("span"),h.textContent="Description / Notes:",p=W(),L&&L.c(),b=W(),w=g("textarea"),I=W(),v=g("span"),E=ne(k),A=W(),O=g("div"),j=g("div"),se=g("button"),R=ne("CANCEL"),N=W(),K=g("div"),x=g("button"),C=ne("EXPORT"),m(i,"class","buildNameInput"),m(i,"id","firstFocusable"),i.disabled=r=t[5].export.status==0,m(i,"type","text"),m(i,"placeholder",t[6]),m(i,"maxlength","25"),m(l,"class","charCounter svelte-1vypdkl"),m(l,"id","buildName"),m(n,"class","buildNameCont svelte-1vypdkl"),m(w,"class","buildDescInput"),w.disabled=y=t[5].export.status==0,m(w,"placeholder","[Empty]"),m(w,"maxlength","275"),m(w,"autocomplete","off"),m(v,"class","charCounter"),m(v,"id","buildDesc"),m(c,"class","buildDescCont"),se.disabled=P=t[5].export.status==0,m(x,"id","lastFocusable"),x.disabled=ee=t[5].export.status==0,m(O,"class","promptOptions"),m(e,"class","buildExporter svelte-1vypdkl")},m(S,B){U(S,e,B),_(e,n),_(n,s),_(n,i),t[8](i),st(i,t[3]),_(n,o),_(n,l),_(l,u),_(e,d),_(e,c),_(c,f),_(f,h),_(f,p),L&&L.m(f,null),_(c,b),_(c,w),st(w,t[4]),t[13](w),_(c,I),_(c,v),_(v,E),_(e,A),_(e,O),_(O,j),_(j,se),_(se,R),t[16](se),_(O,N),_(O,K),_(K,x),_(x,C),D=!0,G||(fe=[T(i,"input",t[9]),T(i,"input",t[10]),T(i,"keydown",t[11]),T(w,"input",t[12]),T(w,"input",t[14]),T(w,"keydown",t[15]),T(se,"click",t[17]),T(x,"click",t[18]),T(x,"keydown",_n),T(e,"introstart",t[19])],G=!0)},p(S,[B]){(!D||B&32&&r!==(r=S[5].export.status==0))&&(i.disabled=r),B&8&&i.value!==S[3]&&st(i,S[3]),(!D||B&8)&&a!==(a=25-S[3].length+"")&&ke(u,a),S[3]||S[4]?L||(L=To(),L.c(),L.m(f,null)):L&&(L.d(1),L=null),(!D||B&32&&y!==(y=S[5].export.status==0))&&(w.disabled=y),B&16&&st(w,S[4]),(!D||B&16)&&k!==(k=275-S[4].length+"")&&ke(E,k),(!D||B&32&&P!==(P=S[5].export.status==0))&&(se.disabled=P),(!D||B&32&&ee!==(ee=S[5].export.status==0))&&(x.disabled=ee)},i(S){D||(S&&be(()=>{D&&(le||(le=Re(e,lt,{duration:250},!0)),le.run(1))}),D=!0)},o(S){S&&(le||(le=Re(e,lt,{duration:250},!1)),le.run(0)),D=!1},d(S){S&&q(e),t[8](null),L&&L.d(),t[13](null),t[16](null),S&&le&&le.end(),G=!1,ge(fe)}}}function rp(t,e,n){let s,i,r,o,l,a;Q(t,te,C=>n(5,s=C)),Q(t,Ke,C=>n(20,i=C)),Q(t,Ft,C=>n(21,r=C)),Q(t,wt,C=>n(22,o=C)),Q(t,ft,C=>n(23,l=C)),Q(t,tt,C=>n(24,a=C));let u=Object.keys(a).length||0,d=(u+1)%10,c=d==1?"st":d==2?"nd":d==3?"rd":"th",f,h,p,b="",w="",y=`My ${u+1+c} build`;function I(){if(Y(te,s.export.status=0,s),b.endsWith(" ")&&n(3,b=b.replace(/  +/g," ").replace(/ $/,"")),w.endsWith(" ")&&n(4,w=w.replace(/  +/g," ").replace(/ $/,"")),Object.keys(a).includes(b)){Y(te,s.export.status=-1,s),Y(te,s.message="duplicate_name",s);return}let C=qh(_t(ln(an),"builds")).key,ee=Wa(l,o);ee.name=b||y,ee.desc=w||"[Empty]",Fs(_t(ln(an),`builds/${C}`),ee).then(()=>{Y(te,s.export.status=1,s),Y(Ft,r=!0,r),tt.update(le=>({...le,[ee.name]:{id:C,desc:ee.desc}})),Y(Ke,i=ee,i),Y(Ke,i.id=C,i),navigator.clipboard.writeText(`${location.origin+location.pathname}?id=${C}`)}).catch(()=>{Y(te,s.export.status=-1,s),Y(te,s.message="firebase_fail",s)})}function v(C){$[C?"unshift":"push"](()=>{f=C,n(0,f)})}function k(){b=this.value,n(3,b)}const E=C=>{n(3,b=Es(C.target.value,25))},A=C=>{s.export.status==0&&C.preventDefault(),Gt(C),wi(f,C.target.value,25)};function O(){w=this.value,n(4,w)}function j(C){$[C?"unshift":"push"](()=>{h=C,n(1,h)})}const se=C=>{n(4,w=Es(C.target.value,275))},R=C=>{s.export.status==0&&C.preventDefault(),wi(h,C.target.value,275)};function P(C){$[C?"unshift":"push"](()=>{p=C,n(2,p)})}return[f,h,p,b,w,s,y,I,v,k,E,A,O,j,se,R,P,()=>{s.export.status!=0&&Y(te,s.export.ongoing=!1,s)},()=>{s.export.status!=0&&I()},()=>p.focus()]}class op extends Te{constructor(e){super(),Ie(this,e,rp,ip,de,{})}}function lp(t){let e,n,s,i,r=t[2]?"Copied!":"Copy link",o,l,a;return{c(){e=g("button"),n=g("b"),n.textContent="Build link",s=W(),i=g("span"),o=ne(r),m(i,"class","tooltip svelte-zqs0fu"),m(i,"id","top"),m(e,"class","copyButton svelte-zqs0fu"),m(e,"id","firstFocusable")},m(u,d){U(u,e,d),_(e,n),_(e,s),_(e,i),_(i,o),l||(a=[T(e,"click",t[7]),T(e,"keydown",Gt)],l=!0)},p(u,d){d&4&&r!==(r=u[2]?"Copied!":"Copy link")&&ke(o,r)},d(u){u&&q(e),l=!1,ge(a)}}}function ap(t){let e,n,s,i,r,o,l=t[2]?"Copied!":"Copy ID",a,u,d,c;return{c(){e=g("button"),n=g("b"),n.textContent="ID:",s=W(),i=ne(t[3]),r=W(),o=g("span"),a=ne(l),m(o,"class","tooltip svelte-zqs0fu"),m(o,"id","top"),m(e,"class","copyButton svelte-zqs0fu"),m(e,"id",u=t[1]!="save"?"firstFocusable":"")},m(f,h){U(f,e,h),_(e,n),_(e,s),_(e,i),_(e,r),_(e,o),_(o,a),d||(c=[T(e,"click",t[5]),T(e,"keydown",t[6])],d=!0)},p(f,h){h&4&&l!==(l=f[2]?"Copied!":"Copy ID")&&ke(a,l),h&2&&u!==(u=f[1]!="save"?"firstFocusable":"")&&m(e,"id",u)},d(f){f&&q(e),d=!1,ge(c)}}}function up(t){let e;function n(r,o){if(r[0]=="id")return ap;if(r[0]=="link")return lp}let s=n(t),i=s&&s(t);return{c(){i&&i.c(),e=Lt()},m(r,o){i&&i.m(r,o),U(r,e,o)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i&&i.d(1),i=s&&s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:J,o:J,d(r){r&&q(e),i&&i.d(r)}}}function cp(t,e,n){let s;Q(t,Ke,f=>n(8,s=f));let{type:i,source:r}=e,o=s.id||null,l=!1;function a(f){l||(navigator.clipboard.writeText(f),n(2,l=!0),setTimeout(()=>{n(2,l=!1)},1e3))}const u=()=>a(o),d=()=>{r!="save"&&Gt()},c=()=>a(`${location.host+location.pathname}?id=${o}`);return t.$$set=f=>{"type"in f&&n(0,i=f.type),"source"in f&&n(1,r=f.source)},[i,r,l,o,a,u,d,c]}class zn extends Te{constructor(e){super(),Ie(this,e,cp,up,de,{type:0,source:1})}}function dp(t){let e,n,s,i;return e=new zn({props:{type:"link",source:"share"}}),s=new zn({props:{type:"id",source:"share"}}),{c(){pe(e.$$.fragment),n=W(),pe(s.$$.fragment)},m(r,o){he(e,r,o),U(r,n,o),he(s,r,o),i=!0},p:J,i(r){i||(H(e.$$.fragment,r),H(s.$$.fragment,r),i=!0)},o(r){V(e.$$.fragment,r),V(s.$$.fragment,r),i=!1},d(r){r&&q(n),_e(e,r),_e(s,r)}}}function fp(t){let e;return{c(){e=g("span"),e.textContent="Your build has been erased from your local saves and the database."},m(n,s){U(n,e,s)},p:J,i:J,o:J,d(n){n&&q(e)}}}function hp(t){let e;function n(r,o){if(r[2].message=="not_found")return bp;if(r[2].message=="invalid_id")return gp}let s=n(t),i=s&&s(t);return{c(){i&&i.c(),e=Lt()},m(r,o){i&&i.m(r,o),U(r,e,o)},p(r,o){s!==(s=n(r))&&(i&&i.d(1),i=s&&s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:J,o:J,d(r){r&&q(e),i&&i.d(r)}}}function _p(t){let e,n,s,i,r,o;return s=new zn({props:{type:"link",source:"save"}}),r=new zn({props:{type:"id",source:"save"}}),{c(){e=g("span"),e.textContent="Your build has been overwritten.",n=W(),pe(s.$$.fragment),i=W(),pe(r.$$.fragment)},m(l,a){U(l,e,a),U(l,n,a),he(s,l,a),U(l,i,a),he(r,l,a),o=!0},p:J,i(l){o||(H(s.$$.fragment,l),H(r.$$.fragment,l),o=!0)},o(l){V(s.$$.fragment,l),V(r.$$.fragment,l),o=!1},d(l){l&&(q(e),q(n),q(i)),_e(s,l),_e(r,l)}}}function pp(t){let e,n,s,i;const r=[vp,yp],o=[];function l(a,u){return a[2].export.status==1?0:a[2].export.status==-1&&a[2].message=="duplicate_name"?1:-1}return~(e=l(t))&&(n=o[e]=r[e](t)),{c(){n&&n.c(),s=Lt()},m(a,u){~e&&o[e].m(a,u),U(a,s,u),i=!0},p(a,u){let d=e;e=l(a),e!==d&&(n&&(Ae(),V(o[d],1,1,()=>{o[d]=null}),Pe()),~e?(n=o[e],n||(n=o[e]=r[e](a),n.c()),H(n,1),n.m(s.parentNode,s)):n=null)},i(a){i||(H(n),i=!0)},o(a){V(n),i=!1},d(a){a&&q(s),~e&&o[e].d(a)}}}function mp(t){let e,n,s=t[2].export.status?"exporting":t[2].save.status?"saving":t[2].load.status?"loading":"deleting",i,r,o,l,a,u,d,c;return{c(){e=g("span"),n=ne("A problem occurred while "),i=ne(s),r=ne(` your build.\r
            `),o=g("br"),l=ne(`\r
            If needed`),a=g("b"),a.textContent=",",u=ne(" you may contact "),d=g("hl"),d.textContent="xt.ss",c=ne(` on Discord for more\r
            details.`)},m(f,h){U(f,e,h),_(e,n),_(e,i),_(e,r),_(e,o),_(e,l),_(e,a),_(e,u),_(e,d),_(e,c)},p(f,h){h&4&&s!==(s=f[2].export.status?"exporting":f[2].save.status?"saving":f[2].load.status?"loading":"deleting")&&ke(i,s)},i:J,o:J,d(f){f&&q(e)}}}function gp(t){let e;return{c(){e=g("span"),e.textContent="The ID you have entered is invalid. Please check it again."},m(n,s){U(n,e,s)},d(n){n&&q(e)}}}function bp(t){let e;return{c(){e=g("span"),e.innerHTML=`Your build could not be found within the database.
                <br/>
                If needed<b>,</b> you may contact <hl>xt.ss</hl> on Discord for more
                details.`},m(n,s){U(n,e,s)},d(n){n&&q(e)}}}function yp(t){let e;return{c(){e=g("span"),e.innerHTML=`Another build of yours with the same name already exists.
                <br/>
                Please use a different one.`},m(n,s){U(n,e,s)},i:J,o:J,d(n){n&&q(e)}}}function vp(t){let e,n,s,i;return s=new zn({props:{type:"id",source:"export"}}),{c(){e=g("span"),e.textContent="Your build's link has been copied to your clipboard.",n=W(),pe(s.$$.fragment)},m(r,o){U(r,e,o),U(r,n,o),he(s,r,o),i=!0},i(r){i||(H(s.$$.fragment,r),i=!0)},o(r){V(s.$$.fragment,r),i=!1},d(r){r&&(q(e),q(n)),_e(s,r)}}}function wp(t){let e,n,s,i,r,o,l,a,u,d,c,f,h,p,b;const w=[mp,pp,_p,hp,fp,dp],y=[];function I(v,k){return v[3]==-1&&v[2].message=="firebase_fail"?0:v[2].export.status?1:v[2].save.status==1?2:v[2].load.status==-1?3:v[2].delete.status==1?4:v[2].share.ongoing?5:-1}return~(i=I(t))&&(r=y[i]=w[i](t)),{c(){e=g("div"),n=g("span"),n.textContent=`${t[4]}`,s=W(),r&&r.c(),o=W(),l=g("div"),a=g("div"),u=g("button"),d=ne("OK"),m(n,"id","messageTitle"),m(n,"class","svelte-nfbx2w"),m(u,"id",(t[3]==-1?"firstFocusable ":"")+"lastFocusable"),m(l,"class","promptOptions svelte-nfbx2w"),m(e,"class","promptMessage svelte-nfbx2w")},m(v,k){U(v,e,k),_(e,n),_(e,s),~i&&y[i].m(e,null),_(e,o),_(e,l),_(l,a),_(a,u),_(u,d),t[5](u),h=!0,p||(b=[T(u,"click",t[6]),T(u,"keydown",t[7]),T(e,"introstart",t[8])],p=!0)},p(v,[k]){let E=i;i=I(v),i===E?~i&&y[i].p(v,k):(r&&(Ae(),V(y[E],1,1,()=>{y[E]=null}),Pe()),~i?(r=y[i],r?r.p(v,k):(r=y[i]=w[i](v),r.c()),H(r,1),r.m(e,o)):r=null)},i(v){h||(H(r),v&&be(()=>{h&&(f&&f.end(1),c=xo(e,lt,{duration:200,delay:75}),c.start())}),h=!0)},o(v){V(r),c&&c.invalidate(),v&&(f=Ko(e,lt,{duration:200})),h=!1},d(v){v&&q(e),~i&&y[i].d(),t[5](null),v&&f&&f.end(),p=!1,ge(b)}}}function Cp(t,e,n){let s;Q(t,te,f=>n(2,s=f));let{loadID:i}=e,r,o=s.export.status||s.save.status||s.load.status||s.delete.status,l=s.share.ongoing?"Share this build":`${s.export.status?"Export":s.save.status?"Save":s.load.status?"Load":"Delete"} ${o==1?"Success":"Failure"}!`;function a(f){$[f?"unshift":"push"](()=>{r=f,n(1,r)})}const u=()=>{n(0,i=null),Y(te,s.export.status=null,s),Y(te,s.export.ongoing=!1,s),Y(te,s.save.status=null,s),Y(te,s.save.ongoing=!1,s),Y(te,s.load.status=null,s),Y(te,s.load.ongoing=!1,s),Y(te,s.delete.status=null,s),Y(te,s.delete.ongoing=!1,s),Y(te,s.share.ongoing=!1,s),Y(te,s.message="",s)},d=f=>{o==-1&&Gt(f),_n(f)},c=()=>r.focus();return t.$$set=f=>{"loadID"in f&&n(0,i=f.loadID)},[i,r,s,o,l,a,u,d,c]}class Ep extends Te{constructor(e){super(),Ie(this,e,Cp,wp,de,{loadID:0})}}function Sp(t){let e,n,s,i,r,o;return{c(){e=g("li"),n=g("button"),s=g("span"),i=ne(t[0]),m(s,"class","svelte-1opo0ke"),m(e,"class","svelte-1opo0ke"),Z(e,"selectedItem",t[2])},m(l,a){U(l,e,a),_(e,n),_(n,s),_(s,i),t[7](e),r||(o=T(n,"click",t[3]),r=!0)},p(l,[a]){a&1&&ke(i,l[0]),a&4&&Z(e,"selectedItem",l[2])},i:J,o:J,d(l){l&&q(e),t[7](null),r=!1,o()}}}function kp(t,e,n){let{chosenBuild:s,buildData:i,buildName:r,ddOpen:o}=e;const l=jt();let a,u=s[0]==r;function d(){if(o){if(a.classList.contains("selectedItem")||n(2,u=!1),u)return;l("buildSelect",a),n(2,u=!0),n(5,o=!1),n(4,s=[r,i])}}function c(f){$[f?"unshift":"push"](()=>{a=f,n(1,a)})}return t.$$set=f=>{"chosenBuild"in f&&n(4,s=f.chosenBuild),"buildData"in f&&n(6,i=f.buildData),"buildName"in f&&n(0,r=f.buildName),"ddOpen"in f&&n(5,o=f.ddOpen)},[r,a,u,d,s,o,i,c]}class Ip extends Te{constructor(e){super(),Ie(this,e,kp,Sp,de,{chosenBuild:4,buildData:6,buildName:0,ddOpen:5})}}function No(t,e,n){const s=t.slice();return s[25]=e[n][0],s[26]=e[n][1],s}function Do(t){let e,n,s,i;function r(a){t[13](a)}function o(a){t[14](a)}let l={buildData:t[26],buildName:t[25]};return t[0]!==void 0&&(l.chosenBuild=t[0]),t[1]!==void 0&&(l.ddOpen=t[1]),e=new Ip({props:l}),$.push(()=>ve(e,"chosenBuild",r)),$.push(()=>ve(e,"ddOpen",o)),e.$on("buildSelect",t[11]),{c(){pe(e.$$.fragment)},m(a,u){he(e,a,u),i=!0},p(a,u){const d={};u&16&&(d.buildData=a[26]),u&16&&(d.buildName=a[25]),!n&&u&1&&(n=!0,d.chosenBuild=a[0],ye(()=>n=!1)),!s&&u&2&&(s=!0,d.ddOpen=a[1],ye(()=>s=!1)),e.$set(d)},i(a){i||(H(e.$$.fragment,a),i=!0)},o(a){V(e.$$.fragment,a),i=!1},d(a){_e(e,a)}}}function Tp(t){let e,n,s,i,r,o,l,a=Ye(Object.entries(t[4])),u=[];for(let c=0;c<a.length;c+=1)u[c]=Do(No(t,a,c));const d=c=>V(u[c],1,1,()=>{u[c]=null});return{c(){e=g("div"),n=g("input"),s=W(),i=g("ul");for(let c=0;c<u.length;c+=1)u[c].c();m(n,"type","text"),m(n,"class","searchBarInput svelte-p20blu"),m(n,"placeholder","Search..."),m(i,"class","svelte-p20blu"),Z(i,"no-scrollbar",t[8].length<=4),m(e,"class","dropdown svelte-p20blu"),Z(e,"ddOpen",t[1])},m(c,f){U(c,e,f),_(e,n),t[12](n),_(e,s),_(e,i);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(i,null);t[15](i),t[16](e),r=!0,o||(l=[T(n,"input",t[10]),T(n,"keydown",t[9]),T(e,"transitionend",t[17]),T(e,"transitioncancel",t[18])],o=!0)},p(c,[f]){if(f&2067){a=Ye(Object.entries(c[4]));let h;for(h=0;h<a.length;h+=1){const p=No(c,a,h);u[h]?(u[h].p(p,f),H(u[h],1)):(u[h]=Do(p),u[h].c(),H(u[h],1),u[h].m(i,null))}for(Ae(),h=a.length;h<u.length;h+=1)d(h);Pe()}(!r||f&256)&&Z(i,"no-scrollbar",c[8].length<=4),(!r||f&2)&&Z(e,"ddOpen",c[1])},i(c){if(!r){for(let f=0;f<a.length;f+=1)H(u[f]);r=!0}},o(c){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)V(u[f]);r=!1},d(c){c&&q(e),t[12](null),Ut(u,c),t[15](null),t[16](null),o=!1,ge(l)}}}function Np(t,e,n){let s;Q(t,tt,N=>n(4,s=N));let{chosenBuild:i,ddOpen:r=!1,dropdown:o}=e;const l=jt();let a,u,d,c,f={},h=!1,p=[];function b(N){!N.shiftKey&&N.key=="Tab"&&(N.preventDefault(),setTimeout(()=>a.focus()))}function w(){u&&u.removeEventListener("keydown",b),v(),u&&u.addEventListener("keydown",b)}function y(N){N.shiftKey&&N.key=="Tab"&&(N.preventDefault(),setTimeout(()=>(u.querySelector("button")||u).focus()))}function I(){Fa(a.value,f),w()}function v(){u&&u.classList.remove("lastElement"),n(8,p=d.querySelectorAll("li:not(.hidden)")),u=p[p.length-1],u?u.classList.add("lastElement"):u=a}function k(N){l("buildSelect"),n(6,c=N.detail);let K=d.querySelector(".selectedItem");K&&K!=N.detail&&K.classList.remove("selectedItem"),n(7,h=!0)}function E(N){$[N?"unshift":"push"](()=>{a=N,n(5,a)})}function A(N){i=N,n(0,i)}function O(N){r=N,n(1,r)}function j(N){$[N?"unshift":"push"](()=>{d=N,n(3,d)})}function se(N){$[N?"unshift":"push"](()=>{o=N,n(2,o)})}const R=N=>{N.propertyName=="visibility"&&(!r&&c&&d.scrollTo(0,c.offsetTop),h&&(n(7,h=!1),n(5,a.value="",a),I()),Cs(a,r))},P=N=>{N.propertyName=="visibility"&&(n(7,h=!1),Cs(a,r))};return t.$$set=N=>{"chosenBuild"in N&&n(0,i=N.chosenBuild),"ddOpen"in N&&n(1,r=N.ddOpen),"dropdown"in N&&n(2,o=N.dropdown)},t.$$.update=()=>{if(t.$$.dirty&24&&d){n(8,p=d.querySelectorAll("li:not(.hidden)"));for(let N=0;N<d.childElementCount;N++)f[Object.keys(s)[N]]=d.children[N];v(),w()}},[i,r,o,d,s,a,c,h,p,y,I,k,E,A,O,j,se,R,P]}class fr extends Te{constructor(e){super(),Ie(this,e,Np,Tp,de,{chosenBuild:0,ddOpen:1,dropdown:2})}}function Oo(t){let e,n=(t[6]>t[5]*.8?t[11].slice(0,20)+"<b>...</b>":t[11])+"",s;return{c(){e=g("span"),be(()=>t[15].call(e))},m(i,r){U(i,e,r),e.innerHTML=n,s=rt(e,t[15].bind(e))},p(i,r){r[0]&2144&&n!==(n=(i[6]>i[5]*.8?i[11].slice(0,20)+"<b>...</b>":i[11])+"")&&(e.innerHTML=n)},d(i){i&&q(e),s()}}}function Ro(t){let e;return{c(){e=g("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(n,s){U(n,e,s)},d(n){n&&q(e)}}}function Dp(t){let e,n,s,i,r,o=t[11],l,a,u,d,c,f,h,p,b,w,y,I,v,k,E=275-t[2].length+"",A,O,j,se,R,P,N,K,x,C,ee,le,D,G,fe,L,S,B,X,F,Ne,M=Oo(t),re=t[1]!=null&&t[1]!=t[2]&&Ro();function Xe(oe){t[26](oe)}function nt(oe){t[27](oe)}function Tt(oe){t[28](oe)}let Nt={};return t[0]!==void 0&&(Nt.chosenBuild=t[0]),t[3]!==void 0&&(Nt.ddOpen=t[3]),t[9]!==void 0&&(Nt.dropdown=t[9]),G=new fr({props:Nt}),$.push(()=>ve(G,"chosenBuild",Xe)),$.push(()=>ve(G,"ddOpen",nt)),$.push(()=>ve(G,"dropdown",Tt)),G.$on("buildSelect",t[29]),{c(){e=g("div"),n=g("div"),s=g("span"),s.textContent="Save to:",i=W(),r=g("button"),M.c(),l=W(),a=g("iconify-icon"),c=W(),f=g("div"),h=g("div"),p=g("span"),p.textContent="Description / Notes:",b=W(),re&&re.c(),w=W(),y=g("textarea"),v=W(),k=g("span"),A=ne(E),O=W(),j=g("div"),se=g("div"),R=g("button"),P=ne("CANCEL"),K=W(),x=g("div"),C=g("button"),ee=ne("SAVE"),D=W(),pe(G.$$.fragment),Bt(a,"icon","iconamoon:arrow-down-2-fill"),m(r,"id","firstFocusable"),r.disabled=u=t[12].save.status==0,m(r,"class","promptDDButton svelte-106wt5q"),be(()=>t[17].call(r)),Z(r,"ddOpen",t[3]),m(n,"class","chosenBuildCont"),m(y,"class","buildDescInput"),y.disabled=I=t[12].save.status==0,m(y,"placeholder","[Empty]"),m(y,"maxlength","275"),m(y,"autocomplete","off"),m(k,"class","charCounter"),m(k,"id","buildDesc"),m(f,"class","buildDescCont"),R.disabled=N=t[12].save.status==0,m(C,"id","lastFocusable"),C.disabled=le=t[12].save.status==0,m(j,"class","promptOptions"),m(e,"class","buildSaver")},m(oe,qe){U(oe,e,qe),_(e,n),_(n,s),_(n,i),_(n,r),M.m(r,null),_(r,l),_(r,a),t[16](r),d=rt(r,t[17].bind(r)),_(e,c),_(e,f),_(f,h),_(h,p),_(h,b),re&&re.m(h,null),_(f,w),_(f,y),t[19](y),st(y,t[10]),_(f,v),_(f,k),_(k,A),_(e,O),_(e,j),_(j,se),_(se,R),_(R,P),t[23](R),_(j,K),_(j,x),_(x,C),_(C,ee),_(e,D),he(G,e,null),X=!0,F||(Ne=[T(window,"mousedown",t[14]),T(r,"click",t[18]),T(r,"keydown",Gt),T(y,"input",t[20]),T(y,"input",t[21]),T(y,"keydown",t[22]),T(R,"click",t[24]),T(C,"click",t[25]),T(C,"keydown",_n),T(e,"introstart",t[30]),T(e,"keydown",t[31])],F=!0)},p(oe,qe){qe[0]&2048&&de(o,o=oe[11])?(M.d(1),M=Oo(oe),M.c(),M.m(r,l)):M.p(oe,qe),(!X||qe[0]&4096&&u!==(u=oe[12].save.status==0))&&(r.disabled=u),(!X||qe[0]&8)&&Z(r,"ddOpen",oe[3]),oe[1]!=null&&oe[1]!=oe[2]?re||(re=Ro(),re.c(),re.m(h,null)):re&&(re.d(1),re=null),(!X||qe[0]&4096&&I!==(I=oe[12].save.status==0))&&(y.disabled=I),qe[0]&1024&&st(y,oe[10]),(!X||qe[0]&4)&&E!==(E=275-oe[2].length+"")&&ke(A,E),(!X||qe[0]&4096&&N!==(N=oe[12].save.status==0))&&(R.disabled=N),(!X||qe[0]&4096&&le!==(le=oe[12].save.status==0))&&(C.disabled=le);const Kn={};!fe&&qe[0]&1&&(fe=!0,Kn.chosenBuild=oe[0],ye(()=>fe=!1)),!L&&qe[0]&8&&(L=!0,Kn.ddOpen=oe[3],ye(()=>L=!1)),!S&&qe[0]&512&&(S=!0,Kn.dropdown=oe[9],ye(()=>S=!1)),G.$set(Kn)},i(oe){X||(H(G.$$.fragment,oe),oe&&be(()=>{X&&(B||(B=Re(e,lt,{duration:250},!0)),B.run(1))}),X=!0)},o(oe){V(G.$$.fragment,oe),oe&&(B||(B=Re(e,lt,{duration:250},!1)),B.run(0)),X=!1},d(oe){oe&&q(e),M.d(oe),t[16](null),d(),re&&re.d(),t[19](null),t[23](null),_e(G),oe&&B&&B.end(),F=!1,ge(Ne)}}}function Op(t,e,n){let s,i,r,o,l,a,u,d;Q(t,te,B=>n(12,o=B)),Q(t,Ke,B=>n(32,l=B)),Q(t,tt,B=>n(33,a=B)),Q(t,wt,B=>n(34,u=B)),Q(t,ft,B=>n(35,d=B));let c=!1,f,h,p,b,w,y,I=Object.entries(a)[0],v=null;function k(){Y(te,o.save.status=0,o);let B=Wa(d,u),X=v==null?i:v==""?"[Empty]":v,F=I[1].id;B.name=s,B.desc=X,Fs(_t(ln(an),`builds/${F}`),B).then(()=>{Y(te,o.save.status=1,o);let Ne={...a};Ne[s].desc=X,tt.update(()=>Ne),Y(Ke,l=B,l),Y(Ke,l.id=F,l)}).catch(()=>{Y(te,o.save.status=-1,o),Y(te,o.message="firebase_fail",o)})}const E=B=>{!f.contains(B.target)&&!y.contains(B.target)&&n(3,c=!1)};function A(){p=this.offsetWidth,n(6,p)}function O(B){$[B?"unshift":"push"](()=>{f=B,n(4,f)})}function j(){h=this.offsetWidth,n(5,h)}const se=()=>{o.save.status!=0&&n(3,c=!c)};function R(B){$[B?"unshift":"push"](()=>{b=B,n(7,b)})}function P(){r=this.value,n(10,r),n(1,v),n(2,i),n(0,I)}const N=B=>{n(1,v=Es(B.target.value,275))},K=B=>{o.save.status==0&&B.preventDefault(),wi(b,B.target.value,275)};function x(B){$[B?"unshift":"push"](()=>{w=B,n(8,w)})}const C=()=>{o.save.status!=0&&Y(te,o.save.ongoing=!1,o)},ee=()=>{o.save.status!=0&&k()};function le(B){I=B,n(0,I)}function D(B){c=B,n(3,c)}function G(B){y=B,n(9,y)}const fe=()=>n(1,v=null),L=()=>w.focus(),S=B=>{B.key=="Escape"&&(n(3,c=!1),f.focus())};return t.$$.update=()=>{t.$$.dirty[0]&1&&n(11,s=I[0]),t.$$.dirty[0]&1&&n(2,i=I[1].desc),t.$$.dirty[0]&6&&n(10,r=v??i)},[I,v,i,c,f,h,p,b,w,y,r,s,o,k,E,A,O,j,se,R,P,N,K,x,C,ee,le,D,G,fe,L,S]}class Rp extends Te{constructor(e){super(),Ie(this,e,Op,Dp,de,{},null,[-1,-1])}}function Ap(t){let e,n,s,i,r,o,l,a,u;return{c(){e=g("div"),n=g("span"),n.textContent="ID:",s=W(),i=g("input"),m(i,"class","buildIDInput svelte-1wfx9qu"),i.disabled=r=t[11].load.status==0,m(i,"type","text"),m(i,"placeholder","Example ID: -NDqeA1Scn0EAJcYWN3b"),m(i,"maxlength","25"),m(e,"class","buildIDCont svelte-1wfx9qu")},m(d,c){U(d,e,c),_(e,n),_(e,s),_(e,i),t[21](i),st(i,t[10]),l=!0,a||(u=[T(i,"input",t[22]),T(i,"input",t[23]),T(i,"keydown",t[24])],a=!0)},p(d,c){(!l||c[0]&2048&&r!==(r=d[11].load.status==0))&&(i.disabled=r),c[0]&1024&&i.value!==d[10]&&st(i,d[10])},i(d){l||(d&&be(()=>{l&&(o||(o=Re(e,He,{duration:150},!0)),o.run(1))}),l=!0)},o(d){d&&(o||(o=Re(e,He,{duration:150},!1)),o.run(0)),l=!1},d(d){d&&q(e),t[21](null),d&&o&&o.end(),a=!1,ge(u)}}}function Pp(t){let e,n,s,i,r=t[9],o,l,a,u,d,c,f,h,p=Ao(t);return{c(){e=g("div"),n=g("span"),n.textContent="Load:",s=W(),i=g("button"),p.c(),o=W(),l=g("iconify-icon"),Bt(l,"icon","iconamoon:arrow-down-2-fill"),i.disabled=a=t[11].load.status==0,m(i,"class","promptDDButton svelte-1wfx9qu"),be(()=>t[19].call(i)),Z(i,"ddOpen",t[8]),m(e,"class","chosenBuildCont svelte-1wfx9qu")},m(b,w){U(b,e,w),_(e,n),_(e,s),_(e,i),p.m(i,null),_(i,o),_(i,l),t[18](i),u=rt(i,t[19].bind(i)),c=!0,f||(h=T(i,"click",t[20]),f=!0)},p(b,w){w[0]&512&&de(r,r=b[9])?(p.d(1),p=Ao(b),p.c(),p.m(i,o)):p.p(b,w),(!c||w[0]&2048&&a!==(a=b[11].load.status==0))&&(i.disabled=a),(!c||w[0]&256)&&Z(i,"ddOpen",b[8])},i(b){c||(b&&be(()=>{c&&(d||(d=Re(e,He,{duration:150},!0)),d.run(1))}),c=!0)},o(b){b&&(d||(d=Re(e,He,{duration:150},!1)),d.run(0)),c=!1},d(b){b&&q(e),p.d(b),t[18](null),u(),b&&d&&d.end(),f=!1,h()}}}function Ao(t){let e,n=(t[6]>t[5]*.7?t[9].slice(0,20)+"<b>...</b>":t[9])+"",s;return{c(){e=g("span"),be(()=>t[17].call(e))},m(i,r){U(i,e,r),e.innerHTML=n,s=rt(e,t[17].bind(e))},p(i,r){r[0]&608&&n!==(n=(i[6]>i[5]*.7?i[9].slice(0,20)+"<b>...</b>":i[9])+"")&&(e.innerHTML=n)},d(i){i&&q(e),s()}}}function Po(t){let e,n,s,i,r;function o(d){t[27](d)}function l(d){t[28](d)}function a(d){t[29](d)}let u={};return t[3]!==void 0&&(u.chosenBuild=t[3]),t[8]!==void 0&&(u.ddOpen=t[8]),t[7]!==void 0&&(u.dropdown=t[7]),e=new fr({props:u}),$.push(()=>ve(e,"chosenBuild",o)),$.push(()=>ve(e,"ddOpen",l)),$.push(()=>ve(e,"dropdown",a)),{c(){pe(e.$$.fragment)},m(d,c){he(e,d,c),r=!0},p(d,c){const f={};!n&&c[0]&8&&(n=!0,f.chosenBuild=d[3],ye(()=>n=!1)),!s&&c[0]&256&&(s=!0,f.ddOpen=d[8],ye(()=>s=!1)),!i&&c[0]&128&&(i=!0,f.dropdown=d[7],ye(()=>i=!1)),e.$set(f)},i(d){r||(H(e.$$.fragment,d),r=!0)},o(d){V(e.$$.fragment,d),r=!1},d(d){_e(e,d)}}}function Mp(t){let e,n,s,i,r,o,l,a,u,d,c,f,h,p,b,w,y,I,v,k,E,A,O,j,se,R,P,N,K,x,C,ee,le;const D=[Pp,Ap],G=[];function fe(S,B){return S[2]?0:1}w=fe(t),y=G[w]=D[w](t);let L=t[2]&&Po(t);return{c(){e=g("div"),n=g("span"),n.textContent="Load build via:",s=W(),i=g("div"),r=g("div"),o=g("button"),l=ne("Local saves"),u=W(),d=g("div"),c=g("button"),f=ne("Exported ID"),p=W(),b=g("div"),y.c(),I=W(),v=g("div"),k=g("div"),E=g("button"),A=ne("CANCEL"),j=W(),se=g("div"),R=g("button"),P=ne("LOAD"),K=W(),L&&L.c(),m(n,"class","svelte-1wfx9qu"),m(o,"id","firstFocusable"),o.disabled=a=t[11].load.status==0||!t[12],m(o,"class","svelte-1wfx9qu"),Z(o,"chosen",t[2]),Z(o,"unavailable",!t[12]),m(r,"class","svelte-1wfx9qu"),c.disabled=h=t[11].load.status==0,m(c,"class","svelte-1wfx9qu"),Z(c,"chosen",!t[2]),m(d,"class","svelte-1wfx9qu"),m(i,"class","loadMethodRadio svelte-1wfx9qu"),m(b,"class","loadMethodCont svelte-1wfx9qu"),E.disabled=O=t[11].load.status==0,m(R,"id","lastFocusable"),R.disabled=N=t[11].load.status==0,m(v,"class","promptOptions svelte-1wfx9qu"),m(e,"class","buildLoader svelte-1wfx9qu")},m(S,B){U(S,e,B),_(e,n),_(e,s),_(e,i),_(i,r),_(r,o),_(o,l),_(i,u),_(i,d),_(d,c),_(c,f),_(e,p),_(e,b),G[w].m(b,null),_(e,I),_(e,v),_(v,k),_(k,E),_(E,A),t[25](E),_(v,j),_(v,se),_(se,R),_(R,P),_(e,K),L&&L.m(e,null),C=!0,ee||(le=[T(window,"mousedown",t[14]),T(o,"click",t[15]),T(o,"keydown",Gt),T(c,"click",t[16]),T(E,"click",t[26]),T(R,"keydown",_n),T(R,"click",t[13]),T(e,"introstart",t[30]),T(e,"keydown",t[31])],ee=!0)},p(S,B){(!C||B[0]&6144&&a!==(a=S[11].load.status==0||!S[12]))&&(o.disabled=a),(!C||B[0]&4)&&Z(o,"chosen",S[2]),(!C||B[0]&4096)&&Z(o,"unavailable",!S[12]),(!C||B[0]&2048&&h!==(h=S[11].load.status==0))&&(c.disabled=h),(!C||B[0]&4)&&Z(c,"chosen",!S[2]);let X=w;w=fe(S),w===X?G[w].p(S,B):(Ae(),V(G[X],1,1,()=>{G[X]=null}),Pe(),y=G[w],y?y.p(S,B):(y=G[w]=D[w](S),y.c()),H(y,1),y.m(b,null)),(!C||B[0]&2048&&O!==(O=S[11].load.status==0))&&(E.disabled=O),(!C||B[0]&2048&&N!==(N=S[11].load.status==0))&&(R.disabled=N),S[2]?L?(L.p(S,B),B[0]&4&&H(L,1)):(L=Po(S),L.c(),H(L,1),L.m(e,null)):L&&(Ae(),V(L,1,1,()=>{L=null}),Pe())},i(S){C||(H(y),H(L),S&&be(()=>{C&&(x||(x=Re(e,lt,{duration:250},!0)),x.run(1))}),C=!0)},o(S){V(y),V(L),S&&(x||(x=Re(e,lt,{duration:250},!1)),x.run(0)),C=!1},d(S){S&&q(e),G[w].d(),t[25](null),L&&L.d(),S&&x&&x.end(),ee=!1,ge(le)}}}function Lp(t,e,n){let s,i,r;Q(t,te,L=>n(11,s=L)),Q(t,tt,L=>n(32,i=L)),Q(t,Ft,L=>n(12,r=L));const o=jt();let l,a,u,d,c,f,h=r,p=!1,b=r?Object.entries(i)[0]:null,w,y="";function I(){if(!h&&!y.startsWith("-N")){Y(te,s.load.status=-1,s),Y(te,s.message="invalid_id",s);return}let L=La(ln(an,"builds"),Ma()),S=0;Y(te,s.load.status=0,s),Pa(L).then(B=>{let X=h?b[1].id:y;for(let F in B.val()){if(F==X){o("buildLoad",{build:B.val()[F],id:F});break}else S==Object.keys(B.val()).length-1&&(Y(te,s.load.status=-1,s),Y(te,s.message=h?"not_found":"invalid_id",s));S++}}).catch(()=>{Y(te,s.load.status=-1,s),Y(te,s.message="firebase_fail",s)})}const v=L=>{l&&!l.contains(L.target)&&!f.contains(L.target)&&n(8,p=!1)},k=()=>{s.load.status!=0&&r&&n(2,h=!0)},E=()=>{s.load.status!=0&&n(2,h=!1)};function A(){c=this.offsetWidth,n(6,c)}function O(L){$[L?"unshift":"push"](()=>{l=L,n(0,l)})}function j(){d=this.offsetWidth,n(5,d)}const se=()=>{s.load.status!=0&&n(8,p=!p)};function R(L){$[L?"unshift":"push"](()=>{u=L,n(1,u)})}function P(){y=this.value,n(10,y)}const N=L=>{n(10,y=Es(L.target.value,25))},K=L=>{s.load.status==0&&L.preventDefault()};function x(L){$[L?"unshift":"push"](()=>{a=L,n(4,a)})}const C=()=>{s.load.status!=0&&Y(te,s.load.ongoing=!1,s)};function ee(L){b=L,n(3,b)}function le(L){p=L,n(8,p)}function D(L){f=L,n(7,f)}const G=()=>a.focus(),fe=L=>{L.key=="Escape"&&(n(8,p=!1),l.focus())};return t.$$.update=()=>{t.$$.dirty[0]&8&&n(9,w=b!=null?b[0]:null),t.$$.dirty[0]&7&&setTimeout(h?()=>l.focus():()=>u.focus())},[l,u,h,b,a,d,c,f,p,w,y,s,r,I,v,k,E,A,O,j,se,R,P,N,K,x,C,ee,le,D,G,fe]}class Bp extends Te{constructor(e){super(),Ie(this,e,Lp,Mp,de,{},null,[-1,-1])}}function Mo(t){let e,n=(t[3]>t[4]*.8?t[8].slice(0,20)+"<b>...</b>":t[8])+"",s;return{c(){e=g("span"),be(()=>t[12].call(e))},m(i,r){U(i,e,r),e.innerHTML=n,s=rt(e,t[12].bind(e))},p(i,r){r&280&&n!==(n=(i[3]>i[4]*.8?i[8].slice(0,20)+"<b>...</b>":i[8])+"")&&(e.innerHTML=n)},d(i){i&&q(e),s()}}}function Fp(t){let e,n,s,i,r,o=t[8],l,a,u,d,c,f,h,p,b,w,y,I,v,k,E,A,O,j,se,R,P,N,K,x,C,ee,le,D,G=Mo(t);f=new qa({props:{text:"I'm aware that this action is irreversible and want to erase this build from the database."}}),f.$on("toggle",t[16]);function fe(X){t[21](X)}function L(X){t[22](X)}function S(X){t[23](X)}let B={};return t[0]!==void 0&&(B.chosenBuild=t[0]),t[6]!==void 0&&(B.ddOpen=t[6]),t[5]!==void 0&&(B.dropdown=t[5]),P=new fr({props:B}),$.push(()=>ve(P,"chosenBuild",fe)),$.push(()=>ve(P,"ddOpen",L)),$.push(()=>ve(P,"dropdown",S)),{c(){e=g("div"),n=g("div"),s=g("span"),s.textContent="Delete:",i=W(),r=g("button"),G.c(),l=W(),a=g("iconify-icon"),c=W(),pe(f.$$.fragment),h=W(),p=g("div"),b=g("div"),w=g("button"),y=ne("CANCEL"),k=W(),E=g("div"),A=g("button"),O=ne("DELETE"),R=W(),pe(P.$$.fragment),Bt(a,"icon","iconamoon:arrow-down-2-fill"),m(r,"class","promptDDButton svelte-1t9ajmz"),m(r,"id","firstFocusable"),r.disabled=u=t[9].delete.status==0,be(()=>t[14].call(r)),Z(r,"ddOpen",t[6]),m(n,"class","chosenBuildCont"),m(w,"id",I=t[7]?"":"lastFocusable"),w.disabled=v=t[9].delete.status==0,A.disabled=j=!t[7]||t[9].delete.status==0,m(A,"id",se=t[7]?"lastFocusable":""),Z(A,"unavailable",!t[7]),m(p,"class","promptOptions svelte-1t9ajmz"),m(e,"class","buildDeleter svelte-1t9ajmz")},m(X,F){U(X,e,F),_(e,n),_(n,s),_(n,i),_(n,r),G.m(r,null),_(r,l),_(r,a),t[13](r),d=rt(r,t[14].bind(r)),_(e,c),he(f,e,null),_(e,h),_(e,p),_(p,b),_(b,w),_(w,y),t[17](w),_(p,k),_(p,E),_(E,A),_(A,O),_(e,R),he(P,e,null),ee=!0,le||(D=[T(window,"mousedown",t[11]),T(r,"click",t[15]),T(r,"keydown",Gt),T(w,"click",t[18]),T(w,"keydown",t[19]),T(A,"click",t[20]),T(A,"keydown",_n),T(e,"introstart",t[24]),T(e,"keydown",t[25])],le=!0)},p(X,[F]){F&256&&de(o,o=X[8])?(G.d(1),G=Mo(X),G.c(),G.m(r,l)):G.p(X,F),(!ee||F&512&&u!==(u=X[9].delete.status==0))&&(r.disabled=u),(!ee||F&64)&&Z(r,"ddOpen",X[6]),(!ee||F&128&&I!==(I=X[7]?"":"lastFocusable"))&&m(w,"id",I),(!ee||F&512&&v!==(v=X[9].delete.status==0))&&(w.disabled=v),(!ee||F&640&&j!==(j=!X[7]||X[9].delete.status==0))&&(A.disabled=j),(!ee||F&128&&se!==(se=X[7]?"lastFocusable":""))&&m(A,"id",se),(!ee||F&128)&&Z(A,"unavailable",!X[7]);const Ne={};!N&&F&1&&(N=!0,Ne.chosenBuild=X[0],ye(()=>N=!1)),!K&&F&64&&(K=!0,Ne.ddOpen=X[6],ye(()=>K=!1)),!x&&F&32&&(x=!0,Ne.dropdown=X[5],ye(()=>x=!1)),P.$set(Ne)},i(X){ee||(H(f.$$.fragment,X),H(P.$$.fragment,X),X&&be(()=>{ee&&(C||(C=Re(e,lt,{duration:250},!0)),C.run(1))}),ee=!0)},o(X){V(f.$$.fragment,X),V(P.$$.fragment,X),X&&(C||(C=Re(e,lt,{duration:250},!1)),C.run(0)),ee=!1},d(X){X&&q(e),G.d(X),t[13](null),d(),_e(f),t[17](null),_e(P),X&&C&&C.end(),le=!1,ge(D)}}}function Wp(t,e,n){let s,i,r,o;Q(t,te,C=>n(9,i=C)),Q(t,tt,C=>n(26,r=C)),Q(t,Ke,C=>n(27,o=C));let l,a,u,d,c,f=!1,h=Object.entries(r)[0],p=!1;function b(){Y(te,i.delete.status=0,i);let C=h[1].id;Fs(_t(ln(an),`builds/${C}`),null).then(()=>{Y(te,i.delete.status=1,i),C==o.id&&Y(Ke,o=null,o);let ee={...r};delete ee[s],tt.update(()=>ee)}).catch(()=>{Y(te,i.delete.status=-1,i),Y(te,i.message="firebase_fail",i)})}const w=C=>{!a.contains(C.target)&&!c.contains(C.target)&&n(6,f=!1)};function y(){u=this.offsetWidth,n(3,u)}function I(C){$[C?"unshift":"push"](()=>{a=C,n(2,a)})}function v(){d=this.offsetWidth,n(4,d)}const k=()=>{i.delete.status!=0&&n(6,f=!f)},E=C=>n(7,p=C.detail);function A(C){$[C?"unshift":"push"](()=>{l=C,n(1,l)})}const O=()=>{i.delete.status!=0&&Y(te,i.delete.ongoing=!1,i)},j=C=>{p||_n(C)},se=()=>{p&&i.delete.status!=0&&b()};function R(C){h=C,n(0,h)}function P(C){f=C,n(6,f)}function N(C){c=C,n(5,c)}const K=()=>l.focus(),x=C=>{C.key=="Escape"&&(n(6,f=!1),a.focus())};return t.$$.update=()=>{t.$$.dirty&1&&n(8,s=h[0])},[h,l,a,u,d,c,f,p,s,i,b,w,y,I,v,k,E,A,O,j,se,R,P,N,K,x]}class qp extends Te{constructor(e){super(),Ie(this,e,Wp,Fp,de,{})}}const{document:$n,window:Sn}=Ga;function Lo(t,e,n){const s=t.slice();return s[5]=e[n],s}function Bo(t){let e;return{c(){e=g("link"),m(e,"rel","preload"),m(e,"as","image"),m(e,"href",t[5])},m(n,s){U(n,e,s)},p:J,d(n){n&&q(e)}}}function Fo(t){let e;return{c(){e=g("style"),e.textContent=`body {\r
                -webkit-backdrop-filter: blur(calc(var(--u) * 0.5));\r
                backdrop-filter: blur(calc(var(--u) * 0.5));\r
            }\r
            body > div:not(.zoomLevel),\r
            main > :not(.promptCont) {\r
                filter: blur(calc(var(--u) * 0.5));\r
                pointer-events: none;\r
            }`},m(n,s){U(n,e,s)},d(n){n&&q(e)}}}function Wo(t){let e,n,s=Math.floor(t[12][t[3]]*100)+"",i,r,o,l;return{c(){e=g("div"),n=ne("Zoom: "),i=ne(s),r=g("b"),r.textContent="%",m(e,"class","zoomLevel svelte-1km5ujz")},m(a,u){U(a,e,u),_(e,n),_(e,i),_(e,r),l=!0},p(a,u){(!l||u[0]&8)&&s!==(s=Math.floor(a[12][a[3]]*100)+"")&&ke(i,s)},i(a){l||(a&&be(()=>{l&&(o||(o=Re(e,He,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=Re(e,He,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&q(e),a&&o&&o.end()}}}function qo(t){let e,n,s=t[11].name+"",i,r,o,l,a,u,d,c,f,h,p=t[11].desc+"",b,w,y,I,v;return{c(){e=g("div"),n=g("span"),i=ne(s),r=W(),o=g("button"),o.innerHTML='<iconify-icon icon="ri:share-fill"></iconify-icon> <span class="tooltip" id="right">Share build</span>',l=W(),a=g("span"),u=ne(`Description / Notes:\r
                `),d=g("br"),c=W(),f=g("br"),h=W(),b=ne(p),m(n,"id","buildName"),m(n,"class","svelte-1km5ujz"),m(o,"class","svelte-1km5ujz"),m(a,"class","tooltip"),m(a,"id","bottom"),m(e,"class","currentBuild svelte-1km5ujz"),Z(e,"no-tooltip",t[8])},m(k,E){U(k,e,E),_(e,n),_(n,i),_(e,r),_(e,o),_(e,l),_(e,a),_(a,u),_(a,d),_(a,c),_(a,f),_(a,h),_(a,b),y=!0,I||(v=[T(o,"click",t[20]),T(o,"mouseenter",t[21]),T(o,"mouseleave",t[22])],I=!0)},p(k,E){(!y||E[0]&2048)&&s!==(s=k[11].name+"")&&ke(i,s),(!y||E[0]&2048)&&p!==(p=k[11].desc+"")&&ke(b,p),(!y||E[0]&256)&&Z(e,"no-tooltip",k[8])},i(k){y||(k&&be(()=>{y&&(w||(w=Re(e,He,{duration:100},!0)),w.run(1))}),y=!0)},o(k){k&&(w||(w=Re(e,He,{duration:100},!1)),w.run(0)),y=!1},d(k){k&&q(e),k&&w&&w.end(),I=!1,ge(v)}}}function zp(t){let e,n,s;return n=new qp({}),{c(){e=g("div"),pe(n.$$.fragment),m(e,"class","promptCont svelte-1km5ujz")},m(i,r){U(i,e,r),he(n,e,null),s=!0},p:J,i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){V(n.$$.fragment,i),s=!1},d(i){i&&q(e),_e(n)}}}function Hp(t){let e,n,s;return n=new Bp({}),n.$on("buildLoad",t[24]),{c(){e=g("div"),pe(n.$$.fragment),m(e,"class","promptCont svelte-1km5ujz")},m(i,r){U(i,e,r),he(n,e,null),s=!0},p:J,i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){V(n.$$.fragment,i),s=!1},d(i){i&&q(e),_e(n)}}}function Up(t){let e,n,s;return n=new Rp({}),{c(){e=g("div"),pe(n.$$.fragment),m(e,"class","promptCont svelte-1km5ujz")},m(i,r){U(i,e,r),he(n,e,null),s=!0},p:J,i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){V(n.$$.fragment,i),s=!1},d(i){i&&q(e),_e(n)}}}function jp(t){let e,n,s;return n=new op({}),{c(){e=g("div"),pe(n.$$.fragment),m(e,"class","promptCont svelte-1km5ujz")},m(i,r){U(i,e,r),he(n,e,null),s=!0},p:J,i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){V(n.$$.fragment,i),s=!1},d(i){i&&q(e),_e(n)}}}function Vp(t){let e,n,s,i;function r(l){t[23](l)}let o={};return t[7]!==void 0&&(o.loadID=t[7]),n=new Ep({props:o}),$.push(()=>ve(n,"loadID",r)),{c(){e=g("div"),pe(n.$$.fragment),m(e,"class","promptCont svelte-1km5ujz")},m(l,a){U(l,e,a),he(n,e,null),i=!0},p(l,a){const u={};!s&&a[0]&128&&(s=!0,u.loadID=l[7],ye(()=>s=!1)),n.$set(u)},i(l){i||(H(n.$$.fragment,l),i=!0)},o(l){V(n.$$.fragment,l),i=!1},d(l){l&&q(e),_e(n)}}}function Gp(t){let e,n,s,i,r,o,l,a,u,d,c,f,h,p,b,w,y,I,v,k,E,A,O,j,se;be(t[19]);let R=Ye(t[14]),P=[];for(let D=0;D<R.length;D+=1)P[D]=Bo(Lo(t,R,D));let N=t[10]&&Fo(),K=t[6]&&Wo(t),x=t[11]&&qo(t);u=new Q_({}),h=new k_({}),b=new P_({}),y=new Y_({}),v=new sp({});const C=[Vp,jp,Up,Hp,zp],ee=[];function le(D,G){return D[9]||D[4].share.ongoing?0:D[4].export.ongoing?1:D[4].save.ongoing?2:D[4].load.ongoing&&!D[7]?3:D[4].delete.ongoing?4:-1}return~(E=le(t))&&(A=ee[E]=C[E](t)),{c(){for(let D=0;D<P.length;D+=1)P[D].c();e=Lt(),N&&N.c(),n=Lt(),s=W(),i=g("div"),i.textContent=`v${Yp}`,r=W(),K&&K.c(),o=W(),l=g("main"),x&&x.c(),a=W(),pe(u.$$.fragment),d=W(),c=g("div"),f=g("div"),pe(h.$$.fragment),p=W(),pe(b.$$.fragment),w=W(),pe(y.$$.fragment),I=W(),pe(v.$$.fragment),k=W(),A&&A.c(),m(i,"style","position: absolute; bottom: 0; padding: var(--u); font-size: calc(var(--u) * 2.5); color: var(--light);"),m(f,"class","eqCont svelte-1km5ujz"),m(c,"class","calcBox svelte-1km5ujz"),m(l,"class","svelte-1km5ujz"),Z(l,"portrait-NOT",!t[2])},m(D,G){for(let fe=0;fe<P.length;fe+=1)P[fe]&&P[fe].m($n.head,null);_($n.head,e),N&&N.m($n.head,null),_($n.head,n),U(D,s,G),U(D,i,G),U(D,r,G),K&&K.m(D,G),U(D,o,G),U(D,l,G),x&&x.m(l,null),_(l,a),he(u,l,null),_(l,d),_(l,c),_(c,f),he(h,f,null),_(f,p),he(b,f,null),_(c,w),he(y,c,null),_(l,I),he(v,l,null),_(l,k),~E&&ee[E].m(l,null),O=!0,j||(se=[T(Sn,"wheel",t[17],{passive:!1}),T(Sn,"keydown",t[18]),T(Sn,"resize",t[19])],j=!0)},p(D,G){if(G[0]&16384){R=Ye(D[14]);let L;for(L=0;L<R.length;L+=1){const S=Lo(D,R,L);P[L]?P[L].p(S,G):(P[L]=Bo(S),P[L].c(),P[L].m(e.parentNode,e))}for(;L<P.length;L+=1)P[L].d(1);P.length=R.length}D[10]?N||(N=Fo(),N.c(),N.m(n.parentNode,n)):N&&(N.d(1),N=null),D[6]?K?(K.p(D,G),G[0]&64&&H(K,1)):(K=Wo(D),K.c(),H(K,1),K.m(o.parentNode,o)):K&&(Ae(),V(K,1,1,()=>{K=null}),Pe()),D[11]?x?(x.p(D,G),G[0]&2048&&H(x,1)):(x=qo(D),x.c(),H(x,1),x.m(l,a)):x&&(Ae(),V(x,1,1,()=>{x=null}),Pe());let fe=E;E=le(D),E===fe?~E&&ee[E].p(D,G):(A&&(Ae(),V(ee[fe],1,1,()=>{ee[fe]=null}),Pe()),~E?(A=ee[E],A?A.p(D,G):(A=ee[E]=C[E](D),A.c()),H(A,1),A.m(l,null)):A=null),(!O||G[0]&4)&&Z(l,"portrait-NOT",!D[2])},i(D){O||(H(K),H(x),H(u.$$.fragment,D),H(h.$$.fragment,D),H(b.$$.fragment,D),H(y.$$.fragment,D),H(v.$$.fragment,D),H(A),O=!0)},o(D){V(K),V(x),V(u.$$.fragment,D),V(h.$$.fragment,D),V(b.$$.fragment,D),V(y.$$.fragment,D),V(v.$$.fragment,D),V(A),O=!1},d(D){D&&(q(s),q(i),q(r),q(o),q(l)),Ut(P,D),q(e),N&&N.d(D),q(n),K&&K.d(D),x&&x.d(),_e(u),_e(h),_e(b),_e(y),_e(v),~E&&ee[E].d(),j=!1,ge(se)}}}let Yp="3.17.4-alpha";function xp(t,e,n){let s,i,r,o,l,a,u,d,c,f,h;Q(t,te,F=>n(4,i=F)),Q(t,In,F=>n(10,r=F)),Q(t,Di,F=>n(16,o=F)),Q(t,Ke,F=>n(11,l=F)),Q(t,rs,F=>n(28,a=F)),Q(t,wt,F=>n(29,u=F)),Q(t,Tn,F=>n(30,d=F)),Q(t,ft,F=>n(31,c=F)),Q(t,tt,F=>n(32,f=F)),Q(t,Ft,F=>n(33,h=F));let p,b,w,y=7,I=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],v=!1,k,E=new URLSearchParams(window.location.search).get("id");$a(()=>{if(E)if(Y(te,i.load.ongoing=!0,i),!E.startsWith("-N"))Y(te,i.load.status=-1,i),Y(te,i.message="invalid_id",i);else{Y(te,i.load.status=0,i);let F=La(ln(an,"builds"),Ma()),Ne=0;Pa(F).then(M=>{for(let re in M.val()){if(re==E){A(M.val()[re],re);break}else Ne==Object.keys(M.val()).length-1&&(Y(te,i.load.status=-1,i),Y(te,i.message="invalid_id",i));Ne++}}).catch(()=>{Y(te,i.load.status=-1,i),Y(te,i.message="firebase_fail",i)})}n(2,w=b>p),f[Object.keys(f)[0]]&&Y(Ft,h=!0,h),setInterval(()=>{JSON.stringify(f)!=window.localStorage.getItem("builds")&&window.localStorage.setItem("builds",JSON.stringify(f))},250)});function A(F,Ne){for(let M in F.eq){let re=c[M]||ar;F.eq[M]&&F.eq[M]!=re.name?d[M][F.eq[M]].querySelector("button").click():!F.eq[M]&&re.name&&d[M][re.name].querySelector("button").click()}for(let M of qn){let re=u[M]||ur;re.name&&a[M][re.name].querySelector("button").click()}setTimeout(()=>{for(let M of qn)F.gear[M]&&a[M][F.gear[M]].querySelector("button").click();Y(te,i.load.ongoing=!1,i),Y(te,i.load.status=null,i),Y(Ke,l=F,l),Y(Ke,l.id=Ne,l),n(7,E=null)})}let O=[],j=[],se="",R,P=9;for(let F=0;F<P;F++)O.push(`https://raw.githubusercontent.com/XT8SS/fc-sv/gh-pages/backgrounds/BG${F}.jpg`);function N(F){R=Math.floor(Math.random()*F.length)}N(O);function K(){n(5,se=O[R]),j.push(R)}K(),function F(){setTimeout(()=>{if(N(O),!j.length)K();else{if(!j.includes(R))K();else{let Ne=[...Array(P).keys()].filter(M=>!j.includes(M));N(Ne),K()}j.length>3&&(j=j.slice(1))}document.hasFocus&&F()},45e3)}();function x(){k=setTimeout(()=>{n(6,v=!1)},2e3)}function C(){clearTimeout(k),n(6,v=!0),x()}let ee=!1;const le=F=>{let Ne=F.wheelDeltaY;if(F.ctrlKey){if(F.preventDefault(),I[y]==.2&&Ne<0||I[y]==5&&Ne>0)return;Ne>0?n(3,y++,y):n(3,y--,y),C()}},D=F=>{F.ctrlKey&&(F.key=="-"||F.key=="+"||F.code=="Equal"||F.key=="0")&&(F.preventDefault(),(F.key=="+"||F.code=="Equal")&&I[y]!=5?n(3,y++,y):F.key=="-"&&I[y]!=.2?n(3,y--,y):F.key=="0"&&I[y]!=1&&n(3,y=7),C()),r&&t_(F)};function G(){n(0,p=Sn.outerHeight),n(1,b=Sn.outerWidth)}const fe=()=>{r||Y(te,i.share.ongoing=!0,i)},L=()=>n(8,ee=!0),S=()=>n(8,ee=!1);function B(F){E=F,n(7,E)}const X=F=>A(F.detail.build,F.detail.id);return t.$$.update=()=>{if(t.$$.dirty[0]&65539&&(b||p)&&(n(2,w=b>p),o))for(let F of o)cr(F.node,F.itemName);t.$$.dirty[0]&12&&(w?document.documentElement.style.setProperty("--u",`${.75*I[y]}vh`):document.documentElement.style.setProperty("--u","0.75vh")),t.$$.dirty[0]&32&&(document.body.style.backgroundImage=`url(${se})`),t.$$.dirty[0]&16&&n(9,s=i.export.status||i.save.status||i.load.status||i.delete.status),t.$$.dirty[0]&16&&Y(In,r=i.export.ongoing||i.save.ongoing||i.load.ongoing||i.delete.ongoing||i.share.ongoing,r)},[p,b,w,y,i,se,v,E,ee,s,r,l,I,A,O,C,o,le,D,G,fe,L,S,B,X]}class Kp extends Te{constructor(e){super(),Ie(this,e,xp,Gp,de,{},null,[-1,-1])}}new Kp({target:document.body});
