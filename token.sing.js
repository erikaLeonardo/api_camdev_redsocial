const jwt = require('jsonwebtoken');

const secret = 'myllave';
const paylod = {
  sub: 1,
}

function signToken(paylod, secret){
  return jwt.sign(paylod, secret);
}

const token = signToken(paylod, secret);
//console.log(token);
