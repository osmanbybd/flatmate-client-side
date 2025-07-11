import { createBrowserRouter } from "react-router";
import Root from "../Roots/Root";
import Hoom from "../pages/Hoom";
import Login from "../pages/Login";
import Register from "../pages/Regiester";
import AddListing from "../pages/AddListing";
import MyListing from "../pages/MyListing";
import BrowsListing from "../pages/BrowsListing";
import Profile from "../pages/Profile";
import Details from "../pages/Details";
import Update from "../pages/Update";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Loading from "../pages/Loading";
import Invalide from "../pages/Invalid";
import { lazy } from "react";
import AllListing from "../pages/AllListing";
import DashboardLayout from "../Roots/DashboardLayout";
import Overview from "../pages/Dashboard/Overview";
import AdminAllListings from "../pages/Dashboard/AdminAllListings ";



const Invalid = lazy(() => import("../pages/Invalid"))
const detailLoader = async({params}) =>{
    const res1 = await fetch(`https://roommate-server-side-alpha.vercel.app/addListing/${params.id}`);
    if(res1.ok){
        const data1 = await res1.json();
        if(data1) return data1;
    }
    // const res2 = await fetch(`https://roommate-server-side-alpha.vercel.app//featuredListings/${params.id}`);
    // if(res2.ok){
    //     const data2 = await res2.json()
    //     if(data2) return data2
    // }
    throw new Response('Not Found', {status: 404})
}

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        hydrateFallbackElement: <Loading></Loading>,
        children:[
            {
                path: '/',
                loader:() => fetch('https://roommate-server-side-alpha.vercel.app/addListing'),
                Component: Hoom,
            },
            {
                path:'login',
                Component:Login
            },
            {
                path:'register',
                Component: Register
            },
            {
                path: 'allListing',
                loader:() => fetch('https://roommate-server-side-alpha.vercel.app/addListing'),
                Component: AllListing
            },
       
          
            {
                path:'browsListing',
                loader:()=> fetch('https://roommate-server-side-alpha.vercel.app/addListing'),
                Component:BrowsListing
            },
            {
                path: 'profile',
                loader: ({request}) => {
                    const url = new URL(request.url)
                    const email = url.searchParams.get('email')
                    return fetch(`https://roommate-server-side-alpha.vercel.app/users?email=${email}`)
                },
                Component : Profile
            },
            {
                path:'/details/:id',
                loader: detailLoader,
                element: <PrivateRoute><Details></Details> </PrivateRoute>
                // Component: Details
            },
            {
                path:'update/:id',
                loader: ({params})=> fetch(`https://roommate-server-side-alpha.vercel.app/addListing/${params.id}`),
                Component:Update
            }
           
           
        ]
    },
    {
        path:'/*',
        hydrateFallbackElement:<Loading></Loading>,
        Component: Invalid
    },
    {
        path: '/dashboard',
        Component: DashboardLayout,
        children: [
            {
                path: '',
                Component: Overview
            },
                 {
                path:'addListing',
                element:<PrivateRoute><AddListing></AddListing></PrivateRoute>
               
            },
              {
                path:'myListing',
                loader: ({request}) =>{
                    const url = new URL(request.url);
                    const email = url.searchParams.get('email');              
                    return fetch(`https://roommate-server-side-alpha.vercel.app/myListing?email=${email}`)
                },
                Component:MyListing
            },
            {
                path:'all-listings',
                Component: AdminAllListings,
                loader:() => fetch('https://roommate-server-side-alpha.vercel.app/addListing'),
            }
        ]
    }
])