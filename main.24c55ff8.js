parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var c=document.querySelector(".game-field"),s=document.querySelector(".start"),i=document.querySelector(".message_start"),u=document.querySelector(".message_win"),d=document.querySelector(".message_lose"),f=document.querySelector(".game-score"),l=document.querySelector(".controls"),m=0,v=2048,y=4;function h(){return[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}var w=h(),g=document.createElement("button");function A(){return g.classList.add("restart","button"),g.textContent="Restart",g}function p(){s.remove(),l.append(A()),i.classList.add("message_hidden"),k(),k(),b(),document.addEventListener("keyup",j)}function L(){w=h(),p(),f.innerText=0,m=0,u.classList.add("message_hidden"),d.classList.add("message_hidden")}function b(){for(var e=0;e<y;e++)for(var r=0;r<y;r++){var t=c.rows[e].cells[r];t.classList="field-cell",t.textContent="".concat(w[e][r]),w[e][r]>0?(t.classList.add("field-cell--".concat(w[e][r])),t.textContent="".concat(w[e][r])):t.textContent=""}}function k(){var e=Math.floor(Math.random()*y),r=Math.floor(Math.random()*y);0===w[e][r]?(w[e][r]=Math.random()<=.9?2:4,U()):k()}function S(r){var t=r.filter(function(e){return e>0}),n=y-t.length,o=Array(n).fill(0);return t=[].concat(e(o),e(t))}function _(e){for(var r=h(),t=0;t<y;t++)for(var n=0;n<y;n++)r[t][n]=e[t][n];return r}function q(e,r){for(var t=0;t<y;t++)for(var n=0;n<y;n++)if(e[t][n]!==r[t][n])return!0;return!1}function E(e){var r=!1,t=!1;switch(e){case"ArrowRight":break;case"ArrowLeft":w=x(w),r=!0;break;case"ArrowDown":w=M(w,1),t=!0;break;case"ArrowUp":w=x(w=M(w,1)),r=!0,t=!0}for(var n=_(w),o=0;o<y;o++)w[o]=S(w[o]),C(w[o]),w[o]=S(w[o]);var a=q(n,w);r&&(w=x(w)),t&&(w=M(w,-1)),a&&k()}function x(){return w.map(function(e){return e.reverse()}),w}function M(e,r){for(var t=h(),n=0;n<y;n++)for(var o=0;o<y;o++)1===r?t[n][o]=e[o][n]:t[o][n]=e[n][o];return t}function C(e){for(var r=y-1;r>=1;r--)e[r]===e[r-1]&&(e[r]=e[r]+e[r-1],e[r-1]=0),m+=e[r];return f.innerText=m,R(),e}function j(e){switch(e.key){case"ArrowLeft":E("ArrowLeft"),b();break;case"ArrowUp":E("ArrowUp"),b();break;case"ArrowRight":E("ArrowRight"),b();break;case"ArrowDown":E("ArrowDown"),b()}}function R(){w.map(function(e,r){e[r]===v&&(u.classList.remove("message_hidden"),s.classList.remove("restart"),s.classList.add("start"),document.removeEventListener("keyup",j))})}function U(){for(var e=0,r=0;r<y;r++)for(var t=0;t<y;t++)0===w[r][t]&&e++;0===e&&(d.classList.remove("message_hidden"),u.classList.add("message_hidden"),document.removeEventListener("keyup",j))}s.addEventListener("click",p),g.addEventListener("click",L);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.24c55ff8.js.map