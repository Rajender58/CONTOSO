'use strict';
var path = require('path');

module.exports = function(grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'app/css/styles.css': 'app/sass/styles.scss'
				}
			}
		},
	    watch: {
	    	options: { livereload: true },
	      	sass: {
	        	files: ['app/sass/styles.scss'],
	        	tasks: ['sass:dist'],
	      	}
	    },
		connect: {
			server: {
				options: {
					port: 9005,
					base: 'app',
					hostname: '*',
					livereload:true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.task.registerTask('default', ['watch', 'sass']);
};