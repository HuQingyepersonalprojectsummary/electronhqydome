var {globalShortcut,app}=require('electron');

app.on('ready', function() {
  globalShortcut.register('ctrl+e', function() {
    console.log('ctrl+e is pressed');
  });
  globalShortcut.isRegistered('ctrl+e');
  console.log(globalShortcut.isRegistered('ctrl+e'));

globalShortcut.register('ctrl+d', function() {
  console.log('ctrl+d is pressed');
});
globalShortcut.isRegistered('ctrl+d');
console.log(globalShortcut.isRegistered('ctrl+d'));
});
app.on('will-quit', function() {
  globalShortcut.unregister('ctrl+e');
  globalShortcut.unregister('ctrl+e');
});

