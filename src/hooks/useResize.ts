import { useEffect, useState } from 'react';

const useResize = (size: number) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	const checkMobile = () => {
		if (window.innerWidth < size) {
			setIsMobile(true);
		}
	};

	const handleResize = () => {
		checkMobile();
		if (window.innerWidth > size) {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		checkMobile();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { isMobile };
};

export default useResize;
