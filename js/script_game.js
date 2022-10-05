const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

    /* Variavel para as fotos */
const character = [
  'cavalo',
  'batata',
  'woody',
  'buzz',
  'porquinho',
  'jessie',
  'forky',
  'slinky',
  'aliens',
  'rex',
]

/* criando filhos para a cartas */ 
const createElement = (tag, className) => {
  const element = document.createElement(tag)
  element.className = className
  return element
}

let firstCard = ''
let secondCard = ''

/* variavel para  finalizar o jogo */  
const checkEndGame = () => {        
  const disabledCards = document.querySelectorAll('.disabled-card')  /* querySelectorAll =>  vai selecionar todos com a mesma classe */ 
   
  /* se 20 cartas forem selecionadas  */ 
  if (disabledCards.length === 20) {
    clearInterval(this.loop)
   alert(`Parabéns voce concluiu o Jogo`)
  }
}

/* Verificar o caerto */ 
const checkCards = () => {
                                 /* Pegando os atributos  */
  const firstCharacter = firstCard.getAttribute('data-character')
  const secondCharacter = secondCard.getAttribute('data-character')

    /*  Se ele acertou */
  if (firstCharacter === secondCharacter) {

    /* adicionando apenas no filho   */ 
    firstCard.firstChild.classList.add('disabled-card')
    secondCard.firstChild.classList.add('disabled-card')

    /* Variaveis das cartas =  vazias*/ 
    firstCard = ''
    secondCard = ''

    /* finalizando o jogo */ 
    checkEndGame()

  } else {  /*  Se ele errou*/
    setTimeout(() => { /* dando um tempo para esconder as cartas  */
         
      firstCard.classList.remove('reveal-card');  /*  esconder as cartas */
      secondCard.classList.remove('reveal-card'); /*  esconder as cartas */

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}

/* variavel para revelar as cartas */ 
const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card')
    firstCard = target.parentNode

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card')
    secondCard = target.parentNode

    checkCards()

  }  
}

/* Variavel para criar as cartas */
const createCard = (character) => {

  const card = createElement('div', 'card')
  const front = createElement('div', 'face front')
  const back = createElement('div', 'face back')

  /* Pegando as imagem e colocando a variavel character */
  front.style.backgroundImage = `url('../Imagens/${character}.png')`

  /* criando filhos para a cartas */ 
  card.appendChild(front)
  card.appendChild(back)

    /* quando clicar revelar as cartas */ 
  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}


/* carregar o jogoo  */
const loadGame = () => {
    /* duplicar as imagens */
  const duplicateCharacters = [ ...character, ...character ];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

  shuffledArray.forEach((character) => {
    const card = createCard(character)
    grid.appendChild(card)
  })
}

        /* TEMPO */ 
const startTimer = () => {
    
/*  fazendo o loop*/ 
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML
    timer.innerHTML = currentTime + 1
  }, 1000);

}

/* Executar o jogo */
window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player')
  startTimer()
  loadGame()
}