$(document).ready(function(){

  ws = new WebSocket('ws://127.0.0.1:8000/doctor/'+doctor+'/queue');

  ws.onopen = function() {
  };

  ws.onmessage = function(e) {
    var data = JSON.parse(decodeURIComponent(e.data));
    $('#viewers').html('Il y a actuellement '+data.viewers+' personne'+(data.viewers > 1 ? 's' : '')+' en train de regarder cette page.');
    $('#waiters').html(data.viewers);
    colorize(data.viewers);
  };

  ws.onunload = function() {
    ws.close();
  };

  function colorize(waiters){
    if (waiters > 6) {
      waiters = 6;
    }
    else if (waiters < 0) {
        waiters = 0;
    }
    waiters = waiters * 100 / 6;
    var r = Math.floor((255 * waiters) / 100),
        g = Math.floor((255 * (100 - waiters)) / 100),
        b = 0;
    $("#waiters").css({
        backgroundColor: "rgb(" + r + "," + g + "," + b + ")"
    });
  }
});
