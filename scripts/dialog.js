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
const tgsnChatBtn = document.getElementById('tgsnChat')
const tgsn2ChatBtn = document.getElementById('tgsn2Chat')
const bsChatBtn = document.getElementById('bsChat')
const bs2ChatBtn = document.getElementById('bs2Chat')
const v2Btn = document.getElementById('v2')
  
scheduleBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('schedule.html', 'modal')
  //ipcRenderer.send('open-information-dialog')
})

v2.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  //let modal = window.open('schedule.html', 'modal')
  ipcRenderer.send('open-information-dialog')
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

tgsnChatBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('https://www.twitch.tv/embed/thegamingsaloonnetwork/chat?darkpopout', 'chat')
  //ipcRenderer.send('open-information-dialog')
})

tgsn2ChatBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('https://www.twitch.tv/embed/thegamingsaloonnetwork2/chat?darkpopout', 'chat')
  //ipcRenderer.send('open-information-dialog')
})


bsChatBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('https://www.twitch.tv/embed/battlesaloon/chat?darkpopout', 'chat')
  //ipcRenderer.send('open-information-dialog')
})


bs2ChatBtn.addEventListener('click', (event) => {
    // renderer process (mainWindow)
  let modal = window.open('https://www.twitch.tv/embed/battlesaloon2/chat?darkpopout', 'chat')
  //ipcRenderer.send('open-information-dialog')
})

ipcRenderer.on('information-dialog-selection', (event, index) => {
  let message = 'This will be the last build for v1.x. Join the Discord at https://discord.gg/0n4kMmEMe1B1ZHuw for more information about v2.0.0!';
})