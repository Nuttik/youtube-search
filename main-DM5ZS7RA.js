import{A as Ne,a as Ee,b as Se,c as vt,d as tt,e as Ie,f as Ae,g as xe,h as Et,i as et,j as be,k as nt,l as St,m as It,n as Oe,o as N,p as Te,q as it,r as ot,s as rt,t as Ce,u as we,v as Me,w as Re,x as Fe,y as je,z as De}from"./chunk-5ACIFPXD.js";import{c as fe,d as de,e as le,f as pe,g as he,h as me,k as ge,l as ye,n as yt,o as ve}from"./chunk-7YO3JRSE.js";import{E as V,Ec as ae,F as M,H as _,I as mt,Ia as ee,J as Ht,L as Y,La as q,M as Zt,Mb as G,Nb as H,Ob as Q,P as Kt,R as Yt,Rc as ue,U as gt,Va as ne,X as Xt,Z as Wt,_ as qt,a as y,aa as Jt,b as E,ca as z,da as X,fa as Qt,fc as ce,g as L,ga as te,j as $t,ja as x,ka as R,l as Lt,lb as ie,ma as b,n as Ut,nb as oe,o as zt,oa as f,p as Bt,pa as D,pb as re,r as U,rb as se,sb as J,ua as W,v as Gt,va as F,w as O,y as ht,ya as B}from"./chunk-6E7XRXV2.js";var Fn="@",jn=(()=>{let t=class t{constructor(n,i,r,s,a){this.doc=n,this.delegate=i,this.zone=r,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=D(oe,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-A2JHTR57.js").then(i=>i)).catch(i=>{throw new te(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc);let s=new r(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(n,i){let r=this.delegate.createRenderer(n,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new At(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let v=a.createRenderer(n,i);s.use(v),this.scheduler?.notify(9)}).catch(a=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(i){ie()},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})(),At=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let o of this.replay)o(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,o){return this.delegate.createElement(t,o)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,o){this.delegate.appendChild(t,o)}insertBefore(t,o,n,i){this.delegate.insertBefore(t,o,n,i)}removeChild(t,o,n){this.delegate.removeChild(t,o,n)}selectRootElement(t,o){return this.delegate.selectRootElement(t,o)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,o,n,i){this.delegate.setAttribute(t,o,n,i)}removeAttribute(t,o,n){this.delegate.removeAttribute(t,o,n)}addClass(t,o){this.delegate.addClass(t,o)}removeClass(t,o){this.delegate.removeClass(t,o)}setStyle(t,o,n,i){this.delegate.setStyle(t,o,n,i)}removeStyle(t,o,n){this.delegate.removeStyle(t,o,n)}setProperty(t,o,n){this.shouldReplay(o)&&this.replay.push(i=>i.setProperty(t,o,n)),this.delegate.setProperty(t,o,n)}setValue(t,o){this.delegate.setValue(t,o)}listen(t,o,n){return this.shouldReplay(o)&&this.replay.push(i=>i.listen(t,o,n)),this.delegate.listen(t,o,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(Fn)}};function Pe(e="animations"){return se("NgAsyncAnimations"),B([{provide:re,useFactory:(t,o,n)=>new jn(t,o,n,e),deps:[ue,pe,J]},{provide:ne,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ke=(()=>{let t=class t{constructor(n,i){this.authService=n,this.router=i}canActivate(){return this.authService.checkInitialLoginState(),this.authService.isLoggedIn?!0:(this.router.navigate(["/login"]),!1)}};t.\u0275fac=function(i){return new(i||t)(f(ve),f(ye))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Nn=[{path:"",loadChildren:()=>import("./chunk-DCPHOSRT.js").then(e=>e.YoutubeModule),canActivate:[ke]},{path:"login",loadChildren:()=>import("./chunk-XVUG5GUP.js").then(e=>e.AuthModule)},{path:"**",redirectTo:"404",pathMatch:"full"}],Ve=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=F({type:t}),t.\u0275inj=R({imports:[yt.forRoot(Nn),yt]});let e=t;return e})();var _e=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=W({type:t,selectors:[["app-footer"]],decls:3,vars:0,consts:[[1,"container"],["href","https://github.com/Nuttik/youtube-search"]],template:function(i,r){i&1&&(G(0,"div",0)(1,"a",1),ce(2,"YoutubeApp(c) 2024"),H()())},styles:["[_nghost-%COMP%]{background-color:var(--black-text);color:var(--grey-bg)}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:var(--grey-bg)}.container[_ngcontent-%COMP%]{width:1200px;margin:auto;display:flex;justify-content:space-between;position:relative;padding:.5rem 0}"]});let e=t;return e})();var $e=(()=>{let t=class t{constructor(){this.title="Youtube App"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=W({type:t,selectors:[["app-root"]],decls:5,vars:0,template:function(i,r){i&1&&(G(0,"header"),Q(1,"app-header"),H(),G(2,"main"),Q(3,"router-outlet"),H(),Q(4,"app-footer"))},dependencies:[ge,De,_e],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh}main[_ngcontent-%COMP%]{width:1200px;margin:auto;padding:2rem 0;flex:1}@media (max-width: 1200px){main[_ngcontent-%COMP%]{width:calc(100% - 4rem);padding:2rem}}.container[_ngcontent-%COMP%]{max-width:1200px;margin:auto}"]});let e=t;return e})();function Le(e,t){let n=`${Fe.apiUrl}${e.url}`,i=e.clone({url:n});return t(i)}var Vn={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},ct="__@ngrx/effects_create__";function Ge(e,t={}){let o=t.functional?e:e(),n=y(y({},Vn),t);return Object.defineProperty(o,ct,{value:n}),o}function _n(e){return Object.getOwnPropertyNames(e).filter(n=>e[n]&&e[n].hasOwnProperty(ct)?e[n][ct].hasOwnProperty("dispatch"):!1).map(n=>{let i=e[n][ct];return y({propertyName:n},i)})}function $n(e){return _n(e)}function He(e){return Object.getPrototypeOf(e)}function Ln(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function Ze(e){return typeof e=="function"}function Ue(e){return e.filter(Ze)}function Un(e){return e instanceof b||Ze(e)}function zn(e,t,o){let n=He(e),r=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,s=$n(e).map(({propertyName:a,dispatch:v,useEffectsErrorHandler:l})=>{let u=typeof e[a]=="function"?e[a]():e[a],c=l?o(u,t):u;return v===!1?c.pipe(Zt()):c.pipe(Xt()).pipe(O(I=>({effect:e[a],notification:I,propertyName:a,sourceName:r,sourceInstance:e})))});return V(...s)}var Bn=10;function Ke(e,t,o=Bn){return e.pipe(_(n=>(t&&t.handleError(n),o<=1?e:Ke(e,t,o-1))))}var Ye=(()=>{let t=class t extends L{constructor(n){super(),n&&(this.source=n)}lift(n){let i=new t;return i.source=this,i.operator=n,i}};t.\u0275fac=function(i){return new(i||t)(f(et))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Xe(...e){return M(t=>e.some(o=>typeof o=="string"?o===t.type:o.type===t.type))}var We=new b("@ngrx/effects Internal Root Guard"),st=new b("@ngrx/effects User Provided Effects"),xt=new b("@ngrx/effects Internal Root Effects"),qe=new b("@ngrx/effects Internal Root Effects Instances"),ze=new b("@ngrx/effects Internal Feature Effects"),Je=new b("@ngrx/effects Internal Feature Effects Instance Groups"),Gn=new b("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Ke}),Qe="@ngrx/effects/init",Ji=Se(Qe);function Hn(e,t){if(e.notification.kind==="N"){let o=e.notification.value;!Zn(o)&&t.handleError(new Error(`Effect ${Kn(e)} dispatched an invalid action: ${Yn(o)}`))}}function Zn(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function Kn({propertyName:e,sourceInstance:t,sourceName:o}){let n=typeof t[e]=="function";return!!o?`"${o}.${String(e)}${n?"()":""}"`:`"${String(e)}()"`}function Yn(e){try{return JSON.stringify(e)}catch{return e}}var Xn="ngrxOnIdentifyEffects";function Wn(e){return bt(e,Xn)}var qn="ngrxOnRunEffects";function Jn(e){return bt(e,qn)}var Qn="ngrxOnInitEffects";function ti(e){return bt(e,Qn)}function bt(e,t){return e&&t in e&&typeof e[t]=="function"}var tn=(()=>{let t=class t extends $t{constructor(n,i){super(),this.errorHandler=n,this.effectsErrorHandler=i}addEffects(n){this.next(n)}toActions(){return this.pipe(gt(n=>Ln(n)?He(n):n),ht(n=>n.pipe(gt(ei))),ht(n=>{let i=n.pipe(Yt(s=>ni(this.errorHandler,this.effectsErrorHandler)(s)),O(s=>(Hn(s,this.errorHandler),s.notification)),M(s=>s.kind==="N"&&s.value!=null),Kt()),r=n.pipe(Y(1),M(ti),O(s=>s.ngrxOnInitEffects()));return V(i,r)}))}};t.\u0275fac=function(i){return new(i||t)(f(q),f(Gn))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function ei(e){return Wn(e)?e.ngrxOnIdentifyEffects():""}function ni(e,t){return o=>{let n=zn(o,e,t);return Jn(o)?o.ngrxOnRunEffects(n):n}}var en=(()=>{let t=class t{get isStarted(){return!!this.effectsSubscription}constructor(n,i){this.effectSources=n,this.store=i,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}};t.\u0275fac=function(i){return new(i||t)(f(tn),f(nt))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),nn=(()=>{let t=class t{constructor(n,i,r,s,a,v,l){this.sources=n,i.start();for(let u of s)n.addEffects(u);r.dispatch({type:Qe})}addEffects(n){this.sources.addEffects(n)}};t.\u0275fac=function(i){return new(i||t)(f(tn),f(en),f(nt),f(qe),f(St,8),f(It,8),f(We,8))},t.\u0275mod=F({type:t}),t.\u0275inj=R({});let e=t;return e})(),ii=(()=>{let t=class t{constructor(n,i,r,s){let a=i.flat();for(let v of a)n.addEffects(v)}};t.\u0275fac=function(i){return new(i||t)(f(nn),f(Je),f(St,8),f(It,8))},t.\u0275mod=F({type:t}),t.\u0275inj=R({});let e=t;return e})(),on=(()=>{let t=class t{static forFeature(...n){let i=n.flat(),r=Ue(i);return{ngModule:ii,providers:[r,{provide:ze,multi:!0,useValue:i},{provide:st,multi:!0,useValue:[]},{provide:Je,multi:!0,useFactory:Be,deps:[ze,st]}]}}static forRoot(...n){let i=n.flat(),r=Ue(i);return{ngModule:nn,providers:[r,{provide:xt,useValue:[i]},{provide:We,useFactory:oi},{provide:st,multi:!0,useValue:[]},{provide:qe,useFactory:Be,deps:[xt,st]}]}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=F({type:t}),t.\u0275inj=R({});let e=t;return e})();function Be(e,t){let o=[];for(let n of e)o.push(...n);for(let n of t)o.push(...n);return o.map(n=>Un(n)?D(n):n)}function oi(){let e=D(en,{optional:!0,skipSelf:!0}),t=D(xt,{self:!0});if(!(t.length===1&&t[0].length===0)&&e)throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");return"guarded"}var K="PERFORM_ACTION",si="REFRESH",fn="RESET",dn="ROLLBACK",ln="COMMIT",pn="SWEEP",hn="TOGGLE_ACTION",ci="SET_ACTIONS_ACTIVE",mn="JUMP_TO_STATE",gn="JUMP_TO_ACTION",Vt="IMPORT_STATE",yn="LOCK_CHANGES",vn="PAUSE_RECORDING",$=class{constructor(t,o){if(this.action=t,this.timestamp=o,this.type=K,typeof t.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},Ot=class{constructor(){this.type=si}},Tt=class{constructor(t){this.timestamp=t,this.type=fn}},Ct=class{constructor(t){this.timestamp=t,this.type=dn}},wt=class{constructor(t){this.timestamp=t,this.type=ln}},Mt=class{constructor(){this.type=pn}},Rt=class{constructor(t){this.id=t,this.type=hn}};var Ft=class{constructor(t){this.index=t,this.type=mn}},jt=class{constructor(t){this.actionId=t,this.type=gn}},Dt=class{constructor(t){this.nextLiftedState=t,this.type=Vt}},Nt=class{constructor(t){this.status=t,this.type=yn}},Pt=class{constructor(t){this.status=t,this.type=vn}};var dt=new b("@ngrx/store-devtools Options"),rn=new b("@ngrx/store-devtools Initial Config");function En(){return null}var ai="NgRx Store DevTools";function ui(e){let t={maxAge:!1,monitor:En,actionSanitizer:void 0,stateSanitizer:void 0,name:ai,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},o=typeof e=="function"?e():e,n=o.logOnly?{pause:!0,export:!0,test:!0}:!1,i=o.features||n||t.features;i.import===!0&&(i.import="custom");let r=Object.assign({},t,{features:i},o);if(r.maxAge&&r.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${r.maxAge}`);return r}function sn(e,t){return e.filter(o=>t.indexOf(o)<0)}function Sn(e){let{computedStates:t,currentStateIndex:o}=e;if(o>=t.length){let{state:i}=t[t.length-1];return i}let{state:n}=t[o];return n}function Z(e){return new $(e,+Date.now())}function fi(e,t){return Object.keys(t).reduce((o,n)=>{let i=Number(n);return o[i]=In(e,t[i],i),o},{})}function In(e,t,o){return E(y({},t),{action:e(t.action,o)})}function di(e,t){return t.map((o,n)=>({state:An(e,o.state,n),error:o.error}))}function An(e,t,o){return e(t,o)}function xn(e){return e.predicate||e.actionsSafelist||e.actionsBlocklist}function li(e,t,o,n){let i=[],r={},s=[];return e.stagedActionIds.forEach((a,v)=>{let l=e.actionsById[a];l&&(v&&_t(e.computedStates[v],l,t,o,n)||(r[a]=l,i.push(a),s.push(e.computedStates[v])))}),E(y({},e),{stagedActionIds:i,actionsById:r,computedStates:s})}function _t(e,t,o,n,i){let r=o&&!o(e,t.action),s=n&&!t.action.type.match(n.map(v=>cn(v)).join("|")),a=i&&t.action.type.match(i.map(v=>cn(v)).join("|"));return r||s||a}function cn(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function bn(e){return{ngZone:e?D(J):null,connectInZone:e}}var lt=(()=>{let t=class t extends tt{};t.\u0275fac=(()=>{let n;return function(r){return(n||(n=ee(t)))(r||t)}})(),t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})(),at={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},kt=new b("@ngrx/store-devtools Redux Devtools Extension"),On=(()=>{let t=class t{constructor(n,i,r){this.config=i,this.dispatcher=r,this.zoneConfig=bn(this.config.connectInZone),this.devtoolsExtension=n,this.createActionStreams()}notify(n,i){if(this.devtoolsExtension)if(n.type===K){if(i.isLocked||i.isPaused)return;let r=Sn(i);if(xn(this.config)&&_t(r,n,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let s=this.config.stateSanitizer?An(this.config.stateSanitizer,r,i.currentStateIndex):r,a=this.config.actionSanitizer?In(this.config.actionSanitizer,n,i.nextActionId):n;this.sendToReduxDevtools(()=>this.extensionConnection.send(a,s))}else{let r=E(y({},i),{stagedActionIds:i.stagedActionIds,actionsById:this.config.actionSanitizer?fi(this.config.actionSanitizer,i.actionsById):i.actionsById,computedStates:this.config.stateSanitizer?di(this.config.stateSanitizer,i.computedStates):i.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,r,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new L(n=>{let i=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=i,i.init(),i.subscribe(r=>n.next(r)),i.unsubscribe}):zt}createActionStreams(){let n=this.createChangesObservable().pipe(qt()),i=n.pipe(M(u=>u.type===at.START)),r=n.pipe(M(u=>u.type===at.STOP)),s=n.pipe(M(u=>u.type===at.DISPATCH),O(u=>this.unwrapAction(u.payload)),mt(u=>u.type===Vt?this.dispatcher.pipe(M(c=>c.type===Et),Gt(1e3),Ht(1e3),O(()=>u),_(()=>U(u)),Y(1)):U(u))),v=n.pipe(M(u=>u.type===at.ACTION),O(u=>this.unwrapAction(u.payload))).pipe(X(r)),l=s.pipe(X(r));this.start$=i.pipe(X(r)),this.actions$=this.start$.pipe(z(()=>v)),this.liftedActions$=this.start$.pipe(z(()=>l))}unwrapAction(n){return typeof n=="string"?(0,eval)(`(${n})`):n}getExtensionConfig(n){let i={name:n.name,features:n.features,serialize:n.serialize,autoPause:n.autoPause??!1,trace:n.trace??!1,traceLimit:n.traceLimit??75};return n.maxAge!==!1&&(i.maxAge=n.maxAge),i}sendToReduxDevtools(n){try{n()}catch(i){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",i)}}};t.\u0275fac=function(i){return new(i||t)(f(kt),f(dt),f(lt))},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})(),ft={type:vt},pi="@ngrx/store-devtools/recompute",hi={type:pi};function Tn(e,t,o,n,i){if(n)return{state:o,error:"Interrupted by an error up the chain"};let r=o,s;try{r=e(o,t)}catch(a){s=a.toString(),i.handleError(a)}return{state:r,error:s}}function ut(e,t,o,n,i,r,s,a,v){if(t>=e.length&&e.length===r.length)return e;let l=e.slice(0,t),u=r.length-(v?1:0);for(let c=t;c<u;c++){let h=r[c],I=i[h].action,p=l[c-1],d=p?p.state:n,C=p?p.error:void 0,w=s.indexOf(h)>-1?p:Tn(o,I,d,C,a);l.push(w)}return v&&l.push(e[e.length-1]),l}function mi(e,t){return{monitorState:t(void 0,{}),nextActionId:1,actionsById:{0:Z(ft)},stagedActionIds:[0],skippedActionIds:[],committedState:e,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function gi(e,t,o,n,i={}){return r=>(s,a)=>{let{monitorState:v,actionsById:l,nextActionId:u,stagedActionIds:c,skippedActionIds:h,committedState:I,currentStateIndex:p,computedStates:d,isLocked:C,isPaused:A}=s||t;s||(l=Object.create(l));function w(S){let g=S,j=c.slice(1,g+1);for(let T=0;T<j.length;T++)if(d[T+1].error){g=T,j=c.slice(1,g+1);break}else delete l[j[T]];h=h.filter(T=>j.indexOf(T)===-1),c=[0,...c.slice(g+1)],I=d[g].state,d=d.slice(g),p=p>g?p-g:0}function k(){l={0:Z(ft)},u=1,c=[0],h=[],I=d[p].state,p=0,d=[]}let m=0;switch(a.type){case yn:{C=a.status,m=1/0;break}case vn:{A=a.status,A?(c=[...c,u],l[u]=new $({type:"@ngrx/devtools/pause"},+Date.now()),u++,m=c.length-1,d=d.concat(d[d.length-1]),p===c.length-2&&p++,m=1/0):k();break}case fn:{l={0:Z(ft)},u=1,c=[0],h=[],I=e,p=0,d=[];break}case ln:{k();break}case dn:{l={0:Z(ft)},u=1,c=[0],h=[],p=0,d=[];break}case hn:{let{id:S}=a;h.indexOf(S)===-1?h=[S,...h]:h=h.filter(j=>j!==S),m=c.indexOf(S);break}case ci:{let{start:S,end:g,active:j}=a,T=[];for(let pt=S;pt<g;pt++)T.push(pt);j?h=sn(h,T):h=[...h,...T],m=c.indexOf(S);break}case mn:{p=a.index,m=1/0;break}case gn:{let S=c.indexOf(a.actionId);S!==-1&&(p=S),m=1/0;break}case pn:{c=sn(c,h),h=[],p=Math.min(p,c.length-1);break}case K:{if(C)return s||t;if(A||s&&_t(s.computedStates[p],a,i.predicate,i.actionsSafelist,i.actionsBlocklist)){let g=d[d.length-1];d=[...d.slice(0,-1),Tn(r,a.action,g.state,g.error,o)],m=1/0;break}i.maxAge&&c.length===i.maxAge&&w(1),p===c.length-1&&p++;let S=u++;l[S]=a,c=[...c,S],m=c.length-1;break}case Vt:{({monitorState:v,actionsById:l,nextActionId:u,stagedActionIds:c,skippedActionIds:h,committedState:I,currentStateIndex:p,computedStates:d,isLocked:C,isPaused:A}=a.nextLiftedState);break}case vt:{m=0,i.maxAge&&c.length>i.maxAge&&(d=ut(d,m,r,I,l,c,h,o,A),w(c.length-i.maxAge),m=1/0);break}case Et:{if(d.filter(g=>g.error).length>0)m=0,i.maxAge&&c.length>i.maxAge&&(d=ut(d,m,r,I,l,c,h,o,A),w(c.length-i.maxAge),m=1/0);else{if(!A&&!C){p===c.length-1&&p++;let g=u++;l[g]=new $(a,+Date.now()),c=[...c,g],m=c.length-1,d=ut(d,m,r,I,l,c,h,o,A)}d=d.map(g=>E(y({},g),{state:r(g.state,hi)})),p=c.length-1,i.maxAge&&c.length>i.maxAge&&w(c.length-i.maxAge),m=1/0}break}default:{m=1/0;break}}return d=ut(d,m,r,I,l,c,h,o,A),v=n(v,a),{monitorState:v,actionsById:l,nextActionId:u,stagedActionIds:c,skippedActionIds:h,committedState:I,currentStateIndex:p,computedStates:d,isLocked:C,isPaused:A}}}var an=(()=>{let t=class t{constructor(n,i,r,s,a,v,l,u){let c=mi(l,u.monitor),h=gi(l,c,v,u.monitor,u),I=V(V(i.asObservable().pipe(Jt(1)),s.actions$).pipe(O(Z)),n,s.liftedActions$).pipe(Bt(Ut)),p=r.pipe(O(h)),d=bn(u.connectInZone),C=new Lt(1);this.liftedStateSubscription=I.pipe(Qt(p),un(d),Wt(({state:k},[m,S])=>{let g=S(k,m);return m.type!==K&&xn(u)&&(g=li(g,u.predicate,u.actionsSafelist,u.actionsBlocklist)),s.notify(m,g),{state:g,action:m}},{state:c,action:null})).subscribe(({state:k,action:m})=>{if(C.next(k),m.type===K){let S=m.action;a.next(S)}}),this.extensionStartSubscription=s.start$.pipe(un(d)).subscribe(()=>{this.refresh()});let A=C.asObservable(),w=A.pipe(O(Sn));Object.defineProperty(w,"state",{value:Ee(w,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=n,this.liftedState=A,this.state=w}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(n){this.dispatcher.next(n)}next(n){this.dispatcher.next(n)}error(n){}complete(){}performAction(n){this.dispatch(new $(n,+Date.now()))}refresh(){this.dispatch(new Ot)}reset(){this.dispatch(new Tt(+Date.now()))}rollback(){this.dispatch(new Ct(+Date.now()))}commit(){this.dispatch(new wt(+Date.now()))}sweep(){this.dispatch(new Mt)}toggleAction(n){this.dispatch(new Rt(n))}jumpToAction(n){this.dispatch(new jt(n))}jumpToState(n){this.dispatch(new Ft(n))}importState(n){this.dispatch(new Dt(n))}lockChanges(n){this.dispatch(new Nt(n))}pauseRecording(n){this.dispatch(new Pt(n))}};t.\u0275fac=function(i){return new(i||t)(f(lt),f(tt),f(Ae),f(On),f(et),f(q),f(Ie),f(dt))},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})();function un({ngZone:e,connectInZone:t}){return o=>t?new L(n=>o.subscribe({next:i=>e.run(()=>n.next(i)),error:i=>e.run(()=>n.error(i)),complete:()=>e.run(()=>n.complete())})):o}var yi=new b("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function vi(e,t){return!!e||t.monitor!==En}function Ei(){let e="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[e]<"u"?window[e]:null}function Si(e={}){return B([On,lt,an,{provide:rn,useValue:e},{provide:yi,deps:[kt,dt],useFactory:vi},{provide:kt,useFactory:Ei},{provide:dt,deps:[rn],useFactory:ui},{provide:be,deps:[an],useFactory:Ii},{provide:xe,useExisting:lt}])}function Ii(e){return e.state}var Cn=(()=>{let t=class t{static instrument(n={}){return{ngModule:t,providers:[Si(n)]}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=F({type:t}),t.\u0275inj=R({});let e=t;return e})();var xi={customVideos:[],youtubeVideos:{isLoading:!1,items:[],error:null},favorites:[]},bi={videos:xi},wn=Te(bi,N(it,e=>E(y({},e),{videos:E(y({},e.videos),{youtubeVideos:E(y({},e.videos.youtubeVideos),{isLoading:!0,error:null})})})),N(ot,(e,t)=>E(y({},e),{videos:E(y({},e.videos),{youtubeVideos:E(y({},e.videos.youtubeVideos),{items:t.videos,isLoading:!1,error:null})})})),N(rt,(e,t)=>E(y({},e),{videos:E(y({},e.videos),{youtubeVideos:E(y({},e.videos.youtubeVideos),{isLoading:!1,error:t.error})})})),N(Ce,(e,t)=>{let o=[...e.videos.favorites,t.video];return E(y({},e),{videos:E(y({},e.videos),{favorites:o})})}),N(we,(e,t)=>{let o=e.videos.favorites.filter(n=>n.id!==t.video.id);return E(y({},e),{videos:E(y({},e.videos),{favorites:o})})}),N(Me,(e,t)=>{let o=[...e.videos.customVideos,t.video];return E(y({},e),{videos:E(y({},e.videos),{customVideos:o})})}),N(Re,(e,t)=>{let o=e.videos.customVideos.filter(n=>n.id!==t.video.id);return E(y({},e),{videos:E(y({},e.videos),{customVideos:o})})}));var Mn=(()=>{let t=class t{constructor(n,i){this.actions$=n,this.searchService=i,this.getVideos$=Ge(()=>this.actions$.pipe(Xe(it),z(r=>this.searchService.getVideosWithStatistics(r.query).pipe(O(s=>ot({videos:s})),_(s=>U(rt({error:s.message})))))))}};t.\u0275fac=function(i){return new(i||t)(f(Ye),f(je))},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})();var Rn=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=F({type:t,bootstrap:[$e]}),t.\u0275inj=R({providers:[Pe(),fe(le(),de([Le]))],imports:[me,Ve,Ne,Oe.forRoot({appState:wn}),on.forRoot([Mn]),Cn.instrument({maxAge:25,logOnly:!ae()})]});let e=t;return e})();he().bootstrapModule(Rn,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));
