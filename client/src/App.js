import React from "react";
import Modal from "./components/Modal";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImageCollection } from "./store/images-actions";

const Main = React.lazy(() => import('./layout/Main'));

const App = () => {

    const dispatch = useDispatch();

    //collecting all states from redux store
    const category = useSelector(state => state.image.category);
    const isRenderedd = useSelector(state => state.image.firstRendered);
    const showModal = useSelector(state => state.modal.showModal);
    const currentPage = useSelector(state => state.image.currentPage);

    useEffect(() => {
        if (isRenderedd) {
            dispatch(fetchImageCollection(category, currentPage));
        }
    }, [dispatch, category, currentPage, isRenderedd]);

    return (
        <>
            <div className="h-screen text-center">
                <Main />
            </div>
            {showModal && <Modal />}
        </>
    );
}

export default App;
