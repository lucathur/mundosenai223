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
    question: "O que a sigla LED representa?",
    answers: [
      { text: "Light Emitting Diode", correct: true },
      { text: "Low Energy Detector", correct: false },
      { text: "Long Electrical Device", correct: false },
      { text: "Long Electrical Device", correct: false }
    ]
  },
  {
    question: "O que faz um diodo?",
    answers: [
      { text: "Amplifica o sinal", correct: false },
      { text: "Regula a tensão", correct: false },
      { text: "Controla a frequência", correct: false },
      { text: "Permite o fluxo de corrente em um sentido", correct: true }
    ]
  },
  {
    question: "Qual dispositivo eletrônico é usado para amplificar sinais elétricos?",
    answers: [
      { text: "Capacitor", correct: false },
      { text: "Transistor", correct: true },
      { text: "Resistor", correct: false },
      { text: "Indutor", correct: false }
    ]
  },
  {
    question: 'Qual tipo de circuito permite que a corrente flua em apenas uma direção?',
    answers: [
      { text: "Circuito paralelo", correct: false },
      { text: "Circuito série", correct: true },
      { text: "Circuito misto", correct: false },
      { text: " Circuito aberto", correct: false }
    ]
  },
  {
    question: "O que é um osciloscópio?",
    answers: [
      { text: " Um tipo de resistor", correct: false },
      { text: "Um dispositivo para medir frequência", correct: false },
      { text: "Um instrumento para visualizar sinais elétricos", correct: true },
      { text: "Uma fonte de alimentação", correct: false }
    ]
  },
  {
    question: 'Qual é a unidade de medida da corrente elétrica?',
    answers: [
      { text: "Volts", correct: false },
      { text: "Amperes", correct: true },
      { text: "Ohms", correct: false },
      { text: "Hertz", correct: false }
    ]
  },
  {
    question: 'Qual é a função de um relé em um circuito elétrico?',
    answers: [
      { text: "Amplificar o sinal", correct: false },
      { text: "Armazenar energia", correct: false },
      { text: "Medir a tensão", correct: false },
      { text: " Abrir ou fechar um circuito com base em um sinal elétrico", correct: true }
    ]
  },
  {
    question: 'Qual componente eletrônico armazena carga elétrica?',
    answers: [
      { text: "Resistor", correct: false },
      { text: "Capacitor", correct: true },
    ]
  },
  {
    question: 'Qual componente eletrônico é usado para armazenar informações digitalmente?',
    answers: [
      { text: "Transistor", correct: true },
      { text: "Indutor", correct: false },
    ]
  },
  {
    question: "Qual componente é usado para proteger um circuito elétrico contra picos de tensão?",
    answers: [
      { text: "Transistor", correct: false },
      { text: "Indutor", correct: false },
      { text: "Fusível", correct: true },
      { text: "Potenciômetro", correct: false }
    ]
  },
  
  
   
  


















]