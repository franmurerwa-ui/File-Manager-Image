import { FiImage, FiUpload, FiHardDrive } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Overview of your file manager system
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        {/* Total Images */}
        <div className="bg-white rounded-xl border shadow-sm p-5 flex items-center gap-4">
          <FiImage className="text-3xl text-[#3A57E8]" />
          <div>
            <p className="text-sm text-gray-500">Total Images</p>
            <h2 className="text-2xl font-bold text-gray-800">15</h2>
          </div>
        </div>

        {/* Recent Uploads */}
        <div className="bg-white rounded-xl border shadow-sm p-5 flex items-center gap-4">
          <FiUpload className="text-3xl text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Recent Uploads</p>
            <h2 className="text-2xl font-bold text-gray-800">3</h2>
          </div>
        </div>

        {/* Storage Used */}
        <div className="bg-white rounded-xl border shadow-sm p-5 flex items-center gap-4">
          <FiHardDrive className="text-3xl text-orange-500" />
          <div>
            <p className="text-sm text-gray-500">Storage Used</p>
            <h2 className="text-2xl font-bold text-gray-800">1.2 GB</h2>
          </div>
        </div>

      </div>

      {/* Optional Section */}
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Quick Summary
        </h2>
        <p className="text-gray-500 text-sm">
          You have a total of <strong>15 images</strong> stored in your gallery.
          Recently <strong>3 images</strong> were uploaded, and you are using
          <strong> 1.2 GB</strong> of storage.
        </p>
      </div>

    </div>
  );
};

export default Dashboard;