/* ── Contact form handler ── */
const form      = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status-msg');

form?.addEventListener('submit', async e => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // honeypot check
  if (form._gotcha?.value) return;

  const data = {
    name:    form.your_name?.value.trim(),
    email:   form.your_email?.value.trim(),
    type:    form.project_type?.value,
    message: form.your_message?.value.trim(),
  };

  // Basic validation
  if (!data.name || !data.email || !data.message) {
    showMsg('Please fill in all required fields.', 'error');
    btn.textContent = originalText;
    btn.disabled = false;
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    showMsg('Please enter a valid email address.', 'error');
    btn.textContent = originalText;
    btn.disabled = false;
    return;
  }

  // Replace YOUR_FORM_ID with your Formspree / Web3Forms endpoint
  const endpoint = 'https://formspree.io/f/YOUR_FORM_ID';

  try {
    const res = await fetch(endpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body:    JSON.stringify(data),
    });

    if (res.ok) {
      showMsg('✓ Message sent! I\'ll reply within 24 hours.', 'success');
      form.reset();
    } else {
      throw new Error('Server error');
    }
  } catch {
    showMsg('Something went wrong. Please email me directly.', 'error');
  }

  btn.textContent = originalText;
  btn.disabled = false;
});

function showMsg(text, type) {
  statusMsg.innerHTML = `<div class="form-${type}">${text}</div>`;
  setTimeout(() => { statusMsg.innerHTML = ''; }, 6000);
}
