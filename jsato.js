// Create email input field
var emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "Email");
emailInput.setAttribute("name", "email");

// Create password input field
var passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "Password");
passwordInput.setAttribute("name", "password");

// Create submit button
var submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");

// Create form element and append inputs and button
var form = document.createElement("form");
form.appendChild(emailInput);
form.appendChild(passwordInput);
form.appendChild(submitButton);

// Add CSS styles to form element
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.marginTop = "50px";

// Add form element to page
document.body.appendChild(form);
