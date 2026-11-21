const codes = document.querySelectorAll('.code');

if (codes.length > 0) {
  codes[0].focus();
}

codes.forEach((code, idx) => {
  // 1. Typing forward
  code.addEventListener('input', (e) => {
    const val = e.target.value;
    if (val.length > 1) {
      e.target.value = val.slice(-1);
    }
    if (e.target.value !== '' && idx < codes.length - 1) {
      codes[idx + 1].focus();
    }
  });

  // 2. Backspace handling
  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (codes[idx].value !== '') {
        codes[idx].value = '';
        if (idx > 0) {
          codes[idx - 1].focus();
        }
      } else if (idx > 0) {
        codes[idx - 1].value = '';
        codes[idx - 1].focus();
      }
    }
  });
});
