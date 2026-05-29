// #region Imports

// iziToast
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

// axios
import axios from "axios";
// #endregion Imports


const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
    return axios
  .get(BASE_URL, {
    params: {
        key: "55989739-dc7d8052769ba2cd59e59f330",
        q: `${query}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    },
  })
        .then((response) => {
            return response.data; 
        })
        .catch((error) => {
            throw error; 
        });
};


// Notifications functions
export function showEmptyWarning() {
    iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
    });
}

export function showValidationError() {
    iziToast.show({
        message: 'Please, fill out the search field!',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
    });
}

export function showGenericError() {
    iziToast.show({
        message: 'Something went wrong',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
    });
}