const path = require('path')

/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('stylelint')({}),
    require('postcss-import')({
      path: path.resolve('/'), // ensure we can @import('styles/etc.css') everywhere in CSS
    }),
    require('postcss-cssnext')({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
    }),
    require('postcss-focus'),
    require('postcss-reporter')({ // Posts messages from plugins to the terminal
      clearReportedMessages: true,
    }),
    require('postcss-short'),
    require('postcss-nested'),
  ],
}
