import { useState, useEffect } from 'react';

const useImageLoader = (imageUrls: string[]) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        imageUrls.map((url) => {
          const img = new Image();
          img.src = url;
        }),
      );
      setIsLoaded(true);
    };

    loadImages();
  }, [imageUrls]);

  return isLoaded;
};

export default useImageLoader;
