import "./HomePage.css";
import worldMap from './worldMap.png';
import React, { useEffect } from 'react';

function HomePage() {
	// SET Page Title
	useEffect(() => {
		document.title = 'Home Page';
	}, []);

	return (
		<div class="HomePage">
			<header>
				
			</header>

			<body>
				<img src={worldMap} alt="World Map" class="floating-map" />
				
				<div class="full-screen" id="purple-masking">

				</div>

				<div class="full-screen flex-vbox">
					<div class="flex-spacer"></div>
				
					{
						//	APP TITLE
					}	
					<div class="flex-hbox">
						<div class="flex-spacer"></div>

						<div class="" id="app-title">
							Country Discovery
						</div>

						<div class="flex-spacer"></div>
					</div>

					{
						//	Text Fields Area
					}
					<div class="flex-vbox">
						<div id="login-container-background">	</div>

						<div class="flex-hbox">
							<div class="flex-spacer"></div>

							<div class="flex-vbox" id="login-container">
								<input type="text" class="textField" name="userName" placeholder="Username"/>
								<input type="password" class="textField" name="password" placeholder="Password"/>
							</div>

							<div class="flex-spacer"></div>
						</div>
					</div>
					
					<div class="flex-spacer"></div>
				</div>
			</body>
		</div>
	);
}

export default HomePage;