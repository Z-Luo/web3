import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

interface ContentRowProps {
	rowCount: number;
	title: string;
	subTitle: string;
	description: string;
	imageSrc: string;
}

const EvenRowContainer = styled.div`
	display: grid;
	grid-template-columns: 60% 1fr;
	@media ${devices.laptop} {
		margin: 70px 0;
	}
	@media ${devices.largeLaptop} {
		margin: 110px 0;
	}
	@media ${devices.desktop} {
		margin: 130px 0;
	}
`;

const OddRowContainer = styled.div`
	display: grid;
	@media ${devices.miniMobile} {
		margin: 70px 0 90px 0;
	}
	@media ${devices.tablet} {
		margin: 80px 0 150px 0;
	}
	@media ${devices.laptop} {
		grid-template-columns: 40% 1fr;
		margin: 70px 0;
	}
	@media ${devices.largeLaptop} {
		margin: 110px 0;
	}
	@media ${devices.desktop} {
		margin: 130px 0;
	}
`;

const EvenRowImgContainer = styled.div`
	position: relative;
	@media ${devices.laptop} {
		margin-right: 30px;
	}
	@media ${devices.largeLaptop} {
		margin-right: 40px;
	}
	@media ${devices.desktop} {
		margin-right: 60px;
	}
`;

const OddRowImgContainer = styled.div`
	position: relative;
	@media ${devices.laptop} {
		margin-left: 30px;
	}
	@media ${devices.largeLaptop} {
		margin-left: 40px;
	}
	@media ${devices.desktop} {
		margin-left: 60px;
	}
`;

const TextContainer = styled.div`
	@media ${devices.miniMobile} {
		margin-bottom: 30px;
	}
	@media ${devices.tablet} {
		margin-bottom: 50px;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	@media ${devices.miniMobile} {
		font-size: 30px;
		max-width: 100%;
		margin-bottom: 30px;
	}
	@media ${devices.tablet} {
		font-size: 50px;
		margin-bottom: 50px;
	}
	@media ${devices.laptop} {
		font-size: 30px;
		margin-bottom: 30px;
	}
	@media ${devices.largeLaptop} {
		font-size: 40px;
		margin-bottom: 45px;
	}
	@media ${devices.desktop} {
		font-size: 50px;
		margin-bottom: 50px;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
	@media ${devices.miniMobile} {
		font-size: 10px;
	}
	@media ${devices.tablet} {
		font-size: 14px;
	}
	@media ${devices.laptop} {
		font-size: 10px;
	}
	@media ${devices.largeLaptop} {
		font-size: 13px;
	}
	@media ${devices.desktop} {
		font-size: 14px;
	}
`;

const DescriptionContainer = styled.div`
	font-weight: 400;
	line-height: 1.5;
	white-space: pre-wrap;
	@media ${devices.miniMobile} {
		font-size: 15px;
	}
	@media ${devices.tablet} {
		font-size: 22px;
	}
	@media ${devices.laptop} {
		font-size: 14px;
	}
	@media ${devices.largeLaptop} {
		font-size: 15px;
	}
	@media ${devices.desktop} {
		font-size: 18px;
		line-height: 1.75;
	}
`;

const ContentRow: React.FC<ContentRowProps> = props => {
	const { rowCount, title, subTitle, description, imageSrc } = props;
	const [isWideLayout, setIsWideLayout] = useState<boolean | undefined>(undefined);
	const [ratio, setRatio] = useState(1);
	const isEven = rowCount % 2;
	useEffect(() => {
		window.addEventListener('resize', () => setIsWideLayout(window.innerWidth >= sizes.laptop));
		setIsWideLayout(window.innerWidth >= sizes.laptop);
	}, []);
	if (isWideLayout === undefined) return null;
	if (!isWideLayout) {
		return (
			<OddRowContainer itemID={title}>
				<TextContainer>
					<Subtitle>{subTitle}</Subtitle>
					<Title>{title}</Title>
					<DescriptionContainer>{description}</DescriptionContainer>
				</TextContainer>
				<OddRowImgContainer style={{ aspectRatio: ratio }}>
					<Image
						loader={imageLoader}
						src={imageSrc}
						alt="content image"
						fill
						unoptimized
						onLoadingComplete={({ naturalWidth, naturalHeight }) => {
							setRatio(naturalWidth / naturalHeight);
						}}
					/>
				</OddRowImgContainer>
			</OddRowContainer>
		);
	}
	return isEven ? (
		<EvenRowContainer>
			<EvenRowImgContainer style={{ aspectRatio: ratio }}>
				<Image
					loader={imageLoader}
					src={imageSrc}
					alt="content image"
					fill
					unoptimized
					onLoadingComplete={({ naturalWidth, naturalHeight }) => {
						setRatio(naturalWidth / naturalHeight);
					}}
				/>
			</EvenRowImgContainer>
			<section>
				<Subtitle>{subTitle}</Subtitle>
				<Title>{title}</Title>
				<DescriptionContainer>{description}</DescriptionContainer>
			</section>
		</EvenRowContainer>
	) : (
		<OddRowContainer>
			<section>
				<Subtitle>{subTitle}</Subtitle>
				<Title>{title}</Title>
				<DescriptionContainer>{description}</DescriptionContainer>
			</section>
			<OddRowImgContainer style={{ aspectRatio: ratio }}>
				<Image
					loader={imageLoader}
					src={imageSrc}
					alt="content image"
					fill
					unoptimized
					onLoadingComplete={({ naturalWidth, naturalHeight }) => {
						setRatio(naturalWidth / naturalHeight);
					}}
				/>
			</OddRowImgContainer>
		</OddRowContainer>
	);
};

export default ContentRow;
