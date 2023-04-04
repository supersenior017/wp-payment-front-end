import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const Whatsapp = () => {
    return (
        <div className="whatsapp-wrap">
            <div className="whatsapp-content">
                <FloatingWhatsApp phoneNumber="+8163727479" />
            </div>
        </div>
    );
};

export default Whatsapp;
