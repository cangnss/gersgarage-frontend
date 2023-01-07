import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getEmployeeData = () => api.get('/employees');
export const getEmployee = (id) => api.get(`/employees/${id}`);
export const postEmployeeData = (data) => api.post('/employees', data);
export const putEmployeeData = (id, data) => api.put(`/employees/${id}`, data);
export const deleteEmployeeData = (id) => api.delete(`/employees/${id}`);

export const getPlaceServicesData = () => api.get('/services');
export const getPlaceServiceData = (id) => api.get(`/services/${id}`);
export const putPlaceServiceData = (id, data) => api.put(`/services/${id}`, data);
export const postPlaceServiceData = (data) => api.post('/services', data);
export const deletePlaceServiceData = (id) => api.delete(`/services/${id}`);

export const getVehicles = () => api.get('/vehicles');
export const getVehicle = (id) => api.get(`/vehicles/${id}`);
export const postVehicle = (data) => api.post('/vehicles', data);
export const putVehicle = (id, data) => api.put(`/vehicles/${id}`, data);
export const deleteVehicle = (id) => api.get(`/vehicles/${id}`);
export const getUserVehicles = (id) => api.get(`/vehicles/user/${id}`);

export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/authenticate', data);