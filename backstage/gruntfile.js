module.exports = (grunt) => {
    "use strict";

    grunt.initConfig({
        ts: {
            default: {
                tsconfig: './tsconfig.json',
                watch: './src'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['src/**/*.txt'],
                        dest: 'build/',
                        filter: 'isFile'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
    grunt.loadNpmTasks("grunt-contrib-copy");
}