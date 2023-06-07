import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import Main from "./Main";
import "./styles.scss";

function App() {
  const [showModal, setShowModal] = useState(true);
  const videoRef = useRef();

  const handleClose = () => {
    setShowModal(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showModal]);

  return (
    <div className="App">
      <Main videoRef={videoRef} />
      {showModal && <Modal onClose={handleClose} />}
    </div>
  );
}

export default App;
