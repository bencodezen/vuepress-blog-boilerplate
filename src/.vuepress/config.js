module.exports = {
	title: 'My New VuePress Blog',
	ga: '',
	dest: './public',
	themeConfig: {
		repo: 'https://wwww.gitlab.com',
		repoLabel: 'Custom Repo Label',
		docsDir: 'src',
		editLinks: true,
		editLinkText: 'Found a bug? Help me improve this page!',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'About', link: '/about/' },
			{ text: 'Contact', link: '/contact/' }
		]
	}
}
