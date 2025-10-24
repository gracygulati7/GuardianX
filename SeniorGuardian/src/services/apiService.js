// src/services/apiService.js
import axios from 'axios';

export const API_BASE = process.env.REACT_APP_API_URL.replace(/\/$/, '');

// Set up axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to headers if available
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ------------------- USER AUTH -------------------
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/api/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE}/api/login`, credentials, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

// ------------------- INCIDENTS -------------------
export const fetchIncidents = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/api/incidents?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching incidents:', error);
    return [];
  }
};

export const createIncident = async (incidentData) => {
  try {
    const response = await api.post('/api/incidents', incidentData);
    return response.data;
  } catch (error) {
    console.error('Error creating incident:', error);
    throw error;
  }
};

export const likeIncident = async (id, like = true) => {
  try {
    const response = await api.put(`/api/incidents/${id}/like`, { like });
    return response.data;
  } catch (error) {
    console.error('Error liking incident:', error);
    throw error;
  }
};

export const commentIncident = async (id, text) => {
  try {
    const response = await api.post(`/api/incidents/${id}/comment`, { text });
    return response.data;
  } catch (error) {
    console.error('Error commenting on incident:', error);
    throw error;
  }
};

// ------------------- HEALTH STATUS -------------------
export const fetchHealthRecords = async () => {
  try {
    const response = await api.get('/api/health');
    return response.data;
  } catch (error) {
    console.error('Error fetching health records:', error);
    return [];
  }
};

export const createHealthRecord = async (record) => {
  try {
    const response = await api.post('/api/health', record);
    return response.data;
  } catch (error) {
    console.error('Error creating health record:', error);
    throw error;
  }
};

export const updateHealthRecord = async (id, record) => {
  try {
    const response = await api.put(`/api/health/${id}`, record);
    return response.data;
  } catch (error) {
    console.error('Error updating health record:', error);
    throw error;
  }
};

export const deleteHealthRecord = async (id) => {
  try {
    const response = await api.delete(`/api/health/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting health record:', error);
    throw error;
  }
};

// ------------------- ACTIVITIES -------------------
export const fetchActivities = async (type = '') => {
  try {
    const response = await api.get(`/api/activities${type ? `?type=${type}` : ''}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
};

export const createActivity = async (activity) => {
  try {
    const response = await api.post('/api/activities', activity);
    return response.data;
  } catch (error) {
    console.error('Error creating activity:', error);
    throw error;
  }
};

export const updateActivity = async (id, activity) => {
  try {
    const response = await api.put(`/api/activities/${id}`, activity);
    return response.data;
  } catch (error) {
    console.error('Error updating activity:', error);
    throw error;
  }
};

export const deleteActivity = async (id) => {
  try {
    const response = await api.delete(`/api/activities/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting activity:', error);
    throw error;
  }
};

// ------------------- CONTACTS -------------------
export const fetchContacts = async () => {
  try {
    const response = await api.get('/api/contacts');
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
};

export const createContact = async (contact) => {
  try {
    const response = await api.post('/api/contacts', contact);
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

export const updateContact = async (id, contact) => {
  try {
    const response = await api.put(`/api/contacts/${id}`, contact);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await api.delete(`/api/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

