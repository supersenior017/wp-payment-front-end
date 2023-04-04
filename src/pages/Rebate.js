
const Rebate = () => {
    return (
        <div className="">
            <div className="pt-80 list-group list-custom list-group-m rounded-xs">
                <a href="/" className="list-group-item justify-content-between" data-bs-toggle="offcanvas" data-bs-target="#menu-transfer-ok">
                    <div>
                        <div>Slots</div>
                        <div>2023 01.01 12:00</div>
                    </div>
                    <div>RM34.20</div>
                </a>
                <a href="/" className="list-group-item justify-content-between" data-bs-toggle="offcanvas" data-bs-target="#menu-transfer-pending">
                    <div>
                        <div>Live Casino</div>
                        <div>2023 01.01 12:00</div>
                    </div>
                    <div>RM34.20</div>
                </a>
                <a href="/" className="list-group-item justify-content-between" data-bs-toggle="offcanvas" data-bs-target="#menu-transfer-ok">
                    <div>
                        <div>eSports</div>
                        <div>2023 01.01 12:00</div>
                    </div>
                    <div>RM34.20</div>
                </a>
            </div>
        </div >
    );
};

export default Rebate;
