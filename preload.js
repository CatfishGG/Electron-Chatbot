const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message) => ipcRenderer.send('chat-message', message),
  onReceiveMessage: (callback) => ipcRenderer.on('chat-reply', (event, response) => callback(response))
});
