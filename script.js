let buttonsEl = document.getElementById('buttons'); // get empty buttons div
let input = document.getElementById('input'); // get input box textarea

    // when I hit the enter key, create buttons for each choice
	// empty input textarea
    // setTimeout delays so the input box is cleared in time
	
//document.addEventListener(event, function, useCapture)
//event keyup knows that e is enter
input.addEventListener('keyup', (e) => {
	createButtons(e.target.value);
	if(e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10)
		randomSelector();
	}
});


// create buttons using user input entered in the above loop, clean them up and convert to innerhtml
//append buttons to the parent container 
function createButtons(input) {
	let buttons = input.split(',').filter(button => button.trim() !== '').map(button => button.trim());
    buttonsEl.innerHTML = '';
    console.log("BUTTON TEXT ---->", buttons)
	buttons.forEach(button => {
        let buttonEl = document.createElement('span');
		buttonEl.classList.add('button');
		buttonEl.innerText = button;
        buttonsEl.appendChild(buttonEl);
        
	})
}

// function to randomly select a button from the class list
// set timeout allows 3000 milliseconds to go by while highlighting each button from list
// unhighlight button removes the class of highlight
function randomSelector() {
let times = 30;
let interval = setInterval(() => {
		let randomButton = pickRandomButton();
		highlightButton(randomButton);
		
		setTimeout(() => {
			unhighlightButton(randomButton);
		}, 100);
    }, 100);
   

	setTimeout(() => {
		clearInterval(interval);
		setTimeout(() => {
		let randomButton = pickRandomButton();
			highlightButton(randomButton)
		}, 100);
    }, times * 100);
}

// using math.floor and math.random, random button from array will be selected
// selected button will get css class chosen applied to it
function pickRandomButton() {
	let buttons = document.querySelectorAll('.button');
	return buttons[Math.floor(Math.random() * buttons.length)];
}

function highlightButton(button) {
	button.classList.add('chosen');
}

function unhighlightButton(button) {
	button.classList.remove('chosen');
}