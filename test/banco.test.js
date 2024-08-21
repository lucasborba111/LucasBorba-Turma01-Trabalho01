const Banco = require('../src/banco');

const bancoSicoob = new Banco('Sicoob', 10);
const bancoBradesco = new Banco('Bradesco', 10);

test("Depositando", async () => {
    bancoSicoob.depositar(400);
    bancoBradesco.depositar(500);
});

test("Sacando", async () => {
    bancoSicoob.sacar(200);
});

test(`Transferencia de ${bancoSicoob.nome} para ${bancoBradesco.nome}`, async () => {
    bancoSicoob.transferir(200, bancoBradesco);

    console.table([['Saldo Bradesco', 'Saldo Sicoob'], [bancoBradesco.obterSaldo(), bancoSicoob.obterSaldo()]]);
});