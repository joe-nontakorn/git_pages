import "../assets/styles/Header.css"; 
function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">My Portfolio</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">หน้าแรก</a></li>
            <li><a href="#about" className="nav-link">ประวัติ</a></li>
            <li><a href="#skills" className="nav-link">ทักษะ</a></li>
            <li><a href="#certificates" className="nav-link">ใบรับรอง</a></li>
            <li><a href="#contact" className="nav-link">ติดต่อ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
