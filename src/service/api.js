import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getEmployeeData = () => api.get('/employees');
export const postEmployeeData = (data) => api.post('/employees', data);
export const getEmployee = (id) => api.get(`/employees/${id}`);