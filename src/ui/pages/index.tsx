import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainPage } from './main'
import React from 'react';
import { ErrorPage } from './error';
import { SuccessPage } from './success';
import { RedirectWidget } from '../widgets/redirect';
import { updateMagicNumber } from '../../core/actions/update-magic-number';

setInterval(() => updateMagicNumber(Math.random() * 10), 10000);

const Root: React.FC = () => (
  <RedirectWidget>
    <Outlet />
  </RedirectWidget>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
        path: 'error',
        element: <ErrorPage />
      },
      {
        path: 'success',
        element: <SuccessPage />
      },
    ]
  },
]);

export const App: React.FC = () => (
  <RouterProvider router={router} />
);
