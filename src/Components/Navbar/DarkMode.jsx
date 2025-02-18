import React from "react";
import lightPng from "../../assets/light.png";
import darkPng from "../../assets/dark.png";
import { MdToggleOff,MdToggleOn  } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement; //html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <MdToggleOff 
       
        alt="lightMode"
        onClick={()=>setTheme(theme==='light'? 'dark':'light')}
        className={`text-5xl text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme ==='dark' ? 'opacity-0':'opacity-100'}`}
      />
      <MdToggleOn 
        alt="darkmode"
        onClick={()=>setTheme(theme==='light'? 'dark':'light')}
        className="text-5xl text-black drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
