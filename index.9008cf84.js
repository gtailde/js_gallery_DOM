document.querySelector(".gallery__list").querySelectorAll(".list-item").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t,r=e.target;"IMG"===r.tagName?t=r.parentElement.getAttribute("href"):"A"===r.tagName&&(t=r.getAttribute("href")),t&&(document.querySelector("#largeImg").src=new URL(t,window.location.origin).href)})});
//# sourceMappingURL=index.9008cf84.js.map
