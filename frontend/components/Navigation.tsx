"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                BLUE LUXURY VTC
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-blue-500"
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-blue-500"
              >
                Services
              </Link>
              <Link
                href="/reviews"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-blue-500"
              >
                Avis Clients
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-blue-500"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Accueil
          </Link>
          <Link
            href="/services"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Services
          </Link>
          <Link
            href="/reviews"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Avis Clients
          </Link>
          <Link
            href="/contact"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}