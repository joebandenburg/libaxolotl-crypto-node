"use strict";

module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs");

    grunt.initConfig({
        jshint: {
            all: {
                src: ["Gruntfile.js", "index.js"],
                options: {
                    jshintrc: true
                }
            }
        },
        jscs: {
            all: {
                src: ["Gruntfile.js", "index.js"]
            }
        },
        mochaTest: {
            unitTests: {
                src: ["test/**/*.js"]
            }
        }
    });

    grunt.registerTask("test", ["jshint", "jscs", "mochaTest"]);
    grunt.registerTask("default", ["test"]);
};
