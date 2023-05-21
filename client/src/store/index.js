import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal';
import imageReducer from './images-slice'

const store = configureStore({
    reducer: {
        modal: modalReducer,
        image: imageReducer
    }
});


export default store;