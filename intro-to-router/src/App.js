import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import RootLayout from "./components/Root";
import ErrorPage from "./components/Error";
import ProductDetailPage from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
