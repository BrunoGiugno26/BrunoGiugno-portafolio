"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Muestra el botón después de que la página se carga (2 segundos)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // REEMPLAZA CON TU NÚMERO REAL
  const whatsappNumber = "5492612445460"; // Usé tu número de contacto de Argentina. Formato: CódigoPaís + CódigoCiudad + Número
  const defaultMessage =
    "¡Hola Bruno! Vi tu portafolio y estoy interesado en discutir una oportunidad de proyecto.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(url, "_blank");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Fondo Oscuro (Backdrop) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Widget de Chat */}
      <div className="fixed z-50 bottom-6 right-6">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mb-4 w-80 max-w-[calc(100vw-3rem)]"
            >
              <div className="overflow-hidden border shadow-2xl bg-background/95 dark:bg-background/90 backdrop-blur-xl border-border/20 rounded-2xl">
                {/* Encabezado */}
                <div className="bg-[#25D366] p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 text-lg font-bold rounded-full bg-white/20">
                        BG
                      </div>
                      <div>
                        <h3 className="font-semibold">Bruno Giugno</h3>
                        <p className="text-xs text-white/80">
                          Desarrollador Full Stack & Frontend
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 text-white hover:bg-white/20"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Contenido del Chat */}
                <div className="p-4 space-y-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      BG
                    </div>
                    <div className="bg-muted/50 rounded-2xl rounded-tl-md p-3 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        👋 ¡Hola! Estoy disponible para discutir tus necesidades
                        de proyecto.
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Normalmente respondo en menos de una hora.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      BG
                    </div>
                    <div className="bg-muted/50 rounded-2xl rounded-tl-md p-3 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        Hablemos sobre:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Desarrollo Full Stack y Frontend</li>
                        <li>• Proyectos con Next.js/React y TypeScript</li>
                        <li>• Sistemas de reservas o E-commerce</li>
                        <li>• Oportunidades de empleo remoto</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Botón CTA */}
                <div className="p-4 border-t border-border/20">
                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 rounded-xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Iniciar Chat de WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón de Chat (el icono circular) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-2xl hover:shadow-[#25D366]/25 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Efecto Ripple */}
            <div className="absolute inset-0 transition-transform duration-500 scale-0 rounded-full bg-white/20 group-hover:scale-100" />

            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="message"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Punto de Notificación */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full -top-1 -right-1"
            />
          </Button>
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 1 }}
              className="absolute hidden -translate-y-1/2 right-16 top-1/2 md:block"
            >
              <div className="px-3 py-2 border rounded-lg shadow-lg bg-background/95 backdrop-blur-xl border-border/20 whitespace-nowrap">
                <p className="text-sm font-medium text-foreground">
                  ¿Necesitas ayuda con un proyecto?
                </p>
                <p className="text-xs text-muted-foreground">
                  Clic para chatear por WhatsApp
                </p>
                {/* Flecha */}
                <div className="absolute right-0 translate-x-full -translate-y-1/2 top-1/2">
                  <div className="w-0 h-0 border-l-[6px] border-l-border/20 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
