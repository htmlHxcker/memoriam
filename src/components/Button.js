import './Button.css';

const Button = ({ value, ...classes }) => {
	return (
		<input
			type="button"
			value={value}
			className={`btn ${Object.values(classes).join(' ')}`}
		/>
	);
};

export default Button;
