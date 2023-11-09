import React from 'react';
import HeaderC from './Header';
import Footer from './Footer';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="bg-mgrey min-h-screen w-full">
            <HeaderC />

            {/* CONTENT */}
            <main className="flex">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;

