import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal';
import { ImageActions } from '../store/images-slice';
import { useSelector } from 'react-redux';

const Card = ({ src, id }) => {

	const dispatch = useDispatch();
	const allImages = useSelector((state) => state.image.imageCollection);

	const toggleModalHandler = () => {
    
		dispatch(modalActions.toggleModal());
		dispatch(modalActions.typeList());
		dispatch(ImageActions.setIndex(getIndex(id)));
	};

    // getting index of the clicked photo 
	const getIndex = (id) => {
		const index = allImages.findIndex((item) => item.id === id);
		return index;
	};

	return (
		<>
			<div
				className='w-full bg-transparent rounded-lg relative text-center hover:bg-black'

			>
				<div
					className='w-full pb-1/2 aspect-square rounded-md hover:cursor-pointer  hover:opacity-50 shadow-2xl relative'
					style={{
						backgroundImage: `url(${src})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
					onClick={toggleModalHandler}
				></div>
			</div>
		</>
	);
};

export default Card;
