const e=document.querySelector("[data-start]");console.log(e);const t=document.querySelector("[data-stop]");console.log(t);const o=document.querySelector("body");let d;t.disabled=!0,e.addEventListener("click",(function(){d=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(d),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.7ce4cc16.js.map
