var gui = require('nw.gui');
var win = gui.Window.get();

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



win.menu = menubar;
win.menu.insert(new gui.MenuItem({ label: 'File', submenu: file}), 1);

gui.App.on('open', function(cmdline) {
  console.log(cmdline);
  readFile(cmdline);
});
