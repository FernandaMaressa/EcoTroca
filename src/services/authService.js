import api from './api';

const RegistrarUsuario = async (payload) => {
  try {
    const response = await api.post(`/api/auth/register`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário.", error);
    throw error;
  }
};

const LoginUsuario = async (payload) => {
  try {
    const response = await api.post(`/api/auth/login`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login.", error);
    throw error;
  }
};

export default {
    RegistrarUsuario,
    LoginUsuario
}