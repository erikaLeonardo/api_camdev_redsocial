const jwt = require('jsonwebtoken');

const secret = 'myllave';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcxOTQ4MjgxMn0.bPeo877JuMoOl8LNfopMIht3dqwLi-Mll1vlEnVoa7Q';

function verfyToken(token, secret){
  return jwt.verify(token, secret);
}

const paylod = verfyToken(token, secret);
console.log(paylod);
