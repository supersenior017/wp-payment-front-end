const Withdraw = () => {

    return (
        <div className="">
            <form className="pt-80 demo-animation needs-validation m-0" noValidate>
                <div className="pt-3 mt-4 form-custom form-label form-icon mb-3">
                    <i className="fa fa-telephone-fill font-12"></i>
                    <input type="tel" className="form-control rounded-xs" id="c3" placeholder="Amount" pattern="[+ 0-9]{10,15}" required />
                    <label htmlFor="c3" className="color-theme">Your Phone</label>
                    <div className="valid-feedback">Phone Number looks good!</div>
                    <div className="invalid-feedback">Phone Number is missing or is invalid.</div>
                    <span>(required)</span>
                </div>

                <button className="btn btn-full bg-blue-dark rounded-xs text-uppercase font-700 w-100 btn-s mt-4" type="submit">Withdraw</button>
            </form>
        </div>
    );
};

export default Withdraw;
