import "./home-bg.styles.scss";
import AhmedsPhoto from "../../Assets/Ahmed'sPhoto.png";
import Logo from "../../Assets/Logo.png";
import BgLines from "../../Assets/bg-lines.png";
import React, { useEffect, useState } from "react";

function HomeBg({ children }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(100);
  const [detailsContainer, setDetailsContainer] = useState({});
  const [screenAndFrame, setScreenAndFrame] = useState({
    screen: {
      width: 0,
      height: 0,
    },
    difference: {
      x: 0,
      y: 0,
    },
  });

  useEffect(() => console.log("screenAndFrame:", screenAndFrame), [
    screenAndFrame,
  ]);

  useEffect(() => {
    setScreenAndFrame({
      screen: { width: window.innerWidth, height: window.innerHeight },
      difference: { x: 0, y: 0 },
    });
    const reportWindowSize = (e) => {
      const loginContainer = document.querySelector(".login-container");
      console.log("loginContainer", loginContainer);
      setScreenAndFrame((oldVal) => ({
        screen: {
          width: e.currentTarget.innerWidth,
          height: e.currentTarget.innerHeight,
        },
        difference: {
          x: oldVal.difference.x + oldVal.screen.width - window.innerWidth,
          y: oldVal.difference.y + oldVal.screen.height - window.innerHeight,
        },
      }));
    };
    window.addEventListener("resize", reportWindowSize);
    setWidth(window.innerWidth - 50);
    setHeight(window.innerHeight - 50);
  }, []);

  return (
    <div className="home-container">
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          zIndex: 2,
        }}
      >
        {children}
      </div>
      <div className="home-rectangle">
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          style={{
            stroke: "white",
            strokeWidth: "5px",
            position: "absolute",
            fill: "transparent",
            width: "100vw",
            height: "100vh",
          }}
        >
          <path
            id="inner_line"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            d={`
            M${width - screenAndFrame.difference.x - 418},${
              height - screenAndFrame.difference.y
            }
            L50,${height - screenAndFrame.difference.y} 
            L50,50 
            L${width - screenAndFrame.difference.x},50 
            L${width - screenAndFrame.difference.x},${
              height - screenAndFrame.difference.y
            } 
            L${width - screenAndFrame.difference.x - 40},${
              height - screenAndFrame.difference.y
            }
          `}
          />
        </svg>
        <img src={Logo} alt="Logo" className="home-logo" />
        <img src={BgLines} alt="BgLines" className="home-BgLines" />
      </div>
      <div style={{ left: "100vw" }} className="ahmeds-details-container">
        <h2 className="association">مرشح جمعية أشبيلية التعاونية</h2>
        <div className="ahmeds-details">
          <h1 className="ahmeds-name">
            أحمد <span className="elasfar-name">الأصفر</span>
          </h1>
        </div>
      </div>
      <img src={AhmedsPhoto} alt="Ahmed'sPhoto" className="Ahmeds-photo" />
    </div>
  );
}

export default HomeBg;
