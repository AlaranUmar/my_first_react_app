import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <>{isLoggedIn ? <Login /> : <Signup />}</>;
}

export default App;
