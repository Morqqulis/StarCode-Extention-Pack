import * as vscode from 'vscode';
import { installFonts } from './commands/installFonts';

export function activate(context: vscode.ExtensionContext) {
	const installFontsCommand = vscode.commands.registerCommand('starcode.installFonts', () => {
		installFonts(context);
	});

	context.subscriptions.push(installFontsCommand);

	const shouldShowDialog = context.globalState.get<boolean>('starcode.fontsDialogShown', false);

	if (!shouldShowDialog) {
		vscode.window.showInformationMessage(
			'Установить JetBrains Mono в систему?',
			'Yes',
			'No'
		).then(selection => {
			if (selection === 'Yes') {
				installFonts(context);
			}
			context.globalState.update('starcode.fontsDialogShown', true);
		});
	}
}

export function deactivate() {}

