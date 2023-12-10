(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nbody {\n    background-color: #170A08;\n    color: #F1E4E2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.nav-bar {\n    border-bottom: 1px solid #3b3b3b;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n}\n\n.nav-bar button {\n    background-color: #3C0F09;\n    border: none;\n    border-radius: 10px;\n    color: #F1E4E2;\n    font-size: 25px;\n    font-weight: 800;\n    height: 50px;\n    width: 200px;\n}\n\nfooter {\n    border-top: 1px solid #3b3b3b;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 50px;\n    border-radius: 50px;\n    border: 1px solid #3b3b3b;\n    background-color: #3C0F09;\n}\n\n#content img {\n    border-radius: 50px;\n}\n\n.homepage-title {\n    padding: 50px;\n    text-align: center;\n    font-size: 50px;\n}\n\n.homepage-text {\n    text-align: center;\n    font-size: 20px;\n    padding-bottom: 50px;\n    width: 1000px;\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},162:(e,t,n)=>{function o(){}n.d(t,{Z:()=>o})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(){const e=document.querySelector("#content"),t=document.createElement("img");t.src="https://wepik.com/api/image/ai/9abe7624-fda1-414a-93d6-e83276a27b69",t.alt="restaurant";const n=document.createElement("h1");n.textContent="Welcome to the cosmic cuisine corner on Mars!",n.classList.add("homepage-title");const o=document.createElement("p");o.textContent="Embark on a gastronomic journey that's truly out of this world at the most celestial dining destination in the Martian galaxy. Nestled in the heart of the Red Planet's thriving colony, our restaurant beckons Earthlings, Martians, and intergalactic travelers alike to experience a culinary odyssey like never before.",o.classList.add("homepage-text");const r=document.createElement("p");r.textContent="As you step into our sleek and futuristic space, you'll be greeted by the ambient hum of cosmic melodies and the warm glow of bioluminescent Martian flora, creating an atmosphere that transcends the ordinary. The ethereal ambiance sets the stage for an extraordinary dining experience that combines earthly delights with extraterrestrial flavors.",r.classList.add("homepage-text");const a=document.createElement("p");a.textContent="Our menu, curated by culinary visionaries from across the galaxies, showcases the finest ingredients sourced from distant planets and moons. Indulge in dishes that defy gravity and challenge your taste buds to new frontiers. From Nebula Noodles to Galactic Grilled Quasar, each creation is a masterpiece that fuses innovation with tradition.",a.classList.add("homepage-text");const i=document.createElement("p");i.textContent="At the Cosmic Cuisine Corner, we pride ourselves on offering a dining experience that extends beyond the plate. Our expert mixologists concoct otherworldly cocktails that capture the essence of the cosmos, and our panoramic windows provide breathtaking views of the Martian landscape, creating a surreal backdrop for your meal.",i.classList.add("homepage-text");const s=document.createElement("p");s.textContent="Whether you're a space explorer seeking respite from your interstellar adventures or a connoisseur of cosmic delights, the Cosmic Cuisine Corner invites you to savor the extraordinary. Join us as we redefine the boundaries of culinary exploration on Mars—where every bite is a journey to the stars, and every moment is a celestial celebration.",s.classList.add("homepage-text"),e.append(t,n,o,r,a,i,s)}var t=n(162),o=n(379),r=n.n(o),a=n(795),i=n.n(a),s=n(569),c=n.n(s),l=n(565),d=n.n(l),u=n(216),p=n.n(u),m=n(589),f=n.n(m),h=n(426),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals,function(){const e=document.createElement("nav");e.classList.add("nav-bar");for(let t=0;t<3;t++){const n=document.createElement("button");n.textContent=0===t?"Home":1===t?"Menu":"Contact",n.className=0===t?"Home":1===t?"Menu":"Contact",e.append(n)}const t=document.createElement("div");t.setAttribute("id","content");const n=document.createElement("footer");n.textContent="Copyright © Damian Buskens 2023",document.body.append(e,t,n)}(),e(),document.querySelectorAll("button").forEach((n=>{n.addEventListener("click",(()=>{!function(){const e=document.getElementById("content");let t=e.lastElementChild;for(;t;)e.removeChild(t),t=e.lastElementChild}(),"Home"===n.className?e():"Menu"===n.className||(0,t.Z)()}))}))})()})();