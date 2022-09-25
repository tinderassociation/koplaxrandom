var random = new Array("https://lead3.pl/p/WRqy/iMCP/MQM2", "https://lead3.pl/p/WRqy/iMCP/MQM2", "https://lead3.pl/p/WRqy/iMCP/MQM2", "https://lead3.pl/p/WRqy/iMCP/MQM2" );

// or

// Regular Array

var random = new Array();

random[0] = "https://lead3.pl/p/WRqy/iMCP/MQM2";
random[1] = "https://lead3.pl/p/WRqy/iMCP/MQM2";
random[2] = "https://lead3.pl/p/WRqy/iMCP/MQM2";
random[3] = "https://lead3.pl/p/WRqy/iMCP/MQM2";
random[4] = "https://lead3.pl/p/WRqy/iMCP/MQM2";

function randomlink() {
window.location = random[Math.floor(Math.random()*random.length)];
}