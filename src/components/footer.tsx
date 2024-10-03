import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Meet the Team</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Gardening Blog</a></li>
              <li><a href="#" className="hover:underline">Plant Encyclopedia</a></li>
              <li><a href="#" className="hover:underline">Gardening Zones</a></li>
              <li><a href="#" className="hover:underline">Newsletter Signup</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-green-300"><Facebook /></a>
              <a href="#" className="hover:text-green-300"><Twitter /></a>
              <a href="#" className="hover:text-green-300"><Instagram /></a>
              <a href="#" className="hover:text-green-300"><Youtube /></a>
            </div>
            <p className="text-sm">Sign up for our newsletter to receive gardening tips, special offers, and more!</p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Enter your email" className="px-3 py-2 text-black rounded-l-md w-full" />
              <button className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-500">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gardening Know How. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:underline mr-4">Privacy Policy</a>
            <a href="#" className="hover:underline mr-4">Terms of Service</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}