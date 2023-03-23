import React from 'react';

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();

  const signOutUser = () => {
    Cookies.remove('token');
    navigate('login');
  };

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: '/',
    },
    {
      label: 'About Us',
      icon: 'pi pi-fw pi-info-circle',
      url: '/about',
    },
    {
      label: 'Contact',
      icon: 'pi pi-fw pi-envelope',
      url: '/contact',
    },
  ];

  const isUserLoggedIn: boolean = Cookies.get('token') ? true : false;

  const loginButton = (
    <Link to="/login" style={{ textDecoration: 'none' }}>
      <Button
        label='Login'
        icon='pi pi-sign-in'
        className='p-button-secondary p-ml-auto'

      />
    </Link>
  );

  const logoutButton = (
    <Button
      label='Logout'
      icon='pi pi-sign-out'
      className='p-button-secondary p-ml-auto'
      onClick={signOutUser}
    />
  );

  const userMenu = (
    <Menubar model={items} end={logoutButton} style={{ color: 'var(--primary-color) ' }} />
  );

  const guestMenu = (
    <Menubar model={items} end={loginButton} style={{ color: 'var(--primary-color)' }} />
  );

  return (
    <div className='navbar' >
      {isUserLoggedIn ? userMenu : guestMenu}
    </div>
  );
}

export default Navbar;
