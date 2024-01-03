import React from 'react';
import ReactDom from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {createBrowserRouter,Outlet,RouterProps, RouterProvider} from 'react-router-dom'
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement : <Error />,
        children:[
            {
                path: '/',
                element: <Body />
            },
            {
            path: '/about',
            element: <About />
            },
            {
                path: '/contact',
                element: <ContactUs />
            }
    ]
    }
]);
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}  />);
