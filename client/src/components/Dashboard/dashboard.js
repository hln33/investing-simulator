import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { verifyUser } from 'api/Profile/User';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      setLoading(false);
      return;
    }

    async function userVerified() {
      const isUserVerified = await verifyUser(token);
      return isUserVerified;
    }

    if (userVerified()) {
      setLoading(false);
      setIsAuthenticated(true);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    navigate('/login');
  }
  return (
    <div>
      HI
    </div>
  );
}

export default Dashboard;