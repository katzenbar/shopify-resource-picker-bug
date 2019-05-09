process.env.NODE_ENV = process.env.NODE_ENV || "development";

const environment = require("./environment");
const dotenv = require("dotenv");
dotenv.config({ path: ".env", silent: true });

const ngrokTunnel = process.env.NGROK_WEBPACK_TUNNEL;

environment.config.merge({
  devServer: {
    public: ngrokTunnel
  }
});

module.exports = environment.toWebpackConfig();
