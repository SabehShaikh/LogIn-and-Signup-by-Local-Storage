const signUpForm = document.getElementById('signUpForm');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');

if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = {
            name: nameInput.value,
            password: passwordInput.value
        };
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'secondpage.html';
    });
}


// Login form functionality
const loginForm = document.getElementById('loginForm');
const loginNameInput = document.getElementById('loginName');
const loginPasswordInput = document.getElementById('loginPassword');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.name === loginNameInput.value && user.password === loginPasswordInput.value) {
            window.location.href = 'secondpage.html';
        } else {
            alert('Invalid login credentials');
        }
    });
}


const user = JSON.parse(localStorage.getItem('user'));
const userDetails = document.getElementById('userDetails');
const logoutButton = document.getElementById('logoutButton');

if (userDetails && logoutButton) {
    if (user) {
        userDetails.innerHTML = "<p>Name: " + user.name + "</p><p>Password: " + user.password + "</p>";
    } else {
        userDetails.innerHTML = "<p>No user data found.</p>";
    }

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.href = 'sign-up.html';
    });
}

