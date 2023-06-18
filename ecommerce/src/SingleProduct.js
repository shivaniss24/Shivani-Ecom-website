import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './context/productcontext';
// import Product from './Components/Product';
import PageNavigation from './Components/PageNavigation';
import MyImage from "./Components/MyImage";
// import { Container } from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import "./Css/singleproduct.css"
import './GlobalStyle.css';


const SingleProduct = () => {
  const API = "https://api.pujakaitem.com/api/products";
  const { getSingleProduct, isSingleLoading, singleProduct, featureProducts, products } = useProductContext();
  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  } = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);


  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <div>
      <PageNavigation title={name} />
      <div className="single-container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage className='product-img' imgs={image} />
          </div>

          {/* product dAta  */}
          <div className="product-data-div">
            <h2 className='product-h2'>{name}</h2>
            <p className='p-star'>{stars}</p>
            <p className='p-review'>{reviews} reviews</p>
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              {/* <p>
                ID : <span> {id} </span>
              </p> */}
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

