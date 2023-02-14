const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const increaseSound = document.querySelector('.increase-sound')
const decreaseSound = document.querySelector('.decrease-sound')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardFirePlace = document.querySelector('.fireplace')
const cardCoffeShop = document.querySelector('.coffe-shop')

play.addEventListener('click', function () {
  play.classList.add('hide')
  pause.classList.remove('hide')
  coutdown()
})

pause.addEventListener('click', function () {
  play.classList.remove('hide')
  pause.classList.add('hide')
})

stop.addEventListener('click', function () {
  play.classList.remove('hide')
  pause.classList.add('hide')
})

function coutdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    if (minutes <= 0 && seconds <= 0) {
      play.classList.remove('hide')
      pause.classList.add('hide')
      
      return
    }
    if (seconds <= 0) {
      seconds = 02
      
      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
    coutdown()
  }, 1000)
}
