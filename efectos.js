document.addEventListener("DOMContentLoaded", () => {
  const clickSound = new Audio("sounds/click.mp3");

  // Espera a que se cargue la metadata del sonido
  clickSound.addEventListener("loadedmetadata", () => {
    const halfTime = clickSound.duration / 2;

    document.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        clickSound.currentTime = halfTime;
        clickSound.play().catch(() => {});
      });
    });
  });
});


function reproducirAnimacionLanzamiento(callback) {
  const cubilete = document.getElementById("cubilete");
  const lanzarSonido = new Audio("sounds/lanzar-dados.mp3");
  const rodarSonido = new Audio("sounds/rodar-dados.mp3");

  cubilete.style.display = "block";
  cubilete.style.animation = "none";
  void cubilete.offsetWidth; // reinicia animación
  cubilete.style.animation = "cubileteAnim 1.2s ease-in-out forwards";

  lanzarSonido.play().catch(() => {});

  setTimeout(() => {
    cubilete.style.display = "none";
    rodarSonido.play().catch(() => {});
    
    // Ejecutar el callback para mostrar dados y continuar el turno
    if (typeof callback === "function") callback();
  }, 1200);
}

