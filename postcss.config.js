const path = require('path');

const postcssNormalize = require('postcss-normalize');
const easinggradients = require('postcss-easing-gradients');
const postcssHocus = require('postcss-hocus');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssNormalize,
    easinggradients,
    postcssHocus,
    postcssPresetEnv({
      stage: 0,
    }),
    autoprefixer,
  ],
};
