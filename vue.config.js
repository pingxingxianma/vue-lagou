module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://movie.douban.com/j',
        changeOrigin: true
      }
    }
  }
}