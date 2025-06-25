import Link from "next/link";
// import Image from "next/image";
import ButtonComponent from "./ButtonComponent/ButtonComponent";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-lg">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          {/* <Image
            src="/logo.png"
            alt="Cinema Logo"
            width={60}
            height={40}
            className="mr-3"
          /> */}
          <h1 className="text-2xl font-bold text-red-500">Cinema</h1>
        </Link>
      </div>
      <div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="hover:text-red-400 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/movies"
              className="hover:text-red-400 transition-colors duration-200"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="hover:text-red-400 transition-colors duration-200"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/tickets"
              className="hover:text-red-400 transition-colors duration-200"
            >
              Tickets
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-red-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <ButtonComponent
          className="w-[70px] h-[25] bg-red-400 rounded  hover:bg-amber-500"
          text="Login"
        />
      </div>
    </div>
  );
}
