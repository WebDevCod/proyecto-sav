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
                <p>Copyright {new Date().getFullYear()}</p>
            </footer>
        </>
    );
};
