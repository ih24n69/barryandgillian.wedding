!function e(t,r,n){function o(i,c){if(!r[i]){if(!t[i]){var a="function"==typeof require&&require;if(!c&&a)return a(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=r[i]={exports:{}};t[i][0].call(l.exports,function(e){var r=t[i][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=e("./hero"),u=n(o),i=e("./primary-nav"),c=n(i);(0,u["default"])(),(0,c["default"])()},{"./hero":2,"./primary-nav":3}],2:[function(e,t,r){"use strict";function n(){var e=$(window).height(),t=document.querySelector(".hero-bg"),r=document.querySelector(".hero"),n=e-200+"px";t.style.height=n,r.style.opacity="1"}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n},{}],3:[function(e,t,r){"use strict";function n(){var e=document.body,t=document.querySelector(".js-nav-trigger"),r=document.querySelector(".container");document.querySelector(".js-primary-nav");e.classList.remove("no-js"),e.classList.add("js"),t.addEventListener("click",function(){this.classList.toggle("open"),r.classList.toggle("js-nav-active")})}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n},{}]},{},[1]);
//# sourceMappingURL=app.js.map
