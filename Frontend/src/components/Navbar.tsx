
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navItems = [
    { name: "Home", path: "/temp/" },
    {
      name: "About Us",
      path: "/temp/about",
        // submenu: [
        //   { name: "Company Profile", path: "/about/profile" },
        //   { name: "Our Team", path: "/about/team" },
        //   { name: "Our Vision", path: "/about/vision" },
        // ],
    },
    {
      name: "Services",
      path: "/temp/services",
      // submenu: [
      //   { name: "Construction", path: "/services/construction" },
      //   { name: "Project Management", path: "/services/project-management" },
      //   { name: "Design & Planning", path: "/services/design" },
      // ],
    },
    { name: "Projects", path: "/temp/projects" },
    { name: "Careers", path: "/temp/careers" },
    { name: "Contact", path: "/temp/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-cbm-blue">
                <span className="text-cbm-navy">CBM</span> Group
              </h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 text-cbm-navy"
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.submenu ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center gap-1 text-cbm-navy hover:text-cbm-blue py-2"
                      >
                        {item.name}
                        {activeDropdown === item.name ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-0 w-48 rounded-md bg-white shadow-lg">
                          <ul className="py-1">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  to={subItem.path}
                                  className="block px-4 py-2 text-sm text-cbm-navy hover:bg-cbm-gray"
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
                      className="block py-2 text-cbm-navy hover:text-cbm-blue"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 z-20 w-full bg-white shadow-md lg:hidden">
              <ul className="px-4 py-2">
                {navItems.map((item) => (
                  <li key={item.name} className="border-b border-gray-100 py-2">
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex w-full items-center justify-between py-2 text-cbm-navy"
                        >
                          {item.name}
                          {activeDropdown === item.name ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </button>
                        {activeDropdown === item.name && (
                          <ul className="ml-4 mt-2 space-y-1">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  to={subItem.path}
                                  className="block py-2 text-sm text-cbm-navy hover:bg-cbm-gray"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsMenuOpen(false);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="block py-2 text-cbm-navy hover:text-cbm-blue"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
