const { app, BrowserWindow } = require('electron')

function createWindow() {
  // 创建一个浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // 允许在渲染进程中使用Node.js API
    }
  })

  // 加载你的前端页面
  win.loadFile('./login.html')
}

// 当Electron准备好时调用createWindow函数
app.whenReady().then(createWindow)