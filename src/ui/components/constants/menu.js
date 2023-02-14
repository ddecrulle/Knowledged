const Menu = [
	{
		label: 'Accueil',
		pathname: '/',
		external: false,
	},
	{
		label: 'Offre de services',
		pathname: '/services',
		external: false,
	},
];

const SecondaryMenu = [
	// {
	// 	label: 'Se connecter',
	// 	pathname: '/signin',
	// 	external: false,
	// 	disabled: true,
	// },
	{
		label: 'Github',
		pathname: 'https://github.com/ddecrulle/knowledge',
		icon: 'github',
		external: true,
	},
];

export { Menu, SecondaryMenu };
