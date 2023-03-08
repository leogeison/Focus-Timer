export default function Theme() {
  const body = document.body
  const theme = document.querySelector('#themes')
  const lightMode = document.querySelector('.light-mode')
  const darkMode = document.querySelector('.dark-mode')
  const buttons = document.querySelectorAll('#cards button')
  let focusedButton = null

  theme.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    const isDarkMode = body.classList.contains('dark-mode')
    localStorage.setItem('isDarkMode', isDarkMode)

    lightMode.classList.toggle('hide')
    darkMode.classList.toggle('hide')
  })

  const isDarkMode = localStorage.getItem('isDarkMode') === 'true'
  if (isDarkMode) {
    body.classList.add('dark-mode')
    lightMode.classList.add('hide')
    darkMode.classList.remove('hide')
  }

  buttons.forEach(button => {
    button.addEventListener('focus', () => {
      if (focusedButton) {
        focusedButton.classList.remove('focus')
      }
      focusedButton = button
      button.classList.add('focus')
    })
  })
}
