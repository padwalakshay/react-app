import Navbar from './Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Menu from './Menu.jsx';
import ProtectedRoute from '../service/Protected';
import {useState } from 'react';
import About from './About';
import Book from './Book';
import Footer from './Footer';
import Orders from './pages/Orders.jsx';
import { dataContext } from '../context/data-context.js';

export default function Container() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [data, setData] = useState([]);
    function updateData(newData) {
      setData([...data, newData]);
    }
    return(
        <>
      <BrowserRouter>
      <Navbar count={data.length}/>
      <dataContext.Provider value={{data, updateData}}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/book" element={<Book/>} />
        </Route>
      </Routes>
      </dataContext.Provider>
      <Footer/>
    </BrowserRouter>
        </>
    )
}