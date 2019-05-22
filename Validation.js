export const validateEmail = (email) => {
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,20})+$/;
  if (email && mailformat.test(email)) {
    return true;
  }
  return false;
};

export const validatePhone = (phone) => {
  const format = /^[0-9]+$/;
  if (phone && format.test(phone)) {
    return true;
  }
  return false;
};

export const validateURL = (url) => {
  const regexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return regexp.test(url);
};

export const validateAlphaNumeric = (str) => {
  if (!str) return false;
  // const format = /[A-Za-z0-9]+.*$/;
  const format1 = /.*[A-Za-z]+.*[0-9].*$/;
  const format2 = /.*[0-9]+.*[A-Za-z].*$/;
  return format1.test(str) || format2.test(str);
};
