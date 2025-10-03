"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // ArrowLeft ya no es necesario aquí
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link"; 
import Image from "next/image"; 

// Navegación de Bruno Giugno (Ajustada a tu Home Page)
const navigation = [
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Acerca de Mí", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      )}
    >
      <nav className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO Y TÍTULO (SOLUCIÓN FINAL DE ALINEACIÓN Y TRUNCAMIENTO) */}
          <Link 
            href="/" 
            className="flex items-center h-full gap-2 text-xl font-bold"
            onClick={() => setIsOpen(false)} 
          >
            <Image
                src={"/icon.png"}
                alt="Logo BGProyectos"
                width={32}
                height={32}
                className="flex-shrink-0 object-contain rounded-full" // flex-shrink-0 es clave
            />
            {/* Ocultamos el texto en móvil para evitar el desbordamiento, o lo forzamos a ser pequeño */}
            <span className="hidden text-xl font-bold text-transparent truncate bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 whitespace-nowrap sm:inline-block">
              BGProyectos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation - Control del Menú */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary" 
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu (El menú que se despliega) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 z-40 w-full border-t md:hidden bg-background/95 backdrop-blur-md" 
          >
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium transition-colors rounded-md hover:text-primary hover:bg-muted"
                  onClick={() => setIsOpen(false)} 
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
