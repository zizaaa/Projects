const score = document.getElementById('score');
let addscores = JSON.parse(localStorage.getItem("addscores"));
if (!score) {
    addscores = 0;
}
score.innerHTML = addscores;

const questions = document.getElementById('questions');
const num1 = Math.floor(Math.random() * 1000);
const num2 = Math.floor(Math.random() * 1000);
const correctAns = Number(num1 + num2);
console.log(correctAns);
questions.innerHTML = `${num1} + ${num2}`;

const input = document.getElementById('input');
const formEl = document.getElementById('form');
formEl.addEventListener('submit', () => {
    const userAns = Number(input.value);
    if (userAns === correctAns) {
        score.innerText = addscores++;
        savedScores();
    } else {
        score.innerHTML = addscores--;
        savedScores();
    }
});

const savedScores = () => {
    localStorage.setItem("addscores", JSON.stringify(addscores));
};