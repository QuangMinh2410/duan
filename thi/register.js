const passwordInput = document.getElementById('regPassword');
const strengthText = document.getElementById('passwordStrengthText');
const strengthBar = document.getElementById('passwordStrengthBar');

passwordInput.addEventListener('input', function () {
  const password = passwordInput.value;
  const strength = getPasswordStrength(password);

  // Cập nhật thanh và văn bản
  strengthText.textContent = strength.label;
  strengthText.style.color = strength.color;
  strengthBar.style.setProperty('--strength-color', strength.color);
  strengthBar.style.position = 'relative';

  strengthBar.innerHTML = `<div style="width: ${strength.percent}%; background-color: ${strength.color}; height: 100%; border-radius: 4px;"></div>`;
});

// Hàm đánh giá độ mạnh
function getPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) score++;

  if (score <= 1) {
    return { label: 'Yếu', color: 'red', percent: 25 };
  } else if (score === 2 || score === 3) {
    return { label: 'Trung bình', color: 'orange', percent: 60 };
  } else {
    return { label: 'Mạnh', color: 'green', percent: 100 };
  }
}
