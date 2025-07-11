import axios from 'axios';

interface LoginResponse {
  token: string;
  user: {
    username: string;
    email: string;
  }
}
export const loginApi = async (username: string, password: string) => {
  try {
    const response = await axios.post<LoginResponse>('/api/login', { username, password });
    return response?.data;
  } catch (error) {
    console.log('Login failed', error);
  }
};

export const logoutApi = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
};
