import{c as ct,f as lt}from"./chunk-DX74MDJG.js";import{e as mt,i as ht,l as ft,m as ut,n as dt,o as gt,r as pt}from"./chunk-LRIJ5G46.js";import{a as at}from"./chunk-3V2RRN27.js";import"./chunk-IX6G3U3V.js";import{$b as nt,Aa as w,Ab as _,Ba as V,Bb as v,Bc as rt,Cb as Q,Cc as st,D,Fb as X,H as U,Hb as Z,Ib as tt,K as j,Q as z,Rb as S,Sa as g,Sb as A,Ta as Y,Tb as k,Wa as l,X as E,Xa as p,Zb as M,_ as H,_b as et,ac as it,ba as T,da as I,e as L,ea as W,ia as y,ib as q,lc as ot,o as u,p as x,rb as G,s as d,sb as b,tb as J,tc as P,ub as K,va as $,x as O,ya as B}from"./chunk-GB7CMFKM.js";var wt=["*"],R;function Mt(){if(R===void 0&&(R=null,typeof window<"u")){let r=window;r.trustedTypes!==void 0&&(R=r.trustedTypes.createPolicy("angular#components",{createHTML:s=>s}))}return R}function C(r){return Mt()?.createHTML(r)||r}function _t(r){return Error(`Unable to find icon with the name "${r}"`)}function Rt(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function vt(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function It(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}var c=class{constructor(s,m,t){this.url=s,this.svgText=m,this.options=t}},Nt=(()=>{let s=class s{constructor(t,e,n,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,i){return this._addSvgIconConfig(t,e,new c(n,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,i){let o=this._sanitizer.sanitize(g.HTML,n);if(!o)throw It(n);let a=C(o);return this._addSvgIconConfig(t,e,new c("",a,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new c(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let i=this._sanitizer.sanitize(g.HTML,e);if(!i)throw It(e);let o=C(i);return this._addSvgIconSetConfig(t,new c("",o,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(g.RESOURCE_URL,t);if(!e)throw vt(t);let n=this._cachedIconsByUrl.get(e);return n?u(N(n)):this._loadSvgIconFromConfig(new c(t,null)).pipe(E(i=>this._cachedIconsByUrl.set(e,i)),d(i=>N(i)))}getNamedSvgIcon(t,e=""){let n=St(e,t),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);let o=this._iconSetConfigs.get(e);return o?this._getSvgFromIconSetConfigs(t,o):x(_t(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?u(N(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(d(e=>N(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return u(n);let i=e.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(D(a=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(g.RESOURCE_URL,o.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(f)),u(null)})));return O(i).pipe(d(()=>{let o=this._extractIconWithNameFromAnySet(t,e);if(!o)throw _t(t);return o}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let o=this._svgElementFromConfig(i),a=this._extractSvgIconFromSet(o,t,i.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(E(e=>t.svgText=e),d(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?u(null):this._fetchIcon(t).pipe(E(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let i=t.querySelector(`[id="${e}"]`);if(!i)return null;let o=i.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,n);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),n);let a=this._svgElementFromString(C("<svg></svg>"));return a.appendChild(o),this._setSvgAttributes(a,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(C("<svg></svg>")),n=t.attributes;for(let i=0;i<n.length;i++){let{name:o,value:a}=n[i];o!=="id"&&e.setAttribute(o,a)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,i=n?.withCredentials??!1;if(!this._httpClient)throw Rt();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let o=this._sanitizer.sanitize(g.RESOURCE_URL,e);if(!o)throw vt(e);let a=this._inProgressUrlFetches.get(o);if(a)return a;let h=this._httpClient.get(o,{responseType:"text",withCredentials:i}).pipe(d(f=>C(f)),j(()=>this._inProgressUrlFetches.delete(o)),z());return this._inProgressUrlFetches.set(o,h),h}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(St(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let i=this._resolvers[n](e,t);if(i)return Tt(i)?new c(i.url,null,i.options):new c(i,null)}}};s.\u0275fac=function(e){return new(e||s)(I(at,8),I(ct),I(P,8),I(w))},s.\u0275prov=H({token:s,factory:s.\u0275fac,providedIn:"root"});let r=s;return r})();function N(r){return r.cloneNode(!0)}function St(r,s){return r+":"+s}function Tt(r){return!!(r.url&&r.options)}var bt=new T("MAT_ICON_DEFAULT_OPTIONS"),At=new T("mat-icon-location",{providedIn:"root",factory:kt});function kt(){let r=W(P),s=r?r.location:null;return{getPathname:()=>s?s.pathname+s.search:""}}var Ct=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Pt=Ct.map(r=>`[${r}]`).join(", "),Lt=/^url\(['"]?#(.*?)['"]?\)$/,Ft=(()=>{let s=class s{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,n,i,o,a){this._elementRef=t,this._iconRegistry=e,this._location=i,this._errorHandler=o,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=L.EMPTY,a&&(a.color&&(this.color=this._defaultColor=a.color),a.fontSet&&(this.fontSet=a.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,i)=>{n.forEach(o=>{i.setAttribute(o.name,`url('${t}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Pt),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)Ct.forEach(o=>{let a=e[i],h=a.getAttribute(o),f=h?h.match(Lt):null;if(f){let F=n.get(a);F||(F=[],n.set(a,F)),F.push({name:o,value:f[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(U(1)).subscribe(i=>this._setSvgElement(i),i=>{let o=`Error retrieving icon ${e}:${n}! ${i.message}`;this._errorHandler.handleError(new Error(o))})}}};s.\u0275fac=function(e){return new(e||s)(p(V),p(Nt),$("aria-hidden"),p(At),p(w),p(bt,8))},s.\u0275cmp=y({type:s,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(G("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),K(n.color?"mat-"+n.color:""),J("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ot],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[q,M],ngContentSelectors:wt,decls:1,vars:0,template:function(e,n){e&1&&(Z(),tt(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let r=s;return r})();var Ot=r=>({pokemon:r}),Et=class r{pokemon;onFavorite=new B;toggleFavorite(s){s.isFavorite=!s.isFavorite,this.onFavorite.emit(s.name)}static \u0275fac=function(m){return new(m||r)};static \u0275cmp=y({type:r,selectors:[["app-pokemon-card"]],inputs:{pokemon:"pokemon"},outputs:{onFavorite:"onFavorite"},standalone:!0,features:[M],decls:16,vars:11,consts:[[1,"pokemon-card"],[1,"title-header"],[3,"routerLink","state"],[3,"click"],[1,"image"],[3,"src"]],template:function(m,t){m&1&&(_(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"a",2)(4,"mat-card-title"),S(5),nt(6,"titlecase"),v()(),_(7,"mat-icon",3),X("click",function(){return t.toggleFavorite(t.pokemon)}),S(8),v()()(),_(9,"mat-card-content")(10,"div",4),Q(11,"img",5),v(),_(12,"p"),S(13),v(),_(14,"p"),S(15),v()()()),m&2&&(l(3),b("routerLink","/detail/"+t.pokemon.id)("state",et(9,Ot,t.pokemon)),l(2),A(it(6,7,t.pokemon.name)),l(3),A(t.pokemon.isFavorite?"favorite":"favorite_border"),l(3),b("src",t.pokemon.frontShiny,Y),l(2),k("Weight: ",t.pokemon.weight," kg"),l(2),k("Height: ",t.pokemon.height," m"))},dependencies:[lt,st,rt,mt,ht,Ft,dt,ut,gt,pt,ft],styles:[".pokemon-card[_ngcontent-%COMP%]{max-width:300px;margin:20px;text-align:center}mat-card-title[_ngcontent-%COMP%]{font-weight:700}.title-header[_ngcontent-%COMP%]:last-child{margin-left:auto}mat-card-subtitle[_ngcontent-%COMP%]{font-size:.9em;color:gray}.image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.title-header[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;margin-right:auto;gap:10x}mat-icon[_ngcontent-%COMP%]{color:#e79a9a;cursor:pointer}a[_ngcontent-%COMP%]{color:#000;text-decoration:none}"],changeDetection:0})};export{Et as PokemonCardComponent};