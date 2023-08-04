import React from 'react'
import "./Footer.css"
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div className='background_footer text-white-50'>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-12'>
                        <div className='footer_controls_coloumn_first  px-sm-none px-md-5 px-lg-5'>
                            <h2 className='my-4'>Arslan.</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make  a type specimen book. It has survived not only five centuries,</p>
                            <div className='my-5'>
                                <img src='https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=390583&theme=dark&period=daily' alt='product' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 col-lg-2 col-12'>
                        <div className='footer_company_second my-4'>
                            <h3>Company</h3>
                            <div className='footer_company_second_text mt-4'>
                              <Link to="/features" className='text-decoration-none text-white-50'> <h6>Features</h6> </Link>  
                               <Link to="/pricing" className='text-decoration-none text-white-50'><h6>Pricing</h6></Link> 
                               
                              
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 col-lg-2 col-12'>
                        <div className='footer_company_second my-4'>
                            <h3>Support </h3>
                            <div className='footer_company_second_text mt-4'>
                             <Link to="/login" className='text-decoration-none text-white-50'><h6>Contact Us</h6></Link>   

                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 col-lg-2 col-12'>
                        <div className='footer_company_second my-4'>
                            <h3>About</h3>
                            <div className='footer_company_second_text mt-4'>
                                <h6>Made by @arslandeveloper ツ</h6>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='fs-6 text-center  p-5'>© Copyright 2023. Develop by <span className='fs-5 text-white'> &nbsp;Arslan. </span> </h2>
        </div>
    )
}

export default Footer
