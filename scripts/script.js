/*
Author: Ornella Ntombolo, Sena Corakci
File Name: script.js
Date: 06/27/2025 
*/

// Function to toggle the mobile navigation menu
function menu() {
  const navlinks = document.getElementById("nav-links");
  if (navlinks) { // Ensure the element exists before trying to modify it
      navlinks.classList.toggle("active");
  }
}

// Function to toggle the visibility of the programs table
function toggleTable() {
  const programTable = document.getElementById("program-table");
  const toggleButton = document.getElementById("toggle-table");

  if (programTable && toggleButton) { // Ensure both elements exist
      if (programTable.style.display === "none") {
          programTable.style.display = "block"; // Show the table
          toggleButton.textContent = "Hide Programs Table";
      } else {
          programTable.style.display = "none"; // Hide the table
          toggleButton.textContent = "Show Programs Table";
      }
  }
}

// Event Listeners to run functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Attach the toggleTable function to the button on the programs page
  const toggleButton = document.getElementById('toggle-table');
  if (toggleButton) {
      toggleButton.addEventListener('click', toggleTable);
      // Initially hide the table on load for a cleaner look
      const programTable = document.getElementById("program-table");
      if (programTable) {
          programTable.style.display = "none";
      }
  }


  window.addEventListener('resize', function() {
      const navlinks = document.getElementById("nav-links");
      if (navlinks && window.innerWidth > 768) { // Assuming 768px is your tablet breakpoint
          navlinks.classList.remove('active'); // Hide mobile nav if desktop size
      }
  });
});
