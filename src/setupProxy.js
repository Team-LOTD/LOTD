const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://54.180.160.201:8080/",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};
