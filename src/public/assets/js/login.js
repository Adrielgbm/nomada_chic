const ip = "localhost"
function createEventListener() {
    const loginButton = document.getElementById("login");
    loginButton.addEventListener("click", authenticate);
}

function authenticate() {
    fetch(`http://${ip}:3000/authenticate`).then((res) => {})
}

window.addEventListener("load", createEventListener)