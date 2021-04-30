import axios from 'axios';

export const checkHabitLike = habitId =>
  axios.get(`api/likes/habits/${habitId}`);

export const checkResourceLike = resourceId =>
  axios.get(`api/likes/resources/${resourceId}`);

export const postHabitLike = habitId =>
  axios.post(`api/likes/habits/${habitId}`);

export const postResourceLike = resourceId =>
  axios.post(`api/likes/resources/${resourceId}`);

export const deleteHabitLike = habitId =>
  axios.delete(`api/likes/habits/${habitId}`);

export const deleteResourceLike = resourceId =>
  axios.delete(`api/likes/resources/${resourceId}`);
