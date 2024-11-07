function checkBMI() {
  // Ambil nilai input dari formulir
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const age = parseInt(document.getElementById("age").value);

  let isValid = true;

  // Validasi input berat badan
  if (isNaN(weight) || weight <= 0 || weight > 300) {
    document.getElementById("weightErrorMessage").textContent =
      "Masukkan berat badan yang valid (1-300 kg).";
    isValid = false;
  } else {
    document.getElementById("weightErrorMessage").textContent = "";
  }

  // Validasi input tinggi badan
  if (isNaN(height) || height <= 0 || height * 100 > 250) {
    document.getElementById("heightErrorMessage").textContent =
      "Masukkan tinggi badan yang valid (1-250 cm).";
    isValid = false;
  } else {
    document.getElementById("heightErrorMessage").textContent = "";
  }

  // Validasi input umur
  if (isNaN(age) || age <= 0 || age > 150) {
    document.getElementById("ageErrorMessage").textContent =
      "Masukkan umur yang valid (1-150 tahun).";
    isValid = false;
  } else {
    document.getElementById("ageErrorMessage").textContent = "";
  }

  // Jika ada input yang tidak valid, hentikan proses perhitungan BMI
  if (!isValid) return;

  // Hitung BMI jika semua input valid
  const bmi = weight / (height * height);
  const roundedBMI = bmi.toFixed(1); // Pembulatan satu angka desimal

  // Menentukan kategori BMI
  let resultTitle = "";
  let resultDesc = "";

  if (bmi < 18.5) {
    resultTitle = "Kekurangan Berat Badan";
    resultDesc =
      "BMI Anda menunjukkan kekurangan berat badan. Disarankan untuk konsultasi dengan ahli gizi.";
  } else if (bmi < 24.9) {
    resultTitle = "Berat Badan Normal";
    resultDesc =
      "Selamat! Anda memiliki berat badan ideal. Pertahankan gaya hidup sehat.";
  } else if (bmi < 29.9) {
    resultTitle = "Kelebihan Berat Badan";
    resultDesc =
      "Anda memiliki kelebihan berat badan. Disarankan menjaga pola makan dan berolahraga.";
  } else {
    resultTitle = "Obesitas";
    resultDesc =
      "BMI Anda menunjukkan obesitas. Disarankan untuk berkonsultasi dengan tenaga medis.";
  }

  // Tampilkan hasil BMI dan deskripsinya
  document.getElementById("result-bmi").textContent = `BMI Anda: ${roundedBMI}`;
  document.getElementById("result-title").textContent = resultTitle;
  document.getElementById("result-desc").textContent = resultDesc;
}

// Fungsi untuk menghapus pesan error ketika tombol reset ditekan
function resetForm() {
  document.getElementById("weightErrorMessage").textContent = "";
  document.getElementById("heightErrorMessage").textContent = "";
  document.getElementById("ageErrorMessage").textContent = "";

  // Menghapus hasil BMI dan deskripsi di area hasil
  document.getElementById("result-bmi").textContent = "";
  document.getElementById("result-title").textContent = "";
  document.getElementById("result-desc").textContent = "";
}

// Menambahkan event listener ke tombol reset
document.querySelector(".btn-reset").addEventListener("click", resetForm);
