function registrar_pet(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Recoge los valores de cada campo

  let cedula = document.getElementById("cedula").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let razaMascota = document.getElementById("raza").value;

  // Mostrar los datos en la consola si todas las validaciones pasan
  console.log(`
        Cedula del Usuario: ${cedula}
        Nombre de la Mascota: ${nombreMascota}
        Raza de la Mascota: ${razaMascota}
      `);
}

document
  .getElementById("formularioRegistroMascota")
  .addEventListener("submit", registrar_pet);
