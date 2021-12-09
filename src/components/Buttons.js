import './Buttons.css';

const Button = ({ value }) => {
	return <input type="button" value={value} className="btn" />;
};

export const MenuButton = ({ value }) => {
	return <input type="button" value={value} className="btn menu-btn fs-600" />;
};

export const MenuSelection = ({ value, wide = false }) => {
	return (
		<input
			type="button"
			value={value}
			className={`btn menu-selection ${wide ? 'menu-selection--wide' : ''}`}
		/>
	);
};

export const PrimaryButton = ({ value }) => {
<<<<<<< HEAD
	return <input type="button" value={value} className="btn btn-primary" />;
=======
	return <input type="button" value={value} className="btn menu-btn " />;
>>>>>>> 28cd8e3fb178835e1736abd8342d8e5e5366015a
};

export const SecondaryButton = ({ value }) => {
	return <input type="button" value={value} className="btn btn-secondary" />;
};

export default Button;
