import React, { useState } from "react";

function Contact() {
  const email = "tomertvaag@hotmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="final-section" id="contact">
      <div className="container">
        <div className="contact-content">
          <h1>Contact</h1>
          <p>Thank you for your time!</p>
          <p>
            If you liked any of this, please don't hesitate to contact me for a
            casual chat.
          </p>
          <div className="email-div">
            <p className="email">{email}</p>
            <button className="cta-copy" onClick={copyToClipboard}>
              {isCopied ? "Copied!" : "Copy email"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
