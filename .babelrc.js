
module.exports = {
  "presets": [
    "react-app"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "react-css-modules",
      {
        "exclude": 'node_modules',
        "generateScopedName": '[path][name]__[local]',
        "filetypes": {
          ".less": {
            "syntax": "postcss-less"
          }
        }
      }
    ]
  ]
}
