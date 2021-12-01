import './Buttons.css';

const Button = ({ value }) => {
	return <input type="button" value={value} className="btn" />;
};

export const MenuButton = ({ value }) => {
	return <input type="button" value={value} className="btn menu-btn fs-600" />;
};

export const MenuSelection = ({ value }) => {
	return <input type="button" value={value} className="btn menu-selection" />;
};

export const PrimaryButton = ({ value }) => {
	return <input type="button" value={value} className="btn menu-btn " />;
};

export const SecondaryButton = ({ value }) => {
	return <input type="button" value={value} className="btn btn-secondary" />;
};

export default Button;
