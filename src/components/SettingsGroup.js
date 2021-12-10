import { MenuSelection } from '../components/Buttons';
import './SettingsGroup.css';
import '../styles/utilities.css';

const SettingsGroup = ({ settingsTitle, buttons }) => {
	return (
		<div className="container--options">
			<h3 className="text-grey-blue fs-400">{settingsTitle}</h3>
			<div className="flex container--buttons">
				{buttons.map((button) => (
					<MenuSelection
						key={button.value}
						value={button.value}
						wide={button.wide}
						className={buttons.indexOf(button) === 1 ? 'active' : ''}
					/>
				))}
			</div>
		</div>
	);
};

export default SettingsGroup;
