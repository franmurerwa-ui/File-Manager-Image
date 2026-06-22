import { formatDistanceToNow, format } from 'date-fns';
import { FiClock, FiCalendar } from 'react-icons/fi';

const ImageCard = ({ image, onClick }) => {
  const { name, url, createdAt, lastOpenedAt, size = '2.4 MB' } = image;

  const handleImgError = (e) => {
    console.log("Image failed:", url);
    e.target.src = '/fallback.png';
  };

  return (
    <div onClick={onClick} className="bg-white rounded-xl shadow-sm cursor-pointer overflow-hidden">
      <div className="h-48 bg-gray-100">
        <img
          src={url}
          alt={name}
          onError={handleImgError}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="font-medium truncate">{name}</h3>

        <div className="text-xs text-gray-400 flex gap-3 mt-1">
          <span className="flex items-center gap-1">
            <FiCalendar />
            {format(new Date(createdAt || Date.now()), 'MMM dd, yyyy')}
          </span>

          <span className="flex items-center gap-1">
            <FiClock />
            {formatDistanceToNow(new Date(lastOpenedAt || Date.now()), {
              addSuffix: true
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;