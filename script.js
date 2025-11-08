// Toggle between login and register
document.getElementById('showRegister').onclick = function() {
  document.querySelector('.login-container .card').style.display = 'none';
  document.getElementById('registerCard').style.display = 'block';
};
document.getElementById('showLogin').onclick = function() {
  document.querySelector('.login-container .card').style.display = 'block';
  document.getElementById('registerCard').style.display = 'none';
};

// Demo: Prevent form submit
document.getElementById('loginForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Login belum diaktifkan (demo)');
};
document.getElementById('registerForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Register belum diaktifkan (demo)');
};