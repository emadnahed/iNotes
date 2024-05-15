import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import AlertState from "./context/alerts/AlertState";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {  
  
  return (
    <>
      <NoteState>
      <AlertState>
        <BrowserRouter>
          <Navbar />          
          <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
      </NoteState>
    </>
  );
}

export default App;
