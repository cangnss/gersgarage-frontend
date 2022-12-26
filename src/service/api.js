import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getEmployeeData = () => api.get('/employees');
export const getEmployee = (id) => api.get(`/employees/${id}`);
export const postEmployeeData = (data) => api.post('/employees', data);
export const putEmployeeData = (id, data) => api.put(`/employees/${id}`, data);
export const deleteEmployeeData = (id) => api.delete(`/employees/${id}`);
export const getPlaceServiceData = () => api.get('/services');
export const deletePlaceServiceData = (id) => api.delete(`/services/${id}`);