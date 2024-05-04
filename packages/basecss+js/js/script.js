function generateSentence() {
  var subjects = ["我", "你", "他", "她"];
  var verbs = ["喜欢", "学习", "看", "听"];
  var objects = ["玩原神", "电影", "中文", "音乐"];
  var randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  var randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  var randomObject = objects[Math.floor(Math.random() * objects.length)];
  var sentence = "";
  sentence = chineseSentences[Math.floor(Math.random() * chineseSentences.length)];
  document.getElementById("generated-sentence").textContent = sentence;
}