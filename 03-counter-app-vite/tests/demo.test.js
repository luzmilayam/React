

describe('Pruebas en <DemoComponent />', () =>{
test('Esta prueba no debe de fallar', () =>{
    // if ( 1 === 0){
    //     throw new Error('No se puede dividir entre ceros')
    // }

    // 1. inicializacion
    const message1 = 'Hola mundo';

    //2. estímulo
    const message2 = message1.trim();

    //3. observar el comportamiento esperado
    expect( message1 ).toBe( message2 );
})
})