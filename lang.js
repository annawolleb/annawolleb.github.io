function setLang(lang) {
  if (lang === 'en') {
    document.body.classList.add('lang-en');
  } else {
    document.body.classList.remove('lang-en');
  }
  document.getElementById('btn-it').classList.toggle('active', lang === 'it');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  localStorage.setItem('lang', lang);
}

(function () {
  var saved = localStorage.getItem('lang');
  if (saved) setLang(saved);

  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
