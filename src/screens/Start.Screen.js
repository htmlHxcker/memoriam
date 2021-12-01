import Modal from '../components/Modal';
import TitleText from '../components/TitleText';
import { MenuSelection, PrimaryButton } from '../components/Buttons';
import './Start.Screen.css';
import '../styles/utilities.css';
const StartScreen = () => {
	return (
		<div>
			<div className="container--titletext">
				<TitleText titleColor={'text-soapstone'} />
			</div>
			<div className="container--modal">
				<Modal>
					<form action="#">
						<h3 className="text-grey-blue fs-400">Select Theme</h3>
						<div className="flow flex">
							<MenuSelection value="Numbers" />
							<MenuSelection value="Icons" />
						</div>
						<h3 className="text-grey-blue fs-400">Number of Players</h3>
						<div className="flow ">
							<MenuSelection value="1" />
							<MenuSelection value="2" />
							<MenuSelection value="3" />
							<MenuSelection value="4" />
						</div>
						<h3 className="text-grey-blue fs-400">Grid Size</h3>
						<div className="flow ">
							<MenuSelection value="4x4" />
							<MenuSelection value="6x6" />
						</div>
						<PrimaryButton value="Start Game" />
					</form>
				</Modal>
			</div>
		</div>
	);
};

export default StartScreen;
