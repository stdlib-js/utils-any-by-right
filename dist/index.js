"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=g(function(y,i){
var v=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e,f){var a,u,t;if(!v(r))throw new TypeError(n('1QfAh',r));if(!m(e))throw new TypeError(n('1Qf2H',e));for(u=r.length,t=u-1;t>=0;t--){if(a=e.call(f,r[t],t,r),a)return!0;u!==r.length&&(t+=r.length-u,u=r.length)}return!1}i.exports=h
});var q=s();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
