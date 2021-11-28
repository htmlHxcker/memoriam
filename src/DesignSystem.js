import './styles/utilities.css';

const DesignSystem = () => {
	return (
		<div className="container bg-soapstone">
			<h1>Design System</h1>

			<section id="colors" className="text-pickled-bluewood">
				<h2>
					<span className="text-jungle-mist">1</span> Colors
				</h2>
				<div className="flex">
					<div>
						<div
							style={{
								padding: '3rem 1rem 1rem',
								borderRadius: '15px',
							}}
							className="bg-squash text-soapstone"
						>
							#FDA214
						</div>
						<p>
							<span className="text-jungle-mist">RGB</span> 253, 162, 20
						</p>
						<p>
							<span className="text-jungle-mist">HSL</span> 37, 98%, 54%
						</p>
					</div>
					<div>
						<div
							style={{
								padding: '3rem 1rem 1rem',
								borderRadius: '15px',
							}}
							className="bg-jungle-mist text-firefly"
						>
							#BCCED9
						</div>
						<p>
							<span className="text-jungle-mist">RGB</span> 253, 162, 20
						</p>
						<p>
							<span className="text-jungle-mist">HSL</span> 37, 98%, 54%
						</p>
					</div>
					<div>
						<div
							style={{
								padding: '3rem 1rem 1rem',
								borderRadius: '15px',
							}}
							className="bg-pickled-bluewood text-soapstone"
						>
							#FDA214
						</div>
						<p>
							<span className="text-jungle-mist">RGB</span> 253, 162, 20
						</p>
						<p>
							<span className="text-jungle-mist">HSL</span> 37, 98%, 54%
						</p>
					</div>
					<div>
						<div
							style={{
								padding: '3rem 1rem 1rem',
								borderRadius: '15px',
							}}
							className="bg-firefly text-soapstone"
						>
							#FDA214
						</div>
						<p>
							<span className="text-jungle-mist">RGB</span> 253, 162, 20
						</p>
						<p>
							<span className="text-jungle-mist">HSL</span> 37, 98%, 54%
						</p>
					</div>
				</div>
				<div className="flex">
					<div>
						<div
							style={{
								padding: '3rem 1rem 1rem',
								borderRadius: '15px',
							}}
							className="bg-porcelain text-firefly"
						>
							#FDA214
						</div>
						<p>
							<span className="text-jungle-mist">RGB</span> 253, 162, 20
						</p>
						<p>
							<span className="text-jungle-mist">HSL</span> 37, 98%, 54%
						</p>
					</div>
					<div>
						<div
							style={{
								padding: '3rem 1rem 1rem',
								borderRadius: '15px',
							}}
							className="bg-grey-blue text-porcelain"
						>
							#FDA214
						</div>
						<p>
							<span className="text-jungle-mist">RGB</span> 253, 162, 20
						</p>
						<p>
							<span className="text-jungle-mist">HSL</span> 37, 98%, 54%
						</p>
					</div>
					<div>
						<div
							style={{
								padding: '3rem 1rem 1rem',
								borderRadius: '15px',
							}}
							className="bg-hippie-blue text-soapstone"
						>
							#FDA214
						</div>
						<p>
							<span className="text-jungle-mist">RGB</span> 253, 162, 20
						</p>
						<p>
							<span className="text-jungle-mist">HSL</span> 37, 98%, 54%
						</p>
					</div>
					<div>
						<div
							style={{
								padding: '3rem 1rem 1rem',
								borderRadius: '15px',
							}}
							className="bg-soapstone text-pickled-bluewood"
						>
							#FDA214
						</div>
						<p>
							<span className="text-jungle-mist">RGB</span> 253, 162, 20
						</p>
						<p>
							<span className="text-jungle-mist">HSL</span> 37, 98%, 54%
						</p>
					</div>
				</div>
			</section>

			<section id="typography" style={{ margin: '4rem 0' }}>
				<h2>
					<span className="text-jungle-mist">2</span> Typography
				</h2>
				<p className="fs-900">Atkinson Hyperlegible</p>
				<div className="flex">
					<div
						className="flow"
						style={{ flexBasis: '100%', '--flow-space': '3rem' }}
					>
						<div>
							<p className="text-grey-blue">
								<span className="text-firefly">H1</span> Atkinson Hyperlegible
								Bold: 48px
							</p>
							<p className="fs-800">Donec neo justo eget</p>
						</div>
						<div>
							<p className="text-grey-blue">
								<span className="text-firefly">H2</span> Atkinson Hyperlegible
								Bold: 32px
							</p>
							<p className="fs-600">Felis facilisis fermentum porttitor</p>
						</div>
						<div>
							<p className="text-grey-blue">
								<span className="text-firefly">H3</span> Atkinson Hyperlegible
								Bold: 20px
							</p>
							<p className="fs-500">
								Mauris sit amet orci. Aenean dignissim pellentesque felis.
							</p>
						</div>
					</div>
					<div
						className="flow"
						style={{
							flexBasis: '100%',
							'--flow-space': '3rem',
						}}
					>
						<div>
							<p className="text-grey-blue">
								<span className="text-firefly">Body</span> Atkinson Hyperlegible
								Bold; 18px
							</p>
							<p className="fs-400">
								Donec nec justo eget felis facilisis fermentum. Aliquam
								porttitor mauris sit amet orci. Aenean dignissim pellentesque
								felis.
							</p>
						</div>
						<div>
							<p className="text-grey-blue">
								<span className="text-firefly">6x6 Game Number</span> Atkinson
								Hyperlegible Bold; 44px
							</p>
							<p className="fs-700">4</p>
						</div>
						<div>
							<p className="text-grey-blue">
								<span className="text-firefly">4x4 Game Number</span> Atkinson
								Hyperlegible Bold; 56px
							</p>
							<p className="fs-900">4</p>
						</div>
					</div>
				</div>
			</section>

			<section id="buttons">
				<div>
					<button className="btn menu-btn fs-600">Start Game</button>
				</div>
				<div>
					<button className="btn menu-selection">Numbers</button>
				</div>
				<div>
					<button className="btn menu-btn btn-primary">Restart</button>
					<button className="btn btn-secondary">New Game</button>
				</div>
			</section>
		</div>
	);
};

export default DesignSystem;
