import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../layout/Nav';
import ErrorBoundary from '../components/ErrorBoundry';
const Card = React.lazy(() => import('../components/Card'));

const Main = () => {
	const allImages = useSelector((state) => state.image.imageCollection);
	const category = useSelector((state) => state.image.category);

	return (
		<>
			<div className='grid grid-cols-3 gap-4 w-[30rem] p-8 aspect-square place-items-center m-auto'>
				<ErrorBoundary fallback={<h2>Unable to fetch images</h2>}>
					<Suspense fallback={<h6>Loading...</h6>}>
						<h1 className='text-3xl text-center col-span-3 font-bold'>{category}</h1>
						<Nav />
						{allImages.map((item) => (
							<Card src={item.largeImageURL} key={item.id} id={item.id} />
						))}
					</Suspense>
				</ErrorBoundary>
			</div>
		</>
	);
};

export default Main;
