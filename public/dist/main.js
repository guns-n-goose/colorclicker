var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function e(){}function n(t,e,n,o,c){t.__svelte_meta={loc:{file:e,line:n,column:o,char:c}}}function o(t){return t()}function c(){return Object.create(null)}function g(t){t.forEach(o)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return 0===Object.keys(t).length}new Set;let I=!1;function r(t,e,n,o){for(;t<e;){const c=t+(e-t>>1);n(c)<=o?t=c+1:e=c}return t}function d(t,e){t.appendChild(e)}function a(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function C(t,e){d(t.head||t,e)}function A(t,e){if(I){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const o=e[n];void 0!==o.claim_order&&t.push(o)}e=t}const n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let c=0;for(let t=0;t<e.length;t++){const g=e[t].claim_order,i=(c>0&&e[n[c]].claim_order<=g?c+1:r(1,c,(t=>e[n[t]].claim_order),g))-1;o[t]=n[i]+1;const l=i+1;n[l]=t,c=Math.max(l,c)}const g=[],i=[];let l=e.length-1;for(let t=n[c]+1;0!=t;t=o[t-1]){for(g.push(e[t-1]);l>=t;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);g.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<g.length&&i[e].claim_order>=g[n].claim_order;)n++;const o=n<g.length?g[n]:null;t.insertBefore(i[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function u(t,e,n){I&&!n?A(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function X(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,o,c=!1){X(t);const g=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const g=t[o];if(e(g)){const e=n(g);return void 0===e?t.splice(o,1):t[o]=e,c||(t.claim_info.last_index=o),g}}for(let o=t.claim_info.last_index-1;o>=0;o--){const g=t[o];if(e(g)){const e=n(g);return void 0===e?t.splice(o,1):t[o]=e,c?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=o,g}}return o()})();return g.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,g}function y(t,e,n,o){return G(t,(t=>t.nodeName===e),(t=>{const e=[];for(let o=0;o<t.attributes.length;o++){const c=t.attributes[o];n[c.name]||e.push(c.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>o(e)))}function $(t,e,n){return y(t,e,n,f)}function w(t,e){return G(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>h(e)),!0)}function B(t){return w(t," ")}function _(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}new Map;let Z;function N(t){Z=t}const k=[],D=[],Y=[],V=[],L=Promise.resolve();let J=!1;function S(){J||(J=!0,L.then(j))}function Q(t){Y.push(t)}const W=new Set;let F=0;function j(){const t=Z;do{for(;F<k.length;){const t=k[F];F++,N(t),T(t.$$)}for(N(null),k.length=0,F=0;D.length;)D.pop()();for(let t=0;t<Y.length;t+=1){const e=Y[t];W.has(e)||(W.add(e),e())}Y.length=0}while(k.length);for(;V.length;)V.pop()();J=!1,W.clear(),N(t)}function T(t){if(null!==t.fragment){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}const z=new Set;let R;function E(t,e){t&&t.i&&(z.delete(t),t.i(e))}function M(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),R.c.push((()=>{z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const H="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:t;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let O;function P(t,e,n,c){const{fragment:l,on_mount:s,on_destroy:I,after_update:r}=t.$$;l&&l.m(e,n),c||Q((()=>{const e=s.map(o).filter(i);I?I.push(...e):g(e),t.$$.on_mount=[]})),r.forEach(Q)}function U(t,e){const n=t.$$;null!==n.fragment&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,n,o,i,l,s,r,d=[-1]){const a=Z;N(t);const C=t.$$={fragment:null,ctx:null,props:s,update:e,not_equal:l,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(a?a.$$.context:[])),callbacks:c(),dirty:d,skip_bound:!1,root:n.target||a.$$.root};r&&r(C.root);let A=!1;if(C.ctx=o?o(t,n.props||{},((e,n,...o)=>{const c=o.length?o[0]:n;return C.ctx&&l(C.ctx[e],C.ctx[e]=c)&&(!C.skip_bound&&C.bound[e]&&C.bound[e](c),A&&function(t,e){-1===t.$$.dirty[0]&&(k.push(t),S(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],C.update(),A=!0,g(C.before_update),C.fragment=!!i&&i(C.ctx),n.target){if(n.hydrate){I=!0;const t=v(n.target);C.fragment&&C.fragment.l(t),t.forEach(b)}else C.fragment&&C.fragment.c();n.intro&&E(t.$$.fragment),P(t,n.target,n.anchor,n.customElement),I=!1,j()}N(a)}"function"==typeof HTMLElement&&(O=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(o).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){g(this.$$.on_disconnect)}$destroy(){U(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function q(t,e){document.dispatchEvent(_(t,Object.assign({version:"3.46.4"},e),!0))}function tt(t,e){q("SvelteDOMInsert",{target:t,node:e}),A(t,e)}function et(t,e,n){q("SvelteDOMInsert",{target:t,node:e,anchor:n}),u(t,e,n)}function nt(t){q("SvelteDOMRemove",{node:t}),b(t)}function ot(t,e,n,o,c,g){const i=!0===o?["capture"]:o?Array.from(Object.keys(o)):[];c&&i.push("preventDefault"),g&&i.push("stopPropagation"),q("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:i});const l=m(t,e,n,o);return()=>{q("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:i}),l()}}function ct(t,e,n){x(t,e,n),null==n?q("SvelteDOMRemoveAttribute",{node:t,attribute:e}):q("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function gt(t,e){e=""+e,t.wholeText!==e&&(q("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function it(t,e,n){for(const o of Object.keys(e))~n.indexOf(o)||console.warn(`<${t}> received an unexpected slot "${o}".`)}class lt extends class{$destroy(){U(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}const{console:st}=H,It="src/components/Game.svelte";function rt(t){!function(t,e,n){const o=a(t);if(!o.getElementById(e)){const t=f("style");t.id=e,t.textContent=n,C(o,t)}}(t,"svelte-12he92z","#div1.svelte-12he92z{position:fixed;width:100%;height:100%;top:0px;left:0px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5zdmVsdGUiLCJzb3VyY2VzIjpbIkdhbWUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgbGV0IGJDb2wgPSBbXTtcbiAgICBleHBvcnQgZnVuY3Rpb24gbXlmdW5jKHBhcmExKSB7XG4gICAgICAgIHNldENvbG9yKCk7XG4gICAgICAgIC8vYkNvbDEgPSBcImJsYWNrXCI7XG4gICAgICAgIGFsZXJ0KHBhcmExKTtcbiAgICB9XG4gICAgbGV0IGNvbG9yTGlzdCA9IFtcbiAgICAgICAgXCJvcmFuZ2VcIixcbiAgICAgICAgXCJyZWRcIixcbiAgICAgICAgXCJ5ZWxsb3dcIixcbiAgICAgICAgXCJncmVlblwiLFxuICAgICAgICBcImJsdWVcIixcbiAgICAgICAgXCJwdXJwbGVcIixcbiAgICAgICAgXCJwaW5rXCIsXG4gICAgICAgIFwiZ3JheVwiLFxuICAgIF07XG4gICAgZnVuY3Rpb24gc2V0Q29sb3IoKSB7XG4gICAgICAgIGxldCBhdmFpbGFibGVDb2xvcnMgPSBjb2xvckxpc3Quc2xpY2UoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByYW5kTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29sb3JzLmxlbmd0aCk7XG4gICAgICAgICAgICBiQ29sW2ldID0gYXZhaWxhYmxlQ29sb3JzW3JhbmROdW1iZXJdO1xuICAgICAgICAgICAgYXZhaWxhYmxlQ29sb3JzLnNwbGljZShyYW5kTnVtYmVyLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhdmFpbGFibGVDb2xvcnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb2xvckxpc3QpO1xuICAgIH1cbiAgICBzZXRDb2xvcigpO1xuPC9zY3JpcHQ+XG5cbjxkaXYgaWQ9XCJkaXYxXCIgY2xhc3M9XCJiZy1ncmFkaWVudC10by1yIGZyb20tdGVhbC00MDAgdG8tYmx1ZS01MDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWF4LXctc20gcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9udC1zYW5zIHRleHQtbGcgdGV4dC1ncmF5LTgwMCB0ZXh0LWNlbnRlclwiPkNsaWNrIG9uIFJlZDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz1cImJnLXtiQ29sWzBdfS01MDAgaG92ZXI6Ymcte2JDb2xbMF19LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IG15ZnVuYyhiQ29sWzBdKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YkNvbFswXX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmcte2JDb2xbMV19LTUwMCBob3ZlcjpiZy17YkNvbFsxXX0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gbXlmdW5jKGJDb2xbMV0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtiQ29sWzFdfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiZy17YkNvbFsyXX0tNTAwIGhvdmVyOmJnLXtiQ29sWzJdfS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBteWZ1bmMoYkNvbFsyXSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2JDb2xbMl19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz1cImJnLXtiQ29sWzNdfS01MDAgaG92ZXI6Ymcte2JDb2xbM119LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IG15ZnVuYyhiQ29sWzNdKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YkNvbFszXX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmcte2JDb2xbNF19LTUwMCBob3ZlcjpiZy17YkNvbFs0XX0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gbXlmdW5jKGJDb2xbNF0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtiQ29sWzRdfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiZy17YkNvbFs1XX0tNTAwIGhvdmVyOmJnLXtiQ29sWzVdfS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBteWZ1bmMoYkNvbFs1XSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2JDb2xbNV19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz1cImJnLXtiQ29sWzZdfS01MDAgaG92ZXI6Ymcte2JDb2xbNl19LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IG15ZnVuYyhiQ29sWzZdKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YkNvbFs2XX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmcte2JDb2xbN119LTUwMCBob3ZlcjpiZy17YkNvbFs3XX0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gbXlmdW5jKGJDb2xbN10pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtiQ29sWzddfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgICAjZGl2MSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGSSxLQUFLLGVBQUMsQ0FBQyxBQUNILFFBQVEsQ0FBRSxLQUFLLENBQ2YsS0FBSyxDQUFFLElBQUksQ0FDWCxNQUFNLENBQUUsSUFBSSxDQUNaLEdBQUcsQ0FBRSxHQUFHLENBQ1IsSUFBSSxDQUFFLEdBQUcsQUFDYixDQUFDIn0= */")}function dt(t){let o,c,i,l,s,I,r,d,a,C,A,u,b,m,x,X,G,y,_,Z,N,k,D,Y,V,L,J,S,Q,W,F,j,T,z,R,E,M,H,O,P=t[1][0]+"",U=t[1][1]+"",K=t[1][2]+"",it=t[1][3]+"",lt=t[1][4]+"",st=t[1][5]+"",rt=t[1][6]+"",at=t[1][7]+"";const Ct={c:function(){o=f("div"),c=f("div"),i=f("p"),l=h("Click on Red"),s=p(),I=f("div"),r=f("button"),d=h(P),C=p(),A=f("button"),u=h(U),m=p(),x=f("button"),X=h(K),y=p(),_=f("button"),Z=h(it),k=p(),D=f("button"),Y=h(lt),L=p(),J=f("button"),S=h(st),W=p(),F=f("button"),j=h(rt),z=p(),R=f("button"),E=h(at),this.h()},l:function(t){o=$(t,"DIV",{id:!0,class:!0});var e=v(o);c=$(e,"DIV",{class:!0});var n=v(c);i=$(n,"P",{class:!0});var g=v(i);l=w(g,"Click on Red"),g.forEach(nt),s=B(n),I=$(n,"DIV",{class:!0});var a=v(I);r=$(a,"BUTTON",{class:!0});var b=v(r);d=w(b,P),b.forEach(nt),C=B(a),A=$(a,"BUTTON",{class:!0});var f=v(A);u=w(f,U),f.forEach(nt),m=B(a),x=$(a,"BUTTON",{class:!0});var h=v(x);X=w(h,K),h.forEach(nt),y=B(a),_=$(a,"BUTTON",{class:!0});var p=v(_);Z=w(p,it),p.forEach(nt),k=B(a),D=$(a,"BUTTON",{class:!0});var G=v(D);Y=w(G,lt),G.forEach(nt),L=B(a),J=$(a,"BUTTON",{class:!0});var N=v(J);S=w(N,st),N.forEach(nt),W=B(a),F=$(a,"BUTTON",{class:!0});var V=v(F);j=w(V,rt),V.forEach(nt),z=B(a),R=$(a,"BUTTON",{class:!0});var Q=v(R);E=w(Q,at),Q.forEach(nt),a.forEach(nt),n.forEach(nt),e.forEach(nt),this.h()},h:function(){ct(i,"class","font-sans text-lg text-gray-800 text-center"),n(i,It,32,8,847),ct(r,"class",a="bg-"+t[1][0]+"-500 hover:bg-"+t[1][0]+"-700 text-white font-bold py-2 px-4 rounded"),n(r,It,34,12,976),ct(A,"class",b="bg-"+t[1][1]+"-500 hover:bg-"+t[1][1]+"-700 text-white font-bold py-2 px-4 rounded"),n(A,It,40,12,1210),ct(x,"class",G="bg-"+t[1][2]+"-500 hover:bg-"+t[1][2]+"-700 text-white font-bold py-2 px-4 rounded"),n(x,It,46,12,1444),ct(_,"class",N="bg-"+t[1][3]+"-500 hover:bg-"+t[1][3]+"-700 text-white font-bold py-2 px-4 rounded"),n(_,It,52,12,1678),ct(D,"class",V="bg-"+t[1][4]+"-500 hover:bg-"+t[1][4]+"-700 text-white font-bold py-2 px-4 rounded"),n(D,It,58,12,1912),ct(J,"class",Q="bg-"+t[1][5]+"-500 hover:bg-"+t[1][5]+"-700 text-white font-bold py-2 px-4 rounded"),n(J,It,64,12,2146),ct(F,"class",T="bg-"+t[1][6]+"-500 hover:bg-"+t[1][6]+"-700 text-white font-bold py-2 px-4 rounded"),n(F,It,70,12,2380),ct(R,"class",M="bg-"+t[1][7]+"-500 hover:bg-"+t[1][7]+"-700 text-white font-bold py-2 px-4 rounded"),n(R,It,76,12,2614),ct(I,"class","grid grid-cols-2 gap-4"),n(I,It,33,8,927),ct(c,"class","max-w-sm rounded overflow-hidden shadow-lg"),n(c,It,31,4,782),ct(o,"id","div1"),ct(o,"class","bg-gradient-to-r from-teal-400 to-blue-500 svelte-12he92z"),n(o,It,30,0,711)},m:function(e,n){et(e,o,n),tt(o,c),tt(c,i),tt(i,l),tt(c,s),tt(c,I),tt(I,r),tt(r,d),tt(I,C),tt(I,A),tt(A,u),tt(I,m),tt(I,x),tt(x,X),tt(I,y),tt(I,_),tt(_,Z),tt(I,k),tt(I,D),tt(D,Y),tt(I,L),tt(I,J),tt(J,S),tt(I,W),tt(I,F),tt(F,j),tt(I,z),tt(I,R),tt(R,E),H||(O=[ot(r,"click",t[2],!1,!1,!1),ot(A,"click",t[3],!1,!1,!1),ot(x,"click",t[4],!1,!1,!1),ot(_,"click",t[5],!1,!1,!1),ot(D,"click",t[6],!1,!1,!1),ot(J,"click",t[7],!1,!1,!1),ot(F,"click",t[8],!1,!1,!1),ot(R,"click",t[9],!1,!1,!1)],H=!0)},p:function(t,[e]){2&e&&P!==(P=t[1][0]+"")&&gt(d,P),2&e&&a!==(a="bg-"+t[1][0]+"-500 hover:bg-"+t[1][0]+"-700 text-white font-bold py-2 px-4 rounded")&&ct(r,"class",a),2&e&&U!==(U=t[1][1]+"")&&gt(u,U),2&e&&b!==(b="bg-"+t[1][1]+"-500 hover:bg-"+t[1][1]+"-700 text-white font-bold py-2 px-4 rounded")&&ct(A,"class",b),2&e&&K!==(K=t[1][2]+"")&&gt(X,K),2&e&&G!==(G="bg-"+t[1][2]+"-500 hover:bg-"+t[1][2]+"-700 text-white font-bold py-2 px-4 rounded")&&ct(x,"class",G),2&e&&it!==(it=t[1][3]+"")&&gt(Z,it),2&e&&N!==(N="bg-"+t[1][3]+"-500 hover:bg-"+t[1][3]+"-700 text-white font-bold py-2 px-4 rounded")&&ct(_,"class",N),2&e&&lt!==(lt=t[1][4]+"")&&gt(Y,lt),2&e&&V!==(V="bg-"+t[1][4]+"-500 hover:bg-"+t[1][4]+"-700 text-white font-bold py-2 px-4 rounded")&&ct(D,"class",V),2&e&&st!==(st=t[1][5]+"")&&gt(S,st),2&e&&Q!==(Q="bg-"+t[1][5]+"-500 hover:bg-"+t[1][5]+"-700 text-white font-bold py-2 px-4 rounded")&&ct(J,"class",Q),2&e&&rt!==(rt=t[1][6]+"")&&gt(j,rt),2&e&&T!==(T="bg-"+t[1][6]+"-500 hover:bg-"+t[1][6]+"-700 text-white font-bold py-2 px-4 rounded")&&ct(F,"class",T),2&e&&at!==(at=t[1][7]+"")&&gt(E,at),2&e&&M!==(M="bg-"+t[1][7]+"-500 hover:bg-"+t[1][7]+"-700 text-white font-bold py-2 px-4 rounded")&&ct(R,"class",M)},i:e,o:e,d:function(t){t&&nt(o),H=!1,g(O)}};return q("SvelteRegisterBlock",{block:Ct,id:dt.name,type:"component",source:"",ctx:t}),Ct}function at(t,e,n){let{$$slots:o={},$$scope:c}=e;it("Game",o,[]);let g=[];function i(t){s(),alert(t)}let l=["orange","red","yellow","green","blue","purple","pink","gray"];function s(){let t=l.slice();for(let e=0;e<8;e++){let o=Math.floor(Math.random()*t.length);n(1,g[e]=t[o],g),t.splice(o,1)}console.log(t),console.log(l)}s();const I=[];Object.keys(e).forEach((t=>{~I.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||st.warn(`<Game> was created with unknown prop '${t}'`)}));return t.$capture_state=()=>({bCol:g,myfunc:i,colorList:l,setColor:s}),t.$inject_state=t=>{"bCol"in t&&n(1,g=t.bCol),"colorList"in t&&(l=t.colorList)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[i,g,()=>i(g[0]),()=>i(g[1]),()=>i(g[2]),()=>i(g[3]),()=>i(g[4]),()=>i(g[5]),()=>i(g[6]),()=>i(g[7])]}class Ct extends lt{constructor(t){super(t),K(this,t,at,dt,l,{myfunc:0},rt),q("SvelteRegisterComponent",{component:this,tagName:"Game",options:t,id:dt.name})}get myfunc(){return this.$$.ctx[0]}set myfunc(t){throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function At(t){let o,c,g;c=new Ct({$$inline:!0});const i={c:function(){o=f("div"),function(t){t&&t.c()}(c.$$.fragment),this.h()},l:function(t){o=$(t,"DIV",{});var e=v(o);!function(t,e){t&&t.l(e)}(c.$$.fragment,e),e.forEach(nt),this.h()},h:function(){n(o,"src/App.svelte",5,0,83)},m:function(t,e){et(t,o,e),P(c,o,null),g=!0},p:e,i:function(t){g||(E(c.$$.fragment,t),g=!0)},o:function(t){M(c.$$.fragment,t),g=!1},d:function(t){t&&nt(o),U(c)}};return q("SvelteRegisterBlock",{block:i,id:At.name,type:"component",source:"",ctx:t}),i}function ut(t,e,n){let{$$slots:o={},$$scope:c}=e;it("App",o,[]);let g=0;const i=[];return Object.keys(e).forEach((t=>{~i.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(`<App> was created with unknown prop '${t}'`)})),t.$capture_state=()=>({Game:Ct,const3:g}),t.$inject_state=t=>{"const3"in t&&(g=t.const3)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[]}new class extends lt{constructor(t){super(t),K(this,t,ut,At,l,{}),q("SvelteRegisterComponent",{component:this,tagName:"App",options:t,id:At.name})}}({target:document.querySelector("#__snel"),props:{}});
//# sourceMappingURL=main.js.map
