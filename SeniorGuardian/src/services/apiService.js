// src/services/apiService.js
const API_BASE = process.env.REACT_APP_API_URL.replace(/\/$/, '');;

// Example GET request
export const getUsers = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

// Example POST request
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};
