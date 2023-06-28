import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditItem from './pages/EditItem';
import AddItem from './pages/AddItem';
import AddEvent from './pages/AddEvent';
import ItemDetail from './pages/ItemDetail';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container mx-auto p-4">
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/add" element={<AddItem />} />
          <Route path="/items/:itemId" element={<EditItem />} />
          <Route path="/items/detail/:itemId" element={<ItemDetail />} />
          <Route path="/items/:itemId/events/add" element={<AddEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
