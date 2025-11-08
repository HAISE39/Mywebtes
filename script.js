// Toggle password visibility
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass);
  const iconEye = document.getElementById(loginEye);

  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text';
      iconEye.classList.add('ri-eye-line');
      iconEye.classList.remove('ri-eye-off-line');
    } else {
      input.type = 'password';
      iconEye.classList.remove('ri-eye-line');
      iconEye.classList.add('ri-eye-off-line');
    }
  });
};

// Panggil untuk login
showHiddenPass('login-pass', 'login-eye');

// Placeholder untuk Google Login/Register
function googleLogin() {
  alert("Google Login: Implement OAuth here. Tutorial: https://developers.google.com/identity/sign-in/web/sign-in");
}

function googleRegister() {
  alert("Google Register: Implement OAuth here. Tutorial: https://developers.google.com/identity/sign-in/web/sign-in");
}

// Animasi pop-up sukses setelah submit login
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Tambahkan logika login di sini
  alert('Login successful! (Placeholder - animasi pop-up)');
});