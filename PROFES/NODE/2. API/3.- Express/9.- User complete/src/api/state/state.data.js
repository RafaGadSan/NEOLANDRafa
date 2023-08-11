let testEmailSend = false;

// funciones getters y los setters

const setTestEmailSend = (dataBoolean) => {
  testEmailSend = dataBoolean;
};

const getTestEmailSend = () => {
  return testEmailSend;
};

// EXPORTAR

module.exports = {
  getTestEmailSend,
  setTestEmailSend,
};
