import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { IIconProps } from '@/interfaces/icon';
import { activeNavBarTitleDecoration, navBarTitleDecoration } from '@/styles/mixin';
import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { textColor } = color;
interface NavBarButtonProps {
	buttonCtx: string;
	linkHref: string;
	icon?: IIconProps;
}

const NavButtonContainer = styled.div`
	align-items: center;
	display: flex;
	height: 44px;
	width: 100%;
	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
	&:hover {
		background-color: #f5f5f5;
	}
`;

const CustomizedButton = styled.button`
	background-color: transparent;
	border: none;
	color: ${textColor};
	cursor: pointer;
	font-family: ArialMT;
	font-size: 16px;
	text-align: left;
	width: fit-content;
`;

const ButtonCtx = styled.span`
	align-items: center;
	display: flex;
	gap: 16px;
	margin: 0 16px;

	${navBarTitleDecoration('calc(100% + 4px)')};
`;

const NavBarButton: React.FC<NavBarButtonProps> = ({ buttonCtx, linkHref, icon }) => {
	const router = useRouter();

	return (
		<NavButtonContainer>
			<CustomizedButton onClick={() => router.push(linkHref)}>
				<ButtonCtx>
					{icon && (
						<Image
							src={icon.src}
							alt={icon.alt}
							width={icon.width}
							height={icon.height}
							priority
							loader={imageLoader}
						/>
					)}

					{buttonCtx}
				</ButtonCtx>
			</CustomizedButton>
		</NavButtonContainer>
	);
};

export default NavBarButton;
