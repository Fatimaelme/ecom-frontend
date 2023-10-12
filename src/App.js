import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products';
import Details from './Pages/Details';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Commande from './Pages/Commande';
import Summary from './Pages/Summary';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:'/:category',
    element: <Products/>
  },
  {
    path: '/product/:id',
    element: <Details></Details>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/commande",
    element: <Commande/>
  },
  {
    path: "/summary",
    element: <Summary/>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
