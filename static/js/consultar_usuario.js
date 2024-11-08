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
                            <td data-label="#">${index + 1}</td>
                        <td data-label="Nombre">${usuario.nombre}</td>
                        <td data-label="Apellido">${usuario.apellido}</td>
                        <td data-label="Cédula">${usuario.cedula}</td>
                        <td data-label="Email">${usuario.email}</td>
                        <td data-label="Celular">${usuario.celular}</td>
                        <td data-label="Mascotas">${mascotasTexto}</td>
                         </tr>`;
  });

  document.getElementById("tablaUsuarios").innerHTML = usuariosHTML;
}

// Llamar a la función para mostrar usuarios y mascotas al cargar la página
document.addEventListener("DOMContentLoaded", mostrarUsuariosConMascotas);
