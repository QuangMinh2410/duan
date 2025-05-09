const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (!currentUser) {
  window.location.href = 'login.html';
} else {
  document.getElementById('welcome').textContent = `Chào ${currentUser.username}!`;
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
}
