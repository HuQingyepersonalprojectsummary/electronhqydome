const { ipcRenderer } = require('electron');

window.onload = () => {
    window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const mousePosition = { x: e.clientX, y: e.clientY };
        ipcRenderer.send('showContextMenu', mousePosition);
    });
};