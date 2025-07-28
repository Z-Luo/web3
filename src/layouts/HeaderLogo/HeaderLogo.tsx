import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import imageLoader from '@/utils/loader';

const LogoWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-wrap: nowrap;
	min-height: 44px;
`;

interface HeaderLogoProps {
	logoSrc: string;
	text?: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logoSrc }) => {
	const router = useRouter();

	return (
		<LogoWrapper className="cursor-pointer" onClick={() => router.push('/')}>
			<Image
				loader={imageLoader}
				unoptimized
				src={logoSrc}
				alt="logo"
				width={126}
				height={40}
				priority
			/>
		</LogoWrapper>
	);
};

export default HeaderLogo;
