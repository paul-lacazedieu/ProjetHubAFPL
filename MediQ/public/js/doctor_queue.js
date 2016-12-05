$(document).ready(function(){

  var ws = new WebSocket('ws://127.0.0.1:8000/doctor/'+doctor+'/queue');
  var green = {
    r: 174,
    g: 213,
    b: 129
  };
  red = {
    r: 255,
    g: 26,
    b: 26
  };

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
    waiters = (waiters > 10 ? 10 : (waiters < 0 ? 0 : waiters));
    percent = waiters / 10;
    var color = {
      r: Math.floor(green.r + percent * (red.r - green.r)),
      g: Math.floor(green.g + percent * (red.g - green.g)),
      b: Math.floor(green.b + percent * (red.b - green.b)),
    };
    $("#waiters").css({
        backgroundColor: "rgb(" + color.r + "," + color.g + "," + color.b + ")"
    });
  }
});
