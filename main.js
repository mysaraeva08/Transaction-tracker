// Simpan data sementara (boleh upgrade ke localStorage nanti)
let totalExpense = 0;
let totalIncome = 0;

// Pilih info boxes
const totalBalanceBox = document.querySelector('.info-boxes .box:nth-child(1)');
const totalExpenseBox = document.querySelector('.info-boxes .box:nth-child(2)');
const totalIncomeBox = document.querySelector('.info-boxes .box:nth-child(3)');

// Function update display
function updateTotals() {
  const totalBalance = totalIncome - totalExpense;
  totalBalanceBox.textContent = `Total Balance: RM${totalBalance}`;
  totalExpenseBox.textContent = `Total Expense: RM${totalExpense}`;
  totalIncomeBox.textContent = `Total Income: RM${totalIncome}`;
}

// Contoh tambah expense / income
function addExpense(amount) {
  totalExpense += amount;
  updateTotals();
}

function addIncome(amount) {
  totalIncome += amount;
  updateTotals();
}