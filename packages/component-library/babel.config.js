// packages/component-library/babel.config.js
module.exports = api => {
  api.env(["development", "test"]);
  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-object-rest-spread"
  ];
  const presets = [
    ["@babel/preset-env", { forceAllTransforms: true }],
    "@babel/preset-react"
  ];

  return { plugins, presets };
};
