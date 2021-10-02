const pass = document.querySelector("#pass");
const newPassword = document.querySelector('#newPassword');

function generatePass() {
    newPassword.innerHTML = '';

    if (pass.value === '') {
        alert('Type a password lenght');
        return;
    }

    let charSet = "abcdefghijklmnopqrtsuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ0123456789";
    let password = "";

    for (var i = 0, n = charSet.length; i < pass.value; ++i) {
        password += charSet.charAt(Math.floor(Math.random() * n)); 
    }

    let result = document.createTextNode(password);

    return newPassword.appendChild(result);
}