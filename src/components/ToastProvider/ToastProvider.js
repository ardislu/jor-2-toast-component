import React from 'react';

import useEscapeKey from '../../hooks/use-escape-key.js';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  useEscapeKey(() => setToasts([]));

  function addToast(message, variant = 'notice', id = crypto.randomUUID()) {
    const newToast = {
      message,
      variant,
      id
    };

    setToasts([...toasts, newToast]);
  }

  function removeToast(id) {
    const nextToasts = toasts.filter(t => t.id !== id);
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
        addToast,
        removeToast
      }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
