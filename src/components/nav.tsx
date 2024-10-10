import React from "react";
import { Search, Mail, Menu } from "lucide-react";

export default function Navigate() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-serif italic">
            Green Leaf Guides
          </h1>
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden md:inline hover:underline">
              Sign up for our newsletter
            </a>
            <Mail className="w-5 h-5" />
            <Search className="w-5 h-5" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <nav
        className={`bg-green-700 text-white p-2 border ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
          <a href="/" className="py-2 md:py-0 hover:underline">
            Home
          </a>
          <a href="/gardenTips" className="py-2 md:py-0 hover:underline">
            Gardening Tips
          </a>
          <a href="guides" className="py-2 md:py-0 hover:underline">
            Plant Guides
          </a>
          <a href="/tools" className="py-2 md:py-0 hover:underline">
            Tools & Supplies
          </a>
          <a href="community" className="py-2 md:py-0 hover:underline">
            Community Forum
          </a>
        </div>
      </nav>
    </div>
  );
}
