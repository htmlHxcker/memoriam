import Modal from '../components/Modal';
import TitleText from '../components/TitleText';
import { PrimaryButton } from '../components/Buttons';
import './Start.Screen.css';
import '../styles/utilities.css';
import SettingsGroup from '../components/SettingsGroup';

const StartScreen = () => {
	return (
		<div>
			<div className="container--titletext">
				<TitleText titleColor={'text-soapstone'} />
			</div>
			<div className="container--modal">
				<Modal>
					<form className="menu-form">
						<SettingsGroup
							settingsTitle="Select Theme"
							buttons={[
								{ value: 'Numbers', wide: true },
								{ value: 'Icons', wide: true },
							]}
						/>
						<SettingsGroup
							settingsTitle="Number of Players"
							buttons={[
								{ value: '1', wide: false },
								{ value: '2', wide: false },
								{ value: '3', wide: false },
								{ value: '4', wide: false },
							]}
						/>
						<SettingsGroup
							settingsTitle="Grid Size"
							buttons={[
								{ value: '4x4', wide: true },
								{ value: '6x6', wide: true },
							]}
						/>
						<PrimaryButton value="Start Game" />
					</form>
				</Modal>
			</div>
		</div>
	);
};

export default StartScreen;
