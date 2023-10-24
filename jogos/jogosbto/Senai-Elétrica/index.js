const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()

  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>

    <button 
      
      class="button"
    >

    <a href="../../jogos.html#tabela-jogos">Voltar à página de jogos</a>
      
    </button>
  `
}


const questions = [
  {
    question: "Qual é a função de um disjuntor em um circuito elétrico?",
    answers: [
      { text: "Gerar eletricidade", correct: false },
      { text: "Armazenar energia elétrica", correct: false },
      { text: " Proteger o circuito contra sobrecargas e curtos-circuitos", correct: true },
      { text: "Controlar a intensidade da corrente elétrica", correct: false }
    ]
  },
  {
    question: "Qual é a unidade de medida da resistência elétrica?",
    answers: [
      { text: "Watt (W)", correct: false },
      { text: " Ampère (A)", correct: false },
      { text: " Volts (V)", correct: false },
      { text: "Ohm (Ω)", correct: true }
    ]
  },
  {
    question: "Qual é a função de um transformador em um sistema elétrico?",
    answers: [
      { text: "Transformar a tensão elétrica de um circuito", correct: true },
      { text: "Gerar eletricidade", correct: false },
      { text: "Armazenar energia elétrica", correct: false },
      { text: "Controlar a intensidade da corrente elétrica", correct: false }
    ]
  },
  {
    question: "O que é um relé elétrico?",
    answers: [
      { text: "Um dispositivo que gera eletricidade.", correct: false },
      { text: "Um interruptor controlado por um campo magnético.", correct: true },
      { text: "Um componente que armazena energia elétrica", correct: false },
      { text: "Um dispositivo usado para medir a resistência elétrica.", correct: false }
    ]
  },
  {
    question: 'Qual é o material comumente usado para isolar fios elétricos em instalações residenciais?',
    answers: [
      { text: 'Plástico', correct: true },
      { text: 'Vidro', correct: false },
      { text: 'Alumínio', correct: false },
      { text: 'Madeira', correct: false }
    ]
  },
  {
    question: 'Qual parte de um circuito elétrico fornece a energia necessária para o funcionamento dos dispositivos elétricos?',
    answers: [
      { text: 'Fios condutores', correct: false },
      { text: 'Gerador ou fonte de energia', correct: true },
      { text: 'Tomadas elétricas', correct: false },
      { text: 'Interruptores de luz', correct: false }
    ]
  },
  {
    question: 'Qual dispositivo é usado para medir a intensidade da corrente elétrica em um circuito?',
    answers: [
      { text: 'Multímetro', correct: true },
      { text: 'Disjuntor', correct: false },
      { text: 'Lâmpada incandescente', correct: false },
      { text: 'Chave de fenda', correct: false },
    ]
  },
  {
    question: 'Qual parte de um circuito elétrico é geralmente representada pelo símbolo "S" em diagramas elétricos?',
    answers: [
      { text: 'Fonte de energia', correct: false },
      { text: 'Lâmpada', correct: false },
      { text: 'Interruptor', correct: true },
      { text: 'Tomada', correct: false },
    ]
  },
  {
    question: 'Qual parte de um circuito elétrico fornece energia elétrica?',
    answers: [
      { text: 'Fios condutores', correct: false },
      { text: 'Fonte de energia', correct: true },
     
    ]
  },
  {
    question: 'Qual é a unidade de medida da potência elétrica?',
    answers: [
      { text: 'Watt (W)', correct: true },
      { text: ' Ampère (A)', correct: false },
     
    ]
  },
]