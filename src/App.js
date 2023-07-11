      import React, { lazy,Suspense } from "react";
      import ReactDOM from "react-dom/client";
      import Header from "./component/Header";
      import Footer from "./component/Footer";
      import Body from "./component/Body";
      import { IMG_COM_URL } from "./constants";
      import { restaurantList } from "./constants";
      import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
      import Cart from "./component/Cart";
      import Contact from "./component/Contact";
      import Error from "./component/Error";
      import RestaurantMenu from "./component/RestaurantMenu";
      import { Children } from "react/cjs/react.production.min";
      import Profile from "./component/Profile";
      import Shimmer from "./component/Shimmar";
      

      // chunking
      //Code Splitting
      //Dynamic Bundling
      //Lazy Loading
      //On demand Loading
      //Dynamic Import

      const Instamart=lazy(()=>import("./component/Instamart"))
      const About=lazy(()=>import("./component/About"))
      const AppLayout = () => {
        return (
          <>
            <Header />
            <Outlet/>
            {/* <About/> */}
            {/* <Body /> */}
            {/* <Contact /> */}

            <Footer />
          </>
        );
      };
      const appRotuer = createBrowserRouter([
        {
          path:"/",
          element: <AppLayout/>,
          errorElement:<Error/>,
          children: [
            {
              path: "/",
              element: <Body />
            },
            {
              path:"/about",
              
              element:(<Suspense fallback={<h1>Loading...</h1>}>
                <About/>
              </Suspense>),
              children:[{
                path:"profile",
                element:<Profile/>
              }]
            },
            {
              path:"/contact",
              element: <Contact/>
            },
            {
              path:"/restaurant/:resId",
              element:<RestaurantMenu/>
            },
            {
              path:"/instamart",
              element:(
              <Suspense fallback={<Shimmer/>}>
                <Instamart/>
              </Suspense>)
            }
          ]  
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        
      ])
      const root = ReactDOM.createRoot(document.getElementById("root"));

      //passing react element inside the root
      root.render(<RouterProvider router={appRotuer} />);