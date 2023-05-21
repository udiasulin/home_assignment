import { createSlice } from '@reduxjs/toolkit';

const initialImageState = {
    loading: false,
    imageCollection: [],
    category: 'Horse',
    currentPage: 1,
    index: 0,
    firstRendered: false,
    notification: false
};

const ImageSlice = createSlice({
    name: 'image',
    initialState: initialImageState,
    reducers: {
        getImages(state, action) {
            state.imageCollection = action.payload.imageCollection
        },
        getError(state, action) {
            state.notification = {
                status: action.payload.status
            };
        },
        getCategory(state, action) {
            state.category = action.payload;
        },
        nextPage(state) {
            state.currentPage++;
            if (state.imageCollection.length <= state.currentPage) {
                state.currentPage = 1;
            }
        },
        prevPage(state) {
            state.currentPage--;
            if (state.currentPage < 1) {
                state.currentPage = 1;
            }
        },
        setIndex(state, action) {
            state.index = action.payload
        },
        setRendered(state) {
            state.firstRendered = true;
        },
        resetCurrentPage(state, action) {
            state.currentPage = action.payload;
        },

    },

})

export const ImageActions = ImageSlice.actions;

export default ImageSlice.reducer;