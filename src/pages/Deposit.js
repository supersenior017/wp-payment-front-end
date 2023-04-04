import React, { useState } from "react";
import Online from "../components/Online";
import PaymentGateway from "../components/PaymentGateway";
import ReloadCard from "../components/ReloadCard";
import Whatsapp from "../components/Whatsapp";


const Deposit = () => {

    const tablist = [
        { id: 1, name: "Payment Gateway" },
        { id: 2, name: "Reload Card" },
        { id: 3, name: "Online Transfer" },
    ];

    const [payMethod, setPayMethod] = useState(3);

    return (
        <div className="">
            <div className="card card-style">
                <div className="content mt-3">
                    <div className="tabs tabs-pill" id="tab-group-2">
                        <div className="tab-controls rounded-m p-1">
                            {
                                tablist.map((tab, index) => (
                                    <a
                                        className="font-12 rounded-m"
                                        data-bs-toggle="collapse"
                                        href="#tab-1"
                                        key={index}
                                        aria-expanded={payMethod === tab.id ? true : false}
                                        onClick={() => setPayMethod(tab.id)}
                                    >
                                        {tab.name}
                                    </a>
                                ))
                            }
                        </div>
                        <div className="mt-3"></div>
                        {payMethod === 3 && <Online />}
                        {payMethod === 2 && <ReloadCard />}
                        {payMethod === 1 && <PaymentGateway />}
                    </div>
                </div>
            </div>
            <Whatsapp />
        </div>
    );
};

export default Deposit;
