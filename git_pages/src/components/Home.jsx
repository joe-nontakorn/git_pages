import { useState, useEffect } from "react";

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
      {/* 🔧 Container กำหนด layout แนวนอน */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
        {/* 🟠 Card ซ้าย: รูปโปรไฟล์ */}
        <Card className="w-[320px] h-[520px] mr-auto ml-0">
          <div className="flex flex-col items-center justify-start h-full pt-2">
            {" "}
            {/* <-- ใช้ justify-start และ pt-2 */}
            <div className="w-50 h-50 mb-4 rounded-full overflow-hidden border-4 border-orange-500">
              <img
                src="/me/65887.jpg"
                alt="รูปโปรไฟล์"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Nontakotn Khanaphol
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Dev / IT Engineer
            </p>
          </div>
        </Card>

        {/* 🟦 Card ขวา: เนื้อหาแนะนำตัว */}
        <Card className="w-[840px] h-[520px]">
          <div className="h-full flex flex-col justify-center text-gray-800 dark:text-gray-200">
            <h2 className="text-xl font-semibold mb-2">👋 แนะนำตัว</h2>
            <p className="mb-2">
              ผมมีประสบการณ์ในการพัฒนาและดูแลระบบ IT Infrastructure, ระบบ
              Monitoring, และ DevOps Pipeline โดยใช้เครื่องมือสมัยใหม่เช่น
              Docker, Kubernetes, GitLab CI/CD และ AWS
            </p>
            <p>
              ผมชื่นชอบการออกแบบ UI/UX ที่เรียบง่ายแต่ใช้งานได้จริง
              และสามารถพัฒนาได้ทั้ง Frontend และ Backend ด้วย React, Node.js และ
              MongoDB
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Home;
