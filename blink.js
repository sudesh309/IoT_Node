var Gpio = require('onoff').Gpio; // include onoff module
var LED =  new Gpio(4, 'out'); // set gpio 4 as out
//set blink inteval time to 250ms
var blinkInterval = setInterval(blinkLED,550);

function blinkLED(){
	if(LED.readSync() == 0) {
		LED.writeSync(1);
	}else{
		LED.writeSync(0);
	}
}

function endBlink(){
	clearInterval(blinkInterval);
	LED.writeSync(0);
	LED.unexport();
}

setTimeout(endBlink, 10000);

