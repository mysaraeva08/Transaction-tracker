// Ambik form
const form = document.getElementById("transactionForm");

// Submit event
form.addEventListener("submit", function(e){
  e.preventDefault(); // stop page refresh

  // Ambik nilai input
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);

  // Validasi simple
  if(category === "" || isNaN(amount)){
    alert("Sila isi kategori & amount dengan betul!");
    return;
  }

  // Ambik existing transactions dari localStorage
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  // Push transaction baru
  transactions.push({
    type: type,
    category: category,
    amount: amount
  });

  // Simpan balik ke localStorage
  localStorage.setItem("transactions", JSON.stringify(transactions));

  // Reset form
  form.reset();

  // Popup 
  alert("Data berjaya disimpan!);
});
