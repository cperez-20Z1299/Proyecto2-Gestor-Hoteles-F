import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';
import { Login } from './login/components/Login';
import { Estructura } from './components/Estructura';
import { CreateHotel} from '../src/hotel/components/CreateHotel';
import { FacturaVista } from './components/FacturaVista';
import {  CreateUser } from '../src/usuario/components/CreateUser';
import { FormUser } from './usuario/components/FormUser';
import { ReservacionVista } from './components/ReservacionVista';
import { ListUser } from './usuario/components/ListUser';
import { UpdateUser } from './usuario/api/ApiUser';
import { VerHoteles } from './hotel/components/VerHoteles';
import { ListFactura } from './factura/components/ListFactura';




const routes = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      
      {
        path: '/',
        element: <Estructura />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/CreateHotel',
        element: <CreateHotel />,
      },
      {
        path: '/EditHotel',
        element: <CreateHotel />,
      },
      {
        path: '/mostrarHotel',
        element: <VerHoteles/>
      },
      {
        path: '/usuario',
        element: <CreateUser/>
       },           
       {
          path: '/listaUsuarios',
           element: <ListUser/>
        },
        {
          path: '/crearUsuario',
           element: <CreateUser/>
        },
        {
          path: '/editarUsuario',
           element: <UpdateUser/>
        },
        {
          path: '/eliminarUsuario',
           element: <CreateUser/>
        },
       {
        path: '/facturas',
        element: <FacturaVista/>
       },
       {
        path: '/verFacturas',
        element: <ListFactura/>
       },
       {
           path: '/reservacion',
           element: <ReservacionVista/>
       }

    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} ></RouterProvider>
  </React.StrictMode>,
)