const onlyLetters = (value) => {
  return value.replace(/[^a-zA-Z ]/g, "");
};

const onlyLettersAndNumbers = (value) => {
  return value.replace(/[^A-Za-z0-9]+/g, "");
};

const onlyNumbers = (value) => {
  return value.replace(/[^0-9]/g, "");
};

const tools = {
  onlyLetters: onlyLetters,
  onlyLettersAndNumbers: onlyLettersAndNumbers,
  onlyNumbers: onlyNumbers,
};

export default tools;
