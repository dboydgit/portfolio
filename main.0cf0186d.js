parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var e=document.querySelector(".typewriter");e.addEventListener("animationend",function(e){"typewriter"===e.animationName&&setTimeout(function(){e.target.style["border-right-color"]="transparent"},500)});var t=document.querySelectorAll(".btm-nav-item"),o=document.querySelector("#tech"),c=document.querySelector("#projects"),r=document.querySelector("#education");document.addEventListener("scroll",function(e){t.forEach(function(e){return e.classList.remove("active")}),window.scrollY<o.offsetTop?t[0].classList.add("active"):window.scrollY<c.offsetTop?t[1].classList.add("active"):window.scrollY<r.offsetTop?t[2].classList.add("active"):t[3].classList.add("active")});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/portfolio/main.0cf0186d.js.map