
            /*VARIAVEIS  */ 

const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login_form')

            /*    HABILITAR O BOTÃO    */ 
const validateInput = ({target}) => {

    if(target.value.length > 2){  /*  ELE HABILITA SE TIVER MAIS DE 2 CARACTERES */ 
        button.removeAttribute('disabled')
    } else{
        button.setAttribute('disabled', '') /*  ELE DESABILITA SE TIVER MENOS DE 2 CARACTERES */ 
    }
}

input.addEventListener('input',validateInput)

/*   QUANDO CLICAR (play) INICIAR O JOGO    */

const handSubmit = (event) =>{
    event.preventDefault()
    localStorage.setItem('player', input.value)
    window.location='pages/game.html' /* Pagina do jogo  */ 

}

input.addEventListener('input',validateInput)
form.addEventListener('submit',handSubmit)

