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
    question: "Qual é o maior planeta do sistema solar?",
    answers: [
      { text: "Terra", correct: false },
      { text: "Vênus", correct: false },
      { text: "Marte", correct: false },
      { text: "Júpiter", correct: true }
    ]
  },
  {
    question: "Qual é o símbolo químico para o elemento oxigênio?",
    answers: [
      { text: "O", correct: true },
      { text: "Ox", correct: false },
      { text: "Oxg", correct: false },
      { text: "Xygen", correct: false }
    ]
  },
  {
    question: "Qual é o maior oceano do mundo em área?",
    answers: [
      { text: "Oceano Atlântico", correct: false },
      { text: "Oceano Índico", correct: false },
      { text: "Oceano Pacífico", correct: true },
      { text: " Oceano Ártico", correct: false }
    ]
  },
  {
    question: "Qual é o maior deserto do mundo?",
    answers: [
      { text: "Deserto de Atacama", correct: false },
      { text: "Deserto do Saara", correct: true }
    ]
  },
  {
    question: 'Qual é a capital da França?',
    answers: [
      { text: 'Berlim', correct: false },
      { text: 'Madri', correct: false },
      { text: 'Londres', correct: false },
      { text: 'Paris', correct: true }
    ]
  },
  {
    question: 'Qual é o elemento químico mais abundante na crosta terrestre?',
    answers: [
      { text: 'Ferro', correct: false },
      { text: 'Oxigênio', correct: true },
      { text: 'Alumínio', correct: false },
      { text: 'Silício', correct: false }
    ]
  },
  {
    question: 'Quem é o autor da obra "Dom Quixote"?',
    answers: [
      { text: 'William Shakespeare', correct: false },
      { text: 'Miguel de Cervantes', correct: true },
      { text: 'Charles Dickens', correct: false },
      { text: 'Jane Austen', correct: false },
    ]
  },
  {
    question: 'Qual destes planetas é o mais próximo do Sol?',
    answers: [
      { text: 'Vênus', correct: true },
      { text: 'Marte', correct: false },
    ]
  },
  {
    question: 'Qual destes países é o maior em área territorial?',
    answers: [
      { text: 'Canadá', correct: false },
      { text: 'Rússia', correct: true },
    ]
  },
  {
    question: 'Qual destes oceanos faz fronteira com a costa leste dos Estados Unidos?',
    answers: [
      { text: ' Oceano Atlântico', correct: true },
      { text: 'Oceano Pacífico', correct: false },
      { text: 'Oceano Índico', correct: false },
      { text: 'Oceano Glacial Ártico', correct: false },
      
      
    ]
  },
  


















]