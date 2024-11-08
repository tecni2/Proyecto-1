// Función para obtener la lista de usuarios desde localStorage
function obtenerUsuarios() {
  let usuarios = localStorage.getItem("usuarios");
  return usuarios ? JSON.parse(usuarios) : []; // Si no hay datos, devuelve un array vacío
}

// Función para guardar la lista de usuarios en localStorage
function guardarUsuarios(usuarios) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Función para registrar un nuevo usuario
function registrarUsuario(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los datos del formulario
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let cedula = document.getElementById("cedula").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let celular = document.getElementById("celular").value;
  let acepta = document.getElementById("acepta").checked;

  // Verificar que no haya campos vacíos y que se acepte los términos
  if (
    nombre === "" ||
    apellido === "" ||
    cedula === "" ||
    email === "" ||
    password === "" ||
    celular === "" ||
    !acepta
  ) {
    alert("Por favor, completa todos los campos y acepta los términos.");
    return;
  }

  // Verificar que el nombre y apellido solo contengan letras
  if (!esTextoValido(nombre) || !esTextoValido(apellido)) {
    alert("Los campos nombre y apellido solo deben contener letras.");
    return;
  }

  // Verificar que la cédula contenga solo números y tenga entre 7 y 10 dígitos
  if (!esCedulaValida(cedula)) {
    alert("La cédula debe contener solo números y tener entre 7 y 10 dígitos.");
    return;
  }

  // Verificar la contraseña (entre 7 y 10 caracteres, al menos una letra y un número)
  if (!esContrasenaValida(password)) {
    alert(
      "La contraseña debe tener entre 7 y 10 caracteres, incluir al menos una letra y un número."
    );
    return;
  }

  // Crear un objeto usuario con los datos del formulario
  const usuario = {
    nombre: nombre,
    apellido: apellido,
    cedula: cedula,
    email: email,
    password: password,
    celular: celular,
    acepta: acepta,
  };

  // Guardar el usuario en localStorage
  let usuarios = obtenerUsuarios();
  usuarios.push(usuario);
  guardarUsuarios(usuarios);

  // Confirmación de registro
  alert("Usuario registrado exitosamente");
  console.log(` 
        Validaciones ok,
        Nombre: ${nombre}
        Apellido: ${apellido}
        Cédula: ${cedula}
        Email: ${email}
        Contraseña: ${password}
        Celular: ${celular}
        Acepta términos: ${acepta}
    `);

  // Limpiar el formulario después de registrar
  document.getElementById("formularioRegistro").reset();
}

// Función para validar que el texto solo tenga letras
function esTextoValido(texto) {
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] >= "0" && texto[i] <= "9") {
      return false; // Si hay algún número, no es válido
    }
  }
  return true; // Solo letras
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

// Función para validar la contraseña (entre 7 y 10 caracteres, al menos una letra y un número)
function esContrasenaValida(contrasena) {
  let tieneNumero = false;
  let tieneLetra = false;

  if (contrasena.length < 7 || contrasena.length > 10) {
    return false; // La contraseña debe tener entre 7 y 10 caracteres
  }

  for (let i = 0; i < contrasena.length; i++) {
    if (contrasena[i] >= "0" && contrasena[i] <= "9") {
      tieneNumero = true;
    } else if (
      (contrasena[i] >= "A" && contrasena[i] <= "Z") ||
      (contrasena[i] >= "a" && contrasena[i] <= "z")
    ) {
      tieneLetra = true;
    }
  }

  // Verifica que cumpla ambas condiciones
  return tieneNumero && tieneLetra;
}

// Asignar el evento submit al formulario para registrar usuario
document
  .getElementById("formularioRegistro")
  .addEventListener("submit", registrarUsuario);
