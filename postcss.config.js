module.exports = (ctx) => ({
  // map: ctx.options.map,
  plugins: [
    require('postcss-import')(),
    require('postcss-extend')(),
    require('postcss-mixins')(),
    require('postcss-nested')(),
    require('postcss-reporter')(),
    require('postcss-simple-vars')(),
    require('postcss-utilities')(),
    require('autoprefixer')(),
    require('csswring')()
  ]
});
