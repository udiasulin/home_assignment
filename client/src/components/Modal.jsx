import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../store/modal';
import { VscChromeClose } from 'react-icons/vsc';
import ButtonList from './ButtonList';
import List from './List';

const Modal = () => {
    
	const changeCategory = useSelector((state) => state.modal.changeList);
	const dispatch = useDispatch();

	const toggleModalHandler = () => {
		dispatch(modalActions.toggleModal());
	};

	return (
		<>
			<div className='flex justify-center items-center  overflow-y-auto fixed inset-0 outline-none focus:outline-none backdrop-brightness-50'>
				<div className='rounded-lg shadow-lg relative flex flex-col space-y-1 w-4/12 bg-white'>
					<button className='text-black w-10 h-10 rounded-full text-3xl self-end m-3' onClick={toggleModalHandler}>
						<VscChromeClose />
					</button>
					<h3 className={`font-bold self-start ${!changeCategory ? 'text-lg px-6' : 'px-14 text-2xl'}`}>
						{!changeCategory ? 'Pick a category' : 'Info'}
					</h3>
					{!changeCategory && <ButtonList />}
					{changeCategory && <List />}
				</div>
			</div>
		</>
	);
};

export default Modal;
