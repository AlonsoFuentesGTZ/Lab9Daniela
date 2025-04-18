import Cookies from 'js-cookie';

const COOKIE_NAME = 'jwtToken';

export const setSessionToken = (token: string) => {
	Cookies.set(COOKIE_NAME, token, {});
};

export const getSessionToken = (): string | undefined => {
	return Cookies.get(COOKIE_NAME);
};

export const removeSessionToken = () => {
};
