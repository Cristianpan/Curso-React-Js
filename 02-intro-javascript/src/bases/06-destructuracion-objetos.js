//Destructuración
//Asignación destructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
  };
  
  const { nombre, edad, clave } = persona;
  
  console.log(nombre);
  console.log(edad);
  console.log(clave);
  
  const useContext2 = ({ clave, nombre, edad, rango = "Capitan" }) => {
    console.log(nombre);
    console.log(edad);
    console.log(rango);
  
    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
  };
  
  const {
    nombreClave,
    anios,
    latlng: { lat, lng },
  } = useContext2(persona);
  
  console.log(lat, lng);
  