import { axiosConfig } from "../config/axiosConfig"

export const obtenerTodos = () => {
  return axiosConfig.get(
      '/marcas'
  );
}

export const guardar = (estado) => {
  return axiosConfig.post('/marcas', estado);
}

export const editarPorId = (id, estado) => {
  return axiosConfig.put('/marcas/'+id, estado);
}
