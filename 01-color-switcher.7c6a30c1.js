!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=document.body;e.addEventListener("click",(function(e){e.target.disabled=!0,a.disabled=!1,t=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),a.addEventListener("click",(function(a){a.target.disabled=!0,e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.7c6a30c1.js.map
