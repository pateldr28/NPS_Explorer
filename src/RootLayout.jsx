import { Outlet } from 'react-router'
import Navbar from './components/navbar'

export default function RootLayout() {
    return (
        <div className="page-container">
            <Navbar />
            <main><Outlet /></main>
        </div>
    )
}
