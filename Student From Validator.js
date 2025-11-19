function validateName(name) {
    return /^[A-Za-z ]+$/.test(name);
}
function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
}
function validatePhone(phone) {
    return /^[0-9]{10}$/.test(phone);
}
function validatePassword(password) {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/.test(password);
}
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    setStatus(name, validateName(name.value));
    setStatus(email, validateEmail(email.value));
    setStatus(phone, validatePhone(phone.value));
    setStatus(password, validatePassword(password.value));
}
function setStatus(input, valid) {
    input.style.border = valid ? "2px solid green" : "2px solid red";
}
