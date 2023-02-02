import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import './App.scss';
import DefaultLayout from './layout/DefaultLayout';
import ProductsAdmin from './pages/admin/ProductsAdmin';
import ProductsCreate from './pages/admin/ProductsCreate';
import HomeAdmin from './pages/admin/HomeAdmin';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Products from './pages/Products';
import AdminLayout from './layout/AdminLayout';
import Login from './pages/Login';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      {/* PUBLIC */ }
      <Route path="/" element={ <DefaultLayout /> }>
        <Route index element={ <Home /> } />
        <Route path="contact" element={ <Contact /> } />
        <Route path="products" element={ <Products /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="*" element={ <NoMatch /> } />
      </Route>

      {/* ADMIN */ }
      <Route path="/admin" element={ <AdminLayout /> }>
        <Route index element={ <HomeAdmin /> } />
        <Route path="productsadmin" element={ <ProductsAdmin /> } />
        <Route path="productscreate" element={ <ProductsCreate /> } />
      </Route>

    </>

  )
)

function App () {
  return (
    <RouterProvider router={ router } />
  );
}


export default App;
