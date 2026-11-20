import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/navbar/header.jsx';
import Footer from './components/navbar/footer.jsx';
import Home from './components/navbar/pages/home.jsx';
import About from './components/navbar/pages/about.jsx';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;