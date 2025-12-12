import "../App.css";
import { Link } from "react-router-dom";
import { LoginModel } from "../pages/Login";
import { useState, useEffect } from "react";
import { useUser } from "../provider/UserProvider";
import { Requests } from "../ap";
//import { Books } from "../types";

export const MainPage: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [slides, setSlides] = useState(0);
  const { user, logoutUser, carouselData, setCarouselData } = useUser();

  const openLoginModel = () => {
    setIsLoginOpen(true);
  };
  const closeLoginModel = () => {
    setIsLoginOpen(false);
  };

  useEffect(() => {
    Requests.getAllBooks()
      .then((data) => {
        setCarouselData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [setCarouselData]);

  const nextSlide = () => {
    if (carouselData.length > 0) {
      setSlides(slides === carouselData.length - 1 ? 0 : slides + 1);
    }
  };
  return (
    <>
      <div className="header">
        <div className="title">
          <h1>Welcome</h1>
          <hr />
          <p className="welcome-para">To your own Space library</p>
        </div>
        <div className="buttons">
          <Link to="/visit" className="link">
            Sign Up
          </Link>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={openLoginModel}>Login In</button>
          )}

          {isLoginOpen && (
            <LoginModel isOpen={isLoginOpen} onClose={closeLoginModel} />
          )}
        </div>
      </div>
      <div className="main-body">
        <div className="trending">
          <div className="trending-arrow">
            <img
              src="./project-images/arrow-curve.png"
              className="trending-img"
            />
          </div>
          <span className="trend-container">
            <p className="trending-text">Trending</p>
          </span>
          <div className="book-image">
            <img src="./project-images/Vector.png" className="book-img" />
          </div>
        </div>
        <div className="carousel-container">
          {carouselData.length > 0 && (
            <>
              <div className="carousel-slide">
                <div>
                  <img
                    className="carousel-image"
                    src={carouselData[slides].image}
                    alt=""
                  />
                </div>
                <div className="carousel-details">
                  <h2>{carouselData[slides].title}</h2>
                  <p>{carouselData[slides].author}</p>
                  <p>{carouselData[slides].overview}</p>
                </div>
              </div>
              <span className="carousel-btn" onClick={nextSlide}>
                <i className="fas fa-arrow-right"></i>
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
};
