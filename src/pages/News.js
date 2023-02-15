import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import books from "../images/articles/books.jpg";
import tugwar from "../images/articles/tug-o-war.jpg";

export default function News() {
  return (
    <div className="bg-gray-100">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-900 uppercase rounded-full bg-amber-400">
              News Section
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Keep</span>
            </span>{" "}
            up to date on our latest activities
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            An easy way to take a peek into our schools every day life
          </p>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img src={books} className="object-cover w-full h-64" alt="" />
            <div className="p-5">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-amber-700"
                  aria-label="Category"
                  title="Literature"
                >
                  Literature
                </a>
                <span className="text-gray-600">— 31 Jan 2023</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Read Aloud Day"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-amber-700"
              >
                Read Aloud Day
              </a>
              <p className="mb-2 text-gray-700">
                A survey launched by the Student Council titled "The Student
                Council wants to know...", brought to light the different
                literature our school population enjoys.
              </p>
              <a
                href="/articles/readaloudday"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 hover:text-amber-800"
              >
                <NavLink to="/articles/readaloudday">Learn more</NavLink>
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img src={tugwar} className="object-cover w-full h-64" alt="" />
            <div className="p-5">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-amber-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Sports
                </a>
                <span className="text-gray-600">— 3rd Feb 2023</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-amber-700"
              >
                Tug O War
              </a>
              <p className="mb-2 text-gray-700">
                The true test of strength, wit and grit has begun with the
                inter-house tug of war pull-off's at lunch time.Students across
                all five houses from 𝗗𝘂𝗿𝘃𝗮𝘀𝗮, 𝗡𝗮𝗿𝗮𝗱, 𝗧𝘂𝗹𝘀𝗶𝗱𝗮𝘀, 𝗩𝗮𝗹𝗺𝗶𝗸𝗶,
                𝗩𝗮𝘀𝗵𝗶𝘀𝗵𝘁𝗮 in Junior and Senior school battle for supremacy of
                the rope.
              </p>
              <a
                href="/articles/tugofwar"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 hover:text-amber-800"
              >
                <NavLink to="/articles/tugofwar">Learn more</NavLink>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
