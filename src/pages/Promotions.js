const Promotions = () => {

    return (
        <div className="">
            <form className="pt-80 demo-animation needs-validation m-0" noValidate>
                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-person-circle font-14"></i>
                    <input type="text" className="form-control rounded-xs" id="c1" placeholder="Promotion 1" pattern="[A-Za-z ]{1,32}" required />
                    <label htmlFor="c1" className="color-theme">Your Name</label>
                    <div className="valid-feedback">Excellent!</div>
                    <div className="invalid-feedback">Name is Missing or Invalid</div>
                    <span>(required)</span>
                </div>

                <button className="btn btn-full bg-blue-dark rounded-xs text-uppercase font-700 w-100 btn-s mt-4" type="submit">Claim</button>

                <div className="pt-3 form-custom form-label form-icon mb-3">
                    <i className="fa fa-person-circle font-14"></i>
                    <input type="text" className="form-control rounded-xs" id="c1" placeholder="Promotion 2" pattern="[A-Za-z ]{1,32}" required />
                    <label htmlFor="c1" className="color-theme">Your Name</label>
                    <div className="valid-feedback">Excellent!</div>
                    <div className="invalid-feedback">Name is Missing or Invalid</div>
                    <span>(required)</span>
                </div>

                <button className="btn btn-full bg-blue-dark rounded-xs text-uppercase font-700 w-100 btn-s mt-4" type="submit">Claim</button>
            </form>
        </div>
    );
};

export default Promotions;
