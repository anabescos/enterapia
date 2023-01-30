import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import './assets/styles/components/App.scss';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;
