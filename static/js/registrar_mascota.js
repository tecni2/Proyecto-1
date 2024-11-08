// Función para obtener la lista de usuarios desde localStorage
function obtenerUsuarios() {
  let usuarios = localStorage.getItem("usuarios");
  return usuarios ? JSON.parse(usuarios) : [];
}

// Función para obtener la lista de mascotas desde localStorage
function obtenerMascotas() {
  let mascotas = localStorage.getItem("mascotas");
  return mascotas ? JSON.parse(mascotas) : [];
}

// Función para guardar la lista de mascotas en localStorage
function guardarMascotas(mascotas) {
  localStorage.setItem("mascotas", JSON.stringify(mascotas));
}

// Función para registrar una nueva mascota asociada a un usuario
function registrarMascota(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los datos del formulario
  let cedula = document.getElementById("cedula").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let razaMascota = document.getElementById("raza").value;

  // Validaciones de los campos
  if (cedula === "" || nombreMascota === "" || razaMascota === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Verificar que la cédula contenga solo números y tenga entre 7 y 10 dígitos
  if (!esCedulaValida(cedula)) {
    alert("La cédula debe contener solo números y tener entre 7 y 10 dígitos.");
    return;
  }

  // Verificar si el usuario con la cédula existe
  let usuarios = obtenerUsuarios();
  const usuarioExiste = usuarios.some((usuario) => usuario.cedula === cedula);

  if (!usuarioExiste) {
    alert(
      "La cédula no está registrada. Por favor, verifique su cédula en Consultar Usuario."
    );
    return;
  }

  // Crear un objeto mascota con los datos del formulario
  const mascota = {
    cedulaUsuario: cedula,
    nombre: nombreMascota,
    raza: razaMascota,
  };

  // Guardar la mascota en localStorage asociada a la cédula del usuario
  let mascotas = obtenerMascotas();
  mascotas.push(mascota);
  guardarMascotas(mascotas);

  // Confirmación de registro
  alert("Mascota registrada exitosamente");
  console.log(` 
        Cedula del Usuario: ${cedula}
        Nombre de la Mascota: ${nombreMascota}
        Raza de la Mascota: ${razaMascota}
    `);

  // Limpiar el formulario después de registrar
  document.getElementById("formularioRegistroMascota").reset();
}

// Función para validar la cédula (solo números y entre 7 y 10 dígitos)
function esCedulaValida(cedula) {
  if (cedula.length < 7 || cedula.length > 10) {
    return false; // La cédula debe tener entre 7 y 10 dígitos
  }
  for (let i = 0; i < cedula.length; i++) {
    if (cedula[i] < "0" || cedula[i] > "9") {
      return false; // Solo debe contener números
    }
  }
  return true;
}

// Asignar el evento submit al formulario para registrar mascota
document
  .getElementById("formularioRegistroMascota")
  .addEventListener("submit", registrarMascota);
