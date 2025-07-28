/* eslint no-useless-escape:0 */
const emailReg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;

/**
 * @description
 * Check whether an email address is valid
 * @param {string} email an email address
 * @return {boolean} return a boolean
 */

export const isEmail = (email: string): boolean => emailReg.test(email);

/**
 * @description
 * check validation of phone number
 * @param {string} phone a phone number
 * @return {boolean} return a boolean
 */

export const workPhoneNumber = /^0(2|3|7|8)\d{8,12}$/;
export const mobilePhoneNumber = /^04\d{8}$/;
export const homePhoneNumber = /^0(2|3|7|8)\d{8}$/;
export const cnMobilePhoneNumber = /^1[3-9]\d{9}$/;

export const isPhoneNumber = (phone: string, regex: RegExp = mobilePhoneNumber): boolean =>
	regex.test(phone);

// Australia Postcode
export const postcode = /^[0-9]{4}$/;

/**
 * @description
 * check validation of url
 * @param {string} link a url
 * @return {boolean} return a boolean
 */

export const websiteUrlReg =
	/(https|http)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export const isWebsiteUrl = (link: string): boolean => websiteUrlReg.test(link);

export const alphaNumericSpaceReg = /^[a-z0-9\s]*$/i;

/**
 * @description
 * Check whether the input is only alpha-numeric and spaces
 * @param {string} input the input string
 * @return {boolean} return a boolean
 */
export const isAlphaNumericSpace = (input: string): boolean => alphaNumericSpaceReg.test(input);
