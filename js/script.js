document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const surprise = document.getElementById('surpriseSection');
    const choice = document.getElementById('choiceSection');
    const message = document.getElementById('messageSection');
    const backBtn = document.getElementById('backBtn');
    const backBtn2 = document.getElementById('backBtn2');
    const select = document.getElementById('presentSelect');
    const goSelect = document.getElementById('goSelect');

    btnYes.onclick = () => { choice.classList.add('hidden');
        surprise.classList.remove('hidden'); }
    btnNo.onclick = () => { choice.classList.add('hidden');
        message.classList.remove('hidden'); }

    backBtn.onclick = backBtn2.onclick = () => {
        surprise.classList.add('hidden');
        message.classList.add('hidden');
        choice.classList.remove('hidden');
    }

    goSelect.onclick = () => {
        const v = select.value;
        if (v === "verPresente") { choice.classList.add('hidden');
            surprise.classList.remove('hidden'); } else if (v === "verMensagem") { choice.classList.add('hidden');
            message.classList.remove('hidden'); } else select.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], { duration: 300 });
    };
});

/* Corações */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 600);