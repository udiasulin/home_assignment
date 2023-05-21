import { useSelector } from 'react-redux';
import { AiOutlineLike, AiOutlineDownload, AiOutlineEye } from 'react-icons/ai';

const List = () => {

	const currentIndex = useSelector((state) => state.image.index);
	const allImages = useSelector((state) => state.image.imageCollection);

	return (
		<div className='py-5 text-center flex flex-col items-center space-y-6 p-10'>
			<img src={allImages[currentIndex].largeImageURL} alt='current' className='w-full rounded-lg shadow-lg' />
			<div className='flex items-center text-xl sm:flex-col'>
				<p className='text-black'>uploaded by:</p>
				<p>{allImages[currentIndex].user}</p>
			</div>
			<div className='flex justify-evenly w-full sm:flex-col'>
				<span className='flex items-center'>
					<AiOutlineLike size={24} />
					<p className='text-lg'>{allImages[currentIndex].likes}</p>
				</span>
				<span className='flex items-center'>
					<AiOutlineDownload size={24} />
					<p className='text-lg'>{allImages[currentIndex].downloads}</p>
				</span>
				<span className='flex items-center'>
					<AiOutlineEye size={24} />
					<p className='text-lg'>{allImages[currentIndex].views}</p>
				</span>
			</div>
		</div>
	);
};

export default List;
