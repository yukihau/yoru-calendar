const user = {
	obj: (user) => ({ name: user.name, email: user.email, token: user.token }),
	date: (datetime) => new Date(datetime).substring(0, datetime.indexOf('T')).replaceAll('-', '/'),
	time: (datetime, locale='en_us') => new Date(datetime).toLocaleTimeString(locale),
};

const format = { user };

export default format;
