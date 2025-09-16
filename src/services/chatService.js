import api from './api';

const buscarDados = async () => {
    try {
        const response = await api.get('/api/chat/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

const buscarDadosChat = async (id) => {
    try {
        const response = await api.get(`/api/chat/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do chat:", error);
        throw error;
    }
};

const addNovoChat = async (payload) => {
    try {
        const response = await api.post('/api/chat/', payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao adicionar novo chat:", error);
        throw error;
    }
};

const deletarChat = async (id) => {
    try {
        const response = await api.delete(`/api/chat/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar chat:", error);
        throw error;
    }
};

export default {
    buscarDados,
    buscarDadosChat,
    addNovoChat,
    deletarChat
};