import state from "./state.js"

import * as el from "./elements.js"
import { reset } from "./action.js";
import { kichenTimer } from "./sounds.js";

export function countdown(){

  clearTimeout(state.countdownID) //todas as vezes que iniciar o contador irá limpar o settimeout e nao ira acumular varias vezes os 1000 milisegundos

  if(!state.isRunning){  //sempre que clicar em iniciar ficara alternando de true e false o isRunning
    return  // momento de parada da recursão
  }

  let minutes = Number(el.minutes.textContent) //transformando em numeros
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0 ){
    seconds = 59  
    minutes--
  }

  if(minutes < 0){
    reset()
    kichenTimer.play()
    return
  }



  updateDisplay(minutes, seconds)

  state.countdownID = setTimeout(() => countdown(), 1000) // callback function, e recursão

}

export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes // se o valor de minutes for null, utilizar o state.minutes
  seconds = seconds ?? state.seconds 


  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")

}