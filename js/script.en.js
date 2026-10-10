document.documentElement.classList.add('js');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
}));

const dateInput = document.querySelector('#date');
const localToday = new Date();
dateInput.min = `${localToday.getFullYear()}-${String(localToday.getMonth() + 1).padStart(2, '0')}-${String(localToday.getDate()).padStart(2, '0')}`;
let selectedTime = '';
document.querySelectorAll('.time-button').forEach(button => button.addEventListener('click', () => {
  selectedTime = button.dataset.time;
  document.querySelectorAll('.time-button').forEach(item => {
    const active = item === button;
    item.classList.toggle('is-selected', active);
    item.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('#booking-result').textContent = '';
}));
document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const result = document.querySelector('#booking-result');
  if (!selectedTime) {
    result.textContent = 'Please choose a time.';
    return;
  }
  const service = document.querySelector('#service').value;
  const name = document.querySelector('#client-name').value.trim();
  const formattedDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${dateInput.value}T12:00:00`));
  result.textContent = `${name}, your selection: ${service}, ${formattedDate} at ${selectedTime}. This is a demo — no real booking has been created.`;
});
