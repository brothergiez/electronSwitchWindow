const { BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const browserWindowCreator = (page) => {
    const window = new BrowserWindow({
        webPreferences: {
          preload: path.join(__dirname, '../preload.js')
        }
      });
    window.loadURL(url.format({
        pathname: path.join(__dirname, `../views/${page}`),
        protocol: 'file',
        slashes: true
    }))
    // window.webContents.openDevTools();
}

module.exports = browserWindowCreator;