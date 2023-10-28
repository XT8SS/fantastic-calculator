var Te=Object.defineProperty;var Me=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ce=(e,t,n)=>(Me(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function g(){}function Ke(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function Ie(e){return e()}function Se(){return Object.create(null)}function z(e){e.forEach(Ie)}function Ce(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let te;function oe(e,t){return e===t?!0:(te||(te=document.createElement("a")),te.href=t,e===te.href)}function Ue(e){return Object.keys(e).length===0}function Ge(e,...t){if(e==null){for(const s of t)s(void 0);return g}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ye(e,t,n){e.$$.on_destroy.push(Ge(t,n))}function ae(e,t,n){return e.set(n),t}function v(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function _e(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function le(e){return document.createTextNode(e)}function A(){return le(" ")}function k(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ve(e){return Array.from(e.childNodes)}function ge(e,t){t=""+t,e.data!==t&&(e.data=t)}function P(e,t,n,s){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let ne;function Je(){if(ne===void 0){ne=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ne=!0}}return ne}function ie(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const s=b("iframe");s.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),s.setAttribute("aria-hidden","true"),s.tabIndex=-1;const o=Je();let r;return o?(s.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=k(window,"message",l=>{l.source===s.contentWindow&&t()})):(s.src="about:blank",s.onload=()=>{r=k(s.contentWindow,"resize",t),t()}),v(e,s),()=>{(o||r&&s.contentWindow)&&r(),q(s)}}function R(e,t,n){e.classList.toggle(t,!!n)}function Xe(e,t,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:s})}let ee;function E(e){ee=e}function be(){if(!ee)throw new Error("Function called outside component initialization");return ee}function Qe(e){be().$$.on_mount.push(e)}function Ye(){const e=be();return(t,n,{cancelable:s=!1}={})=>{const o=e.$$.callbacks[t];if(o){const r=Xe(t,n,{cancelable:s});return o.slice().forEach(l=>{l.call(e,r)}),!r.defaultPrevented}return!0}}const X=[],N=[];let Q=[];const me=[],Ze=Promise.resolve();let he=!1;function xe(){he||(he=!0,Ze.then(we))}function W(e){Q.push(e)}function B(e){me.push(e)}const fe=new Set;let V=0;function we(){if(V!==0)return;const e=ee;do{try{for(;V<X.length;){const t=X[V];V++,E(t),et(t.$$)}}catch(t){throw X.length=0,V=0,t}for(E(null),X.length=0,V=0;N.length;)N.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];fe.has(n)||(fe.add(n),n())}Q.length=0}while(X.length);for(;me.length;)me.pop()();he=!1,fe.clear(),E(e)}function et(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}function tt(e){const t=[],n=[];Q.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),Q=t}const se=new Set;let T;function re(){T={r:0,c:[],p:T}}function ue(){T.r||z(T.c),T=T.p}function y(e,t){e&&e.i&&(se.delete(e),e.i(t))}function $(e,t,n,s){if(e&&e.o){if(se.has(e))return;se.add(e),T.c.push(()=>{se.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function qe(e,t){const n=t.token={};function s(o,r,l,u){if(t.token!==n)return;t.resolved=u;let i=t.ctx;l!==void 0&&(i=i.slice(),i[l]=u);const c=o&&(t.current=o)(i);let f=!1;t.block&&(t.blocks?t.blocks.forEach((a,m)=>{m!==r&&a&&(re(),$(a,1,1,()=>{t.blocks[m]===a&&(t.blocks[m]=null)}),ue())}):t.block.d(1),c.c(),y(c,1),c.m(t.mount(),t.anchor),f=!0),t.block=c,t.blocks&&(t.blocks[r]=c),f&&we()}if(Ke(e)){const o=be();if(e.then(r=>{E(o),s(t.then,1,t.value,r),E(null)},r=>{if(E(o),s(t.catch,2,t.error,r),E(null),!t.hasCatch)throw r}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}}function nt(e,t,n){const s=t.slice(),{resolved:o}=e;e.current===e.then&&(s[e.value]=o),e.current===e.catch&&(s[e.error]=o),e.block.p(s,n)}function Y(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function I(e,t,n){const s=e.$$.props[t];s!==void 0&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function M(e){e&&e.c()}function C(e,t,n){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),W(()=>{const r=e.$$.on_mount.map(Ie).filter(Ce);e.$$.on_destroy?e.$$.on_destroy.push(...r):z(r),e.$$.on_mount=[]}),o.forEach(W)}function j(e,t){const n=e.$$;n.fragment!==null&&(tt(n.after_update),z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function st(e,t){e.$$.dirty[0]===-1&&(X.push(e),xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(e,t,n,s,o,r,l=null,u=[-1]){const i=ee;E(e);const c=e.$$={fragment:null,ctx:[],props:r,update:g,not_equal:o,bound:Se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:Se(),dirty:u,skip_bound:!1,root:t.target||i.$$.root};l&&l(c.root);let f=!1;if(c.ctx=n?n(e,t.props||{},(a,m,...d)=>{const S=d.length?d[0]:m;return c.ctx&&o(c.ctx[a],c.ctx[a]=S)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](S),f&&st(e,a)),m}):[],c.update(),f=!0,z(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const a=Ve(t.target);c.fragment&&c.fragment.l(a),a.forEach(q)}else c.fragment&&c.fragment.c();t.intro&&y(e.$$.fragment),C(e,t.target,t.anchor),we()}E(i)}class H{constructor(){ce(this,"$$");ce(this,"$$set")}$destroy(){j(this,1),this.$destroy=g}$on(t,n){if(!Ce(n))return g;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!Ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ot="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ot);const J=[];function je(e,t=g){let n;const s=new Set;function o(u){if(D(e,u)&&(e=u,n)){const i=!J.length;for(const c of s)c[1](),J.push(c,e);if(i){for(let c=0;c<J.length;c+=2)J[c][0](J[c+1]);J.length=0}}}function r(u){o(u(e))}function l(u,i=g){const c=[u,i];return s.add(c),s.size===1&&(n=t(o,r)||g),u(e),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:o,update:r,subscribe:l}}let Ne=je({}),de=je({}),pe={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},$e=["head","body","legs","feet","neck","back","ring","misc"];function lt(e){let t,n,s,o,r,l,u=e[0].name+"",i,c,f;return{c(){t=b("li"),n=b("button"),s=b("img"),r=A(),l=b("span"),i=le(u),oe(s.src,o=e[0].image)||p(s,"src",o),p(s,"alt",""),p(s,"class","svelte-ctjvi1"),p(l,"class","svelte-ctjvi1"),p(n,"class","svelte-ctjvi1"),p(t,"class","svelte-ctjvi1"),R(t,"itemSelected",e[2])},m(a,m){O(a,t,m),v(t,n),v(n,s),v(n,r),v(n,l),v(l,i),e[6](t),c||(f=k(n,"click",e[3]),c=!0)},p(a,[m]){m&1&&!oe(s.src,o=a[0].image)&&p(s,"src",o),m&1&&u!==(u=a[0].name+"")&&ge(i,u),m&4&&R(t,"itemSelected",a[2])},i:g,o:g,d(a){a&&q(t),e[6](null),c=!1,f()}}}function it(e,t,n){let s,o;ye(e,de,d=>n(7,s=d)),ye(e,Ne,d=>n(8,o=d));let{itemData:r,slotOpen:l,eqSlotName:u}=t;const i=Ye();let c,f=!1;function a(){i("itemSelect",c),c.classList.contains("itemSelected")||n(2,f=!1),n(2,f=!f),n(4,l=!1),f&&ae(Ne,o[u]=r.stats,o);for(let d of Object.keys(pe)){ae(de,s[d]=0,s);for(let S in o)ae(de,s[d]+=o[S][d],s)}console.log(s)}function m(d){N[d?"unshift":"push"](()=>{c=d,n(1,c)})}return e.$$set=d=>{"itemData"in d&&n(0,r=d.itemData),"slotOpen"in d&&n(4,l=d.slotOpen),"eqSlotName"in d&&n(5,u=d.eqSlotName)},[r,c,f,a,l,u,m]}class rt extends H{constructor(t){super(),F(this,t,it,lt,D,{itemData:0,slotOpen:4,eqSlotName:5})}}function ke(e,t,n){const s=e.slice();return s[25]=t[n],s[26]=t,s[27]=n,s}function ut(e){return{c:g,m:g,p:g,i:g,o:g,d:g}}function ct(e){let t,n,s,o,r,l,u,i=Y(e[24]),c=[];for(let a=0;a<i.length;a+=1)c[a]=Oe(ke(e,i,a));const f=a=>$(c[a],1,1,()=>{c[a]=null});return{c(){t=b("div"),n=b("input"),s=A(),o=b("ul");for(let a=0;a<c.length;a+=1)c[a].c();p(n,"type","text"),p(n,"class","searchBarInput svelte-coudxr"),p(n,"placeholder","Search..."),p(t,"class","searchBarCont svelte-coudxr"),p(o,"class","svelte-coudxr")},m(a,m){O(a,t,m),v(t,n),e[10](n),O(a,s,m),O(a,o,m);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(o,null);e[16](o),r=!0,l||(u=[k(n,"keydown",e[11]),k(n,"input",e[12])],l=!0)},p(a,m){if(m&291){i=Y(a[24]);let d;for(d=0;d<i.length;d+=1){const S=ke(a,i,d);c[d]?(c[d].p(S,m),y(c[d],1)):(c[d]=Oe(S),c[d].c(),y(c[d],1),c[d].m(o,null))}for(re(),d=i.length;d<c.length;d+=1)f(d);ue()}},i(a){if(!r){for(let m=0;m<i.length;m+=1)y(c[m]);r=!0}},o(a){c=c.filter(Boolean);for(let m=0;m<c.length;m+=1)$(c[m]);r=!1},d(a){a&&(q(t),q(s),q(o)),e[10](null),_e(c,a),e[16](null),l=!1,z(u)}}}function Oe(e){let t,n,s,o,r;function l(f){e[13](f,e[25],e[26],e[27])}function u(f){e[14](f)}function i(f){e[15](f)}let c={};return e[25]!==void 0&&(c.itemData=e[25]),e[0]!==void 0&&(c.slotOpen=e[0]),e[1]!==void 0&&(c.eqSlotName=e[1]),t=new rt({props:c}),N.push(()=>I(t,"itemData",l)),N.push(()=>I(t,"slotOpen",u)),N.push(()=>I(t,"eqSlotName",i)),t.$on("itemSelect",e[8]),{c(){M(t.$$.fragment)},m(f,a){C(t,f,a),r=!0},p(f,a){e=f;const m={};!n&&a&32&&(n=!0,m.itemData=e[25],B(()=>n=!1)),!s&&a&1&&(s=!0,m.slotOpen=e[0],B(()=>s=!1)),!o&&a&2&&(o=!0,m.eqSlotName=e[1],B(()=>o=!1)),t.$set(m)},i(f){r||(y(t.$$.fragment,f),r=!0)},o(f){$(t.$$.fragment,f),r=!1},d(f){j(t,f)}}}function at(e){let t;return{c(){t=b("span"),t.textContent="Loading...",p(t,"class","svelte-coudxr")},m(n,s){O(n,t,s)},p:g,i:g,o:g,d(n){n&&q(t)}}}function ft(e){let t,n,s,o,r={ctx:e,current:null,token:null,hasCatch:!1,pending:at,then:ct,catch:ut,value:24,blocks:[,,,]};return qe(n=e[5],r),{c(){t=b("div"),r.block.c(),p(t,"class","dropdown svelte-coudxr"),W(()=>e[17].call(t)),P(t,"height",`${e[4]*1.25}px`)},m(l,u){O(l,t,u),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null,s=ie(t,e[17].bind(t)),o=!0},p(l,[u]){e=l,r.ctx=e,u&32&&n!==(n=e[5])&&qe(n,r)||nt(r,e,u),u&16&&P(t,"height",`${e[4]*1.25}px`)},i(l){o||(y(r.block),o=!0)},o(l){for(let u=0;u<3;u+=1){const i=r.blocks[u];$(i)}o=!1},d(l){l&&q(t),r.block.d(),r.token=null,r=null,s()}}}function dt(e,t,n){let{eqSlotName:s,slotOpen:o}=t,r,l,u,i,c=`https://raw.githubusercontent.com/XT8SS/fc-sv/main/src/assets/ff-data/${s}.json`,f,a={};const m=fetch(c).then(async h=>{if(h.status!=200){console.error(`Failed to fetch ${s} slot data from ${c}
Response status: ${h.status}`);return}return n(9,f=await h.json()),f}).catch(h=>{console.error(`Failed to initiate ${s} slot data fetch from ${c}
${h}`)});function d(){i&&i.classList.remove("lastItem"),u.classList.remove("no-scrollbar");let h=u.querySelectorAll("li:not(.hidden)");i=h[h.length-1],i&&i.classList.add("lastItem"),h.length<=4&&u.classList.add("no-scrollbar")}function S(h){!h.shiftKey&&h.key=="Tab"&&setTimeout(()=>{l.focus()})}function K(){i&&i.removeEventListener("keydown",S),d(),i&&i.addEventListener("keydown",S)}function _(h){h.shiftKey&&h.key=="Tab"&&setTimeout(()=>{i.querySelector("button").focus()})}function U(h){let G=h.target.value.toLowerCase();for(let x in a)x.toLowerCase().includes(G)?a[x].element.classList.remove("hidden"):a[x].element.classList.add("hidden");K()}function w(h){let G=u.querySelector(".itemSelected");G&&G!=h.detail&&G.classList.remove("itemSelected")}function L(h){N[h?"unshift":"push"](()=>{l=h,n(2,l)})}const Z=h=>_(h),Ae=h=>U(h);function Pe(h,G,x,ve){x[ve]=h,n(5,m)}function Re(h){o=h,n(0,o)}function We(h){s=h,n(1,s)}function Fe(h){N[h?"unshift":"push"](()=>{u=h,n(3,u)})}function He(){r=this.offsetWidth,n(4,r)}return e.$$set=h=>{"eqSlotName"in h&&n(1,s=h.eqSlotName),"slotOpen"in h&&n(0,o=h.slotOpen)},e.$$.update=()=>{if(e.$$.dirty&5&&o&&setTimeout(()=>{l.focus()},25),e.$$.dirty&520&&u){for(let h=0;h<u.childElementCount;h++)a[f[h].name]={element:u.children[h],data:f[h]};d(),K()}},[o,s,l,u,r,m,_,U,w,f,L,Z,Ae,Pe,Re,We,Fe,He]}class mt extends H{constructor(t){super(),F(this,t,dt,ft,D,{eqSlotName:1,slotOpen:0})}}function ht(e){let t,n,s,o,r,l=e[0].charAt(0).toUpperCase()+e[0].slice(1)+"",u,i,c,f,a,m,d,S;function K(w){e[9](w)}function _(w){e[10](w)}let U={};return e[0]!==void 0&&(U.eqSlotName=e[0]),e[4]!==void 0&&(U.slotOpen=e[4]),c=new mt({props:U}),N.push(()=>I(c,"eqSlotName",K)),N.push(()=>I(c,"slotOpen",_)),{c(){t=b("div"),n=b("div"),o=A(),r=b("button"),u=le(l),i=A(),M(c.$$.fragment),p(n,"class","eqSlotIcon svelte-h9zxbi"),W(()=>e[7].call(n)),P(n,"min-width",`${e[3]}px`),p(r,"class","eqSlotDDButton svelte-h9zxbi"),p(t,"class","eqSlotCont svelte-h9zxbi"),p(t,"id",e[0]),R(t,"slotOpen",e[4])},m(w,L){O(w,t,L),v(t,n),e[6](n),s=ie(n,e[7].bind(n)),v(t,o),v(t,r),v(r,u),v(t,i),C(c,t,null),e[11](t),m=!0,d||(S=[k(window,"mousedown",e[5]),k(r,"click",e[8]),k(t,"keydown",e[12])],d=!0)},p(w,[L]){L&8&&P(n,"min-width",`${w[3]}px`),(!m||L&1)&&l!==(l=w[0].charAt(0).toUpperCase()+w[0].slice(1)+"")&&ge(u,l);const Z={};!f&&L&1&&(f=!0,Z.eqSlotName=w[0],B(()=>f=!1)),!a&&L&16&&(a=!0,Z.slotOpen=w[4],B(()=>a=!1)),c.$set(Z),(!m||L&1)&&p(t,"id",w[0]),(!m||L&16)&&R(t,"slotOpen",w[4])},i(w){m||(y(c.$$.fragment,w),m=!0)},o(w){$(c.$$.fragment,w),m=!1},d(w){w&&q(t),e[6](null),s(),j(c),e[11](null),d=!1,z(S)}}}function pt(e,t,n){let{eqSlotName:s}=t,o,r,l,u;const i=_=>{(!o.contains(_.target)||o.contains(_.target)&&_.target==r)&&n(4,u=!1)};function c(_){N[_?"unshift":"push"](()=>{r=_,n(2,r)})}function f(){l=this.offsetHeight,n(3,l)}const a=()=>n(4,u=!u);function m(_){s=_,n(0,s)}function d(_){u=_,n(4,u)}function S(_){N[_?"unshift":"push"](()=>{o=_,n(1,o)})}const K=_=>{_.key=="Escape"&&n(4,u=!1)};return e.$$set=_=>{"eqSlotName"in _&&n(0,s=_.eqSlotName)},[s,o,r,l,u,i,c,f,a,m,d,S,K]}class _t extends H{constructor(t){super(),F(this,t,pt,ht,D,{eqSlotName:0})}}function Le(e,t,n){const s=e.slice();return s[1]=t[n],s[2]=t,s[3]=n,s}function Ee(e){let t,n,s;function o(l){e[0](l,e[1],e[2],e[3])}let r={};return e[1]!==void 0&&(r.eqSlotName=e[1]),t=new _t({props:r}),N.push(()=>I(t,"eqSlotName",o)),{c(){M(t.$$.fragment)},m(l,u){C(t,l,u),s=!0},p(l,u){e=l;const i={};!n&&u&0&&(n=!0,i.eqSlotName=e[1],B(()=>n=!1)),t.$set(i)},i(l){s||(y(t.$$.fragment,l),s=!0)},o(l){$(t.$$.fragment,l),s=!1},d(l){j(t,l)}}}function gt(e){let t,n,s=Y(Array(...$e)),o=[];for(let l=0;l<s.length;l+=1)o[l]=Ee(Le(e,s,l));const r=l=>$(o[l],1,1,()=>{o[l]=null});return{c(){t=b("div");for(let l=0;l<o.length;l+=1)o[l].c();p(t,"class","armorBox svelte-on8pod")},m(l,u){O(l,t,u);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(t,null);n=!0},p(l,[u]){if(u&0){s=Y(Array(...$e));let i;for(i=0;i<s.length;i+=1){const c=Le(l,s,i);o[i]?(o[i].p(c,u),y(o[i],1)):(o[i]=Ee(c),o[i].c(),y(o[i],1),o[i].m(t,null))}for(re(),i=s.length;i<o.length;i+=1)r(i);ue()}},i(l){if(!n){for(let u=0;u<s.length;u+=1)y(o[u]);n=!0}},o(l){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)$(o[u]);n=!1},d(l){l&&q(t),_e(o,l)}}}function bt(e,t,n){function s(o,r,l,u){l[u]=o}return[s]}class wt extends H{constructor(t){super(),F(this,t,bt,gt,D,{})}}function ze(e){let t,n=`${e[1]} Bonus`,s;return{c(){t=b("span"),s=le(n),p(t,"class","statName"),P(t,"font-size",`${e[2]*.7/e[4][e[0]]}px`)},m(o,r){O(o,t,r),v(t,s)},p(o,r){r&2&&n!==(n=`${o[1]} Bonus`)&&ge(s,n),r&5&&P(t,"font-size",`${o[2]*.7/o[4][o[0]]}px`)},d(o){o&&q(t)}}}function vt(e){let t,n,s,o,r,l,u,i,c,f=e[3]&&ze(e);return{c(){t=b("div"),n=b("img"),o=A(),r=b("span"),r.textContent="123",l=A(),f&&f.c(),oe(n.src,s="stats/"+e[0]+".svg")||p(n,"src",s),p(n,"alt",e[1]),p(n,"tabindex","0"),p(n,"class","svelte-rc4y6j"),p(r,"class","statValue svelte-rc4y6j"),R(r,"hidden",e[3]),p(t,"id",e[0]),p(t,"class","svelte-rc4y6j"),W(()=>e[9].call(t))},m(a,m){O(a,t,m),v(t,n),v(t,o),v(t,r),v(t,l),f&&f.m(t,null),u=ie(t,e[9].bind(t)),i||(c=[k(n,"mouseenter",e[5]),k(n,"mouseleave",e[6]),k(n,"focusin",e[7]),k(n,"focusout",e[8])],i=!0)},p(a,[m]){m&1&&!oe(n.src,s="stats/"+a[0]+".svg")&&p(n,"src",s),m&2&&p(n,"alt",a[1]),m&8&&R(r,"hidden",a[3]),a[3]?f?f.p(a,m):(f=ze(a),f.c(),f.m(t,null)):f&&(f.d(1),f=null),m&1&&p(t,"id",a[0])},i:g,o:g,d(a){a&&q(t),f&&f.d(),u(),i=!1,z(c)}}}function St(e,t,n){let{codeName:s,formalName:o}=t,r,l,u={armor:5.725,magicDmg:5.51,meleeDmg:5.545,rangedDmg:6.254,hpRegen:7.131,endurance:7.631,sightRange:8.201,walkSpeed:8.043,height:5.9,jumpPower:8.456,ammoReturn:9.017};const i=()=>n(3,l=!0),c=()=>n(3,l=!1),f=()=>n(3,l=!0),a=()=>n(3,l=!1);function m(){r=this.offsetWidth,n(2,r)}return e.$$set=d=>{"codeName"in d&&n(0,s=d.codeName),"formalName"in d&&n(1,o=d.formalName)},[s,o,r,l,u,i,c,f,a,m]}class yt extends H{constructor(t){super(),F(this,t,St,vt,D,{codeName:0,formalName:1})}}function De(e,t,n){const s=e.slice();return s[2]=t[n][0],s[3]=t[n][1],s[4]=t,s[5]=n,s}function Be(e){let t,n,s,o;function r(i){e[0](i,e[2],e[4],e[5])}function l(i){e[1](i,e[3],e[4],e[5])}let u={};return e[2]!==void 0&&(u.codeName=e[2]),e[3]!==void 0&&(u.formalName=e[3]),t=new yt({props:u}),N.push(()=>I(t,"codeName",r)),N.push(()=>I(t,"formalName",l)),{c(){M(t.$$.fragment)},m(i,c){C(t,i,c),o=!0},p(i,c){e=i;const f={};!n&&c&0&&(n=!0,f.codeName=e[2],B(()=>n=!1)),!s&&c&0&&(s=!0,f.formalName=e[3],B(()=>s=!1)),t.$set(f)},i(i){o||(y(t.$$.fragment,i),o=!0)},o(i){$(t.$$.fragment,i),o=!1},d(i){j(t,i)}}}function qt(e){let t,n,s=Y(Object.entries(pe)),o=[];for(let l=0;l<s.length;l+=1)o[l]=Be(De(e,s,l));const r=l=>$(o[l],1,1,()=>{o[l]=null});return{c(){t=b("div");for(let l=0;l<o.length;l+=1)o[l].c();p(t,"class","statBox svelte-1eotzam")},m(l,u){O(l,t,u);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(t,null);n=!0},p(l,[u]){if(u&0){s=Y(Object.entries(pe));let i;for(i=0;i<s.length;i+=1){const c=De(l,s,i);o[i]?(o[i].p(c,u),y(o[i],1)):(o[i]=Be(c),o[i].c(),y(o[i],1),o[i].m(t,null))}for(re(),i=s.length;i<o.length;i+=1)r(i);ue()}},i(l){if(!n){for(let u=0;u<s.length;u+=1)y(o[u]);n=!0}},o(l){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)$(o[u]);n=!1},d(l){l&&q(t),_e(o,l)}}}function Nt(e,t,n){function s(r,l,u,i){u[i][0]=r}function o(r,l,u,i){u[i][1]=r}return[s,o]}class $t extends H{constructor(t){super(),F(this,t,Nt,qt,D,{})}}function kt(e){let t;return{c(){t=b("div"),p(t,"class","weaponBox svelte-pi4053")},m(n,s){O(n,t,s)},p:g,i:g,o:g,d(n){n&&q(t)}}}class Ot extends H{constructor(t){super(),F(this,t,null,kt,D,{})}}function Lt(e){let t,n,s,o,r,l,u,i,c,f,a,m;return W(e[5]),o=new wt({}),l=new $t({}),i=new Ot({}),{c(){t=b("main"),n=b("div"),s=b("div"),M(o.$$.fragment),r=A(),M(l.$$.fragment),u=A(),M(i.$$.fragment),p(s,"class","eqCont svelte-1qoufe"),p(n,"class","calcBox svelte-1qoufe"),p(t,"class","svelte-1qoufe"),W(()=>e[6].call(t)),R(t,"portrait",!e[3]),P(t,"width",e[3]?`${e[0]*1.56}px`:"75%")},m(d,S){O(d,t,S),v(t,n),v(n,s),C(o,s,null),v(s,r),C(l,s,null),v(n,u),C(i,n,null),c=ie(t,e[6].bind(t)),f=!0,a||(m=[k(window,"resize",e[4]),k(window,"resize",e[5])],a=!0)},p(d,[S]){(!f||S&8)&&R(t,"portrait",!d[3]),S&9&&P(t,"width",d[3]?`${d[0]*1.56}px`:"75%")},i(d){f||(y(o.$$.fragment,d),y(l.$$.fragment,d),y(i.$$.fragment,d),f=!0)},o(d){$(o.$$.fragment,d),$(l.$$.fragment,d),$(i.$$.fragment,d),f=!1},d(d){d&&q(t),j(o),j(l),j(i),c(),a=!1,z(m)}}}function Et(e,t,n){let s,o,r,l;function u(){setTimeout(()=>n(3,l=r>o),10)}Qe(u);function i(){n(1,o=window.outerHeight),n(2,r=window.outerWidth)}function c(){s=this.offsetHeight,n(0,s)}return[s,o,r,l,u,i,c]}class zt extends H{constructor(t){super(),F(this,t,Et,Lt,D,{})}}new zt({target:document.body});
