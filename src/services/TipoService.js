import { axiosConfig } from "../config/axiosConfig"

export const obtenerTodos = () => {
  return axiosConfig.get(
      '/tipoEquipos'
  );
}

export const guardar = (estado) => {
  return axiosConfig.post('/tipoEquipos', estado);
}

export const editarPorId = (id, estado) => {
  return axiosConfig.put('/tipoEquipos/'+id, estado);
}