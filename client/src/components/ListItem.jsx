import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal';
import { ImageActions } from '../store/images-slice';

const ListItem = ({ text, src }) => {

	const dispatch = useDispatch();

	const ButtonHandler = () => {
		dispatch(modalActions.toggleModal());
		dispatch(ImageActions.getCategory(text));
        dispatch(ImageActions.resetCurrentPage(1));
	};

	return (
		<div className='w-full bg-black rounded-lg relative shadow-lg' onClick={ButtonHandler}>
			<li
				className='text-white  h-16 text-lg flex flex-col justify-center font-bold rounded-lg  opacity-50 cursor-pointer hover:opacity-30'
				value={text}
				style={{
					backgroundImage: `url(${src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			></li>
			<p className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg cursor-pointer'>
				{text}
			</p>
		</div>
	);
};

export default ListItem;
