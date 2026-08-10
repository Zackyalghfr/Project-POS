// logic login
function togglePass(id, wrap) {
    const inp = document.getElementById(id);
    if (inp.type === 'password') {
        inp.type = 'text';
        wrap.innerHTML = '<i data-lucide="eye" width="18" height="18"></i>';
    } else {
        inp.type = 'password';
        wrap.innerHTML = '<i data-lucide="eye-off" width="18" height="18"></i>';
    }
    lucide.createIcons();
}

function login() {
    const username = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-pass').value.trim();

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    usernameError.textContent = '';
    passwordError.textContent = '';

    let valid = true;

    if (username === '') {
        usernameError.textContent = 'Username tidak boleh kosong!';
        valid = false;
    } else if (username.length < 4) {
        usernameError.textContent = 'Username minimal 4 karakter!';
        valid = false;
    }

    if (password === '') {
        passwordError.textContent = 'Password tidak boleh kosong!';
        valid = false;
    } else if (password.length < 4) {
        passwordError.textContent = 'Password minimal 4 karakter!';
        valid = false;
    }

    if (!valid) return;

    saveCurrentUser(username);
    window.location.href = '../menu/menu.html';
}