const proxy = require('http-proxy-middleware');

module.exports = function proxiedFn(app) {
  app.use(
    proxy(['/api/**', '/oauth2/**', '/login/**'], {
      target: 'http://localhost:8080'
    })
  );
};
