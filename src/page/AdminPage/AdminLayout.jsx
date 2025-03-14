
import { Sidebar } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-green-900 shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto border-l border-yellow-300">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;