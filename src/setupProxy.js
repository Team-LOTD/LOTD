const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://15.165.236.226:8080/",
            // target: "http://localhost:4000",
            changeOrigin: true,
        })
    );
};
