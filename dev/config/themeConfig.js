'use strict';

module.exports = {
	theme: {
		slug: 'korignsdja',
		name: '日本語 Ko with WP Rig',
		author: 'Ko Kimura'
	},
	dev: {
		browserSync: {
			live: true,
			proxyURL: 'localhost:8888/korigja',
			bypassPort: '8181'
		},
		browserslist: [ // See https://github.com/browserslist/browserslist
			'> 1%',
			'last 2 versions'
		],
		debug: {
			styles: false, // Render verbose CSS for debugging.
			scripts: false // Render verbose JS for debugging.
		}
	},
	export: {
		compress: true
	}
};
