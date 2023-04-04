import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";


const Header = ({ setOpen, open }) => {
    const navigate = useNavigate();
    const clickNotification = () => {
        navigate("/notification");
    }

    return (
        <div className="pt-2 w-100">
            <div className="main-header">
                <nav className="d-flex justify-content-between navbar-wrapper navbar navbar-expand-lg align-items-center">
                    <button
                        className="d-flex nav-button navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setOpen(true)}
                    >
                        {/* <span className="navbar-toggler-icon"> */}
                        <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-sidebar"
                            className="icon icon-xs gradient-highlight color-white shadow-bg shadow-bg-xs rounded-m">
                            <i className="fa fa-bars"></i>
                        </a>
                    </button>

                    <div className="d-flex">
                        <div>
                            <div className="text-end"><h6>Username</h6></div>
                            <div className="font-sm text-end"><h6>$123.45</h6></div>
                        </div>
                        <button
                            className="d-flex nav-button navbar-toggler"
                            type="button"
                            onClick={clickNotification}
                        >
                            <a href="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#menu-notifications"
                                className="icon icon-xs gradient-blue color-white shadow-bg shadow-bg-xs rounded-m">
                                <i className="fa fa-bell-o"></i>
                                <em className="badge bg-red-dark color-white scale-box">3</em>
                            </a>
                            {/* </span> */}
                        </button>
                    </div>


                </nav>
            </div>
            {open &&
                <Sidebar setOpen={setOpen} />
            }
        </div>
    );
};

export default Header;
