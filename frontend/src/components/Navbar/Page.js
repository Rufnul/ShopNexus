"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-bold text-red-500 hover:text-[crimson]"
        >
          ShopNexus
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* Shop Dropdown */}
          <div className="relative group">
            <Link
              href="/shop"
              className="hover:text-red-500 font-medium active:font-bold"
            >
              Shop
            </Link>
            <div className="absolute left-0 top-full mt-2 w-48 bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
              <Link
                href="/shop/men"
                className="block px-4 py-2 hover:bg-red-500 hover:text-white"
              >
                Men
              </Link>
              <Link
                href="/shop/women"
                className="block px-4 py-2 hover:bg-red-500 hover:text-white"
              >
                Women
              </Link>
              <Link
                href="/shop/kids"
                className="block px-4 py-2 hover:bg-red-500 hover:text-white"
              >
                Kids
              </Link>
              <Link
                href="/shop/electronics"
                className="block px-4 py-2 hover:bg-red-500 hover:text-white"
              >
                Electronics
              </Link>
            </div>
          </div>

          <Link href="/new" className="hover:text-red-500 active:font-bold">
            New Arrivals
          </Link>
          <Link href="/sale" className="hover:text-red-500 active:font-bold">
            Sale
          </Link>
          <Link href="/brands" className="hover:text-red-500 active:font-bold">
            Brands
          </Link>
          <Link href="/blog" className="hover:text-red-500 active:font-bold">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-red-500">
            Contact
          </Link>
        </div>

        {/* Utility Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-700 rounded px-2 py-1 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Link href="/wishlist" className="hover:text-red-500">
            Wishlist
          </Link>
          <Link href="/cart" className="hover:text-red-500">
            Cart
          </Link>
          {user ? (
            <>
              <span className="text-red-500 font-semibold">
                Hello, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-4 py-4 space-y-2 shadow-md">
          <Link href="/shop" className="block hover:text-red-500 font-medium">
            Shop
          </Link>
          <Link href="/shop/men" className="block hover:text-red-500">
            Men
          </Link>
          <Link href="/shop/women" className="block hover:text-red-500">
            Women
          </Link>
          <Link href="/shop/kids" className="block hover:text-red-500">
            Kids
          </Link>
          <Link href="/shop/electronics" className="block hover:text-red-500">
            Electronics
          </Link>
          <Link href="/new" className="block hover:text-red-500">
            New Arrivals
          </Link>
          <Link href="/sale" className="block hover:text-red-500">
            Sale
          </Link>
          <Link href="/brands" className="block hover:text-red-500">
            Brands
          </Link>
          <Link href="/blog" className="block hover:text-red-500">
            Blog
          </Link>
          <Link href="/contact" className="block hover:text-red-500">
            Contact
          </Link>
          <Link href="/wishlist" className="block hover:text-red-500">
            Wishlist
          </Link>
          <Link href="/cart" className="block hover:text-red-500">
            Cart
          </Link>
          {user ? (
            <>
              <span className="block text-red-500 font-semibold">
                Hello, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="block bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 w-full text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="block bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
