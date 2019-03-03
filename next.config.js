const withCSS = require("@zeit/next-css");

require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");
module.exports = withCSS({
    
    serverRuntimeConfig: {
        // Will only be available on the server side
    },

    publicRuntimeConfig: {
        // will only be available on both server and client

        RESTURL_SPEAKERS_PROD: "https://www.siliconvalley-codecamp.com/rest/sessions/ps"
    },
    webpack(config, options) {


        // in order to read the dotenv file will be available with this
        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,
            new Dotenv({
                path: path.join(__dirname, ".env"),
                systemvars: true
            })
        ];
        return config;
    }
});