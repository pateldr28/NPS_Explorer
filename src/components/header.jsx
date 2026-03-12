import OlympicNationalPark from "../images/OlympicNationalPark2.jpg";
export default function Header() {
    return (
        <header className="border-b border-stone-200 bg-cover bg-center"
            style={{ backgroundImage: `url(${OlympicNationalPark})` }}
        >
            <div className="bg-black/40">
                <div className="max-w-6xl mx-auto px-6 py-8">
                    <h1 className="text-4xl font-semibold text-white mb-3">
                        National Park Explorer
                    </h1>
                    <p className="text-white mb-6 max-w-2xl">
                        Discover U.S. National Parks, explore by state,
                        plan trips, and track the parks you've visited.
                    </p>
                    <input type="text" placeholder="Search parks" className="w-full max-w-md px-5 py-3
                    rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#2F4F3A] bg-white/95
                    backdrop-blur-sm" />
                </div>
            </div>
        </header>
    )
}