import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { RiRobot3Fill } from "react-icons/ri";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegLightbulb,
  FaGlobe,
  FaTimes,
  FaPaperPlane,
  FaUserCircle,
} from "react-icons/fa";
import {
  FaLinkedin,
  FaHandshakeSimple,
  FaUserGraduate,
  FaXTwitter,
} from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { BsPersonVcardFill, BsWhatsapp, BsPhoneFill } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

// ─── Static data ──────────────────────────────────────────────────────────────

const IMAGES = [
  "AB.WebP",
  "Bulding.AVIF",
  "Graduation.AVIF",
  "Student.AVIF",
  "Hero1.AVIF",
  "Hero2.AVIF",
  "Hero3.AVIF",
  "Hero4.AVIF",
];

const FAQS = [
  {
    question: "What courses are available at IIOFT?",
    answer:
      "IIOFT offers industry-relevant courses such as Data Science, Web Development, Digital Marketing, Ethical Hacking, Cloud Computing, and Artificial Intelligence/Machine Learning. All programs include hands-on training and provide globally recognized certifications.",
  },
  {
    question: "Does IIOFT offer a 100% placement guarantee?",
    answer:
      "Yes, IIOFT has a strong placement record with students placed in top companies such as Google, Microsoft, IBM, Accenture, and Wipro. Our dedicated placement team provides complete career support, including resume building and mock interviews.",
  },
  {
    question: "What are the course fees, and are EMI options available?",
    answer:
      "Course fees vary depending on the program. We offer flexible payment plans and EMI options to make learning accessible. For detailed fee information, please contact us at +91 9560307098 or fill out the Enquire Now form.",
  },
  {
    question:
      "How many IIOFT centers are there, and are online classes available?",
    answer:
      "IIOFT has multiple centers across India, including Delhi (Dwarka), Bangalore, Hyderabad, Pune, and Gujarat. We also have an international presence in cities like London, Toronto, New York, Paris, Sydney, Perth, Adelaide, and Cape Town. Both online and hybrid learning options are available.",
  },
  {
    question: "What certification will I receive after completing the course?",
    answer:
      "Upon successful completion, you will receive a globally recognized IIOFT certification accepted by industries worldwide. You will also become a part of the IIOFT Alumni Network, which supports future career opportunities.",
  },
  {
    question: "What are the eligibility criteria for admission?",
    answer:
      "Most courses require a minimum qualification of 10+2. Some advanced programs may require a graduate degree. Students from all backgrounds—engineering, commerce, or arts—are welcome. The admission process is simple: just click on the Enquire Now button.",
  },
];

const LOGOS = [
  "Google.WebP",
  "Alcoa.WebP",
  "Accenture.WebP",
  "Genpact.WebP",
  "GoldManSachs.WebP",
  "Hcl.WebP",
  "Ibm.Webp",
  "Microsoft.WebP",
  "NielsenIQ.WebP",
  "Ramboll.WebP",
  "Wipro.WebP",
  "Wsp.WebP",
];

const PLACEMENT_LOGOS = [
  "Gogle.WebP",
  "Microsoft.WebP",
  "Aws.WebP",
  "Ibm.Webp",
  "Deloitte.WebP",
  "Accenture.png",
  "tcs.WebP",
  "Infosys.png",
  "Wipro.WebP",
  "Capgemini.WebP",
  "Hcl.WebP",
  "Oracle.WebP",
  "Sap.WebP",
  "Adobe.WebP",
  "Cisco.WebP",
  "Intel.WebP",
  "Cognizant.WebP",
  "Salesforce.WebP",
  "Tm.WebP",
  "Nvidia.WebP",
];

const PROS = [
  { icon: <FaUserGraduate />, title: "Globally Recognized Certification" },
  { icon: <FaRegLightbulb />, title: "Hands-On Training" },
  { icon: <FaHandshakeSimple />, title: "Strong Brand Reputation" },
  { icon: <BsPersonVcardFill />, title: "Real-World Projects" },
  { icon: <RiGalleryFill />, title: "360° Career Support" },
  { icon: <FaGlobe />, title: "IIOFT® Alumni Status" },
];

