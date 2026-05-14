import './bootstrap.css'
import './main.css'
import './default.css'
import HomePage from "./components/home/homePage";
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import ProductPage from './components/productPage/productPage';
import AboutUs from './components/about/aboutUs';
import MostPopular from './components/mostPopular/mostPopular';
import Shop from './components/shop/shop';


function App() {
  const Routerr = createBrowserRouter(
    [
      {
        path: '/', element: <HomePage />
      },
      {
        path: '/MostPopular', element: <MostPopular />
      },
      {
        path: '/shop', element: <Shop />
      },
      {
        path: '/about', element: <AboutUs />
      },
      {
        path: '/product/:id', element: <ProductPage />
      }
    ]
  )
  return (
    <div className="wholeBody container-fluid">
      <RouterProvider router={Routerr}/>
    </div>

  )
}

export default App