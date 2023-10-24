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
    question: 'O que é a "just-in-time" (JIT) na logística?',
    answers: [
      { text: "Um método de armazenamento de estoque em grandes quantidades", correct: false },
      { text: "Um sistema de rastreamento de encomendas", correct: false },
      { text: "Abordagem que entrega produtos apenas quando necessários.", correct: true },
      { text: " Um tipo de empilhadeira", correct: false }
    ]
  },
  {
    question: "Qual termo é usado para descrever o processo de movimentação de bens do fabricante para o consumidor final?",
    answers: [
      { text: "Armazenagem", correct: false },
      { text: "Distribuição", correct: true },
      { text: "Estoque", correct: false },
      { text: "Produção", correct: false }
    ]
  },
  {
    question: "Qual dos seguintes modos de transporte é mais adequado para o transporte de mercadorias a longas distâncias pelo mar?",
    answers: [
      { text: "Ferrovia", correct: false },
      { text: "Rodovia", correct: false },
      { text: "Aerovia", correct: false },
      { text: "Hidrovia", correct: true }
    ]
  },
  {
    question: 'O que significa a sigla "EDI" no contexto da logística?',
    answers: [
      { text: "Entrega Direta Internacional", correct: false },
      { text: "Eficiência de Distribuição Integrada", correct: false },
      { text: "Intercâmbio Eletrônico de Dados", correct: true },
      { text: "Estoque de Demanda Immediata", correct: false }
    ]
  },
  {
    question: "Qual é a função principal de um centro de distribuição na logística?",
    answers: [
      { text: "Produção de mercadorias", correct: false },
      { text: "Armazenamento de estoque", correct: true },
      { text: " Venda de produtos", correct: false },
      { text: "Transporte de mercadorias", correct: false }
    ]
  },
  {
    question: 'O que é o "cross-docking" em logística?',
    answers: [
      { text: "Um sistema de rastreamento de encomendas", correct: false },
      { text: " Um tipo de empilhadeira", correct: false },
      { text: "Uma técnica de armazenamento em grandes depósitos", correct: false },
      { text: "Transferência direta de mercadorias de entrada para saída.", correct: true }
    ]
  },
  {
    question: 'O que significa a sigla "SKU" no contexto da logística?',
    answers: [
      { text: "Unidade de Controle de Estoque", correct: true },
      { text: "Unidade de Manuseio de Carga", correct: false }
    ]
  },
  {
    question: 'O que significa a sigla "WMS" no contexto da logística?',
    answers: [
      { text: "Sistema de Gerenciamento de Armazéns", correct: true },
      { text: "Sistema de Monitoramento de Transporte", correct: false }
    ]
  },
  {
    question: 'O que é o "lead time" em logística?',
    answers: [
      { text: " O tempo gasto para entregar mercadorias ao cliente final", correct: false },
      { text: "O tempo necessário para produzir um produto", correct: false },
      { text: "O tempo de trânsito de mercadorias durante o transporte", correct: true },
      { text: "O tempo necessário para planejar uma estratégia de marketing", correct: false }
    ]
  },
  {
    question: 'O que é "carga consolidada" no contexto de logística?',
    answers: [
      { text: "Carga dividida em várias remessas para diferentes destinos.", correct: true },
      { text: "Carga que é transportada sem compartilhar espaço com outras.", correct: false },
    ]
  },
  
  

















]