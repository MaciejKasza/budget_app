export function validateLoginForm(username, password) {
  const errors = {};

  // Username validation
  if (!username) {
    errors.username = "Username is required.";
  } else if (username.length < 3 || username.length > 20) {
    errors.username = "Username must be between 3 and 20 characters.";
  } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errors.username =
      "Username can only contain letters, numbers, and underscores.";
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 3) {
    errors.password = "Password must be at least 3 characters long.";
  } else if (!/[a-zA-Z]/.test(password)) {
    errors.password = "Password must contain at least one letter.";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "Password must contain at least one number.";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.password = "Password must contain at least one special character.";
  }

  return errors;
}

export function validateRegisterForm(
  username,
  email,
  password,
  seccondaryPassword
) {
  const errors = {};

  // Walidacja username
  if (!username) {
    errors.username = "Username is required.";
  } else if (username.length < 3 || username.length > 20) {
    errors.username = "Username must be between 3 and 20 characters.";
  } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errors.username =
      "Username can only contain letters, numbers, and underscores.";
  }

  // Walidacja email
  if (!email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid.";
  }

  // Walidacja password
  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 3) {
    errors.password = "Password must be at least 3 characters long.";
  } else if (!/[a-zA-Z]/.test(password)) {
    errors.password = "Password must contain at least one letter.";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "Password must contain at least one number.";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.password = "Password must contain at least one special character.";
  }

  // Walidacja secondaryPassword
  if (!seccondaryPassword) {
    errors.seccondaryPassword = "Confirm Password is required.";
  } else if (seccondaryPassword !== password) {
    errors.seccondaryPassword = "Passwords do not match.";
  }

  return errors;
}
