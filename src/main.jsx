import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import App from './App.jsx'

//Note: this is for example only feel free to change/remove 

//Used for executing queries (and mutations)
const queryClient = new QueryClient()

//Client side routing
const router = createBrowserRouter([
    {
        path: "/", 
        //main component
        Component: App,
        children: [
            {index: true, Component: Home },
            {path: "tanstack/states/:stateId", Component: stateDetail},
            {path: "tanstack/parks/:parkId", Component: parkDetail},
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
