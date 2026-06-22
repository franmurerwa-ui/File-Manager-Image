import { useState } from 'react';
import { FiBell, FiShoppingCart, FiUser, FiChevronDown, FiSearch, FiMenu } from 'react-icons/fi';

const Navbar = ({ onMenuClick }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-10">
      <div className="max-w-full mx-auto flex items-center gap-4">
        <div className="flex items-center gap-6 flex-1">
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-500">Image</span>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Pages</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Elements</a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="hidden sm:flex items-center bg-gray-50 rounded-lg px-3 py-2 w-2/3 max-w-xl">
            <FiSearch className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-sm px-3 py-1 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 relative">
          <button className="hidden md:inline-flex items-center gap-2 bg-[#3A57E8] text-white px-4 py-2 rounded-lg shadow-sm">
            <FiShoppingCart />
            Add Image
          </button>

          <button className="p-2 rounded-full bg-[#3A57E8] text-white hover:opacity-90 transition-colors">
            <FiShoppingCart className="text-lg" />
          </button>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="p-2 rounded-full bg-[#3A57E8] text-white hover:opacity-90 transition-colors"
            aria-expanded={profileOpen}
            aria-haspopup="true"
          >
            <FiUser className="text-lg" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-full mt-3 w-44 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Privacy Setting</a>
              <hr className="my-1" />
              <a href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-50">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;