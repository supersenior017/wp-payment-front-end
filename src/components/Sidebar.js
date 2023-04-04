import React from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setOpen }) => {
    const navigate = useNavigate();
    const handWithdraw = (url) => {
        navigate(url);
    }

    return (
        <div className="sidebar-container">
            <Fade>
                <div className="sidebar-wrapper menu-size" style={{ width: "230px" }}>
                    <div className="pt-3">

                        <div className="page-title sidebar-title d-flex">
                            <div>
                                <div className="text-center"><h6>Username</h6></div>
                                <div className="font-sm text-center"><h6>$123.45</h6></div>
                            </div>
                            <div className="align-self-center ms-auto">
                                <div
                                    data-bs-toggle="dropdown"
                                    className="icon gradient-blue shadow-bg shadow-bg-s rounded-m"
                                    onClick={() => setOpen(false)}
                                >
                                    <i className="fa fa-close color-white"></i>
                                </div>
                            </div>
                        </div>

                        <div className="divider divider-margins mb-3 opacity-50"></div>

                        <div className="list-group list-custom list-menu-large">
                            <a id="nav-welcome" className="list-group-item">
                                <i className="fa bg-red-dark shadow-bg shadow-bg-xs fa-heart-fill">
                                    <i className="-ml-15 fa fa-credit-card color-white"></i>
                                </i>
                                <div onClick={
                                    () => {
                                        handWithdraw("/deposit");
                                        setOpen(false)
                                    }
                                }>Deposit</div>
                                <i className="fa fa-chevron-right"></i>
                            </a>
                            <a id="nav-pages" className="list-group-item">
                                <i className="fa bg-green-dark shadow-bg shadow-bg-xs bi-star-fill">
                                    <i className="-ml-15 fa fa-money color-white"></i>
                                </i>
                                <div
                                    onClick={
                                        () => {
                                            handWithdraw("/withdraw");
                                            setOpen(false)
                                        }
                                    }
                                >Withdraw</div>
                                <i className="fa fa-chevron-right"></i>
                            </a>
                            <a id="nav-homes" data-submenu="sub1" className="list-group-item">
                                <i className="fa bg-blue-dark shadow-bg shadow-bg-xs bi-house-fill">
                                    <i className="-ml-15 fa fa-line-chart color-white"></i>
                                </i>
                                <div
                                    onClick={
                                        () => {
                                            handWithdraw("/promotions");
                                            setOpen(false)
                                        }
                                    }
                                >Promotions</div>
                                <i className="fa fa-chevron-right"></i>
                            </a>
                            <a id="nav-comps" className="list-group-item">
                                <i className="fa bg-brown-dark shadow-bg shadow-bg-xs bi-gear-wide-connected">
                                    <i className="-ml-15 fa fa-history color-white"></i>
                                </i>
                                <div
                                    onClick={
                                        () => {
                                            handWithdraw("/txhistory");
                                            setOpen(false)
                                        }
                                    }
                                >Transaction History</div>
                                <i className="fa fa-chevron-right"></i>
                            </a>
                            <a data-bs-toggle="offcanvas" data-bs-target="#menu-highlights" className="list-group-item">
                                <i className="fa bg-magenta-dark shadow-bg shadow-bg-xs bi-droplet">
                                    <i className="-ml-15 fa fa-history color-white"></i>
                                </i>
                                <div
                                    onClick={
                                        () => {
                                            handWithdraw("/bethistory");
                                            setOpen(false)
                                        }
                                    }
                                >Bet History</div>
                                <i className="fa fa-chevron-right"></i>
                            </a>
                            <a id="nav-homes" data-submenu="sub1" className="list-group-item">
                                <i className="fa bg-blue-dark shadow-bg shadow-bg-xs bi-house-fill">
                                    <i className="-ml-15 fa fa-address-book color-white"></i>
                                </i>
                                <div
                                    onClick={
                                        () => {
                                            handWithdraw("/account");
                                            setOpen(false)
                                        }
                                    }
                                >Account</div>
                                <i className="fa fa-chevron-right"></i>
                            </a>

                            <a className="list-group-item" data-toggle-theme data-trigger-switch="switch-1">
                                <i className="fa bg-yellow-dark shadow-bg shadow-bg-xs bi-lightbulb-fill">
                                <i className="-ml-15 fa fa-adjust color-white"></i>
                                </i>
                                <div>Dark Mode</div>
                                <div className="form-switch ios-switch switch-green switch-s me-2">
                                    <input type="checkbox" data-toggle-theme className="ios-input" id="switch-1" />
                                    <label className="custom-control-label" for="switch-1"></label>
                                </div>
                            </a>
                        </div>

                        <div className="divider divider-margins mb-3 opacity-50"></div>

                        <div>
                            <div className="text-center">Log Out</div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Sidebar;
