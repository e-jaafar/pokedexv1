import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RouterProvider, createBrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes
import PokemonPage from './components/PokemonPage';
import HomePage from './components/HomePage';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://pokebuildapi.fr/api/v1/pokemon')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  // Create the router with a route config
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout data={data} />, // Render Layout component at the root
      children: [ // Define children routes
        {
          index: true,
          element: <div>Select a Pokemon</div>, // This will be rendered inside the <Outlet> of Layout
        },
        {
          path: "pokemon/:name",
          element: <PokemonPage />, // This will be rendered inside the <Outlet> of Layout
        },
      ],
    },
  ]);

  function Layout({ data }) {
    return (
      <div className='w-100 h-100' style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        {/* Left side: Placeholder or PokemonPage */}
        <div></div>
        <Routes>
          <Route index element={<div className='flex w-6/12	text-3xl text-center  '>
            <p className='mx-auto' style={{ marginTop: '120px' }}>Select a Pokemon</p>
            </div>} />
          <Route path="pokemon/:name" element={<PokemonPage />} />
        </Routes>
        {/* Right side: HomePage */}
        <div style={{ flex: 1, height: '100%', overflow: 'auto', backgroundColor: 'red' }}>
          <HomePage data={data} />
        </div>
      </div>
    );
  }

  return (
    <RouterProvider router={router} /> // Render the RouterProvider at the top level
  );
}

export default App;
