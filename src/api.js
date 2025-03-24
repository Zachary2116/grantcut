import axios from "axios";

const API_URL = "http://localhost:5000"; // Backend URL

// Register User
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Login User
export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        localStorage.setItem("token", response.data.token); // Store JWT token
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Fetch Profile (Protected Route)
export const fetchProfile = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const response = await axios.get(`${API_URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Logout
export const logout = () => {
    localStorage.removeItem("token");
};
