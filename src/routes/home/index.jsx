import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";

const Home = () => {
  const [buttonPosition, setButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });
  const boxRef = useRef(null);
  const buttonRef = useRef(null);

  const moveButton = () => {
    if (boxRef.current && buttonRef.current) {
      const boxRect = boxRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();

      const maxTop = boxRect.height - buttonRect.height;
      const maxLeft = boxRect.width - buttonRect.width;

      const newTop = `${Math.random() * maxTop}px`;
      const newLeft = `${Math.random() * maxLeft}px`;

      setButtonPosition({ top: newTop, left: newLeft });
    }
  };

  useEffect(() => {
    let interval;
    const handleHover = () => {
      interval = setInterval(moveButton, 100);
    };

    const handleLeave = () => {
      clearInterval(interval);
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener("mouseenter", handleHover);
      buttonRef.current.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mouseenter", handleHover);
        buttonRef.current.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="box" ref={boxRef}>
        <p>Mani sevasanmi?</p>
        <div className="buttons">
          <Button href="/yes" variant="contained" className="agree">
            da kanechna
          </Button>
          <Button
            variant="contained"
            className="disagree movable"
            ref={buttonRef}
            style={{ top: buttonPosition.top, left: buttonPosition.left }}
          >
            yo'q umuman
          </Button>
        </div>
        <br />
        <img
          src="https://64.media.tumblr.com/472caeedfa7e04fb064c916c2009cc10/tumblr_ns3holWV9N1s9qgboo1_r5_540.gifv"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
