"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setProgress(40);
    const t1 = setTimeout(() => setProgress(70), 300);
    const t2 = setTimeout(() => setProgress(100), 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Password", href: "/password" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Spacer div to prevent content overlap */}
      <div className="h-16"></div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-800/90 backdrop-blur-md shadow-lg border-b border-slate-700/50"
            : "bg-transparent"
        }`}
      >
        <LoadingBar
          color="#8A2DFB"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <img src="/logo.png" alt="" />
                </div>
                <span
                  className={`text-xl font-bold ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                >
                  EchoSafe
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      className={`px-4 py-2 rounded-lg ${
                        isScrolled ? "text-gray-200" : "text-white"
                      }  hover:bg-gray-50/10 transition-all duration-200 font-medium cursor-pointer`}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <SignedOut>
                <SignInButton>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 mx-2 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center space-x-4">
                  <UserButton />
                </div>
              </SignedIn>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg ${
                  isScrolled ? "text-gray-200" : "text-gray-200"
                } hover:text-purple-400 hover:bg-gray-50/10 transition-colors duration-200`}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="block px-3 py-2 rounded-lg text-gray-200 hover:text-purple-400 hover:bg-slate-700/50 transition-colors duration-200 font-medium cursor-pointer">
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-700/30">
                <SignedOut>
                  <div className="space-y-2">
                    <SignInButton>
                      <button className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-center cursor-pointer">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton>
                      <button className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-center cursor-pointer">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </div>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-center py-2">
                    <UserButton />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
