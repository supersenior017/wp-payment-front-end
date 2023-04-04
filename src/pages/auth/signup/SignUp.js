import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const handWithdraw = (url) => {
        navigate(url);
    }

    return (
        <div className="">
            <div className="page-content footer-clear">

                <div className="card card-style">
                    <div className="content">
                        <h1 className="mb-0 pt-2">Sign Up</h1>
                        <p>
                            Create a PayApp Account
                        </p>
                        <br />
                        <div className="form-custom form-label form-border form-icon mb-3 bg-transparent">
                            <i className="fa fa-user-circle-o font-13"></i>
                            <input type="text" className="form-control rounded-xs" id="c1" placeholder="Username" />
                            <label htmlFor="c1" className="color-theme">Username</label>
                            <span>(required)</span>
                        </div>
                        <div className="form-custom form-label form-border form-icon mb-3 bg-transparent">
                            <i className="fa fa-asterisk font-13"></i>
                            <input type="password" className="form-control rounded-xs" id="c2" placeholder="Password" />
                            <label htmlFor="c2" className="color-theme">Password</label>
                            <span>(required)</span>
                        </div>
                        <div className="form-custom form-label form-border form-icon mb-4 bg-transparent">
                            <i className="fa fa-asterisk font-13"></i>
                            <input type="password" className="form-control rounded-xs" id="c3" placeholder="Confirm Password" />
                            <label htmlFor="c3" className="color-theme">Confirm Password</label>
                            <span>(required)</span>
                        </div>
                        <div className="form-check form-check-custom">
                            <input className="form-check-input" type="checkbox" name="type" value="" id="c2a" />
                                <label className="form-check-label font-12" htmlFor="c2a">I agree with the <a href="/">Terms and Conditions</a>.</label>
                                <i className="is-checked color-highlight font-13 fa fa-circle-o"></i>
                                <i className="is-unchecked color-highlight font-13 fa fa-circle"></i>
                        </div>
                        <a href="/" className="w-100 btn btn-full gradient-highlight shadow-bg shadow-bg-s mt-4" onClick={() => handWithdraw("/verify")}>Next</a>
                        <div className="row">
                            <div className="col-6 text-start">
                                <a href="/" className="font-11 color-theme opacity-40 pt-4 d-block">Forgot Password?</a>
                            </div>
                            <div className="col-6 text-end">
                                <a href="/" className="font-11 color-theme opacity-40 pt-4 d-block">Sign In Account</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <form className="pt-80 demo-animation needs-validation" noValidate>
                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-person-circle font-14"></i>
                    <input type="text" className="form-control rounded-xs" id="c1" placeholder="Username" pattern="[A-Za-z ]{1,32}" required />
                    <label htmlFor="c1" className="color-theme">Your Name</label>
                    <div className="valid-feedback">Excellent!</div>
                    <div className="invalid-feedback">Name is Missing or Invalid</div>
                    <span>(required)</span>
                </div>
                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-asterisk font-12"></i>
                    <input type="password" className="form-control rounded-xs" id="c2a" placeholder="Password" pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\S{8,}" required />
                    <label htmlFor="c2a" className="color-theme">Your Password</label>
                    <div className="valid-feedback">Password address looks good!</div>
                    <div className="invalid-feedback">Minumum 8 characters, 1 Number and 1 Capital Letter.</div>
                    <span>(required)</span>
                </div>
                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-asterisk font-12"></i>
                    <input type="password" className="form-control rounded-xs" id="c2a" placeholder="Confirm Password" pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\S{8,}" required />
                    <label htmlFor="c2a" className="color-theme">Your Password</label>
                    <div className="valid-feedback">Password address looks good!</div>
                    <div className="invalid-feedback">Minumum 8 characters, 1 Number and 1 Capital Letter.</div>
                    <span>(required)</span>
                </div>
                <div className="form-custom form-label form-icon mb-3">
                    <i className="fa fa-telephone-fill font-12"></i>
                    <input type="tel" className="form-control rounded-xs" id="c3" placeholder="+1 234 567 315" pattern="[+ 0-9]{10,15}" required />
                    <label htmlFor="c3" className="color-theme">Your Phone</label>
                    <div className="valid-feedback">Phone Number looks good!</div>
                    <div className="invalid-feedback">Phone Number is missing or is invalid.</div>
                    <span>(required)</span>
                </div>
                <button className="btn btn-full bg-blue-dark rounded-xs text-uppercase font-700 w-100 btn-s mt-4" onClick={() => handWithdraw("/verify")}>
                    Next
                </button>
            </form> */}
        </div>
    );
};

export default SignUp;
