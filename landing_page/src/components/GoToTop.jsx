import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./GoToTop.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="ButtonScroll rounded-5 p-2 bg-secondary" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon text-white p-1"></FaArrowUp>
        </div>
      )}
    </>
  );
};

export default GoToTop;
