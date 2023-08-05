const contactForm = document.getElementById('contact-form');
const contactTable = document.getElementById('contact-table');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

const phoneError = document.getElementById('phone-error');

function validatePhoneNumber(phoneNumber) {
  const phoneNumberPattern = /^[\d() -]+$/;
  return phoneNumberPattern.test(phoneNumber);
}

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value;
  const phone = phoneInput.value;

  if (!name || !phone) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (!validatePhoneNumber(phone)) {
    phoneError.textContent = 'Número de telefone inválido.';
    return;
  }

  phoneError.textContent = '';
  const newRow = contactTable.insertRow();
  const nameCell = newRow.insertCell(0);
  const phoneCell = newRow.insertCell(1);

  nameCell.textContent = name;
  phoneCell.textContent = phone;

  nameInput.value = '';
  phoneInput.value = '';
});
