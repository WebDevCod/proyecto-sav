import React from 'react';
import NavBar from './NavBar';

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main>
                {children}
            </main>
            <footer>
                <p className='m-0'>Copyright {new Date().getFullYear()}</p>
            </footer>
        </>
    );
};
