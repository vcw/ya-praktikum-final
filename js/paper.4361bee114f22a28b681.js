!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=190)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(63))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(0),o=e(28),i=e(4),c=e(29),u=e(32),a=e(74),s=o("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(6),o=e(9),i=e(23);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(6),o=e(25),i=e(5),c=e(24),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(8),i=e(4),c=e(17),u=e(21),a=e(27),s=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),f(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(s=!0):delete t[n],s?t[n]=e:o(t,n,e)):s?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},function(t,n,e){var r=e(68),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){"use strict";var r,o,i=e(38),c=e(43),u=RegExp.prototype.exec,a=String.prototype.replace,s=u,f=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(f||p||l)&&(s=function(t){var n,e,r,o,c=this,s=l&&c.sticky,g=i.call(c),v=c.source,h=0,y=t;return s&&(-1===(g=g.replace("y","")).indexOf("g")&&(g+="g"),y=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(v="(?: "+v+")",y=" "+y,h++),e=new RegExp("^(?:"+v+")",g)),p&&(e=new RegExp("^"+v+"$(?!\\s)",g)),f&&(n=c.lastIndex),r=u.call(s?e:c,y),s?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:f&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),p&&r&&r.length>1&&a.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=s},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(18),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));e(42);class r extends Date{substractDays(t){const n=this.getDate()-t;return this.setDate(n),this}getMonthInRussianGenetive(){return["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][this.getMonth()]}getMonthInRussianNominative(t){return["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"][t]}getFormattedDate(){const t=this.getDate(),n=this.getMonthInRussianGenetive(),e=this.getFullYear();return"".concat(t," ").concat(n,", ").concat(e)}getStringDate(){return this.toISOString().split("T")[0]}getTwoLetterDayInRussian(){return["пн","вт","ср","чт","пт","сб","вс"][this.getDay()]}}},function(t,n,e){var r=e(33),o=e(13);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(8);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(6),o=e(64),i=e(23),c=e(16),u=e(24),a=e(4),s=e(25),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=u(n,!0),s)try{return f(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(26),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(20).f,i=e(8),c=e(10),u=e(17),a=e(40),s=e(31);t.exports=function(t,n){var e,f,l,p,g,v=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(g=o(e,f))&&g.value:e[f],!s(h?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(6),o=e(1),i=e(34);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(17),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r,o,i,c=e(65),u=e(0),a=e(3),s=e(8),f=e(4),l=e(66),p=e(30),g=u.WeakMap;if(c){var v=new g,h=v.get,y=v.has,x=v.set;r=function(t,n){return x.call(v,t,n),n},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var d=l("state");p[d]=!0,r=function(t,n){return s(t,d,n),n},o=function(t){return f(t,d)?t[d]:{}},i=function(t){return f(t,d)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(35),o=e(26);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==s||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(1),o=e(7),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(0),o=e(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=!1},,function(t,n,e){var r=e(5),o=e(19),i=e(2)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){"use strict";var r=e(5);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){},function(t,n,e){var r=e(4),o=e(67),i=e(20),c=e(9);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||u(t,f,a(n,f))}}},function(t,n,e){var r=e(69),o=e(72).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){"use strict";var r=e(81),o=e(44),i=e(5),c=e(13),u=e(37),a=e(83),s=e(14),f=e(85),l=e(12),p=e(1),g=[].push,v=Math.min,h=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(c(this)),i=void 0===e?4294967295:e>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return n.call(r,t,i);for(var u,a,s,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,h=new RegExp(t.source,p+"g");(u=l.call(h,r))&&!((a=h.lastIndex)>v&&(f.push(r.slice(v,u.index)),u.length>1&&u.index<r.length&&g.apply(f,u.slice(1)),s=u[0].length,v=a,f.length>=i));)h.lastIndex===u.index&&h.lastIndex++;return v===r.length?!s&&h.test("")||f.push(""):f.push(r.slice(v)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var o=c(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,e):r.call(String(o),n,e)},function(t,o){var c=e(r,t,this,o,r!==n);if(c.done)return c.value;var l=i(t),p=String(this),g=u(l,RegExp),y=l.unicode,x=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),d=new g(h?l:"^(?:"+l.source+")",x),b=void 0===o?4294967295:o>>>0;if(0===b)return[];if(0===p.length)return null===f(d,p)?[p]:[];for(var S=0,m=0,_=[];m<p.length;){d.lastIndex=h?m:0;var E,w=f(d,h?p:p.slice(m));if(null===w||(E=v(s(d.lastIndex+(h?0:m)),p.length))===S)m=a(p,m,y);else{if(_.push(p.slice(S,m)),_.length===b)return _;for(var O=1;O<=w.length-1;O++)if(_.push(w[O]),_.length===b)return _;m=S=E}}return _.push(p.slice(S)),_}]}),!h)},function(t,n,e){"use strict";var r=e(1);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,e){var r=e(3),o=e(7),i=e(2)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(21),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(28),o=e(29),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(11),o=e(41),i=e(73),c=e(5);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(4),o=e(16),i=e(70).indexOf,c=e(30);t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)!r(c,e)&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(16),o=e(14),i=e(71),c=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(18),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(32);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r=e(11),o=e(9),i=e(2),c=e(6),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},,,,,,function(t,n,e){"use strict";e(82);var r=e(10),o=e(1),i=e(2),c=e(12),u=e(8),a=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),g=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,l){var v=i(t),h=!o((function(){var n={};return n[v]=function(){return 7},7!=""[t](n)})),y=h&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return n=!0,null},e[v](""),!n}));if(!h||!y||"replace"===t&&(!s||!f||p)||"split"===t&&!g){var x=/./[v],d=e(v,""[t],(function(t,n,e,r,o){return n.exec===c?h&&!o?{done:!0,value:x.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=d[0],S=d[1];r(String.prototype,t,b),r(RegExp.prototype,v,2==n?function(t,n){return S.call(t,this,n)}:function(t){return S.call(t,this)})}l&&u(RegExp.prototype[v],"sham",!0)}},function(t,n,e){"use strict";var r=e(22),o=e(12);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";var r=e(84).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(18),o=e(13),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(7),o=e(12);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){var r=e(6),o=e(0),i=e(31),c=e(184),u=e(9).f,a=e(41).f,s=e(44),f=e(38),l=e(43),p=e(10),g=e(1),v=e(27).set,h=e(75),y=e(2)("match"),x=o.RegExp,d=x.prototype,b=/a/g,S=/a/g,m=new x(b)!==b,_=l.UNSUPPORTED_Y;if(r&&i("RegExp",!m||_||g((function(){return S[y]=!1,x(b)!=b||x(S)==S||"/a/i"!=x(b,"i")})))){for(var E=function(t,n){var e,r=this instanceof E,o=s(t),i=void 0===n;if(!r&&o&&t.constructor===E&&i)return t;m?o&&!i&&(t=t.source):t instanceof E&&(i&&(n=f.call(t)),t=t.source),_&&(e=!!n&&n.indexOf("y")>-1)&&(n=n.replace(/y/g,""));var u=c(m?new x(t,n):x(t,n),r?this:d,E);return _&&e&&v(u,{sticky:e}),u},w=function(t){t in E||u(E,t,{configurable:!0,get:function(){return x[t]},set:function(n){x[t]=n}})},O=a(x),R=0;O.length>R;)w(O[R++]);d.constructor=E,E.prototype=d,p(o,"RegExp",E)}h("RegExp")},function(t,n,e){var r=e(3),o=e(185);t.exports=function(t,n,e){var i,c;return o&&"function"==typeof(i=n.constructor)&&i!==e&&r(c=i.prototype)&&c!==e.prototype&&o(t,c),t}},function(t,n,e){var r=e(5),o=e(186);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";var r=e(10),o=e(5),i=e(1),c=e(38),u=RegExp.prototype,a=u.toString,s=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),f="toString"!=a.name;(s||f)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in u)?c.call(t):e)}),{unsafe:!0})},,,function(t,n,e){"use strict";e.r(n);e(45),e(46),e(47),e(48),e(88),e(49),e(50),e(89),e(51),e(52),e(90),e(53),e(91),e(54),e(39),e(87),e(86),e(172),e(173),e(174),e(175),e(176),e(177),e(178),e(179),e(180),e(181),e(182),e(55),e(56),e(57),e(58),e(59),e(60),e(61),e(62),e(183),e(187);var r=e(15);class o{constructor(t,n){this._articles=t,this._keyword=n}getAllMentions(){return this._articles.length}getTitleMentions(){return this._articles.reduce((t,n)=>new RegExp(this._keyword,"i").test(n.title)?++t:t,0)}_getLastSevenDates(){return[6,5,4,3,2,1,0].map(t=>(new r.a).substractDays(t))}_getDatesWithMentions(){return this._articles.reduce((t,n)=>{const e=new r.a(n.publishedAt).getStringDate();return t[e]?t[e]+=1:t[e]=1,t},{})}getLastWeekMonth(){const t=this._getLastSevenDates().reduce((t,n)=>{const e=n.getMonth();return t[e]?t[e]+=1:t[e]=1,t},{}),n=Object.keys(t).reduce((n,e)=>{const r=t[n],o=t[e],i=r<o,c=r>o;return i&&!c||!i&&c?n:e},0);return(new r.a).getMonthInRussianNominative(n)}getLastWeekStats(){const t=this._getLastSevenDates(),n=this._getDatesWithMentions();return t.map(t=>{const e=t.getStringDate(),r=n[e],o="".concat(t.getDate(),", ").concat(t.getTwoLetterDayInRussian()),i=(r||0)/this.getAllMentions()*100;return{date:o,mentions:Number.parseInt(i)}})}}const i=window.localStorage.getItem("keyword"),c=JSON.parse(window.localStorage.getItem("articles"));if(i&&c){const t=new o(c,i),n=document.querySelector(".container__about");n.querySelector(".title").textContent="Вы спросили: «".concat(i,"»"),n.querySelector(".analytics__all").textContent=t.getAllMentions(),n.querySelector(".analytics__titles").textContent=t.getTitleMentions();const e=t.getLastWeekStats();[0,1,2,3,4,5,6].forEach(t=>{const n=e[t],r=document.querySelector(".row__".concat(t));r.querySelector(".analytics__date").textContent=n.date;const o=r.querySelector(".analytics__bar");o.style.width="".concat(n.mentions,"%"),o.textContent=n.mentions});const r=t.getLastWeekMonth();document.querySelector(".analytics__month").textContent="Дата (".concat(r,")")}}]);