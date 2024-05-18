import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">EcoSite</h2>
            <p>Committed to a greener planet. Join us in our mission to make the world a better place.</p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#" className="hover:text-green-300">Home</a></li>
              <li><a href="#" className="hover:text-green-300">About Us</a></li>
              <li><a href="#" className="hover:text-green-300">Services</a></li>
              <li><a href="#" className="hover:text-green-300">Blog</a></li>
              <li><a href="#" className="hover:text-green-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul>
              <li>123 Green St, Earth City</li>
              <li>Email: info@ecosites.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
            <div className="mt-4">
              <a href="#" className="text-green-300 hover:text-green-500 mx-2">Facebook</a>
              <a href="#" className="text-green-300 hover:text-green-500 mx-2">Twitter</a>
              <a href="#" className="text-green-300 hover:text-green-500 mx-2">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-green-700 pt-4 text-center">
          <p>&copy; 2024 EcoSite. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
