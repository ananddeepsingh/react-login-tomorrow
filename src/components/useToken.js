import { useState } from 'react';

export default function useToken() {

  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }

  const [token] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  return {
    setToken: saveToken,
    token
  }
}
