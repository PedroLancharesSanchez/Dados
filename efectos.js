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


function reproducirAnimacionLanzamiento() {
  const cubilete = document.getElementById("cubilete");
  const lanzarSonido = new Audio("sounds/lanzar-dados.mp3");
  const rodarSonido = new Audio("sounds/rodar-dados.mp3");

  // Mostrar cubilete y reiniciar animación
  cubilete.style.display = "block";
  cubilete.style.animation = "none";
  void cubilete.offsetWidth; // truco para reiniciar animación
  cubilete.style.animation = "cubileteAnim 1.2s ease-in-out forwards";

  // Reproducir sonido de lanzamiento
  lanzarSonido.play().catch(() => {});

  // Después de la animación del cubilete, mostrar los dados
  setTimeout(() => {
    cubilete.style.display = "none";
    rodarSonido.play().catch(() => {});
    
    // ⚠️ Aquí NO mostramos los dados directamente
    // Se delega al `lanzarDados()` como ya lo hace (después de la animación)
  }, 1200);
}

