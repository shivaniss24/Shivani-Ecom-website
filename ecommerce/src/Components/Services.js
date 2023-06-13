import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "../Css/service.css"
import '../Css/button.css';

const Services = () => {
    return (
        <div className='container'>
            <div className='grid grid-three-column'>
                <div className='services-1'>
                    <div>
                        <TbTruckDelivery className="icon" />
                        <h3>Super Fast and Free Delivery</h3>
                    </div>

                </div>
                <div className='services-2'>
                    <div className='services-column-2'>
                        <MdSecurity className="icon" />
                        <h3>Non-contact Shipping</h3>
                    </div>
                    <div className='services-column-2'>
                        < GiReceiveMoney className="icon" />
                        <h3>Money-Back Gauranteed</h3>
                    </div>
                </div>
                <div className='services-3'>
                    <div>
                        <RiSecurePaymentLine className="icon" />
                        <h3>Super Secure Payment System</h3>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Services