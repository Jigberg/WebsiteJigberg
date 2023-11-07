import React from 'react';
import HeaderC from './Header';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="bg-mgrey h-screen w-screen">
            <HeaderC title = "Test"/>

            {/* CONTENT */}
            <main>{children}</main>

        </div>
    );
};

export default Layout;

