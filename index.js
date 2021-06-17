const { app, BrowserWindow, screen, remote, webContents } = require('electron')
const ipc = require('electron').ipcRenderer
const path = require('path')
const { electron } = require('process')

function createWindow () {
    const{width, height} = screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({
        width: width,
        height: height,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })  
    win.setFullScreen(true);
    
    win.loadFile('index.html')
}

    app.whenReady().then(() => {
        createWindow()
        
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                createWindow()
            }
        })
    })

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
