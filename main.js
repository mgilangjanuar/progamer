const { app, BrowserWindow } = require('electron')
const watch = require('electron-reload')
const path = require('path')
const url = require('url')


watch(`${__dirname}/src`, {
  electron: require(`${__dirname}/node_modules/electron`)
})
  
app.on('ready', () => {
  win = new BrowserWindow({
    width: 900,
    height: 594,
    resizable: false,
    fullscreen: false,
    icon: __dirname + 'favicon.ico'
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'main.html'),
    protocol: 'file:',
    slashes: true
  }))
})
