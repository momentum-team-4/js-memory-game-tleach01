// cards to flip when clicked, use toggle

// cards to lock when matched

// shuffle cards on load/restart - random number in math
// - restart button & levels

// eventListener

// display timer

// congrats after all cards are matched

const cardsArray = [
  {
    name: 'psu',
    image: 'images/psulogo.jpeg'
  },
  {
    name: 'psu',
    image: 'images/psulogo.jpeg'
  },
  {
    name: 'osu',
    image: 'images/ohiostatelogo.png'
  },
  {
    name: 'osu',
    image: 'images/ohiostatelogo.png'
  },
  {
    name: 'bama',
    image: 'images/bamalogo.jpg'
  },
  {
    name: 'bama',
    image: 'images/bamalogo.jpg'
  },
  {
    name: 'georgia',
    image: 'images/georgialogo.png'
  },
  {
    name: 'georgia',
    image: 'images/georgialogo.png'
  },
  {
    name: 'lsu',
    image: 'images/lsulogo.png'
  },
  {
    name: 'lsu',
    image: 'images/lsulogo.png'
  },
  {
    name: 'michst',
    image: 'images/michstlogo.gif'
  },
  {
    name: 'michst',
    image: 'images/michstlogo.gif'
  }
]

const game = document.querySelector('.game')
const timer = document.querySelector('.timer')
const layout = document.createElement('section')

function shuffle (cardsArray) {
  for (let i = cardsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = cardsArray[i]
    cardsArray[i] = cardsArray[j]
    cardsArray[j] = temp
  }
  return cardsArray
}

shuffle(cardsArray)

game.appendChild(layout)

cardsArray.forEach((item) => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.dataset.name = item.name
  //   card.style.backgroundImage = item.image
  layout.appendChild(card)
  card.innerHTML = '<i class="fas fa-football-ball"></i>'
})

game.addEventListener('click', function (event) {
  const clicked = event.target
  if (count < 2) {
    count++
    if (count === 1) {
      firstClick = clicked.dataset.name
      clicked.classList.add('selected')
    } else {
      secondClick = clicked.dataset.name
      clicked.classList.add('selected')
    }
    if (firstClick !== '' && secondClick !== '') {
      if (firstClick === secondClick) {
        match()
      }
    }
  }
})

let count = 0
let firstClick = ''
let secondClick = ''

const match = () => {
  const selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.add('match')
  })
}
