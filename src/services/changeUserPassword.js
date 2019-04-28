function requestChangePassword() {
  console.log('token generated');
  console.log('token sent to user via mail');
}

function verifyPassword() {
  console.log('token matches');
  return true;
}

module.exports = {
  requestChangePassword,
  verifyPassword,
};

