import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about",
      // Uncomment when submenu is needed
      // submenu: [
      //   { name: "Company Profile", path: "/about/profile" },
      //   { name: "Our Team", path: "/about/team" },
      //   { name: "Our Values", path: "/about/values" },
      // ],
    },
    {
      name: "Services",
      path: "/services",
      // Uncomment when submenu is needed
      // submenu: [
      //   { name: "GST", path: "/services/gst" },
      //   { name: "Taxation", path: "/services/taxation" },
      //   { name: "Project Finance", path: "/services/project-finance" },
      // ],
    },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  // Check if path is active
  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <div className={`flex items-center bg-white/90 rounded-lg p-2`}>
              <Link to="/" className="flex items-center">
                <img 
                  src="/images/logo.png" 
                  alt="Prikriti Group Logo" 
                  className={cn(
                    "h-10 w-auto transition-all duration-300",
                    scrolled ? "brightness-100" : "brightness-[1.15]"
                  )}
                />
              </Link>
            </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={cn(
                "flex items-center p-2 rounded-md transition-colors",
                scrolled ? "text-blue-800" : "text-white"
              )}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  {item.submenu ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={cn(
                          "flex items-center gap-1 rounded-md px-3 py-2 font-medium transition-all",
                          scrolled
                            ? isActive(item.path)
                              ? "text-blue-700" 
                              : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                            : isActive(item.path)
                              ? "text-white bg-white/20" 
                              : "text-white hover:bg-white/10"
                        )}
                      >
                        {item.name}
                        {activeDropdown === item.name ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <ul className="py-1">
                            {item.submenu?.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  to={subItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={cn(
                        "block rounded-md px-3 py-2 font-medium transition-all",
                        scrolled
                          ? isActive(item.path)
                            ? "text-blue-700" 
                            : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                          : isActive(item.path)
                            ? "text-white bg-white/20" 
                            : "text-white hover:bg-white/10"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Button 
              asChild
              className={cn(
                "ml-6 transition-all",
                scrolled
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-white text-blue-700 hover:bg-white/90"
              )}
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className={cn(
            "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-all duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}>
            <div 
              className={cn(
                "fixed right-0 top-0 h-full w-[75%] max-w-sm bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out overflow-y-auto",
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              )}
            >
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <h1 className="text-2xl font-bold text-blue-700">Prikriti</h1>
                </Link>
                <button 
                  onClick={toggleMenu}
                  className="p-2 text-gray-600 hover:text-gray-900"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name} className="py-1">
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-md px-3 py-3 text-gray-800 hover:bg-gray-100",
                            isActive(item.path) && "text-blue-700 font-medium"
                          )}
                        >
                          {item.name}
                          {activeDropdown === item.name ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </button>
                        <div 
                          className={cn(
                            "mt-1 pl-4 border-l-2 border-gray-200 space-y-1 overflow-hidden transition-all duration-300",
                            activeDropdown === item.name 
                              ? "max-h-96 opacity-100" 
                              : "max-h-0 opacity-0"
                          )}
                        >
                          {item.submenu?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block rounded-md py-2 px-3 text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "block w-full rounded-md px-3 py-3 hover:bg-gray-100",
                          isActive(item.path) 
                            ? "text-blue-700 font-medium" 
                            : "text-gray-800"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button 
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
