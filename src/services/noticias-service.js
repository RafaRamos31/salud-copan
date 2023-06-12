export function getNoticias(){
  const apiURL = process.env.API_URL + '/noticias';

  fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    return data;
  })
  .catch(error => {
    // Aquí se maneja el error en caso de que la solicitud falle
  });
}