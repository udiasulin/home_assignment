
const Button = ({ label, handleClick, textSide, backgroundColor, textColor, radius, hoverEffect }) => {
	
    return (
		<>
			<button
				className={`bg-black-50 w-full h-8 text-sm ${textSide} px-2 ${backgroundColor} ${textColor} ${radius} ${hoverEffect}`}
				onClick={handleClick}
			>
				{label}
			</button>
		</>
	);
};

export default Button;
