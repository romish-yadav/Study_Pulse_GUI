// script.js
document.addEventListener('DOMContentLoaded', () => {

    // Form Submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', 'Romish');
            alert("✅ Login Successful!");
            window.location.href = "dashboard.html";
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.querySelector('input[placeholder="Full Name"]');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', nameInput ? nameInput.value : 'Scholar');
            alert("🎉 Account Created Successfully!");
            window.location.href = "dashboard.html";
        });
    }

    // Protected Route
    if (window.location.pathname.includes("dashboard.html")) {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            alert("⛔ Please login to access the dashboard.");
            window.location.href = "login.html";
        }
    }

    // Display Username
    const userNameEl = document.getElementById('userName');
    if (userNameEl) {
        userNameEl.textContent = localStorage.getItem('userName') || 'Scholar';
    }
});

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        localStorage.clear();
        alert("👋 Logged out successfully!");
        window.location.href = "login.html";
    }
}