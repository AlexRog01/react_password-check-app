import React, { useState } from 'react';
import { PasswordInput } from '../PasswordInput';
import { usePasswordValidator } from '../../hooks/usePasswordValidator';
import './Form.css';

export const Form = () => {
  const [passValue, setPassValue] = useState('');
  const {firstLineColor, secondLineColor, thirdLineColor} = usePasswordValidator(passValue);

  return (
    <form className="form">
      <PasswordInput
        passValue={passValue}
        setPassValue={setPassValue}
      />

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
