let users = [];

function signUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("User with this email already exists!");
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };
    users.push(user);

    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';

    alert("User signed up successfully!");
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === '' || password === '') {
        document.getElementById('error-msg').innerText = "Please enter both email and password!";
        return;
    }

    
    let flag = false;

    users.forEach(user => {
        if (user.email === email && user.password === password) {
            flag = true;
        }
    }); 

    if (flag) {
        alert("Login successful! Redirecting to home page...");
        document.getElementById('error-msg').innerText = ''; 
        window.location.href = "home.html"; 
    } else {
        document.getElementById('error-msg').innerText = "Invalid email or password!";
    }

    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}


window.onload = () => {
    document.getElementById('signup-btn').addEventListener('click', signUp);
    document.getElementById('login-btn').addEventListener('click', login);
};
