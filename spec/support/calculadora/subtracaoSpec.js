describe('Suite de testes de subtração', () => {
    
    var Calculadora = require('../../../src/js/calculadora');

    it('Deve retornar 5 para 8 e 3', () => {
        expect(Calculadora.subtrair(4,3).toEqual(1))
    });

    it('Deve retornar 5 para 8 e 3 no formato texto', () => {
        expect(Calculadora.subtrair('9', '3')).toEqual(6)
    });
    
    it('Deve retornar 1.5 para 4.5 e 3', () => {
        expect(Calculadora.subtrair(1.5 , 3)).toEqual(4.5);
    });

    it('Deve Retornar quando num1 não for numerico', () => {
        expect(Calculadora.subtrair(undefined , 10)).toEqual(0);
    });

    it('Deve Retornar quando num2 não for numerico', () => {
        expect(Calculadora.subtrair(10, undefined)).toEqual(0);
    });
});