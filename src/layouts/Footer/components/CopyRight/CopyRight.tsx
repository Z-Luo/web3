import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor } = color;
const ContentContainer = styled.section`
	align-items: center;
	background-color: ${primaryColor};
	font-size: 14px;
	padding: 32px 20px;
	@media ${devices.largeLaptop} {
		padding: 12px 0;
	}
`;
const StyledLink = styled(Link)`
	font-size: 14px;
	line-height: 1.43;
	margin-bottom: 12px;
`;
const ContainerGrid = styled(Grid)`
	margin: 0 auto;
	@media ${devices.largeLaptop} {
		max-width: 1440px;
	}
`;
const LogoGrid = styled(Grid)`
	display: flex;
	justify-content: center;
	@media ${devices.tablet} {
		justify-content: flex-start;
	}
`;
const Logo = styled(Image)`
	margin-bottom: 16px;
	@media ${devices.tablet} {
		margin-bottom: 0;
	}
`;
const CopyrightGrid = styled(Grid)`
	align-items: center;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	@media ${devices.tablet} {
		justify-content: flex-end;
		align-items: flex-end;
	}
`;
const CopyrightText = styled.p`
	margin: 0 0;
	:last-of-type {
		margin-top: 10px;
	}
	@media ${devices.largeLaptop} {
		white-space: nowrap;
		:last-of-type {
			margin-top: 0;
		}
	}
`;
const gridColumn = {
	mobile: 12,
	tablet: 12,
	laptop: 4
};
const CopyRight: React.FC = () => {
	const [isMobile, setIsMobile] = useState<boolean>();
	useEffect(() => {
		const isMobileWidth = typeof window !== 'undefined' && window.innerWidth <= sizes.tablet;
		setIsMobile(isMobileWidth);
		const resizeHandler = () => {
			setIsMobile(window.innerWidth <= sizes.tablet);
		};
		window.addEventListener('resize', resizeHandler);
		return () => window.removeEventListener('resize', resizeHandler);
	}, []);
	return (
		<ContentContainer>
			<ContainerGrid container className="justify-between">
				<LogoGrid item {...gridColumn} className="self-center">
					<Logo
						loader={imageLoader}
						unoptimized
						src="/web3-logo.svg"
						alt="logo"
						width={120}
						height={40}
						priority
					/>
				</LogoGrid>
				<CopyrightGrid>
					{isMobile && (
						<>
							<CopyrightText>
								Copyright © 2023-2024 AI + Web3 Convention
							</CopyrightText>
							<CopyrightText>All Rights Reserved, ACN 668 836 566</CopyrightText>
						</>
					)}
					{!isMobile && (
						<CopyrightText>
							Copyright © 2023-2024 AI + Web3 Convention. All Rights Reserved. ACN 668
							836 566
						</CopyrightText>
					)}
					<CopyrightText>
						<StyledLink href="/terms-and-conditions">Terms And Conditions</StyledLink> |
						<StyledLink href="/anti-harassment"> Anti-harassment Policy</StyledLink> |
						<StyledLink href="#"> Powered by Metatree Lab</StyledLink>
					</CopyrightText>
				</CopyrightGrid>
			</ContainerGrid>
		</ContentContainer>
	);
};
export default CopyRight;
