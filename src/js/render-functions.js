// #region Imports
// simpleLightBox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// #endregion Imports

const myGallery = document.querySelector(".gallery");
const myLoader = document.querySelector(".loader");

let gallery = new SimpleLightbox('.gallery a');

export function createGallery(images) {
    const markup = images
    .map((image) => {
      return `
          <li class="gallery-item">
             <a class="gallery-link" href="${image.largeImageURL}">
               <img
                   class="gallery-image"
                   src="${image.webformatURL}"
                   data-source="${image.largeImageURL}"
                    alt="${image.tags}"
              />
             </a>

             <div class="gallery-item-information">
                <div class="item-information-wrapper">
                    <h2>Likes</h2>
                    <p>${image.likes}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Views</h2>
                    <p>${image.views}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Comments</h2>
                    <p>${image.comments}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Downloads</h2>
                    <p>${image.downloads}</p>
                </div>
            </div>
         </li>
      `;
    })
        .join("");
    
    myGallery.innerHTML = markup;

    gallery.refresh();
};

export function clearGallery() {
    myGallery.innerHTML = "";
}

export function showLoader() {
    myLoader.classList.add('is-show');
}

export function hideLoader() {
    myLoader.classList.remove('is-show');
}