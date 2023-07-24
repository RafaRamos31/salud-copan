import { sendArchivo } from "./archivos-service.js";

export async function sendNoticia(url, values) {
  
  let archivos = []

  for (let i = 0; i < values.multimedia.length; i++) {
    archivos = archivos.concat({
      id: await sendArchivo(values.multimedia[i]),
      nombre: values.multimedia[i].name, 
      weight: values.multimedia[i].size, 
    })
  }

  const formValues = new FormData();
  formValues.append("departamento", values.departamento);
  formValues.append("contenido", values.contenido);
  formValues.append("archivos", JSON.stringify(archivos));

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al enviar noticia:");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error.message;
  }
}

export async function eliminarNoticia(idNoticia) {
  
  const formValues = new FormData();
  formValues.append("idNoticia", idNoticia);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/noticias', {
      method: "DELETE",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al eliminar noticia");
    }
    const jsonData = await response.json();
    console.log(jsonData)
    return jsonData;
  } catch (error) {
    return error.message;
  }
}
