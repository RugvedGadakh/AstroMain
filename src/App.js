import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer, WhatsAppButton } from './components/UI';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ToastContainer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={
              <div className="min-h-screen bg-[#0a0404] flex items-center justify-center text-center pt-24">
                <div>
                  <div className="text-7xl mb-6">🔮</div>
                  <h2 className="font-cinzel text-4xl text-white font-bold mb-3">Page Not Found</h2>
                  <p className="text-white/50 font-lato mb-8">The stars couldn't find this path.</p>
                  <a href="/" className="bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/30 transition-all">Return Home</a>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}
