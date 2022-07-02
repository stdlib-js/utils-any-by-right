// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function s(s,i,n){var o,l;if(!t(s))throw new TypeError(e("0iBBO",s));if(!r(i))throw new TypeError(e("0iB2S",i));for(l=(o=s.length)-1;l>=0;l--){if(i.call(n,s[l],l,s))return!0;o!==s.length&&(l+=s.length-o,o=s.length)}return!1}export{s as default};
//# sourceMappingURL=index.mjs.map
