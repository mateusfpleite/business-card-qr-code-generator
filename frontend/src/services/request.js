import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestData = async (endpoint) => {
    const { data } = await api.get(endpoint);
    return data;
}

export const createCard = async (endpoint, body) => {
    const { data } = await api.post(endpoint, body);
    console.log(data);
    return data;
}

export default api;