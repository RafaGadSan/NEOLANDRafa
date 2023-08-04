// archivo en utils -> randomCode.js
const randomCode = () => {
  let code = Math.floor(Math.random() * (999999 - 100000) + 100000);
  return code;
};

module.exports = randomCode;
