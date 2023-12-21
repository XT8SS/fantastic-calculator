var Za=Object.defineProperty;var $a=(n,e,t)=>e in n?Za(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Et=(n,e,t)=>($a(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function te(){}const Rs=n=>n;function Zr(n){return n()}function vo(){return Object.create(null)}function ge(n){n.forEach(Zr)}function gn(n){return typeof n=="function"}function me(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ts;function Xe(n,e){return n===e?!0:(ts||(ts=document.createElement("a")),ts.href=e,n===ts.href)}function eu(n){return Object.keys(n).length===0}function tu(n,...e){if(n==null){for(const s of e)s(void 0);return te}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function K(n,e,t){n.$$.on_destroy.push(tu(e,t))}function U(n,e,t){return n.set(t),e}function $r(n){return n&&gn(n.destroy)?n.destroy:te}const el=typeof window<"u";let Ti=el?()=>window.performance.now():()=>Date.now(),Ni=el?n=>requestAnimationFrame(n):te;const on=new Set;function tl(n){on.forEach(e=>{e.c(n)||(on.delete(e),e.f())}),on.size!==0&&Ni(tl)}function Di(n){let e;return on.size===0&&Ni(tl),{promise:new Promise(t=>{on.add(e={c:n,f:t})}),abort(){on.delete(e)}}}const nu=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function p(n,e){n.appendChild(e)}function nl(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function su(n){const e=v("style");return e.textContent="/* empty */",iu(nl(n),e),e.sheet}function iu(n,e){return p(n.head||n,e),e.sheet}function F(n,e,t){n.insertBefore(e,t||null)}function P(n){n.parentNode&&n.parentNode.removeChild(n)}function gt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function v(n){return document.createElement(n)}function ou(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function se(n){return document.createTextNode(n)}function A(){return se(" ")}function Gt(){return se("")}function N(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function g(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function xe(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:g(n,e,t)}function sl(n){return n===""?null:+n}function ru(n){return Array.from(n.childNodes)}function Re(n,e){e=""+e,n.data!==e&&(n.data=e)}function ct(n,e){n.value=e??""}function Pe(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}let ns;function lu(){if(ns===void 0){ns=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ns=!0}}return ns}function ft(n,e){getComputedStyle(n).position==="static"&&(n.style.position="relative");const s=v("iframe");s.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),s.setAttribute("aria-hidden","true"),s.tabIndex=-1;const i=lu();let o;return i?(s.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=N(window,"message",r=>{r.source===s.contentWindow&&e()})):(s.src="about:blank",s.onload=()=>{o=N(s.contentWindow,"resize",e),e()}),p(n,s),()=>{(i||o&&s.contentWindow)&&o(),P(s)}}function J(n,e,t){n.classList.toggle(e,!!t)}function il(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class au{constructor(e=!1){Et(this,"is_svg",!1);Et(this,"e");Et(this,"n");Et(this,"t");Et(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=ou(t.nodeName):this.e=v(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)F(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(P)}}const ls=new Map;let as=0;function uu(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function cu(n,e){const t={stylesheet:su(e),rules:{}};return ls.set(n,t),t}function us(n,e,t,s,i,o,r,a=0){const l=16.666/s;let u=`{
`;for(let y=0;y<=1;y+=l){const w=e+(t-e)*o(y);u+=y*100+`%{${r(w,1-w)}}
`}const d=u+`100% {${r(t,1-t)}}
}`,c=`__svelte_${uu(d)}_${a}`,f=nl(n),{stylesheet:h,rules:_}=ls.get(f)||cu(f,n);_[c]||(_[c]=!0,h.insertRule(`@keyframes ${c} ${d}`,h.cssRules.length));const m=n.style.animation||"";return n.style.animation=`${m?`${m}, `:""}${c} ${s}ms linear ${i}ms 1 both`,as+=1,c}function cs(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),as-=i,as||du())}function du(){Ni(()=>{as||(ls.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&P(e)}),ls.clear())})}let Pn;function Nn(n){Pn=n}function ol(){if(!Pn)throw new Error("Function called outside component initialization");return Pn}function fu(n){ol().$$.on_mount.push(n)}function wt(){const n=ol();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const o=il(e,t,{cancelable:s});return i.slice().forEach(r=>{r.call(n,o)}),!o.defaultPrevented}return!0}}const tn=[],$=[];let rn=[];const oi=[],hu=Promise.resolve();let ri=!1;function _u(){ri||(ri=!0,hu.then(rl))}function ve(n){rn.push(n)}function Ee(n){oi.push(n)}const Ys=new Set;let Zt=0;function rl(){if(Zt!==0)return;const n=Pn;do{try{for(;Zt<tn.length;){const e=tn[Zt];Zt++,Nn(e),pu(e.$$)}}catch(e){throw tn.length=0,Zt=0,e}for(Nn(null),tn.length=0,Zt=0;$.length;)$.pop()();for(let e=0;e<rn.length;e+=1){const t=rn[e];Ys.has(t)||(Ys.add(t),t())}rn.length=0}while(tn.length);for(;oi.length;)oi.pop()();ri=!1,Ys.clear(),Nn(n)}function pu(n){if(n.fragment!==null){n.update(),ge(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ve)}}function mu(n){const e=[],t=[];rn.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),rn=e}let En;function Oi(){return En||(En=Promise.resolve(),En.then(()=>{En=null})),En}function Vt(n,e,t){n.dispatchEvent(il(`${e?"intro":"outro"}${t}`))}const rs=new Set;let dt;function Le(){dt={r:0,c:[],p:dt}}function Be(){dt.r||ge(dt.c),dt=dt.p}function W(n,e){n&&n.i&&(rs.delete(n),n.i(e))}function G(n,e,t,s){if(n&&n.o){if(rs.has(n))return;rs.add(n),dt.c.push(()=>{rs.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const Ri={duration:0};function ll(n,e,t){const s={direction:"in"};let i=e(n,t,s),o=!1,r,a,l=0;function u(){r&&cs(n,r)}function d(){const{delay:f=0,duration:h=300,easing:_=Rs,tick:m=te,css:y}=i||Ri;y&&(r=us(n,0,1,h,f,_,y,l++)),m(0,1);const w=Ti()+f,T=w+h;a&&a.abort(),o=!0,ve(()=>Vt(n,!0,"start")),a=Di(b=>{if(o){if(b>=T)return m(1,0),Vt(n,!0,"end"),u(),o=!1;if(b>=w){const I=_((b-w)/h);m(I,1-I)}}return o})}let c=!1;return{start(){c||(c=!0,cs(n),gn(i)?(i=i(s),Oi().then(d)):d())},invalidate(){c=!1},end(){o&&(u(),o=!1)}}}function al(n,e,t){const s={direction:"out"};let i=e(n,t,s),o=!0,r;const a=dt;a.r+=1;let l;function u(){const{delay:d=0,duration:c=300,easing:f=Rs,tick:h=te,css:_}=i||Ri;_&&(r=us(n,1,0,c,d,f,_));const m=Ti()+d,y=m+c;ve(()=>Vt(n,!1,"start")),"inert"in n&&(l=n.inert,n.inert=!0),Di(w=>{if(o){if(w>=y)return h(0,1),Vt(n,!1,"end"),--a.r||ge(a.c),!1;if(w>=m){const T=f((w-m)/c);h(1-T,T)}}return o})}return gn(i)?Oi().then(()=>{i=i(s),u()}):u(),{end(d){d&&"inert"in n&&(n.inert=l),d&&i.tick&&i.tick(1,0),o&&(r&&cs(n,r),o=!1)}}}function Ae(n,e,t,s){let o=e(n,t,{direction:"both"}),r=s?0:1,a=null,l=null,u=null,d;function c(){u&&cs(n,u)}function f(_,m){const y=_.b-r;return m*=Math.abs(y),{a:r,b:_.b,d:y,duration:m,start:_.start,end:_.start+m,group:_.group}}function h(_){const{delay:m=0,duration:y=300,easing:w=Rs,tick:T=te,css:b}=o||Ri,I={start:Ti()+m,b:_};_||(I.group=dt,dt.r+=1),"inert"in n&&(_?d!==void 0&&(n.inert=d):(d=n.inert,n.inert=!0)),a||l?l=I:(b&&(c(),u=us(n,r,_,y,m,w,b)),_&&T(0,1),a=f(I,y),ve(()=>Vt(n,_,"start")),Di(C=>{if(l&&C>l.start&&(a=f(l,y),l=null,Vt(n,a.b,"start"),b&&(c(),u=us(n,r,a.b,a.duration,0,w,o.css))),a){if(C>=a.end)T(r=a.b,1-r),Vt(n,a.b,"end"),l||(a.b?c():--a.group.r||ge(a.group.c)),a=null;else if(C>=a.start){const O=C-a.start;r=a.a+a.d*w(O/a.duration),T(r,1-r)}}return!!(a||l)}))}return{run(_){gn(o)?Oi().then(()=>{o=o({direction:_?"in":"out"}),h(_)}):h(_)},end(){c(),a=l=null}}}function Ve(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ke(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function pe(n){n&&n.c()}function fe(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),ve(()=>{const o=n.$$.on_mount.map(Zr).filter(gn);n.$$.on_destroy?n.$$.on_destroy.push(...o):ge(o),n.$$.on_mount=[]}),i.forEach(ve)}function he(n,e){const t=n.$$;t.fragment!==null&&(mu(t.after_update),ge(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function gu(n,e){n.$$.dirty[0]===-1&&(tn.push(n),_u(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ne(n,e,t,s,i,o,r=null,a=[-1]){const l=Pn;Nn(n);const u=n.$$={fragment:null,ctx:[],props:o,update:te,not_equal:i,bound:vo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:vo(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};r&&r(u.root);let d=!1;if(u.ctx=t?t(n,e.props||{},(c,f,...h)=>{const _=h.length?h[0]:f;return u.ctx&&i(u.ctx[c],u.ctx[c]=_)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](_),d&&gu(n,c)),f}):[],u.update(),d=!0,ge(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const c=ru(e.target);u.fragment&&u.fragment.l(c),c.forEach(P)}else u.fragment&&u.fragment.c();e.intro&&W(n.$$.fragment),fe(n,e.target,e.anchor),rl()}Nn(l)}class De{constructor(){Et(this,"$$");Et(this,"$$set")}$destroy(){he(this,1),this.$destroy=te}$on(e,t){if(!gn(t))return te;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!eu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const bu="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(bu);const $t=[];function Ye(n,e=te){let t;const s=new Set;function i(a){if(me(n,a)&&(n=a,t)){const l=!$t.length;for(const u of s)u[1](),$t.push(u,n);if(l){for(let u=0;u<$t.length;u+=2)$t[u][0]($t[u+1]);$t.length=0}}}function o(a){i(a(n))}function r(a,l=te){const u=[a,l];return s.add(u),s.size===1&&(t=e(i,o)||te),a(n),()=>{s.delete(u),s.size===0&&t&&(t(),t=null)}}return{set:i,update:o,subscribe:r}}let wo=localStorage.getItem("builds"),Co=0,Ot=Ye({}),bt=Ye({}),Ze=Ye({armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0}),Rt=Ye({}),Ai=Ye([]),Ks=Ye({}),$e=Ye(),ul=Ye(!1),st=Ye(wo?JSON.parse(wo):{}),kt=Ye(!1),dn=Ye(!1),Mn=Ye({}),ds=Ye({}),yu=Ye({}),ln=Ye({}),Z=Ye({export:{ongoing:!1,status:null},save:{ongoing:!1,status:null},load:{ongoing:!1,status:null},delete:{ongoing:!1,status:null},share:{ongoing:!1},bonus:{ongoing:!1},message:""});st.subscribe(n=>{Co++,setTimeout(()=>{window.localStorage.setItem("builds",JSON.stringify(n)),Co>1&&window.history.replaceState(null,null,location.origin+location.pathname)})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(n,e){if(!n)throw bn(e)},bn=function(n){return new Error("Firebase Database ("+cl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},vu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],r=n[t++],a=n[t++],l=((i&7)<<18|(o&63)<<12|(r&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const o=n[t++],r=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|r&63)}}return e.join("")},Pi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const o=n[i],r=i+1<n.length,a=r?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,d=o>>2,c=(o&3)<<4|a>>4;let f=(a&15)<<2|u>>6,h=u&63;l||(h=64,r||(f=64)),s.push(t[d],t[c],t[f],t[h])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const c=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||a==null||u==null||c==null)throw new wu;const f=o<<2|a>>4;if(s.push(f),u!==64){const h=a<<4&240|u>>2;if(s.push(h),c!==64){const _=u<<6&192|c;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fl=function(n){const e=dl(n);return Pi.encodeByteArray(e,!0)},fs=function(n){return fl(n).replace(/\./g,"")},li=function(n){try{return Pi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){return hl(void 0,n)}function hl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Eu(t)||(n[t]=hl(n[t],e[t]));return n}function Eu(n){return n!=="__proto__"}/**
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
 */function ku(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Su=()=>ku().__FIREBASE_DEFAULTS__,Iu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&li(n[1]);return e&&JSON.parse(e)},_l=()=>{try{return Su()||Iu()||Tu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nu=n=>{var e,t;return(t=(e=_l())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Du=n=>{const e=Nu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},pl=()=>{var n;return(n=_l())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ou(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[fs(JSON.stringify(t)),fs(JSON.stringify(r)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ml(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ru())}function Au(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gl(){return cl.NODE_ADMIN===!0}function Pu(){try{return typeof indexedDB=="object"}catch{return!1}}function Mu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="FirebaseError";class Qn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Lu,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bl.prototype.create)}}class bl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],r=o?Bu(o,s):"Error",a=`${this.serviceName}: ${r} (${i}).`;return new Qn(i,a,s)}}function Bu(n,e){return n.replace(Fu,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Fu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n){return JSON.parse(n)}function We(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=function(n){let e={},t={},s={},i="";try{const o=n.split(".");e=Ln(li(o[0])||""),t=Ln(li(o[1])||""),i=o[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Wu=function(n){const e=yl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},qu=function(n){const e=yl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function fn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Eo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function hs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function ai(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const o=n[i],r=e[i];if(ko(o)&&ko(r)){if(!ai(o,r))return!1}else if(o!==r)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ko(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)s[c]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let c=0;c<16;c++)s[c]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let c=16;c<80;c++){const f=s[c-3]^s[c-8]^s[c-14]^s[c-16];s[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],r=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^o&(r^a),d=1518500249):(u=o^r^a,d=1859775393):c<60?(u=o&r|a&(o|r),d=2400959708):(u=o^r^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+s[c]&4294967295;l=a,a=r,r=(o<<30|o>>>2)&4294967295,o=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+r&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const o=this.buf_;let r=this.inbuf_;for(;i<t;){if(r===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(o[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(o),r=0;break}}else for(;i<t;)if(o[r]=e[i],++r,++i,r===this.blockSize){this.compress_(o),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)e[s]=this.chain_[i]>>o&255,++s;return e}}function Mi(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const o=i-55296;s++,z(s<n.length,"Surrogate pair missing trail surrogate.");const r=n.charCodeAt(s)-56320;i=65536+(o<<10)+r}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ps=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Bt(n){return n&&n._delegate?n._delegate:n}class Bn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class Vu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new As;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gu(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});s.resolve(o)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);s===a&&r.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),o=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(i,o);const r=this.instances.get(i);return r&&e(r,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ju(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ju(n){return n===qt?void 0:n}function Gu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ie||(Ie={}));const Ku={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},Qu=Ie.INFO,Xu={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},xu=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Xu[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=Qu,this._logHandler=xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ku[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const Ju=(n,e)=>e.some(t=>n instanceof t);let So,Io;function Zu(){return So||(So=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $u(){return Io||(Io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wl=new WeakMap,ui=new WeakMap,Cl=new WeakMap,Qs=new WeakMap,Li=new WeakMap;function ec(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",r)},o=()=>{t(St(n.result)),i()},r=()=>{s(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&wl.set(t,n)}).catch(()=>{}),Li.set(e,n),e}function tc(n){if(ui.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",r),n.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",r),n.addEventListener("abort",r)});ui.set(n,e)}let ci={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ui.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return St(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nc(n){ci=n(ci)}function sc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Xs(this),e,...t);return Cl.set(s,e.sort?e.sort():[e]),St(s)}:$u().includes(n)?function(...e){return n.apply(Xs(this),e),St(wl.get(this))}:function(...e){return St(n.apply(Xs(this),e))}}function ic(n){return typeof n=="function"?sc(n):(n instanceof IDBTransaction&&tc(n),Ju(n,Zu())?new Proxy(n,ci):n)}function St(n){if(n instanceof IDBRequest)return ec(n);if(Qs.has(n))return Qs.get(n);const e=ic(n);return e!==n&&(Qs.set(n,e),Li.set(e,n)),e}const Xs=n=>Li.get(n);function oc(n,e,{blocked:t,upgrade:s,blocking:i,terminated:o}={}){const r=indexedDB.open(n,e),a=St(r);return s&&r.addEventListener("upgradeneeded",l=>{s(St(r.result),l.oldVersion,l.newVersion,St(r.transaction),l)}),t&&r.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const rc=["get","getKey","getAll","getAllKeys","count"],lc=["put","add","delete","clear"],xs=new Map;function To(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xs.get(e))return xs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=lc.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||rc.includes(t)))return;const o=async function(r,...a){const l=this.transaction(r,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&l.done]))[0]};return xs.set(e,o),o}nc(n=>({...n,get:(e,t,s)=>To(e,t)||n.get(e,t,s),has:(e,t)=>!!To(e,t)||n.has(e,t)}));/**
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
 */class ac{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function uc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",No="0.9.23";/**
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
 */const Yt=new vl("@firebase/app"),cc="@firebase/app-compat",dc="@firebase/analytics-compat",fc="@firebase/analytics",hc="@firebase/app-check-compat",_c="@firebase/app-check",pc="@firebase/auth",mc="@firebase/auth-compat",gc="@firebase/database",bc="@firebase/database-compat",yc="@firebase/functions",vc="@firebase/functions-compat",wc="@firebase/installations",Cc="@firebase/installations-compat",Ec="@firebase/messaging",kc="@firebase/messaging-compat",Sc="@firebase/performance",Ic="@firebase/performance-compat",Tc="@firebase/remote-config",Nc="@firebase/remote-config-compat",Dc="@firebase/storage",Oc="@firebase/storage-compat",Rc="@firebase/firestore",Ac="@firebase/firestore-compat",Pc="firebase",Mc="10.6.0";/**
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
 */const fi="[DEFAULT]",Lc={[di]:"fire-core",[cc]:"fire-core-compat",[fc]:"fire-analytics",[dc]:"fire-analytics-compat",[_c]:"fire-app-check",[hc]:"fire-app-check-compat",[pc]:"fire-auth",[mc]:"fire-auth-compat",[gc]:"fire-rtdb",[bc]:"fire-rtdb-compat",[yc]:"fire-fn",[vc]:"fire-fn-compat",[wc]:"fire-iid",[Cc]:"fire-iid-compat",[Ec]:"fire-fcm",[kc]:"fire-fcm-compat",[Sc]:"fire-perf",[Ic]:"fire-perf-compat",[Tc]:"fire-rc",[Nc]:"fire-rc-compat",[Dc]:"fire-gcs",[Oc]:"fire-gcs-compat",[Rc]:"fire-fst",[Ac]:"fire-fst-compat","fire-js":"fire-js",[Pc]:"fire-js-all"};/**
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
 */const _s=new Map,hi=new Map;function Bc(n,e){try{n.container.addComponent(e)}catch(t){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ps(n){const e=n.name;if(hi.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;hi.set(e,n);for(const t of _s.values())Bc(t,n);return!0}function Fc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Wc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},It=new bl("app","Firebase",Wc);/**
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
 */class qc{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
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
 */const Hc=Mc;function El(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw It.create("bad-app-name",{appName:String(i)});if(t||(t=pl()),!t)throw It.create("no-options");const o=_s.get(i);if(o){if(ai(t,o.options)&&ai(s,o.config))return o;throw It.create("duplicate-app",{appName:i})}const r=new Yu(i);for(const l of hi.values())r.addComponent(l);const a=new qc(t,s,r);return _s.set(i,a),a}function zc(n=fi){const e=_s.get(n);if(!e&&n===fi&&pl())return El();if(!e)throw It.create("no-app",{appName:n});return e}function an(n,e,t){var s;let i=(s=Lc[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),r=e.match(/\s|\//);if(o||r){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}ps(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Uc="firebase-heartbeat-database",Vc=1,Fn="firebase-heartbeat-store";let Js=null;function kl(){return Js||(Js=oc(Uc,Vc,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Fn)}}}).catch(n=>{throw It.create("idb-open",{originalErrorMessage:n.message})})),Js}async function jc(n){try{return await(await kl()).transaction(Fn).objectStore(Fn).get(Sl(n))}catch(e){if(e instanceof Qn)Yt.warn(e.message);else{const t=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(t.message)}}}async function Do(n,e){try{const s=(await kl()).transaction(Fn,"readwrite");await s.objectStore(Fn).put(e,Sl(n)),await s.done}catch(t){if(t instanceof Qn)Yt.warn(t.message);else{const s=It.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yt.warn(s.message)}}}function Sl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gc=1024,Yc=30*24*60*60*1e3;class Kc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Oo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const r=new Date(o.date).valueOf();return Date.now()-r<=Yc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Oo(),{heartbeatsToSend:s,unsentEntries:i}=Qc(this._heartbeatsCache.heartbeats),o=fs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Oo(){return new Date().toISOString().substring(0,10)}function Qc(n,e=Gc){const t=[];let s=n.slice();for(const i of n){const o=t.find(r=>r.agent===i.agent);if(o){if(o.dates.push(i.date),Ro(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ro(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Xc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pu()?Mu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Do(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Do(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ro(n){return fs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function xc(n){ps(new Bn("platform-logger",e=>new ac(e),"PRIVATE")),ps(new Bn("heartbeat",e=>new Kc(e),"PRIVATE")),an(di,No,n),an(di,No,"esm2017"),an("fire-js","")}xc("");var Jc="firebase",Zc="10.6.0";/**
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
 */an(Jc,Zc,"app");const Ao="@firebase/database",Po="1.0.1";/**
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
 */let Il="";function $c(n){Il=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ln(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ed(e)}}catch{}return new td},zt=Tl("localStorage"),_i=Tl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new vl("@firebase/database"),nd=function(){let n=1;return function(){return n++}}(),Nl=function(n){const e=Uu(n),t=new zu;t.update(e);const s=t.digest();return Pi.encodeByteArray(s)},Xn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Xn.apply(null,s):typeof s=="object"?e+=We(s):e+=s,e+=" "}return e};let jt=null,Mo=!0;const sd=function(n,e){z(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(un.logLevel=Ie.VERBOSE,jt=un.log.bind(un),e&&_i.set("logging_enabled",!0)):typeof n=="function"?jt=n:(jt=null,_i.remove("logging_enabled"))},je=function(...n){if(Mo===!0&&(Mo=!1,jt===null&&_i.get("logging_enabled")===!0&&sd(!0)),jt){const e=Xn.apply(null,n);jt(e)}},xn=function(n){return function(...e){je(n,...e)}},pi=function(...n){const e="FIREBASE INTERNAL ERROR: "+Xn(...n);un.error(e)},yt=function(...n){const e=`FIREBASE FATAL ERROR: ${Xn(...n)}`;throw un.error(e),new Error(e)},tt=function(...n){const e="FIREBASE WARNING: "+Xn(...n);un.warn(e)},id=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},od=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Kt="[MIN_NAME]",At="[MAX_NAME]",yn=function(n,e){if(n===e)return 0;if(n===Kt||e===At)return-1;if(e===Kt||n===At)return 1;{const t=Lo(n),s=Lo(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},rd=function(n,e){return n===e?0:n<e?-1:1},kn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+We(e))},Fi=function(n){if(typeof n!="object"||n===null)return We(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=We(e[s]),t+=":",t+=Fi(n[e[s]]);return t+="}",t},Dl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function nt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ol=function(n){z(!Bi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,o,r,a,l;n===0?(o=0,r=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),o=a+s,r=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(o=0,r=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(l=t;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);for(l=e;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},ld=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ad=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ud(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const cd=new RegExp("^-?(0*)\\d{1,10}$"),dd=-2147483648,fd=2147483647,Lo=function(n){if(cd.test(n)){const e=Number(n);if(e>=dd&&e<=fd)return e}return null},vn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw tt("Exception was thrown by user callback.",t),e},Math.floor(0))}},hd=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Dn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class _d{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tt(e)}}class cn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="5",Rl="v",Al="s",Pl="r",Ml="f",Ll=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bl="ls",Fl="p",mi="ac",Wl="websocket",ql="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t,s,i,o=!1,r="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=r,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function md(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function zl(n,e,t){z(typeof e=="string","typeof type must == string"),z(typeof t=="object","typeof params must == object");let s;if(e===Wl)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ql)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);md(n)&&(t.ns=n.namespace);const i=[];return nt(t,(o,r)=>{i.push(o+"="+r)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.counters_={}}incrementCounter(e,t=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Cu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs={},$s={};function qi(n){const e=n.toString();return Zs[e]||(Zs[e]=new gd),Zs[e]}function bd(n,e){const t=n.toString();return $s[t]||($s[t]=e()),$s[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&vn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="start",vd="close",wd="pLPCommand",Cd="pRTLPCB",Ul="id",Vl="pw",jl="ser",Ed="cb",kd="seg",Sd="ts",Id="d",Td="dframe",Gl=1870,Yl=30,Nd=Gl-Yl,Dd=25e3,Od=3e4;class nn{constructor(e,t,s,i,o,r,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=o,this.transportSessionId=r,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xn(e),this.stats_=qi(t),this.urlFn=l=>(this.appCheckToken&&(l[mi]=this.appCheckToken),zl(t,ql,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new yd(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Od)),od(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hi((...o)=>{const[r,a,l,u,d]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,r===Bo)this.id=a,this.password=l;else if(r===vd)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+r)},(...o)=>{const[r,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(r,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Bo]="t",s[jl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ed]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Rl]=Wi,this.transportSessionId&&(s[Al]=this.transportSessionId),this.lastSessionId&&(s[Bl]=this.lastSessionId),this.applicationId&&(s[Fl]=this.applicationId),this.appCheckToken&&(s[mi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ll.test(location.hostname)&&(s[Pl]=Ml);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nn.forceAllow_=!0}static forceDisallow(){nn.forceDisallow_=!0}static isAvailable(){return nn.forceAllow_?!0:!nn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ld()&&!ad()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=We(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=fl(t),i=Dl(s,Nd);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Td]="t",s[Ul]=e,s[Vl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=We(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Hi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nd(),window[wd+this.uniqueCallbackIdentifier]=e,window[Cd+this.uniqueCallbackIdentifier]=t,this.myIFrame=Hi.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const r="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ul]=this.myID,e[Vl]=this.myPW,e[jl]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yl+s.length<=Gl;){const r=this.pendingSegs.shift();s=s+"&"+kd+i+"="+r.seg+"&"+Sd+i+"="+r.ts+"&"+Id+i+"="+r.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Dd)),o=()=>{clearTimeout(i),s()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=16384,Ad=45e3;let ms=null;typeof MozWebSocket<"u"?ms=MozWebSocket:typeof WebSocket<"u"&&(ms=WebSocket);class rt{constructor(e,t,s,i,o,r,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xn(this.connId),this.stats_=qi(t),this.connURL=rt.connectionURL_(t,r,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,o){const r={};return r[Rl]=Wi,typeof location<"u"&&location.hostname&&Ll.test(location.hostname)&&(r[Pl]=Ml),t&&(r[Al]=t),s&&(r[Bl]=s),i&&(r[mi]=i),o&&(r[Fl]=o),zl(e,Wl,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let s;gl(),this.mySock=new ms(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ms!==null&&!rt.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ln(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=We(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Dl(t,Rd);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ad))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[nn,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=rt&&rt.isAvailable();let s=t&&!rt.previouslyFailed();if(e.webSocketOnly&&(t||tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[rt];else{const i=this.transports_=[];for(const o of Wn.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);Wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=6e4,Md=5e3,Ld=10*1024,Bd=100*1024,ei="t",Fo="d",Fd="s",Wo="r",Wd="e",qo="o",Ho="a",zo="n",Uo="p",qd="h";class Hd{constructor(e,t,s,i,o,r,a,l,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=r,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xn("c:"+this.id+":"),this.transportManager_=new Wn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Dn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ld?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ei in e){const t=e[ei];t===Ho?this.upgradeIfSecondaryHealthy_():t===Wo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===qo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=kn("t",e),s=kn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ho,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=kn("t",e),s=kn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=kn(ei,e);if(Fo in e){const s=e[Fo];if(t===qd){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===zo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Fd?this.onConnectionShutdown_(s):t===Wo?this.onReset_(s):t===Wd?pi("Server Error: "+s):t===qo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Wi!==s&&tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Dn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Dn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Md))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let o=0;o<i.length;o++)if(i[o].callback===t&&(!s||s===i[o].context)){i.splice(o,1);return}}validateEventType_(e){z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Ql{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ml()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gs}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=32,jo=768;class Se{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ye(){return new Se("")}function _e(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Pt(n){return n.pieces_.length-n.pieceNum_}function Te(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Se(n.pieces_,e)}function Xl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function zd(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function xl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Jl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Se(e,0)}function qe(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Se(t,0)}function de(n){return n.pieceNum_>=n.pieces_.length}function Qe(n,e){const t=_e(n),s=_e(e);if(t===null)return e;if(t===s)return Qe(Te(n),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Zl(n,e){if(Pt(n)!==Pt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function lt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Pt(n)>Pt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Ud{constructor(e,t){this.errorPrefix_=t,this.parts_=xl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ps(this.parts_[s]);$l(this)}}function Vd(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ps(e),$l(n)}function jd(n){const e=n.parts_.pop();n.byteLength_-=Ps(e),n.parts_.length>0&&(n.byteLength_-=1)}function $l(n){if(n.byteLength_>jo)throw new Error(n.errorPrefix_+"has a key path longer than "+jo+" bytes ("+n.byteLength_+").");if(n.parts_.length>Vo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vo+") or object contains a cycle "+Ht(n))}function Ht(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Ql{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new zi}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=1e3,Gd=60*5*1e3,Go=30*1e3,Yd=1.3,Kd=3e4,Qd="server_kill",Yo=3;class mt extends Kl{constructor(e,t,s,i,o,r,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=r,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=mt.nextPersistentConnectionId_++,this.log_=xn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sn,this.maxReconnectDelay_=Gd,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!gl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,o={r:i,a:e,b:t};this.log_(We(o)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new As,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:r=>{const a=r.d;r.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),t.promise}listen(e,t,s,i){this.initConnection_();const o=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+o),this.listens.has(r)||this.listens.set(r,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(r).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(r).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const o={p:s},r="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(r,o,a=>{const l=a.d,u=a.s;mt.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&_t(e,"w")){const s=fn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Go)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Wu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const o=i.s,r=i.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const o={p:e},r="n";i&&(o.q=s,o.t=i),this.sendRequest(r,o)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const o={p:t,d:s};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,r=>{i&&setTimeout(()=>{i(r.s,r.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,o){this.initConnection_();const r={p:t,d:s};o!==void 0&&(r.h=o),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const o=s.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):pi("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Kd&&(this.reconnectDelay_=Sn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Yd)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mt.nextConnectionId_++,o=this.lastSessionId;let r=!1,a=null;const l=function(){a?a.close():(r=!0,s())},u=function(c){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);r?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new Hd(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,h=>{tt(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Qd)},o))}catch(c){this.log_("Failed to get token: "+c),r||(this.repoInfo_.nodeAdmin&&tt(c),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Eo(this.interruptReasons_)&&(this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(o=>Fi(o)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Se(e).toString();let i;if(this.listens.has(s)){const o=this.listens.get(s);i=o.get(t),o.delete(t),o.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){je("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yo&&(this.reconnectDelay_=Go,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){je("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Il.replace(/\./g,"-")]=1,ml()?e["framework.cordova"]=1:Au()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gs.getInstance().currentlyOnline();return Eo(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ce(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ce(Kt,e),i=new ce(Kt,t);return this.compare(s,i)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;class ea extends Ms{static get __EMPTY_NODE(){return ss}static set __EMPTY_NODE(e){ss=e}compare(e,t){return yn(e.name,t.name)}isDefinedOn(e){throw bn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ce.MIN}maxPost(){return new ce(At,ss)}makePost(e,t){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,ss)}toString(){return".key"}}const Tt=new ea;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,s,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(e=e,r=t?s(e.key,t):1,i&&(r*=-1),r<0)this.isReverse_?e=e.left:e=e.right;else if(r===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ze{constructor(e,t,s,i,o){this.key=e,this.value=t,this.color=s??ze.RED,this.left=i??et.EMPTY_NODE,this.right=o??et.EMPTY_NODE}copy(e,t,s,i,o){return new ze(e??this.key,t??this.value,s??this.color,i??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const o=s(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):o===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ze.RED=!0;ze.BLACK=!1;class Xd{copy(e,t,s,i,o){return this}insert(e,t,s){return new ze(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,t=et.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new et(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ze.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ze.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new is(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new is(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new is(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new Xd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n,e){return yn(n.name,e.name)}function Ui(n,e){return yn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;function Jd(n){gi=n}const ta=function(n){return typeof n=="number"?"number:"+Ol(n):"string:"+n},na=function(n){if(n.isLeafNode()){const e=n.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else z(n===gi||n.isEmpty(),"priority of unexpected type.");z(n===gi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class He{constructor(e,t=He.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),na(this.priorityNode_)}static set __childrenNodeConstructor(e){Ko=e}static get __childrenNodeConstructor(){return Ko}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new He(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:_e(e)===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:He.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=_e(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(z(s!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,He.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ta(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ol(this.value_):e+=this.value_,this.lazyHash_=Nl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===He.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof He.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=He.VALUE_TYPE_ORDER.indexOf(t),o=He.VALUE_TYPE_ORDER.indexOf(s);return z(i>=0,"Unknown leaf type: "+t),z(o>=0,"Unknown leaf type: "+s),i===o?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}He.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa,ia;function Zd(n){sa=n}function $d(n){ia=n}class ef extends Ms{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),o=s.compareTo(i);return o===0?yn(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(At,new He("[PRIORITY-POST]",ia))}makePost(e,t){const s=sa(e);return new ce(t,new He("[PRIORITY-POST]",s))}toString(){return".priority"}}const Me=new ef;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=Math.log(2);class nf{constructor(e){const t=o=>parseInt(Math.log(o)/tf,10),s=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bs=function(n,e,t,s){n.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=n[l],f=t?t(c):c,new ze(f,c.node,ze.BLACK,null,null);{const h=parseInt(d/2,10)+l,_=i(l,h),m=i(h+1,u);return c=n[h],f=t?t(c):c,new ze(f,c.node,ze.BLACK,_,m)}},o=function(l){let u=null,d=null,c=n.length;const f=function(_,m){const y=c-_,w=c;c-=_;const T=i(y+1,w),b=n[y],I=t?t(b):b;h(new ze(I,b.node,m,null,T))},h=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<l.count;++_){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(_+1));m?f(y,ze.BLACK):(f(y,ze.BLACK),f(y,ze.RED))}return d},r=new nf(n.length),a=o(r);return new et(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;const en={};class pt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return z(en&&Me,"ChildrenNode.ts has not been loaded"),ti=ti||new pt({".priority":en},{".priority":Me}),ti}get(e){const t=fn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof et?t:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,t){z(e!==Tt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const o=t.getIterator(ce.Wrap);let r=o.getNext();for(;r;)i=i||e.isDefinedOn(r.node),s.push(r),r=o.getNext();let a;i?a=bs(s,e.getCompare()):a=en;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new pt(d,u)}addToIndexes(e,t){const s=hs(this.indexes_,(i,o)=>{const r=fn(this.indexSet_,o);if(z(r,"Missing index implementation for "+o),i===en)if(r.isDefinedOn(e.node)){const a=[],l=t.getIterator(ce.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),bs(a,r.getCompare())}else return en;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new ce(e.name,a))),l.insert(e,e.node)}});return new pt(s,this.indexSet_)}removeFromIndexes(e,t){const s=hs(this.indexes_,i=>{if(i===en)return i;{const o=t.get(e.name);return o?i.remove(new ce(e.name,o)):i}});return new pt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In;class oe{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&na(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return In||(In=new oe(new et(Ui),null,pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||In}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?In:t}}getChild(e){const t=_e(e);return t===null?this:this.getImmediateChild(t).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ce(e,t);let i,o;t.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(s,this.children_));const r=i.isEmpty()?In:this.priorityNode_;return new oe(i,r,o)}}updateChild(e,t){const s=_e(e);if(s===null)return t;{z(_e(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Te(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,o=!0;if(this.forEachChild(Me,(r,a)=>{t[r]=a.val(e),s++,o&&oe.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):o=!1}),!e&&o&&i<2*s){const r=[];for(const a in t)r[a]=t[a];return r}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ta(this.getPriority().val())+":"),this.forEachChild(Me,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Nl(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const o=i.getPredecessorKey(new ce(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ce(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ce(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let o=i.peek();for(;o!=null&&t.compare(o,e)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let o=i.peek();for(;o!=null&&t.compare(o,e)>0;)i.getNext(),o=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jn?-1:0}withIndex(e){if(e===Tt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Tt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Me),i=t.getIterator(Me);let o=s.getNext(),r=i.getNext();for(;o&&r;){if(o.name!==r.name||!o.node.equals(r.node))return!1;o=s.getNext(),r=i.getNext()}return o===null&&r===null}else return!1;else return!1}}resolveIndex_(e){return e===Tt?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sf extends oe{constructor(){super(new et(Ui),oe.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const Jn=new sf;Object.defineProperties(ce,{MIN:{value:new ce(Kt,oe.EMPTY_NODE)},MAX:{value:new ce(At,Jn)}});ea.__EMPTY_NODE=oe.EMPTY_NODE;He.__childrenNodeConstructor=oe;Jd(Jn);$d(Jn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=!0;function Ue(n,e=null){if(n===null)return oe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new He(t,Ue(e))}if(!(n instanceof Array)&&of){const t=[];let s=!1;if(nt(n,(r,a)=>{if(r.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new ce(r,l)))}}),t.length===0)return oe.EMPTY_NODE;const o=bs(t,xd,r=>r.name,Ui);if(s){const r=bs(t,Me.getCompare());return new oe(o,Ue(e),new pt({".priority":r},{".priority":Me}))}else return new oe(o,Ue(e),pt.Default)}else{let t=oe.EMPTY_NODE;return nt(n,(s,i)=>{if(_t(n,s)&&s.substring(0,1)!=="."){const o=Ue(i);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(s,o))}}),t.updatePriority(Ue(e))}}Zd(Ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Ms{constructor(e){super(),this.indexPath_=e,z(!de(e)&&_e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),o=s.compareTo(i);return o===0?yn(e.name,t.name):o}makePost(e,t){const s=Ue(e),i=oe.EMPTY_NODE.updateChild(this.indexPath_,s);return new ce(t,i)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,Jn);return new ce(At,e)}toString(){return xl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends Ms{compare(e,t){const s=e.node.compareTo(t.node);return s===0?yn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,t){const s=Ue(e);return new ce(t,s)}toString(){return".value"}}const ra=new rf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n){return{type:"value",snapshotNode:n}}function hn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function qn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Hn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function lf(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.index_=e}updateChild(e,t,s,i,o,r){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(r!=null&&(s.isEmpty()?e.hasChild(t)?r.trackChildChange(qn(t,a)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?r.trackChildChange(hn(t,s)):r.trackChildChange(Hn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Me,(i,o)=>{t.hasChild(i)||s.trackChildChange(qn(i,o))}),t.isLeafNode()||t.forEachChild(Me,(i,o)=>{if(e.hasChild(i)){const r=e.getImmediateChild(i);r.equals(o)||s.trackChildChange(Hn(i,o,r))}else s.trackChildChange(hn(i,o))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?oe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.indexedFilter_=new Vi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zn.getStartPost_(e),this.endPost_=zn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,o,r){return this.matches(new ce(t,s))||(s=oe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,o,r)}updateFullNode(e,t,s){t.isLeafNode()&&(t=oe.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(oe.EMPTY_NODE);const o=this;return t.forEachChild(Me,(r,a)=>{o.matches(new ce(r,a))||(i=i.updateImmediateChild(r,oe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new zn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,o,r){return this.rangedFilter_.matches(new ce(t,s))||(s=oe.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,o,r):this.fullLimitUpdateChild_(e,t,s,o,r)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=oe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=oe.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let r=0;for(;o.hasNext()&&r<this.limit_;){const a=o.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),r++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(oe.EMPTY_NODE);let o;this.reverse_?o=i.getReverseIterator(this.index_):o=i.getIterator(this.index_);let r=0;for(;o.hasNext();){const a=o.getNext();r<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?r++:i=i.updateImmediateChild(a.name,oe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,o){let r;if(this.reverse_){const c=this.index_.getCompare();r=(f,h)=>c(h,f)}else r=this.index_.getCompare();const a=e;z(a.numChildren()===this.limit_,"");const l=new ce(t,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const c=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:r(f,l);if(d&&!s.isEmpty()&&h>=0)return o!=null&&o.trackChildChange(Hn(t,s,c)),a.updateImmediateChild(t,s);{o!=null&&o.trackChildChange(qn(t,c));const m=a.updateImmediateChild(t,oe.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(o!=null&&o.trackChildChange(hn(f.name,f.node)),m.updateImmediateChild(f.name,f.node)):m}}else return s.isEmpty()?e:d&&r(u,l)>=0?(o!=null&&(o.trackChildChange(qn(u.name,u.node)),o.trackChildChange(hn(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(u.name,oe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kt}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:At}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new ji;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uf(n){return n.loadsAllData()?new Vi(n.getIndex()):n.hasLimit()?new af(n):new zn(n)}function cf(n,e){const t=n.copy();return t.index_=e,t}function Qo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Me?t="$priority":n.index_===ra?t="$value":n.index_===Tt?t="$key":(z(n.index_ instanceof oa,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=We(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=We(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+We(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=We(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+We(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Xo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Me&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Kl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=xn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const r=ys.getListenId_(e,s),a={};this.listens_[r]=a;const l=Qo(e._queryParams);this.restRequest_(o+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(o,c,!1,s),fn(this.listens_,r)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,t){const s=ys.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Qo(e._queryParams),s=e._path.toString(),i=new As;return this.restRequest_(s+".json",t,(o,r)=>{let a=r;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(t.auth=i.accessToken),o&&o.token&&(t.ac=o.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hu(t);this.log_("Sending REST request for "+r);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+r+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ln(a.responseText)}catch{tt("Failed to parse JSON response for "+r+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&tt("Got unsuccessful REST response for "+r+" Status: "+a.status),s(a.status);s=null}},a.open("GET",r,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(){return{value:null,children:new Map}}function aa(n,e,t){if(de(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=_e(e);n.children.has(s)||n.children.set(s,vs());const i=n.children.get(s);e=Te(e),aa(i,e,t)}}function bi(n,e,t){n.value!==null?t(e,n.value):ff(n,(s,i)=>{const o=new Se(e.toString()+"/"+s);bi(i,o,t)})}function ff(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&nt(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=10*1e3,_f=30*1e3,pf=5*60*1e3;class mf{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new hf(e);const s=xo+(_f-xo)*Math.random();Dn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;nt(e,(i,o)=>{o>0&&_t(this.statsToReport_,i)&&(t[i]=o,s=!0)}),s&&this.server_.reportStats(t),Dn(this.reportStats_.bind(this),Math.floor(Math.random()*2*pf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function ua(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=at.ACK_USER_WRITE,this.source=ua()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Se(e));return new ws(ye(),t,this.revert)}}else return z(_e(this.path)===e,"operationForChild called for unrelated child."),new ws(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this.source=e,this.path=t,this.type=at.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new Un(this.source,ye()):new Un(this.source,Te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=at.OVERWRITE}operationForChild(e){return de(this.path)?new Qt(this.source,ye(),this.snap.getImmediateChild(e)):new Qt(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=at.MERGE}operationForChild(e){if(de(this.path)){const t=this.children.subtree(new Se(e));return t.isEmpty()?null:t.value?new Qt(this.source,ye(),t.value):new Vn(this.source,ye(),t)}else return z(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vn(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(de(e))return this.isFullyInitialized()&&!this.filtered_;const t=_e(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bf(n,e,t,s){const i=[],o=[];return e.forEach(r=>{r.type==="child_changed"&&n.index_.indexedValueChanged(r.oldSnap,r.snapshotNode)&&o.push(lf(r.childName,r.snapshotNode))}),Tn(n,i,"child_removed",e,s,t),Tn(n,i,"child_added",e,s,t),Tn(n,i,"child_moved",o,s,t),Tn(n,i,"child_changed",e,s,t),Tn(n,i,"value",e,s,t),i}function Tn(n,e,t,s,i,o){const r=s.filter(a=>a.type===t);r.sort((a,l)=>vf(n,a,l)),r.forEach(a=>{const l=yf(n,a,o);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,n.query_))})})}function yf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function vf(n,e,t){if(e.childName==null||t.childName==null)throw bn("Should only compare child_ events.");const s=new ce(e.childName,e.snapshotNode),i=new ce(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n,e){return{eventCache:n,serverCache:e}}function On(n,e,t,s){return Ls(new Mt(e,t,s),n.serverCache)}function ca(n,e,t,s){return Ls(n.eventCache,new Mt(e,t,s))}function Cs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Xt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni;const wf=()=>(ni||(ni=new et(rd)),ni);class Oe{constructor(e,t=wf()){this.value=e,this.children=t}static fromObject(e){let t=new Oe(null);return nt(e,(s,i)=>{t=t.set(new Se(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ye(),value:this.value};if(de(e))return null;{const s=_e(e),i=this.children.get(s);if(i!==null){const o=i.findRootMostMatchingPathAndValue(Te(e),t);return o!=null?{path:qe(new Se(s),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const t=_e(e),s=this.children.get(t);return s!==null?s.subtree(Te(e)):new Oe(null)}}set(e,t){if(de(e))return new Oe(t,this.children);{const s=_e(e),o=(this.children.get(s)||new Oe(null)).set(Te(e),t),r=this.children.insert(s,o);return new Oe(this.value,r)}}remove(e){if(de(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const t=_e(e),s=this.children.get(t);if(s){const i=s.remove(Te(e));let o;return i.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,i),this.value===null&&o.isEmpty()?new Oe(null):new Oe(this.value,o)}else return this}}get(e){if(de(e))return this.value;{const t=_e(e),s=this.children.get(t);return s?s.get(Te(e)):null}}setTree(e,t){if(de(e))return t;{const s=_e(e),o=(this.children.get(s)||new Oe(null)).setTree(Te(e),t);let r;return o.isEmpty()?r=this.children.remove(s):r=this.children.insert(s,o),new Oe(this.value,r)}}fold(e){return this.fold_(ye(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,o)=>{s[i]=o.fold_(qe(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ye(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(de(e))return null;{const o=_e(e),r=this.children.get(o);return r?r.findOnPath_(Te(e),qe(t,o),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ye(),t)}foreachOnPath_(e,t,s){if(de(e))return this;{this.value&&s(t,this.value);const i=_e(e),o=this.children.get(i);return o?o.foreachOnPath_(Te(e),qe(t,i),s):new Oe(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(qe(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new Oe(null))}}function Rn(n,e,t){if(de(e))return new ut(new Oe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let o=s.value;const r=Qe(i,e);return o=o.updateChild(r,t),new ut(n.writeTree_.set(i,o))}else{const i=new Oe(t),o=n.writeTree_.setTree(e,i);return new ut(o)}}}function Jo(n,e,t){let s=n;return nt(t,(i,o)=>{s=Rn(s,qe(e,i),o)}),s}function Zo(n,e){if(de(e))return ut.empty();{const t=n.writeTree_.setTree(e,new Oe(null));return new ut(t)}}function yi(n,e){return xt(n,e)!=null}function xt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Qe(t.path,e)):null}function $o(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Me,(s,i)=>{e.push(new ce(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ce(s,i.value))}),e}function Nt(n,e){if(de(e))return n;{const t=xt(n,e);return t!=null?new ut(new Oe(t)):new ut(n.writeTree_.subtree(e))}}function vi(n){return n.writeTree_.isEmpty()}function _n(n,e){return da(ye(),n.writeTree_,e)}function da(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,o)=>{i===".priority"?(z(o.value!==null,"Priority writes must always be leaf nodes"),s=o.value):t=da(qe(n,i),o,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(qe(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n,e){return pa(e,n)}function Cf(n,e,t,s,i){z(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Rn(n.visibleWrites,e,t)),n.lastWriteId=s}function Ef(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function kf(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);z(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,o=!1,r=n.allWrites.length-1;for(;i&&r>=0;){const a=n.allWrites[r];a.visible&&(r>=t&&Sf(a,s.path)?i=!1:lt(s.path,a.path)&&(o=!0)),r--}if(i){if(o)return If(n),!0;if(s.snap)n.visibleWrites=Zo(n.visibleWrites,s.path);else{const a=s.children;nt(a,l=>{n.visibleWrites=Zo(n.visibleWrites,qe(s.path,l))})}return!0}else return!1}function Sf(n,e){if(n.snap)return lt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&lt(qe(n.path,t),e))return!0;return!1}function If(n){n.visibleWrites=fa(n.allWrites,Tf,ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Tf(n){return n.visible}function fa(n,e,t){let s=ut.empty();for(let i=0;i<n.length;++i){const o=n[i];if(e(o)){const r=o.path;let a;if(o.snap)lt(t,r)?(a=Qe(t,r),s=Rn(s,a,o.snap)):lt(r,t)&&(a=Qe(r,t),s=Rn(s,ye(),o.snap.getChild(a)));else if(o.children){if(lt(t,r))a=Qe(t,r),s=Jo(s,a,o.children);else if(lt(r,t))if(a=Qe(r,t),de(a))s=Jo(s,ye(),o.children);else{const l=fn(o.children,_e(a));if(l){const u=l.getChild(Te(a));s=Rn(s,ye(),u)}}}else throw bn("WriteRecord should have .snap or .children")}}return s}function ha(n,e,t,s,i){if(!s&&!i){const o=xt(n.visibleWrites,e);if(o!=null)return o;{const r=Nt(n.visibleWrites,e);if(vi(r))return t;if(t==null&&!yi(r,ye()))return null;{const a=t||oe.EMPTY_NODE;return _n(r,a)}}}else{const o=Nt(n.visibleWrites,e);if(!i&&vi(o))return t;if(!i&&t==null&&!yi(o,ye()))return null;{const r=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(lt(u.path,e)||lt(e,u.path))},a=fa(n.allWrites,r,e),l=t||oe.EMPTY_NODE;return _n(a,l)}}}function Nf(n,e,t){let s=oe.EMPTY_NODE;const i=xt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Me,(o,r)=>{s=s.updateImmediateChild(o,r)}),s;if(t){const o=Nt(n.visibleWrites,e);return t.forEachChild(Me,(r,a)=>{const l=_n(Nt(o,new Se(r)),a);s=s.updateImmediateChild(r,l)}),$o(o).forEach(r=>{s=s.updateImmediateChild(r.name,r.node)}),s}else{const o=Nt(n.visibleWrites,e);return $o(o).forEach(r=>{s=s.updateImmediateChild(r.name,r.node)}),s}}function Df(n,e,t,s,i){z(s||i,"Either existingEventSnap or existingServerSnap must exist");const o=qe(e,t);if(yi(n.visibleWrites,o))return null;{const r=Nt(n.visibleWrites,o);return vi(r)?i.getChild(t):_n(r,i.getChild(t))}}function Of(n,e,t,s){const i=qe(e,t),o=xt(n.visibleWrites,i);if(o!=null)return o;if(s.isCompleteForChild(t)){const r=Nt(n.visibleWrites,i);return _n(r,s.getNode().getImmediateChild(t))}else return null}function Rf(n,e){return xt(n.visibleWrites,e)}function Af(n,e,t,s,i,o,r){let a;const l=Nt(n.visibleWrites,e),u=xt(l,ye());if(u!=null)a=u;else if(t!=null)a=_n(l,t);else return[];if(a=a.withIndex(r),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=r.getCompare(),f=o?a.getReverseIteratorFrom(s,r):a.getIteratorFrom(s,r);let h=f.getNext();for(;h&&d.length<i;)c(h,s)!==0&&d.push(h),h=f.getNext();return d}else return[]}function Pf(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function Es(n,e,t,s){return ha(n.writeTree,n.treePath,e,t,s)}function Ki(n,e){return Nf(n.writeTree,n.treePath,e)}function er(n,e,t,s){return Df(n.writeTree,n.treePath,e,t,s)}function ks(n,e){return Rf(n.writeTree,qe(n.treePath,e))}function Mf(n,e,t,s,i,o){return Af(n.writeTree,n.treePath,e,t,s,i,o)}function Qi(n,e,t){return Of(n.writeTree,n.treePath,e,t)}function _a(n,e){return pa(qe(n.treePath,e),n.writeTree)}function pa(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),z(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const o=i.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(s,Hn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(s,qn(s,i.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(s,hn(s,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(s,Hn(s,e.snapshotNode,i.oldSnap));else throw bn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ma=new Bf;class Xi{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Mt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qi(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xt(this.viewCache_),o=Mf(this.writes_,i,t,1,s,e);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){return{filter:n}}function Wf(n,e){z(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function qf(n,e,t,s,i){const o=new Lf;let r,a;if(t.type===at.OVERWRITE){const u=t;u.source.fromUser?r=wi(n,e,u.path,u.snap,s,i,o):(z(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!de(u.path),r=Ss(n,e,u.path,u.snap,s,i,a,o))}else if(t.type===at.MERGE){const u=t;u.source.fromUser?r=zf(n,e,u.path,u.children,s,i,o):(z(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),r=Ci(n,e,u.path,u.children,s,i,a,o))}else if(t.type===at.ACK_USER_WRITE){const u=t;u.revert?r=jf(n,e,u.path,s,i,o):r=Uf(n,e,u.path,u.affectedTree,s,i,o)}else if(t.type===at.LISTEN_COMPLETE)r=Vf(n,e,t.path,s,o);else throw bn("Unknown operation type: "+t.type);const l=o.getChanges();return Hf(e,r,l),{viewCache:r,changes:l}}function Hf(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),o=Cs(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(o)||!s.getNode().getPriority().equals(o.getPriority()))&&t.push(la(Cs(e)))}}function ga(n,e,t,s,i,o){const r=e.eventCache;if(ks(s,t)!=null)return e;{let a,l;if(de(t))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Xt(e),d=u instanceof oe?u:oe.EMPTY_NODE,c=Ki(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),c,o)}else{const u=Es(s,Xt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const u=_e(t);if(u===".priority"){z(Pt(t)===1,"Can't have a priority with additional path components");const d=r.getNode();l=e.serverCache.getNode();const c=er(s,t,d,l);c!=null?a=n.filter.updatePriority(d,c):a=r.getNode()}else{const d=Te(t);let c;if(r.isCompleteForChild(u)){l=e.serverCache.getNode();const f=er(s,t,r.getNode(),l);f!=null?c=r.getNode().getImmediateChild(u).updateChild(d,f):c=r.getNode().getImmediateChild(u)}else c=Qi(s,u,e.serverCache);c!=null?a=n.filter.updateChild(r.getNode(),u,c,d,i,o):a=r.getNode()}}return On(e,a,r.isFullyInitialized()||de(t),n.filter.filtersNodes())}}function Ss(n,e,t,s,i,o,r,a){const l=e.serverCache;let u;const d=r?n.filter:n.filter.getIndexedFilter();if(de(t))u=d.updateFullNode(l.getNode(),s,null);else if(d.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(t,s);u=d.updateFullNode(l.getNode(),h,null)}else{const h=_e(t);if(!l.isCompleteForPath(t)&&Pt(t)>1)return e;const _=Te(t),y=l.getNode().getImmediateChild(h).updateChild(_,s);h===".priority"?u=d.updatePriority(l.getNode(),y):u=d.updateChild(l.getNode(),h,y,_,ma,null)}const c=ca(e,u,l.isFullyInitialized()||de(t),d.filtersNodes()),f=new Xi(i,c,o);return ga(n,c,t,i,f,a)}function wi(n,e,t,s,i,o,r){const a=e.eventCache;let l,u;const d=new Xi(i,e,o);if(de(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,r),l=On(e,u,!0,n.filter.filtersNodes());else{const c=_e(t);if(c===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),l=On(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Te(t),h=a.getNode().getImmediateChild(c);let _;if(de(f))_=s;else{const m=d.getCompleteChild(c);m!=null?Xl(f)===".priority"&&m.getChild(Jl(f)).isEmpty()?_=m:_=m.updateChild(f,s):_=oe.EMPTY_NODE}if(h.equals(_))l=e;else{const m=n.filter.updateChild(a.getNode(),c,_,f,d,r);l=On(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function tr(n,e){return n.eventCache.isCompleteForChild(e)}function zf(n,e,t,s,i,o,r){let a=e;return s.foreach((l,u)=>{const d=qe(t,l);tr(e,_e(d))&&(a=wi(n,a,d,u,i,o,r))}),s.foreach((l,u)=>{const d=qe(t,l);tr(e,_e(d))||(a=wi(n,a,d,u,i,o,r))}),a}function nr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ci(n,e,t,s,i,o,r,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;de(t)?u=s:u=new Oe(null).setTree(t,s);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const h=e.serverCache.getNode().getImmediateChild(c),_=nr(n,h,f);l=Ss(n,l,new Se(c),_,i,o,r,a)}}),u.children.inorderTraversal((c,f)=>{const h=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!h){const _=e.serverCache.getNode().getImmediateChild(c),m=nr(n,_,f);l=Ss(n,l,new Se(c),m,i,o,r,a)}}),l}function Uf(n,e,t,s,i,o,r){if(ks(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(de(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Ss(n,e,t,l.getNode().getChild(t),i,o,a,r);if(de(t)){let u=new Oe(null);return l.getNode().forEachChild(Tt,(d,c)=>{u=u.set(new Se(d),c)}),Ci(n,e,t,u,i,o,a,r)}else return e}else{let u=new Oe(null);return s.foreach((d,c)=>{const f=qe(t,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),Ci(n,e,t,u,i,o,a,r)}}function Vf(n,e,t,s,i){const o=e.serverCache,r=ca(e,o.getNode(),o.isFullyInitialized()||de(t),o.isFiltered());return ga(n,r,t,s,ma,i)}function jf(n,e,t,s,i,o){let r;if(ks(s,t)!=null)return e;{const a=new Xi(s,e,i),l=e.eventCache.getNode();let u;if(de(t)||_e(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Es(s,Xt(e));else{const c=e.serverCache.getNode();z(c instanceof oe,"serverChildren would be complete if leaf node"),d=Ki(s,c)}d=d,u=n.filter.updateFullNode(l,d,o)}else{const d=_e(t);let c=Qi(s,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=n.filter.updateChild(l,d,c,Te(t),a,o):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(l,d,oe.EMPTY_NODE,Te(t),a,o):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(r=Es(s,Xt(e)),r.isLeafNode()&&(u=n.filter.updateFullNode(u,r,o)))}return r=e.serverCache.isFullyInitialized()||ks(s,ye())!=null,On(e,u,r,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Vi(s.getIndex()),o=uf(s);this.processor_=Ff(o);const r=t.serverCache,a=t.eventCache,l=i.updateFullNode(oe.EMPTY_NODE,r.getNode(),null),u=o.updateFullNode(oe.EMPTY_NODE,a.getNode(),null),d=new Mt(l,r.isFullyInitialized(),i.filtersNodes()),c=new Mt(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Ls(c,d),this.eventGenerator_=new gf(this.query_)}get query(){return this.query_}}function Yf(n){return n.viewCache_.serverCache.getNode()}function Kf(n){return Cs(n.viewCache_)}function Qf(n,e){const t=Xt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!de(e)&&!t.getImmediateChild(_e(e)).isEmpty())?t.getChild(e):null}function sr(n){return n.eventRegistrations_.length===0}function Xf(n,e){n.eventRegistrations_.push(e)}function ir(n,e,t){const s=[];if(t){z(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(o=>{const r=o.createCancelEvent(t,i);r&&s.push(r)})}if(e){let i=[];for(let o=0;o<n.eventRegistrations_.length;++o){const r=n.eventRegistrations_[o];if(!r.matches(e))i.push(r);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(o+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function or(n,e,t,s){e.type===at.MERGE&&e.source.queryId!==null&&(z(Xt(n.viewCache_),"We should always have a full cache before handling merges"),z(Cs(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,o=qf(n.processor_,i,e,t,s);return Wf(n.processor_,o.viewCache),z(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,ba(n,o.changes,o.viewCache.eventCache.getNode(),null)}function xf(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Me,(o,r)=>{s.push(hn(o,r))}),t.isFullyInitialized()&&s.push(la(t.getNode())),ba(n,s,t.getNode(),e)}function ba(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return bf(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is;class ya{constructor(){this.views=new Map}}function Jf(n){z(!Is,"__referenceConstructor has already been defined"),Is=n}function Zf(){return z(Is,"Reference.ts has not been loaded"),Is}function $f(n){return n.views.size===0}function xi(n,e,t,s){const i=e.source.queryId;if(i!==null){const o=n.views.get(i);return z(o!=null,"SyncTree gave us an op for an invalid query."),or(o,e,t,s)}else{let o=[];for(const r of n.views.values())o=o.concat(or(r,e,t,s));return o}}function va(n,e,t,s,i){const o=e._queryIdentifier,r=n.views.get(o);if(!r){let a=Es(t,i?s:null),l=!1;a?l=!0:s instanceof oe?(a=Ki(t,s),l=!1):(a=oe.EMPTY_NODE,l=!1);const u=Ls(new Mt(a,l,!1),new Mt(s,i,!1));return new Gf(e,u)}return r}function eh(n,e,t,s,i,o){const r=va(n,e,s,i,o);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,r),Xf(r,t),xf(r,t)}function th(n,e,t,s){const i=e._queryIdentifier,o=[];let r=[];const a=Lt(n);if(i==="default")for(const[l,u]of n.views.entries())r=r.concat(ir(u,t,s)),sr(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||o.push(u.query));else{const l=n.views.get(i);l&&(r=r.concat(ir(l,t,s)),sr(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!Lt(n)&&o.push(new(Zf())(e._repo,e._path)),{removed:o,events:r}}function wa(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Dt(n,e){let t=null;for(const s of n.views.values())t=t||Qf(s,e);return t}function Ca(n,e){if(e._queryParams.loadsAllData())return Fs(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Ea(n,e){return Ca(n,e)!=null}function Lt(n){return Fs(n)!=null}function Fs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;function nh(n){z(!Ts,"__referenceConstructor has already been defined"),Ts=n}function sh(){return z(Ts,"Reference.ts has not been loaded"),Ts}let ih=1;class rr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=Pf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ka(n,e,t,s,i){return Cf(n.pendingWriteTree_,e,t,s,i),i?$n(n,new Qt(ua(),e,t)):[]}function Ut(n,e,t=!1){const s=Ef(n.pendingWriteTree_,e);if(kf(n.pendingWriteTree_,e)){let o=new Oe(null);return s.snap!=null?o=o.set(ye(),!0):nt(s.children,r=>{o=o.set(new Se(r),!0)}),$n(n,new ws(s.path,o,t))}else return[]}function Zn(n,e,t){return $n(n,new Qt(Gi(),e,t))}function oh(n,e,t){const s=Oe.fromObject(t);return $n(n,new Vn(Gi(),e,s))}function rh(n,e){return $n(n,new Un(Gi(),e))}function lh(n,e,t){const s=Zi(n,t);if(s){const i=$i(s),o=i.path,r=i.queryId,a=Qe(o,e),l=new Un(Yi(r),a);return eo(n,o,l)}else return[]}function Sa(n,e,t,s,i=!1){const o=e._path,r=n.syncPointTree_.get(o);let a=[];if(r&&(e._queryIdentifier==="default"||Ea(r,e))){const l=th(r,e,t,s);$f(r)&&(n.syncPointTree_=n.syncPointTree_.remove(o));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=n.syncPointTree_.findOnPath(o,(f,h)=>Lt(h));if(d&&!c){const f=n.syncPointTree_.subtree(o);if(!f.isEmpty()){const h=dh(f);for(let _=0;_<h.length;++_){const m=h[_],y=m.query,w=Da(n,m);n.listenProvider_.startListening(An(y),jn(n,y),w.hashFn,w.onComplete)}}}!c&&u.length>0&&!s&&(d?n.listenProvider_.stopListening(An(e),null):u.forEach(f=>{const h=n.queryToTagMap.get(Ws(f));n.listenProvider_.stopListening(An(f),h)}))}fh(n,u)}return a}function Ia(n,e,t,s){const i=Zi(n,s);if(i!=null){const o=$i(i),r=o.path,a=o.queryId,l=Qe(r,e),u=new Qt(Yi(a),l,t);return eo(n,r,u)}else return[]}function ah(n,e,t,s){const i=Zi(n,s);if(i){const o=$i(i),r=o.path,a=o.queryId,l=Qe(r,e),u=Oe.fromObject(t),d=new Vn(Yi(a),l,u);return eo(n,r,d)}else return[]}function uh(n,e,t,s=!1){const i=e._path;let o=null,r=!1;n.syncPointTree_.foreachOnPath(i,(f,h)=>{const _=Qe(f,i);o=o||Dt(h,_),r=r||Lt(h)});let a=n.syncPointTree_.get(i);a?(r=r||Lt(a),o=o||Dt(a,ye())):(a=new ya,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;o!=null?l=!0:(l=!1,o=oe.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((h,_)=>{const m=Dt(_,ye());m&&(o=o.updateImmediateChild(h,m))}));const u=Ea(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Ws(e);z(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=hh();n.queryToTagMap.set(f,h),n.tagToQueryMap.set(h,f)}const d=Bs(n.pendingWriteTree_,i);let c=eh(a,e,t,d,o,l);if(!u&&!r&&!s){const f=Ca(a,e);c=c.concat(_h(n,e,f))}return c}function Ji(n,e,t){const i=n.pendingWriteTree_,o=n.syncPointTree_.findOnPath(e,(r,a)=>{const l=Qe(r,e),u=Dt(a,l);if(u)return u});return ha(i,e,o,t,!0)}function ch(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(u,d)=>{const c=Qe(u,t);s=s||Dt(d,c)});let i=n.syncPointTree_.get(t);i?s=s||Dt(i,ye()):(i=new ya,n.syncPointTree_=n.syncPointTree_.set(t,i));const o=s!=null,r=o?new Mt(s,!0,!1):null,a=Bs(n.pendingWriteTree_,e._path),l=va(i,e,a,o?r.getNode():oe.EMPTY_NODE,o);return Kf(l)}function $n(n,e){return Ta(e,n.syncPointTree_,null,Bs(n.pendingWriteTree_,ye()))}function Ta(n,e,t,s){if(de(n.path))return Na(n,e,t,s);{const i=e.get(ye());t==null&&i!=null&&(t=Dt(i,ye()));let o=[];const r=_e(n.path),a=n.operationForChild(r),l=e.children.get(r);if(l&&a){const u=t?t.getImmediateChild(r):null,d=_a(s,r);o=o.concat(Ta(a,l,u,d))}return i&&(o=o.concat(xi(i,n,s,t))),o}}function Na(n,e,t,s){const i=e.get(ye());t==null&&i!=null&&(t=Dt(i,ye()));let o=[];return e.children.inorderTraversal((r,a)=>{const l=t?t.getImmediateChild(r):null,u=_a(s,r),d=n.operationForChild(r);d&&(o=o.concat(Na(d,a,l,u)))}),i&&(o=o.concat(xi(i,n,s,t))),o}function Da(n,e){const t=e.query,s=jn(n,t);return{hashFn:()=>(Yf(e)||oe.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?lh(n,t._path,s):rh(n,t._path);{const o=ud(i,t);return Sa(n,t,null,o)}}}}function jn(n,e){const t=Ws(e);return n.queryToTagMap.get(t)}function Ws(n){return n._path.toString()+"$"+n._queryIdentifier}function Zi(n,e){return n.tagToQueryMap.get(e)}function $i(n){const e=n.indexOf("$");return z(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Se(n.substr(0,e))}}function eo(n,e,t){const s=n.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const i=Bs(n.pendingWriteTree_,e);return xi(s,t,i,null)}function dh(n){return n.fold((e,t,s)=>{if(t&&Lt(t))return[Fs(t)];{let i=[];return t&&(i=wa(t)),nt(s,(o,r)=>{i=i.concat(r)}),i}})}function An(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(sh())(n._repo,n._path):n}function fh(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Ws(s),o=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(o)}}}function hh(){return ih++}function _h(n,e,t){const s=e._path,i=jn(n,e),o=Da(n,t),r=n.listenProvider_.startListening(An(e),i,o.hashFn,o.onComplete),a=n.syncPointTree_.subtree(s);if(i)z(!Lt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!de(u)&&d&&Lt(d))return[Fs(d).query];{let f=[];return d&&(f=f.concat(wa(d).map(h=>h.query))),nt(c,(h,_)=>{f=f.concat(_)}),f}});for(let u=0;u<l.length;++u){const d=l[u];n.listenProvider_.stopListening(An(d),jn(n,d))}}return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new to(t)}node(){return this.node_}}class no{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=qe(this.path_,e);return new no(this.syncTree_,t)}node(){return Ji(this.syncTree_,this.path_)}}const ph=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},lr=function(n,e,t){if(!n||typeof n!="object")return n;if(z(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return mh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return gh(n[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},mh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:z(!1,"Unexpected server value: "+n)}},gh=function(n,e,t){n.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const r=i.getValue();return typeof r!="number"?s:r+s},bh=function(n,e,t,s){return so(e,new no(t,n),s)},Oa=function(n,e,t){return so(n,new to(e),t)};function so(n,e,t){const s=n.getPriority().val(),i=lr(s,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const r=n,a=lr(r.getValue(),e,t);return a!==r.getValue()||i!==r.getPriority().val()?new He(a,Ue(i)):n}else{const r=n;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new He(i))),r.forEachChild(Me,(a,l)=>{const u=so(l,e.getImmediateChild(a),t);u!==l&&(o=o.updateImmediateChild(a,u))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function oo(n,e){let t=e instanceof Se?e:new Se(e),s=n,i=_e(t);for(;i!==null;){const o=fn(s.node.children,i)||{children:{},childCount:0};s=new io(i,s,o),t=Te(t),i=_e(t)}return s}function wn(n){return n.node.value}function Ra(n,e){n.node.value=e,Ei(n)}function Aa(n){return n.node.childCount>0}function yh(n){return wn(n)===void 0&&!Aa(n)}function qs(n,e){nt(n.node.children,(t,s)=>{e(new io(t,n,s))})}function Pa(n,e,t,s){t&&!s&&e(n),qs(n,i=>{Pa(i,e,!0,s)}),t&&s&&e(n)}function vh(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function es(n){return new Se(n.parent===null?n.name:es(n.parent)+"/"+n.name)}function Ei(n){n.parent!==null&&wh(n.parent,n.name,n)}function wh(n,e,t){const s=yh(t),i=_t(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Ei(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Ei(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=/[\[\].#$\/\u0000-\u001F\u007F]/,Eh=/[\[\].#$\u0000-\u001F\u007F]/,si=10*1024*1024,Ma=function(n){return typeof n=="string"&&n.length!==0&&!Ch.test(n)},La=function(n){return typeof n=="string"&&n.length!==0&&!Eh.test(n)},kh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),La(n)},ar=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Bi(n)||n&&typeof n=="object"&&_t(n,".sv")},Ba=function(n,e,t,s){s&&e===void 0||ro(Mi(n,"value"),e,t)},ro=function(n,e,t){const s=t instanceof Se?new Ud(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ht(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ht(s)+" with contents = "+e.toString());if(Bi(e))throw new Error(n+"contains "+e.toString()+" "+Ht(s));if(typeof e=="string"&&e.length>si/3&&Ps(e)>si)throw new Error(n+"contains a string greater than "+si+" utf8 bytes "+Ht(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,o=!1;if(nt(e,(r,a)=>{if(r===".value")i=!0;else if(r!==".priority"&&r!==".sv"&&(o=!0,!Ma(r)))throw new Error(n+" contains an invalid key ("+r+") "+Ht(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vd(s,r),ro(n,a,s),jd(s)}),i&&o)throw new Error(n+' contains ".value" child '+Ht(s)+" in addition to actual children.")}},Fa=function(n,e,t,s){if(!(s&&t===void 0)&&!La(t))throw new Error(Mi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sh=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fa(n,e,t,s)},lo=function(n,e){if(_e(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Ih=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ma(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!kh(t))throw new Error(Mi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wa(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],o=i.getPath();t!==null&&!Zl(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(i)}t&&n.eventLists_.push(t)}function ht(n,e,t){Wa(n,t),Nh(n,s=>lt(s,e)||lt(e,s))}function Nh(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const o=i.path;e(o)?(Dh(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Dh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();jt&&je("event: "+t.toString()),vn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="repo_interrupt",Rh=25;class Ah{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Th,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vs(),this.transactionQueueTree_=new io,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ph(n,e,t){if(n.stats_=qi(n.repoInfo_),n.forceRestClient_||hd())n.server_=new ys(n.repoInfo_,(s,i,o,r)=>{ur(n,s,i,o,r)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>cr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new mt(n.repoInfo_,e,(s,i,o,r)=>{ur(n,s,i,o,r)},s=>{cr(n,s)},s=>{Mh(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=bd(n.repoInfo_,()=>new mf(n.stats_,n.server_)),n.infoData_=new df,n.infoSyncTree_=new rr({startListening:(s,i,o,r)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Zn(n.infoSyncTree_,s._path,l),setTimeout(()=>{r("ok")},0)),a},stopListening:()=>{}}),uo(n,"connected",!1),n.serverSyncTree_=new rr({startListening:(s,i,o,r)=>(n.server_.listen(s,o,i,(a,l)=>{const u=r(a,l);ht(n.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function qa(n){const t=n.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ao(n){return ph({timestamp:qa(n)})}function ur(n,e,t,s,i){n.dataUpdateCount++;const o=new Se(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let r=[];if(i)if(s){const l=hs(t,u=>Ue(u));r=ah(n.serverSyncTree_,o,l,i)}else{const l=Ue(t);r=Ia(n.serverSyncTree_,o,l,i)}else if(s){const l=hs(t,u=>Ue(u));r=oh(n.serverSyncTree_,o,l)}else{const l=Ue(t);r=Zn(n.serverSyncTree_,o,l)}let a=o;r.length>0&&(a=zs(n,o)),ht(n.eventQueue_,a,r)}function cr(n,e){uo(n,"connected",e),e===!1&&Fh(n)}function Mh(n,e){nt(e,(t,s)=>{uo(n,t,s)})}function uo(n,e,t){const s=new Se("/.info/"+e),i=Ue(t);n.infoData_.updateSnapshot(s,i);const o=Zn(n.infoSyncTree_,s,i);ht(n.eventQueue_,s,o)}function Ha(n){return n.nextWriteId_++}function Lh(n,e,t){const s=ch(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const o=Ue(i).withIndex(e._queryParams.getIndex());uh(n.serverSyncTree_,e,t,!0);let r;if(e._queryParams.loadsAllData())r=Zn(n.serverSyncTree_,e._path,o);else{const a=jn(n.serverSyncTree_,e);r=Ia(n.serverSyncTree_,e._path,o,a)}return ht(n.eventQueue_,e._path,r),Sa(n.serverSyncTree_,e,t,null,!0),o},i=>(Hs(n,"get for query "+We(e)+" failed: "+i),Promise.reject(new Error(i))))}function Bh(n,e,t,s,i){Hs(n,"set",{path:e.toString(),value:t,priority:s});const o=ao(n),r=Ue(t,s),a=Ji(n.serverSyncTree_,e),l=Oa(r,a,o),u=Ha(n),d=ka(n.serverSyncTree_,e,l,u,!0);Wa(n.eventQueue_,d),n.server_.put(e.toString(),r.val(!0),(f,h)=>{const _=f==="ok";_||tt("set at "+e+" failed: "+f);const m=Ut(n.serverSyncTree_,u,!_);ht(n.eventQueue_,e,m),qh(n,i,f,h)});const c=Ga(n,e);zs(n,c),ht(n.eventQueue_,c,[])}function Fh(n){Hs(n,"onDisconnectEvents");const e=ao(n),t=vs();bi(n.onDisconnect_,ye(),(i,o)=>{const r=bh(i,o,n.serverSyncTree_,e);aa(t,i,r)});let s=[];bi(t,ye(),(i,o)=>{s=s.concat(Zn(n.serverSyncTree_,i,o));const r=Ga(n,i);zs(n,r)}),n.onDisconnect_=vs(),ht(n.eventQueue_,ye(),s)}function Wh(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Oh)}function Hs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),je(t,...e)}function qh(n,e,t,s){e&&vn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let o=i;s&&(o+=": "+s);const r=new Error(o);r.code=i,e(r)}})}function za(n,e,t){return Ji(n.serverSyncTree_,e,t)||oe.EMPTY_NODE}function co(n,e=n.transactionQueueTree_){if(e||Us(n,e),wn(e)){const t=Va(n,e);z(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Hh(n,es(e),t)}else Aa(e)&&qs(e,t=>{co(n,t)})}function Hh(n,e,t){const s=t.map(u=>u.currentWriteId),i=za(n,e,s);let o=i;const r=i.hash();for(let u=0;u<t.length;u++){const d=t[u];z(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Qe(e,d.path);o=o.updateChild(c,d.currentOutputSnapshotRaw)}const a=o.val(!0),l=e;n.server_.put(l.toString(),a,u=>{Hs(n,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<t.length;f++)t[f].status=2,d=d.concat(Ut(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&c.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Us(n,oo(n.transactionQueueTree_,e)),co(n,n.transactionQueueTree_),ht(n.eventQueue_,e,d);for(let f=0;f<c.length;f++)vn(c[f])}else{if(u==="datastale")for(let c=0;c<t.length;c++)t[c].status===3?t[c].status=4:t[c].status=0;else{tt("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<t.length;c++)t[c].status=4,t[c].abortReason=u}zs(n,e)}},r)}function zs(n,e){const t=Ua(n,e),s=es(t),i=Va(n,t);return zh(n,i,s),s}function zh(n,e,t){if(e.length===0)return;const s=[];let i=[];const r=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Qe(t,l.path);let d=!1,c;if(z(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Ut(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Rh)d=!0,c="maxretry",i=i.concat(Ut(n.serverSyncTree_,l.currentWriteId,!0));else{const f=za(n,l.path,r);l.currentInputSnapshot=f;const h=e[a].update(f.val());if(h!==void 0){ro("transaction failed: Data returned ",h,l.path);let _=Ue(h);typeof h=="object"&&h!=null&&_t(h,".priority")||(_=_.updatePriority(f.getPriority()));const y=l.currentWriteId,w=ao(n),T=Oa(_,f,w);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=T,l.currentWriteId=Ha(n),r.splice(r.indexOf(y),1),i=i.concat(ka(n.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),i=i.concat(Ut(n.serverSyncTree_,y,!0))}else d=!0,c="nodata",i=i.concat(Ut(n.serverSyncTree_,l.currentWriteId,!0))}ht(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(c),!1,null))))}Us(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)vn(s[a]);co(n,n.transactionQueueTree_)}function Ua(n,e){let t,s=n.transactionQueueTree_;for(t=_e(e);t!==null&&wn(s)===void 0;)s=oo(s,t),e=Te(e),t=_e(e);return s}function Va(n,e){const t=[];return ja(n,e,t),t.sort((s,i)=>s.order-i.order),t}function ja(n,e,t){const s=wn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);qs(e,i=>{ja(n,i,t)})}function Us(n,e){const t=wn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ra(e,t.length>0?t:void 0)}qs(e,s=>{Us(n,s)})}function Ga(n,e){const t=es(Ua(n,e)),s=oo(n.transactionQueueTree_,e);return vh(s,i=>{ii(n,i)}),ii(n,s),Pa(s,i=>{ii(n,i)}),t}function ii(n,e){const t=wn(e);if(t){const s=[];let i=[],o=-1;for(let r=0;r<t.length;r++)t[r].status===3||(t[r].status===1?(z(o===r-1,"All SENT items should be at beginning of queue."),o=r,t[r].status=3,t[r].abortReason="set"):(z(t[r].status===0,"Unexpected transaction status in abort"),t[r].unwatcher(),i=i.concat(Ut(n.serverSyncTree_,t[r].currentWriteId,!0)),t[r].onComplete&&s.push(t[r].onComplete.bind(null,new Error("set"),!1,null))));o===-1?Ra(e,void 0):t.length=o+1,ht(n.eventQueue_,es(e),i);for(let r=0;r<s.length;r++)vn(s[r])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Vh(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):tt(`Invalid query segment '${t}' in query '${n}'`)}return e}const dr=function(n,e){const t=jh(n),s=t.namespace;t.domain==="firebase.com"&&yt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||id();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Hl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Se(t.pathString)}},jh=function(n){let e="",t="",s="",i="",o="",r=!0,a="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let c=n.indexOf("?");c===-1&&(c=n.length),e=n.substring(0,Math.min(d,c)),d<c&&(i=Uh(n.substring(d,c)));const f=Vh(n.substring(Math.min(n.length,c)));u=e.indexOf(":"),u>=0?(r=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const h=e.slice(0,u);if(h.toLowerCase()==="localhost")t="localhost";else if(h.split(".").length<=2)t=h;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),o=s}"ns"in f&&(o=f.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:r,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Gh=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const o=new Array(8);for(i=7;i>=0;i--)o[i]=fr.charAt(t%64),t=Math.floor(t/64);z(t===0,"Cannot push at time == 0");let r=o.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)r+=fr.charAt(e[i]);return z(r.length===20,"nextPushId: Length should be 20."),r}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+We(this.snapshot.exportVal())}}class Kh{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Vs{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return de(this._path)?null:Xl(this._path)}get ref(){return new Ct(this._repo,this._path)}get _queryIdentifier(){const e=Xo(this._queryParams),t=Fi(e);return t==="{}"?"default":t}get _queryObject(){return Xo(this._queryParams)}isEqual(e){if(e=Bt(e),!(e instanceof Vs))return!1;const t=this._repo===e._repo,s=Zl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zd(this._path)}}function Xh(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function xh(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Tt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Kt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==At)throw new Error(s);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===Me){if(e!=null&&!ar(e)||t!=null&&!ar(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(z(n.getIndex()instanceof oa||n.getIndex()===ra,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Ct extends Vs{constructor(e,t){super(e,t,new ji,!1)}get parent(){const e=Jl(this._path);return e===null?null:new Ct(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Se(e),s=vt(this.ref,e);return new Gn(this._node.getChild(t),s,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Gn(i,vt(this.ref,s),Me)))}hasChild(e){const t=new Se(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function pn(n,e){return n=Bt(n),n._checkNotDeleted("ref"),e!==void 0?vt(n._root,e):n._root}function vt(n,e){return n=Bt(n),_e(n._path)===null?Sh("child","path",e,!1):Fa("child","path",e,!1),new Ct(n._repo,qe(n._path,e))}function Jh(n,e){n=Bt(n),lo("push",n._path),Ba("push",e,n._path,!0);const t=qa(n._repo),s=Gh(t),i=vt(n,s),o=vt(n,s);let r;return e!=null?r=js(o,e).then(()=>o):r=Promise.resolve(o),i.then=r.then.bind(r),i.catch=r.then.bind(r,void 0),i}function Zh(n){return lo("remove",n._path),js(n,null)}function js(n,e){n=Bt(n),lo("set",n._path),Ba("set",e,n._path,!1);const t=new As;return Bh(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Ya(n){n=Bt(n);const e=new Qh(()=>{}),t=new fo(e);return Lh(n._repo,n,t).then(s=>new Gn(s,new Ct(n._repo,n._path),n._queryParams.getIndex()))}class fo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Yh("value",this,new Gn(e.snapshotNode,new Ct(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Kh(this,e,t):null}matches(e){return e instanceof fo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class $h{}class e_ extends $h{_apply(e){Xh(e,"orderByKey");const t=cf(e._queryParams,Tt);return xh(t),new Vs(e._repo,e._path,t,!0)}}function Ka(){return new e_}function Qa(n,...e){let t=Bt(n);for(const s of e)t=s._apply(t);return t}Jf(Ct);nh(Ct);/**
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
 */const t_="FIREBASE_DATABASE_EMULATOR_HOST",ki={};let n_=!1;function s_(n,e,t,s){n.repoInfo_=new Hl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function i_(n,e,t,s,i){let o=s||n.options.databaseURL;o===void 0&&(n.options.projectId||yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let r=dr(o,i),a=r.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[t_]),u?(l=!0,o=`http://${u}?ns=${a.namespace}`,r=dr(o,i),a=r.repoInfo):l=!r.repoInfo.secure;const d=i&&l?new cn(cn.OWNER):new pd(n.name,n.options,e);Ih("Invalid Firebase Database URL",r),de(r.path)||yt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=r_(a,n,d,new _d(n.name,t));return new l_(c,n)}function o_(n,e){const t=ki[e];(!t||t[n.key]!==n)&&yt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Wh(n),delete t[n.key]}function r_(n,e,t,s){let i=ki[e.name];i||(i={},ki[e.name]=i);let o=i[n.toURLString()];return o&&yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Ah(n,n_,t,s),i[n.toURLString()]=o,o}class l_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ph(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ct(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(o_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yt("Cannot call "+e+" on a deleted database.")}}function a_(n=zc(),e){const t=Fc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Du("database");s&&u_(t,...s)}return t}function u_(n,e,t,s={}){n=Bt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&yt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let o;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new cn(cn.OWNER);else if(s.mockUserToken){const r=typeof s.mockUserToken=="string"?s.mockUserToken:Ou(s.mockUserToken,n.app.options.projectId);o=new cn(r)}s_(i,e,t,o)}/**
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
 */function c_(n){$c(Hc),ps(new Bn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return i_(s,i,o,t)},"PUBLIC").setMultipleInstances(!0)),an(Ao,Po,n),an(Ao,Po,"esm2017")}mt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};mt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};c_();const d_={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};let Ns={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},Si=["head","body","legs","feet","neck","back","ring","misc"],ho={name:"",stats:{armor:0,magicDmg:0,meleeDmg:0,rangedDmg:0,hpRegen:0,endurance:0,sightRange:0,walkSpeed:0,jumpPower:0,ammoReturn:0,height:0},image:"",link:""},_o={name:"",info:{type:"",special:""},moves:[],image:"",link:""},Yn=[...Array(5).keys()].map(n=>++n),mn=a_(El(d_)),f_=["head","body","legs","feet","neck","back","ring","misc","gear","sets","bonuses"];function Xa(n,e){let t=!1;for(let s of[n,e])for(let i in s)if(s[i].name){t=!0;break}ul.set(t),$e.set(null),window.history.replaceState(null,null,location.origin+location.pathname)}function po(n,e){let t=2.8,s=e.split(" ").length,i=n.querySelector("span");if(i.style.removeProperty("font-size"),s>2&&e.length/s>=5){for(;i.offsetHeight>n.offsetHeight*.75;)t-=.05,i.style.fontSize=`calc(var(--u) * ${t})`;return t<2.8}return null}function h_(n,e){let t=2.8,s=n.querySelector("span");for(s.style.removeProperty("font-size");s.offsetWidth>n.offsetWidth;)t-=.05,s.style.fontSize=`calc(var(--u) * ${t})`;for(;s.offsetHeight>n.offsetHeight*.75&&e;)console.log("C"),t-=.05,s.style.fontSize=`calc(var(--u) * ${t})`;return t<2.8?t:null}function __(n){let e=2.35,t=n.querySelector(".tooltip");for(t.style.removeProperty("font-size");t.offsetHeight>n.offsetHeight*1.125;)e-=.02,t.style.fontSize=`calc(var(--u) * ${e})`}function p_(n){document.activeElement==document.body&&n.key=="Tab"&&(n.preventDefault(),document.querySelector(`.promptCont [id*='${n.shiftKey?"last":"first"}Focusable']`).focus())}function xa(n,e){let t=n.toLowerCase();for(let s in e)s.toLowerCase().includes(t)?e[s].classList.remove("hidden"):e[s].classList.add("hidden")}function Ds(n,e){e&&setTimeout(()=>{n.focus(),n.click(),n.select()})}function Ft(n){n.shiftKey&&n.key=="Tab"&&n.preventDefault()}function Jt(n){n.key=="Tab"&&!n.shiftKey&&n.preventDefault()}function Os(n,e){let t=/[^a-zA-Z0-9~!#$%^&*()\-_+[\]{}\\|;:'",.<>/? ]/g;return n.replace(t,"").replaceAll(`
`,"").replace(/^ /,"").slice(0,e)}function Ii(n,e,t){(!n.maxLength||n.maxLength!=t)&&e.length>=t&&(n.maxLength=t)}function Ja(n,e){n={...n},e={...e};for(let t of Si)n[t]?n[t]=n[t].name:n[t]="";for(let t of Yn)e[t]?e[t]=e[t].name:e[t]="";return{eq:n,gear:e}}function mo(){window.history.replaceState(null,null,location.origin+location.pathname+"?ls=true")}function m_(n){let e,t,s,i,o,r,a,l;return{c(){e=v("li"),t=v("button"),s=v("img"),o=A(),r=v("span"),r.textContent=`${n[3]}`,Xe(s.src,i=n[0].image)||g(s,"src",i),g(s,"alt",""),J(e,"selectedItem",n[2])},m(u,d){F(u,e,d),p(e,t),p(t,s),p(t,o),p(t,r),n[8](e),a||(l=[$r(n[4].call(null,r)),N(t,"click",n[5])],a=!0)},p(u,[d]){d&1&&!Xe(s.src,i=u[0].image)&&g(s,"src",i),d&4&&J(e,"selectedItem",u[2])},i:te,o:te,d(u){u&&P(e),n[8](null),a=!1,ge(l)}}}function g_(n,e,t){let s,i,o,r,a,l;K(n,Ze,b=>t(9,s=b)),K(n,ln,b=>t(10,i=b)),K(n,Ot,b=>t(11,o=b)),K(n,bt,b=>t(12,r=b)),K(n,Rt,b=>t(13,a=b)),K(n,Ai,b=>t(14,l=b));let{itemData:u,slotOpen:d,eqSlotName:c}=e;const f=wt();let h,_=!1,m=u.name;function y(b){setTimeout(()=>{po(h,m)&&l.push({node:h,itemName:m})})}function w(b){if(d||!d&&b.isTrusted==!1){f("itemSelect",{element:h,trusted:b.isTrusted}),h.classList.contains("selectedItem")||t(2,_=!1),t(2,_=!_),t(6,d=!1),U(bt,r[c]=_?u:ho,r),Xa(r,a);for(let I of Object.keys(Ns)){U(Ze,s[I]=0,s);for(let C in r)U(Ze,s[I]+=r[C].stats[I],s),U(Ze,s[I]=Math.round(s[I]*10)/10,s)}for(let I of o.bonuses)if(i[I.name])for(let C in s)U(Ze,s[C]+=I.stats[C],s),U(Ze,s[C]=Math.round(s[C]*10)/10,s)}}function T(b){$[b?"unshift":"push"](()=>{h=b,t(1,h)})}return n.$$set=b=>{"itemData"in b&&t(0,u=b.itemData),"slotOpen"in b&&t(6,d=b.slotOpen),"eqSlotName"in b&&t(7,c=b.eqSlotName)},[u,h,_,m,y,w,d,c,T]}class b_ extends De{constructor(e){super(),Ne(this,e,g_,m_,me,{itemData:0,slotOpen:6,eqSlotName:7})}}function y_(n){let e,t,s,i,o,r,a,l,u;return{c(){e=v("li"),t=v("button"),s=v("img"),o=A(),r=v("span"),r.textContent=`${n[4]}`,Xe(s.src,i=n[0].image)||g(s,"src",i),g(s,"alt",""),t.disabled=a=!n[3],J(e,"selectedItem",n[2]),J(e,"non-eligible",!n[3])},m(d,c){F(d,e,c),p(e,t),p(t,s),p(t,o),p(t,r),n[11](e),l||(u=[$r(n[5].call(null,r)),N(t,"click",n[6])],l=!0)},p(d,[c]){c&1&&!Xe(s.src,i=d[0].image)&&g(s,"src",i),c&8&&a!==(a=!d[3])&&(t.disabled=a),c&4&&J(e,"selectedItem",d[2]),c&8&&J(e,"non-eligible",!d[3])},i:te,o:te,d(d){d&&P(e),n[11](null),l=!1,ge(u)}}}function v_(n,e,t){let s,i,o;K(n,Rt,b=>t(10,s=b)),K(n,bt,b=>t(12,i=b)),K(n,Ai,b=>t(13,o=b));let{itemData:r,slotOpen:a,index:l,weaponExpand:u}=e;const d=wt();let c,f=!1,h=!0,_=r.name,m={"Orange Salamander":["Green Salamander","Purple Salamander"],"Green Salamander":["Orange Salamander","Purple Salamander"],"Purple Salamander":["Orange Salamander","Green Salamander"],"White Salamander":["Black Salamander","Gold Salamander"],"Black Salamander":["White Salamander","Gold Salamander"],"Gold Salamander":["White Salamander","Black Salamander"]};function y(b){setTimeout(()=>{po(c,_)&&o.push({node:c,itemName:_})})}function w(b){h&&(a||!a&&b.isTrusted==!1)&&(d("itemSelect",{element:c,trusted:b.isTrusted}),c.classList.contains("selectedItem")||t(2,f=!1),t(2,f=!f),t(7,a=!1),U(Rt,s[l]=f?r:_o,s),Xa(i,s))}function T(b){$[b?"unshift":"push"](()=>{c=b,t(1,c)})}return n.$$set=b=>{"itemData"in b&&t(0,r=b.itemData),"slotOpen"in b&&t(7,a=b.slotOpen),"index"in b&&t(8,l=b.index),"weaponExpand"in b&&t(9,u=b.weaponExpand)},n.$$.update=()=>{if(n.$$.dirty&1793&&s)for(let b in s)if(b!=l&&(s[b].name==_||m[s[b].name]&&m[s[b].name].includes(_))){t(3,h=!1);break}else!u&&!r.tool&&t(3,h=!0);if(n.$$.dirty&1793){if(u)r.tool&&t(3,h=!1);else if(r.tool)for(let b in s)if(b!=l&&s[b].name==_){t(3,h=!1);break}else t(3,h=!0)}},[r,c,f,h,_,y,w,a,l,u,s,T]}class w_ extends De{constructor(e){super(),Ne(this,e,v_,y_,me,{itemData:0,slotOpen:7,index:8,weaponExpand:9})}}function C_(n){const e=n-1;return e*e*e+1}function Ge(n,{delay:e=0,duration:t=400,easing:s=Rs}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:o=>`opacity: ${o*i}`}}function it(n,{delay:e=0,duration:t=400,easing:s=C_,start:i=0,opacity:o=0}={}){const r=getComputedStyle(n),a=+r.opacity,l=r.transform==="none"?"":r.transform,u=1-i,d=a*(1-o);return{delay:e,duration:t,easing:s,css:(c,f)=>`
			transform: ${l} scale(${1-u*f});
			opacity: ${a-d*f}
		`}}function hr(n){let e,t,s,i;return{c(){e=v("img"),Xe(e.src,t=n[5][n[3]])||g(e,"src",t),g(e,"alt","")},m(o,r){F(o,e,r),i=!0},p(o,r){(!i||r&8&&!Xe(e.src,t=o[5][o[3]]))&&g(e,"src",t)},i(o){i||(o&&ve(()=>{i&&(s||(s=Ae(e,Ge,{duration:150},!0)),s.run(1))}),i=!0)},o(o){o&&(s||(s=Ae(e,Ge,{duration:150},!1)),s.run(0)),i=!1},d(o){o&&P(e),o&&s&&s.end()}}}function E_(n){let e,t,s=n[5][n[3]],i,o,r=n[0].name+"",a,l,u,d=hr(n);return{c(){e=v("li"),t=v("button"),d.c(),i=A(),o=v("span"),a=se(r),J(e,"selectedItem",n[4])},m(c,f){F(c,e,f),p(e,t),d.m(t,null),p(t,i),p(t,o),p(o,a),n[8](e),l||(u=[N(t,"click",n[6]),N(e,"mouseenter",n[9]),N(e,"focusin",n[10]),N(e,"mouseleave",n[11]),N(e,"focusout",n[12])],l=!0)},p(c,[f]){f&8&&me(s,s=c[5][c[3]])?(Le(),G(d,1,1,te),Be(),d=hr(c),d.c(),W(d,1),d.m(t,i)):d.p(c,f),f&1&&r!==(r=c[0].name+"")&&Re(a,r)},i(c){W(d)},o(c){G(d)},d(c){c&&P(e),d.d(c),n[8](null),l=!1,ge(u)}}}function k_(n,e,t){let s,i,o;K(n,Mn,V=>t(15,s=V)),K(n,bt,V=>t(16,i=V)),K(n,Ot,V=>t(17,o=V));let{itemData:r,ddOpen:a=!1}=e;const l=wt();let u,d=!1,c=!1,f,h=0,_=r.pieces.length,m=["head","body","legs","feet"];m=_==2?m.slice(1,3):_==3?m.slice(0,3):m;let y=[];for(let V=0;V<_;V++)y.push(o[m[V]].find(j=>j.name==r.pieces[V]).image);function w(){c?f=setInterval(()=>{t(3,h++,h),h==_&&t(3,h=0)},750):(clearInterval(f),t(3,h=0))}function T(){l("setSelect");let V=0;for(let j=0;j<_;j++)!i[m[j]]||i[m[j]].name!=r.pieces[j]?s[m[j]][r.pieces[j]].querySelector("button").click():V++;V!=_&&t(7,a=!1)}function b(V){$[V?"unshift":"push"](()=>{u=V,t(2,u)})}const I=()=>t(1,c=!0),C=()=>t(1,c=!0),O=()=>t(1,c=!1),L=()=>t(1,c=!1);return n.$$set=V=>{"itemData"in V&&t(0,r=V.itemData),"ddOpen"in V&&t(7,a=V.ddOpen)},n.$$.update=()=>{n.$$.dirty&2&&(c||!c)&&w()},[r,c,u,h,d,y,T,a,b,I,C,O,L]}class S_ extends De{constructor(e){super(),Ne(this,e,k_,E_,me,{itemData:0,ddOpen:7})}}function _r(n,e,t){const s=n.slice();return s[34]=e[t],s}function I_(n){let e;return{c(){e=v("span"),e.textContent="Loading items...",g(e,"class","svelte-o6g1ik")},m(t,s){F(t,e,s)},p:te,i:te,o:te,d(t){t&&P(e)}}}function T_(n){let e,t,s,i,o,r,a=Ve(n[5]),l=[];for(let d=0;d<a.length;d+=1)l[d]=pr(_r(n,a,d));const u=d=>G(l[d],1,1,()=>{l[d]=null});return{c(){e=v("input"),t=A(),s=v("ul");for(let d=0;d<l.length;d+=1)l[d].c();g(e,"type","text"),g(e,"class","searchBarInput"),g(e,"placeholder","Search..."),J(s,"no-scrollbar",n[9].length<=4)},m(d,c){F(d,e,c),n[18](e),F(d,t,c),F(d,s,c);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(s,null);n[24](s),i=!0,o||(r=[N(e,"keydown",n[10]),N(e,"input",n[11])],o=!0)},p(d,c){if(c[0]&4399){a=Ve(d[5]);let f;for(f=0;f<a.length;f+=1){const h=_r(d,a,f);l[f]?(l[f].p(h,c),W(l[f],1)):(l[f]=pr(h),l[f].c(),W(l[f],1),l[f].m(s,null))}for(Le(),f=a.length;f<l.length;f+=1)u(f);Be()}(!i||c[0]&512)&&J(s,"no-scrollbar",d[9].length<=4)},i(d){if(!i){for(let c=0;c<a.length;c+=1)W(l[c]);i=!0}},o(d){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)G(l[c]);i=!1},d(d){d&&(P(e),P(t),P(s)),n[18](null),gt(l,d),n[24](null),o=!1,ge(r)}}}function N_(n){let e,t,s;function i(r){n[23](r)}let o={itemData:n[34],eqSlotName:n[2]};return n[0]!==void 0&&(o.slotOpen=n[0]),e=new b_({props:o}),$.push(()=>ke(e,"slotOpen",i)),e.$on("itemSelect",n[12]),{c(){pe(e.$$.fragment)},m(r,a){fe(e,r,a),s=!0},p(r,a){const l={};a[0]&32&&(l.itemData=r[34]),a[0]&4&&(l.eqSlotName=r[2]),!t&&a[0]&1&&(t=!0,l.slotOpen=r[0],Ee(()=>t=!1)),e.$set(l)},i(r){s||(W(e.$$.fragment,r),s=!0)},o(r){G(e.$$.fragment,r),s=!1},d(r){he(e,r)}}}function D_(n){let e,t,s;function i(r){n[21](r)}let o={itemData:n[34]};return n[0]!==void 0&&(o.ddOpen=n[0]),e=new S_({props:o}),$.push(()=>ke(e,"ddOpen",i)),e.$on("setSelect",n[22]),{c(){pe(e.$$.fragment)},m(r,a){fe(e,r,a),s=!0},p(r,a){const l={};a[0]&32&&(l.itemData=r[34]),!t&&a[0]&1&&(t=!0,l.ddOpen=r[0],Ee(()=>t=!1)),e.$set(l)},i(r){s||(W(e.$$.fragment,r),s=!0)},o(r){G(e.$$.fragment,r),s=!1},d(r){he(e,r)}}}function O_(n){let e,t,s,i;function o(l){n[19](l)}function r(l){n[20](l)}let a={itemData:n[34],index:n[3]};return n[0]!==void 0&&(a.slotOpen=n[0]),n[1]!==void 0&&(a.weaponExpand=n[1]),e=new w_({props:a}),$.push(()=>ke(e,"slotOpen",o)),$.push(()=>ke(e,"weaponExpand",r)),e.$on("itemSelect",n[12]),{c(){pe(e.$$.fragment)},m(l,u){fe(e,l,u),i=!0},p(l,u){const d={};u[0]&32&&(d.itemData=l[34]),u[0]&8&&(d.index=l[3]),!t&&u[0]&1&&(t=!0,d.slotOpen=l[0],Ee(()=>t=!1)),!s&&u[0]&2&&(s=!0,d.weaponExpand=l[1],Ee(()=>s=!1)),e.$set(d)},i(l){i||(W(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){he(e,l)}}}function pr(n){let e,t,s,i;const o=[O_,D_,N_],r=[];function a(l,u){return l[3]?0:l[2]=="sets"?1:2}return e=a(n),t=r[e]=o[e](n),{c(){t.c(),s=Gt()},m(l,u){r[e].m(l,u),F(l,s,u),i=!0},p(l,u){let d=e;e=a(l),e===d?r[e].p(l,u):(Le(),G(r[d],1,1,()=>{r[d]=null}),Be(),t=r[e],t?t.p(l,u):(t=r[e]=o[e](l),t.c()),W(t,1),t.m(s.parentNode,s))},i(l){i||(W(t),i=!0)},o(l){G(t),i=!1},d(l){l&&P(s),r[e].d(l)}}}function R_(n){let e,t,s,i,o,r;const a=[T_,I_],l=[];function u(d,c){return d[5]?0:1}return t=u(n),s=l[t]=a[t](n),{c(){e=v("div"),s.c(),g(e,"class","dropdown svelte-o6g1ik")},m(d,c){F(d,e,c),l[t].m(e,null),i=!0,o||(r=[N(e,"transitionend",n[25]),N(e,"transitioncancel",n[26])],o=!0)},p(d,c){let f=t;t=u(d),t===f?l[t].p(d,c):(Le(),G(l[f],1,1,()=>{l[f]=null}),Be(),s=l[t],s?s.p(d,c):(s=l[t]=a[t](d),s.c()),W(s,1),s.m(e,null))},i(d){i||(W(s),i=!0)},o(d){G(s),i=!1},d(d){d&&P(e),l[t].d(),o=!1,ge(r)}}}function A_(n,e,t){let s,i,o,r,a,l;K(n,Ot,k=>t(14,o=k)),K(n,Mn,k=>t(15,r=k)),K(n,yu,k=>t(16,a=k)),K(n,ds,k=>t(17,l=k));let{slotName:u,index:d,slotOpen:c,weaponExpand:f}=e;const h=wt();d?U(ds,l[d]={},l):U(Mn,r[u]={},r);let _,m,y,w=null,T=!1,b=!1,I=[];function C(){y&&y.classList.remove("lastElement"),t(9,I=m.querySelectorAll("li:not(.hidden)")),y=I[I.length-1],y&&y.classList.add("lastElement"),(!y||y.classList.contains("non-eligible"))&&(y=_)}function O(k){!k.shiftKey&&k.key=="Tab"&&(k.preventDefault(),setTimeout(()=>_.focus()))}function L(){y&&y.removeEventListener("keydown",O),C(),y&&y.addEventListener("keydown",O)}function V(k){k.shiftKey&&k.key=="Tab"&&(k.preventDefault(),setTimeout(()=>(y.querySelector("button")||y).focus()))}function j(){xa(_.value,s),L()}function D(k){h("itemSelect",k.detail.element),t(7,w=k.detail.element),T=k.detail.trusted;let Y=m.querySelector(".selectedItem");Y&&Y!=k.detail.element&&Y.classList.remove("selectedItem"),t(8,b=!0),T||(T=!1,B(),m.scrollTo(0,w.offsetTop))}function B(){t(8,b=!1),t(6,_.value="",_),j()}function R(k){$[k?"unshift":"push"](()=>{_=k,t(6,_)})}function re(k){c=k,t(0,c)}function ne(k){f=k,t(1,f)}function E(k){c=k,t(0,c)}const x=()=>t(8,b=!0);function le(k){c=k,t(0,c)}function X(k){$[k?"unshift":"push"](()=>{m=k,t(4,m)})}const Q=k=>{k.propertyName=="visibility"&&(b&&B(),!c&&w&&m.scrollTo(0,w.offsetTop),Ds(_,c))},ae=k=>{k.propertyName=="visibility"&&(t(8,b=!1),Ds(_,c))};return n.$$set=k=>{"slotName"in k&&t(2,u=k.slotName),"index"in k&&t(3,d=k.index),"slotOpen"in k&&t(0,c=k.slotOpen),"weaponExpand"in k&&t(1,f=k.weaponExpand)},n.$$.update=()=>{if(n.$$.dirty[0]&229388&&(s=d?l[d]:u=="sets"?a:r[u]),n.$$.dirty[0]&16388&&t(5,i=o[u]),n.$$.dirty[0]&48&&m){t(9,I=m.querySelectorAll("li:not(.hidden)"));for(let k=0;k<m.childElementCount;k++)s[i[k].name]=m.children[k];C(),L()}},[c,f,u,d,m,i,_,w,b,I,V,j,D,B,o,r,a,l,R,re,ne,E,x,le,X,Q,ae]}class go extends De{constructor(e){super(),Ne(this,e,A_,R_,me,{slotName:2,index:3,slotOpen:0,weaponExpand:1},null,[-1,-1])}}function mr(n){let e,t,s,i,o,r,a=n[1].name+"",l,u,d,c,f,h;return{c(){e=v("a"),t=v("img"),o=A(),r=v("span"),l=se(a),Xe(t.src,s=n[1].image)||g(t,"src",s),g(t,"alt",i=n[1].name),g(t,"draggable","false"),g(t,"class","svelte-2kf2oz"),g(r,"class","tooltip"),g(r,"id","left"),g(e,"href",u=n[1].link),g(e,"target","_blank"),g(e,"class","svelte-2kf2oz"),Pe(e,"display",n[1].link?"":"none")},m(_,m){F(_,e,m),p(e,t),p(e,o),p(e,r),p(r,l),c=!0,f||(h=[N(e,"focusin",n[11]),N(e,"outroend",n[12])],f=!0)},p(_,m){(!c||m&2&&!Xe(t.src,s=_[1].image))&&g(t,"src",s),(!c||m&2&&i!==(i=_[1].name))&&g(t,"alt",i),(!c||m&2)&&a!==(a=_[1].name+"")&&Re(l,a),(!c||m&2&&u!==(u=_[1].link))&&g(e,"href",u),m&2&&Pe(e,"display",_[1].link?"":"none")},i(_){c||(_&&ve(()=>{c&&(d||(d=Ae(e,Ge,{duration:150},!0)),d.run(1))}),c=!0)},o(_){_&&(d||(d=Ae(e,Ge,{duration:150},!1)),d.run(0)),c=!1},d(_){_&&P(e),_&&d&&d.end(),f=!1,ge(h)}}}function P_(n){let e,t,s=n[1],i,o,r,a=n[0].charAt(0).toUpperCase()+n[0].slice(1)+"",l,u,d,c,f,h,_,m,y,w,T,b=mr(n);function I(O){n[17](O)}let C={slotName:n[0],index:null,weaponExpand:null};return n[5]!==void 0&&(C.slotOpen=n[5]),_=new go({props:C}),$.push(()=>ke(_,"slotOpen",I)),_.$on("itemSelect",n[18]),{c(){e=v("div"),t=v("div"),b.c(),o=A(),r=v("button"),l=se(a),u=A(),d=v("iconify-icon"),c=A(),f=v("button"),f.innerHTML='<iconify-icon icon="maki:cross" class="svelte-2kf2oz"></iconify-icon> <span class="tooltip" id="top">Clear selection</span>',h=A(),pe(_.$$.fragment),g(t,"class","eqSlotIcon ff-border svelte-2kf2oz"),ve(()=>n[14].call(t)),Pe(t,"min-width",`${n[4]}px`),xe(d,"icon","iconamoon:arrow-down-2-fill"),xe(d,"class","svelte-2kf2oz"),g(r,"class","ddButton svelte-2kf2oz"),g(f,"class","clearButton svelte-2kf2oz"),g(e,"class","eqSlotCont svelte-2kf2oz"),J(e,"slotOpen",n[5]),J(e,"clearAllowed",n[6]&&n[7])},m(O,L){F(O,e,L),p(e,t),b.m(t,null),n[13](t),i=ft(t,n[14].bind(t)),p(e,o),p(e,r),p(r,l),p(r,u),p(r,d),p(e,c),p(e,f),p(e,h),fe(_,e,null),n[19](e),y=!0,w||(T=[N(window,"mousedown",n[9]),N(window,"keydown",n[10]),N(r,"click",n[15]),N(f,"click",n[16]),N(e,"keydown",n[20]),N(e,"mouseenter",n[21]),N(e,"mouseleave",n[22])],w=!0)},p(O,[L]){L&2&&me(s,s=O[1])?(Le(),G(b,1,1,te),Be(),b=mr(O),b.c(),W(b,1),b.m(t,null)):b.p(O,L),L&16&&Pe(t,"min-width",`${O[4]}px`),(!y||L&1)&&a!==(a=O[0].charAt(0).toUpperCase()+O[0].slice(1)+"")&&Re(l,a);const V={};L&1&&(V.slotName=O[0]),!m&&L&32&&(m=!0,V.slotOpen=O[5],Ee(()=>m=!1)),_.$set(V),(!y||L&32)&&J(e,"slotOpen",O[5]),(!y||L&192)&&J(e,"clearAllowed",O[6]&&O[7])},i(O){y||(W(b),W(_.$$.fragment,O),y=!0)},o(O){G(b),G(_.$$.fragment,O),y=!1},d(O){O&&P(e),b.d(O),n[13](null),i(),he(_),n[19](null),w=!1,ge(T)}}}function M_(n,e,t){let s;K(n,bt,D=>t(8,s=D));let{eqSlotName:i}=e,o,r,a,l=ho,u,d,c;const f=D=>{(!o.contains(D.target)||D.target==o||D.target==r)&&(t(5,u=!1),D.target!=o&&D.target!=r&&t(6,d=!1))},h=D=>{D.key=="Tab"&&setTimeout(()=>{t(6,d=o.contains(document.activeElement))})},_=D=>{D.relatedTarget==null&&t(6,d=!0)},m=()=>{setTimeout(()=>{__(r)})};function y(D){$[D?"unshift":"push"](()=>{r=D,t(3,r)})}function w(){a=this.offsetHeight,t(4,a)}const T=()=>t(5,u=!u),b=()=>{t(6,d=!1),o.classList.contains("clearAllowed")&&c.querySelector("button").click()};function I(D){u=D,t(5,u)}const C=D=>{setTimeout(()=>{t(7,c=D.detail.classList.contains("selectedItem")?D.detail:null)})};function O(D){$[D?"unshift":"push"](()=>{o=D,t(2,o)})}const L=D=>{D.key=="Escape"&&t(5,u=!1)},V=()=>t(6,d=!0),j=()=>{o.contains(document.activeElement)||t(6,d=!1)};return n.$$set=D=>{"eqSlotName"in D&&t(0,i=D.eqSlotName)},n.$$.update=()=>{n.$$.dirty&259&&s[i]&&s[i].name!=l.name&&t(1,l=s[i])},[i,l,o,r,a,u,d,c,s,f,h,_,m,y,w,T,b,I,C,O,L,V,j]}class L_ extends De{constructor(e){super(),Ne(this,e,M_,P_,me,{eqSlotName:0})}}function gr(n,e,t){const s=n.slice();return s[1]=e[t],s[2]=e,s[3]=t,s}function br(n){let e,t,s;function i(r){n[0](r,n[1],n[2],n[3])}let o={};return n[1]!==void 0&&(o.eqSlotName=n[1]),e=new L_({props:o}),$.push(()=>ke(e,"eqSlotName",i)),{c(){pe(e.$$.fragment)},m(r,a){fe(e,r,a),s=!0},p(r,a){n=r;const l={};!t&&a&0&&(t=!0,l.eqSlotName=n[1],Ee(()=>t=!1)),e.$set(l)},i(r){s||(W(e.$$.fragment,r),s=!0)},o(r){G(e.$$.fragment,r),s=!1},d(r){he(e,r)}}}function B_(n){let e,t,s=Ve(Array(...Si)),i=[];for(let r=0;r<s.length;r+=1)i[r]=br(gr(n,s,r));const o=r=>G(i[r],1,1,()=>{i[r]=null});return{c(){e=v("div");for(let r=0;r<i.length;r+=1)i[r].c();g(e,"class","armorBox svelte-106aluw")},m(r,a){F(r,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);t=!0},p(r,[a]){if(a&0){s=Ve(Array(...Si));let l;for(l=0;l<s.length;l+=1){const u=gr(r,s,l);i[l]?(i[l].p(u,a),W(i[l],1)):(i[l]=br(u),i[l].c(),W(i[l],1),i[l].m(e,null))}for(Le(),l=s.length;l<i.length;l+=1)o(l);Be()}},i(r){if(!t){for(let a=0;a<s.length;a+=1)W(i[a]);t=!0}},o(r){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)G(i[a]);t=!1},d(r){r&&P(e),gt(i,r)}}}function F_(n,e,t){function s(i,o,r,a){r[a]=i}return[s]}class W_ extends De{constructor(e){super(),Ne(this,e,F_,B_,me,{})}}function q_(n){let e,t=(n[4]?`${Math.floor(n[6]*.675+19.8)}% Reduction`:n[6])+"",s,i,o,r;return{c(){e=v("span"),s=se(t),g(e,"class","statValue svelte-14t9ks5"),g(e,"tabindex","0"),g(e,"style",i=n[4]?`font-size: ${n[2]*.7/6.85}px;`:""),J(e,"hidden",n[3]),J(e,"negative",n[6]<0),J(e,"zero",n[6]==0),J(e,"reduction",n[4])},m(a,l){F(a,e,l),p(e,s),o||(r=[N(e,"mouseenter",n[13]),N(e,"mouseleave",n[14]),N(e,"focusin",n[15]),N(e,"focusout",n[16])],o=!0)},p(a,l){l&80&&t!==(t=(a[4]?`${Math.floor(a[6]*.675+19.8)}% Reduction`:a[6])+"")&&Re(s,t),l&20&&i!==(i=a[4]?`font-size: ${a[2]*.7/6.85}px;`:"")&&g(e,"style",i),l&8&&J(e,"hidden",a[3]),l&64&&J(e,"negative",a[6]<0),l&64&&J(e,"zero",a[6]==0),l&16&&J(e,"reduction",a[4])},d(a){a&&P(e),o=!1,ge(r)}}}function H_(n){let e,t=(n[0]!="endurance"?n[6]:n[6].toFixed(2))+"",s;return{c(){e=v("span"),s=se(t),g(e,"class","statValue svelte-14t9ks5"),J(e,"hidden",n[3]),J(e,"negative",n[6]<0),J(e,"zero",n[6]==0)},m(i,o){F(i,e,o),p(e,s)},p(i,o){o&65&&t!==(t=(i[0]!="endurance"?i[6]:i[6].toFixed(2))+"")&&Re(s,t),o&8&&J(e,"hidden",i[3]),o&64&&J(e,"negative",i[6]<0),o&64&&J(e,"zero",i[6]==0)},d(i){i&&P(e)}}}function z_(n){let e;return{c(){e=v("iconify-icon"),xe(e,"icon","codicon:sparkle-filled"),xe(e,"class","svelte-14t9ks5")},m(t,s){F(t,e,s)},p:te,d(t){t&&P(e)}}}function U_(n){let e,t=`${n[1]} Bonus`,s;return{c(){e=v("span"),s=se(t),Pe(e,"font-size",`${n[2]*.7/n[7][n[0]]}px`)},m(i,o){F(i,e,o),p(e,s)},p(i,o){o&2&&t!==(t=`${i[1]} Bonus`)&&Re(s,t),o&5&&Pe(e,"font-size",`${i[2]*.7/i[7][i[0]]}px`)},d(i){i&&P(e)}}}function V_(n){let e,t,s,i,o,r,a,l;function u(m,y){return m[0]!="armor"?H_:q_}let d=u(n),c=d(n);function f(m,y){if(m[3])return U_;if(m[5])return z_}let h=f(n),_=h&&h(n);return{c(){e=v("div"),t=v("img"),i=A(),c.c(),o=A(),_&&_.c(),Xe(t.src,s="stats/"+n[0]+".svg")||g(t,"src",s),g(t,"alt",n[1]),g(t,"class","svelte-14t9ks5"),g(e,"id",n[0]),g(e,"class","svelte-14t9ks5"),ve(()=>n[17].call(e)),J(e,"hidden",n[6]==0)},m(m,y){F(m,e,y),p(e,t),p(e,i),c.m(e,null),p(e,o),_&&_.m(e,null),r=ft(e,n[17].bind(e)),a||(l=[N(t,"mouseenter",n[11]),N(t,"mouseleave",n[12])],a=!0)},p(m,[y]){y&1&&!Xe(t.src,s="stats/"+m[0]+".svg")&&g(t,"src",s),y&2&&g(t,"alt",m[1]),d===(d=u(m))&&c?c.p(m,y):(c.d(1),c=d(m),c&&(c.c(),c.m(e,o))),h===(h=f(m))&&_?_.p(m,y):(_&&_.d(1),_=h&&h(m),_&&(_.c(),_.m(e,null))),y&1&&g(e,"id",m[0]),y&64&&J(e,"hidden",m[6]==0)},i:te,o:te,d(m){m&&P(e),c.d(),_&&_.d(),r(),a=!1,ge(l)}}}function j_(n,e,t){let s,i,o,r;K(n,Ot,C=>t(8,i=C)),K(n,ln,C=>t(9,o=C)),K(n,Ze,C=>t(10,r=C));let{codeName:a,formalName:l}=e,u,d,c,f=!1,h={armor:5.9,magicDmg:5.65,meleeDmg:5.7,rangedDmg:6.45,hpRegen:7.35,endurance:7.85,sightRange:8.45,walkSpeed:8.3,jumpPower:8.7,ammoReturn:9.3,height:6.1};const _=()=>t(3,d=!0),m=()=>t(3,d=!1),y=()=>t(4,c=!0),w=()=>t(4,c=!1),T=()=>t(4,c=!0),b=()=>t(4,c=!1);function I(){u=this.offsetWidth,t(2,u)}return n.$$set=C=>{"codeName"in C&&t(0,a=C.codeName),"formalName"in C&&t(1,l=C.formalName)},n.$$.update=()=>{if(n.$$.dirty&1025&&t(6,s=r[a]),n.$$.dirty&769)for(let C in o)if(o[C]&&i.bonuses.find(O=>O.name==C).stats[a]!=0){t(5,f=!0);break}else t(5,f=!1)},[a,l,u,d,c,f,s,h,i,o,r,_,m,y,w,T,b,I]}class G_ extends De{constructor(e){super(),Ne(this,e,j_,V_,me,{codeName:0,formalName:1})}}function Y_(n){let e,t,s,i,o,r,a,l;return{c(){e=v("div"),t=v("span"),s=A(),i=v("input"),o=A(),r=v("iconify-icon"),g(i,"type","checkbox"),i.checked=n[1],g(i,"class","svelte-apn2c6"),xe(r,"icon","mingcute:check-fill"),xe(r,"class","svelte-apn2c6"),g(e,"class","toggleCont svelte-apn2c6")},m(u,d){F(u,e,d),p(e,t),t.innerHTML=n[0],p(e,s),p(e,i),p(e,o),p(e,r),a||(l=[N(i,"change",n[3]),N(i,"keydown",n[4])],a=!0)},p(u,[d]){d&1&&(t.innerHTML=u[0]),d&2&&(i.checked=u[1])},i:te,o:te,d(u){u&&P(e),a=!1,ge(l)}}}function K_(n,e,t){let{text:s,checked:i}=e;const o=wt(),r=l=>o("toggle",l.target.checked),a=l=>{l.key=="Enter"&&(l.target.checked=!l.target.checked,o("toggle",l.target.checked))};return n.$$set=l=>{"text"in l&&t(0,s=l.text),"checked"in l&&t(1,i=l.checked)},[s,i,o,r,a]}class Gs extends De{constructor(e){super(),Ne(this,e,K_,Y_,me,{text:0,checked:1})}}function yr(n,e,t){const s=n.slice();return s[4]=e[t][0],s[5]=e[t][1],s[6]=e,s[7]=t,s}function vr(n){let e,t,s,i;function o(l){n[1](l,n[4],n[6],n[7])}function r(l){n[2](l,n[5],n[6],n[7])}let a={};return n[4]!==void 0&&(a.codeName=n[4]),n[5]!==void 0&&(a.formalName=n[5]),e=new G_({props:a}),$.push(()=>ke(e,"codeName",o)),$.push(()=>ke(e,"formalName",r)),{c(){pe(e.$$.fragment)},m(l,u){fe(e,l,u),i=!0},p(l,u){n=l;const d={};!t&&u&0&&(t=!0,d.codeName=n[4],Ee(()=>t=!1)),!s&&u&0&&(s=!0,d.formalName=n[5],Ee(()=>s=!1)),e.$set(d)},i(l){i||(W(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){he(e,l)}}}function Q_(n){let e,t,s,i,o=Ve(Object.entries(Ns)),r=[];for(let l=0;l<o.length;l+=1)r[l]=vr(yr(n,o,l));const a=l=>G(r[l],1,1,()=>{r[l]=null});return s=new Gs({props:{text:"Show all stats",checked:!1}}),s.$on("toggle",n[3]),{c(){e=v("div");for(let l=0;l<r.length;l+=1)r[l].c();t=A(),pe(s.$$.fragment),g(e,"class","statBox svelte-lu37w6"),J(e,"showAll",n[0])},m(l,u){F(l,e,u);for(let d=0;d<r.length;d+=1)r[d]&&r[d].m(e,null);p(e,t),fe(s,e,null),i=!0},p(l,[u]){if(u&0){o=Ve(Object.entries(Ns));let d;for(d=0;d<o.length;d+=1){const c=yr(l,o,d);r[d]?(r[d].p(c,u),W(r[d],1)):(r[d]=vr(c),r[d].c(),W(r[d],1),r[d].m(e,t))}for(Le(),d=o.length;d<r.length;d+=1)a(d);Be()}(!i||u&1)&&J(e,"showAll",l[0])},i(l){if(!i){for(let u=0;u<o.length;u+=1)W(r[u]);W(s.$$.fragment,l),i=!0}},o(l){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)G(r[u]);G(s.$$.fragment,l),i=!1},d(l){l&&P(e),gt(r,l),he(s)}}}function X_(n,e,t){let s=!1;function i(a,l,u,d){u[d][0]=a}function o(a,l,u,d){u[d][1]=a}return[s,i,o,a=>t(0,s=a.detail)]}class x_ extends De{constructor(e){super(),Ne(this,e,X_,Q_,me,{})}}function J_(n){let e,t,s,i,o,r,a,l,u,d;return{c(){e=v("div"),t=v("button"),t.textContent="-",s=A(),i=v("input"),o=A(),r=v("b"),r.textContent="%",a=A(),l=v("button"),l.textContent="+",g(t,"id","decrease"),g(t,"class","svelte-1d7zneu"),g(i,"type","number"),g(i,"placeholder","0"),g(i,"class","svelte-1d7zneu"),g(r,"class","svelte-1d7zneu"),g(l,"id","increase"),g(l,"class","svelte-1d7zneu"),g(e,"class","svelte-1d7zneu"),J(e,"non-percent",!n[1])},m(c,f){F(c,e,f),p(e,t),p(e,s),p(e,i),ct(i,n[0]),p(e,o),p(e,r),p(e,a),p(e,l),u||(d=[N(t,"click",n[4]),N(i,"input",n[5]),N(i,"input",n[2]),N(l,"click",n[6])],u=!0)},p(c,[f]){f&1&&sl(i.value)!==c[0]&&ct(i,c[0])},i:te,o:te,d(c){c&&P(e),u=!1,ge(d)}}}function Z_(n,e,t){let{weaponName:s,value:i}=e,o=s!="Nature's Wrath Spellbook",r;o?(i=100,r=100):(i=4,r=4);function a(){i<0?t(0,i=0):i>r&&t(0,i=r),i%1!=0&&t(0,i=Math.floor(i))}const l=()=>{t(0,i--,i),a()};function u(){i=sl(this.value),t(0,i)}const d=()=>{t(0,i++,i),a()};return n.$$set=c=>{"weaponName"in c&&t(3,s=c.weaponName),"value"in c&&t(0,i=c.value)},[i,o,a,s,l,u,d]}class $_ extends De{constructor(e){super(),Ne(this,e,Z_,J_,me,{weaponName:3,value:0})}}function wr(n,e,t){const s=n.slice();s[45]=e[t];const i=s[45].name.includes("Fantastic Beamstorm")?"~":"";s[19]=i;const o=s[45].name.includes("Charged");return s[46]=o,s}function ep(n){let e,t,s=n[2].description+"",i,o;return{c(){e=v("span"),t=se('"'),i=se(s),o=se('"'),g(e,"id","toolDesc"),g(e,"class","svelte-ghlpvm")},m(r,a){F(r,e,a),p(e,t),p(e,i),p(e,o)},p(r,a){a[0]&4&&s!==(s=r[2].description+"")&&Re(i,s)},d(r){r&&P(e)}}}function tp(n){let e,t,s,i=`${n[5]?"Type":n[3].name}:`,o,r,a=n[17],l,u,d,c,f,h=n[5]?"Return":"Expand",_,m,y,w,T=Er(n),b=n[4]&&kr(n);return{c(){e=v("button"),t=v("div"),s=v("span"),o=se(i),r=A(),T.c(),u=A(),b&&b.c(),d=A(),c=v("span"),f=se("("),_=se(h),m=se(")"),g(s,"class","svelte-ghlpvm"),Pe(s,"font-size",Object.keys(n[18]).includes(n[3].name)?`calc(var(--u) * ${n[18][n[3].name]})`:""),g(t,"id",l=n[5]?"":"basic"),g(t,"class","svelte-ghlpvm"),g(c,"class","tooltip svelte-ghlpvm"),g(c,"id","top"),g(e,"class","gearPreview svelte-ghlpvm"),Pe(e,"line-height",`${n[10]/6.5}px`)},m(I,C){F(I,e,C),p(e,t),p(t,s),p(s,o),p(t,r),T.m(t,null),p(e,u),b&&b.m(e,null),p(e,d),p(e,c),p(c,f),p(c,_),p(c,m),n[31](e),y||(w=N(e,"click",n[23]),y=!0)},p(I,C){C[0]&40&&i!==(i=`${I[5]?"Type":I[3].name}:`)&&Re(o,i),C[0]&262152&&Pe(s,"font-size",Object.keys(I[18]).includes(I[3].name)?`calc(var(--u) * ${I[18][I[3].name]})`:""),C[0]&131072&&me(a,a=I[17])?(T.d(1),T=Er(I),T.c(),T.m(t,null)):T.p(I,C),C[0]&32&&l!==(l=I[5]?"":"basic")&&g(t,"id",l),I[4]?b?b.p(I,C):(b=kr(I),b.c(),b.m(e,d)):b&&(b.d(1),b=null),C[0]&32&&h!==(h=I[5]?"Return":"Expand")&&Re(_,h),C[0]&1024&&Pe(e,"line-height",`${I[10]/6.5}px`)},d(I){I&&P(e),T.d(I),b&&b.d(),n[31](null),y=!1,w()}}}function Cr(n){let e;return{c(){e=v("iconify-icon"),xe(e,"icon","codicon:sparkle-filled"),xe(e,"class","svelte-ghlpvm")},m(t,s){F(t,e,s)},d(t){t&&P(e)}}}function Er(n){let e,t,s=(n[5]?n[2].info.type.replace("/","<b>,</b><br/>"):n[21](n[3]))+"",i,o=!n[5]&&n[6].basic&&Cr();return{c(){e=v("span"),t=new au(!1),i=A(),o&&o.c(),t.a=i,g(e,"class","svelte-ghlpvm")},m(r,a){F(r,e,a),t.m(s,e),p(e,i),o&&o.m(e,null)},p(r,a){a[0]&44&&s!==(s=(r[5]?r[2].info.type.replace("/","<b>,</b><br/>"):r[21](r[3]))+"")&&t.p(s),!r[5]&&r[6].basic?o||(o=Cr(),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(r){r&&P(e),o&&o.d()}}}function kr(n){let e,t,s=`${n[5]?"Special":n[4].name.split(" (")[0]}:`,i,o,r=n[17],a,l=Ir(n);return{c(){e=v("div"),t=v("span"),i=se(s),o=A(),l.c(),g(t,"class","svelte-ghlpvm"),Pe(t,"font-size",Object.keys(n[18]).includes(n[4].name)?`calc(var(--u) * ${n[18][n[4].name]})`:""),g(e,"id",a=n[5]?"":"special"),g(e,"class","svelte-ghlpvm")},m(u,d){F(u,e,d),p(e,t),p(t,i),p(e,o),l.m(e,null)},p(u,d){d[0]&48&&s!==(s=`${u[5]?"Special":u[4].name.split(" (")[0]}:`)&&Re(i,s),d[0]&262160&&Pe(t,"font-size",Object.keys(u[18]).includes(u[4].name)?`calc(var(--u) * ${u[18][u[4].name]})`:""),d[0]&131072&&me(r,r=u[17])?(l.d(1),l=Ir(u),l.c(),l.m(e,null)):l.p(u,d),d[0]&32&&a!==(a=u[5]?"":"special")&&g(e,"id",a)},d(u){u&&P(e),l.d(u)}}}function Sr(n){let e;return{c(){e=v("iconify-icon"),xe(e,"icon","codicon:sparkle-filled"),xe(e,"class","svelte-ghlpvm")},m(t,s){F(t,e,s)},d(t){t&&P(e)}}}function Ir(n){let e,t=(n[5]?n[2].info.special:n[19]+n[21](n[4]))+"",s,i,o=!n[5]&&n[6].special&&Sr();return{c(){e=v("span"),s=se(t),i=A(),o&&o.c(),g(e,"class","svelte-ghlpvm")},m(r,a){F(r,e,a),p(e,s),p(e,i),o&&o.m(e,null)},p(r,a){a[0]&524340&&t!==(t=(r[5]?r[2].info.special:r[19]+r[21](r[4]))+"")&&Re(s,t),!r[5]&&r[6].special?o||(o=Sr(),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(r){r&&P(e),o&&o.d()}}}function Tr(n){let e,t,s,i,o,r,a=n[2].name+"",l,u,d,c;return{c(){e=v("a"),t=v("img"),o=A(),r=v("span"),l=se(a),Xe(t.src,s=n[2].image)||g(t,"src",s),g(t,"alt",i=n[2].name),g(t,"draggable","false"),g(t,"class","svelte-ghlpvm"),g(r,"class","tooltip svelte-ghlpvm"),g(r,"id","top"),g(e,"href",u=n[2].link),g(e,"target","_blank"),g(e,"class","svelte-ghlpvm"),Pe(e,"display",n[2].link?"":"none"),Pe(e,"border-radius",n[2].tool?"calc(var(--u))":"")},m(f,h){F(f,e,h),p(e,t),p(e,o),p(e,r),p(r,l),c=!0},p(f,h){(!c||h[0]&4&&!Xe(t.src,s=f[2].image))&&g(t,"src",s),(!c||h[0]&4&&i!==(i=f[2].name))&&g(t,"alt",i),(!c||h[0]&4)&&a!==(a=f[2].name+"")&&Re(l,a),(!c||h[0]&4&&u!==(u=f[2].link))&&g(e,"href",u),h[0]&4&&Pe(e,"display",f[2].link?"":"none"),h[0]&4&&Pe(e,"border-radius",f[2].tool?"calc(var(--u))":"")},i(f){c||(f&&ve(()=>{c&&(d||(d=Ae(e,Ge,{duration:150},!0)),d.run(1))}),c=!0)},o(f){f&&(d||(d=Ae(e,Ge,{duration:150},!1)),d.run(0)),c=!1},d(f){f&&P(e),f&&d&&d.end()}}}function Nr(n){let e,t,s,i,o,r,a;t=new Gs({props:{text:"Toggle base values",checked:!1}}),t.$on("toggle",n[39]);let l=Ve(n[2].moves),u=[];for(let c=0;c<l.length;c+=1)u[c]=Ar(wr(n,l,c));const d=c=>G(u[c],1,1,()=>{u[c]=null});return{c(){e=v("div"),pe(t.$$.fragment),s=A(),i=v("div");for(let c=0;c<u.length;c+=1)u[c].c();g(i,"class","weaponMoves svelte-ghlpvm"),g(e,"class","fullWeaponView svelte-ghlpvm")},m(c,f){F(c,e,f),fe(t,e,null),p(e,s),p(e,i);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(i,null);a=!0},p(c,f){if(f[0]&6520964){l=Ve(c[2].moves);let h;for(h=0;h<l.length;h+=1){const _=wr(c,l,h);u[h]?(u[h].p(_,f),W(u[h],1)):(u[h]=Ar(_),u[h].c(),W(u[h],1),u[h].m(i,null))}for(Le(),h=l.length;h<u.length;h+=1)d(h);Be()}},i(c){if(!a){W(t.$$.fragment,c);for(let f=0;f<l.length;f+=1)W(u[f]);c&&ve(()=>{a&&(r&&r.end(1),o=ll(e,Ge,{duration:150,delay:300}),o.start())}),a=!0}},o(c){G(t.$$.fragment,c),u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)G(u[f]);o&&o.invalidate(),c&&(r=al(e,Ge,{duration:150})),a=!1},d(c){c&&P(e),he(t),gt(u,c),c&&r&&r.end()}}}function Dr(n){let e,t,s,i;function o(l){n[40](l)}function r(l){n[41](l)}let a={};return n[7]!==void 0&&(a.value=n[7]),n[2].name!==void 0&&(a.weaponName=n[2].name),e=new $_({props:a}),$.push(()=>ke(e,"value",o)),$.push(()=>ke(e,"weaponName",r)),{c(){pe(e.$$.fragment)},m(l,u){fe(e,l,u),i=!0},p(l,u){const d={};!t&&u[0]&128&&(t=!0,d.value=l[7],Ee(()=>t=!1)),!s&&u[0]&4&&(s=!0,d.weaponName=l[2].name,Ee(()=>s=!1)),e.$set(d)},i(l){i||(W(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){he(e,l)}}}function Or(n){let e;return{c(){e=v("iconify-icon"),xe(e,"icon","codicon:sparkle-filled"),xe(e,"class","svelte-ghlpvm")},m(t,s){F(t,e,s)},d(t){t&&P(e)}}}function Rr(n){let e,t=n[19]+(n[15]&&!n[46]?n[45].base:n[46]?n[22](n[45]):n[21](n[45]))+"",s,i,o=n[16][n[45].name]&&!n[15]&&Or();return{c(){e=v("span"),s=se(t),i=A(),o&&o.c(),g(e,"class","svelte-ghlpvm")},m(r,a){F(r,e,a),p(e,s),p(e,i),o&&o.m(e,null)},p(r,a){a[0]&32772&&t!==(t=r[19]+(r[15]&&!r[46]?r[45].base:r[46]?r[22](r[45]):r[21](r[45]))+"")&&Re(s,t),r[16][r[45].name]&&!r[15]?o||(o=Or(),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(r){r&&P(e),o&&o.d()}}}function Ar(n){let e,t,s,i,o=(n[46]&&n[2].name=="Nature's Wrath Spellbook"?n[45].name.replace("Charged","Charge(s)"):n[45].name)+":",r,a,l=n[46]?[n[17],n[7]]:n[17],u,d,c=n[46]&&Dr(n),f=Rr(n);return{c(){e=v("div"),t=v("div"),s=v("span"),c&&c.c(),i=A(),r=se(o),a=A(),f.c(),u=A(),g(s,"class","svelte-ghlpvm"),g(t,"class","ff-border svelte-ghlpvm"),g(e,"class","svelte-ghlpvm")},m(h,_){F(h,e,_),p(e,t),p(t,s),c&&c.m(s,null),p(s,i),p(s,r),p(t,a),f.m(t,null),p(e,u),d=!0},p(h,_){h[46]?c?(c.p(h,_),_[0]&4&&W(c,1)):(c=Dr(h),c.c(),W(c,1),c.m(s,i)):c&&(Le(),G(c,1,1,()=>{c=null}),Be()),(!d||_[0]&4)&&o!==(o=(h[46]&&h[2].name=="Nature's Wrath Spellbook"?h[45].name.replace("Charged","Charge(s)"):h[45].name)+":")&&Re(r,o),_[0]&131204&&me(l,l=h[46]?[h[17],h[7]]:h[17])?(f.d(1),f=Rr(h),f.c(),f.m(t,null)):f.p(h,_)},i(h){d||(W(c),d=!0)},o(h){G(c),d=!1},d(h){h&&P(e),c&&c.d(),f.d(h)}}}function np(n){let e,t,s,i,o,r,a=n[2],l,u,d,c,f,h,_,m,y,w,T;function b(B,R){if(B[2].name&&!B[2].tool)return tp;if(B[2].tool)return ep}let I=b(n),C=I&&I(n),O=Tr(n);function L(B){n[35](B)}function V(B){n[36](B)}let j={slotName:n[0],index:n[1]};n[14]!==void 0&&(j.slotOpen=n[14]),n[5]!==void 0&&(j.weaponExpand=n[5]),c=new go({props:j}),$.push(()=>ke(c,"slotOpen",L)),$.push(()=>ke(c,"weaponExpand",V)),c.$on("itemSelect",n[37]);let D=n[5]&&Nr(n);return{c(){e=v("div"),t=v("button"),t.innerHTML=`<iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="90deg" class="svelte-ghlpvm"></iconify-icon>
        Gear`,s=A(),i=v("div"),C&&C.c(),o=A(),r=v("div"),O.c(),d=A(),pe(c.$$.fragment),_=A(),D&&D.c(),m=Gt(),g(t,"class","ddButton svelte-ghlpvm"),g(r,"class","gearSlotIcon svelte-ghlpvm"),ve(()=>n[32].call(r)),Pe(r,"min-width",`${n[11]}px`),g(i,"class","gearInfoCont ff-border svelte-ghlpvm"),ve(()=>n[34].call(i)),Pe(i,"justify-content",n[2].name?"":"flex-end"),g(e,"class","gearSlot svelte-ghlpvm"),J(e,"slotOpen",n[14]),J(e,"weapon-expand",n[5])},m(B,R){F(B,e,R),p(e,t),n[29](t),p(e,s),p(e,i),C&&C.m(i,null),p(i,o),p(i,r),O.m(r,null),l=ft(r,n[32].bind(r)),n[33](i),u=ft(i,n[34].bind(i)),p(e,d),fe(c,e,null),n[38](e),F(B,_,R),D&&D.m(B,R),F(B,m,R),y=!0,w||(T=[N(window,"mousedown",n[27]),N(window,"keydown",n[28]),N(t,"click",n[30])],w=!0)},p(B,R){I===(I=b(B))&&C?C.p(B,R):(C&&C.d(1),C=I&&I(B),C&&(C.c(),C.m(i,o))),R[0]&4&&me(a,a=B[2])?(Le(),G(O,1,1,te),Be(),O=Tr(B),O.c(),W(O,1),O.m(r,null)):O.p(B,R),R[0]&2048&&Pe(r,"min-width",`${B[11]}px`),R[0]&4&&Pe(i,"justify-content",B[2].name?"":"flex-end");const re={};R[0]&1&&(re.slotName=B[0]),R[0]&2&&(re.index=B[1]),!f&&R[0]&16384&&(f=!0,re.slotOpen=B[14],Ee(()=>f=!1)),!h&&R[0]&32&&(h=!0,re.weaponExpand=B[5],Ee(()=>h=!1)),c.$set(re),(!y||R[0]&16384)&&J(e,"slotOpen",B[14]),(!y||R[0]&32)&&J(e,"weapon-expand",B[5]),B[5]?D?(D.p(B,R),R[0]&32&&W(D,1)):(D=Nr(B),D.c(),W(D,1),D.m(m.parentNode,m)):D&&(Le(),G(D,1,1,()=>{D=null}),Be())},i(B){y||(W(O),W(c.$$.fragment,B),W(D),y=!0)},o(B){G(O),G(c.$$.fragment,B),G(D),y=!1},d(B){B&&(P(e),P(_),P(m)),n[29](null),C&&C.d(),O.d(B),l(),n[33](null),u(),he(c),n[38](null),D&&D.d(B),w=!1,ge(T)}}}function sp(n,e,t){let s,i,o,r,a,l;K(n,ln,H=>t(25,s=H)),K(n,Rt,H=>t(26,i=H)),K(n,Ot,H=>t(42,o=H)),K(n,Ze,H=>t(17,r=H)),K(n,Ks,H=>t(18,a=H)),K(n,dn,H=>t(43,l=H));let{gearBox:u,slotName:d,index:c}=e,f,h,_,m,y,w,T,b=_o,I,C,O,L,V,j="",D={basic:!1,special:!1},B={};function R(){if(T)for(let H of T.querySelectorAll(".gearPreview > div")){if(Object.keys(a).includes(H.id=="basic"?I.name:C?C.name:null))return;let ee=h_(H,l);ee&&(H.id=="basic"?U(Ks,a[I.name]=ee,a):U(Ks,a[C.name]=ee,a))}}function re(H){let ee;if(H.name=="Void Needle")ee=H.base+r[H.type]-r.armor*5.625;else if(b.name=="Pureblood Dagger"){let Ce,Ke={magicDmg:r.magicDmg,meleeDmg:r.meleeDmg,rangedDmg:r.rangedDmg},ot=Object.keys(Ke).reduce((Cn,yo)=>Ke[Cn]>Ke[yo]?Cn:yo),Wt=0;for(let Cn in Ke)Cn!=ot&&(Wt+=Ke[Cn]);Ce=r[ot]*2-Wt,ee=H.base+Ce,H.name.includes("HP")&&(ee/=2)}else if(H.type.includes("/")){let Ce=H.type.split("/"),Ke=0;for(let ot of Ce)Ke+=r[ot]*H[`${ot}Mult`];ee=H.base+Ke}else ee=H.base+r[H.type]*H.mult;return L?Math.floor(ee*10)/10:Math.floor(ee)}function ne(H){let ee,Ce=V?0:r[H.type];return b.name=="Celestial Powers Spellbook"?ee=(80+Ce*1.1)*(.8+2.2*f/100):b.name=="Staff of Dreams"?ee=160+160*f/100+Ce*(.4+1.3*f/100):b.name=="Nature's Wrath Spellbook"&&(ee=260+400*f/4+Ce*(1+1.5*f/4)),Math.floor(ee*10)/10}function E(){t(15,V=!1),L?(t(5,L=!1),u.classList.remove("weapon-expand"),setTimeout(()=>{R()})):(u.classList.add("weapon-expand"),t(5,L=!0))}function x(H,ee){e:for(let Ce in s){let Ke=o.bonuses.find(Wt=>Wt.name==Ce).stats,ot=H?H.type:null;for(let Wt in Ns){if(ot===null)break e;if(b.name=="Void Spike Ultradagger"&&ee=="special"||H.name=="Void Needle"?ot="armor/meleeDmg":b.name=="Pureblood Dagger"?ot=Ce=="Fish of Rage"?"":"magicDmg/meleeDmg/rangedDmg":b.name=="Gnome Rocket Launcher"&&(ot=""),s[Ce]&&Ke[Wt]!=0&&ot.includes(Wt)){t(16,B[H.name]=!0,B),ee&&t(6,D[ee]=!0,D);break e}else t(16,B[H.name]=!1,B),ee&&t(6,D[ee]=!1,D)}}}const le=H=>{(!h.contains(H.target)||h.contains(H.target)&&_.contains(H.target))&&t(14,O=!1)},X=H=>{H.key=="Escape"&&t(14,O=!1)};function Q(H){$[H?"unshift":"push"](()=>{w=H,t(12,w)})}const ae=()=>t(14,O=!O);function k(H){$[H?"unshift":"push"](()=>{T=H,t(13,T)})}function Y(){y=this.offsetHeight,t(11,y)}function q(H){$[H?"unshift":"push"](()=>{_=H,t(9,_)})}function S(){m=this.offsetHeight,t(10,m)}function ie(H){O=H,t(14,O)}function we(H){L=H,t(5,L)}const ue=()=>{setTimeout(()=>{R(),!b.name&&L&&E()})};function M(H){$[H?"unshift":"push"](()=>{h=H,t(8,h)})}const Fe=H=>t(15,V=H.detail);function be(H){f=H,t(7,f)}function Je(H){n.$$.not_equal(b.name,H)&&(b.name=H,t(2,b),t(26,i),t(1,c),t(4,C))}return n.$$set=H=>{"gearBox"in H&&t(24,u=H.gearBox),"slotName"in H&&t(0,d=H.slotName),"index"in H&&t(1,c=H.index)},n.$$.update=()=>{if(n.$$.dirty[0]&67108886&&i[c]&&i[c].name!=b.name&&(t(2,b=i[c]),!b.tool&&b.name)){t(3,I=b.moves.filter(H=>H.basic)[0]),t(4,C=b.moves.filter(H=>H.special)[0]),t(16,B={});for(let H of b.moves)t(16,B[H.name]=!1,B),x(H);C&&C.name.includes("Fantastic Beamstorm")?t(19,j="~"):t(19,j="")}if(n.$$.dirty[0]&33554556&&(s||L)&&!b.tool&&b.name){for(let H in D)x(H=="basic"?I:C||null,H);for(let H of b.moves)x(H)}},[d,c,b,I,C,L,D,f,h,_,m,y,w,T,O,V,B,r,a,j,R,re,ne,E,u,s,i,le,X,Q,ae,k,Y,q,S,ie,we,ue,M,Fe,be,Je]}class ip extends De{constructor(e){super(),Ne(this,e,sp,np,me,{gearBox:24,slotName:0,index:1},null,[-1,-1])}}function Pr(n,e,t){const s=n.slice();return s[3]=e[t],s}function Mr(n){let e,t,s;function i(r){n[1](r)}let o={slotName:"gear",index:n[3]};return n[0]!==void 0&&(o.gearBox=n[0]),e=new ip({props:o}),$.push(()=>ke(e,"gearBox",i)),{c(){pe(e.$$.fragment)},m(r,a){fe(e,r,a),s=!0},p(r,a){const l={};!t&&a&1&&(t=!0,l.gearBox=r[0],Ee(()=>t=!1)),e.$set(l)},i(r){s||(W(e.$$.fragment,r),s=!0)},o(r){G(e.$$.fragment,r),s=!1},d(r){he(e,r)}}}function op(n){let e,t,s=Ve(Yn),i=[];for(let r=0;r<s.length;r+=1)i[r]=Mr(Pr(n,s,r));const o=r=>G(i[r],1,1,()=>{i[r]=null});return{c(){e=v("div");for(let r=0;r<i.length;r+=1)i[r].c();g(e,"class","gearBox svelte-1lv6xba")},m(r,a){F(r,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);n[2](e),t=!0},p(r,[a]){if(a&1){s=Ve(Yn);let l;for(l=0;l<s.length;l+=1){const u=Pr(r,s,l);i[l]?(i[l].p(u,a),W(i[l],1)):(i[l]=Mr(u),i[l].c(),W(i[l],1),i[l].m(e,null))}for(Le(),l=s.length;l<i.length;l+=1)o(l);Be()}},i(r){if(!t){for(let a=0;a<s.length;a+=1)W(i[a]);t=!0}},o(r){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)G(i[a]);t=!1},d(r){r&&P(e),gt(i,r),n[2](null)}}}function rp(n,e,t){let s;function i(r){s=r,t(0,s)}function o(r){$[r?"unshift":"push"](()=>{s=r,t(0,s)})}return[s,i,o]}class lp extends De{constructor(e){super(),Ne(this,e,rp,op,me,{})}}function ap(n){let e,t,s,i,o,r,a,l;return{c(){e=v("div"),t=v("div"),s=v("button"),s.textContent="Clear armor",i=A(),o=v("div"),r=v("button"),r.textContent="Clear gear",g(s,"class","svelte-e94uvj"),g(t,"class","svelte-e94uvj"),g(r,"class","svelte-e94uvj"),g(o,"class","svelte-e94uvj"),g(e,"class","mainFeatures svelte-e94uvj"),g(e,"id","box")},m(u,d){F(u,e,d),p(e,t),p(t,s),p(e,i),p(e,o),p(o,r),a||(l=[N(s,"click",n[3]),N(r,"click",n[4])],a=!0)},p:te,i:te,o:te,d(u){u&&P(e),a=!1,ge(l)}}}function up(n,e,t){let s,i,o,r,a;K(n,Rt,f=>t(5,s=f)),K(n,ds,f=>t(6,i=f)),K(n,bt,f=>t(7,o=f)),K(n,Mn,f=>t(8,r=f)),K(n,dn,f=>t(0,a=f));function l(){for(let f in o)o[f].name&&r[f][o[f].name].querySelector("button").click()}function u(){for(let f in s)s[f].name&&i[f][s[f].name].querySelector("button").click()}return[a,l,u,()=>{a||l()},()=>{a||u()}]}class cp extends De{constructor(e){super(),Ne(this,e,up,ap,me,{})}}function dp(n){let e,t,s,i,o,r,a;function l(d){n[2](d)}let u={slotName:"sets",index:null,weaponExpand:null};return n[0]!==void 0&&(u.slotOpen=n[0]),s=new go({props:u}),$.push(()=>ke(s,"slotOpen",l)),{c(){e=v("button"),e.innerHTML=`Load armor set
    <iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="180deg" class="svelte-l9dczq"></iconify-icon>`,t=A(),pe(s.$$.fragment),g(e,"class","svelte-l9dczq"),J(e,"ddOpen",n[0])},m(d,c){F(d,e,c),F(d,t,c),fe(s,d,c),o=!0,r||(a=N(e,"click",n[1]),r=!0)},p(d,[c]){(!o||c&1)&&J(e,"ddOpen",d[0]);const f={};!i&&c&1&&(i=!0,f.slotOpen=d[0],Ee(()=>i=!1)),s.$set(f)},i(d){o||(W(s.$$.fragment,d),o=!0)},o(d){G(s.$$.fragment,d),o=!1},d(d){d&&(P(e),P(t)),he(s,d),r=!1,a()}}}function fp(n,e,t){let{ddOpen:s=!1}=e;const i=()=>t(0,s=!s);function o(r){s=r,t(0,s)}return n.$$set=r=>{"ddOpen"in r&&t(0,s=r.ddOpen)},[s,i,o]}class hp extends De{constructor(e){super(),Ne(this,e,fp,dp,me,{ddOpen:0})}}function _p(n){let e;return{c(){e=v("span"),e.textContent="Create some builds to get started!",g(e,"class","tooltip svelte-1c244fb"),g(e,"id","top"),Pe(e,"left","70.5%")},m(t,s){F(t,e,s)},p:te,d(t){t&&P(e)}}}function pp(n){let e;return{c(){e=v("span"),e.textContent="Select some gear or armor to get started!",g(e,"class","tooltip svelte-1c244fb"),g(e,"id","top"),Pe(e,"left",n[3]?"38%":"")},m(t,s){F(t,e,s)},p(t,s){s&8&&Pe(e,"left",t[3]?"38%":"")},d(t){t&&P(e)}}}function mp(n){let e,t,s,i,o,r,a,l,u,d,c,f,h,_,m,y,w,T,b,I,C,O,L,V,j,D,B,R;function re(X,Q){if(!X[4])return pp;if(!X[3])return _p}let ne=re(n),E=ne&&ne(n);function x(X){n[18](X)}let le={};return n[1]!==void 0&&(le.ddOpen=n[1]),V=new hp({props:le}),$.push(()=>ke(V,"ddOpen",x)),{c(){e=v("div"),t=v("div"),s=v("div"),i=v("button"),o=se("Export new build"),a=A(),l=v("div"),u=v("button"),d=se("Save to build"),f=A(),h=v("div"),_=v("button"),m=se("Delete build"),w=A(),E&&E.c(),T=A(),b=v("div"),I=v("div"),C=v("button"),C.textContent="Load build",O=A(),L=v("div"),pe(V.$$.fragment),i.disabled=r=!n[4],g(i,"class","svelte-1c244fb"),g(s,"class","buttonCont svelte-1c244fb"),u.disabled=c=!n[4]||!n[3],g(u,"class","svelte-1c244fb"),g(l,"class","buttonCont svelte-1c244fb"),g(l,"id","middle"),_.disabled=y=!n[3],g(_,"class","svelte-1c244fb"),g(h,"class","buttonCont svelte-1c244fb"),g(t,"id","modify"),g(t,"class","svelte-1c244fb"),J(t,"no-tooltip",n[2]),g(C,"class","svelte-1c244fb"),g(I,"class","buttonCont svelte-1c244fb"),g(L,"class","buttonCont svelte-1c244fb"),g(b,"id","load"),g(b,"class","svelte-1c244fb"),g(e,"class","mainFeatures svelte-1c244fb"),g(e,"id","build")},m(X,Q){F(X,e,Q),p(e,t),p(t,s),p(s,i),p(i,o),p(t,a),p(t,l),p(l,u),p(u,d),p(t,f),p(t,h),p(h,_),p(_,m),p(t,w),E&&E.m(t,null),p(e,T),p(e,b),p(b,I),p(I,C),p(b,O),p(b,L),fe(V,L,null),n[19](L),D=!0,B||(R=[N(window,"mousedown",n[8]),N(window,"keydown",n[9]),N(i,"click",n[10]),N(i,"mouseenter",n[11]),N(i,"mouseleave",n[12]),N(u,"click",n[13]),N(_,"click",n[14]),N(_,"mouseenter",n[15]),N(_,"mouseleave",n[16]),N(C,"click",n[17])],B=!0)},p(X,[Q]){(!D||Q&16&&r!==(r=!X[4]))&&(i.disabled=r),(!D||Q&24&&c!==(c=!X[4]||!X[3]))&&(u.disabled=c),(!D||Q&8&&y!==(y=!X[3]))&&(_.disabled=y),ne===(ne=re(X))&&E?E.p(X,Q):(E&&E.d(1),E=ne&&ne(X),E&&(E.c(),E.m(t,null))),(!D||Q&4)&&J(t,"no-tooltip",X[2]);const ae={};!j&&Q&2&&(j=!0,ae.ddOpen=X[1],Ee(()=>j=!1)),V.$set(ae)},i(X){D||(W(V.$$.fragment,X),D=!0)},o(X){G(V.$$.fragment,X),D=!1},d(X){X&&P(e),E&&E.d(),he(V),n[19](null),B=!1,ge(R)}}}function gp(n,e,t){let s,i,o,r,a;K(n,st,L=>t(7,s=L)),K(n,kt,L=>t(3,i=L)),K(n,ul,L=>t(4,o=L)),K(n,dn,L=>t(5,r=L)),K(n,Z,L=>t(6,a=L));let l,u=!1,d=!1;const c=L=>{l.contains(L.target)||t(1,u=!1)},f=L=>{L.key=="Escape"&&t(1,u=!1)},h=()=>{o&&!r&&U(Z,a.export.ongoing=!0,a)},_=()=>t(2,d=!0),m=()=>t(2,d=!1),y=()=>{o&&i&&!r&&U(Z,a.save.ongoing=!0,a)},w=()=>{i&&!r&&U(Z,a.delete.ongoing=!0,a)},T=()=>t(2,d=!0),b=()=>t(2,d=!1),I=()=>{r||U(Z,a.load.ongoing=!0,a)};function C(L){u=L,t(1,u)}function O(L){$[L?"unshift":"push"](()=>{l=L,t(0,l)})}return n.$$.update=()=>{n.$$.dirty&128&&U(kt,i=Object.keys(s).length>0,i)},[l,u,d,i,o,r,a,s,c,f,h,_,m,y,w,T,b,I,C,O]}class bp extends De{constructor(e){super(),Ne(this,e,gp,mp,me,{})}}function Lr(n){let e;return{c(){e=v("span"),e.textContent="New changes! Exiting will erase them.",g(e,"id","alert")},m(t,s){F(t,e,s)},d(t){t&&P(e)}}}function yp(n){let e,t,s,i,o,r,a,l=25-n[3].length+"",u,d,c,f,h,_,m,y,w,T,b,I=275-n[4].length+"",C,O,L,V,j,D,B,R,re,ne,E,x,le,X,Q,ae,k=(n[3]||n[4])&&Lr();return{c(){e=v("div"),t=v("div"),s=se(`Name:\r
        `),i=v("input"),r=A(),a=v("span"),u=se(l),d=A(),c=v("div"),f=v("div"),h=v("span"),h.textContent="Description / Notes:",_=A(),k&&k.c(),m=A(),y=v("textarea"),T=A(),b=v("span"),C=se(I),O=A(),L=v("div"),V=v("div"),j=v("button"),D=se("CANCEL"),R=A(),re=v("div"),ne=v("button"),E=se("EXPORT"),g(i,"class","buildNameInput"),g(i,"id","firstFocusable"),i.disabled=o=n[5].export.status==0,g(i,"type","text"),g(i,"placeholder",n[6]),g(i,"maxlength","25"),g(a,"class","charCounter svelte-1vypdkl"),g(a,"id","buildName"),g(t,"class","buildNameCont svelte-1vypdkl"),g(y,"class","buildDescInput"),y.disabled=w=n[5].export.status==0,g(y,"placeholder","[Empty]"),g(y,"maxlength","275"),g(y,"autocomplete","off"),g(b,"class","charCounter"),g(b,"id","buildDesc"),g(c,"class","buildDescCont"),j.disabled=B=n[5].export.status==0,g(ne,"id","lastFocusable"),ne.disabled=x=n[5].export.status==0,g(L,"class","promptOptions"),g(e,"class","buildExporter svelte-1vypdkl")},m(Y,q){F(Y,e,q),p(e,t),p(t,s),p(t,i),n[8](i),ct(i,n[3]),p(t,r),p(t,a),p(a,u),p(e,d),p(e,c),p(c,f),p(f,h),p(f,_),k&&k.m(f,null),p(c,m),p(c,y),ct(y,n[4]),n[13](y),p(c,T),p(c,b),p(b,C),p(e,O),p(e,L),p(L,V),p(V,j),p(j,D),n[16](j),p(L,R),p(L,re),p(re,ne),p(ne,E),X=!0,Q||(ae=[N(i,"input",n[9]),N(i,"input",n[10]),N(i,"keydown",n[11]),N(y,"input",n[12]),N(y,"input",n[14]),N(y,"keydown",n[15]),N(j,"click",n[17]),N(ne,"click",n[18]),N(ne,"keydown",Jt),N(e,"introstart",n[19])],Q=!0)},p(Y,[q]){(!X||q&32&&o!==(o=Y[5].export.status==0))&&(i.disabled=o),q&8&&i.value!==Y[3]&&ct(i,Y[3]),(!X||q&8)&&l!==(l=25-Y[3].length+"")&&Re(u,l),Y[3]||Y[4]?k||(k=Lr(),k.c(),k.m(f,null)):k&&(k.d(1),k=null),(!X||q&32&&w!==(w=Y[5].export.status==0))&&(y.disabled=w),q&16&&ct(y,Y[4]),(!X||q&16)&&I!==(I=275-Y[4].length+"")&&Re(C,I),(!X||q&32&&B!==(B=Y[5].export.status==0))&&(j.disabled=B),(!X||q&32&&x!==(x=Y[5].export.status==0))&&(ne.disabled=x)},i(Y){X||(Y&&ve(()=>{X&&(le||(le=Ae(e,it,{duration:250},!0)),le.run(1))}),X=!0)},o(Y){Y&&(le||(le=Ae(e,it,{duration:250},!1)),le.run(0)),X=!1},d(Y){Y&&P(e),n[8](null),k&&k.d(),n[13](null),n[16](null),Y&&le&&le.end(),Q=!1,ge(ae)}}}function vp(n,e,t){let s,i,o,r,a,l;K(n,Z,E=>t(5,s=E)),K(n,$e,E=>t(20,i=E)),K(n,kt,E=>t(21,o=E)),K(n,Rt,E=>t(22,r=E)),K(n,bt,E=>t(23,a=E)),K(n,st,E=>t(24,l=E));let u=Object.keys(l).length,d=(u+1)%10,c=d==1?"st":d==2?"nd":d==3?"rd":"th",f,h,_,m="",y="",w=`My ${u+1+c} build`;function T(){if(U(Z,s.export.status=0,s),m.endsWith(" ")&&t(3,m=m.replace(/  +/g," ").replace(/ $/,"")),y.endsWith(" ")&&t(4,y=y.replace(/  +/g," ").replace(/ $/,"")),Object.keys(l).includes(m)){U(Z,s.export.status=-1,s),U(Z,s.message="duplicate_name",s);return}let E=Jh(vt(pn(mn),"builds")).key,x=Ja(a,r);x.name=m||w,x.desc=y||"[Empty]",js(vt(pn(mn),`builds/${E}`),x).then(()=>{U(Z,s.export.status=1,s),U(kt,o=!0,o),mo(),st.update(le=>({...le,[x.name]:{id:E,desc:x.desc}})),U($e,i=x,i),U($e,i.id=E,i),navigator.clipboard.writeText(`${location.origin+location.pathname}?id=${E}`)}).catch(()=>{U(Z,s.export.status=-1,s),U(Z,s.message="firebase_fail",s)})}function b(E){$[E?"unshift":"push"](()=>{f=E,t(0,f)})}function I(){m=this.value,t(3,m)}const C=E=>{t(3,m=Os(E.target.value,25))},O=E=>{s.export.status==0&&E.preventDefault(),Ft(E),Ii(f,E.target.value,25)};function L(){y=this.value,t(4,y)}function V(E){$[E?"unshift":"push"](()=>{h=E,t(1,h)})}const j=E=>{t(4,y=Os(E.target.value,275))},D=E=>{s.export.status==0&&E.preventDefault(),Ii(h,E.target.value,275)};function B(E){$[E?"unshift":"push"](()=>{_=E,t(2,_)})}return[f,h,_,m,y,s,w,T,b,I,C,O,L,V,j,D,B,()=>{s.export.status!=0&&U(Z,s.export.ongoing=!1,s)},()=>{s.export.status!=0&&T()},()=>_.focus()]}class wp extends De{constructor(e){super(),Ne(this,e,vp,yp,me,{})}}function Cp(n){let e,t,s,i,o=n[2]?"Copied!":"Copy link",r,a,l;return{c(){e=v("button"),t=v("b"),t.textContent="Build link",s=A(),i=v("span"),r=se(o),g(i,"class","tooltip svelte-zqs0fu"),g(i,"id","top"),g(e,"class","copyButton svelte-zqs0fu"),g(e,"id","firstFocusable")},m(u,d){F(u,e,d),p(e,t),p(e,s),p(e,i),p(i,r),a||(l=[N(e,"click",n[7]),N(e,"keydown",Ft)],a=!0)},p(u,d){d&4&&o!==(o=u[2]?"Copied!":"Copy link")&&Re(r,o)},d(u){u&&P(e),a=!1,ge(l)}}}function Ep(n){let e,t,s,i,o,r,a=n[2]?"Copied!":"Copy ID",l,u,d,c;return{c(){e=v("button"),t=v("b"),t.textContent="ID:",s=A(),i=se(n[4]),o=A(),r=v("span"),l=se(a),g(r,"class","tooltip svelte-zqs0fu"),g(r,"id","top"),g(e,"class","copyButton svelte-zqs0fu"),g(e,"id",u=n[1]!="save"?"firstFocusable":"")},m(f,h){F(f,e,h),p(e,t),p(e,s),p(e,i),p(e,o),p(e,r),p(r,l),d||(c=[N(e,"click",n[5]),N(e,"keydown",n[6])],d=!0)},p(f,h){h&4&&a!==(a=f[2]?"Copied!":"Copy ID")&&Re(l,a),h&2&&u!==(u=f[1]!="save"?"firstFocusable":"")&&g(e,"id",u)},d(f){f&&P(e),d=!1,ge(c)}}}function kp(n){let e;function t(o,r){if(o[0]=="id")return Ep;if(o[0]=="link")return Cp}let s=t(n),i=s&&s(n);return{c(){i&&i.c(),e=Gt()},m(o,r){i&&i.m(o,r),F(o,e,r)},p(o,[r]){s===(s=t(o))&&i?i.p(o,r):(i&&i.d(1),i=s&&s(o),i&&(i.c(),i.m(e.parentNode,e)))},i:te,o:te,d(o){o&&P(e),i&&i.d(o)}}}function Sp(n,e,t){let s;K(n,$e,f=>t(8,s=f));let{type:i,source:o}=e,r=!1;function a(f){r||(navigator.clipboard.writeText(f),t(2,r=!0),setTimeout(()=>{t(2,r=!1)},1e3))}let l=s?s.id:null;const u=()=>a(l),d=()=>{o!="save"&&Ft()},c=()=>a(`${location.host+location.pathname}?id=${l}`);return n.$$set=f=>{"type"in f&&t(0,i=f.type),"source"in f&&t(1,o=f.source)},[i,o,r,a,l,u,d,c]}class Kn extends De{constructor(e){super(),Ne(this,e,Sp,kp,me,{type:0,source:1})}}function Ip(n){let e,t,s,i;return e=new Kn({props:{type:"link",source:"share"}}),s=new Kn({props:{type:"id",source:"share"}}),{c(){pe(e.$$.fragment),t=A(),pe(s.$$.fragment)},m(o,r){fe(e,o,r),F(o,t,r),fe(s,o,r),i=!0},p:te,i(o){i||(W(e.$$.fragment,o),W(s.$$.fragment,o),i=!0)},o(o){G(e.$$.fragment,o),G(s.$$.fragment,o),i=!1},d(o){o&&P(t),he(e,o),he(s,o)}}}function Tp(n){let e;return{c(){e=v("span"),e.textContent="Your build has been erased from your local saves and the database."},m(t,s){F(t,e,s)},p:te,i:te,o:te,d(t){t&&P(e)}}}function Np(n){let e;function t(o,r){if(o[2].message=="not_found")return Pp;if(o[2].message=="invalid_id")return Ap}let s=t(n),i=s&&s(n);return{c(){i&&i.c(),e=Gt()},m(o,r){i&&i.m(o,r),F(o,e,r)},p(o,r){s!==(s=t(o))&&(i&&i.d(1),i=s&&s(o),i&&(i.c(),i.m(e.parentNode,e)))},i:te,o:te,d(o){o&&P(e),i&&i.d(o)}}}function Dp(n){let e,t,s,i,o,r;return s=new Kn({props:{type:"link",source:"save"}}),o=new Kn({props:{type:"id",source:"save"}}),{c(){e=v("span"),e.textContent="Your build has been overwritten.",t=A(),pe(s.$$.fragment),i=A(),pe(o.$$.fragment)},m(a,l){F(a,e,l),F(a,t,l),fe(s,a,l),F(a,i,l),fe(o,a,l),r=!0},p:te,i(a){r||(W(s.$$.fragment,a),W(o.$$.fragment,a),r=!0)},o(a){G(s.$$.fragment,a),G(o.$$.fragment,a),r=!1},d(a){a&&(P(e),P(t),P(i)),he(s,a),he(o,a)}}}function Op(n){let e,t,s,i;const o=[Lp,Mp],r=[];function a(l,u){return l[2].export.status==1?0:l[2].export.status==-1&&l[2].message=="duplicate_name"?1:-1}return~(e=a(n))&&(t=r[e]=o[e](n)),{c(){t&&t.c(),s=Gt()},m(l,u){~e&&r[e].m(l,u),F(l,s,u),i=!0},p(l,u){let d=e;e=a(l),e!==d&&(t&&(Le(),G(r[d],1,1,()=>{r[d]=null}),Be()),~e?(t=r[e],t||(t=r[e]=o[e](l),t.c()),W(t,1),t.m(s.parentNode,s)):t=null)},i(l){i||(W(t),i=!0)},o(l){G(t),i=!1},d(l){l&&P(s),~e&&r[e].d(l)}}}function Rp(n){let e,t,s=n[2].export.status?"exporting":n[2].save.status?"saving":n[2].load.status?"loading":"deleting",i,o,r,a,l,u,d,c;return{c(){e=v("span"),t=se("A problem occurred while "),i=se(s),o=se(` your build.\r
            `),r=v("br"),a=se(`\r
            If needed`),l=v("b"),l.textContent=",",u=se(" you may contact "),d=v("hl"),d.textContent="xt.ss",c=se(` on Discord for more\r
            details.`)},m(f,h){F(f,e,h),p(e,t),p(e,i),p(e,o),p(e,r),p(e,a),p(e,l),p(e,u),p(e,d),p(e,c)},p(f,h){h&4&&s!==(s=f[2].export.status?"exporting":f[2].save.status?"saving":f[2].load.status?"loading":"deleting")&&Re(i,s)},i:te,o:te,d(f){f&&P(e)}}}function Ap(n){let e;return{c(){e=v("span"),e.textContent="The ID you have entered is invalid. Please check it again."},m(t,s){F(t,e,s)},d(t){t&&P(e)}}}function Pp(n){let e;return{c(){e=v("span"),e.innerHTML=`Your build could not be found within the database.
                <br/>
                If needed<b>,</b> you may contact <hl>xt.ss</hl> on Discord for more
                details.`},m(t,s){F(t,e,s)},d(t){t&&P(e)}}}function Mp(n){let e;return{c(){e=v("span"),e.innerHTML=`Another build of yours with the same name already exists.
                <br/>
                Please use a different one.`},m(t,s){F(t,e,s)},i:te,o:te,d(t){t&&P(e)}}}function Lp(n){let e,t,s,i;return s=new Kn({props:{type:"id",source:"export"}}),{c(){e=v("span"),e.textContent="Your build's link has been copied to your clipboard.",t=A(),pe(s.$$.fragment)},m(o,r){F(o,e,r),F(o,t,r),fe(s,o,r),i=!0},i(o){i||(W(s.$$.fragment,o),i=!0)},o(o){G(s.$$.fragment,o),i=!1},d(o){o&&(P(e),P(t)),he(s,o)}}}function Bp(n){let e,t,s,i,o,r,a,l,u,d,c,f,h,_,m,y,w;const T=[Rp,Op,Dp,Np,Tp,Ip],b=[];function I(C,O){return C[1]==-1&&C[2].message=="firebase_fail"?0:C[2].export.status?1:C[2].save.status==1?2:C[2].load.status==-1?3:C[2].delete.status==1?4:C[2].share.ongoing?5:-1}return~(o=I(n))&&(r=b[o]=T[o](n)),{c(){e=v("div"),t=v("span"),s=se(n[4]),i=A(),r&&r.c(),a=A(),l=v("div"),u=v("div"),d=v("button"),c=se("OK"),g(t,"id","messageTitle"),g(t,"class","svelte-nfbx2w"),g(d,"id",f=(n[1]==-1?"firstFocusable ":"")+"lastFocusable"),g(l,"class","promptOptions svelte-nfbx2w"),g(e,"class","promptMessage svelte-nfbx2w")},m(C,O){F(C,e,O),p(e,t),p(t,s),p(e,i),~o&&b[o].m(e,null),p(e,a),p(e,l),p(l,u),p(u,d),p(d,c),n[6](d),m=!0,y||(w=[N(d,"click",n[7]),N(d,"keydown",n[8]),N(e,"introstart",n[9])],y=!0)},p(C,[O]){(!m||O&16)&&Re(s,C[4]);let L=o;o=I(C),o===L?~o&&b[o].p(C,O):(r&&(Le(),G(b[L],1,1,()=>{b[L]=null}),Be()),~o?(r=b[o],r?r.p(C,O):(r=b[o]=T[o](C),r.c()),W(r,1),r.m(e,a)):r=null),(!m||O&2&&f!==(f=(C[1]==-1?"firstFocusable ":"")+"lastFocusable"))&&g(d,"id",f)},i(C){m||(W(r),C&&ve(()=>{m&&(_&&_.end(1),h=ll(e,it,{duration:200,delay:75}),h.start())}),m=!0)},o(C){G(r),h&&h.invalidate(),C&&(_=al(e,it,{duration:200})),m=!1},d(C){C&&P(e),~o&&b[o].d(),n[6](null),C&&_&&_.end(),y=!1,ge(w)}}}function Fp(n,e,t){let s,i,o;K(n,Z,h=>t(2,o=h));let{loadID:r}=e;const a=wt();let l;function u(h){$[h?"unshift":"push"](()=>{l=h,t(3,l)})}const d=()=>{t(0,r=null),a("resetActions")},c=h=>{i==-1&&Ft(h),Jt(h)},f=()=>l.focus();return n.$$set=h=>{"loadID"in h&&t(0,r=h.loadID)},n.$$.update=()=>{n.$$.dirty&4&&t(1,i=o.export.status||o.save.status||o.load.status||o.delete.status),n.$$.dirty&6&&t(4,s=o.share.ongoing?"Share this build":`${o.export.status?"Export":o.save.status?"Save":o.load.status?"Load":"Delete"} ${i==1?"Success":"Failure"}!`)},[r,i,o,l,s,a,u,d,c,f]}class Wp extends De{constructor(e){super(),Ne(this,e,Fp,Bp,me,{loadID:0})}}function qp(n){let e,t,s,i,o,r;return{c(){e=v("li"),t=v("button"),s=v("span"),i=se(n[0]),g(s,"class","svelte-1opo0ke"),g(e,"class","svelte-1opo0ke"),J(e,"selectedItem",n[2])},m(a,l){F(a,e,l),p(e,t),p(t,s),p(s,i),n[7](e),o||(r=N(t,"click",n[3]),o=!0)},p(a,[l]){l&1&&Re(i,a[0]),l&4&&J(e,"selectedItem",a[2])},i:te,o:te,d(a){a&&P(e),n[7](null),o=!1,r()}}}function Hp(n,e,t){let{chosenBuild:s,buildData:i,buildName:o,ddOpen:r}=e;const a=wt();let l,u=s[0]==o;function d(){if(r){if(l.classList.contains("selectedItem")||t(2,u=!1),u)return;a("buildSelect",l),t(2,u=!0),t(5,r=!1),t(4,s=[o,i])}}function c(f){$[f?"unshift":"push"](()=>{l=f,t(1,l)})}return n.$$set=f=>{"chosenBuild"in f&&t(4,s=f.chosenBuild),"buildData"in f&&t(6,i=f.buildData),"buildName"in f&&t(0,o=f.buildName),"ddOpen"in f&&t(5,r=f.ddOpen)},[o,l,u,d,s,r,i,c]}class zp extends De{constructor(e){super(),Ne(this,e,Hp,qp,me,{chosenBuild:4,buildData:6,buildName:0,ddOpen:5})}}function Br(n,e,t){const s=n.slice();return s[25]=e[t][0],s[26]=e[t][1],s}function Fr(n){let e,t,s,i;function o(l){n[13](l)}function r(l){n[14](l)}let a={buildData:n[26],buildName:n[25]};return n[0]!==void 0&&(a.chosenBuild=n[0]),n[1]!==void 0&&(a.ddOpen=n[1]),e=new zp({props:a}),$.push(()=>ke(e,"chosenBuild",o)),$.push(()=>ke(e,"ddOpen",r)),e.$on("buildSelect",n[11]),{c(){pe(e.$$.fragment)},m(l,u){fe(e,l,u),i=!0},p(l,u){const d={};u&16&&(d.buildData=l[26]),u&16&&(d.buildName=l[25]),!t&&u&1&&(t=!0,d.chosenBuild=l[0],Ee(()=>t=!1)),!s&&u&2&&(s=!0,d.ddOpen=l[1],Ee(()=>s=!1)),e.$set(d)},i(l){i||(W(e.$$.fragment,l),i=!0)},o(l){G(e.$$.fragment,l),i=!1},d(l){he(e,l)}}}function Up(n){let e,t,s,i,o,r,a,l=Ve(Object.entries(n[4])),u=[];for(let c=0;c<l.length;c+=1)u[c]=Fr(Br(n,l,c));const d=c=>G(u[c],1,1,()=>{u[c]=null});return{c(){e=v("div"),t=v("input"),s=A(),i=v("ul");for(let c=0;c<u.length;c+=1)u[c].c();g(t,"type","text"),g(t,"class","searchBarInput svelte-p20blu"),g(t,"placeholder","Search..."),g(i,"class","svelte-p20blu"),J(i,"no-scrollbar",n[8].length<=4),g(e,"class","dropdown svelte-p20blu"),J(e,"ddOpen",n[1])},m(c,f){F(c,e,f),p(e,t),n[12](t),p(e,s),p(e,i);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(i,null);n[15](i),n[16](e),o=!0,r||(a=[N(t,"input",n[10]),N(t,"keydown",n[9]),N(e,"transitionend",n[17]),N(e,"transitioncancel",n[18])],r=!0)},p(c,[f]){if(f&2067){l=Ve(Object.entries(c[4]));let h;for(h=0;h<l.length;h+=1){const _=Br(c,l,h);u[h]?(u[h].p(_,f),W(u[h],1)):(u[h]=Fr(_),u[h].c(),W(u[h],1),u[h].m(i,null))}for(Le(),h=l.length;h<u.length;h+=1)d(h);Be()}(!o||f&256)&&J(i,"no-scrollbar",c[8].length<=4),(!o||f&2)&&J(e,"ddOpen",c[1])},i(c){if(!o){for(let f=0;f<l.length;f+=1)W(u[f]);o=!0}},o(c){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)G(u[f]);o=!1},d(c){c&&P(e),n[12](null),gt(u,c),n[15](null),n[16](null),r=!1,ge(a)}}}function Vp(n,e,t){let s;K(n,st,R=>t(4,s=R));let{chosenBuild:i,ddOpen:o=!1,dropdown:r}=e;const a=wt();let l,u,d,c,f={},h=!1,_=[];function m(R){!R.shiftKey&&R.key=="Tab"&&(R.preventDefault(),setTimeout(()=>l.focus()))}function y(){u&&u.removeEventListener("keydown",m),b(),u&&u.addEventListener("keydown",m)}function w(R){R.shiftKey&&R.key=="Tab"&&(R.preventDefault(),setTimeout(()=>(u.querySelector("button")||u).focus()))}function T(){xa(l.value,f),y()}function b(){u&&u.classList.remove("lastElement"),t(8,_=d.querySelectorAll("li:not(.hidden)")),u=_[_.length-1],u?u.classList.add("lastElement"):u=l}function I(R){a("buildSelect"),t(6,c=R.detail);let re=d.querySelector(".selectedItem");re&&re!=R.detail&&re.classList.remove("selectedItem"),t(7,h=!0)}function C(R){$[R?"unshift":"push"](()=>{l=R,t(5,l)})}function O(R){i=R,t(0,i)}function L(R){o=R,t(1,o)}function V(R){$[R?"unshift":"push"](()=>{d=R,t(3,d)})}function j(R){$[R?"unshift":"push"](()=>{r=R,t(2,r)})}const D=R=>{R.propertyName=="visibility"&&(h&&(t(7,h=!1),t(5,l.value="",l),T()),!o&&c&&d.scrollTo(0,c.offsetTop),Ds(l,o))},B=R=>{R.propertyName=="visibility"&&(t(7,h=!1),Ds(l,o))};return n.$$set=R=>{"chosenBuild"in R&&t(0,i=R.chosenBuild),"ddOpen"in R&&t(1,o=R.ddOpen),"dropdown"in R&&t(2,r=R.dropdown)},n.$$.update=()=>{if(n.$$.dirty&24&&d){t(8,_=d.querySelectorAll("li:not(.hidden)"));for(let R=0;R<d.childElementCount;R++)f[Object.keys(s)[R]]=d.children[R];b(),y()}},[i,o,r,d,s,l,c,h,_,w,T,I,C,O,L,V,j,D,B]}class bo extends De{constructor(e){super(),Ne(this,e,Vp,Up,me,{chosenBuild:0,ddOpen:1,dropdown:2})}}function Wr(n){let e,t=(n[6]>n[5]*.8?n[11].slice(0,20)+"<b>...</b>":n[11])+"",s;return{c(){e=v("span"),ve(()=>n[15].call(e))},m(i,o){F(i,e,o),e.innerHTML=t,s=ft(e,n[15].bind(e))},p(i,o){o[0]&2144&&t!==(t=(i[6]>i[5]*.8?i[11].slice(0,20)+"<b>...</b>":i[11])+"")&&(e.innerHTML=t)},d(i){i&&P(e),s()}}}function qr(n){let e;return{c(){e=v("span"),e.textContent="New changes! Exiting will erase them.",g(e,"id","alert")},m(t,s){F(t,e,s)},d(t){t&&P(e)}}}function jp(n){let e,t,s,i,o,r=n[11],a,l,u,d,c,f,h,_,m,y,w,T,b,I,C=275-n[2].length+"",O,L,V,j,D,B,R,re,ne,E,x,le,X,Q,ae,k,Y,q,S,ie,we,ue=Wr(n),M=n[1]!=null&&n[1]!=n[2]&&qr();function Fe(ee){n[26](ee)}function be(ee){n[27](ee)}function Je(ee){n[28](ee)}let H={};return n[0]!==void 0&&(H.chosenBuild=n[0]),n[3]!==void 0&&(H.ddOpen=n[3]),n[9]!==void 0&&(H.dropdown=n[9]),Q=new bo({props:H}),$.push(()=>ke(Q,"chosenBuild",Fe)),$.push(()=>ke(Q,"ddOpen",be)),$.push(()=>ke(Q,"dropdown",Je)),Q.$on("buildSelect",n[29]),{c(){e=v("div"),t=v("div"),s=v("span"),s.textContent="Save to:",i=A(),o=v("button"),ue.c(),a=A(),l=v("iconify-icon"),c=A(),f=v("div"),h=v("div"),_=v("span"),_.textContent="Description / Notes:",m=A(),M&&M.c(),y=A(),w=v("textarea"),b=A(),I=v("span"),O=se(C),L=A(),V=v("div"),j=v("div"),D=v("button"),B=se("CANCEL"),re=A(),ne=v("div"),E=v("button"),x=se("SAVE"),X=A(),pe(Q.$$.fragment),xe(l,"icon","iconamoon:arrow-down-2-fill"),g(o,"id","firstFocusable"),o.disabled=u=n[12].save.status==0,g(o,"class","promptDDButton svelte-106wt5q"),ve(()=>n[17].call(o)),J(o,"ddOpen",n[3]),g(t,"class","chosenBuildCont"),g(w,"class","buildDescInput"),w.disabled=T=n[12].save.status==0,g(w,"placeholder","[Empty]"),g(w,"maxlength","275"),g(w,"autocomplete","off"),g(I,"class","charCounter"),g(I,"id","buildDesc"),g(f,"class","buildDescCont"),D.disabled=R=n[12].save.status==0,g(E,"id","lastFocusable"),E.disabled=le=n[12].save.status==0,g(V,"class","promptOptions"),g(e,"class","buildSaver")},m(ee,Ce){F(ee,e,Ce),p(e,t),p(t,s),p(t,i),p(t,o),ue.m(o,null),p(o,a),p(o,l),n[16](o),d=ft(o,n[17].bind(o)),p(e,c),p(e,f),p(f,h),p(h,_),p(h,m),M&&M.m(h,null),p(f,y),p(f,w),n[19](w),ct(w,n[10]),p(f,b),p(f,I),p(I,O),p(e,L),p(e,V),p(V,j),p(j,D),p(D,B),n[23](D),p(V,re),p(V,ne),p(ne,E),p(E,x),p(e,X),fe(Q,e,null),S=!0,ie||(we=[N(window,"mousedown",n[14]),N(o,"click",n[18]),N(o,"keydown",Ft),N(w,"input",n[20]),N(w,"input",n[21]),N(w,"keydown",n[22]),N(D,"click",n[24]),N(E,"click",n[25]),N(E,"keydown",Jt),N(e,"introstart",n[30]),N(e,"keydown",n[31])],ie=!0)},p(ee,Ce){Ce[0]&2048&&me(r,r=ee[11])?(ue.d(1),ue=Wr(ee),ue.c(),ue.m(o,a)):ue.p(ee,Ce),(!S||Ce[0]&4096&&u!==(u=ee[12].save.status==0))&&(o.disabled=u),(!S||Ce[0]&8)&&J(o,"ddOpen",ee[3]),ee[1]!=null&&ee[1]!=ee[2]?M||(M=qr(),M.c(),M.m(h,null)):M&&(M.d(1),M=null),(!S||Ce[0]&4096&&T!==(T=ee[12].save.status==0))&&(w.disabled=T),Ce[0]&1024&&ct(w,ee[10]),(!S||Ce[0]&4)&&C!==(C=275-ee[2].length+"")&&Re(O,C),(!S||Ce[0]&4096&&R!==(R=ee[12].save.status==0))&&(D.disabled=R),(!S||Ce[0]&4096&&le!==(le=ee[12].save.status==0))&&(E.disabled=le);const Ke={};!ae&&Ce[0]&1&&(ae=!0,Ke.chosenBuild=ee[0],Ee(()=>ae=!1)),!k&&Ce[0]&8&&(k=!0,Ke.ddOpen=ee[3],Ee(()=>k=!1)),!Y&&Ce[0]&512&&(Y=!0,Ke.dropdown=ee[9],Ee(()=>Y=!1)),Q.$set(Ke)},i(ee){S||(W(Q.$$.fragment,ee),ee&&ve(()=>{S&&(q||(q=Ae(e,it,{duration:250},!0)),q.run(1))}),S=!0)},o(ee){G(Q.$$.fragment,ee),ee&&(q||(q=Ae(e,it,{duration:250},!1)),q.run(0)),S=!1},d(ee){ee&&P(e),ue.d(ee),n[16](null),d(),M&&M.d(),n[19](null),n[23](null),he(Q),ee&&q&&q.end(),ie=!1,ge(we)}}}function Gp(n,e,t){let s,i,o,r,a,l,u,d;K(n,Z,q=>t(12,r=q)),K(n,$e,q=>t(32,a=q)),K(n,st,q=>t(33,l=q)),K(n,Rt,q=>t(34,u=q)),K(n,bt,q=>t(35,d=q));let c=!1,f,h,_,m,y,w,T=Object.entries(l)[0],b=null;function I(){U(Z,r.save.status=0,r);let q=Ja(d,u),S=b==null?i:b==""?"[Empty]":b,ie=T[1].id;q.name=s,q.desc=S,js(vt(pn(mn),`builds/${ie}`),q).then(()=>{U(Z,r.save.status=1,r);let we={...l};we[s].desc=S,mo(),st.update(()=>we),U($e,a=q,a),U($e,a.id=ie,a)}).catch(()=>{U(Z,r.save.status=-1,r),U(Z,r.message="firebase_fail",r)})}const C=q=>{!f.contains(q.target)&&!w.contains(q.target)&&t(3,c=!1)};function O(){_=this.offsetWidth,t(6,_)}function L(q){$[q?"unshift":"push"](()=>{f=q,t(4,f)})}function V(){h=this.offsetWidth,t(5,h)}const j=()=>{r.save.status!=0&&t(3,c=!c)};function D(q){$[q?"unshift":"push"](()=>{m=q,t(7,m)})}function B(){o=this.value,t(10,o),t(1,b),t(2,i),t(0,T)}const R=q=>{t(1,b=Os(q.target.value,275))},re=q=>{r.save.status==0&&q.preventDefault(),Ii(m,q.target.value,275)};function ne(q){$[q?"unshift":"push"](()=>{y=q,t(8,y)})}const E=()=>{r.save.status!=0&&U(Z,r.save.ongoing=!1,r)},x=()=>{r.save.status!=0&&I()};function le(q){T=q,t(0,T)}function X(q){c=q,t(3,c)}function Q(q){w=q,t(9,w)}const ae=()=>t(1,b=null),k=()=>y.focus(),Y=q=>{q.key=="Escape"&&(t(3,c=!1),f.focus())};return n.$$.update=()=>{n.$$.dirty[0]&1&&t(11,s=T[0]),n.$$.dirty[0]&1&&t(2,i=T[1].desc),n.$$.dirty[0]&6&&t(10,o=b??i)},[T,b,i,c,f,h,_,m,y,w,o,s,r,I,C,O,L,V,j,D,B,R,re,ne,E,x,le,X,Q,ae,k,Y]}class Yp extends De{constructor(e){super(),Ne(this,e,Gp,jp,me,{},null,[-1,-1])}}function Kp(n){let e,t,s,i,o,r,a,l,u;return{c(){e=v("div"),t=v("span"),t.textContent="ID:",s=A(),i=v("input"),g(i,"class","buildIDInput svelte-w8elgk"),i.disabled=o=n[11].load.status==0,g(i,"type","text"),g(i,"placeholder","Example ID: -NDqeA1Scn0EAJcYWN3b"),g(i,"maxlength","25"),g(e,"class","buildIDCont svelte-w8elgk")},m(d,c){F(d,e,c),p(e,t),p(e,s),p(e,i),n[21](i),ct(i,n[10]),a=!0,l||(u=[N(i,"input",n[22]),N(i,"input",n[23]),N(i,"keydown",n[24])],l=!0)},p(d,c){(!a||c[0]&2048&&o!==(o=d[11].load.status==0))&&(i.disabled=o),c[0]&1024&&i.value!==d[10]&&ct(i,d[10])},i(d){a||(d&&ve(()=>{a&&(r||(r=Ae(e,Ge,{duration:150},!0)),r.run(1))}),a=!0)},o(d){d&&(r||(r=Ae(e,Ge,{duration:150},!1)),r.run(0)),a=!1},d(d){d&&P(e),n[21](null),d&&r&&r.end(),l=!1,ge(u)}}}function Qp(n){let e,t,s,i,o=n[9],r,a,l,u,d,c,f,h,_=Hr(n);return{c(){e=v("div"),t=v("span"),t.textContent="Load:",s=A(),i=v("button"),_.c(),r=A(),a=v("iconify-icon"),xe(a,"icon","iconamoon:arrow-down-2-fill"),i.disabled=l=n[11].load.status==0,g(i,"class","promptDDButton svelte-w8elgk"),ve(()=>n[19].call(i)),J(i,"ddOpen",n[8]),g(e,"class","chosenBuildCont svelte-w8elgk")},m(m,y){F(m,e,y),p(e,t),p(e,s),p(e,i),_.m(i,null),p(i,r),p(i,a),n[18](i),u=ft(i,n[19].bind(i)),c=!0,f||(h=N(i,"click",n[20]),f=!0)},p(m,y){y[0]&512&&me(o,o=m[9])?(_.d(1),_=Hr(m),_.c(),_.m(i,r)):_.p(m,y),(!c||y[0]&2048&&l!==(l=m[11].load.status==0))&&(i.disabled=l),(!c||y[0]&256)&&J(i,"ddOpen",m[8])},i(m){c||(m&&ve(()=>{c&&(d||(d=Ae(e,Ge,{duration:150},!0)),d.run(1))}),c=!0)},o(m){m&&(d||(d=Ae(e,Ge,{duration:150},!1)),d.run(0)),c=!1},d(m){m&&P(e),_.d(m),n[18](null),u(),m&&d&&d.end(),f=!1,h()}}}function Hr(n){let e,t=(n[6]>n[5]*.7?n[9].slice(0,20)+"<b>...</b>":n[9])+"",s;return{c(){e=v("span"),ve(()=>n[17].call(e))},m(i,o){F(i,e,o),e.innerHTML=t,s=ft(e,n[17].bind(e))},p(i,o){o[0]&608&&t!==(t=(i[6]>i[5]*.7?i[9].slice(0,20)+"<b>...</b>":i[9])+"")&&(e.innerHTML=t)},d(i){i&&P(e),s()}}}function zr(n){let e,t,s,i,o;function r(d){n[27](d)}function a(d){n[28](d)}function l(d){n[29](d)}let u={};return n[3]!==void 0&&(u.chosenBuild=n[3]),n[8]!==void 0&&(u.ddOpen=n[8]),n[7]!==void 0&&(u.dropdown=n[7]),e=new bo({props:u}),$.push(()=>ke(e,"chosenBuild",r)),$.push(()=>ke(e,"ddOpen",a)),$.push(()=>ke(e,"dropdown",l)),{c(){pe(e.$$.fragment)},m(d,c){fe(e,d,c),o=!0},p(d,c){const f={};!t&&c[0]&8&&(t=!0,f.chosenBuild=d[3],Ee(()=>t=!1)),!s&&c[0]&256&&(s=!0,f.ddOpen=d[8],Ee(()=>s=!1)),!i&&c[0]&128&&(i=!0,f.dropdown=d[7],Ee(()=>i=!1)),e.$set(f)},i(d){o||(W(e.$$.fragment,d),o=!0)},o(d){G(e.$$.fragment,d),o=!1},d(d){he(e,d)}}}function Xp(n){let e,t,s,i,o,r,a,l,u,d,c,f,h,_,m,y,w,T,b,I,C,O,L,V,j,D,B,R,re,ne,E,x,le;const X=[Qp,Kp],Q=[];function ae(Y,q){return Y[2]?0:1}y=ae(n),w=Q[y]=X[y](n);let k=n[2]&&zr(n);return{c(){e=v("div"),t=v("span"),t.textContent="Load build via:",s=A(),i=v("div"),o=v("div"),r=v("button"),a=se("Local saves"),u=A(),d=v("div"),c=v("button"),f=se("Exported ID"),_=A(),m=v("div"),w.c(),T=A(),b=v("div"),I=v("div"),C=v("button"),O=se("CANCEL"),V=A(),j=v("div"),D=v("button"),B=se("LOAD"),re=A(),k&&k.c(),g(t,"class","svelte-w8elgk"),g(r,"id","firstFocusable"),r.disabled=l=n[11].load.status==0||!n[12],g(r,"class","svelte-w8elgk"),J(r,"chosen",n[2]),J(r,"unavailable",!n[12]),g(o,"class","svelte-w8elgk"),c.disabled=h=n[11].load.status==0,g(c,"class","svelte-w8elgk"),J(c,"chosen",!n[2]),g(d,"class","svelte-w8elgk"),g(i,"class","loadMethodRadio svelte-w8elgk"),g(m,"class","loadMethodCont svelte-w8elgk"),C.disabled=L=n[11].load.status==0,g(D,"id","lastFocusable"),D.disabled=R=n[11].load.status==0,g(b,"class","promptOptions svelte-w8elgk"),g(e,"class","buildLoader svelte-w8elgk")},m(Y,q){F(Y,e,q),p(e,t),p(e,s),p(e,i),p(i,o),p(o,r),p(r,a),p(i,u),p(i,d),p(d,c),p(c,f),p(e,_),p(e,m),Q[y].m(m,null),p(e,T),p(e,b),p(b,I),p(I,C),p(C,O),n[25](C),p(b,V),p(b,j),p(j,D),p(D,B),p(e,re),k&&k.m(e,null),E=!0,x||(le=[N(window,"mousedown",n[14]),N(r,"click",n[15]),N(r,"keydown",Ft),N(c,"click",n[16]),N(C,"click",n[26]),N(D,"keydown",Jt),N(D,"click",n[13]),N(e,"introstart",n[30]),N(e,"keydown",n[31])],x=!0)},p(Y,q){(!E||q[0]&6144&&l!==(l=Y[11].load.status==0||!Y[12]))&&(r.disabled=l),(!E||q[0]&4)&&J(r,"chosen",Y[2]),(!E||q[0]&4096)&&J(r,"unavailable",!Y[12]),(!E||q[0]&2048&&h!==(h=Y[11].load.status==0))&&(c.disabled=h),(!E||q[0]&4)&&J(c,"chosen",!Y[2]);let S=y;y=ae(Y),y===S?Q[y].p(Y,q):(Le(),G(Q[S],1,1,()=>{Q[S]=null}),Be(),w=Q[y],w?w.p(Y,q):(w=Q[y]=X[y](Y),w.c()),W(w,1),w.m(m,null)),(!E||q[0]&2048&&L!==(L=Y[11].load.status==0))&&(C.disabled=L),(!E||q[0]&2048&&R!==(R=Y[11].load.status==0))&&(D.disabled=R),Y[2]?k?(k.p(Y,q),q[0]&4&&W(k,1)):(k=zr(Y),k.c(),W(k,1),k.m(e,null)):k&&(Le(),G(k,1,1,()=>{k=null}),Be())},i(Y){E||(W(w),W(k),Y&&ve(()=>{E&&(ne||(ne=Ae(e,it,{duration:250},!0)),ne.run(1))}),E=!0)},o(Y){G(w),G(k),Y&&(ne||(ne=Ae(e,it,{duration:250},!1)),ne.run(0)),E=!1},d(Y){Y&&P(e),Q[y].d(),n[25](null),k&&k.d(),Y&&ne&&ne.end(),x=!1,ge(le)}}}function xp(n,e,t){let s,i,o;K(n,Z,k=>t(11,s=k)),K(n,st,k=>t(32,i=k)),K(n,kt,k=>t(12,o=k));const r=wt();let a,l,u,d,c,f,h=o,_=!1,m=o?Object.entries(i)[0]:null,y,w="";function T(){if(!h&&!w.startsWith("-N")){U(Z,s.load.status=-1,s),U(Z,s.message="invalid_id",s);return}let k=Qa(pn(mn,"builds"),Ka()),Y=0;U(Z,s.load.status=0,s),Ya(k).then(q=>{let S=h?m[1].id:w;for(let ie in q.val()){if(ie==S){r("buildLoad",{build:q.val()[ie],id:ie});break}else Y==Object.keys(q.val()).length-1&&(U(Z,s.load.status=-1,s),U(Z,s.message=h?"not_found":"invalid_id",s));Y++}}).catch(()=>{U(Z,s.load.status=-1,s),U(Z,s.message="firebase_fail",s)})}const b=k=>{a&&!a.contains(k.target)&&!f.contains(k.target)&&t(8,_=!1)},I=()=>{s.load.status!=0&&o&&t(2,h=!0)},C=()=>{s.load.status!=0&&t(2,h=!1)};function O(){c=this.offsetWidth,t(6,c)}function L(k){$[k?"unshift":"push"](()=>{a=k,t(0,a)})}function V(){d=this.offsetWidth,t(5,d)}const j=()=>{s.load.status!=0&&t(8,_=!_)};function D(k){$[k?"unshift":"push"](()=>{u=k,t(1,u)})}function B(){w=this.value,t(10,w)}const R=k=>{t(10,w=Os(k.target.value,25))},re=k=>{s.load.status==0&&k.preventDefault()};function ne(k){$[k?"unshift":"push"](()=>{l=k,t(4,l)})}const E=()=>{s.load.status!=0&&U(Z,s.load.ongoing=!1,s)};function x(k){m=k,t(3,m)}function le(k){_=k,t(8,_)}function X(k){f=k,t(7,f)}const Q=()=>l.focus(),ae=k=>{k.key=="Escape"&&(t(8,_=!1),a.focus())};return n.$$.update=()=>{n.$$.dirty[0]&8&&t(9,y=m!=null?m[0]:null),n.$$.dirty[0]&7&&setTimeout(h?()=>a.focus():()=>u.focus())},[a,u,h,m,l,d,c,f,_,y,w,s,o,T,b,I,C,O,L,V,j,D,B,R,re,ne,E,x,le,X,Q,ae]}class Jp extends De{constructor(e){super(),Ne(this,e,xp,Xp,me,{},null,[-1,-1])}}function Ur(n){let e,t=(n[3]>n[4]*.8?n[8].slice(0,20)+"<b>...</b>":n[8])+"",s;return{c(){e=v("span"),ve(()=>n[12].call(e))},m(i,o){F(i,e,o),e.innerHTML=t,s=ft(e,n[12].bind(e))},p(i,o){o&280&&t!==(t=(i[3]>i[4]*.8?i[8].slice(0,20)+"<b>...</b>":i[8])+"")&&(e.innerHTML=t)},d(i){i&&P(e),s()}}}function Zp(n){let e,t,s,i,o,r=n[8],a,l,u,d,c,f,h,_,m,y,w,T,b,I,C,O,L,V,j,D,B,R,re,ne,E,x,le,X,Q=Ur(n);f=new Gs({props:{text:"I'm aware that this action is irreversible and want to erase this build from the database.",checked:!1}}),f.$on("toggle",n[16]);function ae(S){n[21](S)}function k(S){n[22](S)}function Y(S){n[23](S)}let q={};return n[0]!==void 0&&(q.chosenBuild=n[0]),n[6]!==void 0&&(q.ddOpen=n[6]),n[5]!==void 0&&(q.dropdown=n[5]),B=new bo({props:q}),$.push(()=>ke(B,"chosenBuild",ae)),$.push(()=>ke(B,"ddOpen",k)),$.push(()=>ke(B,"dropdown",Y)),{c(){e=v("div"),t=v("div"),s=v("span"),s.textContent="Delete:",i=A(),o=v("button"),Q.c(),a=A(),l=v("iconify-icon"),c=A(),pe(f.$$.fragment),h=A(),_=v("div"),m=v("div"),y=v("button"),w=se("CANCEL"),I=A(),C=v("div"),O=v("button"),L=se("DELETE"),D=A(),pe(B.$$.fragment),xe(l,"icon","iconamoon:arrow-down-2-fill"),g(o,"class","promptDDButton svelte-1t9ajmz"),g(o,"id","firstFocusable"),o.disabled=u=n[9].delete.status==0,ve(()=>n[14].call(o)),J(o,"ddOpen",n[6]),g(t,"class","chosenBuildCont"),g(y,"id",T=n[7]?"":"lastFocusable"),y.disabled=b=n[9].delete.status==0,O.disabled=V=!n[7]||n[9].delete.status==0,g(O,"id",j=n[7]?"lastFocusable":""),J(O,"unavailable",!n[7]),g(_,"class","promptOptions svelte-1t9ajmz"),g(e,"class","buildDeleter svelte-1t9ajmz")},m(S,ie){F(S,e,ie),p(e,t),p(t,s),p(t,i),p(t,o),Q.m(o,null),p(o,a),p(o,l),n[13](o),d=ft(o,n[14].bind(o)),p(e,c),fe(f,e,null),p(e,h),p(e,_),p(_,m),p(m,y),p(y,w),n[17](y),p(_,I),p(_,C),p(C,O),p(O,L),p(e,D),fe(B,e,null),x=!0,le||(X=[N(window,"mousedown",n[11]),N(o,"click",n[15]),N(o,"keydown",Ft),N(y,"click",n[18]),N(y,"keydown",n[19]),N(O,"click",n[20]),N(O,"keydown",Jt),N(e,"introstart",n[24]),N(e,"keydown",n[25])],le=!0)},p(S,[ie]){ie&256&&me(r,r=S[8])?(Q.d(1),Q=Ur(S),Q.c(),Q.m(o,a)):Q.p(S,ie),(!x||ie&512&&u!==(u=S[9].delete.status==0))&&(o.disabled=u),(!x||ie&64)&&J(o,"ddOpen",S[6]),(!x||ie&128&&T!==(T=S[7]?"":"lastFocusable"))&&g(y,"id",T),(!x||ie&512&&b!==(b=S[9].delete.status==0))&&(y.disabled=b),(!x||ie&640&&V!==(V=!S[7]||S[9].delete.status==0))&&(O.disabled=V),(!x||ie&128&&j!==(j=S[7]?"lastFocusable":""))&&g(O,"id",j),(!x||ie&128)&&J(O,"unavailable",!S[7]);const we={};!R&&ie&1&&(R=!0,we.chosenBuild=S[0],Ee(()=>R=!1)),!re&&ie&64&&(re=!0,we.ddOpen=S[6],Ee(()=>re=!1)),!ne&&ie&32&&(ne=!0,we.dropdown=S[5],Ee(()=>ne=!1)),B.$set(we)},i(S){x||(W(f.$$.fragment,S),W(B.$$.fragment,S),S&&ve(()=>{x&&(E||(E=Ae(e,it,{duration:250},!0)),E.run(1))}),x=!0)},o(S){G(f.$$.fragment,S),G(B.$$.fragment,S),S&&(E||(E=Ae(e,it,{duration:250},!1)),E.run(0)),x=!1},d(S){S&&P(e),Q.d(S),n[13](null),d(),he(f),n[17](null),he(B),S&&E&&E.end(),le=!1,ge(X)}}}function $p(n,e,t){let s,i,o,r;K(n,Z,E=>t(9,i=E)),K(n,st,E=>t(26,o=E)),K(n,$e,E=>t(27,r=E));let a,l,u,d,c,f=!1,h=Object.entries(o)[0],_=!1;function m(){U(Z,i.delete.status=0,i);let E=h[1].id;Zh(vt(pn(mn),`builds/${E}`)).then(()=>{U(Z,i.delete.status=1,i),r&&E==r.id&&U($e,r=null,r);let x={...o};delete x[s],mo(),st.update(()=>x)}).catch(x=>{console.log(x),U(Z,i.delete.status=-1,i),U(Z,i.message="firebase_fail",i)})}const y=E=>{!l.contains(E.target)&&!c.contains(E.target)&&t(6,f=!1)};function w(){u=this.offsetWidth,t(3,u)}function T(E){$[E?"unshift":"push"](()=>{l=E,t(2,l)})}function b(){d=this.offsetWidth,t(4,d)}const I=()=>{i.delete.status!=0&&t(6,f=!f)},C=E=>t(7,_=E.detail);function O(E){$[E?"unshift":"push"](()=>{a=E,t(1,a)})}const L=()=>{i.delete.status!=0&&U(Z,i.delete.ongoing=!1,i)},V=E=>{_||Jt(E)},j=()=>{_&&i.delete.status!=0&&m()};function D(E){h=E,t(0,h)}function B(E){f=E,t(6,f)}function R(E){c=E,t(5,c)}const re=()=>a.focus(),ne=E=>{E.key=="Escape"&&(t(6,f=!1),l.focus())};return n.$$.update=()=>{n.$$.dirty&1&&t(8,s=h[0])},[h,a,l,u,d,c,f,_,s,i,m,y,w,T,b,I,C,O,L,V,j,D,B,R,re,ne]}class em extends De{constructor(e){super(),Ne(this,e,$p,Zp,me,{})}}function tm(n){let e,t,s,i,o;return{c(){e=v("div"),t=v("div"),s=v("button"),s.innerHTML='<iconify-icon icon="codicon:sparkle-filled" class="svelte-1mvdvfp"></iconify-icon> <span class="tooltip" id="right">Add bonuses</span>',g(s,"class","svelte-1mvdvfp"),g(t,"class","svelte-1mvdvfp"),g(e,"class","sideFeatures svelte-1mvdvfp")},m(r,a){F(r,e,a),p(e,t),p(t,s),i||(o=N(s,"click",n[2]),i=!0)},p:te,i:te,o:te,d(r){r&&P(e),i=!1,o()}}}function nm(n,e,t){let s,i;return K(n,dn,r=>t(0,s=r)),K(n,Z,r=>t(1,i=r)),[s,i,()=>{s||U(Z,i.bonus.ongoing=!0,i)}]}class sm extends De{constructor(e){super(),Ne(this,e,nm,tm,me,{})}}function Vr(n,e,t){const s=n.slice();s[11]=e[t];const i=s[1].bonuses[0].name==s[11].name;return s[12]=i,s}function jr(n){let e,t,s,i,o,r,a,l,u,d,c,f;function h(...m){return n[5](n[12],...m)}function _(...m){return n[6](n[11],...m)}return l=new Gs({props:{text:n[11].name,checked:n[2][n[11].name]}}),l.$on("toggle",_),{c(){e=v("div"),t=v("a"),s=v("img"),a=A(),pe(l.$$.fragment),u=A(),Xe(s.src,i=n[11].image)||g(s,"src",i),g(s,"alt",""),g(s,"class","svelte-1xnyxhr"),g(t,"id",o=n[12]?"firstFocusable":""),g(t,"href",r=n[11].link),g(t,"target","_blank"),g(t,"class","svelte-1xnyxhr"),g(e,"class","svelte-1xnyxhr")},m(m,y){F(m,e,y),p(e,t),p(t,s),p(e,a),fe(l,e,null),p(e,u),d=!0,c||(f=N(t,"keydown",h),c=!0)},p(m,y){n=m,(!d||y&2&&!Xe(s.src,i=n[11].image))&&g(s,"src",i),(!d||y&2&&o!==(o=n[12]?"firstFocusable":""))&&g(t,"id",o),(!d||y&2&&r!==(r=n[11].link))&&g(t,"href",r);const w={};y&2&&(w.text=n[11].name),y&6&&(w.checked=n[2][n[11].name]),l.$set(w)},i(m){d||(W(l.$$.fragment,m),d=!0)},o(m){G(l.$$.fragment,m),d=!1},d(m){m&&P(e),he(l),c=!1,f()}}}function im(n){let e,t,s,i,o,r,a,l,u,d,c,f,h,_=Ve(n[1].bonuses),m=[];for(let w=0;w<_.length;w+=1)m[w]=jr(Vr(n,_,w));const y=w=>G(m[w],1,1,()=>{m[w]=null});return{c(){e=v("div"),t=v("div");for(let w=0;w<m.length;w+=1)m[w].c();s=A(),i=v("div"),o=v("div"),r=v("button"),r.textContent="CLEAR",a=A(),l=v("div"),u=v("button"),u.textContent="OK",g(t,"class","bonusesCont svelte-1xnyxhr"),g(u,"id","lastFocusable"),g(i,"class","promptOptions svelte-1xnyxhr"),g(e,"class","bonusChooser svelte-1xnyxhr")},m(w,T){F(w,e,T),p(e,t);for(let b=0;b<m.length;b+=1)m[b]&&m[b].m(t,null);p(e,s),p(e,i),p(i,o),p(o,r),p(i,a),p(i,l),p(l,u),n[8](u),c=!0,f||(h=[N(r,"click",n[7]),N(u,"click",n[9]),N(u,"keydown",Jt),N(e,"introstart",n[10])],f=!0)},p(w,[T]){if(T&14){_=Ve(w[1].bonuses);let b;for(b=0;b<_.length;b+=1){const I=Vr(w,_,b);m[b]?(m[b].p(I,T),W(m[b],1)):(m[b]=jr(I),m[b].c(),W(m[b],1),m[b].m(t,null))}for(Le(),b=_.length;b<m.length;b+=1)y(b);Be()}},i(w){if(!c){for(let T=0;T<_.length;T+=1)W(m[T]);w&&ve(()=>{c&&(d||(d=Ae(e,it,{duration:250},!0)),d.run(1))}),c=!0}},o(w){m=m.filter(Boolean);for(let T=0;T<m.length;T+=1)G(m[T]);w&&(d||(d=Ae(e,it,{duration:250},!1)),d.run(0)),c=!1},d(w){w&&P(e),gt(m,w),n[8](null),w&&d&&d.end(),f=!1,ge(h)}}}function om(n,e,t){let s,i,o,r;K(n,Ot,_=>t(1,s=_)),K(n,ln,_=>t(2,i=_)),K(n,Ze,_=>t(3,o=_)),K(n,Z,_=>t(4,r=_));let a;const l=(_,m)=>{_&&Ft(m)},u=(_,m)=>{U(ln,i[_.name]=m.detail,i);for(let y in o)m.detail?U(Ze,o[y]+=_.stats[y],o):U(Ze,o[y]-=_.stats[y],o),U(Ze,o[y]=Math.round(o[y]*10)/10,o)},d=()=>{for(let _ in i){if(!i[_])continue;let m=s.bonuses.find(y=>y.name==_);U(ln,i[_]=!1,i);for(let y in o)U(Ze,o[y]-=m.stats[y],o),U(Ze,o[y]=Math.round(o[y]*10)/10,o)}};function c(_){$[_?"unshift":"push"](()=>{a=_,t(0,a)})}return[a,s,i,o,r,l,u,d,c,()=>U(Z,r.bonus.ongoing=!1,r),()=>a.focus()]}class rm extends De{constructor(e){super(),Ne(this,e,om,im,me,{})}}const{document:os,window:sn}=nu;function Gr(n,e,t){const s=n.slice();return s[41]=e[t],s}function Yr(n,e,t){const s=n.slice();return s[41]=e[t],s}function Kr(n){let e;return{c(){e=v("link"),g(e,"rel","preload"),g(e,"as","image"),g(e,"href",n[41])},m(t,s){F(t,e,s)},p:te,d(t){t&&P(e)}}}function Qr(n){let e;return{c(){e=v("style"),e.textContent=`body > div:not(.backgrounds, .zoomLevel),\r
            main > :not(.promptCont),\r
            .backgrounds > img {\r
                filter: blur(calc(var(--u) * 0.5));\r
                pointer-events: none;\r
            }`},m(t,s){F(t,e,s)},d(t){t&&P(e)}}}function Xr(n){let e,t;return{c(){e=v("img"),g(e,"class","background svelte-o7ons0"),Xe(e.src,t=n[41])||g(e,"src",t),g(e,"alt",""),J(e,"active",n[15].indexOf(n[41])==n[7])},m(s,i){F(s,e,i)},p(s,i){i[0]&32896&&J(e,"active",s[15].indexOf(s[41])==s[7])},d(s){s&&P(e)}}}function xr(n){let e,t,s=Math.floor(n[13][n[2]]*100)+"",i,o,r,a;return{c(){e=v("div"),t=se("Zoom: "),i=se(s),o=v("b"),o.textContent="%",g(e,"class","zoomLevel svelte-o7ons0")},m(l,u){F(l,e,u),p(e,t),p(e,i),p(e,o),a=!0},p(l,u){(!a||u[0]&4)&&s!==(s=Math.floor(l[13][l[2]]*100)+"")&&Re(i,s)},i(l){a||(l&&ve(()=>{a&&(r||(r=Ae(e,Ge,{duration:150},!0)),r.run(1))}),a=!0)},o(l){l&&(r||(r=Ae(e,Ge,{duration:150},!1)),r.run(0)),a=!1},d(l){l&&P(e),l&&r&&r.end()}}}function Jr(n){let e,t,s=n[3].name+"",i,o,r,a,l,u,d,c,f,h,_=n[3].desc+"",m,y,w,T,b;return{c(){e=v("div"),t=v("span"),i=se(s),o=A(),r=v("button"),r.innerHTML='<iconify-icon icon="ri:share-fill"></iconify-icon> <span class="tooltip" id="right">Share build</span>',a=A(),l=v("span"),u=se(`Description / Notes:\r
                `),d=v("br"),c=A(),f=v("br"),h=A(),m=se(_),g(t,"id","buildName"),g(t,"class","svelte-o7ons0"),g(r,"class","svelte-o7ons0"),g(l,"class","tooltip"),g(l,"id","bottom"),g(e,"class","currentBuild svelte-o7ons0"),J(e,"no-tooltip",n[8])},m(I,C){F(I,e,C),p(e,t),p(t,i),p(e,o),p(e,r),p(e,a),p(e,l),p(l,u),p(l,d),p(l,c),p(l,f),p(l,h),p(l,m),w=!0,T||(b=[N(r,"click",n[24]),N(r,"mouseenter",n[25]),N(r,"mouseleave",n[26])],T=!0)},p(I,C){(!w||C[0]&8)&&s!==(s=I[3].name+"")&&Re(i,s),(!w||C[0]&8)&&_!==(_=I[3].desc+"")&&Re(m,_),(!w||C[0]&256)&&J(e,"no-tooltip",I[8])},i(I){w||(I&&ve(()=>{w&&(y||(y=Ae(e,Ge,{duration:100},!0)),y.run(1))}),w=!0)},o(I){I&&(y||(y=Ae(e,Ge,{duration:100},!1)),y.run(0)),w=!1},d(I){I&&P(e),I&&y&&y.end(),T=!1,ge(b)}}}function lm(n){let e,t,s;return t=new rm({}),{c(){e=v("div"),pe(t.$$.fragment),g(e,"class","promptCont svelte-o7ons0")},m(i,o){F(i,e,o),fe(t,e,null),s=!0},p:te,i(i){s||(W(t.$$.fragment,i),s=!0)},o(i){G(t.$$.fragment,i),s=!1},d(i){i&&P(e),he(t)}}}function am(n){let e,t,s;return t=new em({}),{c(){e=v("div"),pe(t.$$.fragment),g(e,"class","promptCont svelte-o7ons0")},m(i,o){F(i,e,o),fe(t,e,null),s=!0},p:te,i(i){s||(W(t.$$.fragment,i),s=!0)},o(i){G(t.$$.fragment,i),s=!1},d(i){i&&P(e),he(t)}}}function um(n){let e,t,s;return t=new Jp({}),t.$on("buildLoad",n[28]),{c(){e=v("div"),pe(t.$$.fragment),g(e,"class","promptCont svelte-o7ons0")},m(i,o){F(i,e,o),fe(t,e,null),s=!0},p:te,i(i){s||(W(t.$$.fragment,i),s=!0)},o(i){G(t.$$.fragment,i),s=!1},d(i){i&&P(e),he(t)}}}function cm(n){let e,t,s;return t=new Yp({}),{c(){e=v("div"),pe(t.$$.fragment),g(e,"class","promptCont svelte-o7ons0")},m(i,o){F(i,e,o),fe(t,e,null),s=!0},p:te,i(i){s||(W(t.$$.fragment,i),s=!0)},o(i){G(t.$$.fragment,i),s=!1},d(i){i&&P(e),he(t)}}}function dm(n){let e,t,s;return t=new wp({}),{c(){e=v("div"),pe(t.$$.fragment),g(e,"class","promptCont svelte-o7ons0")},m(i,o){F(i,e,o),fe(t,e,null),s=!0},p:te,i(i){s||(W(t.$$.fragment,i),s=!0)},o(i){G(t.$$.fragment,i),s=!1},d(i){i&&P(e),he(t)}}}function fm(n){let e,t,s,i;function o(a){n[27](a)}let r={};return n[6]!==void 0&&(r.loadID=n[6]),t=new Wp({props:r}),$.push(()=>ke(t,"loadID",o)),t.$on("resetActions",n[17]),{c(){e=v("div"),pe(t.$$.fragment),g(e,"class","promptCont svelte-o7ons0")},m(a,l){F(a,e,l),fe(t,e,null),i=!0},p(a,l){const u={};!s&&l[0]&64&&(s=!0,u.loadID=a[6],Ee(()=>s=!1)),t.$set(u)},i(a){i||(W(t.$$.fragment,a),i=!0)},o(a){G(t.$$.fragment,a),i=!1},d(a){a&&P(e),he(t)}}}function hm(n){let e,t,s,i,o,r,a,l,u,d,c,f,h,_,m,y,w,T,b,I,C,O,L,V,j,D,B,R,re;ve(n[23]);let ne=Ve(n[15]),E=[];for(let S=0;S<ne.length;S+=1)E[S]=Kr(Yr(n,ne,S));let x=n[10]&&Qr(),le=Ve(n[15]),X=[];for(let S=0;S<le.length;S+=1)X[S]=Xr(Gr(n,le,S));let Q=n[5]&&xr(n),ae=n[3]&&Jr(n);c=new cp({}),h=new sm({}),w=new W_({}),b=new x_({}),C=new lp({}),L=new bp({});const k=[fm,dm,cm,um,am,lm],Y=[];function q(S,ie){return S[9]||S[4].share.ongoing?0:S[4].export.ongoing?1:S[4].save.ongoing?2:S[4].load.ongoing&&!S[6]?3:S[4].delete.ongoing?4:S[4].bonus.ongoing?5:-1}return~(j=q(n))&&(D=Y[j]=k[j](n)),{c(){for(let S=0;S<E.length;S+=1)E[S].c();e=Gt(),x&&x.c(),t=Gt(),s=A(),i=v("div");for(let S=0;S<X.length;S+=1)X[S].c();o=A(),r=v("div"),r.textContent=`${_m}`,a=A(),Q&&Q.c(),l=A(),u=v("main"),ae&&ae.c(),d=A(),pe(c.$$.fragment),f=A(),pe(h.$$.fragment),_=A(),m=v("div"),y=v("div"),pe(w.$$.fragment),T=A(),pe(b.$$.fragment),I=A(),pe(C.$$.fragment),O=A(),pe(L.$$.fragment),V=A(),D&&D.c(),g(i,"class","backgrounds"),g(r,"style","position: absolute; right: 0; padding: var(--u); font-size: calc(var(--u) * 2.5); color: var(--light);"),g(y,"class","eqCont svelte-o7ons0"),g(m,"class","calcBox svelte-o7ons0"),g(m,"id","calc"),g(u,"class","svelte-o7ons0")},m(S,ie){for(let we=0;we<E.length;we+=1)E[we]&&E[we].m(os.head,null);p(os.head,e),x&&x.m(os.head,null),p(os.head,t),F(S,s,ie),F(S,i,ie);for(let we=0;we<X.length;we+=1)X[we]&&X[we].m(i,null);F(S,o,ie),F(S,r,ie),F(S,a,ie),Q&&Q.m(S,ie),F(S,l,ie),F(S,u,ie),ae&&ae.m(u,null),p(u,d),fe(c,u,null),p(u,f),fe(h,u,null),p(u,_),p(u,m),p(m,y),fe(w,y,null),p(y,T),fe(b,y,null),p(m,I),fe(C,m,null),p(u,O),fe(L,u,null),p(u,V),~j&&Y[j].m(u,null),B=!0,R||(re=[N(sn,"storage",n[20]),N(sn,"wheel",n[21],{passive:!1}),N(sn,"keydown",n[22]),N(sn,"resize",n[23])],R=!0)},p(S,ie){if(ie[0]&32768){ne=Ve(S[15]);let ue;for(ue=0;ue<ne.length;ue+=1){const M=Yr(S,ne,ue);E[ue]?E[ue].p(M,ie):(E[ue]=Kr(M),E[ue].c(),E[ue].m(e.parentNode,e))}for(;ue<E.length;ue+=1)E[ue].d(1);E.length=ne.length}if(S[10]?x||(x=Qr(),x.c(),x.m(t.parentNode,t)):x&&(x.d(1),x=null),ie[0]&32896){le=Ve(S[15]);let ue;for(ue=0;ue<le.length;ue+=1){const M=Gr(S,le,ue);X[ue]?X[ue].p(M,ie):(X[ue]=Xr(M),X[ue].c(),X[ue].m(i,null))}for(;ue<X.length;ue+=1)X[ue].d(1);X.length=le.length}S[5]?Q?(Q.p(S,ie),ie[0]&32&&W(Q,1)):(Q=xr(S),Q.c(),W(Q,1),Q.m(l.parentNode,l)):Q&&(Le(),G(Q,1,1,()=>{Q=null}),Be()),S[3]?ae?(ae.p(S,ie),ie[0]&8&&W(ae,1)):(ae=Jr(S),ae.c(),W(ae,1),ae.m(u,d)):ae&&(Le(),G(ae,1,1,()=>{ae=null}),Be());let we=j;j=q(S),j===we?~j&&Y[j].p(S,ie):(D&&(Le(),G(Y[we],1,1,()=>{Y[we]=null}),Be()),~j?(D=Y[j],D?D.p(S,ie):(D=Y[j]=k[j](S),D.c()),W(D,1),D.m(u,null)):D=null)},i(S){B||(W(Q),W(ae),W(c.$$.fragment,S),W(h.$$.fragment,S),W(w.$$.fragment,S),W(b.$$.fragment,S),W(C.$$.fragment,S),W(L.$$.fragment,S),W(D),B=!0)},o(S){G(Q),G(ae),G(c.$$.fragment,S),G(h.$$.fragment,S),G(w.$$.fragment,S),G(b.$$.fragment,S),G(C.$$.fragment,S),G(L.$$.fragment,S),G(D),B=!1},d(S){S&&(P(s),P(i),P(o),P(r),P(a),P(l),P(u)),gt(E,S),P(e),x&&x.d(S),P(t),gt(X,S),Q&&Q.d(S),ae&&ae.d(),he(c),he(h),he(w),he(b),he(C),he(L),~j&&Y[j].d(),R=!1,ge(re)}}}let _m="3.18.0-alpha";function pm(n,e,t){let s,i,o,r,a,l,u,d,c,f,h,_;K(n,$e,M=>t(3,i=M)),K(n,Z,M=>t(4,o=M)),K(n,dn,M=>t(10,r=M)),K(n,Ai,M=>t(19,a=M)),K(n,ds,M=>t(32,l=M)),K(n,Rt,M=>t(33,u=M)),K(n,Mn,M=>t(34,d=M)),K(n,bt,M=>t(35,c=M)),K(n,kt,M=>t(11,f=M)),K(n,st,M=>t(12,h=M)),K(n,Ot,M=>t(36,_=M));let m,y,w,T=7,b=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],I=!1,C,O=new URLSearchParams(window.location.search).get("id");for(let M of f_){let Fe=`https://raw.githubusercontent.com/XT8SS/fc-sv/gh-pages/ff-data/${M}.json`;fetch(Fe).then(async be=>{if(be.status!=200){console.error(`Failed to fetch "${M}" data!
Status: ${be.status}`);return}U(Ot,_[M]=await be.json(),_)}).catch(be=>console.error(`Failed to initiate "${M}" data fetch!
${be}`))}fu(()=>{if(O)if(U(Z,o.load.ongoing=!0,o),!O.startsWith("-N"))U(Z,o.load.status=-1,o),U(Z,o.message="invalid_id",o);else{U(Z,o.load.status=0,o);let M=Qa(pn(mn,"builds"),Ka()),Fe=0;Ya(M).then(be=>{for(let Je in be.val()){if(Je==O){L(be.val()[Je],Je);break}else Fe==Object.keys(be.val()).length-1&&(U(Z,o.load.status=-1,o),U(Z,o.message="invalid_id",o));Fe++}}).catch(()=>{U(Z,o.load.status=-1,o),U(Z,o.message="firebase_fail",o)})}t(18,w=y>m),h[Object.keys(h)[0]]&&U(kt,f=!0,f)});function L(M,Fe){for(let be in M.eq){let Je=c[be]||ho;M.eq[be]&&M.eq[be]!=Je.name?d[be][M.eq[be]].querySelector("button").click():!M.eq[be]&&Je.name&&d[be][Je.name].querySelector("button").click()}for(let be of Yn){let Je=u[be]||_o;Je.name&&l[be][Je.name].querySelector("button").click()}setTimeout(()=>{for(let be of Yn)M.gear[be]&&l[be][M.gear[be]].querySelector("button").click();U(Z,o.load.ongoing=!1,o),U(Z,o.load.status=null,o),Fe&&(U($e,i=M,i),U($e,i.id=Fe,i),t(6,O=null))})}let V=[],j=[],D,B,R=9;for(let M=0;M<R;M++)V.push(`backgrounds/BG${M}.jpg`);function re(M){B=Math.floor(Math.random()*M.length)}re(V);function ne(){t(7,D=B),j.push(B)}ne(),function M(){setTimeout(()=>{if(re(V),!j.length)ne();else if(j.length>3&&(j=j.slice(1)),!j.includes(B))ne();else{let Fe=[...Array(R).keys()].filter(be=>!j.includes(be));re(Fe),ne()}document.hasFocus&&M()},45e3)}();function E(){C=setTimeout(()=>{t(5,I=!1)},2e3)}function x(){clearTimeout(C),t(5,I=!0),E()}function le(){U(Z,o.export.status=null,o),U(Z,o.export.ongoing=!1,o),U(Z,o.save.status=null,o),U(Z,o.save.ongoing=!1,o),U(Z,o.load.status=null,o),U(Z,o.load.ongoing=!1,o),U(Z,o.delete.status=null,o),U(Z,o.delete.ongoing=!1,o),U(Z,o.share.ongoing=!1,o),U(Z,o.message="",o)}let X=!1;const Q=M=>{if(M.key=="builds")if(M.url.includes("ls=true")){U(st,h=JSON.parse(M.newValue),h),U(kt,f=Object.keys(JSON.parse(M.newValue)).length>0,f),le();let Fe=Object.keys(JSON.parse(M.oldValue)).filter(be=>!Object.keys(JSON.parse(M.newValue)).includes(be))[0];Fe&&i&&Fe==i.name&&U($e,i=null,i)}else window.localStorage.setItem("builds",JSON.stringify(h))},ae=M=>{let Fe=M.wheelDeltaY;if(M.ctrlKey){if(M.preventDefault(),b[T]==.2&&Fe<0||b[T]==5&&Fe>0)return;Fe>0?t(2,T++,T):t(2,T--,T),x()}},k=M=>{M.ctrlKey&&(M.key=="-"||M.key=="+"||M.code=="Equal"||M.key=="0")&&(M.preventDefault(),(M.key=="+"||M.code=="Equal")&&b[T]!=5?t(2,T++,T):M.key=="-"&&b[T]!=.2?t(2,T--,T):M.key=="0"&&b[T]!=1&&t(2,T=7),x()),r&&p_(M)};function Y(){t(0,m=sn.outerHeight),t(1,y=sn.outerWidth)}const q=()=>{r||U(Z,o.share.ongoing=!0,o)},S=()=>t(8,X=!0),ie=()=>t(8,X=!1);function we(M){O=M,t(6,O)}const ue=M=>L(M.detail.build,M.detail.id);return n.$$.update=()=>{if(n.$$.dirty[0]&524291&&(y||m)&&(t(18,w=y>m),a))for(let M of a)po(M.node,M.itemName);n.$$.dirty[0]&262148&&(w?document.documentElement.style.setProperty("--u",`${.75*b[T]}vh`):document.documentElement.style.setProperty("--u","0.75vh")),n.$$.dirty[0]&16&&t(9,s=o.export.status||o.save.status||o.load.status||o.delete.status),n.$$.dirty[0]&16&&U(dn,r=o.export.ongoing||o.save.ongoing||o.load.ongoing||o.delete.ongoing||o.share.ongoing||o.bonus.ongoing,r),n.$$.dirty[0]&8&&(document.title=(i?i.name+" - ":"")+"Fantastic Calculator")},[m,y,T,i,o,I,O,D,X,s,r,f,h,b,L,V,x,le,w,a,Q,ae,k,Y,q,S,ie,we,ue]}class mm extends De{constructor(e){super(),Ne(this,e,pm,hm,me,{},null,[-1,-1])}}new mm({target:document.body});
