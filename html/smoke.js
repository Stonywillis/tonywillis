document.addEventListener("DOMContentLoaded", () => {
    let smoke = document.getElementById("smoke");

    function getRandomColor() {
        const colors = ["#B2BEB5", "#7393B3", "#36454F", "#A9A9A9", "#D3D3D3", "#C0C0C0", "#899499"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createsmoke(e) {
        let elem = document.createElement("div");
        elem.classList.add("elem");

        elem.style.left = `${e.clientX}px`;
        elem.style.top = `${e.clientY}px`;
        elem.style.background = `radial-gradient(circle, ${getRandomColor()} 0%, rgba(0, 0, 0, 0) 80%)`;

        smoke.appendChild(elem);
        setTimeout(() => elem.remove(), 1200);
    }

    document.body.addEventListener("mousemove", createsmoke);
});