import React,{ useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Style
import "./NavLink.css";

// Icone
import * as Unicons from "@iconscout/react-unicons";

// Redux
import { useDispatch } from "react-redux";
import { changeCategory } from "../../redux/categoryNews/categoryAction";

const NavLink = () => {

    const [isOpen, setIsOpen] = useState(false)

    const ul = useRef(null)

    const dispatch = useDispatch()

    useEffect(() => {
       const lists = [...ul.current.querySelectorAll('li')]
       lists.forEach(item => {
        item.addEventListener('click' , () => {
            for (let a = 0; a < lists.length; a++) {
                lists[a].classList.remove('active')
                
            }
            item.classList.add('active')
        })
       })

    }, [])

  return (
    <nav className={`navlink ${isOpen && 'open'}`}>
      <div 
        className="btnNavLink" 
        onClick={()=> setIsOpen(isOpen ? false : true)}
      >
      {isOpen ? <Unicons.UilTimes color="red" /> : <Unicons.UilBars color="red" />}
      </div>
      <div className="container">
        <ul ref={ul}>
            <Link onClick={() => dispatch(changeCategory('all'))} to="/all"> <li className="active">all</li> </Link>
            <Link onClick={() => dispatch(changeCategory('business'))} to="/business"> <li>business</li> </Link>
            <Link onClick={() => dispatch(changeCategory('sports'))} to="/sports"> <li>sports</li> </Link>
            <Link onClick={() => dispatch(changeCategory('world'))} to="/world"> <li>world</li> </Link>
            <Link onClick={() => dispatch(changeCategory('politics'))} to="/politics"> <li>politics</li> </Link>
            <Link onClick={() => dispatch(changeCategory('technology'))} to="/technology"> <li>technology</li> </Link>
            <Link onClick={() => dispatch(changeCategory('startup'))} to="/startup"> <li>startup</li> </Link>
            <Link onClick={() => dispatch(changeCategory('entertainment'))} to="/entertainment"> <li>entertainment</li> </Link>
            <Link onClick={() => dispatch(changeCategory('miscellaneous'))} to="/miscellaneous"> <li>miscellaneous</li> </Link>
            <Link onClick={() => dispatch(changeCategory('hatke'))} to="/hatke"> <li>hatke</li> </Link>
            <Link onClick={() => dispatch(changeCategory('science'))} to="/science"> <li>science</li> </Link>
            <Link onClick={() => dispatch(changeCategory('automobile'))} to="/automobile"> <li>automobile</li> </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavLink;
