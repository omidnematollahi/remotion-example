console.log("@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@ using react-rewired @");
console.log("@@@@@@@@@@@@@@@@@@@@@@@");

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function(config, env) {
    // ...add your webpack config
    console.log("@@@@@@@@@@@");
    console.log("@ webpack @");
    console.log("@@@@@@@@@@@");
    console.log({config, env});

    if (env === 'development') {
      config.entry = config.entry.replace(new RegExp("index.ts$"), 'remotion/index.ts');
      console.log("entry point changed:", config.entry);
    }

    return config;
  },
}