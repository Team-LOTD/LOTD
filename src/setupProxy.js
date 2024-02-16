const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://13.124.55.174:8080/",
            // target: "http://localhost:4000",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};
