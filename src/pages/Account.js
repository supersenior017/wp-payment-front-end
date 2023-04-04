import Whatsapp from "../components/Whatsapp";

const Account = () => {

    return (
        <div className="">
            <form className="pt-80 demo-animation needs-validation" noValidate>

                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-person-circle font-14"></i>
                    <input type="text" className="form-control rounded-xs" id="c1" placeholder="Full Name" pattern="[A-Za-z ]{1,32}" readOnly required />
                    <label htmlFor="c1" className="color-theme">Your Name</label>
                    <div className="valid-feedback">Excellent!</div>
                    <div className="invalid-feedback">Name is Missing or Invalid</div>
                    <span>(required)</span>
                </div>
                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-person-circle font-14"></i>
                    <input type="text" className="form-control rounded-xs" id="c1" placeholder="Bank" pattern="[A-Za-z ]{1,32}" readOnly required />
                    <label htmlFor="c1" className="color-theme">Your Name</label>
                    <div className="valid-feedback">Excellent!</div>
                    <div className="invalid-feedback">Name is Missing or Invalid</div>
                    <span>(required)</span>
                </div>
                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-telephone-fill font-12"></i>
                    <input type="tel" className="form-control rounded-xs" id="c3" placeholder="Bank Account" pattern="[+ 0-9]{10,15}" readOnly required />
                    <label htmlFor="c3" className="color-theme">Your Phone</label>
                    <div className="valid-feedback">Phone Number looks good!</div>
                    <div className="invalid-feedback">Phone Number is missing or is invalid.</div>
                    <span>(required)</span>
                </div>
                <div className="text-center">Remarks: For security purposes, please contact us to modify any of information above</div>
            </form>
            <Whatsapp />
        </div>
    );
};

export default Account;
