describe('Suite de testes de multiplicar', () => {
    
    var Calculadora = require('../../../src/js/calculadora');

    it('Deve retornar 6 para 2 e 3', () => {
        expect(Calculadora.multiplicar(2,3).toEqual(6))
    });

    it('Deve retornar 6 para 2 e 3 no formato texto', () => {
        expect(Calculadora.multiplicar('2', '3')).toEqual(6)
    });
    
    it('Deve retornar 4.5 para 1.5 e 3', () => {
        expect(Calculadora.multiplicar( '3' , '1.5')).toEqual(4.5);
    });

    it('Deve Retornar quando num1 não for numerico', () => {
        expect(Calculadora.multiplicar(undefined , 10)).toEqual(0);
    });

    it('Deve Retornar quando num2 não for numerico', () => {
        expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
    });
});
