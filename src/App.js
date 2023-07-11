      import React from "react";
      import ReactDOM from "react-dom/client";
      import Header from "./component/Header";
      import Footer from "./component/Footer";
      import Body from "./component/Body";
      import { IMG_COM_URL } from "./constants";
      import { restaurantList } from "./constants";
      import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
      import About from "./component/About";
      import Cart from "./component/Cart";
      import Contact from "./component/Contact";
      import Error from "./component/Error";
      import RestaurantMenu from "./component/RestaurantMenu";
      import { Children } from "react/cjs/react.production.min";
      
      import Profile from "./component/ProfileClass";
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
              element:<About/>,
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