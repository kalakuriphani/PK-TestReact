
var webpack =require('webpack');
module.exports = {
  entry: ['script!jquery/dist/jquery.min.js',
          'script!foundation-sites/dist/foundation.min.js',
          './app/app.jsx'],
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main:'app/components/main.jsx',
      Nav:'app/components/nav.jsx',
      Weather:'app/components/weather.jsx',
      WeatherForm:'app/components/weatherForm.jsx',
      WeatherMessage:'app/components/weathermessage.jsx',
      About:'app/components/about.jsx',
      Examples:'app/components/examples.jsx',
        OpenWeatherMap:'app/api/openMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },

devtool: 'cheap-module-eval-source-map'

};
