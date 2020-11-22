let buttonsEl = document.getElementById('buttons');
let input = document.getElementById('input');


    // when I hit the enter key, create buttons for each choice
	// empty input area
    // setTimeout delays so the input box is cleared in time
    
input.addEventListener('keyup', (e) => {
	createButtons(e.target.value);
	if(e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10)
		randomSelector();
	}
});

function createButtons(input) {
	const buttons = input.split(',').filter(button => button.trim() !== '').map(button => button.trim());
	
	// clean up the buttons first
	buttonsEl.innerHTML = '';
	
	// map over the buttons and add them to the buttonsEl container
	buttons.forEach(button => {
		const buttonEl = document.createElement('span');
		buttonEl.classList.add('button');
		buttonEl.innerText = button;
		buttonsEl.appendChild(buttonEl);
	})
}

function randomSelector() {
let times = 30;
let interval = setInterval(() => {
		const randomButton = pickRandomButton();
		
		highlightButton(randomButton);
		
		// remove the highlight after a while
		setTimeout(() => {
			unhighlightButton(randomButton);
		}, 100);
	}, 100);
	
	// allow times * 100 ms for the buttons to randomly "highlight" themselves
	// then pick another button
	setTimeout(() => {
		clearInterval(interval);
		
		setTimeout(() => {
		let randomButton = pickRandomButton();
			
			highlightButton(randomButton)
		}, 100);
	}, times * 100);
}

function pickRandomButton() {
	const buttons = document.querySelectorAll('.button');
	return buttons[Math.floor(Math.random() * buttons.length)];
}

function highlightButton(button) {
	button.classList.add('highlight');
}

function unhighlightButton(button) {
	button.classList.remove('highlight');
}