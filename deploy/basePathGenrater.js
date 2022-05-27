var path = require("path");
var fs = require("fs");

let file = path.join(__dirname, "./deployType");
if (!fs.existsSync(file)) {
    console.log("NOT FOUND deployType FILE.")
    throw new Error("deployType FILE NOT EXIST")
}

const deployType = fs.readFileSync(file, 'utf8')

if (deployType.trim() == "github") {
    replaceBasePathConstFileContent("basePath.github.js")
} else if (deployType.trim() == "gitee") {
    replaceBasePathConstFileContent("basePath.gitee.js")
} else if (deployType.trim() == "vercel") {
    replaceBasePathConstFileContent("basePath.vercel.js")
} else {
    console.log("UNKNOWN DEPLOY TYPE", deployType)
    throw new Error(`UNKNOWN DEPLOY TYPE ${deployType}`)
}

// 使用 originFile 文件中的内容，替换 basePathConst 中的内容。
function replaceBasePathConstFileContent(originFile) {
    originFile = path.join(__dirname, originFile);
    console.log("REPLACE BasePath START", originFile)

    if (!fs.existsSync(originFile)) {
        console.log("NOT FOUND ORIGIN FILE.", originFile)
        throw new Error(`NOT FOUND ORIGIN FILE. ${originFile}`)
    }

    const data = fs.readFileSync(originFile, 'utf8');

    let targetFile = path.join(__dirname, "../docs/.vuepress/basePathConst.js");

    const content = `
    // 此文件是自动生成的，请不要修改此文件中的内容，修改也无效。
    ${data}
    `;

    fs.writeFileSync(targetFile, content);

}
