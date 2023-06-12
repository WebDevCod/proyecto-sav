import React from 'react';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer className='footer'>
        <p>Copyright <FontAwesomeIcon icon={faCopyright} className='copyrightIcon'/> {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
