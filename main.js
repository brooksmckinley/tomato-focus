const { app, BrowserWindow } = require("electron")
const path = require("path")

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "electron/preload.js")
		}
	})

	win.loadFile("electron/index.html")
}

app.whenReady().then(() => {
	createWindow()
})

app.on("window-all-closed", () => {
	app.quit()
})
