console.log("bases de javascript");

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    lat: 14.3232,
    lng: 34.9233,
  },
};

console.log(persona);

const persona2 = persona; 

persona2.nombre = "José"

console.log(persona2); 
console.log(persona); 