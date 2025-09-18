import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Subscribe = () => {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const particleCount = isMobile ? 50 : 200; // Mniej cząstek na mobile

    // Dopasuj rozmiar canvas do elementu rodzica
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    // Klasa cząsteczki
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.velocityX = Math.random() * 2 - 1;
        this.velocityY = Math.random() * 2 - 1;
        this.size = Math.random() * 2 + 1;
        this.color = isMobile ? "#f7fafc" : "#f7fafc"; // Ciemniejsze na mobile dla lepszej widoczności
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x < 0 || this.x > canvas.width) this.velocityX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.velocityY *= -1;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
      }
    }

    // Inicjalizacja cząsteczek
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Animacja
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Łączenie cząsteczek liniami
      context.strokeStyle = isMobile ? "rgba(247, 250, 252, 0.2)" : "rgba(247, 250, 252, 0.2)";
      context.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Inicjalizacja
    resizeCanvas();
    initParticles();
    animate();

    // Obsługa zmiany rozmiaru okna
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Czyszczenie
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <section id="team" className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full py-24 md:py-48 relative rounded-3xl shadow-2xl md:rounded-none md:shadow-none overflow-hidden"
        style={{ background: isMobile ? '#2d3748' : '#4a5568' }} // Tło zastępcze dla canvas
      >
        {/* Canvas z animacją w tle */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center relative"
          style={{ zIndex: 1 }}
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto text-white">
            <h1 className="text-3xl md:text-4xl font-bold !leading-snug text-white">
              Już +70 zadowolonych uczniów
            </h1>
            <p>
              Zaufalo nam już wielu mlodych i ambitnych uczniów, dołącz do nich i Ty!
            </p>
            <a
              href="#home"
              className="primary-btn !mt-8 inline-flex items-center gap-4 group bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Dolacz teraz
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;