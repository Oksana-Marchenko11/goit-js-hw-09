!function(){var e=document.querySelector("[data-start]");console.log(e);var t=document.querySelector("[data-stop]");console.log(t);var o,a=document.querySelector("body");t.disabled=!0,e.addEventListener("click",(function(){o=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(o),e.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.82ec9b98.js.map
