import React from 'react'
import { useProductContext } from '../context/productcontext';
const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    return (
        <div>FeatureProduct</div>
    )
}
export default FeatureProduct;