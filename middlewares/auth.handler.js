const boom = require('@hapi/boom');
const { config } = require('./../config/config')


function checkApikey(req, res, next) {
  const apikey = req.headers['api'];
  if (apikey === '123') {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { checkApikey }
