import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Sproduct from './Pages/Sproduct';
import WorkInProgress from './Pages/WorkInProgress';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "/cart", element: <Cart /> },
  { path: "/shop", element: <Shop /> },
  { path: "/sproduct/:id", element: <Sproduct /> },
  { path: "/WorkInProgress", element: <WorkInProgress /> },
  { path: "*", element: <div className='h-screen flex justify-center items-center text-[50px]'>404 - Page Not Found🫡</div> }, // Fallback route
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
