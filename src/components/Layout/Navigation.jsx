import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logoImage from "../../assets/interface/qs-logo-transparent.png";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && e.target !== menuButtonRef.current) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 p-1 z-50 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logoImage} alt="Logo" className="h-16" />
          </Link>
        </div>
        {/* Logo and Desktop Links here */}
        <ul className="hidden md:flex space-x-5 pr-2">
          {[
            { path: "/", label: "Home" },
            { path: "/jobs", label: "Jobs" },
            { path: "/employers", label: "Employers" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map((route) => (
            <li key={route.path} className={`${location.pathname === route.path ? "active" : ""} nav-links inline-block  text-lg font-semibold`}>
              <Link to={route.path} className={`text-white`} onClick={handleMenuClose}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Icon */}
        <button ref={menuButtonRef} className="md:hidden me-2 p-2" onClick={() => setMenuOpen(!isMenuOpen)}>
          <i className="material-icons pointer-events-none pt-1 text-3xl">menu</i>
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`fixed top-0 right-0 h-full bg-black bg-opacity-90 w-64 transform transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        {/* Close button */}
        <div className="flex justify-end p-2">
          <button onClick={handleMenuClose} className="me-2">
            <span className="material-icons  pointer-events-none text-3xl">close</span>
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-4">
          {[
            { path: "/", label: "Home" },
            { path: "/jobs", label: "Jobs" },
            { path: "/employers", label: "Employers" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map((route) => (
            <li key={route.path} className={`${location.pathname === route.path ? "active" : ""} nav-links w-fit text-lg font-semibold`}>
              <Link to={route.path} className={`text-white`} onClick={handleMenuClose}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
