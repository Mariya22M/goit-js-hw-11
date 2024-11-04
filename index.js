/* empty css                      */import{i as p,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const u=document.querySelector(".search_bar"),d=document.querySelector(".loader"),m="Sorry, there are no images matching your search query. Please try again!",l=r=>document.dispatchEvent(new CustomEvent("imagesFetched",{detail:r}));function y(r,s){let a=u.value.trim();a&&(s.set("q",a),d.style.display="block",fetch(`${r}${s}`).then(e=>(e.ok||n("Sorry, response is not ok"),e.json())).then(e=>{e.total?(l(e.hits),console.log(e.hits)):(n(m),l([])),c()}).catch(e=>{n(e),l([]),c()}))}function n(r){p.error({message:r,position:"topRight",color:"red",theme:"dark"})}function c(){d.style.display="none",u.value=""}const h=document.querySelector(".gallery");function g(r){let s="";r.forEach(e=>{s+=`
            <li class="gallery_item">
                <a class="gallery_link" href="${e.largeImageURL}" title="${e.tags}">
                    <img
                        class="gallery-image"
                        src="${e.webformatURL}"
                        alt="${e.tags}"
                    />
                </a>
                <ul class="gallery_info">
                    <li><span class="bold_text">Likes</span><p class="text">${e.likes}</p></li>
                    <li><span class="bold_text">Views</span><p class="text">${e.views}</p></li>
                    <li><span class="bold_text">Comments</span><p class="text">${e.comments}</p></li>
                    <li><span class="bold_text">Downloads</span><p class="text">${e.downloads}</p></li>
                </ul>
            </li>
        `}),h.innerHTML=s,new f(".gallery a",{nav:!0,overlay:!0,captions:!0,captionSelector:"self",captionType:"attr",captionData:"title",captionPosition:"bottom",captionDelay:250}).refresh()}const b=document.querySelector("form"),L="https://pixabay.com/api/?",v=new URLSearchParams({key:"46749030-b6cef6a6b69e043ecf4444c1b",image_type:"photo",orientation:"horizontal"});b.addEventListener("submit",r=>{r.preventDefault(),y(L,v)});document.addEventListener("imagesFetched",r=>{g(r.detail)});
//# sourceMappingURL=index.js.map
