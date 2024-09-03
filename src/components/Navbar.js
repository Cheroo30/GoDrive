import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Prodrive</div>
        <ul className="flex space-x-4">
          <li className="text-white">Home</li>
          <li className="text-white">Our Fleet</li>
          <li className="text-white">Service Rates</li>
          <li className="text-white">Blog</li>
          <li className="text-white">Contact</li>
        </ul>
        <div>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded">
            Login / Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
