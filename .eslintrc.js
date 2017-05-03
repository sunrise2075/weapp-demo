module.exports = {
  extends: 'standard',
  rules: {
    "semi": 0
  },
  plugins: [
    'standard',
    'promise',
    'json'
  ],
  globals: {
    App: true,
    Page: true,
    getApp: true,
    wx: true
  }
};
