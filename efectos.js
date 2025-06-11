document.addEventListener("DOMContentLoaded", () => {
  const clickSound = new Audio("click.mp3");

  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    });
  });
});

function reproducirAnimacionLanzamiento() {
  const dados = document.querySelectorAll(".dice");
  const sonidoLanzar = new Audio("lanzar-dados.mp3");
  sonidoLanzar.play().catch(() => {});

  dados.forEach(dado => {
    dado.style.transition = "transform 0.3s ease";
    dado.style.transform = "scale(1.2) rotate(0deg)";

    setTimeout(() => {
      dado.style.transform = `scale(1) rotate(${Math.random() * 360}deg)`;
    }, 100);
  });
}
