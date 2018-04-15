const electron = require('electron');
const url = require ('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;



let mainWindow;
let addWindow;

//Listen for app to be ready
app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({width: 1200, height: 800});
    //load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    //Quit windows when closed when closed
    mainWindow.on('close', function(){
        app.quit();
    });

    // Builf menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Inset Menu
    Menu.setApplicationMenu(mainMenu);
});


// SECONDARY WINDOW
// Handle create add window
function createAddWindow() {
    //create new window
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Music Player'});
    //load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addwindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    //Garbage collection handle (dumb memory for closed windows)
    addWindow.on('close', function (){
        addWindow = null;
    })
    
}










// Create menu template
const mainMenuTemplate = [
    {
        label : 'File',
        submenu: [
            {
                label: 'Add item',
                click(){
                    createAddWindow();
                }
            },
            {
                label: 'Clear items'
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit()
                }
            }
        ]
    }
];

// If mac, add empty object to show menu
if(process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

//add developer tools if not in production 
if(proccess.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Developer tools',
        submenu:[
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}