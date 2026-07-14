"use strict";var g=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var f=g(function(y,s){
var v=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e,a){var n,u,t;if(!v(r))throw new TypeError(i('1QfAh',r));if(!m(e))throw new TypeError(i('1Qf2H',e));for(u=r.length,t=u-1;t>=0;t--){if(n=e.call(a,r[t],t,r),n)return!0;u!==r.length&&(t+=r.length-u,u=r.length)}return!1}s.exports=h
});var q=f();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
