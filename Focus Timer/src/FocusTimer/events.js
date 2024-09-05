import { controls } from "./elements.js"
import * as actions from './action.js'
import * as el from './elements.js'
import state from "./state.js"
import { updateDisplay } from "./timer.js"

export function registerControls(){
  controls.addEventListener('click', (event) => { //capturando os clicks da section controls
    const action = event.target.dataset.action  //o target ira capturar em qual botao o usuário está clicando dentro do dataset no html
    if(typeof actions[action] != "function"){    // actions[action] é uma função "actions é um funcao, e actions retornara o nome da funcao"
      return   // irá parar a execução da função
    }

    actions[action]()
    

  })
}

export function setMinutes(){
  el.minutes.addEventListener('focus', () => {
  el.minutes.textContent = ''
  })


  el.minutes.onkeypress = (event) => /\d/.test(event.key) // estratégia usada para aceitar somento numeros

  el.minutes.addEventListener('blur', (event)=> {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time  //se o numero for maior que 60 alterar para  60, se for menor manter o numero digitado

    state.minutes = time
    state.seconds = 0

    updateDisplay()

    el.minutes.removeAttribute('contenteditable')

  })
}
 