const {ipcRenderer} = require('electron')
var XMLHttpRequest = require("xhr2").XMLHttpRequest;
var xhr = new XMLHttpRequest();

const scheduleBtn = document.getElementById('schedule')
const articlePop = document.getElementById('articlePopout')
const twitterBtn = document.getElementById('tgsnTwitter')
const tgsnDashBtn = document.getElementById('tgsnDashboard')
const tgsn2DashBtn = document.getElementById('tgsn2Dashboard')
const bsDashBtn = document.getElementById('bsDashboard')
const bs2DashBtn = document.getElementById('bs2Dashboard')
	
scheduleBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('schedule.html', 'modal')
  //ipcRenderer.send('open-information-dialog')
})

articlePop.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('tgs.html', 'articles')
  //ipcRenderer.send('open-information-dialog')
})

tgsnDashBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('https://twitch.tv/thegamingsaloonnetwork/dashboard', 'modal')
  //ipcRenderer.send('open-information-dialog')
})

tgsn2DashBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('https://twitch.tv/thegamingsaloonnetwork2/dashboard', 'modal')
  //ipcRenderer.send('open-information-dialog')
})

bsDashBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('https://twitch.tv/battlesaloon/dashboard', 'modal')
  //ipcRenderer.send('open-information-dialog')
})

bs2DashBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('https://twitch.tv/battlesaloon2/dashboard', 'modal')
  //ipcRenderer.send('open-information-dialog')
})

ipcRenderer.on('information-dialog-selection', (event, index) => {
  let message = 'You selected '
  if (index === 0) message += 'yes.'
  else message += 'no.'
})