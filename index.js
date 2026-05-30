import{a as P,i as a,S as T}from"./assets/vendor-DcHCnVjq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const C="https://pixabay.com/api/",$=15;async function p(s,e){try{return(await P.get(C,{params:{key:"55989739-dc7d8052769ba2cd59e59f330",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:$}})).data}catch{throw error}}function f(){a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"})}function q(){a.show({message:"Please, fill out the search field!",messageColor:"white",backgroundColor:"red",position:"topRight"})}function g(){a.show({message:"Something went wrong",messageColor:"white",backgroundColor:"red",position:"topRight"})}function y(){a.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"red",position:"topRight"})}const w=document.querySelector(".gallery"),L=document.querySelector(".loader"),v=document.querySelector(".load-more");let _=new T(".gallery a");function E(s){const e=s.map(t=>`
          <li class="gallery-item">
             <a class="gallery-link" href="${t.largeImageURL}">
               <img
                   class="gallery-image"
                   src="${t.webformatURL}"
                   data-source="${t.largeImageURL}"
                    alt="${t.tags}"
              />
             </a>

             <div class="gallery-item-information">
                <div class="item-information-wrapper">
                    <h2>Likes</h2>
                    <p>${t.likes}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Views</h2>
                    <p>${t.views}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Comments</h2>
                    <p>${t.comments}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Downloads</h2>
                    <p>${t.downloads}</p>
                </div>
            </div>
         </li>
      `).join("");w.insertAdjacentHTML("beforeend",e),_.refresh()}function U(){w.innerHTML=""}function S(){L.classList.add("is-show")}function b(){L.classList.remove("is-show")}function M(){v.classList.add("is-show")}function c(){v.classList.remove("is-show")}const h=document.querySelector(".form"),m=h.querySelector("input"),k=document.querySelector(".load-more");let i=1,B=15,d,u,R;const O=s=>{if(s.preventDefault(),m.value.trim()==="")return q();i=1,U(),c(),S(),d=m.value.trim(),p(d,i).then(e=>{if(e.hits.length===0)throw new Error("EMPTY_RESULT");E(e.hits),u=Math.ceil(e.totalHits/B);let n=document.querySelector(".gallery-item").getBoundingClientRect();R=n.bottom+n.height}).catch(e=>(e.message==="EMPTY_RESULT"?f():g(),[])).finally(()=>{b(),h.reset(),i+=1,i>=u?(c(),y()):M()})},I=s=>{c(),S(),p(d,i).then(e=>{if(e.hits.length===0)throw new Error("EMPTY_RESULT");E(e.hits),window.scrollBy({top:R*2,left:0,behavior:"smooth"})}).catch(e=>(e.message==="EMPTY_RESULT"?f():g(),[])).finally(()=>{b(),i+=1,i>=u?(hideLoadMore(),y()):M()})};h.addEventListener("submit",O);k.addEventListener("click",I);
//# sourceMappingURL=index.js.map
