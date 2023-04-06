var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("contact-form__previous-button").style.display = "none";
  } else {
    document.getElementById("contact-form__previous-button").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("contact-form__next-button").innerHTML = "Submit";
  } else {
    document.getElementById("contact-form__next-button").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

