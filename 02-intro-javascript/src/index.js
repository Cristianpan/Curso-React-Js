const activo = true; 
const mensaje = activo ? "Activo" : "Inactivo";

const mensaje2 = activo ? "Activo" : null; 

const mensaje3 = !activo && 'Activo'; 

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);
