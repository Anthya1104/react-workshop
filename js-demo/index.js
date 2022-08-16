let total = document.getElementById('total');
total.addEventListener('click', function () {
  this.innerText = parseInt(this.innerText) + 1;
});
