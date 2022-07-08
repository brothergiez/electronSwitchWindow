const { app, BrowserWindow, ipcMain } = require('electron');
const { browserWindowCreator } = require('./helpers');

function handleNewPage(_, args) {
  browserWindowCreator(args)
}

function createWindow() {
  browserWindowCreator('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('openWindow', handleNewPage);
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
