import { PRODUCTION, UAT } from '@/constants/env';

export const isProd =
	process.env.NODE_ENV === PRODUCTION && process.env.NEXT_PUBLIC_NEXT_ENV !== UAT;
export const isUat = process.env.NEXT_PUBLIC_NEXT_ENV === UAT;
