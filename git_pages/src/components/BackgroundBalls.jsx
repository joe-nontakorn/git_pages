// src/components/BackgroundBalls.jsx
function BackgroundBalls() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="ball" style={{ top: "20%", left: "10%", width: "180px", height: "180px" }}></div>
      <div className="ball" style={{ top: "60%", left: "25%", width: "200px", height: "200px" }}></div>
      <div className="ball" style={{ top: "40%", left: "70%", width: "150px", height: "150px" }}></div>


    </div>
  );
}

export default BackgroundBalls;
