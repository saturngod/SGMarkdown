var configEditor = CodeMirror.fromTextArea(document.getElementById('configFile'), {
  mode : "javascript",
  lineNumbers: true,
  matchBrackets: true,
  lineWrapping: true,
  theme: 'default',
});

function getConfig()
{
  return localStorage.getItem("configFile");

}
function saveConfig()
{
    var code = configEditor.getValue();
    if(code.trim()=="")
    {
      alert('Empty Config');
      return;
    }
    if(IsJsonString(code))
    {
      localStorage.setItem("configFile",code);
      loadConfig();
    }
    else {
      alert('invalid json format');
    }
}

function loadConfig() {

  if (localStorage.getItem("configFile") === null) {
    var config = {
      "editor" : {
      "font-family" : 'Menlo,\'Zawgyi-One\',monospace',
      "font-size" : "14px",
      "line-height" : "24px"
    },
    "preview" : {
      "font-family" : '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,\'Zawgyi-One\', "Lucida Grande", sans-serif',
      "font-size" : "14px",
      "line-height" : "24px"
    }
  };
    localStorage.setItem("configFile",JSON.stringify(config,null,"  "));
  }

  var configString = localStorage.getItem("configFile");

  var configData = JSON.parse(configString);

  var editorJSON = configData['editor'];
  if(editorJSON) {
    setConfigData(".CodeMirror pre",editorJSON);
    writeCSS(editorJSON);
  }

  var previewJSON = configData['preview'];
  if(previewJSON) {
    setConfigData("#SGMarkdownEditor #out",previewJSON);
  }

  editor.refresh();
  configEditor.refresh();

}

function writeCSS(editorJSON)
{
  var elements = document.querySelectorAll("#configCSS");
  Array.prototype.forEach.call(elements, function(el, i){

    var font_family = "Menlo,\'Zawgyi-One\',monospace";//default value

    if(editorJSON["font-family"])
    {
      font_family = editorJSON["font-family"];
    }

    var font_size = "14px";
    //
    if(editorJSON["font-size"])
    {
      font_size = editorJSON["font-size"];
    }

    var line_height = "24px";
    if(editorJSON["line-height"])
    {
      line_height = editorJSON["line-height"];
    }

    var html = ".CodeMirror pre {font-family:" + font_family + ";";
    html += "font-size: "+font_size+";";
    html +="line-height: "+line_height+";}";

    el.innerHTML = html;

  });
}


function setConfigData(query,configJSON)
{

  var elements = document.querySelectorAll(query);
  Array.prototype.forEach.call(elements, function(el, i){



    if(configJSON["font-family"] && configJSON["font-family"]!="") {
      el.style.fontFamily = configJSON["font-family"];
    }
    if(configJSON["font-size"] && configJSON["font-size"]!="") {
      el.style.fontSize = configJSON["font-size"];

    }

    if(configJSON["line-height"] && configJSON["line-height"]!="") {
      el.style.lineHeight = configJSON["line-height"];
    }

  });
}


function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
