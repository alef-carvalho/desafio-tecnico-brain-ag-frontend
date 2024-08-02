import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomePage} from "./presentation/pages/HomePage.tsx";
import {FarmPage} from "./presentation/pages/FarmPage.tsx";
import {NotFoundPage} from "./presentation/pages/NotFoundPage.tsx";
import {SnackbarProvider} from "notistack";
import {FarmContextProvider} from "./contexts/FarmContext";
import {FarmerContextProvider} from "./contexts/FarmerContext";
import FarmerStack from "./presentation/stacks/FarmerStack";
import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CultureContextProvider} from "./contexts/CultureContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/farmers",
        element: <FarmerStack/>,
        children: [
            {
                path: ":farmerId",
                element: <FarmPage/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CultureContextProvider>
          <FarmerContextProvider>
              <FarmContextProvider>
                  <SnackbarProvider
                      autoHideDuration={3000}
                      anchorOrigin={{ vertical: "bottom", horizontal: 'center'}}  >
                      <RouterProvider router={router}/>
                  </SnackbarProvider>
              </FarmContextProvider>
          </FarmerContextProvider>
      </CultureContextProvider>
  </React.StrictMode>,
)
