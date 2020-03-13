export const isValidEmail = mail => {
  const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  return mailRegex.test(mail);
};
