"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // For mobile menu icons

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll get in touch soon.`);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-6">
      <Head>
        <title>Meta2bots - AI Chatbot Solutions</title>
        <meta name="description" content="Transform & Scale Your Business with AI-powered chatbots from Meta2bots." />
      </Head>

      {/* Navbar */}
      <nav className="w-full bg-black py-4 px-6 fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/meta2botscone.png" alt="Meta2bots Logo" width={100} height={100} />
            <h1 className="ml-3 text-xl font-bold">Meta2bots</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-black text-gray-300 flex flex-col items-center py-4 space-y-4">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        )}
      </nav>

      {/* Page Content */}
      <header className="w-full max-w-4xl text-center py-24 mt-16">
        <div className="flex justify-center">
          <Image src="/meta2botsimage.png" alt="Meta2bots Logo" width={500} height={500} priority />
        </div>
        <h1 className="text-4xl font-bold mt-4">Meta2bots</h1>
        <p className="text-lg text-gray-300">Transform & Scale Your Business with AI</p>
      </header>

      <section className="max-w-3xl text-center mb-10">
        <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
        <p className="text-gray-400">
          Meta2bots provides cutting-edge AI chatbot solutions that enhance customer engagement, automate responses, and streamline business operations.
        </p>
      </section>

      <section className="max-w-3xl text-center mb-10">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-400 text-left">
          <li>24/7 Automated Customer Support</li>
          <li>Customizable AI Chatbots for Any Business</li>
          <li>Seamless Website & App Integration</li>
          <li>Scalable & Secure AI Technology</li>
        </ul>
      </section>

      {/* Contact Form (CTA Section) */}
      <section className="max-w-3xl w-full bg-black p-6 rounded-xl text-center shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-6">Enter your details, and we’ll contact you shortly.</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone (Optional)"
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-gray-600"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition"
          >
            Contact Now
          </button>
        </form>
      </section>

      <footer className="text-center text-gray-500 py-4 mt-10">
        <p>&copy; 2025 Meta2bots. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
