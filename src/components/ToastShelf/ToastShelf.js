import React from 'react';

import { ToastContext } from '../ToastPlayground';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast message={message} variant={variant} id={id} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
