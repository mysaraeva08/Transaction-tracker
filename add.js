// Ambik form
const form = document.getElementById("transactionForm");

// Submit event
form.addEventListener("submit", function(e){
  e.preventDefault(); // stop page refresh

  // Ambik nilai input dari dropdown dan amount
  const type = document.getElementById("type").value; // Pastikan kat HTML guna <select>
  const category = document.getElementById("category").value; // Pastikan kat HTML guna <select>
  const amountInput = document.getElementById("amount").value;
  const amount = parseFloat(amountInput);

  // Validasi: Pastikan kategori dipilih (bukan placeholder) & amount sah
  if(category === "" || category === "pilih" || isNaN(amount) || amount <= 0){
    alert("Sila pilih kategori dan masukkan jumlah (amount) yang betul!");
    return;
  }

  // Ambik existing transactions dari localStorage
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  // Push transaction baru dengan tambahan info (tarikh & id)
  // Tarikh ni berguna kalau nanti awak nak buat filter ikut bulan/hari
  transactions.push({
    id: Date.now(), // Unique ID untuk setiap transaksi
    date: new Date().toLocaleDateString(), 
    type: type,
    category: category,
    amount: amount
  });

  // Simpan balik ke localStorage
  localStorage.setItem("transactions", JSON.stringify(transactions));

  // Reset form
  form.reset();

  // Popup 
  alert("Data " + category + " sebanyak RM" + amount.toFixed(2) + " berjaya disimpan!");
  
  // Kalau ada function render/update UI, panggil kat sini
  // updateDashboard(); 
});
