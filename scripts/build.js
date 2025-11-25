const fs = require('fs');
const path = require('path');

const configDir = path.join(__dirname, '..', 'config');
const packageJsonPath = path.join(__dirname, '..', 'package.json');

function readJsonFile(filePath) {
	const fullPath = path.join(configDir, filePath);
	if (!fs.existsSync(fullPath)) {
		throw new Error(`File not found: ${fullPath}`);
	}
	return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
}

function generateConfiguration(settings) {
	const properties = {};
	for (const [key, value] of Object.entries(settings)) {
		let type = 'string';
		if (typeof value === 'boolean') {
			type = 'boolean';
		} else if (typeof value === 'number') {
			type = 'number';
		} else if (Array.isArray(value)) {
			type = 'array';
		} else if (typeof value === 'object' && value !== null) {
			type = 'object';
		}

		properties[key] = {
			type: type,
			default: value,
			description: `StarCode setting: ${key}`
		};
	}

	return {
		title: 'StarCode',
		properties: properties
	};
}

function generateKeybindings(keybindings) {
	return keybindings.map(kb => ({
		key: kb.key,
		command: kb.command,
		when: kb.when
	}));
}

function generateSnippets(snippetsConfig) {
	if (!snippetsConfig.enabled) {
		return [];
	}

	return [
		{
			language: '*',
			path: './snippets/global.code-snippets'
		}
	];
}

const extensions = readJsonFile('extensions.json');
const settings = readJsonFile('settings.json');
const keybindings = readJsonFile('keybindings.json');
const snippetsConfig = readJsonFile('snippets.json');

const existingPackageJson = fs.existsSync(packageJsonPath) 
	? JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
	: {};

const packageJson = {
	name: 'starcode',
	publisher: 'dmitriy-iskenderov',
	displayName: 'StarCode',
	description: 'StarCode Extension Pack - Essential extensions, settings, snippets and fonts for VS Code, Cursor and Windsurf',
	version: '1.0.0',
	engines: {
		vscode: '^1.90.0'
	},
	categories: ['Extension Packs'],
	keywords: ['extension pack', 'prettier', 'eslint', 'snippets', 'fonts'],
	icon: 'public/logo.jpg',
	repository: existingPackageJson.repository || undefined,
	extensionPack: extensions.primary,
	extensionRecommendations: extensions.secondary,
	activationEvents: ['onStartupFinished'],
	main: './out/extension.js',
	contributes: {
		configuration: generateConfiguration(settings),
		keybindings: generateKeybindings(keybindings),
		snippets: generateSnippets(snippetsConfig),
		commands: [
			{
				command: 'starcode.installFonts',
				title: 'Install JetBrains Mono Fonts'
			}
		]
	},
	scripts: {
		'vscode:prepublish': 'npm run compile',
		compile: 'tsc -p ./',
		watch: 'tsc -watch -p ./',
		build: 'node scripts/build.js',
		'create-vsix': 'npm run compile && npx @vscode/vsce package'
	},
	devDependencies: {
		'@types/node': '^22.0.0',
		'@types/vscode': '^1.90.0',
		'typescript': '^5.6.0',
		'@vscode/vsce': '^3.7.1'
	}
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, '\t') + '\n', 'utf8');
console.log('package.json generated successfully!');

