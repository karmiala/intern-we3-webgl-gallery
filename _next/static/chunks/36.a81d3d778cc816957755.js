(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{C2oO:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("TSYQ"),i=n.n(a),c=(n("UXlf"),n("nkPT")),f=(n.n(c).a,{angle:0,type:"landscape-primary"}),u=function(e){void 0===e&&(e=f);var t=window.screen,n=Object(r.useState)(e),o=n[0],a=n[1];return Object(r.useEffect)((function(){var n=!0,r=function(){if(n){var r=t.orientation;if(r){var o=r.angle,i=r.type;a({angle:o,type:i})}else window.orientation?a({angle:"number"===typeof window.orientation?window.orientation:0,type:""}):a(e)}};return function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e.addEventListener.apply(e,t)}(window,"orientationchange",r),r(),function(){n=!1,function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e.removeEventListener.apply(e,t)}(window,"orientationchange",r)}}),[]),o},s=n("rnDd"),l=n.n(s),p=n("pMtP"),d=o.a.createElement;function g(e){var t=e.className,n=u();return d("div",{className:i()(l.a.RotateScreen,{[l.a.enabled]:p.a.device.isPhone&&0!==n.angle},t)},"Rotate Screen")}g.defaultProps={};t.default=Object(r.memo)(g)},nkPT:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!==o--;){var i=a[o];if(("_owner"!==i||!t.$$typeof)&&!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n}},rnDd:function(e,t,n){e.exports={RotateScreen:"RotateScreen_RotateScreen__bMVNZ",enabled:"RotateScreen_enabled__7faPy"}}}]);