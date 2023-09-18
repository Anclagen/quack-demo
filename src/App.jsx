import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Employers from "./pages/Employers.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Contact/Register";
import NoPage from "./pages/NoPage";
import ScrollToTop from "./components/Hooks/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="employers" element={<Employers />} />
            <Route path="about" element={<About />} />
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
