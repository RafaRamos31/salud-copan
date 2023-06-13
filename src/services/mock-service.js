export function mockNoticias() {
  return {
    data: [
      {
        _id: "64874f15784487c38b92eea4",
        departamento: {
          _id: "64874b401ccc73e359451bbd",
          nombre: "Nombre depto2",
          urlLogo: "google.com/logo",
          __v: 0,
        },
        fechaPublicacion: "1686589205872",
        contenido: "lorem ipsum 561",
        tipoMultimedia: "video",
        enlaces: ["https://www.youtube.com/watch?v=KS0bSlp-i4I"],
        __v: 0,
      },
      {
        _id: "64874f15784487c38b92eea5",
        departamento: {
          _id: "64874b401ccc73e359451bbd",
          nombre: "Nombre depto2",
          urlLogo: "google.com/logo",
          __v: 0,
        },
        fechaPublicacion: "1686589205901",
        contenido: "lorem ipsum 2",
        tipoMultimedia: "documento",
        enlaces: [
          "https://drive.google.com/file/d/1ok221_5RcCir5cIuzaRDrVykizNkFG1X/view?usp=sharing",
        ],
        __v: 0,
      },
      {
        _id: "64874fc8e889063fdd8093c0",
        departamento: {
          _id: "64874b401ccc73e359451bbd",
          nombre: "Nombre depto2",
          urlLogo: "google.com/logo",
          __v: 0,
        },
        fechaPublicacion: "1686589384264",
        contenido: "lorem ipsum 4",
        tipoMultimedia: "foto",
        enlaces: ["https://imgcom.masterd.es/49/blog/2023/02/42534.jpeg"],
        __v: 0,
      },
      {
        _id: "64874fc8e889063fdd8093bf",
        departamento: {
          _id: "64874b401ccc73e359451bbd",
          nombre: "Nombre depto2",
          urlLogo: "google.com/logo",
          __v: 0,
        },
        fechaPublicacion: "1686589384249",
        contenido: "lorem ipsum 3",
        enlaces: [],
        __v: 0,
      },
      {
        _id: "64874fc8e889063fdd8093c1",
        departamento: {
          _id: "64874b401ccc73e359451bbd",
          nombre: "Nombre depto2",
          urlLogo: "google.com/logo",
          __v: 0,
        },
        fechaPublicacion: "1686589384304",
        contenido: "lorem ipsum 5",
        tipoMultimedia: "galeria",
        enlaces: [
          "https://imgcom.masterd.es/49/blog/2023/02/42534.jpeg",
          "https://www.unir.net/wp-content/uploads/2017/06/NOTEC.jpg",
          "https://img2.rtve.es/imagenes/golpe-bit-nutricion-ciencia-25-05-21/1621939388655.jpg",
        ],
        __v: 0,
      },
    ],
    isLoading: false,
    error: null,
  };
}

export function mockDepartamentos(){
  return {
    data: [
      {
        _id: "64874b401ccc73e359451bbd",
        nombre: "Nutricion Infantil",
        urlLogo: "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
        __v: 0,
      },
      {
        _id: "648893832efaaaff55b2a843",
        nombre: "Educacion nutricional",
        urlLogo:
          "https://w7.pngwing.com/pngs/701/782/png-transparent-logo-book-book-writing-blue-text-comic-book.png",
        __v: 0,
      },
    ],
    isLoading: false,
    error: null
  }
}


