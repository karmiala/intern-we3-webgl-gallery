(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,u=void 0!==i&&i;return n||o&&u}},"/MKj":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return w}));var r=n("q1tI"),o=n.n(r),i=(n("17x9"),o.a.createContext(null));var u=function(e){e()},c={notify:function(){}};function a(){var e=u,t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var s=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=c,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=a())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=c)},e}();var f=function(e){var t=e.store,n=e.context,u=e.children,c=Object(r.useMemo)((function(){var e=new s(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),a=Object(r.useMemo)((function(){return t.getState()}),[t]);Object(r.useEffect)((function(){var e=c.subscription;return e.trySubscribe(),a!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[c,a]);var f=n||i;return o.a.createElement(f.Provider,{value:c},u)};n("zLVn"),n("2mql"),n("TOwV");var l="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;n("ANjH");function p(){return Object(r.useContext)(i)}function d(e){void 0===e&&(e=i);var t=e===i?p:function(){return Object(r.useContext)(e)};return function(){return t().store}}var y=d();function h(e){void 0===e&&(e=i);var t=e===i?y:d(e);return function(){return t().dispatch}}var b=h(),m=function(e,t){return e===t};function v(e){void 0===e&&(e=i);var t=e===i?p:function(){return Object(r.useContext)(e)};return function(e,n){void 0===n&&(n=m);var o=t(),i=function(e,t,n,o){var i,u=Object(r.useReducer)((function(e){return e+1}),0)[1],c=Object(r.useMemo)((function(){return new s(n,o)}),[n,o]),a=Object(r.useRef)(),f=Object(r.useRef)(),p=Object(r.useRef)(),d=Object(r.useRef)(),y=n.getState();try{i=e!==f.current||y!==p.current||a.current?e(y):d.current}catch(h){throw a.current&&(h.message+="\nThe error may be correlated with this previous error:\n"+a.current.stack+"\n\n"),h}return l((function(){f.current=e,p.current=y,d.current=i,a.current=void 0})),l((function(){function e(){try{var e=f.current(n.getState());if(t(e,d.current))return;d.current=e}catch(h){a.current=h}u()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[n,c]),i}(e,n,o.store,o.subscription);return Object(r.useDebugValue)(i),i}}var g,w=v(),O=n("i8i4");g=O.unstable_batchedUpdates,u=g},"20a2":function(e,t,n){e.exports=n("nOHt")},"2mql":function(e,t,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function a(e){return r.isMemo(e)?u:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=u;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(y){var o=d(n);o&&o!==y&&e(t,o,r)}var u=f(n);l&&(u=u.concat(l(n)));for(var c=a(t),h=a(n),b=0;b<u.length;++b){var m=u[b];if(!i[m]&&(!r||!r[m])&&(!h||!h[m])&&(!c||!c[m])){var v=p(n,m);try{s(t,m,v)}catch(g){}}}}return t}},"5HXA":function(e,t,n){"use strict";var r=n("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),c=n("FYa8"),a=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var a=0,s=p.length;a<s;a++){var f=p[a];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var l=o.props[f],d=r[f]||new Set;"name"===f&&u||!d.has(l)?(d.add(l),r[f]=d):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function y(e){var t=e.children,n=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,a.isInAmpMode)(n)},t)}y.rewind=function(){};var h=y;t.default=h},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,s=[],f=!1,l=-1;function p(){f&&a&&(f=!1,a.length?s=a.concat(s):l=-1,s.length&&d())}function d(){if(!f){var e=c(p);f=!0;for(var t=s.length;t;){for(a=s,s=[];++l<t;)a&&a[l].run();l=-1,t=s.length}a=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new y(e,t)),1!==s.length||f||c(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},ANjH:function(e,t,n){"use strict";n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return b})),n.d(t,"bindActionCreators",(function(){return l})),n.d(t,"combineReducers",(function(){return s})),n.d(t,"compose",(function(){return h})),n.d(t,"createStore",(function(){return c}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(c)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var a=e,s=t,f=[],l=f,p=!1;function d(){l===f&&(l=f.slice())}function y(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function h(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return d(),l.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,d();var n=l.indexOf(e);l.splice(n,1),f=null}}}function b(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=a(s,e)}finally{p=!1}for(var t=f=l,n=0;n<t.length;n++){(0,t[n])()}return e}function m(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,b({type:i.REPLACE})}function v(){var e,t=h;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(y())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e}return b({type:i.INIT}),(o={dispatch:b,subscribe:h,getState:y,replaceReducer:m})[r.a]=v,o}function a(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var u,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(s){u=s}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var r=!1,o={},i=0;i<c.length;i++){var s=c[i],f=n[s],l=e[s],p=f(l,t);if("undefined"===typeof p){var d=a(s,t);throw new Error(d)}o[s]=p,r=r||p!==l}return(r=r||c.length!==Object.keys(e).length)?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function l(e,t){if("function"===typeof e)return f(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=f(o,t))}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return y({},n,{dispatch:r=h.apply(void 0,i)(n.dispatch)})}}}},Az8m:function(e,t){(function(t){e.exports=function(){var e={931:function(e){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},i=!0;try{e[t](o,o.exports,r),i=!1}finally{i&&delete n[t]}return o.exports}return r.ab=t+"/",r(931)}()}).call(this,"/")},B5Ud:function(e,t,n){"use strict";var r=n("o0o1"),o=n("lwsE"),i=n("W8MJ"),u=n("7W2i"),c=n("a1gu"),a=n("Nsbk"),s=n("yXPU");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var l=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=m,t.default=void 0;var p=l(n("q1tI")),d=n("g/15");function y(e){return h.apply(this,arguments)}function h(){return(h=s(r.mark((function e(t){var n,o,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var b=function(e){u(n,e);var t=f(n);function n(){return o(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,i=e.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||i?{}:{url:m(t)}))}}]),n}(p.default.Component);function m(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=b,b.origGetInitialProps=y,b.getInitialProps=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},"Ja+d":function(e,t){e.exports=function(e={},t={},n=[]){return Object.keys(e).filter((e=>!t.hasOwnProperty(e)&&-1===n.indexOf(e)))}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||u()}},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},UXlf:function(e,t,n){const r=n("Ja+d"),o=["children","history","location","params","route","routes","routeParams","context","slug","fn","match","staticContext"];e.exports=function(e={},t=[]){const n=o.concat(t);return{...e,fn:function(t,o,i){const u=r(t,e,n);u.length&&console.warn(`Component ${i} has unspecified props: ${u.join(", ")}`)}}}},VEJr:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="WE3 Creative Gallery",o="The Relentless Pursuit of Better"},VNKG:function(e,t,n){"use strict";(function(e){var r=n("q1tI"),o=n.n(r),i=(n("UXlf"),n("g4pe")),u=n.n(i),c=n("20a2"),a=n("VEJr"),s=o.a.createElement;function f(t){var n=t.title,r=t.description,o=t.keywords,i=Object(c.useRouter)(),f="".concat("/intern-we3-webgl-gallery").concat(i.asPath),l="".concat("/intern-we3-webgl-gallery","/assets/images/share-image.jpg"),p=n?"".concat(n," ").concat("|"," ").concat(a.a):"".concat(a.a," ").concat("|"," ").concat(a.b),d="".concat("/intern-we3-webgl-gallery");return s(u.a,null,s("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),s("title",null,p),s("meta",{name:"description",content:r}),s("meta",{name:"keywords",content:o.join()}),s("meta",{name:"theme-color",content:"#ffffff"}),s("meta",{name:"msapplication-TileColor",content:"#ffffff"}),s("link",{rel:"apple-touch-icon",sizes:"180x180",href:d+"/favicons/apple-touch-icon.png"}),s("link",{rel:"icon",type:"image/png",sizes:"32x32",href:d+"/favicons/favicon-32x32.png"}),s("link",{rel:"icon",type:"image/png",sizes:"16x16",href:d+"/favicons/favicon-16x16.png"}),s("link",{rel:"manifest",href:d+"/favicons/site.webmanifest",crossOrigin:"use-credentials"}),s("link",{rel:"mask-icon",href:d+"/favicons/safari-pinned-tab.svg",color:"#000000"}),s("link",{rel:"shortcut icon",href:d+"/favicons/favicon.ico"}),s("meta",{name:"msapplication-config",content:d+"/favicons/browserconfig.xml"}),s("meta",{property:"og:locale",content:"en_US"}),s("meta",{property:"og:title",content:p}),s("meta",{property:"og:description",content:r}),s("meta",{property:"og:type",content:"website"}),s("meta",{property:"og:url",content:f}),s("meta",{property:"og:site_name",content:a.a}),s("meta",{property:"og:image:width",content:"1200"}),s("meta",{property:"og:image:height",content:"630"}),s("meta",{property:"og:image",content:l}),s("meta",{name:"twitter:card",content:"Default content"}),s("meta",{property:"fb:app_id",content:"FB_APP_ID"}),s("meta",{name:"google-site-verification",content:"[Google Web Master Tools]"}),s("meta",{name:"msvalidate.01",content:"[Bing Web Master Tools]"}),s("link",{rel:"canonical",href:f}),e.env.NEXT_PUBLIC_DNS_PREFETCH&&s("link",{rel:"dns-prefetch",href:e.env.NEXT_PUBLIC_DNS_PREFETCH}))}f.defaultProps={description:"Default Description",keywords:["Jam3","Web App","React","NextJS"]},t.a=Object(r.memo)(f)}).call(this,n("8oxB"))},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),u=(n("PJYZ"),n("7W2i")),c=n("a1gu"),a=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){u(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var u=Object(i.a)(o);t.a=u}).call(this,n("ntbh"),n("Az8m")(e))},g4pe:function(e,t,n){e.exports=n("8Kt/")},ibvY:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var r=n("rePB"),o="LANDING_LOADED";function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={loaded:!1};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return u(u({},e),{},{loaded:t.loaded});default:return e}}function s(e){return{type:o,loaded:e}}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},i=!0;try{e[t](o,o.exports,r),i=!1}finally{i&&delete n[t]}return o.exports}return r.ab=t+"/",r(149)}()}).call(this,"/")},qT12:function(e,t,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case p:case u:case a:case c:case y:return e;default:switch(e=e&&e.$$typeof){case f:case d:case m:case b:case s:return e;default:return t}}case i:return t}}}function j(e){return x(e)===p}t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=f,t.ContextProvider=s,t.Element=o,t.ForwardRef=d,t.Fragment=u,t.Lazy=m,t.Memo=b,t.Portal=i,t.Profiler=a,t.StrictMode=c,t.Suspense=y,t.isAsyncMode=function(e){return j(e)||x(e)===l},t.isConcurrentMode=j,t.isContextConsumer=function(e){return x(e)===f},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===u},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===b},t.isPortal=function(e){return x(e)===i},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===c},t.isSuspense=function(e){return x(e)===y},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===p||e===a||e===c||e===y||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===b||e.$$typeof===s||e.$$typeof===f||e.$$typeof===d||e.$$typeof===g||e.$$typeof===w||e.$$typeof===O||e.$$typeof===v)},t.typeOf=x},qbdr:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n("o0o1"),o=n.n(r),i=n("rePB"),u=n("HaE+"),c=n("zLVn");function a(e,t){if(null==e)return{};var n,r,o=Object(c.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=n("q1tI"),f=n.n(s),l=(n("8Bbg"),n("/MKj")),p=n("ANjH"),d=n("5HXA"),y=n("ibvY"),h=Object(p.combineReducers)({app:y.a}),b=f.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g,w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ssr,r=void 0===n||n,i=function(t){var n=t.initialReduxState,r=a(t,["initialReduxState"]),o=O(n);return b(l.a,{store:o},b(e,r))};return(r||e.getInitialProps)&&(i.getInitialProps=function(){var t=Object(u.a)(o.a.mark((function t(n){var r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=O(),n.reduxStore=r,"function"!==typeof e.getInitialProps){t.next=8;break}return t.next=5,e.getInitialProps(n);case 5:t.t0=t.sent,t.next=9;break;case 8:t.t0={};case 9:return i=t.t0,t.abrupt("return",v(v({},i),{},{initialReduxState:r.getState()}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i},O=function(e){var t;return g||(t=e,g=Object(p.createStore)(h,t,Object(d.composeWithDevTools)(Object(p.applyMiddleware)()))),g}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))}}]);