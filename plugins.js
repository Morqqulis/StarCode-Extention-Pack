"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommendedPlugins = exports.importantPlugins = void 0;
const BASE_URL = "https://marketplace.visualstudio.com/items?itemName=";
// important plugins
const importantPlugins = [
    {
        id: 'esbenp.prettier-vscode',
        type: 'important',
        name: "Prettier",
        link: `${BASE_URL}esbenp.prettier-vscode`
    },
    {
        id: 'dbaeumer.vscode-eslint',
        type: 'important',
        name: "ESLint",
        link: `${BASE_URL}dbaeumer.vscode-eslint`
    },
    {
        id: 'ritwickdey.LiveServer',
        type: 'important',
        name: "Live Server",
        link: `${BASE_URL}ritwickdey.LiveServer`
    },
    {
        id: 'diz.ecsstractor-port',
        type: 'important',
        name: 'eCSStractor for VSCode',
        link: `${BASE_URL}diz.ecsstractor-port`
    },
    {
        id: 'bradgashler.htmltagwrap',
        type: "important",
        name: 'htmltagwrap',
        link: `${BASE_URL}bradgashler.htmltagwrap`
    },
    {
        id: 'fractalbrew.backticks',
        type: 'important',
        name: 'Backticks',
        link: `${BASE_URL}fractalbrew.backticks`
    },
    {
        id: 'PKief.material-icon-theme',
        type: 'important',
        name: 'Material Icon Theme',
        link: `${BASE_URL}PKief.material-icon-theme`
    },
    {
        id: 'lior-chamla.google-fonts',
        type: 'important',
        name: "Google Fonts",
        link: `${BASE_URL}lior-chamla.google-fonts`
    },
    {
        id: 'christian-kohler.path-intellisense',
        type: 'important',
        name: 'Path Intellisense',
        link: `${BASE_URL}christian-kohler.path-intellisense`
    }
];
exports.importantPlugins = importantPlugins;
// recommended plugins
const recommendedPlugins = [
    {
        id: 'bradlc.vscode-tailwindcss',
        type: 'recommended',
        name: "Tailwind CSS IntelliSense",
        link: `${BASE_URL}bradlc.vscode-tailwindcss`
    },
    {
        id: 'heybourn.headwind',
        type: 'recommended',
        name: 'Headwind',
        link: `${BASE_URL}heybourn.headwind`
    },
    {
        id: 'yoavbls.pretty-ts-errors',
        type: 'recommended',
        name: 'Pretty TypeScript Errors',
        link: `${BASE_URL}yoavbls.pretty-ts-errors`
    },
    {
        id: 'kohlbachjan.the-best-theme',
        type: "recommended",
        name: "The Best Theme",
        link: `${BASE_URL}kohlbachjan.the-best-theme`
    },
    {
        id: 'github.copilot',
        type: "recommended",
        name: "GitHub Copilot",
        link: `${BASE_URL}github.copilot`
    },
    {
        id: 'codestackr.codestackr-theme',
        type: "recommended",
        name: "codeSTACKr Theme",
        link: `${BASE_URL}codestackr.codestackr-theme`
    },
    {
        id: 'piyushsarkar.sort-css-properties',
        type: "recommended",
        name: "Sort CSS",
        link: `${BASE_URL}piyushsarkar.sort-css-properties`
    },
    {
        id: 'mikestead.dotenv',
        type: "recommended",
        name: "DOTENV",
        link: `${BASE_URL}mikestead.dotenv`
    },
];
exports.recommendedPlugins = recommendedPlugins;
//# sourceMappingURL=plugins.js.map