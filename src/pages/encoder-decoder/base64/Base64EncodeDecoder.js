import React, { useState, useEffect } from 'react';

export default function Base64EncodeDecoder() {
  const SHOW_ALERT_CLASSNAME = 'show',
    HIDE_ALERT_CLASSNAME = 'hide',
    PASTE_ERR_MSG = 'Got error while pasting value.',
    /*PASTE_SUC_MSG = 'Pasted clipboard content.',*/
    PASTE_NOT_SUPPORTED_MSG =
      'Pasting from clipboard is not supported in your browser',
    COPY_SUC_MSG = 'Content is copied to clipboard.',
    COPY_NOT_SUPPORTED_MSG =
      'Cpoiying content from clipboard is not supported in your browser',
    /*CLEAR_SUC_MSG = 'Cleared content in text box.',*/
    DECODE_SUC_MSG = 'Decoded Base64 to plain text.',
    ENCODE_SUC_MSG = 'Encoded plain text to base64',
    BUTTON_CSS_CLASS = 'btn btn-outline-secondary';

  const [sourceText, setSourceText] = useState(''),
    [targetText, setTargetText] = useState(''),
    [showAlert, setShowAlert] = useState(false),
    [alertMessage, setAlertMessage] = useState('Alert Message Goes Here....'),
    [isPasteSupported, setPasteSupported] = useState(false),
    [currentTimeout, setCurrentTimeout] = useState(null);

  const encodeToBase64 = () => {
    setTargetText(btoa(sourceText));
    showAlertWithMsg(ENCODE_SUC_MSG);
  };

  const decodeFromBase64 = () => {
    setTargetText(atob(sourceText));
    showAlertWithMsg(DECODE_SUC_MSG);
  };

  const copyValue = (value) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value);
      showAlertWithMsg(COPY_SUC_MSG);
    } else {
      showAlertWithMsg(COPY_NOT_SUPPORTED_MSG);
    }
  };

  const showAlertWithMsg = (msg) => {
    setAlertMessage(msg);
    setShowAlert(true);

    if (currentTimeout != null) clearTimeout(currentTimeout);
    setCurrentTimeout(
      setTimeout(() => {
        setShowAlert(false);
      }, 5000)
    );
  };

  const pasteValue = (setter) => {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then(
        (res) => {
          setter(res);
          //showAlertWithMsg(PASTE_SUC_MSG);
        },
        (res) => showAlertWithMsg(PASTE_ERR_MSG + res)
      );
    } else {
      showAlertWithMsg(PASTE_NOT_SUPPORTED_MSG);
    }
  };

  const clearValue = (setter) => {
    setter('');
    //showAlertWithMsg(CLEAR_SUC_MSG);
  };

  useEffect(() => {
    if (navigator.clipboard && navigator.clipboard.readText) {
      setPasteSupported(true);
    }
  }, []);

  return (
    <div>
      <br />
      <h3>Base64 Encoder and Decoder</h3>
      <br />
      <div className='row justify-content-between'>
        <div className='col-auto'>
          <button
            type='button'
            className={BUTTON_CSS_CLASS}
            onClick={() => copyValue(sourceText)}
          >
            📄 Copy
          </button>{' '}
          {isPasteSupported && (
            <button
              type='button'
              className={BUTTON_CSS_CLASS}
              onClick={() => pasteValue(setSourceText)}
            >
              📝 Paste
            </button>
          )}
        </div>
        <div className='col-auto'>
          <button
            type='button'
            className={BUTTON_CSS_CLASS}
            onClick={() => clearValue(setSourceText)}
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
          id='sourceText'
          value={sourceText}
          onChange={(event) => setSourceText(event.target.value)}
        ></textarea>
        <label htmlFor='sourceText'>Source Text</label>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button
          type='button'
          className={BUTTON_CSS_CLASS}
          onClick={encodeToBase64}
        >
          Encode
        </button>
        {'\u00A0\u00A0⬇\u00A0\u00A0'}
        <button
          type='button'
          className={BUTTON_CSS_CLASS}
          onClick={decodeFromBase64}
        >
          Decode
        </button>
      </div>
      <div className='form-floating'>
        <textarea
          className='form-control'
          placeholder='Leave a comment here'
          style={{ height: '200px' }}
          id='targetText'
          value={targetText}
          disabled={true}
        ></textarea>
        <label htmlFor='targetText'>Result goes here...</label>
      </div>
      <div className='row justify-content-between'>
        <div className='col-auto'>
          <button
            type='button'
            className={BUTTON_CSS_CLASS}
            onClick={() => copyValue(targetText)}
          >
            📄 Copy
          </button>
        </div>
        <div className='col-auto'>
          <button
            type='button'
            className={BUTTON_CSS_CLASS}
            onClick={() => clearValue(setTargetText)}
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
