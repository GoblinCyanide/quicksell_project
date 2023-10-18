import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setGroup, setOrder }) => {
    const [toggleOptions, settoggleOptions] = useState(false);
    const menuReference = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuReference.current && !menuReference.current.contains(event.target)) {
                settoggleOptions(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const toggleMenu = (e) => {
        e.stopPropagation();
        settoggleOptions((prev) => !prev);
    };
    return (
        <>
            <div className="navbar">
                <div className="display" onClick={toggleMenu}>
                    <div className="main-display">
                        <FontAwesomeIcon icon={faSliders} style={{ color: "#363a3f" }} />
                        <div className="text">Display</div>
                        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#6a717c" }} />
                    </div>
                </div>
            </div>
            {toggleOptions && (
                <div className="menu" ref={menuReference}>
                    <div className="element">
                        <span className="category">Grouping</span>
                        <select className="select" onChange={e => setGroup(e.target.value)}>
                            <option id="status" value="status">Status</option>
                            <option id="User" value="user">User</option>
                            <option id="priority" value="priority">Priority</option>
                        </select>
                    </div>
                    <div className="element">
                        <span className="category">Ordering</span>
                        <select className="select" onChange={e => setOrder(e.target.value)}>
                            <option id="priority" value="priority">Priority</option>
                            <option id="title" value="title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </>
    );
};
export default Navbar;
