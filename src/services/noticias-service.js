//import { sendFiles } from "../controllers/google-controller.js";

export async function sendNoticia(url, values) {

  const file = values.multimedia[0];
  const chunkSize = 2 * 1024 * 1024; // Tamaño del fragmento en bytes
  let start = 0;
  let end = chunkSize;
  let currentChunk = 1;

  const totalChunks = Math.ceil(file.size / chunkSize);

  while (start < file.size) {
    const chunk = file.slice(start, end); // Lee el fragmento del archivo

    // Crea una solicitud para enviar el fragmento al backend
    const formData = new FormData();
    formData.append('name', file.originalname);
    formData.append('type', file.mimetype);
    formData.append('totalChunks', totalChunks);
    formData.append('actual', currentChunk);
    formData.append('totalSize', file.size);
    formData.append('chunk', chunk);

    // Realiza la solicitud al backend
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Error al enviar noticia:");
      }
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log(error)
    }


    // Actualiza los punteros para el siguiente fragmento
    start = end;
    end = Math.min(end + chunkSize, file.size);
    currentChunk++;
  }

  /*formValues.append("departamento", values.departamento);
  formValues.append("contenido", values.contenido);
  //formValues.append("archivos", await sendFiles(values.multimedia));

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
  }*/
}
