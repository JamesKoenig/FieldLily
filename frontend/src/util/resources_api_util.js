import axios from 'axios';

export const createResource = resource =>
  axios.post('/api/resources', resource);

export const fetchResources = () =>
  axios.get('/api/resources');

export const fetchHabitResources = habitId =>
  axios.get(`/api/resources/habits/${habitId}`);

export const fetchResource = resourceId =>
  axios.get(`/api/resources/${resourceId}`);

export const updateResource = resource =>
  axios.put(`api/resources/${resource._id}`,resource);

export const deleteResource = resourceId =>
  axios.delete(`/api/resources/${resourceId}`);
