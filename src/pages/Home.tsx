import React, { Suspense } from 'react'
import useAppRoutes from '../hooks/useAppRoutes'
import { Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './NotFound';

export default function Home() {
  const routes = useAppRoutes();
  const location = useLocation().pathname;

  return (
    <div className='flex flex-col min-w-screen min-h-screen items-center bg-gray-200/70 p-6 gap-6'>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='flex justify-center w-full p-4 bg-white rounded-md shadow-md'>
          MonitoringApp
        </div>
        <div className='flex flex-col p-4 bg-white rounded-md shadow-md  justify-center '>
        <Routes>
          {routes.map(
            ({id, path, component: Component, isIndex}) => (
              <Route 
                key={id}
                path={path}
                element={<Component />}
                index={isIndex}
              />
            )
          )}
          <Route path='*' element={<NotFound />} />
        </Routes>
        </div>
      </Suspense>
    </div>
  )
}
