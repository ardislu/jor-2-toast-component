import React from 'react';

function useEscapeKey(handleEscape) {
  React.useEffect(() => {
    const handleKeydown = e => {
      if (e.key === 'Escape') {
        handleEscape(e);
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleEscape]);
}

export default useEscapeKey;
