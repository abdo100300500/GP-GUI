import React, { useEffect } from "react";
import Typed from "typed.js";
import "../style/typedText.css";

function TypedText() {
  useEffect(() => {
    const options = {
      strings: ["Fast", "Accurate", "Reliable"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
    };

    const typingEffect = new Typed(".typedText", options);

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <div className="featured-name">
      <h1>
        MedEngine Is <span className="typedText"></span>
      </h1>
    </div>
  );
}

export default TypedText;
