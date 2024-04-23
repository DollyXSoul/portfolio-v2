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
import DataDepot from "./project-pages/DataDepot";

function App() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence initial={false} mode="wait">
        {location.pathname === "/aiforge" ||
        location.pathname === "/reciperoundup" ||
        location.pathname === "/inotes" ||
        location.pathname === "/youtube2" ||
        location.pathname === "/newspanda" ||
        location.pathname === "/datadepot" ? (
          <Routes location={location} key={location.pathname}>
            <Route path="/aiforge" element={<AiForge />} />
            <Route path="/datadepot" element={<DataDepot />} />
            <Route path="/reciperoundup" element={<RecipeRoundup />} />
            <Route path="/inotes" element={<Inotes />} />
            <Route path="/youtube2" element={<Youtube2 />} />
            <Route path="/newspanda" element={<Newspanda />} />
          </Routes>
        ) : (
          <>
            <Navbar />
            <SocialLinks />

            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
