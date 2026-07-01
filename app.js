const multipleChoiceQuestions = [
  { phase: "3択問題", type: "choice", question: "Q1 介護報酬の審査・支払業務は、実際には誰が行っている？", choices: ["市町村が直接審査", "国民健康保険団体連合会に委託", "都道府県が代行"], answer: 1, explanation: "正解は②。市町村が保険者ですが、実務は国保連に委託されています。" },
  { phase: "3択問題", type: "choice", question: "Q2 償還払いとは？", choices: ["事業者が保険者に直接請求", "利用者がいったん全額支払い、後から保険給付分の払い戻しを受ける", "現物給付のみ"], answer: 1, explanation: "正解は②。福祉用具購入費・住宅改修費などは、原則として償還払い方式です。" },
  { phase: "3択問題", type: "choice", question: "Q3 区分支給限度基準額を超えて利用者が使いたい場合、市町村が独自に上乗せできる仕組みは？", choices: ["種類支給限度基準額", "区分支給限度基準額の上乗せ", "市町村特別給付"], answer: 1, explanation: "正解は②。市町村特別給付とは別物です。" },
  { phase: "3択問題", type: "choice", question: "Q4 特定のサービス種類について、市町村が独自に上限を設定できる制度は？", choices: ["種類支給限度基準額", "区分支給限度基準額", "支給限度額の一元管理"], answer: 0, explanation: "正解は①。地域のサービス提供体制に応じて、種類ごとに限度額を設定できます。" },
  { phase: "3択問題", type: "choice", question: "Q5 市町村特別給付の財源は？", choices: ["第1号保険料", "第2号保険料", "国庫負担"], answer: 0, explanation: "正解は①。市町村特別給付は第1号被保険者の保険料のみで賄われます。" },
  { phase: "3択問題", type: "choice", question: "Q6 交通事故などの第三者行為による給付調整（求償事務）の委託先は？", choices: ["都道府県", "国民健康保険団体連合会", "国民健康保険中央会"], answer: 1, explanation: "正解は②。介護報酬審査支払と同じく、国保連への委託業務です。" },
  { phase: "3択問題", type: "choice", question: "Q7 居宅サービス計画の作成を依頼する窓口を設置するのは？", choices: ["都道府県", "市町村（保険者）", "国保連"], answer: 1, explanation: "正解は②。ケアプラン作成依頼の受付窓口設置は市町村の事務です。" }
];

const trueFalseQuestions = [
  { phase: "○×問題", type: "truefalse", question: "Q8 介護報酬の審査・支払業務は、市町村がすべて直接行う。", answer: false, explanation: "×。市町村が保険者ですが、実務は国保連に委託されます。" },
  { phase: "○×問題", type: "truefalse", question: "Q9 償還払いでは、利用者がいったん全額を支払い、後から保険給付分の払い戻しを受ける。", answer: true, explanation: "○。福祉用具購入費や住宅改修費などで重要です。" },
  { phase: "○×問題", type: "truefalse", question: "Q10 区分支給限度基準額の上乗せと市町村特別給付は、同じ制度である。", answer: false, explanation: "×。混同しやすいですが別物です。" },
  { phase: "○×問題", type: "truefalse", question: "Q11 種類支給限度基準額は、サービス種類ごとに市町村が独自に上限を設定できる制度である。", answer: true, explanation: "○。地域のサービス提供体制に応じて設定できます。" },
  { phase: "○×問題", type: "truefalse", question: "Q12 市町村特別給付の財源には、国庫負担や第2号保険料も使える。", answer: false, explanation: "×。第1号被保険者の保険料のみです。" },
  { phase: "○×問題", type: "truefalse", question: "Q13 第三者行為による給付調整の求償事務は、国保連に委託できる。", answer: true, explanation: "○。国保連への委託業務です。" },
  { phase: "○×問題", type: "truefalse", question: "Q14 居宅サービス計画作成依頼の受付窓口を設置するのは、都道府県である。", answer: false, explanation: "×。設置するのは市町村です。" }
];

