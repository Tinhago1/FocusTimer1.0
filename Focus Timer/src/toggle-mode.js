let darkMode = true //variavel de controle para o site começar em darkmode
const ButtonToggle = document.getElementById('toggle-mode')


ButtonToggle.addEventListener('click', (event) =>{

  document.documentElement.classList.toggle('light')

  const mode = darkMode ? 'Dark' : 'Light'

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

  darkMode = !darkMode

})