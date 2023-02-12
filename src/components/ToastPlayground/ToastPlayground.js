import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const nextToast = {
      message,
      variant,
      id: crypto.randomUUID()
    };
    setToasts([...toasts, nextToast]);
    setMessage('');
    setVariant('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <picture>
          <source srcSet="/toast.avif" type="image/avif" />
          <img alt="Cute toast mascot" src="/toast.png" />
        </picture>
        <h1>Toast Playground</h1>
      </header>

      <ToastContext.Provider value={{ toasts, setToasts }}>
        <ToastShelf />
      </ToastContext.Provider>

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map(value => <label key={value} htmlFor={`variant-${value}`}>
              <input
                id={`variant-${value}`}
                type="radio"
                name="variant"
                value={value}
                checked={variant === value}
                onChange={e => setVariant(e.target.value)}
              />
              {value}
            </label>)}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
