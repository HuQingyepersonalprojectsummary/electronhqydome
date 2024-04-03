const { app, BrowserWindow } = require('electron')
const path = require('node:path')

let mainWindow

function createWindow() {
    // 创建主窗口
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true, // 启用远程模块
        }
    })

    // 在窗口创建之后，引入菜单脚本
    require('./src/main/menu.js')

    // 打开开发者工具
    mainWindow.webContents.openDevTools()

    mainWindow.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})