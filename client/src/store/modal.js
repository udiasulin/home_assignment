import { createSlice } from '@reduxjs/toolkit';

const initialModalState = { showModal: false, changeList: false, listKey: 0 };

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialModalState,
    reducers: {
        toggleModal(state) {
            state.showModal = !state.showModal;
        },
        typeList(state) {
            state.changeList = true;
        },
        typeButtonList(state) {
            state.changeList = false;
        },
        getKey(state) {
            state.listKey = 1;
        }
    }
})

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;