import Button from './Button';
import './SettingsGroup.css';
import '../styles/utilities.css';

const SettingsGroup = ({ settingsTitle, buttons }) => {
	return (
		<div className="container--options">
			<h3 className="text-grey-blue fs-400">{settingsTitle}</h3>
			<div className="flex container--buttons">
				{buttons.map((button) => (
					<Button
						key={button.value}
						value={button.value}
						wide={button.wide}
						menuSelection="menu-selection"
					/>
				))}
			</div>
		</div>
	);
};

export default SettingsGroup;
