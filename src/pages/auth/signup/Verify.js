import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Verify = () => {
    const length = 4;
    const [code, setCode] = useState([...Array(length)].map(() => ""));
    const inputs = useRef([]);

    const navigate = useNavigate();
    const handWithdraw = (url) => {
        navigate(url);
    }

    const processInput = (e, slot) => {
        const num = e.target.value;
        if (/[^0-9]/.test(num)) return;
        const newCode = [...code];
        newCode[slot] = num;
        setCode(newCode);
        if (slot !== length - 1) {
            inputs.current[slot + 1].focus();
        }
    };

    const onKeyUp = (e, slot) => {
        if (e.keyCode === 8 && !code[slot] && slot !== 0) {
            const newCode = [...code];
            newCode[slot - 1] = "";
            setCode(newCode);
            inputs.current[slot - 1].focus();
        }
    };

    return (
        <div className="">
            <div className="pt-200">
                <div className="code-inputs d-flex justify-content-between">
                    {code.map((num, idx) => {
                        return (
                            <div
                                key={idx}
                            >
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    className="form-control rounded-xs verify-code"
                                    value={num}
                                    maxLength={1}
                                    autoFocus={!code[0].length && idx === 0}
                                    onChange={e => processInput(e, idx)}
                                    onKeyUp={e => onKeyUp(e, idx)}
                                    ref={ref => inputs.current.push(ref)}
                                    id="c3"
                                    required
                                />
                            </div>
                        );
                    })}
                </div>
                <button className="btn btn-full bg-blue-dark rounded-xs text-uppercase font-700 w-100 btn-s mt-4" onClick={() => handWithdraw("/save")}>
                    Verify
                </button>
            </div>
        </div>
    );
};

export default Verify;
