import Modal from '../components/Modal';
import TitleText from '../components/TitleText';
import Button from '../components/Button';
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
								{ value: 'Numbers', wide: 'wide' },
								{ value: 'Icons', wide: 'wide' },
							]}
						/>
						<SettingsGroup
							settingsTitle="Number of Players"
							buttons={[
								{ value: '1' },
								{ value: '2' },
								{ value: '3' },
								{ value: '4' },
							]}
						/>
						<SettingsGroup
							settingsTitle="Grid Size"
							buttons={[
								{ value: '4x4', wide: 'wide' },
								{ value: '6x6', wide: 'wide' },
							]}
						/>
						<Button value="Start Game" primaryButton="btn-primary" />
					</form>
				</Modal>
			</div>
		</div>
	);
};

export default StartScreen;
