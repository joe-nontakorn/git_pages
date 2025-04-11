function Card({ title, link }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
        {/* แสดง PDF preview */}
        <iframe
          src={link + "#toolbar=0&navpanes=0&scrollbar=0"}
          className="w-full h-64 mb-4 rounded"
        ></iframe>
  
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          เปิดใบประกาศ
        </a>
      </div>
    );
  }
  
  export default Card;
  