(function () {
  var board = document.querySelector('#app');
  var height = 5;
  var width = height

  //wywołanie funkcji: tworzenia planszy, losowania kreta i losowania motyla
  renderBoard(board, height, width)
  showCreature('mole')
  showCreature('butterfly')

  //funkcja showCreature ze wszystkich wolnych komórek z klasą "cell" 
  //losuje jedną i nadaje jej dodatkową klasę (tutaj: "mole" lub "butterfly")
  
  function showCreature (name) {
    var freeCells = document.querySelectorAll('.cell:not(.mole):not(.butterfly)');
    var randomIndex = Math.floor(Math.random() * freeCells.length);
    var randomCell = freeCells[randomIndex];
    randomCell.classList.add(name);
  }

  // Funkcja build zwraca nowy DOM Node o nazwie takiej jak wartość argumentu `name`
  function build(item) {
    return document.createElement(item)
  }

  // Funkcja range zwraca tablicę o takiej długości jak wartość argumentu `size`.
  // Wykorzystamy to do utworzenia x rzędów (height), w których będzie y kolumn (width).
  
  function renderBoard(board, height, width){
    function range(size) {
      var result = [];
  
      for (let i = 0; i < size; i++) {
        result.push(i)
      }
  
      return result
    }
  
    range(height).forEach(function () {
      var row = build('div');
      row.classList.add('row');
  
      range(width).forEach(function () {
        var cell = build('div');
        cell.classList.add('cell');
        row.appendChild(cell)
      })
      board.appendChild(row)
    })
  }
  

})()