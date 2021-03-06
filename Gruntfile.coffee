module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-browserify'
  grunt.initConfig
    browserify:
      app:
        files:
          "build/jq.br.template.min.js": [
            "src/**/*.js"
          ]
        options:
          transform: ["partialify", "uglifyify"]

  grunt.registerTask "build", ["browserify"]
  grunt.registerTask "default", ["build"]
