website Name : Roommate
https://roommate-client.web.app/



✅ 1. Browse Listings
Users can view available room/flat listings posted by others.

Each listing includes location, rent, amenities, images, and contact info.


✅ 2. Add Listing
Registered users can add their own room/house listings.

Full CRUD support (Create, Read, Update, Delete).

Data is saved to MongoDB through a form.

✅ 3. Like & Contact Owner Feature
Users can like listings they are interested in.

Once liked, the owner's contact number (phone/email) becomes visible.

✅ 4. Dark / Light Mode Toggle
The website supports both dark and light themes.

Theme preference is saved using LocalStorage or user profile settings.

✅ 5. User Authentication & My Listings
Firebase authentication allows users to register, log in, and log out.

Logged-in users can manage their own listings from the My Listings page (edit/delete).

<div className='flex flex-col  space-y-3'>
            
          
        <Fade cascade>
                <span className='text-5xl text-blue-600 font-bold'>
                <Typewriter 
 
                words={['Find Your Perfect Roommate Match']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                ></Typewriter>
            </span>
        <p className='text-white'>Connect with compatible roommates based on lifestyle, budget, <br /> and location preferences</p>
        <Link to='browsListing'><button className="btn btn-primary">Brows Listing</button></Link>
        </Fade>
        <!-- https://roommate-server-side-alpha.vercel.app -->
        