const LOCATIONS = [
  {
    name: "Delhi, India, Dwarka",
    link: "https://www.google.com/maps/search/?api=1&query=Kochhar+Plaza+H3MC+XVF+Ramphal+Chowk+Sector+7+Palam+Delhi+110077",
  },
  {
    name: "Banglore, India",
    link: "https://maps.app.goo.gl/X1jBeHhow9cDK1qG8?g_st=aw",
  },
  {
    name: "Gujrat, India",
    link: "https://maps.app.goo.gl/HP72h9DCfNQjeUfTA?g_st=aw",
  },
  {
    name: "Hyderabad, India",
    link: "https://maps.app.goo.gl/bdL2hZgcMKuAtfxE9?g_st=aw",
  },
  {
    name: "Pune, India",
    link: "https://maps.app.goo.gl/gyt6TCVYwRRpr4Fr8?g_st=aw",
  },
  {
    name: "Capetown, South Africa",
    link: "https://maps.app.goo.gl/aqUSTiutzfPv7EYE7?g_st=aw",
  },
  {
    name: "London, United Kingdom",
    link: "https://maps.app.goo.gl/mswfsuEuiDnDwmRB8?g_st=aw",
  },
  {
    name: "Toronto, Canada",
    link: "https://maps.app.goo.gl/yhSD6dUpi9eoaK149?g_st=aw",
  },
  {
    name: "New York, United States",
    link: "https://maps.app.goo.gl/Yr8xWz4MY8f9aM8U9?g_st=aw",
  },
  {
    name: "Paris, France",
    link: "https://maps.app.goo.gl/yNFMHZTgRBuZbQSE8?g_st=aw",
  },
  {
    name: "Sydney, Australia",
    link: "https://maps.app.goo.gl/NMCKRFoAP8gqNDRK7?g_st=aw",
  },
  {
    name: "Perth, Australia",
    link: "https://maps.app.goo.gl/Rzd2LHerrhH2t1vu6?g_st=aw",
  },
  {
    name: "Adelaide, Australia",
    link: "https://maps.app.goo.gl/Rzd2LHerrhH2t1vu6?g_st=aw",
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61578516476737",
    icon: <FaFacebookF className="text-blue-600 text-lg md:text-2xl" />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/iioft.official",
    icon: <FaInstagramSquare className="text-pink-600 text-lg md:text-2xl" />,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/channel/UCLhUsvW0O-c6mf7Ti9jrOBg",
    icon: <FaYoutube className="text-red-600 text-lg md:text-2xl" />,
    label: "YouTube",
  },
  {
    href: "https://www.linkedin.com/in/iioft-a72bb83b7/",
    icon: <FaLinkedin className="text-blue-800 text-lg md:text-2xl" />,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/iioft",
    icon: <FaXTwitter className="text-black text-lg md:text-2xl" />,
    label: "X (Twitter)",
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@iioft.co.in&su=Inquiry&body=Hello%20IIOFT%20Team",
    icon: <IoIosMailUnread className="text-yellow-500 text-lg md:text-2xl" />,
    label: "Email",
  },
  {
    href: "https://wa.me/919560307098",
    icon: <BsWhatsapp className="text-green-600 text-lg md:text-2xl" />,
    label: "WhatsApp",
  },
];
const COUNTER_TARGETS = {
  labs: 10,
  faculty: 80,
  placement: 100,
  students: 2000,
};
const COUNTER_STEPS = { labs: 1, faculty: 1, placement: 1, students: 18 };
const COUNTER_LABELS = [
  { key: "labs", suffix: "+", label: "Advanced Labs" },
  { key: "faculty", suffix: "+", label: "Expert Faculty" },
  { key: "placement", suffix: "%", label: "Placement Rate" },
  { key: "students", suffix: "+", label: "Students Enrolled" },
];

const MARQUEE_TRANSITION = { repeat: Infinity, duration: 8, ease: "linear" };

