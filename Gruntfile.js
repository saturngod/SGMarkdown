module.exports = function(grunt) {



  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
    options: {
        build_dir: './build', // Where the build version of my node-webkit app is saved
        mac: true,
        win: true,
        linux32: true,
        linux64: true,
        mac_icns : "./resources/images/icons/512.icns",
        version : "0.9.2",
        zip : false
    },
    src: ['./src/**/*'] // Your node-webkit app
  },
  exec: {
            build_win_release: {
                command: "./scripts/build_win.sh",
                cwd: './',
                stdout: true,
                stderr: true
            },
            build_mac_release: {
                command: "./scripts/build_mac.sh",
                cwd: './',
                stdout: true,
                stderr: true
            },
            build_linux32_release: {
                command: "./scripts/build_linux32.sh",
                cwd: './',
                stdout: true,
                stderr: true
            },
            build_linux64_release: {
                command: "./scripts/build_linux64.sh",
                cwd: './',
                stdout: true,
                stderr: true
            }
   }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-exec');

  // Default task(s).
  grunt.registerTask('default', [
  'nodewebkit',
  'exec:build_win_release',
  'exec:build_mac_release',
  'exec:build_linux32_release',
  'exec:build_linux64_release']
);

};
