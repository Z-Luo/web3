/* eslint-disable camelcase */
import Image from 'next/image';
import styled from 'styled-components';

import {
	community_partner,
	list_strategic,
	media_partner,
	sponsors,
	viture_capital
} from './imagedata';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const ContentContainer = styled.div`
	margin: auto;
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 50px 30px 50px;
	position: relative;
	@media ${devices.mobile} {
		padding: 50px 100px 50px;
	}
`;
const Title = styled.h2`
	${sectionTitle};
	max-width: unset;
`;
const Subtitle = styled.p`
	${sectionSubtitle};
`;
const Backdrop = styled.div`
	${backdrop}
`;
const LogoCollumns = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	img {
		height: 90px;
		margin: 5px;
		width: auto;
	}

	.host {
		height: 150px;
		margin: 5px;
		width: auto;
	}

	@media (max-width: 460px) {
		img {
			height: 60px;
			margin: 5px;
			width: auto;
		}

		.host {
			height: 100px;
			margin: 5px;
			width: auto;
		}
	}
`;

const Cohost = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(1, 1fr);

	@media ${devices.largeLaptop} {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}
	@media (max-width: 340px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}

	@media (min-width: 1150px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}
`;

const Strategic = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);

	@media ${devices.largeLaptop} {
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}

	@media (max-width: 340px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}

	@media (min-width: 1200px) {
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}
`;

const Viture = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(1, 1fr);

	@media ${devices.largeLaptop} {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}

	@media (max-width: 340px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}
`;

const Media = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(1, 1fr);

	@media ${devices.largeLaptop} {
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}

	@media (max-width: 340px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}

	@media (min-width: 1200px) {
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}
`;

const GridContainerStr = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(1, 1fr);
	width: 100%;

	@media ${devices.largeLaptop} {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}
`;

const GridItemOrg = styled.div`
	padding: 10px;
	position: relative;
`;
const Challenge = () => {
	return (
		<ContentContainer>
			<Subtitle>Web3 Hackathon 2023</Subtitle>
			<Title>Challenges</Title>
			<Backdrop>Challenge</Backdrop>
			<p>
				Build with the latest AI tools from OpenAI to create innovative new Web3 apps . Work
				with top AI professionals and learn from them . Create your AI app by combining
				GPT-3, Codex, Dalle-2, and Whisper ! Explore the Web3 AI technology .
			</p>

			<h3>Organized by</h3>
			<LogoCollumns>
				<Cohost>
					<GridItemOrg>
						<a href=" https://cloudtechgroup.com/">
							<Image
								src="web_logo/ctg.png"
								alt="jr"
								width={299}
								height={150}
								className="host"
								loader={imageLoader}
							/>
						</a>
					</GridItemOrg>
					<GridItemOrg>
						<a href="https://jiangren.com.au/">
							<Image
								src="web_logo/jr.png"
								alt="jr"
								width={299}
								height={150}
								className="host"
								loader={imageLoader}
							/>
						</a>
					</GridItemOrg>
					<GridItemOrg>
						<a href="https://abcweb3.club/">
							<Image
								src="web_logo/abc.png"
								alt="jr"
								width={299}
								height={150}
								className="host"
								loader={imageLoader}
							/>
						</a>
					</GridItemOrg>
				</Cohost>
			</LogoCollumns>

			<h3>Sponsors</h3>
			<LogoCollumns>
				<Strategic>
					{sponsors.map(item => {
						return (
							<GridItemOrg>
								<a href={item.url}>
									<Image
										src={`web_logo/${item.name}`}
										alt="cloudtech"
										width={179}
										height={90}
										loader={imageLoader}
									/>
								</a>
							</GridItemOrg>
						);
					})}
				</Strategic>
			</LogoCollumns>

			<h3>Strategic Partners</h3>
			<LogoCollumns>
				<Strategic>
					{list_strategic.map(item => {
						return (
							<GridItemOrg>
								<a href={item.url}>
									<Image
										src={`web_logo/${item.name}`}
										alt="cloudtech"
										width={179}
										height={90}
										loader={imageLoader}
									/>
								</a>
							</GridItemOrg>
						);
					})}
				</Strategic>
			</LogoCollumns>
			<h3>Venture Capital</h3>
			<LogoCollumns>
				<Viture>
					{viture_capital.map(item => {
						return (
							<GridItemOrg>
								<a href={item.url}>
									<Image
										src={`web_logo/${item.name}`}
										alt="cloudtech"
										width={179}
										height={90}
										loader={imageLoader}
									/>
								</a>
							</GridItemOrg>
						);
					})}
				</Viture>
			</LogoCollumns>

			<h3>Media Partners</h3>
			<LogoCollumns>
				<Media>
					{media_partner.map(item => {
						return (
							<GridItemOrg>
								<a href={item.url}>
									<Image
										src={`web_logo/${item.name}`}
										alt="cloudtech"
										width={179}
										height={90}
										loader={imageLoader}
									/>
								</a>
							</GridItemOrg>
						);
					})}
				</Media>
			</LogoCollumns>

			<h3>Community Partners</h3>
			<LogoCollumns>
				<Media>
					{community_partner.map(item => {
						return (
							<GridItemOrg>
								<a href={item.url}>
									<Image
										src={`web_logo/${item.name}`}
										alt="cloudtech"
										width={179}
										height={90}
										loader={imageLoader}
									/>
								</a>
							</GridItemOrg>
						);
					})}
				</Media>
			</LogoCollumns>

			<h3>Security Partner</h3>
			<LogoCollumns>
				<GridContainerStr>
					<GridItemOrg>
						<a href="https://tide.org/">
							<Image
								src="/web_logo/tide.png"
								alt="tide"
								width={179}
								height={90}
								loader={imageLoader}
							/>
						</a>
					</GridItemOrg>
				</GridContainerStr>
			</LogoCollumns>
		</ContentContainer>
	);
};

export default Challenge;
