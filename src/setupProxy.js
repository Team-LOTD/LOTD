const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://52.78.178.56:8080/",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};
