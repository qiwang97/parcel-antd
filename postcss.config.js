module.exports = {
  modules: true,
  plugins: {
    autoprefixer: {
      grid: true,
    },
    'postcss-modules': {
      globalModulePaths: ['./src/style/index.less'],
    },
  },
};
