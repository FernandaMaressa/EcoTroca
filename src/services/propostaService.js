import api from './api';

const buscarDados = async () => {
    try {
        const response = await api.get('/api/proposta/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

const buscarDadosProposta = async (id) => {
    try {
        const response = await api.get(`/api/proposta/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados da proposta:", error);
        throw error;
    }
};

const addNovoProposta = async (payload) => {
    try {
        const response = await api.post('/api/proposta/', payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao adicionar nova proposta:", error);
        throw error;
    }
};

const editarDadosProposta = async (id, payload) => {
    try {
        const response = await api.put(`/api/proposta/${Number(id)}`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao editar dados da proposta:", error);
        throw error;
    }
};

const deletarProposta = async (id) => {
    try {
        const response = await api.delete(`/api/proposta/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar proposta:", error);
        throw error;
    }
};

export default {
    buscarDados,
    buscarDadosProposta,
    addNovoProposta,
    editarDadosProposta,
    deletarProposta
};