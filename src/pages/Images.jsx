import { useState } from 'react';
import { useImages } from '../context/ImageContext';
import ImageCard from '../components/ImageCard';
import ImageModal from '../components/ImageModal';
import { FiPlus, FiSearch, FiGrid, FiList, FiUpload, FiMoreVertical, FiMove } from 'react-icons/fi';

const Images = () => {
  const { images, recentlyViewed, searchTerm, setSearchTerm } = useImages();
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="space-y-6">
      {/* Folder header removed */}

      {/* Compact Search for small screens */}
      <div className="block sm:hidden">
        <div className="relative max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A57E8]/50 focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      {/* Recently Viewed */}
      {recentlyViewed.length > 0 && (
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recently Viewed</h2>
            <span className="text-sm text-[#3A57E8] hover:underline cursor-pointer">View All</span>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {recentlyViewed.map(img => (
              <div key={img.id} className="min-w-[180px] max-w-[180px] flex-shrink-0">
                <ImageCard image={img} onClick={() => setSelectedImage(img)} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Images */}
      <section className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">All Images</h2>
          <span className="text-sm text-gray-500">{images.length} files</span>
        </div>
        {images.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500">No images found. Try adjusting your search.</p>
          </div>
        ) : (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map(img => (
                <ImageCard key={img.id} image={img} onClick={() => setSelectedImage(img)} />
              ))}
            </div>
          ) : viewMode === 'list' ? (
            <div className="space-y-3">
              {images.map(img => (
                <div key={img.id} onClick={() => setSelectedImage(img)} className="bg-white rounded-lg border border-gray-100 p-3 flex items-center gap-4 hover:shadow-md cursor-pointer">
                  <img src={img.url} alt={img.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-800 truncate">{img.name}</h3>
                      <span className="text-sm text-gray-500">{img.size}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Created: {new Date(img.createdAt).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-400 mt-1">Last opened: {new Date(img.lastOpenedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex gap-4 overflow-x-auto py-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {images.map(img => (
                <div key={img.id} onClick={() => setSelectedImage(img)} className="min-w-[220px] max-w-[220px] flex-shrink-0">
                  <ImageCard image={img} onClick={() => setSelectedImage(img)} />
                </div>
              ))}
            </div>
          )
        )}
      </section>

      {/* Modal */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Images;