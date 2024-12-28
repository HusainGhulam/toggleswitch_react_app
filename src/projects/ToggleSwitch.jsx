import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { GiSwitchblade } from "react-icons/gi";

export const ToggleSwitch = () => {
  const [isOn, setIson] = useState(true);

  const handleToggleSwitch = () =>setIson(!isOn);
  
  const isOnColor = isOn ? "on" : "off";
  const backgroundColor = { backgroundColor: isOn ? "#4caf50" : "#f44336" };

  return (
    <>
     <h1 style={{color:"red",textAlign:"center"}}>This is Toogle icon <IoIosSwitch />
      <GiSwitchblade style={{color:"green",textAlign:"center"}}/>
      </h1>
      <div
        className="toggle-switch"
        style={backgroundColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${isOnColor}`}>
          <span className="switch-state">{isOnColor}</span>
        </div>
      </div>
    </>
  );
};
