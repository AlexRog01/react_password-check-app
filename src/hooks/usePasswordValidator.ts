enum Colors {
  Gray = 'gray',
  Red = 'red',
  Yellow = 'yellow',
  Green = 'green',
}

export const usePasswordValidator = (password: string) => {
  const hasLetters = /\p{L}/u.test(password);
  const hasDigits = /\p{N}/u.test(password);
  const hasSymbols = /[^\p{L}\p{N}]/u.test(password);

  if (password.length === 0) { // empty line check
    return {
      firstLineColor: Colors.Gray,
      secondLineColor: Colors.Gray,
      thirdLineColor: Colors.Gray
    };
  }

  if (password.length >= 1 && password.length < 8) { // size check
    return {
      firstLineColor: Colors.Red,
      secondLineColor: Colors.Red,
      thirdLineColor: Colors.Red
    };
  }

  if ((hasLetters && hasDigits && !hasSymbols) // Combinations of letters-digits,
      || (hasLetters && hasSymbols && !hasDigits) // letters-symbols or
      || (hasDigits && hasSymbols && !hasLetters) // digits-symbols check
  ){
    return {
      firstLineColor: Colors.Yellow,
      secondLineColor: Colors.Yellow,
      thirdLineColor: Colors.Gray
    };
  }

  if (hasLetters && hasDigits && hasSymbols) { // letters, symbols and numbers togather check
    return {
      firstLineColor: Colors.Green,
      secondLineColor: Colors.Green,
      thirdLineColor: Colors.Green
    };
  }

  if (hasLetters || hasDigits || hasSymbols){ // letters, digits or symbols check
    return {
      firstLineColor: Colors.Red,
      secondLineColor: Colors.Gray,
      thirdLineColor: Colors.Gray,
    };
  }

  return {
    firstLineColor: Colors.Gray,
    secondLineColor: Colors.Gray,
    thirdLineColor: Colors.Gray
  };
};