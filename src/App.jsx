// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy loading de las páginas
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Store = lazy(() => import('./pages/Store'));
const ProductPage = lazy(() => import('./pages/ProductPage')); // Importa la página de producto
const CartPage = lazy(() => import('./pages/CartPage')); // Importa la página de carrito
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const CoursePage = lazy(() => import('./pages/CoursePage')); // Importa la página de carrito
const BlogsPage = lazy(() => import('./pages/BlogsPage')); // Importa la página de carrito
const BlogPage = lazy(() => import('./pages/BlogPage')); // Importa la página de carrito

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shopcart" element={<CartPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          {/* {<Route path="*" element={<NotFound />} /> Página 404 */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

