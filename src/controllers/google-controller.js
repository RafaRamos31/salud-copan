/**
 * Archivo para definir la logica de conexion, autorizacion y envio de datos a Google Drive
 *
 * Autor: USAID - Proyecto Avanzando por la Salud de Honduras
 * Fecha: Junio 2023
 * Versión: 1.0.0
 */

import stream from "stream";
import { google } from "googleapis";


//Se define el alcance del permiso de operacion, en este caso acceso total en Drive
const SCOPES = ["https://www.googleapis.com/auth/drive"];

//Se  crea el objeto de credenciales
const auth = new google.auth.GoogleAuth({
  keyFilename: '../../credentials.json',
  scopes: SCOPES,
});

/**
 * Procesa los archivos recibidos en la peticion POST de la API, 
 * y los envia a Google Drive, y devolviendo un arreglo con el nombre de los archivos y el enlace de Drive generado
 * @param {[File]} files //Un arreglo con todos los archivos enviados para subir al almacenamiento de Google Drive
 * @returns Un arreglo con todos los objetos de Archivo en MongoDB
 */
export async function sendFiles(files){
  let archivos = [];
  try {
    //Se actualiza el arreglo de Archivos cada vez que se sube un archivo.
    for (let i = 0; i < files.length; i++) {

      const archivo = {
        nombre: files[i].originalname,
	      weight: files[i].size,
        id: await uploadFile(files[i])
      }

      archivos = archivos.concat(archivo);
    }
    return JSON.stringify(archivos);
  } catch (f) {
    throw new Error(f.message);
  }
}

/**
 * Proceso encargado de la conexion con Google Drive, y la subida de un archivo, 
 * devolviendo el enlace formateado de dicho archivo
 * @param {File} fileObject El archivo a ser subido a Google Drive
 * @returns El enlace generado del archivo subido
 */
const uploadFile = async (fileObject) => {
  //Genera un stream de datos para el procesamiento de los Bytes del archivo
  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject.buffer);

  //Se crea el archivo usando las credenciales de Google Drive y el stream de bytes que componen el archivo.
  const { data } = await google.drive({ version: "v3", auth }).files.create({
    media: {
      mimeType: fileObject.mimeType,
      body: bufferStream,
    },
    requestBody: {
      //Se define que el archivo conserve su nombre original
      name: fileObject.originalname,
      //Se establece la carpeta donde se guardará la informacion
      parents: [process.env.GOOGLE_FOLDER_ID],
    },
    fields: "id,name",
  });
  
  //Genera una URL valida en base al ID generado por el archivo guardado
  return data.id;
};