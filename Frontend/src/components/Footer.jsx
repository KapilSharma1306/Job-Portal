import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">CareerCraft</h2>
        <ul className="flex justify-center space-x-6 mb-4">
          <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
          <li><a href="/jobs" className="hover:text-gray-400">Browse Jobs</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
          <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
        </ul>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com/careerCraft" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
          <a href="https://twitter.com/careerCraft" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
          <a href="https://linkedin.com/company/careerCraft" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-500 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} CareerCraft. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
