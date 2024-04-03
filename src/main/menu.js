const { app, BrowserWindow, Menu, ipcMain,ipcRenderer} = require('electron');

// 创建应用程序菜单
const template = [
    {
        label: '文件',
        submenu: [
            { label: '新建', role: 'newFile' },
            { label: '打开', role: 'openFile' },
            { label: '保存', role: 'saveFile' },
            { type: 'separator' },
            { label: '退出', role: 'quit' }
        ]
    },
    {
        label: '编辑',
        submenu: [
            { label: '撤销', role: 'undo' },
            { label: '重做', role: 'redo' },
            { type: 'separator' },
            { label: '剪切', role: 'cut' },
            { label: '复制', role: 'copy' },
            { label: '粘贴', role: 'paste' }
        ]
    },
    {
        label: '视图',
        submenu: [
            { label: '全屏', role: 'togglefullscreen' },
            { label: '开发者工具', role: 'toggledevtools' }
        ]
    },
    {
        label: '帮助',
        submenu: [
            { label: '关于应用', role: 'about' },
            { label: '学习 Electron', click: () => { require('electron').shell.openExternal('https://www.electronjs.org') } }
        ]
    }
];

// 创建菜单栏
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// 创建右键菜单
const contextMenuTemplate = [
    { label: '复制', role: 'copy' },
    { label: '粘贴', role: 'paste' },
    { type: 'separator' },
    {
        label: '自定义操作',
        click: () => {
            console.log('Custom action performed!');
        }
    }
];
// 实例化右键菜单
const contextMenu = Menu.buildFromTemplate(contextMenuTemplate);

// 监听主进程的 'showContextMenu' 事件，当用户在窗口中右键点击时显示右键菜单
ipcMain.on("showContextMenu", (event, position) => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
        contextMenu.popup(focusedWindow, { x: position.x, y: position.y });
    }
});
// 在主进程中引入 main.js 模块
// const mainModule = require('./main.js');