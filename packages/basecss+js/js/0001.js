const questions = [
  {
    question: "苏联1941年至1945年战争被称为",
    options: ["伟大卫国战争", "卫国战争", "北方战争", "苏芬战争"],
    answer: "伟大卫国战争",
    explanation: "伟大卫国战争及发生在1941-1945年见的苏联人民反法西斯战争;卫国战争为1812年沙俄地域拿破仑入侵的反侵略战争，后两个选项一眼假"
  },
  {
    question: "世界上领土面积最大的国家是？",
    options: ["俄罗斯联邦", "中华人民共和国", "美利坚合众国", "法兰西第五共和国"],
    answer: "俄罗斯联邦",
    explanation: "什么？我大明天下无敌！"
  },
  {
    question: "俄罗斯联邦使用的货币是",
    options: ["卢布", "卢比", "瑞士法郎", "非洲法郎"],
    answer: "卢布",
    explanation: "卢布不是布，民布就是布!（大嘘）"
  }
];

let currentQuestion;
let answeredCorrectly = false;
let usedQuestions = [];

const questionElement = document.getElementById("question");
const option1Element = document.getElementById("label1");
const option2Element = document.getElementById("label2");
const option3Element = document.getElementById("label3");
const option4Element = document.getElementById("label4");
const options = document.querySelectorAll('input[name="option"]');
const resultElement = document.getElementById("result");
const explanationButton = document.getElementById("explanation");
const explanationText = document.getElementById("explanation-text");
const nextQuestionButton = document.getElementById("next-question");

function getRandomQuestion() {
  // 从questions中随机选择一道还没被用过的题目
  let availableQuestions = questions.filter(q => !usedQuestions.includes(q));
  if (availableQuestions.length === 0) {
    // 如果所有题目都已经用过了，清空 usedQuestions , 重新开始出题
    usedQuestions = [];
    availableQuestions = questions;
  }
  const index = Math.floor(Math.random() * availableQuestions.length);
  const question = availableQuestions[index];
  usedQuestions.push(question);
  return question;
}

function displayQuestion() {
  answeredCorrectly = false;
  currentQuestion = getRandomQuestion();
  questionElement.textContent = currentQuestion.question;
  option1Element.textContent = currentQuestion.options[0];
  option2Element.textContent = currentQuestion.options[1];
  option3Element.textContent = currentQuestion.options[2];
  option4Element.textContent = currentQuestion.options[3];
  options.forEach((input) => input.checked = false);
  resultElement.textContent = "";
  explanationButton.style.display = "none";
  explanationText.textContent = "";
  nextQuestionButton.style.display = "none";
}

function checkAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected) {
    if (selected.labels[0].textContent === currentQuestion.answer) {
      resultElement.textContent = "是这样的";
      explanationButton.style.display = "block";
      answeredCorrectly = true;
    } else {
      resultElement.textContent = "鉴定为：喜欢玩原神是这样的，答案一眼就是→ " + currentQuestion.answer;
      explanationButton.style.display = "block";
      answeredCorrectly = false;
    }
    nextQuestionButton.style.display = "block";
  } else {
    resultElement.textContent = "逃兵！沙皇会不高兴的！";
  }
}

function showExplanation() {
  explanationText.textContent = currentQuestion.explanation;
  if (answeredCorrectly) {
    nextQuestionButton.style.display = "block";
  }
}

displayQuestion();