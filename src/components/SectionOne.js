import React from 'react'
import "./SectionOne.css"
import { AiOutlineBulb } from "react-icons/ai";
const SectionOne = () => {
    return (
        <div>
            <div className='container'>
                <div className='row my-5 text-secondary'>
                    <div className='section_one_handle text-center text-white'>
                        <h4>Finding inspiration is
                            <span> hard. </span>   <br></br>Stop wasting your time.</h4>
                        <h5>You are a SaaS founder, marketing agency or video freelancer and are <br></br> planning to create a product video that will stand out from the crowd?
                        </h5>
                        <h5>We got you covered.</h5>
                    </div>

                    <div className='col-md-6 col-12 col-lg-6'>
                        <div className='section_one_content my-5'>
                            <div className='section_handle_content d-flex align-items-center gap-16'>
                                <div className='border_icons d-inline  fs-3 px-2'>
                                    <AiOutlineBulb className='hit_builb text-white' />
                                </div>
                                <h5 className='text-white'>We did the hard work for you</h5>

                            </div>
                            <p className='my-3'>Stop wasting time searching for video inspiration.
                                <br></br>
                                <br></br>
                                We spent countless weeks carefully collecting the best  SaaS videos
                                from the web so you don't have to.
                                <br></br>
                                <br></br>
                                Our Library is growing by the day.
                            </p>
                        </div>

                        <div className='section_one_content my-5'>
                            <div className='section_handle_content d-flex align-items-center gap-16'>
                                <div className='border_icons d-inline  fs-3 px-2'>
                                    <AiOutlineBulb className='hit_builb text-white' />
                                </div>
                                <h5 className='text-white'>Filter based on your needs</h5>

                            </div>
                            <p className='my-3'>Stop wasting time searching for video inspiration.
                                <br></br>
                                <br></br>
                                We spent countless weeks carefully collecting the best  SaaS videos
                                from the web so you don't have to.
                                <br></br>
                                <br></br>
                                Our Library is growing by the day.
                            </p>
                        </div>


                        <div className='section_one_content my-5'>
                            <div className='section_handle_content d-flex align-items-center gap-16'>
                                <div className='border_icons d-inline  fs-3 px-2'>
                                    <AiOutlineBulb className='hit_builb text-white' />
                                </div>
                                <h5 className='text-white'>We did the hard work for you</h5>

                            </div>
                            <p className='my-3'>Stop wasting time searching for video inspiration.
                                <br></br>
                                <br></br>
                                We spent countless weeks carefully collecting the best  SaaS videos
                                from the web so you don't have to.
                                <br></br>
                                <br></br>
                                Our Library is growing by the day.
                            </p>
                        </div>









                    </div>


                    <div className='col-md-6 col-12 col-lg-6 my-5 '>
                        <div className='background_video  '>
                            <video src='https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/app_demo_vid.mp4' className='img-fluid rounded'></video>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SectionOne
