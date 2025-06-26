import React, { useEffect } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import Featured from './Featured';
import Reurement from './Reurement';
import Aos from 'aos';
import 'aos/dist/aos.css';
import FaqSection from './FaqSwction';
import TopRatedListings from './TopRatedListings';
import CategoriesSection from './CategoriesSection';
import BlogSection from './BlogSection ';
import NewsletterSection from './NewsletterSection';
import CategorySection from './CategorySection ';
import { PromoSection } from './PromoSection';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
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
           <div className='py-4  '>
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
           <div className='bg-violet-200'>
            <Reurement></Reurement>
           </div>
           
           <div className='container mx-auto'>
            <TopRatedListings></TopRatedListings>
           </div>
           <div className='bg-violet-100 my-3'>
            <CategoriesSection></CategoriesSection>
           </div>
           <BlogSection></BlogSection>
            <div className=' my-2'>
             <CategorySection></CategorySection>
         </div>
          <div className=''>
             <NewsletterSection></NewsletterSection>
          </div>
                <PromoSection></PromoSection>
                <AboutSection></AboutSection>
                {/* <ContactSection></ContactSection>    */}
        </div>
    );
};

export default Hoom;