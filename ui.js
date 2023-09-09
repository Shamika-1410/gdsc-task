// Select all FAQ question elements
var faq = document.querySelectorAll(".faq");

// Loop through each FAQ question
faq.forEach((item) => {
    // Select the question header (h3)
    let header = item.querySelector("h3");

    // Add a click event listener to the question header
    header.addEventListener("click", () => {
        // Toggle the "open" class on the FAQ div to control the dropdown effect
        item.classList.toggle("open");

        // Select the answer element
        let desc = item.querySelector(".ans");

        // Check if the FAQ div is open
        if (item.classList.contains("open")) {
            // Set the height of the answer element to its scrollHeight to expand it
            desc.style.height = `${desc.scrollHeight}px`;
        } else {
            // If the FAQ div is closed, set the height to 0 to collapse it
            desc.style.height = "0px";
        }
    });
});
// Get the moon image element
const moonIcon = document.getElementById('icon');

// Get the body element
const body = document.getElementById('theme-toggle');

// Function to toggle the dark theme
function toggleDarkTheme() {
    body.classList.toggle('dark-theme'); // Toggle the dark-theme class
}

// Add a click event listener to the moon image
moonIcon.addEventListener('click', toggleDarkTheme);
