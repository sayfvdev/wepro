let modal = document.getElementById("myModal");
let btn = document.getElementById("openModalBtn");
let span = document.querySelector(".close");


btn.onclick = () => {
    modal.style.display = "block";
}
span.onclick = () => {
    modal.style.display = "none";
}

const questions = document.querySelectorAll('.faq-question');

for (const question of questions) {
    question.onclick = () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('show');
    };
}
