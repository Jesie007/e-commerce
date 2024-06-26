"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4129],{33071:function(e,t,n){n.d(t,{Ry:function(){return u}});var r=new WeakMap,o=new WeakMap,l={},a=0,i=function(e){return e&&(e.host||i(e.parentNode))},c=function(e,t,n,c){var u=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=i(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});l[n]||(l[n]=new WeakMap);var d=l[n],s=[],f=new Set,p=new Set(u),v=function(e){!e||f.has(e)||(f.add(e),v(e.parentNode))};u.forEach(v);var m=function(e){!e||p.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(c),l=null!==t&&"false"!==t,a=(r.get(e)||0)+1,i=(d.get(e)||0)+1;r.set(e,a),d.set(e,i),s.push(e),1===a&&l&&o.set(e,!0),1===i&&e.setAttribute(n,"true"),l||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),a++,function(){s.forEach(function(e){var t=r.get(e)-1,l=d.get(e)-1;r.set(e,t),d.set(e,l),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),l||e.removeAttribute(n)}),--a||(r=new WeakMap,r=new WeakMap,o=new WeakMap,l={})}},u=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},88375:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(1114).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},16035:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(1114).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},4389:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(1114).Z)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},58879:function(e,t,n){n.d(t,{Z:function(){return H}});var r,o,l=n(97806),a=n(84315),i="right-scroll-bar-position",c="width-before-scroll-bar",u=n(70785),d=(0,n(12248)._)(),s=function(){},f=a.forwardRef(function(e,t){var n=a.useRef(null),r=a.useState({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:s}),o=r[0],i=r[1],c=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,w=e.noIsolation,y=e.inert,b=e.allowPinchZoom,E=e.as,S=(0,l.__rest)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),C=(0,u.q)([n,t]),x=(0,l.__assign)((0,l.__assign)({},S),o);return a.createElement(a.Fragment,null,m&&a.createElement(g,{sideCar:d,removeScrollBar:v,shards:h,noIsolation:w,inert:y,setCallbacks:i,allowPinchZoom:!!b,lockRef:n}),c?a.cloneElement(a.Children.only(f),(0,l.__assign)((0,l.__assign)({},x),{ref:C})):a.createElement(void 0===E?"div":E,(0,l.__assign)({},x,{className:p,ref:C}),f))});f.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},f.classNames={fullWidth:c,zeroRight:i};var p=function(e){var t=e.sideCar,n=(0,l.__rest)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return a.createElement(r,(0,l.__assign)({},n))};p.isSideCarExport=!0;var v=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}())){var l,a;(l=t).styleSheet?l.styleSheet.cssText=r:l.appendChild(document.createTextNode(r)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},m=function(){var e=v();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},h=function(){var e=m();return function(t){return e(t.styles,t.dynamic),null}},g={left:0,top:0,right:0,gap:0},w=function(e){return parseInt(e||"",10)||0},y=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[w(n),w(r),w(o)]},b=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return g;var t=y(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},E=h(),S="data-scroll-locked",C=function(e,t,n,r){var o=e.left,l=e.top,a=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(S,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(l,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(i," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(c," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(i," .").concat(i," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(c," .").concat(c," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(S,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},x=function(){var e=parseInt(document.body.getAttribute(S)||"0",10);return isFinite(e)?e:0},R=function(){a.useEffect(function(){return document.body.setAttribute(S,(x()+1).toString()),function(){var e=x()-1;e<=0?document.body.removeAttribute(S):document.body.setAttribute(S,e.toString())}},[])},_=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;R();var l=a.useMemo(function(){return b(o)},[o]);return a.createElement(E,{styles:C(l,!t,o,n?"":"!important")})},k=!1;if("undefined"!=typeof window)try{var M=Object.defineProperty({},"passive",{get:function(){return k=!0,!0}});window.addEventListener("test",M,M),window.removeEventListener("test",M,M)}catch(e){k=!1}var T=!!k&&{passive:!1},I=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},P=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),A(e,n)){var r=L(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},A=function(e,t){return"v"===e?I(t,"overflowY"):I(t,"overflowX")},L=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},D=function(e,t,n,r,o){var l,a=(l=window.getComputedStyle(t).direction,"h"===e&&"rtl"===l?-1:1),i=a*r,c=n.target,u=t.contains(c),d=!1,s=i>0,f=0,p=0;do{var v=L(e,c),m=v[0],h=v[1]-v[2]-a*m;(m||h)&&A(e,c)&&(f+=h,p+=m),c=c.parentNode}while(!u&&c!==document.body||u&&(t.contains(c)||t===c));return s&&(o&&0===f||!o&&i>f)?d=!0:!s&&(o&&0===p||!o&&-i>p)&&(d=!0),d},N=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},W=function(e){return[e.deltaX,e.deltaY]},Z=function(e){return e&&"current"in e?e.current:e},O=0,V=[],B=(r=function(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(O++)[0],i=a.useState(function(){return h()})[0],c=a.useRef(e);a.useEffect(function(){c.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,l.__spreadArray)([e.lockRef.current],(e.shards||[]).map(Z),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=a.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var o,l=N(e),a=n.current,i="deltaX"in e?e.deltaX:a[0]-l[0],u="deltaY"in e?e.deltaY:a[1]-l[1],d=e.target,s=Math.abs(i)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=P(s,d);if(!f)return!0;if(f?o=s:(o="v"===s?"h":"v",f=P(s,d)),!f)return!1;if(!r.current&&"changedTouches"in e&&(i||u)&&(r.current=o),!o)return!0;var p=r.current||o;return D(p,t,e,"h"===p?i:u,!0)},[]),d=a.useCallback(function(e){if(V.length&&V[V.length-1]===i){var n="deltaY"in e?W(e):N(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(Z).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=a.useCallback(function(e,n,r,o){var l={name:e,delta:n,target:r,should:o};t.current.push(l),setTimeout(function(){t.current=t.current.filter(function(e){return e!==l})},1)},[]),f=a.useCallback(function(e){n.current=N(e),r.current=void 0},[]),p=a.useCallback(function(t){s(t.type,W(t),t.target,u(t,e.lockRef.current))},[]),v=a.useCallback(function(t){s(t.type,N(t),t.target,u(t,e.lockRef.current))},[]);a.useEffect(function(){return V.push(i),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:v}),document.addEventListener("wheel",d,T),document.addEventListener("touchmove",d,T),document.addEventListener("touchstart",f,T),function(){V=V.filter(function(e){return e!==i}),document.removeEventListener("wheel",d,T),document.removeEventListener("touchmove",d,T),document.removeEventListener("touchstart",f,T)}},[]);var m=e.removeScrollBar,g=e.inert;return a.createElement(a.Fragment,null,g?a.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?a.createElement(_,{gapMode:"margin"}):null)},d.useMedium(r),p),F=a.forwardRef(function(e,t){return a.createElement(f,(0,l.__assign)({},e,{ref:t,sideCar:B}))});F.classNames=f.classNames;var H=F},27890:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(84315),o=n(93835),l=n(95493),a=n(43262);function i(e){let t=e+"CollectionProvider",[n,i]=(0,o.b)(t),[c,u]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",s=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,i=u(d,n),c=(0,l.e)(t,i.collectionRef);return r.createElement(a.g7,{ref:c},o)}),f=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),l=r.useRef(new Map).current;return r.createElement(c,{scope:t,itemMap:l,collectionRef:o},n)},Slot:s,ItemSlot:r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,c=r.useRef(null),d=(0,l.e)(t,c),s=u(f,n);return r.useEffect(()=>(s.itemMap.set(c,{ref:c,...i}),()=>void s.itemMap.delete(c))),r.createElement(a.g7,{[p]:"",ref:d},o)})},function(t){let n=u(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},i]}},91536:function(e,t,n){n.d(t,{gm:function(){return l}});var r=n(84315);let o=(0,r.createContext)(void 0);function l(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},56734:function(e,t,n){n.d(t,{EW:function(){return l}});var r=n(84315);let o=0;function l(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:a()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:a()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function a(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},22046:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(15229),l=n(84315),a=n(95493),i=n(7930),c=n(68902);let u="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},f=(0,l.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...w}=e,[y,b]=(0,l.useState)(null),E=(0,c.W)(f),S=(0,c.W)(g),C=(0,l.useRef)(null),x=(0,a.e)(t,e=>b(e)),R=(0,l.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,l.useEffect)(()=>{if(r){function e(e){if(R.paused||!y)return;let t=e.target;y.contains(t)?C.current=t:m(C.current,{select:!0})}function t(e){if(R.paused||!y)return;let t=e.relatedTarget;null===t||y.contains(t)||m(C.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(y)});return y&&n.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,y,R.paused]),(0,l.useEffect)(()=>{if(y){h.add(R);let e=document.activeElement;if(!y.contains(e)){let t=new CustomEvent(u,s);y.addEventListener(u,E),y.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(p(y).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(y))}return()=>{y.removeEventListener(u,E),setTimeout(()=>{let t=new CustomEvent(d,s);y.addEventListener(d,S),y.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),y.removeEventListener(d,S),h.remove(R)},0)}}},[y,E,S,R]);let _=(0,l.useCallback)(e=>{if(!n&&!r||R.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,l]=function(e){let t=p(e);return[v(t,e),v(t.reverse(),e)]}(t);r&&l?e.shiftKey||o!==l?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(l,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,R.paused]);return(0,l.createElement)(i.WV.div,(0,o.Z)({tabIndex:-1},w,{ref:x,onKeyDown:_}))});function p(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},13316:function(e,t,n){n.d(t,{VY:function(){return e_},ZA:function(){return eM},JO:function(){return ex},ck:function(){return eI},wU:function(){return eA},eT:function(){return eP},__:function(){return eT},h_:function(){return eR},fC:function(){return eE},$G:function(){return eD},u_:function(){return eL},Z0:function(){return eN},xz:function(){return eS},B4:function(){return eC},l_:function(){return ek}});var r=n(15229),o=n(84315),l=n(47378);function a(e,[t,n]){return Math.min(n,Math.max(t,e))}var i=n(93293),c=n(27890),u=n(95493),d=n(93835),s=n(91536),f=n(65722),p=n(56734),v=n(22046),m=n(54822),h=n(67021),g=n(6675),w=n(7930),y=n(43262),b=n(68902),E=n(40411),S=n(33505),C=n(64831),x=n(21434),R=n(33071),_=n(58879);let k=[" ","Enter","ArrowUp","ArrowDown"],M=[" ","Enter"],T="Select",[I,P,A]=(0,c.B)(T),[L,D]=(0,d.b)(T,[A,h.D7]),N=(0,h.D7)(),[W,Z]=L(T),[O,V]=L(T),B=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,disabled:l=!1,...a}=e,c=N(n),d=Z("SelectTrigger",n),s=d.disabled||l,f=(0,u.e)(t,d.onTriggerChange),p=P(n),[v,m,g]=ey(e=>{let t=p().filter(e=>!e.disabled),n=t.find(e=>e.value===d.value),r=eb(t,e,n);void 0!==r&&d.onValueChange(r.value)}),y=()=>{s||(d.onOpenChange(!0),g())};return(0,o.createElement)(h.ee,(0,r.Z)({asChild:!0},c),(0,o.createElement)(w.WV.button,(0,r.Z)({type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":eg(d.value)?"":void 0},a,{ref:f,onClick:(0,i.M)(a.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,i.M)(a.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(y(),d.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,i.M)(a.onKeyDown,e=>{let t=""!==v.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&k.includes(e.key)&&(y(),e.preventDefault())})})))}),F=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,className:l,style:a,children:i,placeholder:c="",...d}=e,s=Z("SelectValue",n),{onValueNodeHasChildrenChange:f}=s,p=void 0!==i,v=(0,u.e)(t,s.onValueNodeChange);return(0,S.b)(()=>{f(p)},[f,p]),(0,o.createElement)(w.WV.span,(0,r.Z)({},d,{ref:v,style:{pointerEvents:"none"}}),eg(s.value)?(0,o.createElement)(o.Fragment,null,c):i)}),H=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,children:l,...a}=e;return(0,o.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},a,{ref:t}),l||"▼")}),K="SelectContent",U=(0,o.forwardRef)((e,t)=>{let n=Z(K,e.__scopeSelect),[a,i]=(0,o.useState)();return((0,S.b)(()=>{i(new DocumentFragment)},[]),n.open)?(0,o.createElement)(z,(0,r.Z)({},e,{ref:t})):a?(0,l.createPortal)((0,o.createElement)(q,{scope:e.__scopeSelect},(0,o.createElement)(I.Slot,{scope:e.__scopeSelect},(0,o.createElement)("div",null,e.children))),a):null}),[q,Y]=L(K),z=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,position:l="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:c,onPointerDownOutside:d,side:s,sideOffset:m,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:b,collisionPadding:E,sticky:S,hideWhenDetached:C,avoidCollisions:x,...k}=e,M=Z(K,n),[T,I]=(0,o.useState)(null),[A,L]=(0,o.useState)(null),D=(0,u.e)(t,e=>I(e)),[N,W]=(0,o.useState)(null),[O,V]=(0,o.useState)(null),B=P(n),[F,H]=(0,o.useState)(!1),U=(0,o.useRef)(!1);(0,o.useEffect)(()=>{if(T)return(0,R.Ry)(T)},[T]),(0,p.EW)();let Y=(0,o.useCallback)(e=>{let[t,...n]=B().map(e=>e.ref.current),[r]=n.slice(-1),o=document.activeElement;for(let n of e)if(n===o||(null==n||n.scrollIntoView({block:"nearest"}),n===t&&A&&(A.scrollTop=0),n===r&&A&&(A.scrollTop=A.scrollHeight),null==n||n.focus(),document.activeElement!==o))return},[B,A]),z=(0,o.useCallback)(()=>Y([N,T]),[Y,N,T]);(0,o.useEffect)(()=>{F&&z()},[F,z]);let{onOpenChange:G,triggerPointerDownPosRef:$}=M;(0,o.useEffect)(()=>{if(T){let e={x:0,y:0},t=t=>{var n,r,o,l;e={x:Math.abs(Math.round(t.pageX)-(null!==(n=null===(r=$.current)||void 0===r?void 0:r.x)&&void 0!==n?n:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(l=$.current)||void 0===l?void 0:l.y)&&void 0!==o?o:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():T.contains(n.target)||G(!1),document.removeEventListener("pointermove",t),$.current=null};return null!==$.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}},[T,G,$]),(0,o.useEffect)(()=>{let e=()=>G(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[G]);let[J,Q]=ey(e=>{let t=B().filter(e=>!e.disabled),n=t.find(e=>e.ref.current===document.activeElement),r=eb(t,e,n);r&&setTimeout(()=>r.ref.current.focus())}),ee=(0,o.useCallback)((e,t,n)=>{let r=!U.current&&!n;(void 0!==M.value&&M.value===t||r)&&(W(e),r&&(U.current=!0))},[M.value]),et=(0,o.useCallback)(()=>null==T?void 0:T.focus(),[T]),en=(0,o.useCallback)((e,t,n)=>{let r=!U.current&&!n;(void 0!==M.value&&M.value===t||r)&&V(e)},[M.value]),er="popper"===l?j:X;return(0,o.createElement)(q,{scope:n,content:T,viewport:A,onViewportChange:L,itemRefCallback:ee,selectedItem:N,onItemLeave:et,itemTextRefCallback:en,focusSelectedItem:z,selectedItemText:O,position:l,isPositioned:F,searchRef:J},(0,o.createElement)(_.Z,{as:y.g7,allowPinchZoom:!0},(0,o.createElement)(v.M,{asChild:!0,trapped:M.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,i.M)(a,e=>{var t;null===(t=M.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>M.onOpenChange(!1)},(0,o.createElement)(er,(0,r.Z)({role:"listbox",id:M.contentId,"data-state":M.open?"open":"closed",dir:M.dir,onContextMenu:e=>e.preventDefault()},k,er===j?{side:s,sideOffset:m,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:b,collisionPadding:E,sticky:S,hideWhenDetached:C,avoidCollisions:x}:{},{onPlaced:()=>H(!0),ref:D,style:{display:"flex",flexDirection:"column",outline:"none",...k.style},onKeyDown:(0,i.M)(k.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||Q(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=B().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>Y(t)),e.preventDefault()}})}))))))}),X=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,onPlaced:l,...i}=e,c=Z(K,n),d=Y(K,n),[s,f]=(0,o.useState)(null),[p,v]=(0,o.useState)(null),m=(0,u.e)(t,e=>v(e)),h=P(n),g=(0,o.useRef)(!1),y=(0,o.useRef)(!0),{viewport:b,selectedItem:E,selectedItemText:C,focusSelectedItem:x}=d,R=(0,o.useCallback)(()=>{if(c.trigger&&c.valueNode&&s&&p&&b&&E&&C){let e=c.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),n=c.valueNode.getBoundingClientRect(),r=C.getBoundingClientRect();if("rtl"!==c.dir){let o=r.left-t.left,l=n.left-o,i=e.left-l,c=e.width+i,u=Math.max(c,t.width),d=a(l,[10,window.innerWidth-10-u]);s.style.minWidth=c+"px",s.style.left=d+"px"}else{let o=t.right-r.right,l=window.innerWidth-n.right-o,i=window.innerWidth-e.right-l,c=e.width+i,u=Math.max(c,t.width),d=a(l,[10,window.innerWidth-10-u]);s.style.minWidth=c+"px",s.style.right=d+"px"}let o=h(),i=window.innerHeight-20,u=b.scrollHeight,d=window.getComputedStyle(p),f=parseInt(d.borderTopWidth,10),v=parseInt(d.paddingTop,10),m=parseInt(d.borderBottomWidth,10),w=f+v+u+parseInt(d.paddingBottom,10)+m,y=Math.min(5*E.offsetHeight,w),S=window.getComputedStyle(b),x=parseInt(S.paddingTop,10),R=parseInt(S.paddingBottom,10),_=e.top+e.height/2-10,k=E.offsetHeight/2,M=f+v+(E.offsetTop+k);if(M<=_){let e=E===o[o.length-1].ref.current;s.style.bottom="0px";let t=p.clientHeight-b.offsetTop-b.offsetHeight;s.style.height=M+Math.max(i-_,k+(e?R:0)+t+m)+"px"}else{let e=E===o[0].ref.current;s.style.top="0px";let t=Math.max(_,f+b.offsetTop+(e?x:0)+k);s.style.height=t+(w-M)+"px",b.scrollTop=M-_+b.offsetTop}s.style.margin="10px 0",s.style.minHeight=y+"px",s.style.maxHeight=i+"px",null==l||l(),requestAnimationFrame(()=>g.current=!0)}},[h,c.trigger,c.valueNode,s,p,b,E,C,c.dir,l]);(0,S.b)(()=>R(),[R]);let[_,k]=(0,o.useState)();(0,S.b)(()=>{p&&k(window.getComputedStyle(p).zIndex)},[p]);let M=(0,o.useCallback)(e=>{e&&!0===y.current&&(R(),null==x||x(),y.current=!1)},[R,x]);return(0,o.createElement)(G,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:g,onScrollButtonChange:M},(0,o.createElement)("div",{ref:f,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:_}},(0,o.createElement)(w.WV.div,(0,r.Z)({},i,{ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}}))))}),j=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,align:l="start",collisionPadding:a=10,...i}=e,c=N(n);return(0,o.createElement)(h.VY,(0,r.Z)({},c,i,{ref:t,align:l,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[G,$]=L(K,{}),J="SelectViewport",Q=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e,a=Y(J,n),c=$(J,n),d=(0,u.e)(t,a.onViewportChange),s=(0,o.useRef)(0);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(I.Slot,{scope:n},(0,o.createElement)(w.WV.div,(0,r.Z)({"data-radix-select-viewport":"",role:"presentation"},l,{ref:d,style:{position:"relative",flex:1,overflow:"auto",...l.style},onScroll:(0,i.M)(l.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=c;if(null!=r&&r.current&&n){let e=Math.abs(s.current-t.scrollTop);if(e>0){let r=window.innerHeight-20,o=Math.max(parseFloat(n.style.minHeight),parseFloat(n.style.height));if(o<r){let l=o+e,a=Math.min(r,l),i=l-a;n.style.height=a+"px","0px"===n.style.bottom&&(t.scrollTop=i>0?i:0,n.style.justifyContent="flex-end")}}}s.current=t.scrollTop})}))))}),[ee,et]=L("SelectGroup"),en=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e,a=(0,m.M)();return(0,o.createElement)(ee,{scope:n,id:a},(0,o.createElement)(w.WV.div,(0,r.Z)({role:"group","aria-labelledby":a},l,{ref:t})))}),er=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e,a=et("SelectLabel",n);return(0,o.createElement)(w.WV.div,(0,r.Z)({id:a.id},l,{ref:t}))}),eo="SelectItem",[el,ea]=L(eo),ei=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,value:l,disabled:a=!1,textValue:c,...d}=e,s=Z(eo,n),f=Y(eo,n),p=s.value===l,[v,h]=(0,o.useState)(null!=c?c:""),[g,y]=(0,o.useState)(!1),b=(0,u.e)(t,e=>{var t;return null===(t=f.itemRefCallback)||void 0===t?void 0:t.call(f,e,l,a)}),E=(0,m.M)(),S=()=>{a||(s.onValueChange(l),s.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,o.createElement)(el,{scope:n,value:l,disabled:a,textId:E,isSelected:p,onItemTextChange:(0,o.useCallback)(e=>{h(t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()})},[])},(0,o.createElement)(I.ItemSlot,{scope:n,value:l,disabled:a,textValue:v},(0,o.createElement)(w.WV.div,(0,r.Z)({role:"option","aria-labelledby":E,"data-highlighted":g?"":void 0,"aria-selected":p&&g,"data-state":p?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1},d,{ref:b,onFocus:(0,i.M)(d.onFocus,()=>y(!0)),onBlur:(0,i.M)(d.onBlur,()=>y(!1)),onPointerUp:(0,i.M)(d.onPointerUp,S),onPointerMove:(0,i.M)(d.onPointerMove,e=>{if(a){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,i.M)(d.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}}),onKeyDown:(0,i.M)(d.onKeyDown,e=>{var t;(null===(t=f.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(M.includes(e.key)&&S()," "===e.key&&e.preventDefault())})}))))}),ec="SelectItemText",eu=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,className:a,style:i,...c}=e,d=Z(ec,n),s=Y(ec,n),f=ea(ec,n),p=V(ec,n),[v,m]=(0,o.useState)(null),h=(0,u.e)(t,e=>m(e),f.onItemTextChange,e=>{var t;return null===(t=s.itemTextRefCallback)||void 0===t?void 0:t.call(s,e,f.value,f.disabled)}),g=null==v?void 0:v.textContent,y=(0,o.useMemo)(()=>(0,o.createElement)("option",{key:f.value,value:f.value,disabled:f.disabled},g),[f.disabled,f.value,g]),{onNativeOptionAdd:b,onNativeOptionRemove:E}=p;return(0,S.b)(()=>(b(y),()=>E(y)),[b,E,y]),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(w.WV.span,(0,r.Z)({id:f.textId},c,{ref:h})),f.isSelected&&d.valueNode&&!d.valueNodeHasChildren?(0,l.createPortal)(c.children,d.valueNode):null)}),ed=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e;return ea("SelectItemIndicator",n).isSelected?(0,o.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},l,{ref:t})):null}),es="SelectScrollUpButton",ef=(0,o.forwardRef)((e,t)=>{let n=Y(es,e.__scopeSelect),l=$(es,e.__scopeSelect),[a,i]=(0,o.useState)(!1),c=(0,u.e)(t,l.onScrollButtonChange);return(0,S.b)(()=>{if(n.viewport&&n.isPositioned){let t=n.viewport;function e(){i(t.scrollTop>0)}return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),a?(0,o.createElement)(em,(0,r.Z)({},e,{ref:c,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}})):null}),ep="SelectScrollDownButton",ev=(0,o.forwardRef)((e,t)=>{let n=Y(ep,e.__scopeSelect),l=$(ep,e.__scopeSelect),[a,i]=(0,o.useState)(!1),c=(0,u.e)(t,l.onScrollButtonChange);return(0,S.b)(()=>{if(n.viewport&&n.isPositioned){let t=n.viewport;function e(){let e=t.scrollHeight-t.clientHeight;i(Math.ceil(t.scrollTop)<e)}return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),a?(0,o.createElement)(em,(0,r.Z)({},e,{ref:c,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}})):null}),em=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,onAutoScroll:l,...a}=e,c=Y("SelectScrollButton",n),u=(0,o.useRef)(null),d=P(n),s=(0,o.useCallback)(()=>{null!==u.current&&(window.clearInterval(u.current),u.current=null)},[]);return(0,o.useEffect)(()=>()=>s(),[s]),(0,S.b)(()=>{var e;let t=d().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[d]),(0,o.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},a,{ref:t,style:{flexShrink:0,...a.style},onPointerDown:(0,i.M)(a.onPointerDown,()=>{null===u.current&&(u.current=window.setInterval(l,50))}),onPointerMove:(0,i.M)(a.onPointerMove,()=>{var e;null===(e=c.onItemLeave)||void 0===e||e.call(c),null===u.current&&(u.current=window.setInterval(l,50))}),onPointerLeave:(0,i.M)(a.onPointerLeave,()=>{s()})}))}),eh=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e;return(0,o.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},l,{ref:t}))});function eg(e){return""===e||void 0===e}let ew=(0,o.forwardRef)((e,t)=>{let{value:n,...l}=e,a=(0,o.useRef)(null),i=(0,u.e)(t,a),c=(0,C.D)(n);return(0,o.useEffect)(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(c!==n&&t){let r=new Event("change",{bubbles:!0});t.call(e,n),e.dispatchEvent(r)}},[c,n]),(0,o.createElement)(x.T,{asChild:!0},(0,o.createElement)("select",(0,r.Z)({},l,{ref:i,defaultValue:n})))});function ey(e){let t=(0,b.W)(e),n=(0,o.useRef)(""),r=(0,o.useRef)(0),l=(0,o.useCallback)(e=>{let o=n.current+e;t(o),function e(t){n.current=t,window.clearTimeout(r.current),""!==t&&(r.current=window.setTimeout(()=>e(""),1e3))}(o)},[t]),a=(0,o.useCallback)(()=>{n.current="",window.clearTimeout(r.current)},[]);return(0,o.useEffect)(()=>()=>window.clearTimeout(r.current),[]),[n,l,a]}function eb(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,l=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===o.length&&(l=l.filter(e=>e!==n));let a=l.find(e=>e.textValue.toLowerCase().startsWith(o.toLowerCase()));return a!==n?a:void 0}ew.displayName="BubbleSelect";let eE=e=>{let{__scopeSelect:t,children:n,open:r,defaultOpen:l,onOpenChange:a,value:i,defaultValue:c,onValueChange:u,dir:d,name:f,autoComplete:p,disabled:v,required:g}=e,w=N(t),[y,b]=(0,o.useState)(null),[S,C]=(0,o.useState)(null),[x,R]=(0,o.useState)(!1),_=(0,s.gm)(d),[k=!1,M]=(0,E.T)({prop:r,defaultProp:l,onChange:a}),[T,P]=(0,E.T)({prop:i,defaultProp:c,onChange:u}),A=(0,o.useRef)(null),L=!y||!!y.closest("form"),[D,Z]=(0,o.useState)(new Set),V=Array.from(D).map(e=>e.props.value).join(";");return(0,o.createElement)(h.fC,w,(0,o.createElement)(W,{required:g,scope:t,trigger:y,onTriggerChange:b,valueNode:S,onValueNodeChange:C,valueNodeHasChildren:x,onValueNodeHasChildrenChange:R,contentId:(0,m.M)(),value:T,onValueChange:P,open:k,onOpenChange:M,dir:_,triggerPointerDownPosRef:A,disabled:v},(0,o.createElement)(I.Provider,{scope:t},(0,o.createElement)(O,{scope:e.__scopeSelect,onNativeOptionAdd:(0,o.useCallback)(e=>{Z(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,o.useCallback)(e=>{Z(t=>{let n=new Set(t);return n.delete(e),n})},[])},n)),L?(0,o.createElement)(ew,{key:V,"aria-hidden":!0,required:g,tabIndex:-1,name:f,autoComplete:p,value:T,onChange:e=>P(e.target.value),disabled:v},void 0===T?(0,o.createElement)("option",{value:""}):null,Array.from(D)):null))},eS=B,eC=F,ex=H,eR=e=>(0,o.createElement)(g.h,(0,r.Z)({asChild:!0},e)),e_=U,ek=Q,eM=en,eT=er,eI=ei,eP=eu,eA=ed,eL=ef,eD=ev,eN=eh},64831:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(84315);function o(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}}]);