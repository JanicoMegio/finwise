import "../assets/styles/loadingScreen.css";
import logo from "../assets/images/Logo.png";

function LoadingScreen() {
  return (
    <div className="loader-container align-items-center justify-content-center">
      <div className="bouncing-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
export default LoadingScreen;
