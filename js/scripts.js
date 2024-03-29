// Get a reference to the element on the page where you want to display the greeting message
const greetingElement = document.getElementById('greeting');

// Define a function that will display the greeting message
function displayGreeting() {
  // Set the text content of the greeting element to the greeting message
  greetingElement.textContent = 'Welcome to my website!';
}

// Call the function to display the greeting message
displayGreeting();