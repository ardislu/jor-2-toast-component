import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const handleKeydown = e => {
      if (e.key === 'Escape') {
        setToasts([]);
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

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
