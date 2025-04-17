import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
//   const [sent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l4qrhcj",     // 👈 ใส่ของคุณ
        "template_wqf05yc",    // 👈 ใส่ของคุณ
        form.current,
        "_h91faZIPzhNjdv6i"      // 👈 ใส่ของคุณ
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
  
          // ✅ แสดง alert
          alert("ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่ติดต่อ!");
  
          // ✅ เคลียร์ค่าทั้งหมดในฟอร์ม
          form.current.reset();
        },
        (error) => {
          console.log("❌ ส่งไม่สำเร็จ:", error.text);
          alert("เกิดข้อผิดพลาดในการส่ง กรุณาลองใหม่อีกครั้ง");
        }
      );
  };

  return (
    <section id="contact" className=" text-gray-800 dark:text-white scroll-mt-24">
      <h2 className="text-3xl font-bold text-center mb-8">ติดต่อฉัน</h2>

      {/* ข้อมูลติดต่อ */}
      <div className="max-w-2xl mx-auto mb-8 text-center space-y-2">
        <p>👤 <strong>นนกร คณะพล</strong></p>
        <p>📞 <strong>090-931-9022</strong></p>
        <p>📧 <strong>nontakorn.joe91@gmail.com</strong></p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">

        {/* ⏰ Hidden field สำหรับเวลา */}
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString("th-TH", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        />

        {/* 👤 ชื่อ */}
        <div>
          <label htmlFor="user_name" className="block mb-1 font-medium">ชื่อ</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
          />
        </div>

        {/* 📧 อีเมล */}
        <div>
          <label htmlFor="user_email" className="block mb-1 font-medium">อีเมล</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
          />
        </div>

        {/* 💬 ข้อความ */}
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">ข้อความ</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
          />
        </div>

        {/* 🚀 ปุ่มส่ง */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          ส่งข้อความ
        </button>
      </form>
    </section>
  );
}

export default Contact;