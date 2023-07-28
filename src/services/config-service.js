export async function updateGeneralConfig(values) {

  const formValues = new FormData();
  formValues.append("titulo", values.titulo);
  formValues.append("subtitulo", values.subtitulo);
  formValues.append("departamento", values.departamento);
  formValues.append("nosotros", values.nosotros);
  formValues.append("mensaje", values.mensaje);
  formValues.append("autor", values.autor);
  formValues.append("mision", values.mision);
  formValues.append("vision", values.vision);
  formValues.append("urlMapa", values.urlMapa);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/config/general', {
      method: "PUT",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al actualizar la configuracion.");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error.message;
  }
}
