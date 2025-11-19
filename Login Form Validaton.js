function validateUsername(username) {
    return /^.{5,}$/.test(username);
}
function validatePassword(password) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/.test(password);
}
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (!validateUsername(user)) {
        alert("Invalid Username");
    } else if (!validatePassword(pass)) {
        alert("Invalid Password");
    } else {
        alert("Login Successful");
    }
}
