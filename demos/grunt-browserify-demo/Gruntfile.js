module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    'bundle.js': ['app.js']
                },
                options: {
                    transform: [['babelify', {presets: ['es2015']}]]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
};
