import React, {Suspense} from 'react';
const ListItem = React.lazy(() => import('./ListItem'));

const categories = [
	{
		name: 'Cats',
		image_url:
			'https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=711&q=80',
	},
	{
		name: 'Dogs',
		image_url:
			'https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
	},
	{
		name: 'Horse',
		image_url:
			'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
	},
	{
		name: 'Seal',
		image_url:
			'https://images.unsplash.com/photo-1557657043-23eec69b89c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
	},
	{
		name: 'Monkey',
		image_url:
			'https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
	},
];

const ButtonList = () => {
	return (
		<Suspense fallback={<h6>Loading...</h6>}>
			<div className='rounded overflow-hidden space-y-3 p-6 flex flex-col'>
				{categories.map((item, i) => (
					<ListItem text={item.name} key={i} src={item.image_url} />
				))}
			</div>
		</Suspense>
	);
};

export default ButtonList;
