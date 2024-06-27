const { app, BrowserWindow } = require('electron/main')
const isDevEnv = process.env.NODE_ENV !== 'development';
const createWindow = () => {
    const win = new BrowserWindow({
        width: 900,
        height: 800
    })

    win.loadFile('./app/index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
        if (isDevEnv) {
            win.webContents.openDevTools();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})