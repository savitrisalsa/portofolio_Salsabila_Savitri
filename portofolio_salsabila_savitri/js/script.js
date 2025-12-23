document.addEventListener('DOMContentLoaded', () => {
  const userName = prompt("Siapa Nama Anda?");
  document.getElementById('userName').textContent = userName || 'Guest';

  const form = document.getElementById('messageForm');
  const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('messageText').value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Isi modal
  document.getElementById('popupName').textContent = name;
  document.getElementById('popupEmail').textContent = email;
  document.getElementById('popupPhone').textContent = phone;
  document.getElementById('popupMessage').textContent = message;

  // Tampilkan modal
  const modal = document.getElementById('popupModal');
  modal.style.display = 'block';

  // Tutup otomatis setelah 5 detik
  setTimeout(() => {
    modal.style.display = 'none';
  }, 5000);

  form.reset();
});

// Tombol close (X)
document.querySelector('.close').onclick = function () {
  document.getElementById('popupModal').style.display = 'none';
};

// Klik di luar modal menutup
window.onclick = function (event) {
  const modal = document.getElementById('popupModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

  // Responsive menu toggle
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});