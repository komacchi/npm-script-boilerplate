module.exports = (ctx) => ({
  // map: ctx.options.map,
  plugins: [
    require('postcss-import')({
      plugins: [
        require('stylelint')
      ]
    }),
    require('postcss-extend')(),
    require('postcss-mixins')(),
    require('postcss-nested')(),
    require('postcss-reporter')(),
    require('postcss-simple-vars')(),
    require('postcss-utilities')(),
    require('postcss-reporter')(),
    require('autoprefixer')(),
    require('csswring')()
  ]
});
