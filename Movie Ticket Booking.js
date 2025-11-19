function validateName(name) {
    return /^[A-Za-z ]+$/.test(name);
}
function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
}
function validateSeats(seats) {
    return /^[1-9]$|^10$/.test(seats);
}
function submitBooking() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const seats = document.getElementById("seats").value;
    if (validateName(name) && validateEmail(email) && validateSeats(seats)) {
        const booking = { name, email, seats };
        console.log(booking);
        document.getElementById("result").innerText = JSON.stringify(booking);
    } else {
        document.getElementById("result").innerText = "Invalid Input";
    }
}
