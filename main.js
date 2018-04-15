const electron = require('electron');
const url = require ('url');
const path = require('path');

const {app, BrowserWindow} = electron;



let mainWindow;

//Listen for app to be ready
app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({width: 1200, height: 800});
    //load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
})