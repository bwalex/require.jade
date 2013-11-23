({
  appDir: "./",
  baseUrl: "./",
  dir: "./build",
  skipDirOptimize: false,

  optimize: "none",//"uglify2",
  preserveLicenseComments: false,
  generateSourceMaps: true,

  fileExclusionRegExp: /(^\.|~$|^build.js$|^r.js$)/,

  paths: {
    /* modules from CDN: */
    'jquery' : "empty:",
  },

  modules: [
    {
      name: "test",
      exclude: [
        "jade-full",
        "jade"
      ]
    },
  ]
})
