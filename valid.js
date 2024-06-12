function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Clear any previous error messages
    document.getElementById('email-error').textContent = "";
    document.getElementById('password-error').textContent = "";
  
    let isValid = true;
  
    // Email validation (basic check)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('email-error').textContent = "Invalid email format";
      isValid = false;
    }
  
    // Password validation (basic check)
    if (password.length < 8) {
      document.getElementById('password-error').textContent = "Password must be at least 8 characters long";
      isValid = false;
    }
  
    return isValid;
  }
  