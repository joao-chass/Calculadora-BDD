describe('Suite de testes de subtração', () => {
    
    var Calculadora = require('../../../src/js/calculadora');

    it('Deve retornar 2 para 6 e 3', () => {
        expect(Calculadora.dividir(6,3).toEqual(2))
    });

    it('Deve retornar 2 para 6 e 3 no formato texto', () => {
        expect(Calculadora.dividir('6', '3')).toEqual(2)
    });
    
    it('Deve retornar 1.5 para 4.5 e 3', () => {
        expect(Calculadora.dividir(1.5 , 3)).toEqual(1.5);
    });

    it('Deve retornar "Erro" para divisão por 0', () => {
        expect(Calculadora.dividir(5 , 0)).toEqual('Error')
    });

    it('Deve Retornar quando num1 não for numerico', () => {
        expect(Calculadora.dividir(undefined , 0)).toEqual(0);
    });

    it('Deve Retornar quando num2 não for numerico', () => {
        expect(Calculadora.dividir(10, undefined)).toEqual(0);
    });
});