const testButton = document.querySelector("#test-button")
const testMessage = document.querySelector("#test-message");



testButton.addEventListener("click", () => {
    testMessage.textContent = 
    "Success! The files are connected"
});