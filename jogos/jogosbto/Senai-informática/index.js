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
    question: "O que significa a sigla CPU?",
    answers: [
      { text: "Unidade Central de Processamento.", correct: true },
      { text: "É um dispositivo de armazenamento de dados.", correct: false },
      { text: "Unidade de Controle de Processamento", correct: false },
      { text: "Central de Processamento Único.", correct: false },
    ]
  },
  {
    question: "Qual é a função da memória RAM em um computador?",
    answers: [
      { text: "Armazenar dados mesmo quando o computador for desligado.", correct: false },
      { text: "Fornecer armazenamento temporário de dados e programas em uso ativo. ", correct: true },
      { text: "Melhorar o sistema de rede no computador.", correct: false },
      { text: "Prejudicar a otimização do computador.", correct: false }
    ]
  },
  {
    question: "O que é um sistema operacional?",
    answers: [
      { text: "É um hardware.", correct: false },
      { text: " Controla programas, dados e operações essenciais.", correct: false },
      { text: " Software intermediário entre hardware e programas..", correct: true },
      { text: "Sistema de programação.", correct: false }
    ]
  },
  {
    question: "O que é hardware? ",
    answers: [
      { text: "Componentes físicos do computador, como processador, HD e RAM.", correct: true },
      
      { text: "A parte lógica do computador, incluindo programas e o sistema operacional.", correct: false }
    ]
  },
  {
    question: 'O que é um endereço IP?',
    answers: [
      { text: 'É uma sequência de números aleatórios', correct: false },
      { text: 'Um número único atribuído a cada dispositivo conectado a uma rede. ', correct: true },
      { text: 'Ferramenta de hardware', correct: false },
      { text: 'Sistema operacional', correct: false },
    ]
  },
  {
    question: " Qual é a função principal da memória RAM em um computador?",
    answers: [
      { text: "Armazenar permanentemente os dados.",correct: false },
      { text: "Controlar a energia elétrica fornecida ao computador.",correct: false},
      { text: "Armazenar temporariamente dados em uso pelo sistema e programas.",correct: true},
      { text: "Gerar saída de vídeo para o monitor.",correct: false},
    ]
  },
  {
    question: 'Qual é a extensão de arquivo comum para documentos de texto criados no Microsoft Word?',
    answers: [
      { text: '.pdf', correct: false },
      { text: '.docx', correct: true },
      { text: ' .jpg', correct: false },
      { text: 'exe', correct: false },
    ]
  },
  {
    question: 'Qual é a combinação de teclas frequentemente usada para "copiar" um item em um computador?',
    answers: [
      { text: 'Ctrl + C', correct: true },
      { text: 'Alt + A', correct: false },
      { text: ' Shift + S', correct: false },
      { text: 'F2', correct: false },
    ]
  },
  {
    question: 'Qual componente do computador é responsável por exibir informações visuais, como texto e imagens?',
    answers: [
      { text: ' Placa-mãe', correct: false },
      { text: 'Unidade de Disco Rígido (HDD)', correct: false },
      { text: 'Monitor', correct: true },
      { text: 'Memória RAM', correct: false },
    ]
  },







]