import { useState } from 'react';

export const useAuth = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (e) => setUsername(String(e.target.value).trim());
  const changeEmail = (e) => setEmail(String(e.target.value).trim());
  const changePassword = (e) => setPassword(String(e.target.value).trim());

  return {
    username,
    changeUsername,
    email,
    changeEmail,
    password,
    changePassword,
  };
};
