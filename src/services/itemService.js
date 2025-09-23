import api from './api';

const buscarDados = async () => {
    try {
        const response = await api.get('/api/item/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

const buscarDadosItemUsuario = async (id) => {
    try {
        const response = await api.get(`/api/item/usuario/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar item:", error);
        throw error;
    }
};

const buscarDadosItem = async (id) => {
    try {
        const response = await api.get(`/api/item/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar item:", error);
        throw error;
    }
};

const addNovoItem = async (payload) => {
    try {
        const response = await api.post('/api/item/', payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao adicionar item:", error);
        throw error;
    }
};

const editarDadosItem = async (id, payload) => {
    try {
        const response = await api.put(`/api/item/${Number(id)}`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao editar item:", error);
        throw error;
    }
};

const deletarItem = async (id) => {
    try {
        const response = await api.delete(`/api/item/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar item:", error);
        throw error;
    }
};

export default {
    buscarDados,
    buscarDadosItem,
    addNovoItem,
    editarDadosItem,
    deletarItem,
    buscarDadosItemUsuario
};