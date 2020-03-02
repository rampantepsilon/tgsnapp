<h1>The Gaming Saloon Network Hub</h1>
<p><img src="https://github.com/rampantepsilon/tgsnapp/blob/master/src/images/tgsn.jpg?raw=true"></p>
<p>Welcome one and all to the TGSN Hub. The one stop shop for all of The Gaming Saloon Network's content.</p>
<p></p>
<p>Want to make a suggestion for an addition to the app? Want to help test/build the app? Join our discussion on Discord! <a href="https://discord.gg/0n4kMmEMe1B1ZHuw">https://discord.gg/0n4kMmEMe1B1ZHuw</a></p>

<h2>Future Plans</h2>
<ul>
	<li>Add Additional Features to App for The Voiceless Saloon</li>
	<li>QoL Changes to code to make it easier for others to contribute.</li>
	<li>More to come</li>
</ul>

<h2>Using the master build</h2>
<ul>
	<li>Download the git repo to a folder of your choice. For simplicity, this will be stated as [AppDir]</li>
	<li>Make sure you have npm installed. (Use this <a href="https://www.npmjs.com/get-npm">link</a> to install)</li>
	<li>In command prompt/terminal, change to the [AppDir] and run the following command -> npm init
		<ul>
			<li>Please note: Do not change anything that it asks during the initialization or you could potentially break the app.</li>
		</ul>
	</li>
	<li>After npm init is complete run the following commands to get all of the dependencies:
		<ul>
			<li>npm install --save-dev electron</li>
			<li>npm install xhr2</li>
			<li>npm install jquery</li>
			<!--<li>npm install electron-devtools-installer --save-dev --no-audit</li>-->
		</ul>
	</li>
	<li>Once all dependencies are installed, run the following command to start the app -> npm start</li>
	<li>Enjoy!</li>
</ul>

<h2>Changelog</h2>
<h3>v3.0.1</h3>
<ul>
	<li>Minor Patch
		<ul>
			<li>Removed TVS Stream Page</li>
			<li>Removed Staff Page</li>
		</ul>
	</li>
	<li>Removed features will be the last update to this app. Going forward the desktop app will not be updated.</li>
</ul>
<h3>v3.0.0</h3>
<ul>
	<li>Application Overhaul
		<ul>
			<li>All features have been reevaluated to remove unneeded features</li>
			<li>App now starts on Streams Pages showing TGSN with the option to view TVS</li>
			<li>Navigation is at the bottom to closer emulate mobile apps</li>
			<li>Staff redirects to the Staff HQ
				<ul>
					<li>Staff can now login through the app and access all features of the Staff HQ</li>
					<li>Dashboards can now be updated through the app</li>
				</ul>
			</li>
			<li><i>NEW</i> Recent Videos will show the past 15 TGSN Videos</li>
			<li>Added Ability to see the Tips Page, TGSN Schedule, and TGS Articles within the app</li>
		</ul>
	</li>
	<li>Updater Overhaul
		<ul>
			<li>Updater will now check for release versions on launch and notify when new releases are available.</li>
			<li>Clicking the updater when there isn't a release version will instead check if there are any Alpha/Beta builds available</li>
		</ul>
	</li>
</ul>
<h3>v2.0.1-beta</h3>
<ul>
	<li>Staff Tools Overhaul
		<ul>
			<li>Broke Dashboards and Chats from being displayed on Staff Links. Now they are each in respective parts of the app.</li>
			<li>Added OCRemix Radio and YouTube Music Playlist for use on stream. (Staff members contact RampantEpsilon or peacemaker2448 on Discord with questions)</li>
		</ul>
	</li>
	<li>Updated all links to BattleSaloon with links to RampantRuns as per announcement on Discord today</li>
