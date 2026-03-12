export default function Header() {
    return (
        <header className="bg-[#F8F6EE] border-b border-stone-200">
            <div className="max-w-6xl mx-auto px-6 py-8">
                <h1 className="text-4xl font-semibold text-[#2F4F3A] mb-3">
                    National Park Explorer
                </h1>
                <p className="text-stone-600 mb-6 max-w-2xl">
                    Discover U.S. National Parks, explore parks by state,
                    plan trips, and track the parks you've visited.
                </p>
                <input type="text" placeholder="Search parks" className="w-full max-w-md px-4 py-3
                rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2F4F3A]" />
            </div>
        </header>
    )
}