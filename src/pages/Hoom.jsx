import React, { useEffect } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import Featured from './Featured';
import Reurement from './Reurement';
import Aos from 'aos';
import 'aos/dist/aos.css';
import FaqSection from './FaqSwction';
// import { ThemeContext } from '../context/ThemeProvider';
const Hoom = () => {
const addFetured = useLoaderData()
// console.log(addFetured)
// const {darkMode} =useContext(ThemeContext)
useEffect(()=>{
  Aos.init({
      duration:3000, once:true
  })
},[])

    return (
        <div>
           <div>
            <Banner></Banner>
           </div>
           <div className='py-4  bg-gray-100'>
                <div className='text-center py-6 px-4 text-black'>
                    <h1 className='lg:text-6xl md:text-4xl text-2xl'>Featured Roommates</h1>
                    <p >Discover our top roommate listings based on compatibility and popularity. Connect with <br /> like-minded individuals seeking shared living arrangements.</p>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 container mx-auto '  data-aos="fade-up">
                {
                    addFetured.map(post => <Featured key={post._id} post={post}></Featured>)
                }
            </div>

           </div>
           <div className='bg-gray-100'>
            <Reurement></Reurement>
           </div>
           <div className='py-8 px-2 bg-gray-100'>
            <FaqSection></FaqSection>
           </div>
        </div>
    );
};

export default Hoom;