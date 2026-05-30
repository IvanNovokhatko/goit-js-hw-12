// #region Imports

// Request function
import { getImagesByQuery, showEmptyWarning, showValidationError, showGenericError, showTotalPagesError } from "./js/pixabay-api.js"

// Remder functions
import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton} from "./js/render-functions.js"

// #endregion Imports

const myForm = document.querySelector(".form");
const myFormInput = myForm.querySelector("input");
const myLoadMore = document.querySelector(".load-more");

// Page
let page = 1;
let per_page = 15;

// Search Word
let searchWord;
let totalPages;

// cardWidth
let cardWidth;

// Add the event-listener to myForm
const onMyFormSubmit = (event) => {
    event.preventDefault();

    if (myFormInput.value.trim() === "") {
        return showValidationError();
    };

    page = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();

    searchWord = myFormInput.value.trim();

    getImagesByQuery(searchWord, page)
        .then((data) => {
            if (data.hits.length === 0) {
      throw new Error("EMPTY_RESULT");
            }

            createGallery(data.hits);
            totalPages = Math.ceil(data.totalHits / per_page);

            let elem = document.querySelector(".gallery-item");
            let rect = elem.getBoundingClientRect();
            cardWidth = rect.bottom + rect.height;
        })
        .catch((error) => {
            const message = error.message === "EMPTY_RESULT" 
            ? showEmptyWarning()
            : showGenericError();
      
      return []; 
        })
        .finally(() => {
            hideLoader();
            myForm.reset();
            page += 1;

            if (page >= totalPages) {
                hideLoadMoreButton();
                showTotalPagesError();
            } else {
                showLoadMoreButton();
            };
  });
};

// Add the evennt-listener to myLoadMore
const onMyLoadMoreClick = (event) => {
    hideLoadMoreButton();
    showLoader();

    getImagesByQuery(searchWord, page)
        .then((data) => {
            if (data.hits.length === 0) {
      throw new Error("EMPTY_RESULT");
            }

            createGallery(data.hits);
            window.scrollBy({
                top: cardWidth * 2,
                left: 0,
                behavior: "smooth",
            });
        })
        .catch((error) => {
            const message = error.message === "EMPTY_RESULT" 
            ? showEmptyWarning()
            : showGenericError();
      
      return []; 
        })
        .finally(() => {
            hideLoader();
            page += 1;

            if (page >= totalPages) {
                hideLoadMore();
                showTotalPagesError();
            } else {
                showLoadMoreButton();
            };
  });
}

myForm.addEventListener("submit", onMyFormSubmit);
myLoadMore.addEventListener("click", onMyLoadMoreClick)

