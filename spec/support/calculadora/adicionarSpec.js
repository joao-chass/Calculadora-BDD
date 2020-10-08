describe('Suite de testes de adição', () => {
    
    var Calculadora = require('../../../src/js/calculadora');

    it('Deve retornar 5 para 2 e 3', () => {
        expect(Calculadora.adicionar(2,3).toEqual(5))
    });

    it('Deve retornar 6 para 9 e -3 no formato texto', () => {
        expect(Calculadora.adicionar('9', '-3')).toEqual(6)
    });
    
    it('Deve retornar 4 para 5.5 e 1.5', () => {
        expect(Calculadora.adicionar( 5.5 , 1.5)).toEqual(4.5);
        expect(Calculadora.adicionar( '5.5' , '1.5')).toEqual(4.5);
    });

    it('Deve Retornar quando num1 não for numerico', () => {
        expect(Calculadora.adicionar(undefined , 10)).toEqual(0);
    });

    it('Deve Retornar quando num2 não for numerico', () => {
        expect(Calculadora.adicionar(10, undefined)).toEqual(0);
    });
});
