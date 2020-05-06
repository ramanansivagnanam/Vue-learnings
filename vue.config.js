module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about': {
      entry: './src/pages/About/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    'login': {
      entry: './src/pages/Login/main.js',
      template: 'public/index.html',
      title: 'Login',
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    }
  }
}