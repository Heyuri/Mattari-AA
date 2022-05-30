function smallFont() {
  document.body.classList.add('smallFont');
  window.localStorage.setItem('matari-fontSize', 'small');
}

function bigFont() {
  document.body.classList.remove('smallFont');
  window.localStorage.setItem('matari-fontSize', 'large');
}