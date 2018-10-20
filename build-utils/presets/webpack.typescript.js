const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        },
      },
    ],
  },
});
