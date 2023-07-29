import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Form.css';

enum Colors {
  Gray = 'gray',
  Red = 'red',
  Yellow = 'yellow',
  Green = 'green',
}

export const Form = () => {
  const [passValue, setPassValue] = useState('');
  const [passType, setPassType] = useState('password');
  const [eyeIconOpen, setEyeIconOpen] = useState(false);

  const [firstLineColor, setFirstLineColor] = useState(Colors.Gray);
  const [secondLineColor, setSecondLineColor] = useState(Colors.Gray);
  const [thirdLineColor, setThirdLineColor] = useState(Colors.Gray);

  const togglePassVisibility = () => {
    setEyeIconOpen(!eyeIconOpen);

    if (passType === 'password') {
      setPassType('text');
    } else {
      setPassType('password');
    }
  };

  const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassValue(password);

    const hasLetters = /[a-zA-Zа-яА-Я]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[^a-zA-Zа-яА-Я\d]/.test(password);

    if (password.length === 0) { // empty line check
      setFirstLineColor(Colors.Gray);
      setSecondLineColor(Colors.Gray);
      setThirdLineColor(Colors.Gray);
    }

    if (hasLetters || hasDigits || hasSymbols){ // just letters, digits or symbols check
      setFirstLineColor(Colors.Red);
      setSecondLineColor(Colors.Gray);
      setThirdLineColor(Colors.Gray);
    }

    if ((hasLetters && hasDigits && !hasSymbols) // Combinations of letters-digits,
      || (hasLetters && hasSymbols && !hasDigits) // letters-symbols or
      || (hasDigits && hasSymbols && !hasLetters) // digits-symbols check
    ){
      setFirstLineColor(Colors.Yellow);
      setSecondLineColor(Colors.Yellow);
      setThirdLineColor(Colors.Gray);
    }

    if (hasLetters && hasDigits && hasSymbols) { // letters, symbols and numbers togather check
      setFirstLineColor(Colors.Green);
      setSecondLineColor(Colors.Green);
      setThirdLineColor(Colors.Green);
    }

    if (password.length >= 1 && password.length < 8) { // size check
      setFirstLineColor(Colors.Red);
      setSecondLineColor(Colors.Red);
      setThirdLineColor(Colors.Red);
    }
  };

  return (
    <form className="form">
      <div className='field'>
        <p className='control has-icons-left has-icons-right'>
          <input
            className='input'
            type={passType}
            placeholder="Password"
            value={passValue}
            onChange={handlerInputChange}
          />

          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
          <span className="icon is-small is-right">
            <i
              className={`fa-solid toggle-icon ${eyeIconOpen ? 'fa-eye' : 'fa-eye-slash'}`}
              onClick={togglePassVisibility}
            >
            </i>
          </span>
        </p>
      </div>

      <div className="pass-proggres">
        <div className={`line ${firstLineColor}`}></div>
        <div className={`line ${secondLineColor}`}></div>
        <div className={`line ${thirdLineColor}`}></div>
      </div>

      <div className="field">
        <p className="control">
          <button className="button is-success">
            Login
          </button>
        </p>
      </div>
    </form>
  );
};
