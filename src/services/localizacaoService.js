import apiLocalizacao from "./apiLocalizacao";

const buscarEstados = async () => {
    try {
        const response = await apiLocalizacao.get('/estados');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar estados:", error);
        throw error;
    }
};

const buscarCidadesPorEstado = async (siglaEstado) => {
    if (!siglaEstado) {
        return [];
    }
    try {
        const response = await apiLocalizacao.get(`/estados/${siglaEstado}/municipios`);
        const cidadesFormatadas = response.data.map(cidade => ({
            id: cidade.id,
            nome: cidade.nome
        }));
        return cidadesFormatadas;
    } catch (error) {
        console.error(`Erro ao buscar cidades para o estado ${siglaEstado}:`, error);
        throw error;
    }
};

export default {
    buscarEstados,
    buscarCidadesPorEstado
};