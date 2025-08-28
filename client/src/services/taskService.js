import axiosInstance from "../utils/axiosInstance.js";

export const getTasks = () => axiosInstance.get("/tasks");
export const createTask = (task) => axiosInstance.post("/tasks", task);
export const updateTask = (id, task) => axiosInstance.put(`/tasks/${id}`, task);
export const deleteTask = (id) => axiosInstance.delete(`/tasks/${id}`);
