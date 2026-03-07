import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import './index.css'

import RootLayout from './RootLayout'
import Home from './routes/home'
import States from './routes/states'
import ParksInState from './routes/parksInState'
import ParkDetails from './routes/parkDetails'
import Planner from './routes/planner'
import Tracker from './routes/tracker'


import parksInStateLoader from './loaders/parksInStateLoader'
import parkDetailsLoader from './loaders/parkDetailsLoader'

//Note: this is for example only feel free to change/remove 

//Used for executing queries (and mutations)
const queryClient = new QueryClient()

//Client side routing
const router = createBrowserRouter([
    {
        path: '/', 
        //main component
        Component: RootLayout,
        children: [
            {
              index: true, 
              Component: Home
            },
            { 
              path: 'states',
              Component: States
            },
            {
              path: 'states/:stateCode',
              Component: ParksInState,
              loader: parksInStateLoader,
              children: [
                {
                  path: 'parks/:parkCode',
                  Component: ParkDetails,
                  loader: parkDetailsLoader
                }
              ]
            },
            {
              path: 'planner',
              Component: Planner,
              // loader: plannerLoader
            },
            {
              path: 'tracker',
              Component: Tracker,
              // loader: trackerLoader
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>,
)
