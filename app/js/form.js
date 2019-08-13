const submit = document.querySelector(".form__submit");
const avatar = document.querySelector(".form__avatar");
const input = document.querySelector(".form__name");
const form = document.querySelector(".form");
const API = "https://api.github.com/users/";

console.log(input)
form.onsubmit = function(){
    event.preventDefault();
}

input.onchange(function() {
    if (this.value) {
      submit.removeAttribute('disabled');
    } else {
      submit.addAttribute('disabled');
    }
  })

  