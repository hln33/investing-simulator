import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'css/Navbar.css';

function Navbar() {
  const items = [
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        url: '/',
    },
    {
        label: 'About us',
        icon: 'pi pi-fw pi-info-circle',
        url: '/about',
    },
    {
        label: 'Login',
        icon: 'pi pi-fw pi-envelope',
        url: '/contact',
    },
    {
    
    }
  ];

  return (
    <div className='navbar'>
      <Menubar model={items} />
    </div>
  );
}

export default Navbar;
