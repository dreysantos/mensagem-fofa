const btnYes = document.getElementById("yes");
const btnNo = document.getElementById("no");
const pedido = document.getElementById("pedido");
const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

btnYes.addEventListener("click", () => {
    pedido.classList.add("hidden");
    sim.classList.remove("hidden");
    criarCorações();
});

btnNo.addEventListener("click", () => {
    pedido.classList.add("hidden");
    nao.classList.remove("hidden");
});

function criarCorações() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}