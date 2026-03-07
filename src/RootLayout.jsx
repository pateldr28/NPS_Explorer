import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import Header from './components/header'

export default function RootLayout() {
    return (
        <div className="page-container">
            <Header />
            <Navbar />
            <main><Outlet /></main>
        </div>
    )
}
