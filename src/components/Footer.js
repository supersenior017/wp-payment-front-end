import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const handWithdraw = (url) => {
        navigate(url);
    }

    return (
        <div className="pt-2 w-100">
            <div id="footer-bar" className="footer-bar-1 footer-bar-detached">
                <a className="col-2" onClick={() => handWithdraw("/deposit")}><i className="fa fa-credit-card"></i>
                    <span>Deposit</span>
                </a>
                <a className="col-2" onClick={() => handWithdraw("/withdraw")}><i className="fa fa-money">
                </i><span>Withdraw</span>
                </a>
                <a className="col-2 circle-nav-2" onClick={() => handWithdraw("/")}>
                    <i className="fa fa-home"></i>
                    <span>Home</span>
                </a>
                <a className="col-2">
                    <i className="fa fa-line-chart" onClick={() => handWithdraw("/promotions")}>
                    </i>
                    <span>Promo</span>
                </a>
                <a className="col-2" data-bs-toggle="offcanvas" data-bs-target="#menu-sidebar" onClick={() => handWithdraw("/rebate")}>
                    <i className="fa fa-ellipsis-h">
                    </i><span>Rebate</span>
                </a>
            </div>

            {/* <div onClick={() => handWithdraw("/deposit")}>
                    <i className="fa fa-credit-card"></i><span>Deposit</span>
                </div>
                <div onClick={() => handWithdraw("/withdraw")}>
                    <i className="fa fa-money"></i><span>Withdraw</span>
                </div>
                <div className="circle-nav-2" onClick={() => handWithdraw("/")}>
                    <i className="fa fa-home"></i><span>Home</span>
                </div>
                <div onClick={() => handWithdraw("/promotions")}>
                    <i className="fa fa-line-chart"></i><span>Promo</span>
                </div>
                <div data-bs-toggle="offcanvas" data-bs-target="#menu-sidebar" onClick={() => handWithdraw("/")}>
                    <i className="fa fa-ellipsis-h"></i><span>Rebate</span>
                </div> */}
        </div>
    );
};

export default Footer;
