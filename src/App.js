import './App.css';

import React, { Suspense } from 'react';
import Reservation from './Pages/Reservation';
import Homepage from "./Pages/Homepage";
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import MyNavbar from "./components/Navbar";
const LazyHome = React.lazy(() => import('./Pages/Homepage'));
const LazyReservation = React.lazy(() => import('./Pages/Reservation'));
function App() {
    return (
        <BrowserRouter >
            <div>
                <MyNavbar/>
                <Routes>
                    <Route exact path='/' element={<React.Suspense fallback={<div>loading</div>}><LazyHome /></React.Suspense>} >
                    </Route>
                    <Route path='/reservation' element={<React.Suspense fallback={<div>loading</div>}><LazyReservation /> </React.Suspense>} >
                    </Route>
                </Routes >
            </div>
        </BrowserRouter>
    );
}

export default App;
