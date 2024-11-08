document.getElementById("formularioRegistrarCita").addEventListener("submit", citas_pet);

// Función para registrar la cita
function citas_pet(event) {
  event.preventDefault();

  let cedula = document.getElementById("cedula").value;
  let mascotaSeleccionada = document.getElementById("mascota-cita").value;
  let fechaCita = document.getElementById("fecha-cita").value;
  let motivo = document.getElementById("motivo").value;

  if (!mascotaSeleccionada) {
    alert("Por favor, seleccione una mascota.");
    return;
  }

  let citas = JSON.parse(localStorage.getItem("citas")) || [];
  citas.push({
    cedulaUsuario: cedula,
    mascota: mascotaSeleccionada,
    fecha: fechaCita,
    motivo: motivo
  });
  localStorage.setItem("citas", JSON.stringify(citas));

  alert("Cita registrada exitosamente.");
}

// Función para cargar mascotas según la cédula ingresada
function consultarCedula() {
  let cedula = document.getElementById("cedula").value;
  if (!cedula) {
    alert("Por favor, ingrese una cédula.");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

  let usuarioEncontrado = usuarios.find(usuario => usuario.cedula === cedula);
  let selectMascota = document.getElementById("mascota-cita");

  // Limpiar opciones previas
  selectMascota.innerHTML = `<option value="">Seleccione una mascota</option>`;

  if (usuarioEncontrado) {
    let mascotasUsuario = mascotas.filter(mascota => mascota.cedulaUsuario === cedula);

    if (mascotasUsuario.length > 0) {
      mascotasUsuario.forEach(mascota => {
        let option = document.createElement("option");
        option.value = mascota.nombre;
        option.textContent = `${mascota.nombre} (${mascota.raza})`;
        selectMascota.appendChild(option);
      });
    } else {
      alert("Este usuario no tiene mascotas registradas.");
    }
  } else {
    alert("Cédula no registrada. Por favor, verifique.");
  }
}

