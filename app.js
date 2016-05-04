const timer1 = document.querySelector('#timer1 .time');
const timer2 = document.querySelector('#timer2 .time');
const nextBtn = document.querySelector('#next');
const stopResetBtn = document.querySelector('#stop_reset');


/**
Timer

Counts down increments of 1, recursively with the tick function
*/
function timer(element) {

	var count = 60;

	var payload = {};

	function tick() {
		if (payload.reset) {
			update(element, 60);
			return {};
		}

		if (payload.stop) {
			return {};
		}

		if (payload.reset) {
			update(timer1, 60);
			update(timer2, 60);
			return {};
		}

		count--;

		update(element, count);

		if (count > 0) {		
			setTimeout(function () {
				tick();
			}, 1000);
		}

		return payload;
	}

	return tick();
}

function update(element, count) {
	element.textContent = count;
}

/**

BUTTONS

*/

var first = false;
var payload = {};

function next() {
	first = !first;
	if (first) {
		//old payload
		payload.reset = true;

		//new payload
		payload = timer(timer1);
	}
	else {
		//old payload
		payload.reset = true;

		//new payload
		payload = timer(timer2);
	}
}
nextBtn.addEventListener('click', next);

var toggle = false;
function stopReset() {
	toggle = !toggle;
	if(toggle) {
		stop();
	}
	else {
		reset();
	}
}

function stop() {
	payload.stop = true;
}
function reset() {
	payload.reset = true;
}
stopResetBtn.addEventListener('click', stopReset);
