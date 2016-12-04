$(document).ready(function(){
  username = prompt('Your name:', username) || '';

  if (username.length === 0){
    return;
  }

  ws = new WebSocket('ws://127.0.0.1:8000/chat/'+room);

  ws.onopen = function() {
    console.log('OPEN');
    ws.send(JSON.stringify({ username : username, message: 'online' }))
  };

  ws.onmessage = function(e) {
    var el = $("#chat");
    console.log(e);
    el.append('<p>'+ JSON.parse(decodeURIComponent(e.data)).message +'</p>');
  };

  ws.onunload = function() {
    ws.close();
  };

  $("#message").bind('keypress', function(e) {
    if (e.keyCode !== 13){
      return;
    }
    var value = this.value;
    if (value !== ''){
      ws.send(JSON.stringify({message: value}));
      this.value = '';
    }
  });
});
