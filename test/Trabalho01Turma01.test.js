const GerenciadorDeTarefas = require('../src/Trabalho01Turma01');
describe('Testando métodos adicionais do GerenciadorDeTarefas', () => {
    let gerenciador;

    beforeEach(() => {
        gerenciador = new GerenciadorDeTarefas();
    });

    test('Deve marcar todas as tarefas como concluídas', () => {
        const tarefa1 = { id: 23, descricao: 'Tarefa pendente', concluida: false };
        const tarefa2 = { id: 24, descricao: 'Tarefa pendente', concluida: false };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        gerenciador.marcarTodasComoConcluidas();

        expect(gerenciador.listarTarefasConcluidas().length).toBe(2);
        expect(gerenciador.listarTarefasPendentes().length).toBe(0);
    });

    test('Deve listar todas as tarefas concluídas', () => {
        const tarefa1 = { id: 25, descricao: 'Tarefa concluída', concluida: true };
        const tarefa2 = { id: 26, descricao: 'Tarefa pendente', concluida: false };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        const tarefasConcluidas = gerenciador.listarTarefasConcluidas();
        expect(tarefasConcluidas).toEqual([tarefa1]);
    });

    test('Deve remover uma tag de uma tarefa', () => {
        const tarefa = { id: 27, descricao: 'Tarefa com tags', tags: ['Prioridade', 'Primeiro'] };

        gerenciador.adicionarTarefa(tarefa);
        gerenciador.removerTagDaTarefa(27, 'Prioridade');

        expect(gerenciador.buscarTarefaPorId(27).tags).toEqual(['Primeiro']);
    });

    test('Deve listar tarefas associadas a uma tag', () => {
        const tarefa1 = { id: 28, descricao: 'Tarefa 1', tags: ['Prioridade'] };
        const tarefa2 = { id: 29, descricao: 'Tarefa 2', tags: ['Trabalho'] };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        const tarefasPrioridades = gerenciador.listarTarefasPorTag('Prioridade');
        expect(tarefasPrioridades).toEqual([tarefa1]);
    });

    test('Deve buscar tarefas por data', () => {
        const tarefa1 = { id: 30, descricao: 'Tarefa 1', data: '2024-08-30' };
        const tarefa2 = { id: 31, descricao: 'Tarefa 2', data: '2024-09-01' };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        
        const tarefasPorData = gerenciador.buscarTarefasPorData('2024-08-30');
        expect(tarefasPorData).toEqual([tarefa1]);
    });

    test('Deve remover todas as tarefas', () => {
        const tarefa1 = { id: 30, descricao: 'Tarefa 1', data: '2024-08-30' };
        const tarefa2 = { id: 31, descricao: 'Tarefa 2', data: '2024-09-01' };
        const tarefa3 = { id: 32, descricao: 'Tarefa 3', data: '2024-09-01' };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.adicionarTarefa(tarefa3);

        const tarefasIds = gerenciador.listarTarefas().map(p => p.id);
        
        tarefasIds.forEach((p) => gerenciador.removerTarefa(p));
        expect(gerenciador.listarTarefas()).toEqual([]);
    });
});