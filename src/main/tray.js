const { app, Menu, Tray,BrowserWindow} = require('electron')
const path = require('node:path')

let tray = null
app.whenReady().then(() => {
    tray = new Tray('./src/static/CarbonAnnotationVisibility.png')
    const contextMenu = Menu.buildFromTemplate([
        {label: '系统更新', type: 'radio'},
        {label: '打开主界面', type: 'radio'},
        {label: '帮助', type: 'radio', checked: true},
        {label: '版本说明', type: 'radio'},
        {label: '退出',
            click: () => {
                if (process.platform !== 'darwin') {
                    app.quit()
                } else {
                    app.exit();
                }
            }
        }

    ])
    tray.setToolTip('右键打开软件托盘！')
    tray.setContextMenu(contextMenu)

    let win = BrowserWindow.getFocusedWindow()
    win.on("close",(e)=>{
        if(!win.isFocused()){
            win=null;

        }else{
            e.preventDefault()

        e.preventDefault()
        win.hide();
        }
    })
    tray.on("double-click", () => {
        win.show()
    })
})

let count = 1;
let timer = setInterval(() => {
    count++;
    if (count %2 == 0) {

        tray.setImage(path.join('./src/static/CarbonAnnotationVisibility.png'))
        }else {
        tray.setImage(path.join('./src/static/Carbon3rdPartyConnected.png'))
        }
    },500)

