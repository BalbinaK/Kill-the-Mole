'use strict';

(function () {
  var board = document.querySelector('#app'),
    scoreDiv = document.querySelector('.score'),
    playButton = document.querySelector('.play'),
    endScreen = document.querySelector('.endScreen'),
    height = 5,
    width = height,
    score = 0,
    id, id2;

  //wywołanie funkcji: tworzenia planszy, losowania kreta i losowania motyla
  renderBoard(board, height, width);

  //włączanie gry po wciśnięciu przycisku PLAY
  window.addEventListener('click', function (event) {
    if (event.target.classList.contains('play')) {
      endScreen.style.display = 'none';
      let allMoles = document.querySelectorAll('.mole')
      if (allMoles.length !== 0) {
        allMoles.forEach(x => x.classList.remove('mole'));
      }
      resetScore();
      play();
    }
  })

  killsMole();
  killsButterfly();



  function resetScore() {
    score = 0
    scoreDiv.innerHTML = 'Score: ' + score;
  }

  function play() {
    playButton.classList.remove('play')
    showCreature('mole');
    showCreature('butterfly');

    id = setInterval(function () {
      showAgainCreature('mole')
    }, 800)

    id2 = setInterval(function () {
      showAgainCreature('butterfly')
    }, 700)
  }

  function gameOver() {
    clearInterval(id);
    clearInterval(id2);
    endScreenAppears();
    playButton.classList.add('play')
  }

  function endScreenAppears() {
    endScreen.style.display = 'block';
  }

  function killsMole() {
    killThemAll('mole')
  }

  function killsButterfly() {
    killThemAll('butterfly')
  }

  // funkcja killThemAll na kliknięcie w komórkę z klasą o określonej nazwie animuje ruch jej obrazka w dół,
  // a sama komórka traci klasę po upłynięciu czasu animacji
  function killThemAll(name) {
    board.addEventListener('click', function (event) {
      if (event.target.classList.contains(name)) {
        name === 'mole' ? score += 1 : gameOver()
        scoreDiv.innerHTML = 'Score: ' + score;
        event.target.style.animation = 'creatureKilled 0.5s linear'
        setTimeout(function () {
          event.target.classList.remove(name)
        }, 201)
      }
    })
  }


  //drawNumberFromRange losuje liczbę z przedziału 0 < size
  function drawNumberFromRange(size) {
    return Math.floor(Math.random() * size);
  }

  //drawCellFromSelector losuje komórkę spośród komórek np. o danej klasie
  function drawCellFromSelector(selector) {
    var freeCells = document.querySelectorAll(selector);
    var randomIndex = drawNumberFromRange(freeCells.length);
    return freeCells[randomIndex];
  }

  //funkcja showCreature ze wszystkich wolnych komórek z klasą "cell" 
  //losuje jedną i nadaje jej dodatkową klasę (tutaj: "mole" lub "butterfly")
  function showCreature(name) {
    var randomCell = drawCellFromSelector('.cell:not(.mole):not(.butterfly)');
    randomCell.classList.add(name);
    randomCell.style.animation = 'creatureAppears 0.2s linear'
  }

  //funkcja showAgainCreature znajduje komórkę z klasą 'mole' lub 'butterfly'
  //i jeśli ją znajdzie zabiera jej tę klasę, po czym losuje nową pozycję tego samego stworzenia
  function showAgainCreature(name) {
    var creature = document.querySelector('.' + name);
    if (creature) {
      creature.style.animation = 'creatureHides 0.2s linear'
      creature.classList.remove(name);
    }
    showCreature(name);
  }

  // Funkcja build zwraca nowy DOM Node o nazwie takiej jak wartość argumentu `name`
  function build(item) {
    return document.createElement(item)
  }

  // Funkcja range zwraca tablicę o takiej długości jak wartość argumentu `size`.
  // Wykorzystamy to do utworzenia x rzędów (height), w których będzie y kolumn (width).

  function renderBoard(board, height, width) {
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