// Función para obtener la lista de usuarios desde localStorage
function obtenerUsuarios() {
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

// Función para obtener la lista de mascotas desde localStorage
function obtenerMascotas() {
  return JSON.parse(localStorage.getItem("mascotas")) || [];
}

// Función para mostrar la lista de usuarios y sus mascotas en la tabla
function mostrarUsuariosConMascotas() {
  let usuarios = obtenerUsuarios();
  let mascotas = obtenerMascotas();
  let usuariosHTML = "";

  usuarios.forEach((usuario, index) => {
    // Filtrar las mascotas asociadas al usuario usando su cédula
    let mascotasUsuario = mascotas.filter(
      (mascota) => mascota.cedulaUsuario === usuario.cedula
    );

    // Crear una lista de mascotas en formato de texto
    let mascotasTexto =
      mascotasUsuario.length > 0
        ? mascotasUsuario
            .map((mascota) => `${mascota.nombre} (${mascota.raza})`)
            .join(", ")
        : "No tiene mascotas registradas";

    // Agregar la fila del usuario a la tabla
    usuariosHTML += `<tr>
                            <td>${index + 1}</td>
                            <td>${usuario.nombre}</td>
                            <td>${usuario.apellido}</td>
                            <td>${usuario.cedula}</td>
                            <td>${usuario.email}</td>
                            <td>${usuario.celular}</td>
                            <td>${usuario.acepta ? "Sí" : "No"}</td>
                            <td>${mascotasTexto}</td>
                         </tr>`;
  });

  document.getElementById("tablaUsuarios").innerHTML = usuariosHTML;
}

// Llamar a la función para mostrar usuarios y mascotas al cargar la página
document.addEventListener("DOMContentLoaded", mostrarUsuariosConMascotas);
