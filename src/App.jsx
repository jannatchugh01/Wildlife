import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home/Home.jsx";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    setTimeout(() => AOS.refreshHard(), 500);
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
