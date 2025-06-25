export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Cinema</h3>
            <p className="text-gray-300 mb-4">
              Experience the magic of cinema with the latest blockbusters,
              comfortable seating, and state-of-the-art technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/movies"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  href="/showtimes"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Showtimes
                </a>
              </li>
              <li>
                <a
                  href="/tickets"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Book Tickets
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Cinema Street</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@cinema.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Cinema. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-red-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-red-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
