

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Legg til din autentiseringslogikk her
    // For enkelhet antar vi brukernavnet "user" og passordet "pass"
    if (username === "user" && password === "pass") {
        // Login vellykket, omdiriger til en annen side
        window.location.href = "hjem.html";
    } else {
        errorMessage.innerHTML = "Feil brukernavn eller passord. Prøv igjen.";
        errorMessage.style.color = "#ff8906";
    }
}
