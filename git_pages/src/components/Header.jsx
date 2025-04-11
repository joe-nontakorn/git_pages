// Header.jsx
import { Link as ScrollLink } from "react-scroll";

const scrollOffset = -60;

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6 font-medium text-gray-700 dark:text-white">
            {["home", "about", "skills", "projects", "certificates", "contact"].map(
              (section, i) => (
                <li key={i}>
                  <ScrollLink
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={scrollOffset}
                    spy={true}
                    activeClass="bg-gray-200 dark:bg-gray-700 text-blue-600 font-semibold rounded"
                    className="cursor-pointer px-3 py-1 transition-all hover:text-blue-600"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </ScrollLink>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
