export default function Sound() {
  const buttonPressAudio = new Audio('./sound/button-press.wav')
  const kichenTimer = new Audio('./sound/kichen-timer.mp3')
  const soundForest = new Audio('./sound/Floresta.wav')
  const soundRain = new Audio('./sound/Chuva.wav')
  const soundCoffeShop = new Audio('./sound/cafeteria.wav')
  const soundFirePlace = new Audio('./sound/Lareira.wav')

  soundForest.loop = true
  soundRain.loop = true
  soundCoffeShop.loop = true
  soundFirePlace.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kichenTimer.play()
  }

  function soundCardForest() {
    soundForest.play()
    soundRain.pause()
    soundCoffeShop.pause()
    soundFirePlace.pause()
  }

  function soundCardRain() {
    soundForest.pause()
    soundRain.play()
    soundCoffeShop.pause()
    soundFirePlace.pause()
  }

  function soundCardCoffeShop() {
    soundForest.pause()
    soundRain.pause()
    soundCoffeShop.play()
    soundFirePlace.pause()
  }

  function soundCardFirePlace() {
    soundForest.pause()
    soundRain.pause()
    soundCoffeShop.pause()
    soundFirePlace.play()
  }
  return {
    pressButton,
    timeEnd,
    soundCardForest,
    soundCardRain,
    soundCardCoffeShop,
    soundCardFirePlace
  }
}
