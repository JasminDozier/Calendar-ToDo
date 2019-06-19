import axios from "axios";

// Set Default Headers
axios.defaults.baseURL = "http://localhost:8080/api/todos/";
axios.defaults.headers.common["Content-Type"] = "application/json";

export const createTodo = async data => {
  const response = await axios.post("create", data);
  return response.data;
};

export const getAll = async () => {
  const response = await axios.get("all");
  return response.data;
};

export const getById = async id => {
  const response = await axios.get(id);
  return response.data;
};

export const updateById = async data => {
  const response = await axios.post("update", data);
  return response.data;
};

export const deleteById = async id => {
  const response = await axios.delete(`delete/${id}`);
  return response.data;
};

export const deleteAll = async () => {
  const response = await axios.delete("delete-all");
  return response.data;
};
