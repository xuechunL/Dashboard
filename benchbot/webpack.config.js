'use strict';

var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var js_dist = path.join(__dirname, './public/static/js');
var js_root_chart = './src/views/Charts/';


module.exports = [{
  name: 'chartComponent',
  entry: {
    donut: js_root_chart + 'donut/donut.js',
    line_garbage: js_root_chart + 'line/line_garbage.js',
    line_user: js_root_chart + 'line_user/line_user.js',
    line_garbage_tooltip: js_root_chart + 'line_tooltip/line_garbage_tooltip.js',
    line_garbage_brush: js_root_chart + 'line_brush/line_garbage_brush.js',
    line_garbage_zoom: js_root_chart + 'line_zoom/line_garbage_zoom.js',
    line_multi_garbage: js_root_chart + 'line_multi/line_multi_garbage.js',
    line_multi_garbage_tooltip: js_root_chart + 'line_multi_tooltip/line_multi_garbage_tooltip.js',
    line_multi_garbage_brush: js_root_chart + 'line_multi_brush/line_multi_garbage_brush.js',
    line_multi_garbage_zoom: js_root_chart + 'line_multi_zoom/line_multi_garbage_zoom.js',
    bar: js_root_chart + 'bar/bar.js',
    bar_tooltip: js_root_chart + 'bar_tooltip/bar_tooltip.js',
    bar_brush: js_root_chart + 'bar_brush/bar_brush.js',
    bar_zoom: js_root_chart + 'bar_zoom/bar_zoom.js',
    bar_group: js_root_chart + 'bar_group/bar_group.js',
    bar_group_brush: js_root_chart + 'bar_group_brush/bar_group_brush.js',
    bar_group_tooltip: js_root_chart + 'bar_group_tooltip/bar_group_tooltip.js',
    bar_group_zoom: js_root_chart + 'bar_group_zoom/bar_group_zoom.js',
    bar_stack: js_root_chart + 'bar_stack/bar_stack.js',
    bar_stack_tooltip: js_root_chart + 'bar_stack_tooltip/bar_stack_tooltip.js',
    bar_stack_brush: js_root_chart + 'bar_stack_brush/bar_stack_brush.js',
    bar_stack_zoom: js_root_chart + 'bar_stack_zoom/bar_stack_zoom.js'
  },
  output: {
    path: js_dist,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
}];