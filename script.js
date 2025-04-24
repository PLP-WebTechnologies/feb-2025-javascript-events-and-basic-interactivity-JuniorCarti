// Event Handling Section

// Button click event
const clickButton = document.getElementById('click-button');
const clickOutput = document.getElementById('click-output');

clickButton.addEventListener('click', () => {
    clickOutput.textContent = 'Button was clicked! 🎉';
    clickButton.style.backgroundColor = '#ff9800';
    setTimeout(() => {
        clickButton.style.backgroundColor = '#4CAF50';
    }, 1000);
});

// Hover effects
const hoverBox = document.querySelector('.hover-box');
const hoverOutput = document.getElementById('hover-output');

hoverBox.addEventListener('mouseenter', () => {
    hoverOutput.textContent = 'Hover detected! ✨';
});

hoverBox.addEventListener('mouseleave', () => {
    hoverOutput.textContent = 'Waiting for hover...';
});

// Keypress detection
const keypressInput = document.getElementById('keypress-input');
const keypressOutput = document.getElementById('keypress-output');

keypressInput.addEventListener('keyup', (e) => {
    keypressOutput.textContent = `You pressed: ${e.key} (Key code: ${e.keyCode})`;
});

// Secret action (double click or long press)
const secretBox = document.querySelector('.secret-box');
let pressTimer;

secretBox.addEventListener('dblclick', () => {
    secretBox.innerHTML = '<p>You discovered the double-click secret! 🎊</p>';
    secretBox.style.backgroundColor = '#ffeb3b';
});

secretBox.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        secretBox.innerHTML = '<p>Long press secret revealed! 🕵️‍♂️</p>';
        secretBox.style.backgroundColor = '#9c27b0';
        secretBox.style.color = 'white';
    }, 1000);
});

secretBox.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});

secretBox.addEventListener('mouseleave', () => {
    clearTimeout(pressTimer);
});
// Interactive Elements Section

// Color changing button with click counter
const colorChanger = document.getElementById('color-changer');
const clickCount = document.getElementById('click-count');
let count = 0;

const colors = ['#4CAF50', '#2196F3', '#f44336', '#FF9800', '#9C27B0'];
colorChanger.addEventListener('click', () => {
    count++;
    clickCount.textContent = count;
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorChanger.style.backgroundColor = randomColor;
    
    // Add animation
    colorChanger.style.transform = 'scale(1.1)';
    setTimeout(() => {
        colorChanger.style.transform = 'scale(1)';
    }, 200);
});

// Image gallery
const galleryImages = document.querySelectorAll('.image-gallery img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

function showImage(index) {
    galleryImages.forEach(img => img.classList.remove('active'));
    galleryImages[index].classList.add('active');
    currentIndex = index;
}

nextBtn.addEventListener('click', () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= galleryImages.length) nextIndex = 0;
    showImage(nextIndex);
});

prevBtn.addEventListener('click', () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = galleryImages.length - 1;
    showImage(prevIndex);
});

// Auto-advance gallery every 3 seconds
setInterval(() => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= galleryImages.length) nextIndex = 0;
    showImage(nextIndex);
}, 3000);

// Tab system
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Update buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update panes
        tabPanes.forEach(pane => pane.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});
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