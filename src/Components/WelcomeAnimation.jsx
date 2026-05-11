// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function WelcomeAnimation() {
//   const [show, setShow] = useState(true); // ✅ Har refresh pe true
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setFadeOut(true), 3000);
//     setTimeout(() => setShow(false), 3800);
//   }, []);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 z-9999 bg-blue-800 flex flex-col items-center justify-center"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: fadeOut ? 0 : 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Glowing ring */}
//           <motion.div
//             className="absolute w-72 h-72 rounded-full border-4 border-blue-400 opacity-20"
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={{ scale: 1.6, opacity: 0 }}
//             transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
//           />
//           <motion.div
//             className="absolute w-72 h-72 rounded-full border-4 border-blue-500 opacity-20"
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={{ scale: 1.6, opacity: 0 }}
//             transition={{
//               duration: 2.5,
//               repeat: Infinity,
//               ease: "easeOut",
//               delay: 0.6,
//             }}
//           />

//           {/* Welcome Text */}
//           <motion.p
//             className="text-blue-400 uppercase tracking-[0.3em] text-2xl font-semibold mb-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.6 }}
//           >
//             Welcome to
//           </motion.p>

//           <motion.h1
//             className="text-white text-4xl sm:text-6xl font-extrabold tracking-wide"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               delay: 0.9,
//               duration: 0.7,
//               type: "spring",
//               stiffness: 100,
//             }}
//           >
//             <img src="/Logo.png" alt="IIoFT Logo" />
//           </motion.h1>

//           <motion.p
//             className="text-blue-100 text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-3 tracking-wide sm:tracking-widest uppercase text-center px-3 sm:px-0 leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.4, duration: 0.6 }}
//           >
//             International Institute of Futuristic Technology
//           </motion.p>

//           {/* Tagline */}
//           <motion.p
//             className="mt-4 text-2xl sm:text-base text-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.8, duration: 0.6 }}
//           >
//             <span className="text-red-500 font-bold">Think Smart</span> |{" "}
//             <span className="text-yellow-400 font-bold">Learn Smart</span>
//           </motion.p>

//           {/* Sub Tagline */}
//           <motion.p
//             className="mt-2 text-xl font-bold sm:text-sm text-yellow-400 text-center tracking-wide"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2.2, duration: 0.6 }}
//           >
//             Skill Up with{" "}
//             <span className="font-semibold text-blue-400">IIOFT</span>
//           </motion.p>

//           {/* Bottom loading bar */}
//           <motion.div className="absolute bottom-10 w-48 h-1 bg-blue-900 rounded-full overflow-hidden">
//             <motion.div
//               className="h-full bg-blue-400 rounded-full"
//               initial={{ width: "0%" }}
//               animate={{ width: "100%" }}
//               transition={{ duration: 2.8, ease: "easeInOut" }}
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeAnimation() {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if animation has been shown before
    const hasSeenAnimation = localStorage.getItem("welcomeAnimationShown");

    if (!hasSeenAnimation) {
      setShow(true);
      
      // Mark as shown in localStorage
      localStorage.setItem("welcomeAnimationShown", "true");

      // Fade out and hide timeline
      setTimeout(() => setFadeOut(true), 3500);
      setTimeout(() => setShow(false), 4300);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-9999 bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Background Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
              }}
              animate={{
                y: [null, Math.random() * -200],
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Multiple Glowing Rings with Better Animation */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border-4 border-blue-400"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 2], opacity: [0.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full border-4 border-cyan-400"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 2], opacity: [0.6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.8,
            }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full border-2 border-yellow-300"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 2], opacity: [0.4, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1.6,
            }}
          />

          {/* Central Glow Effect */}
          <motion.div
            className="absolute w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Welcome Text with Better Animation */}
          <motion.p
            className="text-blue-300 uppercase tracking-[0.4em] text-2xl font-bold mb-3 z-10"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            Welcome to
          </motion.p>

          {/* Logo with Bounce Effect */}
          <motion.h1
            className="text-white text-4xl sm:text-6xl font-extrabold tracking-wide z-10"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.9,
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
          >
            <motion.img
              src="/Logo.png"
              alt="IIoFT Logo"
              animate={{
                filter: [
                  "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
                  "drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))",
                  "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.h1>

          {/* Institute Name with Slide Effect */}
          <motion.p
            className="text-blue-100 text-[10px] sm:text-xs md:text-sm mt-3 sm:mt-4 tracking-widest uppercase text-center px-4 sm:px-0 leading-relaxed font-medium z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
          >
            International Institute of Futuristic Technology
          </motion.p>

          {/* Tagline with Color Animation */}
          <motion.p
            className="mt-5 text-xl sm:text-lg text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
          >
            <motion.span
              className="text-red-500 font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Think Smart
            </motion.span>{" "}
            <span className="text-white">|</span>{" "}
            <motion.span
              className="text-yellow-400 font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              Learn Smart
            </motion.span>
          </motion.p>

          {/* Sub Tagline with Glow */}
          <motion.p
            className="mt-3 text-lg font-bold sm:text-base text-yellow-300 text-center tracking-wide z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.7 }}
          >
            Skill Up with{" "}
            <motion.span
              className="font-extrabold text-cyan-400"
              animate={{
                textShadow: [
                  "0 0 10px rgba(34, 211, 238, 0.8)",
                  "0 0 20px rgba(34, 211, 238, 1)",
                  "0 0 10px rgba(34, 211, 238, 0.8)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              IIOFT
            </motion.span>
          </motion.p>

          {/* Enhanced Loading Bar */}
          <motion.div
            className="absolute bottom-12 w-56 h-1.5 bg-blue-950/50 rounded-full overflow-hidden backdrop-blur-sm border border-blue-700/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full shadow-lg shadow-blue-400/50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}