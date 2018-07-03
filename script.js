"use strict";
//my counter for the li array
let i = 0;

//event listener for button to run annonymous function to write suggestions to li
document.getElementById('button').addEventListener('click', function() {
	//stores value of toolBox ID
	let toolBox = document.getElementById('toolBox').value;
	//variable for li array
	let listItem = document.getElementsByTagName('li');
	//checks counter to see if i is less than 5 and writes the toolBox value to  li array i counter (li[0]) first then adds one to counter and resets the toolBox input for more inputs
	if (i < 5) {
		listItem[i].innerHTML = toolBox;
		document.getElementsByTagName('form')[0].reset();
		++i;
	} 
	//when i gets to 5 the li array is full and lets user know they are done
	if (i === 5) {
		
		document.getElementById('resultsFin').innerHTML = "You did it! good Jobe!!!"
	}
});



