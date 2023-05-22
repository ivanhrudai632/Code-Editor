

const htmlcode = document.getElementById("html-code");
const csscode = document.getElementById("css-code");
const jscode = document.getElementById("Javascript-code");
const OUTPUT = document.getElementById("output");

htmlcode.onkeyup = () => run();
csscode.onkeyup = () => run();
jscode.onkeyup = () => run(); 

function run() {
    const htmlValue = htmlcode.value;
    const cssValue = csscode.value;
    const jsValue = jscode.value;
  
    OUTPUT.contentDocument.body.innerHTML = htmlValue + '<style>' + cssValue + '</style>';
    OUTPUT.contentWindow.eval(jsValue);
}

