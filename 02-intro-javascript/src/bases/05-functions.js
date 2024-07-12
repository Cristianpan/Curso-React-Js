/* function saludar (nombre){
    return `Hola, ${nombre}`; 
}
 */

const saludar = function (nombre) {
    return `Hola ${nombre}`;
  };
  const saludar2 = (nombre) => `Hola ${nombre}`;
  
  console.log(saludar("Goku"));
  console.log(saludar2("Vegueta"));
  
  const getUser = () => ({
    uid: "ABASDA",
    userName: "user123",
  });
  
  console.log(getUser());
  
  const getUsuarioActivo = (nombre) => ({
    uid: "ASDADK",
    userName: nombre,
  });
  