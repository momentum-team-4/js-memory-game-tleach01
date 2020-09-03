// setting up the card values & images

const cardsArray = [
  {
    name: 'psu',
    image: 'images/psumascot.jpeg'
  },
  {
    name: 'psu',
    image: 'images/psumascot.jpeg'
  },
  {
    name: 'osu',
    image: 'images/ohiohead.jpg'
  },
  {
    name: 'osu',
    image: 'images/ohiohead.jpg'
  },
  {
    name: 'bama',
    image: 'images/bamahead.jpg'
  },
  {
    name: 'bama',
    image: 'images/bamahead.jpg'
  },
  {
    name: 'georgia',
    image: 'images/georgiahead.jpg'
  },
  {
    name: 'georgia',
    image: 'images/georgiahead.jpg'
  },
  {
    name: 'lsu',
    image: 'images/lsuhead.jpg'
  },
  {
    name: 'lsu',
    image: 'images/lsuhead.jpg'
  },
  {
    name: 'oregon',
    image: 'images/oregonhead.jpg'
  },
  {
    name: 'oregon',
    image: 'images/oregonhead.jpg'
  }
]

const game = document.querySelector('.game')
const layout = document.createElement('section')
game.appendChild(layout)

// start new game button function
function refreshPage () {
  location.reload()
}

// shuffle cards when page loads

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

// display cards from array on page
// added front and back classes for when selected

cardsArray.forEach((item) => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.dataset.name = item.name

  const front = document.createElement('div')
  front.classList.add('front')

  const back = document.createElement('div')
  back.classList.add('back')
  back.style.backgroundImage = 'url(' + item.image + ')'

  layout.appendChild(card)
  card.appendChild(front)
  card.appendChild(back)
})

// when cards match to put a class of match on so the correct css is applied

const match = () => {
  const selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.add('match')
  })
}

// to reset the count of clicks to allow for the other matches to be selected

let resetClicks = () => {
  firstClick = ''
  secondClick = ''
  count = 0
  alreadyMatched = null

  let selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.remove('selected')
  })
}

// setting when a card is clicked and if the values are equal to run the match function

game.addEventListener('click', function (event) {
  const clicked = event.target
  if (clicked.nodeName === 'SECTION' || clicked === alreadyMatched ) {
    return
  }
  if (count < 2) {
    count++
    if (count === 1) {
      firstClick = clicked.dataset.name
      clicked.parentNode.classList.add('selected')
    } else {
      secondClick = clicked.parentNode.dataset.name
      clicked.parentNode.classList.add('selected')
    }
    if (firstClick !== '' && secondClick !== '') {
      if (firstClick === secondClick) {
        setTimeout(match, delay)
      }
      setTimeout(resetClicks, delay)
    }
    alreadyMatched = clicked
  }
})

let count = 0
let firstClick = ''
let secondClick = ''
let alreadyMatched = null
const delay = 1200
