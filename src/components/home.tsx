import React from "react";
import { Search, Mail, Menu } from "lucide-react";

export default function GardeningHomepage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-serif italic">
            Gardening Know How
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
        className={`bg-green-700 text-white p-2 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
          <a href="#" className="py-2 md:py-0 hover:underline">
            FLOWERS & FOLIAGE
          </a>
          <a href="#" className="py-2 md:py-0 hover:underline">
            FRUIT & VEGETABLES
          </a>
          <a href="#" className="py-2 md:py-0 hover:underline">
            HOUSEPLANTS
          </a>
          <a href="#" className="py-2 md:py-0 hover:underline">
            PROBLEMS
          </a>
          <a href="#" className="py-2 md:py-0 hover:underline">
            REGIONAL GARDENING
          </a>
          <a href="#" className="py-2 md:py-0 hover:underline">
            SUSTAINABLE GARDENING
          </a>
          <a href="#" className="py-2 md:py-0 hover:underline">
            HOW TO
          </a>
          <a href="#" className="py-2 md:py-0 hover:underline">
            SHOP
          </a>
          <a href="#" className="py-2 md:py-0 hover:underline">
            MORE ▼
          </a>
        </div>
      </nav>

      <div className="bg-green-100 p-2 overflow-x-auto">
        <div className="container mx-auto whitespace-nowrap">
          <h2 className="text-green-800 font-semibold inline-block mr-4">
            TRENDING:
          </h2>
          <a href="#" className="text-green-700 hover:underline mr-4">
            Should You Prune Hydrangeas In The Fall?
          </a>
          <a href="#" className="text-green-700 hover:underline mr-4">
            Vegetable Harvesting Tips
          </a>
          <a href="#" className="text-green-700 hover:underline mr-4">
            Shop Fall Flower Seeds & Supplies
          </a>
          <a href="#" className="text-green-700 hover:underline mr-4">
            Watch Gardening Videos
          </a>
          <a href="#" className="text-green-700 hover:underline">
            Top 10 Flowering Ground Covers
          </a>
        </div>
      </div>

      <main className="container mx-auto mt-8 px-4">
        <article className="relative">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/031/624/711/small_2x/yellow-flowers-in-a-vase-on-a-green-background-ai-generated-photo.jpg"
            alt="Fall-blooming flowers"
            className="w-full h-48 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <div className="text-center text-white p-4 md:p-8 bg-white bg-opacity-80 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-serif text-black mb-2 md:mb-4">
                Fall-Blooming Flowers For Front Yards – Maximum Curb Appeal
                Guaranteed
              </h2>
              <p className="text-sm md:text-lg text-black">
                Create a vibrant, inviting front yard that glows with fall color
                and lasts well into the cooler months.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
