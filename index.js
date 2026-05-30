import{a as T,i as l,S as C}from"./assets/vendor-DcHCnVjq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const $="https://pixabay.com/api/",q=15;async function p(s,e){try{return(await T.get($,{params:{key:"55989739-dc7d8052769ba2cd59e59f330",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:q}})).data}catch(r){throw r}}function f(){l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"})}function _(){l.show({message:"Please, fill out the search field!",messageColor:"white",backgroundColor:"red",position:"topRight"})}function g(){l.show({message:"Something went wrong",messageColor:"white",backgroundColor:"red",position:"topRight"})}function y(){l.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"red",position:"topRight"})}const w=document.querySelector(".gallery"),L=document.querySelector(".loader"),v=document.querySelector(".load-more");let U=new C(".gallery a");function E(s){const e=s.map(r=>`
          <li class="gallery-item">
             <a class="gallery-link" href="${r.largeImageURL}">
               <img
                   class="gallery-image"
                   src="${r.webformatURL}"
                   data-source="${r.largeImageURL}"
                    alt="${r.tags}"
              />
             </a>

             <div class="gallery-item-information">
                <div class="item-information-wrapper">
                    <h2>Likes</h2>
                    <p>${r.likes}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Views</h2>
                    <p>${r.views}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Comments</h2>
                    <p>${r.comments}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Downloads</h2>
                    <p>${r.downloads}</p>
                </div>
            </div>
         </li>
      `).join("");w.insertAdjacentHTML("beforeend",e),U.refresh()}function k(){w.innerHTML=""}function S(){L.classList.add("is-show")}function b(){L.classList.remove("is-show")}function M(){v.classList.add("is-show")}function a(){v.classList.remove("is-show")}const m=document.querySelector(".form"),h=m.querySelector("input"),B=document.querySelector(".load-more");let i=1,R=15,u,n,P;const O=async s=>{if(s.preventDefault(),h.value.trim()==="")return _();i=1,k(),a(),S(),u=h.value.trim();try{const e=await p(u,i);if(e.hits.length===0)throw new Error("EMPTY_RESULT");E(e.hits),n=Math.ceil(e.totalHits/R),P=document.querySelector(".gallery-item").getBoundingClientRect().height,i>=n?(a(),y()):M()}catch(e){return e.message==="EMPTY_RESULT"?f():g(),[]}finally{b(),m.reset()}},H=async s=>{a(),S(),i+=1;try{const e=await p(u,i);if(e.hits.length===0)throw new Error("EMPTY_RESULT");E(e.hits),n=Math.ceil(e.totalHits/R),window.scrollBy({top:P*2,left:0,behavior:"smooth"}),i>=n?(a(),y()):M()}catch(e){return e.message==="EMPTY_RESULT"?f():g(),[]}finally{b()}};m.addEventListener("submit",O);B.addEventListener("click",H);
//# sourceMappingURL=index.js.map
