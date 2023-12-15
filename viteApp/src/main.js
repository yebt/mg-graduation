import './style.css'

import JSConfetti from 'js-confetti'
const jc = new JSConfetti()

const contetShow = `
<h3>¡Felicidades Por Tu Graduación!</h3>
          <p>
            ¡Hoy es un día muy especial señorita Juanona 🍑! Jajaja 😂. Hoy se celebra 🎉🎉 que has alcanzado un logro
            maravilloso✨✨, un paso gigante en tu vida en el aspecto profesional 👩🏻‍🔬 y en tu crecimiento personal 🌳.
          </p>
          <p>
            Hoy festejamos 🥳 que por fin puedes recoger como fruto 🍍 un logro por el cual te esforzaste muchísimo💪🏽.
            Solo tú sabes cuánta sangre, sudor y lágrimas 💦 has derramado para alcanzar lo que hoy logras.
          </p>
          <p>
            Solo tú comprendes la cantidad de sacrificio 🔥 que debiste realizar y todas las pruebas 🏋🏻‍♀️ por las
            que
            has tenido que pasar para llegar a donde estás 🏔.
          </p>
          <p>
            Felicidades mi vieja hermosa 🎊 por tan impresionante logro. ¡Por alcanzar hoy, el título de ingeniera!
            🎓👩🏻‍🎓. Cada día demuestras lo importante y poderosa 💥 que eres.
          </p>

          <p>
            Tienes que saber que ningún esfuerzo que hagas por lo que sientas que es importante para ti, es en vano.
            Todo
            ese trabajo duro, todas esas noches de estudio 📚, todo tiene su recompensa 🎁. Y esa recompensa es el éxito
            🚀 que estás disfrutando hoy. ¡Bravo por ti! 👏🏽👏🏽👏🏽.
          </p>
          `
document.addEventListener('DOMContentLoaded', function (event) {
  const envelope = document.querySelector('.envelope')
  envelope.classList.remove('hide')
  setTimeout(function () {
    envelope.classList.remove('liftAndRotate')
    envelope.classList.add('heartbeat')

    envelope.addEventListener('click', function () {
      envelope.classList.remove('heartbeat')
      envelope.classList.remove('close')
      envelope.classList.add('open')
      setTimeout(function () {
        envelope.classList.add('reveal')
        const info = document.querySelector('.info')
        info.innerHTML = contetShow
        jc.addConfetti({
          emojis: ['✨', '💥', '💫', '🎓', '🥂', '🎊', '📜', '🍾', '👩‍🏫']
        }
        )
      }, 1000)
    })
  }, 2000)

  console.log(envelope)
})
/**
 * $( document ).ready(function() {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }

});
 */

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
