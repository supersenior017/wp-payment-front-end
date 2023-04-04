import React, { useEffect } from "react";


const Tablist = ({ tablist, tabNum, setTabNum }) => {
    return (
        <div className="ab-controls rounded-m p-1 overflow-scroll">
                    <div className="tabs tabs-pill" id="tab-group-2">
                        <div className="tab-controls rounded-m p-1 overflow-scroll">
                            {
                                tablist.map((tab, index) => (
                                    <a
                                        className="font-12 rounded-m"
                                        data-bs-toggle="collapse"
                                        href="#tab-1"
                                        key={index}
                                        aria-expanded={tabNum === tab.id ? true : false}
                                        onClick={() => setTabNum(tab.id)}
                                    >
                                        {tab.name}
                                    </a>
                                ))
                            }
                        </div>
            </div>
        </div>
    );
};

export default Tablist;
