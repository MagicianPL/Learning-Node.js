//node code-generator.js make:class User methods="find,save,delete"

const arguments = process.argv.splice(2);


const creating = arguments[0].split(":")[1]; //word "class" in this case
const title = arguments[1];

const classFunctions = arguments[2].split("=")[1].split(",");

let readyFunctionsForCode = "";

classFunctions.forEach(fn => {
    readyFunctionsForCode += `${fn}(${title.toLowerCase()})\n`;
});

let code;
code = creating;
code += ` ${title} {\n`

code += readyFunctionsForCode;

code += "}";

console.log(code);