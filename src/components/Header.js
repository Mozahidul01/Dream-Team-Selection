import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-slate-100 dark:bg-slate-800 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <h2 className="text-slate-900 font-bold text-2xl tracking-tight uppercase dark:text-white">
            Dream Team
          </h2>

          <div className="md:hidden">
            <button
              className="p-2 text-slate-700 rounded-md outline-none focus:border-slate-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-slate-900 dark:fill-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 stroke-slate-900 dark:stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 pb-4 mt-4 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-end space-y-4 md:flex md:space-x-6 md:space-y-0">
            <li className="text-slate-700 dark:text-slate-400 text-lg font-semibold hover:text-teal-600">
              <a href="#teams">Teams</a>
            </li>
            <li className="text-slate-700 dark:text-slate-400 text-lg font-semibold hover:text-teal-600">
              <a href="#about">About</a>
            </li>
            <li className="text-slate-700 dark:text-slate-400 text-lg font-semibold hover:text-teal-600">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
