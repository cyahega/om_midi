function openUrl_legacy(url: string): void {
	try {
		const html = new File(Folder.temp.fsName + "/tmp.html");
		html.open("w");
		html.writeln(`<html><head><meta http-equiv="refresh" content="0; url=${url}"></head></html>`);
		html.close();
		html.execute();
	} catch (e) {
		// alert("Error, Can not open.");
	};
}

/**
 * 打开网址。
 * @param url - 网址。
 */
export default function openUrl(url: string): void {
	let cmd: string;
	if ($.os.indexOf("Win") !== -1) { // Windows
		cmd = `explorer.exe ${url}`;
	} else { // macOS
		cmd = `open ${url}`;
	}
	try {
		system.callSystem(cmd);
	} catch (error) {
		// alert(error);
	}
}
