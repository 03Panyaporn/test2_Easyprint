  // ราคาตามขนาด
    const priceList = { "60x80": 300, "80x120": 450, "90x210": 550 };
    const sizeSelect = document.getElementById("sizeSelect");
    const quantityInput = document.getElementById("quantity");
    const priceInput = document.getElementById("price");
    const upfile = document.getElementById("upfile");
    const uploadedFilesDiv = document.getElementById("uploadedFiles");
    const previewBox = document.getElementById("previewBox");
    const statusText = document.getElementById("statusText");

    function calculatePrice() {
      const selectedOption = sizeSelect.value;
      const quantity = parseInt(quantityInput.value) || 1;
      const basePrice = priceList[selectedOption] || 0;
      priceInput.value = (basePrice * quantity).toLocaleString();
    }

    function updatePreviewBoxSize() {
      const [w, h] = sizeSelect.value.split("x").map(Number);
      previewBox.style.width = w *4 + "px";
      previewBox.style.height = h *4+ "px";
    }

    function handleFileChange() {
      uploadedFilesDiv.innerHTML = "";
      previewBox.innerHTML = "";
      statusText.textContent = "";

      const files = upfile.files;
      Array.from(files).forEach(file => {
        const fileInfo = document.createElement("p");
        fileInfo.textContent = `ไฟล์: ${file.name} (ขนาด: ${sizeSelect.value})`;
        uploadedFilesDiv.appendChild(fileInfo);

        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
              previewBox.appendChild(img);

              const boxWidth = previewBox.clientWidth;
              const boxHeight = previewBox.clientHeight;
              const imgWidth = img.naturalWidth;
              const imgHeight = img.naturalHeight;

              const boxRatio = boxWidth / boxHeight;
              const imgRatio = imgWidth / imgHeight;

              if (imgRatio >= boxRatio) {
                img.style.width = "100%";
                img.style.height = "auto";
              } else {
                img.style.width = "auto";
                img.style.height = "100%";
              }

              const displayedWidth = img.clientWidth;
              const displayedHeight = img.clientHeight;
              statusText.textContent = (displayedWidth >= boxWidth && displayedHeight >= boxHeight)
                ? "เต็มกรอบ"
                : "มีพื้นที่เหลือในกรอบ";
            }
          }
          reader.readAsDataURL(file);
        }
      });

      calculatePrice();
    }

    sizeSelect.addEventListener("change", () => {
      updatePreviewBoxSize();
      handleFileChange();
    });

    quantityInput.addEventListener("input", calculatePrice);
    upfile.addEventListener("change", handleFileChange);

    // เริ่มต้น
    updatePreviewBoxSize();
    calculatePrice();
         const userBtn = document.getElementById("userBtn");
    const userMenu = document.getElementById("userMenu");
    const locationBtn = document.getElementById('locationBtn');
    const locationMenu = document.getElementById('locationMenu');
    const selectedSpan = document.getElementById('selectedLocation');

    locationBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        locationMenu.style.display = locationMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', () => locationMenu.style.display = 'none');

    document.querySelectorAll('.location-option input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                selectedSpan.innerText = this.value;

            }
        });
    });

    document.querySelectorAll('.location-option input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                document.getElementById('selectedLocations').innerText = this.value;

            }
        });
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            window.location.href = "../editaddress/address.html"; 
    });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const option = btn.closest('.location-option');

            if (option) {
                const confirmed = confirm("คุณแน่ใจหรือไม่ว่าต้องการลบที่อยู่นี้?");
                if (confirmed) {
                    option.remove();
                    alert("ลบที่อยู่นี้เรียบร้อย");
                }
            }
        });
    });
    userBtn.addEventListener("click", function (e) {
        e.preventDefault();
        userMenu.style.display = userMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
        if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
            userMenu.style.display = "none";
        }
    });
