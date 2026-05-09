// script.js

document.addEventListener('DOMContentLoaded', () => {

    // ==================== ACTIVE NAV LINK ====================
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.fontWeight = '700';
            link.style.color = '#14b8a6';
        }
    });

    // ==================== ROLE SELECTION IN SIGNUP ====================
    const roleCards = document.querySelectorAll('.role-card');
    if (roleCards.length > 0) {
        roleCards.forEach(card => {
            card.addEventListener('click', () => {
                roleCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });
    }

    // ==================== LOGIN FORM ====================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value || "User";

            alert(`✅ Login Successful!\nWelcome back, ${email.split('@')[0]}!`);

            // লগইন করলে Dashboard-এ নিয়ে যাবে
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 800);
        });
    }

    // ==================== SIGNUP FORM ====================
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert("❌ Passwords do not match!");
                return;
            }

            alert('🎉 Account Created Successfully!\nWelcome to SkillBridge!');

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
        });
    }

    console.log('%c✅ SkillBridge Loaded Successfully!', 'color: #14b8a6; font-weight: bold;');
});

// ==================== SETTINGS TAB SWITCHING ====================
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.settings-menu .menu-item');
    const tabContents = document.querySelectorAll('.tab-content');

    if (menuItems.length > 0) {
        console.log("✅ Settings menu found - Adding click listeners");

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active from all menu items
                menuItems.forEach(mi => mi.classList.remove('active'));

                // Remove active from all tabs
                tabContents.forEach(tc => tc.classList.remove('active'));

                // Activate clicked menu item
                item.classList.add('active');

                // Show corresponding tab
                const tabId = item.getAttribute('data-tab');
                const targetTab = document.getElementById(tabId);

                if (targetTab) {
                    targetTab.classList.add('active');
                    console.log(`Tab switched to: ${tabId}`);
                }
            });
        });
    }
});

// ==================== PROFILE DROPDOWN ====================
function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  if (menu) {
    menu.classList.toggle('show');
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  const dropdown = document.querySelector('.profile-dropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    const menu = document.getElementById('dropdownMenu');
    if (menu) menu.classList.remove('show');
  }
});

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = 'index.html';
  }
}

// ==================== PROFILE DROPDOWN ====================
function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  if (menu) {
    menu.classList.toggle('show');
  }
}

// Close dropdown when clicking anywhere outside
document.addEventListener('click', function(e) {
  const dropdown = document.querySelector('.profile-dropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    const menu = document.getElementById('dropdownMenu');
    if (menu) menu.classList.remove('show');
  }
});

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = 'index.html';
  }
}