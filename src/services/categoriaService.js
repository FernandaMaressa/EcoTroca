import api from './api';

const buscarCategorias = async () => {
    try {
        const response = await api.get('/api/categoria/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

const buscarCategoriaById = async (id) => {
    try {
        const response = await api.get(`/api/categoria/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar item:", error);
        throw error;
    }
};

const addNovaCategoria = async (payload) => {
    try {
        const response = await api.post('/api/categoria/', payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao adicionar item:", error);
        throw error;
    }
};

const editarDadosCategoria = async (id, payload) => {
    try {
        const response = await api.put(`/api/categoria/${Number(id)}`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao editar item:", error);
        throw error;
    }
};

const deletarCategoria = async (id) => {
    try {
        const response = await api.delete(`/api/categoria/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar item:", error);
        throw error;
    }
};

export default {
    buscarCategorias,
    buscarCategoriaById,
    addNovaCategoria,
    editarDadosCategoria,
    deletarCategoria
};