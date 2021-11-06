import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components';
import Activity from './containers/Activity';
import Hotels from './containers/Hotels';
import Restaurant from './containers/Restaurant';

import ScenicSpots from './containers/ScenicSpots';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<ScenicSpots />} />
        <Route path='scenicSpots' element={<ScenicSpots />} />
        <Route path='hotels' element={<Hotels />} />
        <Route path='activities' element={<Activity />} />
        <Route path='restaurant' element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
