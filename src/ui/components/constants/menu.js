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
	{
		label: 'Outils du SI',
		pathname: '/tools',
		external: false,
	},
	{
		label: 'Utilisateurs',
		pathname: '/users',
		external: false,
		disabled: true,
	},
	{
		label: 'GSBPM',
		pathname: '/gsbpm',
		external: false,
		disabled: true,
	},
];

const SecondaryMenu = [
	{
		label: 'GitHub',
		pathname: 'https://github.com/ddecrulle/knowledge',
		icon: 'github',
		external: true,
	},
];

export { Menu, SecondaryMenu };
