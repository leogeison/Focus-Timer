import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sound.js'
import Events from './events.js'
import Theme from './theme.js'
import {
  buttonPlay,
  buttonPause,
  secondsDisplay,
  minutesDisplay
} from './elements.js'

const controls = Controls({ buttonPlay, buttonPause })
const timer = Timer({
  secondsDisplay,
  minutesDisplay,
  resetControls: controls.reset
})
const sound = Sound()

Events(sound, controls, timer)
Theme()
