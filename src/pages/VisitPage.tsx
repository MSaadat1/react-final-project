import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useUser } from "../provider/UserProvider";
import { useState } from "react";
import toast from "react-hot-toast";

export function VisitPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const { handleCreateUsers } = useUser();

  const reset = () => {
    setUser("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="visit-container">
        <div className="visit-btn">
          <button>
            <Link to="/" className="link">
              Home
            </Link>
          </button>
          {/* <button>Log In</button> */}
        </div>
        <div className="about-visit">
          <div className="about">
            <h2>About This Library</h2>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.In publishing and
              graphic design, Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content.In publishing and graphic design,
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </p>
            <p>You Can Sign up by filling out this form......</p>
          </div>
          <div className="sign-up-form">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateUsers({
                  username: user,
                  email: email,
                  password: password,
                })
                  .then(() => {
                    reset();
                  })
                  .catch(() => toast.error("Could not make the new user!"));
              }}
            >
              <input
                type="text"
                placeholder="Name"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="form-submit" type="submit" value="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="contact">
          <p>
            Space and Galaxy online library
            <br />
            1234 Str, Springfield,VA
            <br />
            7036678990
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="1x" color="#5F7ADB" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="1x" color="#5F7ADB" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" color="#5F7ADB" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
