module.exports = {
    apps: [{
      name: "bmm",
      script: "src/index.js",
      env: {
        YT_COOKIE_FILE: "/home/ubuntu/yt.cookie",
        YT_UA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        YT_PROXY: "http://user:pass@proxyhost:port"
      }
    }]
  }