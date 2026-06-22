import { FiX, FiDownload, FiShare2, FiHeart } from 'react-icons/fi';
import { format, formatDistanceToNow } from 'date-fns';

const ImageModal = ({ image, onClose }) => {
  const { name, url, createdAt, lastOpenedAt, size } = image;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white max-w-4xl w-full p-4 rounded-xl" onClick={e => e.stopPropagation()}>
        
        <div className="flex justify-between mb-3">
          <h2 className="font-bold">{name}</h2>
          <button onClick={onClose}><FiX /></button>
        </div>

        <img src={url} className="w-full max-h-[60vh] object-contain" />

        <div className="mt-4 text-sm text-gray-500">
          Created: {format(new Date(createdAt || Date.now()), 'PPP')}
          <br />
          Last opened: {formatDistanceToNow(new Date(lastOpenedAt || Date.now()), { addSuffix: true })}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;