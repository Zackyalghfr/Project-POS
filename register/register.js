// logic register
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

function register() {
    const name    = document.getElementById('reg-name').value.trim();
    const email   = document.getElementById('reg-email').value.trim();
    const pass    = document.getElementById('reg-pass').value.trim();
    const confirm = document.getElementById('reg-confirm').value.trim();

    document.getElementById('name-error').textContent    = '';
    document.getElementById('email-error').textContent   = '';
    document.getElementById('pass-error').textContent    = '';
    document.getElementById('confirm-error').textContent = '';

    let valid = true;

    if (name.length < 3) {
        document.getElementById('name-error').textContent = 'Nama minimal 3 karakter!';
        valid = false;
    }
    if (!email.includes('@')) {
        document.getElementById('email-error').textContent = 'Email tidak valid!';
        valid = false;
    }
    if (pass.length < 4) {
        document.getElementById('pass-error').textContent = 'Password minimal 4 karakter!';
        valid = false;
    }
    if (pass !== confirm) {
        document.getElementById('confirm-error').textContent = 'Password tidak cocok!';
        valid = false;
    }

    if (!valid) return;

    saveCurrentUser(name);
    window.location.href = "../menu/menu.html";
}