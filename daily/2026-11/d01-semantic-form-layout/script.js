const form = document.querySelector('form');
const toggle = document.querySelector('.toggle');
const password = document.getElementById('password');

// Show/hide password
toggle.addEventListener('click', () => {
  const show = password.type === 'password';
  password.type = show ? 'text' : 'password';
  toggle.setAttribute('aria-pressed', String(show));
  toggle.firstChild.textContent = show ? 'Hide' : 'Show';
});

// Validation: error text lives in #<id>-error, its message in data-message.
function validate(control) {
  const errorEl = document.getElementById(`${control.id}-error`);
  const valid = control.checkValidity();
  control.setAttribute('aria-invalid', String(!valid));
  errorEl.textContent = valid ? '' : errorEl.dataset.message;
  return valid;
}

const isControl = (el) => el.matches('input, select');

// Validate when leaving a field...
form.addEventListener('focusout', (e) => {
  if (isControl(e.target)) validate(e.target);
});

// ...and keep it updated while typing, once it has been validated before.
form.addEventListener('input', (e) => {
  if (isControl(e.target) && e.target.hasAttribute('aria-invalid')) validate(e.target);
});

form.addEventListener('submit', (e) => {
  // No server yet, and a native GET submit would put the password in the URL.
  e.preventDefault();
  const invalid = [...form.querySelectorAll('input, select')].filter((c) => !validate(c));
  invalid[0]?.focus();
});
