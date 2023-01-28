import React from "react";
import { useSelector } from "react-redux";
import Blogs from "./components/Blogs";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Backgorund from "./components/background/Backgorund";
import { selectSignedIn } from "./features/userSlice";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {!isSignedIn && <Backgorund className="absolute -z-10" />}
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;