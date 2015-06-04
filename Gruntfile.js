module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index.html': './templates/index.html'
				}
			}
		},

		cssmin: {
			target: {
				files: {
					'./css/style.css': ['./css/style.css']
				}
			}
		},

		'string-replace': {
			dist: {
				files: {
					'index.html': 'index.html'
				},
				options: {
					replacements: [{
						pattern: /<!-- @import (.*?) -->/ig,
						replacement: function (match, p1) {
							return grunt.file.read(p1);
						}
					}]
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// tasks
	grunt.registerTask('default', ['htmlmin', 'cssmin', 'string-replace']);
};