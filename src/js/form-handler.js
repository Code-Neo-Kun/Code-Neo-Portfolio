document.getElementById('lead-intake-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('[type="submit"]');
  const msg  = document.getElementById('form-status-msg');

  btn.disabled = true;
  btn.innerHTML = '<span style="font-family:var(--font-mono);font-size:0.7rem">// transmitting...</span>';

  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
      method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' },
    });
    if (res.ok) {
      form.style.display = 'none';
      msg.innerHTML = `
        <div style="border:1px solid rgba(57,255,20,0.3);border-radius:8px;background:rgba(57,255,20,0.05);padding:2.5rem;text-align:center;">
          <p style="font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--green);margin-bottom:0.75rem;">// transmission_success</p>
          <p style="font-size:1.5rem;font-weight:700;margin-bottom:0.5rem;">Message received.</p>
          <p style="color:var(--text-soft);font-size:0.9rem;margin-bottom:1.75rem;">I'll review your brief and respond within 24 hours. Check your inbox for a confirmation.</p>
          <a href="book.html" class="btn btn-cyan">Schedule a Call →</a>
        </div>`;
      if (typeof gtag === 'function') gtag('event', 'generate_lead', { value: 1.00, currency: 'USD' });
    } else {
      const data = await res.json().catch(() => ({}));
      msg.innerHTML = `<p style="font-family:var(--font-mono);font-size:0.75rem;color:#f87171;padding:0.75rem;border:1px solid rgba(248,113,113,0.3);border-radius:4px;">// error: ${data.error ?? 'please check your input and retry'}</p>`;
      btn.disabled = false; btn.textContent = 'Send Brief →';
    }
  } catch {
    msg.innerHTML = `<p style="font-family:var(--font-mono);font-size:0.75rem;color:#f87171;padding:0.75rem;border:1px solid rgba(248,113,113,0.3);border-radius:4px;">// network_error: connection failed. retry.</p>`;
    btn.disabled = false; btn.textContent = 'Send Brief →';
  }
});
