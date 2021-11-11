const fs = require("fs");

const folders = fs.readdirSync("./");
const output = {};
const outputGitIgnore = [];
for (var i in folders) {
    if (!folders[i].includes(".old")) {
        if (folders[i].includes("bspwm")) continue;
        if (folders[i].includes("polybar")) continue;
        if (folders[i].includes("rofi")) continue;
        if (folders[i].includes(".vscode")) continue;
        if (folders[i].includes("sxhkd")) continue;
        if (folders[i].includes("vscodeSettings.js")) continue;
        if (folders[i].includes(".gitignore")) continue;
        if (folders[i].includes(".git")) continue;
    }
    output["**/" + folders[i]] = true;
    outputGitIgnore.push('/'+folders[i]);
}
// console.log({folders});
fs.writeFileSync(
    "./.vscode/settings.json",
    JSON.stringify(
        {
            "files.exclude": output,
        },
        null,
        2,
    ),
);


fs.writeFileSync('./.gitignore', outputGitIgnore.join('\n'));