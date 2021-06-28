import React, { useState } from 'react';

function PasswordGenerator() {
  const minLength = 8,
    maxLength = 16,
    allCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    allSmall = 'abcdefghijklmnopqrstuvwxyz',
    specialChar = "~!@#$%^&*()_+`{}|[]:;'<>?,./",
    numbers = '1234567890';
  const [passwordLength, setPasswordLength] = useState(minLength),
    [includeSpecialChar, setIncludeSpecialChar] = useState(true),
    [includeNumbers, setIncludeNumbers] = useState(true),
    [password, setPassword] = useState('Password will be shown here.....');

  const generatePassword = (event) => {
    event.preventDefault();
    let passwd = '';
    let charSet = allCaps + allSmall;
    if (includeSpecialChar) charSet = charSet + specialChar;
    if (includeNumbers) charSet = charSet + numbers;
    const charLen = charSet.length;
    for (var index = 0; index < passwordLength; index++) {
      passwd += charSet.charAt(Math.floor(Math.random() * charLen));
    }
    if (
      includeSpecialChar &&
      specialChar.split('').filter((sc) => passwd.indexOf(sc) > -1).length < 1
    ) {
      passwd = addOneOfCharInPassword(specialChar, passwd);
    }
    if (
      includeNumbers &&
      numbers.split('').filter((sc) => passwd.indexOf(sc) > -1).length < 1
    ) {
      passwd = addOneOfCharInPassword(numbers, passwd);
    }
    setPassword(passwd);
  };

  const addOneOfCharInPassword = (chars, passwd) => {
    const index = Math.floor(Math.random() * passwordLength);
    passwd = passwd.split('');
    passwd[index] = chars.charAt(Math.floor(Math.random() * chars.length));
    return passwd.join('');
  };

  return (
    <div>
      <br />
      <h3>Random Password Generator</h3>
      <br />
      <form action=''>
        <div className='row'>
          <div className='col-sm-6 col-md-6'>
            <label htmlFor='passwordLength' className='form-label'>
              Password Length{' '}
              <span className='badge rounded-pill bg-secondary'>
                {passwordLength}
              </span>
            </label>
            <input
              type='range'
              className='form-range'
              min={minLength}
              max={maxLength}
              step='1'
              id='passwordLength'
              value={passwordLength}
              onInput={(event) => {
                setPasswordLength(event.target.value);
              }}
            />
          </div>
          <div className='col-sm-6 col-md-6'>
            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                checked={includeSpecialChar}
                id='includeSpecialChar'
                onChange={(event) => {
                  setIncludeSpecialChar(event.target.checked);
                }}
              />
              <label className='form-check-label' htmlFor='includeSpecialChar'>
                Include Special Character
              </label>
            </div>
            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                checked={includeNumbers}
                id='includeNumbers'
                onChange={(event) => {
                  setIncludeNumbers(event.target.checked);
                }}
              />
              <label className='form-check-label' htmlFor='includeNumbers'>
                Include Numbers
              </label>
            </div>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-12'>
            <button
              type='submit'
              class='btn btn-primary w-100'
              onClick={generatePassword}
            >
              Generate
            </button>
          </div>
          <div className='col-md-12 mt-2'>
            <input
              class='form-control'
              type='text'
              value={password}
              aria-label='readonly input example'
              onClick={() => {
                navigator.clipboard.writeText(password);
                setPassword('COPIED....');
              }}
              readonly
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PasswordGenerator;
