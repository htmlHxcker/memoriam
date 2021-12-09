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
					<form action="#" className="menu-form">
						<div className="container--options">
							<h3 className="text-grey-blue fs-400">Select Theme</h3>
							<div className="flex container--buttons">
								<MenuSelection value="Numbers" wide={true} />
								<MenuSelection value="Icons" wide={true} />
							</div>
						</div>
						<div className="container--options">
							<h3 className="text-grey-blue fs-400">Number of Players</h3>
							<div className="flex container--buttons">
								<MenuSelection value="1" />
								<MenuSelection value="2" />
								<MenuSelection value="3" />
								<MenuSelection value="4" />
							</div>
						</div>
						<div className="container--options">
							<h3 className="text-grey-blue fs-400">Grid Size</h3>
							<div className="flex container--buttons">
								<MenuSelection value="4x4" wide={true} />
								<MenuSelection value="6x6" wide={true} />
							</div>
						</div>
						<PrimaryButton value="Start Game" />
					</form>
				</Modal>
			</div>
		</div>
	);
};

export default StartScreen;
