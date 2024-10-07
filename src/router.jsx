import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import MenuExpansion from "./pages/MenuExpansion";
import Search from "./pages/Search";
import Catalog from "./pages/Catalog";
import Istoria from "./pages/Istoria";
import Help from "./pages/Help";
import Obuv from "./pages/Obuv";
import Oconsignment from "./pages/Oconsignment";
import Wishlist from "./pages/Wishlist";
import Proleved from "./pages/Proleved";
import Istoriarenda from "./pages/Istoriarenda";
import Oferzakaz from "./pages/Oferzakaz";
import Oformzakaz from "./pages/Oformzakaz";
import ONas from "./pages/oNas";
import Notfound from "./pages/Notfound";
import Konserj from "./pages/Konserj";


export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "*",
                element: <Notfound />
            },
            {
                path: "menuexpansion",
                element: <MenuExpansion />
            },
            {
                path: "search",
                element: <Search />
            },
            {
                path: "catalog",
                element: <Catalog />
            },
            {
                path: "istoria",
                element: <Istoria />
            },
            {
                path: "help",
                element: <Help />
            },
            {
                path: "obuv",
                element: <Obuv />
            },
            {
                path: "0consignment",
                element: <Oconsignment />
            },
            {
                path: "wishlist",
                element: <Wishlist />
            },
            // {
            //     path: "proleved",
            //     element: <Proleved />
            // },
            {
                path: "istoriabrenda",
                element: <Istoriarenda />
            },
            {
                path: "oferzakaz",
                element: <Oferzakaz />
            },
            {
                path: "oformzakaz",
                element: <Oformzakaz />
            },
            {
                path: "onas",
                element: <ONas />
            },
            {
                path: "konserj",
                element: <Konserj/>
            }
         
           
          
        ]
    }
])

