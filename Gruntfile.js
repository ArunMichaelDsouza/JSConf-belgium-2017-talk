module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    'demos/grunt-browserify-demo/bundle.js': ['demos/grunt-browserify-demo/app.js']
                },
                options: {
                    transform: [['babelify', {presets: ['es2015']}]]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
};
