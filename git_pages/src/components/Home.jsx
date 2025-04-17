/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "../assets/styles/Home.css";
import Card from "./Card";

function Home() {
  const fullText = "  hello world!";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
        // เคอร์เซอร์กระพริบ
        setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
      }
    }, 150); // ความเร็วพิมพ์

    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="home-section">
      <h1 className="text-orange-100 text-lg md:text-2xl lg:text-3xl font-bold font-8bit">
        {text}
        <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
          _
        </span>
      </h1>{" "}
      {/* <p className="dev-p">Dev / IT Engineer</p> */}
      <br />
      <br />
      {/* 🔧 Container กำหนด layout แนวนอน */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
        {/* 🟠 Card ซ้าย: รูปโปรไฟล์ */}
        {/* 👈 Card ซ้าย: รูป */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="w-[320px] h-[520px]">
            {/* 👇 Animate เฉพาะเนื้อหาภายใน */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }} // 👈 delay ให้เริ่มหลังการ slide เข้ามา
              className="flex flex-col items-center justify-start h-full pt-4"
            >
              <div className="w-44 h-44 mb-4 rounded-full overflow-hidden border-4 border-orange-500">
                <img
                  src="/me/65887.jpg"
                  alt="รูปโปรไฟล์"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Nontakorn Khanaphol
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1 text-center">
                Dev / IT Engineer <br />
                Age : 26 years old <br />
                Tel : 090-9319022 <br />
                Email : nontakorn.joe01@gmail.com
              </p>
            </motion.div>
          </Card>
        </motion.div>

        {/* 👈 Card ขวา: เนื้อหา */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <Card className="w-[840px] h-[520px] flex flex-col justify-start items-start p-6 animate-float-up">
          <div className="text-gray-800 dark:text-gray-200 space-y-2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }} // 👈 delay ให้เริ่มหลังการ slide เข้ามา
            >
              <p className="mb-1">Hello There!</p> <br />
              <h1 className="text-4xl font-semibold">
                I'm Nontakorn Khanaphol, an IT engineer specializing in
                infrastructure systems.
              </h1>
              <br />
              <p>
                I have a strong interest in cloud computing, DevOps, and backend
                development.
              </p>
            </motion.div>
          </div>
        </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
