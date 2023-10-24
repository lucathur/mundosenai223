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
    question: "Qual das seguintes ferramentas é geralmente usada para medir a rosca de parafusos e porcas?",
    answers: [
      { text: "Paquímetro", correct: true },
      { text: "Trena", correct: false },
      { text: "Nível de bolha", correct: false },
      { text: "Multímetro", correct: false }
    ]
  },
  {
    question: "Qual das seguintes ferramentas é usada para criar roscas em um furo pré-existente?",
    answers: [
      { text: " Chave de fenda", correct: false },
      { text: "Broca", correct: false },
      { text: " Torno mecânico", correct: true },
      { text: " Lâmina de serra", correct: false }
    ]
  },
  {
    question: "Qual termo é usado para descrever a capacidade de um material retornar à sua forma original após ser submetido a uma carga ou deformação?",
    answers: [
      { text: "Ductilidade", correct: false },
      { text: "Tenacidade", correct: false },
      { text: "Resiliência", correct: false },
      { text: "Elasticidade", correct: true }
    ]
  },
  {
    question: 'O que é um "rolamento de esferas" em mecânica?',
    answers: [
      { text: "Um tipo de ferramenta de corte", correct: false },
      { text: "Um tipo de junta soldada", correct: false },
      { text: "Um dispositivo para medir a temperatura", correct: false },
      { text: " Um elemento de máquina utilizado para reduzir o atrito entre peças", correct: true }
    ]
  },
  {
    question: "Qual das seguintes ferramentas é usada para medir a rugosidade de uma superfície?",
    answers: [
      { text: "Paquímetro", correct: false },
      { text: "Micrômetro", correct: false },
      { text: "Rugosímetro", correct: true },
      { text: "Compasso", correct: false }
    ]
  },
  {
    question: 'O que é um "torque" em mecânica?',
    answers: [
      { text: "Uma unidade de medida de comprimento", correct: false },
      { text: " Uma força que causa rotação", correct: true },
      { text: "Um tipo de parafuso", correct: false },
      { text: "Um tipo de óleo lubrificante", correct: false }
    ]
  },
  {
    question: 'O que é um "engrenagem helicoidal"?',
    answers: [
      { text: "Um tipo de rolamento", correct: false },
      { text: "Um dispositivo de medição de temperatura", correct: false },
      { text: "Um tipo de junta soldada", correct: false },
      { text: "Um tipo de engrenagem com dentes em espiral", correct: true }
    ]
  },
  {
    question: 'O que é uma "rosca métrica"?',
    answers: [
      { text: " Um tipo de rosca que segue o sistema métrico de unidades de medida", correct: true },
      { text: "Um tipo de rosca usada em eletrônica", correct: false },
    ]
  },
  {
    question: 'O que é um "reostato"?',
    answers: [
      { text: "Um dispositivo elétrico usado para controlar a resistência em um circuito", correct: true },
      { text: "Um instrumento de medição de pressão atmosférica", correct: false },
    ]
  },
  {
    question: "Qual destes elementos de máquina é usado para transmitir movimento rotativo entre eixos não paralelos?",
    answers: [
      { text: "Engrenagens cilíndricas", correct: false },
      { text: "Polias e correias", correct: true },
      { text: "Molas helicoidais", correct: false },
      { text: "Parafusos de fixação", correct: false }
    ]
  },
  
  
   
  


















]