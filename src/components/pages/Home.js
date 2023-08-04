import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import SectionOne from '../SectionOne';
import Sectiontwo from '../Sectiontwo';
import Sectionthree from '../Sectionthree';
import Sectionfour from '../Sectionfour';

const Home = () => {
  return (
    <div >
      <div className='container'>
        <div className='row text-white py-5'>

          <div className='col-md-6 col-lg-6 col-12 '>
            <div className='hero_section '>
              <img src='./images/top-post-badge.svg' alt='tag1' />
              <p className='get_inspired text-secondary'>Get inspired & unlock the full potential of video marketing</p>
              <h1>Create product <br></br>videos that <span className="convert_gradient">convert</span></h1>
              <p className='text-secondary'>Learn from more than 100+ hand selected videos of companies that create engaging, shareable product videos that not only boost brand awareness but also convert customers.</p>

              <Link to="/features">  <button className='btn_gradient_full text-white'>Get access 100+ videos now</button> </Link>
              <Link to="/pricing"> <button className='btn-4 text-white mt-md-3 mt-sm-3 mx-sm-4 mx-lg-4'>Learn More</button> </Link>
              <div className='hero_section_second d-flex my-5'>
                <img src='https://avatars.githubusercontent.com/u/1665273?v=4' width="70px" height="70px" className='rounded' alt='person' />
                <div className='flex-column'>
                  <p className='px-3 py-3 text-secondary'>“I am about to launch a new product and needed inspiration <br></br> for creating our new Product Hunt launch video. This site has been <br></br> an amazing resource for us.”</p>

                  <span className='text-secondary'>Alex Styl, founder of Composables</span>
                </div>
              </div>

            </div>
          </div>
          <div className='col-md-6 col-lg-6 col-12 '>
            <div className=" d-flex flex-wrap justify-content-center gap-16  ">
              <video autoplay="" muted="" className=" video_section_one rounded" width="300" poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"><source src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4" type="video/mp4" /></video>
              <video autoplay="" muted="" className=" video_section_two rounded mt-0 pt-lg-4 " width="300" poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"><source src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4" type="video/mp4" /></video>
              <video autoplay="" muted="" className=" video_section_three  rounded " width="300" poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"><source src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4" type="video/mp4" /></video>
              <video autoplay="" muted="" className=" video_section_four  rounded pt-lg-4" width="300" poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"><source src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4" type="video/mp4" /></video>
              <video autoplay="" muted="" className=" video_section_five  rounded " width="300" poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"><source src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4" type="video/mp4" /></video>
              <video autoplay="" muted="" className="  video_section_six rounded pt-lg-4" width="300" poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"><source src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4" type="video/mp4" /></video>


            </div>
          </div>
        </div>

      </div>

      <SectionOne />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
    </div>
  )
}

export default Home
