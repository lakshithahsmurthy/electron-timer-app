<<<<<<< HEAD
// import { app, ipcMain, BrowserWindow } from 'electron';
const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain

const path = require('path')
const url = require('url')
const shelljs = require('shelljs')
=======
// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
>>>>>>> dc1585b235a00bb6842ee2fd0e56fd94fdc1123e

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
      width: 400,
      height: 200,
      frame: false,
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

//SCAN FUNCTION

ipcMain.on('1-min-scan', (event) => {
  const command = `(cd C:\Users\Admin\AppData\Local\Programs\quickasyst\resources) & (echo Antivirus Active: >> av.txt) & (WMIC /Node:localhost /Namespace:\\root\SecurityCenter2 Path AntiVirusProduct Get displayName /Format:List >> av.txt) & (REG QUERY HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\System\ /v EnableLUA) & (netsh advfirewall set allprofiles state on) & (echo . >> fw.txt) & (echo. >> fw.txt) & (echo Firewall Profiles: >> fw.txt) & (netsh advfirewall show allprofiles >> fw.txt) & (sigcheck -e -vt -v C:\Windows >> sig1.txt) & (sigcheck -e C:\Windows\System32\drivers >> sig2.txt) & (echo SCAN REPORT > sr.txt) & (echo. >> sr.txt)  & (echo Yes | copy sr.txt+av.txt+fw.txt+sig1.txt+sig2.txt Report.txt) & (del sr.txt av.txt fw.txt sig1.txt sig2.txt)`;
  shelljs.config.execPath  = "C:\Program Files\nodejs\node_modules\npm\bin";
  shelljs.exec(command, {async:true});
})

ipcMain.on('read-report', (event) => {
  const command = `(cd C:\\Users\\Admin\\AppData\\Local\\Programs\\quickasyst\\resources\\Report.txt)`;
  shelljs.exec(command, {async:true});
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
