import React from "react";

// Reducer
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../redux/mode/modeAction";

// Icone
import * as Unicons from "@iconscout/react-unicons";

// Style
import './Header.css'


const Header = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.modeState.mode)

  return (
    <header className="header">
      <div className="container">
        <h1 to="/all" className="title">
          News W<Unicons.UilGlobe color="red" />rld
        </h1>
        <button className="btn btnChangeMode" onClick={()=> dispatch(changeMode())}>
            {state === 'light' ? <Unicons.UilMoon /> : <Unicons.UilBrightness />}
        </button>
      </div>
    </header>
  );
};

export default Header;

//Brightness