import { createContext, useContext, useState } from 'react';
import { mockImages } from '../data/mockImages';

const ImageContext = createContext(null);

export const ImageProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredImages = mockImages.filter(img =>
    img.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const recentlyViewed = [...filteredImages]
    .sort((a, b) =>
      new Date(b.lastOpenedAt || 0) - new Date(a.lastOpenedAt || 0)
    )
    .slice(0, 6);

  return (
    <ImageContext.Provider value={{
      images: filteredImages,
      recentlyViewed,
      searchTerm,
      setSearchTerm
    }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) throw new Error('useImages must be used within ImageProvider');
  return context;
};