const {ipcRenderer} = require('electron')
var XMLHttpRequest = require("xhr2").XMLHttpRequest;
var xhr = new XMLHttpRequest();

const scheduleBtn = document.getElementById('schedule')
const articlePop = document.getElementById('articlePopout')
const twitterBtn = document.getElementById('tgsnTwitter')
	
scheduleBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('schedule.html')
  //ipcRenderer.send('open-information-dialog')
})

articlePop.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('tgs.html')
  //ipcRenderer.send('open-information-dialog')
})

ipcRenderer.on('information-dialog-selection', (event, index) => {
  let message = 'You selected '
  if (index === 0) message += 'yes.'
  else message += 'no.'
})