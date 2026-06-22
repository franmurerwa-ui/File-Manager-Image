import { FiX, FiDownload, FiShare2, FiHeart } from 'react-icons/fi';
import { format, formatDistanceToNow } from 'date-fns';

const ImageModal = ({ image, onClose }) => {
  const { name, url, createdAt, lastOpenedAt, size = '2.4 MB' } = image;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-400">{size}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FiHeart className="text-xl text-gray-400" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FiShare2 className="text-xl text-gray-400" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FiDownload className="text-xl text-gray-400" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FiX className="text-2xl text-gray-500" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="rounded-lg overflow-hidden bg-gray-100">
            <img src={url} alt={name} className="w-full h-auto max-h-[60vh] object-contain" />
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-400 block text-xs">Created</span>
              <p className="font-medium">{format(new Date(createdAt), 'PPP')}</p>
            </div>
            <div>
              <span className="text-gray-400 block text-xs">Last Opened</span>
              <p className="font-medium">{formatDistanceToNow(new Date(lastOpenedAt), { addSuffix: true })}</p>
            </div>
            <div>
              <span className="text-gray-400 block text-xs">File Size</span>
              <p className="font-medium">{size}</p>
            </div>
            <div>
              <span className="text-gray-400 block text-xs">Dimensions</span>
              <p className="font-medium">1920 x 1080</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;