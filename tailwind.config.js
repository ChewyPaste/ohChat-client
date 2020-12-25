module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		minWidth: {
			0: '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%'
		},
		extend: {
			zIndex: {
				9998: '9998'
			},

			colors: {
				bgmain: '#793EDD',
				bglight: '#E2D6F8',
				bggray: '#f5f6f8',
				success: '#42b983',
				danger: '#b94242',
				bgmainlighter: '#9A6FE3'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
