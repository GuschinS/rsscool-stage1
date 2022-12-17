(()=>{"use strict";var e={659:(e,t,r)=>{r.r(t)},283:(e,t,r)=>{r.r(t)},485:(e,t,r)=>{r.r(t)},717:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(842)),u=r(527),c=function(){function e(){this.controller=new n.default,this.view=new u.AppView}return e.prototype.start=function(){var e=this;document.querySelector(".sources").addEventListener("click",(function(t){return e.controller.getNews(t,(function(t){return e.view.drawNews(t)}))})),this.controller.getSources((function(t){return e.view.drawSources(t)}))},e}();t.default=c},853:function(e,t,r){var o,n=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(){return e.call(this,"https://newsapi.org/v2/",{apiKey:"2335fb0913a44c03a20a84ca0c95b280"})||this}return n(t,e),t}(u(r(24)).default);t.default=c},842:function(e,t,r){var o,n=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getSources=function(t){e.prototype.getResp.call(this,{endpoint:"sources"},t)},t.prototype.getNews=function(t,r){for(var o=t.target,n=t.currentTarget;o!==n;){if(o.classList.contains("source__item")){var u=o.getAttribute("data-source-id");return void(n.getAttribute("data-source")!==u&&(n.setAttribute("data-source",u),e.prototype.getResp.call(this,{endpoint:"everything",options:{sources:u}},r)))}o=o.parentNode}},t}(u(r(853)).default);t.default=c},24:function(e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){this.baseLink=e,this.options=t}return e.prototype.getResp=function(e,t){var r=e.endpoint,o=e.options,n=void 0===o?{}:o;void 0===t&&(t=function(){console.error("No callback for GET response")}),this.load("GET",r,t,n)},e.prototype.errorHandler=function(e){if(!e.ok)throw 401!==e.status&&404!==e.status||console.log("Sorry, but there is ".concat(e.status," error: ").concat(e.statusText)),Error(e.statusText);return e},e.prototype.makeUrl=function(e,t){var o=r(r({},this.options),e),n="".concat(this.baseLink).concat(t,"?");return Object.keys(o).forEach((function(e){n+="".concat(e,"=").concat(o[e],"&")})),n.slice(0,-1)},e.prototype.load=function(e,t,r,o){void 0===o&&(o={}),fetch(this.makeUrl(o,t),{method:e}).then(this.errorHandler).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.error(e)}))},e}();t.default=o},527:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AppView=void 0;var o=r(798),n=r(53),u=function(){function e(){this.news=new o.News,this.sources=new n.Sources}return e.prototype.drawNews=function(e){if("articles"in e){var t=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(t)}},e.prototype.drawSources=function(e){if("sources"in e){var t=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(t)}},e}();t.AppView=u,t.default=u},798:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.News=void 0,r(659);var o=function(){function e(){}return e.prototype.draw=function(e){var t=e.length>=10?e.filter((function(e,t){return t<10})):e,r=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");t.forEach((function(e,t){var n=o.content.cloneNode(!0);t%2&&n.querySelector(".news__item").classList.add("alt");var u=n.querySelector(".news__meta-photo");null!=u&&(u.style.backgroundImage="url(".concat(e.urlToImage||"img/news_placeholder.jpg",")")),n.querySelector(".news__meta-author").textContent=e.author||e.source.name,n.querySelector(".news__meta-date").textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"),n.querySelector(".news__description-title").textContent=e.title,n.querySelector(".news__description-source").textContent=e.source.name,n.querySelector(".news__description-content").textContent=e.description,n.querySelector(".news__read-more a").setAttribute("href",e.url),r.append(n)})),document.querySelector(".news").innerHTML="",document.querySelector(".news").appendChild(r)},e}();t.News=o},53:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Sources=void 0,r(283);var o=function(){function e(){}return e.prototype.draw=function(e){var t=document.createDocumentFragment(),r=document.querySelector("#sourceItemTemp");e.forEach((function(e){var o=r.content.cloneNode(!0);o.querySelector(".source__item-name").textContent=e.name,o.querySelector(".source__item").setAttribute("data-source-id",e.id),t.append(o)})),document.querySelector(".sources").append(t)},e}();t.Sources=o},607:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(717));r(485),(new n.default).start()}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var u=t[o]={exports:{}};return e[o].call(u.exports,u,u.exports,r),u.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(607)})();