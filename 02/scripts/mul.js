const score = document.getElementById('score');
let mulscores = JSON.parse(localStorage.getItem("mulscores"));
if (!score) {
    mulscores = 0;
}
score.innerHTML = mulscores;

const questions = document.getElementById('questions');
const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
const correctAns = Number(num1 * num2);
console.log(correctAns);
questions.innerHTML = `${num1} x ${num2}`;

const input = document.getElementById('input');
const formEl = document.getElementById('form');
formEl.addEventListener('submit', () => {
    const userAns = Number(input.value);
    if (userAns === correctAns) {
        score.innerText = mulscores++;
        savedScores();
    } else {
        score.innerHTML = mulscores--;
        savedScores();
    }
});

const savedScores = () => {
    localStorage.setItem("mulscores", JSON.stringify(mulscores));
};