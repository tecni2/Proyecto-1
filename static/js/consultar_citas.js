// Función para obtener la lista de citas desde localStorage
function obtenerCitas() {
    let citas = localStorage.getItem("citas");
    return citas ? JSON.parse(citas) : [];
  }
  
  // Función para mostrar las citas en la tabla
  function mostrarCitas() {
    let citas = obtenerCitas();
    let tablaCitas = document.getElementById("tablaCitas");
  
    tablaCitas.innerHTML = ""; // Limpiar la tabla antes de cargar las citas
  
    citas.forEach((cita, index) => {
      let fila = document.createElement("tr");
  
      // Asegúrate de usar las claves correctas que coinciden con los datos almacenados
      fila.innerHTML = `
        <td data-label="#">${index + 1}</td>
      <td data-label="Cédula">${cita.cedulaUsuario || "Cédula no encontrada"}</td>
      <td data-label="Mascota">${cita.mascota || "Mascota no encontrada"}</td>
      <td data-label="Fecha">${cita.fecha || "Fecha no encontrada"}</td>
      <td data-label="Motivo">${cita.motivo || "Motivo no encontrado"}</td>
      `;
  
      tablaCitas.appendChild(fila);
    });
  }
  
  // Llama a mostrarCitas cuando se carga la página
  document.addEventListener("DOMContentLoaded", mostrarCitas);
  
  