const score = document.getElementById('score');
let divscores = JSON.parse(localStorage.getItem("divscores"));
if (!score) {
    divscores = 0;
}
score.innerHTML = divscores;

const questions = document.getElementById('questions');
const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
const correctAns = Number(Math.ceil(num1 / num2));
console.log(correctAns);
questions.innerHTML = `${num1} ÷ ${num2}`;

const input = document.getElementById('input');
const formEl = document.getElementById('form');
formEl.addEventListener('submit', () => {
    const userAns = Number(input.value);
    if (userAns === correctAns) {
        score.innerText = divscores++;
        savedScores();
    } else {
        score.innerHTML = divscores--;
        savedScores();
    }
});

const savedScores = () => {
    localStorage.setItem("divscores", JSON.stringify(divscores));
};