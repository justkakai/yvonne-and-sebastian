import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
	const location = useLocation(); // This hook returns the location object that represents the current URL.

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]); // This effect will run every time the location changes.
};

export default useScrollToTop;
