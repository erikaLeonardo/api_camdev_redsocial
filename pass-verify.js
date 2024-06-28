const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$OTX32qGhkZrJSDL1rPWCgeXWkmXcMQBRpva1k0aNbxWE7b90Da0m2';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
