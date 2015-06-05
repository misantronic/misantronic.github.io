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
					'index.html': 'index-template.html'
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	// tasks
	grunt.registerTask('default', ['htmlmin']);
};