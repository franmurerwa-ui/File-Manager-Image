import { NavLink } from 'react-router-dom';
import { 
  FiGrid, FiImage, FiVideo, FiFile, FiTrash2, FiHelpCircle, 
  FiLogOut, FiUser, FiFolder, FiX 
} from 'react-icons/fi';

const navItems = [
  { section: 'File Manager', items: [
    { to: '/dashboard', label: 'Dashboard', icon: FiGrid },
    { to: '/images', label: 'Images', icon: FiImage },
    { to: '/videos', label: 'Videos', icon: FiVideo },
    { to: '/documents', label: 'Documents', icon: FiFile },
    { to: '/all-files', label: 'All Files', icon: FiFolder },
    { to: '/trash', label: 'Trash', icon: FiTrash2 },
  ]},
  { section: 'Other', items: [
    { to: '#', label: 'Help', icon: FiHelpCircle },
    { to: '#', label: 'Sign Out', icon: FiLogOut },
  ]}
];

const Sidebar = ({ onClose }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full shrink-0">
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#3A57E8]">Hope UI</h1>
        {onClose && (
          <button onClick={onClose} className="md:hidden p-2 rounded hover:bg-gray-100">
            <FiX />
          </button>
        )}
      </div>
      <div className="p-4 border-b border-gray-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3A57E8] to-[#08B1BA] flex items-center justify-center text-white text-sm font-medium">
          ED
        </div>
        <div>
          <p className="text-sm font-medium">Elua Dana</p>
          <p className="text-xs text-gray-400">Admin</p>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
        {navItems.map((section, idx) => (
          <div key={idx}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
              {section.section}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-[#3A57E8]/10 text-[#3A57E8] font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`
                    }
                  >
                    <item.icon className="text-lg" />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;