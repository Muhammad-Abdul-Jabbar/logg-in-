function login() {
    var CONpassword = document.getElementById("CONpassword").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (CONpassword == password) {
       
        // vis gokjent går den til spille
        window.location.href = "hjem.html";
    } else {
        
        // vis ikke får den denne meldingen 
        errorMessage.innerHTML = "Pass er feil.";
        errorMessage.style.color = "#ff8906";
    }
}
