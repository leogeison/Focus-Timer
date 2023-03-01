import Sound from './sound.js'
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function increase() {
    minutesDisplay.textContent = String(
      Number(minutesDisplay.textContent) + 1
    ).padStart(2, '0')
  }

  function decrease() {
    let newMinutes
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes < 1) {
      return
    }

    newMinutes = minutes - 1
    updateTimerDisplay(newMinutes, seconds)
  }

  function reset() {
    hold()
    updateTimerDisplay(minutes, 0)
  }

  function coutdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (minutes <= 0 && seconds <= 0) {
        Sound().timeEnd()
        resetControls()
        return
      }
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateTimerDisplay(minutes, String(seconds - 1))
      coutdown()
    }, 1000)
  }
  return {
    reset,
    hold,
    updateTimerDisplay,
    increase,
    decrease,
    coutdown
  }
}
