const { app, BrowserWindow,Tray } = require('electron')
const path = require('node:path')
let mainWindow;

function createWindow() {
    // 创建主窗口
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true, // 启用远程模块
        }
    })

      // 在窗口创建之后，引入菜单脚本
    require('./src/main/menu.js')
    require('./src/main/tray.js')
    app.on('ready',createWindow)
    // 打开开发者工具
    mainWindow.webContents.openDevTools()

    mainWindow.loadFile('index.html')
}
  require('./src/main/globalShortcart')
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
