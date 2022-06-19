import { axiosConfig } from "../config/axiosConfig";

export const obtenerTodos = () => {
  return axiosConfig.get("/inventarios");
};

export const guardar = (estado) => {
  return axiosConfig.post("/inventarios", estado);
};

export const editarPorId = (id, estado) => {
  return axiosConfig.put("/inventarios/" + id, estado);
};
