(function () {
var board = document.querySelector('#app');

// Funkcja build zwraca nowy DOM Node o nazwie takiej jak wartość argumentu `name`
function build (item) {
  return document.createElement(item)
}

// Funkcja range zwraca tablicę o takiej długości jak wartość argumentu `size`
function range (size) {
  var result = [];

  for (let i = 0; i < size; i++) {
    result.push(i)
  }
  
  return result
}

})()