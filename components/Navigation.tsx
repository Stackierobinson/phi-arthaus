'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative">
          <div className="text-2xl font-light tracking-[0.2em] text-gray-900 uppercase">
            PHI ArtHaus
          </div>
          <div className="absolute -bottom-1 left-0 w-10 h-1 bg-gradient-to-r from-basquiat-yellow via-warhol-pink to-kahlo-teal" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-12 list-none">
          <li>
            <Link
              href="#mission"
              className="text-sm tracking-wider uppercase text-gray-900 hover:opacity-60 transition-opacity"
            >
              Mission
            </Link>
          </li>
          <li>
            <Link
              href="#timeline"
              className="text-sm tracking-wider uppercase text-gray-900 hover:opacity-60 transition-opacity"
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              href="#programs"
              className="text-sm tracking-wider uppercase text-gray-900 hover:opacity-60 transition-opacity"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="#impact"
              className="text-sm tracking-wider uppercase text-gray-900 hover:opacity-60 transition-opacity"
            >
              Impact
            </Link>
          </li>
          <li>
            <Link
              href="#donate"
              className="text-sm tracking-wider uppercase text-gray-900 hover:opacity-60 transition-opacity"
            >
              Support
            </Link>
          </li>
        </ul>

        {/* Donate Button */}
        <Link
          href="#donate"
          className="hidden md:block bg-gray-900 text-white px-8 py-3 tracking-wider uppercase text-sm hover:bg-gray-700 transition-colors"
        >
          Donate
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-6 space-y-4">
            <li>
              <Link
                href="#mission"
                className="text-sm tracking-wider uppercase text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Mission
              </Link>
            </li>
            <li>
              <Link
                href="#timeline"
                className="text-sm tracking-wider uppercase text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                href="#programs"
                className="text-sm tracking-wider uppercase text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="#impact"
                className="text-sm tracking-wider uppercase text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Impact
              </Link>
            </li>
            <li>
              <Link
                href="#donate"
                className="bg-gray-900 text-white px-8 py-3 tracking-wider uppercase text-sm text-center block"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