const fillQuestions = [
  { phase: "穴埋め問題", type: "fill", question: "Q15 介護報酬の審査・支払業務の実務は、□□に委託される。", answers: ["国保連"], explanation: "答えは国保連。市町村が保険者、実務は国保連です。" },
  { phase: "穴埋め問題", type: "fill", question: "Q16 償還払いは、利用者がいったん□□を支払い、後から払い戻しを受ける方式。", answers: ["全額"], explanation: "答えは全額。後から保険給付分の払い戻しを受けます。" },
  { phase: "穴埋め問題", type: "fill", question: "Q17 区分支給限度基準額を超えて使いたい場合、市町村は区分支給限度基準額の□□ができる。", answers: ["上乗せ", "上のせ"], explanation: "答えは上乗せ。市町村特別給付とは区別します。" },
  { phase: "穴埋め問題", type: "fill", question: "Q18 サービス種類ごとに市町村が上限を設定できるのは、□□支給限度基準額。", answers: ["種類", "種類支給限度基準額"], explanation: "答えは種類。種類支給限度基準額です。" },
  { phase: "穴埋め問題", type: "fill", question: "Q19 市町村特別給付の財源は、第□□号被保険者の保険料のみ。", answers: ["1", "１", "一", "第1号", "第１号"], explanation: "答えは第1号。国庫負担や第2号保険料は使えません。" },
  { phase: "穴埋め問題", type: "fill", question: "Q20 交通事故などの第三者行為による給付調整は、□□事務ともいう。", answers: ["求償", "求償事務"], explanation: "答えは求償。委託先は国保連です。" },
  { phase: "穴埋め問題", type: "fill", question: "Q21 居宅サービス計画作成依頼の受付窓口を設置するのは□□。", answers: ["市町村", "市町村（保険者）", "保険者"], explanation: "答えは市町村。受付窓口設置は市町村の事務です。" }
];

