import React, { Component } from "react";
import Slider from "react-slick";



const SlickCarosuel = () => {
    var settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }
            , {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>

            <Slider {...settings}>
                <div>
                    <div className='text-center'>
                        <blockquote class="otro-blockquote">
                            Creativity is just connecting things. When you ask creative people how they did something That's because they were able to connect experiences they've had and synthesize new things.
                            <div>
                                <img src='https://tailscan.com/erwin.jpg' style={{ width: 70, height: 70, borderRadius: 100, margin: "auto" }} className='img-rounded mt-4' alt='user' />
                                <span className="text-white mb-1">Steve Jobs</span>
                                <h5>Erwin, CEO of Tailscan</h5>
                            </div>
                        </blockquote>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <blockquote class="otro-blockquote">
                            Creativity is just connecting things. When you ask creative people how they did something That's because they were able to connect experiences they've had and synthesize new things.
                            <div>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFreAtrOzdfbsrEHLCtHyBDY4x80z6RBeVA&usqp=CAU' style={{ width: 70, height: 70, borderRadius: 100, margin: "auto" }} className='img-rounded mt-4' alt='user' />
                                <span className="text-white mb-1">Mickel Jobs</span>
                                <h5>COO of Tailson</h5>
                            </div>
                        </blockquote>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <blockquote class="otro-blockquote">
                            Creativity is just connecting things. When you ask creative people how they did something That's because they were able to connect experiences they've had and synthesize new things.
                            <div>
                                <img src='https://tailscan.com/erwin.jpg' style={{ width: 70, height: 70, borderRadius: 100, margin: "auto" }} className='img-rounded mt-4' alt='user' />
                                <span className="text-white mb-1">Steve Jobs</span>
                                <h5>Erwin, CEO of Tailscan</h5>
                            </div>
                        </blockquote>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <blockquote class="otro-blockquote">
                            Creativity is just connecting things. When you ask creative people how they did something That's because they were able to connect experiences they've had and synthesize new things.
                            <div>
                                <img src='https://tailscan.com/erwin.jpg' style={{ width: 70, height: 70, borderRadius: 100, margin: "auto" }} className='img-rounded mt-4' alt='user' />
                                <span className="text-white mb-1">Steve Jobs</span>
                                <h5>Erwin, CEO of Tailscan</h5>
                            </div>
                        </blockquote>
                    </div>
                </div>
                

            </Slider>
        </div>
    )
}

export default SlickCarosuel
