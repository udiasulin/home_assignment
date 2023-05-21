import { ImageActions } from "./images-slice";

// fetching the data 
export const fetchImageCollection = (category, currentPage) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:5000/images/${category}/${currentPage}`
            );
            if (!response.ok) {
               throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();
            return data;
        };

        try {
            const imageData = await fetchData()
            dispatch(
                ImageActions.getImages({
                    imageCollection: imageData
                })
            );
        } catch (error) {
            dispatch(
                ImageActions.getError({
                    status: false
                })
            );
        }
    };
};

// get initial state for the index.js server call
export const getInitialState = () => {
    return (dispatch, state) => {
        const currentState = state().image.category;
        const getImages = fetchImageCollection(currentState);
        dispatch(getImages)
        dispatch(
            ImageActions.setRendered()
        );
    };
}