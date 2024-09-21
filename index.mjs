// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,n,i){var o,l;if(!t(s))throw new TypeError(e("1QfAh",s));if(!r(n))throw new TypeError(e("1Qf2H",n));for(l=(o=s.length)-1;l>=0;l--){if(n.call(i,s[l],l,s))return!0;o!==s.length&&(l+=s.length-o,o=s.length)}return!1}export{s as default};
//# sourceMappingURL=index.mjs.map
