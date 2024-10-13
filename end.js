const finalScore = document.getElementById("finalScore");
const finalPercentage = document.getElementById("finalPercentage");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const MAX_QUESTIONS = 111;
const scorePercentage = (mostRecentScore / (MAX_QUESTIONS * 10)) * 100;

finalScore.innerText = `Puntuación: ${mostRecentScore}`;
finalPercentage.innerText = `Porcentaje: ${scorePercentage}%`;

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const saveHighScore = e => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/SpringTest2/");
};

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});
