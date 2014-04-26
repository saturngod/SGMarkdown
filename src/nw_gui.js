var gui = require('nw.gui');
var win = gui.Window.get();

var os = require('os')
var platform = os.platform();
var menubar = new gui.Menu({ type: 'menubar' });
var file = new gui.Menu();

file.append(new gui.MenuItem({ label: 'Open...' , click :function(){

  var click = new CustomEvent('click');
  var elem = document.getElementById('chooser');
  elem.dispatchEvent(click);

}
})
);
file.append(new gui.MenuItem({ label: 'Save' , click: function(){
  save();
}}));
file.append(new gui.MenuItem({ label: 'Save As...' , click:function(){

  saveas();

}}));

file.append(new gui.MenuItem({ label: 'Copy HTML' , click:function(){

  copyHTML();

}}));

file.append(new gui.MenuItem({ label: 'Save As HTML' , click:function(){
  saveAsHTMLFile();
}}));

file.append(new gui.MenuItem({ label: 'Config' , click:function(){

  showConfig();

}}));



if(platform.toLowerCase() != "darwin") {
  //there is no created menu in mac and linux. Som add file menu directly
  menubar.append(new gui.MenuItem({ label: 'File', submenu: file}));
}

win.menu = menubar;

if(platform.toLowerCase() == "darwin") {
  //if mac os , add File menu at the front
    win.menu.insert(new gui.MenuItem({ label: 'File', submenu: file}), 1);
}


gui.App.on('open', function(cmdline) {
  
  readFile(cmdline);
});
