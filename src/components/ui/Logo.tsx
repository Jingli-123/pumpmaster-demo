/**
 * @description: This is the logo component which is used to display the logo of the website
 * @param logoSize: The size of the logo
 * @param logoImage: The image of the logo
 * @param className: Tailwind styles
 * @param navigation: The navigation of the logo
 * @param fontWeight: The font weight of the logo text
 * @param textColor: The color of the logo text
 * @param flexDirection: The flex direction of the logo
 * @returns: The logo component
 */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  logoImage: string;
  logoSize: number;
  navigation: string;
  fontFamily?: string;
  fontWeight?: string;
  textColor?: string;
  flexDirection?: "row" | "column";
}

const Logo = ({
  navigation,
  logoImage,
  logoSize,
  fontFamily,
  fontWeight,
  textColor,
  flexDirection,
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
    <div className={`flex ${flexDirection === "column" ? "flex-col" : "flex-row"} items-start justify-start m-2`}>
      <a
        href={navigation}
        onClick={handleClick}
        className={`decoration-none flex items-center justify-center text-black
          no-underline`}
      >
        <img
          src={`${logoImage}`}
          alt="logo"
          className={`w-${logoSize} h-${logoSize} ${textColor}`}
        />
        <span
        className={`${fontFamily} ${fontWeight}  decoration-none ml-2`}
        >
          PumpMaster
        </span>
      </a>
    </div>
  );
};

export default Logo;