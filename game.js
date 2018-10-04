(function () {
var board = document.querySelector('#app');
var height = 5;
var width = height

// Funkcja build zwraca nowy DOM Node o nazwie takiej jak wartość argumentu `name`
function build (item) {
  return document.createElement(item)
}

// Funkcja range zwraca tablicę o takiej długości jak wartość argumentu `size`.
// Wykorzystamy to do utworzenia x rzędów (height), w których będzie y kolumn (width).
function range (size) {
  var result = [];

  for (let i = 0; i < size; i++) {
    result.push(i)
  }

  return result
}

range(height).forEach(function (){
  var row = build('div');
  row.classList.add('row');

  range(width).forEach(function () {
    var cell = build('div');
    cell.classList.add('cell');
    row.appendChild(cell)
  })
  board.appendChild(row)
}) 
  


})()