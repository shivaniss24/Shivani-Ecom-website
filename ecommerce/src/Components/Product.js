import React from 'react'
import { NavLink } from 'react-router-dom';
import products from "../backend/db/products";
import "../Css/feature.css";

const Product = (curElem) => {
    const { id, name, image, price, category } = curElem;
    return (
        <NavLink to={`/singleproduct/${id}`}>
            <div className='card'>
                <figure className='feature-figure'>
                    <img className='feature-img' src={image} alt={name} />
                    <figcaption className='caption'>{category}</figcaption>
                </figure>
                <div className='card-data'>
                    <div className='card-data-flex'>
                        <h3 className='feature-h3'>{name}</h3>
                        <p className="card-data--price">
                            Rs/- {price}
                        </p>

                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Product