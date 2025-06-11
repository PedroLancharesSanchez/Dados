// Reproducir sonido al hacer clic en cualquier botón
document.addEventListener("DOMContentLoaded", () => {
  const clickSound = new Audio("click.mp3"); // Asegúrate de tener este archivo en tu proyecto

  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });
  });
});

// Animación y sonido al tirar dados
function reproducirAnimacionLanzamiento() {
  const dados = document.querySelectorAll(".dice");
  const sonidoLanzar = new Audio("lanzar-dados.mp3"); // Asegúrate de tener este archivo
  sonidoLanzar.play();

  dados.forEach(dado => {
    dado.style.transform = "rotate(0deg)";
    dado.style.transition = "transform 0.5s ease";

    setTimeout(() => {
      dado.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
    }, 50);
  });
}
