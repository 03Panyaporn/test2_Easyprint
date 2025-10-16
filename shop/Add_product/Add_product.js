function goToNotification() {
  window.location.href = "../Notification/Notification.html";
}
 
function goNextEditProfile() {
  window.location.href = '../Edit_profile/Edit_profile.html';
}

document.querySelector('.switch input').addEventListener('change', function () {
    if (this.checked) {
      alert("ระบบเปิดการทำงาน");
    } else {
      alert("ระบบปิดการทำงาน");
    }
  });

  document.querySelector('.topbar input').addEventListener('keyup', function () {
    let keyword = this.value.toLowerCase();
    document.querySelectorAll("tbody tr").forEach(row => {
      let text = row.innerText.toLowerCase();
      row.style.display = text.includes(keyword) ? "" : "none";
    });
  });
 
 
function toggleProfilePopup() {
  const popup = document.getElementById('profilePopup');
  popup.classList.toggle('show');
}
 
window.addEventListener('click', function(e) {
  const popup = document.getElementById('profilePopup');
  const icon = document.querySelector('.profile-icon');
  if (!icon.contains(e.target)) {
      popup.classList.remove('show');
  }
});
 
const uploadInput = document.getElementById('upload');
const previewImg = document.getElementById('preview');
const uploadLabel = document.getElementById('upload-label');
const imgCount = document.getElementById('img-count');
const removeBtn = document.getElementById('remove-img');

uploadInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      previewImg.src = reader.result;
      previewImg.style.display = 'block';
      uploadLabel.style.display = 'none';
      removeBtn.style.display = 'block';
      imgCount.textContent = '1';
    };
    reader.readAsDataURL(file);
  }
});

removeBtn.addEventListener('click', function () {
  uploadInput.value = '';
  previewImg.src = '';
  previewImg.style.display = 'none';
  uploadLabel.style.display = 'block';
  removeBtn.style.display = 'none';
  imgCount.textContent = '0';
});