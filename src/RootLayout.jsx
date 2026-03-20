import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import Header from './components/header'

export default function RootLayout(props) {
    return (
        <div className="min-h-screen bg-[#EAE4D3] text-[#2B2B2B] flex flex-col">
            <Header />
            <Navbar />
            <main className='flex-1 max-w-[1800px] mx-auto w-full px-6 py-8'>
                {props.children || <Outlet />}
            </main>
        </div>
    )
}
