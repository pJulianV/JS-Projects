var incomeData = [];
var expenseData = [];

function addIncome() {
  var date = document.getElementById('incomeDate').value;
  var description = document.getElementById('incomeDescription').value;
  var amount = parseFloat(document.getElementById('incomeAmount').value);

  incomeData.push({
    date: date,
    description: description,
    amount: amount
  });

  displayIncomeData();
  clearIncomeFields();
}

function addExpense() {
  var date = document.getElementById('expenseDate').value;
  var description = document.getElementById('expenseDescription').value;
  var amount = parseFloat(document.getElementById('expenseAmount').value);

  expenseData.push({
    date: date,
    description: description,
    amount: amount
  });

  displayExpenseData();
  clearExpenseFields();
}

function displayIncomeData() {
  var table = document.getElementById('incomeTable');
  clearTable(table);

  var totalIncome = 0;

  for (var i = 0; i < incomeData.length; i++) {
    var row = table.insertRow();
    var dateCell = row.insertCell(0);
    var descriptionCell = row.insertCell(1);
    var amountCell = row.insertCell(2);

    dateCell.textContent = incomeData[i].date;
    descriptionCell.textContent = incomeData[i].description;
    amountCell.textContent = incomeData[i].amount;

    totalIncome += incomeData[i].amount;
  }

  updateTotalIncome(totalIncome);
}

function displayExpenseData() {
  var table = document.getElementById('expenseTable');
  clearTable(table);

  var totalExpense = 0;

  for (var i = 0; i < expenseData.length; i++) {
    var row = table.insertRow();
    var dateCell = row.insertCell(0);
    var descriptionCell = row.insertCell(1);
    var amountCell = row.insertCell(2);

    dateCell.textContent = expenseData[i].date;
    descriptionCell.textContent = expenseData[i].description;
    amountCell.textContent = expenseData[i].amount;

    totalExpense += expenseData[i].amount;
  }

  updateTotalExpense(totalExpense);
}

function clearTable(table) {
  var rowCount = table.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function clearIncomeFields() {
  document.getElementById('incomeDate').value = '';
  document.getElementById('incomeDescription').value = '';
  document.getElementById('incomeAmount').value = '';
}

function clearExpenseFields() {
  document.getElementById('expenseDate').value = '';
  document.getElementById('expenseDescription').value = '';
  document.getElementById('expenseAmount').value = '';
}

function updateTotalIncome(total) {
  document.getElementById('totalIncome').textContent = "Ingresos totales: " + total;
}

function updateTotalExpense(total) {
  document.getElementById('totalExpense').textContent = "Egresos totales: " + total;
}

function calculate() {
  var totalIncome = 0;
  var totalExpense = 0;

  for (var i = 0; i < incomeData.length; i++) {
    totalIncome += incomeData[i].amount;
  }

  for (var i = 0; i < expenseData.length; i++) {
    totalExpense += expenseData[i].amount;
  }

  var result = totalIncome - totalExpense;

  document.getElementById('result').textContent = "El resultado es: " + result;
}

