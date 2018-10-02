// For more information read https://babeljs.io/docs/en/config-files
module.exports = (api) => {
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];
  const plugins = [];
  const ignore = [
    './lib/client/build',
    './lib/client/node_modules',
  ];

  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets,
    plugins,
    ignore,
  };
};
