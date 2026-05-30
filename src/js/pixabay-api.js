// #region Imports

// iziToast
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

// axios
import axios from "axios";
// #endregion Imports


const BASE_URL = "https://pixabay.com/api/";
const per_page = 15;


// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query, page). Ця функція повинна приймати два параметри query (пошукове слово, яке є рядком) та page (номер сторінки, яка є числом), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.


export async function getImagesByQuery(query, page) {
    try {
        const response = await axios
  .get(BASE_URL, {
    params: {
        key: "55989739-dc7d8052769ba2cd59e59f330",
        q: `${query}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: per_page,
    },
  })
            
    return response.data;
    } catch (error) {
        throw error;
    } 

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

export function showTotalPagesError() {
    iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
    });
}