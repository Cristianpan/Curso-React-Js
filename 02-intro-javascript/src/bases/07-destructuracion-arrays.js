const personajes = ["Goku", "Vegeta", "Trunks"];

const [goku, vegeta, trunks] = personajes;

const [, , p3] = personajes;

console.log(goku);
console.log(vegeta);
console.log(trunks);

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Hola"); 

console.log(nombre); 
setNombre(); 
