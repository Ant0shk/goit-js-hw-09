var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var r=o("iQIUW");function i(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.5?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.currentTarget.elements.delay.value);const n=Number(e.currentTarget.elements.step.value),o=Number(e.currentTarget.elements.amount.value);r.Notify.warning(`Get valuve: ${t}, ${n}, ${o}`);for(let e=1;e<=o;e+=1)i(e,t).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`),r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`),r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.bd696c22.js.map