import api from './api';

const buscarDados = async () => {
    try {
        const response = await api.get('/api/usuario/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

const buscarDadosUsuario = async (id) => {
    try {
        const response = await api.get(`/api/usuario/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

const addNovoUsuario = async (payload) => {
    try {
        const response = await api.post('/api/usuario/', payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

const editarDadosUsuario = async (id, payload) => {
    try {
        const response = await api.put(`/api/usuario/${Number(id)}`, payload);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

const deletarUsuario = async (id) => {
    try {
        const response = await api.delete(`/api/usuario/${Number(id)}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

export default {
    buscarDados,
    buscarDadosUsuario,
    addNovoUsuario,
    editarDadosUsuario,
    deletarUsuario
};


/*
router.get('/', getAllUsariosHandler);
router.get('/:id', getUsuarioByIdHandler);
router.post('/', createUsuarioHandler);
router.put('/:id', updateUsuarioHandler);
router.delete('/:id', deleteUsuarioHandler);
*/