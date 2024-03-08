import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AiForge from "./project-pages/AiForge";
import RecipeRoundup from "./project-pages/RecipeRoundup";
import Youtube2 from "./project-pages/Youtube2";
import Inotes from "./project-pages/Inotes";
import Newspanda from "./project-pages/Newspanda";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/aiforge" ||
      location.pathname === "/reciperoundup" ||
      location.pathname === "/inotes" ||
      location.pathname === "/youtube2" ||
      location.pathname === "/newspanda" ? (
        <Routes location={location} key={location.pathname}>
          <Route path="/aiforge" element={<AiForge />} />
          <Route path="/reciperoundup" element={<RecipeRoundup />} />
          <Route path="/inotes" element={<Inotes />} />
          <Route path="/youtube2" element={<Youtube2 />} />
          <Route path="/newspanda" element={<Newspanda />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <SocialLinks />
          <AnimatePresence initial={false} mode="popLayout">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
