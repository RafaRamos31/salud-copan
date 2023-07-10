export function mockNoticias() {
  return {
    data: [
      {
        "_id": "64a43ddf944185a901df0b8e",
        "departamento": {
          "_id": "648893832efaaaff55b2a843",
          "nombre": "Departamento B",
          "urlLogo": "https://w7.pngwing.com/pngs/701/782/png-transparent-logo-book-book-writing-blue-text-comic-book.png",
          "__v": 0
        },
        "fechaPublicacion": "1688485343934",
        "contenido": "Junta de directiva",
        "archivos": [
          {
            "_id": "64a43ddf944185a901df0b8b",
            "nombre": "es-hoja-cuadriculada-negro.pdf",
            "tipo": "Documento",
            "tamano": 45345,
            "enlace": "https://drive.google.com/file/d/19oyFwGEY6ojlE4YH8Ti_zTzrYWN0kloV/view",
            "descargar": "https://drive.google.com/u/0/uc?id=19oyFwGEY6ojlE4YH8Ti_zTzrYWN0kloV&export=download",
            "totalDescargas": 456,
            "__v": 0
          }
        ],
        "__v": 0
      },
      {
        "_id": "64a437066a108bbb415a02c5",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1688483590068",
        "contenido": "Publicacion con una imagen",
        "archivos": [
          {
            "_id": "64a436756a108bbb415a02bc",
            "nombre": "backImage.png",
            "tipo": "Imagen",
            "enlace": "https://drive.google.com/file/d/1ueXoe_8zVBxOSINhLC8I3aOrH0AXZaM0/view",
            "__v": 0
          }
        ],
        "__v": 0
      },
      {
        "_id": "64a436756a108bbb415a02bf",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1688483445538",
        "contenido": "Publicacion con imagenes",
        "archivos": [
          {
            "_id": "64a436736a108bbb415a02ba",
            "nombre": "medLogo.png",
            "tipo": "Imagen",
            "enlace": "https://drive.google.com/file/d/1ZeJ688gHPjiapFYp2_DQlinwjv1V_kF2/view",
            "__v": 0
          },
          {
            "_id": "64a436756a108bbb415a02bc",
            "nombre": "backImage.png",
            "tipo": "Imagen",
            "enlace": "https://drive.google.com/file/d/1ueXoe_8zVBxOSINhLC8I3aOrH0AXZaM0/view",
            "__v": 0
          }
        ],
        "__v": 0
      },
      {
        "_id": "64a435b86a108bbb415a02b8",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1688483256729",
        "contenido": "El 15 de junio....",
        "archivos": [
          {
            "_id": "64a435b66a108bbb415a02b3",
            "nombre": "Cuarta Revolucion Industrial.pptx",
            "tipo": "Documento",
            "enlace": "https://drive.google.com/file/d/1_R2a4LDnp_K23SH2jWkmWMv91f4CLqoT/view",
            "__v": 0
          },
          {
            "_id": "64a435b86a108bbb415a02b5",
            "nombre": "EconomÃ­a Colaborativa-EconomÃ­a Naranja.pptx",
            "tipo": "Documento",
            "enlace": "https://drive.google.com/file/d/19sHx3qzVuKt3n5iB7OhEN1aVSFQoAtPX/view",
            "__v": 0
          }
        ],
        "__v": 0
      }
    ],
    isLoading: false,
    error: null,
  };
}

export function mockCountNoticias(){
  return {
    data: {
      "filecount": 26
    },
    isLoading: false,
    error: null
  }
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

export function mockArchivos() {
  return {
    data: [
      {
          "_id": "648c89a48b9c471d47f0e56e",
          "tipoMultimedia": "Documento",
          "enlaces": [
              "https://drive.google.com/file/d/1oL6boFyP1P-C3-sPq2-ivYm6YxfdnI6f/view"
          ],
          "__v": 0
      },
      {
          "_id": "648c7b0686d8783bfec98504",
          "tipoMultimedia": "Documento",
          "enlaces": [
              "https://drive.google.com/file/d/1mzD3tu2DgEXdLt51k8OPWdQqM8HNbMHg/view"
          ],
          "__v": 0
      },
      {
          "_id": "648b4aa006f7a6994e15f7df",
          "tipoMultimedia": "Documento",
          "enlaces": [
              "https://drive.google.com/file/d/1j-Bj_URE4WVEw81h2Rm-LONwnHDhs1Qj/view"
          ],
          "__v": 0
      },
      {
          "_id": "648b485f858728bf9dd819bf",
          "tipoMultimedia": "Documento",
          "enlaces": [
              "https://drive.google.com/file/d/1S9cyM2ssSp9cctjHFvk2gEBp2V4v2gmZ/view"
          ],
          "__v": 0
      }
  ],
    isLoading: false,
    error: null,
  };
}