// ─── ChatBot Component (integrated) ──────────────────────────────────────────

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 IIOFT mein aapka swagat hai! Main aapki kaise help kar sakta hun?",
      sender: "bot",
      time: new Date(),
      options: [
        "📚 Courses ke baare mein batao",
        "💼 Placement guarantee hai?",
        "💰 Fees kitni hai?",
        "📍 Centers kaha hai?",
      ],
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const getBotResponse = (userMessage) => {
    // Input validation
    if (!userMessage || userMessage.trim() === "") {
      return {
        text: "Kuch type karo bhai! 😊",
        options: ["📚 Courses", "💼 Placement", "💰 Fees", "📞 Contact"],
      };
    }

    const lowerMsg = userMessage.toLowerCase().trim();

    // Greeting
    if (
      lowerMsg.includes("hi") ||
      lowerMsg.includes("hello") ||
      lowerMsg.includes("hey") ||
      lowerMsg.includes("namaste") ||
      lowerMsg.includes("start")
    ) {
      return {
        text: "Hello! 👋 IIOFT mein aapka swagat hai!\n\nMain aapki kaise help kar sakta hun?",
        options: [
          "📚 Courses dekho",
          "💼 Placement info",
          "💰 Fees structure",
          "📍 Centers",
        ],
      };
    }

    // Courses
    if (
      lowerMsg.includes("course") ||
      lowerMsg.includes("kya padhai") ||
      lowerMsg.includes("subjects") ||
      lowerMsg.includes("padhai")
    ) {
      return {
        text: "IIOFT mein ye popular courses available hain:\n\n🔹 Data Science & AI/ML\n🔹 Web Development (Full Stack)\n🔹 Digital Marketing\n🔹 Ethical Hacking & Cyber Security\n🔹 Cloud Computing (AWS, Azure)\n🔹 Python Programming\n\nSabhi courses mein:\n✅ Hands-on training\n✅ Industry projects\n✅ Global certification\n✅ 100% placement support\n\nKaunsa course detail mein jaanna chahenge?",
        options: [
          "🎓 Course duration",
          "💼 Placement details",
          "💰 Fees structure",
          "📞 Call karo mujhe",
        ],
      };
    }

    // Course Duration
    if (
      lowerMsg.includes("duration") ||
      lowerMsg.includes("kitne mahine") ||
      lowerMsg.includes("kitna time") ||
      lowerMsg.includes("how long")
    ) {
      return {
        text: "IIOFT courses ki duration:\n\n⏱️ Short courses: 2-3 months\n⏱️ Professional courses: 4-6 months\n⏱️ Advanced courses: 6-12 months\n\n📅 Flexible timings:\n• Morning batches\n• Evening batches\n• Weekend batches\n• Online classes\n\nAap apni convenience ke hisaab se choose kar sakte ho!",
        options: [
          "📅 Batch timings",
          "💰 Fees",
          "✅ Enquire Now",
          "📚 Back to courses",
        ],
      };
    }

    // Batch Timings
    if (
      lowerMsg.includes("batch") ||
      lowerMsg.includes("timing") ||
      lowerMsg.includes("schedule") ||
      lowerMsg.includes("kab class")
    ) {
      return {
        text: "Available batches (Limited seats!):\n\n🌅 Morning Batch\nTiming: 8:00 AM - 11:00 AM\n🟢 Seats left: 5\n\n🌆 Evening Batch\nTiming: 6:00 PM - 9:00 PM\n🟡 Seats left: 3\n\n🌙 Weekend Batch\nTiming: Sat-Sun (10 AM - 5 PM)\n🟢 Seats left: 8\n\n💻 Online classes bhi available!\n\nJaldi book karo, seats jaldi full ho jati hain! ⚡",
        options: [
          "✅ Book seat now",
          "📞 Talk to counselor",
          "💰 Fees info",
          "🏠 Main menu",
        ],
      };
    }

    // Placement
    if (
      lowerMsg.includes("placement") ||
      lowerMsg.includes("job") ||
      lowerMsg.includes("guarantee") ||
      lowerMsg.includes("company")
    ) {
      return {
        text: "IIOFT ki placement record bahut strong hai! 🎯\n\n✅ 100% Placement Support\n✅ Top companies: Google, Microsoft, IBM, Accenture, Wipro, TCS, Infosys, Amazon\n✅ Resume building & mock interviews\n✅ Dedicated placement team\n✅ IIOFT Alumni Network benefits\n\n💰 Average package: 4-8 LPA\n💰 Highest package: 15+ LPA\n\n🎓 Last batch: 98% students placed!\n\nAap Enquire karna chahenge?",
        options: [
          "⭐ Success stories",
          "✅ Enquire Now",
          "📚 Course details",
          "📞 Talk to counselor",
        ],
      };
    }

    // Success Stories / Reviews
    if (
      lowerMsg.includes("review") ||
      lowerMsg.includes("student") ||
      lowerMsg.includes("success") ||
      lowerMsg.includes("story") ||
      lowerMsg.includes("testimonial")
    ) {
      return {
        text: "Humare students ka experience suniye! ⭐\n\n⭐⭐⭐⭐⭐ (4.8/5)\n\n💬 'IIOFT ne meri life badal di! 6 months mein Google mein placement mili!'\n— Rahul Sharma, Data Scientist @ Google\n\n💬 'Best decision of my life. Teachers bahut supportive hain!'\n— Priya Singh, Full Stack Developer @ Microsoft\n\n💬 'From zero to hero! Thank you IIOFT team!'\n— Amit Kumar, Cyber Security Analyst @ IBM\n\n📊 10,000+ successful students worldwide! 🌍",
        options: [
          "🎥 Video testimonials",
          "✅ Main bhi enquire karunga",
          "📚 Course details",
          "💼 Placement info",
        ],
      };
    }

    // Fees
    if (
      lowerMsg.includes("fees") ||
      lowerMsg.includes("price") ||
      lowerMsg.includes("cost") ||
      lowerMsg.includes("kitna") ||
      lowerMsg.includes("paisa")
    ) {
      return {
        text: "IIOFT ki fees structure:\n\n💳 Course fees course ke basis pe vary karti hai\n💳 EMI options available (0% interest)\n💳 Flexible payment plans\n💳 Scholarship opportunities\n\n🎁 Special offers:\n✨ Early bird discount: 20% OFF\n✨ Refer a friend: Get ₹5000 cashback\n✨ Women candidates: Extra 10% scholarship\n\nExact fees aur EMI details ke liye:\n📞 Call: +91 9560307098\n📧 Email: info@iioft.co.in\n\nHamara counselor aapko best plan suggest karega!",
        options: [
          "💰 Scholarship calculator",
          "📞 Call karo",
          "✅ Enquire Now",
          "📚 Course details",
        ],
      };
    }

    // Scholarship
    if (
      lowerMsg.includes("scholarship") ||
      lowerMsg.includes("discount") ||
      lowerMsg.includes("offer") ||
      lowerMsg.includes("chhut")
    ) {
      return {
        text: "IIOFT Scholarship opportunities! 🎓💰\n\n✅ Merit-based scholarship: Up to 50%\n✅ Women empowerment: 10% extra\n✅ Armed forces family: 15% discount\n✅ Early bird offer: 20% OFF\n✅ Group enrollment (3+): 25% OFF\n\n📝 Eligibility check karne ke liye:\n1️⃣ Apni qualification batao\n2️⃣ Counselor se baat karo\n3️⃣ Instant scholarship calculation\n\nAbhi enquire karo, offers limited time ke liye hain! ⏰",
        options: [
          "📞 Check eligibility",
          "✅ Enquire Now",
          "💼 Placement info",
          "🏠 Main menu",
        ],
      };
    }

    // Centers / Location
    if (
      lowerMsg.includes("center") ||
      lowerMsg.includes("location") ||
      lowerMsg.includes("kaha") ||
      lowerMsg.includes("address") ||
      lowerMsg.includes("branch")
    ) {
      return {
        text: "IIOFT ke centers India aur international locations pe hai! 🌍\n\n🇮🇳 India:\n• Delhi (Dwarka) - Main Campus\n• Bangalore\n• Hyderabad\n• Pune\n• Gujarat\n\n🌏 International:\n• London, UK\n• Toronto, Canada\n• New York, USA\n• Paris, France\n• Sydney, Perth, Adelaide (Australia)\n• Cape Town, South Africa\n\n💻 Online classes bhi available hai!\n📍 Nearest center dhundne ke liye contact karo!",
        options: [
          "📞 Contact details",
          "🗺️ Google Maps",
          "✅ Enquire Now",
          "💼 Placement info",
        ],
      };
    }

    // Enquire / Admission
    if (
      lowerMsg.includes("enquire") ||
      lowerMsg.includes("admission") ||
      lowerMsg.includes("enroll") ||
      lowerMsg.includes("join") ||
      lowerMsg.includes("interested")
    ) {
      return {
        text: "Great choice! 🎉 IIOFT mein admission bahut easy hai!\n\n📋 Eligibility:\n• Minimum 10+2 (most courses)\n• All backgrounds welcome\n• Age no bar\n\n📝 Enquire kaise karein:\n1️⃣ Form fill karein (2 minutes)\n2️⃣ Document upload (10th/12th)\n3️⃣ Counselor call (within 24hrs)\n4️⃣ Seat confirmation\n\n🎁 Enquire karte hi: Free demo class + Study material!\n\n🚀 Quick Contact:\n📞 +91 9560307098\n📧 info@iioft.co.in",
        options: [
          "📝 Fill form now",
          "📞 Call now",
          "💬 WhatsApp",
          "📚 Course details",
        ],
      };
    }

    // Contact
    if (
      lowerMsg.includes("contact") ||
      lowerMsg.includes("call") ||
      lowerMsg.includes("phone") ||
      lowerMsg.includes("number") ||
      lowerMsg.includes("email") ||
      lowerMsg.includes("whatsapp")
    ) {
      return {
        text: "IIOFT se contact karne ke liye:\n\n📞 Phone: +91 9560307098\n📧 Email: info@iioft.co.in\n💬 WhatsApp: +91 9560307098\n📍 Address: Kochhar Plaza, Sector 7, Dwarka, Delhi - 110077\n🌐 Website: www.iioft.co.in\n\n🕐 Timing: Mon-Sat, 9 AM - 6 PM\n\nHamari team turant aapki help karegi! 😊\n\nPreferred contact method?",
        options: [
          "📞 Call karo",
          "💬 WhatsApp chat",
          "📧 Email bhejo",
          "✅ Enquire Now",
        ],
      };
    }

    // FAQ
    if (
      lowerMsg.includes("faq") ||
      lowerMsg.includes("question") ||
      lowerMsg.includes("doubt") ||
      lowerMsg.includes("help")
    ) {
      return {
        text: "IIOFT - Frequently Asked Questions ❓\n\n1️⃣ Course duration kitna hai?\n2️⃣ Online ya offline classes?\n3️⃣ Certificate valid hai kya?\n4️⃣ Job guarantee hai?\n5️⃣ EMI option available hai?\n6️⃣ Kya prerequisites hain?\n\nKaunsa question puchna hai?",
        options: [
          "1️⃣ Duration",
          "2️⃣ Online/Offline",
          "3️⃣ Certificate",
          "4️⃣ Job guarantee",
        ],
      };
    }

    // Certificate
    if (
      lowerMsg.includes("certificate") ||
      lowerMsg.includes("certification") ||
      lowerMsg.includes("degree") ||
      lowerMsg.includes("valid")
    ) {
      return {
        text: "IIOFT Certifications 🎓\n\n✅ Globally recognized certificates\n✅ ISO certified institute\n✅ Industry-approved curriculum\n✅ LinkedIn profile add karo\n✅ Resume value increase\n\n🏆 Certificates include:\n• Course completion certificate\n• Internship certificate\n• Project certificates\n• Skill badges\n\n📜 Hard copy + Digital copy dono milte hain!\n\nYe certificates corporate world mein highly valued hain! 🌟",
        options: [
          "📚 Course details",
          "✅ Enquire Now",
          "💼 Placement",
          "📞 Contact",
        ],
      };
    }

    // Compare courses
    if (
      lowerMsg.includes("compare") ||
      lowerMsg.includes("difference") ||
      lowerMsg.includes("vs") ||
      lowerMsg.includes("better")
    ) {
      return {
        text: "Kaunse courses compare karni hain? 🤔\n\nPopular comparisons:\n\n1️⃣ Data Science vs Web Development\n2️⃣ Digital Marketing vs Python\n3️⃣ Cyber Security vs Cloud Computing\n4️⃣ Full Stack vs Frontend Development\n\nYa phir counselor se detailed comparison ke liye baat karo! 📞",
        options: [
          "1️⃣ DS vs Web Dev",
          "2️⃣ Marketing vs Python",
          "📞 Talk to expert",
          "📚 All courses",
        ],
      };
    }

    // Brochure / Download
    if (
      lowerMsg.includes("brochure") ||
      lowerMsg.includes("pdf") ||
      lowerMsg.includes("download") ||
      lowerMsg.includes("syllabus")
    ) {
      return {
        text: "IIOFT Course Brochure & Syllabus 📄\n\n📥 Download options:\n\n✅ Complete course brochure\n✅ Detailed syllabus\n✅ Fee structure PDF\n✅ Placement statistics\n✅ Success stories\n\nApna email ID share karo, hum turant bhej denge! 📧\n\nYa direct download link:\n👉 www.iioft.co.in/brochure",
        options: [
          "📧 Email me",
          "💬 WhatsApp pe bhejo",
          "✅ Enquire directly",
          "📞 Call for details",
        ],
      };
    }

    // Website
    if (
      lowerMsg.includes("website") ||
      lowerMsg.includes("link") ||
      lowerMsg.includes("url") ||
      lowerMsg.includes("online")
    ) {
      return {
        text: "IIOFT ki website visit karo! 🌐\n\n🔗 www.iioft.co.in\n\nWebsite pe milega:\n✅ Complete course details\n✅ Video testimonials\n✅ Live chat support\n✅ Online application form\n✅ Upcoming events & webinars\n✅ Blog & resources\n\nAbhi visit karo! 👆",
        options: [
          "✅ Enquire online",
          "📞 Call instead",
          "💬 Continue chatting",
          "🏠 Main menu",
        ],
      };
    }

    // Demo class
    if (
      lowerMsg.includes("demo") ||
      lowerMsg.includes("trial") ||
      lowerMsg.includes("free class") ||
      lowerMsg.includes("sample")
    ) {
      return {
        text: "FREE Demo Class! 🎁\n\n✅ 1-hour live session\n✅ Course overview\n✅ Meet the trainer\n✅ Doubt clearing\n✅ Career guidance\n\n📅 Next demo sessions:\n• Today - 6:00 PM\n• Tomorrow - 11:00 AM\n• This Saturday - 3:00 PM\n\nBook karo apna slot! No payment required! 🆓",
        options: [
          "📅 Book demo",
          "📞 Call to schedule",
          "✅ Direct admission",
          "📚 Course info",
        ],
      };
    }

    // Thanks
    if (
      lowerMsg.includes("thanks") ||
      lowerMsg.includes("thank you") ||
      lowerMsg.includes("shukriya") ||
      lowerMsg.includes("dhanyavaad")
    ) {
      return {
        text: "Aapka swagat hai! 😊\n\nKoi aur help chahiye to zaroor puchiye!\n\n🎓 IIOFT team hamesha ready hai aapki help karne ke liye!\n\n💪 Your success is our mission!\n\nAll the best! 🚀",
        options: [
          "📚 More about courses",
          "✅ Enquire Now",
          "📞 Contact us",
          "🏠 Main menu",
        ],
      };
    }

    // Bye / Exit
    if (
      lowerMsg.includes("bye") ||
      lowerMsg.includes("exit") ||
      lowerMsg.includes("quit") ||
      lowerMsg.includes("close")
    ) {
      return {
        text: "Jaate jaate ek request! 🙏\n\nHamari team se ek baar baat zaroor karo:\n📞 +91 9560307098\n\nAapke career ki sahi direction mil sakti hai! 🎯\n\nGoodbye! Phir milenge! 👋",
        options: [
          "📞 Quick call",
          "✅ Enquire Now",
          "💬 Continue chat",
          "🏠 Restart",
        ],
      };
    }

    // Default fallback
    return {
      text: "Hmm, main aapki query samajh nahi paya. 🤔\n\nAap ye topics ke baare mein pooch sakte hain:\n\n📚 Courses aur subjects\n💼 Placement aur job guarantee\n💰 Fees aur EMI options\n📍 Centers aur locations\n✅ Admission process\n🎓 Certifications\n📞 Contact details\n⭐ Student reviews\n📅 Batch timings\n🎁 Demo classes\n\nYa phir directly hamse contact karein:\n📞 +91 9560307098\n💬 WhatsApp: +91 9560307098",
      options: ["📚 Courses", "💼 Placement", "💰 Fees", "📞 Contact"],
    };
  };
  const handleSend = (messageText = inputText) => {
    if (!messageText.trim()) return;
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      time: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);
    setTimeout(
      () => {
        const botResponseData = getBotResponse(messageText);
        const botMessage = {
          id: Date.now() + 1,
          text: botResponseData.text,
          sender: "bot",
          time: new Date(),
          options: botResponseData.options,
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open chat assistant"
            className="fixed bottom-6 right-6 z-50 bg-linear-to-r from-blue-600 to-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 animate-bounce"
          >
            <RiRobot3Fill className="text-3xl" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxWidth: "calc(100vw - 3rem)", maxHeight: "80vh" }}
          >
            {/* Header */}
            <div className="bg-linear-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <RiRobot3Fill className="text-3xl text-white" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    IIOFT Assistant
                  </h3>
                  <p className="text-white text-xs">
                    Online • Replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="text-white hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex gap-2 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`${msg.sender === "bot" ? "bg-blue-100" : "bg-blue-600"} p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0`}
                    >
                      {msg.sender === "bot" ? (
                        <RiRobot3Fill className="text-blue-600 text-sm" />
                      ) : (
                        <FaUserCircle className="text-white text-sm" />
                      )}
                    </div>
                    <div>
                      <div
                        className={`${msg.sender === "user" ? "bg-blue-600 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-sm" : "bg-white text-gray-800 rounded-tr-2xl rounded-br-2xl rounded-bl-sm shadow-md"} p-3 whitespace-pre-line text-sm leading-relaxed`}
                      >
                        {msg.text}
                      </div>
                      {msg.options && msg.sender === "bot" && (
                        <div className="mt-2 space-y-2">
                          {msg.options.map((option, idx) => (
                            <motion.button
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              onClick={() => handleSend(option)}
                              className="block w-full text-left px-3 py-2 bg-white border border-blue-200 text-blue-600 rounded-lg text-sm hover:bg-blue-50 hover:border-blue-400 transition-all"
                            >
                              {option}
                            </motion.button>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-gray-400 mt-1">
                        {msg.time.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-end"
                >
                  <div className="bg-blue-100 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    <RiRobot3Fill className="text-blue-600 text-sm" />
                  </div>
                  <div className="bg-white p-3 rounded-tr-2xl rounded-br-2xl rounded-bl-sm shadow-md">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex gap-2 justify-center">
              <a
                href="tel:+919560307098"
                className="flex items-center gap-1 text-xs bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-600 transition-all"
              >
                <BsPhoneFill className="text-xs" /> Call
              </a>
              <a
                href="https://wa.me/919560307098"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs bg-green-600 text-white px-3 py-1.5 rounded-full hover:bg-green-700 transition-all"
              >
                <BsWhatsapp className="text-xs" /> WhatsApp
              </a>
              <a
                href="mailto:info@iioft.co.in"
                className="flex items-center gap-1 text-xs bg-blue-500 text-white px-3 py-1.5 rounded-full hover:bg-blue-600 transition-all"
              >
                <IoMdMail className="text-xs" /> Email
              </a>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2 items-end">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputText.trim()}
                  aria-label="Send message"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
                >
                  <FaPaperPlane className="text-lg" />
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                Powered by IIOFT AI Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function LogoMarquee() {
  return (
    <div className="overflow-hidden py-10 bg-white">
      <motion.div
        className="flex gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={MARQUEE_TRANSITION}
      >
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="logo"
            className="h-16 w-auto object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Hero Component ──────────────────────────────────────────────────────

// AFTER
function SocialButton({ href, icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button
        aria-label={label}
        className="bg-white transition-transform duration-300 hover:scale-150 h-9 w-9 md:h-12 md:w-12 rounded-full flex items-center justify-center"
      >
        {icon}
      </button>
    </a>
  );
}

export default function Hero() {
  const [showMap, setShowMap] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState({
    labs: 0,
    faculty: 0,
    placement: 0,
    students: 0,
  });

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % IMAGES.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        const next = { ...prev };
        let allDone = true;
        for (const key of Object.keys(COUNTER_TARGETS)) {
          if (prev[key] < COUNTER_TARGETS[key]) {
            next[key] = Math.min(
              prev[key] + COUNTER_STEPS[key],
              COUNTER_TARGETS[key],
            );
            allDone = false;
          }
        }
        if (allDone) clearInterval(id);
        return next;
      });
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {/* ── HELMET ── */}
      <Helmet>
        <title>
          IIOFT - International Institute of Futuristic Technology Delhi
        </title>
        <meta
          name="description"
          content="IIOFT Delhi - India's leading futuristic technology institute. Data Science, Web Development, Digital Marketing, Ethical Hacking aur bahut saare courses. 100% Placement Support."
        />
        <meta
          name="keywords"
          content="IIOFT, International Institute of Futuristic Technology, technology institute Delhi, data science Delhi, web development Delhi, digital marketing Delhi, ethical hacking Delhi, best institute Dwarka"
        />
        <meta
          property="og:title"
          content="IIOFT - International Institute of Futuristic Technology Delhi"
        />
        <meta
          property="og:description"
          content="IIOFT Delhi - India's leading futuristic technology institute. 100% Placement Support. Enroll Now!"
        />
        <meta property="og:url" content="https://iioft.co.in" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://iioft.co.in" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <motion.img
          key={index}
          src={IMAGES[index]}
          alt="IIOFT students and campus"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-6 max-w-4xl text-white">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-sm md:text-base text-blue-400 mb-4"
          >
            World's Best Institute
          </motion.h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            International Institute of <br />
            <span className="text-blue-300">Futuristic Technology</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-md">
            <span className="text-red-300">Think</span>{" "}
            <span className="text-yellow-400">Smart</span> |{" "}
            <span className="text-red-300">Learn</span>{" "}
            <span className="text-yellow-400">Smart</span>
            <br />
            <span className="text-yellow-400">Skill Up with </span>
            <span className="text-blue-400 font-bold">IIOFT</span>
          </p>

          {/* <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="course">
              <button className="min-h-12 px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto animate-bounce">
                Explore Courses
              </button>
            </Link>
            <Link to="Enquire">
              <button className="min-h-12 px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto animate-bounce">
                Enquire Now
              </button>
            </Link>
          </div> */}

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/course"
              className="min-h-12 px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto animate-bounce inline-flex items-center justify-center"
            >
              Explore Courses
            </Link>

            <Link
              to="/Enquire"
              className="min-h-12 px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto animate-bounce inline-flex items-center justify-center"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* ── PROS ── */}
      <div className="flex items-center justify-center mt-12 md:mt-16 px-4 text-center">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          The <span className="text-blue-600 font-serif">IIOFT</span> pro's
        </motion.h2>
      </div>
      <div className="py-8 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {PROS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-500 rounded-2xl p-4 md:p-8 shadow-lg text-center hover:scale-105 transition duration-300"
            >
              <div className="text-3xl md:text-5xl mx-auto mb-3 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-base md:text-xl font-bold mb-2 text-black">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── COUNTERS ── */}
      <div className="py-16 md:py-20 mb-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Our Milestones
          </h2>
          <p className="mt-3 text-black max-w-xl mx-auto">
            A quick look at our achievements and growth in numbers.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-blue-600 px-4">
          {COUNTER_LABELS.map(({ key, suffix, label }) => (
            <div key={key}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                {count[key]}
                {suffix}
              </h2>
              <p className="mt-2 text-sm md:text-lg text-black">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HIRING PARTNERS ── */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Hiring Partners
          </h2>
          <p className="text-white mt-4 text-lg">
            Students Placed In Top MNC Companies
          </p>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            {[
              ...PLACEMENT_LOGOS.slice(0, 10),
              ...PLACEMENT_LOGOS.slice(0, 10),
            ].map((logo, i) => (
              <div
                key={i}
                className="min-w-45 bg-black rounded-2xl p-6 flex items-center justify-center shadow-lg"
              >
                <img
                  src={`/${logo}`}
                  alt="company logo"
                  className="h-12 md:h-16 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            {[...PLACEMENT_LOGOS.slice(10), ...PLACEMENT_LOGOS.slice(10)].map(
              (logo, i) => (
                <div
                  key={i}
                  className="min-w-45 bg-black rounded-2xl p-6 flex items-center justify-center shadow-lg"
                >
                  <img
                    src={`/${logo}`}
                    alt="company logo"
                    className="h-12 md:h-16 object-contain"
                  />
                </div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('AB.WebP')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-14">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="flex justify-between items-center p-4 sm:p-6 w-full text-left"
                  onClick={() => toggle(i)}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    {faq.question}
                  </h3>
                  <span className="text-red-600 text-xl font-bold">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* ── FOOTER ── */}
      <div className="bg-blue-600 text-white px-6 md:px-12 lg:px-32 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="w-full lg:max-w-55 lg:shrink-0">
            {/* <img
              className="max-h-12 w-auto object-contain mb-4"
              src="Logo.WebP"
              alt="Logo"
            /> */}
            <img
              className="max-h-12 w-auto object-contain mb-4"
              src="/Logo-175w.WebP"
              srcSet="/Logo-175w.WebP 175w, /Logo-350w.WebP 350w"
              sizes="175px"
              alt="Logo"
              loading="lazy"
              decoding="async"
            />
            <p className="text-sm text-white leading-relaxed">
              International Institute of Futuristic Technology (IIOFT) prepares
              students with practical skills and advanced knowledge.
            </p>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Connect With Us!
              </h2>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((s, i) => (
                  <SocialButton key={i} {...s} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:contents gap-8">
            <div className="lg:shrink-0">
              <h3 className="text-lg font-bold mb-3">
                India-Based. Globally Focused
              </h3>
              <div className="w-8 h-0.5 bg-blue-300 mb-3" />
              <ul className="space-y-1.5">
                {LOCATIONS.map((loc, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-white cursor-pointer hover:text-black transition-colors duration-200"
                    onClick={() => window.open(loc.link, "_blank")}
                  >
                    <FaMapMarkerAlt className="text-blue-300 text-xs mt-1 shrink-0" />{" "}
                    {loc.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:shrink-0">
              <h3 className="text-lg font-bold mb-3">Quick Links</h3>
              <div className="w-8 h-0.5 bg-blue-300 mb-3" />

              <ul className="flex flex-col space-y-1.5">
                {[
                  ["Home", "/"],
                  ["Contact", "/contact"],
                  ["Course", "/course"],
                  ["About", "/about"],
                  ["Know More", "/know-more"],
                ].map(([label, to]) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="flex items-center gap-2 text-sm text-white hover:text-black transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:shrink-0">
              <h3 className="text-lg font-bold mb-3">Contact Us</h3>
              <div className="w-8 h-0.5 bg-blue-300 mb-3" />
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-sm text-white">
                  <FaPhoneAlt className="text-blue-300 shrink-0" /> +91
                  9560307098
                </p>
                <p className="flex items-center gap-2 text-sm text-white">
                  <FaEnvelope className="text-blue-300 shrink-0" />{" "}
                  info@iioft.co.in
                </p>
                <p className="flex items-center gap-2 text-sm text-white">
                  <FaMapMarkerAlt className="text-blue-300 shrink-0" /> India,
                  Dwarka
                </p>
              </div>
              <motion.div
                className="mt-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Link to="Enquire">
                  <button className="w-full sm:w-auto px-6 py-2 border-2 border-white rounded-lg font-semibold text-sm hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Enquire Now →
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-56 lg:shrink-0">
            <img
              src="/Map-364w.avif"
              srcSet="/Map-364w.avif 364w, /Map-728w.avif 728w"
              sizes="(min-width: 1024px) 224px, 364px"
              alt="Global Presence Map"
              onClick={() => setShowMap(true)}
              loading="lazy"
              decoding="async"
              className="w-full lg:w-56 h-auto rounded-xl shadow-lg opacity-90 hover:opacity-100 transition duration-300 cursor-pointer"
            />
          </div>

          {showMap && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <button
                onClick={() => setShowMap(false)}
                className="absolute top-5 right-5 text-white text-3xl font-bold"
              >
                ×
              </button>
              <img
                src="Map.AVIF"
                alt="Map Full View"
                className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* ── FOOTER BOTTOM ── */}
      <footer className="bg-blue-950 mt-6 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Contact Section */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left w-full lg:w-auto">
              <a
                href="tel:+919560307098"
                className="flex items-center gap-2 text-blue-300 hover:text-white text-sm transition-all duration-300 break-all"
              >
                <span className="text-base">📞</span>
                <span>+91 9560307098</span>
              </a>

              <a
                href="mailto:info@iioft.co.in"
                className="flex items-center gap-2 text-blue-300 hover:text-white text-sm transition-all duration-300 break-all"
              >
                <span className="text-base">✉️</span>
                <span className="break-all">info@iioft.co.in</span>
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center items-center gap-3 text-center">
              <Link
                to="/PrivacyPolicy"
                className="text-blue-300 hover:text-white text-sm transition-all duration-300"
              >
                Privacy Policy
              </Link>

              <span className="text-blue-700 hidden sm:block">•</span>

              <Link
                to="/TermsConditions"
                className="text-blue-300 hover:text-white text-sm transition-all duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-5 pt-4 border-t border-blue-900 text-center lg:text-left">
            <p className="text-blue-400 text-xs sm:text-sm leading-relaxed">
              © 2026 IIOFT. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ── CHATBOT ── */}
      <ChatBot />
    </div>
  );
}
