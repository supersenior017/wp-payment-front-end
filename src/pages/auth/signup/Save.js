import { useNavigate } from "react-router-dom";

const Save = () => {

    const navigate = useNavigate();
    const handWithdraw = (url) => {
        navigate(url);
    }

    return (
        <div className="">
            <form className="pt-80 demo-animation needs-validation" noValidate>
                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-check-circle font-13"></i>
                    <select
                        className="form-select rounded-xs"
                        id="c6"
                        aria-label="Floating label select example"
                        value={0}
                    >
                        <option value="0">Select a Bank</option>
                        <option value="1">Bank 1</option>
                        <option value="2">Bank 2</option>
                        <option value="3">Bank 3</option>
                    </select>
                    <label htmlFor="c6" className="color-theme">Select an Option</label>
                    <div className="valid-feedback">HTML5 does not offer Dates Field Validation!</div>
                </div>
                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-person-circle font-14"></i>
                    <input type="text" className="form-control rounded-xs" id="c1" placeholder="Full Name" pattern="[A-Za-z ]{1,32}" required />
                    <label htmlFor="c1" className="color-theme">Your Name</label>
                    <div className="valid-feedback">Excellent!</div>
                    <div className="invalid-feedback">Name is Missing or Invalid</div>
                    <span>(required)</span>
                </div>
                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-telephone-fill font-12"></i>
                    <input type="tel" className="form-control rounded-xs" id="c3" placeholder="Bank Account Number" pattern="[+ 0-9]{10,15}" required />
                    <label htmlFor="c3" className="color-theme">Your Phone</label>
                    <div className="valid-feedback">Phone Number looks good!</div>
                    <div className="invalid-feedback">Phone Number is missing or is invalid.</div>
                    <span>(required)</span>
                </div>
                <button className="btn btn-full bg-blue-dark rounded-xs text-uppercase font-700 w-100 btn-s mt-4" onClick={() => handWithdraw("/")}>
                    Save & Continue
                </button>
            </form>
        </div>
    );
};

export default Save;
