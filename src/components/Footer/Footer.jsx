/*import { FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png"; // update with your logo path

export default function Footer() {
  return (
    <footer className="bg-[#e5e5e5] text-black py-6 px-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8">
        
        <div className="col-span-2 sm:col-span-1 flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Fauna Flux Logo" className="h-10 w-10" />
            <h1 className="text-lg font-semibold text-green-700">Fauna Flux</h1>
          </div>

          <h2 className="font-semibold mt-2">Connect with Us</h2>
          <div className="flex space-x-3 mt-1">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-pink-600 text-white p-2 rounded-full hover:opacity-80 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 text-white p-2 rounded-full hover:opacity-80 transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Discover</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><a href="/about" className="hover:text-green-700">About Us</a></li>
            <li><a href="/stories" className="hover:text-green-700">Latest Stories</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Support</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><a href="/donate" className="hover:text-green-700">Donate Now</a></li>
            <li><a href="/events" className="hover:text-green-700">Events</a></li>
            <li><a href="/community" className="hover:text-green-700">Communities</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Connect</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><a href="/help" className="hover:text-green-700">Help Center</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-6 border-t border-gray-300 pt-3">
        © {new Date().getFullYear()} Fauna Flux — Conservation for All 🌿
      </div>
    </footer>
  );
}*/
export default function Footer() {
  return (
    <footer className="w-screen bg-gray-100 text-gray-800 py-8 border-t border-gray-300">
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        <div>
          <h3 className="font-bold text-green-700 mb-2">FaunaFlux</h3>
          <p className="text-sm text-gray-600">
            Empowering conservation through data and community.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Discover</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Stories</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li>Donate</li>
            <li>Events</li>
            <li>Communities</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>Instagram / YouTube</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} FaunaFlux — Conservation for All 🌿
      </div>
    </footer>
  );
}

