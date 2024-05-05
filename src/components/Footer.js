import React from 'react';

const Footer = () => {
    return (
        <footer className="z-50 fixed inset-x-0 bottom-0 bg-gray-800 text-white text-center py-1">
            <p className="text-left text-gray-200 ml-20">
                Created by Mandar Tule
                <span className='mr-24 text-gray-800'>.</span>
                <span className=' ml-96 text-gray-500'>&copy; 2024 </span>
                <br />
                <a href="https://www.linkedin.com/in/mandartule/" className="flex items-center">
                    <img src="https://res.cloudinary.com/dbmjwxqqu/image/upload/v1704650507/YelpCamp/Sources/btdx1u5jmcscl7vmfpfz.webp" alt="LinkedIn" className="h-5" />
                </a>
               
            </p>
            
        </footer>
    );
};

export default Footer;