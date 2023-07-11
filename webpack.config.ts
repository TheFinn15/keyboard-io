import { Configuration } from "webpack";
import * as path from "path";

export const config: Configuration = {
  // TODO: bug with alias to file paths|cant to use @/ or @components/
  resolve: {
    alias: {
      "@": path.join(path.resolve(__dirname, "/src")),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "assets/icons",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "assets/fonts",
      },
    ],
  },
};
