const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://43.202.60.217:8080/",
            // target: "http://localhost:4000",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};
