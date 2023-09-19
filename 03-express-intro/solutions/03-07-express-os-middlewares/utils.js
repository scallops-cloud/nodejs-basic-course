function isValidName(name) {
  const regex = /[^a-zA-Z]/g;
  const hasNonAlphabets = regex.test(name);

  if (hasNonAlphabets) {
    return false;
  }

  return true;
}

module.exports = { isValidName };
