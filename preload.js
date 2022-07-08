const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI',{
  settingPage: () => ipcRenderer.invoke('openWindow', 'setting.html'),
  homePage: () => ipcRenderer.invoke('openWindow', 'index.html')
})