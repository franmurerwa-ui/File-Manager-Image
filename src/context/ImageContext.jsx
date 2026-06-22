import { createContext, useContext, useReducer, useState } from 'react';
import { mockImages } from '../data/mockImages';

const ImageContext = createContext(null);

const imageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return action.payload;
    default:
      return state;
  }
};

export const ImageProvider = ({ children }) => {
  const [images, dispatch] = useReducer(imageReducer, mockImages);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredImages = images.filter(img =>
    img.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const recentlyViewed = [...filteredImages]
    .sort((a, b) => new Date(b.lastOpenedAt) - new Date(a.lastOpenedAt))
    .slice(0, 6);

  return (
    <ImageContext.Provider value={{
      images: filteredImages,
      recentlyViewed,
      dispatch,
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