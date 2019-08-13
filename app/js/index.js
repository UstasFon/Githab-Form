(function () {
    const submit = document.querySelector(".form__submit");
    const avatar = document.querySelector(".form__avatar");
    const input = document.querySelector(".form__name");
    const form = document.querySelector(".form");
    const API = "https://api.github.com/users/";

    console.log(input)
    form.onsubmit = function () {
        event.preventDefault();
    }

    input.oninput = function () {
        if (this.value) {
            submit.removeAttribute('disabled');
        } else {
            submit.setAttribute('disabled', true);
        }
    }

    submit.onclick = function () {
        xhr = new XMLHttpRequest()
        xhr.open("get", 'https://api.github.com/users/' + input.value);
        xhr.onload = onImageLoad;
        xhr.onerror = onEror;
        xhr.send();
    }

    function onImageLoad(data) {
        const response = data.currentTarget.response;
        const responseObj = JSON.parse(response);
        avatar.src = responseObj.avatar_url

    }

    function onEror(data) {

        alert("Пользователь не найден")
    }
})()