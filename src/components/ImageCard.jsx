import { formatDistanceToNow, format } from 'date-fns';
import { FiClock, FiCalendar } from 'react-icons/fi';

const ImageCard = ({ image, onClick }) => {
  const { name, url, createdAt, lastOpenedAt, size = '2.4 MB' } = image;

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group border border-gray-100 flex flex-col h-full"
    >
      <div className="w-full h-44 md:h-52 bg-gray-100 relative overflow-hidden">
        <img 
          src={url} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          {size}
        </div>
      </div>
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-gray-800 truncate">{name}</h3>
          <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <FiCalendar className="text-[10px]" />
              {format(new Date(createdAt), 'MMM dd, yyyy')}
            </span>
            <span className="flex items-center gap-1">
              <FiClock className="text-[10px]" />
              {formatDistanceToNow(new Date(lastOpenedAt), { addSuffix: true })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;