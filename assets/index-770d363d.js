var ja=Object.defineProperty;var Ga=(t,e,n)=>e in t?ja(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ws=(t,e,n)=>(Ga(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function X(){}const Ss=t=>t;function xa(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Go(t){return t()}function pr(){return Object.create(null)}function be(t){t.forEach(Go)}function cn(t){return typeof t=="function"}function de(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Qn;function Je(t,e){return t===e?!0:(Qn||(Qn=document.createElement("a")),Qn.href=e,t===Qn.href)}function Ya(t){return Object.keys(t).length===0}function Ka(t,...e){if(t==null){for(const s of e)s(void 0);return X}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function K(t,e,n){t.$$.on_destroy.push(Ka(e,n))}function U(t,e,n){return t.set(n),e}function xo(t){return t&&cn(t.destroy)?t.destroy:X}const Yo=typeof window<"u";let Ci=Yo?()=>window.performance.now():()=>Date.now(),Ei=Yo?t=>requestAnimationFrame(t):X;const $t=new Set;function Ko(t){$t.forEach(e=>{e.c(t)||($t.delete(e),e.f())}),$t.size!==0&&Ei(Ko)}function Si(t){let e;return $t.size===0&&Ei(Ko),{promise:new Promise(n=>{$t.add(e={c:t,f:n})}),abort(){$t.delete(e)}}}const Qa=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function p(t,e){t.appendChild(e)}function Qo(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Xa(t){const e=g("style");return e.textContent="/* empty */",Ja(Qo(t),e),e.sheet}function Ja(t,e){return p(t.head||t,e),e.sheet}function W(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function se(t){return document.createTextNode(t)}function M(){return se(" ")}function Wt(){return se("")}function D(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:m(t,e,n)}function Xo(t){return t===""?null:+t}function Za(t){return Array.from(t.childNodes)}function ke(t,e){e=""+e,t.data!==e&&(t.data=e)}function st(t,e){t.value=e??""}function De(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let Xn;function $a(){if(Xn===void 0){Xn=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{Xn=!0}}return Xn}function rt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const s=g("iframe");s.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),s.setAttribute("aria-hidden","true"),s.tabIndex=-1;const i=$a();let r;return i?(s.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=D(window,"message",o=>{o.source===s.contentWindow&&e()})):(s.src="about:blank",s.onload=()=>{r=D(s.contentWindow,"resize",e),e()}),p(t,s),()=>{(i||r&&s.contentWindow)&&r(),L(s)}}function J(t,e,n){t.classList.toggle(e,!!n)}function Jo(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}const ts=new Map;let ns=0;function eu(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function tu(t,e){const n={stylesheet:Xa(e),rules:{}};return ts.set(t,n),n}function ss(t,e,n,s,i,r,o,a=0){const l=16.666/s;let u=`{
`;for(let w=0;w<=1;w+=l){const v=e+(n-e)*r(w);u+=w*100+`%{${o(v,1-v)}}
`}const d=u+`100% {${o(n,1-n)}}
}`,c=`__svelte_${eu(d)}_${a}`,f=Qo(t),{stylesheet:h,rules:_}=ts.get(f)||tu(f,t);_[c]||(_[c]=!0,h.insertRule(`@keyframes ${c} ${d}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${c} ${s}ms linear ${i}ms 1 both`,ns+=1,c}function is(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),ns-=i,ns||nu())}function nu(){Ei(()=>{ns||(ts.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),ts.clear())})}let kn;function ut(t){kn=t}function ki(){if(!kn)throw new Error("Function called outside component initialization");return kn}function su(t){ki().$$.on_mount.push(t)}function Nt(){const t=ki();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Jo(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}const Qt=[],Z=[];let en=[];const Zs=[],iu=Promise.resolve();let $s=!1;function ru(){$s||($s=!0,iu.then(Ii))}function ye(t){en.push(t)}function ve(t){Zs.push(t)}const qs=new Set;let xt=0;function Ii(){if(xt!==0)return;const t=kn;do{try{for(;xt<Qt.length;){const e=Qt[xt];xt++,ut(e),ou(e.$$)}}catch(e){throw Qt.length=0,xt=0,e}for(ut(null),Qt.length=0,xt=0;Z.length;)Z.pop()();for(let e=0;e<en.length;e+=1){const n=en[e];qs.has(n)||(qs.add(n),n())}en.length=0}while(Qt.length);for(;Zs.length;)Zs.pop()();$s=!1,qs.clear(),ut(t)}function ou(t){if(t.fragment!==null){t.update(),be(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ye)}}function lu(t){const e=[],n=[];en.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),en=e}let mn;function Ti(){return mn||(mn=Promise.resolve(),mn.then(()=>{mn=null})),mn}function Bt(t,e,n){t.dispatchEvent(Jo(`${e?"intro":"outro"}${n}`))}const es=new Set;let it;function Me(){it={r:0,c:[],p:it}}function Le(){it.r||be(it.c),it=it.p}function z(t,e){t&&t.i&&(es.delete(t),t.i(e))}function G(t,e,n,s){if(t&&t.o){if(es.has(t))return;es.add(t),it.c.push(()=>{es.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Ni={duration:0};function Zo(t,e,n){const s={direction:"in"};let i=e(t,n,s),r=!1,o,a,l=0;function u(){o&&is(t,o)}function d(){const{delay:f=0,duration:h=300,easing:_=Ss,tick:y=X,css:w}=i||Ni;w&&(o=ss(t,0,1,h,f,_,w,l++)),y(0,1);const v=Ci()+f,N=v+h;a&&a.abort(),r=!0,ye(()=>Bt(t,!0,"start")),a=Si(C=>{if(r){if(C>=N)return y(1,0),Bt(t,!0,"end"),u(),r=!1;if(C>=v){const T=_((C-v)/h);y(T,1-T)}}return r})}let c=!1;return{start(){c||(c=!0,is(t),cn(i)?(i=i(s),Ti().then(d)):d())},invalidate(){c=!1},end(){r&&(u(),r=!1)}}}function $o(t,e,n){const s={direction:"out"};let i=e(t,n,s),r=!0,o;const a=it;a.r+=1;let l;function u(){const{delay:d=0,duration:c=300,easing:f=Ss,tick:h=X,css:_}=i||Ni;_&&(o=ss(t,1,0,c,d,f,_));const y=Ci()+d,w=y+c;ye(()=>Bt(t,!1,"start")),"inert"in t&&(l=t.inert,t.inert=!0),Si(v=>{if(r){if(v>=w)return h(0,1),Bt(t,!1,"end"),--a.r||be(a.c),!1;if(v>=y){const N=f((v-y)/c);h(1-N,N)}}return r})}return cn(i)?Ti().then(()=>{i=i(s),u()}):u(),{end(d){d&&"inert"in t&&(t.inert=l),d&&i.tick&&i.tick(1,0),r&&(o&&is(t,o),r=!1)}}}function Re(t,e,n,s){let r=e(t,n,{direction:"both"}),o=s?0:1,a=null,l=null,u=null,d;function c(){u&&is(t,u)}function f(_,y){const w=_.b-o;return y*=Math.abs(w),{a:o,b:_.b,d:w,duration:y,start:_.start,end:_.start+y,group:_.group}}function h(_){const{delay:y=0,duration:w=300,easing:v=Ss,tick:N=X,css:C}=r||Ni,T={start:Ci()+y,b:_};_||(T.group=it,it.r+=1),"inert"in t&&(_?d!==void 0&&(t.inert=d):(d=t.inert,t.inert=!0)),a||l?l=T:(C&&(c(),u=ss(t,o,_,w,y,v,C)),_&&N(0,1),a=f(T,w),ye(()=>Bt(t,_,"start")),Si(S=>{if(l&&S>l.start&&(a=f(l,w),l=null,Bt(t,a.b,"start"),C&&(c(),u=ss(t,o,a.b,a.duration,0,v,r.css))),a){if(S>=a.end)N(o=a.b,1-o),Bt(t,a.b,"end"),l||(a.b?c():--a.group.r||be(a.group.c)),a=null;else if(S>=a.start){const P=S-a.start;o=a.a+a.d*v(P/a.duration),N(o,1-o)}}return!!(a||l)}))}return{run(_){cn(r)?Ti().then(()=>{r=r({direction:_?"in":"out"}),h(_)}):h(_)},end(){c(),a=l=null}}}function mr(t,e){const n=e.token={};function s(i,r,o,a){if(e.token!==n)return;e.resolved=a;let l=e.ctx;o!==void 0&&(l=l.slice(),l[o]=a);const u=i&&(e.current=i)(l);let d=!1;e.block&&(e.blocks?e.blocks.forEach((c,f)=>{f!==r&&c&&(Me(),G(c,1,1,()=>{e.blocks[f]===c&&(e.blocks[f]=null)}),Le())}):e.block.d(1),u.c(),z(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[r]=u),d&&Ii()}if(xa(t)){const i=ki();if(t.then(r=>{ut(i),s(e.then,1,e.value,r),ut(null)},r=>{if(ut(i),s(e.catch,2,e.error,r),ut(null),!e.hasCatch)throw r}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function au(t,e,n){const s=e.slice(),{resolved:i}=t;t.current===t.then&&(s[t.value]=i),t.current===t.catch&&(s[t.error]=i),t.block.p(s,n)}function Ve(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function we(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function me(t){t&&t.c()}function _e(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),ye(()=>{const r=t.$$.on_mount.map(Go).filter(cn);t.$$.on_destroy?t.$$.on_destroy.push(...r):be(r),t.$$.on_mount=[]}),i.forEach(ye)}function pe(t,e){const n=t.$$;n.fragment!==null&&(lu(n.after_update),be(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function uu(t,e){t.$$.dirty[0]===-1&&(Qt.push(t),ru(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Te(t,e,n,s,i,r,o=null,a=[-1]){const l=kn;ut(t);const u=t.$$={fragment:null,ctx:[],props:r,update:X,not_equal:i,bound:pr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:pr(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(c,f,...h)=>{const _=h.length?h[0]:f;return u.ctx&&i(u.ctx[c],u.ctx[c]=_)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](_),d&&uu(t,c)),f}):[],u.update(),d=!0,be(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const c=Za(e.target);u.fragment&&u.fragment.l(c),c.forEach(L)}else u.fragment&&u.fragment.c();e.intro&&z(t.$$.fragment),_e(t,e.target,e.anchor),Ii()}ut(l)}class Ne{constructor(){Ws(this,"$$");Ws(this,"$$set")}$destroy(){pe(this,1),this.$destroy=X}$on(e,n){if(!cn(n))return X;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Ya(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const cu="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(cu);const Yt=[];function xe(t,e=X){let n;const s=new Set;function i(a){if(de(t,a)&&(t=a,n)){const l=!Yt.length;for(const u of s)u[1](),Yt.push(u,t);if(l){for(let u=0;u<Yt.length;u+=2)Yt[u][0](Yt[u+1]);Yt.length=0}}}function r(a){i(a(t))}function o(a,l=X){const u=[a,l];return s.add(u),s.size===1&&(n=e(i,r)||X),a(t),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}let gr=localStorage.getItem("builds"),br=0,ei=xe({}),ft=xe({}),Xt=xe({}),Et=xe({}),Di=xe([]),zs=xe({}),Ye=xe(),el=xe(!1),Ze=xe(gr?JSON.parse(gr):{}),mt=xe(!1),In=xe(!1),Tn=xe({}),rs=xe({}),du=xe({}),$=xe({export:{ongoing:!1,status:null},save:{ongoing:!1,status:null},load:{ongoing:!1,status:null},delete:{ongoing:!1,status:null},share:{ongoing:!1},message:""});Ze.subscribe(t=>{br++,setTimeout(()=>{window.localStorage.setItem("builds",JSON.stringify(t)),br>1&&window.history.replaceState(null,null,location.origin+location.pathname)})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw dn(e)},dn=function(t){return new Error("Firebase Database ("+tl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fu=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=r>>2,c=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,h=u&63;l||(h=64,o||(f=64)),s.push(n[d],n[c],n[f],n[h])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||c==null)throw new hu;const f=r<<2|a>>4;if(s.push(f),u!==64){const h=a<<4&240|u>>2;if(s.push(h),c!==64){const _=u<<6&192|c;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sl=function(t){const e=nl(t);return Oi.encodeByteArray(e,!0)},os=function(t){return sl(t).replace(/\./g,"")},ti=function(t){try{return Oi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t){return il(void 0,t)}function il(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pu(n)||(t[n]=il(t[n],e[n]));return t}function pu(t){return t!=="__proto__"}/**
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
 */function mu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gu=()=>mu().__FIREBASE_DEFAULTS__,bu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ti(t[1]);return e&&JSON.parse(e)},rl=()=>{try{return gu()||bu()||yu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vu=t=>{var e,n;return(n=(e=rl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wu=t=>{const e=vu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ol=()=>{var t;return(t=rl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Cu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[os(JSON.stringify(n)),os(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ll(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Eu())}function Su(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function al(){return tl.NODE_ADMIN===!0}function ku(){try{return typeof indexedDB=="object"}catch{return!1}}function Iu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="FirebaseError";class Hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Tu,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ul.prototype.create)}}class ul{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Nu(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,a,s)}}function Nu(t,e){return t.replace(Du,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Du=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){return JSON.parse(t)}function Be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Nn(ti(r[0])||""),n=Nn(ti(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ou=function(t){const e=cl(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ru=function(t){const e=cl(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function rn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ls(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(vr(r)&&vr(o)){if(!ni(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)s[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)s[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=s[c-3]^s[c-8]^s[c-14]^s[c-16];s[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^r&(o^a),d=1518500249):(u=r^o^a,d=1859775393):c<60?(u=r&o|a&(r|o),d=2400959708):(u=r^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+s[c]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ri(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,B(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Is=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Dt(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class Lu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ks;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fu(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bu(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bu(t){return t===At?void 0:t}function Fu(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const qu={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},zu=Ee.INFO,Hu={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Uu=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Hu[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dl{constructor(e){this.name=e,this._logLevel=zu,this._logHandler=Uu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Vu=(t,e)=>e.some(n=>t instanceof n);let wr,Cr;function ju(){return wr||(wr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gu(){return Cr||(Cr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fl=new WeakMap,si=new WeakMap,hl=new WeakMap,Hs=new WeakMap,Ai=new WeakMap;function xu(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(gt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fl.set(n,t)}).catch(()=>{}),Ai.set(e,t),e}function Yu(t){if(si.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});si.set(t,e)}let ii={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return si.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ku(t){ii=t(ii)}function Qu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Us(this),e,...n);return hl.set(s,e.sort?e.sort():[e]),gt(s)}:Gu().includes(t)?function(...e){return t.apply(Us(this),e),gt(fl.get(this))}:function(...e){return gt(t.apply(Us(this),e))}}function Xu(t){return typeof t=="function"?Qu(t):(t instanceof IDBTransaction&&Yu(t),Vu(t,ju())?new Proxy(t,ii):t)}function gt(t){if(t instanceof IDBRequest)return xu(t);if(Hs.has(t))return Hs.get(t);const e=Xu(t);return e!==t&&(Hs.set(t,e),Ai.set(e,t)),e}const Us=t=>Ai.get(t);function Ju(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=gt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(gt(o.result),l.oldVersion,l.newVersion,gt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Zu=["get","getKey","getAll","getAllKeys","count"],$u=["put","add","delete","clear"],Vs=new Map;function Er(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vs.get(e))return Vs.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=$u.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Zu.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Vs.set(e,r),r}Ku(t=>({...t,get:(e,n,s)=>Er(e,n)||t.get(e,n,s),has:(e,n)=>!!Er(e,n)||t.has(e,n)}));/**
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
 */class ec{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ri="@firebase/app",Sr="0.9.23";/**
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
 */const zt=new dl("@firebase/app"),nc="@firebase/app-compat",sc="@firebase/analytics-compat",ic="@firebase/analytics",rc="@firebase/app-check-compat",oc="@firebase/app-check",lc="@firebase/auth",ac="@firebase/auth-compat",uc="@firebase/database",cc="@firebase/database-compat",dc="@firebase/functions",fc="@firebase/functions-compat",hc="@firebase/installations",_c="@firebase/installations-compat",pc="@firebase/messaging",mc="@firebase/messaging-compat",gc="@firebase/performance",bc="@firebase/performance-compat",yc="@firebase/remote-config",vc="@firebase/remote-config-compat",wc="@firebase/storage",Cc="@firebase/storage-compat",Ec="@firebase/firestore",Sc="@firebase/firestore-compat",kc="firebase",Ic="10.6.0";/**
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
 */const oi="[DEFAULT]",Tc={[ri]:"fire-core",[nc]:"fire-core-compat",[ic]:"fire-analytics",[sc]:"fire-analytics-compat",[oc]:"fire-app-check",[rc]:"fire-app-check-compat",[lc]:"fire-auth",[ac]:"fire-auth-compat",[uc]:"fire-rtdb",[cc]:"fire-rtdb-compat",[dc]:"fire-fn",[fc]:"fire-fn-compat",[hc]:"fire-iid",[_c]:"fire-iid-compat",[pc]:"fire-fcm",[mc]:"fire-fcm-compat",[gc]:"fire-perf",[bc]:"fire-perf-compat",[yc]:"fire-rc",[vc]:"fire-rc-compat",[wc]:"fire-gcs",[Cc]:"fire-gcs-compat",[Ec]:"fire-fst",[Sc]:"fire-fst-compat","fire-js":"fire-js",[kc]:"fire-js-all"};/**
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
 */const as=new Map,li=new Map;function Nc(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(li.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;li.set(e,t);for(const n of as.values())Nc(n,t);return!0}function Dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Oc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new ul("app","Firebase",Oc);/**
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
 */class Rc{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ac=Ic;function _l(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:oi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(n||(n=ol()),!n)throw bt.create("no-options");const r=as.get(i);if(r){if(ni(n,r.options)&&ni(s,r.config))return r;throw bt.create("duplicate-app",{appName:i})}const o=new Wu(i);for(const l of li.values())o.addComponent(l);const a=new Rc(n,s,o);return as.set(i,a),a}function Pc(t=oi){const e=as.get(t);if(!e&&t===oi&&ol())return _l();if(!e)throw bt.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let i=(s=Tc[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}us(new Dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Mc="firebase-heartbeat-database",Lc=1,On="firebase-heartbeat-store";let js=null;function pl(){return js||(js=Ju(Mc,Lc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(On)}}}).catch(t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})})),js}async function Bc(t){try{return await(await pl()).transaction(On).objectStore(On).get(ml(t))}catch(e){if(e instanceof Hn)zt.warn(e.message);else{const n=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(n.message)}}}async function kr(t,e){try{const s=(await pl()).transaction(On,"readwrite");await s.objectStore(On).put(e,ml(t)),await s.done}catch(n){if(n instanceof Hn)zt.warn(n.message);else{const s=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(s.message)}}}function ml(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fc=1024,Wc=30*24*60*60*1e3;class qc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ir();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Wc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ir(),{heartbeatsToSend:s,unsentEntries:i}=zc(this._heartbeatsCache.heartbeats),r=os(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ir(){return new Date().toISOString().substring(0,10)}function zc(t,e=Fc){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Tr(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ku()?Iu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tr(t){return os(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Uc(t){us(new Dn("platform-logger",e=>new ec(e),"PRIVATE")),us(new Dn("heartbeat",e=>new qc(e),"PRIVATE")),tn(ri,Sr,t),tn(ri,Sr,"esm2017"),tn("fire-js","")}Uc("");var Vc="firebase",jc="10.6.0";/**
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
 */tn(Vc,jc,"app");const Nr="@firebase/database",Dr="1.0.1";/**
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
 */let gl="";function Gc(t){gl=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Nn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return at(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xc(e)}}catch{}return new Yc},Mt=bl("localStorage"),ai=bl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new dl("@firebase/database"),Kc=function(){let t=1;return function(){return t++}}(),yl=function(t){const e=Mu(t),n=new Pu;n.update(e);const s=n.digest();return Oi.encodeByteArray(s)},Un=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Un.apply(null,s):typeof s=="object"?e+=Be(s):e+=s,e+=" "}return e};let Ft=null,Or=!0;const Qc=function(t,e){B(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(nn.logLevel=Ee.VERBOSE,Ft=nn.log.bind(nn),e&&ai.set("logging_enabled",!0)):typeof t=="function"?Ft=t:(Ft=null,ai.remove("logging_enabled"))},Ue=function(...t){if(Or===!0&&(Or=!1,Ft===null&&ai.get("logging_enabled")===!0&&Qc(!0)),Ft){const e=Un.apply(null,t);Ft(e)}},Vn=function(t){return function(...e){Ue(t,...e)}},ui=function(...t){const e="FIREBASE INTERNAL ERROR: "+Un(...t);nn.error(e)},ht=function(...t){const e=`FIREBASE FATAL ERROR: ${Un(...t)}`;throw nn.error(e),new Error(e)},Qe=function(...t){const e="FIREBASE WARNING: "+Un(...t);nn.warn(e)},Xc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Jc=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ht="[MIN_NAME]",St="[MAX_NAME]",fn=function(t,e){if(t===e)return 0;if(t===Ht||e===St)return-1;if(e===Ht||t===St)return 1;{const n=Rr(t),s=Rr(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Zc=function(t,e){return t===e?0:t<e?-1:1},gn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Be(e))},Mi=function(t){if(typeof t!="object"||t===null)return Be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Be(e[s]),n+=":",n+=Mi(t[e[s]]);return n+="}",n},vl=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wl=function(t){B(!Pi(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},$c=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ed=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function td(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const nd=new RegExp("^-?(0*)\\d{1,10}$"),sd=-2147483648,id=2147483647,Rr=function(t){if(nd.test(t)){const e=Number(t);if(e>=sd&&e<=id)return e}return null},hn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},rd=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class od{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class sn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="5",Cl="v",El="s",Sl="r",kl="f",Il=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tl="ls",Nl="p",ci="ac",Dl="websocket",Ol="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ad(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Al(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let s;if(e===Dl)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ol)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ad(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.counters_={}}incrementCounter(e,n=1){at(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _u(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs={},xs={};function Bi(t){const e=t.toString();return Gs[e]||(Gs[e]=new ud),Gs[e]}function cd(t,e){const n=t.toString();return xs[n]||(xs[n]=e()),xs[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&hn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="start",fd="close",hd="pLPCommand",_d="pRTLPCB",Pl="id",Ml="pw",Ll="ser",pd="cb",md="seg",gd="ts",bd="d",yd="dframe",Bl=1870,Fl=30,vd=Bl-Fl,wd=25e3,Cd=3e4;class Jt{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vn(e),this.stats_=Bi(n),this.urlFn=l=>(this.appCheckToken&&(l[ci]=this.appCheckToken),Al(n,Ol,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dd(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Cd)),Jc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fi((...r)=>{const[o,a,l,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ar)this.id=a,this.password=l;else if(o===fd)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ar]="t",s[Ll]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[pd]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Cl]=Li,this.transportSessionId&&(s[El]=this.transportSessionId),this.lastSessionId&&(s[Tl]=this.lastSessionId),this.applicationId&&(s[Nl]=this.applicationId),this.appCheckToken&&(s[ci]=this.appCheckToken),typeof location<"u"&&location.hostname&&Il.test(location.hostname)&&(s[Sl]=kl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jt.forceAllow_=!0}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){return Jt.forceAllow_?!0:!Jt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$c()&&!ed()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sl(n),i=vl(s,vd);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[yd]="t",s[Pl]=e,s[Ml]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fi{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Kc(),window[hd+this.uniqueCallbackIdentifier]=e,window[_d+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ue("frame writing exception"),a.stack&&Ue(a.stack),Ue(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Pl]=this.myID,e[Ml]=this.myPW,e[Ll]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fl+s.length<=Bl;){const o=this.pendingSegs.shift();s=s+"&"+md+i+"="+o.seg+"&"+gd+i+"="+o.ts+"&"+bd+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(wd)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=16384,Sd=45e3;let cs=null;typeof MozWebSocket<"u"?cs=MozWebSocket:typeof WebSocket<"u"&&(cs=WebSocket);class $e{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vn(this.connId),this.stats_=Bi(n),this.connURL=$e.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Cl]=Li,typeof location<"u"&&location.hostname&&Il.test(location.hostname)&&(o[Sl]=kl),n&&(o[El]=n),s&&(o[Tl]=s),i&&(o[ci]=i),r&&(o[Nl]=r),Al(e,Dl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mt.set("previous_websocket_failure",!0);try{let s;al(),this.mySock=new cs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&cs!==null&&!$e.forceDisallow_}static previouslyFailed(){return Mt.isInMemoryStorage||Mt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Nn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vl(n,Ed);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Sd))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jt,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=$e&&$e.isAvailable();let s=n&&!$e.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$e];else{const i=this.transports_=[];for(const r of Rn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Rn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=6e4,Id=5e3,Td=10*1024,Nd=100*1024,Ys="t",Pr="d",Dd="s",Mr="r",Od="e",Lr="o",Br="a",Fr="n",Wr="p",Rd="h";class Ad{constructor(e,n,s,i,r,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vn("c:"+this.id+":"),this.transportManager_=new Rn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Nd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Td?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ys in e){const n=e[Ys];n===Br?this.upgradeIfSecondaryHealthy_():n===Mr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Lr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gn("t",e),s=gn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Br,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gn("t",e),s=gn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gn(Ys,e);if(Pr in e){const s=e[Pr];if(n===Rd){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Fr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Dd?this.onConnectionShutdown_(s):n===Mr?this.onReset_(s):n===Od?ui("Server Error: "+s):n===Lr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ui("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Li!==s&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),wn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Id))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends ql{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ll()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ds}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=32,zr=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Ce("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kt(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function zl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Pd(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ul(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function Fe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ce(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Ge(t,e){const n=ce(t),s=ce(e);if(n===null)return e;if(n===s)return Ge(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Vl(t,e){if(kt(t)!==kt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function et(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(kt(t)>kt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Md{constructor(e,n){this.errorPrefix_=n,this.parts_=Hl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Is(this.parts_[s]);jl(this)}}function Ld(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Is(e),jl(t)}function Bd(t){const e=t.parts_.pop();t.byteLength_-=Is(e),t.parts_.length>0&&(t.byteLength_-=1)}function jl(t){if(t.byteLength_>zr)throw new Error(t.errorPrefix_+"has a key path longer than "+zr+" bytes ("+t.byteLength_+").");if(t.parts_.length>qr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qr+") or object contains a cycle "+Pt(t))}function Pt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends ql{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wi}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=1e3,Fd=60*5*1e3,Hr=30*1e3,Wd=1.3,qd=3e4,zd="server_kill",Ur=3;class dt extends Wl{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dt.nextPersistentConnectionId_++,this.log_=Vn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bn,this.maxReconnectDelay_=Fd,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!al())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ds.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Be(r)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ks,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,u=a.s;dt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&at(e,"w")){const s=rn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ru(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ou(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ui("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qd&&(this.reconnectDelay_=bn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Wd)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},u=function(c){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new Ad(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,h=>{Qe(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(zd)},r))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Qe(c),l())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yr(this.interruptReasons_)&&(this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Mi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ce(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ur&&(this.reconnectDelay_=Hr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ur&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+gl.replace(/\./g,"-")]=1,ll()?e["framework.cordova"]=1:Su()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ds.getInstance().currentlyOnline();return yr(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ts{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ae(Ht,e),i=new ae(Ht,n);return this.compare(s,i)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn;class Gl extends Ts{static get __EMPTY_NODE(){return Jn}static set __EMPTY_NODE(e){Jn=e}compare(e,n){return fn(e.name,n.name)}isDefinedOn(e){throw dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(St,Jn)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Jn)}toString(){return".key"}}const yt=new Gl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??qe.RED,this.left=i??Ke.EMPTY_NODE,this.right=r??Ke.EMPTY_NODE}copy(e,n,s,i,r){return new qe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class Hd{copy(e,n,s,i,r){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zn(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new Hd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t,e){return fn(t.name,e.name)}function qi(t,e){return fn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;function Vd(t){di=t}const xl=function(t){return typeof t=="number"?"number:"+wl(t):"string:"+t},Yl=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&at(e,".sv"),"Priority must be a string or number.")}else B(t===di||t.isEmpty(),"priority of unexpected type.");B(t===di||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr;class We{constructor(e,n=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yl(this.priorityNode_)}static set __childrenNodeConstructor(e){Vr=e}static get __childrenNodeConstructor(){return Vr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:ce(e)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(B(s!==".priority"||kt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xl(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wl(this.value_):e+=this.value_,this.lazyHash_=yl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=We.VALUE_TYPE_ORDER.indexOf(n),r=We.VALUE_TYPE_ORDER.indexOf(s);return B(i>=0,"Unknown leaf type: "+n),B(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl,Ql;function jd(t){Kl=t}function Gd(t){Ql=t}class xd extends Ts{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?fn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(St,new We("[PRIORITY-POST]",Ql))}makePost(e,n){const s=Kl(e);return new ae(n,new We("[PRIORITY-POST]",s))}toString(){return".priority"}}const Oe=new xd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=Math.log(2);class Kd{constructor(e){const n=r=>parseInt(Math.log(r)/Yd,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fs=function(t,e,n,s){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new qe(f,c.node,qe.BLACK,null,null);{const h=parseInt(d/2,10)+l,_=i(l,h),y=i(h+1,u);return c=t[h],f=n?n(c):c,new qe(f,c.node,qe.BLACK,_,y)}},r=function(l){let u=null,d=null,c=t.length;const f=function(_,y){const w=c-_,v=c;c-=_;const N=i(w+1,v),C=t[w],T=n?n(C):C;h(new qe(T,C.node,y,null,N))},h=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(_+1));y?f(w,qe.BLACK):(f(w,qe.BLACK),f(w,qe.RED))}return d},o=new Kd(t.length),a=r(o);return new Ke(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;const Kt={};class ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Kt&&Oe,"ChildrenNode.ts has not been loaded"),Ks=Ks||new ct({".priority":Kt},{".priority":Oe}),Ks}get(e){const n=rn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return at(this.indexSet_,e.toString())}addIndex(e,n){B(e!==yt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ae.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=fs(s,e.getCompare()):a=Kt;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new ct(d,u)}addToIndexes(e,n){const s=ls(this.indexes_,(i,r)=>{const o=rn(this.indexSet_,r);if(B(o,"Missing index implementation for "+r),i===Kt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ae.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),fs(a,o.getCompare())}else return Kt;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ae(e.name,a))),l.insert(e,e.node)}});return new ct(s,this.indexSet_)}removeFromIndexes(e,n){const s=ls(this.indexes_,i=>{if(i===Kt)return i;{const r=n.get(e.name);return r?i.remove(new ae(e.name,r)):i}});return new ct(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn;class re{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Yl(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yn||(yn=new re(new Ke(qi),null,ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yn}updatePriority(e){return this.children_.isEmpty()?this:new re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yn:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ae(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?yn:this.priorityNode_;return new re(i,o,r)}}updateChild(e,n){const s=ce(e);if(s===null)return n;{B(ce(e)!==".priority"||kt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Se(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Oe,(o,a)=>{n[o]=a.val(e),s++,r&&re.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xl(this.getPriority().val())+":"),this.forEachChild(Oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":yl(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ae(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jn?-1:0}withIndex(e){if(e===yt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new re(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Oe),i=n.getIterator(Oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yt?null:this.indexMap_.get(e.toString())}}re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qd extends re{constructor(){super(new Ke(qi),re.EMPTY_NODE,ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return re.EMPTY_NODE}isEmpty(){return!1}}const jn=new Qd;Object.defineProperties(ae,{MIN:{value:new ae(Ht,re.EMPTY_NODE)},MAX:{value:new ae(St,jn)}});Gl.__EMPTY_NODE=re.EMPTY_NODE;We.__childrenNodeConstructor=re;Vd(jn);Gd(jn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=!0;function ze(t,e=null){if(t===null)return re.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new We(n,ze(e))}if(!(t instanceof Array)&&Xd){const n=[];let s=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ze(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ae(o,l)))}}),n.length===0)return re.EMPTY_NODE;const r=fs(n,Ud,o=>o.name,qi);if(s){const o=fs(n,Oe.getCompare());return new re(r,ze(e),new ct({".priority":o},{".priority":Oe}))}else return new re(r,ze(e),ct.Default)}else{let n=re.EMPTY_NODE;return Xe(t,(s,i)=>{if(at(t,s)&&s.substring(0,1)!=="."){const r=ze(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ze(e))}}jd(ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Ts{constructor(e){super(),this.indexPath_=e,B(!ue(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?fn(e.name,n.name):r}makePost(e,n){const s=ze(e),i=re.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(n,i)}maxPost(){const e=re.EMPTY_NODE.updateChild(this.indexPath_,jn);return new ae(St,e)}toString(){return Hl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Ts{compare(e,n){const s=e.node.compareTo(n.node);return s===0?fn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const s=ze(e);return new ae(n,s)}toString(){return".value"}}const Jl=new Jd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){return{type:"value",snapshotNode:t}}function on(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function An(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Pn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Zd(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(An(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(on(n,s)):o.trackChildChange(Pn(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(An(i,r))}),n.isLeafNode()||n.forEachChild(Oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Pn(i,r,o))}else s.trackChildChange(on(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?re.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.indexedFilter_=new zi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mn.getStartPost_(e),this.endPost_=Mn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ae(n,s))||(s=re.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=re.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(re.EMPTY_NODE);const r=this;return n.forEachChild(Oe,(o,a)=>{r.matches(new ae(o,a))||(i=i.updateImmediateChild(o,re.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Mn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ae(n,s))||(s=re.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=re.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=re.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(re.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,re.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,h)=>c(h,f)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const l=new ae(n,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,l);if(d&&!s.isEmpty()&&h>=0)return r!=null&&r.trackChildChange(Pn(n,s,c)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(An(n,c));const y=a.updateImmediateChild(n,re.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(on(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return s.isEmpty()?e:d&&o(u,l)>=0?(r!=null&&(r.trackChildChange(An(u.name,u.node)),r.trackChildChange(on(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(u.name,re.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ht}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:St}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new Hi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ef(t){return t.loadsAllData()?new zi(t.getIndex()):t.hasLimit()?new $d(t):new Mn(t)}function tf(t,e){const n=t.copy();return n.index_=e,n}function jr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===Jl?n="$value":t.index_===yt?n="$key":(B(t.index_ instanceof Xl,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Wl{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Vn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=hs.getListenId_(e,s),a={};this.listens_[o]=a;const l=jr(e._queryParams);this.restRequest_(r+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(r,c,!1,s),rn(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const s=hs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=jr(e._queryParams),s=e._path.toString(),i=new ks;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Au(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Nn(a.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.rootNode_=re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(){return{value:null,children:new Map}}function $l(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ce(e);t.children.has(s)||t.children.set(s,_s());const i=t.children.get(s);e=Se(e),$l(i,e,n)}}function fi(t,e,n){t.value!==null?n(e,t.value):sf(t,(s,i)=>{const r=new Ce(e.toString()+"/"+s);fi(i,r,n)})}function sf(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=10*1e3,of=30*1e3,lf=5*60*1e3;class af{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new rf(e);const s=xr+(of-xr)*Math.random();wn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xe(e,(i,r)=>{r>0&&at(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),wn(this.reportStats_.bind(this),Math.floor(Math.random()*2*lf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function ea(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ui(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vi(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=tt.ACK_USER_WRITE,this.source=ea()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new ps(ge(),n,this.revert)}}else return B(ce(this.path)===e,"operationForChild called for unrelated child."),new ps(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){this.source=e,this.path=n,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Ln(this.source,ge()):new Ln(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=tt.OVERWRITE}operationForChild(e){return ue(this.path)?new Ut(this.source,ge(),this.snap.getImmediateChild(e)):new Ut(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=tt.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new Ut(this.source,ge(),n.value):new Bn(this.source,ge(),n)}else return B(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bn(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cf(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Zd(o.childName,o.snapshotNode))}),vn(t,i,"child_removed",e,s,n),vn(t,i,"child_added",e,s,n),vn(t,i,"child_moved",r,s,n),vn(t,i,"child_changed",e,s,n),vn(t,i,"value",e,s,n),i}function vn(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>ff(t,a,l)),o.forEach(a=>{const l=df(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function df(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ff(t,e,n){if(e.childName==null||n.childName==null)throw dn("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),i=new ae(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t,e){return{eventCache:t,serverCache:e}}function Cn(t,e,n,s){return Ns(new It(e,n,s),t.serverCache)}function ta(t,e,n,s){return Ns(t.eventCache,new It(e,n,s))}function ms(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;const hf=()=>(Qs||(Qs=new Ke(Zc)),Qs);class Ie{constructor(e,n=hf()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return Xe(e,(s,i)=>{n=n.set(new Ce(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(ue(e))return null;{const s=ce(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Se(e),n);return r!=null?{path:Fe(new Ce(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=ce(e),s=this.children.get(n);return s!==null?s.subtree(Se(e)):new Ie(null)}}set(e,n){if(ue(e))return new Ie(n,this.children);{const s=ce(e),r=(this.children.get(s)||new Ie(null)).set(Se(e),n),o=this.children.insert(s,r);return new Ie(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=ce(e),s=this.children.get(n);if(s){const i=s.remove(Se(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ie(null):new Ie(this.value,r)}else return this}}get(e){if(ue(e))return this.value;{const n=ce(e),s=this.children.get(n);return s?s.get(Se(e)):null}}setTree(e,n){if(ue(e))return n;{const s=ce(e),r=(this.children.get(s)||new Ie(null)).setTree(Se(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ie(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Fe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ue(e))return null;{const r=ce(e),o=this.children.get(r);return o?o.findOnPath_(Se(e),Fe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,s){if(ue(e))return this;{this.value&&s(n,this.value);const i=ce(e),r=this.children.get(i);return r?r.foreachOnPath_(Se(e),Fe(n,i),s):new Ie(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Fe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.writeTree_=e}static empty(){return new nt(new Ie(null))}}function En(t,e,n){if(ue(e))return new nt(new Ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ge(i,e);return r=r.updateChild(o,n),new nt(t.writeTree_.set(i,r))}else{const i=new Ie(n),r=t.writeTree_.setTree(e,i);return new nt(r)}}}function Yr(t,e,n){let s=t;return Xe(n,(i,r)=>{s=En(s,Fe(e,i),r)}),s}function Kr(t,e){if(ue(e))return nt.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new nt(n)}}function hi(t,e){return jt(t,e)!=null}function jt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ge(n.path,e)):null}function Qr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(s,i)=>{e.push(new ae(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ae(s,i.value))}),e}function vt(t,e){if(ue(e))return t;{const n=jt(t,e);return n!=null?new nt(new Ie(n)):new nt(t.writeTree_.subtree(e))}}function _i(t){return t.writeTree_.isEmpty()}function ln(t,e){return na(ge(),t.writeTree_,e)}function na(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(B(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=na(Fe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Fe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t,e){return oa(e,t)}function _f(t,e,n,s,i){B(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=En(t.visibleWrites,e,n)),t.lastWriteId=s}function pf(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function mf(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&gf(a,s.path)?i=!1:et(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return bf(t),!0;if(s.snap)t.visibleWrites=Kr(t.visibleWrites,s.path);else{const a=s.children;Xe(a,l=>{t.visibleWrites=Kr(t.visibleWrites,Fe(s.path,l))})}return!0}else return!1}function gf(t,e){if(t.snap)return et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&et(Fe(t.path,n),e))return!0;return!1}function bf(t){t.visibleWrites=sa(t.allWrites,yf,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yf(t){return t.visible}function sa(t,e,n){let s=nt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)et(n,o)?(a=Ge(n,o),s=En(s,a,r.snap)):et(o,n)&&(a=Ge(o,n),s=En(s,ge(),r.snap.getChild(a)));else if(r.children){if(et(n,o))a=Ge(n,o),s=Yr(s,a,r.children);else if(et(o,n))if(a=Ge(o,n),ue(a))s=Yr(s,ge(),r.children);else{const l=rn(r.children,ce(a));if(l){const u=l.getChild(Se(a));s=En(s,ge(),u)}}}else throw dn("WriteRecord should have .snap or .children")}}return s}function ia(t,e,n,s,i){if(!s&&!i){const r=jt(t.visibleWrites,e);if(r!=null)return r;{const o=vt(t.visibleWrites,e);if(_i(o))return n;if(n==null&&!hi(o,ge()))return null;{const a=n||re.EMPTY_NODE;return ln(o,a)}}}else{const r=vt(t.visibleWrites,e);if(!i&&_i(r))return n;if(!i&&n==null&&!hi(r,ge()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(et(u.path,e)||et(e,u.path))},a=sa(t.allWrites,o,e),l=n||re.EMPTY_NODE;return ln(a,l)}}}function vf(t,e,n){let s=re.EMPTY_NODE;const i=jt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=vt(t.visibleWrites,e);return n.forEachChild(Oe,(o,a)=>{const l=ln(vt(r,new Ce(o)),a);s=s.updateImmediateChild(o,l)}),Qr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=vt(t.visibleWrites,e);return Qr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function wf(t,e,n,s,i){B(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Fe(e,n);if(hi(t.visibleWrites,r))return null;{const o=vt(t.visibleWrites,r);return _i(o)?i.getChild(n):ln(o,i.getChild(n))}}function Cf(t,e,n,s){const i=Fe(e,n),r=jt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=vt(t.visibleWrites,i);return ln(o,s.getNode().getImmediateChild(n))}else return null}function Ef(t,e){return jt(t.visibleWrites,e)}function Sf(t,e,n,s,i,r,o){let a;const l=vt(t.visibleWrites,e),u=jt(l,ge());if(u!=null)a=u;else if(n!=null)a=ln(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let h=f.getNext();for(;h&&d.length<i;)c(h,s)!==0&&d.push(h),h=f.getNext();return d}else return[]}function kf(){return{visibleWrites:nt.empty(),allWrites:[],lastWriteId:-1}}function gs(t,e,n,s){return ia(t.writeTree,t.treePath,e,n,s)}function ji(t,e){return vf(t.writeTree,t.treePath,e)}function Xr(t,e,n,s){return wf(t.writeTree,t.treePath,e,n,s)}function bs(t,e){return Ef(t.writeTree,Fe(t.treePath,e))}function If(t,e,n,s,i,r){return Sf(t.writeTree,t.treePath,e,n,s,i,r)}function Gi(t,e,n){return Cf(t.writeTree,t.treePath,e,n)}function ra(t,e){return oa(Fe(t.treePath,e),t.writeTree)}function oa(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Pn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,An(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,on(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Pn(s,e.snapshotNode,i.oldSnap));else throw dn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const la=new Nf;class xi{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new It(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gi(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vt(this.viewCache_),r=If(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){return{filter:t}}function Of(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Rf(t,e,n,s,i){const r=new Tf;let o,a;if(n.type===tt.OVERWRITE){const u=n;u.source.fromUser?o=pi(t,e,u.path,u.snap,s,i,r):(B(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ue(u.path),o=ys(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===tt.MERGE){const u=n;u.source.fromUser?o=Pf(t,e,u.path,u.children,s,i,r):(B(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=mi(t,e,u.path,u.children,s,i,a,r))}else if(n.type===tt.ACK_USER_WRITE){const u=n;u.revert?o=Bf(t,e,u.path,s,i,r):o=Mf(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===tt.LISTEN_COMPLETE)o=Lf(t,e,n.path,s,r);else throw dn("Unknown operation type: "+n.type);const l=r.getChanges();return Af(e,o,l),{viewCache:o,changes:l}}function Af(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ms(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Zl(ms(e)))}}function aa(t,e,n,s,i,r){const o=e.eventCache;if(bs(s,n)!=null)return e;{let a,l;if(ue(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Vt(e),d=u instanceof re?u:re.EMPTY_NODE,c=ji(s,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const u=gs(s,Vt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=ce(n);if(u===".priority"){B(kt(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=Xr(s,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=Se(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Xr(s,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Gi(s,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,r):a=o.getNode()}}return Cn(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function ys(t,e,n,s,i,r,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(ue(n))u=d.updateFullNode(l.getNode(),s,null);else if(d.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,s);u=d.updateFullNode(l.getNode(),h,null)}else{const h=ce(n);if(!l.isCompleteForPath(n)&&kt(n)>1)return e;const _=Se(n),w=l.getNode().getImmediateChild(h).updateChild(_,s);h===".priority"?u=d.updatePriority(l.getNode(),w):u=d.updateChild(l.getNode(),h,w,_,la,null)}const c=ta(e,u,l.isFullyInitialized()||ue(n),d.filtersNodes()),f=new xi(i,c,r);return aa(t,c,n,i,f,a)}function pi(t,e,n,s,i,r,o){const a=e.eventCache;let l,u;const d=new xi(i,e,r);if(ue(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Cn(e,u,!0,t.filter.filtersNodes());else{const c=ce(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),l=Cn(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Se(n),h=a.getNode().getImmediateChild(c);let _;if(ue(f))_=s;else{const y=d.getCompleteChild(c);y!=null?zl(f)===".priority"&&y.getChild(Ul(f)).isEmpty()?_=y:_=y.updateChild(f,s):_=re.EMPTY_NODE}if(h.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),c,_,f,d,o);l=Cn(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Jr(t,e){return t.eventCache.isCompleteForChild(e)}function Pf(t,e,n,s,i,r,o){let a=e;return s.foreach((l,u)=>{const d=Fe(n,l);Jr(e,ce(d))&&(a=pi(t,a,d,u,i,r,o))}),s.foreach((l,u)=>{const d=Fe(n,l);Jr(e,ce(d))||(a=pi(t,a,d,u,i,r,o))}),a}function Zr(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function mi(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ue(n)?u=s:u=new Ie(null).setTree(n,s);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const h=e.serverCache.getNode().getImmediateChild(c),_=Zr(t,h,f);l=ys(t,l,new Ce(c),_,i,r,o,a)}}),u.children.inorderTraversal((c,f)=>{const h=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!h){const _=e.serverCache.getNode().getImmediateChild(c),y=Zr(t,_,f);l=ys(t,l,new Ce(c),y,i,r,o,a)}}),l}function Mf(t,e,n,s,i,r,o){if(bs(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ys(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ue(n)){let u=new Ie(null);return l.getNode().forEachChild(yt,(d,c)=>{u=u.set(new Ce(d),c)}),mi(t,e,n,u,i,r,a,o)}else return e}else{let u=new Ie(null);return s.foreach((d,c)=>{const f=Fe(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),mi(t,e,n,u,i,r,a,o)}}function Lf(t,e,n,s,i){const r=e.serverCache,o=ta(e,r.getNode(),r.isFullyInitialized()||ue(n),r.isFiltered());return aa(t,o,n,s,la,i)}function Bf(t,e,n,s,i,r){let o;if(bs(s,n)!=null)return e;{const a=new xi(s,e,i),l=e.eventCache.getNode();let u;if(ue(n)||ce(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=gs(s,Vt(e));else{const c=e.serverCache.getNode();B(c instanceof re,"serverChildren would be complete if leaf node"),d=ji(s,c)}d=d,u=t.filter.updateFullNode(l,d,r)}else{const d=ce(n);let c=Gi(s,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,Se(n),a,r):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,re.EMPTY_NODE,Se(n),a,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gs(s,Vt(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||bs(s,ge())!=null,Cn(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new zi(s.getIndex()),r=ef(s);this.processor_=Df(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(re.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(re.EMPTY_NODE,a.getNode(),null),d=new It(l,o.isFullyInitialized(),i.filtersNodes()),c=new It(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ns(c,d),this.eventGenerator_=new uf(this.query_)}get query(){return this.query_}}function Wf(t){return t.viewCache_.serverCache.getNode()}function qf(t){return ms(t.viewCache_)}function zf(t,e){const n=Vt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function $r(t){return t.eventRegistrations_.length===0}function Hf(t,e){t.eventRegistrations_.push(e)}function eo(t,e,n){const s=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function to(t,e,n,s){e.type===tt.MERGE&&e.source.queryId!==null&&(B(Vt(t.viewCache_),"We should always have a full cache before handling merges"),B(ms(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Rf(t.processor_,i,e,n,s);return Of(t.processor_,r.viewCache),B(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ua(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Uf(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(r,o)=>{s.push(on(r,o))}),n.isFullyInitialized()&&s.push(Zl(n.getNode())),ua(t,s,n.getNode(),e)}function ua(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return cf(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs;class ca{constructor(){this.views=new Map}}function Vf(t){B(!vs,"__referenceConstructor has already been defined"),vs=t}function jf(){return B(vs,"Reference.ts has not been loaded"),vs}function Gf(t){return t.views.size===0}function Yi(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return B(r!=null,"SyncTree gave us an op for an invalid query."),to(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(to(o,e,n,s));return r}}function da(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=gs(n,i?s:null),l=!1;a?l=!0:s instanceof re?(a=ji(n,s),l=!1):(a=re.EMPTY_NODE,l=!1);const u=Ns(new It(a,l,!1),new It(s,i,!1));return new Ff(e,u)}return o}function xf(t,e,n,s,i,r){const o=da(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Hf(o,n),Uf(o,n)}function Yf(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Tt(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(eo(u,n,s)),$r(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(eo(l,n,s)),$r(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Tt(t)&&r.push(new(jf())(e._repo,e._path)),{removed:r,events:o}}function fa(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wt(t,e){let n=null;for(const s of t.views.values())n=n||zf(s,e);return n}function ha(t,e){if(e._queryParams.loadsAllData())return Os(t);{const s=e._queryIdentifier;return t.views.get(s)}}function _a(t,e){return ha(t,e)!=null}function Tt(t){return Os(t)!=null}function Os(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;function Kf(t){B(!ws,"__referenceConstructor has already been defined"),ws=t}function Qf(){return B(ws,"Reference.ts has not been loaded"),ws}let Xf=1;class no{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=kf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pa(t,e,n,s,i){return _f(t.pendingWriteTree_,e,n,s,i),i?xn(t,new Ut(ea(),e,n)):[]}function Lt(t,e,n=!1){const s=pf(t.pendingWriteTree_,e);if(mf(t.pendingWriteTree_,e)){let r=new Ie(null);return s.snap!=null?r=r.set(ge(),!0):Xe(s.children,o=>{r=r.set(new Ce(o),!0)}),xn(t,new ps(s.path,r,n))}else return[]}function Gn(t,e,n){return xn(t,new Ut(Ui(),e,n))}function Jf(t,e,n){const s=Ie.fromObject(n);return xn(t,new Bn(Ui(),e,s))}function Zf(t,e){return xn(t,new Ln(Ui(),e))}function $f(t,e,n){const s=Qi(t,n);if(s){const i=Xi(s),r=i.path,o=i.queryId,a=Ge(r,e),l=new Ln(Vi(o),a);return Ji(t,r,l)}else return[]}function ma(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||_a(o,e))){const l=Yf(o,e,n,s);Gf(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(r,(f,h)=>Tt(h));if(d&&!c){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const h=sh(f);for(let _=0;_<h.length;++_){const y=h[_],w=y.query,v=va(t,y);t.listenProvider_.startListening(Sn(w),Fn(t,w),v.hashFn,v.onComplete)}}}!c&&u.length>0&&!s&&(d?t.listenProvider_.stopListening(Sn(e),null):u.forEach(f=>{const h=t.queryToTagMap.get(Rs(f));t.listenProvider_.stopListening(Sn(f),h)}))}ih(t,u)}return a}function ga(t,e,n,s){const i=Qi(t,s);if(i!=null){const r=Xi(i),o=r.path,a=r.queryId,l=Ge(o,e),u=new Ut(Vi(a),l,n);return Ji(t,o,u)}else return[]}function eh(t,e,n,s){const i=Qi(t,s);if(i){const r=Xi(i),o=r.path,a=r.queryId,l=Ge(o,e),u=Ie.fromObject(n),d=new Bn(Vi(a),l,u);return Ji(t,o,d)}else return[]}function th(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,h)=>{const _=Ge(f,i);r=r||wt(h,_),o=o||Tt(h)});let a=t.syncPointTree_.get(i);a?(o=o||Tt(a),r=r||wt(a,ge())):(a=new ca,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=re.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,_)=>{const y=wt(_,ge());y&&(r=r.updateImmediateChild(h,y))}));const u=_a(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Rs(e);B(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=rh();t.queryToTagMap.set(f,h),t.tagToQueryMap.set(h,f)}const d=Ds(t.pendingWriteTree_,i);let c=xf(a,e,n,d,r,l);if(!u&&!o&&!s){const f=ha(a,e);c=c.concat(oh(t,e,f))}return c}function Ki(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ge(o,e),u=wt(a,l);if(u)return u});return ia(i,e,r,n,!0)}function nh(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Ge(u,n);s=s||wt(d,c)});let i=t.syncPointTree_.get(n);i?s=s||wt(i,ge()):(i=new ca,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new It(s,!0,!1):null,a=Ds(t.pendingWriteTree_,e._path),l=da(i,e,a,r?o.getNode():re.EMPTY_NODE,r);return qf(l)}function xn(t,e){return ba(e,t.syncPointTree_,null,Ds(t.pendingWriteTree_,ge()))}function ba(t,e,n,s){if(ue(t.path))return ya(t,e,n,s);{const i=e.get(ge());n==null&&i!=null&&(n=wt(i,ge()));let r=[];const o=ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=ra(s,o);r=r.concat(ba(a,l,u,d))}return i&&(r=r.concat(Yi(i,t,s,n))),r}}function ya(t,e,n,s){const i=e.get(ge());n==null&&i!=null&&(n=wt(i,ge()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=ra(s,o),d=t.operationForChild(o);d&&(r=r.concat(ya(d,a,l,u)))}),i&&(r=r.concat(Yi(i,t,s,n))),r}function va(t,e){const n=e.query,s=Fn(t,n);return{hashFn:()=>(Wf(e)||re.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?$f(t,n._path,s):Zf(t,n._path);{const r=td(i,n);return ma(t,n,null,r)}}}}function Fn(t,e){const n=Rs(e);return t.queryToTagMap.get(n)}function Rs(t){return t._path.toString()+"$"+t._queryIdentifier}function Qi(t,e){return t.tagToQueryMap.get(e)}function Xi(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function Ji(t,e,n){const s=t.syncPointTree_.get(e);B(s,"Missing sync point for query tag that we're tracking");const i=Ds(t.pendingWriteTree_,e);return Yi(s,n,i,null)}function sh(t){return t.fold((e,n,s)=>{if(n&&Tt(n))return[Os(n)];{let i=[];return n&&(i=fa(n)),Xe(s,(r,o)=>{i=i.concat(o)}),i}})}function Sn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Qf())(t._repo,t._path):t}function ih(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Rs(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function rh(){return Xf++}function oh(t,e,n){const s=e._path,i=Fn(t,e),r=va(t,n),o=t.listenProvider_.startListening(Sn(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)B(!Tt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!ue(u)&&d&&Tt(d))return[Os(d).query];{let f=[];return d&&(f=f.concat(fa(d).map(h=>h.query))),Xe(c,(h,_)=>{f=f.concat(_)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Sn(d),Fn(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zi(n)}node(){return this.node_}}class $i{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Fe(this.path_,e);return new $i(this.syncTree_,n)}node(){return Ki(this.syncTree_,this.path_)}}const lh=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},so=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ah(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uh(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ah=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},uh=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&B(!1,"Unexpected increment value: "+s);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ch=function(t,e,n,s){return er(e,new $i(n,t),s)},wa=function(t,e,n){return er(t,new Zi(e),n)};function er(t,e,n){const s=t.getPriority().val(),i=so(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=so(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new We(a,ze(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new We(i))),o.forEachChild(Oe,(a,l)=>{const u=er(l,e.getImmediateChild(a),n);u!==l&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function nr(t,e){let n=e instanceof Ce?e:new Ce(e),s=t,i=ce(n);for(;i!==null;){const r=rn(s.node.children,i)||{children:{},childCount:0};s=new tr(i,s,r),n=Se(n),i=ce(n)}return s}function _n(t){return t.node.value}function Ca(t,e){t.node.value=e,gi(t)}function Ea(t){return t.node.childCount>0}function dh(t){return _n(t)===void 0&&!Ea(t)}function As(t,e){Xe(t.node.children,(n,s)=>{e(new tr(n,t,s))})}function Sa(t,e,n,s){n&&!s&&e(t),As(t,i=>{Sa(i,e,!0,s)}),n&&s&&e(t)}function fh(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Yn(t){return new Ce(t.parent===null?t.name:Yn(t.parent)+"/"+t.name)}function gi(t){t.parent!==null&&hh(t.parent,t.name,t)}function hh(t,e,n){const s=dh(n),i=at(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,gi(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gi(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=/[\[\].#$\/\u0000-\u001F\u007F]/,ph=/[\[\].#$\u0000-\u001F\u007F]/,Xs=10*1024*1024,ka=function(t){return typeof t=="string"&&t.length!==0&&!_h.test(t)},Ia=function(t){return typeof t=="string"&&t.length!==0&&!ph.test(t)},mh=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ia(t)},io=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Pi(t)||t&&typeof t=="object"&&at(t,".sv")},Ta=function(t,e,n,s){s&&e===void 0||sr(Ri(t,"value"),e,n)},sr=function(t,e,n){const s=n instanceof Ce?new Md(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Pt(s)+" with contents = "+e.toString());if(Pi(e))throw new Error(t+"contains "+e.toString()+" "+Pt(s));if(typeof e=="string"&&e.length>Xs/3&&Is(e)>Xs)throw new Error(t+"contains a string greater than "+Xs+" utf8 bytes "+Pt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ka(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ld(s,o),sr(t,a,s),Bd(s)}),i&&r)throw new Error(t+' contains ".value" child '+Pt(s)+" in addition to actual children.")}},Na=function(t,e,n,s){if(!(s&&n===void 0)&&!Ia(n))throw new Error(Ri(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gh=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Na(t,e,n,s)},ir=function(t,e){if(ce(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},bh=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ka(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mh(n))throw new Error(Ri(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Da(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Vl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ot(t,e,n){Da(t,n),vh(t,s=>et(s,e)||et(e,s))}function vh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(wh(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function wh(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ft&&Ue("event: "+n.toString()),hn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="repo_interrupt",Eh=25;class Sh{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_s(),this.transactionQueueTree_=new tr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kh(t,e,n){if(t.stats_=Bi(t.repoInfo_),t.forceRestClient_||rd())t.server_=new hs(t.repoInfo_,(s,i,r,o)=>{ro(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>oo(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new dt(t.repoInfo_,e,(s,i,r,o)=>{ro(t,s,i,r,o)},s=>{oo(t,s)},s=>{Ih(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=cd(t.repoInfo_,()=>new af(t.stats_,t.server_)),t.infoData_=new nf,t.infoSyncTree_=new no({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Gn(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),or(t,"connected",!1),t.serverSyncTree_=new no({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const u=o(a,l);ot(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Oa(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rr(t){return lh({timestamp:Oa(t)})}function ro(t,e,n,s,i){t.dataUpdateCount++;const r=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ls(n,u=>ze(u));o=eh(t.serverSyncTree_,r,l,i)}else{const l=ze(n);o=ga(t.serverSyncTree_,r,l,i)}else if(s){const l=ls(n,u=>ze(u));o=Jf(t.serverSyncTree_,r,l)}else{const l=ze(n);o=Gn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ms(t,r)),ot(t.eventQueue_,a,o)}function oo(t,e){or(t,"connected",e),e===!1&&Dh(t)}function Ih(t,e){Xe(e,(n,s)=>{or(t,n,s)})}function or(t,e,n){const s=new Ce("/.info/"+e),i=ze(n);t.infoData_.updateSnapshot(s,i);const r=Gn(t.infoSyncTree_,s,i);ot(t.eventQueue_,s,r)}function Ra(t){return t.nextWriteId_++}function Th(t,e,n){const s=nh(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ze(i).withIndex(e._queryParams.getIndex());th(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Gn(t.serverSyncTree_,e._path,r);else{const a=Fn(t.serverSyncTree_,e);o=ga(t.serverSyncTree_,e._path,r,a)}return ot(t.eventQueue_,e._path,o),ma(t.serverSyncTree_,e,n,null,!0),r},i=>(Ps(t,"get for query "+Be(e)+" failed: "+i),Promise.reject(new Error(i))))}function Nh(t,e,n,s,i){Ps(t,"set",{path:e.toString(),value:n,priority:s});const r=rr(t),o=ze(n,s),a=Ki(t.serverSyncTree_,e),l=wa(o,a,r),u=Ra(t),d=pa(t.serverSyncTree_,e,l,u,!0);Da(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,h)=>{const _=f==="ok";_||Qe("set at "+e+" failed: "+f);const y=Lt(t.serverSyncTree_,u,!_);ot(t.eventQueue_,e,y),Rh(t,i,f,h)});const c=Ba(t,e);Ms(t,c),ot(t.eventQueue_,c,[])}function Dh(t){Ps(t,"onDisconnectEvents");const e=rr(t),n=_s();fi(t.onDisconnect_,ge(),(i,r)=>{const o=ch(i,r,t.serverSyncTree_,e);$l(n,i,o)});let s=[];fi(n,ge(),(i,r)=>{s=s.concat(Gn(t.serverSyncTree_,i,r));const o=Ba(t,i);Ms(t,o)}),t.onDisconnect_=_s(),ot(t.eventQueue_,ge(),s)}function Oh(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ch)}function Ps(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ue(n,...e)}function Rh(t,e,n,s){e&&hn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Aa(t,e,n){return Ki(t.serverSyncTree_,e,n)||re.EMPTY_NODE}function lr(t,e=t.transactionQueueTree_){if(e||Ls(t,e),_n(e)){const n=Ma(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ah(t,Yn(e),n)}else Ea(e)&&As(e,n=>{lr(t,n)})}function Ah(t,e,n){const s=n.map(u=>u.currentWriteId),i=Aa(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];B(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ge(e,d.path);r=r.updateChild(c,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ps(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Lt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ls(t,nr(t.transactionQueueTree_,e)),lr(t,t.transactionQueueTree_),ot(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)hn(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Qe("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ms(t,e)}},o)}function Ms(t,e){const n=Pa(t,e),s=Yn(n),i=Ma(t,n);return Ph(t,i,s),s}function Ph(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ge(n,l.path);let d=!1,c;if(B(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Lt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Eh)d=!0,c="maxretry",i=i.concat(Lt(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Aa(t,l.path,o);l.currentInputSnapshot=f;const h=e[a].update(f.val());if(h!==void 0){sr("transaction failed: Data returned ",h,l.path);let _=ze(h);typeof h=="object"&&h!=null&&at(h,".priority")||(_=_.updatePriority(f.getPriority()));const w=l.currentWriteId,v=rr(t),N=wa(_,f,v);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=N,l.currentWriteId=Ra(t),o.splice(o.indexOf(w),1),i=i.concat(pa(t.serverSyncTree_,l.path,N,l.currentWriteId,l.applyLocally)),i=i.concat(Lt(t.serverSyncTree_,w,!0))}else d=!0,c="nodata",i=i.concat(Lt(t.serverSyncTree_,l.currentWriteId,!0))}ot(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(c),!1,null))))}Ls(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)hn(s[a]);lr(t,t.transactionQueueTree_)}function Pa(t,e){let n,s=t.transactionQueueTree_;for(n=ce(e);n!==null&&_n(s)===void 0;)s=nr(s,n),e=Se(e),n=ce(e);return s}function Ma(t,e){const n=[];return La(t,e,n),n.sort((s,i)=>s.order-i.order),n}function La(t,e,n){const s=_n(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);As(e,i=>{La(t,i,n)})}function Ls(t,e){const n=_n(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ca(e,n.length>0?n:void 0)}As(e,s=>{Ls(t,s)})}function Ba(t,e){const n=Yn(Pa(t,e)),s=nr(t.transactionQueueTree_,e);return fh(s,i=>{Js(t,i)}),Js(t,s),Sa(s,i=>{Js(t,i)}),n}function Js(t,e){const n=_n(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Lt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ca(e,void 0):n.length=r+1,ot(t.eventQueue_,Yn(e),i);for(let o=0;o<s.length;o++)hn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Lh(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const lo=function(t,e){const n=Bh(t),s=n.namespace;n.domain==="firebase.com"&&ht(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Xc();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Rl(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ce(n.pathString)}},Bh=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Mh(t.substring(d,c)));const f=Lh(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const h=e.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Fh=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ao.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ao.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class qh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Bs{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ue(this._path)?null:zl(this._path)}get ref(){return new pt(this._repo,this._path)}get _queryIdentifier(){const e=Gr(this._queryParams),n=Mi(e);return n==="{}"?"default":n}get _queryObject(){return Gr(this._queryParams)}isEqual(e){if(e=Dt(e),!(e instanceof Bs))return!1;const n=this._repo===e._repo,s=Vl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Pd(this._path)}}function Hh(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Uh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===yt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Ht)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==St)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Oe){if(e!=null&&!io(e)||n!=null&&!io(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(B(t.getIndex()instanceof Xl||t.getIndex()===Jl,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class pt extends Bs{constructor(e,n){super(e,n,new Hi,!1)}get parent(){const e=Ul(this._path);return e===null?null:new pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ce(e),s=_t(this.ref,e);return new Wn(this._node.getChild(n),s,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Wn(i,_t(this.ref,s),Oe)))}hasChild(e){const n=new Ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function an(t,e){return t=Dt(t),t._checkNotDeleted("ref"),e!==void 0?_t(t._root,e):t._root}function _t(t,e){return t=Dt(t),ce(t._path)===null?gh("child","path",e,!1):Na("child","path",e,!1),new pt(t._repo,Fe(t._path,e))}function Vh(t,e){t=Dt(t),ir("push",t._path),Ta("push",e,t._path,!0);const n=Oa(t._repo),s=Fh(n),i=_t(t,s),r=_t(t,s);let o;return e!=null?o=Fs(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function jh(t){return ir("remove",t._path),Fs(t,null)}function Fs(t,e){t=Dt(t),ir("set",t._path),Ta("set",e,t._path,!1);const n=new ks;return Nh(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Fa(t){t=Dt(t);const e=new zh(()=>{}),n=new ar(e);return Th(t._repo,t,n).then(s=>new Wn(s,new pt(t._repo,t._path),t._queryParams.getIndex()))}class ar{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Wh("value",this,new Wn(e.snapshotNode,new pt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qh(this,e,n):null}matches(e){return e instanceof ar?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Gh{}class xh extends Gh{_apply(e){Hh(e,"orderByKey");const n=tf(e._queryParams,yt);return Uh(n),new Bs(e._repo,e._path,n,!0)}}function Wa(){return new xh}function qa(t,...e){let n=Dt(t);for(const s of e)n=s._apply(n);return n}Vf(pt);Kf(pt);/**
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
 */const Yh="FIREBASE_DATABASE_EMULATOR_HOST",bi={};let Kh=!1;function Qh(t,e,n,s){t.repoInfo_=new Rl(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Xh(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lo(r,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[Yh]),u?(l=!0,r=`http://${u}?ns=${a.namespace}`,o=lo(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new sn(sn.OWNER):new ld(t.name,t.options,e);bh("Invalid Firebase Database URL",o),ue(o.path)||ht("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Zh(a,t,d,new od(t.name,n));return new $h(c,t)}function Jh(t,e){const n=bi[e];(!n||n[t.key]!==t)&&ht(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Oh(t),delete n[t.key]}function Zh(t,e,n,s){let i=bi[e.name];i||(i={},bi[e.name]=i);let r=i[t.toURLString()];return r&&ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Sh(t,Kh,n,s),i[t.toURLString()]=r,r}class $h{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pt(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Jh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ht("Cannot call "+e+" on a deleted database.")}}function e_(t=Pc(),e){const n=Dc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=wu("database");s&&t_(n,...s)}return n}function t_(t,e,n,s={}){t=Dt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ht("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new sn(sn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Cu(s.mockUserToken,t.app.options.projectId);r=new sn(o)}Qh(i,e,n,r)}/**
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
 */function n_(t){Gc(Ac),us(new Dn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Xh(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tn(Nr,Dr,t),tn(Nr,Dr,"esm2017")}dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};n_();const s_={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};let yi={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},vi=["head","body","legs","feet","neck","back","ring","misc"],ur={name:"",stats:{armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0},image:"",link:""},cr={name:"",info:{type:"",special:""},moves:[],image:"",link:""},qn=[...Array(5).keys()].map(t=>++t),un=e_(_l(s_));function za(t,e){let n=!1;for(let s of[t,e])for(let i in s)if(s[i].name){n=!0;break}el.set(n),Ye.set(null),window.history.replaceState(null,null,location.origin+location.pathname)}function dr(t,e){let n=2.8,s=e.split(" ").length,i=t.querySelector("span");if(i.style.removeProperty("font-size"),s>2&&e.length/s>=5){for(;i.offsetHeight>t.offsetHeight*.75;)n-=.05,i.style.fontSize=`calc(var(--u) * ${n})`;return n<2.8}return null}function i_(t,e){let n=2.8,s=t.querySelector("span");for(s.style.removeProperty("font-size");s.offsetWidth>t.offsetWidth;)n-=.05,s.style.fontSize=`calc(var(--u) * ${n})`;for(;s.offsetHeight>t.offsetHeight*.75&&e;)console.log("C"),n-=.05,s.style.fontSize=`calc(var(--u) * ${n})`;return n<2.8?n:null}function r_(t){let e=2.35,n=t.querySelector(".tooltip");for(n.style.removeProperty("font-size");n.offsetHeight>t.offsetHeight*1.125;)e-=.02,n.style.fontSize=`calc(var(--u) * ${e})`}function o_(t){document.activeElement==document.body&&t.key=="Tab"&&(t.preventDefault(),document.querySelector(`.promptCont [id*='${t.shiftKey?"last":"first"}Focusable']`).focus())}function Ha(t,e){let n=t.toLowerCase();for(let s in e)s.toLowerCase().includes(n)?e[s].classList.remove("hidden"):e[s].classList.add("hidden")}function Cs(t,e){e&&setTimeout(()=>{t.focus(),t.click(),t.select()})}function Gt(t){t.shiftKey&&t.key=="Tab"&&t.preventDefault()}function pn(t){t.key=="Tab"&&!t.shiftKey&&t.preventDefault()}function Es(t,e){let n=/[^a-zA-Z0-9~!#$%^&*()\-_+[\]{}\\|;:'",.<>/? ]/g;return t.replace(n,"").replaceAll(`
`,"").replace(/^ /,"").slice(0,e)}function wi(t,e,n){(!t.maxLength||t.maxLength!=n)&&e.length>=n&&(t.maxLength=n)}function Ua(t,e){t={...t},e={...e};for(let n of vi)t[n]?t[n]=t[n].name:t[n]="";for(let n of qn)e[n]?e[n]=e[n].name:e[n]="";return{eq:t,gear:e}}function fr(){window.history.replaceState(null,null,location.origin+location.pathname+"?ls=true")}function l_(t){let e,n,s,i,r,o,a,l;return{c(){e=g("li"),n=g("button"),s=g("img"),r=M(),o=g("span"),o.textContent=`${t[3]}`,Je(s.src,i=t[0].image)||m(s,"src",i),m(s,"alt",""),J(e,"selectedItem",t[2])},m(u,d){W(u,e,d),p(e,n),p(n,s),p(n,r),p(n,o),t[8](e),a||(l=[xo(t[4].call(null,o)),D(n,"click",t[5])],a=!0)},p(u,[d]){d&1&&!Je(s.src,i=u[0].image)&&m(s,"src",i),d&4&&J(e,"selectedItem",u[2])},i:X,o:X,d(u){u&&L(e),t[8](null),a=!1,be(l)}}}function a_(t,e,n){let s,i,r,o;K(t,Xt,v=>n(9,s=v)),K(t,ft,v=>n(10,i=v)),K(t,Et,v=>n(11,r=v)),K(t,Di,v=>n(12,o=v));let{itemData:a,slotOpen:l,eqSlotName:u}=e;const d=Nt();let c,f=!1,h=a.name;function _(v){setTimeout(()=>{dr(c,h)&&o.push({node:c,itemName:h})})}function y(v){if(l||!l&&v.isTrusted==!1){d("itemSelect",{element:c,trusted:v.isTrusted}),c.classList.contains("selectedItem")||n(2,f=!1),n(2,f=!f),n(6,l=!1),U(ft,i[u]=f?a:ur,i),za(i,r);for(let N of Object.keys(yi)){U(Xt,s[N]=0,s);for(let C in i)U(Xt,s[N]+=i[C].stats[N],s),U(Xt,s[N]=Math.round(s[N]*10)/10,s)}}}function w(v){Z[v?"unshift":"push"](()=>{c=v,n(1,c)})}return t.$$set=v=>{"itemData"in v&&n(0,a=v.itemData),"slotOpen"in v&&n(6,l=v.slotOpen),"eqSlotName"in v&&n(7,u=v.eqSlotName)},[a,c,f,h,_,y,l,u,w]}class u_ extends Ne{constructor(e){super(),Te(this,e,a_,l_,de,{itemData:0,slotOpen:6,eqSlotName:7})}}function c_(t){let e,n,s,i,r,o,a,l,u;return{c(){e=g("li"),n=g("button"),s=g("img"),r=M(),o=g("span"),o.textContent=`${t[4]}`,Je(s.src,i=t[0].image)||m(s,"src",i),m(s,"alt",""),n.disabled=a=!t[3],J(e,"selectedItem",t[2]),J(e,"non-eligible",!t[3])},m(d,c){W(d,e,c),p(e,n),p(n,s),p(n,r),p(n,o),t[11](e),l||(u=[xo(t[5].call(null,o)),D(n,"click",t[6])],l=!0)},p(d,[c]){c&1&&!Je(s.src,i=d[0].image)&&m(s,"src",i),c&8&&a!==(a=!d[3])&&(n.disabled=a),c&4&&J(e,"selectedItem",d[2]),c&8&&J(e,"non-eligible",!d[3])},i:X,o:X,d(d){d&&L(e),t[11](null),l=!1,be(u)}}}function d_(t,e,n){let s,i,r;K(t,Et,C=>n(10,s=C)),K(t,ft,C=>n(12,i=C)),K(t,Di,C=>n(13,r=C));let{itemData:o,slotOpen:a,index:l,weaponExpand:u}=e;const d=Nt();let c,f=!1,h=!0,_=o.name,y={"Orange Salamander":["Green Salamander","Purple Salamander"],"Green Salamander":["Orange Salamander","Purple Salamander"],"Purple Salamander":["Orange Salamander","Green Salamander"],"White Salamander":["Black Salamander","Gold Salamander"],"Black Salamander":["White Salamander","Gold Salamander"],"Gold Salamander":["White Salamander","Black Salamander"]};function w(C){setTimeout(()=>{dr(c,_)&&r.push({node:c,itemName:_})})}function v(C){h&&(a||!a&&C.isTrusted==!1)&&(d("itemSelect",{element:c,trusted:C.isTrusted}),c.classList.contains("selectedItem")||n(2,f=!1),n(2,f=!f),n(7,a=!1),U(Et,s[l]=f?o:cr,s),za(i,s))}function N(C){Z[C?"unshift":"push"](()=>{c=C,n(1,c)})}return t.$$set=C=>{"itemData"in C&&n(0,o=C.itemData),"slotOpen"in C&&n(7,a=C.slotOpen),"index"in C&&n(8,l=C.index),"weaponExpand"in C&&n(9,u=C.weaponExpand)},t.$$.update=()=>{if(t.$$.dirty&1793&&s)for(let C in s)if(C!=l&&(s[C].name==_||y[s[C].name]&&y[s[C].name].includes(_))){n(3,h=!1);break}else!u&&!o.tool&&n(3,h=!0);if(t.$$.dirty&1793){if(u)o.tool&&n(3,h=!1);else if(o.tool)for(let C in s)if(C!=l&&s[C].name==_){n(3,h=!1);break}else n(3,h=!0)}},[o,c,f,h,_,w,v,a,l,u,s,N]}class f_ extends Ne{constructor(e){super(),Te(this,e,d_,c_,de,{itemData:0,slotOpen:7,index:8,weaponExpand:9})}}function h_(t){const e=t-1;return e*e*e+1}function je(t,{delay:e=0,duration:n=400,easing:s=Ss}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function lt(t,{delay:e=0,duration:n=400,easing:s=h_,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,u=1-i,d=a*(1-r);return{delay:e,duration:n,easing:s,css:(c,f)=>`
			transform: ${l} scale(${1-u*f});
			opacity: ${a-d*f}
		`}}function uo(t){let e,n,s,i;return{c(){e=g("img"),Je(e.src,n=t[5][t[3]])||m(e,"src",n),m(e,"alt","")},m(r,o){W(r,e,o),i=!0},p(r,o){(!i||o&8&&!Je(e.src,n=r[5][r[3]]))&&m(e,"src",n)},i(r){i||(r&&ye(()=>{i&&(s||(s=Re(e,je,{duration:150},!0)),s.run(1))}),i=!0)},o(r){r&&(s||(s=Re(e,je,{duration:150},!1)),s.run(0)),i=!1},d(r){r&&L(e),r&&s&&s.end()}}}function __(t){let e,n,s=t[5][t[3]],i,r,o=t[0].name+"",a,l,u,d=uo(t);return{c(){e=g("li"),n=g("button"),d.c(),i=M(),r=g("span"),a=se(o),J(e,"selectedItem",t[4])},m(c,f){W(c,e,f),p(e,n),d.m(n,null),p(n,i),p(n,r),p(r,a),t[8](e),l||(u=[D(n,"click",t[6]),D(e,"mouseenter",t[9]),D(e,"focusin",t[10]),D(e,"mouseleave",t[11]),D(e,"focusout",t[12])],l=!0)},p(c,[f]){f&8&&de(s,s=c[5][c[3]])?(Me(),G(d,1,1,X),Le(),d=uo(c),d.c(),z(d,1),d.m(n,i)):d.p(c,f),f&1&&o!==(o=c[0].name+"")&&ke(a,o)},i(c){z(d)},o(c){G(d)},d(c){c&&L(e),d.d(c),t[8](null),l=!1,be(u)}}}function p_(t,e,n){let s,i,r;K(t,Tn,I=>n(15,s=I)),K(t,ft,I=>n(16,i=I)),K(t,ei,I=>n(17,r=I));let{itemData:o,ddOpen:a=!1}=e,l,u=!1,d=!1,c,f=0,h=o.pieces.length,_=["head","body","legs","feet"];_=h==2?_.slice(1,3):h==3?_.slice(0,3):_;let y=[];for(let I=0;I<h;I++)y.push(r[_[I]].find(q=>q.name==o.pieces[I]).image);function w(){d?c=setInterval(()=>{n(3,f++,f),f==h&&n(3,f=0)},750):(clearInterval(c),n(3,f=0))}function v(){let I=0;for(let q=0;q<h;q++)!i[_[q]]||i[_[q]].name!=o.pieces[q]?s[_[q]][o.pieces[q]].querySelector("button").click():I++;I!=h&&n(7,a=!1)}function N(I){Z[I?"unshift":"push"](()=>{l=I,n(2,l)})}const C=()=>n(1,d=!0),T=()=>n(1,d=!0),S=()=>n(1,d=!1),P=()=>n(1,d=!1);return t.$$set=I=>{"itemData"in I&&n(0,o=I.itemData),"ddOpen"in I&&n(7,a=I.ddOpen)},t.$$.update=()=>{t.$$.dirty&2&&(d||!d)&&w()},[o,d,l,f,u,y,v,a,N,C,T,S,P]}class m_ extends Ne{constructor(e){super(),Te(this,e,p_,__,de,{itemData:0,ddOpen:7})}}function co(t,e,n){const s=t.slice();return s[36]=e[n],s}function g_(t){return{c:X,m:X,p:X,i:X,o:X,d:X}}function b_(t){let e,n,s,i,r,o,a=Ve(t[35]),l=[];for(let d=0;d<a.length;d+=1)l[d]=fo(co(t,a,d));const u=d=>G(l[d],1,1,()=>{l[d]=null});return{c(){e=g("input"),n=M(),s=g("ul");for(let d=0;d<l.length;d+=1)l[d].c();m(e,"type","text"),m(e,"class","searchBarInput"),m(e,"placeholder","Search..."),J(s,"no-scrollbar",t[8].length<=4)},m(d,c){W(d,e,c),t[19](e),W(d,n,c),W(d,s,c);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(s,null);t[24](s),i=!0,r||(o=[D(e,"keydown",t[11]),D(e,"input",t[12])],r=!0)},p(d,c){if(c[0]&9743){a=Ve(d[35]);let f;for(f=0;f<a.length;f+=1){const h=co(d,a,f);l[f]?(l[f].p(h,c),z(l[f],1)):(l[f]=fo(h),l[f].c(),z(l[f],1),l[f].m(s,null))}for(Me(),f=a.length;f<l.length;f+=1)u(f);Le()}(!i||c[0]&256)&&J(s,"no-scrollbar",d[8].length<=4)},i(d){if(!i){for(let c=0;c<a.length;c+=1)z(l[c]);i=!0}},o(d){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)G(l[c]);i=!1},d(d){d&&(L(e),L(n),L(s)),t[19](null),Ct(l,d),t[24](null),r=!1,be(o)}}}function y_(t){let e,n,s;function i(o){t[23](o)}let r={itemData:t[36],eqSlotName:t[2]};return t[0]!==void 0&&(r.slotOpen=t[0]),e=new u_({props:r}),Z.push(()=>we(e,"slotOpen",i)),e.$on("itemSelect",t[13]),{c(){me(e.$$.fragment)},m(o,a){_e(e,o,a),s=!0},p(o,a){const l={};a[0]&516&&(l.itemData=o[36]),a[0]&4&&(l.eqSlotName=o[2]),!n&&a[0]&1&&(n=!0,l.slotOpen=o[0],ve(()=>n=!1)),e.$set(l)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){pe(e,o)}}}function v_(t){let e,n,s;function i(o){t[22](o)}let r={itemData:t[36]};return t[0]!==void 0&&(r.ddOpen=t[0]),e=new m_({props:r}),Z.push(()=>we(e,"ddOpen",i)),{c(){me(e.$$.fragment)},m(o,a){_e(e,o,a),s=!0},p(o,a){const l={};a[0]&516&&(l.itemData=o[36]),!n&&a[0]&1&&(n=!0,l.ddOpen=o[0],ve(()=>n=!1)),e.$set(l)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){pe(e,o)}}}function w_(t){let e,n,s,i;function r(l){t[20](l)}function o(l){t[21](l)}let a={itemData:t[36],index:t[3]};return t[0]!==void 0&&(a.slotOpen=t[0]),t[1]!==void 0&&(a.weaponExpand=t[1]),e=new f_({props:a}),Z.push(()=>we(e,"slotOpen",r)),Z.push(()=>we(e,"weaponExpand",o)),e.$on("itemSelect",t[13]),{c(){me(e.$$.fragment)},m(l,u){_e(e,l,u),i=!0},p(l,u){const d={};u[0]&516&&(d.itemData=l[36]),u[0]&8&&(d.index=l[3]),!n&&u[0]&1&&(n=!0,d.slotOpen=l[0],ve(()=>n=!1)),!s&&u[0]&2&&(s=!0,d.weaponExpand=l[1],ve(()=>s=!1)),e.$set(d)},i(l){i||(z(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){pe(e,l)}}}function fo(t){let e,n,s,i;const r=[w_,v_,y_],o=[];function a(l,u){return l[3]?0:l[2]=="builds"?1:2}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=Wt()},m(l,u){o[e].m(l,u),W(l,s,u),i=!0},p(l,u){let d=e;e=a(l),e===d?o[e].p(l,u):(Me(),G(o[d],1,1,()=>{o[d]=null}),Le(),n=o[e],n?n.p(l,u):(n=o[e]=r[e](l),n.c()),z(n,1),n.m(s.parentNode,s))},i(l){i||(z(n),i=!0)},o(l){G(n),i=!1},d(l){l&&L(s),o[e].d(l)}}}function C_(t){let e;return{c(){e=g("span"),e.textContent="Loading items...",m(e,"class","svelte-o6g1ik")},m(n,s){W(n,e,s)},p:X,i:X,o:X,d(n){n&&L(e)}}}function E_(t){let e,n,s,i,r,o={ctx:t,current:null,token:null,hasCatch:!1,pending:C_,then:b_,catch:g_,value:35,blocks:[,,,]};return mr(n=t[10]||t[9][t[2]],o),{c(){e=g("div"),o.block.c(),m(e,"class","dropdown svelte-o6g1ik")},m(a,l){W(a,e,l),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,s=!0,i||(r=[D(e,"transitionend",t[25]),D(e,"transitioncancel",t[26])],i=!0)},p(a,l){t=a,o.ctx=t,l[0]&516&&n!==(n=t[10]||t[9][t[2]])&&mr(n,o)||au(o,t,l)},i(a){s||(z(o.block),s=!0)},o(a){for(let l=0;l<3;l+=1){const u=o.blocks[l];G(u)}s=!1},d(a){a&&L(e),o.block.d(),o.token=null,o=null,i=!1,be(r)}}}function S_(t,e,n){let s,i,r,o,a;K(t,Tn,b=>n(16,i=b)),K(t,du,b=>n(17,r=b)),K(t,rs,b=>n(18,o=b)),K(t,ei,b=>n(9,a=b));let{slotName:l,index:u,slotOpen:d,weaponExpand:c}=e;const f=Nt();u?U(rs,o[u]={},o):U(Tn,i[l]={},i);let h,_,y,w=null,v=!1,N=`https://raw.githubusercontent.com/XT8SS/fc-sv/gh-pages/ff-data/${l}.json`,C=a[l]||null,T=!1,S=[];const P=a[l]?null:fetch(N).then(async b=>{if(b.status!=200){console.error(`Failed to fetch ${(u?"weapon #":"")+l} slot data from ${N}
Response status: ${b.status}`);return}return n(15,C=await b.json()),U(ei,a[l]=C,a),C}).catch(b=>{console.error(`Failed to initiate ${(u?"weapon #":"")+l} slot data fetch from ${N}
${b}`)});function I(){y&&y.classList.remove("lastElement"),n(8,S=_.querySelectorAll("li:not(.hidden)")),y=S[S.length-1],y&&y.classList.add("lastElement"),(!y||y.classList.contains("non-eligible"))&&(y=h)}function q(b){!b.shiftKey&&b.key=="Tab"&&(b.preventDefault(),setTimeout(()=>h.focus()))}function ie(){y&&y.removeEventListener("keydown",q),I(),y&&y.addEventListener("keydown",q)}function A(b){b.shiftKey&&b.key=="Tab"&&(b.preventDefault(),setTimeout(()=>(y.querySelector("button")||y).focus()))}function F(){Ha(h.value,s),ie()}function R(b){f("itemSelect",b.detail.element),n(6,w=b.detail.element),v=b.detail.trusted;let O=_.querySelector(".selectedItem");O&&O!=b.detail.element&&O.classList.remove("selectedItem"),n(7,T=!0),v||(v=!1,Y(),_.scrollTo(0,w.offsetTop))}function Y(){n(7,T=!1),n(5,h.value="",h),F()}function Q(b){Z[b?"unshift":"push"](()=>{h=b,n(5,h)})}function k(b){d=b,n(0,d)}function x(b){c=b,n(1,c)}function ee(b){d=b,n(0,d)}function j(b){d=b,n(0,d)}function te(b){Z[b?"unshift":"push"](()=>{_=b,n(4,_)})}const fe=b=>{b.propertyName=="visibility"&&(T&&Y(),!d&&w&&_.scrollTo(0,w.offsetTop),Cs(h,d))},H=b=>{b.propertyName=="visibility"&&(n(7,T=!1),Cs(h,d))};return t.$$set=b=>{"slotName"in b&&n(2,l=b.slotName),"index"in b&&n(3,u=b.index),"slotOpen"in b&&n(0,d=b.slotOpen),"weaponExpand"in b&&n(1,c=b.weaponExpand)},t.$$.update=()=>{if(t.$$.dirty[0]&458764&&(s=u?o[u]:l=="builds"?r:i[l]),t.$$.dirty[0]&32784&&_){n(8,S=_.querySelectorAll("li:not(.hidden)"));for(let b=0;b<_.childElementCount;b++)s[C[b].name]=_.children[b];I(),ie()}},[d,c,l,u,_,h,w,T,S,a,P,A,F,R,Y,C,i,r,o,Q,k,x,ee,j,te,fe,H]}class hr extends Ne{constructor(e){super(),Te(this,e,S_,E_,de,{slotName:2,index:3,slotOpen:0,weaponExpand:1},null,[-1,-1])}}function ho(t){let e,n,s,i,r,o,a=t[1].name+"",l,u,d,c,f,h;return{c(){e=g("a"),n=g("img"),r=M(),o=g("span"),l=se(a),Je(n.src,s=t[1].image)||m(n,"src",s),m(n,"alt",i=t[1].name),m(n,"draggable","false"),m(n,"class","svelte-1j6yuis"),m(o,"class","tooltip"),m(o,"id","left"),m(e,"href",u=t[1].link),m(e,"target","_blank"),m(e,"class","svelte-1j6yuis"),De(e,"display",t[1].link?"":"none")},m(_,y){W(_,e,y),p(e,n),p(e,r),p(e,o),p(o,l),c=!0,f||(h=[D(e,"focusin",t[11]),D(e,"outroend",t[12])],f=!0)},p(_,y){(!c||y&2&&!Je(n.src,s=_[1].image))&&m(n,"src",s),(!c||y&2&&i!==(i=_[1].name))&&m(n,"alt",i),(!c||y&2)&&a!==(a=_[1].name+"")&&ke(l,a),(!c||y&2&&u!==(u=_[1].link))&&m(e,"href",u),y&2&&De(e,"display",_[1].link?"":"none")},i(_){c||(_&&ye(()=>{c&&(d||(d=Re(e,je,{duration:150},!0)),d.run(1))}),c=!0)},o(_){_&&(d||(d=Re(e,je,{duration:150},!1)),d.run(0)),c=!1},d(_){_&&L(e),_&&d&&d.end(),f=!1,be(h)}}}function k_(t){let e,n,s=t[1],i,r,o,a=t[0].charAt(0).toUpperCase()+t[0].slice(1)+"",l,u,d,c,f,h,_,y,w,v,N,C=ho(t);function T(P){t[17](P)}let S={slotName:t[0],index:null,weaponExpand:null};return t[5]!==void 0&&(S.slotOpen=t[5]),_=new hr({props:S}),Z.push(()=>we(_,"slotOpen",T)),_.$on("itemSelect",t[18]),{c(){e=g("div"),n=g("div"),C.c(),r=M(),o=g("button"),l=se(a),u=M(),d=g("iconify-icon"),c=M(),f=g("button"),f.innerHTML='<iconify-icon icon="maki:cross" class="svelte-1j6yuis"></iconify-icon> <span class="tooltip" id="top">Clear selection</span>',h=M(),me(_.$$.fragment),m(n,"class","eqSlotIcon ff-border svelte-1j6yuis"),ye(()=>t[14].call(n)),De(n,"min-width",`${t[4]}px`),qt(d,"icon","iconamoon:arrow-down-2-fill"),qt(d,"class","svelte-1j6yuis"),m(o,"class","ddButton svelte-1j6yuis"),m(f,"class","clearButton svelte-1j6yuis"),m(e,"class","eqSlotCont svelte-1j6yuis"),J(e,"slotOpen",t[5]),J(e,"clearAllowed",t[6]&&t[7])},m(P,I){W(P,e,I),p(e,n),C.m(n,null),t[13](n),i=rt(n,t[14].bind(n)),p(e,r),p(e,o),p(o,l),p(o,u),p(o,d),p(e,c),p(e,f),p(e,h),_e(_,e,null),t[19](e),w=!0,v||(N=[D(window,"mousedown",t[9]),D(window,"keydown",t[10]),D(o,"click",t[15]),D(f,"click",t[16]),D(e,"keydown",t[20]),D(e,"mouseenter",t[21]),D(e,"mouseleave",t[22])],v=!0)},p(P,[I]){I&2&&de(s,s=P[1])?(Me(),G(C,1,1,X),Le(),C=ho(P),C.c(),z(C,1),C.m(n,null)):C.p(P,I),I&16&&De(n,"min-width",`${P[4]}px`),(!w||I&1)&&a!==(a=P[0].charAt(0).toUpperCase()+P[0].slice(1)+"")&&ke(l,a);const q={};I&1&&(q.slotName=P[0]),!y&&I&32&&(y=!0,q.slotOpen=P[5],ve(()=>y=!1)),_.$set(q),(!w||I&32)&&J(e,"slotOpen",P[5]),(!w||I&192)&&J(e,"clearAllowed",P[6]&&P[7])},i(P){w||(z(C),z(_.$$.fragment,P),w=!0)},o(P){G(C),G(_.$$.fragment,P),w=!1},d(P){P&&L(e),C.d(P),t[13](null),i(),pe(_),t[19](null),v=!1,be(N)}}}function I_(t,e,n){let s;K(t,ft,A=>n(8,s=A));let{eqSlotName:i}=e,r,o,a,l=ur,u,d,c;const f=A=>{(!r.contains(A.target)||A.target==r||A.target==o)&&(n(5,u=!1),A.target!=r&&A.target!=o&&n(6,d=!1))},h=A=>{A.key=="Tab"&&setTimeout(()=>{n(6,d=r.contains(document.activeElement))})},_=A=>{A.relatedTarget==null&&n(6,d=!0)},y=()=>{setTimeout(()=>{r_(o)})};function w(A){Z[A?"unshift":"push"](()=>{o=A,n(3,o)})}function v(){a=this.offsetHeight,n(4,a)}const N=()=>n(5,u=!u),C=()=>{n(6,d=!1),r.classList.contains("clearAllowed")&&c.querySelector("button").click()};function T(A){u=A,n(5,u)}const S=A=>{setTimeout(()=>{n(7,c=A.detail.classList.contains("selectedItem")?A.detail:null)})};function P(A){Z[A?"unshift":"push"](()=>{r=A,n(2,r)})}const I=A=>{A.key=="Escape"&&n(5,u=!1)},q=()=>n(6,d=!0),ie=()=>{r.contains(document.activeElement)||n(6,d=!1)};return t.$$set=A=>{"eqSlotName"in A&&n(0,i=A.eqSlotName)},t.$$.update=()=>{t.$$.dirty&259&&s[i]&&s[i].name!=l.name&&n(1,l=s[i])},[i,l,r,o,a,u,d,c,s,f,h,_,y,w,v,N,C,T,S,P,I,q,ie]}class T_ extends Ne{constructor(e){super(),Te(this,e,I_,k_,de,{eqSlotName:0})}}function _o(t,e,n){const s=t.slice();return s[1]=e[n],s[2]=e,s[3]=n,s}function po(t){let e,n,s;function i(o){t[0](o,t[1],t[2],t[3])}let r={};return t[1]!==void 0&&(r.eqSlotName=t[1]),e=new T_({props:r}),Z.push(()=>we(e,"eqSlotName",i)),{c(){me(e.$$.fragment)},m(o,a){_e(e,o,a),s=!0},p(o,a){t=o;const l={};!n&&a&0&&(n=!0,l.eqSlotName=t[1],ve(()=>n=!1)),e.$set(l)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){pe(e,o)}}}function N_(t){let e,n,s=Ve(Array(...vi)),i=[];for(let o=0;o<s.length;o+=1)i[o]=po(_o(t,s,o));const r=o=>G(i[o],1,1,()=>{i[o]=null});return{c(){e=g("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","armorBox svelte-3p4tb9")},m(o,a){W(o,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);n=!0},p(o,[a]){if(a&0){s=Ve(Array(...vi));let l;for(l=0;l<s.length;l+=1){const u=_o(o,s,l);i[l]?(i[l].p(u,a),z(i[l],1)):(i[l]=po(u),i[l].c(),z(i[l],1),i[l].m(e,null))}for(Me(),l=s.length;l<i.length;l+=1)r(l);Le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)z(i[a]);n=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)G(i[a]);n=!1},d(o){o&&L(e),Ct(i,o)}}}function D_(t,e,n){function s(i,r,o,a){o[a]=i}return[s]}class O_ extends Ne{constructor(e){super(),Te(this,e,D_,N_,de,{})}}function R_(t){let e,n=(t[5]?`${Math.floor(t[2][t[0]]*.675+19.8)}% Reduction`:t[6])+"",s,i,r,o;return{c(){e=g("span"),s=se(n),m(e,"class","statValue svelte-16tz2kw"),m(e,"tabindex","0"),m(e,"style",i=t[5]?`font-size: ${t[3]*.7/6.85}px;`:""),J(e,"hidden",t[4]),J(e,"negative",t[6]<0),J(e,"reduction",t[5])},m(a,l){W(a,e,l),p(e,s),r||(o=[D(e,"mouseenter",t[10]),D(e,"mouseleave",t[11]),D(e,"focusin",t[12]),D(e,"focusout",t[13])],r=!0)},p(a,l){l&101&&n!==(n=(a[5]?`${Math.floor(a[2][a[0]]*.675+19.8)}% Reduction`:a[6])+"")&&ke(s,n),l&40&&i!==(i=a[5]?`font-size: ${a[3]*.7/6.85}px;`:"")&&m(e,"style",i),l&16&&J(e,"hidden",a[4]),l&64&&J(e,"negative",a[6]<0),l&32&&J(e,"reduction",a[5])},d(a){a&&L(e),r=!1,be(o)}}}function A_(t){let e,n=(t[0]!="endurance"?t[6]:t[6].toFixed(2))+"",s;return{c(){e=g("span"),s=se(n),m(e,"class","statValue svelte-16tz2kw"),J(e,"hidden",t[4]),J(e,"negative",t[6]<0)},m(i,r){W(i,e,r),p(e,s)},p(i,r){r&65&&n!==(n=(i[0]!="endurance"?i[6]:i[6].toFixed(2))+"")&&ke(s,n),r&16&&J(e,"hidden",i[4]),r&64&&J(e,"negative",i[6]<0)},d(i){i&&L(e)}}}function mo(t){let e,n=`${t[1]} Bonus`,s;return{c(){e=g("span"),s=se(n),De(e,"font-size",`${t[3]*.7/t[7][t[0]]}px`)},m(i,r){W(i,e,r),p(e,s)},p(i,r){r&2&&n!==(n=`${i[1]} Bonus`)&&ke(s,n),r&9&&De(e,"font-size",`${i[3]*.7/i[7][i[0]]}px`)},d(i){i&&L(e)}}}function P_(t){let e,n,s,i,r,o,a,l;function u(h,_){return h[0]!="armor"?A_:R_}let d=u(t),c=d(t),f=t[4]&&mo(t);return{c(){e=g("div"),n=g("img"),i=M(),c.c(),r=M(),f&&f.c(),Je(n.src,s="stats/"+t[0]+".svg")||m(n,"src",s),m(n,"alt",t[1]),m(n,"class","svelte-16tz2kw"),m(e,"id",t[0]),m(e,"class","svelte-16tz2kw"),ye(()=>t[14].call(e)),J(e,"hidden",t[6]==0)},m(h,_){W(h,e,_),p(e,n),p(e,i),c.m(e,null),p(e,r),f&&f.m(e,null),o=rt(e,t[14].bind(e)),a||(l=[D(n,"mouseenter",t[8]),D(n,"mouseleave",t[9])],a=!0)},p(h,[_]){_&1&&!Je(n.src,s="stats/"+h[0]+".svg")&&m(n,"src",s),_&2&&m(n,"alt",h[1]),d===(d=u(h))&&c?c.p(h,_):(c.d(1),c=d(h),c&&(c.c(),c.m(e,r))),h[4]?f?f.p(h,_):(f=mo(h),f.c(),f.m(e,null)):f&&(f.d(1),f=null),_&1&&m(e,"id",h[0]),_&64&&J(e,"hidden",h[6]==0)},i:X,o:X,d(h){h&&L(e),c.d(),f&&f.d(),o(),a=!1,be(l)}}}function M_(t,e,n){let s,i;K(t,Xt,N=>n(2,i=N));let{codeName:r,formalName:o}=e,a,l,u,d={armor:5.9,magicDmg:5.65,meleeDmg:5.7,rangedDmg:6.45,hpRegen:7.35,endurance:7.85,sightRange:8.45,walkSpeed:8.3,jumpPower:8.7,ammoReturn:9.3,height:6.1};const c=()=>n(4,l=!0),f=()=>n(4,l=!1),h=()=>n(5,u=!0),_=()=>n(5,u=!1),y=()=>n(5,u=!0),w=()=>n(5,u=!1);function v(){a=this.offsetWidth,n(3,a)}return t.$$set=N=>{"codeName"in N&&n(0,r=N.codeName),"formalName"in N&&n(1,o=N.formalName)},t.$$.update=()=>{t.$$.dirty&5&&n(6,s=i[r]||0)},[r,o,i,a,l,u,s,d,c,f,h,_,y,w,v]}class L_ extends Ne{constructor(e){super(),Te(this,e,M_,P_,de,{codeName:0,formalName:1})}}function go(t,e,n){const s=t.slice();return s[2]=e[n][0],s[3]=e[n][1],s[4]=e,s[5]=n,s}function bo(t){let e,n,s,i;function r(l){t[0](l,t[2],t[4],t[5])}function o(l){t[1](l,t[3],t[4],t[5])}let a={};return t[2]!==void 0&&(a.codeName=t[2]),t[3]!==void 0&&(a.formalName=t[3]),e=new L_({props:a}),Z.push(()=>we(e,"codeName",r)),Z.push(()=>we(e,"formalName",o)),{c(){me(e.$$.fragment)},m(l,u){_e(e,l,u),i=!0},p(l,u){t=l;const d={};!n&&u&0&&(n=!0,d.codeName=t[2],ve(()=>n=!1)),!s&&u&0&&(s=!0,d.formalName=t[3],ve(()=>s=!1)),e.$set(d)},i(l){i||(z(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){pe(e,l)}}}function B_(t){let e,n,s=Ve(Object.entries(yi)),i=[];for(let o=0;o<s.length;o+=1)i[o]=bo(go(t,s,o));const r=o=>G(i[o],1,1,()=>{i[o]=null});return{c(){e=g("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","statBox svelte-lu37w6")},m(o,a){W(o,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);n=!0},p(o,[a]){if(a&0){s=Ve(Object.entries(yi));let l;for(l=0;l<s.length;l+=1){const u=go(o,s,l);i[l]?(i[l].p(u,a),z(i[l],1)):(i[l]=bo(u),i[l].c(),z(i[l],1),i[l].m(e,null))}for(Me(),l=s.length;l<i.length;l+=1)r(l);Le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)z(i[a]);n=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)G(i[a]);n=!1},d(o){o&&L(e),Ct(i,o)}}}function F_(t,e,n){function s(r,o,a,l){a[l][0]=r}function i(r,o,a,l){a[l][1]=r}return[s,i]}class W_ extends Ne{constructor(e){super(),Te(this,e,F_,B_,de,{})}}function q_(t){let e,n,s,i,r,o,a,l,u,d;return{c(){e=g("div"),n=g("button"),n.textContent="-",s=M(),i=g("input"),r=M(),o=g("b"),o.textContent="%",a=M(),l=g("button"),l.textContent="+",m(n,"id","decrease"),m(n,"class","svelte-1d7zneu"),m(i,"type","number"),m(i,"placeholder","0"),m(i,"class","svelte-1d7zneu"),m(o,"class","svelte-1d7zneu"),m(l,"id","increase"),m(l,"class","svelte-1d7zneu"),m(e,"class","svelte-1d7zneu"),J(e,"non-percent",!t[1])},m(c,f){W(c,e,f),p(e,n),p(e,s),p(e,i),st(i,t[0]),p(e,r),p(e,o),p(e,a),p(e,l),u||(d=[D(n,"click",t[4]),D(i,"input",t[5]),D(i,"input",t[2]),D(l,"click",t[6])],u=!0)},p(c,[f]){f&1&&Xo(i.value)!==c[0]&&st(i,c[0])},i:X,o:X,d(c){c&&L(e),u=!1,be(d)}}}function z_(t,e,n){let{weaponName:s,value:i}=e,r=s!="Nature's Wrath Spellbook",o;r?(i=100,o=100):(i=4,o=4);function a(){i<0?n(0,i=0):i>o&&n(0,i=o),i%1!=0&&n(0,i=Math.floor(i))}const l=()=>{n(0,i--,i),a()};function u(){i=Xo(this.value),n(0,i)}const d=()=>{n(0,i++,i),a()};return t.$$set=c=>{"weaponName"in c&&n(3,s=c.weaponName),"value"in c&&n(0,i=c.value)},[i,r,a,s,l,u,d]}class H_ extends Ne{constructor(e){super(),Te(this,e,z_,q_,de,{weaponName:3,value:0})}}function U_(t){let e,n,s,i,r,o,a,l;return{c(){e=g("div"),n=g("span"),s=M(),i=g("input"),r=M(),o=g("iconify-icon"),m(i,"type","checkbox"),m(i,"class","svelte-na6yc3"),qt(o,"icon","mingcute:check-fill"),qt(o,"class","svelte-na6yc3"),m(e,"class","toggleCont svelte-na6yc3")},m(u,d){W(u,e,d),p(e,n),n.innerHTML=t[0],p(e,s),p(e,i),p(e,r),p(e,o),a||(l=[D(i,"change",t[2]),D(i,"keydown",t[3])],a=!0)},p(u,[d]){d&1&&(n.innerHTML=u[0])},i:X,o:X,d(u){u&&L(e),a=!1,be(l)}}}function V_(t,e,n){let{text:s}=e;const i=Nt(),r=a=>i("toggle",a.target.checked),o=a=>{a.key=="Enter"&&(a.target.checked=!a.target.checked,i("toggle",a.target.checked))};return t.$$set=a=>{"text"in a&&n(0,s=a.text)},[s,i,r,o]}class Va extends Ne{constructor(e){super(),Te(this,e,V_,U_,de,{text:0})}}function yo(t,e,n){const s=t.slice();s[40]=e[n];const i=s[40].name.includes("Fantastic Beamstorm")?"~":"";s[17]=i;const r=s[40].name.includes("Charged");return s[41]=r,s}function j_(t){let e,n,s=t[2].description+"",i,r;return{c(){e=g("span"),n=se('"'),i=se(s),r=se('"'),m(e,"id","toolDesc"),m(e,"class","svelte-1gfuxic")},m(o,a){W(o,e,a),p(e,n),p(e,i),p(e,r)},p(o,a){a[0]&4&&s!==(s=o[2].description+"")&&ke(i,s)},d(o){o&&L(e)}}}function G_(t){let e,n,s,i=`${t[13]?"Type":t[11].name}:`,r,o,a=t[15],l,u,d,c,f,h=t[13]?"Return":"Expand",_,y,w,v,N=vo(t),C=t[3]&&wo(t);return{c(){e=g("button"),n=g("div"),s=g("span"),r=se(i),o=M(),N.c(),u=M(),C&&C.c(),d=M(),c=g("span"),f=se("("),_=se(h),y=se(")"),m(s,"class","svelte-1gfuxic"),De(s,"font-size",Object.keys(t[16]).includes(t[11].name)?`calc(var(--u) * ${t[16][t[11].name]})`:""),m(n,"id",l=t[13]?"":"basic"),m(n,"class","svelte-1gfuxic"),m(c,"class","tooltip svelte-1gfuxic"),m(c,"id","top"),m(e,"class","gearPreview svelte-1gfuxic"),De(e,"line-height",`${t[7]/6.5}px`)},m(T,S){W(T,e,S),p(e,n),p(n,s),p(s,r),p(n,o),N.m(n,null),p(e,u),C&&C.m(e,null),p(e,d),p(e,c),p(c,f),p(c,_),p(c,y),t[28](e),w||(v=D(e,"click",t[21]),w=!0)},p(T,S){S[0]&10240&&i!==(i=`${T[13]?"Type":T[11].name}:`)&&ke(r,i),S[0]&67584&&De(s,"font-size",Object.keys(T[16]).includes(T[11].name)?`calc(var(--u) * ${T[16][T[11].name]})`:""),S[0]&32768&&de(a,a=T[15])?(N.d(1),N=vo(T),N.c(),N.m(n,null)):N.p(T,S),S[0]&8192&&l!==(l=T[13]?"":"basic")&&m(n,"id",l),T[3]?C?C.p(T,S):(C=wo(T),C.c(),C.m(e,d)):C&&(C.d(1),C=null),S[0]&8192&&h!==(h=T[13]?"Return":"Expand")&&ke(_,h),S[0]&128&&De(e,"line-height",`${T[7]/6.5}px`)},d(T){T&&L(e),N.d(T),C&&C.d(),t[28](null),w=!1,v()}}}function vo(t){let e,n=(t[13]?t[2].info.type.replace("/","<b>,</b><br/>"):t[19](t[11]))+"";return{c(){e=g("span"),m(e,"class","svelte-1gfuxic")},m(s,i){W(s,e,i),e.innerHTML=n},p(s,i){i[0]&10244&&n!==(n=(s[13]?s[2].info.type.replace("/","<b>,</b><br/>"):s[19](s[11]))+"")&&(e.innerHTML=n)},d(s){s&&L(e)}}}function wo(t){let e,n,s=`${t[13]?"Special":t[3].name.split(" (")[0]}:`,i,r,o=t[15],a,l=Co(t);return{c(){e=g("div"),n=g("span"),i=se(s),r=M(),l.c(),m(n,"class","svelte-1gfuxic"),De(n,"font-size",Object.keys(t[16]).includes(t[3].name)?`calc(var(--u) * ${t[16][t[3].name]})`:""),m(e,"id",a=t[13]?"":"special"),m(e,"class","svelte-1gfuxic")},m(u,d){W(u,e,d),p(e,n),p(n,i),p(e,r),l.m(e,null)},p(u,d){d[0]&8200&&s!==(s=`${u[13]?"Special":u[3].name.split(" (")[0]}:`)&&ke(i,s),d[0]&65544&&De(n,"font-size",Object.keys(u[16]).includes(u[3].name)?`calc(var(--u) * ${u[16][u[3].name]})`:""),d[0]&32768&&de(o,o=u[15])?(l.d(1),l=Co(u),l.c(),l.m(e,null)):l.p(u,d),d[0]&8192&&a!==(a=u[13]?"":"special")&&m(e,"id",a)},d(u){u&&L(e),l.d(u)}}}function Co(t){let e,n=(t[13]?t[2].info.special:t[17]+t[19](t[3]))+"",s;return{c(){e=g("span"),s=se(n),m(e,"class","svelte-1gfuxic")},m(i,r){W(i,e,r),p(e,s)},p(i,r){r[0]&139276&&n!==(n=(i[13]?i[2].info.special:i[17]+i[19](i[3]))+"")&&ke(s,n)},d(i){i&&L(e)}}}function Eo(t){let e,n,s,i,r,o,a=t[2].name+"",l,u,d,c;return{c(){e=g("a"),n=g("img"),r=M(),o=g("span"),l=se(a),Je(n.src,s=t[2].image)||m(n,"src",s),m(n,"alt",i=t[2].name),m(n,"draggable","false"),m(n,"class","svelte-1gfuxic"),m(o,"class","tooltip"),m(o,"id","right"),m(e,"href",u=t[2].link),m(e,"target","_blank"),m(e,"class","svelte-1gfuxic"),De(e,"display",t[2].link?"":"none"),De(e,"border-radius",t[2].tool?"calc(var(--u))":"")},m(f,h){W(f,e,h),p(e,n),p(e,r),p(e,o),p(o,l),c=!0},p(f,h){(!c||h[0]&4&&!Je(n.src,s=f[2].image))&&m(n,"src",s),(!c||h[0]&4&&i!==(i=f[2].name))&&m(n,"alt",i),(!c||h[0]&4)&&a!==(a=f[2].name+"")&&ke(l,a),(!c||h[0]&4&&u!==(u=f[2].link))&&m(e,"href",u),h[0]&4&&De(e,"display",f[2].link?"":"none"),h[0]&4&&De(e,"border-radius",f[2].tool?"calc(var(--u))":"")},i(f){c||(f&&ye(()=>{c&&(d||(d=Re(e,je,{duration:150},!0)),d.run(1))}),c=!0)},o(f){f&&(d||(d=Re(e,je,{duration:150},!1)),d.run(0)),c=!1},d(f){f&&L(e),f&&d&&d.end()}}}function So(t){let e,n,s,i,r,o,a;n=new Va({props:{text:"Toggle base values"}}),n.$on("toggle",t[36]);let l=Ve(t[2].moves),u=[];for(let c=0;c<l.length;c+=1)u[c]=To(yo(t,l,c));const d=c=>G(u[c],1,1,()=>{u[c]=null});return{c(){e=g("div"),me(n.$$.fragment),s=M(),i=g("div");for(let c=0;c<u.length;c+=1)u[c].c();m(i,"class","weaponMoves svelte-1gfuxic"),m(e,"class","fullWeaponView svelte-1gfuxic")},m(c,f){W(c,e,f),_e(n,e,null),p(e,s),p(e,i);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(i,null);a=!0},p(c,f){if(f[0]&1622036){l=Ve(c[2].moves);let h;for(h=0;h<l.length;h+=1){const _=yo(c,l,h);u[h]?(u[h].p(_,f),z(u[h],1)):(u[h]=To(_),u[h].c(),z(u[h],1),u[h].m(i,null))}for(Me(),h=l.length;h<u.length;h+=1)d(h);Le()}},i(c){if(!a){z(n.$$.fragment,c);for(let f=0;f<l.length;f+=1)z(u[f]);c&&ye(()=>{a&&(o&&o.end(1),r=Zo(e,je,{duration:150,delay:300}),r.start())}),a=!0}},o(c){G(n.$$.fragment,c),u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)G(u[f]);r&&r.invalidate(),c&&(o=$o(e,je,{duration:150})),a=!1},d(c){c&&L(e),pe(n),Ct(u,c),c&&o&&o.end()}}}function ko(t){let e,n,s,i;function r(l){t[37](l)}function o(l){t[38](l)}let a={};return t[4]!==void 0&&(a.value=t[4]),t[2].name!==void 0&&(a.weaponName=t[2].name),e=new H_({props:a}),Z.push(()=>we(e,"value",r)),Z.push(()=>we(e,"weaponName",o)),{c(){me(e.$$.fragment)},m(l,u){_e(e,l,u),i=!0},p(l,u){const d={};!n&&u[0]&16&&(n=!0,d.value=l[4],ve(()=>n=!1)),!s&&u[0]&4&&(s=!0,d.weaponName=l[2].name,ve(()=>s=!1)),e.$set(d)},i(l){i||(z(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){pe(e,l)}}}function Io(t){let e,n=t[17]+(t[14]&&!t[41]?t[40].base:t[41]?t[20](t[40]):t[19](t[40]))+"",s;return{c(){e=g("span"),s=se(n),m(e,"class","svelte-1gfuxic")},m(i,r){W(i,e,r),p(e,s)},p(i,r){r[0]&16388&&n!==(n=i[17]+(i[14]&&!i[41]?i[40].base:i[41]?i[20](i[40]):i[19](i[40]))+"")&&ke(s,n)},d(i){i&&L(e)}}}function To(t){let e,n,s,i,r=(t[41]&&t[2].name=="Nature's Wrath Spellbook"?t[40].name.replace("Charged","Charge(s)"):t[40].name)+":",o,a,l=t[41]?[t[15],t[4]]:t[15],u,d,c=t[41]&&ko(t),f=Io(t);return{c(){e=g("div"),n=g("div"),s=g("span"),c&&c.c(),i=M(),o=se(r),a=M(),f.c(),u=M(),m(s,"class","svelte-1gfuxic"),m(n,"class","ff-border svelte-1gfuxic"),m(e,"class","svelte-1gfuxic")},m(h,_){W(h,e,_),p(e,n),p(n,s),c&&c.m(s,null),p(s,i),p(s,o),p(n,a),f.m(n,null),p(e,u),d=!0},p(h,_){h[41]?c?(c.p(h,_),_[0]&4&&z(c,1)):(c=ko(h),c.c(),z(c,1),c.m(s,i)):c&&(Me(),G(c,1,1,()=>{c=null}),Le()),(!d||_[0]&4)&&r!==(r=(h[41]&&h[2].name=="Nature's Wrath Spellbook"?h[40].name.replace("Charged","Charge(s)"):h[40].name)+":")&&ke(o,r),_[0]&32788&&de(l,l=h[41]?[h[15],h[4]]:h[15])?(f.d(1),f=Io(h),f.c(),f.m(n,null)):f.p(h,_)},i(h){d||(z(c),d=!0)},o(h){G(c),d=!1},d(h){h&&L(e),c&&c.d(),f.d(h)}}}function x_(t){let e,n,s,i,r,o,a=t[2],l,u,d,c,f,h,_,y,w,v,N;function C(F,R){if(F[2].name&&!F[2].tool)return G_;if(F[2].tool)return j_}let T=C(t),S=T&&T(t),P=Eo(t);function I(F){t[32](F)}function q(F){t[33](F)}let ie={slotName:t[0],index:t[1]};t[12]!==void 0&&(ie.slotOpen=t[12]),t[13]!==void 0&&(ie.weaponExpand=t[13]),c=new hr({props:ie}),Z.push(()=>we(c,"slotOpen",I)),Z.push(()=>we(c,"weaponExpand",q)),c.$on("itemSelect",t[34]);let A=t[13]&&So(t);return{c(){e=g("div"),n=g("button"),n.innerHTML=`<iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="90deg" class="svelte-1gfuxic"></iconify-icon>
        Gear`,s=M(),i=g("div"),S&&S.c(),r=M(),o=g("div"),P.c(),d=M(),me(c.$$.fragment),_=M(),A&&A.c(),y=Wt(),m(n,"class","ddButton svelte-1gfuxic"),m(o,"class","gearSlotIcon svelte-1gfuxic"),ye(()=>t[29].call(o)),De(o,"min-width",`${t[8]}px`),m(i,"class","gearInfoCont ff-border svelte-1gfuxic"),ye(()=>t[31].call(i)),De(i,"justify-content",t[2].name?"":"flex-end"),m(e,"class","gearSlot svelte-1gfuxic"),J(e,"slotOpen",t[12]),J(e,"weapon-expand",t[13])},m(F,R){W(F,e,R),p(e,n),t[26](n),p(e,s),p(e,i),S&&S.m(i,null),p(i,r),p(i,o),P.m(o,null),l=rt(o,t[29].bind(o)),t[30](i),u=rt(i,t[31].bind(i)),p(e,d),_e(c,e,null),t[35](e),W(F,_,R),A&&A.m(F,R),W(F,y,R),w=!0,v||(N=[D(window,"mousedown",t[24]),D(window,"keydown",t[25]),D(n,"click",t[27])],v=!0)},p(F,R){T===(T=C(F))&&S?S.p(F,R):(S&&S.d(1),S=T&&T(F),S&&(S.c(),S.m(i,r))),R[0]&4&&de(a,a=F[2])?(Me(),G(P,1,1,X),Le(),P=Eo(F),P.c(),z(P,1),P.m(o,null)):P.p(F,R),R[0]&256&&De(o,"min-width",`${F[8]}px`),R[0]&4&&De(i,"justify-content",F[2].name?"":"flex-end");const Y={};R[0]&1&&(Y.slotName=F[0]),R[0]&2&&(Y.index=F[1]),!f&&R[0]&4096&&(f=!0,Y.slotOpen=F[12],ve(()=>f=!1)),!h&&R[0]&8192&&(h=!0,Y.weaponExpand=F[13],ve(()=>h=!1)),c.$set(Y),(!w||R[0]&4096)&&J(e,"slotOpen",F[12]),(!w||R[0]&8192)&&J(e,"weapon-expand",F[13]),F[13]?A?(A.p(F,R),R[0]&8192&&z(A,1)):(A=So(F),A.c(),z(A,1),A.m(y.parentNode,y)):A&&(Me(),G(A,1,1,()=>{A=null}),Le())},i(F){w||(z(P),z(c.$$.fragment,F),z(A),w=!0)},o(F){G(P),G(c.$$.fragment,F),G(A),w=!1},d(F){F&&(L(e),L(_),L(y)),t[26](null),S&&S.d(),P.d(F),l(),t[30](null),u(),pe(c),t[35](null),A&&A.d(F),v=!1,be(N)}}}function Y_(t,e,n){let s,i,r,o;K(t,Et,E=>n(23,s=E)),K(t,Xt,E=>n(15,i=E)),K(t,zs,E=>n(16,r=E)),K(t,In,E=>n(39,o=E));let{gearBox:a,slotName:l,index:u}=e,d,c,f,h,_,y,w,v=cr,N,C,T,S,P,I="";function q(){if(w)for(let E of w.querySelectorAll(".gearPreview > div")){if(Object.keys(r).includes(E.id=="basic"?N.name:C?C.name:null))return;let oe=i_(E,o);oe&&(E.id=="basic"?U(zs,r[N.name]=oe,r):U(zs,r[C.name]=oe,r))}}function ie(E){let oe;if(E.name=="Void Needle")oe=E.base+(i[E.type]||0)-(i.armor||0)*5.625;else if(v.name=="Pureblood Dagger"){let he,Ae={magicDmg:i.magicDmg||0,meleeDmg:i.meleeDmg||0,rangedDmg:i.rangedDmg||0},Ot=Object.keys(Ae).reduce((le,He)=>Ae[le]>Ae[He]?le:He),Rt=0;for(let le in Ae)le!=Ot&&(Rt+=Ae[le]);he=(i[Ot]||0)*2-Rt,oe=E.base+he,E.name.includes("HP")&&(oe/=2)}else if(E.type.includes("/")){let he=E.type.split("/"),Ae=0;for(let Ot of he)Ae+=(i[Ot]||0)*E[`${Ot}Mult`];oe=E.base+Ae}else oe=E.base+(i[E.type]||0)*E.mult;return S?Math.floor(oe*10)/10:Math.floor(oe)}function A(E){let oe,he=P?0:i[E.type]||0;return v.name=="Celestial Powers Spellbook"?oe=(80+he*1.1)*(.8+2.2*d/100):v.name=="Staff of Dreams"?oe=160+160*d/100+he*(.4+1.3*d/100):v.name=="Nature's Wrath Spellbook"&&(oe=260+400*d/4+he*(1+1.5*d/4)),Math.floor(oe*10)/10}function F(){n(14,P=!1),S?(n(13,S=!1),a.classList.remove("weapon-expand"),setTimeout(()=>{q()})):(a.classList.add("weapon-expand"),n(13,S=!0))}const R=E=>{(!c.contains(E.target)||c.contains(E.target)&&f.contains(E.target))&&n(12,T=!1)},Y=E=>{E.key=="Escape"&&n(12,T=!1)};function Q(E){Z[E?"unshift":"push"](()=>{y=E,n(9,y)})}const k=()=>n(12,T=!T);function x(E){Z[E?"unshift":"push"](()=>{w=E,n(10,w)})}function ee(){_=this.offsetHeight,n(8,_)}function j(E){Z[E?"unshift":"push"](()=>{f=E,n(6,f)})}function te(){h=this.offsetHeight,n(7,h)}function fe(E){T=E,n(12,T)}function H(E){S=E,n(13,S)}const b=()=>{setTimeout(()=>{q(),!v.name&&S&&F()})};function O(E){Z[E?"unshift":"push"](()=>{c=E,n(5,c)})}const V=E=>n(14,P=E.detail);function ne(E){d=E,n(4,d)}function Pe(E){t.$$.not_equal(v.name,E)&&(v.name=E,n(2,v),n(23,s),n(1,u),n(3,C))}return t.$$set=E=>{"gearBox"in E&&n(22,a=E.gearBox),"slotName"in E&&n(0,l=E.slotName),"index"in E&&n(1,u=E.index)},t.$$.update=()=>{t.$$.dirty[0]&8388622&&s[u]&&s[u].name!=v.name&&(n(2,v=s[u]),!v.tool&&v.name&&(n(11,N=v.moves.filter(E=>E.basic)[0]),n(3,C=v.moves.filter(E=>E.special)[0]),C&&C.name.includes("Fantastic Beamstorm")?n(17,I="~"):n(17,I="")))},[l,u,v,C,d,c,f,h,_,y,w,N,T,S,P,i,r,I,q,ie,A,F,a,s,R,Y,Q,k,x,ee,j,te,fe,H,b,O,V,ne,Pe]}class K_ extends Ne{constructor(e){super(),Te(this,e,Y_,x_,de,{gearBox:22,slotName:0,index:1},null,[-1,-1])}}function No(t,e,n){const s=t.slice();return s[3]=e[n],s}function Do(t){let e,n,s;function i(o){t[1](o)}let r={slotName:"gear",index:t[3]};return t[0]!==void 0&&(r.gearBox=t[0]),e=new K_({props:r}),Z.push(()=>we(e,"gearBox",i)),{c(){me(e.$$.fragment)},m(o,a){_e(e,o,a),s=!0},p(o,a){const l={};!n&&a&1&&(n=!0,l.gearBox=o[0],ve(()=>n=!1)),e.$set(l)},i(o){s||(z(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){pe(e,o)}}}function Q_(t){let e,n,s=Ve(qn),i=[];for(let o=0;o<s.length;o+=1)i[o]=Do(No(t,s,o));const r=o=>G(i[o],1,1,()=>{i[o]=null});return{c(){e=g("div");for(let o=0;o<i.length;o+=1)i[o].c();m(e,"class","gearBox svelte-13plk7j")},m(o,a){W(o,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);t[2](e),n=!0},p(o,[a]){if(a&1){s=Ve(qn);let l;for(l=0;l<s.length;l+=1){const u=No(o,s,l);i[l]?(i[l].p(u,a),z(i[l],1)):(i[l]=Do(u),i[l].c(),z(i[l],1),i[l].m(e,null))}for(Me(),l=s.length;l<i.length;l+=1)r(l);Le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)z(i[a]);n=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)G(i[a]);n=!1},d(o){o&&L(e),Ct(i,o),t[2](null)}}}function X_(t,e,n){let s;function i(o){s=o,n(0,s)}function r(o){Z[o?"unshift":"push"](()=>{s=o,n(0,s)})}return[s,i,r]}class J_ extends Ne{constructor(e){super(),Te(this,e,X_,Q_,de,{})}}function Z_(t){let e,n,s,i,r,o,a,l;return{c(){e=g("div"),n=g("div"),s=g("button"),s.textContent="Clear armor",i=M(),r=g("div"),o=g("button"),o.textContent="Clear gear",m(s,"class","svelte-e94uvj"),m(n,"class","svelte-e94uvj"),m(o,"class","svelte-e94uvj"),m(r,"class","svelte-e94uvj"),m(e,"class","mainFeatures svelte-e94uvj"),m(e,"id","box")},m(u,d){W(u,e,d),p(e,n),p(n,s),p(e,i),p(e,r),p(r,o),a||(l=[D(s,"click",t[3]),D(o,"click",t[4])],a=!0)},p:X,i:X,o:X,d(u){u&&L(e),a=!1,be(l)}}}function $_(t,e,n){let s,i,r,o,a;K(t,Et,f=>n(5,s=f)),K(t,rs,f=>n(6,i=f)),K(t,ft,f=>n(7,r=f)),K(t,Tn,f=>n(8,o=f)),K(t,In,f=>n(0,a=f));function l(){for(let f in r)r[f].name&&o[f][r[f].name].querySelector("button").click()}function u(){for(let f in s)s[f].name&&i[f][s[f].name].querySelector("button").click()}return[a,l,u,()=>{a||l()},()=>{a||u()}]}class ep extends Ne{constructor(e){super(),Te(this,e,$_,Z_,de,{})}}function tp(t){let e,n,s,i,r,o,a;function l(d){t[2](d)}let u={slotName:"builds",index:null,weaponExpand:null};return t[0]!==void 0&&(u.slotOpen=t[0]),s=new hr({props:u}),Z.push(()=>we(s,"slotOpen",l)),{c(){e=g("button"),e.innerHTML=`Load armor set
    <iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="180deg" class="svelte-l9dczq"></iconify-icon>`,n=M(),me(s.$$.fragment),m(e,"class","svelte-l9dczq"),J(e,"ddOpen",t[0])},m(d,c){W(d,e,c),W(d,n,c),_e(s,d,c),r=!0,o||(a=D(e,"click",t[1]),o=!0)},p(d,[c]){(!r||c&1)&&J(e,"ddOpen",d[0]);const f={};!i&&c&1&&(i=!0,f.slotOpen=d[0],ve(()=>i=!1)),s.$set(f)},i(d){r||(z(s.$$.fragment,d),r=!0)},o(d){G(s.$$.fragment,d),r=!1},d(d){d&&(L(e),L(n)),pe(s,d),o=!1,a()}}}function np(t,e,n){let{ddOpen:s=!1}=e;const i=()=>n(0,s=!s);function r(o){s=o,n(0,s)}return t.$$set=o=>{"ddOpen"in o&&n(0,s=o.ddOpen)},[s,i,r]}class sp extends Ne{constructor(e){super(),Te(this,e,np,tp,de,{ddOpen:0})}}function ip(t){let e;return{c(){e=g("span"),e.textContent="Create some builds to get started!",m(e,"class","tooltip svelte-1c244fb"),m(e,"id","top"),De(e,"left","70.5%")},m(n,s){W(n,e,s)},p:X,d(n){n&&L(e)}}}function rp(t){let e;return{c(){e=g("span"),e.textContent="Select some gear or armor to get started!",m(e,"class","tooltip svelte-1c244fb"),m(e,"id","top"),De(e,"left",t[3]?"38%":"")},m(n,s){W(n,e,s)},p(n,s){s&8&&De(e,"left",n[3]?"38%":"")},d(n){n&&L(e)}}}function op(t){let e,n,s,i,r,o,a,l,u,d,c,f,h,_,y,w,v,N,C,T,S,P,I,q,ie,A,F,R;function Y(j,te){if(!j[4])return rp;if(!j[3])return ip}let Q=Y(t),k=Q&&Q(t);function x(j){t[18](j)}let ee={};return t[1]!==void 0&&(ee.ddOpen=t[1]),q=new sp({props:ee}),Z.push(()=>we(q,"ddOpen",x)),{c(){e=g("div"),n=g("div"),s=g("div"),i=g("button"),r=se("Export new build"),a=M(),l=g("div"),u=g("button"),d=se("Save to build"),f=M(),h=g("div"),_=g("button"),y=se("Delete build"),v=M(),k&&k.c(),N=M(),C=g("div"),T=g("div"),S=g("button"),S.textContent="Load build",P=M(),I=g("div"),me(q.$$.fragment),i.disabled=o=!t[4],m(i,"class","svelte-1c244fb"),m(s,"class","buttonCont svelte-1c244fb"),u.disabled=c=!t[4]||!t[3],m(u,"class","svelte-1c244fb"),m(l,"class","buttonCont svelte-1c244fb"),m(l,"id","middle"),_.disabled=w=!t[3],m(_,"class","svelte-1c244fb"),m(h,"class","buttonCont svelte-1c244fb"),m(n,"id","modify"),m(n,"class","svelte-1c244fb"),J(n,"no-tooltip",t[2]),m(S,"class","svelte-1c244fb"),m(T,"class","buttonCont svelte-1c244fb"),m(I,"class","buttonCont svelte-1c244fb"),m(C,"id","load"),m(C,"class","svelte-1c244fb"),m(e,"class","mainFeatures svelte-1c244fb"),m(e,"id","build")},m(j,te){W(j,e,te),p(e,n),p(n,s),p(s,i),p(i,r),p(n,a),p(n,l),p(l,u),p(u,d),p(n,f),p(n,h),p(h,_),p(_,y),p(n,v),k&&k.m(n,null),p(e,N),p(e,C),p(C,T),p(T,S),p(C,P),p(C,I),_e(q,I,null),t[19](I),A=!0,F||(R=[D(window,"mousedown",t[8]),D(window,"keydown",t[9]),D(i,"click",t[10]),D(i,"mouseenter",t[11]),D(i,"mouseleave",t[12]),D(u,"click",t[13]),D(_,"click",t[14]),D(_,"mouseenter",t[15]),D(_,"mouseleave",t[16]),D(S,"click",t[17])],F=!0)},p(j,[te]){(!A||te&16&&o!==(o=!j[4]))&&(i.disabled=o),(!A||te&24&&c!==(c=!j[4]||!j[3]))&&(u.disabled=c),(!A||te&8&&w!==(w=!j[3]))&&(_.disabled=w),Q===(Q=Y(j))&&k?k.p(j,te):(k&&k.d(1),k=Q&&Q(j),k&&(k.c(),k.m(n,null))),(!A||te&4)&&J(n,"no-tooltip",j[2]);const fe={};!ie&&te&2&&(ie=!0,fe.ddOpen=j[1],ve(()=>ie=!1)),q.$set(fe)},i(j){A||(z(q.$$.fragment,j),A=!0)},o(j){G(q.$$.fragment,j),A=!1},d(j){j&&L(e),k&&k.d(),pe(q),t[19](null),F=!1,be(R)}}}function lp(t,e,n){let s,i,r,o,a;K(t,Ze,I=>n(7,s=I)),K(t,mt,I=>n(3,i=I)),K(t,el,I=>n(4,r=I)),K(t,In,I=>n(5,o=I)),K(t,$,I=>n(6,a=I));let l,u=!1,d=!1;const c=I=>{l.contains(I.target)||n(1,u=!1)},f=I=>{I.key=="Escape"&&n(1,u=!1)},h=()=>{r&&!o&&U($,a.export.ongoing=!0,a)},_=()=>n(2,d=!0),y=()=>n(2,d=!1),w=()=>{r&&i&&!o&&U($,a.save.ongoing=!0,a)},v=()=>{i&&!o&&U($,a.delete.ongoing=!0,a)},N=()=>n(2,d=!0),C=()=>n(2,d=!1),T=()=>{o||U($,a.load.ongoing=!0,a)};function S(I){u=I,n(1,u)}function P(I){Z[I?"unshift":"push"](()=>{l=I,n(0,l)})}return t.$$.update=()=>{t.$$.dirty&128&&U(mt,i=Object.keys(s).length>0,i)},[l,u,d,i,r,o,a,s,c,f,h,_,y,w,v,N,C,T,S,P]}class ap extends Ne{constructor(e){super(),Te(this,e,lp,op,de,{})}}function Oo(t){let e;return{c(){e=g("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(n,s){W(n,e,s)},d(n){n&&L(e)}}}function up(t){let e,n,s,i,r,o,a,l=25-t[3].length+"",u,d,c,f,h,_,y,w,v,N,C,T=275-t[4].length+"",S,P,I,q,ie,A,F,R,Y,Q,k,x,ee,j,te,fe,H=(t[3]||t[4])&&Oo();return{c(){e=g("div"),n=g("div"),s=se(`Name:\r
        `),i=g("input"),o=M(),a=g("span"),u=se(l),d=M(),c=g("div"),f=g("div"),h=g("span"),h.textContent="Description / Notes:",_=M(),H&&H.c(),y=M(),w=g("textarea"),N=M(),C=g("span"),S=se(T),P=M(),I=g("div"),q=g("div"),ie=g("button"),A=se("CANCEL"),R=M(),Y=g("div"),Q=g("button"),k=se("EXPORT"),m(i,"class","buildNameInput"),m(i,"id","firstFocusable"),i.disabled=r=t[5].export.status==0,m(i,"type","text"),m(i,"placeholder",t[6]),m(i,"maxlength","25"),m(a,"class","charCounter svelte-1vypdkl"),m(a,"id","buildName"),m(n,"class","buildNameCont svelte-1vypdkl"),m(w,"class","buildDescInput"),w.disabled=v=t[5].export.status==0,m(w,"placeholder","[Empty]"),m(w,"maxlength","275"),m(w,"autocomplete","off"),m(C,"class","charCounter"),m(C,"id","buildDesc"),m(c,"class","buildDescCont"),ie.disabled=F=t[5].export.status==0,m(Q,"id","lastFocusable"),Q.disabled=x=t[5].export.status==0,m(I,"class","promptOptions"),m(e,"class","buildExporter svelte-1vypdkl")},m(b,O){W(b,e,O),p(e,n),p(n,s),p(n,i),t[8](i),st(i,t[3]),p(n,o),p(n,a),p(a,u),p(e,d),p(e,c),p(c,f),p(f,h),p(f,_),H&&H.m(f,null),p(c,y),p(c,w),st(w,t[4]),t[13](w),p(c,N),p(c,C),p(C,S),p(e,P),p(e,I),p(I,q),p(q,ie),p(ie,A),t[16](ie),p(I,R),p(I,Y),p(Y,Q),p(Q,k),j=!0,te||(fe=[D(i,"input",t[9]),D(i,"input",t[10]),D(i,"keydown",t[11]),D(w,"input",t[12]),D(w,"input",t[14]),D(w,"keydown",t[15]),D(ie,"click",t[17]),D(Q,"click",t[18]),D(Q,"keydown",pn),D(e,"introstart",t[19])],te=!0)},p(b,[O]){(!j||O&32&&r!==(r=b[5].export.status==0))&&(i.disabled=r),O&8&&i.value!==b[3]&&st(i,b[3]),(!j||O&8)&&l!==(l=25-b[3].length+"")&&ke(u,l),b[3]||b[4]?H||(H=Oo(),H.c(),H.m(f,null)):H&&(H.d(1),H=null),(!j||O&32&&v!==(v=b[5].export.status==0))&&(w.disabled=v),O&16&&st(w,b[4]),(!j||O&16)&&T!==(T=275-b[4].length+"")&&ke(S,T),(!j||O&32&&F!==(F=b[5].export.status==0))&&(ie.disabled=F),(!j||O&32&&x!==(x=b[5].export.status==0))&&(Q.disabled=x)},i(b){j||(b&&ye(()=>{j&&(ee||(ee=Re(e,lt,{duration:250},!0)),ee.run(1))}),j=!0)},o(b){b&&(ee||(ee=Re(e,lt,{duration:250},!1)),ee.run(0)),j=!1},d(b){b&&L(e),t[8](null),H&&H.d(),t[13](null),t[16](null),b&&ee&&ee.end(),te=!1,be(fe)}}}function cp(t,e,n){let s,i,r,o,a,l;K(t,$,k=>n(5,s=k)),K(t,Ye,k=>n(20,i=k)),K(t,mt,k=>n(21,r=k)),K(t,Et,k=>n(22,o=k)),K(t,ft,k=>n(23,a=k)),K(t,Ze,k=>n(24,l=k));let u=Object.keys(l).length||0,d=(u+1)%10,c=d==1?"st":d==2?"nd":d==3?"rd":"th",f,h,_,y="",w="",v=`My ${u+1+c} build`;function N(){if(U($,s.export.status=0,s),y.endsWith(" ")&&n(3,y=y.replace(/  +/g," ").replace(/ $/,"")),w.endsWith(" ")&&n(4,w=w.replace(/  +/g," ").replace(/ $/,"")),Object.keys(l).includes(y)){U($,s.export.status=-1,s),U($,s.message="duplicate_name",s);return}let k=Vh(_t(an(un),"builds")).key,x=Ua(a,o);x.name=y||v,x.desc=w||"[Empty]",Fs(_t(an(un),`builds/${k}`),x).then(()=>{U($,s.export.status=1,s),U(mt,r=!0,r),fr(),Ze.update(ee=>({...ee,[x.name]:{id:k,desc:x.desc}})),U(Ye,i=x,i),U(Ye,i.id=k,i),navigator.clipboard.writeText(`${location.origin+location.pathname}?id=${k}`)}).catch(()=>{U($,s.export.status=-1,s),U($,s.message="firebase_fail",s)})}function C(k){Z[k?"unshift":"push"](()=>{f=k,n(0,f)})}function T(){y=this.value,n(3,y)}const S=k=>{n(3,y=Es(k.target.value,25))},P=k=>{s.export.status==0&&k.preventDefault(),Gt(k),wi(f,k.target.value,25)};function I(){w=this.value,n(4,w)}function q(k){Z[k?"unshift":"push"](()=>{h=k,n(1,h)})}const ie=k=>{n(4,w=Es(k.target.value,275))},A=k=>{s.export.status==0&&k.preventDefault(),wi(h,k.target.value,275)};function F(k){Z[k?"unshift":"push"](()=>{_=k,n(2,_)})}return[f,h,_,y,w,s,v,N,C,T,S,P,I,q,ie,A,F,()=>{s.export.status!=0&&U($,s.export.ongoing=!1,s)},()=>{s.export.status!=0&&N()},()=>_.focus()]}class dp extends Ne{constructor(e){super(),Te(this,e,cp,up,de,{})}}function fp(t){let e,n,s,i,r=t[2]?"Copied!":"Copy link",o,a,l;return{c(){e=g("button"),n=g("b"),n.textContent="Build link",s=M(),i=g("span"),o=se(r),m(i,"class","tooltip svelte-zqs0fu"),m(i,"id","top"),m(e,"class","copyButton svelte-zqs0fu"),m(e,"id","firstFocusable")},m(u,d){W(u,e,d),p(e,n),p(e,s),p(e,i),p(i,o),a||(l=[D(e,"click",t[7]),D(e,"keydown",Gt)],a=!0)},p(u,d){d&4&&r!==(r=u[2]?"Copied!":"Copy link")&&ke(o,r)},d(u){u&&L(e),a=!1,be(l)}}}function hp(t){let e,n,s,i=t[3].id+"",r,o,a,l=t[2]?"Copied!":"Copy ID",u,d,c,f;return{c(){e=g("button"),n=g("b"),n.textContent="ID:",s=M(),r=se(i),o=M(),a=g("span"),u=se(l),m(a,"class","tooltip svelte-zqs0fu"),m(a,"id","top"),m(e,"class","copyButton svelte-zqs0fu"),m(e,"id",d=t[1]!="save"?"firstFocusable":"")},m(h,_){W(h,e,_),p(e,n),p(e,s),p(e,r),p(e,o),p(e,a),p(a,u),c||(f=[D(e,"click",t[5]),D(e,"keydown",t[6])],c=!0)},p(h,_){_&8&&i!==(i=h[3].id+"")&&ke(r,i),_&4&&l!==(l=h[2]?"Copied!":"Copy ID")&&ke(u,l),_&2&&d!==(d=h[1]!="save"?"firstFocusable":"")&&m(e,"id",d)},d(h){h&&L(e),c=!1,be(f)}}}function _p(t){let e;function n(r,o){if(r[0]=="id")return hp;if(r[0]=="link")return fp}let s=n(t),i=s&&s(t);return{c(){i&&i.c(),e=Wt()},m(r,o){i&&i.m(r,o),W(r,e,o)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i&&i.d(1),i=s&&s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:X,o:X,d(r){r&&L(e),i&&i.d(r)}}}function pp(t,e,n){let s;K(t,Ye,c=>n(3,s=c));let{type:i,source:r}=e,o=!1;function a(c){o||(navigator.clipboard.writeText(c),n(2,o=!0),setTimeout(()=>{n(2,o=!1)},1e3))}const l=()=>a(s.id),u=()=>{r!="save"&&Gt()},d=()=>a(`${location.host+location.pathname}?id=${s.id}`);return t.$$set=c=>{"type"in c&&n(0,i=c.type),"source"in c&&n(1,r=c.source)},[i,r,o,s,a,l,u,d]}class zn extends Ne{constructor(e){super(),Te(this,e,pp,_p,de,{type:0,source:1})}}function mp(t){let e,n,s,i;return e=new zn({props:{type:"link",source:"share"}}),s=new zn({props:{type:"id",source:"share"}}),{c(){me(e.$$.fragment),n=M(),me(s.$$.fragment)},m(r,o){_e(e,r,o),W(r,n,o),_e(s,r,o),i=!0},p:X,i(r){i||(z(e.$$.fragment,r),z(s.$$.fragment,r),i=!0)},o(r){G(e.$$.fragment,r),G(s.$$.fragment,r),i=!1},d(r){r&&L(n),pe(e,r),pe(s,r)}}}function gp(t){let e;return{c(){e=g("span"),e.textContent="Your build has been erased from your local saves and the database."},m(n,s){W(n,e,s)},p:X,i:X,o:X,d(n){n&&L(e)}}}function bp(t){let e;function n(r,o){if(r[2].message=="not_found")return Ep;if(r[2].message=="invalid_id")return Cp}let s=n(t),i=s&&s(t);return{c(){i&&i.c(),e=Wt()},m(r,o){i&&i.m(r,o),W(r,e,o)},p(r,o){s!==(s=n(r))&&(i&&i.d(1),i=s&&s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:X,o:X,d(r){r&&L(e),i&&i.d(r)}}}function yp(t){let e,n,s,i,r,o;return s=new zn({props:{type:"link",source:"save"}}),r=new zn({props:{type:"id",source:"save"}}),{c(){e=g("span"),e.textContent="Your build has been overwritten.",n=M(),me(s.$$.fragment),i=M(),me(r.$$.fragment)},m(a,l){W(a,e,l),W(a,n,l),_e(s,a,l),W(a,i,l),_e(r,a,l),o=!0},p:X,i(a){o||(z(s.$$.fragment,a),z(r.$$.fragment,a),o=!0)},o(a){G(s.$$.fragment,a),G(r.$$.fragment,a),o=!1},d(a){a&&(L(e),L(n),L(i)),pe(s,a),pe(r,a)}}}function vp(t){let e,n,s,i;const r=[kp,Sp],o=[];function a(l,u){return l[2].export.status==1?0:l[2].export.status==-1&&l[2].message=="duplicate_name"?1:-1}return~(e=a(t))&&(n=o[e]=r[e](t)),{c(){n&&n.c(),s=Wt()},m(l,u){~e&&o[e].m(l,u),W(l,s,u),i=!0},p(l,u){let d=e;e=a(l),e!==d&&(n&&(Me(),G(o[d],1,1,()=>{o[d]=null}),Le()),~e?(n=o[e],n||(n=o[e]=r[e](l),n.c()),z(n,1),n.m(s.parentNode,s)):n=null)},i(l){i||(z(n),i=!0)},o(l){G(n),i=!1},d(l){l&&L(s),~e&&o[e].d(l)}}}function wp(t){let e,n,s=t[2].export.status?"exporting":t[2].save.status?"saving":t[2].load.status?"loading":"deleting",i,r,o,a,l,u,d,c;return{c(){e=g("span"),n=se("A problem occurred while "),i=se(s),r=se(` your build.\r
            `),o=g("br"),a=se(`\r
            If needed`),l=g("b"),l.textContent=",",u=se(" you may contact "),d=g("hl"),d.textContent="xt.ss",c=se(` on Discord for more\r
            details.`)},m(f,h){W(f,e,h),p(e,n),p(e,i),p(e,r),p(e,o),p(e,a),p(e,l),p(e,u),p(e,d),p(e,c)},p(f,h){h&4&&s!==(s=f[2].export.status?"exporting":f[2].save.status?"saving":f[2].load.status?"loading":"deleting")&&ke(i,s)},i:X,o:X,d(f){f&&L(e)}}}function Cp(t){let e;return{c(){e=g("span"),e.textContent="The ID you have entered is invalid. Please check it again."},m(n,s){W(n,e,s)},d(n){n&&L(e)}}}function Ep(t){let e;return{c(){e=g("span"),e.innerHTML=`Your build could not be found within the database.
                <br/>
                If needed<b>,</b> you may contact <hl>xt.ss</hl> on Discord for more
                details.`},m(n,s){W(n,e,s)},d(n){n&&L(e)}}}function Sp(t){let e;return{c(){e=g("span"),e.innerHTML=`Another build of yours with the same name already exists.
                <br/>
                Please use a different one.`},m(n,s){W(n,e,s)},i:X,o:X,d(n){n&&L(e)}}}function kp(t){let e,n,s,i;return s=new zn({props:{type:"id",source:"export"}}),{c(){e=g("span"),e.textContent="Your build's link has been copied to your clipboard.",n=M(),me(s.$$.fragment)},m(r,o){W(r,e,o),W(r,n,o),_e(s,r,o),i=!0},i(r){i||(z(s.$$.fragment,r),i=!0)},o(r){G(s.$$.fragment,r),i=!1},d(r){r&&(L(e),L(n)),pe(s,r)}}}function Ip(t){let e,n,s,i,r,o,a,l,u,d,c,f,h,_,y,w,v;const N=[wp,vp,yp,bp,gp,mp],C=[];function T(S,P){return S[1]==-1&&S[2].message=="firebase_fail"?0:S[2].export.status?1:S[2].save.status==1?2:S[2].load.status==-1?3:S[2].delete.status==1?4:S[2].share.ongoing?5:-1}return~(r=T(t))&&(o=C[r]=N[r](t)),{c(){e=g("div"),n=g("span"),s=se(t[4]),i=M(),o&&o.c(),a=M(),l=g("div"),u=g("div"),d=g("button"),c=se("OK"),m(n,"id","messageTitle"),m(n,"class","svelte-nfbx2w"),m(d,"id",f=(t[1]==-1?"firstFocusable ":"")+"lastFocusable"),m(l,"class","promptOptions svelte-nfbx2w"),m(e,"class","promptMessage svelte-nfbx2w")},m(S,P){W(S,e,P),p(e,n),p(n,s),p(e,i),~r&&C[r].m(e,null),p(e,a),p(e,l),p(l,u),p(u,d),p(d,c),t[6](d),y=!0,w||(v=[D(d,"click",t[7]),D(d,"keydown",t[8]),D(e,"introstart",t[9])],w=!0)},p(S,[P]){(!y||P&16)&&ke(s,S[4]);let I=r;r=T(S),r===I?~r&&C[r].p(S,P):(o&&(Me(),G(C[I],1,1,()=>{C[I]=null}),Le()),~r?(o=C[r],o?o.p(S,P):(o=C[r]=N[r](S),o.c()),z(o,1),o.m(e,a)):o=null),(!y||P&2&&f!==(f=(S[1]==-1?"firstFocusable ":"")+"lastFocusable"))&&m(d,"id",f)},i(S){y||(z(o),S&&ye(()=>{y&&(_&&_.end(1),h=Zo(e,lt,{duration:200,delay:75}),h.start())}),y=!0)},o(S){G(o),h&&h.invalidate(),S&&(_=$o(e,lt,{duration:200})),y=!1},d(S){S&&L(e),~r&&C[r].d(),t[6](null),S&&_&&_.end(),w=!1,be(v)}}}function Tp(t,e,n){let s,i,r;K(t,$,h=>n(2,r=h));let{loadID:o}=e;const a=Nt();let l;function u(h){Z[h?"unshift":"push"](()=>{l=h,n(3,l)})}const d=()=>{n(0,o=null),a("resetActions")},c=h=>{i==-1&&Gt(h),pn(h)},f=()=>l.focus();return t.$$set=h=>{"loadID"in h&&n(0,o=h.loadID)},t.$$.update=()=>{t.$$.dirty&4&&n(1,i=r.export.status||r.save.status||r.load.status||r.delete.status),t.$$.dirty&6&&n(4,s=r.share.ongoing?"Share this build":`${r.export.status?"Export":r.save.status?"Save":r.load.status?"Load":"Delete"} ${i==1?"Success":"Failure"}!`)},[o,i,r,l,s,a,u,d,c,f]}class Np extends Ne{constructor(e){super(),Te(this,e,Tp,Ip,de,{loadID:0})}}function Dp(t){let e,n,s,i,r,o;return{c(){e=g("li"),n=g("button"),s=g("span"),i=se(t[0]),m(s,"class","svelte-1opo0ke"),m(e,"class","svelte-1opo0ke"),J(e,"selectedItem",t[2])},m(a,l){W(a,e,l),p(e,n),p(n,s),p(s,i),t[7](e),r||(o=D(n,"click",t[3]),r=!0)},p(a,[l]){l&1&&ke(i,a[0]),l&4&&J(e,"selectedItem",a[2])},i:X,o:X,d(a){a&&L(e),t[7](null),r=!1,o()}}}function Op(t,e,n){let{chosenBuild:s,buildData:i,buildName:r,ddOpen:o}=e;const a=Nt();let l,u=s[0]==r;function d(){if(o){if(l.classList.contains("selectedItem")||n(2,u=!1),u)return;a("buildSelect",l),n(2,u=!0),n(5,o=!1),n(4,s=[r,i])}}function c(f){Z[f?"unshift":"push"](()=>{l=f,n(1,l)})}return t.$$set=f=>{"chosenBuild"in f&&n(4,s=f.chosenBuild),"buildData"in f&&n(6,i=f.buildData),"buildName"in f&&n(0,r=f.buildName),"ddOpen"in f&&n(5,o=f.ddOpen)},[r,l,u,d,s,o,i,c]}class Rp extends Ne{constructor(e){super(),Te(this,e,Op,Dp,de,{chosenBuild:4,buildData:6,buildName:0,ddOpen:5})}}function Ro(t,e,n){const s=t.slice();return s[25]=e[n][0],s[26]=e[n][1],s}function Ao(t){let e,n,s,i;function r(l){t[13](l)}function o(l){t[14](l)}let a={buildData:t[26],buildName:t[25]};return t[0]!==void 0&&(a.chosenBuild=t[0]),t[1]!==void 0&&(a.ddOpen=t[1]),e=new Rp({props:a}),Z.push(()=>we(e,"chosenBuild",r)),Z.push(()=>we(e,"ddOpen",o)),e.$on("buildSelect",t[11]),{c(){me(e.$$.fragment)},m(l,u){_e(e,l,u),i=!0},p(l,u){const d={};u&16&&(d.buildData=l[26]),u&16&&(d.buildName=l[25]),!n&&u&1&&(n=!0,d.chosenBuild=l[0],ve(()=>n=!1)),!s&&u&2&&(s=!0,d.ddOpen=l[1],ve(()=>s=!1)),e.$set(d)},i(l){i||(z(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){pe(e,l)}}}function Ap(t){let e,n,s,i,r,o,a,l=Ve(Object.entries(t[4])),u=[];for(let c=0;c<l.length;c+=1)u[c]=Ao(Ro(t,l,c));const d=c=>G(u[c],1,1,()=>{u[c]=null});return{c(){e=g("div"),n=g("input"),s=M(),i=g("ul");for(let c=0;c<u.length;c+=1)u[c].c();m(n,"type","text"),m(n,"class","searchBarInput svelte-p20blu"),m(n,"placeholder","Search..."),m(i,"class","svelte-p20blu"),J(i,"no-scrollbar",t[8].length<=4),m(e,"class","dropdown svelte-p20blu"),J(e,"ddOpen",t[1])},m(c,f){W(c,e,f),p(e,n),t[12](n),p(e,s),p(e,i);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(i,null);t[15](i),t[16](e),r=!0,o||(a=[D(n,"input",t[10]),D(n,"keydown",t[9]),D(e,"transitionend",t[17]),D(e,"transitioncancel",t[18])],o=!0)},p(c,[f]){if(f&2067){l=Ve(Object.entries(c[4]));let h;for(h=0;h<l.length;h+=1){const _=Ro(c,l,h);u[h]?(u[h].p(_,f),z(u[h],1)):(u[h]=Ao(_),u[h].c(),z(u[h],1),u[h].m(i,null))}for(Me(),h=l.length;h<u.length;h+=1)d(h);Le()}(!r||f&256)&&J(i,"no-scrollbar",c[8].length<=4),(!r||f&2)&&J(e,"ddOpen",c[1])},i(c){if(!r){for(let f=0;f<l.length;f+=1)z(u[f]);r=!0}},o(c){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)G(u[f]);r=!1},d(c){c&&L(e),t[12](null),Ct(u,c),t[15](null),t[16](null),o=!1,be(a)}}}function Pp(t,e,n){let s;K(t,Ze,R=>n(4,s=R));let{chosenBuild:i,ddOpen:r=!1,dropdown:o}=e;const a=Nt();let l,u,d,c,f={},h=!1,_=[];function y(R){!R.shiftKey&&R.key=="Tab"&&(R.preventDefault(),setTimeout(()=>l.focus()))}function w(){u&&u.removeEventListener("keydown",y),C(),u&&u.addEventListener("keydown",y)}function v(R){R.shiftKey&&R.key=="Tab"&&(R.preventDefault(),setTimeout(()=>(u.querySelector("button")||u).focus()))}function N(){Ha(l.value,f),w()}function C(){u&&u.classList.remove("lastElement"),n(8,_=d.querySelectorAll("li:not(.hidden)")),u=_[_.length-1],u?u.classList.add("lastElement"):u=l}function T(R){a("buildSelect"),n(6,c=R.detail);let Y=d.querySelector(".selectedItem");Y&&Y!=R.detail&&Y.classList.remove("selectedItem"),n(7,h=!0)}function S(R){Z[R?"unshift":"push"](()=>{l=R,n(5,l)})}function P(R){i=R,n(0,i)}function I(R){r=R,n(1,r)}function q(R){Z[R?"unshift":"push"](()=>{d=R,n(3,d)})}function ie(R){Z[R?"unshift":"push"](()=>{o=R,n(2,o)})}const A=R=>{R.propertyName=="visibility"&&(h&&(n(7,h=!1),n(5,l.value="",l),N()),!r&&c&&d.scrollTo(0,c.offsetTop),Cs(l,r))},F=R=>{R.propertyName=="visibility"&&(n(7,h=!1),Cs(l,r))};return t.$$set=R=>{"chosenBuild"in R&&n(0,i=R.chosenBuild),"ddOpen"in R&&n(1,r=R.ddOpen),"dropdown"in R&&n(2,o=R.dropdown)},t.$$.update=()=>{if(t.$$.dirty&24&&d){n(8,_=d.querySelectorAll("li:not(.hidden)"));for(let R=0;R<d.childElementCount;R++)f[Object.keys(s)[R]]=d.children[R];C(),w()}},[i,r,o,d,s,l,c,h,_,v,N,T,S,P,I,q,ie,A,F]}class _r extends Ne{constructor(e){super(),Te(this,e,Pp,Ap,de,{chosenBuild:0,ddOpen:1,dropdown:2})}}function Po(t){let e,n=(t[6]>t[5]*.8?t[11].slice(0,20)+"<b>...</b>":t[11])+"",s;return{c(){e=g("span"),ye(()=>t[15].call(e))},m(i,r){W(i,e,r),e.innerHTML=n,s=rt(e,t[15].bind(e))},p(i,r){r[0]&2144&&n!==(n=(i[6]>i[5]*.8?i[11].slice(0,20)+"<b>...</b>":i[11])+"")&&(e.innerHTML=n)},d(i){i&&L(e),s()}}}function Mo(t){let e;return{c(){e=g("span"),e.textContent="New changes! Exiting will erase them.",m(e,"id","alert")},m(n,s){W(n,e,s)},d(n){n&&L(e)}}}function Mp(t){let e,n,s,i,r,o=t[11],a,l,u,d,c,f,h,_,y,w,v,N,C,T,S=275-t[2].length+"",P,I,q,ie,A,F,R,Y,Q,k,x,ee,j,te,fe,H,b,O,V,ne,Pe,E=Po(t),oe=t[1]!=null&&t[1]!=t[2]&&Mo();function he(le){t[26](le)}function Ae(le){t[27](le)}function Ot(le){t[28](le)}let Rt={};return t[0]!==void 0&&(Rt.chosenBuild=t[0]),t[3]!==void 0&&(Rt.ddOpen=t[3]),t[9]!==void 0&&(Rt.dropdown=t[9]),te=new _r({props:Rt}),Z.push(()=>we(te,"chosenBuild",he)),Z.push(()=>we(te,"ddOpen",Ae)),Z.push(()=>we(te,"dropdown",Ot)),te.$on("buildSelect",t[29]),{c(){e=g("div"),n=g("div"),s=g("span"),s.textContent="Save to:",i=M(),r=g("button"),E.c(),a=M(),l=g("iconify-icon"),c=M(),f=g("div"),h=g("div"),_=g("span"),_.textContent="Description / Notes:",y=M(),oe&&oe.c(),w=M(),v=g("textarea"),C=M(),T=g("span"),P=se(S),I=M(),q=g("div"),ie=g("div"),A=g("button"),F=se("CANCEL"),Y=M(),Q=g("div"),k=g("button"),x=se("SAVE"),j=M(),me(te.$$.fragment),qt(l,"icon","iconamoon:arrow-down-2-fill"),m(r,"id","firstFocusable"),r.disabled=u=t[12].save.status==0,m(r,"class","promptDDButton svelte-106wt5q"),ye(()=>t[17].call(r)),J(r,"ddOpen",t[3]),m(n,"class","chosenBuildCont"),m(v,"class","buildDescInput"),v.disabled=N=t[12].save.status==0,m(v,"placeholder","[Empty]"),m(v,"maxlength","275"),m(v,"autocomplete","off"),m(T,"class","charCounter"),m(T,"id","buildDesc"),m(f,"class","buildDescCont"),A.disabled=R=t[12].save.status==0,m(k,"id","lastFocusable"),k.disabled=ee=t[12].save.status==0,m(q,"class","promptOptions"),m(e,"class","buildSaver")},m(le,He){W(le,e,He),p(e,n),p(n,s),p(n,i),p(n,r),E.m(r,null),p(r,a),p(r,l),t[16](r),d=rt(r,t[17].bind(r)),p(e,c),p(e,f),p(f,h),p(h,_),p(h,y),oe&&oe.m(h,null),p(f,w),p(f,v),t[19](v),st(v,t[10]),p(f,C),p(f,T),p(T,P),p(e,I),p(e,q),p(q,ie),p(ie,A),p(A,F),t[23](A),p(q,Y),p(q,Q),p(Q,k),p(k,x),p(e,j),_e(te,e,null),V=!0,ne||(Pe=[D(window,"mousedown",t[14]),D(r,"click",t[18]),D(r,"keydown",Gt),D(v,"input",t[20]),D(v,"input",t[21]),D(v,"keydown",t[22]),D(A,"click",t[24]),D(k,"click",t[25]),D(k,"keydown",pn),D(e,"introstart",t[30]),D(e,"keydown",t[31])],ne=!0)},p(le,He){He[0]&2048&&de(o,o=le[11])?(E.d(1),E=Po(le),E.c(),E.m(r,a)):E.p(le,He),(!V||He[0]&4096&&u!==(u=le[12].save.status==0))&&(r.disabled=u),(!V||He[0]&8)&&J(r,"ddOpen",le[3]),le[1]!=null&&le[1]!=le[2]?oe||(oe=Mo(),oe.c(),oe.m(h,null)):oe&&(oe.d(1),oe=null),(!V||He[0]&4096&&N!==(N=le[12].save.status==0))&&(v.disabled=N),He[0]&1024&&st(v,le[10]),(!V||He[0]&4)&&S!==(S=275-le[2].length+"")&&ke(P,S),(!V||He[0]&4096&&R!==(R=le[12].save.status==0))&&(A.disabled=R),(!V||He[0]&4096&&ee!==(ee=le[12].save.status==0))&&(k.disabled=ee);const Kn={};!fe&&He[0]&1&&(fe=!0,Kn.chosenBuild=le[0],ve(()=>fe=!1)),!H&&He[0]&8&&(H=!0,Kn.ddOpen=le[3],ve(()=>H=!1)),!b&&He[0]&512&&(b=!0,Kn.dropdown=le[9],ve(()=>b=!1)),te.$set(Kn)},i(le){V||(z(te.$$.fragment,le),le&&ye(()=>{V&&(O||(O=Re(e,lt,{duration:250},!0)),O.run(1))}),V=!0)},o(le){G(te.$$.fragment,le),le&&(O||(O=Re(e,lt,{duration:250},!1)),O.run(0)),V=!1},d(le){le&&L(e),E.d(le),t[16](null),d(),oe&&oe.d(),t[19](null),t[23](null),pe(te),le&&O&&O.end(),ne=!1,be(Pe)}}}function Lp(t,e,n){let s,i,r,o,a,l,u,d;K(t,$,O=>n(12,o=O)),K(t,Ye,O=>n(32,a=O)),K(t,Ze,O=>n(33,l=O)),K(t,Et,O=>n(34,u=O)),K(t,ft,O=>n(35,d=O));let c=!1,f,h,_,y,w,v,N=Object.entries(l)[0],C=null;function T(){U($,o.save.status=0,o);let O=Ua(d,u),V=C==null?i:C==""?"[Empty]":C,ne=N[1].id;O.name=s,O.desc=V,Fs(_t(an(un),`builds/${ne}`),O).then(()=>{U($,o.save.status=1,o);let Pe={...l};Pe[s].desc=V,fr(),Ze.update(()=>Pe),U(Ye,a=O,a),U(Ye,a.id=ne,a)}).catch(()=>{U($,o.save.status=-1,o),U($,o.message="firebase_fail",o)})}const S=O=>{!f.contains(O.target)&&!v.contains(O.target)&&n(3,c=!1)};function P(){_=this.offsetWidth,n(6,_)}function I(O){Z[O?"unshift":"push"](()=>{f=O,n(4,f)})}function q(){h=this.offsetWidth,n(5,h)}const ie=()=>{o.save.status!=0&&n(3,c=!c)};function A(O){Z[O?"unshift":"push"](()=>{y=O,n(7,y)})}function F(){r=this.value,n(10,r),n(1,C),n(2,i),n(0,N)}const R=O=>{n(1,C=Es(O.target.value,275))},Y=O=>{o.save.status==0&&O.preventDefault(),wi(y,O.target.value,275)};function Q(O){Z[O?"unshift":"push"](()=>{w=O,n(8,w)})}const k=()=>{o.save.status!=0&&U($,o.save.ongoing=!1,o)},x=()=>{o.save.status!=0&&T()};function ee(O){N=O,n(0,N)}function j(O){c=O,n(3,c)}function te(O){v=O,n(9,v)}const fe=()=>n(1,C=null),H=()=>w.focus(),b=O=>{O.key=="Escape"&&(n(3,c=!1),f.focus())};return t.$$.update=()=>{t.$$.dirty[0]&1&&n(11,s=N[0]),t.$$.dirty[0]&1&&n(2,i=N[1].desc),t.$$.dirty[0]&6&&n(10,r=C??i)},[N,C,i,c,f,h,_,y,w,v,r,s,o,T,S,P,I,q,ie,A,F,R,Y,Q,k,x,ee,j,te,fe,H,b]}class Bp extends Ne{constructor(e){super(),Te(this,e,Lp,Mp,de,{},null,[-1,-1])}}function Fp(t){let e,n,s,i,r,o,a,l,u;return{c(){e=g("div"),n=g("span"),n.textContent="ID:",s=M(),i=g("input"),m(i,"class","buildIDInput svelte-1wfx9qu"),i.disabled=r=t[11].load.status==0,m(i,"type","text"),m(i,"placeholder","Example ID: -NDqeA1Scn0EAJcYWN3b"),m(i,"maxlength","25"),m(e,"class","buildIDCont svelte-1wfx9qu")},m(d,c){W(d,e,c),p(e,n),p(e,s),p(e,i),t[21](i),st(i,t[10]),a=!0,l||(u=[D(i,"input",t[22]),D(i,"input",t[23]),D(i,"keydown",t[24])],l=!0)},p(d,c){(!a||c[0]&2048&&r!==(r=d[11].load.status==0))&&(i.disabled=r),c[0]&1024&&i.value!==d[10]&&st(i,d[10])},i(d){a||(d&&ye(()=>{a&&(o||(o=Re(e,je,{duration:150},!0)),o.run(1))}),a=!0)},o(d){d&&(o||(o=Re(e,je,{duration:150},!1)),o.run(0)),a=!1},d(d){d&&L(e),t[21](null),d&&o&&o.end(),l=!1,be(u)}}}function Wp(t){let e,n,s,i,r=t[9],o,a,l,u,d,c,f,h,_=Lo(t);return{c(){e=g("div"),n=g("span"),n.textContent="Load:",s=M(),i=g("button"),_.c(),o=M(),a=g("iconify-icon"),qt(a,"icon","iconamoon:arrow-down-2-fill"),i.disabled=l=t[11].load.status==0,m(i,"class","promptDDButton svelte-1wfx9qu"),ye(()=>t[19].call(i)),J(i,"ddOpen",t[8]),m(e,"class","chosenBuildCont svelte-1wfx9qu")},m(y,w){W(y,e,w),p(e,n),p(e,s),p(e,i),_.m(i,null),p(i,o),p(i,a),t[18](i),u=rt(i,t[19].bind(i)),c=!0,f||(h=D(i,"click",t[20]),f=!0)},p(y,w){w[0]&512&&de(r,r=y[9])?(_.d(1),_=Lo(y),_.c(),_.m(i,o)):_.p(y,w),(!c||w[0]&2048&&l!==(l=y[11].load.status==0))&&(i.disabled=l),(!c||w[0]&256)&&J(i,"ddOpen",y[8])},i(y){c||(y&&ye(()=>{c&&(d||(d=Re(e,je,{duration:150},!0)),d.run(1))}),c=!0)},o(y){y&&(d||(d=Re(e,je,{duration:150},!1)),d.run(0)),c=!1},d(y){y&&L(e),_.d(y),t[18](null),u(),y&&d&&d.end(),f=!1,h()}}}function Lo(t){let e,n=(t[6]>t[5]*.7?t[9].slice(0,20)+"<b>...</b>":t[9])+"",s;return{c(){e=g("span"),ye(()=>t[17].call(e))},m(i,r){W(i,e,r),e.innerHTML=n,s=rt(e,t[17].bind(e))},p(i,r){r[0]&608&&n!==(n=(i[6]>i[5]*.7?i[9].slice(0,20)+"<b>...</b>":i[9])+"")&&(e.innerHTML=n)},d(i){i&&L(e),s()}}}function Bo(t){let e,n,s,i,r;function o(d){t[27](d)}function a(d){t[28](d)}function l(d){t[29](d)}let u={};return t[3]!==void 0&&(u.chosenBuild=t[3]),t[8]!==void 0&&(u.ddOpen=t[8]),t[7]!==void 0&&(u.dropdown=t[7]),e=new _r({props:u}),Z.push(()=>we(e,"chosenBuild",o)),Z.push(()=>we(e,"ddOpen",a)),Z.push(()=>we(e,"dropdown",l)),{c(){me(e.$$.fragment)},m(d,c){_e(e,d,c),r=!0},p(d,c){const f={};!n&&c[0]&8&&(n=!0,f.chosenBuild=d[3],ve(()=>n=!1)),!s&&c[0]&256&&(s=!0,f.ddOpen=d[8],ve(()=>s=!1)),!i&&c[0]&128&&(i=!0,f.dropdown=d[7],ve(()=>i=!1)),e.$set(f)},i(d){r||(z(e.$$.fragment,d),r=!0)},o(d){G(e.$$.fragment,d),r=!1},d(d){pe(e,d)}}}function qp(t){let e,n,s,i,r,o,a,l,u,d,c,f,h,_,y,w,v,N,C,T,S,P,I,q,ie,A,F,R,Y,Q,k,x,ee;const j=[Wp,Fp],te=[];function fe(b,O){return b[2]?0:1}w=fe(t),v=te[w]=j[w](t);let H=t[2]&&Bo(t);return{c(){e=g("div"),n=g("span"),n.textContent="Load build via:",s=M(),i=g("div"),r=g("div"),o=g("button"),a=se("Local saves"),u=M(),d=g("div"),c=g("button"),f=se("Exported ID"),_=M(),y=g("div"),v.c(),N=M(),C=g("div"),T=g("div"),S=g("button"),P=se("CANCEL"),q=M(),ie=g("div"),A=g("button"),F=se("LOAD"),Y=M(),H&&H.c(),m(n,"class","svelte-1wfx9qu"),m(o,"id","firstFocusable"),o.disabled=l=t[11].load.status==0||!t[12],m(o,"class","svelte-1wfx9qu"),J(o,"chosen",t[2]),J(o,"unavailable",!t[12]),m(r,"class","svelte-1wfx9qu"),c.disabled=h=t[11].load.status==0,m(c,"class","svelte-1wfx9qu"),J(c,"chosen",!t[2]),m(d,"class","svelte-1wfx9qu"),m(i,"class","loadMethodRadio svelte-1wfx9qu"),m(y,"class","loadMethodCont svelte-1wfx9qu"),S.disabled=I=t[11].load.status==0,m(A,"id","lastFocusable"),A.disabled=R=t[11].load.status==0,m(C,"class","promptOptions svelte-1wfx9qu"),m(e,"class","buildLoader svelte-1wfx9qu")},m(b,O){W(b,e,O),p(e,n),p(e,s),p(e,i),p(i,r),p(r,o),p(o,a),p(i,u),p(i,d),p(d,c),p(c,f),p(e,_),p(e,y),te[w].m(y,null),p(e,N),p(e,C),p(C,T),p(T,S),p(S,P),t[25](S),p(C,q),p(C,ie),p(ie,A),p(A,F),p(e,Y),H&&H.m(e,null),k=!0,x||(ee=[D(window,"mousedown",t[14]),D(o,"click",t[15]),D(o,"keydown",Gt),D(c,"click",t[16]),D(S,"click",t[26]),D(A,"keydown",pn),D(A,"click",t[13]),D(e,"introstart",t[30]),D(e,"keydown",t[31])],x=!0)},p(b,O){(!k||O[0]&6144&&l!==(l=b[11].load.status==0||!b[12]))&&(o.disabled=l),(!k||O[0]&4)&&J(o,"chosen",b[2]),(!k||O[0]&4096)&&J(o,"unavailable",!b[12]),(!k||O[0]&2048&&h!==(h=b[11].load.status==0))&&(c.disabled=h),(!k||O[0]&4)&&J(c,"chosen",!b[2]);let V=w;w=fe(b),w===V?te[w].p(b,O):(Me(),G(te[V],1,1,()=>{te[V]=null}),Le(),v=te[w],v?v.p(b,O):(v=te[w]=j[w](b),v.c()),z(v,1),v.m(y,null)),(!k||O[0]&2048&&I!==(I=b[11].load.status==0))&&(S.disabled=I),(!k||O[0]&2048&&R!==(R=b[11].load.status==0))&&(A.disabled=R),b[2]?H?(H.p(b,O),O[0]&4&&z(H,1)):(H=Bo(b),H.c(),z(H,1),H.m(e,null)):H&&(Me(),G(H,1,1,()=>{H=null}),Le())},i(b){k||(z(v),z(H),b&&ye(()=>{k&&(Q||(Q=Re(e,lt,{duration:250},!0)),Q.run(1))}),k=!0)},o(b){G(v),G(H),b&&(Q||(Q=Re(e,lt,{duration:250},!1)),Q.run(0)),k=!1},d(b){b&&L(e),te[w].d(),t[25](null),H&&H.d(),b&&Q&&Q.end(),x=!1,be(ee)}}}function zp(t,e,n){let s,i,r;K(t,$,H=>n(11,s=H)),K(t,Ze,H=>n(32,i=H)),K(t,mt,H=>n(12,r=H));const o=Nt();let a,l,u,d,c,f,h=r,_=!1,y=r?Object.entries(i)[0]:null,w,v="";function N(){if(!h&&!v.startsWith("-N")){U($,s.load.status=-1,s),U($,s.message="invalid_id",s);return}let H=qa(an(un,"builds"),Wa()),b=0;U($,s.load.status=0,s),Fa(H).then(O=>{let V=h?y[1].id:v;for(let ne in O.val()){if(ne==V){o("buildLoad",{build:O.val()[ne],id:ne});break}else b==Object.keys(O.val()).length-1&&(U($,s.load.status=-1,s),U($,s.message=h?"not_found":"invalid_id",s));b++}}).catch(()=>{U($,s.load.status=-1,s),U($,s.message="firebase_fail",s)})}const C=H=>{a&&!a.contains(H.target)&&!f.contains(H.target)&&n(8,_=!1)},T=()=>{s.load.status!=0&&r&&n(2,h=!0)},S=()=>{s.load.status!=0&&n(2,h=!1)};function P(){c=this.offsetWidth,n(6,c)}function I(H){Z[H?"unshift":"push"](()=>{a=H,n(0,a)})}function q(){d=this.offsetWidth,n(5,d)}const ie=()=>{s.load.status!=0&&n(8,_=!_)};function A(H){Z[H?"unshift":"push"](()=>{u=H,n(1,u)})}function F(){v=this.value,n(10,v)}const R=H=>{n(10,v=Es(H.target.value,25))},Y=H=>{s.load.status==0&&H.preventDefault()};function Q(H){Z[H?"unshift":"push"](()=>{l=H,n(4,l)})}const k=()=>{s.load.status!=0&&U($,s.load.ongoing=!1,s)};function x(H){y=H,n(3,y)}function ee(H){_=H,n(8,_)}function j(H){f=H,n(7,f)}const te=()=>l.focus(),fe=H=>{H.key=="Escape"&&(n(8,_=!1),a.focus())};return t.$$.update=()=>{t.$$.dirty[0]&8&&n(9,w=y!=null?y[0]:null),t.$$.dirty[0]&7&&setTimeout(h?()=>a.focus():()=>u.focus())},[a,u,h,y,l,d,c,f,_,w,v,s,r,N,C,T,S,P,I,q,ie,A,F,R,Y,Q,k,x,ee,j,te,fe]}class Hp extends Ne{constructor(e){super(),Te(this,e,zp,qp,de,{},null,[-1,-1])}}function Fo(t){let e,n=(t[3]>t[4]*.8?t[8].slice(0,20)+"<b>...</b>":t[8])+"",s;return{c(){e=g("span"),ye(()=>t[12].call(e))},m(i,r){W(i,e,r),e.innerHTML=n,s=rt(e,t[12].bind(e))},p(i,r){r&280&&n!==(n=(i[3]>i[4]*.8?i[8].slice(0,20)+"<b>...</b>":i[8])+"")&&(e.innerHTML=n)},d(i){i&&L(e),s()}}}function Up(t){let e,n,s,i,r,o=t[8],a,l,u,d,c,f,h,_,y,w,v,N,C,T,S,P,I,q,ie,A,F,R,Y,Q,k,x,ee,j,te=Fo(t);f=new Va({props:{text:"I'm aware that this action is irreversible and want to erase this build from the database."}}),f.$on("toggle",t[16]);function fe(V){t[21](V)}function H(V){t[22](V)}function b(V){t[23](V)}let O={};return t[0]!==void 0&&(O.chosenBuild=t[0]),t[6]!==void 0&&(O.ddOpen=t[6]),t[5]!==void 0&&(O.dropdown=t[5]),F=new _r({props:O}),Z.push(()=>we(F,"chosenBuild",fe)),Z.push(()=>we(F,"ddOpen",H)),Z.push(()=>we(F,"dropdown",b)),{c(){e=g("div"),n=g("div"),s=g("span"),s.textContent="Delete:",i=M(),r=g("button"),te.c(),a=M(),l=g("iconify-icon"),c=M(),me(f.$$.fragment),h=M(),_=g("div"),y=g("div"),w=g("button"),v=se("CANCEL"),T=M(),S=g("div"),P=g("button"),I=se("DELETE"),A=M(),me(F.$$.fragment),qt(l,"icon","iconamoon:arrow-down-2-fill"),m(r,"class","promptDDButton svelte-1t9ajmz"),m(r,"id","firstFocusable"),r.disabled=u=t[9].delete.status==0,ye(()=>t[14].call(r)),J(r,"ddOpen",t[6]),m(n,"class","chosenBuildCont"),m(w,"id",N=t[7]?"":"lastFocusable"),w.disabled=C=t[9].delete.status==0,P.disabled=q=!t[7]||t[9].delete.status==0,m(P,"id",ie=t[7]?"lastFocusable":""),J(P,"unavailable",!t[7]),m(_,"class","promptOptions svelte-1t9ajmz"),m(e,"class","buildDeleter svelte-1t9ajmz")},m(V,ne){W(V,e,ne),p(e,n),p(n,s),p(n,i),p(n,r),te.m(r,null),p(r,a),p(r,l),t[13](r),d=rt(r,t[14].bind(r)),p(e,c),_e(f,e,null),p(e,h),p(e,_),p(_,y),p(y,w),p(w,v),t[17](w),p(_,T),p(_,S),p(S,P),p(P,I),p(e,A),_e(F,e,null),x=!0,ee||(j=[D(window,"mousedown",t[11]),D(r,"click",t[15]),D(r,"keydown",Gt),D(w,"click",t[18]),D(w,"keydown",t[19]),D(P,"click",t[20]),D(P,"keydown",pn),D(e,"introstart",t[24]),D(e,"keydown",t[25])],ee=!0)},p(V,[ne]){ne&256&&de(o,o=V[8])?(te.d(1),te=Fo(V),te.c(),te.m(r,a)):te.p(V,ne),(!x||ne&512&&u!==(u=V[9].delete.status==0))&&(r.disabled=u),(!x||ne&64)&&J(r,"ddOpen",V[6]),(!x||ne&128&&N!==(N=V[7]?"":"lastFocusable"))&&m(w,"id",N),(!x||ne&512&&C!==(C=V[9].delete.status==0))&&(w.disabled=C),(!x||ne&640&&q!==(q=!V[7]||V[9].delete.status==0))&&(P.disabled=q),(!x||ne&128&&ie!==(ie=V[7]?"lastFocusable":""))&&m(P,"id",ie),(!x||ne&128)&&J(P,"unavailable",!V[7]);const Pe={};!R&&ne&1&&(R=!0,Pe.chosenBuild=V[0],ve(()=>R=!1)),!Y&&ne&64&&(Y=!0,Pe.ddOpen=V[6],ve(()=>Y=!1)),!Q&&ne&32&&(Q=!0,Pe.dropdown=V[5],ve(()=>Q=!1)),F.$set(Pe)},i(V){x||(z(f.$$.fragment,V),z(F.$$.fragment,V),V&&ye(()=>{x&&(k||(k=Re(e,lt,{duration:250},!0)),k.run(1))}),x=!0)},o(V){G(f.$$.fragment,V),G(F.$$.fragment,V),V&&(k||(k=Re(e,lt,{duration:250},!1)),k.run(0)),x=!1},d(V){V&&L(e),te.d(V),t[13](null),d(),pe(f),t[17](null),pe(F),V&&k&&k.end(),ee=!1,be(j)}}}function Vp(t,e,n){let s,i,r,o;K(t,$,k=>n(9,i=k)),K(t,Ze,k=>n(26,r=k)),K(t,Ye,k=>n(27,o=k));let a,l,u,d,c,f=!1,h=Object.entries(r)[0],_=!1;function y(){U($,i.delete.status=0,i);let k=h[1].id;jh(_t(an(un),`builds/${k}`)).then(()=>{U($,i.delete.status=1,i),o&&k==o.id&&U(Ye,o=null,o);let x={...r};delete x[s],fr(),Ze.update(()=>x)}).catch(x=>{console.log(x),U($,i.delete.status=-1,i),U($,i.message="firebase_fail",i)})}const w=k=>{!l.contains(k.target)&&!c.contains(k.target)&&n(6,f=!1)};function v(){u=this.offsetWidth,n(3,u)}function N(k){Z[k?"unshift":"push"](()=>{l=k,n(2,l)})}function C(){d=this.offsetWidth,n(4,d)}const T=()=>{i.delete.status!=0&&n(6,f=!f)},S=k=>n(7,_=k.detail);function P(k){Z[k?"unshift":"push"](()=>{a=k,n(1,a)})}const I=()=>{i.delete.status!=0&&U($,i.delete.ongoing=!1,i)},q=k=>{_||pn(k)},ie=()=>{_&&i.delete.status!=0&&y()};function A(k){h=k,n(0,h)}function F(k){f=k,n(6,f)}function R(k){c=k,n(5,c)}const Y=()=>a.focus(),Q=k=>{k.key=="Escape"&&(n(6,f=!1),l.focus())};return t.$$.update=()=>{t.$$.dirty&1&&n(8,s=h[0])},[h,a,l,u,d,c,f,_,s,i,y,w,v,N,C,T,S,P,I,q,ie,A,F,R,Y,Q]}class jp extends Ne{constructor(e){super(),Te(this,e,Vp,Up,de,{})}}const{document:$n,window:Zt}=Qa;function Wo(t,e,n){const s=t.slice();return s[40]=e[n],s}function qo(t,e,n){const s=t.slice();return s[40]=e[n],s}function zo(t){let e;return{c(){e=g("link"),m(e,"rel","preload"),m(e,"as","image"),m(e,"href",t[40])},m(n,s){W(n,e,s)},p:X,d(n){n&&L(e)}}}function Ho(t){let e;return{c(){e=g("style"),e.textContent=`body > div:not(.zoomLevel),\r
            main > :not(.promptCont) {\r
                filter: blur(calc(var(--u) * 0.5));\r
                pointer-events: none;\r
            }`},m(n,s){W(n,e,s)},d(n){n&&L(e)}}}function Uo(t){let e,n;return{c(){e=g("img"),m(e,"class","background svelte-dhgxbz"),Je(e.src,n=t[40])||m(e,"src",n),m(e,"alt",""),J(e,"active",t[15].indexOf(t[40])==t[7])},m(s,i){W(s,e,i)},p(s,i){i[0]&32896&&J(e,"active",s[15].indexOf(s[40])==s[7])},d(s){s&&L(e)}}}function Vo(t){let e,n,s=Math.floor(t[13][t[2]]*100)+"",i,r,o,a;return{c(){e=g("div"),n=se("Zoom: "),i=se(s),r=g("b"),r.textContent="%",m(e,"class","zoomLevel svelte-dhgxbz")},m(l,u){W(l,e,u),p(e,n),p(e,i),p(e,r),a=!0},p(l,u){(!a||u[0]&4)&&s!==(s=Math.floor(l[13][l[2]]*100)+"")&&ke(i,s)},i(l){a||(l&&ye(()=>{a&&(o||(o=Re(e,je,{duration:150},!0)),o.run(1))}),a=!0)},o(l){l&&(o||(o=Re(e,je,{duration:150},!1)),o.run(0)),a=!1},d(l){l&&L(e),l&&o&&o.end()}}}function jo(t){let e,n,s=t[3].name+"",i,r,o,a,l,u,d,c,f,h,_=t[3].desc+"",y,w,v,N,C;return{c(){e=g("div"),n=g("span"),i=se(s),r=M(),o=g("button"),o.innerHTML='<iconify-icon icon="ri:share-fill"></iconify-icon> <span class="tooltip" id="right">Share build</span>',a=M(),l=g("span"),u=se(`Description / Notes:\r
                `),d=g("br"),c=M(),f=g("br"),h=M(),y=se(_),m(n,"id","buildName"),m(n,"class","svelte-dhgxbz"),m(o,"class","svelte-dhgxbz"),m(l,"class","tooltip"),m(l,"id","bottom"),m(e,"class","currentBuild svelte-dhgxbz"),J(e,"no-tooltip",t[8])},m(T,S){W(T,e,S),p(e,n),p(n,i),p(e,r),p(e,o),p(e,a),p(e,l),p(l,u),p(l,d),p(l,c),p(l,f),p(l,h),p(l,y),v=!0,N||(C=[D(o,"click",t[24]),D(o,"mouseenter",t[25]),D(o,"mouseleave",t[26])],N=!0)},p(T,S){(!v||S[0]&8)&&s!==(s=T[3].name+"")&&ke(i,s),(!v||S[0]&8)&&_!==(_=T[3].desc+"")&&ke(y,_),(!v||S[0]&256)&&J(e,"no-tooltip",T[8])},i(T){v||(T&&ye(()=>{v&&(w||(w=Re(e,je,{duration:100},!0)),w.run(1))}),v=!0)},o(T){T&&(w||(w=Re(e,je,{duration:100},!1)),w.run(0)),v=!1},d(T){T&&L(e),T&&w&&w.end(),N=!1,be(C)}}}function Gp(t){let e,n,s;return n=new jp({}),{c(){e=g("div"),me(n.$$.fragment),m(e,"class","promptCont svelte-dhgxbz")},m(i,r){W(i,e,r),_e(n,e,null),s=!0},p:X,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&L(e),pe(n)}}}function xp(t){let e,n,s;return n=new Hp({}),n.$on("buildLoad",t[28]),{c(){e=g("div"),me(n.$$.fragment),m(e,"class","promptCont svelte-dhgxbz")},m(i,r){W(i,e,r),_e(n,e,null),s=!0},p:X,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&L(e),pe(n)}}}function Yp(t){let e,n,s;return n=new Bp({}),{c(){e=g("div"),me(n.$$.fragment),m(e,"class","promptCont svelte-dhgxbz")},m(i,r){W(i,e,r),_e(n,e,null),s=!0},p:X,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&L(e),pe(n)}}}function Kp(t){let e,n,s;return n=new dp({}),{c(){e=g("div"),me(n.$$.fragment),m(e,"class","promptCont svelte-dhgxbz")},m(i,r){W(i,e,r),_e(n,e,null),s=!0},p:X,i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&L(e),pe(n)}}}function Qp(t){let e,n,s,i;function r(a){t[27](a)}let o={};return t[6]!==void 0&&(o.loadID=t[6]),n=new Np({props:o}),Z.push(()=>we(n,"loadID",r)),n.$on("resetActions",t[17]),{c(){e=g("div"),me(n.$$.fragment),m(e,"class","promptCont svelte-dhgxbz")},m(a,l){W(a,e,l),_e(n,e,null),i=!0},p(a,l){const u={};!s&&l[0]&64&&(s=!0,u.loadID=a[6],ve(()=>s=!1)),n.$set(u)},i(a){i||(z(n.$$.fragment,a),i=!0)},o(a){G(n.$$.fragment,a),i=!1},d(a){a&&L(e),pe(n)}}}function Xp(t){let e,n,s,i,r,o,a,l,u,d,c,f,h,_,y,w,v,N,C,T,S,P,I,q,ie,A,F;ye(t[23]);let R=Ve(t[15]),Y=[];for(let b=0;b<R.length;b+=1)Y[b]=zo(qo(t,R,b));let Q=t[10]&&Ho(),k=Ve(t[15]),x=[];for(let b=0;b<k.length;b+=1)x[b]=Uo(Wo(t,k,b));let ee=t[5]&&Vo(t),j=t[3]&&jo(t);c=new ep({}),y=new O_({}),v=new W_({}),C=new J_({}),S=new ap({});const te=[Qp,Kp,Yp,xp,Gp],fe=[];function H(b,O){return b[9]||b[4].share.ongoing?0:b[4].export.ongoing?1:b[4].save.ongoing?2:b[4].load.ongoing&&!b[6]?3:b[4].delete.ongoing?4:-1}return~(I=H(t))&&(q=fe[I]=te[I](t)),{c(){for(let b=0;b<Y.length;b+=1)Y[b].c();e=Wt(),Q&&Q.c(),n=Wt(),s=M(),i=g("div");for(let b=0;b<x.length;b+=1)x[b].c();r=M(),o=g("div"),o.textContent=`${Jp}`,a=M(),ee&&ee.c(),l=M(),u=g("main"),j&&j.c(),d=M(),me(c.$$.fragment),f=M(),h=g("div"),_=g("div"),me(y.$$.fragment),w=M(),me(v.$$.fragment),N=M(),me(C.$$.fragment),T=M(),me(S.$$.fragment),P=M(),q&&q.c(),m(o,"style","position: absolute; right: 0; padding: var(--u); font-size: calc(var(--u) * 2.5); color: var(--light);"),m(_,"class","eqCont svelte-dhgxbz"),m(h,"class","calcBox svelte-dhgxbz"),m(h,"id","calc"),m(u,"class","svelte-dhgxbz")},m(b,O){for(let V=0;V<Y.length;V+=1)Y[V]&&Y[V].m($n.head,null);p($n.head,e),Q&&Q.m($n.head,null),p($n.head,n),W(b,s,O),W(b,i,O);for(let V=0;V<x.length;V+=1)x[V]&&x[V].m(i,null);W(b,r,O),W(b,o,O),W(b,a,O),ee&&ee.m(b,O),W(b,l,O),W(b,u,O),j&&j.m(u,null),p(u,d),_e(c,u,null),p(u,f),p(u,h),p(h,_),_e(y,_,null),p(_,w),_e(v,_,null),p(h,N),_e(C,h,null),p(u,T),_e(S,u,null),p(u,P),~I&&fe[I].m(u,null),ie=!0,A||(F=[D(Zt,"storage",t[20]),D(Zt,"wheel",t[21],{passive:!1}),D(Zt,"keydown",t[22]),D(Zt,"resize",t[23])],A=!0)},p(b,O){if(O[0]&32768){R=Ve(b[15]);let ne;for(ne=0;ne<R.length;ne+=1){const Pe=qo(b,R,ne);Y[ne]?Y[ne].p(Pe,O):(Y[ne]=zo(Pe),Y[ne].c(),Y[ne].m(e.parentNode,e))}for(;ne<Y.length;ne+=1)Y[ne].d(1);Y.length=R.length}if(b[10]?Q||(Q=Ho(),Q.c(),Q.m(n.parentNode,n)):Q&&(Q.d(1),Q=null),O[0]&32896){k=Ve(b[15]);let ne;for(ne=0;ne<k.length;ne+=1){const Pe=Wo(b,k,ne);x[ne]?x[ne].p(Pe,O):(x[ne]=Uo(Pe),x[ne].c(),x[ne].m(i,null))}for(;ne<x.length;ne+=1)x[ne].d(1);x.length=k.length}b[5]?ee?(ee.p(b,O),O[0]&32&&z(ee,1)):(ee=Vo(b),ee.c(),z(ee,1),ee.m(l.parentNode,l)):ee&&(Me(),G(ee,1,1,()=>{ee=null}),Le()),b[3]?j?(j.p(b,O),O[0]&8&&z(j,1)):(j=jo(b),j.c(),z(j,1),j.m(u,d)):j&&(Me(),G(j,1,1,()=>{j=null}),Le());let V=I;I=H(b),I===V?~I&&fe[I].p(b,O):(q&&(Me(),G(fe[V],1,1,()=>{fe[V]=null}),Le()),~I?(q=fe[I],q?q.p(b,O):(q=fe[I]=te[I](b),q.c()),z(q,1),q.m(u,null)):q=null)},i(b){ie||(z(ee),z(j),z(c.$$.fragment,b),z(y.$$.fragment,b),z(v.$$.fragment,b),z(C.$$.fragment,b),z(S.$$.fragment,b),z(q),ie=!0)},o(b){G(ee),G(j),G(c.$$.fragment,b),G(y.$$.fragment,b),G(v.$$.fragment,b),G(C.$$.fragment,b),G(S.$$.fragment,b),G(q),ie=!1},d(b){b&&(L(s),L(i),L(r),L(o),L(a),L(l),L(u)),Ct(Y,b),L(e),Q&&Q.d(b),L(n),Ct(x,b),ee&&ee.d(b),j&&j.d(),pe(c),pe(y),pe(v),pe(C),pe(S),~I&&fe[I].d(),A=!1,be(F)}}}let Jp="3.17.8-alpha";function Zp(t,e,n){let s,i,r,o,a,l,u,d,c,f,h;K(t,Ye,E=>n(3,i=E)),K(t,$,E=>n(4,r=E)),K(t,In,E=>n(10,o=E)),K(t,Di,E=>n(19,a=E)),K(t,rs,E=>n(32,l=E)),K(t,Et,E=>n(33,u=E)),K(t,Tn,E=>n(34,d=E)),K(t,ft,E=>n(35,c=E)),K(t,mt,E=>n(11,f=E)),K(t,Ze,E=>n(12,h=E));let _,y,w,v=7,N=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],C=!1,T,S=new URLSearchParams(window.location.search).get("id");su(()=>{if(S)if(U($,r.load.ongoing=!0,r),!S.startsWith("-N"))U($,r.load.status=-1,r),U($,r.message="invalid_id",r);else{U($,r.load.status=0,r);let E=qa(an(un,"builds"),Wa()),oe=0;Fa(E).then(he=>{for(let Ae in he.val()){if(Ae==S){P(he.val()[Ae],Ae);break}else oe==Object.keys(he.val()).length-1&&(U($,r.load.status=-1,r),U($,r.message="invalid_id",r));oe++}}).catch(()=>{U($,r.load.status=-1,r),U($,r.message="firebase_fail",r)})}n(18,w=y>_),h[Object.keys(h)[0]]&&U(mt,f=!0,f)});function P(E,oe){for(let he in E.eq){let Ae=c[he]||ur;E.eq[he]&&E.eq[he]!=Ae.name?d[he][E.eq[he]].querySelector("button").click():!E.eq[he]&&Ae.name&&d[he][Ae.name].querySelector("button").click()}for(let he of qn){let Ae=u[he]||cr;Ae.name&&l[he][Ae.name].querySelector("button").click()}setTimeout(()=>{for(let he of qn)E.gear[he]&&l[he][E.gear[he]].querySelector("button").click();U($,r.load.ongoing=!1,r),U($,r.load.status=null,r),oe&&(U(Ye,i=E,i),U(Ye,i.id=oe,i),n(6,S=null))})}let I=[],q=[],ie,A,F=9;for(let E=0;E<F;E++)I.push(`backgrounds/BG${E}.jpg`);function R(E){A=Math.floor(Math.random()*E.length)}R(I);function Y(){n(7,ie=A),q.push(A)}Y(),function E(){setTimeout(()=>{if(R(I),!q.length)Y();else if(q.length>3&&(q=q.slice(1)),!q.includes(A))Y();else{let oe=[...Array(F).keys()].filter(he=>!q.includes(he));R(oe),Y()}document.hasFocus&&E()},45e3)}();function Q(){T=setTimeout(()=>{n(5,C=!1)},2e3)}function k(){clearTimeout(T),n(5,C=!0),Q()}function x(){U($,r.export.status=null,r),U($,r.export.ongoing=!1,r),U($,r.save.status=null,r),U($,r.save.ongoing=!1,r),U($,r.load.status=null,r),U($,r.load.ongoing=!1,r),U($,r.delete.status=null,r),U($,r.delete.ongoing=!1,r),U($,r.share.ongoing=!1,r),U($,r.message="",r)}let ee=!1;const j=E=>{if(E.key=="builds")if(E.url.includes("ls=true")){U(Ze,h=JSON.parse(E.newValue),h),U(mt,f=Object.keys(JSON.parse(E.newValue)).length>0,f),x();let oe=Object.keys(JSON.parse(E.oldValue)).filter(he=>!Object.keys(JSON.parse(E.newValue)).includes(he))[0];oe&&i&&oe==i.name&&U(Ye,i=null,i)}else window.localStorage.setItem("builds",JSON.stringify(h))},te=E=>{let oe=E.wheelDeltaY;if(E.ctrlKey){if(E.preventDefault(),N[v]==.2&&oe<0||N[v]==5&&oe>0)return;oe>0?n(2,v++,v):n(2,v--,v),k()}},fe=E=>{E.ctrlKey&&(E.key=="-"||E.key=="+"||E.code=="Equal"||E.key=="0")&&(E.preventDefault(),(E.key=="+"||E.code=="Equal")&&N[v]!=5?n(2,v++,v):E.key=="-"&&N[v]!=.2?n(2,v--,v):E.key=="0"&&N[v]!=1&&n(2,v=7),k()),o&&o_(E)};function H(){n(0,_=Zt.outerHeight),n(1,y=Zt.outerWidth)}const b=()=>{o||U($,r.share.ongoing=!0,r)},O=()=>n(8,ee=!0),V=()=>n(8,ee=!1);function ne(E){S=E,n(6,S)}const Pe=E=>P(E.detail.build,E.detail.id);return t.$$.update=()=>{if(t.$$.dirty[0]&524291&&(y||_)&&(n(18,w=y>_),a))for(let E of a)dr(E.node,E.itemName);t.$$.dirty[0]&262148&&(w?document.documentElement.style.setProperty("--u",`${.75*N[v]}vh`):document.documentElement.style.setProperty("--u","0.75vh")),t.$$.dirty[0]&16&&n(9,s=r.export.status||r.save.status||r.load.status||r.delete.status),t.$$.dirty[0]&16&&U(In,o=r.export.ongoing||r.save.ongoing||r.load.ongoing||r.delete.ongoing||r.share.ongoing,o),t.$$.dirty[0]&8&&(document.title=(i?i.name+" - ":"")+"Fantastic Calculator")},[_,y,v,i,r,C,S,ie,ee,s,o,f,h,N,P,I,k,x,w,a,j,te,fe,H,b,O,V,ne,Pe]}class $p extends Ne{constructor(e){super(),Te(this,e,Zp,Xp,de,{},null,[-1,-1])}}new $p({target:document.body});
