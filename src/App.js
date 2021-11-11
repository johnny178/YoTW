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

        <Route path='scenicSpots' element={<ScenicSpots />} />
        <Route path='scenicSpots/:scenicSpotId' element={<DetailPage />} />

        <Route path='hotels' element={<Hotels />} />
        <Route path='hotels/:scenicSpotId' element={<DetailPage />} />

        <Route path='activities' element={<Activity />} />
        <Route path='activities/:scenicSpotId' element={<DetailPage />} />

        <Route path='restaurant' element={<Restaurant />} />
        <Route path='restaurant/:scenicSpotId' element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
