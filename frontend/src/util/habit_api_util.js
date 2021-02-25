import axios from 'axios';

export const getHabits = () => {
  return axios.get('/api/habits')
};

export const getHabitId = id => {
  return axios.get(`/api/habits/${id}`)
};

export const writeHabit = data => {
  return axios.post('/api/habits/', data)
}