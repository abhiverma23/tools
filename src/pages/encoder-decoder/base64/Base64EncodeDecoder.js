import React, { useState } from 'react';

export default function Base64EncodeDecoder() {
  const SHOW_ALERT_CLASSNAME = 'show',
    HIDE_ALERT_CLASSNAME = 'hide',
    PASTE_ERR_MSG = 'Got error while pasting value.',
    PASTE_SUC_MSG = 'Pasted clipboard content.',
    COPY_SUC_MSG = 'Content is copied to clipboard.',
    CLEAR_SUC_MSG = 'Cleared content in text box.',
    DECODE_SUC_MSG = 'Decoded Base64 to plain text.',
    ENCODE_SUC_MSG = 'Encoded plain text to base64';
  const [plainText, setPlainText] = useState(''),
    [base64Text, setBase64Text] = useState(''),
    [showAlert, setShowAlert] = useState(false),
    [alertMessage, setAlertMessage] = useState('Alert Message Goes Here....');

  const encodeToBase64 = () => {
    setBase64Text(btoa(plainText));
    showAlertWithMsg(ENCODE_SUC_MSG);
  };

  const decodeFromBase64 = () => {
    setPlainText(atob(base64Text));
    showAlertWithMsg(DECODE_SUC_MSG);
  };

  const copyValue = (value) => {
    navigator.clipboard.writeText(value);
    showAlertWithMsg(COPY_SUC_MSG);
  };

  const showAlertWithMsg = (msg) => {
    setAlertMessage(msg);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const pasteValue = (setter) => {
    navigator.clipboard.readText().then(
      (res) => {
        setter(res);
        showAlertWithMsg(PASTE_SUC_MSG);
      },
      (res) => showAlertWithMsg(PASTE_ERR_MSG + res)
    );
  };

  const clearValue = (setter) => {
    setter('');
    showAlertWithMsg(CLEAR_SUC_MSG);
  };

  return (
    <div>
      <br />
      <h3>Base64 Encoder and Decoder</h3>
      <br />
      <div className='row justify-content-between'>
        <div className='col col-4'>
          <button
            type='submit'
            className='btn btn-light'
            onClick={() => copyValue(plainText)}
          >
            📄 Copy
          </button>{' '}
          <button
            type='submit'
            className='btn btn-light'
            onClick={() => pasteValue(setPlainText)}
          >
            📝 Paste
          </button>
        </div>
        <div className='col col-2'>
          <button
            type='submit'
            className='btn btn-light'
            onClick={() => clearValue(setPlainText)}
          >
            🗑 Clear
          </button>
        </div>
      </div>
      <div className='form-floating'>
        <textarea
          className='form-control'
          placeholder='Leave a comment here'
          style={{ height: '200px' }}
          id='plainText'
          value={plainText}
          onChange={(event) => setPlainText(event.target.value)}
        ></textarea>
        <label htmlFor='plainText'>Plain Text</label>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button
          type='submit'
          className='btn btn-light'
          onClick={encodeToBase64}
        >
          Encode ⬇
        </button>{' '}
        <button
          type='submit'
          className='btn btn-light'
          onClick={decodeFromBase64}
        >
          Decode ⬆
        </button>
      </div>
      <div className='form-floating'>
        <textarea
          className='form-control'
          placeholder='Leave a comment here'
          style={{ height: '200px' }}
          id='base64Text'
          value={base64Text}
          onChange={(event) => setBase64Text(event.target.value)}
        ></textarea>
        <label htmlFor='base64Text'>Encoded Base64 Text</label>
      </div>
      <div className='row justify-content-between'>
        <div className='col col-4'>
          <button
            type='submit'
            className='btn btn-light'
            onClick={() => copyValue(base64Text)}
          >
            📄 Copy
          </button>{' '}
          <button
            type='submit'
            className='btn btn-light'
            onClick={() => pasteValue(setBase64Text)}
          >
            📝 Paste
          </button>
        </div>
        <div className='col col-2'>
          <button
            type='submit'
            className='btn btn-light'
            onClick={() => clearValue(setBase64Text)}
          >
            🗑 Clear
          </button>
        </div>
      </div>
      <div className='position-fixed bottom-0 end-0 p-3' style={{ zIndex: 11 }}>
        <div
          className={
            'toast fade ' +
            (showAlert ? SHOW_ALERT_CLASSNAME : HIDE_ALERT_CLASSNAME)
          }
        >
          <div className='toast-header'>
            <strong className='me-auto'>✅ Base64 Encoder/Decoder</strong>
            <small>Just now</small>
            <button
              type='button'
              className='btn-close'
              onClick={() => setShowAlert(false)}
            ></button>
          </div>
          <div className='toast-body'>{alertMessage}</div>
        </div>
      </div>
    </div>
  );
}
