const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 700,
        height: 400,
        resizable: false,
        autoHideMenuBar: true,
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);

});