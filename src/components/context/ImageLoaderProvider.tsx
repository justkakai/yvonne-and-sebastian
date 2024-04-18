import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ImageLoadContextType {
	isLoaded: (src: string) => boolean;
	registerImage: (src: string) => void;
}

const ImageLoadContext = createContext<ImageLoadContextType | undefined>(undefined);

export const useImageLoader = () => {
	const context = useContext(ImageLoadContext);
	if (!context) {
		throw new Error('useImageLoader must be used within an ImageLoaderProvider');
	}
	return context;
};

export const ImageLoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [images, setImages] = useState<{ [src: string]: boolean }>({});
	const skeletonDisplayDuration = 1000; // Minimum time to show skeleton in milliseconds

	const registerImage = useCallback((src: string) => {
		if (!images[src]) {
			setImages(prev => ({ ...prev, [src]: false }));
			const img = new Image();
			img.src = src;
			img.onload = () => {
				// Delay setting the image as loaded to ensure skeleton shows for at least some time
				setTimeout(() => {
					setImages(prev => ({ ...prev, [src]: true }));
				}, skeletonDisplayDuration);
			};
		}
	}, [images, skeletonDisplayDuration]);

	const isLoaded = useCallback(
		(src: string) => !!images[src],
		[images]
	);

	return (
		<ImageLoadContext.Provider value={{ registerImage, isLoaded }}>
			{children}
		</ImageLoadContext.Provider>
	);
};
