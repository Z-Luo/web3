import Image from 'next/image';
import styled from 'styled-components';

import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

interface ExhibitorAvatarProps {
	logoSize: number;
	logoUrl: string;
	name: string;
}
const logoBackground = '/images/exhibition/invalid-name.png';

const Avatar = styled.div`
	background-image: url('${logoBackground}');
	background-repeat: no-repeat;
	background-size: contain;
	padding: 11px 2px 2px 2px;
	position: relative;
`;

const ExhibitorAvatar: React.FC<ExhibitorAvatarProps> = ({ logoUrl, name, logoSize }) => {
	return (
		<Avatar>
			<Image
				src={logoUrl}
				loader={imageLoader}
				width={logoSize}
				height={logoSize}
				style={{
					objectFit: 'contain',
					backgroundColor: `${color.whiteColor}`,
					borderRadius: '50%'
				}}
				alt={name}
				className="company"
			/>
		</Avatar>
	);
};

export default ExhibitorAvatar;
