import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import RootLayout from './RootLayout'
import Home from './routes/home'
import States from './routes/states'
import ParksInState from './routes/parksInState'
import ParkDetails from './routes/parkDetails'
import Planner from './routes/planner'
import Tracker from './routes/tracker'
import store from './redux/store'


import parksInStateLoader from './loaders/parksInStateLoader'
import parkDetailsLoader from './loaders/parkDetailsLoader'
import parkSearchLoader from './loaders/parkSearchLoader'
import SearchParks from './routes/searchParks'
import ErrorPage from './routes/errorPage'

//Note: this is for example only feel free to change/remove 

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
            },
            {
              path:'searchParks/:parkQuery?',
              Component:SearchParks,
              loader:parkSearchLoader,
              ErrorBoundary:ErrorPage
            },
            {
              path: 'parks/:parkCode',
              Component: ParkDetails,
              loader: parkDetailsLoader
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
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
