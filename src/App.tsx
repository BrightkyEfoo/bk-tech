import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss'
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : '/hello',
    element : <div>hello</div>
  }
]);
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
