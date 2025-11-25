import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

export async function installFonts(context: vscode.ExtensionContext): Promise<void> {
	const extensionPath = context.extensionPath;
	const fontsDir = path.join(extensionPath, 'fonts', 'JetBrains_Mono');
	
	if (!fs.existsSync(fontsDir)) {
		vscode.window.showErrorMessage('Fonts directory not found');
		return;
	}

	const fontFiles = fs.readdirSync(fontsDir).filter(file => file.endsWith('.ttf'));
	
	if (fontFiles.length === 0) {
		vscode.window.showErrorMessage('No font files found');
		return;
	}

	let fontsPath: string;
	const platform = os.platform();

	if (platform === 'win32') {
		fontsPath = 'C:\\Windows\\Fonts';
	} else if (platform === 'darwin') {
		fontsPath = path.join(os.homedir(), 'Library', 'Fonts');
	} else {
		fontsPath = path.join(os.homedir(), '.fonts');
	}

	if (!fs.existsSync(fontsPath)) {
		if (platform !== 'win32') {
			fs.mkdirSync(fontsPath, { recursive: true });
		} else {
			vscode.window.showErrorMessage(`Fonts directory does not exist: ${fontsPath}`);
			return;
		}
	}

	let installedCount = 0;
	let errorCount = 0;

	for (const fontFile of fontFiles) {
		const sourcePath = path.join(fontsDir, fontFile);
		const targetPath = path.join(fontsPath, fontFile);

		try {
			if (fs.existsSync(targetPath)) {
				continue;
			}

			fs.copyFileSync(sourcePath, targetPath);
			installedCount++;
		} catch (error) {
			errorCount++;
			console.error(`Failed to install font ${fontFile}:`, error);
		}
	}

	if (installedCount > 0) {
		vscode.window.showInformationMessage(
			`Successfully installed ${installedCount} font file(s)${errorCount > 0 ? `. ${errorCount} error(s) occurred.` : '.'}`
		);
	} else if (errorCount > 0) {
		vscode.window.showWarningMessage(
			`Failed to install fonts. Please install manually or run VS Code as administrator.`
		);
	} else {
		vscode.window.showInformationMessage('Fonts are already installed.');
	}
}

