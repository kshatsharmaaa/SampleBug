"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";



export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* Top Section */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          {/* Logo Placeholder */}
          <div className="text-2xl font-bold text-primary">
            <a
                  href="#"
                  className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
                >
                  <Image
                  src="/logo.webp"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
            
                
                  
                </a>
          </div>

          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          {/* Nav Links */}
          <ul className="flex gap-8">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#our-work">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button className="bg-primary text-white rounded px-6">
              Subscribe!
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>Copyright 2025 &copy; MyCompany — All Rights Reserved.</p>

        {/* Simple text links instead of icons */}
        <div className="flex items-center justify-between gap-6">
          <a href="#" className="hover:text-primary transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Instagram
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
