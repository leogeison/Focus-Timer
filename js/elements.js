const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase-time')
const buttonDecrease = document.querySelector('.decrease-time')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardFirePlace = document.querySelector('.fireplace')
const cardCoffeShop = document.querySelector('.coffe-shop')

const volumeForest = cardForest.querySelector('input')
const volumeRain = cardRain.querySelector('input')
const volumeFirePlace = cardFirePlace.querySelector('input')
const volumeCoffeshop = cardCoffeShop.querySelector('input')

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  minutesDisplay,
  secondsDisplay,
  cardCoffeShop,
  cardRain,
  cardFirePlace,
  cardForest,
  volumeRain,
  volumeForest,
  volumeFirePlace,
  volumeCoffeshop
}
