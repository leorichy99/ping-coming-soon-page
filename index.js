const email = document.querySelector("input");
const errors = ["/", "$"];

// show error message when any of the errors array elements get typed in the input field
email.addEventListener("input", (e) => {
  if ((e.target.value.includes(errors[0]) || e.target.value.includes(errors[1]))) {
    email.classList.add('error')
  }
  else {
    email.classList.remove('error');
  }
});


