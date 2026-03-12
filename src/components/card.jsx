export default function Card({ title, children }) {
    return (
        <div className="border border-stone-200 rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-[#2F4F3A] mb-2">
                {title}
            </h3>
            <div className="text-stone-700">
                {children}
            </div>
        </div>
    )
}