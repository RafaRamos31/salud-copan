export async function sendData(url, values) {
  const formValues = new FormData();

  formValues.append("departamento", values.departamento);
  formValues.append("contenido", values.contenido);
  formValues.append("multimedia", values.multimedia[0]);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al enviar noticia");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error.message;
  }
}