const quizData = [...multipleChoiceQuestions, ...trueFalseQuestions, ...fillQuestions];
const phaseTotals = { "3択問題": multipleChoiceQuestions.length, "○×問題": trueFalseQuestions.length, "穴埋め問題": fillQuestions.length };
const screens = { study: document.querySelector("#study-screen"), quiz: document.querySelector("#quiz-screen"), result: document.querySelector("#result-screen") };
const startQuizButton = document.querySelector("#start-quiz");
const backStudyButton = document.querySelector("#back-study");
const nextQuestionButton = document.querySelector("#next-question");
const retryQuizButton = document.querySelector("#retry-quiz");
const reviewVideoButton = document.querySelector("#review-video");
const phaseLabel = document.querySelector("#phase-label");
const questionCount = document.querySelector("#question-count");
const scoreText = document.querySelector("#score");
const progressBar = document.querySelector("#progress-bar");
const questionText = document.querySelector("#question-text");
const choicesElement = document.querySelector("#choices");
const fillForm = document.querySelector("#fill-form");
const fillAnswer = document.querySelector("#fill-answer");
const feedback = document.querySelector("#feedback");
const resultScore = document.querySelector("#result-score");
const resultMessage = document.querySelector("#result-message");
const resultBreakdown = document.querySelector("#result-breakdown");
let currentQuestion = 0;
let score = 0;
let phaseScores = { "3択問題": 0, "○×問題": 0, "穴埋め問題": 0 };
let answered = false;

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("screen-active"));
  screens[name].classList.add("screen-active");
}
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  phaseScores = { "3択問題": 0, "○×問題": 0, "穴埋め問題": 0 };
  answered = false;
  showScreen("quiz");
  renderQuestion();
}
function renderQuestion() {
  const item = quizData[currentQuestion];
  answered = false;
  phaseLabel.textContent = item.phase;
  questionText.textContent = item.question;
  questionCount.textContent = String(currentQuestion + 1) + " / " + String(quizData.length);
  scoreText.textContent = String(score) + "点";
  progressBar.style.width = String((currentQuestion / quizData.length) * 100) + "%";
  feedback.className = "feedback";
  feedback.textContent = "";
  nextQuestionButton.disabled = true;
  nextQuestionButton.textContent = currentQuestion === quizData.length - 1 ? "結果発表へ" : "次へ";
  choicesElement.replaceChildren();
  fillForm.classList.remove("active");
  fillAnswer.value = "";
  fillAnswer.disabled = false;

  if (item.type === "fill") {
    fillForm.classList.add("active");
    setTimeout(() => fillAnswer.focus(), 0);
    return;
  }

  const labels = item.type === "truefalse" ? ["○ 正しい", "× まちがい"] : ["①", "②", "③"];
  const choices = item.type === "truefalse" ? [true, false] : item.choices.map((_, index) => index);
  choices.forEach((value, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = item.type === "truefalse" ? labels[index] : labels[index] + " " + item.choices[index];
    button.addEventListener("click", () => selectAnswer(value));
    choicesElement.append(button);
  });
}
function selectAnswer(selectedValue) {
  if (answered) return;
  const item = quizData[currentQuestion];
  const isCorrect = selectedValue === item.answer;
  finishAnswer(isCorrect, item.explanation, selectedValue);
}
function submitFill(event) {
  event.preventDefault();
  if (answered) return;
  const item = quizData[currentQuestion];
  const normalized = normalizeAnswer(fillAnswer.value);
  const isCorrect = item.answers.some((answer) => normalizeAnswer(answer) === normalized);
  finishAnswer(isCorrect, item.explanation);
}
function normalizeAnswer(value) {
  return value.trim().replace(/[\s　]/g, "").replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 65248)).toLowerCase();
}
function finishAnswer(isCorrect, explanation, selectedValue) {
  answered = true;
  const item = quizData[currentQuestion];
  if (isCorrect) {
    score += 1;
    phaseScores[item.phase] += 1;
  }
  [...choicesElement.querySelectorAll(".choice-button")].forEach((button, index) => {
    button.disabled = true;
    if (item.type === "choice") {
      if (index === item.answer) button.classList.add("correct");
      if (index === selectedValue && !isCorrect) button.classList.add("wrong");
    }
    if (item.type === "truefalse") {
      const value = index === 0;
      if (value === item.answer) button.classList.add("correct");
      if (value === selectedValue && !isCorrect) button.classList.add("wrong");
    }
  });
  fillAnswer.disabled = true;
  scoreText.textContent = String(score) + "点";
  feedback.className = "feedback show " + (isCorrect ? "correct" : "wrong");
  feedback.textContent = (isCorrect ? "正解！ " : "惜しい！ ") + explanation;
  nextQuestionButton.disabled = false;
}
function goNext() {
  if (!answered) return;
  currentQuestion += 1;
  if (currentQuestion >= quizData.length) {
    showResult();
    return;
  }
  renderQuestion();
}
function showResult() {
  progressBar.style.width = "100%";
  showScreen("result");
  resultScore.textContent = String(score) + " / " + String(quizData.length);
  resultMessage.textContent = score === quizData.length
    ? "満点です。覚え歌から細かいひっかけまで、かなり固まっています。"
    : "結果を見たら、また覚え歌に戻って一周できます。歌と問題を往復すると定着しやすいです。";
  resultBreakdown.replaceChildren();
  Object.keys(phaseTotals).forEach((phase) => {
    const row = document.createElement("div");
    row.innerHTML = "<span>" + phase + "</span><strong>" + phaseScores[phase] + " / " + phaseTotals[phase] + "</strong>";
    resultBreakdown.append(row);
  });
}
startQuizButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener("click", goNext);
retryQuizButton.addEventListener("click", startQuiz);
fillForm.addEventListener("submit", submitFill);
backStudyButton.addEventListener("click", () => showScreen("study"));
reviewVideoButton.addEventListener("click", () => showScreen("study"));
