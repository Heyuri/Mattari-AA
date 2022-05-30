var fontSize = window.localStorage.getItem('matari-fontSize');

//document.getElementById("infoSection").addEventListener("click", displayDate);

window.onload = function() {
  if (fontSize === 'small') {
    document.body.classList.add('smallFont');
  }

  else {
    document.body.classList.remove('smallFont');
  }
}