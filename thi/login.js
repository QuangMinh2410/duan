const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  if (role === "admin") {
    if (username === "admin" && password === "123456") {
      alert("Đăng nhập với quyền Quản trị viên!");
      window.location.href = "admin.html";
    } else {
      alert("Tài khoản quản trị viên không đúng!");
    }
  } else {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert('Đăng nhập thành công!');
      window.location.href = 'home.html';
    } else {
      alert('Sai thông tin đăng nhập!');
    }
  }
});
