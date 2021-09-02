import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

 import { SideBar } from './components/SideBar';
 import { Content } from './components/Content';
import { MoviesProvider } from './hooks/useMovies';





export function App() {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MoviesProvider>
        <SideBar />
        <Content />
      </MoviesProvider>
    </div>
  )
}