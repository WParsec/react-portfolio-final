import React, { useState, useEffect } from "react";

function Modal({ onClose }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          setIsDisabled(false);
          return 100;
        }
        return next;
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="enter-modal">
      <div className="modal-wrap">
        {isDisabled && <div className="loader"></div>}
        <div>Loading...{loadingProgress}%</div>
        <button
          className={isDisabled ? "cta-main cta-disabled" : "cta-main"}
          onClick={onClose}
          disabled={isDisabled}
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default Modal;
