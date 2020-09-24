function cookies() {
  const cookiesEl = document.querySelector('.cookies');
  const consentBtn = cookiesEl.querySelector('.confirm-cookies');

  const init = () => {
    const cookieExists = document.cookie.match(/^(.*;)?\s*cookies\s*=\s*[^;]+(.*)?$/);

    if (!cook
      ieExists) {
      cookiesEl.classList.remove('is-hidden');

      consentBtn.addEventListener('click', () => {
        const date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        document.cookie = `cookies=true; expires=${date}; path=/`;
        cookiesEl.classList.add('is-hidden');
      });
    }
  };

  if (cookiesEl) {
    init();
  }
}

cookies();
