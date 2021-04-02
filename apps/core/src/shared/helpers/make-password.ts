export const PasswordGenerator = function () {
  const symbols =
    '!?.,@#$%^&*_+-=<>(){}[]0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let password = '';
  for (let i = 0; i < 8; i++) {
    password += symbols.charAt(Math.floor(Math.random() * 62));
  }

  return password;
};

export const MakePassword = () => {
  let password = PasswordGenerator();

  while (
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[!?.,@#$%^&*_+-=<>(){}[]]/.test(password)
  ) {
    password = PasswordGenerator();
  }

  return password;
};
