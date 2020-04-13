document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: "scala",
      img: "images/scala.png"
    },
    {
      name: "scala",
      img: "images/scala.png"
    },
    {
      name: "ruby",
      img: "images/ruby.png"
    },
    {
      name: "ruby",
      img: "images/ruby.png"
    },
    {
      name: "python",
      img: "images/python.png"
    },
    {
      name: "python",
      img: "images/python.png"
    },
    {
      name: "php",
      img: "images/php.png"
    },
    {
      name: "php",
      img: "images/php.png"
    },
    {
      name: "js",
      img: "images/js.png"
    },
    {
      name: "js",
      img: "images/js.png"
    },
    {
      name: "go",
      img: "images/go.png"
    },
    {
      name: "go",
      img: "images/go.png"
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //Create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/inter.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

 //Check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'images/github.png')
    cards[optionTwoId].setAttribute('src', 'images/github.png')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/inter.png')
    cards[optionTwoId].setAttribute('src', 'images/inter.png')
    alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = ' Congratulations! You found them all!'
  }
}



 //Flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})


