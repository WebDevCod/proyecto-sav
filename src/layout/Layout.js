import React from 'react';
import NavBar from './NavBar';

export default function Layout({ children }) {
    return (
        <div>
            <NavBar />
            <main>
                {children}
            </main>
            <footer className='footer'>
                <p>Copyright {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};
