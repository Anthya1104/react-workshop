let total = document.getElementById('total');
let add = document.getElementById('add');
let sub = document.getElementById('sub');
add.addEventListener('click', function () {
  total.innerText = parseInt(total.innerText) + 1;
});
sub.addEventListener('click', function () {
  total.innerText = parseInt(total.innerText) - 1;
});
