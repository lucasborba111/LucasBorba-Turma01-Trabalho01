const Carro = require('../src/carro');

const celta = new Carro('Chevrolet', 'Celta', '2000');

test('Infomações do carro:', async () => {
    celta.obterInfo();
});

test('Dirigir', async () => {
    celta.dirigir(-10);
});