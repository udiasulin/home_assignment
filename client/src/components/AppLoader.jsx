
const Apploader = () => {
	
    return (
		<div className='flex items-center justify-center h-screen'>
			<div className='relative'>
				<div
					className='w-12 h-12 rounded-full absolute
                            border-8 border-solid border-gray-200'
				></div>

				<div
					className='w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-solid border-black border-t-transparent shadow-md'
				></div>
			</div>
		</div>
	);
};

export default Apploader;
