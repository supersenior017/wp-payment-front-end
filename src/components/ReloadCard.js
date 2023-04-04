import { useState } from "react";

const amountlist = [
    { id: 1, value: "TnG" },
    { id: 2, value: "DiGi" },
    { id: 3, value: "Maxis" },
    { id: 4, value: "Umobile" },
    { id: 5, value: "Celcom" },
];

const ReloadCard = () => {
    const [amount, setAmount] = useState(1);

    return (
        <div className="">
            <div className="pt-3 mt-4 form-custom form-label form-icon mb-3">
                <i className="fa fa-telephone-fill font-12"></i>
                <input type="tel" className="form-control rounded-xs" id="c3" placeholder="Amount" pattern="[+ 0-9]{10,15}" required />
                <label htmlFor="c3" className="color-theme">Your Phone</label>
                <div className="valid-feedback">Phone Number looks good!</div>
                <div className="invalid-feedback">Phone Number is missing or is invalid.</div>
                <span>(required)</span>
            </div>

            <div className="row  d-flex text-center justify-content-between my-3">
                {amountlist.map((item) => (
                    <div className="reload-selet-item" key={item.id}>
                        <div
                            className={`p-2 shadow-bg shadow-bg-s rounded-xs ${amount === item.id ? 'border color-highlight' : 'bg-highlight'}`}
                            onClick={() => setAmount(item.id)}
                        >
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>

            <div className="form-custom form-label form-icon mb-3">
                <i className="fa fa-person-circle font-14"></i>
                <input type="text" className="form-control rounded-xs" id="c1" placeholder="Number" pattern="{1,32}" required />
                <label htmlFor="c1" className="color-theme">Your Name</label>
                <div className="valid-feedback">Excellent!</div>
                <div className="invalid-feedback">Name is Missing or Invalid</div>
                <span>(required)</span>
            </div>

            <button className="btn btn-full bg-blue-dark rounded-xs text-uppercase font-700 w-100 btn-s mt-4" type="submit">
                Deposit
            </button>
        </div>
    );
};

export default ReloadCard;
