import React from 'react'
import './Sectionthree.css'
import {Link} from 'react-router-dom'
import { HiShieldCheck } from 'react-icons/hi';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { MdOutlineCastForEducation  } from 'react-icons/md';
import { AiOutlineHeart  } from 'react-icons/ai';
const Sectionthree = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='sectionthree_handle  text-white d-flex  flex-column flex-lg-row flex-md-row '>
                    <div className='col-md-6 col-lg-6 col-12 '>
                        <div className='sectionthree_content my-5'>
                            <h3 className='text-center'>Learn from a growing library of<br></br> <span>product videos</span></h3>
                            <div className='section_three_left_detail d-flex gap-16 mt-5'>
                                <h3><AiOutlineVideoCamera/></h3>
                                <div className='text_detail_here '>
                                    <h5>134+ product video examples</h5>
                                    <p  className='text-white-50 fs-6' >Full access to hundered of product video examples for inspiration</p>
                                </div>
                            </div>
                            <div className='section_three_left_detail d-flex gap-16 my-3'>
                                <h3><MdOutlineCastForEducation/></h3>
                                <div className='text_detail_here '>
                                    <h5>Tools and Tutorials</h5>
                                    <p  className='text-white-50 fs-6'>Get access to tools and tutorials (soon) on how you can easily create your own engaging <br></br> product videos with little effort.</p>
                                </div>
                            </div>
                            <div className='section_three_left_detail d-flex gap-16'>
                                <h3 ><AiOutlineHeart/></h3>
                                <div className='text_detail_here '>
                                    <h5>Pay once, love forever</h5>
                                    <p className='text-white-50 fs-6'>Not another annoying subscription. Get lifetime access to our library of high quality product videos for single one-time payment. ROI guaranteed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-12'>
                        <div class="mt-sm-3 mt-md-0 mt-lg-0">
                            <div class="card-body p-5 w-75 m-auto text-white text-center">
                                <button className='button_gradient_full_life'>LIFETIME ACCESS!</button>
                                <h2>$29</h2>
                                <p>One-time payment, access forever!</p>
                                <span className='green_color_paragraph'>Discounted price. Increases to $49 soon.</span>
                                <br></br>
                                <br></br>
                                <h3 className='mb-0 mt-1'><span>Forever</span> full access</h3>
                                <span>Unlimited views and access.</span>
                                <br></br>
                              <Link to="/login"> <button className='border_gradient button_gradient_full_forever_outline mt-4'>Get access forever!</button> </Link> 
                                <div className='protect_icon_and_text mt-3  d-flex justify-content-center  '>
                                    <HiShieldCheck />

                                    <h5 > &nbsp; 14 Days Money Back Guarantee</h5>

                                </div>
                                <span className='clicking_grey_dark'>Buy clicking the purchase button above you agree <br></br> with our <span>terms.</span></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectionthree
