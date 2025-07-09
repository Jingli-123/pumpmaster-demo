/**
 * @description: This is the logo component which is used to display the logo of the website
 * @param logoSize: The size of the logo
 * @param fontSize: The size of the font
 * @param fontFamily: The font family of the font
 * @param className: The class name of the logo
 */
import React from "react";
import logoImage from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  logoSize: number;
  fontSize: number;
  fontFamily: string;
  className?: string; 
  navigation: string;
  fontWeight?: string;
  textColor?: string;
  flexDirection?: "row" | "column";
  responsiveDisplay?: string; 
}

const Logo = ({
  logoSize,
  fontSize,
  fontFamily,
  className = "", 
  navigation,
  fontWeight,
  flexDirection = "column",
  responsiveDisplay = "flex md:hidden 2xl:flex", 
}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    if (location.pathname === navigation) {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home page
      navigate(navigation);
    }
  };

  return (
    <div className={className}>
      <a
        href={navigation}
        onClick={handleClick}
        className="flex items-center justify-center text-decoration-none"
        style={{ flexDirection: flexDirection }}
      >
        <img
          src={logoImage}
          alt="logo"
          style={{ height: `${logoSize}px`, width: `${logoSize}px` }}
        />
        <span
          style={{
            fontSize: `${fontSize}px`,
            fontFamily: `${fontFamily}`,
            fontWeight: fontWeight || "bold",
            marginLeft: flexDirection === "row" ? "20px" : "0",
            marginTop: flexDirection === "column" ? "10px" : "0",
          }}
          className={`${responsiveDisplay} text-decoration-none  `} 
        >
          PumpMaster
        </span>
      </a>
    </div>
  );
};

export default Logo;