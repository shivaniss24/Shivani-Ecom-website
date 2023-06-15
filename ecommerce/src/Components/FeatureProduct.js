import React from 'react'
import { useProductContext } from '../context/productcontext';
import "../Css/feature.css";
import Product from './Product';

const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    if (isLoading) {
        return <div>......Loading  </div>
    }
    return (
        <div className="section">
            <div className="feature-container">
                <div className="feature-intro-data">Check Now!</div>
                <div className="common-heading">Our Feature Services</div>
                <div className="grid grid-three-column">
                    {featureProducts.map((curElem) => {
                        return <Product key={curElem.id} {...curElem} />;
                    })}
                </div>
            </div>
        </div>
    )
}
export default FeatureProduct;