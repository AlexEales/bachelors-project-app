const path = require('path');
const {app, BrowserWindow} = require('electron');

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600});

    // and load the index.html of the app.
    // win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
    // win.loadURL('http://localhost:3000/')
    win.loadURL('https://alex-year-project-2018.firebaseapp.com/');
}

app.on('ready', createWindow);
