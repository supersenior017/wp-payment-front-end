import React, { useEffect } from "react";


const Gallery = ({ gallerylist, tabNum, setTabNum }) => {
    return (
        <div className="gallery-wrap row">
            {gallerylist.map((gallery) => (
                <div
                    className="col-3 p-1"
                    key={gallery.id}
                >
                    <div className="rounded-lg">
                        <img className="rounded-lg" src={gallery.imgurl} alt={gallery.id} width="100%"/>
                    </div>
                    <div className="text-center">
                        <h6>{gallery.title}</h6>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
