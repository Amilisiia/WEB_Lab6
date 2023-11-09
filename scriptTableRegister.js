document.addEventListener("DOMContentLoaded", function() {
  let isValid = true;

  let today = new Date().toISOString().split('T')[0];
  document.getElementById("dob").setAttribute("max", today);

  const $table = document.getElementById('userTable');
  const $deleteButton = document.getElementById('deleteRows');
  const $duplicateButton = document.getElementById('duplicateRows');

  function addRowToTable(email, lastName, name, date, group, phone, gender) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td><input type="checkbox"></td>
      <td>${email}</td>
      <td>${lastName}</td>
      <td>${name}</td>
      <td>${date}</td>
      <td>${group}</td>
      <td>${phone}</td>
      <td>${gender}</td>
    `;
    $table.querySelector('tbody').appendChild(newRow);
  }

  function clearFormFields() {
    const form = document.getElementById('registrationForm');
    form.reset();
    isValid = true;
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(function(error) {
      error.textContent = '';
    });
  }

  $deleteButton.addEventListener('click', function() {
    const selectedRows = $table.querySelectorAll('input[type="checkbox"]:checked');
    selectedRows.forEach(function(row) {
      row.closest('tr').remove();
    });
  });

  $duplicateButton.addEventListener('click', function() {
    const selectedRows = $table.querySelectorAll('input[type="checkbox"]:checked');
    selectedRows.forEach(function(row) {
      const email = row.closest('tr').querySelector('td:nth-child(2)').textContent;
      const lastName = row.closest('tr').querySelector('td:nth-child(3)').textContent;
      const name = row.closest('tr').querySelector('td:nth-child(4)').textContent;
      const date = row.closest('tr').querySelector('td:nth-child(5)').textContent;
      const group = row.closest('tr').querySelector('td:nth-child(6)').textContent;
      const phone = row.closest('tr').querySelector('td:nth-child(7)').textContent;
      const gender = row.closest('tr').querySelector('td:nth-child(8)').textContent;

      addRowToTable(email, lastName, name, date, group, phone, gender);
    });
  });

  const registrationForm = document.getElementById('registrationForm');
  registrationForm.addEventListener('submit', function(event) {
    if (!isValid) {
      event.preventDefault();
    } else {
      const email = document.getElementById('email').value;
      const lastName = document.getElementById('last-name').value;
      const name = document.getElementById('first-name').value;
      const date = document.getElementById('dob').value;
      const group = document.getElementById('group').value;
      const phone = document.getElementById('phone').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;

      addRowToTable(email, lastName, name, date, group, phone, gender);
      clearFormFields();
      event.preventDefault();
    }
  });

});
