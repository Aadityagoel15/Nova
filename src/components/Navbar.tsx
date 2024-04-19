'use client';
import { UserButton } from "@clerk/nextjs";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const glassmorphismStyle = {
    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.5)',
    backdropFilter: theme === 'dark' ? 'blur(8px)' : 'blur(10px)',
  };

  return (
    <div className={`flex justify-between items-center p-3 px-4 lg:px-6 h-14 fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isSticky ? "bg-slate-100/70 backdrop-blur-md shadow-sm" : ""}`} style={glassmorphismStyle}>
      <div>
        <Link href='/dashboard'>
          <div className={`font-bold font-serif text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Nova.
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <UserButton />
      </div>
    </div>
  );
}
