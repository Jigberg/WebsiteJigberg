import React from 'react';
import 'tailwindcss/tailwind.css';

function NotFound() {
    return (
        <div className="flex h-full justify-center items-center">
            <p className="max-w-full max-h-full text-6xl text-white">
                Page not found
            </p>
        </div>
    );
}

export default NotFound;