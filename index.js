E.on('init', function() {
console.log("acceso");
  var WIFI_NAME = 'NTA';
  var WIFI_OPTIONS = { password: 'meglioinsieme' };
//var http = require("http");
  var wifi = require('Wifi');
  wifi.connect(
    WIFI_NAME,
    WIFI_OPTIONS,
    function(err) {
      if (err) {
        console.log('Connection error: ' + err);
        return;
      }
      console.log('Connected!');
;



setInterval(fetchTime, 300);

})
});





function blink() {
  setInterval("digitalWrite(D2, 1 );",200);
  setInterval("digitalWrite(D2, 0 );",300);

}


function fetchTime() {
  require("http").get("http://10.0.0.88/time", function(res) {
    var data = "";
    res.on('data', function(data) { this.data = data });
    res.on('close', function() { console.log(this.data); });
  }).on('error', function(e) {
    console.log("ERROR", e);
  });

}
