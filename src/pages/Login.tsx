import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../provider/UserProvider";
import toast from "react-hot-toast";
import "../App.css";

export type LoginModelProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModel: React.FC<LoginModelProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      onClose(); 
      navigate(`/user/${email === 'user1@gmail.com' ? 1 : email === "user2@gmail.com" ? 2 : 3}`);
    } catch (error) {
      setError(`${error}: The email is not valid`);
      toast.error("login failed");
    }
    setEmail("");
    setPassword("");
  };

  if (!isOpen) return null;
  return (
    <div className="loginModel">
      <form className="form-input" onSubmit={handleLogin}>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};
