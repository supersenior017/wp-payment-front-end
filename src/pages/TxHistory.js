const TxHistory = () => {
    return (
        <div className="">
            <div className="pt-80 list-group list-custom list-group-m rounded-xs">
                <a href="/" className="list-group-item" data-bs-toggle="offcanvas" data-bs-target="#menu-transfer-ok">
                    <div>
                        <div>Deposit $100 approved</div>
                        <div>2023 01.01 12:00</div>
                    </div>
                    <i className="fa fa-check font-20 color-green-dark"></i>
                </a>
                <a href="/" className="list-group-item" data-bs-toggle="offcanvas" data-bs-target="#menu-transfer-pending">
                    <div>
                        <div>Withdrawal $100 rejected</div>
                        <div>2023 01.01 12:00</div>
                    </div>
                    <i className="fa fa-close font-20 color-red-dark"></i>
                </a>
                <a href="/" className="list-group-item" data-bs-toggle="offcanvas" data-bs-target="#menu-transfer-ok">
                    <div>
                        <div>Deposit $500 approved</div>
                        <div>2023 01.01 12:00</div>
                    </div>
                    <i className="fa fa-check font-20 color-green-dark"></i>
                </a>
            </div>
        </div >
    );
};

export default TxHistory;
