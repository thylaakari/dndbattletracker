if(!self.define){let e,t={};const n=(n,r)=>(n=new URL(n+".js",r).href,t[n]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=t,document.head.appendChild(e)}else e=n,importScripts(n),t()})).then((()=>{let e=t[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(t[l])return;let i={};const o=e=>n(e,l),d={module:{uri:l},exports:i,require:o};t[l]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(s(...e),i)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"dndbattletracker"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/dndbattletracker/css/app.dbd8b42e.css",revision:null},{url:"/dndbattletracker/css/chunk-vendors.a4c9f855.css",revision:null},{url:"/dndbattletracker/fonts/materialdesignicons-webfont.0766edc9.eot",revision:null},{url:"/dndbattletracker/fonts/materialdesignicons-webfont.714a4eee.ttf",revision:null},{url:"/dndbattletracker/fonts/materialdesignicons-webfont.e659bf56.woff",revision:null},{url:"/dndbattletracker/fonts/materialdesignicons-webfont.fbaef2a9.woff2",revision:null},{url:"/dndbattletracker/index.html",revision:"3de9fe7fdced18a79cb605c075286342"},{url:"/dndbattletracker/js/app.2494b2ee.js",revision:null},{url:"/dndbattletracker/js/chunk-vendors.8b2419a6.js",revision:null},{url:"/dndbattletracker/manifest.json",revision:"9e782e99297d44d420d74198edbb1392"},{url:"/dndbattletracker/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
