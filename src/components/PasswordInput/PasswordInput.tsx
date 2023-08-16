import React, { FC, useState } from 'react';
import classNames from 'classnames';


type Props = {
  passValue: string,
  setPassValue: (password: string) => void,
};

export const PasswordInput: FC<Props> = ({passValue, setPassValue}) => {
  const [passType, setPassType] = useState('password');

  const togglePassVisibility = () => {
    if (passType === 'password') {
      setPassType('text');
    } else {
      setPassType('password');
    }
  };

  return (
    <div className='field'>
      <p className='control has-icons-left has-icons-right'>
        <input
          className='input'
          type={passType}
          placeholder="Password"
          value={passValue}
          onChange={(event) => setPassValue(event.target.value)}
        />

        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
        <span className="icon is-small is-right">
          <i
            className={classNames('fa-solid toggle-icon',
              {'fa-eye' : passType === 'text'},
              {'fa-eye-slash': passType === 'password'}
            )}
            onClick={togglePassVisibility}
          >
          </i>
        </span>
      </p>
    </div>
  );
};