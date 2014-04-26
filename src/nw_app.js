var fs = require('fs');
var opening_file = "";

function openBrowsedFile(event) {
	readFile(event.target.value);
}

function readFile(filename)
{
	opening_file = filename;
	// Read a file:
	fileText = fs.readFileSync(opening_file).toString();
	editor.setValue(fileText);
}

function saveAsFile(event) {
  opening_file = event.target.value;
  save();
}

function saveas()
{
  var click = new CustomEvent('click');
  var elem = document.getElementById('save_as_chooser');
  elem.dispatchEvent(click);
}

function saveAsHTMLFile()
{
  var click = new CustomEvent('click');
  var elem = document.getElementById('save_as_html_chooser');
  elem.dispatchEvent(click);
}

function copyHTML()
{
  var val = editor.getValue();

  val = val.replace(/<equation>((.*?\n)*?.*?)<\/equation>/ig, function(a, b){
  return '<img src="http://latex.codecogs.com/png.latex?' + encodeURIComponent(b) + '" />';
  });

  var gui = require('nw.gui');
  // We can not create a clipboard, we have to receive the system clipboard
  var clipboard = gui.Clipboard.get();

  // Or write something
  clipboard.set(marked(val), 'text');
}

function saveAsHTML(event)
{
	var val = editor.getValue();

	val = val.replace(/<equation>((.*?\n)*?.*?)<\/equation>/ig, function(a, b){
	return '<img src="http://latex.codecogs.com/png.latex?' + encodeURIComponent(b) + '" />';
	});

	var htmlVal = marked(val);

  var html = event.target.value;

  fs.writeFileSync(html, htmlVal);
}

function save(){
  if(opening_file!="") {
    var code = editor.getValue();
    fs.writeFileSync(opening_file, code);
  }
  else {
    saveas();
  }

}

function showEditor() {
	document.getElementById("SGMarkdownEditor").style.display = "";
	document.getElementById("setting").style.display = "none";
	editor.refresh();
}

function showConfig() {
	document.getElementById("SGMarkdownEditor").style.display = "none";
	document.getElementById("setting").style.display = "";
	configEditor.refresh();
}
