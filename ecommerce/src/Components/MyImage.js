import React, { useState } from "react";

const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);

    return (
        <div>
            <div className="grid grid-four-column">
                {imgs.map((curElm, index) => {
                    return (
                        <figure>
                            <img
                                src={curElm.url}
                                alt={curElm.filename}
                                className="box-image--style"
                                key={index}
                                onClick={() => setMainImage(curElm)}
                            />
                        </figure>
                    );
                })}
            </div>
            {/* 2nd column  */}

            <div className="main-screen">
                <img src={mainImage.url} alt={mainImage.filename} />
            </div>
        </div>
    );
};



export default MyImage;
