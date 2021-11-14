import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Footer, NavigationBar } from './components';
import Activity from './containers/Activity';
import DetailPage from './containers/DetailPage';
import Home from './containers/Home';
import Hotels from './containers/Hotels';
import Restaurant from './containers/Restaurant';
import ScenicSpots from './containers/ScenicSpots';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:searchResultId' element={<DetailPage />} />

        <Route path='scenicSpots' element={<ScenicSpots />} />
        <Route path='scenicSpots/:scenicSpotId' element={<DetailPage />} />

        <Route path='hotels' element={<Hotels />} />
        <Route path='hotels/:hotelsId' element={<DetailPage />} />

        <Route path='activities' element={<Activity />} />
        <Route path='activities/:activitiesId' element={<DetailPage />} />

        <Route path='restaurant' element={<Restaurant />} />
        <Route path='restaurant/:restaurantId' element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
