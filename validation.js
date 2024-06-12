function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    // Email validation (basic regex for email pattern)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }

    // Password length validation (at least 6 characters)
    if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return false;
    }

    // If all validations pass
    alert("Inscription réussie !");
    return true;
}
