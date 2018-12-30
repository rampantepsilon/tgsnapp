const {ipcRenderer} = require('electron')
var XMLHttpRequest = require("xhr2").XMLHttpRequest;
var xhr = new XMLHttpRequest();

const informationBtn = document.getElementById('information-dialog')
const tgsnDashBtn = document.getElementById('tgsn-dashboard')

informationBtn.addEventListener('click', (event) => {
  	// renderer process (mainWindow)
	let modal = window.open('tgsinformation.html')
  //ipcRenderer.send('open-information-dialog')
})

tgsnDashBtn.addEventListener('click', (event) => {
  	// renderer process (mainWindow)
	let modal = window.open('tgsndashboard.html')
  //ipcRenderer.send('open-information-dialog')
})

ipcRenderer.on('information-dialog-selection', (event, index) => {
  let message = 'You selected '
  if (index === 0) message += 'yes.'
  else message += 'no.'
})

function testWin () {
	
}