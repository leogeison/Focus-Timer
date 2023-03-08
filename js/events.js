import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  cardForest,
  cardRain,
  cardFirePlace,
  cardCoffeShop,
  volumeRain,
  volumeForest,
  volumeFirePlace,
  volumeCoffeshop
} from './elements.js'

export default function Events(sound, controls, timer) {
  buttonPlay.addEventListener('click', function () {
    sound.pressButton()
    controls.play()
    timer.coutdown()
  })

  buttonPause.addEventListener('click', function () {
    sound.pressButton()
    controls.reset()
    timer.hold()
  })

  buttonStop.addEventListener('click', function () {
    sound.pressButton()
    timer.reset()
    controls.reset()
  })

  buttonIncrease.addEventListener('click', function () {
    sound.pressButton()
    timer.increase()
  })

  buttonDecrease.addEventListener('click', function () {
    sound.pressButton()
    timer.decrease()
  })

  cardForest.addEventListener('click', function () {
    sound.soundCardForest()
  })

  cardRain.addEventListener('click', function () {
    sound.soundCardRain()
  })

  cardFirePlace.addEventListener('click', function () {
    sound.soundCardFirePlace()
  })

  cardCoffeShop.addEventListener('click', function () {
    sound.soundCardCoffeShop()
  })

  volumeForest.addEventListener('input', function () {
    sound.soundForest.volume = this.value
  })

  volumeRain.addEventListener('input', function () {
    sound.soundRain.volume = this.value
  })

  volumeFirePlace.addEventListener('input', function () {
    sound.soundFirePlace.volume = this.value
  })

  volumeCoffeshop.addEventListener('input', function () {
    sound.soundCoffeShop.volume = this.value
  })
}
