import ENavItem from '@/constants/nav';
import { INavItem } from '@/interfaces/nav';

export const navItemsConfig: { [K in ENavItem]: INavItem } = {
	[ENavItem.ABOUT]: {
		title: 'about',
		path: '/comingSoon'
	},
	[ENavItem.EVENTS]: {
		title: 'events',
		path: '/comingSoon'
	},
	[ENavItem.AGENDA]: {
		title: 'agenda',
		path: '/comingSoon'
	},
	[ENavItem.ATTEND]: {
		title: 'attend',
		path: '/comingSoon'
	},
	[ENavItem.PARTNER]: {
		title: 'partner',
		path: '/comingSoon'
	},
	[ENavItem.TRAVEL]: {
		title: 'travel',
		path: '/travel'
	},
	[ENavItem.SHOP]: {
		title: 'shop',
		path: 'https://shop.web3convention.com/'
	}
};

export const subNavItemsConfig: { [K in ENavItem]?: INavItem[] } = {
	[ENavItem.ABOUT]: [
		{
			title: 'Venue',
			path: '/venue'
		},
		{
			title: 'Contact Us',
			path: '/contact-us'
		},
		{
			title: 'Apply to Volunteer',
			path: 'https://w3con.eventsair.com/web3convention/atv/Site/Register'
		}
	],
	[ENavItem.EVENTS]: [
		{
			title: 'Convention',
			path: '/convention'
		},
		{
			title: 'Startup Competition',
			path: '/startup'
		},
		//	隐藏
		{
			title: 'Side Events',
			path: '/side-events'
		},
		// 暂时隐藏，非删除
		// {
		// 	title: '2024 Web3 & AI Convention',
		// 	path: '/web3-convention-2024'
		// },
		{
			title: '2023 Web3 Hackathon',
			path: '/hackathon'
		}
	],
	[ENavItem.AGENDA]: [
		{
			title: 'Agenda Overview',
			path: '/agenda'
		},
		{
			title: '2024 Speakers',
			path: '/2024-speakers'
		}
	],
	[ENavItem.ATTEND]: [
		{
			title: 'Why Attend',
			path: '/why-attend'
		},
		{
			title: 'Get Tickets',
			path: '/get-tickets'
		},
		{
			title: 'Book Now',
			path: 'https://w3con.eventsair.com/web3convention/registration/Site/Register'
		}
	],
	[ENavItem.PARTNER]: [
		{
			title: 'Why Partner',
			path: '/why-sponsor'
		},
		{
			title: '2024 Partners',
			path: '/previous-partner'
		},
		{
			title: 'Partner with Us',
			path: '/partners'
		}
	]
};

export default navItemsConfig;
