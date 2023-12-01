import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import Alert from "./components/Alert";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      type: type,
      msg: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#ddd";
      showAlert("Dark Mode has been Enabled", "success");
    }
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode has been Enabled", "success");
    }
  };

//routing
  const routes = createBrowserRouter([
    {
      element: <><Navbar title="TextUtilities" toggleMode={toggleMode} mode={mode}/><Alert alert={alert} /></>,
      children:
      [
        {
          path: "/",
          element: <TextArea title="Enter Text to Analyse" mode={mode} showAlert={showAlert}/>
        },
        {
          path: "/about",
          element: <About/>
        }
      ]
    }
  ])

  return (
    // <>
    //   <Navbar title="TextUtilities" toggleMode={toggleMode} mode={mode}/>
    //   <Alert alert={alert} />
    //   <TextArea title="Enter Text to Analyse" mode={mode} showAlert={showAlert}/>
    //   <About/>
    // </>
    //routing   
    // <RouterProvider router={routes}/>

    <Router>
      <Navbar title="TextUtilities" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <TextArea
              title="Enter Text to Analyse"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
