const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body;let d;t.addEventListener("click",(function(t){t.target.disabled=!0,e.disabled=!1,d=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(e){e.target.disabled=!0,t.disabled=!1,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.ccfdcaf4.js.map
