import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { VisitPage } from "./pages/VisitPage";
import { UserPage1 } from "./pages/UserPage1";
import { UserPage2 } from "./pages/UserPage2";
import { UserPage3 } from "./pages/UserPage3";
import { UserProvider } from "./provider/UserProvider";
import { Toaster } from "react-hot-toast";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Toaster />
        <div className="containers">
          <Routes>
            <Route path="/" element={<MainPage />} /> {/* Main page */}
            <Route path="/visit" element={<VisitPage />} /> {/* Visit page */}
            <Route path="/user/1" element={<UserPage1 />} /> {/* User page 1 */}
            <Route path="/user/2" element={<UserPage2 />} /> {/* User page 2 */}
            <Route path="/user/3" element={<UserPage3 />} /> {/* User page 3 */}
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
