module.exports = function(grunt) {

	function htmlencode(str) {
		return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
			return '&#'+i.charCodeAt(0)+';';
		});
	}

	function parseProject(file) {
		var project = JSON.parse(grunt.file.read(file));
		var code = grunt.file.read(project.code);
		return '' +
			'<article itemscope itemtype="http://schema.org/Code">' +
			'	<h3>' +
			'		<a href="'+ project.link +'" target="_blank" name="'+ project.name +'" itemprop="url"><span itemprop="name">'+ project.name +'</span></a>' +
			'	</h3>' +
			'	<p itemprop="description">'+ project.description +'</p>' +
			'	<div class="code">' +
			'		<code itemprop="text">'+ htmlencode(code) +'</code>' +
			(project.demo ? '<a class="link-demo" href="'+ project.demo +'" target="_blank" itemprop="exampleOfWork">Demo</a>' : '') +
			'	</div>' +
			'	<meta itemprop="author" content="David Skx" />' +
			'	<meta itemprop="creator" content="David Skx" />' +
			'	<meta itemprop="license" content="http://opensource.org/licenses/MIT" />' +
			'</article>';
	}

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		htmlmin: {
			dist: {
				options: {
					removeComments: false,
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
					replacements: [
						{
							pattern: /<!-- @(.*?) (.*?) -->/ig,
							replacement: function (match, $1, $2) {
								if($1 == 'import') {
									return grunt.file.read($2);
								} else if($1 == 'project') {
									return parseProject($2);
								}
							}
						}
					]
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