//import { sendFiles } from "../controllers/google-controller.js";

export async function sendNoticia(url, values) {
  let formValues = new FormData();

  formValues.append("departamento", values.departamento);
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
  }
}
