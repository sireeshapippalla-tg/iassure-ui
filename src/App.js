import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './componnets/Sidebar';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
    <Sidebar />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