</ul>
<h3>v2.0.0-beta</h3>
<ul>
	<li>Full App Redesign
		<ul>
			<li>App appears to look more like a touchscreen app with bigger buttons for navigation and sections for each navigation</li>
		</ul>
	</li>
	<li>Simul-Cast Overhaul
		<ul>
			<li>Chat is now in a side panel with the ability to only see one chat at a time. (Navigation under chat)</li>
			<li>Chat window can be identified based on name above chat</li>
			<li>Hiding individual streams allows others to take the full height and width of the frame</li>
		</ul>
	</li>
	<li>Staff Links Now Open Individual Windows without being on top of everything. (This may have been an issue seen before but it's completely removed now.)</li>
	<li>Navigation Buttons are in beta state (Since this is new to the app they are very basic and meh buttons right now)</li>
	<li>External Media Page
		<ul>
			<li>Contains Site, Twitter, and Schedule (Currently Twitter is the only one not tied directly to the main window on the app)</li>
			<li>Site allows for full access of the site's functions and can now be updated by staff using Tumblr's button in the upper right to login. (Please note you will have to login then reload the page to see the changes)</li>
		</ul>
	</li>
	<li>TheGamingSaloonNetwork Stream Page
		<ul>
			<li>Articles will be accessible from this page only</li>
			<li>Articles are now in a side panel that can be toggled on or off</li>
			<li>Articles remain with the popout button (Button can only be seen after pulling out the articles)</li>
		</ul>
	</li>
	<li>QoL Improvements to make the app seem more realistic (i.e. Initial 'Loading' Screen, Ability to use Staff Tools while on other pages, etc.)</li>
</ul>
<h3>v1.4.2</h3>
<ul>
	<li>Updated Network Simul-Cast to align with v2.0.0 appearance (Delayed due to bug with scripting)</li>
	<li>Dropped v1.0 from Network Simul-Cast as this is no longer needed</li>
	<li>Added a feature coming to v2.0.0 -> New Pre-Use Loading Screen (Note this is not really needed but it makes the app look like it's doing more. Use a build from master and comment out the lines in scripts/nav.js to remove it.)</li>
	<li>Added Dialog to let everyone know that this will be the last v1.x.x release.</li>
</ul>
<h3>v1.4.1</h3>
<ul>
	<li>Hotfix: Corrected issue where app won't launch due to unexpected issue with the hook method for FFZ. FFZ will be temporarily disabled until this is fixed.</li>
	<li>Updated the Splash Logo for the app</li>
</ul>
<h3>v1.4.0</h3>
<ul>
	<li>Added Dashboard links for staff members (Non-Staff will be able to click the link, but they won't have dashboard access)</li>
	<li>Added Chat Popouts for each channel (Handy for staff during streams. Not so useful for viewers.)</li>
	<li>Added FrankerFaceZ support for chat. Now you can use our custom emotes in the app without installing extensions! (Temporarily only working in chat popout. This will be addressed in a later release.)</li>
	<li>Fixed bug with "Chat Only Mode" in Network Multi-Cast where button wouldn't disappear as intended.</li>
	<li>Updated Navigation Bar to resize properly with the app. No more Multi-Line Navigation bar because of wrapping</li>
	<li>Other QoL improvements. (Actually there isn't anything else, but everyone says this so....)</li>
</ul>
<h3>v1.3.0</h3>
<ul>
	<li>Added TGSN Schedule</li>
	<li>Updated Controls for Network Simul-Cast</li>
	<li>Added Chat Only Mode to Network Simul-Cast</li>
	<li>Added Popout Feature for TGS Articles (Will be refined in v1.3.1)</li>
	<li>Removed (BETA) tag from Network Simul-Cast and Defined as v1.0 (Will remove versioning once testing is completed)</li>
</ul>
<h3>v1.2.3</h3>
<ul>
	<li>Hotfix: Corrected issue where TGS Articles won't update for current week</li>
</ul>
<h3>v1.2.2</h3>
<ul>
	<li>Modified About Menu to be non-clickable</li>
	<li>Removed Update Dialog from About until pushable updates is live</li>
	<li>Added Chat to Network Simul-Cast</li>
	<li>Changed Layout for Network Simul-Cast</li>
	<li>Completed Network Simul-Cast v0.1</li>
</ul>
<h3>v1.2.0</h3>
<ul>
	<li>Added TGSN Twitter</li>
	<li>Updated Navigation Bar to remove clutter</li>
	<li>Added Framework for viewing all network channels simultaneously. (Viewable in 1.2.1 Build)
</ul>
<h3>v1.1.0</h3>
<ul>
	<li>Add a way to view most recent TGS Articles</li>
	<li>Allow users to choose to view Articles alongside watching TGSN</li>
</ul>
<h3>v1.0.0</h3>
<ul>
	<li>Added Support For Seamless Transitions</li>
	<li>Updated Navigation Bar</li>
	<li>Added Taskbar Icon</li>
</ul>
<h3>v0.0.2</h3>
<ul>
	<li>Initial Public Release</li>
	<li>Added Application Menu</li>
	<li>Modified Twitch Embed to allow for resizing</li>
	<li>Created Exectuables for Windows, MacOS, and Linux (64-bit)</li>
</ul>
<h3>v0.0.1</h3>
<ul>
	<li>Initial Build</li>
	<li>Added Pages for TGSN, TGSN2, BattleSaloon, and BattleSaloon2</li>
	<li>Added Page for TGSN Site</li>
	<li>Added Landing Page</li>
</ul>
