import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', ()=> {
    test('Debe de retornar un string y un número', ()=> {
        const [letters, numbers] = retornaArreglo(); 
        expect(letters).toEqual(expect.any(String)); 
        expect(numbers).toEqual(expect.any(Number)); 
    })
})