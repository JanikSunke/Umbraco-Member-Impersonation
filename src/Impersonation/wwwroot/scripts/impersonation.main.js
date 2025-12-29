(()=>{var dl=Object.defineProperty;var Pd=Object.getOwnPropertyDescriptor;var kd=(e,t,r)=>t in e?dl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ce=(e,t,r,n)=>{for(var o=n>1?void 0:n?Pd(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&dl(t,r,o),o};var cl=(e,t,r)=>kd(e,typeof t!="symbol"?t+"":t,r);var kn=globalThis,In=kn.ShadowRoot&&(kn.ShadyCSS===void 0||kn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ha=Symbol(),hl=new WeakMap,Ro=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==ha)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(In&&t===void 0){let n=r!==void 0&&r.length===1;n&&(t=hl.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&hl.set(r,t))}return t}toString(){return this.cssText}},Be=e=>new Ro(typeof e=="string"?e:e+"",void 0,ha),u=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((n,o,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Ro(r,e,ha)},ml=(e,t)=>{if(In)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of t){let n=document.createElement("style"),o=kn.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},ma=In?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let n of t.cssRules)r+=n.cssText;return Be(r)})(e):e;var{is:Id,defineProperty:Bd,getOwnPropertyDescriptor:Md,getOwnPropertyNames:Gd,getOwnPropertySymbols:_d,getPrototypeOf:Cd}=Object,Rt=globalThis,yl=Rt.trustedTypes,Od=yl?yl.emptyScript:"",Sd=Rt.reactiveElementPolyfillSupport,Po=(e,t)=>e,ko={toAttribute(e,t){switch(t){case Boolean:e=e?Od:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Bn=(e,t)=>!Id(e,t),bl={attribute:!0,type:String,converter:ko,reflect:!1,useDefault:!1,hasChanged:Bn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Rt.litPropertyMetadata??(Rt.litPropertyMetadata=new WeakMap);var st=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=bl){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Bd(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){let{get:o,set:s}=Md(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get:o,set(a){let p=o?.call(this);s?.call(this,a),this.requestUpdate(t,p,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??bl}static _$Ei(){if(this.hasOwnProperty(Po("elementProperties")))return;let t=Cd(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Po("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Po("properties"))){let r=this.properties,n=[...Gd(r),..._d(r)];for(let o of n)this.createProperty(o,r[o])}let t=this[Symbol.metadata];if(t!==null){let r=litPropertyMetadata.get(t);if(r!==void 0)for(let[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[r,n]of this.elementProperties){let o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)r.unshift(ma(o))}else t!==void 0&&r.push(ma(t));return r}static _$Eu(t,r){let n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,r=this.constructor.elementProperties;for(let n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ml(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:ko).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ko;this._$Em=o;let p=a.fromAttribute(r,s.type);this[o]=p??this._$Ej?.get(o)??p,this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){let o=this.constructor,s=this[t];if(n??(n=o.getPropertyOptions(t)),!((n.hasChanged??Bn)(s,r)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:s},a){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??r??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:a}=s,p=this[o];a!==!0||this._$AL.has(o)||p===void 0||this.C(o,void 0,s,p)}}let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};st.elementStyles=[],st.shadowRootOptions={mode:"open"},st[Po("elementProperties")]=new Map,st[Po("finalized")]=new Map,Sd?.({ReactiveElement:st}),(Rt.reactiveElementVersions??(Rt.reactiveElementVersions=[])).push("2.1.1");var Bo=globalThis,Mn=Bo.trustedTypes,gl=Mn?Mn.createPolicy("lit-html",{createHTML:e=>e}):void 0,ba="$lit$",at=`lit$${Math.random().toFixed(9).slice(2)}$`,ga="?"+at,Ad=`<${ga}>`,er=document,Mo=()=>er.createComment(""),Go=e=>e===null||typeof e!="object"&&typeof e!="function",fa=Array.isArray,El=e=>fa(e)||typeof e?.[Symbol.iterator]=="function",ya=`[ 	
\f\r]`,Io=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fl=/-->/g,vl=/>/g,Zt=RegExp(`>|${ya}(?:([^\\s"'>=/]+)(${ya}*=${ya}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wl=/'/g,xl=/"/g,Tl=/^(?:script|style|textarea|title)$/i,va=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),l=va(1),v=va(2),Rl=va(3),H=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),Dl=new WeakMap,Jt=er.createTreeWalker(er,129);function Pl(e,t){if(!fa(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return gl!==void 0?gl.createHTML(t):t}var kl=(e,t)=>{let r=e.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",a=Io;for(let p=0;p<r;p++){let c=e[p],y,f,m=-1,T=0;for(;T<c.length&&(a.lastIndex=T,f=a.exec(c),f!==null);)T=a.lastIndex,a===Io?f[1]==="!--"?a=fl:f[1]!==void 0?a=vl:f[2]!==void 0?(Tl.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=Zt):f[3]!==void 0&&(a=Zt):a===Zt?f[0]===">"?(a=o??Io,m=-1):f[1]===void 0?m=-2:(m=a.lastIndex-f[2].length,y=f[1],a=f[3]===void 0?Zt:f[3]==='"'?xl:wl):a===xl||a===wl?a=Zt:a===fl||a===vl?a=Io:(a=Zt,o=void 0);let g=a===Zt&&e[p+1].startsWith("/>")?" ":"";s+=a===Io?c+Ad:m>=0?(n.push(y),c.slice(0,m)+ba+c.slice(m)+at+g):c+at+(m===-2?p:g)}return[Pl(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},_o=class e{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let s=0,a=0,p=t.length-1,c=this.parts,[y,f]=kl(t,r);if(this.el=e.createElement(y,n),Jt.currentNode=this.el.content,r===2||r===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=Jt.nextNode())!==null&&c.length<p;){if(o.nodeType===1){if(o.hasAttributes())for(let m of o.getAttributeNames())if(m.endsWith(ba)){let T=f[a++],g=o.getAttribute(m).split(at),R=/([.?@])?(.*)/.exec(T);c.push({type:1,index:s,name:R[2],strings:g,ctor:R[1]==="."?_n:R[1]==="?"?Cn:R[1]==="@"?On:rr}),o.removeAttribute(m)}else m.startsWith(at)&&(c.push({type:6,index:s}),o.removeAttribute(m));if(Tl.test(o.tagName)){let m=o.textContent.split(at),T=m.length-1;if(T>0){o.textContent=Mn?Mn.emptyScript:"";for(let g=0;g<T;g++)o.append(m[g],Mo()),Jt.nextNode(),c.push({type:2,index:++s});o.append(m[T],Mo())}}}else if(o.nodeType===8)if(o.data===ga)c.push({type:2,index:s});else{let m=-1;for(;(m=o.data.indexOf(at,m+1))!==-1;)c.push({type:7,index:s}),m+=at.length-1}s++}}static createElement(t,r){let n=er.createElement("template");return n.innerHTML=t,n}};function tr(e,t,r=e,n){if(t===H)return t;let o=n!==void 0?r._$Co?.[n]:r._$Cl,s=Go(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=tr(e,o._$AS(e,t.values),o,n)),t}var Gn=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:r},parts:n}=this._$AD,o=(t?.creationScope??er).importNode(r,!0);Jt.currentNode=o;let s=Jt.nextNode(),a=0,p=0,c=n[0];for(;c!==void 0;){if(a===c.index){let y;c.type===2?y=new Rr(s,s.nextSibling,this,t):c.type===1?y=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(y=new Sn(s,this,t)),this._$AV.push(y),c=n[++p]}a!==c?.index&&(s=Jt.nextNode(),a++)}return Jt.currentNode=er,o}p(t){let r=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}},Rr=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=tr(this,t,r),Go(t)?t===D||t==null||t===""?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):El(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==D&&Go(this._$AH)?this._$AA.nextSibling.data=t:this.T(er.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=_o.createElement(Pl(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{let s=new Gn(o,this),a=s.u(this.options);s.p(r),this.T(a),this._$AH=s}}_$AC(t){let r=Dl.get(t.strings);return r===void 0&&Dl.set(t.strings,r=new _o(t)),r}k(t){fa(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,n,o=0;for(let s of t)o===r.length?r.push(n=new e(this.O(Mo()),this.O(Mo()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},rr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,s){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=D}_$AI(t,r=this,n,o){let s=this.strings,a=!1;if(s===void 0)t=tr(this,t,r,0),a=!Go(t)||t!==this._$AH&&t!==H,a&&(this._$AH=t);else{let p=t,c,y;for(t=s[0],c=0;c<s.length-1;c++)y=tr(this,p[n+c],r,c),y===H&&(y=this._$AH[c]),a||(a=!Go(y)||y!==this._$AH[c]),y===D?t=D:t!==D&&(t+=(y??"")+s[c+1]),this._$AH[c]=y}a&&!o&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},_n=class extends rr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}},Cn=class extends rr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}},On=class extends rr{constructor(t,r,n,o,s){super(t,r,n,o,s),this.type=5}_$AI(t,r=this){if((t=tr(this,t,r,0)??D)===H)return;let n=this._$AH,o=t===D&&n!==D||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==D&&(n===D||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Sn=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){tr(this,t)}},Il={M:ba,P:at,A:ga,C:1,L:kl,R:Gn,D:El,V:tr,I:Rr,H:rr,N:Cn,U:On,B:_n,F:Sn},Ud=Bo.litHtmlPolyfillSupport;Ud?.(_o,Rr),(Bo.litHtmlVersions??(Bo.litHtmlVersions=[])).push("3.3.1");var Bl=(e,t,r)=>{let n=r?.renderBefore??t,o=n._$litPart$;if(o===void 0){let s=r?.renderBefore??null;n._$litPart$=o=new Rr(t.insertBefore(Mo(),s),s,void 0,r??{})}return o._$AI(e),o};var Co=globalThis,h=class extends st{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;let t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};h._$litElement$=!0,h.finalized=!0,Co.litElementHydrateSupport?.({LitElement:h});var $d=Co.litElementPolyfillSupport;$d?.({LitElement:h});(Co.litElementVersions??(Co.litElementVersions=[])).push("4.2.1");var Ld=`.uui-h1,
.uui-h2,
.uui-h3,
.uui-h4,
.uui-h5,
.uui-a,
.uui-p,
.uui-p-lead,
.uui-small,
.uui-quoteblock,
.uui-ul,
.uui-ol,
.uui-text {
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
}

.uui-text h1,
.uui-h1.uui-h1 {
  font-size: var(--uui-type-h1-size,60px);
  line-height: var(--uui-size-layout-4,66px);
  font-weight: 300;
  margin-left: -5px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h1,
.uui-text p + .uui-h1 {
  margin-top: var(--uui-size-layout-4,66px);
}

.uui-text h1.--no-top-margin,
.uui-text h1:first-child,
.uui-h1.--no-top-margin,
.uui-h1:first-child {
  margin-top: 0;
}

.uui-text h2,
.uui-h2.uui-h2 {
  font-size: var(--uui-type-h2-size,42px);
  line-height: var(--uui-size-layout-3,42px);
  font-weight: 300;
  margin-left: -3px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h2,
.uui-text p + .uui-h2 {
  margin-top: var(--uui-size-layout-3,42px);
}

.uui-text h2.--no-top-margin,
.uui-text h2:first-child,
.uui-h2.--no-top-margin,
.uui-h2:first-child {
  margin-top: 0;
}

.uui-text h3,
.uui-h3.uui-h3 {
  font-size: var(--uui-type-h3-size,30px);
  line-height: var(--uui-size-large);
  font-weight: 300;
  margin-left: -2px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h3.--no-top-margin,
.uui-text h3:first-child,
.uui-h3.--no-top-margin,
.uui-h3:first-child {
  margin-top: 0;
}

.uui-text h4,
.uui-h4.uui-h4 {
  font-size: var(--uui-type-h4-size,21px);
  line-height: 21px;
  font-weight: 400;
  margin-left: -1px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h4.--no-top-margin,
.uui-text h4:first-child,
.uui-h4.--no-top-margin,
.uui-h4:first-child {
  margin-top: 0;
}

.uui-text h5,
.uui-h5.uui-h5 {
  font-size: var(--uui-type-h5-size,14px);
  line-height: inherit;
  font-weight: 700;
  margin-left: 0;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: 0;
}

.uui-text h5.--no-top-margin,
.uui-text h5:first-child,
.uui-h5.--no-top-margin,
.uui-h5:first-child {
  margin-top: 0;
}

.uui-p,
.uui-text p {
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-p-lead,
.uui-text p.uui-lead {
  font-size: var(--uui-size-6,18px);
  line-height: var(--uui-size-8,24px);
}

.uui-a,
.uui-text a {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:link,
.uui-a:active .uui-text a:link,
.uui-text a:active {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:hover,
.uui-text a:hover {
  color: var(--uui-color-interactive-emphasis,#3544b1);
}

.uui-small,
.uui-text small {
  display: inline-block;
  font-size: var(--uui-type-small-size,12px);
  line-height: 18px;
}

.uui-quoteblock,
.uui-text blockquote {
  float: right;
  font-size: 14px;
  line-height: inherit;
  font-weight: 700;
  font-style: italic;
  margin-top: 0;
  margin-bottom: var(--uui-size-layout-1,24px);
  margin-right: -0.035em;
  max-width: 16em;
  quotes: '\u201C' '\u201D' '\u2018' '\u2019';
}

.uui-quoteblock:before,
.uui-text blockquote:before {
  content: open-quote;
  margin-left: -0.4em;
  margin-right: 0.08em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
}

.uui-quoteblock:after,
.uui-text blockquote:after {
  content: close-quote;
  margin-left: 0.04em;
  margin-right: -0.4em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
  margin-bottom: -2px;
  display: inline-block;
}

.uui-ul,
.uui-text ul {
  list-style-type: square;
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-ol,
.uui-text ol {
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
`,je=Be(Ld);var We=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var Vd={attribute:!0,type:String,converter:ko,reflect:!1,hasChanged:Bn},Fd=(e=Vd,t,r)=>{let{kind:n,metadata:o}=r,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),n==="accessor"){let{name:a}=r;return{set(p){let c=t.get.call(this);t.set.call(this,p),this.requestUpdate(a,c,e)},init(p){return p!==void 0&&this.C(a,void 0,e,p),p}}}if(n==="setter"){let{name:a}=r;return function(p){let c=this[a];t.call(this,p),this.requestUpdate(a,c,e)}}throw Error("Unsupported decorator location: "+n)};function i(e){return(t,r)=>typeof r=="object"?Fd(e,t,r):((n,o,s)=>{let a=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),a?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,r)}function b(e){return i({...e,state:!0,attribute:!1})}var it=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function P(e,t){return(r,n,o)=>{let s=a=>a.renderRoot?.querySelector(e)??null;if(t){let{get:a,set:p}=typeof n=="object"?r:o??(()=>{let c=Symbol();return{get(){return this[c]},set(y){this[c]=y}}})();return it(r,n,{get(){let c=a.call(this);return c===void 0&&(c=s(this),(c!==null||this.hasUpdated)&&p.call(this,c)),c}})}return it(r,n,{get(){return s(this)}})}}var qd;function Ml(e){return(t,r)=>it(t,r,{get(){return(this.renderRoot??qd??(qd=document.createDocumentFragment())).querySelectorAll(e)}})}function he(e){return(t,r)=>{let{slot:n,selector:o}=e??{},s="slot"+(n?`[name=${n}]`:":not([name])");return it(t,r,{get(){let a=this.renderRoot?.querySelector(s),p=a?.assignedElements(e)??[];return o===void 0?p:p.filter(c=>c.matches(o))}})}}var Kf=u`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,Xf=Be("uui-blink 0.9s infinite both"),Yf=u`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`,Zf=Be("pulse 0.8s ease-in-out infinite both"),Jf=u`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`,ev=Be("uui-horizontal-shake 600ms ease backwards"),An=class extends Event{constructor(t,r={}){super(t,{...r}),this.detail=r.detail||{}}},Un=class extends An{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Un.VALID="valid";Un.INVALID="invalid";var $n=class extends An{constructor(t,r={}){super(t,{bubbles:!0,cancelable:!0,...r})}};$n.SELECTED="selected";$n.DESELECTED="deselected";function d(e,t){return r=>{if(e.indexOf("-")>0===!1){console.error(`${e} is not a valid custom element name. A custom element name should consist of at least two words separated by a hyphen.`);return}window.customElements.get(e)||window.customElements.define(e,r,t)}}var Nd=Object.getOwnPropertyDescriptor,zd=(e,t,r,n)=>{for(var o=n>1?void 0:n?Nd(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},Pr=class extends h{render(){return l`<slot></slot>`}};Pr.styles=[u`
      :host {
        display: inline-flex;
        align-items: stretch;
      }

      ::slotted(*) {
        --uui-button-border-radius: 0;
        flex-grow: 1;
      }

      ::slotted([look='outline']:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }
      ::slotted([look='placeholder']:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }

      ::slotted(*:first-child) {
        --uui-button-border-radius: var(--uui-border-radius,3px) 0 0
          var(--uui-border-radius,3px);
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 var(--uui-border-radius,3px)
          var(--uui-border-radius,3px) 0;
      }

      ::slotted(*:hover) {
        z-index: 1;
      }
    `];Pr=zd([d("uui-button-group")],Pr);var Hd=Object.getOwnPropertyDescriptor,jd=(e,t,r,n)=>{for(var o=n>1?void 0:n?Hd(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},wa=class extends Pr{};wa.styles=[...Pr.styles,u`
      ::slotted(*) {
        --uui-button-padding-left-factor: 0.5;
        --uui-button-padding-right-factor: 0.5;
      }

      ::slotted(*:first-child) {
        --uui-button-border-radius: 50px 0 0 50px;
        --uui-button-padding-left-factor: 2;
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 50px 50px 0;
        --uui-button-padding-right-factor: 2;
      }
      ::slotted(*:first-child:last-child) {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 2;
        --uui-button-padding-right-factor: 2;
      }

      ::slotted([look='outline']),
      ::slotted([look='placeholder']) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
      }

      ::slotted(uui-button[look='outline']:first-child),
      ::slotted(uui-button[look='placeholder']:first-child) {
        --uui-button-border-radius: 50px 0 0 50px;
        --uui-button-padding-left-factor: 1.5;
      }
      ::slotted(uui-button[look='outline']:last-child),
      ::slotted(uui-button[look='placeholder']:last-child) {
        --uui-button-border-radius: 0 50px 50px 0;
        --uui-button-padding-right-factor: 1.5;
      }
      ::slotted(uui-button[look='outline']:first-child:last-child),
      ::slotted(uui-button[look='placeholder']:first-child:last-child) {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 1.5;
        --uui-button-padding-right-factor: 1.5;
      }
    `];wa=jd([d("uui-action-bar")],wa);var Wd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,Ln=(e,t,r,n)=>{for(var o=n>1?void 0:n?Qd(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Wd(t,r,o),o},kr=class extends h{constructor(){super(...arguments),this._avatarArray=[],this.limit=0}firstUpdated(){this._setAvatarArray()}_onSlotChange(){this._setAvatarArray(),this._updateAvatarVisibility()}_setAvatarArray(){this._avatarArray=this._avatarNodes?this._avatarNodes:[]}updated(e){e.has("limit")&&this._updateAvatarVisibility()}_updateAvatarVisibility(){this._avatarArray.forEach((e,t)=>{e.style.display=t<this.limit||this.limit===0?"":"none"})}_isLimitExceeded(){return this.limit!==0&&this._avatarArray.length>this.limit}render(){return l`
      <slot @slotchange=${this._onSlotChange}></slot>
      ${this._isLimitExceeded()?l`<small id="overflow-indication">+${this._avatarArray.length-this.limit}</small>`:""}
    `}};kr.styles=[u`
      :host {
        display: inline-flex;
        align-items: center;
        padding-left: 3px;
        padding-right: 3px;
      }

      ::slotted(uui-avatar) {
        margin-left: -0.2em;
        margin-right: -0.2em;
        border: 0.1em solid var(--uui-avatar-border-color);
      }

      #overflow-indication {
        margin-left: 6px;
      }
    `];Ln([he({selector:"uui-avatar, [uui-avatar]",flatten:!0})],kr.prototype,"_avatarNodes",2);Ln([b()],kr.prototype,"_avatarArray",2);Ln([i({type:Number,attribute:!0})],kr.prototype,"limit",2);kr=Ln([d("uui-avatar-group")],kr);var Kd=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,Ir=(e,t,r,n)=>{for(var o=n>1?void 0:n?Xd(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Kd(t,r,o),o},Pt=class extends h{constructor(){super(...arguments),this.overflow=!0,this.imgSrc="",this.imgSrcset="",this.name=""}get _initials(){return this.initials?.substring(0,3)||this.createInitials(this.name)}connectedCallback(){super.connectedCallback(),this.name||console.warn(this.tagName+" needs a `name`",this)}createInitials(e){let t="";if(!e)return t;let n=[...e.matchAll(/(?:^|\s)(.)/g)].map(o=>o[1]).join("");return n?.length?(t=n[0].charAt(0),n.length>1&&(t+=n[n.length-1].charAt(0)),t.toUpperCase()):t}renderImage(){return l` <img
      src="${this.imgSrc}"
      srcset="${this.imgSrcset}"
      alt="${this._initials}"
      title="${this.name}" />`}render(){return l`
      ${this.imgSrc?this.renderImage():""}
      ${this.imgSrc?"":this._initials}
      <slot></slot>
    `}};Pt.styles=[u`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        font-weight: 700;
        -webkit-font-smoothing: subpixel-antialiased;
        width: calc(2em + 4px);
        height: calc(2em + 4px);
        user-select: none;
        /* box-sizing: border-box; */
        aspect-ratio: 1;
        background-color: var(--uui-palette-spanish-pink,#f5c1bc);
        color: var(--uui-palette-space-cadet,#1b264f);
      }

      :host([overflow]) {
        overflow: unset;
      }

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-radius: 50%;
      }
    `];Ir([i({type:Boolean,attribute:!0,reflect:!0})],Pt.prototype,"overflow",2);Ir([i({type:String,attribute:"img-src"})],Pt.prototype,"imgSrc",2);Ir([i({type:String,attribute:"img-srcset"})],Pt.prototype,"imgSrcset",2);Ir([i({type:String,reflect:!0})],Pt.prototype,"name",2);Ir([i({type:String})],Pt.prototype,"initials",2);Pt=Ir([d("uui-avatar")],Pt);var Yd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,Vn=(e,t,r,n)=>{for(var o=n>1?void 0:n?Zd(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Yd(t,r,o),o},Br=class extends h{constructor(){super(...arguments),this.color="default",this.look="primary",this.attention=!1}render(){return l` <slot></slot> `}};Br.styles=[u`
      :host {
        position: var(--uui-badge-position, absolute);
        display: flex;
        justify-content: center;
        align-items: center;

        padding: var(--uui-size-1,3px) var(--uui-size-2,6px);
        inset: var(--uui-badge-inset, -8px -8px auto auto);

        text-align: center;
        font-size: var(--uui-badge-font-size, var(--uui-type-small-size,12px));
        font-weight: 900;
        line-height: 1;

        margin-right: 0;

        min-width: var(--uui-size-8,24px);
        min-height: var(--uui-size-8,24px);
        box-sizing: border-box;

        border-radius: var(--uui-size-4,12px);
        border: 1px solid transparent;
      }

      :host {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }

      :host {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='primary']) {
        background-color: var(--color);
        color: var(--color-contrast);
        border-color: transparent;
      }
      :host([look='secondary']) {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='outline']) {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: var(--color-standalone);
      }
      :host([look='placeholder']) {
        border-style: dashed;
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: var(--uui-color-border-standalone,#c2c2c2);
      }

      /** TODO: we didn't want to target elements by name, but what else can we do? */
      ::slotted(uui-icon) {
        margin-left: -0.2em;
        margin-right: -0.2em;
      }

      @keyframes --uui-badge-bounce {
        0% {
          transform: translateY(0);
        }
        20% {
          transform: translateY(-6px);
        }
        40% {
          transform: translateY(0);
        }
        55% {
          transform: translateY(-3px);
        }
        70% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(0);
        }
      }
      :host([attention]) {
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-name: --uui-badge-bounce;
        animation-timing-function: ease;
      }
      @media (prefers-reduced-motion) {
        :host([attention]) {
          animation: none;
        }
      }
    `];Vn([i({reflect:!0})],Br.prototype,"color",2);Vn([i({reflect:!0})],Br.prototype,"look",2);Vn([i({type:Boolean,reflect:!0})],Br.prototype,"attention",2);Br=Vn([d("uui-badge")],Br);var Jd=Object.defineProperty,ec=(e,t,r,n)=>{for(var o=void 0,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(t,r,o)||o);return o&&Jd(t,r,o),o},Ke=e=>{class t extends e{constructor(){super(...arguments),this.active=!1}}return ec([i({type:Boolean,reflect:!0})],t.prototype,"active"),t},tc=Object.defineProperty,Gl=(e,t,r,n)=>{for(var o=void 0,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(t,r,o)||o);return o&&tc(t,r,o),o},j=(e,t)=>{class r extends t{constructor(){super(...arguments),this._labelSlotHasContent=!1}firstUpdated(o){super.firstUpdated(o),this.label||console.warn(this.tagName+" needs a `label`",this)}labelSlotChanged(o){this._labelSlotHasContent=o.target.assignedNodes({flatten:!0}).length>0}renderLabel(){return l`
        ${this._labelSlotHasContent===!1?l`<span class="label">${this.label}</span>`:""}
        <slot
          class="label"
          style=${this._labelSlotHasContent?"":"display: none"}
          name=${e||""}
          @slotchange=${this.labelSlotChanged}></slot>
      `}}return Gl([i({type:String})],r.prototype,"label"),Gl([b()],r.prototype,"_labelSlotHasContent"),r},rc=class extends Event{constructor(t,r={}){super(t,{...r}),this.detail=r.detail||{}}},Mr=class extends rc{constructor(t,r={}){super(t,{bubbles:!0,cancelable:!0,...r})}};Mr.SELECTED="selected";Mr.DESELECTED="deselected";var oc=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,Sl=e=>{throw TypeError(e)},_l=(e,t,r,n)=>{for(var o=n>1?void 0:n?nc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&oc(t,r,o),o},Da=(e,t,r)=>t.has(e)||Sl("Cannot "+r),ae=(e,t,r)=>(Da(e,t,"read from private field"),r?r.call(e):t.get(e)),Fn=(e,t,r)=>t.has(e)?Sl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),sc=(e,t,r,n)=>(Da(e,t,"write to private field"),t.set(e,r),r),qn=(e,t,r)=>(Da(e,t,"access private method"),r),Me=e=>{var t,r,n,o,s,a,p;class c extends e{constructor(...f){super(...f),Fn(this,o),this._selectable=!1,this.deselectable=!0,this.selected=!1,Fn(this,t,this),Fn(this,r,m=>{m.code!=="Space"&&m.code!=="Enter"||m.composedPath().indexOf(ae(this,t))===0&&ae(this,n).call(this,m)}),Fn(this,n,m=>{if((this._selectable||this.deselectable&&this.selected)===!1)return;let g=m.composedPath();ae(this,t)===this&&g.some(_=>{let B=_.tagName;return B==="A"||B==="BUTTON"||B==="INPUT"||B==="TEXTAREA"||B==="SELECT"})||g.indexOf(ae(this,t))!==-1&&(m.type==="keydown"&&m.preventDefault(),qn(this,o,s).call(this))}),this.addEventListener("click",ae(this,n)),this.addEventListener("keydown",ae(this,r))}get selectable(){return this._selectable}set selectable(f){let m=this._selectable;m!==f&&(this._selectable=f,ae(this,t)===this&&ae(this,t).setAttribute("tabindex",`${f?"0":"-1"}`),this.requestUpdate("selectable",m))}get selectableTarget(){return ae(this,t)}set selectableTarget(f){let m=ae(this,t);m.removeAttribute("tabindex"),m.removeEventListener("click",ae(this,n)),m.removeEventListener("keydown",ae(this,r)),sc(this,t,f),ae(this,t)===this&&ae(this,t).setAttribute("tabindex",this._selectable?"0":"-1"),f.addEventListener("click",ae(this,n)),f.addEventListener("keydown",ae(this,r))}}return t=new WeakMap,r=new WeakMap,n=new WeakMap,o=new WeakSet,s=function(){this.selectable&&(this.deselectable===!1?qn(this,o,a).call(this):this.selected?qn(this,o,p).call(this):qn(this,o,a).call(this))},a=function(){if(!this.selectable)return;let y=new Mr(Mr.SELECTED);this.dispatchEvent(y),!y.defaultPrevented&&(this.selected=!0)},p=function(){if(!this.deselectable)return;let y=new Mr(Mr.DESELECTED);this.dispatchEvent(y),!y.defaultPrevented&&(this.selected=!1)},_l([i({type:Boolean,reflect:!0})],c.prototype,"selectable",1),_l([i({type:Boolean,reflect:!0})],c.prototype,"selected",2),c},ac=Object.defineProperty,ic=Object.getOwnPropertyDescriptor,lc=(e,t,r,n)=>{for(var o=ic(t,r),s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(t,r,o)||o);return o&&ac(t,r,o),o},kt=e=>{class t extends e{constructor(){super(...arguments),this._selectOnly=!1}get selectOnly(){return this._selectOnly}set selectOnly(n){let o=this._selectOnly;this._selectOnly=n,this.requestUpdate("selectOnly",o)}}return lc([i({type:Boolean,reflect:!0,attribute:"select-only"})],t.prototype,"selectOnly"),t},zn=class extends Event{constructor(t,r={}){super(t,{...r}),this.detail=r.detail||{}}},Qe=class extends zn{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Qe.VALID="valid";Qe.INVALID="invalid";var Hn=class extends zn{constructor(t,r={}){super(t,{bubbles:!0,cancelable:!0,...r})}};Hn.SELECTED="selected";Hn.DESELECTED="deselected";var pc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,Al=e=>{throw TypeError(e)},or=(e,t,r,n)=>{for(var o=n>1?void 0:n?uc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&pc(t,r,o),o},Ea=(e,t,r)=>t.has(e)||Al("Cannot "+r),C=(e,t,r)=>(Ea(e,t,"read from private field"),r?r.call(e):t.get(e)),nr=(e,t,r)=>t.has(e)?Al("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),xa=(e,t,r,n)=>(Ea(e,t,"write to private field"),t.set(e,r),r),Nn=(e,t,r)=>(Ea(e,t,"access private method"),r),dc=["customError","valueMissing","badInput","typeMismatch","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","tooShort"],W=(e,t)=>{var r,n,o,s,a,p,c,y,f;class m extends e{constructor(...g){super(...g),nr(this,p),this.name="",nr(this,r,{}),this._pristine=!1,this.required=!1,this.requiredMessage="This field is required",this.error=!1,this.errorMessage="This field is invalid",nr(this,n,t),nr(this,o,null),nr(this,s,[]),nr(this,a,[]),nr(this,f,()=>{this.pristine=!1}),this._internals=this.attachInternals(),this.pristine=!0,this.addValidator("valueMissing",()=>this.requiredMessage,()=>this.hasAttribute("required")&&this.hasValue()===!1),this.addValidator("customError",()=>this.errorMessage,()=>this.error),this.addEventListener("blur",()=>{this.pristine=!1,this.checkValidity()})}get value(){return C(this,n)}set value(g){let R=C(this,n);xa(this,n,g),"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(C(this,n)??null),this.requestUpdate("value",R)}set pristine(g){this._pristine!==g&&(this._pristine=g,g?this.setAttribute("pristine",""):this.removeAttribute("pristine"),Nn(this,p,y).call(this))}get pristine(){return this._pristine}hasValue(){return this.value!==this.getDefaultValue()}focusFirstInvalidElement(){let g=C(this,a).find(R=>R.validity.valid===!1);g?"focusFirstInvalidElement"in g?g.focusFirstInvalidElement():g.focus():this.focus()}disconnectedCallback(){super.disconnectedCallback(),Nn(this,p,c).call(this)}addValidator(g,R,_){let B={flagKey:g,getMessageMethod:R,checkMethod:_,weight:dc.indexOf(g)};return C(this,s).push(B),C(this,s).sort((q,Ee)=>q.weight>Ee.weight?1:Ee.weight>q.weight?-1:0),B}removeValidator(g){let R=C(this,s).indexOf(g);R!==-1&&C(this,s).splice(R,1)}addFormControlElement(g){C(this,a).push(g),g.addEventListener(Qe.INVALID,()=>{this._runValidators()}),g.addEventListener(Qe.VALID,()=>{this._runValidators()}),this._pristine===!1&&(g.checkValidity(),this._runValidators())}setCustomValidity(g){this._customValidityObject&&this.removeValidator(this._customValidityObject),g!=null&&g!==""&&(this._customValidityObject=this.addValidator("customError",()=>g,()=>!0)),this._runValidators()}_runValidators(){xa(this,r,{});let g,R;C(this,s).some(B=>B.checkMethod()?(C(this,r)[B.flagKey]=!0,g=B.getMessageMethod(),!0):!1),g||C(this,a).some(B=>{let q;for(q in B.validity)if(q!=="valid"&&B.validity[q])return C(this,r)[q]=!0,g=B.validationMessage,R??(R=B),!0;return!1});let _=Object.values(C(this,r)).includes(!0);C(this,r).valid=!_,this._internals.setValidity(C(this,r),g,R??this.getFormElement()??void 0),Nn(this,p,y).call(this)}updated(g){super.updated(g),this._runValidators()}submit(){C(this,o)?.requestSubmit()}formAssociatedCallback(){Nn(this,p,c).call(this),xa(this,o,this._internals.form),C(this,o)&&(C(this,o).hasAttribute("submit-invalid")&&(this.pristine=!1),C(this,o).addEventListener("submit",C(this,f)))}formResetCallback(){this.pristine=!0,this.value=this.getInitialValue()??this.getDefaultValue()}getDefaultValue(){return t}getInitialValue(){return this.getAttribute("value")}checkValidity(){this.pristine=!1,this._runValidators();for(let g in C(this,a))if(C(this,a)[g].checkValidity()===!1)return!1;return this._internals?.checkValidity()}get validity(){return C(this,r)}get validationMessage(){return this._internals?.validationMessage}}return r=new WeakMap,n=new WeakMap,o=new WeakMap,s=new WeakMap,a=new WeakMap,p=new WeakSet,c=function(){C(this,o)&&C(this,o).removeEventListener("submit",C(this,f))},y=function(){this._pristine!==!0&&(C(this,r).valid?this.dispatchEvent(new Qe(Qe.VALID)):this.dispatchEvent(new Qe(Qe.INVALID)))},f=new WeakMap,m.formAssociated=!0,or([i({type:String})],m.prototype,"name",2),or([i()],m.prototype,"value",1),or([i({type:Boolean,reflect:!0,attribute:"pristine"})],m.prototype,"pristine",1),or([i({type:Boolean,reflect:!0})],m.prototype,"required",2),or([i({type:String,attribute:"required-message"})],m.prototype,"requiredMessage",2),or([i({type:Boolean,reflect:!0})],m.prototype,"error",2),or([i({type:String,attribute:"error-message"})],m.prototype,"errorMessage",2),m},cc=(e,t,r)=>{let n=e;for(;n!==null;){let o=n instanceof HTMLElement&&n.hasAttribute(t)&&n.getAttribute(t)===r,s=n.querySelector(`[${t}="${r}"]`)!==null;if(o)return n;if(s)return n.querySelector(`[${t}="${r}"]`);n=n.parentElement||n.parentNode||n.host||null}return null},hc=Object.defineProperty,Ul=e=>{throw TypeError(e)},mc=(e,t,r,n)=>{for(var o=void 0,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(t,r,o)||o);return o&&hc(t,r,o),o},$l=(e,t,r)=>t.has(e)||Ul("Cannot "+r),Cl=(e,t,r)=>($l(e,t,"read from private field"),t.get(e)),Ol=(e,t,r)=>t.has(e)?Ul("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),yc=(e,t,r,n)=>($l(e,t,"write to private field"),t.set(e,r),r),Ll=e=>{var t,r;class n extends e{constructor(...s){super(...s),Ol(this,t,!1),this._togglePopover=()=>{if(!this.popoverContainerElement)return;let a=cc(this,"id",this.popoverContainerElement);a&&(Cl(this,t)?a.hidePopover():a.showPopover())},Ol(this,r,a=>{requestAnimationFrame(()=>{yc(this,t,a.detail.newState==="open")})}),this.addEventListener("uui-popover-before-toggle",Cl(this,r))}}return t=new WeakMap,r=new WeakMap,mc([i({type:String,attribute:"popovertarget"})],n.prototype,"popoverContainerElement"),n};var E=class extends Event{constructor(t,r={}){super(t,{...r}),this.detail=r.detail||{}}},lt=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};lt.VALID="valid";lt.INVALID="invalid";var Ge=class extends E{constructor(t,r={}){super(t,{bubbles:!0,cancelable:!0,...r})}};Ge.SELECTED="selected";Ge.DESELECTED="deselected";var Oo=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Oo.CHANGE="change";var bc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,Vl=e=>{throw TypeError(e)},Gr=(e,t,r,n)=>{for(var o=n>1?void 0:n?gc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&bc(t,r,o),o},fc=(e,t,r)=>t.has(e)||Vl("Cannot "+r),vc=(e,t,r)=>t.has(e)?Vl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),wc=(e,t,r)=>(fc(e,t,"access private method"),r),Ta,Fl,me=class extends W(j("",h),""){constructor(t="checkbox"){super(),vc(this,Ta),this._value="",this.labelPosition="right",this._checked=!1,this.indeterminate=!1,this.disabled=!1,this.readonly=!1,this._value===""&&(this._value="on"),this.inputRole=t,this.addEventListener("keydown",wc(this,Ta,Fl))}get value(){return this._value}set value(t){let r=super.value;this._value=t,"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(this._checked&&this.name!==""?this._value:null),this.requestUpdate("value",r)}get checked(){return this._checked}set checked(t){let r=this._checked;this._checked=t,this._internals.setFormValue(this._checked&&this.name!==""?this._value?this._value:"on":null),this.requestUpdate("checked",r)}getFormElement(){return this._input}hasValue(){return this.checked}formResetCallback(){super.formResetCallback(),this.checked=this.hasAttribute("checked")}firstUpdated(t){super.firstUpdated(t);let r=this.shadowRoot?.querySelector("label"),n=!1;this._input.addEventListener("blur",()=>{n===!1&&this.style.setProperty("--uui-show-focus-outline","1"),n=!1}),r.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),n=!0}),r.addEventListener("mouseup",()=>{n=!1})}async focus(){await this.updateComplete,this._input.focus()}async click(){await this.updateComplete,this._input.click()}_onInputChange(t){t.stopPropagation(),this.pristine=!1,this.checked=this._input.checked,this.indeterminate=this._input.indeterminate,this.dispatchEvent(new Oo(Oo.CHANGE))}render(){return l`
      <label>
        <input
          id="input"
          type="checkbox"
          @change="${this._onInputChange}"
          .disabled=${this.disabled||this.readonly}
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          aria-checked="${this.checked?"true":"false"}"
          aria-label=${this.label}
          role="${this.inputRole}" />
        ${this.renderCheckbox()} ${this.renderLabel()}
      </label>
    `}};Ta=new WeakSet;Fl=function(e){e.key=="Enter"&&this.submit()};me.styles=[u`
      :host {
        display: inline-block;
      }

      label {
        position: relative;
        cursor: pointer;
        user-select: none;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-items: center;
        gap: var(--uui-size-3,9px);
      }

      :host([readonly]) label {
        cursor: default;
      }

      input {
        position: absolute;
        height: 0px;
        width: 0px;
        opacity: 0;
      }

      :host([label-position='left']) label {
        flex-direction: row-reverse;
      }

      :host([label-position='top']) label {
        gap: var(--uui-size-half-base-unit);
        flex-direction: column-reverse;
      }

      :host([label-position='bottom']) label {
        gap: var(--uui-size-half-base-unit);
        flex-direction: column;
      }

      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .label {
        display: block;
      }

      span.label:empty {
        display: none;
      }
    `];Gr([i({type:String,attribute:"label-position",reflect:!0})],me.prototype,"labelPosition",2);Gr([i({type:Boolean})],me.prototype,"checked",1);Gr([i({type:Boolean,reflect:!0})],me.prototype,"indeterminate",2);Gr([i({type:Boolean,reflect:!0})],me.prototype,"disabled",2);Gr([i({type:Boolean,reflect:!0})],me.prototype,"readonly",2);Gr([P("#input")],me.prototype,"_input",2);var Nl=Symbol.for(""),xc=e=>{if(e?.r===Nl)return e?._$litStatic$},Ra=e=>({_$litStatic$:e,r:Nl});var ql=new Map,Pa=e=>(t,...r)=>{let n=r.length,o,s,a=[],p=[],c,y=0,f=!1;for(;y<n;){for(c=t[y];y<n&&(s=r[y],(o=xc(s))!==void 0);)c+=o+t[++y],f=!0;y!==n&&p.push(s),a.push(c),y++}if(y===n&&a.push(t[n]),f){let m=a.join("$$lit$$");(t=ql.get(m))===void 0&&(a.raw=a,ql.set(m,t=a)),r=p}return e(t,...r)},ka=Pa(l),Lv=Pa(v),Vv=Pa(Rl);var Dc=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,sr=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ec(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Dc(t,r,o),o};function Ia(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}var pt=class extends h{constructor(){super(...arguments),this.headline=null,this._headlineVariantTag="h5",this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=Ia(e.target)},this._headerSlotHasContent=!1,this._headerSlotChanged=e=>{this._headerSlotHasContent=Ia(e.target)},this._headerActionsSlotHasContent=!1,this._headerActionsSlotChanged=e=>{this._headerActionsSlotHasContent=Ia(e.target)}}set headlineVariant(e){this._headlineVariantTag=e}get headlineVariant(){return this._headlineVariantTag}renderHeader(){return ka`<div
      id="header"
      class="uui-text"
      style=${this._headerSlotHasContent||this._headlineSlotHasContent||this._headerActionsSlotHasContent||this.headline!==null?"":"display: none"}>
      <${Ra(this._headlineVariantTag)}
        id="headline"
        class="uui-h5"
        style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
        ${this.headline}
        <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
      </${Ra(this._headlineVariantTag)}>
      <slot name="header" @slotchange=${this._headerSlotChanged}></slot>
      <slot name="header-actions" @slotchange=${this._headerActionsSlotChanged}></slot>
    </div>`}render(){return ka`
      ${this.renderHeader()}
      <slot></slot>
    `}};pt.styles=[je,u`
      :host {
        display: block;
        border: var(--uui-box-border-width, 0) solid
          var(--uui-box-border-color, var(--uui-color-divider-standalone,#e9e9eb));
        box-shadow: var(--uui-box-box-shadow, var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24)));
        border-radius: var(--uui-box-border-radius, var(--uui-border-radius,3px));
        background-color: var(--uui-color-surface,#fff);
      }

      #header {
        display: flex;
        align-items: center;
        column-gap: var(--uui-size-space-5,18px);
        border-bottom: 1px solid var(--uui-color-divider-standalone,#e9e9eb);
        padding: var(
          --uui-box-header-padding,
          var(--uui-size-space-4,12px) var(--uui-size-space-5,18px)
        );
      }

      slot:not([name]) {
        display: block;
        padding: var(--uui-box-default-padding, var(--uui-size-space-5,18px));
      }

      slot[name='header-actions'] {
        display: block;
        margin-left: auto;
      }
    `];sr([i({type:String})],pt.prototype,"headline",2);sr([i({attribute:"headline-variant"})],pt.prototype,"headlineVariant",1);sr([b()],pt.prototype,"_headlineVariantTag",2);sr([b()],pt.prototype,"_headlineSlotHasContent",2);sr([b()],pt.prototype,"_headerSlotHasContent",2);sr([b()],pt.prototype,"_headerActionsSlotHasContent",2);pt=sr([d("uui-box")],pt);var Tc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,Ba=(e,t,r,n)=>{for(var o=n>1?void 0:n?Rc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Tc(t,r,o),o},_r=class extends h{constructor(){super(...arguments),this.lastItem=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}renderLinkAndSeparator(){let e=this.href?l`<a id="link" href=${this.href}><slot></slot></a>`:l`<span id="link"><slot></slot></span>`;return l`${e}<span part="separator"></span>`}renderCurrent(){return l`<span id="last-item"><slot></slot></span>`}render(){return l`${this.lastItem?this.renderCurrent():this.renderLinkAndSeparator()}`}};_r.styles=[u`
      :host {
        font-size: var(--uui-type-small-size,12px);
        color: currentColor;
      }

      a,
      a:visited {
        color: currentColor;
      }
      a:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      a:focus {
        color: var(--uui-color-focus,#3879ff);
      }

      [part='separator']::after {
        content: '/';
        speak: never;
        position: relative;
        top: 1px;
        margin: -3px 1px 0;
        color: var(--uui-color-border,#d8d7d9);
      }

      #link,
      #last-item {
        padding: 0 4px;
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `];Ba([i()],_r.prototype,"href",2);Ba([i({type:Boolean,attribute:"last-item"})],_r.prototype,"lastItem",2);_r=Ba([d("uui-breadcrumb-item")],_r);var Pc=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,zl=(e,t,r,n)=>{for(var o=n>1?void 0:n?kc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Pc(t,r,o),o},jn=class extends h{elementIsBreadcrumbItem(e){return e instanceof _r}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label","breadcrumb"),this.setAttribute("role","navigation")}handleSlotChange(){if(this.slotNodes.length>0){let e=this.slotNodes[this.slotNodes.length-1];e.setAttribute("aria-current","page"),this.elementIsBreadcrumbItem(e)&&(e.lastItem=!0)}}render(){return l`<ol id="breadcrumbs-list">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </ol>`}};jn.styles=[u`
      :host {
        display: flex;
      }

      #breadcrumbs-list {
        display: flex;
        list-style-type: decimal;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
      }
    `];zl([he({flatten:!0,selector:"uui-breadcrumb-item, [uui-breadcrumb-item], [role=listitem]"})],jn.prototype,"slotNodes",2);jn=zl([d("uui-breadcrumbs")],jn);var Hl=u`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,jl=Be("uui-blink 0.9s infinite both"),Wl=u`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`,n0=Be("pulse 0.8s ease-in-out infinite both"),It=u`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`,Bt=Be("uui-horizontal-shake 600ms ease backwards");var oe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Te=e=>(...t)=>({_$litDirective$:e,values:t}),ve=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var Ql="important",Ic=" !"+Ql,ie=Te(class extends ve{constructor(e){if(super(e),e.type!==oe.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{let n=e[r];return n==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){let{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(let n in t){let o=t[n];if(o!=null){this.ft.add(n);let s=typeof o=="string"&&o.endsWith(Ic);n.includes("-")||s?r.setProperty(n,s?o.slice(0,-11):o,s?Ql:""):r[n]=o}}return H}});var x=e=>e??D;var So=class extends E{constructor(t,r={}){super(t,{bubbles:!0,composed:!0,...r})}};So.CLICK="click";var Bc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,Kl=e=>{throw TypeError(e)},ar=(e,t,r,n)=>{for(var o=n>1?void 0:n?Mc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Bc(t,r,o),o},Gc=(e,t,r)=>t.has(e)||Kl("Cannot "+r),_c=(e,t,r)=>t.has(e)?Kl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Wn=(e,t,r)=>(Gc(e,t,"access private method"),r),Cr,Ma,Xl,Yl,ut=class extends h{constructor(){super(...arguments),_c(this,Cr),this._position=0,this.vertical=!1}_onMouseMove(e){this._position=(this.vertical?e.offsetY:e.offsetX)-5}_handleClick(e){e.preventDefault(),e.stopImmediatePropagation(),e.target?.blur?.(),this.dispatchEvent(new So(So.CLICK))}render(){return this.href?Wn(this,Cr,Xl).call(this):Wn(this,Cr,Yl).call(this)}};Cr=new WeakSet;Ma=function(){return l`
      <div
        id="plus"
        style=${ie({left:this.vertical?"":this._position+"px",top:this.vertical?this._position+"px":""})}>
        <svg
          id="plus-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            d="M420.592 214.291H296.104V89.804h-83.102v124.487H88.518v83.104h124.484v124.488h83.102V297.395h124.488z" />
        </svg>
      </div>
    `};Xl=function(){return l`<a
      id="button-wrapper"
      @mousemove=${this._onMouseMove}
      href=${x(this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}
      aria-label=${this.label?this.label:"create new element"}>
      ${Wn(this,Cr,Ma).call(this)}
    </a>`};Yl=function(){return l`
      <button
        id="button-wrapper"
        @mousemove=${this._onMouseMove}
        @click=${this._handleClick}
        aria-label=${this.label?this.label:"create new element"}>
        ${Wn(this,Cr,Ma).call(this)}
      </button>
    `};ut.styles=[Hl,u`
      :host {
        display: flex;
        position: relative;
        z-index: 1;
      }

      :host(:not([vertical])) {
        height: 20px;
        width: 100%;
        margin: -10px 0;
      }

      :host([vertical]) {
        height: 100%;
        width: 20px;
        margin: 0 -10px;
      }

      #button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 1;
        outline: 0;
        transition: opacity 0.24s;
        display: inline-flex;
        width: 100%;
        border: none;
        height: 100%;
        padding: 0;

        text-decoration: none;
        background: transparent;
        color: currentColor;

        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;

        opacity: 0;
      }

      :host(:focus) #button-wrapper,
      :host(:focus-within) #button-wrapper,
      :host(:hover) #button-wrapper {
        opacity: 1;
      }

      :host(:focus) #button-wrapper:before,
      :host(:focus-within) #button-wrapper:before,
      :host(:hover) #button-wrapper:before {
        animation: ${jl};
        background-color: var(--uui-color-interactive-emphasis,#3544b1);
        border-color: var(--uui-color-surface,#fff) !important;
      }

      #button-wrapper:before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        height: 2px;
        background-color: transparent;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        border-radius: 2px;
        pointer-events: none;
        transition:
          background-color 720ms ease-out,
          border-color 240ms;
      }

      :host(:not([vertical])) #button-wrapper:before {
        top: 50%;
        transform: translateY(-50%);
      }

      :host([vertical]) #button-wrapper:before {
        height: 100%;
        width: 2px;
        left: 50%;
        transform: translateX(-50%);
        border-top: none;
        border-bottom: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
      }

      :host(:not([vertical]):not(:hover)) #plus:not(:focus) {
        left: calc(50% - 2px) !important;
      }

      :host([vertical]:not(:hover)) #plus:not(:focus) {
        top: calc(50% - 2px) !important;
      }

      #plus {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        box-sizing: border-box;
        width: 28px;
        height: 28px;
        border-radius: 3em;
        font-size: 14px;
        border: 2px solid var(--uui-color-interactive-emphasis,#3544b1);
        color: var(--uui-color-interactive-emphasis,#3544b1);
        background-color: var(--uui-color-surface,#fff);

        opacity: 0;
        transform: scale(0);
        transition:
          transform 240ms ease-in,
          opacity 240ms,
          left 100ms linear 150ms,
          top 100ms linear 150ms;
      }
      :host(:focus) #plus,
      :host(:focus-within) #plus,
      :host(:hover) #plus {
        opacity: 1;
        transform: scale(1);
        transition:
          transform 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
          opacity 80ms,
          box-shadow 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 0 0 2px var(--uui-color-surface,#fff);
      }

      :host(:not([vertical])) #plus {
        margin-left: -18px;
      }

      :host([vertical]) #plus {
        left: -4px;
        margin-top: -18px;
      }

      #button-wrapper:focus #plus {
        /* TODO: implement focus outline system */
        border: 2px solid var(--uui-color-focus,#3879ff);
        color: var(--uui-color-focus,#3879ff);
      }

      #plus-icon {
        width: 50%;
        fill: currentColor;
      }

      #button-wrapper:active #plus {
        transform: scale(1.1);
      }
    `];ar([b()],ut.prototype,"_position",2);ar([i({type:String})],ut.prototype,"label",2);ar([i({type:Boolean,reflect:!0})],ut.prototype,"vertical",2);ar([i({type:String})],ut.prototype,"href",2);ar([i({type:String})],ut.prototype,"target",2);ar([i({type:String})],ut.prototype,"rel",2);ut=ar([d("uui-button-inline-create")],ut);var Qn=class{constructor(t,r){this._callback=t,this._timerId=null,this._remaining=null,this._onComplete=()=>{this._remaining=null,this._callback()},this.setDuration(r)}setDuration(t){this._duration=t,this._timerId!==null&&this.restart()}start(){this._timerId===null&&this.resume()}restart(){this._remaining=this._duration,this.resume()}pause(){this._timerId!==null&&(window.clearTimeout(this._timerId),this._timerId=null,this._remaining!==null&&(this._remaining-=Date.now()-this._startTime))}resume(){this._timerId!==null&&window.clearTimeout(this._timerId),this._remaining===null&&(this._remaining=this._duration),this._startTime=Date.now(),this._timerId=window.setTimeout(this._onComplete,this._remaining)}destroy(){this.pause()}},w=(e,t,r=`This element has to be present for ${e.nodeName} to work appropriate.`)=>{customElements.get(t)||console.warn(`%c ${e.nodeName} requires ${t} element to be registered!`,"font-weight: bold;",r,e)},Kn=(e,t)=>{function r(o){let s=e.getBoundingClientRect(),a=e.ownerDocument.defaultView,p=s.left+a.scrollX,c=s.top+a.scrollY,y;if("TouchEvent"in window&&o instanceof TouchEvent)y=o.touches[0];else if(o instanceof MouseEvent)y=o;else return;let f=y.pageX-p,m=y.pageY-c;t?.onMove&&t.onMove(f,m)}function n(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n),t?.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",n),t?.initialEvent&&r(t.initialEvent)},M=(e,t,r)=>Math.min(Math.max(e,t),r),Ga=(e,t,r)=>r+t-e;var Zl=(e,t,r)=>{let n=e;for(;n!==null;){let o=n instanceof HTMLElement&&n.hasAttribute(t)&&n.getAttribute(t)===r,s=n.querySelector(`[${t}="${r}"]`)!==null;if(o)return n;if(s)return n.querySelector(`[${t}="${r}"]`);n=n.parentElement||n.parentNode||n.host||null}return null};function Jl(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}var I0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,B0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,M0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,G0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`,Mt=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`,_0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,C0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,O0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,S0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`,ep=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`,A0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,U0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,$0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,L0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,V0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,F0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,q0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,N0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`,tp=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,z0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`,rp=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`,H0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`,Or=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`,j0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`,op=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`,W0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`,np=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`,Q0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`,sp=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,ap=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`,K0=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`,ip=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;var Cc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,lp=e=>{throw TypeError(e)},Ve=(e,t,r,n)=>{for(var o=n>1?void 0:n?Oc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Cc(t,r,o),o},pp=(e,t,r)=>t.has(e)||lp("Cannot "+r),Sc=(e,t,r)=>(pp(e,t,"read from private field"),t.get(e)),Ac=(e,t,r)=>t.has(e)?lp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Uc=(e,t,r,n)=>(pp(e,t,"write to private field"),t.set(e,r),r),Xn,le=class extends W(j("",Ll(h))){constructor(){super(),this.type="button",this.disabled=!1,this.look="default",this.color="default",this.compact=!1,this.state=void 0,Ac(this,Xn),this.addEventListener("click",this._onHostClick)}getFormElement(){return this._button}async focus(){await this.updateComplete,this._button.focus()}async blur(){await this.updateComplete,this._button.blur()}async click(){await this.updateComplete,this._button.click()}_onHostClick(e){if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if(this._internals?.form)switch(this.type){case"reset":this._internals.form.reset();break;case"button":break;default:this._internals.form.requestSubmit?this._internals.form.requestSubmit():this._internals.form.dispatchEvent(new SubmitEvent("submit"));break}this._togglePopover()}updated(e){super.updated(e),e.has("state")&&(clearTimeout(Sc(this,Xn)),(this.state==="success"||this.state==="failed")&&Uc(this,Xn,setTimeout(()=>this.state=void 0,2e3)))}renderState(){let e;switch(this.state){case"waiting":w(this,"uui-loader-circle"),e=l`<uui-loader-circle id="loader"></uui-loader-circle>`;break;case"success":w(this,"uui-icon"),e=l`<uui-icon
          name="check"
          .fallback=${Mt.strings[0]}></uui-icon>`;break;case"failed":w(this,"uui-icon"),e=l`<uui-icon
          name="wrong"
          .fallback=${ip.strings[0]}></uui-icon>`;break;default:return D}return l`<div id="state">${e}</div>`}render(){return this.href?l`
          <a
            id="button"
            aria-label=${x(this.label)}
            href=${x(this.disabled?void 0:this.href)}
            target=${x(this.target||void 0)}
            rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:l`
          <button
            id="button"
            type=${this.type}
            ?disabled=${this.disabled}
            aria-label=${x(this.label)}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};Xn=new WeakMap;le.styles=[It,u`
      :host {
        position: relative;
        display: inline-flex;
        margin-left: calc(var(--uui-button-merge-border-left, 0) * -1px);
        --uui-button-padding-left-factor: 3;
        --uui-button-padding-right-factor: 3;
        --uui-button-padding-top-factor: 1;
        --uui-button-padding-bottom-factor: 1;

        min-height: var(--uui-button-height, var(--uui-size-11,33px));
        max-height: 100%;
        cursor: pointer;

        text-align: center;
        font-size: var(--uui-button-font-size, inherit);
        font-weight: var(--uui-button-font-weight, 500);
        transition:
          background-color 80ms,
          border-color 80ms,
          color 80ms;
      }

      :host([compact]) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
        --uui-button-padding-top-factor: 0;
        --uui-button-padding-bottom-factor: 0;
      }

      .label {
        line-height: 1; /** needed to reset 'a > span' */
        transition: opacity 120ms;
        display: flex;
        gap: var(--uui-size-1,3px);
        align-items: center;
      }

      :host([state]:not([state=''])) .label {
        opacity: 0;
      }

      #state {
        position: absolute;
        opacity: 0;
        animation-name: fadeIn;
        animation-delay: 40ms;
        animation-duration: 360ms;
        animation-fill-mode: forwards;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        align-items: center;
      }

      #button {
        width: 100%;
        background-color: transparent;
        color: inherit;
        font-size: inherit;
        border-radius: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        border: none;
        cursor: inherit;

        display: inline-flex;
        align-items: center;
        justify-content: var(--uui-button-content-align, center);

        /* for anchor tag: */
        text-decoration: none;
        color: currentColor;
        line-height: inherit;

        border-width: var(--uui-button-border-width, 1px);
        border-style: solid;
        border-radius: var(
          --uui-button-border-radius,
          var(--uui-border-radius,3px)
        );
        cursor: pointer;

        padding: calc(var(--uui-size-2,6px) * var(--uui-button-padding-top-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-right-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-bottom-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-left-factor));

        box-shadow: none;

        transition: var(--uui-button-transition, none);
      }

      #button:focus-visible {
        outline: 2px solid var(--color-emphasis);
      }

      button[disabled]:active,
      a:not([href]):active {
        animation: ${Bt};
      }

      /* ANIMATIONS */
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      #icon-check,
      #icon-wrong {
        display: grid;
        place-items: center;
        width: 1.5em;
      }

      #loader {
        font-size: 1.5em;
      }
      :host([look]:not([look=''])) #loader {
        color: inherit;
      }

      /* edge case for default color */
      :host(:not([color]):not([look='primary'])),
      :host([color='']:not([look='primary'])),
      :host([color='default']:not([look='primary'])) {
        --uui-button-contrast-hover: var(--uui-color-default-emphasis,#3544b1);
      }

      :host([color='warning'][look='outline']) #button,
      :host([color='warning'][look='placeholder']) #button {
        --uui-button-contrast-hover: var(--color-standalone);
      }

      /** Button color attribute: */
      #button {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-emphasis: var(--uui-color-default-emphasis,#3544b1);
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) #button {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-emphasis: var(--uui-color-positive-emphasis,rgb(
    13,
    155,
    98
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) #button {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-emphasis: var(--uui-color-warning-emphasis,rgb(
    251,
    224,
    101
  ));
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) #button {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-emphasis: var(--uui-color-danger-emphasis,rgb(
    226,
    60,
    107
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) #button {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-emphasis: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }
      :host([disabled]) #button {
        --color: var(--uui-color-disabled,#f3f3f5);
        --color-standalone: var(--uui-color-disabled-contrast,#c4c4c4);
        --color-emphasis: var(--uui-color-disabled,#f3f3f5);
        --color-contrast: var(--uui-color-disabled-contrast,#c4c4c4);

        cursor: default;
      }

      /** Button look attribute: */
      /* DEFAULT */
      #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);
      }
      :host(:not([disabled]):hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, transparent);
      }

      /* PRIMARY */
      :host([look='primary']) #button {
        background-color: var(--uui-button-background-color, var(--color));
        color: var(--uui-button-contrast, var(--color-contrast));
        border-color: var(--uui-button-border-color, transparent);

        /* special for primary: */
        font-weight: var(--uui-button-font-weight, 700);
      }

      :host([look='primary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--color-emphasis)
        );
        color: var(--uui-button-contrast-hover, var(--color-contrast));
        border-color: var(--uui-button-border-color-hover, transparent);
      }

      /* special outline offset tof primary style so you can see the outline */
      :host([look='primary']) #button:focus-visible {
        outline-offset: 2px;
      }

      :host([look='primary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }
      /* SECONDARY */
      :host([look='secondary']) #button {
        background-color: var(
          --uui-button-background-color,
          var(--uui-color-surface-alt,#f3f3f5)
        );
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);

        /* special for secondary: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='secondary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([look='secondary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }

      /* OUTLINE */
      :host([look='outline']) #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );

        /* special for outline: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='outline']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='outline'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }

      /* PLACEHOLDER */
      :host([look='placeholder']) #button {
        border-style: dashed;
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      :host([look='placeholder']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='placeholder'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }
    `];Ve([i({type:String,reflect:!0})],le.prototype,"type",2);Ve([i({type:Boolean,reflect:!0})],le.prototype,"disabled",2);Ve([i({reflect:!0})],le.prototype,"look",2);Ve([i({reflect:!0})],le.prototype,"color",2);Ve([i({type:Boolean,reflect:!0})],le.prototype,"compact",2);Ve([i({type:String,reflect:!0})],le.prototype,"state",2);Ve([i({type:String})],le.prototype,"href",2);Ve([i({type:String})],le.prototype,"target",2);Ve([i({type:String})],le.prototype,"rel",2);Ve([P("#button")],le.prototype,"_button",2);le=Ve([d("uui-button")],le);var Gt=class extends E{constructor(){super(...arguments),this.text=null}};Gt.COPIED="copied";Gt.COPYING="copying";var $c=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,dp=e=>{throw TypeError(e)},Yn=(e,t,r,n)=>{for(var o=n>1?void 0:n?Lc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&$c(t,r,o),o},cp=(e,t,r)=>t.has(e)||dp("Cannot "+r),_a=(e,t,r)=>(cp(e,t,"read from private field"),r?r.call(e):t.get(e)),up=(e,t,r)=>t.has(e)?dp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Vc=(e,t,r,n)=>(cp(e,t,"write to private field"),t.set(e,r),r),Ao,Ca,Sr=class extends le{constructor(){super(),this.text="",this.copyFrom="",this.animationStateDelay=250,up(this,Ao),up(this,Ca,async()=>{this.state="waiting";let e=this.text;if(this.copyFrom){let r=document.getElementById(this.copyFrom);if(r)"value"in r?e=r.value:e=r.textContent??r.innerText??"";else{console.error(`Element ID ${this.copyFrom} not found to copy from`),this.state="failed";return}}let t=new Gt(Gt.COPYING);t.text=e,this.dispatchEvent(t),t.text!=null&&(e=t.text);try{await navigator.clipboard.writeText(e);let r=new Gt(Gt.COPIED);r.text=e,this.dispatchEvent(r),Vc(this,Ao,setTimeout(()=>{this.state="success"},this.animationStateDelay))}catch(r){this.state="failed",console.error("Error copying to clipboard",r)}}),w(this,"uui-icon"),this.addEventListener("click",_a(this,Ca))}disconnectedCallback(){super.disconnectedCallback(),_a(this,Ao)&&clearTimeout(_a(this,Ao))}renderLabel(){return l`
      <slot class="label">
        <uui-icon name="copy"></uui-icon>
      </slot>
    `}};Ao=new WeakMap;Ca=new WeakMap;Sr.styles=le.styles;Yn([i({type:String})],Sr.prototype,"text",2);Yn([i({type:String,attribute:"copy-from"})],Sr.prototype,"copyFrom",2);Yn([i({type:Number,attribute:"animation-state-delay"})],Sr.prototype,"animationStateDelay",2);Sr=Yn([d("uui-button-copy-text")],Sr);var ir=class extends E{};ir.OPEN="open";var Fc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Ar=(e,t,r,n)=>{for(var o=n>1?void 0:n?qc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Fc(t,r,o),o},Q=class extends kt(Me(h)){constructor(){super(...arguments),this.disabled=!1,this.error=!1}handleOpenClick(e){this.disabled||(e.stopPropagation(),this.dispatchEvent(new ir(ir.OPEN)))}handleOpenKeydown(e){this.disabled||e.key==="Enter"&&(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new ir(ir.OPEN)))}render(){return l`<slot id="open-part"></slot>
      <div id="select-border"></div>`}};Q.styles=[je,u`
      :host {
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;
        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        border-radius: var(--uui-border-radius,3px);
        min-height: var(--uui-layout-medium);
        background-color: var(--uui-color-surface,#fff);
        --uui-card-border-width: 3px;
        transition: box-shadow 100ms ease-out;
      }

      :host([selectable]:focus-visible) {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
      }

      :host() * {
        /* TODO: implement globally shared outline style */
        outline-color: var(--uui-color-focus,#3879ff);
      }

      :host([error])::before {
        content: '';
        position: absolute;
        pointer-events: none;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        box-sizing: border-box;
        border: var(--uui-card-border-width) solid var(--uui-color-invalid,#d42054);
        border-radius: var(--uui-border-radius,3px);
      }

      button {
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-align: left;
        color: var(--uui-color-text,#060606);
      }

      a {
        text-decoration: none;
        color: inherit;
        line-height: initial;
      }

      button:focus,
      a:focus {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
        border-radius: var(--uui-border-radius,3px);
      }

      :host([selectable]) {
        cursor: pointer;
      }
      :host([selectable]) #select-border {
        position: absolute;
        z-index: 2;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host([selectable]) #select-border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--uui-color-selected,#3544b1);
        border-radius: calc(var(--uui-border-radius,3px) + 2px);
        box-shadow:
          0 0 4px 0 var(--uui-color-selected,#3544b1),
          inset 0 0 2px 0 var(--uui-color-selected,#3544b1);
      }
      :host([selected]) #select-border {
        opacity: 1;
      }
      :host([selectable]:not([selected]):hover) #select-border {
        opacity: 0.33;
      }
      :host([selectable][selected]:hover) #select-border {
        opacity: 0.8;
      }

      :host([selectable]:not([selected])) #open-part:hover + #select-border {
        opacity: 0;
      }
      :host([selectable][selected]) #open-part:hover + #select-border {
        opacity: 1;
      }

      :host([selectable]:not([selected]):hover) #select-border::after {
        animation: not-selected--hover 1.2s infinite;
      }
      @keyframes not-selected--hover {
        0%,
        100% {
          opacity: 0.66;
        }
        50% {
          opacity: 1;
        }
      }

      :host([selectable][selected]:hover) #select-border::after {
        animation: selected--hover 1.4s infinite;
      }
      @keyframes selected--hover {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.66;
        }
      }
      :host([selectable]) #open-part:hover + #select-border::after {
        animation: none;
      }

      :host([select-only]) *,
      :host([select-only]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disabled]) {
        background: var(--uui-color-disabled,#f3f3f5);
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `];Ar([i({type:Boolean,reflect:!0,attribute:"disabled"})],Q.prototype,"disabled",2);Ar([i({type:Boolean,reflect:!0})],Q.prototype,"error",2);Ar([i({type:String})],Q.prototype,"href",2);Ar([i({type:String})],Q.prototype,"target",2);Ar([i({type:String})],Q.prototype,"rel",2);Q=Ar([d("uui-card")],Q);var Nc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,hp=e=>{throw TypeError(e)},Zn=(e,t,r,n)=>{for(var o=n>1?void 0:n?zc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Nc(t,r,o),o},Hc=(e,t,r)=>t.has(e)||hp("Cannot "+r),jc=(e,t,r)=>t.has(e)?hp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Uo=(e,t,r)=>(Hc(e,t,"access private method"),r),lr,mp,yp,bp,Oa,Ur=class extends Q{constructor(){super(...arguments),jc(this,lr),this.name=""}get background(){}set background(e){this.style.backgroundColor=e??""}render(){return l`
      ${Uo(this,lr,bp).call(this)}
      ${this.href?Uo(this,lr,yp).call(this):Uo(this,lr,mp).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};lr=new WeakSet;mp=function(){return l`
      <button
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?D:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${Uo(this,lr,Oa).call(this)}
      </button>
    `};yp=function(){return l`
      <a
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?D:"0"}
        href=${x(this.disabled?void 0:this.href)}
        target=${x(this.target||void 0)}
        rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${Uo(this,lr,Oa).call(this)}
      </a>
    `};bp=function(){return l`<div id="portrait">
      <slot></slot>
    </div> `};Oa=function(){return l`
      <div id="content">
        <span title="${this.name}" id="name">${this.name}</span>
        <small title="${this.description}">${this.description}<slot name="description"></slot></small>
      </div></div>
    `};Ur.styles=[...Q.styles,u`
      :host {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      #portrait {
        display: flex;
        justify-content: center;
        min-height: 150px;
        max-height: 150px;
        width: 100%;
        margin-bottom: var(--uui-size-layout-2,30px);
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius,3px);
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
        font-size: var(--uui-size-8,24px);
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive,#1b264f);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        background: var(--uui-color-disabled,#f3f3f5);
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }
      #open-part #name,
      #open-part small {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=''])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        font-family: inherit;
        font-size: var(--uui-type-small-size,12px);
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding-top: var(--uui-size-space-3,9px);
      }

      #content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-top: 1px solid var(--uui-color-divider,#f6f6f7);
        border-radius: 0 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        pointer-events: none;
        opacity: 0.96;
      }

      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      :host(
          [image]:not([image='']):hover,
          [image]:not([image='']):focus,
          [image]:not([image='']):focus-within,
          [selected][image]:not([image='']),
          [error][image]:not([image=''])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3,9px) * -1)
          calc(var(--uui-size-space-4,12px) * -1);
        top: 0;
      }
    `];Zn([i({type:String})],Ur.prototype,"name",2);Zn([i({type:String})],Ur.prototype,"description",2);Zn([i({type:String,attribute:"background"})],Ur.prototype,"background",1);Ur=Zn([d("uui-card-block-type")],Ur);var Wc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,gp=e=>{throw TypeError(e)},es=(e,t,r,n)=>{for(var o=n>1?void 0:n?Qc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Wc(t,r,o),o},Kc=(e,t,r)=>t.has(e)||gp("Cannot "+r),Xc=(e,t,r)=>t.has(e)?gp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Jn=(e,t,r)=>(Kc(e,t,"access private method"),r),$r,Sa,fp,vp,Lr=class extends Q{constructor(){super(...arguments),Xc(this,$r),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    id="icon">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>`}_onSlotIconChange(e){this._iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}_renderFallbackIcon(){return w(this,"uui-icon"),l`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`}renderDetail(){return l`<small id="detail"
        >${this.detail}<slot name="detail"></slot></small
      ><slot id="default"></slot>`}render(){return l`
      ${this.href?Jn(this,$r,vp).call(this):Jn(this,$r,fp).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};$r=new WeakSet;Sa=function(){return l`
      <span id="content" class="uui-text">
        <span id="item">
          <span id="icon">
            <slot name="icon" @slotchange=${this._onSlotIconChange}></slot>
            ${this._iconSlotHasContent===!1?this._renderFallbackIcon():""}
          </span>
          <div title="${this.name}" id="name">
            ${this.name}<slot name="name"></slot>
          </div>
        </span>
        ${this.renderDetail()}
      </span>
    `};fp=function(){return l`<button
      id="open-part"
      tabindex=${this.disabled?D:0}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${Jn(this,$r,Sa).call(this)}
    </button>`};vp=function(){return l`<a
      id="open-part"
      tabindex=${this.disabled?D:0}
      href=${x(this.disabled?void 0:this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Jn(this,$r,Sa).call(this)}
    </a>`};Lr.styles=[...Q.styles,u`
      :host {
        min-width: 250px;
        flex-direction: column;
        justify-content: space-between;
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;

        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      slot:not([name]) {
        display: block;
        margin: var(--uui-size-1,3px);
        margin-top: var(--uui-size-3,9px);
      }

      slot:not([name])::slotted(*) {
        font-size: var(--uui-type-small-size,12px);
        line-height: calc(2 * var(--uui-size-3,9px));
      }

      #open-part {
        display: flex;
        position: relative;
        align-items: center;
        cursor: pointer;
        flex-grow: 1;
        padding: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      #open-part #name {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      #content {
        align-self: stretch;
        display: flex;
        flex-direction: column;
      }

      #item {
        position: relative;
        display: flex;
        align-self: stretch;
        line-height: normal;
        align-items: center;
        margin-top: var(--uui-size-1,3px);
      }

      #icon {
        font-size: 1.2em;
        margin-right: var(--uui-size-1,3px);
      }

      :host([selectable]) #open-part {
        padding: 0;
        margin: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      :host([disabled]) #name {
        pointer-events: none;
      }

      :host(:not([disabled])) #open-part:hover #icon {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #name {
        text-decoration: underline;
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #detail {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #default {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
    `];es([i({type:String})],Lr.prototype,"name",2);es([i({type:String})],Lr.prototype,"detail",2);es([b()],Lr.prototype,"_iconSlotHasContent",2);Lr=es([d("uui-card-content-node")],Lr);var Yc=Object.defineProperty,Zc=Object.getOwnPropertyDescriptor,wp=e=>{throw TypeError(e)},$o=(e,t,r,n)=>{for(var o=n>1?void 0:n?Zc(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Yc(t,r,o),o},Jc=(e,t,r)=>t.has(e)||wp("Cannot "+r),eh=(e,t,r)=>t.has(e)?wp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ts=(e,t,r)=>(Jc(e,t,"access private method"),r),Vr,xp,Dp,Aa,pr=class extends Q{constructor(){super(...arguments),eh(this,Vr),this.name="",this.fileExt="",this.hasPreview=!1}connectedCallback(){super.connectedCallback(),w(this,"uui-symbol-folder"),w(this,"uui-symbol-file")}queryPreviews(e){this.hasPreview=e.composedPath()[0].assignedElements({flatten:!0}).length>0}renderMedia(){return this.hasPreview===!0?"":this.fileExt===""?l`<uui-symbol-folder id="entity-symbol"></uui-symbol-folder>`:l`<uui-symbol-file
      id="entity-symbol"
      type="${this.fileExt}"></uui-symbol-file>`}render(){return l` ${this.renderMedia()}
      <slot @slotchange=${this.queryPreviews}></slot>
      ${this.href?ts(this,Vr,Dp).call(this):ts(this,Vr,xp).call(this)}
      <!-- Select border must be right after .open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>`}};Vr=new WeakSet;xp=function(){return l`
      <button
        id="open-part"
        tabindex=${this.disabled?D:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${ts(this,Vr,Aa).call(this)}
      </button>
    `};Dp=function(){return l`
      <a
        id="open-part"
        tabindex=${this.disabled?D:"0"}
        href=${x(this.disabled?void 0:this.href)}
        target=${x(this.target||void 0)}
        rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${ts(this,Vr,Aa).call(this)}
      </a>
    `};Aa=function(){return l`
      <div id="content" class="uui-text">
        <!--
        TODO: Implement info box when pop-out is ready
        -->
        <span id="name" title="${this.name}">${this.name}</span>
        <small id="detail">${this.detail}<slot name="detail"></slot></small>
      </div>
    `};pr.styles=[...Q.styles,u`
      #entity-symbol {
        align-self: center;
        width: 60%;
        margin-bottom: var(--uui-size-layout-1,24px);
        padding: var(--uui-size-space-6,24px);
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius,3px);
        object-fit: cover;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive,#1b264f);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }

      #open-part #name {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=''])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: column;
        font-family: inherit;
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding-top: var(--uui-size-space-3,9px);
      }

      #content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-top: 1px solid var(--uui-color-divider,#f6f6f7);
        border-radius: 0 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        pointer-events: none;
        opacity: 0.96;
      }

      #detail {
        opacity: 0.6;
      }

      :host(
          [image]:not([image='']):hover,
          [image]:not([image='']):focus,
          [image]:not([image='']):focus-within,
          [selected][image]:not([image='']),
          [error][image]:not([image=''])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3,9px) * -1)
          calc(var(--uui-size-space-4,12px) * -1);
        top: 0;
      }

      /*
      #info-icon {
        margin-right: var(--uui-size-2);
        display: flex;
        height: var(--uui-size-8);
      }
      */
    `];$o([i({type:String})],pr.prototype,"name",2);$o([i({type:String})],pr.prototype,"detail",2);$o([i({type:String,attribute:"file-ext"})],pr.prototype,"fileExt",2);$o([b()],pr.prototype,"hasPreview",2);pr=$o([d("uui-card-media")],pr);var th=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,Ep=e=>{throw TypeError(e)},Ua=(e,t,r,n)=>{for(var o=n>1?void 0:n?rh(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&th(t,r,o),o},oh=(e,t,r)=>t.has(e)||Ep("Cannot "+r),nh=(e,t,r)=>t.has(e)?Ep("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),rs=(e,t,r)=>(oh(e,t,"access private method"),r),Fr,Tp,Rp,$a,Lo=class extends Q{constructor(){super(...arguments),nh(this,Fr),this.name="",this._avatarSlotHasContent=!1,this._avatarSlotChanged=e=>{this._avatarSlotHasContent=Jl(e.target)}}connectedCallback(){super.connectedCallback(),w(this,"uui-avatar")}render(){return l`
      ${this.href?rs(this,Fr,Rp).call(this):rs(this,Fr,Tp).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>
      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};Fr=new WeakSet;Tp=function(){return l`<div
      id="open-part"
      tabindex=${this.disabled?D:"0"}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${rs(this,Fr,$a).call(this)}
    </div>`};Rp=function(){return l`<a
      id="open-part"
      tabindex=${this.disabled?D:"0"}
      href=${x(this.disabled?void 0:this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${rs(this,Fr,$a).call(this)}
    </a>`};$a=function(){return l`<div id="content">
      ${this._avatarSlotHasContent?D:l`<uui-avatar
            class="avatar"
            name=${this.name}
            size="m"></uui-avatar>`}
      <slot
        name="avatar"
        class="avatar"
        @slotchange=${this._avatarSlotChanged}></slot>
      <span title="${this.name}">${this.name}</span>
      <slot></slot>
    </div>`};Lo.styles=[...Q.styles,u`
      :host {
        min-width: 250px;
      }

      slot:not([name])::slotted(*) {
        font-size: var(--uui-type-small-size,12px);
        line-height: var(--uui-size-6,18px);
      }

      ::slotted(*) {
        text-align: center;
      }

      slot[name='tag'] {
        position: absolute;
        top: 6px;
        right: 6px;
        display: flex;
        justify-content: right;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-space-4,12px);
        right: var(--uui-size-space-4,12px);
        display: flex;
        justify-content: right;

        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      #open-part {
        cursor: pointer;
        flex-grow: 1;
        padding: var(--uui-size-space-5,18px) var(--uui-size-space-4,12px);
      }

      :host([disabled]) #open-part {
        pointer-events: none;
      }

      #open-part:hover #content {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #content > span {
        text-decoration: underline;
      }

      :host([selectable]) #open-part {
        padding: 0;
        margin: var(--uui-size-space-5,18px) var(--uui-size-space-4,12px);
      }

      #content {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        margin: 0 0 3px 0;
        height: 100%;
      }

      #content > span {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: center;
        margin-top: 3px;
        font-weight: 700;
        overflow-wrap: anywhere;
      }

      .avatar {
        font-size: 1.5em;
        margin-top: var(--uui-size-space-1,3px);
        margin-bottom: var(--uui-size-space-2,6px);
      }
    `];Ua([i({type:String})],Lo.prototype,"name",2);Ua([b()],Lo.prototype,"_avatarSlotHasContent",2);Lo=Ua([d("uui-card-user")],Lo);var sh=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,Pp=(e,t,r,n)=>{for(var o=n>1?void 0:n?ah(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&sh(t,r,o),o},os=class extends h{constructor(){super(),this.open=!1,console.error("\xB4uui-caret\xB4 is deprecated, please use \xB4uui-symbol-expand\xB4 or \xB4uui-symbol-sort\xB4")}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};os.styles=[u`
      :host {
        display: inline-block;
        width: 12px;
        vertical-align: middle;
      }

      svg {
        transform-origin: 50% 50%;
        transition: transform 100ms cubic-bezier(0.1, 0, 0.9, 1);

      :host([open]) svg {
        transform: rotate(180deg);
      }
    `];Pp([i({type:Boolean,reflect:!0})],os.prototype,"open",2);os=Pp([d("uui-caret")],os);var ih=Object.getOwnPropertyDescriptor,lh=(e,t,r,n)=>{for(var o=n>1?void 0:n?ih(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},ns=class extends me{renderCheckbox(){return l`
      <div id="ticker">
        <div id="icon-check">
          ${this.indeterminate?np:Mt}
        </div>
      </div>
    `}};ns.formAssociated=!0;ns.styles=[...me.styles,It,u`
      :host {
        --uui-checkbox-size: 18px;
      }

      #ticker {
        position: relative;
        grid-area: 'input';
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        box-sizing: border-box;
        width: var(--uui-checkbox-size);
        height: var(--uui-checkbox-size);
        border-radius: var(
          --uui-checkbox-border-radius,
          var(--uui-border-radius,3px)
        );

        color: var(--uui-toggle-color, var(--uui-color-selected-contrast,#fff));
        background-color: var(
          --uui-toggle-background-color,
          var(--uui-color-surface,#fff)
        );
        border: 1px solid
          var(--uui-checkbox-border-color, var(--uui-color-border-standalone,#c2c2c2));
        font-size: calc(var(--uui-checkbox-size) * 0.7);
      }
      label:hover input:not([disabled]) + #ticker {
        border-color: var(
          --uui-checkbox-border-color-hover,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-checkbox-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      label:focus #ticker {
        border-color: var(
          --uui-checkbox-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-checkbox-background-color-focus,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      input:checked:not([disabled]) + #ticker,
      input:indeterminate:not([disabled]) + #ticker {
        border-color: var(--uui-color-selected,#3544b1);
      }

      label:hover input:checked:not([disabled]) + #ticker,
      label:hover input:indeterminate:not([disabled]) + #ticker {
        border-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      label:focus input:checked + #ticker,
      label:focus input:indeterminate + #ticker {
        border-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      #icon-check {
        position: absolute;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 0;
        transition:
          fill 120ms,
          opacity 120ms;
        color: var(--uui-color-selected-contrast,#fff);
        opacity: 0;
      }

      #ticker::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: calc(
          var(--uui-checkbox-border-radius, var(--uui-border-radius,3px)) * 0.5
        );
        background-color: var(--uui-color-selected,#3544b1);
        transition:
          transform 120ms ease,
          opacity 120ms,
          background-color 120ms;
        transform: scale(0);
        opacity: 0;
      }
      label:hover input:checked:not([disabled]) + #ticker::before,
      label:hover input:indeterminate:not([disabled]) + #ticker::before {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:checked + #ticker::before,
      input:indeterminate + #ticker::before {
        transform: scale(1);
        opacity: 1;
      }
      input:checked + #ticker #icon-check,
      input:indeterminate + #ticker #icon-check {
        opacity: 1;
      }
      label:focus input:checked + #ticker,
      label:focus input:indeterminate + #ticker {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:focus + #ticker {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      :host(:not([disabled], [readonly]))
        label:active
        input:checked
        + #ticker::before {
        /** Stretch when mouse down */
        transform: scale(0.9);
      }

      :host(:not([disabled], [readonly]))
        label:active
        input:indeterminate
        + #ticker::before {
        /** Stretch when mouse down */
        transform: scale(0.9);
      }

      :host(:not([pristine]):invalid) #ticker,
      :host(:not([pristine]):invalid) label:hover #ticker,
      :host(:not([pristine]):invalid) label:hover input:checked:not([disabled]) + #ticker,
      :host(:not([pristine]):invalid) label:hover input:indeterminate:not([disabled]) + #ticker,
      :host(:not([pristine]):invalid) label:focus input:checked + #ticker,
      :host(:not([pristine]):invalid) label:focus input:indeterminate + #ticker,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover input:checked:not([disabled]) + #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover input:indeterminate:not([disabled]) + #ticker,
      :host(:not([pristine])[internals-invalid]) label:focus input:checked + #ticker,
      :host(:not([pristine])[internals-invalid]) label:focus input:indeterminate + #ticker {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }

      :host([disabled]) #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) input:checked + #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) input:indeterminate + #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #ticker::before {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) label:active #ticker {
        animation: ${Bt};
      }
      :host([disabled]) input:checked + #ticker #icon-check,
      :host([disabled]) input:indeterminate + #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `];ns=lh([d("uui-checkbox")],ns);var Vo=Te(class extends ve{constructor(e){if(super(e),e.type!==oe.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let r=e.element.classList;for(let n of this.st)n in t||(r.remove(n),this.st.delete(n));for(let n in t){let o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return H}});var ph={grad:.9,turn:360,rad:360/(2*Math.PI)},dt=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Y=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r+0},Ce=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e>t?e:t},Sp=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},kp=function(e){return{r:Ce(e.r,0,255),g:Ce(e.g,0,255),b:Ce(e.b,0,255),a:Ce(e.a)}},La=function(e){return{r:Y(e.r),g:Y(e.g),b:Y(e.b),a:Y(e.a,3)}},uh=/^#([0-9a-f]{3,8})$/i,ss=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Ap=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,s=Math.max(t,r,n),a=s-Math.min(t,r,n),p=a?s===t?(r-n)/a:s===r?2+(n-t)/a:4+(t-r)/a:0;return{h:60*(p<0?p+6:p),s:s?a/s*100:0,v:s/255*100,a:o}},Up=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var s=Math.floor(t),a=n*(1-r),p=n*(1-(t-s)*r),c=n*(1-(1-t+s)*r),y=s%6;return{r:255*[n,p,a,a,c,n][y],g:255*[c,n,n,p,a,a][y],b:255*[a,a,c,n,n,p][y],a:o}},Ip=function(e){return{h:Sp(e.h),s:Ce(e.s,0,100),l:Ce(e.l,0,100),a:Ce(e.a)}},Bp=function(e){return{h:Y(e.h),s:Y(e.s),l:Y(e.l),a:Y(e.a,3)}},Mp=function(e){return Up((r=(t=e).s,{h:t.h,s:(r*=((n=t.l)<50?n:100-n)/100)>0?2*r/(n+r)*100:0,v:n+r,a:t.a}));var t,r,n},Fo=function(e){return{h:(t=Ap(e)).h,s:(o=(200-(r=t.s))*(n=t.v)/100)>0&&o<200?r*n/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,r,n,o},dh=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ch=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,hh=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,mh=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Gp={string:[[function(e){var t=uh.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Y(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Y(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=hh.exec(e)||mh.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:kp({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=dh.exec(e)||ch.exec(e);if(!t)return null;var r,n,o=Ip({h:(r=t[1],n=t[2],n===void 0&&(n="deg"),Number(r)*(ph[n]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Mp(o)},"hsl"]],object:[[function(e){var t=e.r,r=e.g,n=e.b,o=e.a,s=o===void 0?1:o;return dt(t)&&dt(r)&&dt(n)?kp({r:Number(t),g:Number(r),b:Number(n),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,r=e.s,n=e.l,o=e.a,s=o===void 0?1:o;if(!dt(t)||!dt(r)||!dt(n))return null;var a=Ip({h:Number(t),s:Number(r),l:Number(n),a:Number(s)});return Mp(a)},"hsl"],[function(e){var t=e.h,r=e.s,n=e.v,o=e.a,s=o===void 0?1:o;if(!dt(t)||!dt(r)||!dt(n))return null;var a=function(p){return{h:Sp(p.h),s:Ce(p.s,0,100),v:Ce(p.v,0,100),a:Ce(p.a)}}({h:Number(t),s:Number(r),v:Number(n),a:Number(s)});return Up(a)},"hsv"]]},_p=function(e,t){for(var r=0;r<t.length;r++){var n=t[r][0](e);if(n)return[n,t[r][1]]}return[null,void 0]},yh=function(e){return typeof e=="string"?_p(e.trim(),Gp.string):typeof e=="object"&&e!==null?_p(e,Gp.object):[null,void 0]},Va=function(e,t){var r=Fo(e);return{h:r.h,s:Ce(r.s+100*t,0,100),l:r.l,a:r.a}},Fa=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Cp=function(e,t){var r=Fo(e);return{h:r.h,s:r.s,l:Ce(r.l+100*t,0,100),a:r.a}},Op=function(){function e(t){this.parsed=yh(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Y(Fa(this.rgba),2)},e.prototype.isDark=function(){return Fa(this.rgba)<.5},e.prototype.isLight=function(){return Fa(this.rgba)>=.5},e.prototype.toHex=function(){return t=La(this.rgba),r=t.r,n=t.g,o=t.b,a=(s=t.a)<1?ss(Y(255*s)):"","#"+ss(r)+ss(n)+ss(o)+a;var t,r,n,o,s,a},e.prototype.toRgb=function(){return La(this.rgba)},e.prototype.toRgbString=function(){return t=La(this.rgba),r=t.r,n=t.g,o=t.b,(s=t.a)<1?"rgba("+r+", "+n+", "+o+", "+s+")":"rgb("+r+", "+n+", "+o+")";var t,r,n,o,s},e.prototype.toHsl=function(){return Bp(Fo(this.rgba))},e.prototype.toHslString=function(){return t=Bp(Fo(this.rgba)),r=t.h,n=t.s,o=t.l,(s=t.a)<1?"hsla("+r+", "+n+"%, "+o+"%, "+s+")":"hsl("+r+", "+n+"%, "+o+"%)";var t,r,n,o,s},e.prototype.toHsv=function(){return t=Ap(this.rgba),{h:Y(t.h),s:Y(t.s),v:Y(t.v),a:Y(t.a,3)};var t},e.prototype.invert=function(){return _e({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),_e(Va(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),_e(Va(this.rgba,-t))},e.prototype.grayscale=function(){return _e(Va(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),_e(Cp(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),_e(Cp(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?_e({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):Y(this.rgba.a,3);var r},e.prototype.hue=function(t){var r=Fo(this.rgba);return typeof t=="number"?_e({h:t,s:r.s,l:r.l,a:r.a}):Y(r.h)},e.prototype.isEqual=function(t){return this.toHex()===_e(t).toHex()},e}(),_e=function(e){return e instanceof Op?e:new Op(e)},qo=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};qo.CHANGE="change";var bh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,Xe=(e,t,r,n)=>{for(var o=n>1?void 0:n?gh(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&bh(t,r,o),o},Oe=class extends h{constructor(){super(...arguments),this.isDraggingGridHandle=!1,this.disabled=!1,this.readonly=!1,this.hue=0,this.saturation=0,this.lightness=0,this.brightness=0,this.alpha=100,this._value="#000"}get value(){return this._value}set value(e){let t=this._value;this._value=e,this.requestUpdate("value",t);try{let r=_e(e);if(r.isValid()){let{h:n,s:o,l:s,a}=r.toHsl();n!==0&&(this.hue=n),this.lightness=s,this.saturation=o,this.brightness=this.getBrightness(s),this.alpha=a*100}}catch(r){console.error("Something went wrong parsing the color string.",r)}}handleGridDrag(e){if(this.disabled||this.readonly)return;let t=this.shadowRoot.querySelector(".color-area"),r=t.querySelector(".color-area__handle"),{width:n,height:o}=t.getBoundingClientRect();r.focus(),e.preventDefault(),e.stopPropagation(),this.isDraggingGridHandle=!0,Kn(t,{onMove:(s,a)=>{isNaN(s)||isNaN(a)||(this.saturation=M(s/n*100,0,100),this.brightness=M(100-a/o*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleGridKeyDown(e){if(this.disabled)return;let t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=M(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=M(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=M(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=M(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}getBrightness(e){return M(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return M((200-this.saturation)*e/100*5/10,0,100)}syncValues(){let e=_e({h:this.hue,s:this.saturation,l:this.lightness,a:this.alpha/100});this._value=e.toRgbString(),this.dispatchEvent(new qo(qo.CHANGE))}getHexString(e,t,r,n=100){let o=_e(`hsla(${e}, ${t}%, ${r}%, ${n/100})`);return o.isValid()?o.toHex():""}render(){let e=this.saturation,t=100-this.brightness;return l`
      <div
        part="grid"
        class="color-area"
        style=${ie({backgroundColor:this.getHexString(this.hue,100,50)})}
        @mousedown=${this.handleGridDrag}
        @touchstart=${this.handleGridDrag}>
        <span
          part="grid-handle"
          class=${Vo({"color-area__handle":!0,"color-area__handle--dragging":this.isDraggingGridHandle})}
          style=${ie({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.lightness,this.alpha)})}
          role="application"
          tabindex=${x(this.disabled?void 0:"0")}
          aria-label="HSB"
          @keydown=${this.handleGridKeyDown}></span>
      </div>
    `}};Oe.styles=[u`
      :host {
        display: inline-block;
        width: 280px;
        height: 200px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) .color-area {
        user-select: none;
        pointer-events: none;
        opacity: 0.55;
      }

      :host([readonly]) {
        pointer-events: none;
        cursor: default;
      }

      .color-area {
        position: relative;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          ),
          linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
        box-sizing: border-box;
        cursor: crosshair;
        forced-color-adjust: none;
      }
      .color-area__handle {
        position: absolute;
        width: var(--uui-color-area-grid-handle-size, 16px);
        height: var(--uui-color-area-grid-handle-size, 16px);
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        border: solid 2px white;
        margin-top: calc(var(--uui-color-area-grid-handle-size, 16px) / -2);
        margin-left: calc(var(--uui-color-area-grid-handle-size, 16px) / -2);
        transition: 150ms transform;
        box-sizing: inherit;
      }
      .color-area__handle--dragging {
        cursor: none;
        transform: scale(1.5);
      }
      .color-area__handle--empty {
        display: none;
      }
    `];Xe([b()],Oe.prototype,"isDraggingGridHandle",2);Xe([i({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);Xe([i({type:Boolean,reflect:!0})],Oe.prototype,"readonly",2);Xe([i({type:Number})],Oe.prototype,"hue",2);Xe([i({type:Number})],Oe.prototype,"saturation",2);Xe([i({type:Number})],Oe.prototype,"lightness",2);Xe([i({type:Number})],Oe.prototype,"brightness",2);Xe([i({type:Number})],Oe.prototype,"alpha",2);Xe([i({type:String})],Oe.prototype,"value",1);Oe=Xe([d("uui-color-area")],Oe);var{I:fh}=Il;var as=e=>e.strings===void 0,$p=()=>document.createComment(""),qr=(e,t,r)=>{let n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){let s=n.insertBefore($p(),o),a=n.insertBefore($p(),o);r=new fh(s,a,e,e.options)}else{let s=r._$AB.nextSibling,a=r._$AM,p=a!==e;if(p){let c;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==a._$AU&&r._$AP(c)}if(s!==o||p){let c=r._$AA;for(;c!==s;){let y=c.nextSibling;n.insertBefore(c,o),c=y}}}return r},_t=(e,t,r=e)=>(e._$AI(t,r),e),vh={},is=(e,t=vh)=>e._$AH=t,Lp=e=>e._$AH,ls=e=>{e._$AR(),e._$AA.remove()};var Vp=Te(class extends ve{constructor(e){if(super(e),e.type!==oe.PROPERTY&&e.type!==oe.ATTRIBUTE&&e.type!==oe.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!as(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===H||t===D)return t;let r=e.element,n=e.name;if(e.type===oe.PROPERTY){if(t===r[n])return H}else if(e.type===oe.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(n))return H}else if(e.type===oe.ATTRIBUTE&&r.getAttribute(n)===t+"")return H;return is(e),t}});var wh={grad:.9,turn:360,rad:360/(2*Math.PI)},ct=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Z=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r+0},Se=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e>t?e:t},Kp=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Fp=function(e){return{r:Se(e.r,0,255),g:Se(e.g,0,255),b:Se(e.b,0,255),a:Se(e.a)}},qa=function(e){return{r:Z(e.r),g:Z(e.g),b:Z(e.b),a:Z(e.a,3)}},xh=/^#([0-9a-f]{3,8})$/i,ps=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Xp=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,s=Math.max(t,r,n),a=s-Math.min(t,r,n),p=a?s===t?(r-n)/a:s===r?2+(n-t)/a:4+(t-r)/a:0;return{h:60*(p<0?p+6:p),s:s?a/s*100:0,v:s/255*100,a:o}},Yp=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var s=Math.floor(t),a=n*(1-r),p=n*(1-(t-s)*r),c=n*(1-(1-t+s)*r),y=s%6;return{r:255*[n,p,a,a,c,n][y],g:255*[c,n,n,p,a,a][y],b:255*[a,a,c,n,n,p][y],a:o}},qp=function(e){return{h:Kp(e.h),s:Se(e.s,0,100),l:Se(e.l,0,100),a:Se(e.a)}},Np=function(e){return{h:Z(e.h),s:Z(e.s),l:Z(e.l),a:Z(e.a,3)}},zp=function(e){return Yp((r=(t=e).s,{h:t.h,s:(r*=((n=t.l)<50?n:100-n)/100)>0?2*r/(n+r)*100:0,v:n+r,a:t.a}));var t,r,n},No=function(e){return{h:(t=Xp(e)).h,s:(o=(200-(r=t.s))*(n=t.v)/100)>0&&o<200?r*n/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,r,n,o},Dh=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Eh=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Th=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Rh=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ha={string:[[function(e){var t=xh.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Z(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Z(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Th.exec(e)||Rh.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Fp({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Dh.exec(e)||Eh.exec(e);if(!t)return null;var r,n,o=qp({h:(r=t[1],n=t[2],n===void 0&&(n="deg"),Number(r)*(wh[n]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return zp(o)},"hsl"]],object:[[function(e){var t=e.r,r=e.g,n=e.b,o=e.a,s=o===void 0?1:o;return ct(t)&&ct(r)&&ct(n)?Fp({r:Number(t),g:Number(r),b:Number(n),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,r=e.s,n=e.l,o=e.a,s=o===void 0?1:o;if(!ct(t)||!ct(r)||!ct(n))return null;var a=qp({h:Number(t),s:Number(r),l:Number(n),a:Number(s)});return zp(a)},"hsl"],[function(e){var t=e.h,r=e.s,n=e.v,o=e.a,s=o===void 0?1:o;if(!ct(t)||!ct(r)||!ct(n))return null;var a=function(p){return{h:Kp(p.h),s:Se(p.s,0,100),v:Se(p.v,0,100),a:Se(p.a)}}({h:Number(t),s:Number(r),v:Number(n),a:Number(s)});return Yp(a)},"hsv"]]},Hp=function(e,t){for(var r=0;r<t.length;r++){var n=t[r][0](e);if(n)return[n,t[r][1]]}return[null,void 0]},Ph=function(e){return typeof e=="string"?Hp(e.trim(),Ha.string):typeof e=="object"&&e!==null?Hp(e,Ha.object):[null,void 0]},Na=function(e,t){var r=No(e);return{h:r.h,s:Se(r.s+100*t,0,100),l:r.l,a:r.a}},za=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},jp=function(e,t){var r=No(e);return{h:r.h,s:r.s,l:Se(r.l+100*t,0,100),a:r.a}},us=function(){function e(t){this.parsed=Ph(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Z(za(this.rgba),2)},e.prototype.isDark=function(){return za(this.rgba)<.5},e.prototype.isLight=function(){return za(this.rgba)>=.5},e.prototype.toHex=function(){return t=qa(this.rgba),r=t.r,n=t.g,o=t.b,a=(s=t.a)<1?ps(Z(255*s)):"","#"+ps(r)+ps(n)+ps(o)+a;var t,r,n,o,s,a},e.prototype.toRgb=function(){return qa(this.rgba)},e.prototype.toRgbString=function(){return t=qa(this.rgba),r=t.r,n=t.g,o=t.b,(s=t.a)<1?"rgba("+r+", "+n+", "+o+", "+s+")":"rgb("+r+", "+n+", "+o+")";var t,r,n,o,s},e.prototype.toHsl=function(){return Np(No(this.rgba))},e.prototype.toHslString=function(){return t=Np(No(this.rgba)),r=t.h,n=t.s,o=t.l,(s=t.a)<1?"hsla("+r+", "+n+"%, "+o+"%, "+s+")":"hsl("+r+", "+n+"%, "+o+"%)";var t,r,n,o,s},e.prototype.toHsv=function(){return t=Xp(this.rgba),{h:Z(t.h),s:Z(t.s),v:Z(t.v),a:Z(t.a,3)};var t},e.prototype.invert=function(){return Fe({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Fe(Na(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Fe(Na(this.rgba,-t))},e.prototype.grayscale=function(){return Fe(Na(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Fe(jp(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Fe(jp(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Fe({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):Z(this.rgba.a,3);var r},e.prototype.hue=function(t){var r=No(this.rgba);return typeof t=="number"?Fe({h:t,s:r.s,l:r.l,a:r.a}):Z(r.h)},e.prototype.isEqual=function(t){return this.toHex()===Fe(t).toHex()},e}(),Fe=function(e){return e instanceof us?e:new us(e)},Wp=[],kh=function(e){e.forEach(function(t){Wp.indexOf(t)<0&&(t(us,Ha),Wp.push(t))})};function Ih(e,t){var r={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},n={};for(var o in r)n[r[o]]=o;var s={};e.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var p,c,y=n[this.toHex()];if(y)return y;if(a?.closest){var f=this.toRgb(),m=1/0,T="black";if(!s.length)for(var g in r)s[g]=new e(r[g]).toRgb();for(var R in r){var _=(p=f,c=s[R],Math.pow(p.r-c.r,2)+Math.pow(p.g-c.g,2)+Math.pow(p.b-c.b,2));_<m&&(m=_,T=R)}return T}},t.string.push([function(a){var p=a.toLowerCase(),c=p==="transparent"?"#0000":r[p];return c?new e(c).toRgb():null},"name"])}var ur=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};ur.CHANGE="change";var Bh=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,N=(e,t,r,n)=>{for(var o=n>1?void 0:n?Mh(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Bh(t,r,o),o};kh([Ih]);var Qp="EyeDropper"in window,L=class extends j("label",h){constructor(){super(...arguments),this._value="",this.inputValue="",this.hue=0,this.saturation=0,this.lightness=0,this.alpha=100,this._colord=Fe("hsl(0, 0%, 0%)"),this.format="hex",this.name="",this.size="medium",this.noFormatToggle=!1,this.inline=!1,this.disabled=!1,this.opacity=!1,this.readonly=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}set value(e){this.value!==e&&this.setColor(e),this._value=e}get value(){return this._value}connectedCallback(){super.connectedCallback(),w(this,"uui-icon"),w(this,"uui-icon-registry-essential"),w(this,"uui-input"),w(this,"uui-button"),w(this,"uui-button-group"),w(this,"uui-color-swatches"),w(this,"uui-color-swatch"),w(this,"uui-color-area"),w(this,"uui-color-slider"),w(this,"uui-popover-container")}getFormattedValue(e){let t=this.opacity?`${e}a`:e,r=this._colord.toHex(),n=r.length>7?r.substring(0,r.length-2):r,{r:o,g:s,b:a}=this._colord.toRgb(),{h:p,s:c,l:y}=this._colord.toHsl(),{v:f}=this._colord.toHsv(),m=this._colord.alpha();switch(t){case"hex":return this.setLetterCase(n);case"hexa":return this.setLetterCase(r);case"rgb":return this.setLetterCase(`rgb(${o}, ${s}, ${a})`);case"rgba":return this.setLetterCase(this._colord.toRgbString());case"hsl":return this.setLetterCase(`hsl(${p}, ${c}%, ${y}%)`);case"hsla":return this.setLetterCase(this._colord.toHslString());case"hsv":return this.setLetterCase(`hsv(${p}, ${c}%, ${y}%)`);case"hsva":return this.setLetterCase(`hsva(${p}, ${c}%, ${f}%, ${m})`);default:return""}}getBrightness(e){return M(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return M((200-this.saturation)*e/100*5/10,0,100)}handleFormatToggle(){let e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this._syncValues()}handleAlphaChange(e){e.stopPropagation(),this._swatches?.resetSelection();let t=e.target,r={h:this.hue,s:this.saturation,l:this.lightness,a:Math.round(t.value)/100};this.setColor(r)}handleHueChange(e){e.stopPropagation(),this._swatches?.resetSelection();let r={h:e.target.value,s:this.saturation,l:this.lightness,a:this.alpha/100};this.setColor(r)}handleGridChange(e){e.stopPropagation(),this._swatches?.resetSelection();let t=e.target,r={h:this.hue,s:t.saturation,l:t.lightness,a:this.alpha/100};this.setColor(r)}handleInputChange(e){e.stopImmediatePropagation(),this._swatches?.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue)}handleInputKeyDown(e){e.stopImmediatePropagation(),e.key==="Enter"&&(this._swatches?.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue),setTimeout(()=>this._input.select()))}handleColorSwatchChange(e){e.stopImmediatePropagation();let t=e.target;this.setColor(t.value)}handleCopy(){navigator.clipboard.writeText(this._input.value).then(()=>{this._previewButton.classList.add("color-picker__preview-color--copied"),this._previewButton.addEventListener("animationend",()=>{this._previewButton.classList.remove("color-picker__preview-color--copied")})})}handleEyeDropper(){if(!Qp)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}setColor(e){if(e===this.value)return;if(!e)return this.alpha=100,this.inputValue="",this._value=e,this.dispatchEvent(new ur(ur.CHANGE)),!0;let t=new us(e),{h:r,s:n,l:o,a:s}=t.toHsl();this.hue=r,this.saturation=n,this.lightness=o,this.alpha=this.opacity?s*100:100;let a=e;return a&&a.h&&(this.hue=a.h),this._colord=t,this._syncValues(),this.dispatchEvent(new ur(ur.CHANGE)),!0}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}getHexString(e,t,r,n=100){let o=Fe(`hsla(${e}, ${t}%, ${r}%, ${n/100})`);return o.isValid()?o.toHex():""}_syncValues(){this.inputValue=this.getFormattedValue(this.format),this._value=this.inputValue}_renderColorPicker(){return l`
      <div
        class=${Vo({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}>
        <uui-color-area
          .value="${this.value}"
          .hue="${Math.round(this.hue)}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this.handleGridChange}>
        </uui-color-area>
        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <uui-color-slider
              label="hue"
              class="hue-slider"
              .value=${Math.round(this.hue)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              @change=${this.handleHueChange}>
            </uui-color-slider>
            ${this.opacity?l`
                  <uui-color-slider
                    label="alpha"
                    class="opacity-slider"
                    .value=${Math.round(this.alpha)}
                    type="opacity"
                    .color=${this.getHexString(this.hue,this.saturation,this.lightness)}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.handleAlphaChange}>
                  </uui-color-slider>
                `:""}
          </div>
          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            title="Copy"
            aria-label="Copy"
            style=${ie({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
            @click=${this.handleCopy}></button>
        </div>
        <div class="color-picker__user-input" aria-live="polite">
          <uui-input
            label="label"
            type="text"
            part="input"
            name=${this.name}
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${Vp(this.inputValue)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}>
          </uui-input>
          <uui-button-group>
            ${this.noFormatToggle?"":l`<uui-button
                  label="Toggle color format"
                  @click=${this.handleFormatToggle}
                  class="color-picker__toggle-format"
                  ?disabled=${this.disabled}
                  compact>
                  <span>${this.format}</span>
                </uui-button>`}
            ${Qp?l`<uui-button
                  label="Select a color"
                  ?disabled=${this.disabled||this.readonly}
                  @click=${this.handleEyeDropper}
                  compact>
                  <uui-icon-registry-essential>
                    <uui-icon name="colorpicker"></uui-icon>
                  </uui-icon-registry-essential>
                </uui-button>`:""}
          </uui-button-group>
        </div>
        ${this._renderSwatches()}
      </div>
    `}_renderSwatches(){return this.swatches?.length?l`<uui-color-swatches
      id="swatches"
      class="color-picker__swatches"
      label="Swatches"
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      @change=${this.handleColorSwatchChange}>
      ${this.swatches.map(e=>l`<uui-color-swatch label="${e}" .value=${e}>
          </uui-color-swatch>`)}
    </uui-color-swatches>`:D}_renderPreviewButton(){return l`<button
        type="button"
        part="trigger"
        aria-label="${this.label||"Open Color picker"}"
        class=${Vo({"color-picker__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-picker__transparent-bg":!0})}
        style=${ie({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
        ?disabled=${this.disabled}
        aria-haspopup="true"
        aria-expanded="false"
        popovertarget="color-picker-popover"></button>
      <uui-popover-container id="color-picker-popover">
        ${this._renderColorPicker()}
      </uui-popover-container>`}render(){return this.inline?this._renderColorPicker():this._renderPreviewButton()}};L.styles=[u`
      :host {
        --uui-look-outline-border: #ddd;
        --uui-look-outline-border-hover: #aaa;
        font-size: 0.8rem;
        color: var(--uui-color-text,#060606);
        display: block;
        width: var(--uui-color-picker-width, 280px);
      }
      :host > button {
        cursor: pointer;
      }
      uui-popover-container {
        width: inherit;
      }
      .color-picker {
        width: 100%;
        background-color: var(--uui-color-surface,#fff);
        user-select: none;
        border: solid 1px var(--uui-color-border,#d8d7d9);
      }
      .color-picker__user-input {
        display: flex;
        padding: 0 0.75rem 0.75rem 0.75rem;
      }
      .color-picker__user-input uui-button {
        border: var(--uui-input-border-width, 1px) solid
          var(--uui-input-border-color, var(--uui-color-border,#d8d7d9));
        border-left: none;
      }
      .color-picker__preview,
      .color-picker__trigger {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 2.25rem;
        height: 2.25rem;
        border: none;
        border-radius: 50%;
        background: none;
      }
      .color-picker__preview {
        cursor: copy;
        margin-left: 0.75rem;
        border-radius: 50%;
      }
      .color-picker__trigger[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
      }
      .color-picker__preview::before,
      .color-picker__trigger::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
        background-color: var(--preview-color);
      }

      .color-dropdown__trigger--empty::before {
        background-color: transparent;
      }

      .color-picker__transparent-bg {
        border: 1px solid var(--uui-color-border,#d8d7d9);
        background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);
        background-size: 10px 10px;
        background-position:
          0 0,
          0 0,
          -5px -5px,
          5px 5px;
      }

      .color-picker__preview-color--copied {
        animation: pulse 0.75s;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 var(--uui-palette-space-cadet-light,rgb(
    38,
    53,
    110
  ));
        }
        70% {
          box-shadow: 0 0 0 0.5rem transparent;
        }
        100% {
          box-shadow: 0 0 0 0 transparent;
        }
      }

      .color-picker__controls {
        padding: 0.75rem;
        display: flex;
        align-items: center;
      }
      .color-picker__sliders {
        flex: 1 1 auto;
      }

      uui-color-slider:not(:last-of-type) {
        margin-bottom: 1rem;
      }

      .color-picker__toggle-format {
        min-width: 45px;
        --uui-button-font-size: 0.8rem;
      }
      .color-picker__toggle-format > span {
        text-transform: uppercase;
      }

      uui-color-swatches {
        border-top: solid 1px var(--uui-color-border,#d8d7d9);
        padding: 0.75rem;
      }

      button[slot='trigger'] {
        border-radius: 50%;
        cursor: pointer;
        width: 36px;
        height: 36px;
      }

      uui-input {
        /*  lower the font size to avoid overflow with hlsa format */
        font-size: 0.85rem;
        box-sizing: content-box;
        flex: 1;
      }

      uui-color-area {
        width: 100%;
      }
    `];N([P('[part="input"]')],L.prototype,"_input",2);N([P(".color-picker__preview")],L.prototype,"_previewButton",2);N([P("#swatches")],L.prototype,"_swatches",2);N([b()],L.prototype,"inputValue",2);N([b()],L.prototype,"hue",2);N([b()],L.prototype,"saturation",2);N([b()],L.prototype,"lightness",2);N([b()],L.prototype,"alpha",2);N([b()],L.prototype,"_colord",2);N([i()],L.prototype,"value",1);N([i()],L.prototype,"format",2);N([i()],L.prototype,"name",2);N([i()],L.prototype,"size",2);N([i({attribute:"no-format-toggle",type:Boolean})],L.prototype,"noFormatToggle",2);N([i({type:Boolean,reflect:!0})],L.prototype,"inline",2);N([i({type:Boolean,reflect:!0})],L.prototype,"disabled",2);N([i({type:Boolean})],L.prototype,"opacity",2);N([i({type:Boolean,reflect:!0})],L.prototype,"readonly",2);N([i({type:Boolean})],L.prototype,"uppercase",2);N([i({attribute:!1})],L.prototype,"swatches",2);L=N([d("uui-color-picker")],L);var Gh={grad:.9,turn:360,rad:360/(2*Math.PI)},ht=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},J=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r+0},Ae=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e>t?e:t},su=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Zp=function(e){return{r:Ae(e.r,0,255),g:Ae(e.g,0,255),b:Ae(e.b,0,255),a:Ae(e.a)}},ja=function(e){return{r:J(e.r),g:J(e.g),b:J(e.b),a:J(e.a,3)}},_h=/^#([0-9a-f]{3,8})$/i,ds=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},au=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,s=Math.max(t,r,n),a=s-Math.min(t,r,n),p=a?s===t?(r-n)/a:s===r?2+(n-t)/a:4+(t-r)/a:0;return{h:60*(p<0?p+6:p),s:s?a/s*100:0,v:s/255*100,a:o}},iu=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var s=Math.floor(t),a=n*(1-r),p=n*(1-(t-s)*r),c=n*(1-(1-t+s)*r),y=s%6;return{r:255*[n,p,a,a,c,n][y],g:255*[c,n,n,p,a,a][y],b:255*[a,a,c,n,n,p][y],a:o}},Jp=function(e){return{h:su(e.h),s:Ae(e.s,0,100),l:Ae(e.l,0,100),a:Ae(e.a)}},eu=function(e){return{h:J(e.h),s:J(e.s),l:J(e.l),a:J(e.a,3)}},tu=function(e){return iu((r=(t=e).s,{h:t.h,s:(r*=((n=t.l)<50?n:100-n)/100)>0?2*r/(n+r)*100:0,v:n+r,a:t.a}));var t,r,n},zo=function(e){return{h:(t=au(e)).h,s:(o=(200-(r=t.s))*(n=t.v)/100)>0&&o<200?r*n/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,r,n,o},Ch=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Oh=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Sh=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ah=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ru={string:[[function(e){var t=_h.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?J(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?J(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Sh.exec(e)||Ah.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Zp({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Ch.exec(e)||Oh.exec(e);if(!t)return null;var r,n,o=Jp({h:(r=t[1],n=t[2],n===void 0&&(n="deg"),Number(r)*(Gh[n]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return tu(o)},"hsl"]],object:[[function(e){var t=e.r,r=e.g,n=e.b,o=e.a,s=o===void 0?1:o;return ht(t)&&ht(r)&&ht(n)?Zp({r:Number(t),g:Number(r),b:Number(n),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,r=e.s,n=e.l,o=e.a,s=o===void 0?1:o;if(!ht(t)||!ht(r)||!ht(n))return null;var a=Jp({h:Number(t),s:Number(r),l:Number(n),a:Number(s)});return tu(a)},"hsl"],[function(e){var t=e.h,r=e.s,n=e.v,o=e.a,s=o===void 0?1:o;if(!ht(t)||!ht(r)||!ht(n))return null;var a=function(p){return{h:su(p.h),s:Ae(p.s,0,100),v:Ae(p.v,0,100),a:Ae(p.a)}}({h:Number(t),s:Number(r),v:Number(n),a:Number(s)});return iu(a)},"hsv"]]},ou=function(e,t){for(var r=0;r<t.length;r++){var n=t[r][0](e);if(n)return[n,t[r][1]]}return[null,void 0]},Uh=function(e){return typeof e=="string"?ou(e.trim(),ru.string):typeof e=="object"&&e!==null?ou(e,ru.object):[null,void 0]},Wa=function(e,t){var r=zo(e);return{h:r.h,s:Ae(r.s+100*t,0,100),l:r.l,a:r.a}},Qa=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},nu=function(e,t){var r=zo(e);return{h:r.h,s:r.s,l:Ae(r.l+100*t,0,100),a:r.a}},Ka=function(){function e(t){this.parsed=Uh(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return J(Qa(this.rgba),2)},e.prototype.isDark=function(){return Qa(this.rgba)<.5},e.prototype.isLight=function(){return Qa(this.rgba)>=.5},e.prototype.toHex=function(){return t=ja(this.rgba),r=t.r,n=t.g,o=t.b,a=(s=t.a)<1?ds(J(255*s)):"","#"+ds(r)+ds(n)+ds(o)+a;var t,r,n,o,s,a},e.prototype.toRgb=function(){return ja(this.rgba)},e.prototype.toRgbString=function(){return t=ja(this.rgba),r=t.r,n=t.g,o=t.b,(s=t.a)<1?"rgba("+r+", "+n+", "+o+", "+s+")":"rgb("+r+", "+n+", "+o+")";var t,r,n,o,s},e.prototype.toHsl=function(){return eu(zo(this.rgba))},e.prototype.toHslString=function(){return t=eu(zo(this.rgba)),r=t.h,n=t.s,o=t.l,(s=t.a)<1?"hsla("+r+", "+n+"%, "+o+"%, "+s+")":"hsl("+r+", "+n+"%, "+o+"%)";var t,r,n,o,s},e.prototype.toHsv=function(){return t=au(this.rgba),{h:J(t.h),s:J(t.s),v:J(t.v),a:J(t.a,3)};var t},e.prototype.invert=function(){return mt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),mt(Wa(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),mt(Wa(this.rgba,-t))},e.prototype.grayscale=function(){return mt(Wa(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),mt(nu(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),mt(nu(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?mt({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):J(this.rgba.a,3);var r},e.prototype.hue=function(t){var r=zo(this.rgba);return typeof t=="number"?mt({h:t,s:r.s,l:r.l,a:r.a}):J(r.h)},e.prototype.isEqual=function(t){return this.toHex()===mt(t).toHex()},e}(),mt=function(e){return e instanceof Ka?e:new Ka(e)},Ho=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Ho.CHANGE="change";var $h=Object.defineProperty,Lh=Object.getOwnPropertyDescriptor,Ye=(e,t,r,n)=>{for(var o=n>1?void 0:n?Lh(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&$h(t,r,o),o},Ue=class extends j("label",h){constructor(){super(...arguments),this.type="hue",this.color="",this.min=0,this.max=100,this.precision=1,this.vertical=!1,this.value=0,this.readonly=!1,this.disabled=!1}willUpdate(e){if(e.has("type")&&(this.type==="hue"?this.max=this.max??360:this.type==="saturation"?this.max=this.max??100:this.type==="lightness"?this.max=this.max??100:this.type==="opacity"&&(this.max=this.max??100),this.precision=this.precision??1,this.color)){let t=new Ka(this.color),{h:r,s:n,l:o}=t.toHsl(),s=this.type==="saturation"?`linear-gradient(to ${this.vertical?"top":"right"}, hsl(${r}, 0%, ${o}%), hsl(${r}, 100%, ${o}%))`:this.type==="lightness"?`linear-gradient(to ${this.vertical?"top":"right"}, hsl(${r}, ${n}%, 0%), hsl(${r}, ${n}%, 100%))`:null;this.style.setProperty("--uui-slider-background-image",s)}}firstUpdated(){this.container=this.shadowRoot.querySelector("#color-slider"),this.handle=this.container.querySelector("#color-slider__handle")}handleDrag(e){if(this.disabled||this.readonly||!this.container||!this.handle)return;let{width:t,height:r}=this.container.getBoundingClientRect();this.handle.focus(),e.preventDefault(),Kn(this.container,{onMove:(n,o)=>{this.vertical?this.value=Ga(M(o/r*this.max,this.min,this.max),this.min,this.max):this.value=M(n/t*this.max,this.min,this.max),this.syncValues()},initialEvent:e})}handleClick(e){this.disabled||this.readonly||(this.value=this.getValueFromMousePosition(e),this.syncValues())}handleKeyDown(e){let t=e.shiftKey?10:1;e.key==="ArrowLeft"?(e.preventDefault(),this.value=M(this.value-t,this.min,this.max),this.syncValues()):e.key==="ArrowRight"?(e.preventDefault(),this.value=M(this.value+t,this.min,this.max),this.syncValues()):e.key==="ArrowUp"?(e.preventDefault(),this.value=M(this.value+t,this.min,this.max),this.syncValues()):e.key==="ArrowDown"?(e.preventDefault(),this.value=M(this.value-t,this.min,this.max),this.syncValues()):e.key==="Home"?(e.preventDefault(),this.value=this.min,this.syncValues()):e.key==="End"&&(e.preventDefault(),this.value=this.max,this.syncValues())}getValueFromMousePosition(e){return this.vertical?this.getValueFromYCoordinate(e.clientY):this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.vertical?this.getValueFromYCoordinate(e.touches[0].clientY):this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){let{left:t,width:r}=this.container.getBoundingClientRect();return M(this.roundToPrecision((e-t)/r*this.max),this.min,this.max)}getValueFromYCoordinate(e){let{top:t,height:r}=this.container.getBoundingClientRect();return M(this.roundToPrecision((e-t)/r*this.max),this.min,this.max)}roundToPrecision(e){let t=1/this.precision;return Math.ceil(e*t)/t}syncValues(){this.dispatchEvent(new Ho(Ho.CHANGE))}get cssPropCurrentValue(){return this.value===0?this.vertical?100:0:100/(this.vertical?this.max/Ga(this.value,this.min,this.max):this.max/this.value)}render(){return l` <div
        part="slider"
        id="color-slider"
        role="slider"
        aria-label="${this.label}"
        aria-orientation="${this.vertical?"vertical":"horizontal"}"
        aria-valuemin="${Math.round(this.min)}"
        aria-valuemax="${Math.round(this.max)}"
        aria-valuenow="${Math.round(this.value)}"
        @click=${this.handleClick}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
        @keydown=${this.handleKeyDown}>
        ${this.type==="opacity"?l`<div
              id="current-hue"
              style=${ie({backgroundImage:`linear-gradient(to ${this.vertical?"top":"right"},
            transparent 0%,
            ${this.color} 100%
            )`})}></div>`:""}
        <!-- <slot name="detail"> </slot> -->
        <span
          id="color-slider__handle"
          style="--current-value: ${this.cssPropCurrentValue}%;"
          tabindex=${x(this.disabled?void 0:"0")}>
        </span>
      </div>
      ${Math.round(this.value)}`}};Ue.styles=[u`
      :host {
        --uui-slider-height: 15px;
        --uui-slider-handle-size: 17px;
        --uui-slider-background-image: #fff;
        --uui-slider-background-size: 100%;
        --uui-slider-background-position: top left;
        display: block;
      }

      :host([type='hue']) {
        --uui-slider-background-image: linear-gradient(
          to right,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 17%,
          rgb(0, 255, 0) 33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 67%,
          rgb(255, 0, 255) 83%,
          rgb(255, 0, 0) 100%
        );
      }

      :host([vertical][type='hue']) {
        --uui-slider-background-image: linear-gradient(
          to top,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 17%,
          rgb(0, 255, 0) 33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 67%,
          rgb(255, 0, 255) 83%,
          rgb(255, 0, 0) 100%
        );
      }

      :host([type='opacity']) {
        --uui-slider-background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);

        --uui-slider-background-size: 10px 10px;
        --uui-slider-background-position: 0 0, 0 0, -5px -5px, 5px 5px;
      }

      #color-slider {
        position: relative;
        background-image: var(--uui-slider-background-image);
        background-size: var(--uui-slider-background-size);
        background-position: var(--uui-slider-background-position);
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: var(--uui-slider-height);
      }

      :host([vertical]) #color-slider {
        width: var(--uui-slider-height);
        height: 300px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) #color-slider {
        user-select: none;
        pointer-events: none;
        opacity: 0.55;
      }

      :host([readonly]) {
        cursor: default;
      }

      :host([readonly]) #color-slider {
        pointer-events: none;
      }

      #color-slider__handle {
        position: absolute;
        top: calc(50% - var(--uui-slider-handle-size) / 2);
        width: var(--uui-slider-handle-size);
        height: var(--uui-slider-handle-size);
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        margin-left: calc(var(--uui-slider-handle-size) / -2);
        left: var(--current-value, 0%);
      }

      :host([vertical]) #color-slider__handle {
        left: unset;
        top: var(--current-value, 100%);
        margin-left: -1px;
        margin-top: calc(var(--uui-slider-handle-size) / -2);
      }

      ::slotted(*:first-child) {
        border-radius: 3px;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }

      #current-hue {
        border-radius: 3px;
        position: absolute;
        inset: 0 0 0 0;
      }
    `];Ye([i({reflect:!0})],Ue.prototype,"type",2);Ye([i()],Ue.prototype,"color",2);Ye([i({type:Number})],Ue.prototype,"min",2);Ye([i({type:Number})],Ue.prototype,"max",2);Ye([i({type:Number})],Ue.prototype,"precision",2);Ye([i({type:Boolean,reflect:!0})],Ue.prototype,"vertical",2);Ye([i()],Ue.prototype,"value",2);Ye([i({type:Boolean,reflect:!0})],Ue.prototype,"readonly",2);Ye([i({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);Ue=Ye([d("uui-color-slider")],Ue);var jo=(e,t)=>{let r=e._$AN;if(r===void 0)return!1;for(let n of r)n._$AO?.(t,!1),jo(n,t);return!0},cs=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},lu=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),qh(t)}};function Vh(e){this._$AN!==void 0?(cs(this),this._$AM=e,lu(this)):this._$AM=e}function Fh(e,t=!1,r=0){let n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=r;s<n.length;s++)jo(n[s],!1),cs(n[s]);else n!=null&&(jo(n,!1),cs(n));else jo(this,e)}var qh=e=>{e.type==oe.CHILD&&(e._$AP??(e._$AP=Fh),e._$AQ??(e._$AQ=Vh))},hs=class extends ve{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,n){super._$AT(t,r,n),lu(this),this.isConnected=t._$AU}_$AO(t,r=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),r&&(jo(this,t),cs(this))}setValue(t){if(as(this._$Ct))this._$Ct._$AI(t,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var ms=()=>new Ya,Ya=class{},Xa=new WeakMap,Nr=Te(class extends hs{render(e){return D}update(e,[t]){let r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),D}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){let t=this.ht??globalThis,r=Xa.get(t);r===void 0&&(r=new WeakMap,Xa.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Xa.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Nh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,pu=e=>{throw TypeError(e)},zr=(e,t,r,n)=>{for(var o=n>1?void 0:n?zh(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Nh(t,r,o),o},Hh=(e,t,r)=>t.has(e)||pu("Cannot "+r),jh=(e,t,r)=>t.has(e)?pu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Wh=(e,t,r)=>(Hh(e,t,"access private method"),r),Za,uu,Ct=class extends j("label",Me(Ke(h))){constructor(){super(),jh(this,Za),this.disabled=!1,this.readonly=!1,this.showLabel=!1,this.addEventListener("click",this._setAriaAttributes)}get value(){return this._value??""}set value(e){let t=this._value;this._value=e,this.requestUpdate("value",t)}get color(){return this._color}set color(e){let t=this._color;this._color=e,this.requestUpdate("color",t)}_setAriaAttributes(){this.selectable&&this.setAttribute("aria-checked",this.selected.toString())}firstUpdated(){this._setAriaAttributes()}willUpdate(e){(e.has("disabled")||e.has("readonly"))&&this.selectable&&(this.selectable=!this.disabled&&!this.readonly,this.deselectable=!this.disabled&&!this.readonly),(e.has("selectable")||e.has("selected"))&&this._setAriaAttributes()}focus(e){this.selectableTarget?.focus(e)}render(){return l`
      <button
        id="swatch"
        ${Nr(Wh(this,Za,uu))}
        aria-label=${this.label}
        ?disabled="${this.disabled}"
        title="${this.label}">
        <div class="color-swatch color-swatch--transparent-bg">
          <div
            class="color-swatch__color"
            style="background: var(--uui-swatch-color, ${this.color??this.value})"></div>
          <div
            class="color-swatch__check"
            style="color: var(--uui-swatch-color, ${this.color??this.value})">
            ${Mt}
          </div>
        </div>
        ${this._renderWithLabel()}
      </button>
    `}_renderWithLabel(){return this.showLabel?l`<div class="color-swatch__label">
      <strong>${this.renderLabel()}</strong>
      ${this.value}
    </div>`:D}};Za=new WeakSet;uu=function(e){this.selectableTarget=e||this};Ct.styles=[u`
      :host {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        transition: box-shadow 100ms ease-out;
        flex-direction: column;
      }

      :host(*),
      * {
        /* TODO: implement globally shared outline style */
        outline-color: var(--uui-color-focus,#3879ff);
        outline-offset: 4px;
      }

      :host(:focus-within:not([disabled])) {
        outline: none;
      }

      :host(:focus:not([disabled])) #swatch {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-swatch-border-width, 1px);
        outline-style: solid;
        outline-offset: var(--uui-swatch-border-width, 1px);
      }

      :host([selectable]) #swatch {
        cursor: pointer;
      }

      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }

      :host([readonly]) {
        cursor: default;
      }

      #swatch {
        cursor: inherit;
        outline: none;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        text-align: left;
        border-radius: 3px;
      }

      :host(:not([selectable])) #swatch:focus {
        outline: none;
      }

      :host([selectable]) #swatch::after {
        content: '';
        position: absolute;
        pointer-events: none;
        inset: calc(var(--uui-swatch-border-width, 1px) * -1);
        width: calc(100% + calc(var(--uui-swatch-border-width, 1px) * 2));
        height: calc(100% + calc(var(--uui-swatch-border-width, 1px) * 2));
        box-sizing: border-box;
        border: var(--uui-swatch-border-width, 2px) solid
          var(--uui-color-selected,#3544b1);
        border-radius: calc(
          var(--uui-border-radius,3px) + var(--uui-swatch-border-width, 1px)
        );
        transition: opacity 100ms ease-out;
        opacity: 0;
      }
      :host([selectable]:not([disabled]):hover) #swatch::after {
        opacity: 0.33;
      }
      :host([selectable][selected]:not([disabled]):hover) #swatch::after {
        opacity: 0.66;
      }
      :host([selectable][selected]:not([disabled])) #swatch::after {
        opacity: 1;
      }

      .color-swatch {
        position: relative;
        width: var(--uui-swatch-size, 25px);
        height: var(--uui-swatch-size, 25px);
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      :host([show-label]) .color-swatch {
        width: 120px;
        height: 50px;
      }

      .color-swatch.color-swatch--transparent-bg {
        background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);
        background-size: 10px 10px;
        background-position:
          0 0,
          0 0,
          -5px -5px,
          5px 5px;
      }
      .color-swatch__color {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: inherit;
        box-sizing: border-box;
      }

      :host([show-label]) .color-swatch__color {
        border-radius: 3px 3px 0 0;
      }

      .color-swatch__check {
        position: absolute;
        vertical-align: middle;
        width: calc(var(--uui-swatch-size, 25px) / 2);
        height: calc(var(--uui-swatch-size, 25px) / 2);
        line-height: 0;
        filter: invert(1) grayscale(1) contrast(9);
        pointer-events: none;
        opacity: 0;
      }

      :host([selected]) .color-swatch__check {
        opacity: 1;
      }

      slot[name='label']::slotted(*),
      .label {
        font-size: var(--uui-size-4,12px);
      }

      .color-swatch__label {
        max-width: 120px;
        box-sizing: border-box;
        padding: var(--uui-size-space-1,3px) var(--uui-size-space-2,6px);
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        background: white;
        border: 1px solid var(--uui-color-border,#d8d7d9);
        border-radius: 0 0 3px 3px;
        font-size: var(--uui-size-4, 12px);
      }

      .color-swatch__label strong {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }
    `];zr([i()],Ct.prototype,"value",1);zr([i()],Ct.prototype,"color",1);zr([i({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);zr([i({type:Boolean,reflect:!0})],Ct.prototype,"readonly",2);zr([i({type:Boolean,attribute:"show-label",reflect:!0})],Ct.prototype,"showLabel",2);Ct=zr([d("uui-color-swatch")],Ct);var dr=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};dr.CHANGE="change";var Qh=Object.defineProperty,Kh=Object.getOwnPropertyDescriptor,Wo=(e,t,r,n)=>{for(var o=n>1?void 0:n?Kh(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Qh(t,r,o),o},cr=class extends j("label",h){constructor(){super(),this.value="",this.disabled=!1,this.readonly=!1,this._onSelected=e=>{let t=e.target;this._swatches.includes(t)&&(this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=t,this._activeElement=this._selectedElement,this.value=this._selectedElement.value||"",this.dispatchEvent(new dr(dr.CHANGE)))},this._onDeselected=e=>{let t=e.target;this._swatches.includes(t)&&(this._activeElement===t&&(this._activeElement=void 0),this._selectedElement===t&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0,this.value="",this.dispatchEvent(new dr(dr.CHANGE))))},this.addEventListener(Ge.SELECTED,this._onSelected),this.addEventListener(Ge.DESELECTED,this._onDeselected)}get _activeElement(){return this.__activeElement}set _activeElement(e){this.__activeElement&&(this.__activeElement.active=!1),e&&(e.active=!0,this.__activeElement=e)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.setAttribute("aria-label",this.label)}willUpdate(e){e.has("label")&&this.setAttribute("aria-label",this.label)}_handleSlotChange(){!this._swatches||this._swatches.length===0||this._swatches.forEach(e=>{e.setAttribute("aria-checked","false"),e.setAttribute("role","radio"),this.disabled?e.setAttribute("disabled",""):e.setAttribute("selectable","selectable"),this.readonly&&e.setAttribute("readonly",""),this.value!==""&&e.value===this.value&&(e.selected=!0,e.setAttribute("aria-checked","true"),this._selectedElement=e,this._activeElement=this._selectedElement)})}resetSelection(){this._swatches.forEach(e=>{e.selected=!1,e.active=!1,e.selectable=!e.disabled}),this._activeElement=void 0,this._selectedElement=void 0,this.value=""}render(){return l`<slot @slotchange=${this._handleSlotChange}></slot>`}};cr.styles=[u`
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
    `];Wo([i()],cr.prototype,"value",2);Wo([i({type:Boolean,reflect:!0})],cr.prototype,"disabled",2);Wo([i({type:Boolean,reflect:!0})],cr.prototype,"readonly",2);Wo([he({selector:"uui-color-swatch"})],cr.prototype,"_swatches",2);cr=Wo([d("uui-color-swatches")],cr);var ye=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};ye.CHANGE="change";ye.INNER_SLOT_CHANGE="inner-slot-change";var Xh=Object.defineProperty,Yh=Object.getOwnPropertyDescriptor,cu=e=>{throw TypeError(e)},St=(e,t,r,n)=>{for(var o=n>1?void 0:n?Yh(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Xh(t,r,o),o},Zh=(e,t,r)=>t.has(e)||cu("Cannot "+r),Jh=(e,t,r)=>t.has(e)?cu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),du=(e,t,r)=>(Zh(e,t,"access private method"),r),ys,Ja,Ze=class extends h{constructor(){super(...arguments),Jh(this,ys),this.displayValue="",this._value="",this._activeElementValue=null,this._onSlotChange=()=>{du(this,ys,Ja).call(this),this._updateSelection(),this.dispatchEvent(new ye(ye.INNER_SLOT_CHANGE))},this._onSelected=e=>{this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=e.composedPath()[0],this.value=this._selectedElement.value||"",this.displayValue=this._selectedElement.displayValue||"",this.dispatchEvent(new ye(ye.CHANGE))},this._onDeselected=e=>{let t=e.composedPath()[0];this._selectedElement===t&&(this.value="",this.displayValue="",this.dispatchEvent(new ye(ye.CHANGE)))},this._moveIndex=e=>{let t=Math.min(Math.max(this._getActiveIndex+e,0),this._options.length-1);this._goToIndex(t)},this._onKeyDown=e=>{if(!(this._options.length<=0))switch(e.key){case"ArrowUp":e.preventDefault(),e.ctrlKey?this._moveIndex(-10):this._moveIndex(-1);break;case"ArrowDown":e.preventDefault(),e.ctrlKey?this._moveIndex(10):this._moveIndex(1);break;case"Home":{e.preventDefault(),this._goToIndex(0);break}case"Enter":{e.preventDefault(),this._getActiveElement?.click();break}case"End":{e.preventDefault(),this._goToIndex(this._options.length-1);break}}}}get value(){return this._value}set value(e){if(this._value===e)return;let t=this._value;this._value=e,this._updateSelection(),this.requestUpdate("value",t)}get for(){return this._for}set for(e){this._for&&this._for.removeEventListener("keydown",this._onKeyDown),this._for=e,this._for&&this._for.addEventListener("keydown",this._onKeyDown)}connectedCallback(){super.connectedCallback(),this._for||(this._for=this),this.addEventListener(Ge.SELECTED,this._onSelected),this.addEventListener(Ge.DESELECTED,this._onDeselected)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),this.removeEventListener(Ge.SELECTED,this._onSelected),this.removeEventListener(Ge.DESELECTED,this._onDeselected)}_updateSelection(){this.displayValue="";for(let e of this._options)e.value===this._value?(this.displayValue=e.displayValue||"",e.selected=!0):e.selected=!1}get _getActiveIndex(){return this._activeElementValue===null?-1:this._options.findIndex(e=>e.value===this._activeElementValue)}get _getActiveElement(){return this._activeElementValue===null?null:this._options.find(e=>e.value===this._activeElementValue)}_goToIndex(e){if(this._options.length===0)return;e=Math.min(Math.max(e,0),this._options.length-1);let t=this._options[e];this._activeElementValue=t.value,du(this,ys,Ja).call(this),t&&t.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}render(){return l` <slot @slotchange=${this._onSlotChange}></slot> `}};ys=new WeakSet;Ja=function(){for(let t=0;t<this._activeOptions.length;t++)this._activeOptions[t].active=!1;let e=this._getActiveElement;e?e.active=!0:this._goToIndex(0)};Ze.styles=[u`
      :host {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }
    `];St([i()],Ze.prototype,"value",1);St([i({type:String})],Ze.prototype,"displayValue",2);St([i({attribute:!1})],Ze.prototype,"for",1);St([he({flatten:!0,selector:"uui-combobox-list-option:not([disabled])"})],Ze.prototype,"_options",2);St([he({flatten:!0,selector:"uui-combobox-list-option[active]"})],Ze.prototype,"_activeOptions",2);St([b()],Ze.prototype,"_value",2);St([b()],Ze.prototype,"_activeElementValue",2);Ze=St([d("uui-combobox-list")],Ze);var em=Object.defineProperty,tm=Object.getOwnPropertyDescriptor,Hr=(e,t,r,n)=>{for(var o=n>1?void 0:n?tm(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&em(t,r,o),o},Ot=class extends Me(Ke(h)){constructor(){super(),this._disabled=!1,this._displayValue="",this.selectable=!0,this.deselectable=!1}get value(){return this._value?this._value:this.textContent?.trim()||""}set value(e){let t=this._value;this._value=e,this.requestUpdate("value",t)}get displayValue(){return this._displayValue?this._displayValue:this.textContent?.trim()||""}set displayValue(e){let t=this._displayValue;this._displayValue=e,this.requestUpdate("displayValue",t)}get disabled(){return this._disabled}set disabled(e){let t=this._disabled;this._disabled=e,this.selectable=!this._disabled,this.requestUpdate("disabled",t)}render(){return l`<slot></slot>`}};Ot.styles=[u`
      :host {
        position: relative;
        cursor: pointer;
        margin: 1px var(--uui-size-2,6px);
        border-radius: var(--uui-border-radius,3px);
        outline: 2px solid transparent;
        outline-offset: -2px;
        padding: var(--uui-size-1,3px);
        padding-left: var(--uui-size-2,6px);
      }

      :host(:first-child) {
        margin-top: 6px;
      }
      :host(:last-child) {
        margin-bottom: 6px;
      }

      :host([selected]):host([active])::after {
        display: block;
        content: '';
        position: absolute;
        inset: 0px;
        outline: var(--uui-color-surface,#fff) solid 2px;
        outline-offset: -4px;
      }
      /*
      :host::before {
        display: block;
        content: '';
        opacity: 0;
        position: absolute;
        inset: 0;
        background-color: var(--uui-color-selected);
      }

      :host(:hover)::before {
        opacity: 0.15;
        border-radius: var(--uui-border-radius);
      } */

      :host(:hover) {
        background-color: var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ));
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      :host([disabled]:hover) {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      :host([active]) {
        outline-color: var(--uui-color-focus,#3879ff);
      }

      :host([selected]) {
        color: var(--uui-color-selected-contrast,#fff);
        background-color: var(--uui-color-selected,#3544b1);
      }

      :host([selected]:hover) {
        color: var(--uui-color-selected-contrast,#fff);
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }
      :host([selected][disabled]) {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
    `];Hr([b()],Ot.prototype,"_disabled",2);Hr([b()],Ot.prototype,"_displayValue",2);Hr([i({type:String})],Ot.prototype,"value",1);Hr([i({type:String,attribute:"display-value"})],Ot.prototype,"displayValue",1);Hr([i({type:Boolean,reflect:!0})],Ot.prototype,"disabled",1);Ot=Hr([d("uui-combobox-list-option")],Ot);var we=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};we.SEARCH="search";we.CHANGE="change";var rm=Object.defineProperty,om=Object.getOwnPropertyDescriptor,hu=e=>{throw TypeError(e)},pe=(e,t,r,n)=>{for(var o=n>1?void 0:n?om(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&rm(t,r,o),o},ni=(e,t,r)=>t.has(e)||hu("Cannot "+r),I=(e,t,r)=>(ni(e,t,"read from private field"),r?r.call(e):t.get(e)),ne=(e,t,r)=>t.has(e)?hu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),mu=(e,t,r,n)=>(ni(e,t,"write to private field"),t.set(e,r),r),bs=(e,t,r)=>(ni(e,t,"access private method"),r),xe,jr,Qr,yu,Qo,Es,gs,fs,ei,Ts,Rs,ti,vs,Wr,ri,ws,xs,oi,Ds,ee=class extends W(h,""){constructor(){super(...arguments),ne(this,Qr),this.closeLabel="Close",this.disabled=!1,this.hideExpandSymbol=!1,this.readonly=!1,this.placeholder="",ne(this,xe),ne(this,jr),this._displayValue="",this._search="",this._isPhone=!1,this._isOpen=!1,ne(this,Qo,()=>{this._isPhone=I(this,jr).matches}),ne(this,gs,()=>requestAnimationFrame(()=>this._input.focus())),ne(this,fs,()=>requestAnimationFrame(()=>{this.shadowRoot?.activeElement||I(this,Wr).call(this)})),ne(this,ei,e=>{e.preventDefault(),e.stopImmediatePropagation(),this.search=e.target.value,this.dispatchEvent(new we(we.SEARCH)),I(this,vs).call(this)}),ne(this,Ts,()=>{this.value&&this.value!==I(this,xe)?.value&&bs(this,Qr,Es).call(this)}),ne(this,Rs,()=>{this.value=I(this,xe)?.value||"",this.search=this.value?this.search:"",I(this,Wr).call(this),this.dispatchEvent(new we(we.CHANGE))}),ne(this,ti,()=>{this.readonly||(this.open=!this.open)}),ne(this,vs,()=>{this.open||this.readonly||(this.open=!0)}),ne(this,Wr,()=>{this.open&&(this.open=!1,this.search="",this._input.value=this._displayValue,this.dispatchEvent(new we(we.SEARCH)))}),ne(this,ri,e=>{this.open===!1&&e.key==="Enter"&&(e.preventDefault(),e.stopImmediatePropagation()),(e.key==="ArrowUp"||e.key==="ArrowDown")&&I(this,vs).call(this),(e.key==="Escape"||e.key==="Enter")&&I(this,Wr).call(this)}),ne(this,ws,e=>{e.key&&e.key!=="Enter"||(e.preventDefault(),e.stopImmediatePropagation(),this.value="",this.search="",this._input.value=this._displayValue,this._input.focus(),this.dispatchEvent(new we(we.SEARCH)),this.dispatchEvent(new we(we.CHANGE)))}),ne(this,xs,()=>l` <uui-input
      slot="trigger"
      id="combobox-input"
      label="combobox-input"
      type="text"
      .value=${this._displayValue}
      .placeholder=${this.placeholder}
      autocomplete="off"
      .disabled=${this.disabled}
      .readonly=${this.readonly}
      popovertarget="combobox-popover"
      @click=${I(this,ti)}
      @input=${I(this,ei)}
      @keydown=${I(this,ri)}>
      <slot name="input-prepend" slot="prepend"></slot>
      ${I(this,oi).call(this)}
      ${this.hideExpandSymbol?D:l`<div id="expand-symbol-wrapper" slot="append">
            <uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
          </div>`}
      <slot name="input-append" slot="append"></slot>
    </uui-input>`),ne(this,oi,()=>this.disabled?D:this.readonly?D:l`<uui-button
      id="clear-button"
      @click=${I(this,ws)}
      @keydown=${I(this,ws)}
      label="clear"
      slot="append"
      compact
      style="height: 100%;"
      tabindex=${this.value||this.search?"":"-1"}
      class=${this.value||this.search?"visible":""}>
      <uui-icon name="remove" .fallback=${Or.strings[0]}></uui-icon>
    </uui-button>`),ne(this,Ds,()=>l`<div id="dropdown">
      <uui-scroll-container tabindex="-1" id="scroll-container">
        <slot @slotchange=${bs(this,Qr,yu)}></slot>
      </uui-scroll-container>
    </div>`)}get value(){return super.value}set value(e){super.value=e,typeof e=="string"&&bs(this,Qr,Es).call(this)}get search(){return this._search}set search(e){if(this.search===e)return;let t=this._search;this._search=e,this.requestUpdate("search",t)}get open(){return this._isOpen}set open(e){let t=e;this._isOpen=e;let r=this._comboboxPopoverElement;if(r)if(e){let n=this._input.offsetWidth;r.style.setProperty("--popover-width",`${n}px`),r.showPopover()}else r.hidePopover();this.requestUpdate("open",t)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",I(this,fs)),this.addEventListener("mousedown",I(this,gs)),mu(this,jr,window.matchMedia("(max-width: 600px)")),I(this,Qo).call(this),I(this,jr).addEventListener("change",I(this,Qo)),w(this,"uui-icon"),w(this,"uui-input"),w(this,"uui-button"),w(this,"uui-combobox-list"),w(this,"uui-scroll-container"),w(this,"uui-popover-container"),w(this,"uui-symbol-expand")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",I(this,fs)),this.removeEventListener("mousedown",I(this,gs)),I(this,jr).removeEventListener("change",I(this,Qo))}getFormElement(){return this._input}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}render(){return this._isPhone&&this.open?l` <div id="phone-wrapper">
        <uui-button label="close" look="primary" @click=${I(this,Wr)}>
          ${this.closeLabel}
        </uui-button>
        ${I(this,xs).call(this)} ${I(this,Ds).call(this)}
      </div>`:l`
        ${I(this,xs).call(this)}
        <uui-popover-container
          id="combobox-popover"
          popover="manual"
          placement="bottom-end">
          ${I(this,Ds).call(this)}
        </uui-popover-container>
      `}};xe=new WeakMap;jr=new WeakMap;Qr=new WeakSet;yu=function(){I(this,xe)&&(I(this,xe).removeEventListener(ye.CHANGE,I(this,Rs)),I(this,xe).removeEventListener(ye.INNER_SLOT_CHANGE,I(this,Ts)));let e=this._comboboxListElements?.[0];e&&(mu(this,xe,e),I(this,xe).for=this,I(this,xe).addEventListener(ye.CHANGE,I(this,Rs)),I(this,xe).addEventListener(ye.INNER_SLOT_CHANGE,I(this,Ts))),this.updateComplete.then(()=>{bs(this,Qr,Es).call(this)})};Qo=new WeakMap;Es=function(){I(this,xe)&&(I(this,xe).value=this.value,requestAnimationFrame(()=>this._displayValue=I(this,xe).displayValue||""))};gs=new WeakMap;fs=new WeakMap;ei=new WeakMap;Ts=new WeakMap;Rs=new WeakMap;ti=new WeakMap;vs=new WeakMap;Wr=new WeakMap;ri=new WeakMap;ws=new WeakMap;xs=new WeakMap;oi=new WeakMap;Ds=new WeakMap;ee.styles=[u`
      :host {
        display: inline-block;
      }

      #combobox-input {
        width: 100%;
        border-radius: var(--uui-size-1,3px);
      }

      #combobox-popover {
        width: var(--uui-dropdown-width, var(--popover-width, inherit));
      }

      #scroll-container {
        overflow-y: auto;
        width: 100%;
        max-height: var(--uui-combobox-popover-max-height, 500px);
      }
      #expand-symbol-wrapper {
        height: 100%;
        padding-right: var(--uui-size-space-3,9px);
        display: flex;
        justify-content: center;
      }

      #clear-button {
        opacity: 0;
        transition: opacity 80ms;
      }

      :host(:not([disabled]):not([readonly]):focus-within)
        #clear-button.visible,
      :host(:not([disabled]):not([readonly]):hover) #clear-button.visible {
        opacity: 1;
      }

      #dropdown {
        overflow: hidden;
        z-index: -1;
        background-color: var(
          --uui-combobox-popover-background-color,
          var(--uui-color-surface,#fff)
        );
        border: 1px solid var(--uui-color-border,#d8d7d9);
        border-radius: var(--uui-border-radius,3px);
        width: 100%;
        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-3,0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23));
      }

      :host([disabled]) #caret {
        fill: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      #phone-wrapper {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;
        z-index: 1;
        font-size: 1.1em;
      }

      #phone-wrapper #dropdown {
        display: flex;
      }

      #phone-wrapper #combobox-input {
        height: var(--uui-size-16,48px);
      }

      #phone-wrapper > uui-button {
        height: var(--uui-size-14,42px);
        width: 100%;
      }

      #phone-wrapper #scroll-container {
        max-height: unset;
      }
    `];pe([i({attribute:"value",reflect:!0})],ee.prototype,"value",1);pe([i({type:String})],ee.prototype,"search",1);pe([i({type:Boolean})],ee.prototype,"open",1);pe([i({type:String,attribute:"close-label"})],ee.prototype,"closeLabel",2);pe([i({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);pe([i({type:Boolean,reflect:!1,attribute:"hide-expand-symbol"})],ee.prototype,"hideExpandSymbol",2);pe([i({type:Boolean,reflect:!0})],ee.prototype,"readonly",2);pe([i()],ee.prototype,"placeholder",2);pe([P("#combobox-input")],ee.prototype,"_input",2);pe([P("#combobox-popover")],ee.prototype,"_comboboxPopoverElement",2);pe([he({flatten:!0,selector:"uui-combobox-list"})],ee.prototype,"_comboboxListElements",2);pe([b()],ee.prototype,"_displayValue",2);pe([b()],ee.prototype,"_search",2);pe([b()],ee.prototype,"_isPhone",2);pe([b()],ee.prototype,"_isOpen",2);ee=pe([d("uui-combobox")],ee);var nm=Object.defineProperty,sm=Object.getOwnPropertyDescriptor,si=(e,t,r,n)=>{for(var o=n>1?void 0:n?sm(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&nm(t,r,o),o},Ko=class extends h{constructor(){super(...arguments),this.headline=null,this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}renderHeadline(){return l` <h3
      style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
      ${this.headline}
      <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
    </h3>`}renderContent(){return l`<slot></slot>`}renderActions(){return l`<slot id="actions" name="actions"></slot>`}render(){return l`${this.renderHeadline()} ${this.renderContent()}
    ${this.renderActions()} `}};Ko.styles=[u`
      :host {
        display: block;
        padding: var(--uui-size-10,30px) var(--uui-size-14,42px);
        color: var(--uui-color-text,#060606);
      }

      #actions {
        margin-top: var(--uui-size-8,24px);
        display: flex;
        justify-content: end;
        gap: var(--uui-size-4,12px);
      }
    `];si([i({type:String})],Ko.prototype,"headline",2);si([b()],Ko.prototype,"_headlineSlotHasContent",2);Ko=si([d("uui-dialog-layout")],Ko);var am=Object.getOwnPropertyDescriptor,im=(e,t,r,n)=>{for(var o=n>1?void 0:n?am(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},ai=class extends h{render(){return l`<slot></slot>`}};ai.styles=[u`
      :host {
        position: relative;
        display: block;
        max-width: 580px;
        color: var(--uui-color-text,#060606);

        background-color: var(
          --uui-dialog-background-color,
          var(--uui-color-surface,#fff)
        );

        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
        border-radius: var(
          --uui-dialog-border-radius,
          calc(var(--uui-border-radius,3px) * 2)
        );
      }
    `];ai=im([d("uui-dialog")],ai);var lm=Object.defineProperty,pm=Object.getOwnPropertyDescriptor,bu=(e,t,r,n)=>{for(var o=n>1?void 0:n?pm(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&lm(t,r,o),o},Ps=class extends h{constructor(){super(...arguments),this.error=!1}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      id="upload-icon">
      <path
        d=${this.error?"M254.501 38.16c-120.308 0-217.838 97.53-217.838 217.838 0 120.31 97.53 217.838 217.838 217.838 120.31 0 217.838-97.528 217.838-217.838 0-120.308-97.528-217.838-217.838-217.838zm151.667 217.838c0 29.861-8.711 57.708-23.671 81.209L173.293 128.002c23.499-14.961 51.345-23.67 81.208-23.67 83.629.001 151.667 68.037 151.667 151.666zm-303.332 0c0-29.859 8.71-57.707 23.67-81.204l209.201 209.201c-23.498 14.96-51.346 23.671-81.206 23.671-83.632 0-151.665-68.04-151.665-151.668z":"M206.491 364.184h99.013V223.676h92.922L255.997 51.111 113.575 223.676h92.916zM85.043 398.311h341.912v62.578H85.043z"} />
    </svg> `}};Ps.styles=[u`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      #upload-icon {
        fill: var(--uui-color-default,#1b264f);
        width: 100px;
        transition: fill 0.3s ease;
        position: relative;
        z-index: 2;
      }

      :host([error]) #upload-icon {
        fill: var(--uui-color-invalid,#d42054);
      }
    `];bu([i({type:Boolean,reflect:!0})],Ps.prototype,"error",2);Ps=bu([d("uui-symbol-file-dropzone")],Ps);var hr=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};hr.CHANGE="change";var um=Object.defineProperty,dm=Object.getOwnPropertyDescriptor,Kr=(e,t,r,n)=>{for(var o=n>1?void 0:n?dm(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&um(t,r,o),o},At=class extends j("",h){constructor(){super(),this._acceptedFileExtensions=[],this._acceptedMimeTypes=[],this._accept="",this.disallowFolderUpload=!1,this.multiple=!1,this.addEventListener("dragenter",this._onDragEnter,!1),this.addEventListener("dragleave",this._onDragLeave,!1),this.addEventListener("dragover",this._onDragOver,!1),this.addEventListener("drop",this._onDrop,!1)}set accept(e){if(e){let r=[],n=[];e.split(",").forEach(o=>{o=o.trim().toLowerCase(),/[a-z]+\/[a-z*]/s.test(o)?r.push(o):n.push(o.replace(/^\./,""))}),this._acceptedMimeTypes=r,this._acceptedFileExtensions=n}else this._acceptedMimeTypes=[],this._acceptedFileExtensions=[];let t=this._accept;this._accept=e,this.requestUpdate("accept",t)}get accept(){return this._accept}browse(){this._input.click()}async _getAllEntries(e){let t=[...e],r=[],n=[];for(let o of t){if(o?.kind!=="file")continue;let s=this._getEntry(o);if(s)if(s.isDirectory){if(!this.disallowFolderUpload&&this.multiple){let a=await this._mkdir(s);r.push(a)}}else{let a=o.getAsFile();if(!a)continue;this._isAccepted(a)&&n.push(a)}}return{files:n,folders:r}}_getEntry(e){let t=null;return"webkitGetAsEntry"in e?t=e.webkitGetAsEntry():"getAsEntry"in e&&(t=e.getAsEntry()),t}async _mkdir(e){let t=e.createReader(),r=[],n=[],o=a=>new Promise((p,c)=>{a.readEntries(async y=>{if(!y.length){p();return}for(let f of y)if(f.isFile){let m=await this._getAsFile(f);this._isAccepted(m)&&n.push(m)}else if(f.isDirectory){let m=await this._mkdir(f);r.push(m)}await o(a),p()},c)});return await o(t),{folderName:e.name,folders:r,files:n}}_isAccepted(e){if(this._acceptedFileExtensions.length===0&&this._acceptedMimeTypes.length===0)return!0;let t=e.type.toLowerCase(),r=e.name.split(".").pop();if(r&&this._acceptedFileExtensions.includes(r.toLowerCase()))return!0;for(let n of this._acceptedMimeTypes){if(t===n)return!0;if(n.endsWith("/*")&&t.startsWith(n.replace("*","")))return!0}return!1}async _getAsFile(e){return new Promise((t,r)=>e.file(t,r))}async _onDrop(e){e.preventDefault(),this._dropzone.classList.remove("hover");let t=e.dataTransfer?.items;if(t){let r=await this._getAllEntries(t);if(this.multiple===!1&&r.files.length&&(r.files=[r.files[0]],r.folders=[]),!r.files.length&&!r.folders.length)return;this.dispatchEvent(new hr(hr.CHANGE,{detail:r}))}}_onDragOver(e){e.preventDefault()}_onDragEnter(e){this._dropzone.classList.add("hover"),e.preventDefault()}_onDragLeave(e){this._dropzone.classList.remove("hover"),e.preventDefault()}_onFileInputChange(){let e=this._input.files?Array.from(this._input.files):[];this.multiple===!1&&e.length>1&&e.splice(1,e.length-1);let t=e.filter(r=>this._isAccepted(r));t.length&&this.dispatchEvent(new hr(hr.CHANGE,{detail:{files:t,folders:[]}}))}render(){return l`
      <div id="dropzone">
        <uui-symbol-file-dropzone id="symbol"></uui-symbol-file-dropzone>
        ${this.renderLabel()}
        <input
          @click=${e=>e.stopImmediatePropagation()}
          id="input"
          type="file"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change=${this._onFileInputChange}
          aria-label="${this.label}" />
        <slot></slot>
      </div>
    `}};At.styles=[u`
      #dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: var(--uui-size-4,12px);
        border: 3px solid transparent;
        margin: -3px;
        backdrop-filter: blur(2px);
      }
      #dropzone.hover {
        border-color: var(--uui-color-default,#1b264f);
      }
      #dropzone.hover::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0.2;
        border-color: var(--uui-color-default,#1b264f);
        background-color: var(--uui-color-default,#1b264f);
      }
      #symbol {
        color: var(--uui-color-default,#1b264f);
        max-width: 100%;
        max-height: 100%;
      }
      #input {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        display: none;
      }
    `];Kr([P("#input")],At.prototype,"_input",2);Kr([P("#dropzone")],At.prototype,"_dropzone",2);Kr([i({type:String})],At.prototype,"accept",1);Kr([i({type:Boolean,reflect:!0,attribute:"disallow-folder-upload"})],At.prototype,"disallowFolderUpload",2);Kr([i({type:Boolean})],At.prototype,"multiple",2);At=Kr([d("uui-file-dropzone")],At);var ii=class{static humanFileSize(t,r=!1,n=1){let o=r?1e3:1024;if(Math.abs(t)<o)return t+" B";let s=r?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1,p=10**n;do t/=o,++a;while(Math.round(Math.abs(t)*p)/p>=o&&a<s.length-1);return t.toFixed(n)+" "+s[a]}},cm=Object.defineProperty,hm=Object.getOwnPropertyDescriptor,Je=(e,t,r,n)=>{for(var o=n>1?void 0:n?hm(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&cm(t,r,o),o},$e=class extends h{constructor(){super(...arguments),this._name="",this._url="",this._extension="",this._src="",this._size=0,this._isDirectory=!1}get file(){return this._file}set file(e){let t=this._file;e instanceof File&&(this._name=e.name.split(".")[0],this._extension=e.name.split(".")[1],this._isDirectory=!1,this._size=e.size,this._isFileAnImage(e)&&(this._isImage=!0,this._getThumbnail(e).then(r=>{this._src=r})),this.requestUpdate("file",t))}connectedCallback(){super.connectedCallback(),w(this,"uui-symbol-file-thumbnail"),w(this,"uui-symbol-folder"),w(this,"uui-symbol-file")}_openSource(){window.open(this._url,"_blank")}_fileTypeTemplate(){return this._isDirectory?l`<uui-symbol-folder id="file-symbol"></uui-symbol-folder>`:this._isImage?l`<uui-symbol-file-thumbnail
        .src=${this._src}
        .alt=${this._name}
        id="file-symbol"></uui-symbol-file-thumbnail>`:l`<uui-symbol-file
      id="file-symbol"
      .type=${this._extension}></uui-symbol-file>`}_renderLongName(){let t=this._name.substring(0,this._name.length-6),r=this._name.substring(this._name.length-6,this._name.length);return l`
      <span
        id="file-name"
        class=${this._url?"has-source":""}
        @click=${()=>this._url?this._openSource():""}
        @keydown=${()=>""}>
        <span id="file-name-start">${t}</span>
        <span id="file-name-end">${r}</span>
      </span>
    `}_isFileAnImage(e){return e?e.type.split("/")[0]==="image":!1}async _getThumbnail(e){return await new Promise(t=>{let r=new FileReader;r.readAsDataURL(e),r.onload=()=>{t(r.result)}})}render(){return l`
      <slot id="actions" name="actions"></slot>
      ${this._fileTypeTemplate()}
      <div id="file-info">
        ${this._renderLongName()}
        <span id="file-size">
          ${this._size&&!this._isDirectory?l`${ii.humanFileSize(this._size,!0)}`:""}
        </span>
      </div>
    `}};$e.styles=[u`
      :host {
        position: relative;
        display: grid;
        /* These have to be changed together */
        grid-template-rows: 100px 50px;
        width: 150px;
        height: 150px;
        /* --------------------------------- */
        box-sizing: border-box;
        aspect-ratio: 1;
        color: var(--uui-color-text,#060606);
      }

      :host(:hover) slot[name='actions']::slotted(*) {
        opacity: 1;
      }

      slot[name='actions']::slotted(*) {
        position: absolute;
        top: 8px;
        right: 8px;
        max-width: 100%;
        height: 32px;
        font-size: 13px;
        opacity: 0;
        z-index: 1;
        transition: opacity 150ms;
      }

      #file-symbol {
        aspect-ratio: 1 / 1;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
      }

      #file-info {
        min-width: 0;
        display: flex;
        text-align: center;
        flex-direction: column;
        font-size: 1rem;
      }

      #file-name {
        display: flex;
        justify-content: center;
      }

      #file-name-start {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      #file-name-end {
        white-space: nowrap;
      }

      #file-size {
        opacity: 0.6;
      }

      .has-source:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `];Je([b()],$e.prototype,"_name",2);Je([b()],$e.prototype,"_url",2);Je([b()],$e.prototype,"_extension",2);Je([b()],$e.prototype,"_src",2);Je([b()],$e.prototype,"_size",2);Je([b()],$e.prototype,"_isDirectory",2);Je([b()],$e.prototype,"_file",2);Je([b()],$e.prototype,"_isImage",2);Je([i({attribute:!1})],$e.prototype,"file",1);$e=Je([d("uui-file-preview")],$e);var mm=Object.defineProperty,ym=Object.getOwnPropertyDescriptor,ks=(e,t,r,n)=>{for(var o=n>1?void 0:n?ym(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&mm(t,r,o),o},Xr=class extends h{constructor(){super(...arguments),this.description=null,this._labelSlotHasContent=!1,this._labelSlotChanged=e=>{this._labelSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},this._descriptionSlotHasContent=!1,this._descriptionSlotChanged=e=>{this._descriptionSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}connectedCallback(){super.connectedCallback(),w(this,"uui-form-validation-message")}render(){return l`
      <div id="label" style=${this._labelSlotHasContent?"":"display: none"}>
        <slot name="label" @slotchange=${this._labelSlotChanged}></slot>
      </div>
      <div
        id="description"
        style=${this._descriptionSlotHasContent||this.description!==null?"":"display: none"}>
        ${this.description}
        <slot
          name="description"
          @slotchange=${this._descriptionSlotChanged}></slot>
      </div>
      <uui-form-validation-message>
        <slot></slot>
        <slot name="message" slot="message"></slot>
      </uui-form-validation-message>
    `}};Xr.styles=[u`
      :host {
        position: relative;
        display: block;
        margin-top: var(--uui-size-space-5,18px);
        margin-bottom: var(--uui-size-space-5,18px);
      }
      #label {
        margin-top: -5px;
        margin-bottom: 5px;
      }
      #description {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        font-size: var(--uui-type-small-size,12px);
      }
      #label + #description {
        margin-top: -8px;
        min-height: 8px;
      }
    `];ks([i({type:String})],Xr.prototype,"description",2);ks([b()],Xr.prototype,"_labelSlotHasContent",2);ks([b()],Xr.prototype,"_descriptionSlotHasContent",2);Xr=ks([d("uui-form-layout-item")],Xr);var gu=(e,t,r)=>{let n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Yr=Te(class extends ve{constructor(e){if(super(e),e.type!==oe.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);let o=[],s=[],a=0;for(let p of e)o[a]=n?n(p,a):a,s[a]=r(p,a),a++;return{values:s,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){let o=Lp(e),{values:s,keys:a}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=a,s;let p=this.ut??(this.ut=[]),c=[],y,f,m=0,T=o.length-1,g=0,R=s.length-1;for(;m<=T&&g<=R;)if(o[m]===null)m++;else if(o[T]===null)T--;else if(p[m]===a[g])c[g]=_t(o[m],s[g]),m++,g++;else if(p[T]===a[R])c[R]=_t(o[T],s[R]),T--,R--;else if(p[m]===a[R])c[R]=_t(o[m],s[R]),qr(e,c[R+1],o[m]),m++,R--;else if(p[T]===a[g])c[g]=_t(o[T],s[g]),qr(e,o[m],o[T]),T--,g++;else if(y===void 0&&(y=gu(a,g,R),f=gu(p,m,T)),y.has(p[m]))if(y.has(p[T])){let _=f.get(a[g]),B=_!==void 0?o[_]:null;if(B===null){let q=qr(e,o[m]);_t(q,s[g]),c[g]=q}else c[g]=_t(B,s[g]),qr(e,o[m],B),o[_]=null;g++}else ls(o[T]),T--;else ls(o[m]),m++;for(;g<=R;){let _=qr(e,c[R+1]);_t(_,s[g]),c[g++]=_}for(;m<=T;){let _=o[m++];_!==null&&ls(_)}return this.ut=a,is(e,c),H}});var Xo=class extends ve{constructor(t){if(super(t),this.it=D,t.type!==oe.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===D||t==null)return this._t=void 0,this.it=t;if(t===H)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Xo.directiveName="unsafeHTML",Xo.resultType=1;var Zr=Te(Xo);var bm=Object.defineProperty,gm=Object.getOwnPropertyDescriptor,fu=(e,t,r,n)=>{for(var o=n>1?void 0:n?gm(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&bm(t,r,o),o},Is=class extends h{constructor(){super(),this._for=null,this._messages=new Map,this._onControlInvalid=e=>{let t=e.composedPath()[0];t.pristine===!1?this._messages.set(t,t.validationMessage):this._messages.delete(t),this.requestUpdate("_messages")},this._onControlValid=e=>{let t=e.composedPath()[0];this._messages.delete(t),this.requestUpdate("_messages")},this.for===null&&(this.for=this)}get for(){return this._for}set for(e){let t=null;typeof e=="string"?t=this.getRootNode()?.getElementById(e):e instanceof HTMLElement&&(t=e);let r=t??this,n=this._for;n!==r&&(n!==null&&(n.removeEventListener(lt.INVALID,this._onControlInvalid),n.removeEventListener(lt.VALID,this._onControlValid)),this._for=r,this._for.addEventListener(lt.INVALID,this._onControlInvalid),this._for.addEventListener(lt.VALID,this._onControlValid))}render(){return l`
      <slot></slot>
      <div id="messages">
        ${Yr(this._messages,e=>l`<div>${Zr(e[1])}</div>`)}
        <slot name="message"></slot>
      </div>
    `}};Is.styles=[u`
      #messages {
        color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];fu([i({reflect:!1,attribute:!0})],Is.prototype,"for",1);Is=fu([d("uui-form-validation-message")],Is);var fm=Object.getOwnPropertyDescriptor,vm=(e,t,r,n)=>{for(var o=n>1?void 0:n?fm(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},vu=class extends h{constructor(){super(...arguments),this._formElement=null}getFormElement(){return this._formElement}_onSlotChanged(e){this._formElement&&(this._formElement.removeEventListener("submit",this._onSubmit),this._formElement.removeEventListener("reset",this._onReset));let t=e.target.assignedNodes({flatten:!0}).filter(r=>r instanceof HTMLFormElement);this._formElement=t.length>0?t[0]:null,this._formElement&&(this._formElement.setAttribute("novalidate",""),this._formElement.addEventListener("submit",this._onSubmit),this._formElement.addEventListener("reset",this._onReset))}_onSubmit(e){if(e.target===null)return;let t=e.target;if(!t.checkValidity()){t.setAttribute("submit-invalid","");return}t.removeAttribute("submit-invalid")}_onReset(e){e.target!==null&&e.target.removeAttribute("submit-invalid")}render(){return l`<slot @slotchange=${this._onSlotChanged}></slot>`}};vu=vm([d("uui-form")],vu);var Ut=class extends E{constructor(t,r={}){super(t,{bubbles:!0,composed:!0,...r}),this.icon=null}acceptRequest(t){this.icon=t,this.stopImmediatePropagation()}};Ut.ICON_REQUEST="icon-request";var wm=Object.defineProperty,xm=Object.getOwnPropertyDescriptor,mr=(e,t,r,n)=>{for(var o=n>1?void 0:n?xm(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&wm(t,r,o),o},yt=class extends h{constructor(){super(...arguments),this._name=null,this._retrievedNameIcon=!1,this._nameSvg=null,this.label="",this.svg=null,this.fallback=null,this._useFallback=!1}get name(){return this._name}set name(e){this._name=e,this.shadowRoot&&this.requestIcon()}requestIcon(){if(this._name!==""&&this._name!==null){let e=new Ut(Ut.ICON_REQUEST,{detail:{iconName:this._name}});this.dispatchEvent(e),e.icon!==null?(this._retrievedNameIcon=!0,e.icon.then(t=>{this._useFallback=!1,this._nameSvg=t})):(this._retrievedNameIcon=!1,this._useFallback=!0)}}connectedCallback(){super.connectedCallback(),this._retrievedNameIcon===!1&&this.requestIcon()}disconnectedCallback(){this._retrievedNameIcon=!1}firstUpdated(){this._retrievedNameIcon===!1&&this.requestIcon(),typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}render(){return this._useFallback===!0?this.fallback===null?l`<slot name="fallback"></slot>`:l`${Zr(this.fallback)}`:this._nameSvg!==null?l`${Zr(this._nameSvg)}`:this.svg!==null?l`${Zr(this.svg)}`:l`<slot></slot>`}};yt.styles=[u`
      :host {
        vertical-align: text-bottom;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.125em;
        height: 1.125em;
      }

      :host svg,
      ::slotted(svg) {
        color: var(--uui-icon-color, currentColor);
        width: 100%;
      }

      :host-context(div[slot='prepend']) {
        margin-left: var(--uui-size-2, 6px);
      }

      :host-context(div[slot='append']) {
        margin-right: var(--uui-size-2, 6px);
      }
    `];mr([b()],yt.prototype,"_nameSvg",2);mr([i()],yt.prototype,"label",2);mr([i()],yt.prototype,"name",1);mr([i({attribute:!1})],yt.prototype,"svg",2);mr([i({attribute:!1})],yt.prototype,"fallback",2);mr([b()],yt.prototype,"_useFallback",2);yt=mr([d("uui-icon")],yt);var Bs=class{constructor(t){this.promise=new Promise((r,n)=>{this.resolve=r,this.reject=n}),t&&this.resolve(t)}set svg(t){this.resolve(t)}},Yo=class{constructor(){this.icons={},this._onIconRequest=t=>{let r=this.getIcon(t.detail.iconName);r!==null&&t.acceptRequest(r)}}attach(t){t.addEventListener(Ut.ICON_REQUEST,this._onIconRequest)}detach(t){t.removeEventListener(Ut.ICON_REQUEST,this._onIconRequest)}defineIcon(t,r){if(this.icons[t]){this.icons[t].svg=r;return}this.icons[t]=new Bs(r)}getIcon(t){return this.icons[t]||this.acceptIcon(t)?this.icons[t].promise:null}provideIcon(t){return this.icons[t]=new Bs}acceptIcon(t){return!1}getIconNames(){return Object.keys(this.icons)}},Dm=Object.defineProperty,Em=Object.getOwnPropertyDescriptor,wu=(e,t,r,n)=>{for(var o=n>1?void 0:n?Em(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Dm(t,r,o),o},Zo=class extends h{constructor(){super(),this._icons={},this._registry=new Yo,this._registry.attach(this)}get icons(){return this._icons}set icons(e){this._icons=e,this._registry&&Object.entries(this._icons).forEach(([t,r])=>this._registry.defineIcon(t,r))}get registry(){return this._registry}set registry(e){this.registry&&this.registry.detach(this),e.attach(this),this._registry=e}render(){return l`<slot></slot>`}};wu([i({attribute:!1})],Zo.prototype,"_icons",2);Zo=wu([d("uui-icon-registry")],Zo);var Tm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,Rm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,Pm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,km=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`,Im=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`,Bm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,Mm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,Gm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,_m=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`,Cm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`,Om=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,Sm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,Am=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,Um=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,$m=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,Lm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,Vm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,Fm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`,qm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,Nm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`,zm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`,Hm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`,jm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`,Wm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`,Qm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`,Km=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`,Xm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`,Ym=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`,Zm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,Jm=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`,ey=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`,ty=v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,li=class extends Yo{constructor(){super(),this.defineIcon("add",Tm.strings[0]),this.defineIcon("alert",Rm.strings[0]),this.defineIcon("attachment",Pm.strings[0]),this.defineIcon("calendar",km.strings[0]),this.defineIcon("check",Im.strings[0]),this.defineIcon("clipboard",Bm.strings[0]),this.defineIcon("code",Mm.strings[0]),this.defineIcon("colorpicker",Gm.strings[0]),this.defineIcon("copy",_m.strings[0]),this.defineIcon("delete",Cm.strings[0]),this.defineIcon("document",Om.strings[0]),this.defineIcon("download",Sm.strings[0]),this.defineIcon("edit",Am.strings[0]),this.defineIcon("favorite",Um.strings[0]),this.defineIcon("folder",$m.strings[0]),this.defineIcon("forbidden",Lm.strings[0]),this.defineIcon("info",Vm.strings[0]),this.defineIcon("link",Fm.strings[0]),this.defineIcon("lock",qm.strings[0]),this.defineIcon("pause",Nm.strings[0]),this.defineIcon("picture",zm.strings[0]),this.defineIcon("play",Hm.strings[0]),this.defineIcon("remove",jm.strings[0]),this.defineIcon("search",Wm.strings[0]),this.defineIcon("see",Qm.strings[0]),this.defineIcon("settings",Km.strings[0]),this.defineIcon("subtract",Xm.strings[0]),this.defineIcon("sync",Ym.strings[0]),this.defineIcon("unlock",Zm.strings[0]),this.defineIcon("unsee",Jm.strings[0]),this.defineIcon("wand",ey.strings[0]),this.defineIcon("wrong",ty.strings[0])}},ry=Object.getOwnPropertyDescriptor,oy=(e,t,r,n)=>{for(var o=n>1?void 0:n?ry(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},xu=class extends Zo{constructor(){super(),this.registry=new li}};xu=oy([d("uui-icon-registry-essential")],xu);var ny=Object.defineProperty,sy=Object.getOwnPropertyDescriptor,Jr=(e,t,r,n)=>{for(var o=n>1?void 0:n?sy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&ny(t,r,o),o},$t=class extends W(h){constructor(){super(),this.accept="",this.multiple=!1,this._files=[],this._updateFileWrappers=e=>{let t=[];for(let r of e)this.multiple?t.push(r):t=[r];this._files=t},this.addEventListener("dragenter",()=>this._setShowDropzone(!0)),this.addEventListener("dragleave",()=>this._setShowDropzone(!1)),this.addEventListener("drop",()=>this._setShowDropzone(!1))}get value(){return super.value}set value(e){if(super.value=e,e instanceof FormData){let t=this.multiple?e.getAll(this.name):[e.get(this.name)];this._updateFileWrappers(t);return}if(e instanceof File){this._updateFileWrappers([e]);return}}connectedCallback(){super.connectedCallback(),w(this,"uui-icon"),w(this,"uui-file-dropzone"),w(this,"uui-button"),w(this,"uui-action-bar"),w(this,"uui-file-preview")}getFormElement(){return this._dropZone}async blur(){await this.updateComplete,this._dropzone.blur()}async focus(){await this.updateComplete,this._dropzone.focus()}async click(){await this.updateComplete,this._dropzone.browse()}_handleClick(e){e.stopImmediatePropagation(),this._dropzone.browse()}async _handleFilesChange(e){let r=e.detail.files.filter(o=>o instanceof File||o.isFile);if(!this.multiple){let o=r[0],a=o instanceof File?o:await this._getFile(o);if(this.value instanceof File){this.value=a;return}if(this.value instanceof FormData){this.value.delete(this.name),this.value.append(this.name,a),this._updateFileWrappers([a]);return}}let n=this.value;if(r.length>0&&!(this.value instanceof FormData)&&(n=new FormData),n instanceof FormData)for(let o of r){let s=o instanceof File;n.append(this.name,s?o:await this._getFile(o))}this.value=n}async _getFile(e){return await new Promise((t,r)=>e.file(t,r))}_removeFile(e){let t=this._files[e];if(this.value instanceof FormData){let n=this.value.getAll(this.name).filter(o=>o!==t);if(n.length===0)this.value="";else{this.value.delete(this.name);for(let o of n)this.value.append(this.name,o)}this._updateFileWrappers(n)}this.value instanceof File&&(this.value="",this._updateFileWrappers([]))}_setShowDropzone(e){e?this._dropZone.style.display="flex":this._dropZone.style.display="none"}_renderFileItem(e,t){return l`<uui-file-preview .file="${e}">
      <uui-action-bar slot="actions">
        <uui-button
          @click=${()=>this._removeFile(t)}
          color="danger"
          label=${`Delete ${e.name}`}>
          <uui-icon name="delete" .fallback=${ep.strings[0]}></uui-icon>
        </uui-button>
      </uui-action-bar>
    </uui-file-preview>`}_renderFiles(){return l`${Yr(this._files,e=>e.name+e.size,(e,t)=>this._renderFileItem(e,t))}`}render(){return l`
      <uui-file-dropzone
        id="dropzone"
        ?multiple=${this.multiple}
        .accept=${this.accept}
        @change=${this._handleFilesChange}
        label="Drop files here"></uui-file-dropzone>
      <div id="files">
        ${this._renderFiles()}
        ${this._files.length===0||this.multiple?l`<uui-button
              @click=${this._handleClick}
              id="add-button"
              look="placeholder"
              label="Add"></uui-button>`:D}
      </div>
    `}};$t.styles=[u`
      :host {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        box-sizing: border-box;
        border: 1px solid var(--uui-color-border,#d8d7d9);
      }

      #input {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        display: none;
      }

      #files {
        display: grid;
        box-sizing: border-box;
        justify-items: center;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-auto-rows: min-content;
        gap: 16px;
        padding: 16px;
        overflow: auto;
        max-height: 100%;
      }

      #dropzone {
        display: none;
        position: absolute;
        inset: 0px;
        z-index: 10;
        justify-content: center;
        align-items: center;
      }

      #add-button {
        width: 150px;
        height: 150px;
        display: flex;
        padding: 16px;
        box-sizing: border-box;
        justify-content: center;
        align-items: stretch;
      }
    `];Jr([P("#dropzone")],$t.prototype,"_dropzone",2);Jr([P("#dropzone")],$t.prototype,"_dropZone",2);Jr([i({type:String})],$t.prototype,"accept",2);Jr([i({type:Boolean})],$t.prototype,"multiple",2);Jr([b()],$t.prototype,"_files",2);$t=Jr([d("uui-input-file")],$t);var Lt=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Lt.CHANGE="change";Lt.INPUT="input";var ay=Object.defineProperty,iy=Object.getOwnPropertyDescriptor,Du=e=>{throw TypeError(e)},te=(e,t,r,n)=>{for(var o=n>1?void 0:n?iy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&ay(t,r,o),o},ly=(e,t,r)=>t.has(e)||Du("Cannot "+r),py=(e,t,r)=>t.has(e)?Du("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),uy=(e,t,r)=>(ly(e,t,"access private method"),r),pi,Eu,S=class extends W(j("",h),""){constructor(){super(),py(this,pi),this.minlengthMessage=e=>`${e} characters left`,this.maxlengthMessage=(e,t)=>`Maximum length exceeded (${t}/${e} characters)`,this.disabled=!1,this.readonly=!1,this.placeholder="",this.autoWidth=!1,this.inputMode="text",this.tabIndex=0,this._type="text",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",uy(this,pi,Eu)),this.addValidator("tooShort",()=>{let e=this.minlengthMessage;return typeof e=="function"?e(this.minlength?this.minlength-String(this.value).length:0):e},()=>!!this.minlength&&String(this.value).length<this.minlength),this.addValidator("tooLong",()=>{let e=this.maxlengthMessage;return typeof e=="function"?e(this.maxlength??0,String(this.value).length):e},()=>!!this.maxlength&&String(this.value).length>this.maxlength),this.updateComplete.then(()=>{this.addFormControlElement(this._input)})}get type(){return this._type}set type(e){this._type=e}async blur(){await this.updateComplete,this._input.blur()}async focus(){await this.updateComplete,this._input.focus()}async select(){await this.updateComplete,this._input.select()}getFormElement(){return this.shadowRoot?.querySelector("input")}onInput(e){e.stopPropagation(),this.value=e.target.value,this.dispatchEvent(new Lt(Lt.INPUT))}onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new Lt(Lt.CHANGE))}renderPrepend(){return l`<slot name="prepend"></slot>`}renderAppend(){return l`<slot name="append"></slot>`}render(){return l`
      ${this.renderPrepend()}
      ${this.autoWidth?this.renderInputWithAutoWidth():this.renderInput()}
      ${this.renderAppend()}
    `}renderInputWithAutoWidth(){return l`<div id="control">
      ${this.renderInput()}${this.renderAutoWidthBackground()}
    </div>`}renderInput(){return l`<input
      id="input"
      .type=${this.type}
      .value=${this.value}
      .name=${this.name}
      pattern=${x(this.pattern)}
      min=${x(this.min)}
      max=${x(this.max)}
      step=${x(this.step)}
      spellcheck=${this.spellcheck}
      autocomplete=${x(this.autocomplete)}
      placeholder=${x(this.placeholder)}
      aria-label=${x(this.label)}
      inputmode=${x(this.inputMode)}
      ?disabled=${this.disabled}
      ?autofocus=${this.autofocus}
      ?required=${this.required}
      ?readonly=${this.readonly}
      tabindex=${x(this.tabIndex)}
      @input=${this.onInput}
      @change=${this.onChange} />`}renderAutoWidthBackground(){return l` <div id="auto" aria-hidden="true">${this.renderText()}</div>`}renderText(){return l`${this.value.length>0?this.value:this.placeholder}`}};pi=new WeakSet;Eu=function(e){this.type!=="color"&&e.key=="Enter"&&this.submit()};S.formAssociated=!0;S.styles=[u`
      :host {
        position: relative;
        display: inline-flex;
        align-items: stretch;
        height: var(--uui-input-height, var(--uui-size-11,33px));
        text-align: left;
        color: var(--uui-color-text,#060606);
        color-scheme: var(--uui-color-scheme, normal);
        box-sizing: border-box;
        background-color: var(
          --uui-input-background-color,
          var(--uui-color-surface,#fff)
        );
        border: var(--uui-input-border-width, 1px) solid
          var(--uui-input-border-color, var(--uui-color-border,#d8d7d9));
        border-radius: var(--uui-border-radius,3px);

        --uui-button-height: 100%;
        --auto-width-text-margin-right: 0;
        --auto-width-text-margin-left: 0;
      }

      #control {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        flex-grow: 1;
      }

      #auto {
        border: 0 1px solid transparent;
        visibility: hidden;
        white-space: pre;
        z-index: -1;
        height: 0px;
        padding: 0 var(--uui-size-space-3,9px);
        margin: 0 var(--auto-width-text-margin-right) 0
          var(--auto-width-text-margin-left);
      }

      :host([auto-width]) #input {
        width: 10px;
        min-width: 100%;
      }

      :host(:hover) {
        border-color: var(
          --uui-input-border-color-hover,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      /* TODO: Fix so we dont get double outline when there is focus on things in the slot. */
      :host(:focus-within) {
        border-color: var(
          --uui-input-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host(:focus) {
        border-color: var(
          --uui-input-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
      }
      :host([disabled]) {
        background-color: var(
          --uui-input-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-input-border-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );

        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) input {
        -webkit-text-fill-color: var(
          --uui-color-disabled-contrast,#c4c4c4
        ); /* required on Safari and IOS */
      }
      :host([readonly]) {
        background-color: var(
          --uui-input-background-color-readonly,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-input-border-color-readonly,
          var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ))
        );
      }

      :host(:not([pristine]):invalid),
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) {
        border-color: var(--uui-color-invalid,#d42054);
      }

      input {
        font-family: inherit;
        padding: 1px var(--uui-size-space-3,9px);
        font-size: inherit;
        color: inherit;
        border-radius: var(--uui-border-radius,3px);
        box-sizing: border-box;
        border: none;
        background: none;
        width: 100%;
        height: inherit;
        text-align: inherit;
        outline: none;
      }

      input[type='password']::-ms-reveal {
        display: none;
      }

      /* TODO: make sure color looks good, or remove it as an option as we want to provide color-picker component */
      input[type='color'] {
        width: 30px;
        padding: 0;
        border: none;
      }

      slot[name='prepend'],
      slot[name='append'] {
        display: flex;
        align-items: center;
        line-height: 1;
        height: 100%;
      }

      ::slotted(uui-input),
      ::slotted(uui-input-lock) {
        height: 100%;
        --uui-input-border-width: 0;
      }
    `];te([i()],S.prototype,"min",2);te([i({type:Number})],S.prototype,"minlength",2);te([i({attribute:"minlength-message"})],S.prototype,"minlengthMessage",2);te([i()],S.prototype,"max",2);te([i({type:Number})],S.prototype,"maxlength",2);te([i({attribute:"maxlength-message"})],S.prototype,"maxlengthMessage",2);te([i({type:Number})],S.prototype,"step",2);te([i({type:Boolean,reflect:!0})],S.prototype,"disabled",2);te([i({type:Boolean,reflect:!0})],S.prototype,"readonly",2);te([i()],S.prototype,"placeholder",2);te([i()],S.prototype,"autocomplete",2);te([i({type:Boolean,reflect:!0,attribute:"auto-width"})],S.prototype,"autoWidth",2);te([i({type:String})],S.prototype,"type",1);te([i({attribute:"inputmode"})],S.prototype,"inputMode",2);te([i({type:String})],S.prototype,"pattern",2);te([i({type:Number,reflect:!1,attribute:"tabindex"})],S.prototype,"tabIndex",2);te([P("#input")],S.prototype,"_input",2);S=te([d("uui-input")],S);var Jo=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Jo.LOCK_CHANGE="lock-change";var dy=Object.defineProperty,cy=Object.getOwnPropertyDescriptor,Tu=e=>{throw TypeError(e)},Gs=(e,t,r,n)=>{for(var o=n>1?void 0:n?cy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&dy(t,r,o),o},Ru=(e,t,r)=>t.has(e)||Tu("Cannot "+r),hy=(e,t,r)=>(Ru(e,t,"read from private field"),r?r.call(e):t.get(e)),my=(e,t,r)=>t.has(e)?Tu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),yy=(e,t,r,n)=>(Ru(e,t,"write to private field"),t.set(e,r),r),Ms,eo=class extends S{constructor(){super(),my(this,Ms,!0),this.unlockLabel="Unlock input",this.lockLabel="Lock input",this.readonly=!0,this.tabIndex=-1}set locked(e){yy(this,Ms,e),this.tabIndex=e?-1:0}get locked(){return hy(this,Ms)}connectedCallback(){super.connectedCallback(),w(this,"uui-icon"),w(this,"uui-button")}_onLockToggle(){this.readonly=this.locked=!this.locked,this.pristine=!1,this.dispatchEvent(new Jo(Jo.LOCK_CHANGE)),this.locked||this._input?.focus()}renderIcon(){return this.locked===!0?l`<uui-icon name="lock" .fallback=${tp.strings[0]}></uui-icon>`:l`<uui-icon
          name="unlock"
          .fallback=${sp.strings[0]}></uui-icon>`}renderPrepend(){return l`<uui-button
      .disabled=${this.disabled}
      @click=${this._onLockToggle}
      compact
      id="lock"
      label="${this.locked?this.unlockLabel:this.lockLabel}">
      ${this.renderIcon()}
    </uui-button>`}};Ms=new WeakMap;eo.styles=[...S.styles,u`
      #lock {
        height: 100%;

        --uui-button-padding-left-factor: 0.75;
        --uui-button-padding-right-factor: 0.75;
        font-size: 12px;
      }

      :host([locked]) #input {
        cursor: not-allowed;
        opacity: 0.55;
      }
    `];Gs([i({type:Boolean,reflect:!0})],eo.prototype,"locked",1);Gs([i({type:String,reflect:!1,attribute:"unlock-label"})],eo.prototype,"unlockLabel",2);Gs([i({type:String,reflect:!1,attribute:"lock-label"})],eo.prototype,"lockLabel",2);eo=Gs([d("uui-input-lock")],eo);var by=Object.defineProperty,gy=Object.getOwnPropertyDescriptor,ui=(e,t,r,n)=>{for(var o=n>1?void 0:n?gy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&by(t,r,o),o},en=class extends S{constructor(){super(...arguments),this.passwordType="password"}get type(){return this.passwordType}set type(e){this.passwordType=e}_onPasswordToggle(){this.passwordType==="password"?this.passwordType="text":this.passwordType="password"}connectedCallback(){super.connectedCallback(),w(this,"uui-icon"),w(this,"uui-button"),this.hasAttribute("spellcheck")||(this.spellcheck=!1)}renderIcon(){return this.passwordType==="password"?l`<uui-icon name="see" .fallback=${op.strings[0]}></uui-icon>`:l`<uui-icon
          name="unsee"
          .fallback=${ap.strings[0]}></uui-icon>`}renderAppend(){return l`<uui-button
      .disabled=${this.disabled}
      @click=${this._onPasswordToggle}
      compact
      label="${this.passwordType==="password"?"Show password":"Hide password"}"
      id="eye">
      ${this.renderIcon()}
    </uui-button>`}};en.styles=[...S.styles,u`
      #eye {
        height: 100%;
        margin-left: -6px;
      }

      #clear:hover {
        color: black;
      }
    `];ui([b()],en.prototype,"passwordType",2);ui([i()],en.prototype,"type",1);en=ui([d("uui-input-password")],en);var fy=Object.getOwnPropertyDescriptor,vy=(e,t,r,n)=>{for(var o=n>1?void 0:n?fy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},di=class extends h{render(){return l`<slot></slot>`}};di.styles=[u`
      :host {
        display: inline-block;
        font-family: inherit;
        font-size: var(--uui-size-4,12px);
        color: var(--uui-color-text,#060606);
      }

      ::slotted(*:first-child)uui-key {
        margin-left: 0px;
      }

      ::slotted(*:last-child)uui-key {
        margin-right: 0px;
      }
    `];di=vy([d("uui-keyboard-shortcut")],di);var wy=Object.getOwnPropertyDescriptor,xy=(e,t,r,n)=>{for(var o=n>1?void 0:n?wy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},ci=class extends h{render(){return l`<slot></slot>`}};ci.styles=[u`
      :host {
        background: var(--uui-color-surface,#fff);
        border: 1px solid var(--uui-color-border,#d8d7d9);
        font-family: inherit;
        font-size: var(--uui-type-small-size,12px);
        color: var(--uui-color-text,#060606);
        border-radius: 5px;
        margin: 0px 5px;
        padding: 5px 7px;
        box-sizing: border-box;
        user-select: none;
        text-transform: lowercase;
      }
    `];ci=xy([d("uui-key")],ci);var Dy=Object.defineProperty,Ey=Object.getOwnPropertyDescriptor,_s=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ey(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Dy(t,r,o),o},to=class extends h{constructor(){super(),this.disabled=!1,this.for=null,this.required=!1,this.addEventListener("click",this._onClick)}_onClick(){if(this.disabled)return;let e=this.getForElement();e&&(e.focus(),e.click())}getForElement(){return typeof this.for=="string"?this.getRootNode()?.getElementById(this.for)||null:this.for||null}render(){return l`
      <slot></slot>
      ${this.required?l`<div id="required">*</div>`:""}
    `}};to.styles=[u`
      :host {
        font-weight: 700;
      }
      :host([for]) {
        cursor: pointer;
      }
      :host([disabled]) {
        cursor: default;
      }
      #required {
        display: inline;
        color: var(--uui-color-danger,#d42054);
        font-weight: 900;
      }
    `];_s([i({type:Boolean,reflect:!0})],to.prototype,"disabled",2);_s([i({reflect:!0,attribute:!0})],to.prototype,"for",2);_s([i({type:Boolean,reflect:!0})],to.prototype,"required",2);to=_s([d("uui-label")],to);var Ty=Object.defineProperty,Ry=Object.getOwnPropertyDescriptor,hi=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ry(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Ty(t,r,o),o},tn=class extends h{constructor(){super(...arguments),this._progress=0,this._animationDuration=1}get progress(){return this._progress}set progress(e){let t=this._progress;this._progress=M(e,0,100),this.requestUpdate("progress",t)}get animationDuration(){return this._animationDuration}set animationDuration(e){let t=this._animationDuration;this._animationDuration=e>=0?e:1,this.requestUpdate("animationDuration",t)}render(){return l`
      ${this.progress?l`<div
            id="bar"
            style="max-width: ${this.progress.toString()}%;"></div>`:""}
      <div
        id="bar-anim"
        class=${this.progress?"":"animate"}
        style="animation-duration: ${this.animationDuration}s"></div>
      <div id="bar-background"></div>
    `}};tn.styles=[u`
      :host {
        position: relative;
        display: block;
        width: 100%;
        height: 4px;
        overflow: hidden;
        color: var(--uui-color-default,#1b264f);
      }

      #bar,
      #bar-anim,
      #bar-background {
        position: absolute;
        inset: 0; /* top, left, bottom and right = 0*/
        height: 100%;
      }

      #bar-background,
      #bar {
        background: currentColor;
      }

      #bar {
        transition: max-width 120ms ease;
      }

      #bar-background {
        opacity: 0.3;
      }

      #bar-anim {
        transform: scaleX(0.4);
        animation: bar-loading 1s infinite linear;
        background: linear-gradient(
          -90deg,
          white 0%,
          white 25%,
          transparent 100%
        );
      }

      #bar-anim.animate {
        background: linear-gradient(
          -90deg,
          currentColor 0%,
          currentColor 25%,
          transparent 100%
        );
      }

      @keyframes bar-loading {
        0% {
          transform-origin: -175% 0%;
        }
        100% {
          transform-origin: 175% 0%;
        }
      }
    `];hi([i({type:Number})],tn.prototype,"progress",1);hi([i({type:Number})],tn.prototype,"animationDuration",1);tn=hi([d("uui-loader-bar")],tn);var Py=Object.defineProperty,ky=Object.getOwnPropertyDescriptor,mi=(e,t,r,n)=>{for(var o=n>1?void 0:n?ky(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Py(t,r,o),o},rn=class extends h{constructor(){super(...arguments),this.progress=0,this.showProgress=!1,this._resizeObserver=new ResizeObserver(()=>this.onResize()),this._isLarge=!1}_circleStyle(){return this.progress?{strokeDasharray:`${this.progress} 100`}:{strokeDasharray:"100 100"}}firstUpdated(){this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver.disconnect()}onResize(){let e=this.clientHeight>=30;this._isLarge!=e&&(this._isLarge=e,this.requestUpdate())}renderProgress(){return this._isLarge&&this.progress&&this.showProgress?l`<span id="progress-display">${this.progress}</span>`:""}render(){return l`
      <svg
        id="spinner"
        class=${this.progress?"":"animate"}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg">
        <circle id="bg" cx="50%" cy="50%" r="16" />
        <g>
          <circle
            id="circle"
            cx="50%"
            cy="50%"
            r="16"
            style=${ie(this._circleStyle())} />
        </g>
      </svg>
      ${this.renderProgress()}
    `}};rn.styles=[u`
      :host {
        vertical-align: middle;
        line-height: 0;
        overflow: hidden;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 1em;
        height: 1em;
        color: var(--uui-color-default,#1b264f);
      }

      #spinner {
        width: 100%;
        height: 100%;
      }
      #spinner g {
        transform-origin: 50% 50%;
        animation: 18s linear infinite spinner-animation;
      }
      #spinner.animate g {
        animation: 800ms linear infinite spinner-animation;
      }

      @keyframes spinner-animation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      #spinner.animate #circle {
        animation: 1400ms ease-in infinite circle-animation;
        /** ease-in */
      }

      @keyframes circle-animation {
        0% {
          stroke-dashoffset: -55;
        }
        38% {
          stroke-dashoffset: -88;
        }
        100% {
          stroke-dashoffset: -55;
        }
      }

      svg circle {
        fill: transparent;
        stroke: currentColor;
        stroke-width: 6px;
      }

      #bg {
        opacity: 0.5;
      }

      #circle {
        stroke-linecap: round;
        stroke-dasharray: 0 0;

        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: stroke-dasharray 120ms ease;
      }

      #progress-display {
        position: absolute;
        left: 0;
        top: 50%;
        right: 0;
        stroke: currentColor;
        transform: translateY(-50%);
        font-size: 0.3em;
        font-weight: 700;
        text-align: center;

        /* Center the text */
        padding-top: 0.09em;
      }
    `];mi([i({type:Number})],rn.prototype,"progress",2);mi([i({type:Boolean,reflect:!0,attribute:"show-progress"})],rn.prototype,"showProgress",2);rn=mi([d("uui-loader-circle")],rn);var Iy=Object.getOwnPropertyDescriptor,By=(e,t,r,n)=>{for(var o=n>1?void 0:n?Iy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},yi=class extends h{render(){return l`
      <div></div>
      <div></div>
      <div></div>
    `}};yi.styles=[u`
      :host {
        color: var(--uui-color-default,#1b264f);
      }

      div {
        display: inline-block;
        width: var(--uui-size-2,6px);
        height: var(--uui-size-2,6px);
        border: 2px solid currentColor;
        border-radius: 100%;
        animation: loaderAnimation 1.4s infinite;
      }

      div:nth-child(1n) {
        animation-delay: 0s;
      }

      div:nth-child(2n) {
        animation-delay: 0.15s;
      }

      div:nth-child(3n) {
        animation-delay: 0.3s;
      }

      @keyframes loaderAnimation {
        0% {
          transform: scale(0.5);
          background-color: currentColor;
        }
        50% {
          transform: scale(1);
          background-color: transparent;
        }
        100% {
          transform: scale(0.5);
          background-color: currentColor;
        }
      }
    `];yi=By([d("uui-loader")],yi);var et=class extends E{};et.SHOW_CHILDREN="show-children";et.HIDE_CHILDREN="hide-children";et.CLICK_LABEL="click-label";var My=Object.defineProperty,Gy=Object.getOwnPropertyDescriptor,ku=e=>{throw TypeError(e)},qe=(e,t,r,n)=>{for(var o=n>1?void 0:n?Gy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&My(t,r,o),o},_y=(e,t,r)=>t.has(e)||ku("Cannot "+r),Cy=(e,t,r)=>t.has(e)?ku("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Pu=(e,t,r)=>(_y(e,t,"access private method"),r),Cs,bi,Re=class extends kt(Me(Ke(j("label",h)))){constructor(){super(...arguments),Cy(this,Cs),this.disabled=!1,this.showChildren=!1,this.hasChildren=!1,this.loading=!1,this.caretLabel="Reveal the underlying items",this.iconSlotHasContent=!1,this._labelButtonChanged=e=>{this.selectableTarget=e||this},this._iconSlotChanged=e=>{this.iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},this._onCaretClicked=()=>{let e=this.showChildren?et.HIDE_CHILDREN:et.SHOW_CHILDREN,t=new et(e,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.showChildren=!this.showChildren)}}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","menu"),w(this,"uui-symbol-expand"),w(this,"uui-loader-bar")}async focus(){await this.updateComplete,this.shadowRoot?.querySelector("#label-button")?.focus?.()}_renderLabelInside(){return l` <slot
        name="icon"
        id="icon"
        style=${this.iconSlotHasContent?"":"display: none;"}
        @slotchange=${this._iconSlotChanged}></slot>
      ${this.renderLabel()}
      <slot name="badge" id="badge"> </slot>`}_renderLabelAsAnchor(){return this.disabled?l` <span id="label-button" ${Nr(this._labelButtonChanged)}>
        ${this._renderLabelInside()}
      </span>`:l` <a
      id="label-button"
      ${Nr(this._labelButtonChanged)}
      href=${x(this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}
      @click=${Pu(this,Cs,bi)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </a>`}_renderLabelAsButton(){return l` <button
      id="label-button"
      ${Nr(this._labelButtonChanged)}
      @click=${Pu(this,Cs,bi)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </button>`}render(){return l`
      <div id="menu-item" aria-label="menuitem" role="menuitem">
        ${this.hasChildren?l`<button
              id="caret-button"
              aria-label=${this.caretLabel}
              @click=${this._onCaretClicked}>
              <uui-symbol-expand
                aria-hidden="true"
                ?open=${this.showChildren}></uui-symbol-expand>
            </button>`:""}
        ${this.href&&this.selectOnly!==!0&&this.selectable!==!0?this._renderLabelAsAnchor():this._renderLabelAsButton()}

        <div id="label-button-background"></div>
        <slot id="actions-container" name="actions"></slot>
        ${this.loading?l`<uui-loader-bar id="loader"></uui-loader-bar>`:""}
      </div>
      ${this.showChildren?l`<slot></slot>`:""}
    `}};Cs=new WeakSet;bi=function(){if(this.selectOnly)return;let e=new et(et.CLICK_LABEL);this.dispatchEvent(e)};Re.styles=[u`
      :host {
        box-sizing: border-box;
        display: block;
        --uui-menu-item-child-indent: calc(var(--uui-menu-item-indent, 0) + 1);
        user-select: none;
        --flat-structure-reversed: calc(
          1 - var(--uui-menu-item-flat-structure, 0)
        );
      }

      #menu-item {
        position: relative;
        padding-left: calc(var(--uui-menu-item-indent, 0) * var(--uui-size-4,12px));
        display: grid;
        grid-template-columns:
          calc(var(--flat-structure-reversed) * var(--uui-size-8,24px))
          1fr;
        grid-template-rows: 1fr;
        white-space: nowrap;
      }

      /** Not active, not selected, not disabled: */
      :host(:not([active], [selected], [disabled], [select-mode='highlight']))
        #menu-item
        #label-button:hover
        ~ #label-button-background,
      :host(:not([active], [selected], [disabled]))
        #menu-item
        #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      :host(:not([active], [selected], [disabled]))
        #menu-item
        #label-button:hover,
      :host(:not([active], [selected])) #menu-item #caret-button:hover {
        color: var(
          --uui-menu-item-color-hover,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** Active */
      :host([active]) #label-button,
      :host([active]) #caret-button {
        color: var(
          --uui-menu-item-color-active,
          var(--uui-color-current-contrast,#1b264f)
        );
      }
      :host([active]) #label-button-background {
        background-color: var(
          --uui-menu-item-background-color-active,
          var(--uui-color-current,#f5c1bc)
        );
      }
      :host([active]) #label-button:hover ~ #label-button-background,
      :host([active]) #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-active-hover,
          var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ))
        );
      }

      /** Disabled */
      :host([disabled]) #menu-item {
        background-color: var(
          --uui-menu-item-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
      }

      /** Selected */
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button,
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #caret-button {
        color: var(
          --uui-menu-item-color-selected,
          var(--uui-color-selected-contrast,#fff)
        );
      }
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button-background {
        background-color: var(
          --uui-menu-item-background-color-selected,
          var(--uui-color-selected,#3544b1)
        );
      }
      /** Selected, not highlight mode */
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button:hover
        ~ #label-button-background,
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-selected-hover,
          var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ))
        );
      }

      /** highlight mode, default */
      :host([select-mode='highlight']:not([disabled], [active], [selectable]))
        #menu-item
        #label-button:hover
        ~ #label-button-background {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }

      /** highlight mode, active */
      :host([select-mode='highlight'][active]:not([disabled]))
        #menu-item
        #label-button-background {
        border-radius: var(--uui-border-radius,3px);
      }

      /** highlight mode, active & selected */
      :host([select-mode='highlight'][active][selected]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight-active-selected,
          var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ))
        );
      }

      /** highlight mode, selected */
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button,
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #caret-button {
        color: var(
          --uui-menu-item-color-highlight-selected,
          var(--uui-color-interactive,#1b264f)
        );
      }
      :host([select-mode='highlight'][selectable][selected]:not([disabled]))
        #menu-item
        #label-button:hover {
        color: var(
          --uui-menu-item-background-color-highlight-selectable-selected,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** highlight mode, selected, selectable caret hover */
      :host([selected][selectable][select-mode='highlight']:not([active]))
        #menu-item
        #caret-button:hover {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight-selectable-selected,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(
          --uui-menu-item-color-highlight-selectable-selected,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** Highlight borders */

      :host([select-mode='highlight']:not([disabled]))
        #menu-item
        #label-button-background::after {
        border-radius: var(--uui-border-radius,3px);
        position: absolute;
        content: '';
        inset: 1px;
        border: 2px solid
          var(--uui-menu-item-border-color-highlight, var(--uui-color-selected,#3544b1));
        opacity: 0;
      }

      :host([select-mode='highlight'][selectable][selected]:not([disabled]))
        #menu-item
        #caret-button:hover::after {
        border-top-left-radius: var(--uui-border-radius,3px);
        border-bottom-left-radius: var(--uui-border-radius,3px);
        position: absolute;
        content: '';
        inset: 1px 0 1px 1px;
        border: 2px solid
          var(--uui-menu-item-border-color-highlight, var(--uui-color-selected,#3544b1));
        border-right: none;
      }

      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button-background::after {
        opacity: 1;
      }

      :host([select-mode='highlight'][selectable]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background::after {
        opacity: 0.33;
      }
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background::after {
        opacity: 0.66;
      }

      /** Buttons */

      :host([disabled]) #label-button {
        cursor: default;
        opacity: 0.5;
      }

      button {
        display: inline-flex;
        align-items: center;

        font-family: inherit;
        font-size: inherit;

        padding: 0;
        text-align: left;
        border: none;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        min-height: var(--uui-size-12,36px);
        z-index: 1;
      }

      #label-button {
        position: relative;
        flex-grow: 1;
        grid-column-start: 2;
        white-space: nowrap;
        overflow: hidden;
        padding-right: var(--uui-size-space-3,9px);
        padding-left: calc(
          var(--uui-menu-item-flat-structure) * var(--uui-size-space-3,9px)
        );
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: currentColor;
        min-height: var(--uui-size-12,36px);
        z-index: 1;
        font-weight: inherit;
      }

      #label-button .label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span#label-button {
        pointer-events: none; /* avoid hovering state on this. */
      }

      #caret-button {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        padding-inline-end: 3px;
        color: var(--uui-color-interactive,#1b264f);
      }

      #label-button-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--uui-menu-item-border-radius, 0px);
      }

      #actions-container {
        opacity: 0;
        width: 0;
        grid-column-start: 3;
        overflow: hidden;
      }
      :host(:not([disabled])) #menu-item:hover #actions-container,
      :host(:not([disabled])) #menu-item:focus #actions-container,
      :host(:not([disabled])) #menu-item:focus-within #actions-container {
        opacity: 1;
        width: auto;
      }

      #loader {
        position: absolute;
        width: 100%;
        bottom: 0;
      }

      #icon {
        display: inline-flex;
        margin-right: var(--uui-size-2,6px);
      }

      #badge {
        font-size: 12px;
        --uui-badge-position: relative;
        --uui-badge-position: auto;
        display: block;
        margin-left: 6px;
      }

      /** Focus styling */

      :host([select-mode='highlight']) #label-button:focus-visible {
        outline: none;
        overflow: initial;
      }

      :host([select-mode='highlight']) #label-button:focus-visible::after {
        content: '';
        border-radius: calc(var(--uui-border-radius,3px) - 1px);
        position: absolute;
        inset: 3px 3px 3px -5px;
        border: 2px solid var(--uui-color-focus,#3879ff);
      }

      :host([select-mode='highlight']) #caret-button:focus-visible {
        outline: none;
        overflow: initial;
      }

      :host([select-mode='highlight']) #caret-button:focus-visible::after {
        content: '';
        position: absolute;
        inset: 3px;
        border-radius: calc(var(--uui-border-radius,3px) - 1px);
        border: 2px solid var(--uui-color-focus,#3879ff);
      }

      /** Slots */

      slot:not([name]) {
        position: relative;
        display: block;
        width: 100%;
      }
      slot:not([name]) {
        --uui-menu-item-indent: var(--uui-menu-item-child-indent);
      }

      slot[name='actions'] {
        display: flex;
        align-items: center;
        --uui-button-height: calc(var(--uui-size-base-unit) * 4);
        margin-right: var(--uui-size-base-unit);
      }
    `];qe([i({type:Boolean,reflect:!0})],Re.prototype,"disabled",2);qe([i({type:Boolean,reflect:!0,attribute:"show-children"})],Re.prototype,"showChildren",2);qe([i({type:Boolean,attribute:"has-children"})],Re.prototype,"hasChildren",2);qe([i({type:Boolean,attribute:"loading"})],Re.prototype,"loading",2);qe([i({type:String})],Re.prototype,"href",2);qe([i({type:String})],Re.prototype,"target",2);qe([i({type:String})],Re.prototype,"rel",2);qe([i({type:String,attribute:"select-mode",reflect:!0})],Re.prototype,"selectMode",2);qe([i({type:String,attribute:"caret-label"})],Re.prototype,"caretLabel",2);qe([b()],Re.prototype,"iconSlotHasContent",2);Re=qe([d("uui-menu-item")],Re);var Oy=Object.defineProperty,Sy=Object.getOwnPropertyDescriptor,no=(e,t,r,n)=>{for(var o=n>1?void 0:n?Sy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Oy(t,r,o),o},Ay="uui:modal-open",nn="uui:modal-close",Uy="uui:modal-close-end",ue=class extends h{constructor(){super(...arguments),this.isOpen=!1,this.isClosing=!1,this.index=0,this.uniqueIndex=0,this._transitionDuration=250,this.open=t=>{t?.preventDefault(),t?.stopImmediatePropagation();let r=new CustomEvent(Ay,{cancelable:!0}),n=new CustomEvent("open",{cancelable:!0});this.dispatchEvent(r),this.dispatchEvent(n),!(r.defaultPrevented||n.defaultPrevented)&&this._openModal()},this.close=t=>{t?.preventDefault(),t?.stopImmediatePropagation();let r=new CustomEvent(nn,{cancelable:!0});this.dispatchEvent(r),!r.defaultPrevented&&this.forceClose()}}get transitionDuration(){return this._transitionDuration}set transitionDuration(t){this._transitionDuration=t,this.style.setProperty("--uui-modal-transition-duration",this._transitionDuration+"ms")}firstUpdated(t){super.firstUpdated(t),this.isClosing||this.open()}_openModal(){this.isOpen=!0,this._dialogElement?.showModal(),this._dialogElement?.addEventListener("cancel",this.close)}forceClose(){this.isClosing=!0,this.isOpen=!1,this._dialogElement?.close(),this.dispatchEvent(new CustomEvent("close-end")),this.dispatchEvent(new CustomEvent(Uy)),this.remove()}};ue.styles=[u`
      dialog {
        display: block;
        margin: 0;
        padding: 0;
        max-width: unset;
        max-height: unset;
        border: none;
        background: none;
        color: var(--uui-color-text,#060606);
      }
      dialog::backdrop {
        background: none;
        opacity: 0;
      }
      dialog::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--uui-modal-color-backdrop, rgba(0, 0, 0, 0.5));
        pointer-events: none;
        opacity: 1;
        transition: opacity var(--uui-modal-transition-duration, 250ms);
        z-index: 1;
      }
      :host([index='0']) dialog::after {
        opacity: 0;
      }
    `];no([P("dialog")],ue.prototype,"_dialogElement",2);no([i({type:Boolean,reflect:!0,attribute:"is-open"})],ue.prototype,"isOpen",2);no([i({type:Boolean,reflect:!0,attribute:"is-closing"})],ue.prototype,"isClosing",2);no([i({type:Number,reflect:!0})],ue.prototype,"index",2);no([i({type:Number,reflect:!0,attribute:"unique-index"})],ue.prototype,"uniqueIndex",2);no([i({type:Number,attribute:"transition-duration"})],ue.prototype,"transitionDuration",1);var $y=Object.defineProperty,Ly=Object.getOwnPropertyDescriptor,Bu=e=>{throw TypeError(e)},Mu=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ly(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&$y(t,r,o),o},Vy=(e,t,r)=>t.has(e)||Bu("Cannot "+r),Iu=(e,t,r)=>(Vy(e,t,"read from private field"),r?r.call(e):t.get(e)),Fy=(e,t,r)=>t.has(e)?Bu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Ss,fi,sn=class extends ue{constructor(){super(...arguments),Fy(this,Ss),this.size="full"}firstUpdated(e){super.firstUpdated(e),this.style.setProperty("--uui-modal-offset",-Iu(this,Ss,fi)+"px")}updated(e){super.updated(e),this.uniqueIndex>10?this.setAttribute("hide",""):this.removeAttribute("hide")}forceClose(){this.isClosing||(this.isClosing=!0,this.style.setProperty("--uui-modal-offset",-Iu(this,Ss,fi)+"px"),setTimeout(()=>{super.forceClose()},this.transitionDuration))}render(){return l`<dialog>
      <slot></slot>
    </dialog>`}};Ss=new WeakSet;fi=function(){return this._dialogElement?.getBoundingClientRect().width??0};sn.styles=[...ue.styles,u`
      :host {
        outline: none;
        --uui-modal-sidebar-left-gap: 24px;
        --uui-modal-sidebar-background: var(--uui-color-surface,#fff);
      }
      @media (min-width: 600px) {
        :host {
          --uui-modal-sidebar-left-gap: 64px;
        }
      }
      dialog {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        max-width: calc(100% - var(--uui-modal-sidebar-left-gap));
        margin-left: auto;
        right: var(--uui-modal-offset);
        transition: right var(--uui-modal-transition-duration, 250ms);
        background: var(
          --uui-modal-sidebar-background,
          var(--uui-color-surface,#fff)
        );
      }
      :host([index='0']) dialog {
        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
      }
      :host(:not([index='0'])) dialog {
        outline: 1px solid rgba(0, 0, 0, 0.1);
      }
      :host([hide]) dialog {
        display: none;
      }
      :host([size='large']) dialog {
        max-width: min(1200px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
      :host([size='medium']) dialog {
        max-width: min(800px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
      :host([size='small']) dialog {
        max-width: min(500px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
    `];Mu([i({reflect:!0})],sn.prototype,"size",2);sn=Mu([d("uui-modal-sidebar")],sn);var qy=Object.defineProperty,Ny=Object.getOwnPropertyDescriptor,Gu=e=>{throw TypeError(e)},so=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ny(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&qy(t,r,o),o},_u=(e,t,r)=>t.has(e)||Gu("Cannot "+r),on=(e,t,r)=>(_u(e,t,"read from private field"),r?r.call(e):t.get(e)),gi=(e,t,r)=>t.has(e)?Gu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Os=(e,t,r)=>(_u(e,t,"access private method"),r),vi,ro,oo,wi,xi,Vt=class extends h{constructor(){super(),gi(this,oo),this.sidebarGap=64,this.transitionDurationMS=250,gi(this,vi,()=>{let e=this._modals??[];if(this._modals=this.modalSlot?.assignedElements({flatten:!0}).filter(n=>n instanceof ue)??[],e.filter(n=>this._modals.indexOf(n)===-1).forEach(n=>n.removeEventListener(nn,on(this,ro))),this._modals.filter(n=>e.indexOf(n)===-1).forEach(n=>n.addEventListener(nn,on(this,ro))),this._sidebars=this._modals.filter(n=>n instanceof sn),this._modals.length===0){this.removeAttribute("backdrop");return}Os(this,oo,wi).call(this),Os(this,oo,xi).call(this)}),gi(this,ro,e=>{if(e.stopImmediatePropagation(),e.target?.removeEventListener(nn,on(this,ro)),!this._modals||this._modals.length<=1){this.removeAttribute("backdrop");return}Os(this,oo,wi).call(this),Os(this,oo,xi).call(this)}),this.addEventListener(nn,on(this,ro))}firstUpdated(e){super.firstUpdated(e),this.style.setProperty("--uui-modal-transition-duration",this.transitionDurationMS+"ms")}render(){return l`<slot @slotchange=${on(this,vi)}></slot>`}};vi=new WeakMap;ro=new WeakMap;oo=new WeakSet;wi=function(){this.setAttribute("backdrop","");let e=this._modals?.filter(t=>!t.isClosing).reverse()??[];e?.forEach((t,r)=>{t.index=r,t.transitionDuration=this.transitionDurationMS}),e?.forEach(t=>{let r=e?.filter(n=>n.constructor.name===t.constructor.name);t.uniqueIndex=r?.indexOf(t)??0})};xi=function(){requestAnimationFrame(()=>{let e=0,t=this._sidebars?.filter(r=>!r.isClosing).reverse()??[];for(let r=0;r<t.length;r++){let n=t[r],o=t[r+1],s=e;if(n.updateComplete.then(()=>{n.style.setProperty("--uui-modal-offset",s+"px")}),o?.hasAttribute("hide"))break;let a=n.shadowRoot?.querySelector("dialog")?.getBoundingClientRect().width??0,p=o?.shadowRoot?.querySelector("dialog")?.getBoundingClientRect().width??0,c=a+e+this.sidebarGap-p;e=c>0?c:0}})};Vt.styles=u`
    :host {
      position: fixed;
      --uui-modal-color-backdrop: rgba(0, 0, 0, 0.5);
    }
    :host::after {
      content: '';
      position: fixed;
      inset: 0;
      background-color: var(--uui-modal-color-backdrop, rgba(0, 0, 0, 0.5));
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--uui-modal-transition-duration, 250ms);
    }
    :host([backdrop])::after {
      opacity: 1;
    }
  `;so([P("slot")],Vt.prototype,"modalSlot",2);so([b()],Vt.prototype,"_modals",2);so([b()],Vt.prototype,"_sidebars",2);so([i({type:Number})],Vt.prototype,"sidebarGap",2);so([i({type:Number})],Vt.prototype,"transitionDurationMS",2);Vt=so([d("uui-modal-container")],Vt);var zy=Object.getOwnPropertyDescriptor,Hy=(e,t,r,n)=>{for(var o=n>1?void 0:n?zy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},Di=class extends ue{render(){return l`
      <dialog>
        <slot></slot>
      </dialog>
    `}};Di.styles=[...ue.styles,u`
      :host {
        outline: none;
        --uui-modal-dialog-background: var(--uui-color-surface,#fff);
      }
      dialog {
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: var(
          --uui-modal-dialog-border-radius,
          calc(var(--uui-border-radius,3px) * 4)
        );
        background: var(
          --uui-modal-dialog-background,
          var(--uui-color-surface,#fff)
        );
      }
      :host([index='0']) dialog {
        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
      }
      :host(:not([index='0'])) dialog {
        outline: 1px solid rgba(0, 0, 0, 0.1);
      }
    `];Di=Hy([d("uui-modal-dialog")],Di);var bt=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};bt.CHANGE="change";var jy=Object.defineProperty,Wy=Object.getOwnPropertyDescriptor,Pe=(e,t,r,n)=>{for(var o=n>1?void 0:n?Wy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&jy(t,r,o),o},Qy=45,Ei=(e,t,r)=>Math.min(Math.max(e,t),r),Ky=(e,t)=>Array.from({length:t-e+1},(r,n)=>e+n),be=class extends h{constructor(){super(...arguments),this._observer=new ResizeObserver(this._calculateRange.bind(this)),this.label="",this.ariaLabel="",this.firstLabel="First",this.previousLabel="Previous",this.nextLabel="Next",this.lastLabel="Last",this._total=100,this._range=0,this._visiblePages=[],this._current=1}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","navigation"),this._visiblePages=this._generateVisiblePages(this.current),w(this,"uui-button"),w(this,"uui-button-group")}disconnectedCallback(){this._observer.disconnect()}firstUpdated(){this._observer.observe(this._pagesGroup),this.updateLabel(),this._calculateRange()}willUpdate(e){(e.has("current")||e.has("label"))&&this.updateLabel()}updateLabel(){this.ariaLabel=`${this.label||"Pagination navigation"}. Current page: ${this.current}.`}_calculateRange(){let e=this.offsetWidth,t=Array.from(this._navButtons).reduce((o,s)=>o+s.getBoundingClientRect().width,0),n=(e-t)/Qy/2;this._range=Math.max(1,Math.floor(n)),this._visiblePages=this._generateVisiblePages(this.current)}_generateVisiblePages(e){let t=e<this._range?1:e<this.total-this._range?e-this._range:this.total-this._range*2,r=e<=this._range?this._range*2+1:e<this.total-this._range?e+this._range:this.total;return Ky(Ei(t,1,this.total),Ei(r,1,this.total))}get total(){return this._total}set total(e){this._total=e,this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("total",e)}get current(){return this._current}set current(e){let t=this._current;this._current=Ei(e,1,this.total),this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("current",t)}goToNextPage(){this.current++,this.dispatchEvent(new bt(bt.CHANGE))}goToPreviousPage(){this.current--,this.dispatchEvent(new bt(bt.CHANGE))}goToPage(e){this.current=e,this.dispatchEvent(new bt(bt.CHANGE))}focusActivePage(){requestAnimationFrame(()=>{let e=this.renderRoot.querySelector(".active");e&&e.focus()})}renderFirst(){return l`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.firstLabel}
      ?disabled=${this._current===1}
      @click=${()=>this.goToPage(1)}></uui-button>`}renderPrevious(){return l`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.previousLabel}
      ?disabled=${this._current===1}
      @click=${this.goToPreviousPage}></uui-button>`}renderNext(){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      class="nav"
      label=${this.nextLabel}
      ?disabled=${this._current===this.total}
      @click=${this.goToNextPage}></uui-button>`}renderLast(){return l`
      <uui-button
        compact
        look="outline"
        role="listitem"
        class="nav"
        label=${this.lastLabel}
        ?disabled=${this.total===this._current}
        @click=${()=>this.goToPage(this.total)}></uui-button>
    `}renderDots(){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      tabindex="-1"
      class="dots"
      label="More pages"
      >...</uui-button
    > `}renderPage(e){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      label="Go to page ${e}"
      class=${"page"+(e===this._current?" active":"")}
      tabindex=${e===this._current?"-1":""}
      @click=${()=>{e!==this._current&&(this.goToPage(e),this.focusActivePage())}}>
      ${e}
    </uui-button>`}renderNavigationLeft(){return l` ${this.renderFirst()} ${this.renderPrevious()}
    ${this._visiblePages.includes(1)?"":this.renderDots()}`}renderNavigationRight(){return l`${this._visiblePages.includes(this.total)?"":this.renderDots()}
    ${this.renderNext()} ${this.renderLast()}`}render(){return l`<uui-button-group role="list" id="pages">
      ${this.renderNavigationLeft()}
      ${this._visiblePages.map(e=>this.renderPage(e))}
      ${this.renderNavigationRight()}
    </uui-button-group>
    `}};be.styles=[u`
      uui-button-group {
        width: 100%;
      }

      uui-button {
        --uui-button-border-color: var(--uui-color-border-standalone,#c2c2c2);
        --uui-button-border-color-hover: var(--uui-color-interactive-emphasis,#3544b1);
        --uui-button-border-color-disabled: var(--uui-color-border-standalone,#c2c2c2);
      }

      .page {
        min-width: 36px;
        max-width: 72px;
      }
      .page.active {
        --uui-button-background-color: var(--uui-color-current,#f5c1bc);
      }

      .nav {
        min-width: 72px;
      }

      .dots {
        pointer-events: none;
      }

      .active {
        pointer-events: none;
      }
    `];Pe([Ml("uui-button.nav")],be.prototype,"_navButtons",2);Pe([P("#pages")],be.prototype,"_pagesGroup",2);Pe([i()],be.prototype,"label",2);Pe([i({reflect:!0,attribute:"aria-label"})],be.prototype,"ariaLabel",2);Pe([i()],be.prototype,"firstLabel",2);Pe([i()],be.prototype,"previousLabel",2);Pe([i()],be.prototype,"nextLabel",2);Pe([i()],be.prototype,"lastLabel",2);Pe([i({type:Number})],be.prototype,"total",1);Pe([b()],be.prototype,"_range",2);Pe([b()],be.prototype,"_visiblePages",2);Pe([i({type:Number})],be.prototype,"current",1);be=Pe([d("uui-pagination")],be);var an=class extends E{};an.CLOSE="close";var Xy=Object.defineProperty,Yy=Object.getOwnPropertyDescriptor,ln=(e,t,r,n)=>{for(var o=n>1?void 0:n?Yy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Xy(t,r,o),o};function As(e,t,r){return e<t?t:e>r?r:e}var yr=class extends h{constructor(){super(...arguments),this.scrollEventHandler=this._updatePlacement.bind(this),this._open=!1,this._placement="bottom-start",this._currentPlacement=null,this._scrollParents=[],this.margin=0,this._onTriggerSlotChanged=e=>{this._trigger=e.target.assignedElements({flatten:!0})[0]},this._intersectionCallback=e=>{e.forEach(t=>{t.isIntersecting===!1&&(this._startScrollListener(),this._updatePlacement())})},this._onKeyUp=e=>{if(e.key==="Escape"){this._triggerPopoverClose();return}},this._onDocumentClick=e=>{e.composedPath().includes(this)||this._triggerPopoverClose()}}get placement(){return this._placement}set placement(e){let t=this._placement;this._placement=e||"bottom-start",this._currentPlacement=null,this._updatePlacement(),this.requestUpdate("placement",t)}get open(){return this._open}set open(e){let t=this._open;this._open=e,e?this._openPopover():this._closePopover(),this.requestUpdate("open",t)}connectedCallback(){super.connectedCallback(),this._getScrollParents()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("scroll",this.scrollEventHandler),this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),this._scrollParents=[]}_openPopover(){this.containerElement&&(this.containerElement.style.opacity="0",document.addEventListener("mousedown",this._onDocumentClick),document.addEventListener("keyup",this._onKeyUp),this._currentPlacement=null,requestAnimationFrame(()=>{this._updatePlacement(),this._createIntersectionObserver(),this.containerElement.style.opacity="1"}))}_closePopover(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),this._currentPlacement=null}_triggerPopoverClose(){let e=new an(an.CLOSE,{cancelable:!0});this.dispatchEvent(e),!e.defaultPrevented&&(this.open=!1)}_getScrollParents(){let e=this.shadowRoot.host,t=getComputedStyle(e);if(t.position==="fixed")return;let r=t.position==="absolute",n=/(auto|scroll)/,o=e;for(;o=o.parentElement;)if(t=getComputedStyle(o),!(r&&t.position==="static")&&(n.test(t.overflow+t.overflowY+t.overflowX)&&this._scrollParents.push(o),t.position==="fixed"))return;this._scrollParents.push(document.body)}_createIntersectionObserver(){if(this.intersectionObserver)return;let e={root:null,rootMargin:"0px",threshold:1};this.intersectionObserver=new IntersectionObserver(this._intersectionCallback,e),this.intersectionObserver.observe(this.containerElement)}_startScrollListener(){this._scrollParents.forEach(e=>{e.addEventListener("scroll",this.scrollEventHandler)}),document.addEventListener("scroll",this.scrollEventHandler)}_stopScrollListener(){this._scrollParents.forEach(e=>{e.removeEventListener("scroll",this.scrollEventHandler)}),document.removeEventListener("scroll",this.scrollEventHandler)}_updatePlacement(){if(!this.shadowRoot)return;let e=this.containerElement;if(!e)return;let t=this.containerElement?.getBoundingClientRect(),r=this._trigger?.getBoundingClientRect();if(r!=null&&t!=null){let n=this._scrollParents.map(He=>He.getBoundingClientRect());this._currentPlacement=this._currentPlacement||this._placement,this._placement!=="auto"&&(this._currentPlacement=this._managePlacementFlip(this._currentPlacement,t,n));let o=this._currentPlacement.indexOf("top")!==-1,s=this._currentPlacement.indexOf("bottom")!==-1,a=this._currentPlacement.indexOf("left")!==-1,p=this._currentPlacement.indexOf("right")!==-1,c=this._currentPlacement.indexOf("-start")!==-1,y=this._currentPlacement.indexOf("-end")!==-1,f=.5,m=.5,T=.5,g=.5,R=0,_=0;if(this.placement==="auto"){let He=this._scrollParents[0],To=He.clientWidth,Yt=He.clientHeight,Er=r.x-t.width,Tr=To-(r.x+r.width)-t.width,ca=r.y-t.height,Tn=Yt-(r.y+r.height)-t.height,Rn=.5,Pn=.5,Rd=Math.max(Er,Tr),ul=Math.max(ca,Tn);Tn>ca&&Tn>this.margin&&(ul+=9999),Rd>ul?(Er>Tr?(Rn=0,a=!0):(Rn=1,p=!0),R=this.margin):(ca>Tn?(Pn=0,o=!0):(Pn=1,s=!0),_=this.margin),f=Rn,m=Pn,T=1-Rn,g=1-Pn}else o&&(g=1,m=0),s&&(g=0,m=1),(o||s)&&(_=this.margin,c&&(T=0,f=0),y&&(T=1,f=1)),a&&(T=1,f=0),p&&(T=0,f=1),(a||p)&&(R=this.margin,c&&(g=0,m=0),y&&(g=1,m=1));let B=-t.width*T+r.width*f-R*(T*2-1),q=-t.height*g+r.height*m-_*(g*2-1),Ee=B,Tt=q;o||s?(this._scrollParents.forEach((He,To)=>{let Yt=He===document.body?0:n[To].x,Er=-r.x+Yt,Tr=He.clientWidth-r.x-r.width+B+Yt-(t.width-r.width)*(1-f);Ee=As(Ee,Er,Tr)}),Ee=As(Ee,-t.width,r.width)):(a||p)&&(this._scrollParents.forEach((He,To)=>{let Yt=He===document.body?0:n[To].y,Er=-r.y+Yt,Tr=He.clientHeight-r.y-r.height+q+Yt-(t.height-r.height)*(1-m);Tt=As(Tt,Er,Tr)}),Tt=As(Tt,-t.height,r.height)),(this._positionX!==Ee||this._positionY!==Tt)&&(this._positionX=Ee,this._positionY=Tt,B===Ee&&q===Tt&&this._stopScrollListener(),e.style.left=`${this._positionX}px`,e.style.top=`${this._positionY}px`)}}_managePlacementFlip(e,t,r){let o=e.split("-"),s=o[0],a=o[1]||null,p;return this._scrollParents.some((c,y)=>{let f=c===document.body?0:r[y].x,m=c===document.body?0:r[y].y;return s==="top"&&t.y-2<=m?(p="bottom",!0):s==="bottom"&&t.y+t.height+2>=c.clientHeight+m?(p="top",!0):s==="left"&&t.x-2<=f?(p="right",!0):s==="right"&&t.x+t.width+2>=c.clientWidth+f?(p="left",!0):!1}),p?(this._startScrollListener(),p+(a?`-${a}`:"")):e}render(){return l`
      <slot
        id="trigger"
        name="trigger"
        @slotchange=${this._onTriggerSlotChanged}></slot>
      <div id="container">
        ${this._open?l`<slot name="popover"></slot>`:""}
      </div>
    `}};yr.styles=[u`
      :host {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      #container {
        position: absolute;
        width: 100%;
        z-index: var(--uui-popover-z-index, 1);
      }
      slot[name='popover'] {
        display: block;
      }
      #trigger {
        position: relative;
        width: 100%;
      }

      slot[name='trigger']::slotted(uui-button) {
        --uui-button-border-radius: var(
          --uui-popover-toggle-slot-button-border-radius
        );
        --uui-button-merge-border-left: var(
          --uui-popover-toggle-slot-button-merge-border-left
        );
      }
    `];ln([P("#container")],yr.prototype,"containerElement",2);ln([i({type:Number})],yr.prototype,"margin",2);ln([i({type:String,reflect:!0})],yr.prototype,"placement",1);ln([i({type:Boolean,reflect:!0})],yr.prototype,"open",1);yr=ln([d("uui-popover")],yr);var Zy=Object.defineProperty,Jy=Object.getOwnPropertyDescriptor,Cu=e=>{throw TypeError(e)},gr=(e,t,r,n)=>{for(var o=n>1?void 0:n?Jy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Zy(t,r,o),o},Ii=(e,t,r)=>t.has(e)||Cu("Cannot "+r),O=(e,t,r)=>(Ii(e,t,"read from private field"),r?r.call(e):t.get(e)),gt=(e,t,r)=>t.has(e)?Cu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Us=(e,t,r,n)=>(Ii(e,t,"write to private field"),t.set(e,r),r),Ft=(e,t,r)=>(Ii(e,t,"access private method"),r),ft,ao,br,pn,$s,vt,un,Ti,tt,Ri,Ou,Pi,Su,ki,wt=class extends h{constructor(){super(...arguments),gt(this,tt),this.margin=0,this._placement="bottom-start",this._open=!1,this._actualPlacement=this._placement,gt(this,ft,null),gt(this,ao,[]),gt(this,br,null),gt(this,pn,{width:0,height:0}),gt(this,$s,e=>{if(this._open=e.newState==="open",Us(this,ft,Zl(this,"popovertarget",this.id)),Ft(this,tt,Su).call(this),O(this,ft)?.dispatchEvent(new CustomEvent("uui-popover-before-toggle",{bubbles:!1,composed:!1,detail:{oldState:e.oldState,newState:e.newState}})),!this._open){Ft(this,tt,Pi).call(this);return}Ft(this,tt,Ou).call(this),requestAnimationFrame(()=>{O(this,vt).call(this)})}),gt(this,vt,()=>{this._open&&(this._actualPlacement=this._placement,this.style.opacity="0",O(this,un).call(this,3))}),gt(this,un,e=>{if(O(this,Ti).call(this),e--,O(this,ft)===null)return;let t=this._actualPlacement.indexOf("top")!==-1,r=this._actualPlacement.indexOf("bottom")!==-1,n=this._actualPlacement.indexOf("left")!==-1,o=this._actualPlacement.indexOf("right")!==-1,s=this._actualPlacement.indexOf("-start")!==-1,a=this._actualPlacement.indexOf("-end")!==-1,p=O(this,ft).getBoundingClientRect(),c=this.getBoundingClientRect(),y=0,f=0;r&&(y=p.top+p.height,s&&(f=p.left),a&&(f=p.left+p.width-c.width),!s&&!a&&(f=p.left+p.width/2-c.width/2)),t&&(y=p.top-c.height,s&&(f=p.left),a&&(f=p.left+p.width-c.width),!s&&!a&&(f=p.left+p.width/2-c.width/2)),n&&(f=p.left-c.width,s&&(y=p.top),a&&(y=p.top+p.height-c.height),!s&&!a&&(y=p.top+p.height/2-c.height/2)),o&&(f=p.left+p.width,s&&(y=p.top),a&&(y=p.top+p.height-c.height),!s&&!a&&(y=p.top+p.height/2-c.height/2));let m=window.innerWidth,T=window.innerHeight,g=Math.min(0,p.top+p.height),R=Math.max(Math.min(y,T-c.height),p.top-c.height);if(Math.max(g,R)!==y&&(t||r)&&e>0){Ft(this,tt,Ri).call(this),O(this,un).call(this,e);return}y=Math.max(g,R);let B=Math.min(0,p.left+p.width),q=Math.max(Math.min(f,m-c.width),p.left-c.width),Ee=Math.max(B,q);if(Ee!==f&&(n||o)&&e>0){Ft(this,tt,Ri).call(this),O(this,un).call(this,e);return}f=Ee,(y+c.height<0||y>T||f+c.width<0||f>m)&&this.hidePopover(),this.style.transform=`translate(${f}px, ${y}px)`,this.style.opacity="1"}),gt(this,Ti,()=>{let e={top:"bottom",bottom:"top",left:"right",right:"left"},t=this._actualPlacement.split("-")[0];t=e[t]||t,t=t.charAt(0).toUpperCase()+t.slice(1);let r=`padding${t}`;this.style.padding="0",this.style[r]=`${this.margin}px`})}get open(){return this._open}get placement(){return this._placement}set placement(e){this._placement=e,this._actualPlacement=e,O(this,vt).call(this)}connectedCallback(){this.hasAttribute("popover")||this.setAttribute("popover",""),super.connectedCallback(),this.addEventListener("beforetoggle",O(this,$s)),O(this,br)||(Us(this,br,new ResizeObserver(e=>{let t=e[0],r=t.contentRect.width,n=t.contentRect.height;r===O(this,pn).width&&n===O(this,pn).height||(Us(this,pn,{width:r,height:n}),O(this,vt).call(this))})),O(this,br).observe(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("beforetoggle",O(this,$s)),Ft(this,tt,Pi).call(this),O(this,br)?.disconnect(),Us(this,br,null)}render(){return l`<slot></slot>`}};ft=new WeakMap;ao=new WeakMap;br=new WeakMap;pn=new WeakMap;$s=new WeakMap;vt=new WeakMap;un=new WeakMap;Ti=new WeakMap;tt=new WeakSet;Ri=function(){let[e,t]=this._actualPlacement.split("-"),r=e==="top"?"bottom":e==="bottom"?"top":e==="left"?"right":"left";this._actualPlacement=`${r}-${t}`};Ou=function(){O(this,ao).forEach(e=>{e.addEventListener("scroll",O(this,vt),{passive:!0})}),document.addEventListener("scroll",O(this,vt),{passive:!0})};Pi=function(){O(this,ao).forEach(e=>{e.removeEventListener("scroll",O(this,vt))}),document.removeEventListener("scroll",O(this,vt))};Su=function(){if(!O(this,ft))return;let e=getComputedStyle(O(this,ft));if(e.position==="fixed")return;let t=e.position==="absolute",r=/(auto|scroll)/,n=O(this,ft);for(;n;){if(e=getComputedStyle(n),t&&e.position==="static"){n=Ft(this,tt,ki).call(this,n);continue}if(r.test(e.overflow+e.overflowY+e.overflowX)&&O(this,ao).push(n),e.position==="fixed")return;n=Ft(this,tt,ki).call(this,n)}O(this,ao).push(document.body)};ki=function(e){return e?.parentElement?e.parentElement:e?.getRootNode()?.host};wt.styles=[u`
      :host {
        margin: 0;
        width: fit-content;
        height: fit-content;
        border: none;
        border-radius: 0;
        padding: 0;
        background-color: none;
        background: none;
        overflow: visible;
        color: var(--uui-color-text,#060606);
      }
    `];gr([i({type:Number})],wt.prototype,"margin",2);gr([i({type:Boolean})],wt.prototype,"open",1);gr([i({type:String,reflect:!0})],wt.prototype,"placement",1);gr([b()],wt.prototype,"_placement",2);gr([b()],wt.prototype,"_open",2);gr([b()],wt.prototype,"_actualPlacement",2);wt=gr([d("uui-popover-container")],wt);var eb=Object.defineProperty,tb=Object.getOwnPropertyDescriptor,Au=(e,t,r,n)=>{for(var o=n>1?void 0:n?tb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&eb(t,r,o),o},rb=(e,t,r)=>Math.min(Math.max(e,t),r),Ls=class extends h{constructor(){super(...arguments),this._progress=0}get progress(){return this._progress}set progress(e){let t=this._progress;this._progress=rb(e,0,100),this.requestUpdate("progress",t)}_getProgressStyle(){return{width:`${this._progress}%`}}render(){return l`
      <div id="bar" style=${ie(this._getProgressStyle())}></div>
    `}};Ls.styles=[u`
      :host {
        width: 100%;
        height: 4px;
        position: relative;
        overflow: hidden;
        background: var(--uui-color-surface-alt,#f3f3f5);
        border-radius: 100px;
        display: inline-block;
      }

      #bar {
        transition: width 250ms ease;
        background: var(--uui-color-positive,#0b8152);
        height: 100%;
        width: 0%;
      }
    `];Au([i({type:Number})],Ls.prototype,"progress",1);Ls=Au([d("uui-progress-bar")],Ls);var vr=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};vr.CHANGE="change";var ob=Object.defineProperty,nb=Object.getOwnPropertyDescriptor,Uu=e=>{throw TypeError(e)},Nt=(e,t,r,n)=>{for(var o=n>1?void 0:n?nb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&ob(t,r,o),o},sb=(e,t,r)=>t.has(e)||Uu("Cannot "+r),ab=(e,t,r)=>t.has(e)?Uu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ib=(e,t,r)=>(sb(e,t,"access private method"),r),Bi,$u,Ne=class extends h{constructor(){super(...arguments),ab(this,Bi),this.name="",this.value="",this.label="",this.checked=!1,this.disabled=!1,this.readonly=!1}focus(){this._inputElement.focus()}click(){this._inputElement.click()}uncheck(){this.checked=!1}check(){this.checked=!0}makeFocusable(){this.disabled||this.removeAttribute("tabindex")}makeUnfocusable(){this.disabled||this.setAttribute("tabindex","-1")}render(){return l` <label>
      <input
        id="input"
        type="radio"
        name=${this.name}
        value=${this.value}
        .checked=${this.checked}
        .disabled=${this.disabled||this.readonly}
        @change=${ib(this,Bi,$u)} />
      <div id="button"></div>
      <div id="label">
        ${this.label?l`<span>${this.label}</span>`:l`<slot></slot>`}
      </div>
    </label>`}};Bi=new WeakSet;$u=function(e){e.stopPropagation();let t=this._inputElement.checked;this.checked=t,t&&this.focus(),this.dispatchEvent(new vr(vr.CHANGE))};Ne.styles=[It,u`
      :host {
        display: block;
        box-sizing: border-box;
        font-family: inherit;
        color: currentColor;
        --uui-radio-button-size: var(--uui-size-6,18px);
        margin: var(--uui-size-2,6px) 0;
      }

      label {
        position: relative;
        box-sizing: border-box;
        user-select: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        line-height: 18px;
      }

      :host([readonly]) label {
        cursor: default;
      }

      #input {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
      }

      .label {
        margin-top: 2px;
      }

      #button {
        box-sizing: border-box;
        display: inline-block;
        width: var(--uui-radio-button-size, 18px);
        height: var(--uui-radio-button-size, 18px);
        background-color: var(--uui-color-surface,#fff);
        border: 1px solid var(--uui-color-border-standalone,#c2c2c2);
        border-radius: 100%;
        margin-right: calc(var(--uui-size-2,6px) * 2);
        position: relative;
        flex: 0 0 var(--uui-radio-button-size);
      }

      #button::after {
        content: '';
        width: calc(var(--uui-radio-button-size) / 2);
        height: calc(var(--uui-radio-button-size) / 2);
        background-color: var(--uui-color-selected,#3544b1);
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: all 0.15s ease-in-out;
      }

      :host(:hover) #button {
        border: 1px solid var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host(:focus) {
        outline: none;
      }
      :host(:focus-within) input:focus-visible + #button {
        outline: 2px solid var(--uui-color-focus,#3879ff);
      }

      input:checked ~ #button::after {
        transform: translate(-50%, -50%) scale(1);
      }

      input:checked ~ #button {
        border: 1px solid var(--uui-color-selected,#3544b1);
      }

      input:checked:hover ~ #button {
        border: 1px solid var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:checked:hover ~ #button::after {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }
      :host([disabled]) .label {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input ~ #button {
        border: 1px solid var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input:checked ~ #button {
        border: 1px solid var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input:checked ~ #button::after {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]:active) #button {
        animation: ${Bt};
      }

      @media (prefers-reduced-motion) {
        :host([disabled]:active) #button {
          animation: none;
        }

        #button::after {
          transition: none;
        }
      }
    `];Nt([P("#input")],Ne.prototype,"_inputElement",2);Nt([i({type:String})],Ne.prototype,"name",2);Nt([i({type:String})],Ne.prototype,"value",2);Nt([i({type:String})],Ne.prototype,"label",2);Nt([i({type:Boolean,reflect:!0})],Ne.prototype,"checked",2);Nt([i({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);Nt([i({type:Boolean,reflect:!0})],Ne.prototype,"readonly",2);Ne=Nt([d("uui-radio")],Ne);var dn=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};dn.CHANGE="change";var lb=Object.defineProperty,pb=Object.getOwnPropertyDescriptor,Lu=e=>{throw TypeError(e)},Oi=(e,t,r,n)=>{for(var o=n>1?void 0:n?pb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&lb(t,r,o),o},Si=(e,t,r)=>t.has(e)||Lu("Cannot "+r),k=(e,t,r)=>(Si(e,t,"read from private field"),r?r.call(e):t.get(e)),qt=(e,t,r)=>t.has(e)?Lu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Vs=(e,t,r,n)=>(Si(e,t,"write to private field"),t.set(e,r),r),z=(e,t,r)=>(Si(e,t,"access private method"),r),K,U,Mi,Gi,Fs,qs,_i,V,Vu,Ai,Ci,Ui,$i,fr,Fu,qu,cn,ub="ArrowLeft",db="ArrowUp",cb="ArrowRight",hb="ArrowDown",mb=" ",yb="Enter",io=class extends W(h,""){constructor(){super(),qt(this,V),this.disabled=!1,this.readonly=!1,qt(this,K,null),qt(this,U,[]),qt(this,Mi,e=>{k(this,U)?.forEach(t=>{t!==e.target?t.makeUnfocusable():t.makeFocusable()})}),qt(this,Gi,e=>{this.contains(e.relatedTarget)||k(this,K)===null&&k(this,U)?.forEach(t=>{t.makeFocusable()})}),qt(this,Fs,()=>{this.pristine=!1}),qt(this,qs,e=>{e.target.checked===!0&&(this.value=e.target.value,z(this,V,cn).call(this))}),qt(this,_i,e=>{switch(e.key){case ub:case db:{e.preventDefault(),z(this,V,Fu).call(this);break}case cb:case hb:{e.preventDefault(),z(this,V,qu).call(this);break}case mb:{k(this,K)===null&&(this.value=z(this,V,fr).call(this,1,!1)?.value,z(this,V,cn).call(this));break}case yb:this.submit()}}),this.addEventListener("keydown",k(this,_i)),this.addEventListener("focusin",k(this,Mi)),this.addEventListener("focusout",k(this,Gi)),this.updateComplete.then(()=>{z(this,V,Ci).call(this,this.value)})}get value(){return super.value}set value(e){super.value=e,z(this,V,Ci).call(this,e)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","radiogroup")}updated(e){super.updated(e),e.has("disabled")&&z(this,V,Ui).call(this,this.disabled),e.has("readonly")&&z(this,V,$i).call(this,this.readonly),e.has("name")&&z(this,V,Ai).call(this,e.get("name"))}async focus(){await this.updateComplete,k(this,K)!==null?k(this,U)[k(this,K)]?.focus():z(this,V,fr).call(this,1,!1)?.focus()}async blur(){await this.updateComplete,k(this,K)!==null?k(this,U)[k(this,K)]?.blur():z(this,V,fr).call(this,1,!1)?.blur()}async click(){await this.updateComplete,k(this,K)!==null?k(this,U)[k(this,K)]?.click():z(this,V,fr).call(this,1,!1)?.click()}getFormElement(){if(k(this,U)&&k(this,K))return k(this,U)[k(this,K)]}render(){return l` <slot @slotchange=${z(this,V,Vu)}></slot> `}};K=new WeakMap;U=new WeakMap;Mi=new WeakMap;Gi=new WeakMap;Fs=new WeakMap;qs=new WeakMap;_i=new WeakMap;V=new WeakSet;Vu=function(e){if(e.stopPropagation(),k(this,U)?.forEach(r=>{r.removeEventListener(vr.CHANGE,k(this,qs)),r.removeEventListener("blur",k(this,Fs))}),Vs(this,K,null),Vs(this,U,e.target.assignedElements({flatten:!0}).filter(r=>r instanceof Ne)),k(this,U).length===0)return;k(this,U).forEach(r=>{r.addEventListener(vr.CHANGE,k(this,qs)),r.addEventListener("blur",k(this,Fs))}),z(this,V,Ai).call(this,this.name),this.disabled&&z(this,V,Ui).call(this,!0),this.readonly&&z(this,V,$i).call(this,!0);let t=k(this,U).filter(r=>r.checked===!0);if(t.length>1&&(k(this,U).forEach(r=>{r.checked=!1}),this.value="",console.error("There can only be one checked radio among the <"+this.nodeName+"> children",this)),t.length===1){let r=t[0];this.value=r.value,Vs(this,K,k(this,U).indexOf(r))}};Ai=function(e){k(this,U)?.forEach(t=>t.name=e)};Ci=function(e){let t=[];k(this,U).forEach((r,n)=>{r.value===e?(r.checked=!0,r.makeFocusable(),Vs(this,K,n)):(r.checked=!1,t.push(r))}),k(this,K)!==null&&t.forEach(r=>r.makeUnfocusable())};Ui=function(e){k(this,U)?.forEach(t=>t.disabled=e)};$i=function(e){k(this,U)?.forEach(t=>t.readonly=e)};fr=function(e=1,t=!0){if(!k(this,U)||k(this,U).length===0)return null;let r=k(this,U).length,n=k(this,K)??0;for(let o=0;o<r+1;o++){if(!t||o>0){let s=k(this,U)[n];if(!s.disabled&&!s.readonly)return s}n=(n+e+r)%r}return null};Fu=function(){this.value=z(this,V,fr).call(this,-1)?.value??"",k(this,U)[k(this,K)??0]?.focus(),z(this,V,cn).call(this)};qu=function(){this.value=z(this,V,fr).call(this)?.value??"",k(this,U)[k(this,K)??0]?.focus(),z(this,V,cn).call(this)};cn=function(){this.pristine=!1,this.dispatchEvent(new dn(dn.CHANGE))};io.formAssociated=!0;io.styles=[u`
      :host {
        display: inline-block;
        padding-right: 3px;
        border: 1px solid transparent;
        border-radius: var(--uui-border-radius,3px);
      }

      :host(:not([pristine]):invalid),
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];Oi([i({type:Boolean,reflect:!0})],io.prototype,"disabled",2);Oi([i({type:Boolean,reflect:!0})],io.prototype,"readonly",2);io=Oi([d("uui-radio-group")],io);var Le=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Le.INPUT="input";Le.CHANGE="change";var bb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,zu=e=>{throw TypeError(e)},F=(e,t,r,n)=>{for(var o=n>1?void 0:n?gb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&bb(t,r,o),o},Hu=(e,t,r)=>t.has(e)||zu("Cannot "+r),fb=(e,t,r)=>(Hu(e,t,"read from private field"),r?r.call(e):t.get(e)),Nu=(e,t,r)=>t.has(e)?zu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),lo=(e,t,r)=>(Hu(e,t,"access private method"),r),zt,wr,Fi,Li={TOP:3,CENTER:2},hn=18,po=3,xt=12,vb=24,Vi=e=>{let t=e.toString().indexOf(".");return t>=0?e.toString().length-t-1:0},$=class extends W(h,""){constructor(){super(),Nu(this,zt),this.disabled=!1,this.readonly=!1,this._min=0,this._max=0,this.hideStepValues=!1,this._step=1,this._movement=!1,this.startPoint={mouse:0,low:0,high:0},this._lowInputValue=0,this._highInputValue=0,this._trackWidth=0,this._lowValuePercentStart=0,this._highValuePercentEnd=100,Nu(this,Fi,e=>{e.key=="Enter"&&this.submit()}),this._onTouchStart=e=>{if(this.disabled)return;let t=e.composedPath()[0];if(t!==this._outerTrack)if(t===this._innerColor||t===this._innerColorThumb)window.addEventListener("touchend",this._onTouchEnd),window.addEventListener("touchcancel",this._onTouchEnd),window.addEventListener("touchmove",this._onTouchMove),this._movement=!0,this._saveStartPoints(e.touches[0].pageX);else{let r=this._getClickedValue(e.touches[0].pageX),n=Math.abs(this._lowInputValue-r),o=Math.abs(this._highInputValue-r);n<o?this.setValueLow(r):this.setValueHigh(r)}},this._onTouchMove=e=>{this._dragBothValuesByMousePos(e.touches[0].pageX)},this._onTouchEnd=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("touchend",this._onTouchEnd),window.removeEventListener("touchcancel",this._onTouchEnd),window.removeEventListener("touchmove",this._onTouchMove)},this._onMouseDown=e=>{if(this.disabled||this.readonly)return;let t=e.composedPath()[0];if(t!==this._outerTrack)if(t===this._innerColor||t===this._innerColorThumb)window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("mousemove",this._onMouseMove),this._movement=!0,this._saveStartPoints(e.pageX);else{let r=this._getClickedValue(e.pageX),n=Math.abs(this._lowInputValue-r),o=Math.abs(this._highInputValue-r);n<o?this.setValueLow(r):this.setValueHigh(r)}},this._onMouseMove=e=>{e.preventDefault(),this._dragBothValuesByMousePos(e.pageX)},this._onMouseUp=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("mousemove",this._onMouseMove)},this.addEventListener("keydown",fb(this,Fi)),this.addEventListener("mousedown",this._onMouseDown),this.addEventListener("touchstart",this._onTouchStart),window.addEventListener("resize",()=>{this._trackWidth=this._outerTrack?.offsetWidth})}get min(){return this._min}set min(e){this._min=e,lo(this,zt,wr).call(this)}get max(){return this._max}set max(e){this._max=e,lo(this,zt,wr).call(this)}get step(){return this._step}set step(e){this._step=e,lo(this,zt,wr).call(this)}get minGap(){return this._minGap}set minGap(e){this._minGap=e,lo(this,zt,wr).call(this)}get maxGap(){return this._maxGap}set maxGap(e){this._maxGap=e,lo(this,zt,wr).call(this)}get value(){return super.value}set value(e){super.value=e,lo(this,zt,wr).call(this)}setValueLow(e){e=M(e,this.maxGap?this._highInputValue-this.maxGap>this.min?this._highInputValue-this.maxGap:this.min:this.min,this.minGap?this._highInputValue-this.minGap:this._highInputValue-this.step),this.setValue(e,this._highInputValue)}setValueHigh(e){e=M(e,this.minGap?this._lowInputValue+this.minGap:this._lowInputValue+this.step,this.maxGap?this.maxGap+this._lowInputValue<this.max?this.maxGap+this._lowInputValue:this.max:this.max),this.setValue(this._lowInputValue,e)}setValue(e,t,r){if(r){let n=this.startPoint.high-this.startPoint.low;e=M(e,this.min,this.max-n),t=M(t,this.min+n,this.max)}this._inputLow.value=e.toString(),this._inputHigh.value=t.toString(),this.value=`${e},${t}`}getFormElement(){return this._currentFocus?this._currentFocus:this._inputLow}async focus(){await this.updateComplete,this.getFormElement().focus()}async blur(){await this.updateComplete,this.getFormElement().blur()}connectedCallback(){super.connectedCallback(),this.value||(this.value=`${this._min},${this._max}`)}firstUpdated(e){super.updated(e),this._trackWidth=this._outerTrack.offsetWidth,this._runPropertiesChecks()}_runPropertiesChecks(){if(new RegExp(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/).test(this.value)||console.error("Range slider (Value error occurred): Bad input"),this._highInputValue===this._lowInputValue&&console.error("Range slider (Value error occurred): Low-end and high-end value should never be equal. Use <uui-slider></uui-slider> instead."),this._lowInputValue>this._highInputValue&&console.error("Range slider (Value error occurred): Low-end value should never be higher than high-end value."),(this._highInputValue>this._max||this._highInputValue<this._min)&&(this.setValueHigh(this._max),console.warn(`Conflict with the high-end value and max value. High-end value has been converted to the max value (${this._max})`)),(this._lowInputValue<this._min||this._lowInputValue>this._max)&&(this.setValueLow(this._min),console.warn(`Conflict with the low-end value and min value. Low-end value has been converted to the min value (${this._min})`)),this._step<=0&&(this._step=1,console.warn("Property step needs a value higher than 0. Converted the step value to 1 (default)")),(this._max-this._min)/this._step%1!==0&&console.error("Conflict with step value and the min and max values. May experience bad side effects"),this._minGap&&this._minGap<this._step&&(this._minGap=void 0,console.warn("Conflict with min-gap and step value. The min-gap needs to be higher than the step value. Removed the min-gap property.")),this._minGap&&this._maxGap&&this._minGap>this._maxGap&&(this._minGap=void 0,this._maxGap=void 0,console.warn("Conflict with min-gap and max-gap. Removed the min-gap and max-gap properties.")),this._minGap&&this._max-this._min<this._minGap&&(this._minGap=void 0,console.warn("Conflict with the min-gap and the total range. Removed the min-gap.")),this._maxGap&&this._highInputValue-this._lowInputValue>this._maxGap&&(this.setValueHigh(this._lowInputValue+this._maxGap),console.warn(`Conflict with value and max-gap. High-end value has been converted to the highest possible value based on the low-end value and the max gap value (${this._highInputValue})`)),this._minGap&&this._highInputValue-this._lowInputValue<this._minGap){let t=this._minGap;this._highInputValue-t<this._min?(this.setValueHigh(this._lowInputValue+t),console.warn(`Conflict with value and min gap. High-end value has been converted to the lowest possible value based on the low-end value and the min gap value (${this._highInputValue}).`)):(this.setValueLow(this._highInputValue-t),console.warn(`Conflict with value and min gap. Low-end value has been converted to the highest possible value based on the high-end value and the min gap value (${this._lowInputValue}).`))}}_updateInnerColor(){let e=this._max-this._min,t=this._lowInputValue-this._min,r=this._highInputValue-this._min,n=t/e*100,o=100-r/e*100;this._lowValuePercentStart=M(n,0,100),this._highValuePercentEnd=M(o,0,100)}_getClickedValue(e){let t=this._outerTrack.getBoundingClientRect().left,o=(e-t-xt)/(this._trackWidth-xt*2)*(this._max-this._min)+this._min;return Math.round(o/this._step)*this._step}_saveStartPoints(e){this.startPoint={mouse:e,low:this._lowInputValue,high:this._highInputValue}}_dragBothValuesByMousePos(e){let t=this._outerTrack.offsetWidth,r=e-this.startPoint.mouse,n=this._max-this._min,o=r/(t+xt*2),s=Math.round(o*n/this._step)*this._step,a=this.startPoint.low+s,p=this.startPoint.high+s;this.setValue(a,p,!0),this.dispatchEvent(new Le(Le.INPUT))}_onLowInput(e){this.disabled&&e.preventDefault(),this.readonly&&e.preventDefault(),this._currentFocus=this._inputLow;let t=Number(e.target.value);this.setValueLow(t),this.dispatchEvent(new Le(Le.INPUT))}_onHighInput(e){this.disabled&&e.preventDefault(),this.readonly&&e.preventDefault(),this._currentFocus=this._inputHigh;let t=Number(e.target.value);this.setValueHigh(t),this.dispatchEvent(new Le(Le.INPUT))}_onLowChange(){this.setValueLow(Number(this._inputLow.value)),this.onChanged()}_onHighChange(){this.setValueHigh(Number(this._inputHigh.value)),this.onChanged()}onChanged(){this.pristine=!1,this.dispatchEvent(new Le(Le.CHANGE))}render(){return l`
      <div id="range-slider">
        ${this._renderNativeInputs()}
        <div id="inner-track">
          <div
            id="inner-color-thumb"
            class="${this._movement?"active":""}"
            style="left: ${this._lowValuePercentStart}%; right: ${this._highValuePercentEnd}%">
            ${this._renderThumbValues()}
            <div class="${this._movement?"color active":"color"}"></div>
          </div>
          ${this._renderSteps()}
        </div>
      </div>
    `}_renderThumbValues(){return l`<div class="thumb-values">
      <span
        ><span
          >${this._lowInputValue.toFixed(Vi(this._step))}</span
        ></span
      >
      <span
        ><span
          >${this._highInputValue.toFixed(Vi(this._step))}</span
        ></span
      >
    </div>`}_renderSteps(){let e=(this._max-this._min)/this._step,t=(this._trackWidth-xt*2)/e;if(t<vb||e%1!==0)return;let r=0,n=new Array(e+1).fill(t).map(o=>o*r++);return l`<div class="step-wrapper">
      <svg height="100%" width="100%">
        <rect x="9" y="9" height="${po}" rx="2" />
        ${this._renderStepCircles(n)}
      </svg>
      ${this._renderStepValues(e)}
    </div>`}_renderStepValues(e){if(this.hideStepValues||e>20)return;let t=0,r=new Array(e+1).fill(this._step).map(n=>(this._min+n*t++).toFixed(Vi(this._step)));return l`<div class="step-values">
      ${r.map(n=>l`<span><span>${n}</span></span>`)}
    </div>`}_renderStepCircles(e){let t=this._trackWidth/(this._max-this._min);return v`${e.map(r=>{let n=r+xt,o=this._lowInputValue-this._min,s=this._highInputValue-this._min;return n/t>=o&&n/t<=s?v`<circle class="track-step filled" cx="${n}" cy="${po*2}" r="4.5" />`:v`<circle class="track-step regular" cx="${n}" cy="${po*2}" r="4.5" />`})}`}_renderNativeInputs(){return l` <div class="native-wrapper">
      <input
        id="inputLow"
        class="${this._movement?"focus":""}"
        type="range"
        min=${this._min}
        max=${this._max}
        step=${this._step}
        .value=${this._lowInputValue.toString()}
        aria-label="${this.label} low-end value"
        ?disabled="${this.disabled||this.readonly}"
        @input=${this._onLowInput}
        @change=${this._onLowChange} />
      <input
        id="inputHigh"
        class="${this._movement?"focus":""}"
        type="range"
        min="${this._min}"
        max="${this._max}"
        step="${this._step}"
        .value=${this._highInputValue.toString()}
        aria-label="${this.label} high-end value"
        ?disabled="${this.disabled||this.readonly}"
        @input=${this._onHighInput}
        @change=${this._onHighChange} />
    </div>`}};zt=new WeakSet;wr=function(){let e=this.value.split(","),t=Number(e[0])||0,r=Number(e[1])||0;r=M(r,this._min,this._max),t=this._min+Math.round((t-this._min)/this._step)*this._step,r=this._min+Math.round((r-this._min)/this._step)*this._step,this._lowInputValue=M(t,this._min,this._minGap?r-this._minGap:r-this._step),this._highInputValue=M(r,this._minGap?this._lowInputValue+this._minGap:this._lowInputValue+this._step,Math.min(this._maxGap?t+this._maxGap:this._max,this._max)),this._updateInnerColor(),this.requestUpdate()};Fi=new WeakMap;$.formAssociated=!0;$.styles=[u`
      :host {
        --color-interactive: var(--uui-color-selected,#3544b1);
        --color-hover: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
        --color-focus: var(--uui-color-focus,#3879ff);
        min-height: 30px;
      }

      :host([error]) {
        --color-interactive: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-hover: var(--uui-color-invalid,#d42054);
      }

      #range-slider {
        min-height: 30px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
      }

      /** Track */

      #inner-track {
        user-select: none;
        background-color: var(--uui-color-border-standalone,#c2c2c2);
        position: absolute;
        height: 3px;
        left: ${xt}px; /* Match TRACK_MARGIN */
        right: ${xt}px; /* Match TRACK_MARGIN */
      }

      :host(:not([disabled]):hover) #inner-track,
      :host(:not([disabled]):active) #inner-track {
        background-color: var(--uui-color-border-emphasis,#a1a1a1);
      }

      #inner-color-thumb {
        margin: -9px 0 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: ${hn}px;
        cursor: grab;
        user-select: none;
        z-index: ${Li.CENTER};
      }

      :host([disabled]) #inner-color-thumb,
      :host([readonly]) #inner-color-thumb {
        cursor: default;
      }

      /** Colored part of track */

      :host([disabled]) #range-slider #inner-color-thumb .color {
        background-color: var(--uui-palette-mine-grey,#3e3e3e) !important;
      }

      #inner-color-thumb:focus .color {
        background-color: var(--color-focus);
      }

      #inner-color-thumb:hover .color,
      #inner-color-thumb .color.active {
        background-color: var(--color-hover);
      }

      :host(:not([readonly])) #inner-color-thumb:hover .color {
        height: ${po*2}px;
        background-color: var(--color-hover);
        transform: translateY(-${po/2}px);
      }

      .color {
        user-select: none;
        position: absolute;
        inset-inline: 0;
        height: ${po}px;
        top: 50%;
        transform: translateY(0);
        background-color: var(--color-interactive);
        transition: height 60ms;
      }

      :host([error]) .color {
        background-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host([error]) #inner-color-thumb:hover ~ .color,
      :host([error]) #inner-color-thumb:focus ~ .color {
        background-color: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
      }

      /** Steps */
      .step-wrapper {
        margin: 0 ${-1*xt}px;
        height: 11px;
        position: absolute;
        left: 0;
        right: 0;
        top: -10px;
      }

      /** Step circles */
      .track-step {
        fill: var(--uui-color-border,#d8d7d9);
      }

      :host(:not([disabled]):hover) #inner-track .track-step.regular,
      :host(:not([disabled]):active) #inner-track .track-step.regular {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host .track-step.filled {
        fill: var(--color-interactive);
      }

      :host([error]) .track-step.filled {
        fill: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
      }

      :host #inner-color-thumb.active ~ .step-wrapper .track-step.filled,
      :host #inner-color-thumb:hover ~ .step-wrapper .track-step.filled {
        fill: var(--color-hover);
      }

      :host([disabled]) #range-slider .track-step.filled {
        fill: var(--uui-palette-mine-grey,#3e3e3e) !important;
      }

      /** Step values */

      .step-values {
        box-sizing: border-box;
        margin: 0 ${xt}px; /* Match TRACK_MARGIN */
        display: flex;
        justify-content: space-between;
        font-size: var(--uui-type-small-size,12px);
      }

      .step-values > span {
        position: relative;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      .step-values > span > span {
        position: absolute;
        transform: translateX(-50%);
      }

      /** Input */

      .native-wrapper {
        position: relative;
        width: 100%;
        inset-inline: 0px;
        margin: -22px 5px 0 1px;
      }

      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        pointer-events: none;
        position: absolute;
        cursor: pointer;
        background-color: transparent;
        inset-inline: 0;
        width: 100%;
        border-radius: 20px;
      }

      input:focus-within {
        outline: none;
      }

      /** Thumb values */
      .thumb-values {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        color: var(--color-interactive);
        font-weight: bold;
        transition: 120ms opacity;
        opacity: 0;
      }

      .thumb-values > span {
        width: 0;
      }

      .thumb-values > span > span {
        bottom: 15px;
        position: absolute;
        transform: translateX(-50%);
      }

      :host([disabled]) .thumb-values {
        color: var(--uui-palette-mine-grey,#3e3e3e);
      }

      :host([readonly]) .thumb-values {
        opacity: 1;
      }

      #range-slider:hover .thumb-values {
        opacity: 1;
      }

      /** Native thumbs */
      /** Chrome */
      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        cursor: grab;
        position: relative;
        z-index: ${Li.TOP};
        width: ${hn}px;
        height: ${hn}px;
        border-radius: 24px;
        border: none;
        background-color: var(--color-interactive);
        overflow: visible;
        box-shadow:
          inset 0 0 0 2px var(--color-interactive),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) input::-webkit-slider-thumb,
      :host([readonly]) input::-webkit-slider-thumb {
        cursor: default;
      }

      input:focus-within::-webkit-slider-thumb,
      input.focus::-webkit-slider-thumb {
        background-color: var(--color-focus);
        box-shadow:
          inset 0 0 0 2px var(--color-focus),
          inset 0 0 0 4px var(--uui-color-surface,#fff),
          0 0 0 2px var(--color-focus);
      }
      input::-webkit-slider-thumb:hover {
        background-color: var(--color-hover);
        box-shadow:
          inset 0 0 0 2px var(--color-hover),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) #range-slider input::-webkit-slider-thumb {
        background-color: var(--uui-palette-mine-grey,#3e3e3e);
        box-shadow:
          inset 0 0 0 2px var(--uui-palette-mine-grey,#3e3e3e),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      /** Mozilla */

      input::-moz-range-thumb {
        -moz-appearance: none;
        pointer-events: all;
        cursor: grab;
        position: relative;
        z-index: ${Li.TOP};
        width: ${hn}px;
        height: ${hn}px;
        border-radius: 24px;
        border: none;
        background-color: var(--color-interactive);
        overflow: visible;
        box-shadow:
          inset 0 0 0 2px var(--color-interactive),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }
      :host([disabled]) input::-moz-range-thumb,
      :host([readonly]) input::-moz-range-thumb {
        cursor: default;
      }

      input:focus-within::-moz-range-thumb,
      input.focus::-moz-range-thumb {
        background-color: var(--color-focus);
        box-shadow:
          inset 0 0 0 2px var(--color-focus),
          inset 0 0 0 4px var(--uui-color-surface,#fff),
          0 0 0 2px var(--color-focus);
      }
      input::-moz-range-thumb:hover {
        background-color: var(--color-hover);
        box-shadow:
          inset 0 0 0 2px var(--color-hover),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) #range-slider input::-moz-range-thumb {
        background-color: var(--uui-palette-mine-grey,#3e3e3e);
        box-shadow:
          inset 0 0 0 2px var(--uui-palette-mine-grey,#3e3e3e),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }
    `];F([i({type:String})],$.prototype,"label",2);F([i({type:Boolean,reflect:!0})],$.prototype,"disabled",2);F([i({type:Boolean,reflect:!0})],$.prototype,"readonly",2);F([i({type:Number})],$.prototype,"min",1);F([i({type:Number})],$.prototype,"max",1);F([i({type:Boolean,attribute:"hide-step-values"})],$.prototype,"hideStepValues",2);F([i({type:Number})],$.prototype,"step",1);F([i({type:Number,attribute:"min-gap"})],$.prototype,"minGap",1);F([i({type:Number,attribute:"max-gap"})],$.prototype,"maxGap",1);F([i({type:String})],$.prototype,"value",1);F([b()],$.prototype,"_movement",2);F([b()],$.prototype,"_lowInputValue",2);F([b()],$.prototype,"_highInputValue",2);F([b()],$.prototype,"_trackWidth",2);F([b()],$.prototype,"_lowValuePercentStart",2);F([b()],$.prototype,"_highValuePercentEnd",2);F([P("#range-slider")],$.prototype,"_outerTrack",2);F([P("#inputLow")],$.prototype,"_inputLow",2);F([P("#inputHigh")],$.prototype,"_inputHigh",2);F([P(".color")],$.prototype,"_innerColor",2);F([P("#inner-color-thumb")],$.prototype,"_innerColorThumb",2);$=F([d("uui-range-slider")],$);var wb=Object.getOwnPropertyDescriptor,xb=(e,t,r,n)=>{for(var o=n>1?void 0:n?wb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},qi=class extends h{render(){return l`<slot></slot>`}};qi.styles=[u`
      :host {
        display: block;
      }

      ::slotted(*:not(:first-child)) {
        margin-top: 1px;
      }
      ::slotted(*:not(:first-child))::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        right: 0;
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
      }
    `];qi=xb([d("uui-ref-list")],qi);var xr=class extends E{};xr.OPEN="open";var Db=Object.defineProperty,Eb=Object.getOwnPropertyDescriptor,Ns=(e,t,r,n)=>{for(var o=n>1?void 0:n?Eb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Db(t,r,o),o},Dt=class extends kt(Me(h)){constructor(){super(...arguments),this.disabled=!1,this.readonly=!1,this.error=!1}handleOpenClick(e){e.stopPropagation(),this.dispatchEvent(new xr(xr.OPEN))}handleOpenKeydown(e){e.key!==" "&&e.key!=="Enter"||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new xr(xr.OPEN)))}};Dt.styles=[u`
      :host {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: var(--uui-font-size);

        box-sizing: border-box;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        --uui-card-before-opacity: 0;
        transition: --uui-card-before-opacity 120ms;
      }

      :host([selectable]:focus-visible) {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
      }

      :host([error]) {
        border: 2px solid var(--uui-color-invalid,#d42054);
        box-shadow:
          0 0 4px 0 var(--uui-color-invalid,#d42054),
          inset 0 0 2px 0 var(--uui-color-invalid,#d42054);
      }

      :host([standalone]) {
        border: 1px solid var(--uui-color-border,#d8d7d9);
      }

      :host([selectable]) {
        cursor: pointer;
      }
      :host([selectable]) #select-border {
        position: absolute;
        z-index: 2;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host([selectable]) #select-border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--uui-color-selected,#3544b1);
        border-radius: calc(var(--uui-border-radius,3px) + 2px);
        box-shadow:
          0 0 4px 0 var(--uui-color-selected,#3544b1),
          inset 0 0 2px 0 var(--uui-color-selected,#3544b1);
      }
      :host([selected]) #select-border {
        opacity: 1;
      }
      :host([selectable]:not([selected]):hover) #select-border {
        opacity: 0.33;
      }
      :host([selectable][selected]:hover) #select-border {
        opacity: 0.8;
      }

      :host([selectable]:not([selected])) #open-part:hover + #select-border {
        opacity: 0;
      }
      :host([selectable][selected]) #open-part:hover + #select-border {
        opacity: 1;
      }

      :host([selectable]:not([selected]):hover) #select-border::after {
        animation: not-selected--hover 1.2s infinite;
      }
      @keyframes not-selected--hover {
        0%,
        100% {
          opacity: 0.66;
        }
        50% {
          opacity: 1;
        }
      }

      :host([selectable][selected]:hover) #select-border::after {
        animation: selected--hover 1.4s infinite;
      }
      @keyframes selected--hover {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.66;
        }
      }
      :host([selectable]) #open-part:hover + #select-border::after {
        animation: none;
      }

      :host([select-only]) *,
      :host([select-only]) ::slotted(*) {
        pointer-events: none;
      }

      button {
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-align: left;
        color: var(--uui-color-text,#060606);
      }
      a {
        text-decoration: none;
        color: inherit;
      }

      button:focus,
      a:focus {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
        border-radius: var(--uui-border-radius,3px);
      }

      slot[name='actions'] {
        display: flex;
        align-items: center;
        --uui-button-height: calc(var(--uui-size-2,6px) * 4);
        margin-right: var(--uui-size-2,6px);
      }
      #tag-container {
        margin: calc(var(--uui-size-2,6px));
      }
      #actions-container {
        margin: calc(var(--uui-size-2,6px));
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:hover) #actions-container,
      :host(:focus) #actions-container,
      :host(:focus-within) #actions-container {
        opacity: 1;
      }

      :host([standalone]:not([disabled]):hover) {
        border-color: var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host([disabled]) #open-part {
        cursor: default;
      }

      :host([standalone][disabled]) {
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      slot[name='tag'] {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    `];Ns([i({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);Ns([i({type:Boolean,reflect:!0})],Dt.prototype,"readonly",2);Ns([i({type:Boolean,reflect:!0})],Dt.prototype,"error",2);Dt=Ns([d("uui-ref")],Dt);var Tb=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,ju=e=>{throw TypeError(e)},Dr=(e,t,r,n)=>{for(var o=n>1?void 0:n?Rb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Tb(t,r,o),o},Pb=(e,t,r)=>t.has(e)||ju("Cannot "+r),kb=(e,t,r)=>t.has(e)?ju("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Ht=(e,t,r)=>(Pb(e,t,"access private method"),r),rt,Wu,Qu,zs,Ku,Xu,Yu,A=class extends Dt{constructor(){super(...arguments),kb(this,rt),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    id="icon">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>`}connectedCallback(){super.connectedCallback(),w(this,"uui-icon")}renderDetail(){return l`<small id="detail"
      >${this.detail}<slot name="detail"></slot
    ></small>`}render(){return l`
      ${Ht(this,rt,Yu).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot></slot>
      <slot name="tag" id="tag-container"></slot>
      <slot name="actions" id="actions-container"></slot>
    `}};rt=new WeakSet;Wu=function(e){this._iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0};Qu=function(){return l`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`};zs=function(){return l`
      <span id="content" class="uui-text">
        <span id="icon">
          <slot name="icon" @slotchange=${Ht(this,rt,Wu)}></slot>
          ${this._iconSlotHasContent===!1?Ht(this,rt,Qu).call(this):""}
        </span>
        <div id="info">
          <div id="name">${this.name}<slot name="name"></slot></div>
          ${this.renderDetail()}
        </div>
      </span>
    `};Ku=function(){return l`<a
      id="open-part"
      class="uui-text"
      tabindex=${this.disabled?D:"0"}
      href=${x(this.disabled?void 0:this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Ht(this,rt,zs).call(this)}
    </a>`};Xu=function(){return l`
      <button
        type="button"
        id="open-part"
        class="uui-text"
        tabindex="0"
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}
        ?disabled=${this.disabled}>
        ${Ht(this,rt,zs).call(this)}
      </button>
    `};Yu=function(){return this.readonly?l`${Ht(this,rt,zs).call(this)}`:this.href?Ht(this,rt,Ku).call(this):Ht(this,rt,Xu).call(this)};A.styles=[...Dt.styles,u`
      :host {
        min-width: 250px;
        padding: 1px;
      }

      #content {
        display: flex;
        flex-grow: 1;
        align-items: center;
        line-height: 1.2em;
        padding: calc(var(--uui-size-3,9px));
      }

      #open-part {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        display: flex;
        flex-grow: 1;
      }

      #icon {
        font-size: 1.2em;
        margin-right: var(--uui-size-1,3px);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #info {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        height: 100%;
        padding-left: var(--uui-size-2,6px);
        margin-top: 1px;
      }

      #detail {
        opacity: 0.6;
        line-height: 1.2em;
      }

      :host([selectable]) #open-part {
        flex-grow: 0;
        padding: 0;
        margin: calc(var(--uui-size-2,6px));

        #content {
          padding: 0;
        }
      }

      :host(:not([disabled])) #open-part:hover #icon {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #name {
        text-decoration: underline;
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #detail {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }

      :host([disabled]) #icon {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #name {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #detail {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `];Dr([i({type:String})],A.prototype,"name",2);Dr([i({type:String})],A.prototype,"detail",2);Dr([i({type:String})],A.prototype,"href",2);Dr([i({type:String})],A.prototype,"target",2);Dr([i({type:String})],A.prototype,"rel",2);Dr([b()],A.prototype,"_iconSlotHasContent",2);A=Dr([d("uui-ref-node")],A);var Ib=Object.defineProperty,Bb=Object.getOwnPropertyDescriptor,Zu=(e,t,r,n)=>{for(var o=n>1?void 0:n?Bb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Ib(t,r,o),o},Hs=class extends A{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.212 397.267l106.052-48.024L398.479 199.03l-26.405-26.442-90.519 90.517-15.843-15.891 90.484-90.486-16.204-16.217-150.246 150.243-47.534 106.513zm74.904-100.739l23.285-23.283 3.353 22.221 22.008 3.124-23.283 23.313-46.176 20.991 20.813-46.366zm257.6-173.71L416.188 64.3l-49.755 49.785 58.504 58.503 49.779-49.77zM357.357 300.227h82.826v116.445H68.929V300.227h88.719v-30.648H38.288v177.733h432.537V269.578H357.357v30.649z"></path></svg>',this.alias=""}renderDetail(){let e=[];return this.alias!==""&&e.push(this.alias),this.detail!==""&&e.push(this.detail),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Hs.styles=[...A.styles];Zu([i({type:String})],Hs.prototype,"alias",2);Hs=Zu([d("uui-ref-node-data-type")],Hs);var Mb=Object.defineProperty,Gb=Object.getOwnPropertyDescriptor,Ju=(e,t,r,n)=>{for(var o=n>1?void 0:n?Gb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Mb(t,r,o),o},js=class extends A{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M49.035 60.434h413.93v33.592H49.035zm0 82.005h86.578v86.577H49.035zm163.677 0h86.576v86.577h-86.576zm163.676 0h86.576v86.577h-86.576zM49.035 282.984h413.93v33.593H49.035zm0 82.006h86.578v86.576H49.035zm163.677 0h86.576v86.576h-86.576zm163.676 0h86.576v86.576h-86.576z"></path></svg>',this.alias=""}renderDetail(){let e=[];return this.alias!==""&&e.push(this.alias),this.detail!==""&&e.push(this.detail),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};js.styles=[...A.styles];Ju([i({type:String})],js.prototype,"alias",2);js=Ju([d("uui-ref-node-document-type")],js);var _b=Object.getOwnPropertyDescriptor,Cb=(e,t,r,n)=>{for(var o=n>1?void 0:n?_b(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},Ni=class extends A{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.72 215.28H67.28c-11.04 0-20-8.96-20-20V64.896c0-11.04 8.96-20 20-20h377.44c11.04 0 20 8.96 20 20V195.28c0 11.056-8.96 20-20 20zm-357.44-40h337.44V84.896H87.28v90.384zm185.504 215.696c0-6.848.704-13.504 1.936-20H87.28v-90.384h337.44v12.496a108.098 108.098 0 0140 31.36v-63.856c0-11.04-8.96-20-20-20H67.28c-11.04 0-20 8.96-20 20v130.384c0 11.04 8.96 20 20 20h207.44c-1.232-6.496-1.936-13.152-1.936-20zm107.552-76.128c-41.968 0-76.112 34.16-76.112 76.128s34.144 76.128 76.112 76.128 76.128-34.16 76.128-76.128-34.144-76.128-76.128-76.128zm46.016 80.464a7.293 7.293 0 01-7.296 7.296h-27.072v27.088a7.293 7.293 0 01-7.296 7.296H376a7.293 7.293 0 01-7.296-7.296v-27.088h-27.072a7.293 7.293 0 01-7.296-7.296v-8.672a7.293 7.293 0 017.296-7.296h27.072v-27.088A7.293 7.293 0 01376 344.96h8.688a7.293 7.293 0 017.296 7.296v27.088h27.072a7.293 7.293 0 017.296 7.296v8.672z"></path></svg>'}};Ni.styles=[...A.styles];Ni=Cb([d("uui-ref-node-form")],Ni);var Ob=Object.defineProperty,Sb=Object.getOwnPropertyDescriptor,ed=(e,t,r,n)=>{for(var o=n>1?void 0:n?Sb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Ob(t,r,o),o},Ws=class extends A{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){let e=[];return this.detail!==""&&e.push(this.detail),this.groupName!==""&&e.push(this.groupName),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Ws.styles=[...A.styles];ed([i({type:String,attribute:"group-name"})],Ws.prototype,"groupName",2);Ws=ed([d("uui-ref-node-member")],Ws);var Ab=Object.defineProperty,Ub=Object.getOwnPropertyDescriptor,zi=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ub(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Ab(t,r,o),o},mn=class extends A{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M161.08 106.29l-70.073 40.452 165.498 95.545 70.076-40.453L161.08 106.29zm259.851 41.077L255.435 51.815l-63.578 36.709 165.499 95.542 63.575-36.699zm-150.11 122.19V459.43l164.966-95.238V174.32l-164.966 95.237zM75.082 364.191l164.959 95.234V268.32L75.082 173.09v191.101z"></path></svg>',this.version="",this.author=""}renderDetail(){let e=[];return this.detail!==""&&e.push(this.detail),this.version!==""&&e.push(this.version),this.author!==""&&e.push(this.author),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};mn.styles=[...A.styles];zi([i({type:String})],mn.prototype,"version",2);zi([i({type:String})],mn.prototype,"author",2);mn=zi([d("uui-ref-node-package")],mn);var $b=Object.defineProperty,Lb=Object.getOwnPropertyDescriptor,td=(e,t,r,n)=>{for(var o=n>1?void 0:n?Lb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&$b(t,r,o),o},Qs=class extends A{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){let e=[];return this.detail!==""&&e.push(this.detail),this.groupName!==""&&e.push(this.groupName),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Qs.styles=[...A.styles];td([i({type:String,attribute:"group-name"})],Qs.prototype,"groupName",2);Qs=td([d("uui-ref-node-user")],Qs);var Vb=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,rd=(e,t,r,n)=>{for(var o=n>1?void 0:n?Fb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Vb(t,r,o),o},Ks=class extends h{constructor(){super(...arguments),this.enforceScroll=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return l`<slot></slot>`}};Ks.styles=[u`
      :host {
        display: block;
        scrollbar-width: thin;
        scrollbar-color: var(--uui-color-disabled-contrast,#c4c4c4)
          var(--uui-color-surface,#fff);
        overflow-y: auto;
      }

      :host([enforce-scroll]) {
        overflow-y: scroll;
      }

      :host::-webkit-scrollbar {
        width: 6px;
        height: 6px; /* needed for horizontal scrollbar */
      }

      :host::-webkit-scrollbar-track {
        background: var(--uui-color-surface,#fff);
        border-radius: 3px;
      }
      :host::-webkit-scrollbar-thumb {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
        border-radius: 3px;
      }
    `];rd([i({type:Boolean,reflect:!0,attribute:"enforce-scroll"})],Ks.prototype,"enforceScroll",2);Ks=rd([d("uui-scroll-container")],Ks);var yn=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};yn.CHANGE="change";var qb=Object.defineProperty,Nb=Object.getOwnPropertyDescriptor,ze=(e,t,r,n)=>{for(var o=n>1?void 0:n?Nb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&qb(t,r,o),o},ke=class extends W(h,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.error=!1,this.options=[],this._groups=[],this.disabledGroups="",this._disabledGroups=[],this._values=[],this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")})}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this)}_createDisabledGroups(){this.disabledGroups.length!==0&&(this._disabledGroups=this.disabledGroups.split(","))}_extractGroups(){this.options.length!==0&&(this._groups=Array.from(new Set(this.options.filter(e=>e.group).map(e=>e.group))))}willUpdate(e){if(e.has("options")){this._extractGroups(),this._values=this.options.map(r=>r.value);let t=this.options.find(r=>r.selected);this.value=t?t.value:""}e.has("value")&&(this.value=this._values.includes(this.value)?this.value:""),e.has("disabledGroups")&&this._createDisabledGroups()}setValue(e){e.stopPropagation();let t=e.target;e.target&&(this.value=t.value),this.dispatchEvent(new yn(yn.CHANGE,{bubbles:!0,composed:!1}))}_renderOption(e,t,r,n){return l`<option
      value="${t}"
      ?selected=${r}
      ?disabled=${n}>
      ${e}
    </option>`}_renderGrouped(){return this._groups.length===0?D:l`
      ${this._groups.map(e=>l`<optgroup
            label=${e}
            ?disabled=${this._disabledGroups.some(t=>t.toLowerCase()===e.toLowerCase())}>
            ${this.options.map(t=>t.group===e?this._renderOption(t.name,t.value,t.selected,t.disabled):"")}
          </optgroup>`)}
    `}_getDisplayValue(){return this.options.find(e=>e.value===this.value)?.name||this.value}render(){return this.readonly?l`<span>${this._getDisplayValue()}</span>`:l` <select
      id="native"
      aria-label=${this.label}
      @change=${this.setValue}
      ?disabled=${this.disabled}
      .name=${this.name}
      .value=${this.value}>
      <option disabled selected value="" hidden>${this.placeholder}</option>
      ${this._renderGrouped()}
      ${this.options.filter(e=>!e.group).map(e=>this._renderOption(e.name,e.value,e.selected,e.disabled))}
    </select>`}};ke.styles=[u`
      :host {
        display: inline-block;
        position: relative;
        font-family: inherit;
      }

      #native {
        display: inline-block;
        font-family: inherit;
        font-size: var(--uui-select-font-size, inherit);
        height: var(--uui-select-height, var(--uui-size-11,33px));
        padding: var(--uui-select-padding-y, var(--uui-size-1,3px))
          var(--uui-select-padding-x, var(--uui-size-2,6px));
        color: var(--uui-select-text-color, var(--uui-color-text,#060606));
        box-sizing: border-box;
        border-radius: var(--uui-border-radius,3px);
        border: 1px solid
          var(--uui-select-border-color, var(--uui-color-border,#d8d7d9));
        transition: all 150ms ease;
        width: 100%;
        background-color: var(
          --uui-select-background-color,
          var(--uui-color-surface,#fff)
        );
      }

      #native:focus {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-select-outline-color, var(--uui-color-focus,#3879ff));
      }

      #native[disabled] {
        cursor: not-allowed;
        background-color: var(
          --uui-select-disabled-background-color,
          var(--uui-color-disabled,#f3f3f5)
        );
      }

      #native:hover {
        border: 1px solid
          var(--uui-select-border-color-hover, var(--uui-color-border-emphasis,#a1a1a1));
      }

      option:checked {
        background: var(
          --uui-select-selected-option-background-color,
          var(--uui-color-selected,#3544b1)
        );
        color: var(
          --uui-select-selected-option-color,
          var(--uui-color-selected-contrast,#fff)
        );
      }

      #caret {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
      }

      :host([error]) #native {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }

      :host([error]) #native[disabled] {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];ze([i({type:String})],ke.prototype,"label",2);ze([i()],ke.prototype,"placeholder",2);ze([i({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);ze([i({type:Boolean,reflect:!0})],ke.prototype,"readonly",2);ze([i({type:Boolean,reflect:!0})],ke.prototype,"error",2);ze([i({type:Array,attribute:!1})],ke.prototype,"options",2);ze([b()],ke.prototype,"_groups",2);ze([i()],ke.prototype,"disabledGroups",2);ze([b()],ke.prototype,"_disabledGroups",2);ze([P("#native")],ke.prototype,"_input",2);ke=ze([d("uui-select")],ke);var zb=u`
  input[type='range'] {
    left: 0;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;

    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
    border: none;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: none;
    background: transparent;
    color: transparent;
    overflow: visible;
    order: none;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: transparent;
    border: none;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 100%;
    -moz-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }

  input[type='range']::-ms-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }
  input[type='range']::-ms-fill-lower,
  input[type='range']::-ms-fill-upper {
    background: transparent;
    border: 0 none;
  }

  input[type='range']::-ms-tooltip {
    display: none;
  }

  input[type='range']::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type='range']::-ms-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']:focus::-ms-fill-lower {
    background: transparent;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: transparent;
  }
`,jt=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};jt.INPUT="input";jt.CHANGE="change";var Hb=Object.defineProperty,jb=Object.getOwnPropertyDescriptor,ad=e=>{throw TypeError(e)},ge=(e,t,r,n)=>{for(var o=n>1?void 0:n?jb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Hb(t,r,o),o},Wi=(e,t,r)=>t.has(e)||ad("Cannot "+r),od=(e,t,r)=>(Wi(e,t,"read from private field"),r?r.call(e):t.get(e)),Hi=(e,t,r)=>t.has(e)?ad("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),nd=(e,t,r,n)=>(Wi(e,t,"write to private field"),t.set(e,r),r),Wb=(e,t,r)=>(Wi(e,t,"access private method"),r),Xs,Ys,ji,id,bn=12,sd=24,Qb=(e,t,r)=>Array.from({length:(t-e)/r+1},(n,o)=>e+o*r),Kb=e=>{let t=e.toString().indexOf(".");return t>=0?e.toString().length-t-1:0},re=class extends W(h,""){constructor(){super(),Hi(this,ji),Hi(this,Xs,0),this.hideStepValues=!1,this.hideValueLabel=!1,this.min=0,this.max=100,Hi(this,Ys,1),this.disabled=!1,this.readonly=!1,this._stepWidth=0,this.onWindowResize=()=>{this._stepWidth=this._calculateStepWidth()},this._steps=[],this._sliderPosition="0%",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",Wb(this,ji,id))}get step(){return od(this,Ys)}set step(e){nd(this,Ys,e),nd(this,Xs,(e.toString().split(".")[1]||[]).length)}get value(){return super.value}set value(e){if(e instanceof File)return;let t=super.value,r=e?parseFloat(e):0;r=Math.min(Math.max(r,this.min),this.max),this.step>0&&(r=Math.round(r/this.step)*this.step),super.value=r.toFixed(od(this,Xs)).toString(),this._calculateSliderPosition(),this.requestUpdate("value",t)}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onWindowResize),this.label||console.warn(this.tagName+" needs a `label`",this)}disconnectedCallback(){window.removeEventListener("resize",this.onWindowResize),super.disconnectedCallback()}firstUpdated(){this._calculateSliderPosition(),this._updateSteps()}updated(e){super.updated(e),(e.get("max")||e.get("min")||e.get("step"))&&(this.value=this.value,this._updateSteps())}_updateSteps(){this._steps=Qb(this.min,this.max,this.step),this._stepWidth=this._calculateStepWidth()}_calculateStepWidth(){return(this._track.getBoundingClientRect().width-bn*2)/(this._steps.length-1)}_calculateSliderPosition(){let e=(parseFloat(super.value||"0")-this.min)/(this.max-this.min);this._sliderPosition=`${Math.floor(e*1e5)/1e3}%`}_onInput(e){e.stopPropagation(),this.value=this._input.value,this.dispatchEvent(new jt(jt.INPUT))}_onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new jt(jt.CHANGE))}renderTrackSteps(){return v`
  ${this._steps.map(e=>{if(this._stepWidth>=sd){let t=Math.round(bn+this._stepWidth*this._steps.indexOf(e));return v`<circle class="track-step" cx="${t}" cy="50%" r="4.5" />`}return v``})}
`}renderStepValues(){return this.hideStepValues?D:l`<div id="step-values">
      ${this._steps.map(e=>l` <span
            ><span>
              ${this._steps.length<=20&&this._stepWidth>=sd?e.toFixed(Kb(this.step)):D}
            </span></span
          >`)}
    </div>`}render(){return l`
      <input
        id="input"
        type="range"
        min="${this.min}"
        max="${this.max}"
        .value="${this.value}"
        aria-label="${this.label}"
        step="${+this.step}"
        ?disabled=${this.disabled||this.readonly}
        ?readonly=${this.readonly}
        @input=${this._onInput}
        @change=${this._onChange} />
      <div id="track" aria-hidden="true">
        <svg height="100%" width="100%">
          <rect x="9" y="9" height="3" rx="2" />
          ${this.renderTrackSteps()}
        </svg>

        <div id="track-inner" aria-hidden="true">
          <div id="thumb" style=${ie({left:this._sliderPosition})}>
            ${this.hideValueLabel?null:l`<div id="thumb-label">${this.value}</div>`}
          </div>
        </div>
      </div>
      ${this.renderStepValues()}
    `}};Xs=new WeakMap;Ys=new WeakMap;ji=new WeakSet;id=function(e){e.key=="Enter"&&this.submit()};re.formAssociated=!0;re.styles=[Wl,zb,u`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
        min-height: 30px;
        user-select: none;
      }

      input {
        box-sizing: border-box;
        height: 18px;
      }

      #track {
        position: relative;
        height: 18px;
        width: 100%;
        display: flex;
      }

      #track svg {
        height: 21px;
        border-radius: 10px;
        background-color: var(--uui-color-surface,#fff);
      }
      #track svg rect {
        width: calc(100% - 18px);
        fill: var(--uui-color-border-standalone,#c2c2c2);
      }
      input:hover ~ #track svg rect {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      input:focus ~ #track #thumb {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      .track-step {
        fill: var(--uui-color-border,#d8d7d9);
      }

      input:hover ~ #track svg .track-step {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      #track-inner {
        position: absolute;
        left: ${bn}px; /* Match TRACK_MARGIN */
        right: ${bn}px; /* Match TRACK_MARGIN */
      }

      #thumb {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 2px;
        bottom: 0;
        left: 0;
        height: 17px;
        width: 17px;
        margin-left: -8px;
        margin-right: -8px;
        border-radius: 50%;
        box-sizing: border-box;

        background-color: var(--uui-color-surface,#fff);
        border: 2px solid var(--uui-color-selected,#3544b1);
      }
      :host([disabled]) #thumb {
        background-color: var(--uui-color-disabled,#f3f3f5);
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      #thumb:after {
        content: '';
        height: 9px;
        width: 9px;
        border-radius: 50%;
        background-color: var(--uui-color-selected,#3544b1);
      }

      :host([disabled]) #thumb:after {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      #thumb-label {
        position: absolute;
        box-sizing: border-box;
        font-weight: 700;
        bottom: 15px;
        left: 50%;
        width: 40px;
        margin-left: -20px;
        text-align: center;
        opacity: 0;
        transition: 120ms opacity;
        color: var(--uui-color-selected,#3544b1);
      }

      input:focus ~ #track #thumb-label,
      input:hover ~ #track #thumb-label {
        opacity: 1;
      }

      #step-values {
        margin: 0 ${bn}px; /* Match TRACK_MARGIN */
        margin-top: 6px;
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
      }

      #step-values > span {
        flex-basis: 0;
        flex-grow: 1;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      #step-values > span > span {
        transform: translateX(-50%);
        display: inline-block;
        text-align: center;
        font-size: var(--uui-type-small-size,12px);
      }

      #step-values > span:last-child {
        width: 0;
        flex-grow: 0;
      }

      :host(:not([pristine]):invalid) #thumb {
        border-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host(:not([pristine]):invalid) #thumb:after {
        background-color: var(--uui-color-invalid,#d42054);
      }

      // readonly
      :host([readonly]) #thumb {
        background-color: var(--uui-color-disabled,#f3f3f5);
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      :host([readonly]) #thumb-label {
        opacity: 1;
      }
    `];ge([i({type:Boolean,attribute:"hide-step-values"})],re.prototype,"hideStepValues",2);ge([i({type:Boolean,attribute:"hide-value-label"})],re.prototype,"hideValueLabel",2);ge([i({type:Number})],re.prototype,"min",2);ge([i({type:Number})],re.prototype,"max",2);ge([i({type:Number})],re.prototype,"step",1);ge([i({type:String})],re.prototype,"value",1);ge([i({type:Boolean,reflect:!0})],re.prototype,"disabled",2);ge([i({type:Boolean,reflect:!0})],re.prototype,"readonly",2);ge([i({type:String})],re.prototype,"label",2);ge([P("#input")],re.prototype,"_input",2);ge([P("#track")],re.prototype,"_track",2);ge([b()],re.prototype,"_stepWidth",2);ge([b()],re.prototype,"_steps",2);ge([b()],re.prototype,"_sliderPosition",2);re=ge([d("uui-slider")],re);var Xb=Object.defineProperty,Yb=Object.getOwnPropertyDescriptor,ld=(e,t,r,n)=>{for(var o=n>1?void 0:n?Yb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Xb(t,r,o),o},Zs=class extends h{constructor(){super(...arguments),this.open=!1}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};Zs.styles=[u`
      :host {
        display: inline-flex;
        width: 12px;
        vertical-align: middle;
      }

      svg {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        transition: transform 100ms cubic-bezier(0.1, 0, 0.9, 1);
        width: 100%;
        height: 100%;
      }

      :host([open]) svg {
        transform: rotate(0deg);
      }
    `];ld([i({type:Boolean,reflect:!0})],Zs.prototype,"open",2);Zs=ld([d("uui-symbol-expand")],Zs);var Zb=Object.defineProperty,Jb=Object.getOwnPropertyDescriptor,Qi=(e,t,r,n)=>{for(var o=n>1?void 0:n?Jb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Zb(t,r,o),o},gn=class extends h{constructor(){super(...arguments),this.src="",this.alt=""}connectedCallback(){super.connectedCallback(),w(this,"uui-icon")}render(){return this.src?l`<img src=${this.src} alt=${this.alt} />`:l`<uui-icon
          name="picture"
          .fallback=${rp.strings[0]}></uui-icon>`}};gn.styles=[u`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }

      uui-icon {
        width: 100%;
        height: 100%;
        max-width: 100%;
        display: flex;
        max-height: 100%;
        justify-content: center;
        color: var(--uui-color-surface,#fff);
        background: var(--uui-color-surface-alt,#f3f3f5);
      }
    `];Qi([i({type:String})],gn.prototype,"src",2);Qi([i({type:String})],gn.prototype,"alt",2);gn=Qi([d("uui-symbol-file-thumbnail")],gn);var eg=Object.defineProperty,tg=Object.getOwnPropertyDescriptor,pd=(e,t,r,n)=>{for(var o=n>1?void 0:n?tg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&eg(t,r,o),o},Js=class extends h{constructor(){super(...arguments),this.type=""}render(){return l`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="0.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="icon">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </svg>

      ${this.type?l`<small id="file-type" class="uui-small"
            >${this.type.toUpperCase()}</small
          >`:""}
    `}};Js.styles=[je,u`
      :host {
        position: relative;
        display: block;
        box-sizing: border-box;
      }

      #file-type {
        position: absolute;
        bottom: 20%;
        left: 12%;
        margin-left: calc(var(--uui-size-3,9px) * -1);
        padding: 0px var(--uui-size-3,9px);
        font-weight: 700;
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: var(--uui-border-radius,3px);
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `];pd([i({type:String})],Js.prototype,"type",2);Js=pd([d("uui-symbol-file")],Js);var rg=Object.getOwnPropertyDescriptor,og=(e,t,r,n)=>{for(var o=n>1?void 0:n?rg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},Ki=class extends h{render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="0.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      id="icon">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>`}};Ki.styles=[u`
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `];Ki=og([d("uui-symbol-folder")],Ki);var ng=Object.defineProperty,sg=Object.getOwnPropertyDescriptor,ud=(e,t,r,n)=>{for(var o=n>1?void 0:n?sg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&ng(t,r,o),o},ea=class extends h{constructor(){super(...arguments),this.open=!1}render(){return v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      ${this.open===!0?v`<path d="M457.915 242.222H269.053l-.004-78.416c0-33.277-12.63-63.824-33.538-86.175-20.82-22.357-50.579-36.756-83.391-36.731-32.814-.024-62.57 14.375-83.391 36.731-20.915 22.351-33.541 52.897-33.547 86.175v103.859H96.19v-13.476l-35.656-35.656H96.19v-54.728c0-17.765 6.717-33.406 17.084-44.502 10.463-11.09 23.927-17.37 38.845-17.394 14.916.024 28.375 6.304 38.837 17.394 10.375 11.096 17.092 26.738 17.087 44.502v78.416h-26.189c-9.159 0-16.582 7.426-16.582 16.585v194.53c0 9.158 7.423 16.583 16.582 16.583h276.06c9.164 0 16.587-7.425 16.587-16.583v-194.53c.001-9.159-7.422-16.584-16.586-16.584z"></path>`:v`<path d="M404.84 246.573h-22.084l-.002-73.603c0-36.675-13.921-70.311-36.917-94.892-22.91-24.584-55.547-40.367-91.539-40.336-36.003-.031-68.643 15.752-91.55 40.336-23.001 24.582-36.918 58.217-36.925 94.892v73.603h-22.082c-9.16 0-16.585 7.421-16.585 16.583v194.531c0 9.158 7.425 16.585 16.585 16.585H404.84c9.162 0 16.586-7.427 16.586-16.585V263.156c0-9.161-7.424-16.583-16.586-16.583zm-218.013-73.602c0-21.167 8.012-39.893 20.468-53.219 12.552-13.316 28.896-20.982 47.003-21.007 18.095.025 34.438 7.685 46.987 21.007 12.455 13.326 20.467 32.052 20.467 53.219v73.603H186.827v-73.603z"></path>`}
    </svg>`}};ea.styles=[u`
      :host {
        display: inline-block;
        vertical-align: middle;
        width: 1em;
      }

      svg {
        fill: currentColor;
      }
    `];ud([i({type:Boolean,reflect:!0})],ea.prototype,"open",2);ea=ud([d("uui-symbol-lock")],ea);var ag=Object.getOwnPropertyDescriptor,ig=(e,t,r,n)=>{for(var o=n>1?void 0:n?ag(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},Xi=class extends h{render(){return v`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="17" cy="50" r="9"></circle>
      <circle cx="50" cy="50" r="9"></circle>
      <circle cx="83" cy="50" r="9"></circle>
    </svg>`}};Xi.styles=[u`
      :host {
        display: inline-block;
        vertical-align: bottom;
        width: 1.15em;
        height: 1.15em;
      }

      svg {
        fill: currentColor;
      }
    `];Xi=ig([d("uui-symbol-more")],Xi);var lg=Object.defineProperty,pg=Object.getOwnPropertyDescriptor,dd=(e,t,r,n)=>{for(var o=n>1?void 0:n?pg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&lg(t,r,o),o},ta=class extends Ke(h){constructor(){super(...arguments),this.descending=!1}render(){return l` <svg
        id="up"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="m4 9 8 8 8-8"></path>
      </svg>
      <svg
        id="down"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="m4 9 8 8 8-8"></path>
      </svg>`}};ta.styles=[u`
      :host {
        position: relative;
        display: inline-block;
        width: 0.9em;
        height: 1em;
        //vertical-align: middle;
        pointer-events: none;
      }

      svg {
        position: absolute;
        left: 0;
        top: 50%;
        width: 0.9em;
        transform-origin: 50% 50%;
        transition:
          transform 120ms ease-in-out,
          opacity 120ms,
          margin-top 240ms;
        opacity: 0;
        margin-top: -8em;
      }

      #up {
        transform: rotate(180deg);
        margin-top: -1.05em;
      }
      #down {
        margin-top: -0.55em;
      }
      :host([active]) #up {
        margin-top: calc(-0.8em - (0.25em * var(--uui-symbol-sort-hover, 0)));
      }
      :host([active]) #down {
        margin-top: calc(-0.8em + (0.25em * var(--uui-symbol-sort-hover, 0)));
      }

      :host(:hover) {
        --uui-symbol-sort-hover: 1;
      }
      :host(:not([active])) #up,
      :host(:not([active])) #down {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }

      :host([active]:not([descending])) #down {
        opacity: 1;
      }
      :host([active]:not([descending])) #up {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }

      :host([active][descending]) #up {
        opacity: 1;
      }
      :host([active][descending]) #down {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }
    `];dd([i({type:Boolean,reflect:!0})],ta.prototype,"descending",2);ta=dd([d("uui-symbol-sort")],ta);var ug=Object.getOwnPropertyDescriptor,dg=(e,t,r,n)=>{for(var o=n>1?void 0:n?ug(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},Yi=class extends h{connectedCallback(){super.connectedCallback(),this.setAttribute("role","table")}render(){return l`<slot></slot>`}};Yi.styles=[u`
      :host {
        display: table;
        width: 100%;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        cursor: default;
      }
    `];Yi=dg([d("uui-table")],Yi);var cg=Object.defineProperty,hg=Object.getOwnPropertyDescriptor,oa=(e,t,r,n)=>{for(var o=n>1?void 0:n?hg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&cg(t,r,o),o},Wt=class extends h{constructor(){super(...arguments),this.disableChildInteraction=!1,this.noPadding=!1,this.clipText=!1,this._observer=new ResizeObserver(()=>{this._detectOverflow()})}_detectOverflow(){this.scrollWidth>this.clientWidth?this.setAttribute("title",this.innerText):this.removeAttribute("title")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","cell")}disconnectedCallback(){super.disconnectedCallback(),this._observer.disconnect()}updated(e){super.updated(e),e.has("clipText")&&(this.clipText?(this._detectOverflow(),this._observer.observe(this)):this._observer.disconnect())}render(){return l` <slot @slotchange=${this._detectOverflow}></slot>`}};Wt.styles=[u`
      :host {
        position: relative;
        display: table-cell;
        height: var(--uui-table-cell-height, var(--uui-size-12,36px));
        padding: var(
          --uui-table-cell-padding,
          var(--uui-size-3,9px) var(--uui-size-5,15px)
        );
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
        vertical-align: middle;
      }

      :host([clip-text]) {
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }

      :host([disable-child-interaction]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disable-child-interaction])::after {
        content: '';
        position: absolute;
        inset: 0;
      }

      :host([no-padding]) {
        padding: 0;
      }
    `];oa([i({type:Boolean,reflect:!0,attribute:"disable-child-interaction"})],Wt.prototype,"disableChildInteraction",2);oa([i({type:Boolean,reflect:!0,attribute:"no-padding"})],Wt.prototype,"noPadding",2);oa([i({type:Boolean,reflect:!0,attribute:"clip-text"})],Wt.prototype,"clipText",2);Wt=oa([d("uui-table-cell")],Wt);var mg=Object.getOwnPropertyDescriptor,yg=(e,t,r,n)=>{for(var o=n>1?void 0:n?mg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},Zi=class extends h{};Zi.styles=[u`
      :host {
        display: table-column;
      }
    `];Zi=yg([d("uui-table-column")],Zi);var bg=Object.getOwnPropertyDescriptor,gg=(e,t,r,n)=>{for(var o=n>1?void 0:n?bg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},Ji=class extends Wt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","columnheader")}};Ji.styles=[...Wt.styles,u`
      :host {
        border-top: none;
      }
    `];Ji=gg([d("uui-table-head-cell")],Ji);var fg=Object.getOwnPropertyDescriptor,vg=(e,t,r,n)=>{for(var o=n>1?void 0:n?fg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},el=class extends h{connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}render(){return l`<slot></slot>`}};el.styles=[u`
      :host {
        display: table-header-group;
        font-weight: bold;
      }
    `];el=vg([d("uui-table-head")],el);var wg=Object.defineProperty,xg=Object.getOwnPropertyDescriptor,cd=(e,t,r,n)=>{for(var o=n>1?void 0:n?xg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&wg(t,r,o),o},ra=class extends kt(Me(h)){constructor(){super();let e=!1;this.addEventListener("blur",()=>{e===!1&&this.style.setProperty("--uui-show-focus-outline","1"),e=!1}),this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),e=!0}),this.addEventListener("mouseup",()=>{e=!1})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}updated(e){e.has("selectOnly")&&this.updateChildSelectOnly()}updateChildSelectOnly(){this.slotCellNodes&&this.slotCellNodes.forEach(e=>{e.disableChildInteraction!==void 0&&(e.disableChildInteraction=this.selectOnly)})}render(){return l` <slot @slotchanged=${this.updateChildSelectOnly}></slot> `}};ra.styles=[u`
      :host {
        display: table-row;
        position: relative;
        outline-offset: -3px;
      }

      :host([selectable]) {
        cursor: pointer;
      }

      :host(:focus) {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host([selected]) {
        outline: 2px solid
          var(--uui-table-row-color-selected, var(--uui-color-selected,#3544b1));
      }
      :host([selected]:focus) {
        outline-color: var(--uui-color-focus,#3879ff);
      }
    `];cd([he({flatten:!0,selector:"uui-table-cell, [uui-table-cell], [role=cell]"})],ra.prototype,"slotCellNodes",2);ra=cd([d("uui-table-row")],ra);var Dg=Object.defineProperty,Eg=Object.getOwnPropertyDescriptor,mo=(e,t,r,n)=>{for(var o=n>1?void 0:n?Eg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Dg(t,r,o),o},Qt=class extends Ke(j("",h)){constructor(){super(),this.disabled=!1,this.orientation="horizontal",this.addEventListener("click",this.onHostClick)}onHostClick(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}render(){return this.href?l`
          <a
            id="button"
            href=${x(this.disabled?void 0:this.href)}
            target=${x(this.target||void 0)}
            rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:l`
          <button
            type="button"
            id="button"
            ?disabled=${this.disabled}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};Qt.styles=[u`
      :host {
        color: var(--uui-tab-text, var(--uui-color-interactive,#1b264f));
        font-family: inherit;
        width: fit-content;
      }

      #button {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        min-height: var(--uui-size-12,36px);
        min-width: 70px;
        padding: var(--uui-size-3,9px)
          var(--uui-tab-padding-horizontal, var(--uui-size-5,15px));
        border: none;
        font-size: inherit;
        background: none;
        color: inherit;
        cursor: pointer;
        font-family: inherit;

        /* for anchor tag: */
        text-decoration: none;
        line-height: normal;
      }

      :host([orientation='vertical']) #button {
        min-height: var(--uui-size-14,42px);
        padding: var(--uui-size-2,6px)
          var(--uui-tab-padding-horizontal, var(--uui-size-5,15px));
      }

      :host(:not([disabled])) #button:hover {
        color: var(--uui-tab-text-hover, var(--uui-color-default-emphasis,#3544b1));
      }

      :host(:not([disabled])) #button:active {
        box-shadow:
          inset 0 2px 4px rgba(0, 0, 0, 0.15),
          0 1px 2px rgba(0, 0, 0, 0.05);
      }

      :host([active]) {
        color: var(--uui-tab-text-active, unset);
      }

      :host([disabled]) #button {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        cursor: default;
      }

      #button::before {
        content: '';
        position: absolute;
        background-color: var(--uui-color-current,#f5c1bc);
        opacity: 0;
      }
      :host([active]) #button::before {
        opacity: 1;
      }

      /* HORIZONTAL */
      :host([orientation='horizontal']) #button::before {
        left: auto;
        right: auto;
        border-radius: var(--uui-border-radius,3px) var(--uui-border-radius,3px) 0 0;
        height: 0px;
        width: calc(100% - 14px);
        bottom: 0;
        transition:
          opacity linear 120ms,
          height ease-in-out 120ms;
      }
      :host([active][orientation='horizontal']) #button::before {
        height: 4px;
      }

      /* VERTICAL */
      :host([orientation='vertical']) #button::before {
        top: auto;
        bottom: auto;
        border-radius: 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px) 0;
        height: calc(100% - 12px);
        width: 0px;
        left: 0;
        transition:
          opacity linear 120ms,
          width ease-in-out 120ms;
      }
      :host([active][orientation='vertical']) #button::before {
        width: 4px;
      }

      #button:hover::before {
        background-color: var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ));
      }
      :host([disabled]) #button::before {
        background-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      slot[name='icon']::slotted(*) {
        font-size: 20px;
        margin-bottom: var(--uui-size-2,6px);
      }

      slot.label {
        /* TODO: Find a better selector */
        text-align: center;
        display: flex;
        width: 100%;
        flex-direction: column;
      }

      :host([orientation='vertical']) slot.label {
        text-align: left;
      }
    `];mo([i({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);mo([i({type:String})],Qt.prototype,"href",2);mo([i({type:String})],Qt.prototype,"target",2);mo([i({type:String})],Qt.prototype,"rel",2);mo([i({type:String,reflect:!0})],Qt.prototype,"orientation",2);Qt=mo([d("uui-tab")],Qt);var Tg=Object.defineProperty,Rg=Object.getOwnPropertyDescriptor,hd=e=>{throw TypeError(e)},yo=(e,t,r,n)=>{for(var o=n>1?void 0:n?Rg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Tg(t,r,o),o},rl=(e,t,r)=>t.has(e)||hd("Cannot "+r),G=(e,t,r)=>(rl(e,t,"read from private field"),r?r.call(e):t.get(e)),ot=(e,t,r)=>t.has(e)?hd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),fn=(e,t,r,n)=>(rl(e,t,"write to private field"),t.set(e,r),r),Ie=(e,t,r)=>(rl(e,t,"access private method"),r),sa,nt,Et,uo,co,na,wn,vn,fe,md,yd,ol,bd,ho,aa,gd,nl,tl,Kt=class extends h{constructor(){super(...arguments),ot(this,fe),ot(this,sa,0),this.dropdownContentDirection="vertical",ot(this,nt,[]),ot(this,Et,[]),ot(this,uo,new Map),ot(this,co,[]),ot(this,na,new ResizeObserver(Ie(this,fe,yd).bind(this))),ot(this,wn,[]),ot(this,vn,!1),ot(this,ho,e=>{let t=e.currentTarget;if(Ie(this,fe,tl).call(this,t)){t.active=!0;let r=G(this,uo).get(t);r&&(r.active=!0),[...G(this,nt),...G(this,Et)].filter(s=>s!==t&&s!==r).forEach(s=>{Ie(this,fe,tl).call(this,s)&&(s.active=!1)}),G(this,Et).some(s=>s.active&&s!==r)?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside")}})}connectedCallback(){super.connectedCallback(),Ie(this,fe,md).call(this)}disconnectedCallback(){super.disconnectedCallback(),G(this,na).unobserve(this),Ie(this,fe,ol).call(this)}render(){return l`
      <div id="main">
        <div id="grid" role="tablist">
          <slot @slotchange=${Ie(this,fe,bd)}></slot>
        </div>
        <uui-button
          popovertarget="popover-container"
          style="display: none"
          id="more-button"
          label="More"
          compact>
          <uui-symbol-more></uui-symbol-more>
        </uui-button>
      </div>
      <uui-popover-container
        id="popover-container"
        popover
        placement="bottom-end">
        <div id="hidden-tabs-container" role="tablist">
          ${Yr(G(this,Et),e=>l`${e}`)}
        </div>
      </uui-popover-container>
    `}};sa=new WeakMap;nt=new WeakMap;Et=new WeakMap;uo=new WeakMap;co=new WeakMap;na=new WeakMap;wn=new WeakMap;vn=new WeakMap;fe=new WeakSet;md=async function(){w(this,"uui-button"),w(this,"uui-popover-container"),w(this,"uui-symbol-more"),await this.updateComplete,G(this,na).observe(this._mainElement)};yd=function(e){let t=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap"));(Number.isNaN(t)?0:t)!==G(this,sa)?Ie(this,fe,aa).call(this):Ie(this,fe,nl).call(this,e[0].contentBoxSize[0].inlineSize)};ol=function(){G(this,nt).forEach(e=>{e.removeEventListener("click",G(this,ho)),G(this,wn).forEach(t=>t.disconnect())}),G(this,wn).length=0,G(this,co).length=0};bd=function(){Ie(this,fe,ol).call(this),Ie(this,fe,gd).call(this),G(this,nt).forEach(e=>{e.addEventListener("click",G(this,ho));let t=new ResizeObserver(Ie(this,fe,aa).bind(this));t.observe(e),G(this,wn).push(t)})};ho=new WeakMap;aa=async function(){if(G(this,vn))return;fn(this,vn,!0),requestAnimationFrame(()=>{fn(this,vn,!1)}),await this.updateComplete;let e=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap")),t=Number.isNaN(e)?0:e;fn(this,sa,t);let r=0;for(let o=0;o<G(this,nt).length;o++)G(this,nt)[o].style.display="",r+=G(this,nt)[o].offsetWidth,G(this,co)[o]=r,r+=t;let n=2;this._mainElement.style.width=r-t+n+"px",Ie(this,fe,nl).call(this,this._mainElement.offsetWidth)};gd=function(){fn(this,nt,this._slottedNodes?this._slottedNodes:[]),Ie(this,fe,aa).call(this)};nl=function(e){let t=this._moreButtonElement.offsetWidth,r=e-(t||0);G(this,Et).forEach(s=>{s.removeEventListener("click",G(this,ho))}),fn(this,Et,[]),G(this,uo).clear();let n=!1,o=G(this,co).length;for(let s=0;s<o;s++){let a=G(this,co)[s],p=G(this,nt)[s];if(a<=(s===o-1?e:r))p.style.display="";else{let c=p.cloneNode(!0);c.addEventListener("click",G(this,ho)),c.classList.add("hidden-tab"),c.style.display="",c.orientation=this.dropdownContentDirection,G(this,uo).set(c,p),G(this,uo).set(p,c),G(this,Et).push(c),p.style.display="none",p.active&&(n=!0)}}G(this,Et).length===0?(this._moreButtonElement.style.display="none",this._popoverContainerElement.hidePopover()):this._moreButtonElement.style.display="",n?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside"),this.requestUpdate()};tl=function(e){return typeof e=="object"&&"active"in e&&typeof e.active=="boolean"};Kt.styles=[u`
      :host {
        min-width: 0;
        display: flex;
        height: 100%;
      }

      #main {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
      }

      #grid {
        width: 1fr;
        display: flex;
        height: 100%;
        min-height: 48px;
        overflow: hidden;
        text-wrap: nowrap;
        color: var(--uui-tab-text);
        gap: var(--uui-tab-group-gap, 0);
      }

      #popover-container {
        --uui-tab-text: var(--uui-tab-group-dropdown-tab-text, unset);
        --uui-tab-text-hover: var(
          --uui-tab-group-dropdown-tab-text-hover,
          unset
        );
        --uui-tab-text-active: var(
          --uui-tab-group-dropdown-tab-text-active,
          unset
        );
      }

      ::slotted(*:not(:last-of-type)) {
        border-right: 1px solid var(--uui-tab-divider, none);
      }

      .hidden-tab {
        width: 100%;
      }

      #hidden-tabs-container {
        width: fit-content;
        display: flex;
        flex-direction: column;
        background-color: var(
          --uui-tab-group-dropdown-background,
          var(--uui-color-surface,#fff)
        );
        border-radius: var(--uui-border-radius,3px);
        box-shadow: var(--uui-shadow-depth-3,0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23));
        overflow: hidden;
      }
      :host([dropdown-direction='horizontal']) #hidden-tabs-container {
        flex-direction: row;
      }

      #more-button {
        position: relative;

        --uui-button-contrast: var(--uui-tab-text);
        --uui-button-contrast-hover: var(--uui-tab-text-hover);
        --uui-button-background-color: transparent;
        --uui-button-background-color-hover: transparent;
      }
      #more-button::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: var(--uui-color-current,#f5c1bc);
        height: 0px;
        border-radius: 3px 3px 0 0;
        opacity: 0;
        transition:
          opacity ease-in 120ms,
          height ease-in 120ms;
      }
      #more-button.active-inside::before {
        opacity: 1;
        height: 4px;
        transition:
          opacity 120ms,
          height ease-out 120ms;
      }
    `];yo([P("#more-button")],Kt.prototype,"_moreButtonElement",2);yo([P("#popover-container")],Kt.prototype,"_popoverContainerElement",2);yo([P("#main")],Kt.prototype,"_mainElement",2);yo([he({flatten:!0,selector:"uui-tab, [uui-tab], [role=tab]"})],Kt.prototype,"_slottedNodes",2);yo([i({type:String,reflect:!0,attribute:"dropdown-content-direction"})],Kt.prototype,"dropdownContentDirection",2);Kt=yo([d("uui-tab-group")],Kt);var Pg=Object.defineProperty,kg=Object.getOwnPropertyDescriptor,sl=(e,t,r,n)=>{for(var o=n>1?void 0:n?kg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Pg(t,r,o),o},xn=class extends h{constructor(){super(...arguments),this.color="default",this.look="primary"}render(){return l`<slot></slot>`}};xn.styles=[u`
      :host {
        display: inline-block;
        font-size: var(--uui-tag-font-size, var(--uui-type-small-size,12px));
        font-weight: 700;
        line-height: 1;
        padding: var(
          --uui-tag-padding,
          var(--uui-size-space-1,3px) calc(var(--uui-size-space-1,3px) + 0.5em)
        );
        border-radius: 100px;
        user-select: none;
        border-radius: var(--uui-tag-border-radius, var(--uui-size-4,12px));
        border: 1px solid var(--uui-tag-border-color, transparent);
      }

      slot {
        display: block;
        align-content: center;
        margin: 2px;
      }

      :host {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }

      :host {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='primary']) {
        background-color: var(--color);
        color: var(--color-contrast);
        border-color: transparent;
      }
      :host([look='secondary']) {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='outline']) {
        background-color: transparent;
        color: var(--color-standalone);
        border-color: var(--color-standalone);
      }
      :host([look='placeholder']) {
        border-style: dashed;
        background-color: transparent;
        color: var(--color-standalone);
        border-color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `];sl([i({reflect:!0})],xn.prototype,"color",2);sl([i({reflect:!0})],xn.prototype,"look",2);xn=sl([d("uui-tag")],xn);var bo=class extends E{constructor(t,r={}){super(t,{bubbles:!0,...r})}};bo.CHANGE="change";bo.INPUT="input";var Ig=Object.defineProperty,Bg=Object.getOwnPropertyDescriptor,de=(e,t,r,n)=>{for(var o=n>1?void 0:n?Bg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Ig(t,r,o),o},X=class extends W(h,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.name="",this.error=!1,this.minlengthMessage=e=>`${e} characters left`,this.maxlengthMessage=(e,t)=>`Maximum ${e} characters, ${t} too many.`,this.autoHeight=!1,this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addValidator("tooShort",()=>{let e=this.minlengthMessage;return typeof e=="function"?e(this.minlength?this.minlength-String(this.value).length:0):e},()=>!!this.minlength&&this.value.length<this.minlength),this.addValidator("tooLong",()=>{let e=this.maxlengthMessage;return typeof e=="function"?e(this.maxlength??0,String(this.value).length):e},()=>!!this.maxlength&&this.value.length>this.maxlength)}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this),this.autoHeight&&requestAnimationFrame(()=>{this.autoUpdateHeight()})}async focus(){await this.updateComplete,this._textarea.focus()}async blur(){await this.updateComplete,this._textarea.blur()}async click(){await this.updateComplete,this._textarea.click()}getFormElement(){return this._textarea}onInput(e){this.value=e.target.value,this.autoHeight&&this.autoUpdateHeight()}onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new bo(bo.CHANGE))}autoUpdateHeight(){let e=this.shadowRoot.host,t=this._textarea,r=e.scrollTop,n=getComputedStyle(e).height;e.style.display="block",e.style.height=n,t.style.height="auto",t.scrollHeight+2>t.clientHeight?t.style.height=t.scrollHeight+2+"px":t.scrollHeight+2<t.clientHeight&&t.style.removeProperty("height"),e.style.removeProperty("display"),e.style.removeProperty("height"),e.scrollTop=r}render(){return l`
      <textarea
        id="textarea"
        rows=${x(this.rows)}
        cols=${x(this.cols)}
        .value=${this.value}
        .name=${this.name}
        wrap=${x(this.wrap)}
        placeholder=${this.placeholder}
        aria-label=${this.label}
        .disabled=${this.disabled}
        ?readonly=${this.readonly}
        @input=${this.onInput}
        @change=${this.onChange}>
      </textarea>
    `}};X.formAssociated=!0;X.styles=[u`
      :host {
        position: relative;
      }
      :host([error]) textarea,
      :host([error]) textarea[disabled] {
        border: 1px solid var(--uui-color-invalid,#d42054) !important;
      }
      :host(:not([pristine]):invalid) textarea,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) textarea {
        border-color: var(--uui-color-invalid,#d42054);
      }
      :host([auto-height]) textarea {
        resize: none;
      }

      .label {
        display: inline-block;
        margin-bottom: var(--uui-size-1,3px);
        font-weight: bold;
      }

      textarea[readonly] {
        border-color: var(
          --uui-textarea-border-color-readonly,
          var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ))
        );
        background-color: var(
          --uui-textarea-background-color-readonly,
          var(--uui-color-disabled,#f3f3f5)
        );
      }
      textarea[disabled] {
        cursor: not-allowed;
        background-color: var(
          --uui-textarea-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-textarea-border-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );

        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      textarea {
        color: var(--uui-color-text,#060606);
        font-family: inherit;
        line-height: var(--uui-size-6,18px);
        box-sizing: border-box;
        min-width: 100%;
        max-width: 100%;
        font-size: inherit;
        padding: var(--uui-size-2,6px);
        border: 1px solid
          var(--uui-textarea-border-color, var(--uui-color-border,#d8d7d9)); /** Note: Specified border size is needed and hardcoded in autoUpdateHeight() */
        border-radius: var(--uui-border-radius,3px);
        outline: none;
        min-height: var(--uui-textarea-min-height);
        max-height: var(--uui-textarea-max-height);
        background-color: var(
          --uui-textarea-background-color,
          var(--uui-color-surface,#fff)
        );
      }
      :host(:hover)
        textarea:not([readonly]):not([disabled])
        :host(:focus-within)
        textarea,
      :host(:focus) textarea {
        border-color: var(
          --uui-textarea-border-color,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
      }
      textarea:focus {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
    `];de([i()],X.prototype,"placeholder",2);de([i({type:Boolean,reflect:!0})],X.prototype,"disabled",2);de([i({type:Boolean,reflect:!0})],X.prototype,"readonly",2);de([i({type:String})],X.prototype,"name",2);de([i({type:Boolean,reflect:!0})],X.prototype,"error",2);de([i({type:Number})],X.prototype,"minlength",2);de([i({attribute:"minlength-message"})],X.prototype,"minlengthMessage",2);de([i({type:Number})],X.prototype,"maxlength",2);de([i({attribute:"maxlength-message"})],X.prototype,"maxlengthMessage",2);de([P("#textarea")],X.prototype,"_textarea",2);de([i({type:Boolean,attribute:"auto-height",reflect:!0})],X.prototype,"autoHeight",2);de([i({type:String})],X.prototype,"label",2);de([i({type:Number})],X.prototype,"rows",2);de([i({type:Number})],X.prototype,"cols",2);de([i({type:String})],X.prototype,"wrap",2);X=de([d("uui-textarea")],X);var se=class extends E{};se.OPENING="opening";se.OPENED="opened";se.CLOSING="closing";se.CLOSED="closed";var Mg=Object.defineProperty,Gg=Object.getOwnPropertyDescriptor,go=(e,t,r,n)=>{for(var o=n>1?void 0:n?Gg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Mg(t,r,o),o},Xt=class extends h{constructor(){super(),this.color="",this._autoClose=null,this._onOpenTimerComplete=()=>{this._open&&(this.open=!1)},this._timer=null,this._pauseTimer=!1,this.isOpen=!1,this._open=!1,this._animate=!1,this._requestAnimationUpdate=0,this.addEventListener("keyup",e=>{e.key==="Escape"&&(this.open=!1)})}get autoClose(){return this._autoClose}set autoClose(e){this._autoClose=e,e!==null?(this._timer===null?this._timer=new Qn(this._onOpenTimerComplete,e):this._timer.setDuration(e),this._pauseTimer===!1&&this.isOpen===!0&&this._animate===!1&&this._timer.start()):(this._timer?.destroy(),this._timer=null)}pauseAutoClose(){this._pauseTimer=!0,this._timer!==null&&this._timer.pause()}resumeAutoClose(){this._pauseTimer=!1,this._timer!==null&&this.isOpen===!0&&this._animate===!1&&this._timer.restart()}get open(){return this._open}set open(e){e===!0?this._makeOpen():this._makeClose()}connectedCallback(){super.connectedCallback(),w(this,"uui-button"),w(this,"uui-icon")}_getAnimationDuration(){return parseInt(getComputedStyle(this).getPropertyValue("--uui-toast-notification-animation-duration"),10)||480}_makeOpen(){this._open!==!0&&(this._open=!0,this.updateComplete.then(()=>{this._open===!0&&(cancelAnimationFrame(this._requestAnimationUpdate),this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!0,this.setAttribute("is-open",""),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,this.dispatchEvent(new se(se.OPENING)),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!0&&(this.style.height="auto",this._animate=!1,this._pauseTimer===!1&&this._timer?.start(),this.dispatchEvent(new se(se.OPENED)))},this._getAnimationDuration())}))}))}_makeClose(){if(this._open===!1)return;let e=new se(se.CLOSING,{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented!==!0&&(this._open=!1,this._timer?.pause(),cancelAnimationFrame(this._requestAnimationUpdate),this.isOpen===!0&&(this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!1,this.removeAttribute("is-open"),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,requestAnimationFrame(()=>{this.style.height="0"}),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!1&&(this._animate=!1,this.dispatchEvent(new se(se.CLOSED)),this.parentNode&&this.parentNode.removeChild(this))},this._getAnimationDuration())})))}render(){return l`
      <div id="toast" class=${this._animate?"animate":""}>
        <div>
          <div id="close">
            <uui-button
              .label=${"close"}
              .color=${this.color}
              .look=${this.color?"primary":"default"}
              @click=${()=>this.open=!1}>
              <uui-icon
                name="remove"
                .fallback=${Or.strings[0]}></uui-icon>
            </uui-button>
          </div>
          <slot></slot>
        </div>
      </div>
    `}};Xt.styles=[je,u`
      :host {
        --uui-toast-notification-margin: var(--uui-size-space-2,6px);

        position: relative;
        display: block;
        width: 100%;
        max-width: 400px;
        margin: 0 var(--uui-toast-notification-margin);
        box-sizing: border-box;

        height: 0;
        pointer-events: none;

        transition: height
          var(--uui-toast-notification-animation-duration, 480ms) ease-in-out;
      }
      :host([is-open]) {
        pointer-events: all;
        transition-timing-function: cubic-bezier(
          0.19,
          1,
          0.22,
          1
        ); /* easeOutExpo */
      }

      #toast {
        position: relative;
        display: block;
        padding: calc(var(--uui-toast-notification-margin) * 0.5) 0;
        width: 100%;
        max-width: 400px;
      }
      #toast.animate {
        position: absolute;
      }

      #toast > div {
        position: relative;
        display: block;

        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        background-color: var(--uui-color-surface,#fff);
        padding: var(--uui-size-layout-1,24px);
        padding-right: var(--uui-size-layout-1,24px);
        padding-left: var(--uui-size-layout-3,42px);
        border-radius: calc(var(--uui-border-radius,3px) * 2);

        opacity: 0;
        transition: opacity
          var(--uui-toast-notification-animation-duration, 480ms);
      }
      :host([is-open]) #toast > div {
        opacity: 1;
      }

      #close {
        float: right;
        margin-top: -6px;
        margin-left: var(--uui-size-space-1,3px);
        margin-bottom: -4px;
      }

      #close > uui-button {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 1.5;
        --uui-button-padding-right-factor: 1.5;
      }

      :host #toast > div {
        background-color: var(--uui-color-surface,#fff);
        color: var(--uui-color-text,#060606);
        border-color: var(--uui-color-surface,#fff);
      }
      :host([color='default']) #toast > div {
        background-color: var(--uui-color-default,#1b264f);
        color: var(--uui-color-default-contrast,#fff);
        border-color: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
      }
      :host([color='positive']) #toast > div {
        background-color: var(--uui-color-positive,#0b8152);
        color: var(--uui-color-positive-contrast,#fff);
        border-color: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
      }
      :host([color='warning']) #toast > div {
        background-color: var(--uui-color-warning,#fbd142);
        color: var(--uui-color-warning-contrast,#000);
        border-color: var(--uui-color-warning-standalone,#a17700);
      }
      :host([color='danger']) #toast > div {
        background-color: var(--uui-color-danger,#d42054);
        color: var(--uui-color-danger-contrast,white);
        border-color: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host([color='invalid']) #toast > div {
        background-color: var(--uui-color-invalid,#d42054);
        color: var(--uui-color-invalid-contrast,white);
        border-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];go([i({reflect:!0})],Xt.prototype,"color",2);go([i({type:Number})],Xt.prototype,"autoClose",1);go([P("#toast")],Xt.prototype,"_toastEl",2);go([b()],Xt.prototype,"_animate",2);go([i({type:Boolean,reflect:!0})],Xt.prototype,"open",1);Xt=go([d("uui-toast-notification")],Xt);var _g=Object.defineProperty,Cg=Object.getOwnPropertyDescriptor,fd=(e,t,r,n)=>{for(var o=n>1?void 0:n?Cg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&_g(t,r,o),o},ia=class extends h{constructor(){super(...arguments),this._autoClose=null,this._autoClosePause=!1,this.pauseAutoClose=()=>{this._autoClosePause=!0,this._toasts?.forEach(e=>e.pauseAutoClose())},this.resumeAutoClose=()=>{this.matches(":focus-within:not(:focus)")===!1&&(this._autoClosePause=!1,this._toasts?.forEach(e=>e.resumeAutoClose()))},this.onToastClosed=e=>{this.removeToast(e.target)},this._toasts=[],this.onSlotChanged=e=>{let t=[...this._toasts];this._toasts=e.target.assignedElements({flatten:!0}).filter(o=>o.nodeName==="UUI-TOAST-NOTIFICATION"),t.filter(o=>this._toasts.indexOf(o)===-1).forEach(o=>{o.removeEventListener(se.CLOSED,this.onToastClosed),o.removeEventListener("mouseenter",this.pauseAutoClose),o.removeEventListener("mouseleave",this.resumeAutoClose),o.removeEventListener("focus",this.pauseAutoClose),o.removeEventListener("blur",this.resumeAutoClose)}),this._toasts.filter(o=>t.indexOf(o)===-1).forEach(o=>{o.addEventListener(se.CLOSED,this.onToastClosed),o.addEventListener("mouseenter",this.pauseAutoClose),o.addEventListener("mouseleave",this.resumeAutoClose),o.addEventListener("focus",this.pauseAutoClose),o.addEventListener("blur",this.resumeAutoClose),this._autoClose&&(o.autoClose=this._autoClose),this._autoClosePause===!0&&o.pauseAutoClose(),o.open=!0})}}get autoClose(){return this._autoClose}set autoClose(e){this._autoClose=e,this._toasts?.forEach(t=>t.autoClose=e)}removeToast(e){if(!e)e=this._toasts[this._toasts.length-1];else if(this._toasts.indexOf(e)===-1){console.warn("Toast-notification",e,"could not be removed as it is not a child of this toast-notification-container",this);return}this.removeChild(e)}closeToast(e){let t=e;t||(t=this._toasts[this._toasts.length-1]),t.open=!1}render(){return l` <slot @slotchange=${this.onSlotChanged}></slot> `}};ia.styles=[u`
      :host {
        position: absolute;
        overflow: hidden;
        max-width: 100%;
        height: 100%;

        pointer-events: none;
        box-sizing: border-box;
      }

      slot {
        display: flex;
        flex-direction: column;
        align-items: end;

        height: 100%;
        box-sizing: border-box;

        padding-top: var(--uui-size-space-1,3px);
        padding-bottom: var(--uui-size-space-1,3px);
      }
      :host([bottom-up]) slot {
        justify-content: end;
      }
      :host([left-align]) slot {
        align-items: start;
      }
    `];fd([i({type:Number,reflect:!0,attribute:"auto-close"})],ia.prototype,"_autoClose",2);ia=fd([d("uui-toast-notification-container")],ia);var Og=Object.defineProperty,Sg=Object.getOwnPropertyDescriptor,al=(e,t,r,n)=>{for(var o=n>1?void 0:n?Sg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Og(t,r,o),o},Dn=class extends h{constructor(){super(...arguments),this.headline="",this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}render(){return l`
      <div id="message" class="uui-text">
        <h5
          style=${this._headlineSlotHasContent||this.headline&&this.headline!==""?"":"display: none"}>
          ${this.headline}
          <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
        </h5>
        <slot></slot>
        <slot id="actions" name="actions"></slot>
      </div>
    `}};Dn.styles=[je,u`
      #message {
        margin-bottom: calc(var(--uui-size-space-1,3px) * -1);
      }
      #message::after {
        content: '';
        display: block;
        clear: both;
      }
      #actions {
        /*
        display: flex;
        width: 100%;
        justify-content: flex-end;
        */
        display: block;
        float: right;

        margin-top: var(--uui-size-space-4,12px);
        margin-bottom: calc(var(--uui-size-space-2,6px) * -1);
      }
    `];al([i({type:String})],Dn.prototype,"headline",2);al([b()],Dn.prototype,"_headlineSlotHasContent",2);Dn=al([d("uui-toast-notification-layout")],Dn);var Ag=Object.getOwnPropertyDescriptor,Ug=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ag(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},la=class extends me{constructor(){super("switch")}renderCheckbox(){return l`
      <div id="toggle">
        <div id="icon-checked">${Mt}</div>
        <div id="icon-unchecked">${Or}</div>
      </div>
    `}};la.formAssociated=!0;la.styles=[...me.styles,It,u`
      :host {
        --uui-toggle-size: 18px;
        --uui-toggle-switch-width: calc(2 * var(--uui-toggle-size));
      }

      #toggle {
        position: relative;
        grid-area: 'input';
        display: flex;
        align-items: center;

        flex-shrink: 0;

        width: var(--uui-toggle-switch-width);
        height: var(--uui-toggle-size);
        border-radius: 100px;

        background-color: var(
          --uui-toggle-background-color,
          var(--uui-color-border,#d8d7d9)
        );
        border: 1px solid
          var(--uui-toggle-border-color, var(--uui-color-border-standalone,#c2c2c2));
        font-size: calc(var(--uui-toggle-size) * 0.6);
      }

      label:hover input:not([disabled]) ~ #toggle {
        border-color: var(
          --uui-toggle-border-color-hover,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-toggle-background-color-hover,
          var(--uui-color-border,#d8d7d9)
        );
      }

      label:focus #toggle {
        border-color: var(
          --uui-toggle-border-color-focus,
          var(--uui-color-focus,#3879ff)
        );
        background-color: var(
          --uui-toggle-background-color-focus,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }

      input:checked ~ #toggle {
        background-color: var(--uui-color-selected,#3544b1);
      }

      label:hover input:checked:not([disabled]) ~ #toggle {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      label:focus input:checked ~ #toggle {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      #icon-checked,
      #icon-unchecked {
        position: absolute;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 0;
        transition: color 120ms;
      }

      #icon-checked {
        margin-left: -0.5em;
        left: calc(var(--uui-toggle-size) * 0.5);
        color: var(--uui-color-interactive,#1b264f);
      }

      #icon-unchecked {
        margin-right: -0.5em;
        right: calc(var(--uui-toggle-size) * 0.5);
        color: var(--uui-color-interactive,#1b264f);
      }

      input:checked ~ #toggle #icon-checked {
        color: var(--uui-color-selected-contrast,#fff);
      }

      #toggle::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: calc(var(--uui-toggle-size) - 4px);
        height: calc(var(--uui-toggle-size) - 4px);
        border-radius: 100px;
        background-color: var(--uui-color-selected-contrast,#fff);
        transition:
          width 120ms ease,
          left 120ms ease,
          transform 120ms ease,
          background-color 120ms;
      }

      input:checked ~ #toggle::after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
      }

      input:focus ~ #toggle {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      :host(:not([disabled], [readonly])) label:active #toggle::after {
        /** Stretch when mouse down */
        width: calc(1.06 * var(--uui-toggle-size));
      }

      :host([disabled]) #toggle {
        background-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }
      :host([disabled]) input:checked ~ #toggle {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #toggle::after {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #toggle #icon-unchecked {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) label:active #toggle {
        animation: ${Bt};
      }
      :host([disabled]) input:checked #toggle #icon-checked {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host(:not([pristine]):invalid) #toggle,
      :host(:not([pristine]):invalid) label:hover #toggle,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) #toggle,
      :host(:not([pristine])[internals-invalid]) label:hover #toggle {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];la=Ug([d("uui-toggle")],la);var $g=Object.getOwnPropertyDescriptor,Lg=(e,t,r,n)=>{for(var o=n>1?void 0:n?$g(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o},il=class extends h{render(){return l`<slot></slot>`}};il.styles=[u`
      :host(:not(:focus-within)) {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        clip: rect(0 0 0 0) !important;
        clip-path: inset(50%) !important;
        border: none !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        padding: 0 !important;
      }
    `];il=Lg([d("uui-visually-hidden")],il);var Vg=async(e,t)=>{let r=typeof t=="function"?await t(e):t;if(r)return e.scheme==="bearer"?`Bearer ${r}`:e.scheme==="basic"?`Basic ${btoa(r)}`:r};var Fg={bodySerializer:e=>JSON.stringify(e,(t,r)=>typeof r=="bigint"?r.toString():r)};var qg=e=>{switch(e){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}},Ng=e=>{switch(e){case"form":return",";case"pipeDelimited":return"|";case"spaceDelimited":return"%20";default:return","}},zg=e=>{switch(e){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}},xd=({allowReserved:e,explode:t,name:r,style:n,value:o})=>{if(!t){let p=(e?o:o.map(c=>encodeURIComponent(c))).join(Ng(n));switch(n){case"label":return`.${p}`;case"matrix":return`;${r}=${p}`;case"simple":return p;default:return`${r}=${p}`}}let s=qg(n),a=o.map(p=>n==="label"||n==="simple"?e?p:encodeURIComponent(p):pa({allowReserved:e,name:r,value:p})).join(s);return n==="label"||n==="matrix"?s+a:a},pa=({allowReserved:e,name:t,value:r})=>{if(r==null)return"";if(typeof r=="object")throw new Error("Deeply-nested arrays/objects aren\u2019t supported. Provide your own `querySerializer()` to handle these.");return`${t}=${e?r:encodeURIComponent(r)}`},Dd=({allowReserved:e,explode:t,name:r,style:n,value:o})=>{if(o instanceof Date)return`${r}=${o.toISOString()}`;if(n!=="deepObject"&&!t){let p=[];Object.entries(o).forEach(([y,f])=>{p=[...p,y,e?f:encodeURIComponent(f)]});let c=p.join(",");switch(n){case"form":return`${r}=${c}`;case"label":return`.${c}`;case"matrix":return`;${r}=${c}`;default:return c}}let s=zg(n),a=Object.entries(o).map(([p,c])=>pa({allowReserved:e,name:n==="deepObject"?`${r}[${p}]`:p,value:c})).join(s);return n==="label"||n==="matrix"?s+a:a},Hg=/\{[^{}]+\}/g,jg=({path:e,url:t})=>{let r=t,n=t.match(Hg);if(n)for(let o of n){let s=!1,a=o.substring(1,o.length-1),p="simple";a.endsWith("*")&&(s=!0,a=a.substring(0,a.length-1)),a.startsWith(".")?(a=a.substring(1),p="label"):a.startsWith(";")&&(a=a.substring(1),p="matrix");let c=e[a];if(c==null)continue;if(Array.isArray(c)){r=r.replace(o,xd({explode:s,name:a,style:p,value:c}));continue}if(typeof c=="object"){r=r.replace(o,Dd({explode:s,name:a,style:p,value:c}));continue}if(p==="matrix"){r=r.replace(o,`;${pa({name:a,value:c})}`);continue}let y=encodeURIComponent(p==="label"?`.${c}`:c);r=r.replace(o,y)}return r},Ed=({allowReserved:e,array:t,object:r}={})=>n=>{let o=[];if(n&&typeof n=="object")for(let s in n){let a=n[s];if(a!=null)if(Array.isArray(a)){let p=xd({allowReserved:e,explode:!0,name:s,style:"form",value:a,...t});p&&o.push(p)}else if(typeof a=="object"){let p=Dd({allowReserved:e,explode:!0,name:s,style:"deepObject",value:a,...r});p&&o.push(p)}else{let p=pa({allowReserved:e,name:s,value:a});p&&o.push(p)}}return o.join("&")},Wg=e=>{if(!e)return"stream";let t=e.split(";")[0]?.trim();if(t){if(t.startsWith("application/json")||t.endsWith("+json"))return"json";if(t==="multipart/form-data")return"formData";if(["application/","audio/","image/","video/"].some(r=>t.startsWith(r)))return"blob";if(t.startsWith("text/"))return"text"}},Qg=async({security:e,...t})=>{for(let r of e){let n=await Vg(r,t.auth);if(!n)continue;let o=r.name??"Authorization";switch(r.in){case"query":t.query||(t.query={}),t.query[o]=n;break;case"cookie":t.headers.append("Cookie",`${o}=${n}`);break;case"header":default:t.headers.set(o,n);break}return}},vd=e=>Kg({baseUrl:e.baseUrl,path:e.path,query:e.query,querySerializer:typeof e.querySerializer=="function"?e.querySerializer:Ed(e.querySerializer),url:e.url}),Kg=({baseUrl:e,path:t,query:r,querySerializer:n,url:o})=>{let s=o.startsWith("/")?o:`/${o}`,a=(e??"")+s;t&&(a=jg({path:t,url:a}));let p=r?n(r):"";return p.startsWith("?")&&(p=p.substring(1)),p&&(a+=`?${p}`),a},wd=(e,t)=>{let r={...e,...t};return r.baseUrl?.endsWith("/")&&(r.baseUrl=r.baseUrl.substring(0,r.baseUrl.length-1)),r.headers=Td(e.headers,t.headers),r},Td=(...e)=>{let t=new Headers;for(let r of e){if(!r||typeof r!="object")continue;let n=r instanceof Headers?r.entries():Object.entries(r);for(let[o,s]of n)if(s===null)t.delete(o);else if(Array.isArray(s))for(let a of s)t.append(o,a);else s!==void 0&&t.set(o,typeof s=="object"?JSON.stringify(s):s)}return t},ll=class{constructor(){cl(this,"_fns");this._fns=[]}clear(){this._fns=[]}getInterceptorIndex(e){return typeof e=="number"?this._fns[e]?e:-1:this._fns.indexOf(e)}exists(e){let t=this.getInterceptorIndex(e);return!!this._fns[t]}eject(e){let t=this.getInterceptorIndex(e);this._fns[t]&&(this._fns[t]=null)}update(e,t){let r=this.getInterceptorIndex(e);return this._fns[r]?(this._fns[r]=t,e):!1}use(e){return this._fns=[...this._fns,e],this._fns.length-1}},Xg=()=>({error:new ll,request:new ll,response:new ll}),Yg=Ed({allowReserved:!1,array:{explode:!0,style:"form"},object:{explode:!0,style:"deepObject"}}),Zg={"Content-Type":"application/json"},En=(e={})=>({...Fg,headers:Zg,parseAs:"auto",querySerializer:Yg,...e}),ua=(e={})=>{let t=wd(En(),e),r=()=>({...t}),n=a=>(t=wd(t,a),r()),o=Xg(),s=async a=>{let p={...t,...a,fetch:a.fetch??t.fetch??globalThis.fetch,headers:Td(t.headers,a.headers)};p.security&&await Qg({...p,security:p.security}),p.body&&p.bodySerializer&&(p.body=p.bodySerializer(p.body)),(p.body===void 0||p.body==="")&&p.headers.delete("Content-Type");let c=vd(p),y={redirect:"follow",...p},f=new Request(c,y);for(let B of o.request._fns)B&&(f=await B(f,p));let m=p.fetch,T=await m(f);for(let B of o.response._fns)B&&(T=await B(T,f,p));let g={request:f,response:T};if(T.ok){if(T.status===204||T.headers.get("Content-Length")==="0")return{data:{},...g};let B=(p.parseAs==="auto"?Wg(T.headers.get("Content-Type")):p.parseAs)??"json";if(B==="stream")return{data:T.body,...g};let q=await T[B]();return B==="json"&&(p.responseValidator&&await p.responseValidator(q),p.responseTransformer&&(q=await p.responseTransformer(q))),{data:q,...g}}let R=await T.text();try{R=JSON.parse(R)}catch{}let _=R;for(let B of o.error._fns)B&&(_=await B(R,T,f,p));if(_=_||{},p.throwOnError)throw _;return{error:_,...g}};return{buildUrl:vd,connect:a=>s({...a,method:"CONNECT"}),delete:a=>s({...a,method:"DELETE"}),get:a=>s({...a,method:"GET"}),getConfig:r,head:a=>s({...a,method:"HEAD"}),interceptors:o,options:a=>s({...a,method:"OPTIONS"}),patch:a=>s({...a,method:"PATCH"}),post:a=>s({...a,method:"POST"}),put:a=>s({...a,method:"PUT"}),request:s,setConfig:n,trace:a=>s({...a,method:"TRACE"})}};var pl=ua(En({baseUrl:"https://localhost:44312"}));var fo=class{static impersonation(t){return(t.client??pl).post({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/backoffice/impersonation/v1/Impersonation/{memberKey}",...t})}static stopImpersonation(t){return(t?.client??pl).post({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/backoffice/impersonation/v1/StopImpersonation",...t})}};var De=ua(En({baseUrl:"https://localhost:44312"}));var da=class{static getFilterMember(t){return(t?.client??De).get({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/filter/member",...t})}static getItemMember(t){return(t?.client??De).get({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/item/member",...t})}static getItemMemberSearch(t){return(t?.client??De).get({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/item/member/search",...t})}static postMember(t){return(t?.client??De).post({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/member",...t,headers:{"Content-Type":"application/json",...t?.headers}})}static deleteMemberById(t){return(t.client??De).delete({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/member/{id}",...t})}static getMemberById(t){return(t.client??De).get({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/member/{id}",...t})}static putMemberById(t){return(t.client??De).put({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/member/{id}",...t,headers:{"Content-Type":"application/json",...t?.headers}})}static getMemberByIdReferencedBy(t){return(t.client??De).get({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/member/{id}/referenced-by",...t})}static getMemberByIdReferencedDescendants(t){return(t.client??De).get({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/member/{id}/referenced-descendants",...t})}static putMemberByIdValidate(t){return(t.client??De).put({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/member/{id}/validate",...t,headers:{"Content-Type":"application/json",...t?.headers}})}static getMemberAreReferenced(t){return(t?.client??De).get({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/member/are-referenced",...t})}static getMemberConfiguration(t){return(t?.client??De).get({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/member/configuration",...t})}static postMemberValidate(t){return(t?.client??De).post({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/management/api/v1/member/validate",...t,headers:{"Content-Type":"application/json",...t?.headers}})}};var vo=class extends ue{constructor(){super();this.filters={memberTypeId:null,memberGroupName:null,isApproved:!0,isLockedOut:!1,orderBy:"Name",orderDirection:"Ascending",filter:"",skip:0,take:20};this.items=[];this.latestItems=[];this.getMemberItems=this.getMemberItems.bind(this),this.onInputChange=this.onInputChange.bind(this),this.userAuth=JSON.parse(localStorage.getItem("umb:userAuthTokenResponse"))}render(){return l`
      <uui-modal-container>
        <uui-modal-dialog>
          <uui-dialog>
            <div>
              <div>
                <uui-input type="search" pristine="" label="Label" placeholder="Type to search..." .onInput="${this.onInputChange}">
                  <uui-icon-registry-essential class="umb-impersonation-search-icon" slot="prepend">
                    <uui-icon name="search" />
                  </uui-icon-registry-essential>
                </uui-input>
              </div>
              <div class="search-providers">
                <button
                  @click="${()=>{this.filters.isApproved=!this.filters.isApproved,this.requestUpdate("filters")}}"
                  class="search-provider ${this.filters.isApproved?"active":""}"
                >
                  Is Approved
                </button>
                <button
                  @click="${()=>{this.filters.isLockedOut=!this.filters.isLockedOut,this.requestUpdate("filters")}}"
                  class="search-provider ${this.filters.isLockedOut?"active":""}"
                >
                  Is Locked Out
                </button>
                <uui-select
                  @change=${r=>{this.filters.take=parseInt(r.target.value),this.requestUpdate("filters")}}
                  label="Select Take"
                  .options=${[{name:this.filters.take===20?"Take 20":20,value:20,selected:this.filters.take===20},{name:this.filters.take===50?"Take 50":50,value:50,selected:this.filters.take===50},{name:this.filters.take===100?"Take 100":100,value:100,selected:this.filters.take===100},{name:this.filters.take===200?"Take 200":200,value:200,selected:this.filters.take===200}]}
                ></uui-select>
                <uui-select
                  @change=${r=>{this.filters.orderBy=r.target.value,this.requestUpdate("filters")}}
                  label="Select Order By"
                  .options=${[{name:this.filters.orderBy==="Email"?"Order By Email":"Email",value:"Email",selected:this.filters.orderBy==="Email"},{name:this.filters.orderBy==="Name"?"Order By Name":"Name",value:"Name",selected:this.filters.orderBy==="Name"},{name:this.filters.orderBy==="Username"?"Order By Username":"Username",value:"Username",selected:this.filters.orderBy==="Username"}]}
                ></uui-select>
              </div>
              <uui-scroll-container>
                ${this.items.map(r=>l` <umb-act-member-item-actions .item=${r}>
                    <umb-act-search-result-item .item="${r}" />
                  </umb-act-member-item-actions>`)}
              </uui-scroll-container>
              <div>
                <uui-button @click="${this.stopImpersonating}" class="umb-act-logout" label="impersonate" look="primary" color="danger"> Stop impersonating </uui-button>
              </div>
            </div>
          </uui-dialog>
        </uui-modal-dialog>
      </uui-modal-container>
    `}async stopImpersonating(){await fo.stopImpersonation({headers:{RequestVerificationToken:document.getElementsByName("__RequestVerificationToken")[0].value,Authorization:"Bearer "+this.userAuth.access_token}}).then(({response:r})=>{r.ok&&window.location.reload()})}async getMemberItems(){let{response:r,data:n}=await da.getFilterMember({query:this.filters,headers:{Authorization:"Bearer "+this.userAuth.access_token}});r.ok?(this.items=n.items,this.requestUpdate("items")):console.error("There was a problem with the fetch operation:",await r.text())}onInputChange(r){clearTimeout(this.inputTimeout);let n="",o=r.target;if(o&&typeof o.value=="string")n=o.value;else if(r.composedPath){let s=r.composedPath()[0].value;typeof s=="string"&&(n=s)}this.inputTimeout=window.setTimeout(()=>{this.filters.filter=n,this.requestUpdate("filters")},200)}updated(r){r.has("filters")&&this.getMemberItems()}};vo.styles=[u`
      :host uui-dialog {
        height: max(600px, 80dvh);
        width: min(610px, 100vw);
        max-height: 100dvh;
      }

      :host .hidden {
        display: none;
      }

      :host uui-icon-registry-essential {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        height: 100%;
      }

      :host uui-dialog > div {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      :host uui-dialog uui-input {
        width: 100%;
        height: 48px;
        border: none;
        font-size: var(--uui-type-default-size);
      }

      .search-providers {
        display: flex;
        flex-wrap: wrap;
        gap: var(--uui-size-space-2);
        padding: 0 var(--uui-size-space-5);
        padding-bottom: var(--uui-size-space-2);
      }

      .search-provider {
        padding: var(--uui-size-space-3) var(--uui-size-space-4);
        background: var(--uui-color-surface-alt);
        line-height: 1;
        white-space: nowrap;
        border-radius: var(--uui-border-radius);
        color: var(--uui-color-interactive);
        cursor: pointer;
        border: 2px solid transparent;
      }

      .search-provider.active {
        background: var(--uui-color-focus);
        color: var(--uui-color-selected-contrast);
        border-color: transparent;
      }

      :host uui-dialog uui-scroll-container {
        flex: 1;
      }

      :host uui-dialog > div > div:last-child {
        display: flex;
        justify-content: end;
        padding: 0 var(--uui-size-space-5);
        padding-bottom: var(--uui-size-space-2);
      }
    `],ce([b()],vo.prototype,"filters",2),vo=ce([We("umb-act-modal")],vo);var wo=class extends h{constructor(){super(...arguments);this._modals=[]}handleClick(){let r=ms();this._modals.push(l`
      <umb-act-modal ref=${r}/>
    `),this.requestUpdate("_modals")}render(){return l`
      <uui-action-bar>
        <uui-button @click=${this.handleClick} label="impersonate" pristine="" look="primary">
          <svg width="24px" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M182.8 19.5C166.4 25.7 154.3 44 141.9 81c-4 11.9-10.6 35.8-13.3 48.2l-.6 2.6-14.7.4c-12.6.2-15.3.6-18.2 2.3-10 5.9-10.6 18.9-1.2 25.2 3.2 2.2 4.4 2.3 20.7 2.3H132v23.7c0 13.1.3 24.7.5 25.8.5 1.7-8.1 7-63.7 39.6-57.8 33.8-64.5 38-66.5 41.5-2.8 4.8-2.9 9.3-.3 14.4 3.5 6.9 5.8 7.5 38.5 10.1 16 1.2 29.2 2.4 29.4 2.6.2.1-3.4 4.2-8 9C27.7 364.2 6 411.1 1 459.9c-1.5 15-1.3 22 .8 26.1 2.5 5 7.5 8 13.2 8 9.2 0 15-6.7 15-17.3 0-3.2.5-10.1 1.1-15.5 4.5-41.7 22.8-80.5 52.8-112.2 9.3-9.9 8.6-11.5 6.7 14.9-1.4 19-1.1 22.7 2.2 26.8 1.5 1.9 149.4 98.3 156.4 101.9 3.5 1.8 10.1 1.8 13.6 0 7-3.6 154.9-100 156.4-101.9 3.3-4.1 3.6-7.8 2.2-26.8-1.9-26.4-2.6-24.8 6.8-14.9 25.3 26.7 42.3 58.4 49.6 93 2.4 10.8 4.2 26.2 4.2 34.7 0 3.5.7 7.2 1.8 9.3 5.3 10.7 21.1 10.7 26.4 0 2.1-4.1 2.3-11.1.8-26.1-5-48.8-26.1-94.6-60.5-130.7-4.7-4.9-8.5-9.2-8.5-9.4 0-.3 4.4-.8 9.8-1.2 5.3-.3 18.5-1.4 29.2-2.2 22.4-1.9 25.7-3 29-9.4 2.6-5.1 2.5-9.5-.3-14.4-2-3.5-8.1-7.4-60.7-38.3-32.2-18.9-61.1-35.8-64.3-37.6-4.7-2.6-5.7-3.6-5.3-5.2.3-1.1.6-12.7.6-25.8V162h17c13.1 0 17.8-.3 20-1.5 8.4-4.3 10.4-15.3 4.3-22.6-3.9-4.6-6.4-5.2-22.7-5.8l-14.9-.6-4.4-16.5c-6.1-23.2-10.5-36.9-16.9-52.8-9.5-23.7-17.4-34.6-29.3-40.5-5.8-2.8-7.5-3.2-14.6-3.2-9.6.1-15 2.3-31.4 13-14.4 9.3-20 11.7-28.7 12.3-11.1.7-17-1.7-35.4-14.3-12.9-8.8-17.9-10.8-28-11.2-5.6-.2-9.8.2-12.2 1.2zM208 55.6C228.1 69.2 240.8 74 256 74c15.7 0 28.1-4.6 48.4-17.9 16.3-10.6 17.4-10.3 25.7 7.4 4.2 9 16 43.5 20.3 59.2l2.5 9.3h-97c-68.3 0-96.9-.3-96.9-1.1 0-2.5 6.4-30 9-38.9 5.3-17.7 12-31.2 20-40.3 4.7-5.4 6.7-5 20 3.9zM349.8 184c.4 31-1.5 42.5-10 59.5-17.2 34.9-54.5 55.4-93.4 51.4-42.8-4.4-77.4-37.8-83.3-80.4-1.2-8.3-1.5-50.7-.4-51.8.3-.4 42.5-.6 93.7-.5l93.1.3.3 21.5zM176.9 343.4c23.7 51.6 43 94 42.8 94.2-.2.3-98.2-62.7-99.4-63.9-.2-.3.6-13.4 1.7-29.2 2.8-40.3 2.8-41.6-1.2-46.1-1.7-2-4.3-4-5.7-4.5-1.3-.6-13.2-1.9-26.5-3-13.2-1.1-24.1-2.1-24.2-2.2-.5-.5 68.2-40.3 68.7-39.8.3.3 20 42.8 43.8 94.5zm262.6-59.7c5 2.9 8.6 5.3 8 5.3-6.7.1-48.8 4.2-50.6 4.9-1.4.5-4 2.5-5.7 4.5-4 4.5-4 5.8-1.2 46.1 1.1 15.8 1.9 29 1.6 29.2-1.3 1.3-99.1 64.2-99.3 63.9-.2-.2 18.4-41 41.3-90.7s42.5-92.3 43.5-94.6l1.9-4.2 25.8 15.1c14.1 8.4 29.8 17.5 34.7 20.5zm-224.7 34.7c30.1 10.8 67.2 8.7 95.4-5.5l7.7-3.9-3.3 7.3C285.1 380.8 256.6 442 256 442c-.6 0-31-65.2-58.6-125.7l-3.3-7.3 6.7 3.4c3.7 1.8 10 4.5 14 6z"/>
          </svg>
        </uui-button>
      </uui-action-bar>
      ${this._modals}
    `}};wo.styles=u`
    :host {
      position: absolute;
      bottom: 1.00rem;
      left: 1.00rem;
    }
  `,ce([b()],wo.prototype,"_modals",2),wo=ce([We("umb-act-not-toggle")],wo);var xo=class extends h{constructor(){super();this._modals=[];this.icons={person:`
       <svg viewBox="0 0 512 512">
         <path fill="currentColor"
               d="M182.8 19.5C166.4 25.7 154.3 44 141.9 81c-4 11.9-10.6 35.8-13.3 48.2l-.6 2.6-14.7.4c-12.6.2-15.3.6-18.2 2.3-10 5.9-10.6 18.9-1.2 25.2 3.2 2.2 4.4 2.3 20.7 2.3H132v23.7c0 13.1.3 24.7.5 25.8.5 1.7-8.1 7-63.7 39.6-57.8 33.8-64.5 38-66.5 41.5-2.8 4.8-2.9 9.3-.3 14.4 3.5 6.9 5.8 7.5 38.5 10.1 16 1.2 29.2 2.4 29.4 2.6.2.1-3.4 4.2-8 9C27.7 364.2 6 411.1 1 459.9c-1.5 15-1.3 22 .8 26.1 2.5 5 7.5 8 13.2 8 9.2 0 15-6.7 15-17.3 0-3.2.5-10.1 1.1-15.5 4.5-41.7 22.8-80.5 52.8-112.2 9.3-9.9 8.6-11.5 6.7 14.9-1.4 19-1.1 22.7 2.2 26.8 1.5 1.9 149.4 98.3 156.4 101.9 3.5 1.8 10.1 1.8 13.6 0 7-3.6 154.9-100 156.4-101.9 3.3-4.1 3.6-7.8 2.2-26.8-1.9-26.4-2.6-24.8 6.8-14.9 25.3 26.7 42.3 58.4 49.6 93 2.4 10.8 4.2 26.2 4.2 34.7 0 3.5.7 7.2 1.8 9.3 5.3 10.7 21.1 10.7 26.4 0 2.1-4.1 2.3-11.1.8-26.1-5-48.8-26.1-94.6-60.5-130.7-4.7-4.9-8.5-9.2-8.5-9.4 0-.3 4.4-.8 9.8-1.2 5.3-.3 18.5-1.4 29.2-2.2 22.4-1.9 25.7-3 29-9.4 2.6-5.1 2.5-9.5-.3-14.4-2-3.5-8.1-7.4-60.7-38.3-32.2-18.9-61.1-35.8-64.3-37.6-4.7-2.6-5.7-3.6-5.3-5.2.3-1.1.6-12.7.6-25.8V162h17c13.1 0 17.8-.3 20-1.5 8.4-4.3 10.4-15.3 4.3-22.6-3.9-4.6-6.4-5.2-22.7-5.8l-14.9-.6-4.4-16.5c-6.1-23.2-10.5-36.9-16.9-52.8-9.5-23.7-17.4-34.6-29.3-40.5-5.8-2.8-7.5-3.2-14.6-3.2-9.6.1-15 2.3-31.4 13-14.4 9.3-20 11.7-28.7 12.3-11.1.7-17-1.7-35.4-14.3-12.9-8.8-17.9-10.8-28-11.2-5.6-.2-9.8.2-12.2 1.2zM208 55.6C228.1 69.2 240.8 74 256 74c15.7 0 28.1-4.6 48.4-17.9 16.3-10.6 17.4-10.3 25.7 7.4 4.2 9 16 43.5 20.3 59.2l2.5 9.3h-97c-68.3 0-96.9-.3-96.9-1.1 0-2.5 6.4-30 9-38.9 5.3-17.7 12-31.2 20-40.3 4.7-5.4 6.7-5 20 3.9zM349.8 184c.4 31-1.5 42.5-10 59.5-17.2 34.9-54.5 55.4-93.4 51.4-42.8-4.4-77.4-37.8-83.3-80.4-1.2-8.3-1.5-50.7-.4-51.8.3-.4 42.5-.6 93.7-.5l93.1.3.3 21.5zM176.9 343.4c23.7 51.6 43 94 42.8 94.2-.2.3-98.2-62.7-99.4-63.9-.2-.3.6-13.4 1.7-29.2 2.8-40.3 2.8-41.6-1.2-46.1-1.7-2-4.3-4-5.7-4.5-1.3-.6-13.2-1.9-26.5-3-13.2-1.1-24.1-2.1-24.2-2.2-.5-.5 68.2-40.3 68.7-39.8.3.3 20 42.8 43.8 94.5zm262.6-59.7c5 2.9 8.6 5.3 8 5.3-6.7.1-48.8 4.2-50.6 4.9-1.4.5-4 2.5-5.7 4.5-4 4.5-4 5.8-1.2 46.1 1.1 15.8 1.9 29 1.6 29.2-1.3 1.3-99.1 64.2-99.3 63.9-.2-.2 18.4-41 41.3-90.7s42.5-92.3 43.5-94.6l1.9-4.2 25.8 15.1c14.1 8.4 29.8 17.5 34.7 20.5zm-224.7 34.7c30.1 10.8 67.2 8.7 95.4-5.5l7.7-3.9-3.3 7.3C285.1 380.8 256.6 442 256 442c-.6 0-31-65.2-58.6-125.7l-3.3-7.3 6.7 3.4c3.7 1.8 10 4.5 14 6z"/>
         <path fill="currentColor" transform="scale(0.6) translate(170, 100)"
               d="M89.5 174.6c-1.6.2-7.7.9-13.5 1.5-20.4 2.1-55 9.8-60.7 13.5-2.2 1.4-2.3 1.9-2.3 18.4 0 18.9-.1 18.5 7.3 21.4 2.5.9 4.8 2.5 5.2 3.4.3.9 1 9.1 1.5 18.2 2 35.3 8.2 55.3 21.4 68.4 7.3 7.3 13.3 10.6 24.6 13.9 11.5 3.3 25.4 4.7 48 4.7 31.7 0 50.3-3.5 69.9-13.1 13.6-6.7 24.8-17.3 30.5-28.9 3.7-7.6 11.4-34 14.1-48.5 1.2-6.6 2-8.5 4.5-10.8 3-2.6 3.3-2.7 15.1-2.7 16.6 0 19.6 1.8 21.3 13 1.6 10.1 10.8 41.9 14.2 48.6 11 22.2 35.6 36.4 70.8 41 13.8 1.8 55.2 1.5 66.6-.6 22.9-4 36.9-13.7 45.5-31.5 6.9-14.2 9.8-28.3 11.5-55 .4-8.3 1.2-15.8 1.5-16.7.4-.9 2.7-2.5 5.1-3.4 7-2.7 7.4-3.7 7.4-20.9 0-11.9-.3-15.5-1.5-17.2-1.9-2.7-10.5-5.4-29.5-9.4-60-12.5-119.2-9.5-175 8.7l-11.5 3.8-23.5.3c-26 .4-23.4.8-50.7-7.5-14.7-4.6-32.1-8.3-49.3-10.8-10.8-1.5-60.8-2.8-68.5-1.8z"/>
       </svg>
    `,logout:`
          <svg viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M48.2 3C30.4 7.7 15 20.1 7.1 36.1-.5 51.5 0 35.9 0 256c0 169.6.2 198.5 1.5 204.5C6.4 483.7 25.1 503 48.6 509c7.4 1.9 11.5 2 109.4 2h101.6l5.1-2.5c7.2-3.6 10.6-9 11.1-17.5.4-8.1-2.3-14-8.7-18.5l-4.3-3-102.1-.5-102.2-.5-4-2.2c-5-2.7-8-5.8-10-10.5-1.3-3.3-1.5-25.1-1.5-199.8 0-174.7.2-196.5 1.5-199.8 2-4.7 5-7.8 10-10.5l4-2.2 102.2-.5 102.1-.5 4.3-3c6.4-4.5 9.1-10.4 8.7-18.5-.5-8.5-3.9-13.9-11.1-17.5L259.6 1l-102 .1C60.4 1.1 55.1 1.2 48.2 3z"/>
            <path fill="currentColor"
              d="M355.6 108c-13.5 4.3-19.6 20.6-11.8 31.7 1.5 2.1 23.2 24 48.2 48.8 25 24.7 45.7 45.3 45.8 45.7.2.5-56.3.8-125.5.8H186.4l-4.4 2.2c-5.5 2.9-9.5 7.9-11.2 14-2.4 9.1 2.4 19 11.2 23.5l4.4 2.3h125.9c69.2 0 125.7.3 125.5.8-.1.4-20.8 21-45.8 45.7-25 24.8-46.7 46.7-48.2 48.8-12.1 17.2 8.5 39.9 27.5 30 4-2 136.3-132.7 138.5-136.8 2.2-4 2.2-15 0-19-2.2-4.2-134.5-134.8-138.6-136.9-4-2.1-11.7-2.9-15.6-1.6z"/>
          </svg>
    `}}handleClick(){let r=ms();this._modals.push(l`
      <umb-act-modal ref=${r}/>
    `),this.requestUpdate("_modals")}render(){return l`
      <uui-action-bar>
        <uui-button @click=${this.handleClick} label="impersonate" pristine="" look="primary">
          <uui-icon-registry .icons="${this.icons}">
            <uui-icon style="font-size: 20px; padding-left: 4px; padding-right: 4px;" name="person"></uui-icon>
          </uui-icon-registry>
        </uui-button>
      </uui-action-bar>
      ${this._modals}
    `}};xo.styles=u`
    :host {
      position: absolute;
      bottom: 1.00rem;
      left: 1.00rem;
    }
  `,ce([b()],xo.prototype,"_modals",2),xo=ce([We("umb-act-toggle")],xo);var Do=class extends h{render(){return this.item?l`
      <uui-icon-registry-essential>
        <uui-icon name="see"></uui-icon>
      </uui-icon-registry-essential>
      <span>${this.item.variants.find(t=>t.name)?.name}</span>
    `:D}};Do.styles=[u`
      :host {
        border-radius: var(--uui-border-radius);
        outline-offset: -3px;
        padding: var(--uui-size-space-3) var(--uui-size-space-5);

        display: flex;
        justify-content: space-between;
        gap: var(--uui-size-space-3);
        align-items: center;

        width: 100%;

        > span {
          flex: 1;
        }
      }
    `],ce([i({type:Object})],Do.prototype,"item",2),Do=ce([We("umb-act-search-result-item")],Do);var Eo=class extends h{constructor(){super(),this.userAuth=JSON.parse(localStorage.getItem("umb:userAuthTokenResponse"))}async impersonate(){fo.impersonation({path:{memberKey:encodeURIComponent(this.item.id)},headers:{Authorization:`Bearer ${this.userAuth.access_token}`}}).then(({response:t})=>{t.ok&&window.location.reload()})}render(){return this.item?l`
      <a
        class="search-item"
        @click="${this.impersonate}">
        <slot></slot>
      </a>
    `:D}};Eo.styles=[u`
      .search-item {
        color: var(--uui-color-text);
        text-decoration: none;
        outline-offset: -3px;
        display: flex;
        cursor: pointer;
      }

      .search-item:hover {
        background: var(--uui-color-surface-emphasis);
        color: var(--uui-color-interactive-emphasis);
      }

      .search-item:focus {
        outline: 2px solid var(--uui-color-interactive-emphasis);
        border-radius: 6px;
        outline-offset: -4px;
      }

      .search-item.active:not(:focus-within) {
        outline: 2px solid var(--uui-color-border);
        border-radius: 6px;
        outline-offset: -4px;
      }
    `],ce([i({type:Object})],Eo.prototype,"item",2),Eo=ce([We("umb-act-member-item-actions")],Eo);Jg("https://cdn.jsdelivr.net/npm/@umbraco-ui/uui-css@latest/dist/uui-css.css");function Jg(e){let t=document.head,r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)}})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=impersonation.main.js.map
