// Simple Counter App functionality

// Initialize the counter
let count = 0;

// Get references to the DOM elements
const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Function to update the display
function updateDisplay() {
  countDisplay.textContent = count;
}

// Add event listeners for the buttons
incrementButton.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementButton.addEventListener('click', () => {
  count--;
  updateDisplay();
});