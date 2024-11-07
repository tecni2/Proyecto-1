function citas_pet(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  alert("capturando boton");
}

document
  .getElementById("formularioRegistrarCita")
  .addEventListener("submit", citas_pet);
