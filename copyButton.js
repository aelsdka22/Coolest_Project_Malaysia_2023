// Function to copy an array as a string without commas to the clipboard
function copyArrayWithoutCommas() {
  const numbers = myArray; // Replace with your array of numbers

  // Convert the array to a string without commas
  const stringWithoutCommas = numbers.join(' ');

  // Create a temporary textarea element to copy the text to the clipboard
  const textarea = document.createElement('textarea');
  textarea.value = stringWithoutCommas;
  document.body.appendChild(textarea);

  // Select and copy the text to the clipboard
  textarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Display a message to the user
  // const outputDiv = document.getElementById('output');
  // outputDiv.textContent = 'Array copied to clipboard without commas.';
  window.alert("Array copied to clipboard without commas.");
}

// Attach the copy function to the button's click event
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', copyArrayWithoutCommas);
