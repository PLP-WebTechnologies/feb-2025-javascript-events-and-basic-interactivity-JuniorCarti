// Form Validation Section
const form = document.getElementById('validation-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formStatus = document.getElementById('form-status');

// Real-time validation
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
    } else {
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email';
    } else {
        emailError.textContent = '';
    }
});

passwordInput.addEventListener('input', () => {
    validatePassword();
});

function validatePassword() {
    const password = passwordInput.value;
    let isValid = true;
    let errorMessage = '';
    
    // Check length
    const lengthRule = document.getElementById('length-rule');
    if (password.length < 8) {
        isValid = false;
        errorMessage = 'Password must be at least 8 characters';
        lengthRule.classList.remove('valid');
    } else {
        lengthRule.classList.add('valid');
    }
    
    // Check for at least one number
    const numberRule = document.getElementById('number-rule');
    if (!/\d/.test(password)) {
        isValid = false;
        if (errorMessage) errorMessage += ', at least one number';
        else errorMessage = 'Password must contain at least one number';
        numberRule.classList.remove('valid');
    } else {
        numberRule.classList.add('valid');
    }
    
    // Check for at least one letter
    const letterRule = document.getElementById('letter-rule');
    if (!/[a-zA-Z]/.test(password)) {
        isValid = false;
        if (errorMessage) errorMessage += ', and at least one letter';
        else errorMessage = 'Password must contain at least one letter';
        letterRule.classList.remove('valid');
    } else {
        letterRule.classList.add('valid');
    }
    
    if (!isValid && password.length > 0) {
        passwordError.textContent = errorMessage;
    } else {
        passwordError.textContent = '';
    }
    
    return isValid;
}

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields
    let isFormValid = true;
    
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isFormValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email';
        isFormValid = false;
    }
    
    const isPasswordValid = validatePassword();
    if (!isPasswordValid) {
        isFormValid = false;
    }
    
    if (isFormValid) {
        formStatus.textContent = 'Form submitted successfully!';
        formStatus.className = 'success';
        
        // In a real app, you would send the data to a server here
        console.log('Form data:', {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value
        });
        
        // Reset form after submission (optional)
        setTimeout(() => {
            form.reset();
            formStatus.textContent = '';
            formStatus.className = '';
            document.querySelectorAll('.password-rules li').forEach(li => {
                li.classList.remove('valid');
            });
        }, 3000);
    } else {
        formStatus.textContent = 'Please fix the errors in the form';
        formStatus.className = 'error';
    }
});