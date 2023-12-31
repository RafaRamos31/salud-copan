
export async function enviarArchivos(files){
  let archivos = []

  for (let i = 0; i < files.length; i++) {
    archivos = archivos.concat({
      id: await sendArchivo(files[i]),
      nombre: files[i].name, 
      weight: files[i].size, 
    })
  }

  return archivos;
}

export async function publicarArchivos(files){
  const sendData = await enviarArchivos(files)
  sendData.forEach(async file => {
    const formData = new FormData();
    formData.append('id', file.id);
    formData.append('nombre', file.nombre);
    formData.append('weight', file.weight);

    // Realiza la solicitud al backend
    try {
      await fetch(process.env.REACT_APP_API_URL + '/archivos', {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      throw new Error("Error al publicar el archivo: " + error);
    }
  })
  return true
}

export async function sendArchivo(file) {
  //1. Crear el archivo vacio y obtener el ID
  const createData = new FormData();
  createData.append('fileName', file.name);
  createData.append('type', file.type);

  let id = "";

  // Realiza la solicitud al backend
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/createChunk', {
      method: "POST",
      body: createData,
    });

    if (!response.ok) {
      throw new Error("Error al enviar noticia");
    }
    const createResponse = await response.json();
    id = createResponse.id;

  } catch (error) {
    throw new Error("Error al enviar noticia: " + error);
  }

  sendAllChunks(id, file);
  return id;
}


const sendAllChunks = async (id, file) => {

  const chunkSize = 2 * 1024 * 1024; //Tamaño del fragmento en bytes
  let start = 0;
  let end = chunkSize;
  let currentChunk = 1;

  const totalChunks = Math.ceil(file.size / chunkSize);

  while (start < file.size) {
    const chunk = file.slice(start, end); // Lee el fragmento del archivo

    // Crea una solicitud para enviar el fragmento al backend
    const formData = new FormData();
    formData.append('id', id);
    formData.append('totalChunks', totalChunks);
    formData.append('actual', currentChunk);
    formData.append('totalSize', file.size);
    formData.append('start', start);
    formData.append('end', end);
    formData.append('chunk', chunk);

    // Realiza la solicitud al backend
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/chunks', {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error("Error al enviar el archivo.");
      }

      const jsonData = await response.json();
      console.log(jsonData)
    } catch (error) {
      console.log(error)
    }

    // Actualiza los punteros para el siguiente fragmento
    start = end;
    end = Math.min(end + chunkSize, file.size);
    currentChunk++;
  }
}

export async function aumentarDescarga(fileId){
  fetch(process.env.REACT_APP_API_URL + '/archivos/' + fileId, {
    method: "PUT"
  });
}


export async function modificarArchivo(url, values){
  const data = new FormData();

  data.append('idArchivo', values.idArchivo)
  data.append('nombre', values.nombre)

  try {
    const response = await fetch(url, {
      method: "PUT",
      body: data,
    });
    return response.ok

  } catch (error) {
    return error.message;
  }
}



export async function eliminarArchivo(fileId){
  const data = new FormData();

  data.append('idArchivo', fileId)

  const result = await fetch(process.env.REACT_APP_API_URL + '/archivos', {
    method: "DELETE",
    body: data
  });

  return result.ok;
}

