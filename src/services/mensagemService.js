import api from './api';

const buscarDados = async () => {
    try {
        const response = await api.get('/api/mensagem/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

const buscarDadosMensagem = async (id) => {
    try {
        const response = await api.get(`/api/mensagem/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados da mensagem:", error);
        throw error;
    }
};

const addNovaMensagem = async (payload) => {
    try {
        const response = await api.post('/api/mensagem/', payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao adicionar nova mensagem:", error);
        throw error;
    }
};

const editarDadosMensagem = async (id, payload) => {
    try {
        const response = await api.put(`/api/mensagem/${Number(id)}`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao editar dados da mensagem:", error);
        throw error;
    }
};

const deletarMensagem = async (id) => {
    try {
        const response = await api.delete(`/api/mensagem/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar mensagem:", error);
        throw error;
    }
};

export default {
    buscarDados,
    buscarDadosMensagem,
    addNovaMensagem,
    editarDadosMensagem,
    deletarMensagem
};