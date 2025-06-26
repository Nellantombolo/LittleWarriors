/*
Student Name: Rachel Kabwiza
File Name: script.js
Date: 06/25/2025
*/
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
		} else {
		    menu.style.display = "block";
		}
}
document.addEventListener("DOMContentLoaded", function () {
	var form = document.getElementById("donation-form");

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		alert("Thank you for your donation! Your support means a lot.");
		form.reset();
	});
});

/*
Student Name: Sena Corakci
File Name: script.js
Date: 06/26/2025
*/ 
// Toggle mobile menu - added by Sena
function toggleMenu() {
  const menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
