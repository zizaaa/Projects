const score = document.getElementById('score');
let subscores = JSON.parse(localStorage.getItem("subscores"));
if (!score) {
    subscores = 0;
}
score.innerHTML = subscores;

const questions = document.getElementById('questions');
const num1 = Math.floor(Math.random() * 1000);
const num2 = Math.floor(Math.random() * 1000);
const correctAns = Number(num1 - num2);
console.log(correctAns);
questions.innerHTML = `${num1} - ${num2}`;

const input = document.getElementById('input');
const formEl = document.getElementById('form');
formEl.addEventListener('submit', () => {
    const userAns = Number(input.value);
    if (userAns === correctAns) {
        score.innerText = subscores++;
        savedScores();
    } else {
        score.innerHTML = subscores--;
        savedScores();
    }
});

const savedScores = () => {
    localStorage.setItem("subscores", JSON.stringify(subscores));
};