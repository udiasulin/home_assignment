import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal';
import { ImageActions } from '../store/images-slice';

const Nav = () => {
    
	const dispatch = useDispatch();

	const toggleModalHandler = () => {
		dispatch(modalActions.toggleModal());
		dispatch(modalActions.typeButtonList());
	};

	const nextPage = () => {
		dispatch(ImageActions.nextPage());
	};

	const prevPage = () => {
		dispatch(ImageActions.prevPage());
	};

	return (
		<div className='flex flex-row col-span-3 w-full gap-5 py-5'>
			<Button
				label='< Previous'
				handleClick={prevPage}
				textSide={'text-left'}
				backgroundColor={'bg-transparent'}
				textColor={'text-black'}
				hoverEffect={'hover:text-gray-500'}
			/>
			<Button
				label='Change Topic'
				handleClick={toggleModalHandler}
				radius={'rounded-full'}
				backgroundColor={'bg-black'}
				textColor={'text-white'}
				hoverEffect={'hover:bg-gray-500'}
			/>
			<Button
				label='Next >'
				handleClick={nextPage}
				textSide={'text-right'}
				backgroundColor={'bg-transparent'}
				textColor={'text-black'}
				hoverEffect={'hover:text-gray-500'}
			/>
		</div>
	);
};

export default Nav;
