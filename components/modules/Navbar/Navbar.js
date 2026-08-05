import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Lobster, Playfair } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-labster",
});
const playfair = Playfair({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-playfair",
});
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between p-1.5  md:items-center z-10 absolute text-white bg-black/10 backdrop-blur-sm">
        {/* left side of navbar */}
        <div className="flex max-sm:flex-col md:items-center ">
          <div className="flex md:ml-5 gap-x-0.5 md:items-center">
            <img className="max-md:w-8.75 max-md:h-9" src="/svg/app-logo.png" />
            <span className={`text-[25px] lg:text-[40px] ${lobster.className}`}>
              coffee
            </span>
          </div>

          <div
            className={`${isOpen ? "max-sm:block" : "max-sm:hidden"}  w-60 h-10  md:w-60 max-sm:w-40 lg:w-70  md:h-[40px]  lg:h-[50px] bg-black ml-5 md:ml-4  lg:ml-7 rounded-3xl relative border-[2px] border-white max-sm:mt-6 `}
          >
            <input className="h-full text-white px-2.5 w-[80%] outline-none" />
            <button className="w-[17%] sm:w-[14%] h-[80%] bg-amber-600 absolute right-1.5 top-[5px] rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>

        {/* right side of navbar */}
        <div className="text-right">
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
          <ul
            className={`${isOpen ? "block" : "hidden"} ${playfair.className} space-y-0.5 text-center   p-1.5  md:flex md:gap-x-4 md:tetxt-[18px] lg:text-[25px] md:mr-7.5`}
          >
            <li>
              <Link className="hover:text-amber-700" href="/about">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-700" href="/about">
                Menu
              </Link>
            </li>{" "}
            <li>
              <Link className="hover:text-amber-700" href="/about">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-700" href="/about">
                Reservation
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-700" href="/about">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
